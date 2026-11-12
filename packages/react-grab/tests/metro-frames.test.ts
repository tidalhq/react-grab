import { afterEach, beforeEach, describe, expect, it } from "vite-plus/test";
import type { StackFrame } from "bippy/source";
import { symbolicateMetroFrames } from "../src/core/metro-frames.js";
import { isMetroBundleUrl } from "../src/utils/is-metro-bundle-url.js";

type FetchStub = (url: string, init: RequestInit) => Promise<Response>;

const METRO_BUNDLE_URL =
  "http://localhost:8081/index.bundle?platform=web&dev=true&hot=false&transform.engine=hermes";

const makeMetroFrame = (functionName = "Text", lineNumber = 39276): StackFrame => ({
  functionName,
  fileName: METRO_BUNDLE_URL,
  lineNumber,
  columnNumber: 46,
});

const makeSourceFrame = (): StackFrame => ({
  functionName: "Widget",
  fileName: "/src/widget.tsx",
  lineNumber: 3,
  columnNumber: 1,
});

interface CapturedRequest {
  url: string;
  body: {
    stack: Array<{
      file: string;
      lineNumber: number | null;
      column: number | null;
      methodName: string;
    }>;
  };
}

const respondWith = (
  stack: unknown[],
  capture?: (request: CapturedRequest) => void,
): typeof globalThis.fetch =>
  ((url: string, init: RequestInit) => {
    capture?.({ url, body: JSON.parse(String(init.body)) });
    return Promise.resolve(
      new Response(JSON.stringify({ stack, codeFrame: null }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
  }) as FetchStub as typeof globalThis.fetch;

let originalFetch: typeof globalThis.fetch;

beforeEach(() => {
  originalFetch = globalThis.fetch;
});

afterEach(() => {
  globalThis.fetch = originalFetch;
});

describe("isMetroBundleUrl", () => {
  it("detects Metro dev bundle URLs", () => {
    expect(isMetroBundleUrl(METRO_BUNDLE_URL)).toBe(true);
    expect(
      isMetroBundleUrl(
        "http://host:8083/node_modules/expo-router/entry.bundle?dev=true&platform=web",
      ),
    ).toBe(true);
  });

  it("ignores non-Metro URLs", () => {
    expect(isMetroBundleUrl("http://localhost:5173/assets/index-AbCd1234.js")).toBe(false);
    expect(isMetroBundleUrl("/src/app.bundle.js")).toBe(false);
    expect(isMetroBundleUrl(undefined)).toBe(false);
  });
});

describe("symbolicateMetroFrames", () => {
  it("issues no request when no frame points at a Metro bundle", async () => {
    let didFetch = false;
    globalThis.fetch = (() => {
      didFetch = true;
      return Promise.reject(new Error("should not fetch"));
    }) as FetchStub as typeof globalThis.fetch;

    const frames = [makeSourceFrame()];
    expect(await symbolicateMetroFrames(frames)).toBe(frames);
    expect(didFetch).toBe(false);
  });

  it("posts only Metro frames to the bundle origin and maps results back by index", async () => {
    let captured: CapturedRequest | undefined;
    globalThis.fetch = respondWith(
      [
        { file: "/repo/components/Text.tsx", lineNumber: 12, column: 4, methodName: "wrong" },
        { file: "/repo/screens/Home.tsx", lineNumber: 40, column: 2, methodName: "wrong" },
      ],
      (request) => {
        captured = request;
      },
    );

    const sourceFrame = makeSourceFrame();
    const frames = [makeMetroFrame("Text", 1), sourceFrame, makeMetroFrame("Home", 2)];
    const result = await symbolicateMetroFrames(frames);

    expect(captured?.url).toBe("http://localhost:8081/symbolicate");
    expect(captured?.body.stack).toEqual([
      { file: METRO_BUNDLE_URL, lineNumber: 1, column: 46, methodName: "Text" },
      { file: METRO_BUNDLE_URL, lineNumber: 2, column: 46, methodName: "Home" },
    ]);
    expect(result[1]).toBe(sourceFrame);
    expect(result[0]).toMatchObject({
      functionName: "Text",
      fileName: "/repo/components/Text.tsx",
      lineNumber: 12,
      columnNumber: 4,
      isSymbolicated: true,
    });
    expect(result[2]).toMatchObject({
      functionName: "Home",
      fileName: "/repo/screens/Home.tsx",
      lineNumber: 40,
      isSymbolicated: true,
    });
  });

  it("keeps frames Metro could not resolve", async () => {
    globalThis.fetch = respondWith([{ file: METRO_BUNDLE_URL, lineNumber: 1, column: 46 }, null]);

    const frames = [makeMetroFrame(), makeMetroFrame("Other")];
    expect(await symbolicateMetroFrames(frames)).toEqual(frames);
  });

  it("returns the original frames when the endpoint fails", async () => {
    globalThis.fetch = (() =>
      Promise.resolve(
        new Response("error", { status: 500 }),
      )) as FetchStub as typeof globalThis.fetch;

    const frames = [makeMetroFrame()];
    expect(await symbolicateMetroFrames(frames)).toEqual(frames);
  });

  it("degrades immediately when the external signal is already aborted", async () => {
    globalThis.fetch = ((_url: string, init: RequestInit) =>
      init.signal?.aborted
        ? Promise.reject(new DOMException("Aborted", "AbortError"))
        : Promise.resolve(new Response("{}"))) as FetchStub as typeof globalThis.fetch;

    const frames = [makeMetroFrame()];
    expect(await symbolicateMetroFrames(frames, AbortSignal.abort())).toEqual(frames);
  });
});
