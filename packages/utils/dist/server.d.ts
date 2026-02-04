declare const sleep: (ms: number) => Promise<void>;
interface AgentMessage {
    type: "status" | "error" | "done";
    content: string;
}
interface AgentCoreOptions {
    cwd?: string;
    signal?: AbortSignal;
    sessionId?: string;
}
declare const formatSpawnError: (error: Error, commandName: string) => string;

export { type AgentCoreOptions, type AgentMessage, formatSpawnError, sleep };
