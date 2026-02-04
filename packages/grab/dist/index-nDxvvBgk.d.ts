import { StackFrame } from 'bippy/source';
import 'bippy';

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? T[P] extends (...args: unknown[]) => unknown ? T[P] : DeepPartial<T[P]> : T[P];
};
interface Theme {
    /**
     * Globally toggle the entire overlay
     * @default true
     */
    enabled?: boolean;
    /**
     * Base hue (0-360) used to generate colors throughout the interface using HSL color space
     * @default 0
     */
    hue?: number;
    /**
     * The highlight box that appears when hovering over an element before selecting it
     */
    selectionBox?: {
        /**
         * Whether to show the selection highlight
         * @default true
         */
        enabled?: boolean;
    };
    /**
     * The rectangular selection area that appears when clicking and dragging to select multiple elements
     */
    dragBox?: {
        /**
         * Whether to show the drag selection box
         * @default true
         */
        enabled?: boolean;
    };
    /**
     * Brief flash/highlight boxes that appear on elements immediately after they're successfully grabbed/copied
     */
    grabbedBoxes?: {
        /**
         * Whether to show these success flash effects
         * @default true
         */
        enabled?: boolean;
    };
    /**
     * The floating label that follows the cursor showing information about the currently hovered element
     */
    elementLabel?: {
        /**
         * Whether to show the label
         * @default true
         */
        enabled?: boolean;
    };
    /**
     * The crosshair cursor overlay that helps with precise element targeting
     */
    crosshair?: {
        /**
         * Whether to show the crosshair
         * @default true
         */
        enabled?: boolean;
    };
    /**
     * The floating toolbar that allows toggling React Grab activation
     */
    toolbar?: {
        /**
         * Whether to show the toolbar
         * @default true
         */
        enabled?: boolean;
    };
}
interface ReactGrabState {
    isActive: boolean;
    isDragging: boolean;
    isCopying: boolean;
    isPromptMode: boolean;
    isCrosshairVisible: boolean;
    isSelectionBoxVisible: boolean;
    isDragBoxVisible: boolean;
    targetElement: Element | null;
    dragBounds: DragRect | null;
    /**
     * Currently visible grabbed boxes (success flash effects).
     * These are temporary visual indicators shown after elements are grabbed/copied.
     */
    grabbedBoxes: Array<{
        id: string;
        bounds: OverlayBounds;
        createdAt: number;
    }>;
    selectionFilePath: string | null;
    toolbarState: ToolbarState | null;
}
type ElementLabelVariant = "hover" | "processing" | "success";
interface PromptModeContext {
    x: number;
    y: number;
    targetElement: Element | null;
}
interface CrosshairContext {
    x: number;
    y: number;
}
interface ElementLabelContext {
    x: number;
    y: number;
    content: string;
    element?: Element;
    tagName?: string;
    componentName?: string;
    filePath?: string;
    lineNumber?: number;
}
type ActivationKey = string | ((event: KeyboardEvent) => boolean);
interface AgentContext<T = unknown> {
    content: string[];
    prompt: string;
    options?: T;
    sessionId?: string;
}
interface AgentSession {
    id: string;
    context: AgentContext;
    lastStatus: string;
    isStreaming: boolean;
    isFading?: boolean;
    createdAt: number;
    lastUpdatedAt: number;
    position: {
        x: number;
        y: number;
    };
    selectionBounds: OverlayBounds[];
    tagName?: string;
    componentName?: string;
    error?: string;
}
interface AgentProvider<T = any> {
    send: (context: AgentContext<T>, signal: AbortSignal) => AsyncIterable<string>;
    resume?: (sessionId: string, signal: AbortSignal, storage: AgentSessionStorage) => AsyncIterable<string>;
    abort?: (sessionId: string) => Promise<void>;
    supportsResume?: boolean;
    supportsFollowUp?: boolean;
    dismissButtonText?: string;
    checkConnection?: () => Promise<boolean>;
    getCompletionMessage?: () => string | undefined;
    undo?: () => Promise<void>;
    canUndo?: () => boolean;
    redo?: () => Promise<void>;
    canRedo?: () => boolean;
}
interface AgentSessionStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
interface AgentCompleteResult {
    error?: string;
}
interface AgentOptions<T = any> {
    provider?: AgentProvider<T>;
    storage?: AgentSessionStorage | null;
    getOptions?: () => T;
    onStart?: (session: AgentSession, elements: Element[]) => void;
    onStatus?: (status: string, session: AgentSession) => void;
    onComplete?: (session: AgentSession, elements: Element[]) => AgentCompleteResult | void | Promise<AgentCompleteResult | void>;
    onError?: (error: Error, session: AgentSession) => void;
    onResume?: (session: AgentSession) => void;
    onAbort?: (session: AgentSession, elements: Element[]) => void;
    onUndo?: (session: AgentSession, elements: Element[]) => void;
    onDismiss?: (session: AgentSession, elements: Element[]) => void;
}
type ActivationMode = "toggle" | "hold";
interface ActionContextHooks {
    transformHtmlContent: (html: string, elements: Element[]) => Promise<string>;
    transformScreenshot: (blob: Blob, elements: Element[], bounds: ScreenshotBounds) => Promise<Blob>;
    onOpenFile: (filePath: string, lineNumber?: number) => boolean | void;
    transformOpenFileUrl: (url: string, filePath: string, lineNumber?: number) => string;
}
interface ActionContext {
    element: Element;
    elements: Element[];
    filePath?: string;
    lineNumber?: number;
    componentName?: string;
    tagName?: string;
    enterPromptMode?: (agent?: AgentOptions) => void;
    hooks: ActionContextHooks;
    performWithFeedback: (action: () => Promise<boolean>) => Promise<void>;
    hideContextMenu: () => void;
    hideOverlay: () => void;
    showOverlay: () => void;
    cleanup: () => void;
}
interface ContextMenuActionContext extends ActionContext {
    copy?: () => void;
}
interface ContextMenuAction {
    id: string;
    label: string;
    shortcut?: string;
    enabled?: boolean | ((context: ActionContext) => boolean);
    onAction: (context: ContextMenuActionContext) => void | Promise<void>;
    agent?: AgentOptions;
}
interface ActionCycleItem {
    id: string;
    label: string;
    shortcut?: string;
}
interface ActionCycleState {
    items: ActionCycleItem[];
    activeIndex: number | null;
    isVisible: boolean;
}
interface ScreenshotBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface PluginHooks {
    onActivate?: () => void;
    onDeactivate?: () => void;
    onElementHover?: (element: Element) => void;
    onElementSelect?: (element: Element) => void;
    onDragStart?: (startX: number, startY: number) => void;
    onDragEnd?: (elements: Element[], bounds: DragRect) => void;
    onBeforeCopy?: (elements: Element[]) => void | Promise<void>;
    transformCopyContent?: (content: string, elements: Element[]) => string | Promise<string>;
    onAfterCopy?: (elements: Element[], success: boolean) => void;
    onCopySuccess?: (elements: Element[], content: string) => void;
    onCopyError?: (error: Error) => void;
    onStateChange?: (state: ReactGrabState) => void;
    onPromptModeChange?: (isPromptMode: boolean, context: PromptModeContext) => void;
    onSelectionBox?: (visible: boolean, bounds: OverlayBounds | null, element: Element | null) => void;
    onDragBox?: (visible: boolean, bounds: OverlayBounds | null) => void;
    onGrabbedBox?: (bounds: OverlayBounds, element: Element) => void;
    onElementLabel?: (visible: boolean, variant: ElementLabelVariant, context: ElementLabelContext) => void;
    onCrosshair?: (visible: boolean, context: CrosshairContext) => void;
    onContextMenu?: (element: Element, position: {
        x: number;
        y: number;
    }) => void;
    onOpenFile?: (filePath: string, lineNumber?: number) => boolean | void;
    transformHtmlContent?: (html: string, elements: Element[]) => string | Promise<string>;
    transformScreenshot?: (blob: Blob, elements: Element[], bounds: ScreenshotBounds) => Blob | Promise<Blob>;
    transformAgentContext?: (context: AgentContext, elements: Element[]) => AgentContext | Promise<AgentContext>;
    transformActionContext?: (context: ActionContext) => ActionContext;
    transformOpenFileUrl?: (url: string, filePath: string, lineNumber?: number) => string;
    transformSnippet?: (snippet: string, element: Element) => string | Promise<string>;
}
interface PluginConfig {
    theme?: DeepPartial<Theme>;
    options?: SettableOptions;
    actions?: ContextMenuAction[];
    hooks?: PluginHooks;
    cleanup?: () => void;
}
interface Plugin {
    name: string;
    theme?: DeepPartial<Theme>;
    options?: SettableOptions;
    actions?: ContextMenuAction[];
    hooks?: PluginHooks;
    setup?: (api: ReactGrabAPI) => PluginConfig | void;
}
interface Options {
    enabled?: boolean;
    activationMode?: ActivationMode;
    keyHoldDuration?: number;
    allowActivationInsideInput?: boolean;
    maxContextLines?: number;
    activationKey?: ActivationKey;
    getContent?: (elements: Element[]) => Promise<string> | string;
    /**
     * Whether to freeze React state updates while React Grab is active.
     * This prevents UI changes from interfering with element selection.
     * @default true
     */
    freezeReactUpdates?: boolean;
    /**
     * Filter which component names are considered "source" components.
     * Return `true` to include the component, `false` to exclude it.
     * When not provided, all user-authored components are included (default behavior).
     * This affects which components appear in labels, context, and copied output.
     *
     * @example
     * // Only show components matching a pattern
     * componentFilter: (name) => /^(App|Dashboard|Header|Sidebar)/.test(name)
     *
     * @example
     * // Exclude specific components
     * componentFilter: (name) => !["Layout", "Container", "Wrapper"].includes(name)
     */
    componentFilter?: (componentName: string) => boolean;
}
interface SettableOptions extends Options {
    enabled?: never;
}
interface SourceInfo {
    filePath: string;
    lineNumber: number | null;
    componentName: string | null;
}
interface ToolbarState {
    edge: "top" | "bottom" | "left" | "right";
    ratio: number;
    collapsed: boolean;
    enabled: boolean;
}
interface ReactGrabAPI {
    activate: () => void;
    deactivate: () => void;
    toggle: () => void;
    isActive: () => boolean;
    isEnabled: () => boolean;
    setEnabled: (enabled: boolean) => void;
    getToolbarState: () => ToolbarState | null;
    setToolbarState: (state: Partial<ToolbarState>) => void;
    onToolbarStateChange: (callback: (state: ToolbarState) => void) => () => void;
    dispose: () => void;
    copyElement: (elements: Element | Element[]) => Promise<boolean>;
    getSource: (element: Element) => Promise<SourceInfo | null>;
    getState: () => ReactGrabState;
    setOptions: (options: SettableOptions) => void;
    registerPlugin: (plugin: Plugin) => void;
    unregisterPlugin: (name: string) => void;
    getPlugins: () => string[];
    getDisplayName: (element: Element) => string | null;
}
interface OverlayBounds {
    borderRadius: string;
    height: number;
    transform: string;
    width: number;
    x: number;
    y: number;
}
type SelectionLabelStatus = "idle" | "copying" | "copied" | "fading" | "error";
interface SelectionLabelInstance {
    id: string;
    bounds: OverlayBounds;
    boundsMultiple?: OverlayBounds[];
    tagName: string;
    componentName?: string;
    status: SelectionLabelStatus;
    createdAt: number;
    element?: Element;
    elements?: Element[];
    mouseX?: number;
    mouseXOffsetFromCenter?: number;
    mouseXOffsetRatio?: number;
    errorMessage?: string;
}
interface ReactGrabRendererProps {
    selectionVisible?: boolean;
    selectionBounds?: OverlayBounds;
    selectionBoundsMultiple?: OverlayBounds[];
    selectionShouldSnap?: boolean;
    selectionElementsCount?: number;
    selectionFilePath?: string;
    selectionLineNumber?: number;
    selectionTagName?: string;
    selectionComponentName?: string;
    selectionLabelVisible?: boolean;
    selectionLabelStatus?: SelectionLabelStatus;
    selectionActionCycleState?: ActionCycleState;
    labelInstances?: SelectionLabelInstance[];
    dragVisible?: boolean;
    dragBounds?: OverlayBounds;
    grabbedBoxes?: Array<{
        id: string;
        bounds: OverlayBounds;
        createdAt: number;
    }>;
    labelZIndex?: number;
    mouseX?: number;
    mouseY?: number;
    crosshairVisible?: boolean;
    isFrozen?: boolean;
    inputValue?: string;
    isPromptMode?: boolean;
    replyToPrompt?: string;
    hasAgent?: boolean;
    isAgentConnected?: boolean;
    agentSessions?: Map<string, AgentSession>;
    supportsUndo?: boolean;
    supportsFollowUp?: boolean;
    dismissButtonText?: string;
    onRequestAbortSession?: (sessionId: string) => void;
    onAbortSession?: (sessionId: string, confirmed: boolean) => void;
    onDismissSession?: (sessionId: string) => void;
    onUndoSession?: (sessionId: string) => void;
    onFollowUpSubmitSession?: (sessionId: string, prompt: string) => void;
    onAcknowledgeSessionError?: (sessionId: string) => void;
    onRetrySession?: (sessionId: string) => void;
    onShowContextMenuSession?: (sessionId: string) => void;
    onShowContextMenuInstance?: (instanceId: string) => void;
    onLabelInstanceHoverChange?: (instanceId: string, isHovered: boolean) => void;
    onInputChange?: (value: string) => void;
    onInputSubmit?: () => void;
    onInputCancel?: () => void;
    onToggleExpand?: () => void;
    isPendingDismiss?: boolean;
    onConfirmDismiss?: () => void;
    onCancelDismiss?: () => void;
    pendingAbortSessionId?: string | null;
    theme?: Required<Theme>;
    toolbarVisible?: boolean;
    isActive?: boolean;
    isCommentMode?: boolean;
    onToggleActive?: () => void;
    onComment?: () => void;
    enabled?: boolean;
    onToggleEnabled?: () => void;
    shakeCount?: number;
    onToolbarStateChange?: (state: ToolbarState) => void;
    onSubscribeToToolbarStateChanges?: (callback: (state: ToolbarState) => void) => () => void;
    onToolbarSelectHoverChange?: (isHovered: boolean) => void;
    contextMenuPosition?: {
        x: number;
        y: number;
    } | null;
    contextMenuBounds?: OverlayBounds | null;
    contextMenuTagName?: string;
    contextMenuComponentName?: string;
    contextMenuHasFilePath?: boolean;
    actions?: ContextMenuAction[];
    actionContext?: ActionContext;
    onContextMenuDismiss?: () => void;
    onContextMenuHide?: () => void;
}
interface GrabbedBox {
    id: string;
    bounds: OverlayBounds;
    createdAt: number;
    element: Element;
}
interface Rect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
interface DragRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

