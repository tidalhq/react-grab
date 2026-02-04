declare const CONNECTION_CHECK_TTL_MS = 5000;
declare const STORAGE_KEY = "react-grab:agent-sessions";
interface SSEEvent {
    eventType: string;
    data: string;
}
declare const parseSSEEvent: (eventBlock: string) => SSEEvent;
declare const streamSSE: (stream: ReadableStream<Uint8Array>, signal: AbortSignal) => AsyncGenerator<string, void, unknown>;
interface StoredAgentContext {
    content: string[];
    prompt: string;
    options?: unknown;
    sessionId?: string;
}
declare const getStoredAgentContext: (storage: {
    getItem: (key: string) => string | null;
}, sessionId: string, storageKey?: string) => StoredAgentContext;
interface StreamAgentStatusFromServerOptions {
    serverUrl: string;
    completedStatus: string;
    agentPath?: string;
    abortPath?: (sessionId: string) => string;
    pollIntervalMs?: number;
}
declare const streamAgentStatusFromServer: <TContext extends {
    sessionId?: string;
}>(options: StreamAgentStatusFromServerOptions, context: TContext, signal: AbortSignal) => AsyncGenerator<string, void, unknown>;
declare const createCachedConnectionChecker: (checkConnection: () => Promise<boolean>, ttlMs?: number) => (() => Promise<boolean>);

export { CONNECTION_CHECK_TTL_MS, type SSEEvent, STORAGE_KEY, type StoredAgentContext, type StreamAgentStatusFromServerOptions, createCachedConnectionChecker, getStoredAgentContext, parseSSEEvent, streamAgentStatusFromServer, streamSSE };
