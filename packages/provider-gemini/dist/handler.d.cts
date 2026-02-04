import { AgentRunOptions, AgentHandler } from '@react-grab/relay';

interface GeminiAgentOptions extends AgentRunOptions {
    model?: string;
    includeDirectories?: string;
}
declare const geminiAgentHandler: AgentHandler;

export { type GeminiAgentOptions, geminiAgentHandler };
