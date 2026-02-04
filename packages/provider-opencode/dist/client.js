// ../relay/dist/client.js
var DEFAULT_RELAY_PORT = 4722;
var DEFAULT_RECONNECT_INTERVAL_MS = 3e3;
var RELAY_TOKEN_PARAM = "token";
var createRelayClient = (options = {}) => {
  const serverUrl = options.serverUrl ?? `ws://localhost:${DEFAULT_RELAY_PORT}`;
  const autoReconnect = options.autoReconnect ?? true;
  const reconnectIntervalMs = options.reconnectIntervalMs ?? DEFAULT_RECONNECT_INTERVAL_MS;
  const token = options.token;
  let webSocketConnection = null;
  let isConnectedState = false;
  let availableHandlers = [];
  let reconnectTimeoutId = null;
  let pendingConnectionPromise = null;
  let pendingConnectionReject = null;
  let isIntentionalDisconnect = false;
  const messageCallbacks = /* @__PURE__ */ new Set();
  const handlersChangeCallbacks = /* @__PURE__ */ new Set();
  const connectionChangeCallbacks = /* @__PURE__ */ new Set();
  const scheduleReconnect = () => {
    if (!autoReconnect || reconnectTimeoutId || isIntentionalDisconnect) return;
    reconnectTimeoutId = setTimeout(() => {
      reconnectTimeoutId = null;
      connect().catch(() => {
      });
    }, reconnectIntervalMs);
  };
  const handleMessage = (event) => {
    try {
      const message = JSON.parse(event.data);
      if (message.type === "handlers" && message.handlers) {
        availableHandlers = message.handlers;
        for (const callback of handlersChangeCallbacks) {
          callback(availableHandlers);
        }
      }
      for (const callback of messageCallbacks) {
        callback(message);
      }
    } catch {
    }
  };
  const connect = () => {
    if (webSocketConnection?.readyState === WebSocket.OPEN) {
      return Promise.resolve();
    }
    if (pendingConnectionPromise) {
      return pendingConnectionPromise;
    }
    isIntentionalDisconnect = false;
    pendingConnectionPromise = new Promise((resolve, reject) => {
      pendingConnectionReject = reject;
      const connectionUrl = token ? `${serverUrl}?${RELAY_TOKEN_PARAM}=${encodeURIComponent(token)}` : serverUrl;
      webSocketConnection = new WebSocket(connectionUrl);
      webSocketConnection.onopen = () => {
        pendingConnectionPromise = null;
        pendingConnectionReject = null;
        isConnectedState = true;
        for (const callback of connectionChangeCallbacks) {
          callback(true);
        }
        resolve();
      };
      webSocketConnection.onmessage = handleMessage;
      webSocketConnection.onclose = () => {
        if (pendingConnectionReject) {
          pendingConnectionReject(new Error("WebSocket connection closed"));
          pendingConnectionReject = null;
        }
        pendingConnectionPromise = null;
        isConnectedState = false;
        availableHandlers = [];
        for (const callback of handlersChangeCallbacks) {
          callback(availableHandlers);
        }
        for (const callback of connectionChangeCallbacks) {
          callback(false);
        }
        scheduleReconnect();
      };
      webSocketConnection.onerror = () => {
        pendingConnectionPromise = null;
        pendingConnectionReject = null;
        isConnectedState = false;
        reject(new Error("WebSocket connection failed"));
      };
    });
    return pendingConnectionPromise;
  };
  const disconnect = () => {
    isIntentionalDisconnect = true;
    if (reconnectTimeoutId) {
      clearTimeout(reconnectTimeoutId);
      reconnectTimeoutId = null;
    }
    if (pendingConnectionReject) {
      pendingConnectionReject(new Error("Connection aborted"));
      pendingConnectionReject = null;
    }
    pendingConnectionPromise = null;
    webSocketConnection?.close();
    webSocketConnection = null;
    isConnectedState = false;
    availableHandlers = [];
  };
  const isConnected = () => isConnectedState;
  const sendMessage = (message) => {
    if (webSocketConnection?.readyState === WebSocket.OPEN) {
      webSocketConnection.send(JSON.stringify(message));
      return true;
    }
    return false;
  };
  const sendAgentRequest = (agentId, context) => {
    return sendMessage({
      type: "agent-request",
      agentId,
      sessionId: context.sessionId,
      context
    });
  };
  const abortAgent = (agentId, sessionId) => {
    sendMessage({
      type: "agent-abort",
      agentId,
      sessionId
    });
  };
  const undoAgent = (agentId, sessionId) => {
    return sendMessage({
      type: "agent-undo",
      agentId,
      sessionId
    });
  };
  const redoAgent = (agentId, sessionId) => {
    return sendMessage({
      type: "agent-redo",
      agentId,
      sessionId
    });
  };
  const onMessage = (callback) => {
    messageCallbacks.add(callback);
    return () => messageCallbacks.delete(callback);
  };
  const onHandlersChange = (callback) => {
    handlersChangeCallbacks.add(callback);
    return () => handlersChangeCallbacks.delete(callback);
  };
  const onConnectionChange = (callback) => {
    connectionChangeCallbacks.add(callback);
    queueMicrotask(() => {
      if (connectionChangeCallbacks.has(callback)) {
        callback(isConnectedState);
      }
    });
    return () => connectionChangeCallbacks.delete(callback);
  };
  const getAvailableHandlers = () => availableHandlers;
  return {
    connect,
    disconnect,
    isConnected,
    sendAgentRequest,
    abortAgent,
    undoAgent,
    redoAgent,
    onMessage,
    onHandlersChange,
    onConnectionChange,
    getAvailableHandlers
  };
};
var createRelayAgentProvider = (options) => {
  const { relayClient, agentId } = options;
  const checkConnection = async () => {
    if (!relayClient.isConnected()) {
      try {
        await relayClient.connect();
      } catch {
        return false;
      }
    }
    return relayClient.getAvailableHandlers().includes(agentId);
  };
  const send = async function* (context, signal) {
    if (signal.aborted) {
      throw new DOMException("Aborted", "AbortError");
    }
    yield "Connecting\u2026";
    const sessionId = context.sessionId ?? `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const contextWithSession = {
      ...context,
      sessionId
    };
    const messageQueue = [];
    let resolveNextMessage = null;
    let rejectNextMessage = null;
    let isDone = false;
    let errorMessage = null;
    const handleAbort = () => {
      relayClient.abortAgent(agentId, sessionId);
      isDone = true;
      if (resolveNextMessage) {
        resolveNextMessage({ value: void 0, done: true });
        resolveNextMessage = null;
        rejectNextMessage = null;
      }
    };
    signal.addEventListener("abort", handleAbort, { once: true });
    const handleConnectionChange = (connected) => {
      if (!connected && !isDone) {
        errorMessage = "Relay connection lost";
        isDone = true;
        if (rejectNextMessage) {
          rejectNextMessage(new Error(errorMessage));
          resolveNextMessage = null;
          rejectNextMessage = null;
        }
      }
    };
    const unsubscribeConnection = relayClient.onConnectionChange(
      handleConnectionChange
    );
    const unsubscribeMessage = relayClient.onMessage((message) => {
      if (message.sessionId !== sessionId) return;
      if (message.type === "agent-status" && message.content) {
        messageQueue.push(message.content);
        if (resolveNextMessage) {
          const nextMessage = messageQueue.shift();
          if (nextMessage !== void 0) {
            resolveNextMessage({ value: nextMessage, done: false });
            resolveNextMessage = null;
            rejectNextMessage = null;
          }
        }
      } else if (message.type === "agent-done") {
        isDone = true;
        if (resolveNextMessage) {
          resolveNextMessage({ value: void 0, done: true });
          resolveNextMessage = null;
          rejectNextMessage = null;
        }
      } else if (message.type === "agent-error") {
        errorMessage = message.content ?? "Unknown error";
        isDone = true;
        if (rejectNextMessage) {
          rejectNextMessage(new Error(errorMessage));
          resolveNextMessage = null;
          rejectNextMessage = null;
        }
      }
    });
    if (!relayClient.isConnected()) {
      unsubscribeConnection();
      unsubscribeMessage();
      signal.removeEventListener("abort", handleAbort);
      throw new Error("Relay connection is not open");
    }
    const didSendRequest = relayClient.sendAgentRequest(
      agentId,
      contextWithSession
    );
    if (!didSendRequest) {
      unsubscribeConnection();
      unsubscribeMessage();
      signal.removeEventListener("abort", handleAbort);
      throw new Error("Failed to send agent request: connection not open");
    }
    try {
      while (true) {
        if (messageQueue.length > 0) {
          const next = messageQueue.shift();
          if (next !== void 0) {
            yield next;
          }
          continue;
        }
        if (isDone || signal.aborted) {
          break;
        }
        const result = await new Promise(
          (resolve, reject) => {
            resolveNextMessage = resolve;
            rejectNextMessage = reject;
          }
        );
        if (result.done) break;
        yield result.value;
      }
      if (errorMessage) {
        throw new Error(errorMessage);
      }
    } finally {
      signal.removeEventListener("abort", handleAbort);
      unsubscribeConnection();
      unsubscribeMessage();
    }
  };
  const abort = async (sessionId) => {
    relayClient.abortAgent(agentId, sessionId);
  };
  const waitForOperationResponse = (sessionId) => {
    return new Promise((resolve, reject) => {
      let didCleanup = false;
      const cleanup = () => {
        if (didCleanup) return;
        didCleanup = true;
        unsubscribeMessage();
        unsubscribeConnection();
      };
      const unsubscribeMessage = relayClient.onMessage((message) => {
        if (message.sessionId !== sessionId) return;
        cleanup();
        if (message.type === "agent-done") {
          resolve();
        } else if (message.type === "agent-error") {
          reject(new Error(message.content ?? "Operation failed"));
        }
      });
      const unsubscribeConnection = relayClient.onConnectionChange(
        (connected) => {
          if (!connected) {
            cleanup();
            reject(
              new Error("Connection lost while waiting for operation response")
            );
          }
        }
      );
    });
  };
  const undo = async () => {
    const sessionId = `undo-${agentId}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const didSend = relayClient.undoAgent(agentId, sessionId);
    if (!didSend) {
      throw new Error("Failed to send undo request: connection not open");
    }
    return waitForOperationResponse(sessionId);
  };
  const redo = async () => {
    const sessionId = `redo-${agentId}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const didSend = relayClient.redoAgent(agentId, sessionId);
    if (!didSend) {
      throw new Error("Failed to send redo request: connection not open");
    }
    return waitForOperationResponse(sessionId);
  };
  return {
    send,
    abort,
    undo,
    redo,
    checkConnection,
    supportsResume: true,
    supportsFollowUp: true
  };
};
var defaultRelayClient = null;
var getDefaultRelayClient = () => {
  if (typeof window === "undefined") {
    return null;
  }
  if (window.__REACT_GRAB_RELAY__) {
    defaultRelayClient = window.__REACT_GRAB_RELAY__;
    return defaultRelayClient;
  }
  if (!defaultRelayClient) {
    defaultRelayClient = createRelayClient();
    window.__REACT_GRAB_RELAY__ = defaultRelayClient;
  }
  return defaultRelayClient;
};

// src/client.ts
var AGENT_ID = "opencode";
var isReactGrabApi = (value) => typeof value === "object" && value !== null && "registerPlugin" in value;
var createOpenCodeAgentProvider = (providerOptions = {}) => {
  const relayClient = providerOptions.relayClient ?? getDefaultRelayClient();
  if (!relayClient) {
    throw new Error("RelayClient is required in browser environments");
  }
  return createRelayAgentProvider({
    relayClient,
    agentId: AGENT_ID
  });
};
var attachAgent = async () => {
  if (typeof window === "undefined") return;
  const relayClient = getDefaultRelayClient();
  if (!relayClient) return;
  try {
    await relayClient.connect();
  } catch {
    return;
  }
  const provider = createRelayAgentProvider({
    relayClient,
    agentId: AGENT_ID
  });
  const attach = (api) => {
    const agent = { provider, storage: sessionStorage };
    const plugin = {
      name: "opencode-agent",
      actions: [
        {
          id: "edit-with-opencode",
          label: "Edit with OpenCode",
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

export { attachAgent, createOpenCodeAgentProvider };
