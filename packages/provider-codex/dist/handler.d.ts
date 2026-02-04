import { AgentRunOptions, AgentHandler } from '@react-grab/relay';

interface CodexAgentOptions extends AgentRunOptions {
    model?: string;
    workingDirectory?: string;
}
declare const codexAgentHandler: AgentHandler;

export { type CodexAgentOptions, codexAgentHandler };
