import { AgentRunOptions, AgentHandler } from '@react-grab/relay';

interface OpenCodeAgentOptions extends AgentRunOptions {
    model?: string;
    agent?: string;
    directory?: string;
}
declare const openCodeAgentHandler: AgentHandler;

export { type OpenCodeAgentOptions, openCodeAgentHandler };