declare const getStack: (element: Element) => Promise<StackFrame[] | null>;
interface GetElementContextOptions {
    maxLines?: number;
}
declare const getElementContext: (element: Element, options?: GetElementContextOptions) => Promise<string>;

declare const DEFAULT_THEME: Required<Theme>;

interface GenerateSnippetOptions {
    maxLines?: number;
}
declare const generateSnippet: (elements: Element[], options?: GenerateSnippetOptions) => Promise<string[]>;

interface CopyContentOptions {
    onSuccess?: () => void;
    name?: string;
}
declare const copyContent: (content: string, options?: CopyContentOptions) => boolean;

declare const init: (rawOptions?: Options) => ReactGrabAPI;

export { type AgentContext as A, copyContent as B, type CrosshairContext as C, DEFAULT_THEME as D, type ElementLabelVariant as E, type GrabbedBox as G, type Options as O, type Plugin as P, type ReactGrabAPI as R, type SourceInfo as S, type Theme as T, getElementContext as a, generateSnippet as b, type ReactGrabState as c, type ToolbarState as d, type OverlayBounds as e, type DragRect as f, getStack as g, type Rect as h, init as i, type DeepPartial as j, type PromptModeContext as k, type ElementLabelContext as l, type AgentSession as m, type AgentProvider as n, type AgentSessionStorage as o, type AgentOptions as p, type AgentCompleteResult as q, type SettableOptions as r, type ActivationMode as s, type ContextMenuAction as t, type ContextMenuActionContext as u, type ActionContext as v, type ActionContextHooks as w, type PluginConfig as x, type PluginHooks as y, type ReactGrabRendererProps as z };
