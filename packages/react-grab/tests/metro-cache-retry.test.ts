import { afterEach, beforeEach, describe, expect, it, vi } from "vite-plus/test";
import type { StackFrame } from "bippy/source";

const METRO_BUNDLE_URL = "http://localhost:8081/index.bundle?platform=web&dev=true";
const metroFrame: StackFrame = {
  functionName: "Widget",
  fileName: METRO_BUNDLE_URL,
  lineNumber: 100,
  columnNumber: 4,
};
const fiber = {
  tag: 0,
  type: () => null,
  alternate: null,
  _debugOwner: null,
  _debugStack: null,
};

vi.mock("bippy", () => ({
  isInstrumentationActive: () => true,
  getDisplayName: () => "Widget",
  getLatestFiber: (currentFiber: unknown) => currentFiber,
  isCompositeFiber: () => true,
  traverseFiber: () => null,
}));

vi.mock("bippy/source", async (importOriginal) => ({
  ...(await importOriginal<typeof import("bippy/source")>()),
  getOwnerStack: () => Promise.resolve([{ ...metroFrame }]),
  getSource: () => Promise.resolve({ ...metroFrame }),
}));

vi.mock("../src/core/element-adapter.js", () => ({
  getElementAdapter: () => null,
  getReactFiberForElement: () => fiber,
}));

const { getStack, resolveSource } = await import("../src/core/context.js");

let originalFetch: typeof globalThis.fetch;
let isMetroAvailable = false;
let symbolicateCallCount = 0;

beforeEach(() => {
  originalFetch = globalThis.fetch;
  isMetroAvailable = false;
  symbolicateCallCount = 0;
  globalThis.fetch = (() => {
    symbolicateCallCount += 1;
    if (!isMetroAvailable) return Promise.resolve(new Response("down", { status: 503 }));
    return Promise.resolve(
      new Response(
        JSON.stringify({ stack: [{ file: "/repo/src/widget.tsx", lineNumber: 7, column: 2 }] }),
      ),
    );
  }) as typeof globalThis.fetch;
});

afterEach(() => {
  globalThis.fetch = originalFetch;
});

const createElement = (): Element => ({ ownerDocument: {} }) as unknown as Element;

const flushCacheEviction = () => new Promise((resolve) => setTimeout(resolve, 0));

describe("Metro symbolication caching", () => {
  it("retries the stack after a transient /symbolicate failure", async () => {
    const element = createElement();

    expect((await getStack(element))?.[0].fileName).toBe(METRO_BUNDLE_URL);
    await flushCacheEviction();

    isMetroAvailable = true;
    expect((await getStack(element))?.[0]).toMatchObject({
      fileName: "/repo/src/widget.tsx",
      functionName: "Widget",
      isSymbolicated: true,
    });

    await flushCacheEviction();
    const callsAfterSuccess = symbolicateCallCount;
    await getStack(element);
    expect(symbolicateCallCount).toBe(callsAfterSuccess);
  });

  it("retries the fiber source after a transient /symbolicate failure", async () => {
    const element = createElement();

    expect((await resolveSource(element))?.filePath).not.toBe("/repo/src/widget.tsx");
    await flushCacheEviction();

    isMetroAvailable = true;
    expect(await resolveSource(element)).toMatchObject({
      filePath: "/repo/src/widget.tsx",
      lineNumber: 7,
    });
  });
});
