import { test, expect } from "./fixtures.js";

interface ComponentFilterOptions {
  maxContextLines?: number;
  componentFilter?: (componentName: string) => boolean;
}

interface ReactGrabApi {
  setOptions: (options: ComponentFilterOptions) => void;
}

declare global {
  interface Window {
    __REACT_GRAB__?: ReactGrabApi;
  }
}

test.describe("Element Context Fallback", () => {
  test.describe("React Elements", () => {
    test("should include component names in clipboard for React elements", async ({
      reactGrab,
    }) => {
      await reactGrab.activate();

      await reactGrab.hoverElement("[data-testid='todo-list'] h1");
      await reactGrab.waitForSelectionBox();
      await reactGrab.clickElement("[data-testid='todo-list'] h1");

      const clipboard = await reactGrab.getClipboardContent();
      expect(clipboard).toContain("TodoList");
    });

    test("should include file-only stack lines for filtered components", async ({
      reactGrab,
    }) => {
      await reactGrab.page.evaluate(() => {
        window.__REACT_GRAB__?.setOptions({
          maxContextLines: 20,
          // filter out StackLayerB
          componentFilter: (componentName) => componentName !== "StackLayerB",
        });
      });

      await reactGrab.activate();

      await reactGrab.hoverElement("[data-testid='stack-filter-button']");
      await reactGrab.waitForSelectionBox();
      await reactGrab.clickElement("[data-testid='stack-filter-button']");

      const clipboardContent = await reactGrab.getClipboardContent();
      expect(clipboardContent).toContain("<button");
      expect(clipboardContent).toContain("Stack Filter Button");

      const stackContextLines = clipboardContent
        .split("\n")
        .filter((line) => line.startsWith("  in "))
        .map((line) => line.trim());
      expect(stackContextLines).toMatchObject([
        "in StackLayerC (at /src/App.tsx)",
        "in StackLayerA (at /src/App.tsx)",
      ]);
      expect(stackContextLines.length).toBeGreaterThan(1);
      expect(
        stackContextLines.some((line) => line.includes("StackLayerB")),
      ).toBe(false);
      expect(stackContextLines.some((line) => !line.includes("(at"))).toBe(
        false,
      );
      expect(
        stackContextLines.some((line) => line.includes("StackLayerA")),
      ).toBe(true);
      expect(
        stackContextLines.some((line) => line.includes("StackLayerC")),
      ).toBe(true);
      expect(stackContextLines.some((line) => line.includes("App (at"))).toBe(
        false,
      );
    });

    test("should include HTML preview with tag and content", async ({
      reactGrab,
    }) => {
      await reactGrab.activate();

      await reactGrab.hoverElement("[data-testid='main-title']");
      await reactGrab.waitForSelectionBox();
      await reactGrab.clickElement("[data-testid='main-title']");

      const clipboard = await reactGrab.getClipboardContent();
      expect(clipboard).toContain("<h1");
      expect(clipboard).toContain("React Grab");
    });

    test("should include nested component names for deeply nested elements", async ({
      reactGrab,
    }) => {
      await reactGrab.activate();

      await reactGrab.hoverElement("[data-testid='nested-button']");
      await reactGrab.waitForSelectionBox();
      await reactGrab.clickElement("[data-testid='nested-button']");

      const clipboard = await reactGrab.getClipboardContent();
      expect(clipboard).toContain("NestedCard");
    });
  });

  test.describe("Non-React Elements Fallback", () => {
    test("should fallback to HTML for plain DOM elements without React fiber", async ({
      reactGrab,
    }) => {
      await reactGrab.page.evaluate(() => {
        const plainElement = document.createElement("div");
        plainElement.id = "plain-dom-element";
        plainElement.className = "test-class";
        plainElement.textContent = "Plain DOM content";
        document.body.appendChild(plainElement);
      });

      await reactGrab.activate();

      await reactGrab.hoverElement("#plain-dom-element");
      await reactGrab.waitForSelectionBox();
      await reactGrab.clickElement("#plain-dom-element");

      const clipboard = await reactGrab.getClipboardContent();
      expect(clipboard).toContain("plain-dom-element");
      expect(clipboard).toContain("Plain DOM content");
    });

    test("should include priority attrs for SVG elements", async ({
      reactGrab,
    }) => {
      await reactGrab.page.evaluate(() => {
        const svgElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg",
        );
        svgElement.id = "test-svg-icon";
        svgElement.setAttribute("class", "icon-class");
        svgElement.setAttribute("aria-label", "Close the modal dialog");
        svgElement.setAttribute("viewBox", "0 0 24 24");
        svgElement.style.width = "50px";
        svgElement.style.height = "50px";
        document.body.appendChild(svgElement);
      });

      await reactGrab.activate();

      await reactGrab.hoverElement("#test-svg-icon");
      await reactGrab.waitForSelectionBox();
      await reactGrab.clickElement("#test-svg-icon");

      const clipboard = await reactGrab.getClipboardContent();
      expect(clipboard).toContain("<svg");
      expect(clipboard).toContain('id="test-svg-icon"');
      expect(clipboard).toContain('class="icon-class"');
      expect(clipboard).toContain('aria-label="Close the modal dialog"');
      expect(clipboard).not.toContain("viewBox");
    });

    test("should truncate long outerHTML to max length", async ({
      reactGrab,
    }) => {
      await reactGrab.page.evaluate(() => {
        const longElement = document.createElement("div");
        longElement.id = "long-dom-element";
        longElement.className = "a".repeat(300);
        longElement.textContent = "b".repeat(300);
        document.body.appendChild(longElement);
      });

      await reactGrab.activate();

      await reactGrab.hoverElement("#long-dom-element");
      await reactGrab.waitForSelectionBox();
      await reactGrab.clickElement("#long-dom-element");

      const clipboard = await reactGrab.getClipboardContent();
      expect(clipboard).toContain("long-dom-element");
      expect(clipboard.length).toBeLessThanOrEqual(510);
    });
  });
});
