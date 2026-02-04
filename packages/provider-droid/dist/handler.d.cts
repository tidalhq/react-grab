import { AgentRunOptions, AgentHandler } from '@react-grab/relay';

interface DroidAgentOptions extends AgentRunOptions {
    autoLevel?: "low" | "medium" | "high";
    model?: string;
    reasoningEffort?: "low" | "medium" | "high";
    workspace?: string;
}
declare const droidAgentHandler: AgentHandler;

export { type DroidAgentOptions, droidAgentHandler };
