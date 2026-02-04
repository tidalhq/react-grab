'use strict';

// src/client.ts
var AMI_DEEPLINK_BASE = "ami://new-chat";
var createDeeplinkAgentProvider = () => {
  const send = async function* (context) {
    const combinedPrompt = `${context.prompt}

${context.content.join("\n\n")}`;
    const encodedPrompt = encodeURIComponent(combinedPrompt);
    const deeplinkUrl = `${AMI_DEEPLINK_BASE}?prompt=${encodedPrompt}`;
    window.open(deeplinkUrl, "_self");
    yield "Opened";
  };
  return {
    send,
    checkConnection: async () => true,
    supportsResume: false,
    supportsFollowUp: false,
    undo: void 0,
    redo: void 0,
    dismissButtonText: "Copy"
  };
};
var createAmiAgentProvider = () => {
  return createDeeplinkAgentProvider();
};
var isReactGrabApi = (value) => typeof value === "object" && value !== null && "registerPlugin" in value;
var attachAgent = () => {
  if (typeof window === "undefined") return;
  const provider = createDeeplinkAgentProvider();
  const attach = (api) => {
    const agent = { provider, storage: sessionStorage };
    const plugin = {
      name: "ami-agent",
      actions: [
        {
          id: "edit-with-ami",
          label: "Edit with Ami",
          shortcut: "Enter",
          onAction: (actionContext) => {
            actionContext.enterPromptMode?.(agent);
          },
          agent
        }
      ]
    };
    api.registerPlugin(plugin);
  };
  const existingApi = window.__REACT_GRAB__;
  if (isReactGrabApi(existingApi)) {
    attach(existingApi);
    return;
  }
  window.addEventListener(
    "react-grab:init",
    (event) => {
      if (!(event instanceof CustomEvent)) return;
      if (!isReactGrabApi(event.detail)) return;
      attach(event.detail);
    },
    { once: true }
  );
  const apiAfterListener = window.__REACT_GRAB__;
  if (isReactGrabApi(apiAfterListener)) {
    attach(apiAfterListener);
  }
};
attachAgent();

exports.attachAgent = attachAgent;
exports.createAmiAgentProvider = createAmiAgentProvider;
