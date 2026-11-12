import type { StackFrame } from "bippy/source";
import { SYMBOLICATION_TIMEOUT_MS } from "../constants.js";
import { isMetroBundleUrl } from "../utils/is-metro-bundle-url.js";

interface MetroRequestFrame {
  file: string;
  lineNumber: number | null;
  column: number | null;
  methodName: string;
}

interface UsableMetroFrame {
  file: string;
  lineNumber: number | null;
  column: number | null;
}

const extractUsableMetroFrame = (frame: unknown): UsableMetroFrame | null => {
  if (typeof frame !== "object" || frame === null) return null;
  if (!("file" in frame) || typeof frame.file !== "string" || !frame.file) return null;
  if (isMetroBundleUrl(frame.file)) return null;
  return {
    file: frame.file,
    lineNumber:
      "lineNumber" in frame && typeof frame.lineNumber === "number" ? frame.lineNumber : null,
    column: "column" in frame && typeof frame.column === "number" ? frame.column : null,
  };
};

const extractResponseStack = (body: unknown): unknown[] | null => {
  if (typeof body !== "object" || body === null) return null;
  if (!("stack" in body) || !Array.isArray(body.stack)) return null;
  return body.stack;
};

// Metro (React Native / Expo web) serves one huge dev bundle whose source map is
// often 100MB+, so bippy's in-browser source-map resolution cannot finish within
// the source-fetch timeout. Metro's dev server already holds that map in memory
// and exposes POST /symbolicate, which resolves bundle positions in milliseconds.
export const symbolicateMetroFrames = async (
  frames: StackFrame[],
  externalSignal?: AbortSignal,
): Promise<StackFrame[]> => {
  const metroFrameIndices: number[] = [];
  const requestFrames: MetroRequestFrame[] = [];

  for (let frameIndex = 0; frameIndex < frames.length; frameIndex++) {
    const frame = frames[frameIndex];
    if (!frame.fileName || !isMetroBundleUrl(frame.fileName)) continue;

    metroFrameIndices.push(frameIndex);
    requestFrames.push({
      file: frame.fileName,
      lineNumber: frame.lineNumber ?? null,
      column: frame.columnNumber ?? null,
      methodName: frame.functionName ?? "<unknown>",
    });
  }

  if (requestFrames.length === 0) return frames;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SYMBOLICATION_TIMEOUT_MS);
  const handleExternalAbort = () => controller.abort();
  if (externalSignal?.aborted) controller.abort();
  externalSignal?.addEventListener("abort", handleExternalAbort);

  try {
    const symbolicateUrl = new URL("/symbolicate", requestFrames[0].file).href;
    const response = await fetch(symbolicateUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stack: requestFrames }),
      priority: "high",
      signal: controller.signal,
    });

    if (!response.ok) return frames;

    const responseStack = extractResponseStack(await response.json());
    if (!responseStack) return frames;
    const symbolicatedFrames = [...frames];

    for (let resultIndex = 0; resultIndex < metroFrameIndices.length; resultIndex++) {
      const metroFrame = extractUsableMetroFrame(responseStack[resultIndex]);
      if (!metroFrame) continue;

      const originalFrameIndex = metroFrameIndices[resultIndex];
      // Keep the fiber-derived functionName: Metro's method names come from the
      // source map's names table and are frequently wrong for React frames.
      symbolicatedFrames[originalFrameIndex] = {
        ...frames[originalFrameIndex],
        fileName: metroFrame.file,
        lineNumber: metroFrame.lineNumber ?? undefined,
        columnNumber: metroFrame.column ?? undefined,
        isSymbolicated: true,
      };
    }

    return symbolicatedFrames;
  } catch {
    return frames;
  } finally {
    clearTimeout(timeout);
    externalSignal?.removeEventListener("abort", handleExternalAbort);
  }
};
