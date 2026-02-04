import { P as Plugin, R as ReactGrabAPI } from './index-nDxvvBgk.js';
export { v as ActionContext, w as ActionContextHooks, s as ActivationMode, q as AgentCompleteResult, A as AgentContext, p as AgentOptions, n as AgentProvider, m as AgentSession, o as AgentSessionStorage, t as ContextMenuAction, u as ContextMenuActionContext, C as CrosshairContext, D as DEFAULT_THEME, j as DeepPartial, f as DragRect, l as ElementLabelContext, E as ElementLabelVariant, G as GrabbedBox, O as Options, e as OverlayBounds, x as PluginConfig, y as PluginHooks, k as PromptModeContext, c as ReactGrabState, h as Rect, r as SettableOptions, S as SourceInfo, T as Theme, d as ToolbarState, a as formatElementInfo, b as generateSnippet, g as getStack, i as init } from './index-nDxvvBgk.js';
export { renderDesignSystemPreview } from './design-system.js';
export { isInstrumentationActive } from 'bippy';
import 'bippy/source';

declare const screenshotPlugin: Plugin;

declare const copyHtmlPlugin: Plugin;

declare const openPlugin: Plugin;

declare const commentPlugin: Plugin;

interface ElementBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
declare const combineBounds: (boundsList: ElementBounds[]) => ElementBounds;
declare const captureElementScreenshot: (bounds: ElementBounds) => Promise<Blob>;
declare const copyImageToClipboard: (blob: Blob) => Promise<boolean>;

declare const isScreenshotSupported: () => boolean;

declare global {
    interface Window {
        __REACT_GRAB__?: ReactGrabAPI;
    }
}
declare const getGlobalApi: () => ReactGrabAPI | null;
declare const setGlobalApi: (api: ReactGrabAPI | null) => void;

export { type ElementBounds, Plugin, ReactGrabAPI, captureElementScreenshot, combineBounds, commentPlugin, copyHtmlPlugin, copyImageToClipboard, getGlobalApi, isScreenshotSupported, openPlugin, screenshotPlugin, setGlobalApi };
