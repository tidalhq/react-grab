import { AgentRunOptions, AgentHandler } from '@react-grab/relay';

interface AmpAgentOptions extends AgentRunOptions {
}
declare const ampAgentHandler: AgentHandler;

export { type AmpAgentOptions, ampAgentHandler };
