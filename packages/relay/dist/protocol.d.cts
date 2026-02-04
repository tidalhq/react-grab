declare const DEFAULT_RELAY_PORT = 4722;
declare const DEFAULT_RECONNECT_INTERVAL_MS = 3000;
declare const HEALTH_CHECK_TIMEOUT_MS = 1000;
declare const POST_KILL_DELAY_MS = 100;
declare const RELAY_TOKEN_PARAM = "token";
declare const COMPLETED_STATUS = "Completed";
interface AgentMessage {
    type: "status" | "error" | "done";
    content: string;
}
interface AgentContext {
    content: string[];
    prompt: string;
    options?: unknown;
    sessionId?: string;
}
interface AgentRunOptions {
    cwd?: string;
    signal?: AbortSignal;
    sessionId?: string;
}
interface AgentHandler {
    agentId: string;
    run: (userPrompt: string, options?: AgentRunOptions) => AsyncGenerator<AgentMessage>;
    abort?: (sessionId: string) => void;
    undo?: () => Promise<void>;
    redo?: () => Promise<void>;
}
interface HandlerRegistrationMessage {
    type: "register-handler";
    agentId: string;
}
interface HandlerUnregisterMessage {
    type: "unregister-handler";
    agentId: string;
}
interface RelayToHandlerMessage {
    type: "invoke-handler";
    method: "run" | "abort" | "undo" | "redo";
    sessionId: string;
    payload?: {
        prompt?: string;
        context?: AgentContext;
    };
}
interface HandlerToRelayMessage {
    type: "agent-status" | "agent-done" | "agent-error";
    sessionId: string;
    agentId: string;
    content?: string;
}
interface BrowserToRelayMessage {
    type: "agent-request" | "agent-abort" | "agent-undo" | "agent-redo" | "health";
    agentId: string;
    sessionId?: string;
    context?: AgentContext;
}
interface RelayToBrowserMessage {
    type: "agent-status" | "agent-done" | "agent-error" | "health" | "handlers";
    agentId?: string;
    sessionId?: string;
    content?: string;
    handlers?: string[];
}
type HandlerMessage = HandlerRegistrationMessage | HandlerUnregisterMessage | HandlerToRelayMessage;
type RelayMessage = RelayToHandlerMessage | RelayToBrowserMessage;

export { type AgentContext, type AgentHandler, type AgentMessage, type AgentRunOptions, type BrowserToRelayMessage, COMPLETED_STATUS, DEFAULT_RECONNECT_INTERVAL_MS, DEFAULT_RELAY_PORT, HEALTH_CHECK_TIMEOUT_MS, type HandlerMessage, type HandlerRegistrationMessage, type HandlerToRelayMessage, type HandlerUnregisterMessage, POST_KILL_DELAY_MS, RELAY_TOKEN_PARAM, type RelayMessage, type RelayToBrowserMessage, type RelayToHandlerMessage };
