"use client";
/**
 * @license MIT
 *
 * Copyright (c) 2025 Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/rdt-hook-BvBEbB9n.js
var e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _;
var init_rdt_hook_BvBEbB9n = __esm({
  "../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/rdt-hook-BvBEbB9n.js"() {
    "use strict";
    e = `0.5.30`;
    t = `bippy-${e}`;
    n = Object.defineProperty;
    r = Object.prototype.hasOwnProperty;
    i = () => {
    };
    a = (e2) => {
      try {
        let t2 = Function.prototype.toString.call(e2);
        t2.indexOf(`^_^`) > -1 && setTimeout(() => {
          throw Error(`React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build`);
        });
      } catch {
      }
    };
    o = (e2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) => !!(e2 && `getFiberRoots` in e2);
    s = false;
    l = (e2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) => s ? true : (e2 && typeof e2.inject == `function` && (c = e2.inject.toString()), !!c?.includes(`(injected)`));
    u = /* @__PURE__ */ new Set();
    d = /* @__PURE__ */ new Set();
    f = (e2) => {
      let r3 = /* @__PURE__ */ new Map(), o3 = 0, s3 = { _instrumentationIsActive: false, _instrumentationSource: t, checkDCE: a, hasUnsupportedRendererAttached: false, inject(e3) {
        let t2 = ++o3;
        return r3.set(t2, e3), d.add(e3), s3._instrumentationIsActive || (s3._instrumentationIsActive = true, u.forEach((e4) => e4())), t2;
      }, on: i, onCommitFiberRoot: i, onCommitFiberUnmount: i, onPostCommitFiberRoot: i, renderers: r3, supportsFiber: true, supportsFlight: true };
      try {
        n(globalThis, `__REACT_DEVTOOLS_GLOBAL_HOOK__`, { configurable: true, enumerable: true, get() {
          return s3;
        }, set(t3) {
          if (t3 && typeof t3 == `object`) {
            let n2 = s3.renderers;
            s3 = t3, n2.size > 0 && (n2.forEach((e3, n3) => {
              d.add(e3), t3.renderers.set(n3, e3);
            }), p(e2));
          }
        } });
        let t2 = window.hasOwnProperty, r4 = false;
        n(window, `hasOwnProperty`, { configurable: true, value: function(...e3) {
          try {
            if (!r4 && e3[0] === `__REACT_DEVTOOLS_GLOBAL_HOOK__`) return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ = void 0, r4 = true, -0;
          } catch {
          }
          return t2.apply(this, e3);
        }, writable: true });
      } catch {
        p(e2);
      }
      return s3;
    };
    p = (e2) => {
      e2 && u.add(e2);
      try {
        let n2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!n2) return;
        if (!n2._instrumentationSource) {
          n2.checkDCE = a, n2.supportsFiber = true, n2.supportsFlight = true, n2.hasUnsupportedRendererAttached = false, n2._instrumentationSource = t, n2._instrumentationIsActive = false;
          let e3 = o(n2);
          if (e3 || (n2.on = i), n2.renderers.size) {
            n2._instrumentationIsActive = true, u.forEach((e4) => e4());
            return;
          }
          let r3 = n2.inject, c3 = l(n2);
          if (c3 && !e3) {
            s = true;
            let e4 = n2.inject({ scheduleRefresh() {
            } });
            e4 && (n2._instrumentationIsActive = true);
          }
          n2.inject = (e4) => {
            let t2 = r3(e4);
            return d.add(e4), c3 && n2.renderers.set(t2, e4), n2._instrumentationIsActive = true, u.forEach((e5) => e5()), t2;
          };
        }
        (n2.renderers.size || n2._instrumentationIsActive || l()) && e2?.();
      } catch {
      }
    };
    m = () => r.call(globalThis, `__REACT_DEVTOOLS_GLOBAL_HOOK__`);
    h = (e2) => m() ? (p(e2), globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) : f(e2);
    g = () => !!(typeof window < `u` && (window.document?.createElement || window.navigator?.product === `ReactNative`));
    _ = () => {
      try {
        g() && h();
      } catch {
      }
    };
  }
});

// ../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/install-hook-only-TrTYr6LK.js
var init_install_hook_only_TrTYr6LK = __esm({
  "../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/install-hook-only-TrTYr6LK.js"() {
    "use strict";
    init_rdt_hook_BvBEbB9n();
    _();
  }
});

// ../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/core-DrcMh8Kr.js
function N(e2, t2, n2 = false) {
  if (!e2) return null;
  let r3 = t2(e2);
  if (r3 instanceof Promise) return (async () => {
    if (await r3 === true) return e2;
    let i3 = n2 ? e2.return : e2.child;
    for (; i3; ) {
      let e3 = await F(i3, t2, n2);
      if (e3) return e3;
      i3 = n2 ? null : i3.sibling;
    }
    return null;
  })();
  if (r3 === true) return e2;
  let i2 = n2 ? e2.return : e2.child;
  for (; i2; ) {
    let e3 = P(i2, t2, n2);
    if (e3) return e3;
    i2 = n2 ? null : i2.sibling;
  }
  return null;
}
var a2, o2, c2, f2, p2, m2, h2, ee, te, y, b, ne, re, ie, ae, oe, se, ce, le, ue, O, pe, P, F, I, Te, Ee, Pe, Fe, $;
var init_core_DrcMh8Kr = __esm({
  "../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/core-DrcMh8Kr.js"() {
    "use strict";
    init_rdt_hook_BvBEbB9n();
    a2 = 0;
    o2 = 1;
    c2 = 5;
    f2 = 11;
    p2 = 13;
    m2 = 14;
    h2 = 15;
    ee = 16;
    te = 19;
    y = 26;
    b = 27;
    ne = 28;
    re = 30;
    ie = 2;
    ae = 4096;
    oe = 4;
    se = 16;
    ce = 32;
    le = 1024;
    ue = 8192;
    O = ie | oe | se | ce | ae | ue | le;
    pe = (e2) => {
      switch (e2.tag) {
        case o2:
        case f2:
        case a2:
        case m2:
        case h2:
          return true;
        default:
          return false;
      }
    };
    P = (e2, t2, n2 = false) => {
      if (!e2) return null;
      if (t2(e2) === true) return e2;
      let r3 = n2 ? e2.return : e2.child;
      for (; r3; ) {
        let e3 = P(r3, t2, n2);
        if (e3) return e3;
        r3 = n2 ? null : r3.sibling;
      }
      return null;
    };
    F = async (e2, t2, n2 = false) => {
      if (!e2) return null;
      if (await t2(e2) === true) return e2;
      let r3 = n2 ? e2.return : e2.child;
      for (; r3; ) {
        let e3 = await F(r3, t2, n2);
        if (e3) return e3;
        r3 = n2 ? null : r3.sibling;
      }
      return null;
    };
    I = (e2) => {
      let t2 = e2;
      return typeof t2 == `function` ? t2 : typeof t2 == `object` && t2 ? I(t2.type || t2.render) : null;
    };
    Te = (e2) => {
      let t2 = e2;
      if (typeof t2 == `string`) return t2;
      if (typeof t2 != `function` && !(typeof t2 == `object` && t2)) return null;
      let n2 = t2.displayName || t2.name || null;
      if (n2) return n2;
      let r3 = I(t2);
      return r3 && (r3.displayName || r3.name) || null;
    };
    Ee = () => {
      let e2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
      return !!e2?._instrumentationIsActive || o(e2) || l(e2);
    };
    Pe = (e2) => {
      let t2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t2?.renderers) for (let n2 of t2.renderers.values()) try {
        let t3 = n2.findFiberByHostInstance?.(e2);
        if (t3) return t3;
      } catch {
      }
      if (typeof e2 == `object` && e2) {
        if (`_reactRootContainer` in e2) return e2._reactRootContainer?._internalRoot?.current?.child;
        for (let t3 in e2) if (t3.startsWith(`__reactContainer$`) || t3.startsWith(`__reactInternalInstance$`) || t3.startsWith(`__reactFiber`)) return e2[t3] || null;
      }
      return null;
    };
    Fe = Error();
    $ = /* @__PURE__ */ new Set();
  }
});

// ../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/index.js
var init_dist = __esm({
  "../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/index.js"() {
    "use strict";
    init_rdt_hook_BvBEbB9n();
    init_install_hook_only_TrTYr6LK();
    init_core_DrcMh8Kr();
  }
});

// ../../node_modules/.pnpm/solid-js@1.9.10/node_modules/solid-js/dist/solid.js
function getContextId(count) {
  const num = String(count), len = num.length - 1;
  return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return {
    ...sharedConfig.context,
    id: sharedConfig.getNextContextId(),
    count: 0
  };
}
function createRoot(fn, detachedOwner) {
  const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
    owned: null,
    cleanups: null,
    context: current ? current.context : null,
    owner: current
  }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
  Owner = root;
  Listener = null;
  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s3 = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || void 0
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      if (Transition && Transition.running && Transition.sources.has(s3)) value2 = value2(s3.tValue);
      else value2 = value2(s3.value);
    }
    return writeSignal(s3, value2);
  };
  return [readSignal.bind(s3), setter];
}
function createComputed(fn, value, options) {
  const c3 = createComputation(fn, value, true, STALE);
  if (Scheduler && Transition && Transition.running) Updates.push(c3);
  else updateComputation(c3);
}
function createRenderEffect(fn, value, options) {
  const c3 = createComputation(fn, value, false, STALE);
  if (Scheduler && Transition && Transition.running) Updates.push(c3);
  else updateComputation(c3);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c3 = createComputation(fn, value, false, STALE), s3 = SuspenseContext && useContext(SuspenseContext);
  if (s3) c3.suspense = s3;
  if (!options || !options.render) c3.user = true;
  Effects ? Effects.push(c3) : updateComputation(c3);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c3 = createComputation(fn, value, true, 0);
  c3.observers = null;
  c3.observerSlots = null;
  c3.comparator = options.equals || void 0;
  if (Scheduler && Transition && Transition.running) {
    c3.tState = STALE;
    Updates.push(c3);
  } else updateComputation(c3);
  return readSignal.bind(c3);
}
function isPromise(v3) {
  return v3 && typeof v3 === "object" && "then" in v3;
}
function createResource(pSource, pFetcher, pOptions) {
  let source;
  let fetcher;
  let options;
  if (typeof pFetcher === "function") {
    source = pSource;
    fetcher = pFetcher;
    options = pOptions || {};
  } else {
    source = true;
    fetcher = pSource;
    options = pFetcher || {};
  }
  let pr = null, initP = NO_INIT, id = null, loadedUnderTransition = false, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
  const contexts = /* @__PURE__ */ new Set(), [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(void 0), [track, trigger] = createSignal(void 0, {
    equals: false
  }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
  if (sharedConfig.context) {
    id = sharedConfig.getNextContextId();
    if (options.ssrLoadFrom === "initial") initP = options.initialValue;
    else if (sharedConfig.load && sharedConfig.has(id)) initP = sharedConfig.load(id);
  }
  function loadEnd(p3, v3, error2, key) {
    if (pr === p3) {
      pr = null;
      key !== void 0 && (resolved = true);
      if ((p3 === initP || v3 === initP) && options.onHydrated) queueMicrotask(() => options.onHydrated(key, {
        value: v3
      }));
      initP = NO_INIT;
      if (Transition && p3 && loadedUnderTransition) {
        Transition.promises.delete(p3);
        loadedUnderTransition = false;
        runUpdates(() => {
          Transition.running = true;
          completeLoad(v3, error2);
        }, false);
      } else completeLoad(v3, error2);
    }
    return v3;
  }
  function completeLoad(v3, err) {
    runUpdates(() => {
      if (err === void 0) setValue(() => v3);
      setState(err !== void 0 ? "errored" : resolved ? "ready" : "unresolved");
      setError(err);
      for (const c3 of contexts.keys()) c3.decrement();
      contexts.clear();
    }, false);
  }
  function read() {
    const c3 = SuspenseContext && useContext(SuspenseContext), v3 = value(), err = error();
    if (err !== void 0 && !pr) throw err;
    if (Listener && !Listener.user && c3) {
      createComputed(() => {
        track();
        if (pr) {
          if (c3.resolved && Transition && loadedUnderTransition) Transition.promises.add(pr);
          else if (!contexts.has(c3)) {
            c3.increment();
            contexts.add(c3);
          }
        }
      });
    }
    return v3;
  }
  function load(refetching = true) {
    if (refetching !== false && scheduled) return;
    scheduled = false;
    const lookup = dynamic ? dynamic() : source;
    loadedUnderTransition = Transition && Transition.running;
    if (lookup == null || lookup === false) {
      loadEnd(pr, untrack(value));
      return;
    }
    if (Transition && pr) Transition.promises.delete(pr);
    let error2;
    const p3 = initP !== NO_INIT ? initP : untrack(() => {
      try {
        return fetcher(lookup, {
          value: value(),
          refetching
        });
      } catch (fetcherError) {
        error2 = fetcherError;
      }
    });
    if (error2 !== void 0) {
      loadEnd(pr, void 0, castError(error2), lookup);
      return;
    } else if (!isPromise(p3)) {
      loadEnd(pr, p3, void 0, lookup);
      return p3;
    }
    pr = p3;
    if ("v" in p3) {
      if (p3.s === 1) loadEnd(pr, p3.v, void 0, lookup);
      else loadEnd(pr, void 0, castError(p3.v), lookup);
      return p3;
    }
    scheduled = true;
    queueMicrotask(() => scheduled = false);
    runUpdates(() => {
      setState(resolved ? "refreshing" : "pending");
      trigger();
    }, false);
    return p3.then((v3) => loadEnd(p3, v3, void 0, lookup), (e2) => loadEnd(p3, void 0, castError(e2), lookup));
  }
  Object.defineProperties(read, {
    state: {
      get: () => state()
    },
    error: {
      get: () => error()
    },
    loading: {
      get() {
        const s3 = state();
        return s3 === "pending" || s3 === "refreshing";
      }
    },
    latest: {
      get() {
        if (!resolved) return read();
        const err = error();
        if (err && !pr) throw err;
        return value();
      }
    }
  });
  let owner = Owner;
  if (dynamic) createComputed(() => (owner = Owner, load(false)));
  else load(false);
  return [read, {
    refetch: (info) => runWithOwner(owner, () => load(info)),
    mutate: setValue
  }];
}
function batch(fn) {
  return runUpdates(fn, false);
}
function untrack(fn) {
  if (!ExternalSourceConfig && Listener === null) return fn();
  const listener = Listener;
  Listener = null;
  try {
    if (ExternalSourceConfig) return ExternalSourceConfig.untrack(fn);
    return fn();
  } finally {
    Listener = listener;
  }
}
function on(deps, fn, options) {
  const isArray = Array.isArray(deps);
  let prevInput;
  let defer = options && options.defer;
  return (prevValue) => {
    let input;
    if (isArray) {
      input = Array(deps.length);
      for (let i2 = 0; i2 < deps.length; i2++) input[i2] = deps[i2]();
    } else input = deps();
    if (defer) {
      defer = false;
      return prevValue;
    }
    const result = untrack(() => fn(input, prevInput, prevValue));
    prevInput = input;
    return result;
  };
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) ;
  else if (Owner.cleanups === null) Owner.cleanups = [fn];
  else Owner.cleanups.push(fn);
  return fn;
}
function getListener() {
  return Listener;
}
function runWithOwner(o3, fn) {
  const prev = Owner;
  const prevListener = Listener;
  Owner = o3;
  Listener = null;
  try {
    return runUpdates(fn, true);
  } catch (err) {
    handleError(err);
  } finally {
    Owner = prev;
    Listener = prevListener;
  }
}
function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }
  const l3 = Listener;
  const o3 = Owner;
  return Promise.resolve().then(() => {
    Listener = l3;
    Owner = o3;
    let t2;
    if (Scheduler || SuspenseContext) {
      t2 = Transition || (Transition = {
        sources: /* @__PURE__ */ new Set(),
        effects: [],
        promises: /* @__PURE__ */ new Set(),
        disposed: /* @__PURE__ */ new Set(),
        queue: /* @__PURE__ */ new Set(),
        running: true
      });
      t2.done || (t2.done = new Promise((res) => t2.resolve = res));
      t2.running = true;
    }
    runUpdates(fn, false);
    Listener = Owner = null;
    return t2 ? t2.done : void 0;
  });
}
function useContext(context) {
  let value;
  return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
}
function readSignal() {
  const runningTransition = Transition && Transition.running;
  if (this.sources && (runningTransition ? this.tState : this.state)) {
    if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this);
    else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (runningTransition && Transition.sources.has(this)) return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    if (Transition) {
      const TransitionRunning = Transition.running;
      if (TransitionRunning || !isComp && Transition.sources.has(node)) {
        Transition.sources.add(node);
        node.tValue = value;
      }
      if (!TransitionRunning) node.value = value;
    } else node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i2 = 0; i2 < node.observers.length; i2 += 1) {
          const o3 = node.observers[i2];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o3)) continue;
          if (TransitionRunning ? !o3.tState : !o3.state) {
            if (o3.pure) Updates.push(o3);
            else Effects.push(o3);
            if (o3.observers) markDownstream(o3);
          }
          if (!TransitionRunning) o3.state = STALE;
          else o3.tState = STALE;
        }
        if (Updates.length > 1e6) {
          Updates = [];
          if (IS_DEV) ;
          throw new Error();
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const time = ExecCount;
  runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        Listener = Owner = node;
        runComputation(node, node.tValue, time);
        Listener = Owner = null;
      }, false);
    });
  }
}
function runComputation(node, value, time) {
  let nextValue;
  const owner = Owner, listener = Listener;
  Listener = Owner = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      if (Transition && Transition.running) {
        node.tState = STALE;
        node.tOwned && node.tOwned.forEach(cleanNode);
        node.tOwned = void 0;
      } else {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init2, pure, state = STALE, options) {
  const c3 = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init2,
    owner: Owner,
    context: Owner ? Owner.context : null,
    pure
  };
  if (Transition && Transition.running) {
    c3.state = 0;
    c3.tState = state;
  }
  if (Owner === null) ;
  else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned) Owner.tOwned = [c3];
      else Owner.tOwned.push(c3);
    } else {
      if (!Owner.owned) Owner.owned = [c3];
      else Owner.owned.push(c3);
    }
  }
  if (ExternalSourceConfig && c3.fn) {
    const [track, trigger] = createSignal(void 0, {
      equals: false
    });
    const ordinary = ExternalSourceConfig.factory(c3.fn, trigger);
    onCleanup(() => ordinary.dispose());
    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
    const inTransition = ExternalSourceConfig.factory(c3.fn, triggerInTransition);
    c3.fn = (x3) => {
      track();
      return Transition && Transition.running ? inTransition.track(x3) : ordinary.track(x3);
    };
  }
  return c3;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if ((runningTransition ? node.tState : node.state) === 0) return;
  if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node)) return;
    if (runningTransition ? node.tState : node.state) ancestors.push(node);
  }
  for (let i2 = ancestors.length - 1; i2 >= 0; i2--) {
    node = ancestors[i2];
    if (runningTransition) {
      let top = node, prev = ancestors[i2 + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top)) return;
      }
    }
    if ((runningTransition ? node.tState : node.state) === STALE) {
      updateComputation(node);
    } else if ((runningTransition ? node.tState : node.state) === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init2) {
  if (Updates) return fn();
  let wait = false;
  if (!init2) Updates = [];
  if (Effects) wait = true;
  else Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait) Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);
    else runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  let res;
  if (Transition) {
    if (!Transition.promises.size && !Transition.queue.size) {
      const sources = Transition.sources;
      const disposed = Transition.disposed;
      Effects.push.apply(Effects, Transition.effects);
      res = Transition.resolve;
      for (const e3 of Effects) {
        "tState" in e3 && (e3.state = e3.tState);
        delete e3.tState;
      }
      Transition = null;
      runUpdates(() => {
        for (const d3 of disposed) cleanNode(d3);
        for (const v3 of sources) {
          v3.value = v3.tValue;
          if (v3.owned) {
            for (let i2 = 0, len = v3.owned.length; i2 < len; i2++) cleanNode(v3.owned[i2]);
          }
          if (v3.tOwned) v3.owned = v3.tOwned;
          delete v3.tValue;
          delete v3.tOwned;
          v3.tState = 0;
        }
        setTransPending(false);
      }, false);
    } else if (Transition.running) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
  }
  const e2 = Effects;
  Effects = null;
  if (e2.length) runUpdates(() => runEffects(e2), false);
  if (res) res();
}
function runQueue(queue) {
  for (let i2 = 0; i2 < queue.length; i2++) runTop(queue[i2]);
}
function scheduleQueue(queue) {
  for (let i2 = 0; i2 < queue.length; i2++) {
    const item = queue[i2];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}
function runUserEffects(queue) {
  let i2, userLength = 0;
  for (i2 = 0; i2 < queue.length; i2++) {
    const e2 = queue[i2];
    if (!e2.user) runTop(e2);
    else queue[userLength++] = e2;
  }
  if (sharedConfig.context) {
    if (sharedConfig.count) {
      sharedConfig.effects || (sharedConfig.effects = []);
      sharedConfig.effects.push(...queue.slice(0, userLength));
      return;
    }
    setHydrateContext();
  }
  if (sharedConfig.effects && (sharedConfig.done || !sharedConfig.count)) {
    queue = [...sharedConfig.effects, ...queue];
    userLength += sharedConfig.effects.length;
    delete sharedConfig.effects;
  }
  for (i2 = 0; i2 < userLength; i2++) runTop(queue[i2]);
}
function lookUpstream(node, ignore) {
  const runningTransition = Transition && Transition.running;
  if (runningTransition) node.tState = 0;
  else node.state = 0;
  for (let i2 = 0; i2 < node.sources.length; i2 += 1) {
    const source = node.sources[i2];
    if (source.sources) {
      const state = runningTransition ? source.tState : source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
      } else if (state === PENDING) lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i2 = 0; i2 < node.observers.length; i2 += 1) {
    const o3 = node.observers[i2];
    if (runningTransition ? !o3.tState : !o3.state) {
      if (runningTransition) o3.tState = PENDING;
      else o3.state = PENDING;
      if (o3.pure) Updates.push(o3);
      else Effects.push(o3);
      o3.observers && markDownstream(o3);
    }
  }
}
function cleanNode(node) {
  let i2;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n2 = obs.pop(), s3 = source.observerSlots.pop();
        if (index < obs.length) {
          n2.sourceSlots[s3] = index;
          obs[index] = n2;
          source.observerSlots[index] = s3;
        }
      }
    }
  }
  if (node.tOwned) {
    for (i2 = node.tOwned.length - 1; i2 >= 0; i2--) cleanNode(node.tOwned[i2]);
    delete node.tOwned;
  }
  if (Transition && Transition.running && node.pure) {
    reset(node, true);
  } else if (node.owned) {
    for (i2 = node.owned.length - 1; i2 >= 0; i2--) cleanNode(node.owned[i2]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i2 = node.cleanups.length - 1; i2 >= 0; i2--) node.cleanups[i2]();
    node.cleanups = null;
  }
  if (Transition && Transition.running) node.tState = 0;
  else node.state = 0;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i2 = 0; i2 < node.owned.length; i2++) reset(node.owned[i2]);
  }
}
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function runErrors(err, fns, owner) {
  try {
    for (const f3 of fns) f3(err);
  } catch (e2) {
    handleError(e2, owner && owner.owner || null);
  }
}
function handleError(err, owner = Owner) {
  const fns = ERROR && owner && owner.context && owner.context[ERROR];
  const error = castError(err);
  if (!fns) throw error;
  if (Effects) Effects.push({
    fn() {
      runErrors(error, fns, owner);
    },
    state: STALE
  });
  else runErrors(error, fns, owner);
}
function dispose(d3) {
  for (let i2 = 0; i2 < d3.length; i2++) d3[i2]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [], newLen = newItems.length, i2, j3;
    newItems[$TRACK];
    return untrack(() => {
      let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot((disposer) => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      } else if (len === 0) {
        mapped = new Array(newLen);
        for (j3 = 0; j3 < newLen; j3++) {
          items[j3] = newItems[j3];
          mapped[j3] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++) ;
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = /* @__PURE__ */ new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j3 = newEnd; j3 >= start; j3--) {
          item = newItems[j3];
          i2 = newIndices.get(item);
          newIndicesNext[j3] = i2 === void 0 ? -1 : i2;
          newIndices.set(item, j3);
        }
        for (i2 = start; i2 <= end; i2++) {
          item = items[i2];
          j3 = newIndices.get(item);
          if (j3 !== void 0 && j3 !== -1) {
            temp[j3] = mapped[i2];
            tempdisposers[j3] = disposers[i2];
            indexes && (tempIndexes[j3] = indexes[i2]);
            j3 = newIndicesNext[j3];
            newIndices.set(item, j3);
          } else disposers[i2]();
        }
        for (j3 = start; j3 < newLen; j3++) {
          if (j3 in temp) {
            mapped[j3] = temp[j3];
            disposers[j3] = tempdisposers[j3];
            if (indexes) {
              indexes[j3] = tempIndexes[j3];
              indexes[j3](j3);
            }
          } else mapped[j3] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j3] = disposer;
      if (indexes) {
        const [s3, set] = createSignal(j3);
        indexes[j3] = set;
        return mapFn(newItems[j3], s3);
      }
      return mapFn(newItems[j3]);
    }
  };
}
function indexArray(list, mapFn, options = {}) {
  let items = [], mapped = [], disposers = [], signals = [], len = 0, i2;
  onCleanup(() => dispose(disposers));
  return () => {
    const newItems = list() || [], newLen = newItems.length;
    newItems[$TRACK];
    return untrack(() => {
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          signals = [];
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot((disposer) => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
        return mapped;
      }
      if (items[0] === FALLBACK) {
        disposers[0]();
        disposers = [];
        items = [];
        mapped = [];
        len = 0;
      }
      for (i2 = 0; i2 < newLen; i2++) {
        if (i2 < items.length && items[i2] !== newItems[i2]) {
          signals[i2](() => newItems[i2]);
        } else if (i2 >= items.length) {
          mapped[i2] = createRoot(mapper);
        }
      }
      for (; i2 < items.length; i2++) {
        disposers[i2]();
      }
      len = signals.length = disposers.length = newLen;
      items = newItems.slice(0);
      return mapped = mapped.slice(0, len);
    });
    function mapper(disposer) {
      disposers[i2] = disposer;
      const [s3, set] = createSignal(newItems[i2]);
      signals[i2] = set;
      return mapFn(s3, i2);
    }
  };
}
function createComponent(Comp, props) {
  if (hydrationEnabled) {
    if (sharedConfig.context) {
      const c3 = sharedConfig.context;
      setHydrateContext(nextHydrateContext());
      const r3 = untrack(() => Comp(props || {}));
      setHydrateContext(c3);
      return r3;
    }
  }
  return untrack(() => Comp(props || {}));
}
function trueFn() {
  return true;
}
function resolveSource(s3) {
  return !(s3 = typeof s3 === "function" ? s3() : s3) ? {} : s3;
}
function resolveSources() {
  for (let i2 = 0, length = this.length; i2 < length; ++i2) {
    const v3 = this[i2]();
    if (v3 !== void 0) return v3;
  }
}
function mergeProps(...sources) {
  let proxy = false;
  for (let i2 = 0; i2 < sources.length; i2++) {
    const s3 = sources[i2];
    proxy = proxy || !!s3 && $PROXY in s3;
    sources[i2] = typeof s3 === "function" ? (proxy = true, createMemo(s3)) : s3;
  }
  if (SUPPORTS_PROXY && proxy) {
    return new Proxy({
      get(property) {
        for (let i2 = sources.length - 1; i2 >= 0; i2--) {
          const v3 = resolveSource(sources[i2])[property];
          if (v3 !== void 0) return v3;
        }
      },
      has(property) {
        for (let i2 = sources.length - 1; i2 >= 0; i2--) {
          if (property in resolveSource(sources[i2])) return true;
        }
        return false;
      },
      keys() {
        const keys = [];
        for (let i2 = 0; i2 < sources.length; i2++) keys.push(...Object.keys(resolveSource(sources[i2])));
        return [...new Set(keys)];
      }
    }, propTraps);
  }
  const sourcesMap = {};
  const defined = /* @__PURE__ */ Object.create(null);
  for (let i2 = sources.length - 1; i2 >= 0; i2--) {
    const source = sources[i2];
    if (!source) continue;
    const sourceKeys = Object.getOwnPropertyNames(source);
    for (let i3 = sourceKeys.length - 1; i3 >= 0; i3--) {
      const key = sourceKeys[i3];
      if (key === "__proto__" || key === "constructor") continue;
      const desc = Object.getOwnPropertyDescriptor(source, key);
      if (!defined[key]) {
        defined[key] = desc.get ? {
          enumerable: true,
          configurable: true,
          get: resolveSources.bind(sourcesMap[key] = [desc.get.bind(source)])
        } : desc.value !== void 0 ? desc : void 0;
      } else {
        const sources2 = sourcesMap[key];
        if (sources2) {
          if (desc.get) sources2.push(desc.get.bind(source));
          else if (desc.value !== void 0) sources2.push(() => desc.value);
        }
      }
    }
  }
  const target = {};
  const definedKeys = Object.keys(defined);
  for (let i2 = definedKeys.length - 1; i2 >= 0; i2--) {
    const key = definedKeys[i2], desc = defined[key];
    if (desc && desc.get) Object.defineProperty(target, key, desc);
    else target[key] = desc ? desc.value : void 0;
  }
  return target;
}
function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback || void 0));
}
function Index(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(indexArray(() => props.each, props.children, fallback || void 0));
}
function Show(props) {
  const keyed = props.keyed;
  const conditionValue = createMemo(() => props.when, void 0, void 0);
  const condition = keyed ? conditionValue : createMemo(conditionValue, void 0, {
    equals: (a3, b3) => !a3 === !b3
  });
  return createMemo(() => {
    const c3 = condition();
    if (c3) {
      const child = props.children;
      const fn = typeof child === "function" && child.length > 0;
      return fn ? untrack(() => child(keyed ? c3 : () => {
        if (!untrack(condition)) throw narrowedError("Show");
        return conditionValue();
      })) : child;
    }
    return props.fallback;
  }, void 0, void 0);
}
var sharedConfig, IS_DEV, equalFn, $PROXY, SUPPORTS_PROXY, $TRACK, $DEVCOMP, signalOptions, ERROR, runEffects, STALE, PENDING, UNOWNED, NO_INIT, Owner, Transition, Scheduler, ExternalSourceConfig, Listener, Updates, Effects, ExecCount, transPending, setTransPending, SuspenseContext, FALLBACK, hydrationEnabled, propTraps, narrowedError;
var init_solid = __esm({
  "../../node_modules/.pnpm/solid-js@1.9.10/node_modules/solid-js/dist/solid.js"() {
    "use strict";
    sharedConfig = {
      context: void 0,
      registry: void 0,
      effects: void 0,
      done: false,
      getContextId() {
        return getContextId(this.context.count);
      },
      getNextContextId() {
        return getContextId(this.context.count++);
      }
    };
    IS_DEV = false;
    equalFn = (a3, b3) => a3 === b3;
    $PROXY = Symbol("solid-proxy");
    SUPPORTS_PROXY = typeof Proxy === "function";
    $TRACK = Symbol("solid-track");
    $DEVCOMP = Symbol("solid-dev-component");
    signalOptions = {
      equals: equalFn
    };
    ERROR = null;
    runEffects = runQueue;
    STALE = 1;
    PENDING = 2;
    UNOWNED = {
      owned: null,
      cleanups: null,
      context: null,
      owner: null
    };
    NO_INIT = {};
    Owner = null;
    Transition = null;
    Scheduler = null;
    ExternalSourceConfig = null;
    Listener = null;
    Updates = null;
    Effects = null;
    ExecCount = 0;
    [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
    FALLBACK = Symbol("fallback");
    hydrationEnabled = false;
    propTraps = {
      get(_4, property, receiver) {
        if (property === $PROXY) return receiver;
        return _4.get(property);
      },
      has(_4, property) {
        if (property === $PROXY) return true;
        return _4.has(property);
      },
      set: trueFn,
      deleteProperty: trueFn,
      getOwnPropertyDescriptor(_4, property) {
        return {
          configurable: true,
          enumerable: true,
          get() {
            return _4.get(property);
          },
          set: trueFn,
          deleteProperty: trueFn
        };
      },
      ownKeys(_4) {
        return _4.keys();
      }
    };
    narrowedError = (name) => `Stale read from <${name}>.`;
  }
});

// ../../node_modules/.pnpm/solid-js@1.9.10/node_modules/solid-js/web/dist/web.js
function getPropAlias(prop, tagName) {
  const a3 = PropAliases[prop];
  return typeof a3 === "object" ? a3[tagName] ? a3["$"] : void 0 : a3;
}
function reconcileArrays(parentNode, a3, b3) {
  let bLength = b3.length, aEnd = a3.length, bEnd = bLength, aStart = 0, bStart = 0, after = a3[aEnd - 1].nextSibling, map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a3[aStart] === b3[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a3[aEnd - 1] === b3[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b3[bStart - 1].nextSibling : b3[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b3[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a3[aStart])) a3[aStart].remove();
        aStart++;
      }
    } else if (a3[aStart] === b3[bEnd - 1] && b3[bStart] === a3[aEnd - 1]) {
      const node = a3[--aEnd].nextSibling;
      parentNode.insertBefore(b3[bStart++], a3[aStart++].nextSibling);
      parentNode.insertBefore(b3[--bEnd], node);
      a3[aEnd] = b3[bEnd];
    } else {
      if (!map) {
        map = /* @__PURE__ */ new Map();
        let i2 = bStart;
        while (i2 < bEnd) map.set(b3[i2], i2++);
      }
      const index = map.get(a3[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i2 = aStart, sequence = 1, t2;
          while (++i2 < aEnd && i2 < bEnd) {
            if ((t2 = map.get(a3[i2])) == null || t2 !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a3[aStart];
            while (bStart < index) parentNode.insertBefore(b3[bStart++], node);
          } else parentNode.replaceChild(b3[bStart++], a3[aStart++]);
        } else aStart++;
      } else a3[aStart++].remove();
    }
  }
}
function render(code, element, init2, options = {}) {
  let disposer;
  createRoot((dispose2) => {
    disposer = dispose2;
    element === document ? code() : insert(element, code(), element.firstChild ? null : void 0, init2);
  }, options.owner);
  return () => {
    disposer();
    element.textContent = "";
  };
}
function template(html, isImportNode, isSVG, isMathML) {
  let node;
  const create = () => {
    const t2 = isMathML ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
    t2.innerHTML = html;
    return isSVG ? t2.content.firstChild.firstChild : isMathML ? t2.firstChild : t2.content.firstChild;
  };
  const fn = isImportNode ? () => untrack(() => document.importNode(node || (node = create()), true)) : () => (node || (node = create())).cloneNode(true);
  fn.cloneNode = fn;
  return fn;
}
function delegateEvents(eventNames, document2 = window.document) {
  const e2 = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
  for (let i2 = 0, l3 = eventNames.length; i2 < l3; i2++) {
    const name = eventNames[i2];
    if (!e2.has(name)) {
      e2.add(name);
      document2.addEventListener(name, eventHandler);
    }
  }
}
function setAttribute(node, name, value) {
  if (isHydrating(node)) return;
  if (value == null) node.removeAttribute(name);
  else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
  if (isHydrating(node)) return;
  if (value == null) node.removeAttributeNS(namespace, name);
  else node.setAttributeNS(namespace, name, value);
}
function setBoolAttribute(node, name, value) {
  if (isHydrating(node)) return;
  value ? node.setAttribute(name, "") : node.removeAttribute(name);
}
function className(node, value) {
  if (isHydrating(node)) return;
  if (value == null) node.removeAttribute("class");
  else node.className = value;
}
function addEventListener(node, name, handler, delegate) {
  if (delegate) {
    if (Array.isArray(handler)) {
      node[`$$${name}`] = handler[0];
      node[`$$${name}Data`] = handler[1];
    } else node[`$$${name}`] = handler;
  } else if (Array.isArray(handler)) {
    const handlerFn = handler[0];
    node.addEventListener(name, handler[0] = (e2) => handlerFn.call(node, handler[1], e2));
  } else node.addEventListener(name, handler, typeof handler !== "function" && handler);
}
function classList(node, value, prev = {}) {
  const classKeys = Object.keys(value || {}), prevKeys = Object.keys(prev);
  let i2, len;
  for (i2 = 0, len = prevKeys.length; i2 < len; i2++) {
    const key = prevKeys[i2];
    if (!key || key === "undefined" || value[key]) continue;
    toggleClassKey(node, key, false);
    delete prev[key];
  }
  for (i2 = 0, len = classKeys.length; i2 < len; i2++) {
    const key = classKeys[i2], classValue = !!value[key];
    if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
    toggleClassKey(node, key, true);
    prev[key] = classValue;
  }
  return prev;
}
function style(node, value, prev) {
  if (!value) return prev ? setAttribute(node, "style") : value;
  const nodeStyle = node.style;
  if (typeof value === "string") return nodeStyle.cssText = value;
  typeof prev === "string" && (nodeStyle.cssText = prev = void 0);
  prev || (prev = {});
  value || (value = {});
  let v3, s3;
  for (s3 in prev) {
    value[s3] == null && nodeStyle.removeProperty(s3);
    delete prev[s3];
  }
  for (s3 in value) {
    v3 = value[s3];
    if (v3 !== prev[s3]) {
      nodeStyle.setProperty(s3, v3);
      prev[s3] = v3;
    }
  }
  return prev;
}
function setStyleProperty(node, name, value) {
  value != null ? node.style.setProperty(name, value) : node.style.removeProperty(name);
}
function spread(node, props = {}, isSVG, skipChildren) {
  const prevProps = {};
  if (!skipChildren) {
    createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
  }
  createRenderEffect(() => typeof props.ref === "function" && use(props.ref, node));
  createRenderEffect(() => assign(node, props, isSVG, true, prevProps, true));
  return prevProps;
}
function use(fn, element, arg) {
  return untrack(() => fn(element, arg));
}
function insert(parent, accessor, marker, initial) {
  if (marker !== void 0 && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}, skipRef = false) {
  props || (props = {});
  for (const prop in prevProps) {
    if (!(prop in props)) {
      if (prop === "children") continue;
      prevProps[prop] = assignProp(node, prop, null, prevProps[prop], isSVG, skipRef, props);
    }
  }
  for (const prop in props) {
    if (prop === "children") {
      if (!skipChildren) insertExpression(node, props.children);
      continue;
    }
    const value = props[prop];
    prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG, skipRef, props);
  }
}
function isHydrating(node) {
  return !!sharedConfig.context && !sharedConfig.done && (!node || node.isConnected);
}
function toPropertyName(name) {
  return name.toLowerCase().replace(/-([a-z])/g, (_4, w3) => w3.toUpperCase());
}
function toggleClassKey(node, key, value) {
  const classNames = key.trim().split(/\s+/);
  for (let i2 = 0, nameLen = classNames.length; i2 < nameLen; i2++) node.classList.toggle(classNames[i2], value);
}
function assignProp(node, prop, value, prev, isSVG, skipRef, props) {
  let isCE, isProp, isChildProp, propAlias, forceProp;
  if (prop === "style") return style(node, value, prev);
  if (prop === "classList") return classList(node, value, prev);
  if (value === prev) return prev;
  if (prop === "ref") {
    if (!skipRef) value(node);
  } else if (prop.slice(0, 3) === "on:") {
    const e2 = prop.slice(3);
    prev && node.removeEventListener(e2, prev, typeof prev !== "function" && prev);
    value && node.addEventListener(e2, value, typeof value !== "function" && value);
  } else if (prop.slice(0, 10) === "oncapture:") {
    const e2 = prop.slice(10);
    prev && node.removeEventListener(e2, prev, true);
    value && node.addEventListener(e2, value, true);
  } else if (prop.slice(0, 2) === "on") {
    const name = prop.slice(2).toLowerCase();
    const delegate = DelegatedEvents.has(name);
    if (!delegate && prev) {
      const h3 = Array.isArray(prev) ? prev[0] : prev;
      node.removeEventListener(name, h3);
    }
    if (delegate || value) {
      addEventListener(node, name, value, delegate);
      delegate && delegateEvents([name]);
    }
  } else if (prop.slice(0, 5) === "attr:") {
    setAttribute(node, prop.slice(5), value);
  } else if (prop.slice(0, 5) === "bool:") {
    setBoolAttribute(node, prop.slice(5), value);
  } else if ((forceProp = prop.slice(0, 5) === "prop:") || (isChildProp = ChildProperties.has(prop)) || !isSVG && ((propAlias = getPropAlias(prop, node.tagName)) || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-") || "is" in props)) {
    if (forceProp) {
      prop = prop.slice(5);
      isProp = true;
    } else if (isHydrating(node)) return value;
    if (prop === "class" || prop === "className") className(node, value);
    else if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;
    else node[propAlias || prop] = value;
  } else {
    const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
    if (ns) setAttributeNS(node, ns, prop, value);
    else setAttribute(node, Aliases[prop] || prop, value);
  }
  return value;
}
function eventHandler(e2) {
  if (sharedConfig.registry && sharedConfig.events) {
    if (sharedConfig.events.find(([el, ev]) => ev === e2)) return;
  }
  let node = e2.target;
  const key = `$$${e2.type}`;
  const oriTarget = e2.target;
  const oriCurrentTarget = e2.currentTarget;
  const retarget = (value) => Object.defineProperty(e2, "target", {
    configurable: true,
    value
  });
  const handleNode = () => {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== void 0 ? handler.call(node, data, e2) : handler.call(node, e2);
      if (e2.cancelBubble) return;
    }
    node.host && typeof node.host !== "string" && !node.host._$host && node.contains(e2.target) && retarget(node.host);
    return true;
  };
  const walkUpTree = () => {
    while (handleNode() && (node = node._$host || node.parentNode || node.host)) ;
  };
  Object.defineProperty(e2, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = _$HY.done = true;
  if (e2.composedPath) {
    const path = e2.composedPath();
    retarget(path[0]);
    for (let i2 = 0; i2 < path.length - 2; i2++) {
      node = path[i2];
      if (!handleNode()) break;
      if (node._$host) {
        node = node._$host;
        walkUpTree();
        break;
      }
      if (node.parentNode === oriCurrentTarget) {
        break;
      }
    }
  } else walkUpTree();
  retarget(oriTarget);
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  const hydrating = isHydrating(parent);
  if (hydrating) {
    !current && (current = [...parent.childNodes]);
    let cleaned = [];
    for (let i2 = 0; i2 < current.length; i2++) {
      const node = current[i2];
      if (node.nodeType === 8 && node.data.slice(0, 2) === "!$") node.remove();
      else cleaned.push(node);
    }
    current = cleaned;
  }
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t2 = typeof value, multi = marker !== void 0;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t2 === "string" || t2 === "number") {
    if (hydrating) return current;
    if (t2 === "number") {
      value = value.toString();
      if (value === current) return current;
    }
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data !== value && (node.data = value);
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t2 === "boolean") {
    if (hydrating) return current;
    current = cleanChildren(parent, current, marker);
  } else if (t2 === "function") {
    createRenderEffect(() => {
      let v3 = value();
      while (typeof v3 === "function") v3 = v3();
      current = insertExpression(parent, v3, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    const currentArray = current && Array.isArray(current);
    if (normalizeIncomingArray(array, value, current, unwrapArray)) {
      createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (hydrating) {
      if (!array.length) return current;
      if (marker === void 0) return current = [...parent.childNodes];
      let node = array[0];
      if (node.parentNode !== parent) return current;
      const nodes = [node];
      while ((node = node.nextSibling) !== marker) nodes.push(node);
      return current = nodes;
    }
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else if (currentArray) {
      if (current.length === 0) {
        appendNodes(parent, array, marker);
      } else reconcileArrays(parent, current, array);
    } else {
      current && cleanChildren(parent);
      appendNodes(parent, array);
    }
    current = array;
  } else if (value.nodeType) {
    if (hydrating && value.parentNode) return current = multi ? [value] : value;
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else ;
  return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap2) {
  let dynamic = false;
  for (let i2 = 0, len = array.length; i2 < len; i2++) {
    let item = array[i2], prev = current && current[normalized.length], t2;
    if (item == null || item === true || item === false) ;
    else if ((t2 = typeof item) === "object" && item.nodeType) {
      normalized.push(item);
    } else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
    } else if (t2 === "function") {
      if (unwrap2) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item], Array.isArray(prev) ? prev : [prev]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else {
      const value = String(item);
      if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);
      else normalized.push(document.createTextNode(value));
    }
  }
  return dynamic;
}
function appendNodes(parent, array, marker = null) {
  for (let i2 = 0, len = array.length; i2 < len; i2++) parent.insertBefore(array[i2], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === void 0) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i2 = current.length - 1; i2 >= 0; i2--) {
      const el = current[i2];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i2) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
        else isParent && el.remove();
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}
var booleans, Properties, ChildProperties, Aliases, PropAliases, DelegatedEvents, SVGNamespace, memo, $$EVENTS, RequestContext;
var init_web = __esm({
  "../../node_modules/.pnpm/solid-js@1.9.10/node_modules/solid-js/web/dist/web.js"() {
    "use strict";
    init_solid();
    init_solid();
    booleans = [
      "allowfullscreen",
      "async",
      "alpha",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "disabled",
      "formnovalidate",
      "hidden",
      "indeterminate",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "seamless",
      "selected",
      "adauctionheaders",
      "browsingtopics",
      "credentialless",
      "defaultchecked",
      "defaultmuted",
      "defaultselected",
      "defer",
      "disablepictureinpicture",
      "disableremoteplayback",
      "preservespitch",
      "shadowrootclonable",
      "shadowrootcustomelementregistry",
      "shadowrootdelegatesfocus",
      "shadowrootserializable",
      "sharedstoragewritable"
    ];
    Properties = /* @__PURE__ */ new Set([
      "className",
      "value",
      "readOnly",
      "noValidate",
      "formNoValidate",
      "isMap",
      "noModule",
      "playsInline",
      "adAuctionHeaders",
      "allowFullscreen",
      "browsingTopics",
      "defaultChecked",
      "defaultMuted",
      "defaultSelected",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "preservesPitch",
      "shadowRootClonable",
      "shadowRootCustomElementRegistry",
      "shadowRootDelegatesFocus",
      "shadowRootSerializable",
      "sharedStorageWritable",
      ...booleans
    ]);
    ChildProperties = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]);
    Aliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
      className: "class",
      htmlFor: "for"
    });
    PropAliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
      class: "className",
      novalidate: {
        $: "noValidate",
        FORM: 1
      },
      formnovalidate: {
        $: "formNoValidate",
        BUTTON: 1,
        INPUT: 1
      },
      ismap: {
        $: "isMap",
        IMG: 1
      },
      nomodule: {
        $: "noModule",
        SCRIPT: 1
      },
      playsinline: {
        $: "playsInline",
        VIDEO: 1
      },
      readonly: {
        $: "readOnly",
        INPUT: 1,
        TEXTAREA: 1
      },
      adauctionheaders: {
        $: "adAuctionHeaders",
        IFRAME: 1
      },
      allowfullscreen: {
        $: "allowFullscreen",
        IFRAME: 1
      },
      browsingtopics: {
        $: "browsingTopics",
        IMG: 1
      },
      defaultchecked: {
        $: "defaultChecked",
        INPUT: 1
      },
      defaultmuted: {
        $: "defaultMuted",
        AUDIO: 1,
        VIDEO: 1
      },
      defaultselected: {
        $: "defaultSelected",
        OPTION: 1
      },
      disablepictureinpicture: {
        $: "disablePictureInPicture",
        VIDEO: 1
      },
      disableremoteplayback: {
        $: "disableRemotePlayback",
        AUDIO: 1,
        VIDEO: 1
      },
      preservespitch: {
        $: "preservesPitch",
        AUDIO: 1,
        VIDEO: 1
      },
      shadowrootclonable: {
        $: "shadowRootClonable",
        TEMPLATE: 1
      },
      shadowrootdelegatesfocus: {
        $: "shadowRootDelegatesFocus",
        TEMPLATE: 1
      },
      shadowrootserializable: {
        $: "shadowRootSerializable",
        TEMPLATE: 1
      },
      sharedstoragewritable: {
        $: "sharedStorageWritable",
        IFRAME: 1,
        IMG: 1
      }
    });
    DelegatedEvents = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
    SVGNamespace = {
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace"
    };
    memo = (fn) => createMemo(() => fn());
    $$EVENTS = "_$DX_DELEGATE";
    RequestContext = Symbol();
  }
});

// dist/styles.css
var styles_default;
var init_styles = __esm({
  "dist/styles.css"() {
    styles_default = '/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-contain-size:initial;--tw-contain-layout:initial;--tw-contain-paint:initial;--tw-contain-style:initial}}}@layer theme{:root,:host{--font-sans:"Geist",ui-sans-serif,system-ui,sans-serif;--font-mono:ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,"Liberation Mono",monospace;--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-medium:500;--radius-sm:.25rem;--ease-out:cubic-bezier(0,0,.2,1);--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--transition-fast:.1s;--transition-normal:.15s;--transition-slow:.2s}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.visible\\!{visibility:visible!important}.touch-hitbox{position:relative}.touch-hitbox:before{content:"";width:100%;min-width:32px;height:100%;min-height:32px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-0{top:calc(var(--spacing)*0)}.top-0\\.5{top:calc(var(--spacing)*.5)}.top-full{top:100%}.bottom-full{bottom:100%}.left-0{left:calc(var(--spacing)*0)}.left-0\\.5{left:calc(var(--spacing)*.5)}.left-1{left:calc(var(--spacing)*1)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5{left:calc(var(--spacing)*2.5)}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.z-10{z-index:10}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.-mx-2{margin-inline:calc(var(--spacing)*-2)}.mx-0{margin-inline:calc(var(--spacing)*0)}.mx-0\\.5{margin-inline:calc(var(--spacing)*.5)}.-my-1{margin-block:calc(var(--spacing)*-1)}.-my-1\\.5{margin-block:calc(var(--spacing)*-1.5)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\.5{margin-top:calc(var(--spacing)*2.5)}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\.5{margin-bottom:calc(var(--spacing)*.5)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\.5{margin-bottom:calc(var(--spacing)*2.5)}.-ml-\\[2px\\]{margin-left:-2px}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.line-clamp-5{-webkit-line-clamp:5;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.size-1{width:calc(var(--spacing)*1);height:calc(var(--spacing)*1)}.size-1\\.5{width:calc(var(--spacing)*1.5);height:calc(var(--spacing)*1.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-\\[18px\\]{width:18px;height:18px}.h-0{height:calc(var(--spacing)*0)}.h-2{height:calc(var(--spacing)*2)}.h-3{height:calc(var(--spacing)*3)}.h-\\[17px\\]{height:17px}.h-fit{height:fit-content}.min-h-4{min-height:calc(var(--spacing)*4)}.w-0{width:calc(var(--spacing)*0)}.w-2{width:calc(var(--spacing)*2)}.w-5{width:calc(var(--spacing)*5)}.w-\\[calc\\(100\\%\\+16px\\)\\]{width:calc(100% + 16px)}.w-auto{width:auto}.w-fit{width:fit-content}.w-full{width:100%}.max-w-\\[280px\\]{max-width:280px}.max-w-full{max-width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[150px\\]{min-width:150px}.flex-1{flex:1}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x:calc(calc(1/2*100%)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-75{--tw-scale-x:75%;--tw-scale-y:75%;--tw-scale-z:75%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.-rotate-90{rotate:-90deg}.rotate-0{rotate:none}.rotate-90{rotate:90deg}.rotate-180{rotate:180deg}.interactive-scale{transition-property:transform;transition-duration:var(--transition-normal);transition-timing-function:cubic-bezier(.34,1.56,.64,1)}@media (hover:hover) and (pointer:fine){.interactive-scale:hover{transform:scale(1.05)}}.interactive-scale:active{transform:scale(.97)}.press-scale{transition-property:transform;transition-duration:var(--transition-fast);transition-timing-function:ease-out}.press-scale:active{transform:scale(.97)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.cursor-grab{cursor:grab}.cursor-grabbing{cursor:grabbing}.cursor-pointer{cursor:pointer}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.resize{resize:both}.resize-none{resize:none}.grid-cols-\\[0fr\\]{grid-template-columns:0fr}.grid-cols-\\[1fr\\]{grid-template-columns:1fr}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-\\[5px\\]{gap:5px}:where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}:where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.self-stretch{align-self:stretch}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-\\[1px\\]{border-radius:1px}.rounded-\\[10px\\]{border-radius:10px}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.rounded-ss{border-start-start-radius:.25rem}.rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.rounded-se{border-start-end-radius:.25rem}.rounded-ee{border-end-end-radius:.25rem}.rounded-es{border-end-start-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-l-\\[10px\\]{border-top-left-radius:10px;border-bottom-left-radius:10px}.rounded-l-none{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-tl{border-top-left-radius:.25rem}.rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-r-\\[10px\\]{border-top-right-radius:10px;border-bottom-right-radius:10px}.rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-b-\\[6px\\]{border-bottom-right-radius:6px;border-bottom-left-radius:6px}.rounded-b-\\[10px\\]{border-bottom-right-radius:10px;border-bottom-left-radius:10px}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.\\[border-width\\:0\\.5px\\]{border-width:.5px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.\\[border-top-width\\:0\\.5px\\]{border-top-width:.5px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-none{--tw-border-style:none;border-style:none}.border-solid{--tw-border-style:solid;border-style:solid}.border-\\[\\#B3B3B3\\]{border-color:#b3b3b3}.border-t-\\[\\#D9D9D9\\]{border-top-color:#d9d9d9}.bg-\\[\\#FEF2F2\\]{background-color:#fef2f2}.bg-black{background-color:var(--color-black)}.bg-black\\/5{background-color:#0000000d}@supports (color:color-mix(in lab, red, red)){.bg-black\\/5{background-color:color-mix(in oklab,var(--color-black)5%,transparent)}}.bg-black\\/25{background-color:#00000040}@supports (color:color-mix(in lab, red, red)){.bg-black\\/25{background-color:color-mix(in oklab,var(--color-black)25%,transparent)}}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-repeat{background-repeat:repeat}.p-0{padding:calc(var(--spacing)*0)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-0\\.25{padding-inline:calc(var(--spacing)*.25)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-\\[3px\\]{padding-inline:3px}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-0\\.25{padding-block:calc(var(--spacing)*.25)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-px{padding-block:1px}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-1\\.5{padding-top:calc(var(--spacing)*1.5)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.text-left{text-align:left}.font-sans{font-family:var(--font-sans)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.leading-3{--tw-leading:calc(var(--spacing)*3);line-height:calc(var(--spacing)*3)}.leading-3\\.5{--tw-leading:calc(var(--spacing)*3.5);line-height:calc(var(--spacing)*3.5)}.leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.text-wrap{text-wrap:wrap}.wrap-break-word{overflow-wrap:break-word}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#71717a\\]{color:#71717a}.text-\\[\\#B3B3B3\\]{color:#b3b3b3}.text-\\[\\#B91C1C\\]{color:#b91c1c}.text-black{color:var(--color-black)}.text-black\\/30{color:#0000004d}@supports (color:color-mix(in lab, red, red)){.text-black\\/30{color:color-mix(in oklab,var(--color-black)30%,transparent)}}.text-black\\/40{color:#0006}@supports (color:color-mix(in lab, red, red)){.text-black\\/40{color:color-mix(in oklab,var(--color-black)40%,transparent)}}.text-black\\/50{color:#00000080}@supports (color:color-mix(in lab, red, red)){.text-black\\/50{color:color-mix(in oklab,var(--color-black)50%,transparent)}}.text-black\\/60{color:#0009}@supports (color:color-mix(in lab, red, red)){.text-black\\/60{color:color-mix(in oklab,var(--color-black)60%,transparent)}}.text-black\\/70{color:#000000b3}@supports (color:color-mix(in lab, red, red)){.text-black\\/70{color:color-mix(in oklab,var(--color-black)70%,transparent)}}.text-black\\/85{color:#000000d9}@supports (color:color-mix(in lab, red, red)){.text-black\\/85{color:color-mix(in oklab,var(--color-black)85%,transparent)}}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.opacity-0{opacity:0}.opacity-35{opacity:.35}.opacity-50{opacity:.5}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter-\\[drop-shadow\\(0px_1px_2px_\\#51515140\\)\\]{filter:drop-shadow(0 1px 2px #51515140)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[transform\\,opacity\\]{transition-property:transform,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-100{--tw-duration:.1s;transition-duration:.1s}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.contain-layout{--tw-contain-layout:layout;contain:var(--tw-contain-size,)var(--tw-contain-layout,)var(--tw-contain-paint,)var(--tw-contain-style,)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.\\[corner-shape\\:superellipse\\(1\\.25\\)\\]{corner-shape:superellipse(1.25)}.\\[font-synthesis\\:none\\]{font-synthesis:none}:where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ring-inset{--tw-ring-inset:inset}@media (hover:hover){.hover\\:bg-\\[\\#F5F5F5\\]:hover{background-color:#f5f5f5}.hover\\:bg-\\[\\#FEE2E2\\]:hover{background-color:#fee2e2}.hover\\:bg-black\\/5:hover{background-color:#0000000d}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-black\\/5:hover{background-color:color-mix(in oklab,var(--color-black)5%,transparent)}}.hover\\:bg-black\\/10:hover{background-color:#0000001a}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-black\\/10:hover{background-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.hover\\:text-black:hover{color:var(--color-black)}}.disabled\\:cursor-default:disabled{cursor:default}.disabled\\:opacity-40:disabled{opacity:.4}@media (hover:hover){.disabled\\:hover\\:bg-transparent:disabled:hover{background-color:#0000}}}@keyframes shake{0%,to{transform:translate(0)}15%{transform:translate(-3px)}30%{transform:translate(3px)}45%{transform:translate(-3px)}60%{transform:translate(3px)}75%{transform:translate(-2px)}90%{transform:translate(2px)}}@keyframes pop-in{0%{opacity:0;transform:scale(.9)}70%{opacity:1;transform:scale(1.02)}to{opacity:1;transform:scale(1)}}@keyframes pop-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}@keyframes slide-in-bottom{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-top{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-left{0%{opacity:0;transform:translate(-8px)}to{opacity:1;transform:translate(0)}}@keyframes slide-in-right{0%{opacity:0;transform:translate(8px)}to{opacity:1;transform:translate(0)}}@keyframes success-pop{0%{opacity:0;transform:scale(.9)}60%{opacity:1;transform:scale(1.1)}80%{transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes tooltip-fade-in{0%{opacity:0;transform:scale(.97)}to{opacity:1;transform:scale(1)}}@keyframes icon-loader-spin{0%{opacity:1}50%{opacity:.5}to{opacity:.2}}.icon-loader-bar{animation:.5s linear infinite icon-loader-spin}@keyframes shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.shimmer-text{color:#0000;background:linear-gradient(90deg,#71717a 0%,#a1a1aa 25%,#71717a 50%,#a1a1aa 75%,#71717a 100%) 0 0/200% 100%;-webkit-background-clip:text;background-clip:text;animation:2.5s linear infinite shimmer}.animate-shake{will-change:transform;animation:.3s ease-out shake}.animate-pop-in{animation:pop-in var(--transition-normal)ease-out;will-change:transform,opacity}.animate-pop-out{animation:pop-out var(--transition-normal)ease-out forwards;will-change:transform,opacity}.animate-slide-in-bottom{animation:slide-in-bottom var(--transition-slow)ease-out;will-change:transform,opacity}.animate-slide-in-top{animation:slide-in-top var(--transition-slow)ease-out;will-change:transform,opacity}.animate-slide-in-left{animation:slide-in-left var(--transition-slow)ease-out;will-change:transform,opacity}.animate-slide-in-right{animation:slide-in-right var(--transition-slow)ease-out;will-change:transform,opacity}.animate-success-pop{will-change:transform,opacity;animation:.25s ease-out success-pop}.animate-tooltip-fade-in{animation:tooltip-fade-in var(--transition-fast)ease-out;will-change:transform,opacity}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-contain-size{syntax:"*";inherits:false}@property --tw-contain-layout{syntax:"*";inherits:false}@property --tw-contain-paint{syntax:"*";inherits:false}@property --tw-contain-style{syntax:"*";inherits:false}@keyframes pulse{50%{opacity:.5}}';
  }
});

// ../../node_modules/.pnpm/solid-js@1.9.10/node_modules/solid-js/store/dist/store.js
function wrap$1(value) {
  let p3 = value[$PROXY];
  if (!p3) {
    Object.defineProperty(value, $PROXY, {
      value: p3 = new Proxy(value, proxyTraps$1)
    });
    if (!Array.isArray(value)) {
      const keys = Object.keys(value), desc = Object.getOwnPropertyDescriptors(value);
      for (let i2 = 0, l3 = keys.length; i2 < l3; i2++) {
        const prop = keys[i2];
        if (desc[prop].get) {
          Object.defineProperty(value, prop, {
            enumerable: desc[prop].enumerable,
            get: desc[prop].get.bind(p3)
          });
        }
      }
    }
  }
  return p3;
}
function isWrappable(obj) {
  let proto;
  return obj != null && typeof obj === "object" && (obj[$PROXY] || !(proto = Object.getPrototypeOf(obj)) || proto === Object.prototype || Array.isArray(obj));
}
function unwrap(item, set = /* @__PURE__ */ new Set()) {
  let result, unwrapped, v3, prop;
  if (result = item != null && item[$RAW]) return result;
  if (!isWrappable(item) || set.has(item)) return item;
  if (Array.isArray(item)) {
    if (Object.isFrozen(item)) item = item.slice(0);
    else set.add(item);
    for (let i2 = 0, l3 = item.length; i2 < l3; i2++) {
      v3 = item[i2];
      if ((unwrapped = unwrap(v3, set)) !== v3) item[i2] = unwrapped;
    }
  } else {
    if (Object.isFrozen(item)) item = Object.assign({}, item);
    else set.add(item);
    const keys = Object.keys(item), desc = Object.getOwnPropertyDescriptors(item);
    for (let i2 = 0, l3 = keys.length; i2 < l3; i2++) {
      prop = keys[i2];
      if (desc[prop].get) continue;
      v3 = item[prop];
      if ((unwrapped = unwrap(v3, set)) !== v3) item[prop] = unwrapped;
    }
  }
  return item;
}
function getNodes(target, symbol) {
  let nodes = target[symbol];
  if (!nodes) Object.defineProperty(target, symbol, {
    value: nodes = /* @__PURE__ */ Object.create(null)
  });
  return nodes;
}
function getNode(nodes, property, value) {
  if (nodes[property]) return nodes[property];
  const [s3, set] = createSignal(value, {
    equals: false,
    internal: true
  });
  s3.$ = set;
  return nodes[property] = s3;
}
function proxyDescriptor$1(target, property) {
  const desc = Reflect.getOwnPropertyDescriptor(target, property);
  if (!desc || desc.get || !desc.configurable || property === $PROXY || property === $NODE) return desc;
  delete desc.value;
  delete desc.writable;
  desc.get = () => target[$PROXY][property];
  return desc;
}
function trackSelf(target) {
  getListener() && getNode(getNodes(target, $NODE), $SELF)();
}
function ownKeys(target) {
  trackSelf(target);
  return Reflect.ownKeys(target);
}
function setProperty(state, property, value, deleting = false) {
  if (!deleting && state[property] === value) return;
  const prev = state[property], len = state.length;
  if (value === void 0) {
    delete state[property];
    if (state[$HAS] && state[$HAS][property] && prev !== void 0) state[$HAS][property].$();
  } else {
    state[property] = value;
    if (state[$HAS] && state[$HAS][property] && prev === void 0) state[$HAS][property].$();
  }
  let nodes = getNodes(state, $NODE), node;
  if (node = getNode(nodes, property, prev)) node.$(() => value);
  if (Array.isArray(state) && state.length !== len) {
    for (let i2 = state.length; i2 < len; i2++) (node = nodes[i2]) && node.$();
    (node = getNode(nodes, "length", len)) && node.$(state.length);
  }
  (node = nodes[$SELF]) && node.$();
}
function mergeStoreNode(state, value) {
  const keys = Object.keys(value);
  for (let i2 = 0; i2 < keys.length; i2 += 1) {
    const key = keys[i2];
    setProperty(state, key, value[key]);
  }
}
function updateArray(current, next) {
  if (typeof next === "function") next = next(current);
  next = unwrap(next);
  if (Array.isArray(next)) {
    if (current === next) return;
    let i2 = 0, len = next.length;
    for (; i2 < len; i2++) {
      const value = next[i2];
      if (current[i2] !== value) setProperty(current, i2, value);
    }
    setProperty(current, "length", len);
  } else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
  let part, prev = current;
  if (path.length > 1) {
    part = path.shift();
    const partType = typeof part, isArray = Array.isArray(current);
    if (Array.isArray(part)) {
      for (let i2 = 0; i2 < part.length; i2++) {
        updatePath(current, [part[i2]].concat(path), traversed);
      }
      return;
    } else if (isArray && partType === "function") {
      for (let i2 = 0; i2 < current.length; i2++) {
        if (part(current[i2], i2)) updatePath(current, [i2].concat(path), traversed);
      }
      return;
    } else if (isArray && partType === "object") {
      const {
        from = 0,
        to = current.length - 1,
        by = 1
      } = part;
      for (let i2 = from; i2 <= to; i2 += by) {
        updatePath(current, [i2].concat(path), traversed);
      }
      return;
    } else if (path.length > 1) {
      updatePath(current[part], path, [part].concat(traversed));
      return;
    }
    prev = current[part];
    traversed = [part].concat(traversed);
  }
  let value = path[0];
  if (typeof value === "function") {
    value = value(prev, traversed);
    if (value === prev) return;
  }
  if (part === void 0 && value == void 0) return;
  value = unwrap(value);
  if (part === void 0 || isWrappable(prev) && isWrappable(value) && !Array.isArray(value)) {
    mergeStoreNode(prev, value);
  } else setProperty(current, part, value);
}
function createStore(...[store, options]) {
  const unwrappedStore = unwrap(store || {});
  const isArray = Array.isArray(unwrappedStore);
  const wrappedStore = wrap$1(unwrappedStore);
  function setStore(...args) {
    batch(() => {
      isArray && args.length === 1 ? updateArray(unwrappedStore, args[0]) : updatePath(unwrappedStore, args);
    });
  }
  return [wrappedStore, setStore];
}
function produce(fn) {
  return (state) => {
    if (isWrappable(state)) {
      let proxy;
      if (!(proxy = producers.get(state))) {
        producers.set(state, proxy = new Proxy(state, setterTraps));
      }
      fn(proxy);
    }
    return state;
  };
}
var $RAW, $NODE, $HAS, $SELF, proxyTraps$1, $ROOT, producers, setterTraps;
var init_store = __esm({
  "../../node_modules/.pnpm/solid-js@1.9.10/node_modules/solid-js/store/dist/store.js"() {
    "use strict";
    init_solid();
    $RAW = Symbol("store-raw");
    $NODE = Symbol("store-node");
    $HAS = Symbol("store-has");
    $SELF = Symbol("store-self");
    proxyTraps$1 = {
      get(target, property, receiver) {
        if (property === $RAW) return target;
        if (property === $PROXY) return receiver;
        if (property === $TRACK) {
          trackSelf(target);
          return receiver;
        }
        const nodes = getNodes(target, $NODE);
        const tracked = nodes[property];
        let value = tracked ? tracked() : target[property];
        if (property === $NODE || property === $HAS || property === "__proto__") return value;
        if (!tracked) {
          const desc = Object.getOwnPropertyDescriptor(target, property);
          if (getListener() && (typeof value !== "function" || target.hasOwnProperty(property)) && !(desc && desc.get)) value = getNode(nodes, property, value)();
        }
        return isWrappable(value) ? wrap$1(value) : value;
      },
      has(target, property) {
        if (property === $RAW || property === $PROXY || property === $TRACK || property === $NODE || property === $HAS || property === "__proto__") return true;
        getListener() && getNode(getNodes(target, $HAS), property)();
        return property in target;
      },
      set() {
        return true;
      },
      deleteProperty() {
        return true;
      },
      ownKeys,
      getOwnPropertyDescriptor: proxyDescriptor$1
    };
    $ROOT = Symbol("store-root");
    producers = /* @__PURE__ */ new WeakMap();
    setterTraps = {
      get(target, property) {
        if (property === $RAW) return target;
        const value = target[property];
        let proxy;
        return isWrappable(value) ? producers.get(value) || (producers.set(value, proxy = new Proxy(value, setterTraps)), proxy) : value;
      },
      set(target, property, value) {
        setProperty(target, property, unwrap(value));
        return true;
      },
      deleteProperty(target, property) {
        setProperty(target, property, void 0, true);
        return true;
      }
    };
  }
});

// src/constants.ts
var VERSION, VIEWPORT_MARGIN_PX, OFFSCREEN_POSITION, SELECTION_LERP_FACTOR, FEEDBACK_DURATION_MS, FADE_DURATION_MS, FADE_COMPLETE_BUFFER_MS, DISMISS_ANIMATION_BUFFER_MS, KEYDOWN_SPAM_TIMEOUT_MS, BLUR_DEACTIVATION_THRESHOLD_MS, INPUT_FOCUS_ACTIVATION_DELAY_MS, INPUT_TEXT_SELECTION_ACTIVATION_DELAY_MS, DEFAULT_KEY_HOLD_DURATION_MS, MIN_HOLD_FOR_ACTIVATION_AFTER_COPY_MS, RECENT_THRESHOLD_MS, ACTION_CYCLE_IDLE_TRIGGER_MS, ACTION_CYCLE_INPUT_THROTTLE_MS, ACTION_CYCLE_SCROLL_THRESHOLD_PX, ACTION_CYCLE_SCROLL_LINE_HEIGHT_PX, ACTION_CYCLE_ACTION_IDS, DRAG_THRESHOLD_PX, ELEMENT_DETECTION_THROTTLE_MS, COMPONENT_NAME_DEBOUNCE_MS, DRAG_PREVIEW_DEBOUNCE_MS, BOUNDS_CACHE_TTL_MS, BOUNDS_RECALC_INTERVAL_MS, AUTO_SCROLL_EDGE_THRESHOLD_PX, AUTO_SCROLL_SPEED_PX, Z_INDEX_LABEL, Z_INDEX_OVERLAY_CANVAS, DRAG_LERP_FACTOR, LERP_CONVERGENCE_THRESHOLD_PX, FADE_OUT_BUFFER_MS, MIN_DEVICE_PIXEL_RATIO, GRAB_PURPLE_RGB, OVERLAY_CROSSHAIR_COLOR, OVERLAY_BORDER_COLOR_DRAG, OVERLAY_FILL_COLOR_DRAG, OVERLAY_BORDER_COLOR_DEFAULT, OVERLAY_FILL_COLOR_DEFAULT, FROZEN_GLOW_COLOR, FROZEN_GLOW_EDGE_PX, ARROW_HEIGHT_PX, ARROW_CENTER_PERCENT, LABEL_GAP_PX, PREVIEW_ATTR_VALUE_MAX_LENGTH, PREVIEW_MAX_ATTRS, PREVIEW_PRIORITY_ATTRS, SCREENSHOT_CAPTURE_DELAY_MS, VIDEO_METADATA_TIMEOUT_MS, VIDEO_READY_POLL_INTERVAL_MS, VIDEO_READY_TIMEOUT_MS, MODIFIER_KEYS, ARROW_KEYS, FROZEN_ELEMENT_ATTRIBUTE, USER_IGNORE_ATTRIBUTE, VIEWPORT_COVERAGE_THRESHOLD, OVERLAY_Z_INDEX_THRESHOLD, DEV_TOOLS_OVERLAY_Z_INDEX_THRESHOLD, TOOLTIP_DELAY_MS, TOOLTIP_GRACE_PERIOD_MS, TOOLBAR_SNAP_MARGIN_PX, TOOLBAR_FADE_IN_DELAY_MS, TOOLBAR_SNAP_ANIMATION_DURATION_MS, TOOLBAR_DRAG_THRESHOLD_PX, TOOLBAR_VELOCITY_MULTIPLIER_MS, TOOLBAR_COLLAPSED_SHORT_PX, TOOLBAR_COLLAPSED_LONG_PX, TOOLBAR_COLLAPSE_ANIMATION_DURATION_MS, TOOLBAR_DEFAULT_WIDTH_PX, TOOLBAR_DEFAULT_HEIGHT_PX, TOOLBAR_SHAKE_TOOLTIP_DURATION_MS, DRAG_SELECTION_COVERAGE_THRESHOLD, DRAG_SELECTION_SAMPLE_SPACING_PX, DRAG_SELECTION_MIN_SAMPLES_PER_AXIS, DRAG_SELECTION_MAX_SAMPLES_PER_AXIS, DRAG_SELECTION_MAX_TOTAL_SAMPLE_POINTS, DRAG_SELECTION_EDGE_INSET_PX, MAX_TRANSFORM_ANCESTOR_DEPTH, TRANSFORM_EARLY_BAIL_DEPTH, ELEMENT_POSITION_CACHE_DISTANCE_THRESHOLD_PX, ELEMENT_POSITION_THROTTLE_MS, VISIBILITY_CACHE_TTL_MS, ZOOM_DETECTION_THRESHOLD, MOUNT_ROOT_RECHECK_DELAY_MS, PANEL_STYLES, LOGO_SVG;
var init_constants = __esm({
  "src/constants.ts"() {
    "use strict";
    VERSION = "0.1.11-tw.1";
    VIEWPORT_MARGIN_PX = 8;
    OFFSCREEN_POSITION = -1e3;
    SELECTION_LERP_FACTOR = 0.95;
    FEEDBACK_DURATION_MS = 1500;
    FADE_DURATION_MS = 100;
    FADE_COMPLETE_BUFFER_MS = 150;
    DISMISS_ANIMATION_BUFFER_MS = 50;
    KEYDOWN_SPAM_TIMEOUT_MS = 200;
    BLUR_DEACTIVATION_THRESHOLD_MS = 500;
    INPUT_FOCUS_ACTIVATION_DELAY_MS = 150;
    INPUT_TEXT_SELECTION_ACTIVATION_DELAY_MS = 300;
    DEFAULT_KEY_HOLD_DURATION_MS = 75;
    MIN_HOLD_FOR_ACTIVATION_AFTER_COPY_MS = 200;
    RECENT_THRESHOLD_MS = 1e4;
    ACTION_CYCLE_IDLE_TRIGGER_MS = 600;
    ACTION_CYCLE_INPUT_THROTTLE_MS = 100;
    ACTION_CYCLE_SCROLL_THRESHOLD_PX = 30;
    ACTION_CYCLE_SCROLL_LINE_HEIGHT_PX = 16;
    ACTION_CYCLE_ACTION_IDS = [
      "copy",
      "comment",
      "screenshot",
      "copy-html",
      "open"
    ];
    DRAG_THRESHOLD_PX = 2;
    ELEMENT_DETECTION_THROTTLE_MS = 32;
    COMPONENT_NAME_DEBOUNCE_MS = 100;
    DRAG_PREVIEW_DEBOUNCE_MS = 32;
    BOUNDS_CACHE_TTL_MS = 16;
    BOUNDS_RECALC_INTERVAL_MS = 100;
    AUTO_SCROLL_EDGE_THRESHOLD_PX = 25;
    AUTO_SCROLL_SPEED_PX = 10;
    Z_INDEX_LABEL = 2147483647;
    Z_INDEX_OVERLAY_CANVAS = 2147483645;
    DRAG_LERP_FACTOR = 0.7;
    LERP_CONVERGENCE_THRESHOLD_PX = 0.5;
    FADE_OUT_BUFFER_MS = 100;
    MIN_DEVICE_PIXEL_RATIO = 2;
    GRAB_PURPLE_RGB = "210, 57, 192";
    OVERLAY_CROSSHAIR_COLOR = `rgba(${GRAB_PURPLE_RGB}, 1)`;
    OVERLAY_BORDER_COLOR_DRAG = `rgba(${GRAB_PURPLE_RGB}, 0.4)`;
    OVERLAY_FILL_COLOR_DRAG = `rgba(${GRAB_PURPLE_RGB}, 0.05)`;
    OVERLAY_BORDER_COLOR_DEFAULT = `rgba(${GRAB_PURPLE_RGB}, 0.5)`;
    OVERLAY_FILL_COLOR_DEFAULT = `rgba(${GRAB_PURPLE_RGB}, 0.08)`;
    FROZEN_GLOW_COLOR = `rgba(${GRAB_PURPLE_RGB}, 0.15)`;
    FROZEN_GLOW_EDGE_PX = 50;
    ARROW_HEIGHT_PX = 8;
    ARROW_CENTER_PERCENT = 50;
    LABEL_GAP_PX = 4;
    PREVIEW_ATTR_VALUE_MAX_LENGTH = 15;
    PREVIEW_MAX_ATTRS = 3;
    PREVIEW_PRIORITY_ATTRS = [
      "id",
      "class",
      "aria-label",
      "data-testid",
      "role",
      "name",
      "title"
    ];
    SCREENSHOT_CAPTURE_DELAY_MS = 50;
    VIDEO_METADATA_TIMEOUT_MS = 5e3;
    VIDEO_READY_POLL_INTERVAL_MS = 10;
    VIDEO_READY_TIMEOUT_MS = 2e3;
    MODIFIER_KEYS = [
      "Meta",
      "Control",
      "Shift",
      "Alt"
    ];
    ARROW_KEYS = /* @__PURE__ */ new Set([
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight"
    ]);
    FROZEN_ELEMENT_ATTRIBUTE = "data-react-grab-frozen";
    USER_IGNORE_ATTRIBUTE = "data-react-grab-ignore";
    VIEWPORT_COVERAGE_THRESHOLD = 0.9;
    OVERLAY_Z_INDEX_THRESHOLD = 1e3;
    DEV_TOOLS_OVERLAY_Z_INDEX_THRESHOLD = 2147483600;
    TOOLTIP_DELAY_MS = 400;
    TOOLTIP_GRACE_PERIOD_MS = 100;
    TOOLBAR_SNAP_MARGIN_PX = 16;
    TOOLBAR_FADE_IN_DELAY_MS = 500;
    TOOLBAR_SNAP_ANIMATION_DURATION_MS = 300;
    TOOLBAR_DRAG_THRESHOLD_PX = 5;
    TOOLBAR_VELOCITY_MULTIPLIER_MS = 150;
    TOOLBAR_COLLAPSED_SHORT_PX = 14;
    TOOLBAR_COLLAPSED_LONG_PX = 28;
    TOOLBAR_COLLAPSE_ANIMATION_DURATION_MS = 150;
    TOOLBAR_DEFAULT_WIDTH_PX = 78;
    TOOLBAR_DEFAULT_HEIGHT_PX = 28;
    TOOLBAR_SHAKE_TOOLTIP_DURATION_MS = 1500;
    DRAG_SELECTION_COVERAGE_THRESHOLD = 0.75;
    DRAG_SELECTION_SAMPLE_SPACING_PX = 32;
    DRAG_SELECTION_MIN_SAMPLES_PER_AXIS = 3;
    DRAG_SELECTION_MAX_SAMPLES_PER_AXIS = 20;
    DRAG_SELECTION_MAX_TOTAL_SAMPLE_POINTS = 100;
    DRAG_SELECTION_EDGE_INSET_PX = 1;
    MAX_TRANSFORM_ANCESTOR_DEPTH = 6;
    TRANSFORM_EARLY_BAIL_DEPTH = 3;
    ELEMENT_POSITION_CACHE_DISTANCE_THRESHOLD_PX = 2;
    ELEMENT_POSITION_THROTTLE_MS = 16;
    VISIBILITY_CACHE_TTL_MS = 50;
    ZOOM_DETECTION_THRESHOLD = 0.01;
    MOUNT_ROOT_RECHECK_DELAY_MS = 1e3;
    PANEL_STYLES = "bg-white";
    LOGO_SVG = `<svg width="294" height="294" viewBox="0 0 294 294" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_3)"><mask id="mask0_0_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="294" height="294"><path d="M294 0H0V294H294V0Z" fill="white"/></mask><g mask="url(#mask0_0_3)"><path d="M144.599 47.4924C169.712 27.3959 194.548 20.0265 212.132 30.1797C227.847 39.2555 234.881 60.3243 231.926 89.516C231.677 92.0069 231.328 94.5423 230.94 97.1058L228.526 110.14C228.517 110.136 228.505 110.132 228.495 110.127C228.486 110.165 228.479 110.203 228.468 110.24L216.255 105.741C216.256 105.736 216.248 105.728 216.248 105.723C207.915 103.125 199.421 101.075 190.82 99.5888L190.696 99.5588L173.526 97.2648L173.511 97.2631C173.492 97.236 173.467 97.2176 173.447 97.1905C163.862 96.2064 154.233 95.7166 144.599 95.7223C134.943 95.7162 125.295 96.219 115.693 97.2286C110.075 105.033 104.859 113.118 100.063 121.453C95.2426 129.798 90.8624 138.391 86.939 147.193C90.8624 155.996 95.2426 164.588 100.063 172.933C104.866 181.302 110.099 189.417 115.741 197.245C115.749 197.245 115.758 197.246 115.766 197.247L115.752 197.27L115.745 197.283L115.754 197.296L126.501 211.013L126.574 211.089C132.136 217.767 138.126 224.075 144.507 229.974L144.609 230.082L154.572 238.287C154.539 238.319 154.506 238.35 154.472 238.38C154.485 238.392 154.499 238.402 154.513 238.412L143.846 247.482L143.827 247.497C126.56 261.128 109.472 268.745 94.8019 268.745C88.5916 268.837 82.4687 267.272 77.0657 264.208C61.3496 255.132 54.3164 234.062 57.2707 204.871C57.528 202.307 57.8806 199.694 58.2904 197.054C28.3363 185.327 9.52301 167.51 9.52301 147.193C9.52301 129.042 24.2476 112.396 50.9901 100.375C53.3443 99.3163 55.7938 98.3058 58.2904 97.3526C57.8806 94.7023 57.528 92.0803 57.2707 89.516C54.3164 60.3243 61.3496 39.2555 77.0657 30.1797C94.6494 20.0265 119.486 27.3959 144.599 47.4924ZM70.6423 201.315C70.423 202.955 70.2229 204.566 70.0704 206.168C67.6686 229.567 72.5478 246.628 83.3615 252.988L83.5176 253.062C95.0399 259.717 114.015 254.426 134.782 238.38C125.298 229.45 116.594 219.725 108.764 209.314C95.8516 207.742 83.0977 205.066 70.6423 201.315ZM80.3534 163.438C77.34 171.677 74.8666 180.104 72.9484 188.664C81.1787 191.224 89.5657 193.247 98.0572 194.724L98.4618 194.813C95.2115 189.865 92.0191 184.66 88.9311 179.378C85.8433 174.097 83.003 168.768 80.3534 163.438ZM60.759 110.203C59.234 110.839 57.7378 111.475 56.27 112.11C34.7788 121.806 22.3891 134.591 22.3891 147.193C22.3891 160.493 36.4657 174.297 60.7494 184.26C63.7439 171.581 67.8124 159.182 72.9104 147.193C67.822 135.23 63.7566 122.855 60.759 110.203ZM98.4137 99.6404C89.8078 101.145 81.3075 103.206 72.9676 105.809C74.854 114.203 77.2741 122.468 80.2132 130.554L80.3059 130.939C82.9938 125.6 85.8049 120.338 88.8834 115.008C91.9618 109.679 95.1544 104.569 98.4137 99.6404ZM94.9258 38.5215C90.9331 38.4284 86.9866 39.3955 83.4891 41.3243C72.6291 47.6015 67.6975 64.5954 70.0424 87.9446L70.0416 88.2194C70.194 89.8208 70.3941 91.4325 70.6134 93.0624C83.0737 89.3364 95.8263 86.6703 108.736 85.0924C116.57 74.6779 125.28 64.9532 134.773 56.0249C119.877 44.5087 105.895 38.5215 94.9258 38.5215ZM205.737 41.3148C202.268 39.398 198.355 38.4308 194.394 38.5099L194.29 38.512C183.321 38.512 169.34 44.4991 154.444 56.0153C163.93 64.9374 172.634 74.6557 180.462 85.064C193.375 86.6345 206.128 89.3102 218.584 93.0624C218.812 91.4325 219.003 89.8118 219.165 88.2098C221.548 64.7099 216.65 47.6164 205.737 41.3148ZM144.552 64.3097C138.104 70.2614 132.054 76.6306 126.443 83.3765C132.39 82.995 138.426 82.8046 144.552 82.8046C150.727 82.8046 156.778 83.0143 162.707 83.3765C157.08 76.6293 151.015 70.2596 144.552 64.3097Z" fill="white"/><path d="M144.598 47.4924C169.712 27.3959 194.547 20.0265 212.131 30.1797C227.847 39.2555 234.88 60.3243 231.926 89.516C231.677 92.0069 231.327 94.5423 230.941 97.1058L228.526 110.14L228.496 110.127C228.487 110.165 228.478 110.203 228.469 110.24L216.255 105.741L216.249 105.723C207.916 103.125 199.42 101.075 190.82 99.5888L190.696 99.5588L173.525 97.2648L173.511 97.263C173.492 97.236 173.468 97.2176 173.447 97.1905C163.863 96.2064 154.234 95.7166 144.598 95.7223C134.943 95.7162 125.295 96.219 115.693 97.2286C110.075 105.033 104.859 113.118 100.063 121.453C95.2426 129.798 90.8622 138.391 86.939 147.193C90.8622 155.996 95.2426 164.588 100.063 172.933C104.866 181.302 110.099 189.417 115.741 197.245L115.766 197.247L115.752 197.27L115.745 197.283L115.754 197.296L126.501 211.013L126.574 211.089C132.136 217.767 138.126 224.075 144.506 229.974L144.61 230.082L154.572 238.287C154.539 238.319 154.506 238.35 154.473 238.38L154.512 238.412L143.847 247.482L143.827 247.497C126.56 261.13 109.472 268.745 94.8018 268.745C88.5915 268.837 82.4687 267.272 77.0657 264.208C61.3496 255.132 54.3162 234.062 57.2707 204.871C57.528 202.307 57.8806 199.694 58.2904 197.054C28.3362 185.327 9.52298 167.51 9.52298 147.193C9.52298 129.042 24.2476 112.396 50.9901 100.375C53.3443 99.3163 55.7938 98.3058 58.2904 97.3526C57.8806 94.7023 57.528 92.0803 57.2707 89.516C54.3162 60.3243 61.3496 39.2555 77.0657 30.1797C94.6493 20.0265 119.486 27.3959 144.598 47.4924ZM70.6422 201.315C70.423 202.955 70.2229 204.566 70.0704 206.168C67.6686 229.567 72.5478 246.628 83.3615 252.988L83.5175 253.062C95.0399 259.717 114.015 254.426 134.782 238.38C125.298 229.45 116.594 219.725 108.764 209.314C95.8515 207.742 83.0977 205.066 70.6422 201.315ZM80.3534 163.438C77.34 171.677 74.8666 180.104 72.9484 188.664C81.1786 191.224 89.5657 193.247 98.0572 194.724L98.4618 194.813C95.2115 189.865 92.0191 184.66 88.931 179.378C85.8433 174.097 83.003 168.768 80.3534 163.438ZM60.7589 110.203C59.234 110.839 57.7378 111.475 56.2699 112.11C34.7788 121.806 22.3891 134.591 22.3891 147.193C22.3891 160.493 36.4657 174.297 60.7494 184.26C63.7439 171.581 67.8124 159.182 72.9103 147.193C67.822 135.23 63.7566 122.855 60.7589 110.203ZM98.4137 99.6404C89.8078 101.145 81.3075 103.206 72.9676 105.809C74.8539 114.203 77.2741 122.468 80.2132 130.554L80.3059 130.939C82.9938 125.6 85.8049 120.338 88.8834 115.008C91.9618 109.679 95.1544 104.569 98.4137 99.6404ZM94.9258 38.5215C90.9331 38.4284 86.9866 39.3955 83.4891 41.3243C72.629 47.6015 67.6975 64.5954 70.0424 87.9446L70.0415 88.2194C70.194 89.8208 70.3941 91.4325 70.6134 93.0624C83.0737 89.3364 95.8262 86.6703 108.736 85.0924C116.57 74.6779 125.28 64.9532 134.772 56.0249C119.877 44.5087 105.895 38.5215 94.9258 38.5215ZM205.737 41.3148C202.268 39.398 198.355 38.4308 194.394 38.5099L194.291 38.512C183.321 38.512 169.34 44.4991 154.443 56.0153C163.929 64.9374 172.634 74.6557 180.462 85.064C193.374 86.6345 206.129 89.3102 218.584 93.0624C218.813 91.4325 219.003 89.8118 219.166 88.2098C221.548 64.7099 216.65 47.6164 205.737 41.3148ZM144.551 64.3097C138.103 70.2614 132.055 76.6306 126.443 83.3765C132.389 82.995 138.427 82.8046 144.551 82.8046C150.727 82.8046 156.779 83.0143 162.707 83.3765C157.079 76.6293 151.015 70.2596 144.551 64.3097Z" fill="#FF40E0"/></g><mask id="mask1_0_3" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="102" y="84" width="161" height="162"><path d="M235.282 84.827L102.261 112.259L129.693 245.28L262.714 217.848L235.282 84.827Z" fill="white"/></mask><g mask="url(#mask1_0_3)"><path d="M136.863 129.916L213.258 141.224C220.669 142.322 222.495 152.179 215.967 155.856L187.592 171.843L184.135 204.227C183.339 211.678 173.564 213.901 169.624 207.526L129.021 141.831C125.503 136.14 130.245 128.936 136.863 129.916Z" fill="#FF40E0" stroke="#FF40E0" stroke-width="0.817337" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_0_3"><rect width="294" height="294" fill="white"/></clipPath></defs></svg>`;
  }
});

// src/utils/strip-translate-from-transform.ts
var isValidNumber, parseMatrixValue, parseMatrixValues, isIdentityMatrix2d, isIdentityMatrix3d, stripTranslateFromTransformString, stripTranslateFromMatrix;
var init_strip_translate_from_transform = __esm({
  "src/utils/strip-translate-from-transform.ts"() {
    "use strict";
    isValidNumber = (value) => typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    parseMatrixValue = (value) => {
      const trimmedValue = value.trim();
      if (!trimmedValue) return null;
      const parsedValue = parseFloat(trimmedValue);
      return isValidNumber(parsedValue) ? parsedValue : null;
    };
    parseMatrixValues = (valuesString, expectedLength) => {
      const rawValues = valuesString.split(",");
      if (rawValues.length !== expectedLength) {
        return null;
      }
      const parsedValues = [];
      for (const rawValue of rawValues) {
        const parsedValue = parseMatrixValue(rawValue);
        if (parsedValue === null) {
          return null;
        }
        parsedValues.push(parsedValue);
      }
      return parsedValues;
    };
    isIdentityMatrix2d = (a3, b3, c3, d3) => a3 === 1 && b3 === 0 && c3 === 0 && d3 === 1;
    isIdentityMatrix3d = (values) => values[0] === 1 && values[1] === 0 && values[2] === 0 && values[3] === 0 && values[4] === 0 && values[5] === 1 && values[6] === 0 && values[7] === 0 && values[8] === 0 && values[9] === 0 && values[10] === 1 && values[11] === 0 && values[15] === 1;
    stripTranslateFromTransformString = (transform) => {
      if (!transform || transform === "none") return "none";
      if (transform.charCodeAt(0) === 109) {
        if (transform.charCodeAt(6) === 51) {
          const start = 9;
          const end = transform.length - 1;
          const values = parseMatrixValues(transform.slice(start, end), 16);
          if (values) {
            values[12] = 0;
            values[13] = 0;
            values[14] = 0;
            if (isIdentityMatrix3d(values)) return "none";
            return `matrix3d(${values[0]}, ${values[1]}, ${values[2]}, ${values[3]}, ${values[4]}, ${values[5]}, ${values[6]}, ${values[7]}, ${values[8]}, ${values[9]}, ${values[10]}, ${values[11]}, 0, 0, 0, ${values[15]})`;
          }
        } else {
          const start = 7;
          const end = transform.length - 1;
          const values = parseMatrixValues(transform.slice(start, end), 6);
          if (values) {
            const a3 = values[0];
            const b3 = values[1];
            const c3 = values[2];
            const d3 = values[3];
            if (isIdentityMatrix2d(a3, b3, c3, d3)) return "none";
            return `matrix(${a3}, ${b3}, ${c3}, ${d3}, 0, 0)`;
          }
        }
      }
      return "none";
    };
    stripTranslateFromMatrix = (matrix) => {
      if (matrix.isIdentity) return "none";
      if (matrix.is2D) {
        if (isIdentityMatrix2d(matrix.a, matrix.b, matrix.c, matrix.d))
          return "none";
        return `matrix(${matrix.a}, ${matrix.b}, ${matrix.c}, ${matrix.d}, 0, 0)`;
      }
      if (matrix.m11 === 1 && matrix.m12 === 0 && matrix.m13 === 0 && matrix.m14 === 0 && matrix.m21 === 0 && matrix.m22 === 1 && matrix.m23 === 0 && matrix.m24 === 0 && matrix.m31 === 0 && matrix.m32 === 0 && matrix.m33 === 1 && matrix.m34 === 0 && matrix.m44 === 1) {
        return "none";
      }
      return `matrix3d(${matrix.m11}, ${matrix.m12}, ${matrix.m13}, ${matrix.m14}, ${matrix.m21}, ${matrix.m22}, ${matrix.m23}, ${matrix.m24}, ${matrix.m31}, ${matrix.m32}, ${matrix.m33}, ${matrix.m34}, 0, 0, 0, ${matrix.m44})`;
    };
  }
});

// src/utils/create-element-bounds.ts
var boundsCache, invalidateBoundsCache, getAccumulatedTransform, createElementBounds;
var init_create_element_bounds = __esm({
  "src/utils/create-element-bounds.ts"() {
    "use strict";
    init_strip_translate_from_transform();
    init_constants();
    boundsCache = /* @__PURE__ */ new WeakMap();
    invalidateBoundsCache = () => {
      boundsCache = /* @__PURE__ */ new WeakMap();
    };
    getAccumulatedTransform = (element, selfTransform) => {
      const hasSelfTransform = selfTransform && selfTransform !== "none";
      let accumulated = null;
      let current = element.parentElement;
      let depth = 0;
      while (current && current !== document.documentElement && depth < MAX_TRANSFORM_ANCESTOR_DEPTH) {
        const transformValue = window.getComputedStyle(current).transform;
        if (transformValue && transformValue !== "none") {
          accumulated = accumulated ? new DOMMatrix(transformValue).multiply(accumulated) : new DOMMatrix(transformValue);
        } else if (!hasSelfTransform && !accumulated && depth >= TRANSFORM_EARLY_BAIL_DEPTH) {
          return "none";
        }
        current = current.parentElement;
        depth++;
      }
      if (!accumulated) {
        return hasSelfTransform ? stripTranslateFromTransformString(selfTransform) : "none";
      }
      if (hasSelfTransform) {
        accumulated = accumulated.multiply(new DOMMatrix(selfTransform));
      }
      return stripTranslateFromMatrix(accumulated);
    };
    createElementBounds = (element) => {
      const now = performance.now();
      const cached = boundsCache.get(element);
      if (cached && now - cached.timestamp < BOUNDS_CACHE_TTL_MS) {
        return cached.bounds;
      }
      const rect = element.getBoundingClientRect();
      const style2 = window.getComputedStyle(element);
      const transform = getAccumulatedTransform(element, style2.transform);
      let bounds;
      if (transform !== "none" && element instanceof HTMLElement) {
        const ow = element.offsetWidth;
        const oh = element.offsetHeight;
        if (ow > 0 && oh > 0) {
          const cx = rect.left + rect.width * 0.5;
          const cy = rect.top + rect.height * 0.5;
          bounds = {
            borderRadius: style2.borderRadius || "0px",
            height: oh,
            transform,
            width: ow,
            x: cx - ow * 0.5,
            y: cy - oh * 0.5
          };
        } else {
          bounds = {
            borderRadius: style2.borderRadius || "0px",
            height: rect.height,
            transform,
            width: rect.width,
            x: rect.left,
            y: rect.top
          };
        }
      } else {
        bounds = {
          borderRadius: style2.borderRadius || "0px",
          height: rect.height,
          transform,
          width: rect.width,
          x: rect.left,
          y: rect.top
        };
      }
      boundsCache.set(element, { bounds, timestamp: now });
      return bounds;
    };
  }
});

// src/utils/is-element-connected.ts
var isElementConnected;
var init_is_element_connected = __esm({
  "src/utils/is-element-connected.ts"() {
    "use strict";
    isElementConnected = (element) => Boolean(element?.isConnected ?? element?.ownerDocument?.contains(element));
  }
});

// src/core/store.ts
var createInitialStore, createGrabStore;
var init_store2 = __esm({
  "src/core/store.ts"() {
    "use strict";
    init_store();
    init_constants();
    init_create_element_bounds();
    init_is_element_connected();
    createInitialStore = (input) => ({
      current: { state: "idle" },
      wasActivatedByToggle: false,
      pendingCommentMode: false,
      hasAgentProvider: input.hasAgentProvider,
      keyHoldDuration: input.keyHoldDuration,
      pointer: { x: OFFSCREEN_POSITION, y: OFFSCREEN_POSITION },
      dragStart: { x: OFFSCREEN_POSITION, y: OFFSCREEN_POSITION },
      copyStart: { x: OFFSCREEN_POSITION, y: OFFSCREEN_POSITION },
      copyOffsetFromCenterX: 0,
      detectedElement: null,
      frozenElement: null,
      frozenElements: [],
      frozenDragRect: null,
      lastGrabbedElement: null,
      lastCopiedElement: null,
      selectionFilePath: null,
      selectionLineNumber: null,
      inputText: "",
      pendingClickData: null,
      replySessionId: null,
      viewportVersion: 0,
      grabbedBoxes: [],
      labelInstances: [],
      agentSessions: /* @__PURE__ */ new Map(),
      sessionElements: /* @__PURE__ */ new Map(),
      isTouchMode: false,
      theme: input.theme,
      activationTimestamp: null,
      previouslyFocusedElement: null,
      canUndo: false,
      canRedo: false,
      isAgentConnected: false,
      supportsUndo: false,
      supportsFollowUp: false,
      dismissButtonText: void 0,
      pendingAbortSessionId: null,
      contextMenuPosition: null,
      contextMenuElement: null,
      contextMenuClickOffset: null,
      selectedAgent: null
    });
    createGrabStore = (input) => {
      const [store, setStore] = createStore(createInitialStore(input));
      const isActive = () => store.current.state === "active";
      const isHolding = () => store.current.state === "holding";
      const actions = {
        startHold: (duration) => {
          if (duration !== void 0) {
            setStore("keyHoldDuration", duration);
          }
          setStore("current", { state: "holding", startedAt: Date.now() });
        },
        release: () => {
          if (store.current.state === "holding") {
            setStore("current", { state: "idle" });
          }
        },
        activate: () => {
          setStore("current", {
            state: "active",
            phase: "hovering",
            isPromptMode: false,
            isPendingDismiss: false
          });
          setStore("activationTimestamp", Date.now());
          setStore("previouslyFocusedElement", document.activeElement);
        },
        deactivate: () => {
          setStore("current", { state: "idle" });
          setStore("wasActivatedByToggle", false);
          setStore("pendingCommentMode", false);
          setStore("inputText", "");
          setStore("frozenElement", null);
          setStore("frozenElements", []);
          setStore("frozenDragRect", null);
          setStore("pendingClickData", null);
          setStore("replySessionId", null);
          setStore("pendingAbortSessionId", null);
          setStore("activationTimestamp", null);
          setStore("previouslyFocusedElement", null);
          setStore("contextMenuPosition", null);
          setStore("contextMenuElement", null);
          setStore("contextMenuClickOffset", null);
          setStore("selectedAgent", null);
        },
        toggle: () => {
          if (store.activationTimestamp !== null) {
            actions.deactivate();
          } else {
            setStore("wasActivatedByToggle", true);
            actions.activate();
          }
        },
        freeze: () => {
          if (store.current.state === "active") {
            const elementToFreeze = store.frozenElement ?? store.detectedElement;
            if (elementToFreeze) {
              setStore("frozenElement", elementToFreeze);
            }
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.phase = "frozen";
                }
              })
            );
          }
        },
        unfreeze: () => {
          if (store.current.state === "active") {
            setStore("frozenElement", null);
            setStore("frozenElements", []);
            setStore("frozenDragRect", null);
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.phase = "hovering";
                }
              })
            );
          }
        },
        startDrag: (position) => {
          if (store.current.state === "active") {
            actions.clearFrozenElement();
            setStore("dragStart", {
              x: position.x + window.scrollX,
              y: position.y + window.scrollY
            });
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.phase = "dragging";
                }
              })
            );
          }
        },
        endDrag: () => {
          if (store.current.state === "active" && store.current.phase === "dragging") {
            setStore("dragStart", { x: OFFSCREEN_POSITION, y: OFFSCREEN_POSITION });
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.phase = "justDragged";
                }
              })
            );
          }
        },
        cancelDrag: () => {
          if (store.current.state === "active" && store.current.phase === "dragging") {
            setStore("dragStart", { x: OFFSCREEN_POSITION, y: OFFSCREEN_POSITION });
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.phase = "hovering";
                }
              })
            );
          }
        },
        finishJustDragged: () => {
          if (store.current.state === "active" && store.current.phase === "justDragged") {
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.phase = "hovering";
                }
              })
            );
          }
        },
        startCopy: () => {
          const wasActive = store.current.state === "active";
          setStore("current", {
            state: "copying",
            startedAt: Date.now(),
            wasActive
          });
        },
        completeCopy: (element) => {
          setStore("pendingClickData", null);
          if (element) {
            setStore("lastCopiedElement", element);
          }
          const wasActive = store.current.state === "copying" ? store.current.wasActive : false;
          setStore("current", {
            state: "justCopied",
            copiedAt: Date.now(),
            wasActive
          });
        },
        finishJustCopied: () => {
          if (store.current.state === "justCopied") {
            const shouldReturnToActive = store.current.wasActive && !store.wasActivatedByToggle;
            if (shouldReturnToActive) {
              setStore("current", {
                state: "active",
                phase: "hovering",
                isPromptMode: false,
                isPendingDismiss: false
              });
            } else {
              actions.deactivate();
            }
          }
        },
        enterPromptMode: (position, element) => {
          const bounds = createElementBounds(element);
          const selectionCenterX = bounds.x + bounds.width / 2;
          setStore("copyStart", position);
          setStore("copyOffsetFromCenterX", position.x - selectionCenterX);
          setStore("pointer", position);
          setStore("frozenElement", element);
          setStore("wasActivatedByToggle", true);
          if (store.current.state !== "active") {
            setStore("current", {
              state: "active",
              phase: "frozen",
              isPromptMode: true,
              isPendingDismiss: false
            });
            setStore("activationTimestamp", Date.now());
            setStore("previouslyFocusedElement", document.activeElement);
          } else {
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.isPromptMode = true;
                  current.phase = "frozen";
                }
              })
            );
          }
        },
        exitPromptMode: () => {
          if (store.current.state === "active") {
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.isPromptMode = false;
                  current.isPendingDismiss = false;
                }
              })
            );
          }
        },
        setInputText: (value) => {
          setStore("inputText", value);
        },
        clearInputText: () => {
          setStore("inputText", "");
        },
        setPendingDismiss: (value) => {
          if (store.current.state === "active") {
            setStore(
              "current",
              produce((current) => {
                if (current.state === "active") {
                  current.isPendingDismiss = value;
                }
              })
            );
          }
        },
        setPointer: (position) => {
          setStore("pointer", position);
        },
        setDetectedElement: (element) => {
          setStore("detectedElement", element);
        },
        setFrozenElement: (element) => {
          setStore("frozenElement", element);
          setStore("frozenElements", [element]);
          setStore("frozenDragRect", null);
        },
        setFrozenElements: (elements) => {
          setStore("frozenElements", elements);
          setStore("frozenElement", elements.length > 0 ? elements[0] : null);
          setStore("frozenDragRect", null);
        },
        setFrozenDragRect: (rect) => {
          setStore("frozenDragRect", rect);
        },
        clearFrozenElement: () => {
          setStore("frozenElement", null);
          setStore("frozenElements", []);
          setStore("frozenDragRect", null);
        },
        setCopyStart: (position, element) => {
          const bounds = createElementBounds(element);
          const selectionCenterX = bounds.x + bounds.width / 2;
          setStore("copyStart", position);
          setStore("copyOffsetFromCenterX", position.x - selectionCenterX);
        },
        setLastGrabbed: (element) => {
          setStore("lastGrabbedElement", element);
        },
        setLastCopied: (element) => {
          setStore("lastCopiedElement", element);
        },
        clearLastCopied: () => {
          setStore("lastCopiedElement", null);
        },
        setWasActivatedByToggle: (value) => {
          setStore("wasActivatedByToggle", value);
        },
        setPendingCommentMode: (value) => {
          setStore("pendingCommentMode", value);
        },
        setTouchMode: (value) => {
          setStore("isTouchMode", value);
        },
        setSelectionSource: (filePath, lineNumber) => {
          setStore("selectionFilePath", filePath);
          setStore("selectionLineNumber", lineNumber);
        },
        clearSelectionSource: () => {
          setStore("selectionFilePath", null);
          setStore("selectionLineNumber", null);
        },
        setPendingClickData: (data) => {
          setStore("pendingClickData", data);
        },
        clearPendingClickData: () => {
          setStore("pendingClickData", null);
        },
        setReplySessionId: (sessionId) => {
          setStore("replySessionId", sessionId);
        },
        clearReplySessionId: () => {
          setStore("replySessionId", null);
        },
        incrementViewportVersion: () => {
          setStore("viewportVersion", (version) => version + 1);
        },
        addGrabbedBox: (box) => {
          setStore("grabbedBoxes", (boxes) => [...boxes, box]);
        },
        removeGrabbedBox: (boxId) => {
          setStore(
            "grabbedBoxes",
            (boxes) => boxes.filter((box) => box.id !== boxId)
          );
        },
        clearGrabbedBoxes: () => {
          setStore("grabbedBoxes", []);
        },
        addLabelInstance: (instance) => {
          setStore("labelInstances", (instances) => [...instances, instance]);
        },
        updateLabelInstance: (instanceId, status, errorMessage) => {
          const index = store.labelInstances.findIndex(
            (instance) => instance.id === instanceId
          );
          if (index !== -1) {
            setStore(
              "labelInstances",
              index,
              produce((instance) => {
                instance.status = status;
                if (errorMessage !== void 0) {
                  instance.errorMessage = errorMessage;
                }
              })
            );
          }
        },
        removeLabelInstance: (instanceId) => {
          setStore(
            "labelInstances",
            (instances) => instances.filter((instance) => instance.id !== instanceId)
          );
        },
        removeLabelsForElement: (element) => {
          setStore(
            "labelInstances",
            (instances) => instances.filter((instance) => instance.element !== element)
          );
        },
        clearLabelInstances: () => {
          setStore("labelInstances", []);
        },
        setHasAgentProvider: (value) => {
          setStore("hasAgentProvider", value);
        },
        setUndoRedoState: (canUndo, canRedo) => {
          setStore("canUndo", canUndo);
          setStore("canRedo", canRedo);
        },
        setAgentCapabilities: (capabilities) => {
          setStore("supportsUndo", capabilities.supportsUndo);
          setStore("supportsFollowUp", capabilities.supportsFollowUp);
          setStore("dismissButtonText", capabilities.dismissButtonText);
          setStore("isAgentConnected", capabilities.isAgentConnected);
        },
        setPendingAbortSessionId: (sessionId) => {
          setStore("pendingAbortSessionId", sessionId);
        },
        updateSessionBounds: () => {
          const currentSessions = store.agentSessions;
          if (currentSessions.size === 0) return;
          const updatedSessions = new Map(currentSessions);
          let didUpdate = false;
          for (const [sessionId, session] of currentSessions) {
            const element = store.sessionElements.get(sessionId) ?? null;
            if (isElementConnected(element)) {
              const newBounds = createElementBounds(element);
              const oldFirstBounds = session.selectionBounds[0];
              let updatedPosition = session.position;
              if (oldFirstBounds) {
                const oldCenterX = oldFirstBounds.x + oldFirstBounds.width / 2;
                const oldHalfWidth = oldFirstBounds.width / 2;
                const offsetX = session.position.x - oldCenterX;
                const offsetRatio = oldHalfWidth > 0 ? offsetX / oldHalfWidth : 0;
                const newCenterX = newBounds.x + newBounds.width / 2;
                const newHalfWidth = newBounds.width / 2;
                updatedPosition = {
                  ...session.position,
                  x: newCenterX + offsetRatio * newHalfWidth
                };
              }
              updatedSessions.set(sessionId, {
                ...session,
                selectionBounds: [newBounds],
                position: updatedPosition
              });
              didUpdate = true;
            }
          }
          if (didUpdate) {
            setStore("agentSessions", updatedSessions);
          }
        },
        addAgentSession: (sessionId, session, element) => {
          const newSessions = new Map(store.agentSessions);
          newSessions.set(sessionId, session);
          setStore("agentSessions", newSessions);
          const newSessionElements = new Map(store.sessionElements);
          newSessionElements.set(sessionId, element);
          setStore("sessionElements", newSessionElements);
        },
        updateAgentSessionStatus: (sessionId, status) => {
          const session = store.agentSessions.get(sessionId);
          if (!session) return;
          const newSessions = new Map(store.agentSessions);
          newSessions.set(sessionId, { ...session, lastStatus: status });
          setStore("agentSessions", newSessions);
        },
        completeAgentSession: (sessionId, status) => {
          const session = store.agentSessions.get(sessionId);
          if (!session) return;
          const newSessions = new Map(store.agentSessions);
          newSessions.set(sessionId, {
            ...session,
            isStreaming: false,
            lastStatus: status ?? session.lastStatus
          });
          setStore("agentSessions", newSessions);
        },
        setAgentSessionError: (sessionId, error) => {
          const session = store.agentSessions.get(sessionId);
          if (!session) return;
          const newSessions = new Map(store.agentSessions);
          newSessions.set(sessionId, { ...session, isStreaming: false, error });
          setStore("agentSessions", newSessions);
        },
        removeAgentSession: (sessionId) => {
          const newSessions = new Map(store.agentSessions);
          newSessions.delete(sessionId);
          setStore("agentSessions", newSessions);
          const newSessionElements = new Map(store.sessionElements);
          newSessionElements.delete(sessionId);
          setStore("sessionElements", newSessionElements);
        },
        showContextMenu: (position, element) => {
          const bounds = createElementBounds(element);
          const centerX = bounds.x + bounds.width / 2;
          const centerY = bounds.y + bounds.height / 2;
          setStore("contextMenuPosition", position);
          setStore("contextMenuElement", element);
          setStore("contextMenuClickOffset", {
            x: position.x - centerX,
            y: position.y - centerY
          });
        },
        hideContextMenu: () => {
          setStore("contextMenuPosition", null);
          setStore("contextMenuElement", null);
          setStore("contextMenuClickOffset", null);
        },
        updateContextMenuPosition: () => {
          const element = store.contextMenuElement;
          const clickOffset = store.contextMenuClickOffset;
          if (!element || !clickOffset) return;
          if (!isElementConnected(element)) return;
          const newBounds = createElementBounds(element);
          const newCenterX = newBounds.x + newBounds.width / 2;
          const newCenterY = newBounds.y + newBounds.height / 2;
          setStore("contextMenuPosition", {
            x: newCenterX + clickOffset.x,
            y: newCenterY + clickOffset.y
          });
        },
        setSelectedAgent: (agent) => {
          setStore("selectedAgent", agent);
        },
        clearSelectedAgent: () => {
          setStore("selectedAgent", null);
        }
      };
      return { store, setStore, actions, isActive, isHolding };
    };
  }
});

// src/utils/get-tag-name.ts
var getTagName;
var init_get_tag_name = __esm({
  "src/utils/get-tag-name.ts"() {
    "use strict";
    getTagName = (element) => (element.tagName || "").toLowerCase();
  }
});

// src/utils/is-keyboard-event-triggered-by-input.ts
var EDITABLE_TAGS_AND_ROLES, getTargetElement, isKeyboardEventTriggeredByInput, hasTextSelectionInInput, hasTextSelectionOnPage;
var init_is_keyboard_event_triggered_by_input = __esm({
  "src/utils/is-keyboard-event-triggered-by-input.ts"() {
    "use strict";
    init_get_tag_name();
    EDITABLE_TAGS_AND_ROLES = [
      "input",
      "textarea",
      "select",
      "searchbox",
      "slider",
      "spinbutton",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio",
      "option",
      "radio",
      "textbox",
      "combobox"
    ];
    getTargetElement = (event) => {
      if (event.composed) {
        const firstElement = event.composedPath()[0];
        if (firstElement instanceof HTMLElement) {
          return firstElement;
        }
      } else if (event.target instanceof HTMLElement) {
        return event.target;
      }
      return void 0;
    };
    isKeyboardEventTriggeredByInput = (event) => {
      if (document.designMode === "on") return true;
      const targetElement = getTargetElement(event);
      if (!targetElement) return false;
      if (targetElement.isContentEditable) return true;
      const tagName = getTagName(targetElement);
      return EDITABLE_TAGS_AND_ROLES.some(
        (tagOrRole) => tagOrRole === tagName || tagOrRole === targetElement.role
      );
    };
    hasTextSelectionInInput = (event) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        const selectionStart = target.selectionStart ?? 0;
        const selectionEnd = target.selectionEnd ?? 0;
        return selectionEnd - selectionStart > 0;
      }
      return false;
    };
    hasTextSelectionOnPage = () => {
      const selection = window.getSelection();
      if (!selection) return false;
      return selection.toString().length > 0;
    };
  }
});

// src/utils/mount-root.ts
var ATTRIBUTE_NAME, FONT_LINK_ID, FONT_LINK_URL, loadFonts, mountRoot;
var init_mount_root = __esm({
  "src/utils/mount-root.ts"() {
    "use strict";
    init_constants();
    ATTRIBUTE_NAME = "data-react-grab";
    FONT_LINK_ID = "react-grab-fonts";
    FONT_LINK_URL = "https://fonts.googleapis.com/css2?family=Geist:wght@500&display=swap";
    loadFonts = () => {
      if (document.getElementById(FONT_LINK_ID)) return;
      if (!document.head) return;
      const link = document.createElement("link");
      link.id = FONT_LINK_ID;
      link.rel = "stylesheet";
      link.href = FONT_LINK_URL;
      document.head.appendChild(link);
    };
    mountRoot = (cssText) => {
      loadFonts();
      const mountedHost = document.querySelector(`[${ATTRIBUTE_NAME}]`);
      if (mountedHost) {
        const mountedRoot = mountedHost.shadowRoot?.querySelector(
          `[${ATTRIBUTE_NAME}]`
        );
        if (mountedRoot instanceof HTMLDivElement && mountedHost.shadowRoot) {
          return mountedRoot;
        }
      }
      const host = document.createElement("div");
      host.setAttribute(ATTRIBUTE_NAME, "true");
      host.style.zIndex = "2147483646";
      host.style.position = "fixed";
      host.style.inset = "0";
      host.style.pointerEvents = "none";
      const shadowRoot = host.attachShadow({ mode: "open" });
      if (cssText) {
        const styleElement2 = document.createElement("style");
        styleElement2.textContent = cssText;
        shadowRoot.appendChild(styleElement2);
      }
      const root = document.createElement("div");
      root.setAttribute(ATTRIBUTE_NAME, "true");
      shadowRoot.appendChild(root);
      const doc = document.body ?? document.documentElement;
      doc.appendChild(host);
      setTimeout(() => {
        if (!doc.contains(host)) {
          doc.appendChild(host);
        }
      }, MOUNT_ROOT_RECHECK_DELAY_MS);
      return root;
    };
  }
});

// src/utils/build-open-file-url.ts
var BASE_URL, buildOpenFileUrl;
var init_build_open_file_url = __esm({
  "src/utils/build-open-file-url.ts"() {
    "use strict";
    BASE_URL = process.env.NODE_ENV === "production" ? "https://react-grab.com" : "http://localhost:3000";
    buildOpenFileUrl = (filePath, lineNumber) => {
      const lineParam = lineNumber ? `&line=${lineNumber}` : "";
      return `${BASE_URL}/open-file?url=${encodeURIComponent(filePath)}${lineParam}`;
    };
  }
});

// src/utils/lerp.ts
var lerp;
var init_lerp = __esm({
  "src/utils/lerp.ts"() {
    "use strict";
    lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };
  }
});

// src/components/overlay-canvas.tsx
var _tmpl$, LAYER_STYLES, OverlayCanvas;
var init_overlay_canvas = __esm({
  "src/components/overlay-canvas.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_lerp();
    init_constants();
    _tmpl$ = /* @__PURE__ */ template(`<canvas data-react-grab-overlay-canvas style=position:fixed;top:0;left:0;pointer-events:none>`);
    LAYER_STYLES = {
      drag: {
        borderColor: OVERLAY_BORDER_COLOR_DRAG,
        fillColor: OVERLAY_FILL_COLOR_DRAG,
        lerpFactor: DRAG_LERP_FACTOR
      },
      selection: {
        borderColor: OVERLAY_BORDER_COLOR_DEFAULT,
        fillColor: OVERLAY_FILL_COLOR_DEFAULT,
        lerpFactor: SELECTION_LERP_FACTOR
      },
      grabbed: {
        borderColor: OVERLAY_BORDER_COLOR_DEFAULT,
        fillColor: OVERLAY_FILL_COLOR_DEFAULT,
        lerpFactor: SELECTION_LERP_FACTOR
      },
      processing: {
        borderColor: OVERLAY_BORDER_COLOR_DEFAULT,
        fillColor: OVERLAY_FILL_COLOR_DEFAULT,
        lerpFactor: SELECTION_LERP_FACTOR
      }
    };
    OverlayCanvas = (props) => {
      let canvasRef;
      let mainContext = null;
      let canvasWidth = 0;
      let canvasHeight = 0;
      let devicePixelRatio = 1;
      let animationFrameId = null;
      const layers = {
        crosshair: {
          canvas: null,
          context: null
        },
        drag: {
          canvas: null,
          context: null
        },
        selection: {
          canvas: null,
          context: null
        },
        grabbed: {
          canvas: null,
          context: null
        },
        processing: {
          canvas: null,
          context: null
        }
      };
      const crosshairCurrentPosition = {
        x: 0,
        y: 0
      };
      let selectionAnimations = [];
      let dragAnimation = null;
      let grabbedAnimations = [];
      let processingAnimations = [];
      const createOffscreenLayer = (layerWidth, layerHeight, scaleFactor) => {
        const canvas = new OffscreenCanvas(layerWidth * scaleFactor, layerHeight * scaleFactor);
        const context = canvas.getContext("2d");
        if (context) {
          context.scale(scaleFactor, scaleFactor);
        }
        return {
          canvas,
          context
        };
      };
      const initializeCanvas = () => {
        if (!canvasRef) return;
        devicePixelRatio = Math.max(window.devicePixelRatio || 1, MIN_DEVICE_PIXEL_RATIO);
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        canvasRef.width = canvasWidth * devicePixelRatio;
        canvasRef.height = canvasHeight * devicePixelRatio;
        canvasRef.style.width = `${canvasWidth}px`;
        canvasRef.style.height = `${canvasHeight}px`;
        mainContext = canvasRef.getContext("2d");
        if (mainContext) {
          mainContext.scale(devicePixelRatio, devicePixelRatio);
        }
        for (const layerName of Object.keys(layers)) {
          layers[layerName] = createOffscreenLayer(canvasWidth, canvasHeight, devicePixelRatio);
        }
      };
      const parseBorderRadiusValue = (borderRadius) => {
        if (!borderRadius) return 0;
        const match = borderRadius.match(/^(\d+(?:\.\d+)?)/);
        return match ? parseFloat(match[1]) : 0;
      };
      const createAnimatedBounds = (id, bounds, options) => ({
        id,
        current: {
          x: bounds.x,
          y: bounds.y,
          width: bounds.width,
          height: bounds.height
        },
        target: {
          x: bounds.x,
          y: bounds.y,
          width: bounds.width,
          height: bounds.height
        },
        borderRadius: parseBorderRadiusValue(bounds.borderRadius),
        opacity: options?.opacity ?? 1,
        targetOpacity: options?.targetOpacity ?? options?.opacity ?? 1,
        createdAt: options?.createdAt,
        isInitialized: true
      });
      const updateAnimationTarget = (animation, bounds, targetOpacity) => {
        animation.target = {
          x: bounds.x,
          y: bounds.y,
          width: bounds.width,
          height: bounds.height
        };
        animation.borderRadius = parseBorderRadiusValue(bounds.borderRadius);
        if (targetOpacity !== void 0) {
          animation.targetOpacity = targetOpacity;
        }
      };
      const resolveBoundsArray = (instance) => instance.boundsMultiple ?? [instance.bounds];
      const drawRoundedRectangle = (context, rectX, rectY, rectWidth, rectHeight, cornerRadius, fillColor, strokeColor, opacity = 1) => {
        if (rectWidth <= 0 || rectHeight <= 0) return;
        const maxCornerRadius = Math.min(rectWidth / 2, rectHeight / 2);
        const clampedCornerRadius = Math.min(cornerRadius, maxCornerRadius);
        context.globalAlpha = opacity;
        context.beginPath();
        if (clampedCornerRadius > 0) {
          context.roundRect(rectX, rectY, rectWidth, rectHeight, clampedCornerRadius);
        } else {
          context.rect(rectX, rectY, rectWidth, rectHeight);
        }
        context.fillStyle = fillColor;
        context.fill();
        context.strokeStyle = strokeColor;
        context.lineWidth = 1;
        context.stroke();
        context.globalAlpha = 1;
      };
      const renderCrosshairLayer = () => {
        const layer = layers.crosshair;
        if (!layer.context) return;
        const context = layer.context;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        if (!props.crosshairVisible) return;
        context.strokeStyle = OVERLAY_CROSSHAIR_COLOR;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(crosshairCurrentPosition.x, 0);
        context.lineTo(crosshairCurrentPosition.x, canvasHeight);
        context.moveTo(0, crosshairCurrentPosition.y);
        context.lineTo(canvasWidth, crosshairCurrentPosition.y);
        context.stroke();
      };
      const renderDragLayer = () => {
        const layer = layers.drag;
        if (!layer.context) return;
        const context = layer.context;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        if (!props.dragVisible || !dragAnimation) return;
        const style2 = LAYER_STYLES.drag;
        drawRoundedRectangle(context, dragAnimation.current.x, dragAnimation.current.y, dragAnimation.current.width, dragAnimation.current.height, dragAnimation.borderRadius, style2.fillColor, style2.borderColor);
      };
      const renderSelectionLayer = () => {
        const layer = layers.selection;
        if (!layer.context) return;
        const context = layer.context;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        if (!props.selectionVisible) return;
        const style2 = LAYER_STYLES.selection;
        for (const animation of selectionAnimations) {
          const effectiveOpacity = props.selectionIsFading ? 0 : animation.opacity;
          drawRoundedRectangle(context, animation.current.x, animation.current.y, animation.current.width, animation.current.height, animation.borderRadius, style2.fillColor, style2.borderColor, effectiveOpacity);
        }
      };
      const renderGrabbedLayer = () => {
        const layer = layers.grabbed;
        if (!layer.context) return;
        const context = layer.context;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        const style2 = LAYER_STYLES.grabbed;
        for (const animation of grabbedAnimations) {
          drawRoundedRectangle(context, animation.current.x, animation.current.y, animation.current.width, animation.current.height, animation.borderRadius, style2.fillColor, style2.borderColor, animation.opacity);
        }
      };
      const renderProcessingLayer = () => {
        const layer = layers.processing;
        if (!layer.context) return;
        const context = layer.context;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        const style2 = LAYER_STYLES.processing;
        for (const animation of processingAnimations) {
          drawRoundedRectangle(context, animation.current.x, animation.current.y, animation.current.width, animation.current.height, animation.borderRadius, style2.fillColor, style2.borderColor, animation.opacity);
        }
      };
      const compositeAllLayers = () => {
        if (!mainContext || !canvasRef) return;
        mainContext.setTransform(1, 0, 0, 1, 0, 0);
        mainContext.clearRect(0, 0, canvasRef.width, canvasRef.height);
        mainContext.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
        renderCrosshairLayer();
        renderDragLayer();
        renderSelectionLayer();
        renderGrabbedLayer();
        renderProcessingLayer();
        const layerRenderOrder = ["crosshair", "drag", "selection", "grabbed", "processing"];
        for (const layerName of layerRenderOrder) {
          const layer = layers[layerName];
          if (layer.canvas) {
            mainContext.drawImage(layer.canvas, 0, 0, canvasWidth, canvasHeight);
          }
        }
      };
      const interpolateBounds = (animation, lerpFactor, options) => {
        const lerpedX = lerp(animation.current.x, animation.target.x, lerpFactor);
        const lerpedY = lerp(animation.current.y, animation.target.y, lerpFactor);
        const lerpedWidth = lerp(animation.current.width, animation.target.width, lerpFactor);
        const lerpedHeight = lerp(animation.current.height, animation.target.height, lerpFactor);
        const hasBoundsConverged = Math.abs(lerpedX - animation.target.x) < LERP_CONVERGENCE_THRESHOLD_PX && Math.abs(lerpedY - animation.target.y) < LERP_CONVERGENCE_THRESHOLD_PX && Math.abs(lerpedWidth - animation.target.width) < LERP_CONVERGENCE_THRESHOLD_PX && Math.abs(lerpedHeight - animation.target.height) < LERP_CONVERGENCE_THRESHOLD_PX;
        animation.current.x = hasBoundsConverged ? animation.target.x : lerpedX;
        animation.current.y = hasBoundsConverged ? animation.target.y : lerpedY;
        animation.current.width = hasBoundsConverged ? animation.target.width : lerpedWidth;
        animation.current.height = hasBoundsConverged ? animation.target.height : lerpedHeight;
        let hasOpacityConverged = true;
        if (options?.interpolateOpacity) {
          const lerpedOpacity = lerp(animation.opacity, animation.targetOpacity, lerpFactor);
          const opacityThreshold = 0.01;
          hasOpacityConverged = Math.abs(lerpedOpacity - animation.targetOpacity) < opacityThreshold;
          animation.opacity = hasOpacityConverged ? animation.targetOpacity : lerpedOpacity;
        }
        return !hasBoundsConverged || !hasOpacityConverged;
      };
      const runAnimationFrame = () => {
        let shouldContinueAnimating = false;
        if (dragAnimation?.isInitialized) {
          if (interpolateBounds(dragAnimation, LAYER_STYLES.drag.lerpFactor)) {
            shouldContinueAnimating = true;
          }
        }
        for (const animation of selectionAnimations) {
          if (animation.isInitialized) {
            if (interpolateBounds(animation, LAYER_STYLES.selection.lerpFactor)) {
              shouldContinueAnimating = true;
            }
          }
        }
        const currentTimestamp = Date.now();
        grabbedAnimations = grabbedAnimations.filter((animation) => {
          const isLabelAnimation = animation.id.startsWith("label-");
          if (animation.isInitialized) {
            const isStillAnimating = interpolateBounds(animation, LAYER_STYLES.grabbed.lerpFactor, {
              interpolateOpacity: isLabelAnimation
            });
            if (isStillAnimating) {
              shouldContinueAnimating = true;
            }
          }
          if (animation.createdAt) {
            const elapsed = currentTimestamp - animation.createdAt;
            const fadeOutDeadline = FEEDBACK_DURATION_MS + FADE_OUT_BUFFER_MS;
            if (elapsed >= fadeOutDeadline) {
              return false;
            }
            if (elapsed > FEEDBACK_DURATION_MS) {
              const fadeProgress = (elapsed - FEEDBACK_DURATION_MS) / FADE_OUT_BUFFER_MS;
              animation.opacity = 1 - fadeProgress;
              shouldContinueAnimating = true;
            }
            return true;
          }
          if (isLabelAnimation) {
            const hasOpacityConverged = Math.abs(animation.opacity - animation.targetOpacity) < 0.01;
            if (hasOpacityConverged && animation.targetOpacity === 0) {
              return false;
            }
            return true;
          }
          return animation.opacity > 0;
        });
        for (const animation of processingAnimations) {
          if (animation.isInitialized) {
            if (interpolateBounds(animation, LAYER_STYLES.processing.lerpFactor)) {
              shouldContinueAnimating = true;
            }
          }
        }
        compositeAllLayers();
        if (shouldContinueAnimating) {
          animationFrameId = requestAnimationFrame(runAnimationFrame);
        } else {
          animationFrameId = null;
        }
      };
      const scheduleAnimationFrame = () => {
        if (animationFrameId !== null) return;
        animationFrameId = requestAnimationFrame(runAnimationFrame);
      };
      const handleWindowResize = () => {
        initializeCanvas();
        scheduleAnimationFrame();
      };
      createEffect(on(() => [props.mouseX, props.mouseY], ([mouseX, mouseY]) => {
        const targetX = mouseX ?? 0;
        const targetY = mouseY ?? 0;
        crosshairCurrentPosition.x = targetX;
        crosshairCurrentPosition.y = targetY;
        scheduleAnimationFrame();
      }));
      createEffect(on(() => props.crosshairVisible, () => {
        scheduleAnimationFrame();
      }));
      createEffect(on(() => [props.selectionVisible, props.selectionBounds, props.selectionBoundsMultiple, props.selectionIsFading, props.selectionShouldSnap], ([isVisible, singleBounds, multipleBounds, , shouldSnap]) => {
        if (!isVisible || !singleBounds && (!multipleBounds || multipleBounds.length === 0)) {
          selectionAnimations = [];
          scheduleAnimationFrame();
          return;
        }
        const boundsToRender = multipleBounds && multipleBounds.length > 0 ? multipleBounds : singleBounds ? [singleBounds] : [];
        selectionAnimations = boundsToRender.map((bounds, index) => {
          const animationId = `selection-${index}`;
          const existingAnimation = selectionAnimations.find((animation) => animation.id === animationId);
          if (existingAnimation) {
            updateAnimationTarget(existingAnimation, bounds);
            if (shouldSnap) {
              existingAnimation.current = {
                ...existingAnimation.target
              };
            }
            return existingAnimation;
          }
          return createAnimatedBounds(animationId, bounds);
        });
        scheduleAnimationFrame();
      }));
      createEffect(on(() => [props.dragVisible, props.dragBounds], ([isVisible, bounds]) => {
        if (!isVisible || !bounds) {
          dragAnimation = null;
          scheduleAnimationFrame();
          return;
        }
        if (dragAnimation) {
          updateAnimationTarget(dragAnimation, bounds);
        } else {
          dragAnimation = createAnimatedBounds("drag", bounds);
        }
        scheduleAnimationFrame();
      }));
      createEffect(on(() => props.grabbedBoxes, (grabbedBoxes) => {
        const boxesToProcess = grabbedBoxes ?? [];
        const activeBoxIds = new Set(boxesToProcess.map((box) => box.id));
        const existingAnimationIds = new Set(grabbedAnimations.map((animation) => animation.id));
        for (const box of boxesToProcess) {
          if (!existingAnimationIds.has(box.id)) {
            grabbedAnimations.push(createAnimatedBounds(box.id, box.bounds, {
              createdAt: box.createdAt
            }));
          }
        }
        for (const animation of grabbedAnimations) {
          const matchingBox = boxesToProcess.find((box) => box.id === animation.id);
          if (matchingBox) {
            updateAnimationTarget(animation, matchingBox.bounds);
          }
        }
        grabbedAnimations = grabbedAnimations.filter((animation) => {
          if (animation.id.startsWith("label-")) {
            return true;
          }
          return activeBoxIds.has(animation.id);
        });
        scheduleAnimationFrame();
      }));
      createEffect(on(() => props.agentSessions, (agentSessions) => {
        if (!agentSessions || agentSessions.size === 0) {
          processingAnimations = [];
          scheduleAnimationFrame();
          return;
        }
        const updatedAnimations = [];
        for (const [sessionId, session] of agentSessions) {
          for (let index = 0; index < session.selectionBounds.length; index++) {
            const bounds = session.selectionBounds[index];
            const animationId = `processing-${sessionId}-${index}`;
            const existingAnimation = processingAnimations.find((animation) => animation.id === animationId);
            if (existingAnimation) {
              updateAnimationTarget(existingAnimation, bounds);
              updatedAnimations.push(existingAnimation);
            } else {
              updatedAnimations.push(createAnimatedBounds(animationId, bounds));
            }
          }
        }
        processingAnimations = updatedAnimations;
        scheduleAnimationFrame();
      }));
      createEffect(on(() => props.labelInstances, (labelInstances) => {
        const instancesToProcess = labelInstances ?? [];
        for (const instance of instancesToProcess) {
          const boundsToRender = resolveBoundsArray(instance);
          const targetOpacity = instance.status === "fading" ? 0 : 1;
          for (let index = 0; index < boundsToRender.length; index++) {
            const bounds = boundsToRender[index];
            const animationId = `label-${instance.id}-${index}`;
            const existingAnimation = grabbedAnimations.find((animation) => animation.id === animationId);
            if (existingAnimation) {
              updateAnimationTarget(existingAnimation, bounds, targetOpacity);
            } else {
              grabbedAnimations.push(createAnimatedBounds(animationId, bounds, {
                opacity: 1,
                targetOpacity
              }));
            }
          }
        }
        const activeLabelIds = /* @__PURE__ */ new Set();
        for (const instance of instancesToProcess) {
          const boundsToRender = resolveBoundsArray(instance);
          for (let index = 0; index < boundsToRender.length; index++) {
            activeLabelIds.add(`label-${instance.id}-${index}`);
          }
        }
        grabbedAnimations = grabbedAnimations.filter((animation) => {
          if (animation.id.startsWith("label-")) {
            return activeLabelIds.has(animation.id);
          }
          return true;
        });
        scheduleAnimationFrame();
      }));
      onMount(() => {
        initializeCanvas();
        scheduleAnimationFrame();
        window.addEventListener("resize", handleWindowResize);
        let currentDprMediaQuery = null;
        const handleDevicePixelRatioChange = () => {
          const newDevicePixelRatio = Math.max(window.devicePixelRatio || 1, MIN_DEVICE_PIXEL_RATIO);
          if (newDevicePixelRatio !== devicePixelRatio) {
            handleWindowResize();
            setupDprMediaQuery();
          }
        };
        const setupDprMediaQuery = () => {
          if (currentDprMediaQuery) {
            currentDprMediaQuery.removeEventListener("change", handleDevicePixelRatioChange);
          }
          currentDprMediaQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
          currentDprMediaQuery.addEventListener("change", handleDevicePixelRatioChange);
        };
        setupDprMediaQuery();
        onCleanup(() => {
          window.removeEventListener("resize", handleWindowResize);
          if (currentDprMediaQuery) {
            currentDprMediaQuery.removeEventListener("change", handleDevicePixelRatioChange);
          }
          if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
          }
        });
      });
      return (() => {
        var _el$ = _tmpl$();
        var _ref$ = canvasRef;
        typeof _ref$ === "function" ? use(_ref$, _el$) : canvasRef = _el$;
        createRenderEffect((_$p) => setStyleProperty(_el$, "z-index", String(Z_INDEX_OVERLAY_CANVAS)));
        return _el$;
      })();
    };
  }
});

// ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r2(e2) {
  var t2, f3, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o3 = e2.length;
    for (t2 = 0; t2 < o3; t2++) e2[t2] && (f3 = r2(e2[t2])) && (n2 && (n2 += " "), n2 += f3);
  } else for (f3 in e2) e2[f3] && (n2 && (n2 += " "), n2 += f3);
  return n2;
}
function clsx() {
  for (var e2, t2, f3 = 0, n2 = "", o3 = arguments.length; f3 < o3; f3++) (e2 = arguments[f3]) && (t2 = r2(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var init_clsx = __esm({
  "../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList2) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList2);
  }
  function tailwindMerge(classList2) {
    const cachedResult = cacheGet(classList2);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList2, configUtils);
    cacheSet(classList2, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
var CLASS_PART_SEPARATOR, createClassGroupUtils, getGroupRecursive, arbitraryPropertyRegex, getGroupIdForArbitraryProperty, createClassMap, processClassesRecursively, getPart, isThemeGetter, getPrefixedClassGroupEntries, createLruCache, IMPORTANT_MODIFIER, createParseClassName, sortModifiers, createConfigUtils, SPLIT_CLASSES_REGEX, mergeClassList, toValue, fromTheme, arbitraryValueRegex, fractionRegex, stringLengths, tshirtUnitRegex, lengthUnitRegex, colorFunctionRegex, shadowRegex, imageRegex, isLength, isArbitraryLength, isNumber, isArbitraryNumber, isInteger, isPercent, isArbitraryValue, isTshirtSize, sizeLabels, isArbitrarySize, isArbitraryPosition, imageLabels, isArbitraryImage, isArbitraryShadow, isAny, getIsArbitraryValue, isLengthOnly, isNever, isShadow, isImage, getDefaultConfig, twMerge;
var init_bundle_mjs = __esm({
  "../../node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs"() {
    "use strict";
    CLASS_PART_SEPARATOR = "-";
    createClassGroupUtils = (config) => {
      const classMap = createClassMap(config);
      const {
        conflictingClassGroups,
        conflictingClassGroupModifiers
      } = config;
      const getClassGroupId = (className2) => {
        const classParts = className2.split(CLASS_PART_SEPARATOR);
        if (classParts[0] === "" && classParts.length !== 1) {
          classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className2);
      };
      const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
          return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
        }
        return conflicts;
      };
      return {
        getClassGroupId,
        getConflictingClassGroupIds
      };
    };
    getGroupRecursive = (classParts, classPartObject) => {
      if (classParts.length === 0) {
        return classPartObject.classGroupId;
      }
      const currentClassPart = classParts[0];
      const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
      const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
      if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
      }
      if (classPartObject.validators.length === 0) {
        return void 0;
      }
      const classRest = classParts.join(CLASS_PART_SEPARATOR);
      return classPartObject.validators.find(({
        validator
      }) => validator(classRest))?.classGroupId;
    };
    arbitraryPropertyRegex = /^\[(.+)\]$/;
    getGroupIdForArbitraryProperty = (className2) => {
      if (arbitraryPropertyRegex.test(className2)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className2)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
        if (property) {
          return "arbitrary.." + property;
        }
      }
    };
    createClassMap = (config) => {
      const {
        theme,
        prefix
      } = config;
      const classMap = {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      };
      const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
      prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
      });
      return classMap;
    };
    processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
      classGroup.forEach((classDefinition) => {
        if (typeof classDefinition === "string") {
          const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
          classPartObjectToEdit.classGroupId = classGroupId;
          return;
        }
        if (typeof classDefinition === "function") {
          if (isThemeGetter(classDefinition)) {
            processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
            return;
          }
          classPartObject.validators.push({
            validator: classDefinition,
            classGroupId
          });
          return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup2]) => {
          processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
        });
      });
    };
    getPart = (classPartObject, path) => {
      let currentClassPartObject = classPartObject;
      path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
        if (!currentClassPartObject.nextPart.has(pathPart)) {
          currentClassPartObject.nextPart.set(pathPart, {
            nextPart: /* @__PURE__ */ new Map(),
            validators: []
          });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
      });
      return currentClassPartObject;
    };
    isThemeGetter = (func) => func.isThemeGetter;
    getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
      if (!prefix) {
        return classGroupEntries;
      }
      return classGroupEntries.map(([classGroupId, classGroup]) => {
        const prefixedClassGroup = classGroup.map((classDefinition) => {
          if (typeof classDefinition === "string") {
            return prefix + classDefinition;
          }
          if (typeof classDefinition === "object") {
            return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
          }
          return classDefinition;
        });
        return [classGroupId, prefixedClassGroup];
      });
    };
    createLruCache = (maxCacheSize) => {
      if (maxCacheSize < 1) {
        return {
          get: () => void 0,
          set: () => {
          }
        };
      }
      let cacheSize = 0;
      let cache2 = /* @__PURE__ */ new Map();
      let previousCache = /* @__PURE__ */ new Map();
      const update = (key, value) => {
        cache2.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
          cacheSize = 0;
          previousCache = cache2;
          cache2 = /* @__PURE__ */ new Map();
        }
      };
      return {
        get(key) {
          let value = cache2.get(key);
          if (value !== void 0) {
            return value;
          }
          if ((value = previousCache.get(key)) !== void 0) {
            update(key, value);
            return value;
          }
        },
        set(key, value) {
          if (cache2.has(key)) {
            cache2.set(key, value);
          } else {
            update(key, value);
          }
        }
      };
    };
    IMPORTANT_MODIFIER = "!";
    createParseClassName = (config) => {
      const {
        separator,
        experimentalParseClassName
      } = config;
      const isSeparatorSingleCharacter = separator.length === 1;
      const firstSeparatorCharacter = separator[0];
      const separatorLength = separator.length;
      const parseClassName = (className2) => {
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for (let index = 0; index < className2.length; index++) {
          let currentCharacter = className2[index];
          if (bracketDepth === 0) {
            if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className2.slice(index, index + separatorLength) === separator)) {
              modifiers.push(className2.slice(modifierStart, index));
              modifierStart = index + separatorLength;
              continue;
            }
            if (currentCharacter === "/") {
              postfixModifierPosition = index;
              continue;
            }
          }
          if (currentCharacter === "[") {
            bracketDepth++;
          } else if (currentCharacter === "]") {
            bracketDepth--;
          }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className2 : className2.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
        return {
          modifiers,
          hasImportantModifier,
          baseClassName,
          maybePostfixModifierPosition
        };
      };
      if (experimentalParseClassName) {
        return (className2) => experimentalParseClassName({
          className: className2,
          parseClassName
        });
      }
      return parseClassName;
    };
    sortModifiers = (modifiers) => {
      if (modifiers.length <= 1) {
        return modifiers;
      }
      const sortedModifiers = [];
      let unsortedModifiers = [];
      modifiers.forEach((modifier) => {
        const isArbitraryVariant = modifier[0] === "[";
        if (isArbitraryVariant) {
          sortedModifiers.push(...unsortedModifiers.sort(), modifier);
          unsortedModifiers = [];
        } else {
          unsortedModifiers.push(modifier);
        }
      });
      sortedModifiers.push(...unsortedModifiers.sort());
      return sortedModifiers;
    };
    createConfigUtils = (config) => ({
      cache: createLruCache(config.cacheSize),
      parseClassName: createParseClassName(config),
      ...createClassGroupUtils(config)
    });
    SPLIT_CLASSES_REGEX = /\s+/;
    mergeClassList = (classList2, configUtils) => {
      const {
        parseClassName,
        getClassGroupId,
        getConflictingClassGroupIds
      } = configUtils;
      const classGroupsInConflict = [];
      const classNames = classList2.trim().split(SPLIT_CLASSES_REGEX);
      let result = "";
      for (let index = classNames.length - 1; index >= 0; index -= 1) {
        const originalClassName = classNames[index];
        const {
          modifiers,
          hasImportantModifier,
          baseClassName,
          maybePostfixModifierPosition
        } = parseClassName(originalClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
          if (!hasPostfixModifier) {
            result = originalClassName + (result.length > 0 ? " " + result : result);
            continue;
          }
          classGroupId = getClassGroupId(baseClassName);
          if (!classGroupId) {
            result = originalClassName + (result.length > 0 ? " " + result : result);
            continue;
          }
          hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(":");
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
          continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
          const group = conflictGroups[i2];
          classGroupsInConflict.push(modifierId + group);
        }
        result = originalClassName + (result.length > 0 ? " " + result : result);
      }
      return result;
    };
    toValue = (mix) => {
      if (typeof mix === "string") {
        return mix;
      }
      let resolvedValue;
      let string = "";
      for (let k3 = 0; k3 < mix.length; k3++) {
        if (mix[k3]) {
          if (resolvedValue = toValue(mix[k3])) {
            string && (string += " ");
            string += resolvedValue;
          }
        }
      }
      return string;
    };
    fromTheme = (key) => {
      const themeGetter = (theme) => theme[key] || [];
      themeGetter.isThemeGetter = true;
      return themeGetter;
    };
    arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
    fractionRegex = /^\d+\/\d+$/;
    stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
    tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
    lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
    colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
    shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
    isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
    isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
    isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
    isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
    isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
    isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
    isArbitraryValue = (value) => arbitraryValueRegex.test(value);
    isTshirtSize = (value) => tshirtUnitRegex.test(value);
    sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
    isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
    isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
    imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
    isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
    isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
    isAny = () => true;
    getIsArbitraryValue = (value, label, testValue) => {
      const result = arbitraryValueRegex.exec(value);
      if (result) {
        if (result[1]) {
          return typeof label === "string" ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
      }
      return false;
    };
    isLengthOnly = (value) => (
      // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
      // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
      // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
      lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
    );
    isNever = () => false;
    isShadow = (value) => shadowRegex.test(value);
    isImage = (value) => imageRegex.test(value);
    getDefaultConfig = () => {
      const colors = fromTheme("colors");
      const spacing = fromTheme("spacing");
      const blur = fromTheme("blur");
      const brightness = fromTheme("brightness");
      const borderColor = fromTheme("borderColor");
      const borderRadius = fromTheme("borderRadius");
      const borderSpacing = fromTheme("borderSpacing");
      const borderWidth = fromTheme("borderWidth");
      const contrast = fromTheme("contrast");
      const grayscale = fromTheme("grayscale");
      const hueRotate = fromTheme("hueRotate");
      const invert = fromTheme("invert");
      const gap = fromTheme("gap");
      const gradientColorStops = fromTheme("gradientColorStops");
      const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
      const inset = fromTheme("inset");
      const margin = fromTheme("margin");
      const opacity = fromTheme("opacity");
      const padding = fromTheme("padding");
      const saturate = fromTheme("saturate");
      const scale = fromTheme("scale");
      const sepia = fromTheme("sepia");
      const skew = fromTheme("skew");
      const space = fromTheme("space");
      const translate = fromTheme("translate");
      const getOverscroll = () => ["auto", "contain", "none"];
      const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
      const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
      const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
      const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
      const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
      const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
      const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
      const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
      const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
      const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
      const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
      const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [isAny],
          spacing: [isLength, isArbitraryLength],
          blur: ["none", "", isTshirtSize, isArbitraryValue],
          brightness: getNumberAndArbitrary(),
          borderColor: [colors],
          borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
          borderSpacing: getSpacingWithArbitrary(),
          borderWidth: getLengthWithEmptyAndArbitrary(),
          contrast: getNumberAndArbitrary(),
          grayscale: getZeroAndEmpty(),
          hueRotate: getNumberAndArbitrary(),
          invert: getZeroAndEmpty(),
          gap: getSpacingWithArbitrary(),
          gradientColorStops: [colors],
          gradientColorStopPositions: [isPercent, isArbitraryLength],
          inset: getSpacingWithAutoAndArbitrary(),
          margin: getSpacingWithAutoAndArbitrary(),
          opacity: getNumberAndArbitrary(),
          padding: getSpacingWithArbitrary(),
          saturate: getNumberAndArbitrary(),
          scale: getNumberAndArbitrary(),
          sepia: getZeroAndEmpty(),
          skew: getNumberAndArbitrary(),
          space: getSpacingWithArbitrary(),
          translate: getSpacingWithArbitrary()
        },
        classGroups: {
          // Layout
          /**
           * Aspect Ratio
           * @see https://tailwindcss.com/docs/aspect-ratio
           */
          aspect: [{
            aspect: ["auto", "square", "video", isArbitraryValue]
          }],
          /**
           * Container
           * @see https://tailwindcss.com/docs/container
           */
          container: ["container"],
          /**
           * Columns
           * @see https://tailwindcss.com/docs/columns
           */
          columns: [{
            columns: [isTshirtSize]
          }],
          /**
           * Break After
           * @see https://tailwindcss.com/docs/break-after
           */
          "break-after": [{
            "break-after": getBreaks()
          }],
          /**
           * Break Before
           * @see https://tailwindcss.com/docs/break-before
           */
          "break-before": [{
            "break-before": getBreaks()
          }],
          /**
           * Break Inside
           * @see https://tailwindcss.com/docs/break-inside
           */
          "break-inside": [{
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
          }],
          /**
           * Box Decoration Break
           * @see https://tailwindcss.com/docs/box-decoration-break
           */
          "box-decoration": [{
            "box-decoration": ["slice", "clone"]
          }],
          /**
           * Box Sizing
           * @see https://tailwindcss.com/docs/box-sizing
           */
          box: [{
            box: ["border", "content"]
          }],
          /**
           * Display
           * @see https://tailwindcss.com/docs/display
           */
          display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
          /**
           * Floats
           * @see https://tailwindcss.com/docs/float
           */
          float: [{
            float: ["right", "left", "none", "start", "end"]
          }],
          /**
           * Clear
           * @see https://tailwindcss.com/docs/clear
           */
          clear: [{
            clear: ["left", "right", "both", "none", "start", "end"]
          }],
          /**
           * Isolation
           * @see https://tailwindcss.com/docs/isolation
           */
          isolation: ["isolate", "isolation-auto"],
          /**
           * Object Fit
           * @see https://tailwindcss.com/docs/object-fit
           */
          "object-fit": [{
            object: ["contain", "cover", "fill", "none", "scale-down"]
          }],
          /**
           * Object Position
           * @see https://tailwindcss.com/docs/object-position
           */
          "object-position": [{
            object: [...getPositions(), isArbitraryValue]
          }],
          /**
           * Overflow
           * @see https://tailwindcss.com/docs/overflow
           */
          overflow: [{
            overflow: getOverflow()
          }],
          /**
           * Overflow X
           * @see https://tailwindcss.com/docs/overflow
           */
          "overflow-x": [{
            "overflow-x": getOverflow()
          }],
          /**
           * Overflow Y
           * @see https://tailwindcss.com/docs/overflow
           */
          "overflow-y": [{
            "overflow-y": getOverflow()
          }],
          /**
           * Overscroll Behavior
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          overscroll: [{
            overscroll: getOverscroll()
          }],
          /**
           * Overscroll Behavior X
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          "overscroll-x": [{
            "overscroll-x": getOverscroll()
          }],
          /**
           * Overscroll Behavior Y
           * @see https://tailwindcss.com/docs/overscroll-behavior
           */
          "overscroll-y": [{
            "overscroll-y": getOverscroll()
          }],
          /**
           * Position
           * @see https://tailwindcss.com/docs/position
           */
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          /**
           * Top / Right / Bottom / Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          inset: [{
            inset: [inset]
          }],
          /**
           * Right / Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          "inset-x": [{
            "inset-x": [inset]
          }],
          /**
           * Top / Bottom
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          "inset-y": [{
            "inset-y": [inset]
          }],
          /**
           * Start
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          start: [{
            start: [inset]
          }],
          /**
           * End
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          end: [{
            end: [inset]
          }],
          /**
           * Top
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          top: [{
            top: [inset]
          }],
          /**
           * Right
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          right: [{
            right: [inset]
          }],
          /**
           * Bottom
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          bottom: [{
            bottom: [inset]
          }],
          /**
           * Left
           * @see https://tailwindcss.com/docs/top-right-bottom-left
           */
          left: [{
            left: [inset]
          }],
          /**
           * Visibility
           * @see https://tailwindcss.com/docs/visibility
           */
          visibility: ["visible", "invisible", "collapse"],
          /**
           * Z-Index
           * @see https://tailwindcss.com/docs/z-index
           */
          z: [{
            z: ["auto", isInteger, isArbitraryValue]
          }],
          // Flexbox and Grid
          /**
           * Flex Basis
           * @see https://tailwindcss.com/docs/flex-basis
           */
          basis: [{
            basis: getSpacingWithAutoAndArbitrary()
          }],
          /**
           * Flex Direction
           * @see https://tailwindcss.com/docs/flex-direction
           */
          "flex-direction": [{
            flex: ["row", "row-reverse", "col", "col-reverse"]
          }],
          /**
           * Flex Wrap
           * @see https://tailwindcss.com/docs/flex-wrap
           */
          "flex-wrap": [{
            flex: ["wrap", "wrap-reverse", "nowrap"]
          }],
          /**
           * Flex
           * @see https://tailwindcss.com/docs/flex
           */
          flex: [{
            flex: ["1", "auto", "initial", "none", isArbitraryValue]
          }],
          /**
           * Flex Grow
           * @see https://tailwindcss.com/docs/flex-grow
           */
          grow: [{
            grow: getZeroAndEmpty()
          }],
          /**
           * Flex Shrink
           * @see https://tailwindcss.com/docs/flex-shrink
           */
          shrink: [{
            shrink: getZeroAndEmpty()
          }],
          /**
           * Order
           * @see https://tailwindcss.com/docs/order
           */
          order: [{
            order: ["first", "last", "none", isInteger, isArbitraryValue]
          }],
          /**
           * Grid Template Columns
           * @see https://tailwindcss.com/docs/grid-template-columns
           */
          "grid-cols": [{
            "grid-cols": [isAny]
          }],
          /**
           * Grid Column Start / End
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-start-end": [{
            col: ["auto", {
              span: ["full", isInteger, isArbitraryValue]
            }, isArbitraryValue]
          }],
          /**
           * Grid Column Start
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-start": [{
            "col-start": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Column End
           * @see https://tailwindcss.com/docs/grid-column
           */
          "col-end": [{
            "col-end": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Template Rows
           * @see https://tailwindcss.com/docs/grid-template-rows
           */
          "grid-rows": [{
            "grid-rows": [isAny]
          }],
          /**
           * Grid Row Start / End
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-start-end": [{
            row: ["auto", {
              span: [isInteger, isArbitraryValue]
            }, isArbitraryValue]
          }],
          /**
           * Grid Row Start
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-start": [{
            "row-start": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Row End
           * @see https://tailwindcss.com/docs/grid-row
           */
          "row-end": [{
            "row-end": getNumberWithAutoAndArbitrary()
          }],
          /**
           * Grid Auto Flow
           * @see https://tailwindcss.com/docs/grid-auto-flow
           */
          "grid-flow": [{
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
          }],
          /**
           * Grid Auto Columns
           * @see https://tailwindcss.com/docs/grid-auto-columns
           */
          "auto-cols": [{
            "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
          }],
          /**
           * Grid Auto Rows
           * @see https://tailwindcss.com/docs/grid-auto-rows
           */
          "auto-rows": [{
            "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
          }],
          /**
           * Gap
           * @see https://tailwindcss.com/docs/gap
           */
          gap: [{
            gap: [gap]
          }],
          /**
           * Gap X
           * @see https://tailwindcss.com/docs/gap
           */
          "gap-x": [{
            "gap-x": [gap]
          }],
          /**
           * Gap Y
           * @see https://tailwindcss.com/docs/gap
           */
          "gap-y": [{
            "gap-y": [gap]
          }],
          /**
           * Justify Content
           * @see https://tailwindcss.com/docs/justify-content
           */
          "justify-content": [{
            justify: ["normal", ...getAlign()]
          }],
          /**
           * Justify Items
           * @see https://tailwindcss.com/docs/justify-items
           */
          "justify-items": [{
            "justify-items": ["start", "end", "center", "stretch"]
          }],
          /**
           * Justify Self
           * @see https://tailwindcss.com/docs/justify-self
           */
          "justify-self": [{
            "justify-self": ["auto", "start", "end", "center", "stretch"]
          }],
          /**
           * Align Content
           * @see https://tailwindcss.com/docs/align-content
           */
          "align-content": [{
            content: ["normal", ...getAlign(), "baseline"]
          }],
          /**
           * Align Items
           * @see https://tailwindcss.com/docs/align-items
           */
          "align-items": [{
            items: ["start", "end", "center", "baseline", "stretch"]
          }],
          /**
           * Align Self
           * @see https://tailwindcss.com/docs/align-self
           */
          "align-self": [{
            self: ["auto", "start", "end", "center", "stretch", "baseline"]
          }],
          /**
           * Place Content
           * @see https://tailwindcss.com/docs/place-content
           */
          "place-content": [{
            "place-content": [...getAlign(), "baseline"]
          }],
          /**
           * Place Items
           * @see https://tailwindcss.com/docs/place-items
           */
          "place-items": [{
            "place-items": ["start", "end", "center", "baseline", "stretch"]
          }],
          /**
           * Place Self
           * @see https://tailwindcss.com/docs/place-self
           */
          "place-self": [{
            "place-self": ["auto", "start", "end", "center", "stretch"]
          }],
          // Spacing
          /**
           * Padding
           * @see https://tailwindcss.com/docs/padding
           */
          p: [{
            p: [padding]
          }],
          /**
           * Padding X
           * @see https://tailwindcss.com/docs/padding
           */
          px: [{
            px: [padding]
          }],
          /**
           * Padding Y
           * @see https://tailwindcss.com/docs/padding
           */
          py: [{
            py: [padding]
          }],
          /**
           * Padding Start
           * @see https://tailwindcss.com/docs/padding
           */
          ps: [{
            ps: [padding]
          }],
          /**
           * Padding End
           * @see https://tailwindcss.com/docs/padding
           */
          pe: [{
            pe: [padding]
          }],
          /**
           * Padding Top
           * @see https://tailwindcss.com/docs/padding
           */
          pt: [{
            pt: [padding]
          }],
          /**
           * Padding Right
           * @see https://tailwindcss.com/docs/padding
           */
          pr: [{
            pr: [padding]
          }],
          /**
           * Padding Bottom
           * @see https://tailwindcss.com/docs/padding
           */
          pb: [{
            pb: [padding]
          }],
          /**
           * Padding Left
           * @see https://tailwindcss.com/docs/padding
           */
          pl: [{
            pl: [padding]
          }],
          /**
           * Margin
           * @see https://tailwindcss.com/docs/margin
           */
          m: [{
            m: [margin]
          }],
          /**
           * Margin X
           * @see https://tailwindcss.com/docs/margin
           */
          mx: [{
            mx: [margin]
          }],
          /**
           * Margin Y
           * @see https://tailwindcss.com/docs/margin
           */
          my: [{
            my: [margin]
          }],
          /**
           * Margin Start
           * @see https://tailwindcss.com/docs/margin
           */
          ms: [{
            ms: [margin]
          }],
          /**
           * Margin End
           * @see https://tailwindcss.com/docs/margin
           */
          me: [{
            me: [margin]
          }],
          /**
           * Margin Top
           * @see https://tailwindcss.com/docs/margin
           */
          mt: [{
            mt: [margin]
          }],
          /**
           * Margin Right
           * @see https://tailwindcss.com/docs/margin
           */
          mr: [{
            mr: [margin]
          }],
          /**
           * Margin Bottom
           * @see https://tailwindcss.com/docs/margin
           */
          mb: [{
            mb: [margin]
          }],
          /**
           * Margin Left
           * @see https://tailwindcss.com/docs/margin
           */
          ml: [{
            ml: [margin]
          }],
          /**
           * Space Between X
           * @see https://tailwindcss.com/docs/space
           */
          "space-x": [{
            "space-x": [space]
          }],
          /**
           * Space Between X Reverse
           * @see https://tailwindcss.com/docs/space
           */
          "space-x-reverse": ["space-x-reverse"],
          /**
           * Space Between Y
           * @see https://tailwindcss.com/docs/space
           */
          "space-y": [{
            "space-y": [space]
          }],
          /**
           * Space Between Y Reverse
           * @see https://tailwindcss.com/docs/space
           */
          "space-y-reverse": ["space-y-reverse"],
          // Sizing
          /**
           * Width
           * @see https://tailwindcss.com/docs/width
           */
          w: [{
            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
          }],
          /**
           * Min-Width
           * @see https://tailwindcss.com/docs/min-width
           */
          "min-w": [{
            "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
          }],
          /**
           * Max-Width
           * @see https://tailwindcss.com/docs/max-width
           */
          "max-w": [{
            "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
              screen: [isTshirtSize]
            }, isTshirtSize]
          }],
          /**
           * Height
           * @see https://tailwindcss.com/docs/height
           */
          h: [{
            h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          /**
           * Min-Height
           * @see https://tailwindcss.com/docs/min-height
           */
          "min-h": [{
            "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          /**
           * Max-Height
           * @see https://tailwindcss.com/docs/max-height
           */
          "max-h": [{
            "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          /**
           * Size
           * @see https://tailwindcss.com/docs/size
           */
          size: [{
            size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
          }],
          // Typography
          /**
           * Font Size
           * @see https://tailwindcss.com/docs/font-size
           */
          "font-size": [{
            text: ["base", isTshirtSize, isArbitraryLength]
          }],
          /**
           * Font Smoothing
           * @see https://tailwindcss.com/docs/font-smoothing
           */
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          /**
           * Font Style
           * @see https://tailwindcss.com/docs/font-style
           */
          "font-style": ["italic", "not-italic"],
          /**
           * Font Weight
           * @see https://tailwindcss.com/docs/font-weight
           */
          "font-weight": [{
            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
          }],
          /**
           * Font Family
           * @see https://tailwindcss.com/docs/font-family
           */
          "font-family": [{
            font: [isAny]
          }],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-normal": ["normal-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-ordinal": ["ordinal"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-slashed-zero": ["slashed-zero"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          /**
           * Font Variant Numeric
           * @see https://tailwindcss.com/docs/font-variant-numeric
           */
          "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
          /**
           * Letter Spacing
           * @see https://tailwindcss.com/docs/letter-spacing
           */
          tracking: [{
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
          }],
          /**
           * Line Clamp
           * @see https://tailwindcss.com/docs/line-clamp
           */
          "line-clamp": [{
            "line-clamp": ["none", isNumber, isArbitraryNumber]
          }],
          /**
           * Line Height
           * @see https://tailwindcss.com/docs/line-height
           */
          leading: [{
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
          }],
          /**
           * List Style Image
           * @see https://tailwindcss.com/docs/list-style-image
           */
          "list-image": [{
            "list-image": ["none", isArbitraryValue]
          }],
          /**
           * List Style Type
           * @see https://tailwindcss.com/docs/list-style-type
           */
          "list-style-type": [{
            list: ["none", "disc", "decimal", isArbitraryValue]
          }],
          /**
           * List Style Position
           * @see https://tailwindcss.com/docs/list-style-position
           */
          "list-style-position": [{
            list: ["inside", "outside"]
          }],
          /**
           * Placeholder Color
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/placeholder-color
           */
          "placeholder-color": [{
            placeholder: [colors]
          }],
          /**
           * Placeholder Opacity
           * @see https://tailwindcss.com/docs/placeholder-opacity
           */
          "placeholder-opacity": [{
            "placeholder-opacity": [opacity]
          }],
          /**
           * Text Alignment
           * @see https://tailwindcss.com/docs/text-align
           */
          "text-alignment": [{
            text: ["left", "center", "right", "justify", "start", "end"]
          }],
          /**
           * Text Color
           * @see https://tailwindcss.com/docs/text-color
           */
          "text-color": [{
            text: [colors]
          }],
          /**
           * Text Opacity
           * @see https://tailwindcss.com/docs/text-opacity
           */
          "text-opacity": [{
            "text-opacity": [opacity]
          }],
          /**
           * Text Decoration
           * @see https://tailwindcss.com/docs/text-decoration
           */
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          /**
           * Text Decoration Style
           * @see https://tailwindcss.com/docs/text-decoration-style
           */
          "text-decoration-style": [{
            decoration: [...getLineStyles(), "wavy"]
          }],
          /**
           * Text Decoration Thickness
           * @see https://tailwindcss.com/docs/text-decoration-thickness
           */
          "text-decoration-thickness": [{
            decoration: ["auto", "from-font", isLength, isArbitraryLength]
          }],
          /**
           * Text Underline Offset
           * @see https://tailwindcss.com/docs/text-underline-offset
           */
          "underline-offset": [{
            "underline-offset": ["auto", isLength, isArbitraryValue]
          }],
          /**
           * Text Decoration Color
           * @see https://tailwindcss.com/docs/text-decoration-color
           */
          "text-decoration-color": [{
            decoration: [colors]
          }],
          /**
           * Text Transform
           * @see https://tailwindcss.com/docs/text-transform
           */
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          /**
           * Text Overflow
           * @see https://tailwindcss.com/docs/text-overflow
           */
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          /**
           * Text Wrap
           * @see https://tailwindcss.com/docs/text-wrap
           */
          "text-wrap": [{
            text: ["wrap", "nowrap", "balance", "pretty"]
          }],
          /**
           * Text Indent
           * @see https://tailwindcss.com/docs/text-indent
           */
          indent: [{
            indent: getSpacingWithArbitrary()
          }],
          /**
           * Vertical Alignment
           * @see https://tailwindcss.com/docs/vertical-align
           */
          "vertical-align": [{
            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
          }],
          /**
           * Whitespace
           * @see https://tailwindcss.com/docs/whitespace
           */
          whitespace: [{
            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
          }],
          /**
           * Word Break
           * @see https://tailwindcss.com/docs/word-break
           */
          break: [{
            break: ["normal", "words", "all", "keep"]
          }],
          /**
           * Hyphens
           * @see https://tailwindcss.com/docs/hyphens
           */
          hyphens: [{
            hyphens: ["none", "manual", "auto"]
          }],
          /**
           * Content
           * @see https://tailwindcss.com/docs/content
           */
          content: [{
            content: ["none", isArbitraryValue]
          }],
          // Backgrounds
          /**
           * Background Attachment
           * @see https://tailwindcss.com/docs/background-attachment
           */
          "bg-attachment": [{
            bg: ["fixed", "local", "scroll"]
          }],
          /**
           * Background Clip
           * @see https://tailwindcss.com/docs/background-clip
           */
          "bg-clip": [{
            "bg-clip": ["border", "padding", "content", "text"]
          }],
          /**
           * Background Opacity
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/background-opacity
           */
          "bg-opacity": [{
            "bg-opacity": [opacity]
          }],
          /**
           * Background Origin
           * @see https://tailwindcss.com/docs/background-origin
           */
          "bg-origin": [{
            "bg-origin": ["border", "padding", "content"]
          }],
          /**
           * Background Position
           * @see https://tailwindcss.com/docs/background-position
           */
          "bg-position": [{
            bg: [...getPositions(), isArbitraryPosition]
          }],
          /**
           * Background Repeat
           * @see https://tailwindcss.com/docs/background-repeat
           */
          "bg-repeat": [{
            bg: ["no-repeat", {
              repeat: ["", "x", "y", "round", "space"]
            }]
          }],
          /**
           * Background Size
           * @see https://tailwindcss.com/docs/background-size
           */
          "bg-size": [{
            bg: ["auto", "cover", "contain", isArbitrarySize]
          }],
          /**
           * Background Image
           * @see https://tailwindcss.com/docs/background-image
           */
          "bg-image": [{
            bg: ["none", {
              "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, isArbitraryImage]
          }],
          /**
           * Background Color
           * @see https://tailwindcss.com/docs/background-color
           */
          "bg-color": [{
            bg: [colors]
          }],
          /**
           * Gradient Color Stops From Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-from-pos": [{
            from: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops Via Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-via-pos": [{
            via: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops To Position
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-to-pos": [{
            to: [gradientColorStopPositions]
          }],
          /**
           * Gradient Color Stops From
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-from": [{
            from: [gradientColorStops]
          }],
          /**
           * Gradient Color Stops Via
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-via": [{
            via: [gradientColorStops]
          }],
          /**
           * Gradient Color Stops To
           * @see https://tailwindcss.com/docs/gradient-color-stops
           */
          "gradient-to": [{
            to: [gradientColorStops]
          }],
          // Borders
          /**
           * Border Radius
           * @see https://tailwindcss.com/docs/border-radius
           */
          rounded: [{
            rounded: [borderRadius]
          }],
          /**
           * Border Radius Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-s": [{
            "rounded-s": [borderRadius]
          }],
          /**
           * Border Radius End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-e": [{
            "rounded-e": [borderRadius]
          }],
          /**
           * Border Radius Top
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-t": [{
            "rounded-t": [borderRadius]
          }],
          /**
           * Border Radius Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-r": [{
            "rounded-r": [borderRadius]
          }],
          /**
           * Border Radius Bottom
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-b": [{
            "rounded-b": [borderRadius]
          }],
          /**
           * Border Radius Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-l": [{
            "rounded-l": [borderRadius]
          }],
          /**
           * Border Radius Start Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-ss": [{
            "rounded-ss": [borderRadius]
          }],
          /**
           * Border Radius Start End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-se": [{
            "rounded-se": [borderRadius]
          }],
          /**
           * Border Radius End End
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-ee": [{
            "rounded-ee": [borderRadius]
          }],
          /**
           * Border Radius End Start
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-es": [{
            "rounded-es": [borderRadius]
          }],
          /**
           * Border Radius Top Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-tl": [{
            "rounded-tl": [borderRadius]
          }],
          /**
           * Border Radius Top Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-tr": [{
            "rounded-tr": [borderRadius]
          }],
          /**
           * Border Radius Bottom Right
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-br": [{
            "rounded-br": [borderRadius]
          }],
          /**
           * Border Radius Bottom Left
           * @see https://tailwindcss.com/docs/border-radius
           */
          "rounded-bl": [{
            "rounded-bl": [borderRadius]
          }],
          /**
           * Border Width
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w": [{
            border: [borderWidth]
          }],
          /**
           * Border Width X
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-x": [{
            "border-x": [borderWidth]
          }],
          /**
           * Border Width Y
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-y": [{
            "border-y": [borderWidth]
          }],
          /**
           * Border Width Start
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-s": [{
            "border-s": [borderWidth]
          }],
          /**
           * Border Width End
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-e": [{
            "border-e": [borderWidth]
          }],
          /**
           * Border Width Top
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-t": [{
            "border-t": [borderWidth]
          }],
          /**
           * Border Width Right
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-r": [{
            "border-r": [borderWidth]
          }],
          /**
           * Border Width Bottom
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-b": [{
            "border-b": [borderWidth]
          }],
          /**
           * Border Width Left
           * @see https://tailwindcss.com/docs/border-width
           */
          "border-w-l": [{
            "border-l": [borderWidth]
          }],
          /**
           * Border Opacity
           * @see https://tailwindcss.com/docs/border-opacity
           */
          "border-opacity": [{
            "border-opacity": [opacity]
          }],
          /**
           * Border Style
           * @see https://tailwindcss.com/docs/border-style
           */
          "border-style": [{
            border: [...getLineStyles(), "hidden"]
          }],
          /**
           * Divide Width X
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-x": [{
            "divide-x": [borderWidth]
          }],
          /**
           * Divide Width X Reverse
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-x-reverse": ["divide-x-reverse"],
          /**
           * Divide Width Y
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-y": [{
            "divide-y": [borderWidth]
          }],
          /**
           * Divide Width Y Reverse
           * @see https://tailwindcss.com/docs/divide-width
           */
          "divide-y-reverse": ["divide-y-reverse"],
          /**
           * Divide Opacity
           * @see https://tailwindcss.com/docs/divide-opacity
           */
          "divide-opacity": [{
            "divide-opacity": [opacity]
          }],
          /**
           * Divide Style
           * @see https://tailwindcss.com/docs/divide-style
           */
          "divide-style": [{
            divide: getLineStyles()
          }],
          /**
           * Border Color
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color": [{
            border: [borderColor]
          }],
          /**
           * Border Color X
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-x": [{
            "border-x": [borderColor]
          }],
          /**
           * Border Color Y
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-y": [{
            "border-y": [borderColor]
          }],
          /**
           * Border Color S
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-s": [{
            "border-s": [borderColor]
          }],
          /**
           * Border Color E
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-e": [{
            "border-e": [borderColor]
          }],
          /**
           * Border Color Top
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-t": [{
            "border-t": [borderColor]
          }],
          /**
           * Border Color Right
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-r": [{
            "border-r": [borderColor]
          }],
          /**
           * Border Color Bottom
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-b": [{
            "border-b": [borderColor]
          }],
          /**
           * Border Color Left
           * @see https://tailwindcss.com/docs/border-color
           */
          "border-color-l": [{
            "border-l": [borderColor]
          }],
          /**
           * Divide Color
           * @see https://tailwindcss.com/docs/divide-color
           */
          "divide-color": [{
            divide: [borderColor]
          }],
          /**
           * Outline Style
           * @see https://tailwindcss.com/docs/outline-style
           */
          "outline-style": [{
            outline: ["", ...getLineStyles()]
          }],
          /**
           * Outline Offset
           * @see https://tailwindcss.com/docs/outline-offset
           */
          "outline-offset": [{
            "outline-offset": [isLength, isArbitraryValue]
          }],
          /**
           * Outline Width
           * @see https://tailwindcss.com/docs/outline-width
           */
          "outline-w": [{
            outline: [isLength, isArbitraryLength]
          }],
          /**
           * Outline Color
           * @see https://tailwindcss.com/docs/outline-color
           */
          "outline-color": [{
            outline: [colors]
          }],
          /**
           * Ring Width
           * @see https://tailwindcss.com/docs/ring-width
           */
          "ring-w": [{
            ring: getLengthWithEmptyAndArbitrary()
          }],
          /**
           * Ring Width Inset
           * @see https://tailwindcss.com/docs/ring-width
           */
          "ring-w-inset": ["ring-inset"],
          /**
           * Ring Color
           * @see https://tailwindcss.com/docs/ring-color
           */
          "ring-color": [{
            ring: [colors]
          }],
          /**
           * Ring Opacity
           * @see https://tailwindcss.com/docs/ring-opacity
           */
          "ring-opacity": [{
            "ring-opacity": [opacity]
          }],
          /**
           * Ring Offset Width
           * @see https://tailwindcss.com/docs/ring-offset-width
           */
          "ring-offset-w": [{
            "ring-offset": [isLength, isArbitraryLength]
          }],
          /**
           * Ring Offset Color
           * @see https://tailwindcss.com/docs/ring-offset-color
           */
          "ring-offset-color": [{
            "ring-offset": [colors]
          }],
          // Effects
          /**
           * Box Shadow
           * @see https://tailwindcss.com/docs/box-shadow
           */
          shadow: [{
            shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
          }],
          /**
           * Box Shadow Color
           * @see https://tailwindcss.com/docs/box-shadow-color
           */
          "shadow-color": [{
            shadow: [isAny]
          }],
          /**
           * Opacity
           * @see https://tailwindcss.com/docs/opacity
           */
          opacity: [{
            opacity: [opacity]
          }],
          /**
           * Mix Blend Mode
           * @see https://tailwindcss.com/docs/mix-blend-mode
           */
          "mix-blend": [{
            "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
          }],
          /**
           * Background Blend Mode
           * @see https://tailwindcss.com/docs/background-blend-mode
           */
          "bg-blend": [{
            "bg-blend": getBlendModes()
          }],
          // Filters
          /**
           * Filter
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/filter
           */
          filter: [{
            filter: ["", "none"]
          }],
          /**
           * Blur
           * @see https://tailwindcss.com/docs/blur
           */
          blur: [{
            blur: [blur]
          }],
          /**
           * Brightness
           * @see https://tailwindcss.com/docs/brightness
           */
          brightness: [{
            brightness: [brightness]
          }],
          /**
           * Contrast
           * @see https://tailwindcss.com/docs/contrast
           */
          contrast: [{
            contrast: [contrast]
          }],
          /**
           * Drop Shadow
           * @see https://tailwindcss.com/docs/drop-shadow
           */
          "drop-shadow": [{
            "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
          }],
          /**
           * Grayscale
           * @see https://tailwindcss.com/docs/grayscale
           */
          grayscale: [{
            grayscale: [grayscale]
          }],
          /**
           * Hue Rotate
           * @see https://tailwindcss.com/docs/hue-rotate
           */
          "hue-rotate": [{
            "hue-rotate": [hueRotate]
          }],
          /**
           * Invert
           * @see https://tailwindcss.com/docs/invert
           */
          invert: [{
            invert: [invert]
          }],
          /**
           * Saturate
           * @see https://tailwindcss.com/docs/saturate
           */
          saturate: [{
            saturate: [saturate]
          }],
          /**
           * Sepia
           * @see https://tailwindcss.com/docs/sepia
           */
          sepia: [{
            sepia: [sepia]
          }],
          /**
           * Backdrop Filter
           * @deprecated since Tailwind CSS v3.0.0
           * @see https://tailwindcss.com/docs/backdrop-filter
           */
          "backdrop-filter": [{
            "backdrop-filter": ["", "none"]
          }],
          /**
           * Backdrop Blur
           * @see https://tailwindcss.com/docs/backdrop-blur
           */
          "backdrop-blur": [{
            "backdrop-blur": [blur]
          }],
          /**
           * Backdrop Brightness
           * @see https://tailwindcss.com/docs/backdrop-brightness
           */
          "backdrop-brightness": [{
            "backdrop-brightness": [brightness]
          }],
          /**
           * Backdrop Contrast
           * @see https://tailwindcss.com/docs/backdrop-contrast
           */
          "backdrop-contrast": [{
            "backdrop-contrast": [contrast]
          }],
          /**
           * Backdrop Grayscale
           * @see https://tailwindcss.com/docs/backdrop-grayscale
           */
          "backdrop-grayscale": [{
            "backdrop-grayscale": [grayscale]
          }],
          /**
           * Backdrop Hue Rotate
           * @see https://tailwindcss.com/docs/backdrop-hue-rotate
           */
          "backdrop-hue-rotate": [{
            "backdrop-hue-rotate": [hueRotate]
          }],
          /**
           * Backdrop Invert
           * @see https://tailwindcss.com/docs/backdrop-invert
           */
          "backdrop-invert": [{
            "backdrop-invert": [invert]
          }],
          /**
           * Backdrop Opacity
           * @see https://tailwindcss.com/docs/backdrop-opacity
           */
          "backdrop-opacity": [{
            "backdrop-opacity": [opacity]
          }],
          /**
           * Backdrop Saturate
           * @see https://tailwindcss.com/docs/backdrop-saturate
           */
          "backdrop-saturate": [{
            "backdrop-saturate": [saturate]
          }],
          /**
           * Backdrop Sepia
           * @see https://tailwindcss.com/docs/backdrop-sepia
           */
          "backdrop-sepia": [{
            "backdrop-sepia": [sepia]
          }],
          // Tables
          /**
           * Border Collapse
           * @see https://tailwindcss.com/docs/border-collapse
           */
          "border-collapse": [{
            border: ["collapse", "separate"]
          }],
          /**
           * Border Spacing
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing": [{
            "border-spacing": [borderSpacing]
          }],
          /**
           * Border Spacing X
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing-x": [{
            "border-spacing-x": [borderSpacing]
          }],
          /**
           * Border Spacing Y
           * @see https://tailwindcss.com/docs/border-spacing
           */
          "border-spacing-y": [{
            "border-spacing-y": [borderSpacing]
          }],
          /**
           * Table Layout
           * @see https://tailwindcss.com/docs/table-layout
           */
          "table-layout": [{
            table: ["auto", "fixed"]
          }],
          /**
           * Caption Side
           * @see https://tailwindcss.com/docs/caption-side
           */
          caption: [{
            caption: ["top", "bottom"]
          }],
          // Transitions and Animation
          /**
           * Tranisition Property
           * @see https://tailwindcss.com/docs/transition-property
           */
          transition: [{
            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
          }],
          /**
           * Transition Duration
           * @see https://tailwindcss.com/docs/transition-duration
           */
          duration: [{
            duration: getNumberAndArbitrary()
          }],
          /**
           * Transition Timing Function
           * @see https://tailwindcss.com/docs/transition-timing-function
           */
          ease: [{
            ease: ["linear", "in", "out", "in-out", isArbitraryValue]
          }],
          /**
           * Transition Delay
           * @see https://tailwindcss.com/docs/transition-delay
           */
          delay: [{
            delay: getNumberAndArbitrary()
          }],
          /**
           * Animation
           * @see https://tailwindcss.com/docs/animation
           */
          animate: [{
            animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
          }],
          // Transforms
          /**
           * Transform
           * @see https://tailwindcss.com/docs/transform
           */
          transform: [{
            transform: ["", "gpu", "none"]
          }],
          /**
           * Scale
           * @see https://tailwindcss.com/docs/scale
           */
          scale: [{
            scale: [scale]
          }],
          /**
           * Scale X
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-x": [{
            "scale-x": [scale]
          }],
          /**
           * Scale Y
           * @see https://tailwindcss.com/docs/scale
           */
          "scale-y": [{
            "scale-y": [scale]
          }],
          /**
           * Rotate
           * @see https://tailwindcss.com/docs/rotate
           */
          rotate: [{
            rotate: [isInteger, isArbitraryValue]
          }],
          /**
           * Translate X
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-x": [{
            "translate-x": [translate]
          }],
          /**
           * Translate Y
           * @see https://tailwindcss.com/docs/translate
           */
          "translate-y": [{
            "translate-y": [translate]
          }],
          /**
           * Skew X
           * @see https://tailwindcss.com/docs/skew
           */
          "skew-x": [{
            "skew-x": [skew]
          }],
          /**
           * Skew Y
           * @see https://tailwindcss.com/docs/skew
           */
          "skew-y": [{
            "skew-y": [skew]
          }],
          /**
           * Transform Origin
           * @see https://tailwindcss.com/docs/transform-origin
           */
          "transform-origin": [{
            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
          }],
          // Interactivity
          /**
           * Accent Color
           * @see https://tailwindcss.com/docs/accent-color
           */
          accent: [{
            accent: ["auto", colors]
          }],
          /**
           * Appearance
           * @see https://tailwindcss.com/docs/appearance
           */
          appearance: [{
            appearance: ["none", "auto"]
          }],
          /**
           * Cursor
           * @see https://tailwindcss.com/docs/cursor
           */
          cursor: [{
            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
          }],
          /**
           * Caret Color
           * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
           */
          "caret-color": [{
            caret: [colors]
          }],
          /**
           * Pointer Events
           * @see https://tailwindcss.com/docs/pointer-events
           */
          "pointer-events": [{
            "pointer-events": ["none", "auto"]
          }],
          /**
           * Resize
           * @see https://tailwindcss.com/docs/resize
           */
          resize: [{
            resize: ["none", "y", "x", ""]
          }],
          /**
           * Scroll Behavior
           * @see https://tailwindcss.com/docs/scroll-behavior
           */
          "scroll-behavior": [{
            scroll: ["auto", "smooth"]
          }],
          /**
           * Scroll Margin
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-m": [{
            "scroll-m": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin X
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mx": [{
            "scroll-mx": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Y
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-my": [{
            "scroll-my": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Start
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-ms": [{
            "scroll-ms": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin End
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-me": [{
            "scroll-me": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Top
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mt": [{
            "scroll-mt": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Right
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mr": [{
            "scroll-mr": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Bottom
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-mb": [{
            "scroll-mb": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Margin Left
           * @see https://tailwindcss.com/docs/scroll-margin
           */
          "scroll-ml": [{
            "scroll-ml": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-p": [{
            "scroll-p": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding X
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-px": [{
            "scroll-px": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Y
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-py": [{
            "scroll-py": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Start
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-ps": [{
            "scroll-ps": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding End
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pe": [{
            "scroll-pe": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Top
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pt": [{
            "scroll-pt": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Right
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pr": [{
            "scroll-pr": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Bottom
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pb": [{
            "scroll-pb": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Padding Left
           * @see https://tailwindcss.com/docs/scroll-padding
           */
          "scroll-pl": [{
            "scroll-pl": getSpacingWithArbitrary()
          }],
          /**
           * Scroll Snap Align
           * @see https://tailwindcss.com/docs/scroll-snap-align
           */
          "snap-align": [{
            snap: ["start", "end", "center", "align-none"]
          }],
          /**
           * Scroll Snap Stop
           * @see https://tailwindcss.com/docs/scroll-snap-stop
           */
          "snap-stop": [{
            snap: ["normal", "always"]
          }],
          /**
           * Scroll Snap Type
           * @see https://tailwindcss.com/docs/scroll-snap-type
           */
          "snap-type": [{
            snap: ["none", "x", "y", "both"]
          }],
          /**
           * Scroll Snap Type Strictness
           * @see https://tailwindcss.com/docs/scroll-snap-type
           */
          "snap-strictness": [{
            snap: ["mandatory", "proximity"]
          }],
          /**
           * Touch Action
           * @see https://tailwindcss.com/docs/touch-action
           */
          touch: [{
            touch: ["auto", "none", "manipulation"]
          }],
          /**
           * Touch Action X
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-x": [{
            "touch-pan": ["x", "left", "right"]
          }],
          /**
           * Touch Action Y
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-y": [{
            "touch-pan": ["y", "up", "down"]
          }],
          /**
           * Touch Action Pinch Zoom
           * @see https://tailwindcss.com/docs/touch-action
           */
          "touch-pz": ["touch-pinch-zoom"],
          /**
           * User Select
           * @see https://tailwindcss.com/docs/user-select
           */
          select: [{
            select: ["none", "text", "all", "auto"]
          }],
          /**
           * Will Change
           * @see https://tailwindcss.com/docs/will-change
           */
          "will-change": [{
            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
          }],
          // SVG
          /**
           * Fill
           * @see https://tailwindcss.com/docs/fill
           */
          fill: [{
            fill: [colors, "none"]
          }],
          /**
           * Stroke Width
           * @see https://tailwindcss.com/docs/stroke-width
           */
          "stroke-w": [{
            stroke: [isLength, isArbitraryLength, isArbitraryNumber]
          }],
          /**
           * Stroke
           * @see https://tailwindcss.com/docs/stroke
           */
          stroke: [{
            stroke: [colors, "none"]
          }],
          // Accessibility
          /**
           * Screen Readers
           * @see https://tailwindcss.com/docs/screen-readers
           */
          sr: ["sr-only", "not-sr-only"],
          /**
           * Forced Color Adjust
           * @see https://tailwindcss.com/docs/forced-color-adjust
           */
          "forced-color-adjust": [{
            "forced-color-adjust": ["auto", "none"]
          }]
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
          "font-size": ["leading"]
        }
      };
    };
    twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
  }
});

// src/utils/cn.ts
var cn;
var init_cn = __esm({
  "src/utils/cn.ts"() {
    "use strict";
    init_clsx();
    init_bundle_mjs();
    cn = (...inputs) => twMerge(clsx(inputs));
  }
});

// src/utils/get-tag-display.ts
var getTagDisplay;
var init_get_tag_display = __esm({
  "src/utils/get-tag-display.ts"() {
    "use strict";
    getTagDisplay = (input) => {
      if (input.elementsCount && input.elementsCount > 1) {
        return {
          tagName: `${input.elementsCount} elements`,
          componentName: void 0
        };
      }
      return {
        tagName: input.tagName || input.componentName || "element",
        componentName: input.tagName ? input.componentName : void 0
      };
    };
  }
});

// src/utils/is-mac.ts
var cachedIsMac, isMac;
var init_is_mac = __esm({
  "src/utils/is-mac.ts"() {
    "use strict";
    cachedIsMac = null;
    isMac = () => {
      if (cachedIsMac === null) {
        cachedIsMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);
      }
      return cachedIsMac;
    };
  }
});

// src/utils/format-shortcut.ts
var formatShortcut;
var init_format_shortcut = __esm({
  "src/utils/format-shortcut.ts"() {
    "use strict";
    init_is_mac();
    formatShortcut = (shortcut) => {
      if (shortcut === "Enter") {
        return "\u21B5";
      }
      if (isMac()) {
        return `\u2318${shortcut}`;
      }
      const normalizedShortcut = shortcut.replace("\u21E7", "Shift+");
      return `Ctrl+${normalizedShortcut}`;
    };
  }
});

// src/components/icons/icon-reply.tsx
var _tmpl$2, IconReply;
var init_icon_reply = __esm({
  "src/components/icons/icon-reply.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$2 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 12 12"fill=none style=transform:rotate(180deg)><path d="M5 3V1L1 4.5L5 8V6C8 6 10 7 11 10C11 7 9 4 5 3Z"fill=currentColor>`);
    IconReply = (props) => {
      const size = () => props.size ?? 12;
      return (() => {
        var _el$ = _tmpl$2();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/icons/icon-submit.tsx
var _tmpl$3, IconSubmit;
var init_icon_submit = __esm({
  "src/components/icons/icon-submit.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$3 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 12 12"fill=none><path d="M6 1L6 11M6 1L2 5M6 1L10 5"stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round>`);
    IconSubmit = (props) => {
      const size = () => props.size ?? 12;
      return (() => {
        var _el$ = _tmpl$3();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/icons/icon-loader.tsx
var _tmpl$4, IconLoader;
var init_icon_loader = __esm({
  "src/components/icons/icon-loader.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$4 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path class=icon-loader-bar d="M12 2v4"style=animation-delay:0ms></path><path class=icon-loader-bar d="M15 6.8l2-3.5"style=animation-delay:-42ms></path><path class=icon-loader-bar d="M17.2 9l3.5-2"style=animation-delay:-83ms></path><path class=icon-loader-bar d="M18 12h4"style=animation-delay:-125ms></path><path class=icon-loader-bar d="M17.2 15l3.5 2"style=animation-delay:-167ms></path><path class=icon-loader-bar d="M15 17.2l2 3.5"style=animation-delay:-208ms></path><path class=icon-loader-bar d="M12 18v4"style=animation-delay:-250ms></path><path class=icon-loader-bar d="M9 17.2l-2 3.5"style=animation-delay:-292ms></path><path class=icon-loader-bar d="M6.8 15l-3.5 2"style=animation-delay:-333ms></path><path class=icon-loader-bar d="M2 12h4"style=animation-delay:-375ms></path><path class=icon-loader-bar d="M6.8 9l-3.5-2"style=animation-delay:-417ms></path><path class=icon-loader-bar d="M9 6.8l-2-3.5"style=animation-delay:-458ms>`);
    IconLoader = (props) => {
      const size = () => props.size ?? 16;
      return (() => {
        var _el$ = _tmpl$4(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling, _el$7 = _el$6.nextSibling, _el$8 = _el$7.nextSibling, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$0.nextSibling, _el$10 = _el$1.nextSibling, _el$11 = _el$10.nextSibling;
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/selection-label/arrow.tsx
var _tmpl$5, Arrow;
var init_arrow = __esm({
  "src/components/selection-label/arrow.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$5 = /* @__PURE__ */ template(`<div class="absolute w-0 h-0 z-10"style="border-left:8px solid transparent;border-right:8px solid transparent">`);
    Arrow = (props) => {
      const arrowColor = () => props.color ?? "white";
      const isBottom = () => props.position === "bottom";
      return (() => {
        var _el$ = _tmpl$5();
        createRenderEffect((_p$) => {
          var _v$ = `calc(${props.leftPercent}% + ${props.leftOffsetPx}px)`, _v$2 = isBottom() ? "0" : void 0, _v$3 = isBottom() ? void 0 : "0", _v$4 = isBottom() ? "translateX(-50%) translateY(-100%)" : "translateX(-50%) translateY(100%)", _v$5 = isBottom() ? `8px solid ${arrowColor()}` : void 0, _v$6 = isBottom() ? void 0 : `8px solid ${arrowColor()}`, _v$7 = isBottom() ? "drop-shadow(-1px -1px 0 rgba(0,0,0,0.06)) drop-shadow(1px -1px 0 rgba(0,0,0,0.06))" : "drop-shadow(-1px 1px 0 rgba(0,0,0,0.06)) drop-shadow(1px 1px 0 rgba(0,0,0,0.06))";
          _v$ !== _p$.e && setStyleProperty(_el$, "left", _p$.e = _v$);
          _v$2 !== _p$.t && setStyleProperty(_el$, "top", _p$.t = _v$2);
          _v$3 !== _p$.a && setStyleProperty(_el$, "bottom", _p$.a = _v$3);
          _v$4 !== _p$.o && setStyleProperty(_el$, "transform", _p$.o = _v$4);
          _v$5 !== _p$.i && setStyleProperty(_el$, "border-bottom", _p$.i = _v$5);
          _v$6 !== _p$.n && setStyleProperty(_el$, "border-top", _p$.n = _v$6);
          _v$7 !== _p$.s && setStyleProperty(_el$, "filter", _p$.s = _v$7);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0,
          n: void 0,
          s: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/icons/icon-open.tsx
var _tmpl$6, IconOpen;
var init_icon_open = __esm({
  "src/components/icons/icon-open.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$6 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2><path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"></path><path d="M11 13l9-9"></path><path d="M15 4h5v5">`);
    IconOpen = (props) => {
      const size = () => props.size ?? 12;
      return (() => {
        var _el$ = _tmpl$6();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/selection-label/tag-badge.tsx
var _tmpl$7, _tmpl$22, _tmpl$32, TagBadge;
var init_tag_badge = __esm({
  "src/components/selection-label/tag-badge.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_cn();
    init_icon_open();
    _tmpl$7 = /* @__PURE__ */ template(`<span class=text-black>`);
    _tmpl$22 = /* @__PURE__ */ template(`<span class=text-black/50>.`);
    _tmpl$32 = /* @__PURE__ */ template(`<div><span class="text-[13px] leading-4 h-fit font-medium overflow-hidden text-ellipsis whitespace-nowrap min-w-0">`);
    TagBadge = (props) => {
      const [isHovered, setIsHovered] = createSignal(false);
      const handleMouseEnter = () => {
        setIsHovered(true);
        props.onHoverChange?.(true);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
        props.onHoverChange?.(false);
      };
      return (() => {
        var _el$ = _tmpl$32(), _el$2 = _el$.firstChild;
        addEventListener(_el$, "click", props.onClick, true);
        _el$.addEventListener("mouseleave", handleMouseLeave);
        _el$.addEventListener("mouseenter", handleMouseEnter);
        insert(_el$2, createComponent(Show, {
          get when() {
            return props.componentName;
          },
          get children() {
            return [(() => {
              var _el$3 = _tmpl$7();
              insert(_el$3, () => props.componentName);
              return _el$3;
            })(), (() => {
              var _el$4 = _tmpl$22(), _el$5 = _el$4.firstChild;
              insert(_el$4, () => props.tagName, null);
              return _el$4;
            })()];
          }
        }), null);
        insert(_el$2, createComponent(Show, {
          get when() {
            return !props.componentName;
          },
          get children() {
            var _el$6 = _tmpl$7();
            insert(_el$6, () => props.tagName);
            return _el$6;
          }
        }), null);
        insert(_el$, createComponent(Show, {
          get when() {
            return props.isClickable || props.forceShowIcon;
          },
          get children() {
            return createComponent(IconOpen, {
              size: 10,
              get ["class"]() {
                return cn("text-black transition-all duration-100 shrink-0", isHovered() || props.forceShowIcon ? "opacity-100 scale-100" : "opacity-0 scale-75 -ml-[2px] w-0");
              }
            });
          }
        }), null);
        createRenderEffect(() => className(_el$, cn("contain-layout flex items-center gap-1 max-w-[280px] overflow-hidden", props.shrink && "shrink-0", props.isClickable && "cursor-pointer")));
        return _el$;
      })();
    };
    delegateEvents(["click"]);
  }
});

// src/components/selection-label/bottom-section.tsx
var _tmpl$8, BottomSection;
var init_bottom_section = __esm({
  "src/components/selection-label/bottom-section.tsx"() {
    "use strict";
    init_web();
    init_web();
    _tmpl$8 = /* @__PURE__ */ template(`<div class="[font-synthesis:none] contain-layout shrink-0 flex flex-col items-start px-2 py-1.5 w-auto h-fit self-stretch [border-top-width:0.5px] border-t-solid border-t-[#D9D9D9] antialiased rounded-t-none rounded-b-[6px]">`);
    BottomSection = (props) => (() => {
      var _el$ = _tmpl$8();
      insert(_el$, () => props.children);
      return _el$;
    })();
  }
});

// src/utils/confirmation-focus-manager.ts
var activeConfirmationId, confirmationFocusManager;
var init_confirmation_focus_manager = __esm({
  "src/utils/confirmation-focus-manager.ts"() {
    "use strict";
    activeConfirmationId = null;
    confirmationFocusManager = {
      claim: (id) => {
        activeConfirmationId = id;
      },
      release: (id) => {
        if (activeConfirmationId === id) {
          activeConfirmationId = null;
        }
      },
      isActive: (id) => activeConfirmationId === id
    };
  }
});

// src/components/selection-label/discard-prompt.tsx
var _tmpl$9, _tmpl$23, DiscardPrompt;
var init_discard_prompt = __esm({
  "src/components/selection-label/discard-prompt.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_confirmation_focus_manager();
    init_is_keyboard_event_triggered_by_input();
    init_bottom_section();
    _tmpl$9 = /* @__PURE__ */ template(`<div class="contain-layout shrink-0 flex items-center justify-end gap-[5px] w-full h-fit"><button data-react-grab-discard-no class="contain-layout shrink-0 flex items-center justify-center px-[3px] py-px rounded-sm bg-white [border-width:0.5px] border-solid border-[#B3B3B3] cursor-pointer transition-all hover:bg-[#F5F5F5] press-scale h-[17px]"><span class="text-black text-[13px] leading-3.5 font-sans font-medium">No</span></button><button data-react-grab-discard-yes class="contain-layout shrink-0 flex items-center justify-center px-[3px] py-px rounded-sm bg-[#FEF2F2] cursor-pointer transition-all hover:bg-[#FEE2E2] press-scale h-[17px]"><span class="text-[#B91C1C] text-[13px] leading-3.5 font-sans font-medium">Yes`);
    _tmpl$23 = /* @__PURE__ */ template(`<div data-react-grab-discard-prompt class="contain-layout shrink-0 flex flex-col justify-center items-end w-fit h-fit"><div class="contain-layout shrink-0 flex items-center gap-1 pt-1.5 pb-1 px-2 w-full h-fit"><span class="text-black text-[13px] leading-4 shrink-0 font-sans font-medium w-fit h-fit">Discard?`);
    DiscardPrompt = (props) => {
      const instanceId = Symbol();
      const handleKeyDown = (event) => {
        if (!confirmationFocusManager.isActive(instanceId)) return;
        if (isKeyboardEventTriggeredByInput(event)) return;
        const isConfirmKey = event.code === "Enter" || event.code === "Escape";
        if (isConfirmKey) {
          event.preventDefault();
          event.stopPropagation();
          props.onConfirm?.();
        }
      };
      const handleFocus = () => {
        confirmationFocusManager.claim(instanceId);
      };
      onMount(() => {
        confirmationFocusManager.claim(instanceId);
        window.addEventListener("keydown", handleKeyDown, {
          capture: true
        });
      });
      onCleanup(() => {
        confirmationFocusManager.release(instanceId);
        window.removeEventListener("keydown", handleKeyDown, {
          capture: true
        });
      });
      return (() => {
        var _el$ = _tmpl$23(), _el$2 = _el$.firstChild;
        _el$.$$click = handleFocus;
        _el$.$$pointerdown = handleFocus;
        insert(_el$, createComponent(BottomSection, {
          get children() {
            var _el$3 = _tmpl$9(), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
            addEventListener(_el$4, "click", props.onCancel, true);
            addEventListener(_el$5, "click", props.onConfirm, true);
            return _el$3;
          }
        }), null);
        return _el$;
      })();
    };
    delegateEvents(["pointerdown", "click"]);
  }
});

// src/components/icons/icon-retry.tsx
var _tmpl$10, IconRetry;
var init_icon_retry = __esm({
  "src/components/icons/icon-retry.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$10 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"fill=currentColor>`);
    IconRetry = (props) => {
      const size = () => props.size ?? 12;
      return (() => {
        var _el$ = _tmpl$10();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/selection-label/error-view.tsx
var _tmpl$11, _tmpl$24, ErrorView;
var init_error_view = __esm({
  "src/components/selection-label/error-view.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_confirmation_focus_manager();
    init_is_keyboard_event_triggered_by_input();
    init_icon_retry();
    init_bottom_section();
    _tmpl$11 = /* @__PURE__ */ template(`<div class="contain-layout shrink-0 flex items-center justify-end gap-[5px] w-full h-fit"><button data-react-grab-retry class="contain-layout shrink-0 flex items-center justify-center gap-1 px-[3px] py-px rounded-sm bg-white [border-width:0.5px] border-solid border-[#B3B3B3] cursor-pointer transition-all hover:bg-[#F5F5F5] press-scale h-[17px]"><span class="text-black text-[13px] leading-3.5 font-sans font-medium">Retry</span></button><button data-react-grab-error-ok class="contain-layout shrink-0 flex items-center justify-center gap-1 px-[3px] py-px rounded-sm bg-white [border-width:0.5px] border-solid border-[#B3B3B3] cursor-pointer transition-all hover:bg-[#F5F5F5] press-scale h-[17px]"><span class="text-black text-[13px] leading-3.5 font-sans font-medium">Ok`);
    _tmpl$24 = /* @__PURE__ */ template(`<div data-react-grab-error class="contain-layout shrink-0 flex flex-col justify-center items-end w-fit h-fit max-w-[280px]"><div class="contain-layout shrink-0 flex items-start gap-1 px-2 w-full h-fit"><span class="text-[#B91C1C] text-[13px] leading-4 font-sans font-medium overflow-hidden line-clamp-5">`);
    ErrorView = (props) => {
      const instanceId = Symbol();
      const handleKeyDown = (event) => {
        if (!confirmationFocusManager.isActive(instanceId)) return;
        if (isKeyboardEventTriggeredByInput(event)) return;
        const isEnter = event.code === "Enter";
        const isEscape = event.code === "Escape";
        if (isEnter) {
          event.preventDefault();
          event.stopPropagation();
          props.onRetry?.();
        } else if (isEscape) {
          event.preventDefault();
          event.stopPropagation();
          props.onAcknowledge?.();
        }
      };
      const handleFocus = () => {
        confirmationFocusManager.claim(instanceId);
      };
      onMount(() => {
        confirmationFocusManager.claim(instanceId);
        window.addEventListener("keydown", handleKeyDown, {
          capture: true
        });
      });
      onCleanup(() => {
        confirmationFocusManager.release(instanceId);
        window.removeEventListener("keydown", handleKeyDown, {
          capture: true
        });
      });
      const hasActions = () => Boolean(props.onRetry || props.onAcknowledge);
      return (() => {
        var _el$ = _tmpl$24(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
        _el$.$$click = handleFocus;
        _el$.$$pointerdown = handleFocus;
        insert(_el$3, () => props.error);
        insert(_el$, createComponent(Show, {
          get when() {
            return hasActions();
          },
          get children() {
            return createComponent(BottomSection, {
              get children() {
                var _el$4 = _tmpl$11(), _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$5.nextSibling;
                addEventListener(_el$5, "click", props.onRetry, true);
                insert(_el$5, createComponent(IconRetry, {
                  size: 10,
                  "class": "text-black/50"
                }), null);
                addEventListener(_el$7, "click", props.onAcknowledge, true);
                return _el$4;
              }
            });
          }
        }), null);
        createRenderEffect((_p$) => {
          var _v$ = {
            "pt-1.5 pb-1": hasActions(),
            "py-1.5": !hasActions()
          }, _v$2 = props.error;
          _p$.e = classList(_el$2, _v$, _p$.e);
          _v$2 !== _p$.t && setAttribute(_el$3, "title", _p$.t = _v$2);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$;
      })();
    };
    delegateEvents(["pointerdown", "click"]);
  }
});

// src/components/icons/icon-return.tsx
var _tmpl$12, IconReturn;
var init_icon_return = __esm({
  "src/components/icons/icon-return.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$12 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 22 19"fill=none><path d="M6.76263 18.6626C7.48251 18.6626 7.95474 18.1682 7.95474 17.4895C7.95474 17.1207 7.80474 16.8576 7.58683 16.6361L5.3018 14.4137L2.84621 12.3589L2.44374 13.0037L5.92137 13.1622H17.9232C20.4842 13.1622 21.593 12.021 21.593 9.47237V3.66983C21.593 1.10875 20.4842 0 17.9232 0H12.5414C11.8179 0 11.3018 0.545895 11.3018 1.21695C11.3018 1.888 11.8179 2.43389 12.5414 2.43389H17.8424C18.7937 2.43389 19.1897 2.83653 19.1897 3.78784V9.35747C19.1897 10.3257 18.7937 10.7314 17.8424 10.7314H5.92137L2.44374 10.8832L2.84621 11.5281L5.3018 9.47993L7.58683 7.2606C7.80474 7.03914 7.95474 6.7693 7.95474 6.40049C7.95474 5.72854 7.48251 5.22747 6.76263 5.22747C6.46129 5.22747 6.12975 5.36905 5.89231 5.6096L0.376815 11.0425C0.134921 11.2777 0 11.6141 0 11.9452C0 12.2728 0.134921 12.6158 0.376815 12.848L5.89231 18.2871C6.12975 18.5276 6.46129 18.6626 6.76263 18.6626Z"fill=currentColor>`);
    IconReturn = (props) => {
      const size = () => props.size ?? 12;
      return (() => {
        var _el$ = _tmpl$12();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size() * 19 / 22, _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/icons/icon-ellipsis.tsx
var _tmpl$13, IconEllipsis;
var init_icon_ellipsis = __esm({
  "src/components/icons/icon-ellipsis.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$13 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor><circle cx=5 cy=12 r=2></circle><circle cx=12 cy=12 r=2></circle><circle cx=19 cy=12 r=2>`);
    IconEllipsis = (props) => {
      const size = () => props.size ?? 12;
      return (() => {
        var _el$ = _tmpl$13();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/icons/icon-check.tsx
var _tmpl$14, IconCheck;
var init_icon_check = __esm({
  "src/components/icons/icon-check.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$14 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 21 21"fill=none><g clip-path=url(#clip0_icon_check)><path d="M20.1767 10.0875C20.1767 15.6478 15.6576 20.175 10.0875 20.175C4.52715 20.175 0 15.6478 0 10.0875C0 4.51914 4.52715 0 10.0875 0C15.6576 0 20.1767 4.51914 20.1767 10.0875ZM13.0051 6.23867L8.96699 12.7041L7.08476 10.3143C6.83358 9.99199 6.59941 9.88828 6.28984 9.88828C5.79414 9.88828 5.39961 10.2918 5.39961 10.7893C5.39961 11.0367 5.48925 11.2621 5.66386 11.4855L8.05703 14.3967C8.33027 14.7508 8.63183 14.9103 8.99902 14.9103C9.36445 14.9103 9.68105 14.7312 9.90546 14.3896L14.4742 7.27206C14.6107 7.04765 14.7289 6.80898 14.7289 6.58359C14.7289 6.07187 14.281 5.72968 13.7934 5.72968C13.4937 5.72968 13.217 5.90527 13.0051 6.23867Z"fill=currentColor></path></g><defs><clipPath id=clip0_icon_check><rect width=20.5381 height=20.1848 fill=white>`);
    IconCheck = (props) => {
      const size = () => props.size ?? 21;
      return (() => {
        var _el$ = _tmpl$14();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size() * 20.1848 / 20.5381, _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/selection-label/completion-view.tsx
var _tmpl$15, _tmpl$25, _tmpl$33, _tmpl$42, _tmpl$52, _tmpl$62, _tmpl$72, _tmpl$82, MoreOptionsButton, CompletionView;
var init_completion_view = __esm({
  "src/components/selection-label/completion-view.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_constants();
    init_confirmation_focus_manager();
    init_is_keyboard_event_triggered_by_input();
    init_icon_reply();
    init_icon_return();
    init_icon_submit();
    init_icon_ellipsis();
    init_cn();
    init_icon_check();
    init_bottom_section();
    _tmpl$15 = /* @__PURE__ */ template(`<button data-react-grab-ignore-events data-react-grab-more-options class="flex items-center justify-center size-[18px] rounded-sm cursor-pointer bg-transparent hover:bg-black/10 text-black/30 hover:text-black border-none outline-none p-0 shrink-0 press-scale">`);
    _tmpl$25 = /* @__PURE__ */ template(`<button data-react-grab-undo class="contain-layout shrink-0 flex items-center justify-center px-[3px] py-px rounded-sm bg-[#FEF2F2] cursor-pointer transition-all hover:bg-[#FEE2E2] press-scale h-[17px]"><span class="text-[#B91C1C] text-[13px] leading-3.5 font-sans font-medium">Undo`);
    _tmpl$33 = /* @__PURE__ */ template(`<button data-react-grab-dismiss class="contain-layout shrink-0 flex items-center justify-center gap-1 px-[3px] py-px rounded-sm bg-white [border-width:0.5px] border-solid border-[#B3B3B3] cursor-pointer transition-all hover:bg-[#F5F5F5] press-scale h-[17px]"><span class="text-black text-[13px] leading-3.5 font-sans font-medium">`);
    _tmpl$42 = /* @__PURE__ */ template(`<div class="contain-layout shrink-0 flex items-center justify-between gap-2 pt-1.5 pb-1 px-2 w-full h-fit"><span class="text-black text-[13px] leading-4 font-sans font-medium h-fit tabular-nums overflow-hidden text-ellipsis whitespace-nowrap min-w-0"></span><div class="contain-layout shrink-0 flex items-center gap-2 h-fit">`);
    _tmpl$52 = /* @__PURE__ */ template(`<div class="contain-layout shrink-0 flex items-center gap-0.5 py-1.5 px-2 w-full h-fit"><span class="text-black text-[13px] leading-4 font-sans font-medium h-fit tabular-nums overflow-hidden text-ellipsis whitespace-nowrap min-w-0">`);
    _tmpl$62 = /* @__PURE__ */ template(`<div class="flex items-center gap-1 w-full mb-1 overflow-hidden"><span class="text-black/40 text-[11px] leading-3 font-medium truncate italic">`);
    _tmpl$72 = /* @__PURE__ */ template(`<div class="shrink-0 flex justify-between items-end w-full min-h-4"><textarea data-react-grab-ignore-events data-react-grab-followup-input class="text-black text-[13px] leading-4 font-medium bg-transparent border-none outline-none resize-none flex-1 p-0 m-0 wrap-break-word overflow-y-auto"placeholder=follow-up rows=1 style=field-sizing:content;min-height:16px;max-height:95px;scrollbar-width:none></textarea><button data-react-grab-followup-submit>`);
    _tmpl$82 = /* @__PURE__ */ template(`<div data-react-grab-completion>`);
    MoreOptionsButton = (props) => {
      return (() => {
        var _el$ = _tmpl$15();
        addEventListener(_el$, "click", (event) => {
          event.stopPropagation();
          event.stopImmediatePropagation();
          props.onClick();
        });
        addEventListener(_el$, "pointerdown", (event) => {
          event.stopPropagation();
          event.stopImmediatePropagation();
        });
        insert(_el$, createComponent(IconEllipsis, {
          size: 14
        }));
        return _el$;
      })();
    };
    CompletionView = (props) => {
      const instanceId = Symbol();
      let inputRef;
      let fadeTimeoutId;
      let dismissTimeoutId;
      const [didCopy, setDidCopy] = createSignal(false);
      const [isFading, setIsFading] = createSignal(false);
      const [displayStatusText, setDisplayStatusText] = createSignal(props.statusText);
      const [followUpInput, setFollowUpInput] = createSignal("");
      const handleAccept = () => {
        if (didCopy()) return;
        setDidCopy(true);
        setDisplayStatusText("Copied");
        props.onCopyStateChange?.();
        fadeTimeoutId = window.setTimeout(() => {
          setIsFading(true);
          props.onFadingChange?.(true);
          dismissTimeoutId = window.setTimeout(() => {
            props.onDismiss?.();
          }, FADE_DURATION_MS);
        }, FEEDBACK_DURATION_MS - FADE_DURATION_MS);
      };
      const handleFollowUpSubmit = () => {
        const prompt = followUpInput().trim();
        if (prompt && props.onFollowUpSubmit) {
          props.onFollowUpSubmit(prompt);
        }
      };
      const handleInputKeyDown = (event) => {
        if (event.isComposing || event.keyCode === 229) {
          return;
        }
        const isUndoRedo = event.code === "KeyZ" && (event.metaKey || event.ctrlKey);
        const isEnterWithoutShift = event.code === "Enter" && !event.shiftKey;
        const isEscape = event.code === "Escape";
        if (!isUndoRedo) {
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
        if (isEnterWithoutShift) {
          event.preventDefault();
          const prompt = followUpInput().trim();
          if (prompt) {
            handleFollowUpSubmit();
          } else {
            handleAccept();
          }
        } else if (isEscape) {
          event.preventDefault();
          props.onDismiss?.();
        }
      };
      const handleKeyDown = (event) => {
        if (!confirmationFocusManager.isActive(instanceId)) return;
        const isUndo = event.code === "KeyZ" && (event.metaKey || event.ctrlKey) && !event.shiftKey;
        const isEnter = event.code === "Enter";
        const isEscape = event.code === "Escape";
        if (isUndo && props.supportsUndo && props.onUndo) {
          event.preventDefault();
          event.stopPropagation();
          props.onUndo();
          return;
        }
        if (isKeyboardEventTriggeredByInput(event)) return;
        if (isEnter) {
          event.preventDefault();
          event.stopPropagation();
          handleAccept();
        } else if (isEscape) {
          event.preventDefault();
          event.stopPropagation();
          props.onDismiss?.();
        }
      };
      const handleFocus = () => {
        confirmationFocusManager.claim(instanceId);
      };
      createEffect(() => {
        if (!didCopy()) {
          setDisplayStatusText(props.statusText);
        }
      });
      onMount(() => {
        confirmationFocusManager.claim(instanceId);
        window.addEventListener("keydown", handleKeyDown, {
          capture: true
        });
        if (props.supportsFollowUp && props.onFollowUpSubmit && inputRef) {
          inputRef.focus();
        }
      });
      onCleanup(() => {
        confirmationFocusManager.release(instanceId);
        window.removeEventListener("keydown", handleKeyDown, {
          capture: true
        });
        if (fadeTimeoutId !== void 0) window.clearTimeout(fadeTimeoutId);
        if (dismissTimeoutId !== void 0) window.clearTimeout(dismissTimeoutId);
      });
      return (() => {
        var _el$2 = _tmpl$82();
        _el$2.$$click = handleFocus;
        _el$2.$$pointerdown = handleFocus;
        insert(_el$2, createComponent(Show, {
          get when() {
            return memo(() => !!!didCopy())() && (props.onDismiss || props.onUndo);
          },
          get children() {
            var _el$3 = _tmpl$42(), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
            insert(_el$4, displayStatusText);
            insert(_el$5, createComponent(Show, {
              get when() {
                return memo(() => !!props.onShowContextMenu)() && !props.supportsFollowUp;
              },
              get children() {
                return createComponent(MoreOptionsButton, {
                  onClick: () => props.onShowContextMenu?.()
                });
              }
            }), null);
            insert(_el$5, createComponent(Show, {
              get when() {
                return memo(() => !!props.supportsUndo)() && props.onUndo;
              },
              get children() {
                var _el$6 = _tmpl$25();
                _el$6.$$click = () => props.onUndo?.();
                return _el$6;
              }
            }), null);
            insert(_el$5, createComponent(Show, {
              get when() {
                return props.onDismiss;
              },
              get children() {
                var _el$7 = _tmpl$33(), _el$8 = _el$7.firstChild;
                _el$7.$$click = handleAccept;
                insert(_el$8, () => props.dismissButtonText ?? "Keep");
                insert(_el$7, createComponent(Show, {
                  get when() {
                    return !didCopy();
                  },
                  get children() {
                    return createComponent(IconReturn, {
                      size: 10,
                      "class": "text-black/50"
                    });
                  }
                }), null);
                createRenderEffect(() => _el$7.disabled = didCopy());
                return _el$7;
              }
            }), null);
            return _el$3;
          }
        }), null);
        insert(_el$2, createComponent(Show, {
          get when() {
            return didCopy() || !props.onDismiss && !props.onUndo;
          },
          get children() {
            var _el$9 = _tmpl$52(), _el$0 = _el$9.firstChild;
            insert(_el$9, createComponent(IconCheck, {
              size: 14,
              "class": "text-black/85 shrink-0 animate-success-pop"
            }), _el$0);
            insert(_el$0, displayStatusText);
            insert(_el$9, createComponent(Show, {
              get when() {
                return memo(() => !!props.onShowContextMenu)() && !props.supportsFollowUp;
              },
              get children() {
                return createComponent(MoreOptionsButton, {
                  onClick: () => props.onShowContextMenu?.()
                });
              }
            }), null);
            return _el$9;
          }
        }), null);
        insert(_el$2, createComponent(Show, {
          get when() {
            return memo(() => !!(!didCopy() && props.supportsFollowUp))() && props.onFollowUpSubmit;
          },
          get children() {
            return createComponent(BottomSection, {
              get children() {
                return [createComponent(Show, {
                  get when() {
                    return props.previousPrompt;
                  },
                  get children() {
                    var _el$1 = _tmpl$62(), _el$10 = _el$1.firstChild;
                    insert(_el$1, createComponent(IconReply, {
                      size: 10,
                      "class": "text-black/30 shrink-0"
                    }), _el$10);
                    insert(_el$10, () => props.previousPrompt);
                    return _el$1;
                  }
                }), (() => {
                  var _el$11 = _tmpl$72(), _el$12 = _el$11.firstChild, _el$13 = _el$12.nextSibling;
                  _el$12.$$keydown = handleInputKeyDown;
                  _el$12.$$input = (event) => setFollowUpInput(event.target.value);
                  var _ref$ = inputRef;
                  typeof _ref$ === "function" ? use(_ref$, _el$12) : inputRef = _el$12;
                  _el$13.$$click = handleFollowUpSubmit;
                  insert(_el$13, createComponent(IconSubmit, {
                    size: 10,
                    "class": "text-white"
                  }));
                  createRenderEffect((_p$) => {
                    var _v$ = props.previousPrompt ? "14px" : "0", _v$2 = cn("contain-layout shrink-0 flex items-center justify-center size-4 rounded-full bg-black cursor-pointer ml-1 interactive-scale", !followUpInput().trim() && "opacity-35");
                    _v$ !== _p$.e && setStyleProperty(_el$11, "padding-left", _p$.e = _v$);
                    _v$2 !== _p$.t && className(_el$13, _p$.t = _v$2);
                    return _p$;
                  }, {
                    e: void 0,
                    t: void 0
                  });
                  createRenderEffect(() => _el$12.value = followUpInput());
                  return _el$11;
                })()];
              }
            });
          }
        }), null);
        createRenderEffect((_p$) => {
          var _v$3 = cn("contain-layout shrink-0 flex flex-col justify-center items-end rounded-[10px] antialiased w-fit h-fit max-w-[280px] transition-opacity duration-100 ease-out [font-synthesis:none] [corner-shape:superellipse(1.25)]", PANEL_STYLES), _v$4 = isFading() ? 0 : 1;
          _v$3 !== _p$.e && className(_el$2, _p$.e = _v$3);
          _v$4 !== _p$.t && setStyleProperty(_el$2, "opacity", _p$.t = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$2;
      })();
    };
    delegateEvents(["pointerdown", "click", "input", "keydown"]);
  }
});

// src/components/selection-label/index.tsx
var _tmpl$16, _tmpl$26, _tmpl$34, _tmpl$43, _tmpl$53, _tmpl$63, _tmpl$73, _tmpl$83, _tmpl$92, _tmpl$0, _tmpl$1, DEFAULT_OFFSCREEN_POSITION, SelectionLabel;
var init_selection_label = __esm({
  "src/components/selection-label/index.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_constants();
    init_is_keyboard_event_triggered_by_input();
    init_cn();
    init_get_tag_display();
    init_format_shortcut();
    init_icon_reply();
    init_icon_submit();
    init_icon_loader();
    init_arrow();
    init_tag_badge();
    init_bottom_section();
    init_discard_prompt();
    init_error_view();
    init_completion_view();
    _tmpl$16 = /* @__PURE__ */ template(`<button data-react-grab-ignore-events data-react-grab-abort class="contain-layout shrink-0 flex items-center justify-center size-4 rounded-full bg-black cursor-pointer ml-1 interactive-scale"><div class="size-1.5 bg-white rounded-[1px]">`);
    _tmpl$26 = /* @__PURE__ */ template(`<div class="shrink-0 flex justify-between items-end w-full min-h-4"><textarea data-react-grab-ignore-events class="text-black text-[13px] leading-4 font-medium bg-transparent border-none outline-none resize-none flex-1 p-0 m-0 opacity-50 wrap-break-word overflow-y-auto"placeholder="Add context"rows=1 disabled style=field-sizing:content;min-height:16px;max-height:95px;scrollbar-width:none>`);
    _tmpl$34 = /* @__PURE__ */ template(`<div class="contain-layout shrink-0 flex flex-col justify-center items-start w-fit h-fit max-w-[280px]"><div class="contain-layout shrink-0 flex items-center gap-1 py-1.5 px-2 w-full h-fit"><span class="shimmer-text text-[13px] leading-4 font-sans font-medium h-fit tabular-nums overflow-hidden text-ellipsis whitespace-nowrap">`);
    _tmpl$43 = /* @__PURE__ */ template(`<div class="flex flex-col w-[calc(100%+16px)] -mx-2 -my-1.5">`);
    _tmpl$53 = /* @__PURE__ */ template(`<div class="contain-layout shrink-0 flex flex-col items-start w-fit h-fit"><div class="contain-layout shrink-0 flex items-center gap-1 py-1.5 w-fit h-fit px-2">`);
    _tmpl$63 = /* @__PURE__ */ template(`<div class="flex items-center gap-1 w-full mb-1 overflow-hidden"><span class="text-black/40 text-[11px] leading-3 font-medium truncate italic">`);
    _tmpl$73 = /* @__PURE__ */ template(`<div class="shrink-0 flex justify-between items-end w-full min-h-4"><textarea data-react-grab-ignore-events data-react-grab-input class="text-black text-[13px] leading-4 font-medium bg-transparent border-none outline-none resize-none flex-1 p-0 m-0 wrap-break-word overflow-y-auto"placeholder="Add context"rows=1 style=field-sizing:content;min-height:16px;max-height:95px;scrollbar-width:none></textarea><button data-react-grab-submit class="contain-layout shrink-0 flex items-center justify-center size-4 rounded-full bg-black cursor-pointer ml-1 interactive-scale">`);
    _tmpl$83 = /* @__PURE__ */ template(`<div class="contain-layout shrink-0 flex flex-col justify-center items-start w-fit h-fit min-w-[150px] max-w-[280px]"><div class="contain-layout shrink-0 flex items-center gap-1 pt-1.5 pb-1 w-fit h-fit px-2 max-w-full">`);
    _tmpl$92 = /* @__PURE__ */ template(`<div data-react-grab-ignore-events data-react-grab-selection-label style=z-index:2147483647><div>`);
    _tmpl$0 = /* @__PURE__ */ template(`<span class="text-[11px] font-sans text-black/50 ml-4">`);
    _tmpl$1 = /* @__PURE__ */ template(`<div class="contain-layout flex items-center justify-between w-full px-2 py-1 transition-colors"><span class="text-[13px] leading-4 font-sans font-medium text-black">`);
    DEFAULT_OFFSCREEN_POSITION = {
      left: -9999,
      top: -9999,
      arrowLeftPercent: ARROW_CENTER_PERCENT,
      arrowLeftOffset: 0,
      edgeOffsetX: 0
    };
    SelectionLabel = (props) => {
      let containerRef;
      let inputRef;
      let isTagCurrentlyHovered = false;
      let lastValidPosition = null;
      let lastElementIdentity = null;
      const [measuredWidth, setMeasuredWidth] = createSignal(0);
      const [measuredHeight, setMeasuredHeight] = createSignal(0);
      const [arrowPosition, setArrowPosition] = createSignal("bottom");
      const [viewportVersion, setViewportVersion] = createSignal(0);
      const [hadValidBounds, setHadValidBounds] = createSignal(false);
      const [isInternalFading, setIsInternalFading] = createSignal(false);
      const canInteract = () => props.status !== "copying" && props.status !== "copied" && props.status !== "fading" && props.status !== "error";
      const isCompletedStatus = () => props.status === "copied" || props.status === "fading";
      const shouldEnablePointerEvents = () => {
        if (props.isPromptMode) return true;
        if (isCompletedStatus() && (props.onDismiss || props.onShowContextMenu)) {
          return true;
        }
        if (props.status === "copying" && props.onAbort) return true;
        if (props.status === "error" && (props.onAcknowledgeError || props.onRetry)) {
          return true;
        }
        return false;
      };
      const measureContainer = () => {
        if (containerRef && !isTagCurrentlyHovered) {
          const rect = containerRef.getBoundingClientRect();
          setMeasuredWidth(rect.width);
          setMeasuredHeight(rect.height);
        }
      };
      const handleTagHoverChange = (hovered) => {
        isTagCurrentlyHovered = hovered;
      };
      const handleViewportChange = () => {
        setViewportVersion((version) => version + 1);
      };
      const handleGlobalKeyDown = (event) => {
        if (isKeyboardEventTriggeredByInput(event)) return;
        const isEnterToExpand = event.code === "Enter" && !props.isPromptMode && canInteract();
        const isCtrlCToAbort = event.code === "KeyC" && event.ctrlKey && props.status === "copying" && props.onAbort;
        if (isEnterToExpand) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          props.onToggleExpand?.();
        } else if (isCtrlCToAbort) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          props.onAbort?.();
        }
      };
      onMount(() => {
        measureContainer();
        window.addEventListener("scroll", handleViewportChange, true);
        window.addEventListener("resize", handleViewportChange);
        window.addEventListener("keydown", handleGlobalKeyDown, {
          capture: true
        });
      });
      onCleanup(() => {
        window.removeEventListener("scroll", handleViewportChange, true);
        window.removeEventListener("resize", handleViewportChange);
        window.removeEventListener("keydown", handleGlobalKeyDown, {
          capture: true
        });
      });
      createEffect(() => {
        const elementIdentity = `${props.tagName ?? ""}:${props.componentName ?? ""}`;
        if (elementIdentity !== lastElementIdentity) {
          lastElementIdentity = elementIdentity;
          lastValidPosition = null;
        }
      });
      createEffect(() => {
        void props.tagName;
        void props.componentName;
        void props.elementsCount;
        void props.statusText;
        void props.inputValue;
        void props.hasAgent;
        void props.isPromptMode;
        void props.isPendingDismiss;
        void props.error;
        void props.isPendingAbort;
        void props.visible;
        void props.status;
        void props.actionCycleState?.items;
        void props.actionCycleState?.activeIndex;
        void props.actionCycleState?.isVisible;
        queueMicrotask(measureContainer);
      });
      createEffect(() => {
        if (props.isPromptMode && inputRef) {
          setTimeout(() => {
            inputRef?.focus();
          }, 0);
        }
      });
      const computedPosition = () => {
        viewportVersion();
        const bounds = props.selectionBounds;
        const labelWidth = measuredWidth();
        const labelHeight = measuredHeight();
        const hasMeasurements = labelWidth > 0 && labelHeight > 0;
        const hasValidBounds = bounds && bounds.width > 0 && bounds.height > 0;
        if (!hasMeasurements || !hasValidBounds) {
          return lastValidPosition ?? DEFAULT_OFFSCREEN_POSITION;
        }
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const isSelectionVisibleInViewport = bounds.x + bounds.width > 0 && bounds.x < viewportWidth && bounds.y + bounds.height > 0 && bounds.y < viewportHeight;
        if (!isSelectionVisibleInViewport) {
          return DEFAULT_OFFSCREEN_POSITION;
        }
        const selectionCenterX = bounds.x + bounds.width / 2;
        const cursorX = props.mouseX ?? selectionCenterX;
        const selectionBottom = bounds.y + bounds.height;
        const selectionTop = bounds.y;
        const anchorX = cursorX;
        let edgeOffsetX = 0;
        let positionTop = selectionBottom + ARROW_HEIGHT_PX + LABEL_GAP_PX;
        if (labelWidth > 0) {
          const labelLeft = anchorX - labelWidth / 2;
          const labelRight = anchorX + labelWidth / 2;
          if (labelRight > viewportWidth - VIEWPORT_MARGIN_PX) {
            edgeOffsetX = viewportWidth - VIEWPORT_MARGIN_PX - labelRight;
          }
          if (labelLeft + edgeOffsetX < VIEWPORT_MARGIN_PX) {
            edgeOffsetX = VIEWPORT_MARGIN_PX - labelLeft;
          }
        }
        const totalHeightNeeded = labelHeight + ARROW_HEIGHT_PX + LABEL_GAP_PX;
        const fitsBelow = positionTop + labelHeight <= viewportHeight - VIEWPORT_MARGIN_PX;
        if (!fitsBelow) {
          positionTop = selectionTop - totalHeightNeeded;
          setArrowPosition("top");
        } else {
          setArrowPosition("bottom");
        }
        if (positionTop < VIEWPORT_MARGIN_PX) {
          positionTop = VIEWPORT_MARGIN_PX;
        }
        const arrowLeftPercent = ARROW_CENTER_PERCENT;
        const arrowLeftOffset = -edgeOffsetX;
        const position = {
          left: anchorX,
          top: positionTop,
          arrowLeftPercent,
          arrowLeftOffset,
          edgeOffsetX
        };
        lastValidPosition = position;
        setHadValidBounds(true);
        return position;
      };
      const handleKeyDown = (event) => {
        if (event.isComposing || event.keyCode === 229) {
          return;
        }
        event.stopPropagation();
        event.stopImmediatePropagation();
        const isEnterWithoutShift = event.code === "Enter" && !event.shiftKey;
        const isEscape = event.code === "Escape";
        if (isEnterWithoutShift) {
          event.preventDefault();
          props.onSubmit?.();
        } else if (isEscape) {
          event.preventDefault();
          props.onConfirmDismiss?.();
        }
      };
      const handleInput = (event) => {
        const target = event.target;
        props.onInputChange?.(target.value);
      };
      const tagDisplayResult = () => getTagDisplay({
        tagName: props.tagName,
        componentName: props.componentName,
        elementsCount: props.elementsCount
      });
      const tagDisplay = () => tagDisplayResult().tagName;
      const componentNameDisplay = () => tagDisplayResult().componentName;
      const actionCycleItems = () => props.actionCycleState?.items ?? [];
      const actionCycleActiveIndex = () => props.actionCycleState?.activeIndex ?? 0;
      const isActionCycleVisible = () => Boolean(props.actionCycleState?.isVisible);
      const handleTagClick = (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (props.filePath && props.onOpen) {
          props.onOpen();
        }
      };
      const isTagClickable = () => Boolean(props.filePath && props.onOpen);
      const handleContainerPointerDown = (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        const isEditableInputVisible = canInteract() && props.isPromptMode && !props.isPendingDismiss;
        if (isEditableInputVisible && inputRef) {
          inputRef.focus();
        }
      };
      const shouldPersistDuringFade = () => hadValidBounds() && (isCompletedStatus() || props.status === "error");
      return createComponent(Show, {
        get when() {
          return memo(() => props.visible !== false)() && (props.selectionBounds || shouldPersistDuringFade());
        },
        get children() {
          var _el$ = _tmpl$92(), _el$2 = _el$.firstChild;
          _el$.addEventListener("mouseleave", () => props.onHoverChange?.(false));
          _el$.addEventListener("mouseenter", () => props.onHoverChange?.(true));
          _el$.$$click = (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
          };
          _el$.$$pointerdown = handleContainerPointerDown;
          var _ref$ = containerRef;
          typeof _ref$ === "function" ? use(_ref$, _el$) : containerRef = _el$;
          insert(_el$, createComponent(Arrow, {
            get position() {
              return arrowPosition();
            },
            get leftPercent() {
              return computedPosition().arrowLeftPercent;
            },
            get leftOffsetPx() {
              return computedPosition().arrowLeftOffset;
            }
          }), _el$2);
          insert(_el$, createComponent(Show, {
            get when() {
              return memo(() => !!isCompletedStatus())() && !props.error;
            },
            get children() {
              return createComponent(CompletionView, {
                get statusText() {
                  return memo(() => !!props.hasAgent)() ? props.statusText ?? "Completed" : "Copied";
                },
                get supportsUndo() {
                  return props.supportsUndo;
                },
                get supportsFollowUp() {
                  return props.supportsFollowUp;
                },
                get dismissButtonText() {
                  return props.dismissButtonText;
                },
                get previousPrompt() {
                  return props.previousPrompt;
                },
                get onDismiss() {
                  return props.onDismiss;
                },
                get onUndo() {
                  return props.onUndo;
                },
                get onFollowUpSubmit() {
                  return props.onFollowUpSubmit;
                },
                onCopyStateChange: () => {
                  queueMicrotask(measureContainer);
                },
                onFadingChange: setIsInternalFading,
                get onShowContextMenu() {
                  return props.onShowContextMenu;
                }
              });
            }
          }), _el$2);
          insert(_el$2, createComponent(Show, {
            get when() {
              return memo(() => props.status === "copying")() && !props.isPendingAbort;
            },
            get children() {
              var _el$3 = _tmpl$34(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild;
              insert(_el$4, createComponent(IconLoader, {
                size: 13,
                "class": "text-[#71717a] shrink-0"
              }), _el$5);
              insert(_el$5, () => props.statusText ?? "Grabbing\u2026");
              insert(_el$3, createComponent(Show, {
                get when() {
                  return memo(() => !!props.hasAgent)() && props.inputValue;
                },
                get children() {
                  return createComponent(BottomSection, {
                    get children() {
                      var _el$6 = _tmpl$26(), _el$7 = _el$6.firstChild;
                      var _ref$2 = inputRef;
                      typeof _ref$2 === "function" ? use(_ref$2, _el$7) : inputRef = _el$7;
                      insert(_el$6, createComponent(Show, {
                        get when() {
                          return props.onAbort;
                        },
                        get children() {
                          var _el$8 = _tmpl$16();
                          _el$8.$$click = (event) => {
                            event.stopPropagation();
                            props.onAbort?.();
                          };
                          _el$8.$$pointerdown = (event) => event.stopPropagation();
                          return _el$8;
                        }
                      }), null);
                      createRenderEffect(() => _el$7.value = props.inputValue ?? "");
                      return _el$6;
                    }
                  });
                }
              }), null);
              createRenderEffect(() => _el$3.classList.toggle("min-w-[150px]", !!Boolean(props.hasAgent && props.inputValue)));
              return _el$3;
            }
          }), null);
          insert(_el$2, createComponent(Show, {
            get when() {
              return memo(() => props.status === "copying")() && props.isPendingAbort;
            },
            get children() {
              return createComponent(DiscardPrompt, {
                get onConfirm() {
                  return props.onConfirmAbort;
                },
                get onCancel() {
                  return props.onCancelAbort;
                }
              });
            }
          }), null);
          insert(_el$2, createComponent(Show, {
            get when() {
              return memo(() => !!canInteract())() && !props.isPromptMode;
            },
            get children() {
              var _el$9 = _tmpl$53(), _el$0 = _el$9.firstChild;
              insert(_el$0, createComponent(TagBadge, {
                get tagName() {
                  return tagDisplay();
                },
                get componentName() {
                  return componentNameDisplay();
                },
                get isClickable() {
                  return isTagClickable();
                },
                onClick: handleTagClick,
                onHoverChange: handleTagHoverChange,
                shrink: true,
                get forceShowIcon() {
                  return Boolean(props.isContextMenuOpen);
                }
              }));
              insert(_el$9, createComponent(Show, {
                get when() {
                  return isActionCycleVisible();
                },
                get children() {
                  return createComponent(BottomSection, {
                    get children() {
                      var _el$1 = _tmpl$43();
                      insert(_el$1, createComponent(For, {
                        get each() {
                          return actionCycleItems();
                        },
                        children: (item, itemIndex) => (() => {
                          var _el$17 = _tmpl$1(), _el$18 = _el$17.firstChild;
                          insert(_el$18, () => item.label);
                          insert(_el$17, createComponent(Show, {
                            get when() {
                              return item.shortcut;
                            },
                            get children() {
                              var _el$19 = _tmpl$0();
                              insert(_el$19, () => formatShortcut(item.shortcut));
                              return _el$19;
                            }
                          }), null);
                          createRenderEffect((_p$) => {
                            var _v$9 = item.label.toLowerCase(), _v$0 = !!(itemIndex() === actionCycleActiveIndex()), _v$1 = !!(itemIndex() === actionCycleItems().length - 1);
                            _v$9 !== _p$.e && setAttribute(_el$17, "data-react-grab-action-cycle-item", _p$.e = _v$9);
                            _v$0 !== _p$.t && _el$17.classList.toggle("bg-black/5", _p$.t = _v$0);
                            _v$1 !== _p$.a && _el$17.classList.toggle("rounded-b-[6px]", _p$.a = _v$1);
                            return _p$;
                          }, {
                            e: void 0,
                            t: void 0,
                            a: void 0
                          });
                          return _el$17;
                        })()
                      }));
                      return _el$1;
                    }
                  });
                }
              }), null);
              return _el$9;
            }
          }), null);
          insert(_el$2, createComponent(Show, {
            get when() {
              return memo(() => !!(canInteract() && props.isPromptMode))() && !props.isPendingDismiss;
            },
            get children() {
              var _el$10 = _tmpl$83(), _el$11 = _el$10.firstChild;
              insert(_el$11, createComponent(TagBadge, {
                get tagName() {
                  return tagDisplay();
                },
                get componentName() {
                  return componentNameDisplay();
                },
                get isClickable() {
                  return isTagClickable();
                },
                onClick: handleTagClick,
                onHoverChange: handleTagHoverChange,
                forceShowIcon: true
              }));
              insert(_el$10, createComponent(BottomSection, {
                get children() {
                  return [createComponent(Show, {
                    get when() {
                      return props.replyToPrompt;
                    },
                    get children() {
                      var _el$12 = _tmpl$63(), _el$13 = _el$12.firstChild;
                      insert(_el$12, createComponent(IconReply, {
                        size: 10,
                        "class": "text-black/30 shrink-0"
                      }), _el$13);
                      insert(_el$13, () => props.replyToPrompt);
                      return _el$12;
                    }
                  }), (() => {
                    var _el$14 = _tmpl$73(), _el$15 = _el$14.firstChild, _el$16 = _el$15.nextSibling;
                    _el$15.$$keydown = handleKeyDown;
                    _el$15.$$input = handleInput;
                    var _ref$3 = inputRef;
                    typeof _ref$3 === "function" ? use(_ref$3, _el$15) : inputRef = _el$15;
                    _el$16.$$click = () => props.onSubmit?.();
                    insert(_el$16, createComponent(IconSubmit, {
                      size: 10,
                      "class": "text-white"
                    }));
                    createRenderEffect((_$p) => setStyleProperty(_el$14, "padding-left", props.replyToPrompt ? "14px" : "0"));
                    createRenderEffect(() => _el$15.value = props.inputValue ?? "");
                    return _el$14;
                  })()];
                }
              }), null);
              return _el$10;
            }
          }), null);
          insert(_el$2, createComponent(Show, {
            get when() {
              return props.isPendingDismiss;
            },
            get children() {
              return createComponent(DiscardPrompt, {
                get onConfirm() {
                  return props.onConfirmDismiss;
                },
                get onCancel() {
                  return props.onCancelDismiss;
                }
              });
            }
          }), null);
          insert(_el$2, createComponent(Show, {
            get when() {
              return props.error;
            },
            get children() {
              return createComponent(ErrorView, {
                get error() {
                  return props.error;
                },
                get onAcknowledge() {
                  return props.onAcknowledgeError;
                },
                get onRetry() {
                  return props.onRetry;
                }
              });
            }
          }), null);
          createRenderEffect((_p$) => {
            var _v$ = cn("fixed font-sans text-[13px] antialiased filter-[drop-shadow(0px_1px_2px_#51515140)] select-none transition-opacity duration-100 ease-out"), _v$2 = `${computedPosition().top}px`, _v$3 = `${computedPosition().left}px`, _v$4 = `translateX(calc(-50% + ${computedPosition().edgeOffsetX}px))`, _v$5 = shouldEnablePointerEvents() ? "auto" : "none", _v$6 = props.status === "fading" || isInternalFading() ? 0 : 1, _v$7 = cn("contain-layout flex items-center gap-[5px] rounded-[10px] antialiased w-fit h-fit p-0 [font-synthesis:none] [corner-shape:superellipse(1.25)]", PANEL_STYLES), _v$8 = isCompletedStatus() && !props.error ? "none" : void 0;
            _v$ !== _p$.e && className(_el$, _p$.e = _v$);
            _v$2 !== _p$.t && setStyleProperty(_el$, "top", _p$.t = _v$2);
            _v$3 !== _p$.a && setStyleProperty(_el$, "left", _p$.a = _v$3);
            _v$4 !== _p$.o && setStyleProperty(_el$, "transform", _p$.o = _v$4);
            _v$5 !== _p$.i && setStyleProperty(_el$, "pointer-events", _p$.i = _v$5);
            _v$6 !== _p$.n && setStyleProperty(_el$, "opacity", _p$.n = _v$6);
            _v$7 !== _p$.s && className(_el$2, _p$.s = _v$7);
            _v$8 !== _p$.h && setStyleProperty(_el$2, "display", _p$.h = _v$8);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0
          });
          return _el$;
        }
      });
    };
    delegateEvents(["pointerdown", "click", "input", "keydown"]);
  }
});

// src/components/toolbar/state.ts
var STORAGE_KEY, loadToolbarState, saveToolbarState;
var init_state = __esm({
  "src/components/toolbar/state.ts"() {
    "use strict";
    STORAGE_KEY = "react-grab-toolbar-state";
    loadToolbarState = () => {
      try {
        const serializedToolbarState = localStorage.getItem(STORAGE_KEY);
        if (!serializedToolbarState) return null;
        const partialToolbarState = JSON.parse(
          serializedToolbarState
        );
        return {
          edge: partialToolbarState.edge ?? "bottom",
          ratio: partialToolbarState.ratio ?? 0.5,
          collapsed: partialToolbarState.collapsed ?? false,
          enabled: partialToolbarState.enabled ?? true
        };
      } catch (error) {
        console.warn(
          "[react-grab] Failed to load toolbar state from localStorage:",
          error
        );
      }
      return null;
    };
    saveToolbarState = (state) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.warn(
          "[react-grab] Failed to save toolbar state to localStorage:",
          error
        );
      }
    };
  }
});

// src/components/icons/icon-select.tsx
var _tmpl$17, IconSelect;
var init_icon_select = __esm({
  "src/components/icons/icon-select.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$17 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 18 18"fill=currentColor><path opacity=0.4 d="M7.65631 10.9565C7.31061 10.0014 7.54012 8.96635 8.25592 8.25195C8.74522 7.76615 9.38771 7.49951 10.0694 7.49951C10.3682 7.49951 10.6641 7.55171 10.9483 7.65381L16.0001 9.49902V4.75C16.0001 3.2334 14.7667 2 13.2501 2H4.75012C3.23352 2 2.00012 3.2334 2.00012 4.75V13.25C2.00012 14.7666 3.23352 16 4.75012 16H9.49962L7.65631 10.9565Z"></path><path d="M17.296 11.5694L10.4415 9.06545C10.0431 8.92235 9.61441 9.01658 9.31551 9.31338C9.01671 9.61168 8.92101 10.0429 9.06551 10.4413L11.5704 17.2948C11.7247 17.7191 12.128 18.0004 12.5772 18.0004C12.585 18.0004 12.5918 17.9999 12.5987 17.9999C13.0577 17.9906 13.4591 17.6913 13.5987 17.2543L14.4854 14.4857L17.2559 13.5985C17.6914 13.4589 17.9903 13.057 18 12.599C18.0097 12.141 17.7267 11.7276 17.296 11.5694Z">`);
    IconSelect = (props) => {
      const size = () => props.size ?? 14;
      return (() => {
        var _el$ = _tmpl$17();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/icons/icon-chevron.tsx
var _tmpl$18, IconChevron;
var init_icon_chevron = __esm({
  "src/components/icons/icon-chevron.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$18 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2.5 stroke-linecap=round stroke-linejoin=round><path d="m18 15-6-6-6 6">`);
    IconChevron = (props) => {
      const size = () => props.size ?? 12;
      return (() => {
        var _el$ = _tmpl$18();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/components/icons/icon-comment.tsx
var _tmpl$19, IconComment;
var init_icon_comment = __esm({
  "src/components/icons/icon-comment.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    _tmpl$19 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor><path opacity=0.4 d="M15.375 2.97414C15.375 2.69244 15.375 2.55159 15.2873 2.46375C15.1996 2.3759 15.059 2.37571 14.7779 2.37533C14.535 2.375 14.2842 2.375 14.025 2.375H9.725C5.67092 2.375 3.64388 2.375 2.38444 3.63907C1.125 4.90313 1.125 6.93761 1.125 11.0066V11.5461C1.125 15.615 1.125 17.6495 2.38444 18.9136C2.96538 19.4966 3.78236 19.8857 4.83865 20.0808C5.16308 20.1408 5.32529 20.1707 5.39574 20.2724C5.4662 20.3742 5.43726 20.5362 5.3794 20.8601C5.23931 21.6444 5.26144 22.3535 5.76437 22.7295C6.29145 23.1143 7.13133 22.7032 8.81111 21.8812C8.99744 21.79 9.18412 21.6967 9.37148 21.603L9.3735 21.602C10.3708 21.1035 11.3874 20.5953 12.4712 20.3449C12.9426 20.2371 13.4225 20.1911 14.025 20.1776C18.0791 20.1776 20.1061 20.1776 21.3656 18.9136C22.625 17.6495 22.625 15.615 22.625 11.5461V11.0066C22.625 10.3776 22.625 9.79728 22.6203 9.26087C22.6178 8.96391 22.6165 8.81543 22.5481 8.73318C22.5335 8.71569 22.5248 8.70707 22.5072 8.69268C22.4244 8.625 22.2413 8.625 21.875 8.625H20.975C20.6922 8.625 20.5507 8.625 20.4629 8.71287C20.375 8.80074 20.375 8.94216 20.375 9.225V10.125C20.375 11.5057 19.2557 12.625 17.875 12.625C16.4943 12.625 15.375 11.5057 15.375 10.125V9.225C15.375 8.94216 15.375 8.80074 15.2871 8.71287C15.1993 8.625 15.0578 8.625 14.775 8.625H13.875C12.4943 8.625 11.375 7.50571 11.375 6.125C11.375 4.74429 12.4943 3.625 13.875 3.625H14.775C15.0578 3.625 15.1993 3.625 15.2871 3.53713C15.375 3.44926 15.375 3.30784 15.375 3.025V2.97414Z"></path><path fill-rule=evenodd clip-rule=evenodd d="M17.875 1.125C18.4273 1.125 18.875 1.57272 18.875 2.125V5.125H21.875C22.4273 5.125 22.875 5.57272 22.875 6.125C22.875 6.67728 22.4273 7.125 21.875 7.125H18.875V10.125C18.875 10.6773 18.4273 11.125 17.875 11.125C17.3227 11.125 16.875 10.6773 16.875 10.125V7.125H13.875C13.3227 7.125 12.875 6.67728 12.875 6.125C12.875 5.57272 13.3227 5.125 13.875 5.125H16.875V2.125C16.875 1.57272 17.3227 1.125 17.875 1.125Z">`);
    IconComment = (props) => {
      const size = () => props.size ?? 14;
      return (() => {
        var _el$ = _tmpl$19();
        createRenderEffect((_p$) => {
          var _v$ = size(), _v$2 = size(), _v$3 = props.class;
          _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$, "class", _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })();
    };
  }
});

// src/utils/freeze-updates.ts
var isUpdatesPaused, getOrCache, patchedDispatchers, wrappedDispatchCache, wrappedStartTransitionCache, pendingStoreCallbacks, pendingTransitionCallbacks, pendingStateUpdates, pausedQueueStates, pausedContextStates, renderersWithPatchedDispatcher, typedFiberRoots, getFiberRoot, collectFiberRoots, mergePendingChains, pauseHookQueue, resumeHookQueue, pauseContextDependency, resumeContextDependency, forEachHookQueue, forEachContextDependency, traverseFibers, pauseFiber, resumeFiber, patchDispatcher, installDispatcherPatching, scheduleReactUpdate, invokeCallbacks, initializeFreezeSupport, freezeUpdates;
var init_freeze_updates = __esm({
  "src/utils/freeze-updates.ts"() {
    "use strict";
    init_dist();
    isUpdatesPaused = false;
    getOrCache = (cache2, key, create) => {
      const cached = cache2.get(key);
      if (cached) return cached;
      const value = create();
      cache2.set(key, value);
      return value;
    };
    patchedDispatchers = /* @__PURE__ */ new WeakMap();
    wrappedDispatchCache = /* @__PURE__ */ new WeakMap();
    wrappedStartTransitionCache = /* @__PURE__ */ new WeakMap();
    pendingStoreCallbacks = /* @__PURE__ */ new Set();
    pendingTransitionCallbacks = [];
    pendingStateUpdates = [];
    pausedQueueStates = /* @__PURE__ */ new WeakMap();
    pausedContextStates = /* @__PURE__ */ new WeakMap();
    renderersWithPatchedDispatcher = /* @__PURE__ */ new WeakSet();
    typedFiberRoots = $;
    getFiberRoot = (fiber) => {
      let current = fiber;
      while (current.return) {
        current = current.return;
      }
      return current.stateNode ?? null;
    };
    collectFiberRoots = () => {
      if (typedFiberRoots.size > 0) {
        return typedFiberRoots;
      }
      const collectedRoots = /* @__PURE__ */ new Set();
      const traverseDOM = (element) => {
        const fiber = Pe(element);
        if (fiber) {
          const fiberRoot = getFiberRoot(fiber);
          if (fiberRoot) collectedRoots.add(fiberRoot);
          return;
        }
        for (const childElement of Array.from(element.children)) {
          traverseDOM(childElement);
          if (collectedRoots.size > 0) return;
        }
      };
      traverseDOM(document.body);
      return collectedRoots;
    };
    mergePendingChains = (original, buffered) => {
      if (!original) return buffered;
      if (!buffered) return original;
      if (!original.next || !buffered.next) return buffered;
      const originalFirst = original.next;
      const bufferedFirst = buffered.next;
      const isOriginalSingle = original === originalFirst;
      const isBufferedSingle = buffered === bufferedFirst;
      if (isOriginalSingle && isBufferedSingle) {
        original.next = buffered;
        buffered.next = original;
      } else if (isOriginalSingle) {
        original.next = bufferedFirst;
        buffered.next = original;
      } else if (isBufferedSingle) {
        buffered.next = originalFirst;
        original.next = buffered;
      } else {
        original.next = bufferedFirst;
        buffered.next = originalFirst;
      }
      return buffered;
    };
    pauseHookQueue = (queue) => {
      if (!queue || pausedQueueStates.has(queue)) return;
      const pauseState = {
        originalPendingDescriptor: Object.getOwnPropertyDescriptor(
          queue,
          "pending"
        ),
        pendingValueAtPause: queue.pending,
        bufferedPending: null
      };
      if (typeof queue.getSnapshot === "function") {
        pauseState.originalGetSnapshot = queue.getSnapshot;
        pauseState.snapshotValueAtPause = queue.getSnapshot();
        queue.getSnapshot = () => isUpdatesPaused ? pauseState.snapshotValueAtPause : pauseState.originalGetSnapshot();
      }
      let currentPendingValue = pauseState.pendingValueAtPause;
      Object.defineProperty(queue, "pending", {
        configurable: true,
        enumerable: true,
        get: () => isUpdatesPaused ? pauseState.bufferedPending : currentPendingValue,
        set: (newValue) => {
          if (isUpdatesPaused) {
            pauseState.bufferedPending = newValue;
          }
          currentPendingValue = newValue;
        }
      });
      pausedQueueStates.set(queue, pauseState);
    };
    resumeHookQueue = (queue) => {
      const pauseState = pausedQueueStates.get(queue);
      if (!pauseState) return;
      if (pauseState.originalGetSnapshot) {
        queue.getSnapshot = pauseState.originalGetSnapshot;
      }
      const mergedPending = mergePendingChains(
        pauseState.pendingValueAtPause ?? null,
        pauseState.bufferedPending ?? null
      );
      if (pauseState.originalPendingDescriptor) {
        Object.defineProperty(
          queue,
          "pending",
          pauseState.originalPendingDescriptor
        );
      } else {
        delete queue.pending;
      }
      queue.pending = mergedPending;
      pausedQueueStates.delete(queue);
    };
    pauseContextDependency = (contextDependency) => {
      if (pausedContextStates.has(contextDependency)) return;
      const pauseState = {
        originalDescriptor: Object.getOwnPropertyDescriptor(
          contextDependency,
          "memoizedValue"
        ),
        frozenValue: contextDependency.memoizedValue
      };
      Object.defineProperty(contextDependency, "memoizedValue", {
        configurable: true,
        enumerable: true,
        get() {
          if (isUpdatesPaused) return pauseState.frozenValue;
          if (pauseState.originalDescriptor?.get) {
            return pauseState.originalDescriptor.get.call(this);
          }
          return this._memoizedValue;
        },
        set(value) {
          if (isUpdatesPaused) {
            pauseState.pendingValue = value;
            pauseState.didReceivePendingValue = true;
            return;
          }
          if (pauseState.originalDescriptor?.set) {
            pauseState.originalDescriptor.set.call(this, value);
          } else {
            this._memoizedValue = value;
          }
        }
      });
      if (!pauseState.originalDescriptor?.get) {
        contextDependency._memoizedValue = pauseState.frozenValue;
      }
      pausedContextStates.set(contextDependency, pauseState);
    };
    resumeContextDependency = (contextDependency) => {
      const pauseState = pausedContextStates.get(contextDependency);
      if (!pauseState) return;
      if (pauseState.originalDescriptor) {
        Object.defineProperty(
          contextDependency,
          "memoizedValue",
          pauseState.originalDescriptor
        );
      } else {
        delete contextDependency.memoizedValue;
      }
      if (pauseState.didReceivePendingValue) {
        contextDependency.memoizedValue = pauseState.pendingValue;
      }
      pausedContextStates.delete(contextDependency);
    };
    forEachHookQueue = (fiber, callback) => {
      let hookState = fiber.memoizedState;
      while (hookState) {
        if (hookState.queue && typeof hookState.queue === "object") {
          callback(hookState.queue);
        }
        hookState = hookState.next;
      }
    };
    forEachContextDependency = (fiber, callback) => {
      let contextDependency = fiber.dependencies?.firstContext;
      while (contextDependency && typeof contextDependency === "object" && "memoizedValue" in contextDependency) {
        callback(contextDependency);
        contextDependency = contextDependency.next;
      }
    };
    traverseFibers = (fiber, onCompositeFiber) => {
      if (!fiber) return;
      if (pe(fiber)) onCompositeFiber(fiber);
      traverseFibers(fiber.child, onCompositeFiber);
      traverseFibers(fiber.sibling, onCompositeFiber);
    };
    pauseFiber = (fiber) => {
      forEachHookQueue(fiber, pauseHookQueue);
      forEachContextDependency(fiber, pauseContextDependency);
    };
    resumeFiber = (fiber) => {
      forEachHookQueue(fiber, resumeHookQueue);
      forEachContextDependency(fiber, resumeContextDependency);
    };
    patchDispatcher = (dispatcher) => {
      if (patchedDispatchers.has(dispatcher)) return;
      const typedDispatcher = dispatcher;
      const originalHooks = {
        useState: typedDispatcher.useState,
        useReducer: typedDispatcher.useReducer,
        useTransition: typedDispatcher.useTransition,
        useSyncExternalStore: typedDispatcher.useSyncExternalStore
      };
      patchedDispatchers.set(dispatcher, originalHooks);
      typedDispatcher.useState = (...args) => {
        const result = originalHooks.useState.apply(dispatcher, args);
        if (!isUpdatesPaused) return result;
        if (!Array.isArray(result) || typeof result[1] !== "function")
          return result;
        const [state, dispatch] = result;
        const wrappedDispatch = getOrCache(
          wrappedDispatchCache,
          dispatch,
          () => (...dispatchArgs) => {
            if (isUpdatesPaused) {
              pendingStateUpdates.push(() => dispatch(...dispatchArgs));
            } else {
              dispatch(...dispatchArgs);
            }
          }
        );
        return [state, wrappedDispatch];
      };
      typedDispatcher.useReducer = (...args) => {
        const result = originalHooks.useReducer.apply(dispatcher, args);
        if (!isUpdatesPaused) return result;
        if (!Array.isArray(result) || typeof result[1] !== "function")
          return result;
        const [state, dispatch] = result;
        const wrappedDispatch = getOrCache(
          wrappedDispatchCache,
          dispatch,
          () => (...dispatchArgs) => {
            if (isUpdatesPaused) {
              pendingStateUpdates.push(() => dispatch(...dispatchArgs));
            } else {
              dispatch(...dispatchArgs);
            }
          }
        );
        return [state, wrappedDispatch];
      };
      typedDispatcher.useTransition = (...args) => {
        const result = originalHooks.useTransition.apply(
          dispatcher,
          args
        );
        if (!isUpdatesPaused) return result;
        if (!Array.isArray(result) || typeof result[1] !== "function")
          return result;
        const [isPending, startTransition2] = result;
        const wrappedStartTransition = getOrCache(
          wrappedStartTransitionCache,
          startTransition2,
          () => (transitionCallback) => {
            if (isUpdatesPaused) {
              pendingTransitionCallbacks.push(
                () => startTransition2(transitionCallback)
              );
            } else {
              startTransition2(transitionCallback);
            }
          }
        );
        return [isPending, wrappedStartTransition];
      };
      typedDispatcher.useSyncExternalStore = (subscribe, getSnapshot, getServerSnapshot) => {
        if (!isUpdatesPaused) {
          return originalHooks.useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        }
        const wrappedSubscribe = (onChange) => subscribe(() => {
          if (isUpdatesPaused) {
            pendingStoreCallbacks.add(onChange);
          } else {
            onChange();
          }
        });
        return originalHooks.useSyncExternalStore(
          wrappedSubscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
    };
    installDispatcherPatching = (renderer) => {
      const dispatcherRef = renderer.currentDispatcherRef;
      if (!dispatcherRef || typeof dispatcherRef !== "object") return;
      const dispatcherKey = "H" in dispatcherRef ? "H" : "current";
      let currentDispatcher = dispatcherRef[dispatcherKey];
      Object.defineProperty(dispatcherRef, dispatcherKey, {
        configurable: true,
        enumerable: true,
        get: () => {
          if (currentDispatcher && typeof currentDispatcher === "object") {
            patchDispatcher(currentDispatcher);
          }
          return currentDispatcher;
        },
        set: (newDispatcher) => {
          currentDispatcher = newDispatcher;
        }
      });
    };
    scheduleReactUpdate = (fiberRoots) => {
      queueMicrotask(() => {
        try {
          for (const renderer of h().renderers.values()) {
            if (typeof renderer.scheduleUpdate !== "function") continue;
            for (const fiberRoot of fiberRoots) {
              if (fiberRoot.current) {
                try {
                  renderer.scheduleUpdate(fiberRoot.current);
                } catch {
                }
              }
            }
          }
        } catch {
        }
      });
    };
    invokeCallbacks = (callbacks) => {
      for (const callback of callbacks) {
        try {
          callback();
        } catch {
        }
      }
    };
    initializeFreezeSupport = () => {
      for (const renderer of h().renderers.values()) {
        if (renderersWithPatchedDispatcher.has(renderer)) continue;
        installDispatcherPatching(renderer);
        renderersWithPatchedDispatcher.add(renderer);
      }
    };
    freezeUpdates = () => {
      if (isUpdatesPaused) return () => {
      };
      initializeFreezeSupport();
      isUpdatesPaused = true;
      const fiberRoots = collectFiberRoots();
      for (const fiberRoot of fiberRoots) {
        traverseFibers(fiberRoot.current, pauseFiber);
      }
      return () => {
        if (!isUpdatesPaused) return;
        try {
          const fiberRootsToResume = collectFiberRoots();
          for (const fiberRoot of fiberRootsToResume) {
            traverseFibers(fiberRoot.current, resumeFiber);
          }
          const storeCallbacksToInvoke = Array.from(pendingStoreCallbacks);
          const transitionCallbacksToInvoke = pendingTransitionCallbacks.slice();
          const stateUpdatesToInvoke = pendingStateUpdates.slice();
          isUpdatesPaused = false;
          invokeCallbacks(storeCallbacksToInvoke);
          invokeCallbacks(transitionCallbacksToInvoke);
          invokeCallbacks(stateUpdatesToInvoke);
          scheduleReactUpdate(fiberRootsToResume);
        } finally {
          pendingStoreCallbacks.clear();
          pendingTransitionCallbacks.length = 0;
          pendingStateUpdates.length = 0;
        }
      };
    };
  }
});

// src/utils/create-style-element.ts
var createStyleElement;
var init_create_style_element = __esm({
  "src/utils/create-style-element.ts"() {
    "use strict";
    createStyleElement = (attribute, content) => {
      const element = document.createElement("style");
      element.setAttribute(attribute, "");
      element.textContent = content;
      document.head.appendChild(element);
      return element;
    };
  }
});

// src/utils/freeze-animations.ts
var FROZEN_STYLES, GLOBAL_FREEZE_STYLES, styleElement, frozenElements, lastInputElements, globalAnimationStyleElement, ensureStylesInjected, areElementsSame, freezeAllAnimations, unfreezeAllAnimations, freezeAnimations, freezeGlobalAnimations, unfreezeGlobalAnimations;
var init_freeze_animations = __esm({
  "src/utils/freeze-animations.ts"() {
    "use strict";
    init_constants();
    init_create_style_element();
    FROZEN_STYLES = `
[${FROZEN_ELEMENT_ATTRIBUTE}],
[${FROZEN_ELEMENT_ATTRIBUTE}] * {
  animation-play-state: paused !important;
  transition: none !important;
}
`;
    GLOBAL_FREEZE_STYLES = `
*, *::before, *::after {
  animation-play-state: paused !important;
  transition: none !important;
}
`;
    styleElement = null;
    frozenElements = [];
    lastInputElements = [];
    globalAnimationStyleElement = null;
    ensureStylesInjected = () => {
      if (styleElement) return;
      styleElement = createStyleElement(
        "data-react-grab-frozen-styles",
        FROZEN_STYLES
      );
    };
    areElementsSame = (a3, b3) => a3.length === b3.length && a3.every((element, index) => element === b3[index]);
    freezeAllAnimations = (elements) => {
      if (elements.length === 0) return;
      if (areElementsSame(elements, lastInputElements)) return;
      lastInputElements = [...elements];
      unfreezeAllAnimations();
      ensureStylesInjected();
      frozenElements = elements;
      for (const element of frozenElements) {
        element.setAttribute(FROZEN_ELEMENT_ATTRIBUTE, "");
      }
    };
    unfreezeAllAnimations = () => {
      if (frozenElements.length === 0) return;
      for (const element of frozenElements) {
        element.removeAttribute(FROZEN_ELEMENT_ATTRIBUTE);
      }
      frozenElements = [];
      lastInputElements = [];
    };
    freezeAnimations = (elements) => {
      if (elements.length === 0) {
        unfreezeAllAnimations();
        return () => {
        };
      }
      freezeAllAnimations(elements);
      return unfreezeAllAnimations;
    };
    freezeGlobalAnimations = () => {
      if (globalAnimationStyleElement) return;
      globalAnimationStyleElement = createStyleElement(
        "data-react-grab-global-freeze",
        GLOBAL_FREEZE_STYLES
      );
    };
    unfreezeGlobalAnimations = () => {
      globalAnimationStyleElement?.remove();
      globalAnimationStyleElement = null;
    };
  }
});

// src/utils/is-element-visible.ts
var isElementVisible;
var init_is_element_visible = __esm({
  "src/utils/is-element-visible.ts"() {
    "use strict";
    isElementVisible = (element, computedStyle = window.getComputedStyle(element)) => {
      return computedStyle.display !== "none" && computedStyle.visibility !== "hidden" && computedStyle.opacity !== "0";
    };
  }
});

// src/utils/is-valid-grabbable-element.ts
var isReactGrabElement, isUserIgnoredElement, isDevToolsOverlay, isFullViewportOverlay, visibilityCache, clearVisibilityCache, isValidGrabbableElement;
var init_is_valid_grabbable_element = __esm({
  "src/utils/is-valid-grabbable-element.ts"() {
    "use strict";
    init_constants();
    init_is_element_visible();
    isReactGrabElement = (element) => {
      if (element.hasAttribute("data-react-grab")) return true;
      const rootNode = element.getRootNode();
      return rootNode instanceof ShadowRoot && rootNode.host.hasAttribute("data-react-grab");
    };
    isUserIgnoredElement = (element) => element.hasAttribute(USER_IGNORE_ATTRIBUTE) || element.closest(`[${USER_IGNORE_ATTRIBUTE}]`) !== null;
    isDevToolsOverlay = (computedStyle) => {
      const zIndex = parseInt(computedStyle.zIndex, 10);
      return computedStyle.pointerEvents === "none" && computedStyle.position === "fixed" && !isNaN(zIndex) && zIndex >= DEV_TOOLS_OVERLAY_Z_INDEX_THRESHOLD;
    };
    isFullViewportOverlay = (element, computedStyle) => {
      const position = computedStyle.position;
      if (position !== "fixed" && position !== "absolute") {
        return false;
      }
      const rect = element.getBoundingClientRect();
      const coversViewport = rect.width / window.innerWidth >= VIEWPORT_COVERAGE_THRESHOLD && rect.height / window.innerHeight >= VIEWPORT_COVERAGE_THRESHOLD;
      if (!coversViewport) {
        return false;
      }
      const backgroundColor = computedStyle.backgroundColor;
      const hasInvisibleBackground = backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)" || parseFloat(computedStyle.opacity) < 0.1;
      if (hasInvisibleBackground) {
        return true;
      }
      const zIndex = parseInt(computedStyle.zIndex, 10);
      return !isNaN(zIndex) && zIndex > OVERLAY_Z_INDEX_THRESHOLD;
    };
    visibilityCache = /* @__PURE__ */ new WeakMap();
    clearVisibilityCache = () => {
      visibilityCache = /* @__PURE__ */ new WeakMap();
    };
    isValidGrabbableElement = (element) => {
      if (isReactGrabElement(element)) {
        return false;
      }
      if (isUserIgnoredElement(element)) {
        return false;
      }
      const now = performance.now();
      const cached = visibilityCache.get(element);
      if (cached && now - cached.timestamp < VISIBILITY_CACHE_TTL_MS) {
        return cached.isVisible;
      }
      const computedStyle = window.getComputedStyle(element);
      if (isDevToolsOverlay(computedStyle)) {
        return false;
      }
      if (isFullViewportOverlay(element, computedStyle)) {
        return false;
      }
      const isVisible = isElementVisible(element, computedStyle);
      visibilityCache.set(element, { isVisible, timestamp: now });
      return isVisible;
    };
  }
});

// src/utils/get-element-at-position.ts
var cache, isWithinThreshold, getElementsAtPoint, getElementAtPosition, clearElementPositionCache;
var init_get_element_at_position = __esm({
  "src/utils/get-element-at-position.ts"() {
    "use strict";
    init_is_valid_grabbable_element();
    init_constants();
    cache = null;
    isWithinThreshold = (x1, y1, x22, y22) => {
      const deltaX = Math.abs(x1 - x22);
      const deltaY = Math.abs(y1 - y22);
      return deltaX <= ELEMENT_POSITION_CACHE_DISTANCE_THRESHOLD_PX && deltaY <= ELEMENT_POSITION_CACHE_DISTANCE_THRESHOLD_PX;
    };
    getElementsAtPoint = (clientX, clientY) => document.elementsFromPoint(clientX, clientY);
    getElementAtPosition = (clientX, clientY) => {
      const now = performance.now();
      if (cache) {
        const isPositionClose = isWithinThreshold(
          clientX,
          clientY,
          cache.clientX,
          cache.clientY
        );
        const isWithinThrottle = now - cache.timestamp < ELEMENT_POSITION_THROTTLE_MS;
        if (isPositionClose || isWithinThrottle) {
          return cache.element;
        }
      }
      const elementsAtPoint = getElementsAtPoint(clientX, clientY);
      let result = null;
      for (const candidateElement of elementsAtPoint) {
        if (isValidGrabbableElement(candidateElement)) {
          result = candidateElement;
          break;
        }
      }
      cache = { clientX, clientY, element: result, timestamp: now };
      return result;
    };
    clearElementPositionCache = () => {
      cache = null;
    };
  }
});

// src/utils/pointer-events-override.ts
var overrideStyle, enablePointerEventsOverride, disablePointerEventsOverride;
var init_pointer_events_override = __esm({
  "src/utils/pointer-events-override.ts"() {
    "use strict";
    init_create_style_element();
    overrideStyle = null;
    enablePointerEventsOverride = () => {
      if (overrideStyle) return;
      overrideStyle = createStyleElement(
        "data-react-grab-pointer-override",
        "* { pointer-events: auto !important; }"
      );
    };
    disablePointerEventsOverride = () => {
      overrideStyle?.remove();
      overrideStyle = null;
    };
  }
});

// src/utils/freeze-pseudo-states.ts
var POINTER_EVENTS_STYLES, MOUSE_EVENTS_TO_BLOCK, FOCUS_EVENTS_TO_BLOCK, HOVER_STYLE_PROPERTIES, FOCUS_STYLE_PROPERTIES, ANIMATION_CONTROLLED_PROPERTIES, frozenHoverElements, frozenFocusElements, pointerEventsStyle, stopEvent, preventFocusChange, hasAnimationControlledProperty, collectHoverStates, collectFocusStates, applyFrozenStates, restoreFrozenStates, freezePseudoStates, unfreezePseudoStates;
var init_freeze_pseudo_states = __esm({
  "src/utils/freeze-pseudo-states.ts"() {
    "use strict";
    init_get_element_at_position();
    init_pointer_events_override();
    init_create_style_element();
    POINTER_EVENTS_STYLES = "* { pointer-events: none !important; }";
    MOUSE_EVENTS_TO_BLOCK = [
      "mouseenter",
      "mouseleave",
      "mouseover",
      "mouseout",
      "pointerenter",
      "pointerleave",
      "pointerover",
      "pointerout"
    ];
    FOCUS_EVENTS_TO_BLOCK = ["focus", "blur", "focusin", "focusout"];
    HOVER_STYLE_PROPERTIES = [
      "background-color",
      "color",
      "border-color",
      "box-shadow",
      "transform",
      "opacity",
      "outline",
      "filter",
      "scale",
      "visibility"
    ];
    FOCUS_STYLE_PROPERTIES = [
      "background-color",
      "color",
      "border-color",
      "box-shadow",
      "outline",
      "outline-offset",
      "outline-width",
      "outline-color",
      "outline-style",
      "filter",
      "opacity",
      "ring-color",
      "ring-width"
    ];
    ANIMATION_CONTROLLED_PROPERTIES = [
      "opacity",
      "transform",
      "scale",
      "translate",
      "rotate"
    ];
    frozenHoverElements = /* @__PURE__ */ new Map();
    frozenFocusElements = /* @__PURE__ */ new Map();
    pointerEventsStyle = null;
    stopEvent = (event) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
    };
    preventFocusChange = (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };
    hasAnimationControlledProperty = (cssText) => {
      const lowerCssText = cssText.toLowerCase();
      return ANIMATION_CONTROLLED_PROPERTIES.some(
        (prop) => lowerCssText.includes(prop)
      );
    };
    collectHoverStates = () => {
      const elementsToFreeze = [];
      for (const element of document.querySelectorAll(":hover")) {
        if (!(element instanceof HTMLElement)) continue;
        const originalCssText = element.style.cssText;
        const computed = getComputedStyle(element);
        let frozenStyles = originalCssText;
        for (const prop of HOVER_STYLE_PROPERTIES) {
          const computedValue = computed.getPropertyValue(prop);
          if (computedValue) {
            frozenStyles += `${prop}: ${computedValue} !important; `;
          }
        }
        elementsToFreeze.push({ element, originalCssText, frozenStyles });
      }
      return elementsToFreeze;
    };
    collectFocusStates = () => {
      const elementsToFreeze = [];
      for (const element of document.querySelectorAll(":focus, :focus-visible")) {
        if (!(element instanceof HTMLElement)) continue;
        if (frozenFocusElements.has(element)) continue;
        const originalCssText = element.style.cssText;
        const computed = getComputedStyle(element);
        let frozenStyles = originalCssText;
        for (const prop of FOCUS_STYLE_PROPERTIES) {
          const computedValue = computed.getPropertyValue(prop);
          if (computedValue) {
            frozenStyles += `${prop}: ${computedValue} !important; `;
          }
        }
        elementsToFreeze.push({ element, originalCssText, frozenStyles });
      }
      return elementsToFreeze;
    };
    applyFrozenStates = (states, storageMap) => {
      for (const { element, originalCssText, frozenStyles } of states) {
        storageMap.set(element, originalCssText);
        element.style.cssText = frozenStyles;
      }
    };
    restoreFrozenStates = (storageMap, styleProperties) => {
      for (const [element, originalCssText] of storageMap) {
        if (hasAnimationControlledProperty(originalCssText)) {
          for (const prop of styleProperties) {
            element.style.removeProperty(prop);
          }
        } else {
          element.style.cssText = originalCssText;
        }
      }
      storageMap.clear();
    };
    freezePseudoStates = () => {
      if (pointerEventsStyle) return;
      for (const eventType of MOUSE_EVENTS_TO_BLOCK) {
        document.addEventListener(eventType, stopEvent, true);
      }
      for (const eventType of FOCUS_EVENTS_TO_BLOCK) {
        document.addEventListener(eventType, preventFocusChange, true);
      }
      const hoverStates = collectHoverStates();
      const focusStates = collectFocusStates();
      applyFrozenStates(hoverStates, frozenHoverElements);
      applyFrozenStates(focusStates, frozenFocusElements);
      pointerEventsStyle = createStyleElement(
        "data-react-grab-frozen-pseudo",
        POINTER_EVENTS_STYLES
      );
      enablePointerEventsOverride();
    };
    unfreezePseudoStates = () => {
      disablePointerEventsOverride();
      clearElementPositionCache();
      for (const eventType of MOUSE_EVENTS_TO_BLOCK) {
        document.removeEventListener(eventType, stopEvent, true);
      }
      for (const eventType of FOCUS_EVENTS_TO_BLOCK) {
        document.removeEventListener(eventType, preventFocusChange, true);
      }
      restoreFrozenStates(frozenHoverElements, HOVER_STYLE_PROPERTIES);
      restoreFrozenStates(frozenFocusElements, FOCUS_STYLE_PROPERTIES);
      pointerEventsStyle?.remove();
      pointerEventsStyle = null;
    };
  }
});

// src/components/tooltip.tsx
var _tmpl$20, tooltipCloseTimestamp, wasTooltipRecentlyVisible, Tooltip;
var init_tooltip = __esm({
  "src/components/tooltip.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_cn();
    init_constants();
    _tmpl$20 = /* @__PURE__ */ template(`<div style=z-index:2147483647>`);
    tooltipCloseTimestamp = 0;
    wasTooltipRecentlyVisible = () => {
      return Date.now() - tooltipCloseTimestamp < TOOLTIP_GRACE_PERIOD_MS;
    };
    Tooltip = (props) => {
      const [delayedVisible, setDelayedVisible] = createSignal(false);
      const [shouldAnimate, setShouldAnimate] = createSignal(true);
      let delayTimeoutId;
      createEffect(on(() => props.visible, (isVisible) => {
        if (delayTimeoutId !== void 0) {
          clearTimeout(delayTimeoutId);
          delayTimeoutId = void 0;
        }
        if (isVisible) {
          if (wasTooltipRecentlyVisible()) {
            setShouldAnimate(false);
            setDelayedVisible(true);
          } else {
            setShouldAnimate(true);
            delayTimeoutId = setTimeout(() => {
              setDelayedVisible(true);
            }, TOOLTIP_DELAY_MS);
          }
        } else {
          if (delayedVisible()) {
            tooltipCloseTimestamp = Date.now();
          }
          setDelayedVisible(false);
        }
      }));
      onCleanup(() => {
        if (delayTimeoutId !== void 0) {
          clearTimeout(delayTimeoutId);
        }
        if (delayedVisible()) {
          tooltipCloseTimestamp = Date.now();
        }
      });
      return createComponent(Show, {
        get when() {
          return delayedVisible();
        },
        get children() {
          var _el$ = _tmpl$20();
          insert(_el$, () => props.children);
          createRenderEffect(() => className(_el$, cn("absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded-[10px] text-[10px] text-black/60 pointer-events-none [corner-shape:superellipse(1.25)]", PANEL_STYLES, props.position === "top" ? "bottom-full mb-2.5" : "top-full mt-2.5", shouldAnimate() && "animate-tooltip-fade-in")));
          return _el$;
        }
      });
    };
  }
});

// src/utils/get-toolbar-icon-color.ts
var getToolbarIconColor;
var init_get_toolbar_icon_color = __esm({
  "src/utils/get-toolbar-icon-color.ts"() {
    "use strict";
    getToolbarIconColor = (isHighlighted, isDimmed) => {
      if (isHighlighted) return "text-black";
      if (isDimmed) return "text-black/40";
      return "text-black/70";
    };
  }
});

// src/components/toolbar/index.tsx
var _tmpl$21, _tmpl$27, Toolbar;
var init_toolbar = __esm({
  "src/components/toolbar/index.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_cn();
    init_state();
    init_icon_select();
    init_icon_chevron();
    init_icon_comment();
    init_constants();
    init_freeze_updates();
    init_freeze_animations();
    init_freeze_pseudo_states();
    init_tooltip();
    init_get_toolbar_icon_color();
    _tmpl$21 = /* @__PURE__ */ template(`<div style=z-index:2147483647>Enable to continue`);
    _tmpl$27 = /* @__PURE__ */ template(`<div data-react-grab-ignore-events data-react-grab-toolbar style=z-index:2147483647><div><div><div class="flex items-center min-w-0"><div><div class="relative overflow-visible min-w-0"><button data-react-grab-ignore-events data-react-grab-toolbar-toggle class="contain-layout flex items-center justify-center cursor-pointer interactive-scale touch-hitbox mr-1.5"></button></div></div><div><div class="relative overflow-visible min-w-0"><button data-react-grab-ignore-events data-react-grab-toolbar-comment class="contain-layout flex items-center justify-center cursor-pointer interactive-scale touch-hitbox mr-1.5"></button></div></div><div class="relative shrink-0 overflow-visible"><button data-react-grab-ignore-events data-react-grab-toolbar-enabled class="contain-layout flex items-center justify-center cursor-pointer interactive-scale outline-none mx-0.5"><div><div></div></div></button></div></div></div><button data-react-grab-ignore-events data-react-grab-toolbar-collapse class="contain-layout shrink-0 flex items-center justify-center cursor-pointer interactive-scale">`);
    Toolbar = (props) => {
      let containerRef;
      let unfreezeUpdatesCallback = null;
      const [isVisible, setIsVisible] = createSignal(false);
      const [isCollapsed, setIsCollapsed] = createSignal(false);
      const [isDragging, setIsDragging] = createSignal(false);
      const [isSnapping, setIsSnapping] = createSignal(false);
      const [isResizing, setIsResizing] = createSignal(false);
      const [snapEdge, setSnapEdge] = createSignal("bottom");
      const [positionRatio, setPositionRatio] = createSignal(0.5);
      const [position, setPosition] = createSignal({
        x: 0,
        y: 0
      });
      const [dragOffset, setDragOffset] = createSignal({
        x: 0,
        y: 0
      });
      const [velocity, setVelocity] = createSignal({
        x: 0,
        y: 0
      });
      const [hasDragMoved, setHasDragMoved] = createSignal(false);
      const [isShaking, setIsShaking] = createSignal(false);
      const [isCollapseAnimating, setIsCollapseAnimating] = createSignal(false);
      const [isSelectTooltipVisible, setIsSelectTooltipVisible] = createSignal(false);
      const [isCommentTooltipVisible, setIsCommentTooltipVisible] = createSignal(false);
      const [isToggleTooltipVisible, setIsToggleTooltipVisible] = createSignal(false);
      const [isShakeTooltipVisible, setIsShakeTooltipVisible] = createSignal(false);
      const tooltipPosition = () => snapEdge() === "top" ? "bottom" : "top";
      const stopEventPropagation = (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
      };
      const createFreezeHandlers = (setTooltipVisible) => ({
        onMouseEnter: () => {
          setTooltipVisible(true);
          props.onSelectHoverChange?.(true);
          if (!unfreezeUpdatesCallback) {
            unfreezeUpdatesCallback = freezeUpdates();
            freezeGlobalAnimations();
            freezePseudoStates();
          }
        },
        onMouseLeave: () => {
          setTooltipVisible(false);
          props.onSelectHoverChange?.(false);
          if (!props.isActive && !props.isContextMenuOpen) {
            unfreezeUpdatesCallback?.();
            unfreezeUpdatesCallback = null;
            unfreezeGlobalAnimations();
            unfreezePseudoStates();
          }
        }
      });
      const collapsedEdgeClasses = () => {
        if (!isCollapsed()) return "";
        const edge = snapEdge();
        const roundedClass = {
          top: "rounded-t-none rounded-b-[10px]",
          bottom: "rounded-b-none rounded-t-[10px]",
          left: "rounded-l-none rounded-r-[10px]",
          right: "rounded-r-none rounded-l-[10px]"
        }[edge];
        const paddingClass = edge === "top" || edge === "bottom" ? "px-2 py-0.25" : "px-0.25 py-2";
        return `${roundedClass} ${paddingClass}`;
      };
      let shakeTooltipTimeout;
      createEffect(on(() => props.shakeCount, (count) => {
        if (count && !props.enabled) {
          setIsShaking(true);
          setIsShakeTooltipVisible(true);
          if (shakeTooltipTimeout) {
            clearTimeout(shakeTooltipTimeout);
          }
          shakeTooltipTimeout = setTimeout(() => {
            setIsShakeTooltipVisible(false);
          }, TOOLBAR_SHAKE_TOOLTIP_DURATION_MS);
        }
      }));
      createEffect(on(() => props.enabled, (enabled) => {
        if (enabled && isShakeTooltipVisible()) {
          setIsShakeTooltipVisible(false);
          if (shakeTooltipTimeout) {
            clearTimeout(shakeTooltipTimeout);
          }
        }
      }));
      createEffect(on(() => [props.isActive, props.isContextMenuOpen], ([isActive, isContextMenuOpen]) => {
        if (!isActive && !isContextMenuOpen && unfreezeUpdatesCallback) {
          unfreezeUpdatesCallback();
          unfreezeUpdatesCallback = null;
        }
      }));
      let lastPointerPosition = {
        x: 0,
        y: 0,
        time: 0
      };
      let pointerStartPosition = {
        x: 0,
        y: 0
      };
      let expandedDimensions = {
        width: TOOLBAR_DEFAULT_WIDTH_PX,
        height: TOOLBAR_DEFAULT_HEIGHT_PX
      };
      const [collapsedDimensions, setCollapsedDimensions] = createSignal({
        width: TOOLBAR_COLLAPSED_SHORT_PX,
        height: TOOLBAR_COLLAPSED_SHORT_PX
      });
      const clampToViewport = (value, min, max) => Math.max(min, Math.min(value, max));
      const getVisualViewport = () => {
        const visualViewport = window.visualViewport;
        if (visualViewport) {
          return {
            width: visualViewport.width,
            height: visualViewport.height,
            offsetLeft: visualViewport.offsetLeft,
            offsetTop: visualViewport.offsetTop
          };
        }
        return {
          width: window.innerWidth,
          height: window.innerHeight,
          offsetLeft: 0,
          offsetTop: 0
        };
      };
      const calculateExpandedPositionFromCollapsed = (collapsedPosition, edge) => {
        const viewport = getVisualViewport();
        const viewportWidth = viewport.width;
        const viewportHeight = viewport.height;
        const {
          width: expandedWidth,
          height: expandedHeight
        } = expandedDimensions;
        const actualRect = containerRef?.getBoundingClientRect();
        const actualCollapsedWidth = actualRect?.width ?? TOOLBAR_COLLAPSED_SHORT_PX;
        const actualCollapsedHeight = actualRect?.height ?? TOOLBAR_COLLAPSED_SHORT_PX;
        let newPosition;
        if (edge === "top" || edge === "bottom") {
          const xOffset = (expandedWidth - actualCollapsedWidth) / 2;
          const newExpandedX = collapsedPosition.x - xOffset;
          const clampedX = clampToViewport(newExpandedX, viewport.offsetLeft + TOOLBAR_SNAP_MARGIN_PX, viewport.offsetLeft + viewportWidth - expandedWidth - TOOLBAR_SNAP_MARGIN_PX);
          const newExpandedY = edge === "top" ? viewport.offsetTop + TOOLBAR_SNAP_MARGIN_PX : viewport.offsetTop + viewportHeight - expandedHeight - TOOLBAR_SNAP_MARGIN_PX;
          newPosition = {
            x: clampedX,
            y: newExpandedY
          };
        } else {
          const yOffset = (expandedHeight - actualCollapsedHeight) / 2;
          const newExpandedY = collapsedPosition.y - yOffset;
          const clampedY = clampToViewport(newExpandedY, viewport.offsetTop + TOOLBAR_SNAP_MARGIN_PX, viewport.offsetTop + viewportHeight - expandedHeight - TOOLBAR_SNAP_MARGIN_PX);
          const newExpandedX = edge === "left" ? viewport.offsetLeft + TOOLBAR_SNAP_MARGIN_PX : viewport.offsetLeft + viewportWidth - expandedWidth - TOOLBAR_SNAP_MARGIN_PX;
          newPosition = {
            x: newExpandedX,
            y: clampedY
          };
        }
        const ratio = getRatioFromPosition(edge, newPosition.x, newPosition.y, expandedWidth, expandedHeight);
        return {
          position: newPosition,
          ratio
        };
      };
      const getPositionFromEdgeAndRatio = (edge, ratio, elementWidth, elementHeight) => {
        const viewport = getVisualViewport();
        const viewportWidth = viewport.width;
        const viewportHeight = viewport.height;
        const minX = viewport.offsetLeft + TOOLBAR_SNAP_MARGIN_PX;
        const maxX = Math.max(minX, viewport.offsetLeft + viewportWidth - elementWidth - TOOLBAR_SNAP_MARGIN_PX);
        const minY = viewport.offsetTop + TOOLBAR_SNAP_MARGIN_PX;
        const maxY = Math.max(minY, viewport.offsetTop + viewportHeight - elementHeight - TOOLBAR_SNAP_MARGIN_PX);
        if (edge === "top" || edge === "bottom") {
          const availableWidth = Math.max(0, viewportWidth - elementWidth - TOOLBAR_SNAP_MARGIN_PX * 2);
          const positionX2 = Math.min(maxX, Math.max(minX, viewport.offsetLeft + TOOLBAR_SNAP_MARGIN_PX + availableWidth * ratio));
          const positionY2 = edge === "top" ? minY : maxY;
          return {
            x: positionX2,
            y: positionY2
          };
        }
        const availableHeight = Math.max(0, viewportHeight - elementHeight - TOOLBAR_SNAP_MARGIN_PX * 2);
        const positionY = Math.min(maxY, Math.max(minY, viewport.offsetTop + TOOLBAR_SNAP_MARGIN_PX + availableHeight * ratio));
        const positionX = edge === "left" ? minX : maxX;
        return {
          x: positionX,
          y: positionY
        };
      };
      const getRatioFromPosition = (edge, positionX, positionY, elementWidth, elementHeight) => {
        const viewport = getVisualViewport();
        const viewportWidth = viewport.width;
        const viewportHeight = viewport.height;
        if (edge === "top" || edge === "bottom") {
          const availableWidth = viewportWidth - elementWidth - TOOLBAR_SNAP_MARGIN_PX * 2;
          if (availableWidth <= 0) return 0.5;
          return Math.max(0, Math.min(1, (positionX - viewport.offsetLeft - TOOLBAR_SNAP_MARGIN_PX) / availableWidth));
        }
        const availableHeight = viewportHeight - elementHeight - TOOLBAR_SNAP_MARGIN_PX * 2;
        if (availableHeight <= 0) return 0.5;
        return Math.max(0, Math.min(1, (positionY - viewport.offsetTop - TOOLBAR_SNAP_MARGIN_PX) / availableHeight));
      };
      const recalculatePosition = () => {
        const newPosition = getPositionFromEdgeAndRatio(snapEdge(), positionRatio(), expandedDimensions.width, expandedDimensions.height);
        setPosition(newPosition);
      };
      let didDragOccur = false;
      const createDragAwareHandler = (callback) => (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (didDragOccur) {
          didDragOccur = false;
          return;
        }
        callback();
      };
      const handleToggle = createDragAwareHandler(() => props.onToggle?.());
      const handleComment = createDragAwareHandler(() => props.onComment?.());
      const handleToggleCollapse = createDragAwareHandler(() => {
        const rect = containerRef?.getBoundingClientRect();
        const wasCollapsed = isCollapsed();
        let newRatio = positionRatio();
        if (wasCollapsed) {
          const {
            position: newPos,
            ratio
          } = calculateExpandedPositionFromCollapsed(currentPosition(), snapEdge());
          newRatio = ratio;
          setPosition(newPos);
          setPositionRatio(newRatio);
        } else if (rect) {
          expandedDimensions = {
            width: rect.width,
            height: rect.height
          };
        }
        setIsCollapseAnimating(true);
        setIsCollapsed((prev) => !prev);
        saveAndNotify({
          edge: snapEdge(),
          ratio: newRatio,
          collapsed: !wasCollapsed,
          enabled: props.enabled ?? true
        });
        if (collapseAnimationTimeout) {
          clearTimeout(collapseAnimationTimeout);
        }
        collapseAnimationTimeout = setTimeout(() => {
          setIsCollapseAnimating(false);
          if (isCollapsed()) {
            const collapsedRect = containerRef?.getBoundingClientRect();
            if (collapsedRect) {
              setCollapsedDimensions({
                width: collapsedRect.width,
                height: collapsedRect.height
              });
            }
          }
        }, TOOLBAR_COLLAPSE_ANIMATION_DURATION_MS);
      });
      const handleToggleEnabled = createDragAwareHandler(() => props.onToggleEnabled?.());
      const getSnapPosition = (currentX, currentY, elementWidth, elementHeight, velocityX, velocityY) => {
        const viewport = getVisualViewport();
        const viewportWidth = viewport.width;
        const viewportHeight = viewport.height;
        const projectedX = currentX + velocityX * TOOLBAR_VELOCITY_MULTIPLIER_MS;
        const projectedY = currentY + velocityY * TOOLBAR_VELOCITY_MULTIPLIER_MS;
        const distanceToTop = projectedY - viewport.offsetTop + elementHeight / 2;
        const distanceToBottom = viewport.offsetTop + viewportHeight - projectedY - elementHeight / 2;
        const distanceToLeft = projectedX - viewport.offsetLeft + elementWidth / 2;
        const distanceToRight = viewport.offsetLeft + viewportWidth - projectedX - elementWidth / 2;
        const minDistance = Math.min(distanceToTop, distanceToBottom, distanceToLeft, distanceToRight);
        if (minDistance === distanceToTop) {
          return {
            edge: "top",
            x: Math.max(viewport.offsetLeft + TOOLBAR_SNAP_MARGIN_PX, Math.min(projectedX, viewport.offsetLeft + viewportWidth - elementWidth - TOOLBAR_SNAP_MARGIN_PX)),
            y: viewport.offsetTop + TOOLBAR_SNAP_MARGIN_PX
          };
        }
        if (minDistance === distanceToLeft) {
          return {
            edge: "left",
            x: viewport.offsetLeft + TOOLBAR_SNAP_MARGIN_PX,
            y: Math.max(viewport.offsetTop + TOOLBAR_SNAP_MARGIN_PX, Math.min(projectedY, viewport.offsetTop + viewportHeight - elementHeight - TOOLBAR_SNAP_MARGIN_PX))
          };
        }
        if (minDistance === distanceToRight) {
          return {
            edge: "right",
            x: viewport.offsetLeft + viewportWidth - elementWidth - TOOLBAR_SNAP_MARGIN_PX,
            y: Math.max(viewport.offsetTop + TOOLBAR_SNAP_MARGIN_PX, Math.min(projectedY, viewport.offsetTop + viewportHeight - elementHeight - TOOLBAR_SNAP_MARGIN_PX))
          };
        }
        return {
          edge: "bottom",
          x: Math.max(viewport.offsetLeft + TOOLBAR_SNAP_MARGIN_PX, Math.min(projectedX, viewport.offsetLeft + viewportWidth - elementWidth - TOOLBAR_SNAP_MARGIN_PX)),
          y: viewport.offsetTop + viewportHeight - elementHeight - TOOLBAR_SNAP_MARGIN_PX
        };
      };
      const handleWindowPointerMove = (event) => {
        if (!isDragging()) return;
        const distanceMoved = Math.sqrt(Math.pow(event.clientX - pointerStartPosition.x, 2) + Math.pow(event.clientY - pointerStartPosition.y, 2));
        if (distanceMoved > TOOLBAR_DRAG_THRESHOLD_PX) {
          setHasDragMoved(true);
        }
        if (!hasDragMoved()) return;
        const now = performance.now();
        const deltaTime = now - lastPointerPosition.time;
        if (deltaTime > 0) {
          const newVelocityX = (event.clientX - lastPointerPosition.x) / deltaTime;
          const newVelocityY = (event.clientY - lastPointerPosition.y) / deltaTime;
          setVelocity({
            x: newVelocityX,
            y: newVelocityY
          });
        }
        lastPointerPosition = {
          x: event.clientX,
          y: event.clientY,
          time: now
        };
        const newX = event.clientX - dragOffset().x;
        const newY = event.clientY - dragOffset().y;
        setPosition({
          x: newX,
          y: newY
        });
      };
      const handleWindowPointerUp = () => {
        if (!isDragging()) return;
        window.removeEventListener("pointermove", handleWindowPointerMove);
        window.removeEventListener("pointerup", handleWindowPointerUp);
        const didMove = hasDragMoved();
        setIsDragging(false);
        if (!didMove) {
          return;
        }
        didDragOccur = true;
        const rect = containerRef?.getBoundingClientRect();
        if (!rect) return;
        const currentVelocity = velocity();
        const snap = getSnapPosition(position().x, position().y, rect.width, rect.height, currentVelocity.x, currentVelocity.y);
        const ratio = getRatioFromPosition(snap.edge, snap.x, snap.y, rect.width, rect.height);
        setSnapEdge(snap.edge);
        setPositionRatio(ratio);
        setIsSnapping(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPosition({
              x: snap.x,
              y: snap.y
            });
            saveAndNotify({
              edge: snap.edge,
              ratio,
              collapsed: isCollapsed(),
              enabled: props.enabled ?? true
            });
            snapAnimationTimeout = setTimeout(() => {
              setIsSnapping(false);
            }, TOOLBAR_SNAP_ANIMATION_DURATION_MS);
          });
        });
      };
      const handlePointerDown = (event) => {
        if (isCollapsed()) return;
        const rect = containerRef?.getBoundingClientRect();
        if (!rect) return;
        pointerStartPosition = {
          x: event.clientX,
          y: event.clientY
        };
        setDragOffset({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        });
        setIsDragging(true);
        setHasDragMoved(false);
        setVelocity({
          x: 0,
          y: 0
        });
        lastPointerPosition = {
          x: event.clientX,
          y: event.clientY,
          time: performance.now()
        };
        window.addEventListener("pointermove", handleWindowPointerMove);
        window.addEventListener("pointerup", handleWindowPointerUp);
      };
      const getCollapsedPosition = () => {
        const edge = snapEdge();
        const pos = position();
        const {
          width: expandedWidth,
          height: expandedHeight
        } = expandedDimensions;
        const {
          width: collapsedWidth,
          height: collapsedHeight
        } = collapsedDimensions();
        const viewport = getVisualViewport();
        switch (edge) {
          case "top":
          case "bottom": {
            const xOffset = (expandedWidth - collapsedWidth) / 2;
            const centeredX = pos.x + xOffset;
            const clampedX = clampToViewport(centeredX, viewport.offsetLeft, viewport.offsetLeft + viewport.width - collapsedWidth);
            return {
              x: clampedX,
              y: edge === "top" ? viewport.offsetTop : viewport.offsetTop + viewport.height - collapsedHeight
            };
          }
          case "left":
          case "right": {
            const yOffset = (expandedHeight - collapsedHeight) / 2;
            const centeredY = pos.y + yOffset;
            const clampedY = clampToViewport(centeredY, viewport.offsetTop, viewport.offsetTop + viewport.height - collapsedHeight);
            return {
              x: edge === "left" ? viewport.offsetLeft : viewport.offsetLeft + viewport.width - collapsedWidth,
              y: clampedY
            };
          }
          default:
            return pos;
        }
      };
      const chevronRotation = () => {
        const edge = snapEdge();
        const collapsed = isCollapsed();
        switch (edge) {
          case "top":
            return collapsed ? "rotate-180" : "rotate-0";
          case "bottom":
            return collapsed ? "rotate-0" : "rotate-180";
          case "left":
            return collapsed ? "rotate-90" : "-rotate-90";
          case "right":
            return collapsed ? "-rotate-90" : "rotate-90";
          default:
            return "rotate-0";
        }
      };
      let resizeTimeout;
      let collapseAnimationTimeout;
      let snapAnimationTimeout;
      const handleResize = () => {
        if (isDragging()) return;
        setIsResizing(true);
        recalculatePosition();
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
          setIsResizing(false);
          const newRatio = getRatioFromPosition(snapEdge(), position().x, position().y, expandedDimensions.width, expandedDimensions.height);
          setPositionRatio(newRatio);
          saveAndNotify({
            edge: snapEdge(),
            ratio: newRatio,
            collapsed: isCollapsed(),
            enabled: props.enabled ?? true
          });
        }, TOOLBAR_FADE_IN_DELAY_MS);
      };
      const saveAndNotify = (state) => {
        saveToolbarState(state);
        props.onStateChange?.(state);
      };
      onMount(() => {
        const savedState = loadToolbarState();
        const rect = containerRef?.getBoundingClientRect();
        const viewport = getVisualViewport();
        if (savedState) {
          setSnapEdge(savedState.edge);
          setPositionRatio(savedState.ratio);
          if (rect) {
            expandedDimensions = {
              width: rect.width,
              height: rect.height
            };
          }
          if (savedState.collapsed) {
            const isHorizontalEdge = savedState.edge === "top" || savedState.edge === "bottom";
            setCollapsedDimensions({
              width: isHorizontalEdge ? TOOLBAR_COLLAPSED_LONG_PX : TOOLBAR_COLLAPSED_SHORT_PX,
              height: isHorizontalEdge ? TOOLBAR_COLLAPSED_SHORT_PX : TOOLBAR_COLLAPSED_LONG_PX
            });
          }
          setIsCollapsed(savedState.collapsed);
          const newPosition = getPositionFromEdgeAndRatio(savedState.edge, savedState.ratio, expandedDimensions.width, expandedDimensions.height);
          setPosition(newPosition);
        } else if (rect) {
          expandedDimensions = {
            width: rect.width,
            height: rect.height
          };
          setPosition({
            x: viewport.offsetLeft + (viewport.width - rect.width) / 2,
            y: viewport.offsetTop + viewport.height - rect.height - TOOLBAR_SNAP_MARGIN_PX
          });
          setPositionRatio(0.5);
        } else {
          const defaultPosition = getPositionFromEdgeAndRatio("bottom", 0.5, expandedDimensions.width, expandedDimensions.height);
          setPosition(defaultPosition);
        }
        if (props.onSubscribeToStateChanges) {
          const unsubscribe = props.onSubscribeToStateChanges((state) => {
            if (isCollapseAnimating()) return;
            const rect2 = containerRef?.getBoundingClientRect();
            if (!rect2) return;
            const didCollapsedChange = isCollapsed() !== state.collapsed;
            setSnapEdge(state.edge);
            if (didCollapsedChange && !state.collapsed) {
              const collapsedPos = currentPosition();
              setIsCollapseAnimating(true);
              setIsCollapsed(state.collapsed);
              const {
                position: newPos,
                ratio: newRatio
              } = calculateExpandedPositionFromCollapsed(collapsedPos, state.edge);
              setPosition(newPos);
              setPositionRatio(newRatio);
              if (collapseAnimationTimeout) {
                clearTimeout(collapseAnimationTimeout);
              }
              collapseAnimationTimeout = setTimeout(() => {
                setIsCollapseAnimating(false);
              }, TOOLBAR_COLLAPSE_ANIMATION_DURATION_MS);
            } else {
              if (didCollapsedChange) {
                setIsCollapseAnimating(true);
                if (collapseAnimationTimeout) {
                  clearTimeout(collapseAnimationTimeout);
                }
                collapseAnimationTimeout = setTimeout(() => {
                  setIsCollapseAnimating(false);
                }, TOOLBAR_COLLAPSE_ANIMATION_DURATION_MS);
              }
              setIsCollapsed(state.collapsed);
              const newPosition = getPositionFromEdgeAndRatio(state.edge, state.ratio, expandedDimensions.width, expandedDimensions.height);
              setPosition(newPosition);
              setPositionRatio(state.ratio);
            }
          });
          onCleanup(unsubscribe);
        }
        window.addEventListener("resize", handleResize);
        window.visualViewport?.addEventListener("resize", handleResize);
        window.visualViewport?.addEventListener("scroll", handleResize);
        const fadeInTimeout = setTimeout(() => {
          setIsVisible(true);
        }, TOOLBAR_FADE_IN_DELAY_MS);
        onCleanup(() => {
          clearTimeout(fadeInTimeout);
        });
      });
      onCleanup(() => {
        window.removeEventListener("resize", handleResize);
        window.visualViewport?.removeEventListener("resize", handleResize);
        window.visualViewport?.removeEventListener("scroll", handleResize);
        window.removeEventListener("pointermove", handleWindowPointerMove);
        window.removeEventListener("pointerup", handleWindowPointerUp);
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        if (collapseAnimationTimeout) {
          clearTimeout(collapseAnimationTimeout);
        }
        if (shakeTooltipTimeout) {
          clearTimeout(shakeTooltipTimeout);
        }
        if (snapAnimationTimeout) {
          clearTimeout(snapAnimationTimeout);
        }
        unfreezeUpdatesCallback?.();
      });
      const currentPosition = () => {
        const collapsed = isCollapsed();
        return collapsed ? getCollapsedPosition() : position();
      };
      const getCursorClass = () => {
        if (isCollapsed()) {
          return "cursor-pointer";
        }
        if (isDragging()) {
          return "cursor-grabbing";
        }
        return "cursor-grab";
      };
      const getTransitionClass = () => {
        if (isResizing()) {
          return "";
        }
        if (isSnapping()) {
          return "transition-[transform,opacity] duration-300 ease-out";
        }
        if (isCollapseAnimating()) {
          return "transition-[transform,opacity] duration-150 ease-out";
        }
        return "transition-opacity duration-300 ease-out";
      };
      const getTransformOrigin = () => {
        const edge = snapEdge();
        switch (edge) {
          case "top":
            return "center top";
          case "bottom":
            return "center bottom";
          case "left":
            return "left center";
          case "right":
            return "right center";
          default:
            return "center center";
        }
      };
      return (() => {
        var _el$ = _tmpl$27(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$5.nextSibling, _el$9 = _el$8.firstChild, _el$0 = _el$9.firstChild, _el$1 = _el$8.nextSibling, _el$10 = _el$1.firstChild, _el$11 = _el$10.firstChild, _el$12 = _el$11.firstChild, _el$13 = _el$3.nextSibling;
        _el$.$$pointerdown = handlePointerDown;
        var _ref$ = containerRef;
        typeof _ref$ === "function" ? use(_ref$, _el$) : containerRef = _el$;
        _el$2.$$click = (event) => {
          if (isCollapsed()) {
            event.stopPropagation();
            const {
              position: newPos,
              ratio: newRatio
            } = calculateExpandedPositionFromCollapsed(currentPosition(), snapEdge());
            setPosition(newPos);
            setPositionRatio(newRatio);
            setIsCollapseAnimating(true);
            setIsCollapsed(false);
            saveAndNotify({
              edge: snapEdge(),
              ratio: newRatio,
              collapsed: false,
              enabled: props.enabled ?? true
            });
            if (collapseAnimationTimeout) {
              clearTimeout(collapseAnimationTimeout);
            }
            collapseAnimationTimeout = setTimeout(() => {
              setIsCollapseAnimating(false);
            }, TOOLBAR_COLLAPSE_ANIMATION_DURATION_MS);
          }
        };
        _el$2.addEventListener("animationend", () => setIsShaking(false));
        _el$7.$$click = (event) => {
          setIsSelectTooltipVisible(false);
          handleToggle(event);
        };
        addEventListener(_el$7, "mousedown", stopEventPropagation);
        addEventListener(_el$7, "pointerdown", (event) => {
          stopEventPropagation(event);
          handlePointerDown(event);
        });
        spread(_el$7, mergeProps(() => createFreezeHandlers(setIsSelectTooltipVisible)), false, true);
        insert(_el$7, createComponent(IconSelect, {
          size: 14,
          get ["class"]() {
            return cn("transition-colors", getToolbarIconColor(Boolean(props.isActive) && !props.isCommentMode, Boolean(props.isCommentMode)));
          }
        }));
        insert(_el$6, createComponent(Tooltip, {
          get visible() {
            return memo(() => !!isSelectTooltipVisible())() && !isCollapsed();
          },
          get position() {
            return tooltipPosition();
          },
          children: "Select"
        }), null);
        _el$0.$$click = (event) => {
          setIsCommentTooltipVisible(false);
          handleComment(event);
        };
        addEventListener(_el$0, "mousedown", stopEventPropagation);
        addEventListener(_el$0, "pointerdown", (event) => {
          stopEventPropagation(event);
          handlePointerDown(event);
        });
        spread(_el$0, mergeProps(() => createFreezeHandlers(setIsCommentTooltipVisible)), false, true);
        insert(_el$0, createComponent(IconComment, {
          size: 14,
          get ["class"]() {
            return cn("transition-colors", getToolbarIconColor(Boolean(props.isCommentMode), Boolean(props.isActive) && !props.isCommentMode));
          }
        }));
        insert(_el$9, createComponent(Tooltip, {
          get visible() {
            return memo(() => !!isCommentTooltipVisible())() && !isCollapsed();
          },
          get position() {
            return tooltipPosition();
          },
          children: "Comment"
        }), null);
        _el$10.addEventListener("mouseleave", () => setIsToggleTooltipVisible(false));
        _el$10.addEventListener("mouseenter", () => setIsToggleTooltipVisible(true));
        _el$10.$$click = (event) => {
          setIsToggleTooltipVisible(false);
          handleToggleEnabled(event);
        };
        insert(_el$1, createComponent(Tooltip, {
          get visible() {
            return memo(() => !!isToggleTooltipVisible())() && !isCollapsed();
          },
          get position() {
            return tooltipPosition();
          },
          get children() {
            return props.enabled ? "Disable" : "Enable";
          }
        }), null);
        addEventListener(_el$13, "click", handleToggleCollapse, true);
        insert(_el$13, createComponent(IconChevron, {
          get ["class"]() {
            return cn("text-[#B3B3B3] transition-transform duration-150", chevronRotation());
          }
        }));
        insert(_el$2, createComponent(Show, {
          get when() {
            return isShakeTooltipVisible();
          },
          get children() {
            var _el$14 = _tmpl$21();
            createRenderEffect(() => className(_el$14, cn("absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded-[10px] text-[10px] text-black/60 pointer-events-none animate-tooltip-fade-in [corner-shape:superellipse(1.25)]", PANEL_STYLES, tooltipPosition() === "top" ? "bottom-full mb-0.5" : "top-full mt-0.5")));
            return _el$14;
          }
        }), null);
        createRenderEffect((_p$) => {
          var _v$ = cn("fixed left-0 top-0 font-sans text-[13px] antialiased filter-[drop-shadow(0px_1px_2px_#51515140)] select-none", getCursorClass(), getTransitionClass(), isVisible() ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"), _v$2 = `translate(${currentPosition().x}px, ${currentPosition().y}px)`, _v$3 = getTransformOrigin(), _v$4 = cn("flex items-center justify-center rounded-[10px] antialiased transition-all duration-150 ease-out relative overflow-visible [font-synthesis:none] [corner-shape:superellipse(1.25)]", PANEL_STYLES, !isCollapsed() && "py-1.5 gap-1.5 px-2", collapsedEdgeClasses(), isShaking() && "animate-shake"), _v$5 = getTransformOrigin(), _v$6 = cn("grid transition-all duration-150 ease-out", isCollapsed() ? "grid-cols-[0fr] opacity-0 pointer-events-none" : "grid-cols-[1fr] opacity-100"), _v$7 = cn("grid transition-all duration-150 ease-out", props.enabled ? "grid-cols-[1fr] opacity-100" : "grid-cols-[0fr] opacity-0"), _v$8 = cn("grid transition-all duration-150 ease-out", props.enabled ? "grid-cols-[1fr] opacity-100" : "grid-cols-[0fr] opacity-0"), _v$9 = cn("relative w-5 h-3 rounded-full transition-colors", props.enabled ? "bg-black" : "bg-black/25"), _v$0 = cn("absolute top-0.5 w-2 h-2 rounded-full bg-white transition-transform", props.enabled ? "left-2.5" : "left-0.5");
          _v$ !== _p$.e && className(_el$, _p$.e = _v$);
          _v$2 !== _p$.t && setStyleProperty(_el$, "transform", _p$.t = _v$2);
          _v$3 !== _p$.a && setStyleProperty(_el$, "transform-origin", _p$.a = _v$3);
          _v$4 !== _p$.o && className(_el$2, _p$.o = _v$4);
          _v$5 !== _p$.i && setStyleProperty(_el$2, "transform-origin", _p$.i = _v$5);
          _v$6 !== _p$.n && className(_el$3, _p$.n = _v$6);
          _v$7 !== _p$.s && className(_el$5, _p$.s = _v$7);
          _v$8 !== _p$.h && className(_el$8, _p$.h = _v$8);
          _v$9 !== _p$.r && className(_el$11, _p$.r = _v$9);
          _v$0 !== _p$.d && className(_el$12, _p$.d = _v$0);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0,
          n: void 0,
          s: void 0,
          h: void 0,
          r: void 0,
          d: void 0
        });
        return _el$;
      })();
    };
    delegateEvents(["pointerdown", "click"]);
  }
});

// src/utils/resolve-action-enabled.ts
var resolveActionEnabled;
var init_resolve_action_enabled = __esm({
  "src/utils/resolve-action-enabled.ts"() {
    "use strict";
    resolveActionEnabled = (action, context) => {
      if (typeof action.enabled === "function") {
        return context ? action.enabled(context) : false;
      }
      return action.enabled ?? true;
    };
  }
});

// src/utils/is-event-from-overlay.ts
var isEventFromOverlay;
var init_is_event_from_overlay = __esm({
  "src/utils/is-event-from-overlay.ts"() {
    "use strict";
    isEventFromOverlay = (event, attribute) => {
      try {
        return event.composedPath().some(
          (target) => target instanceof HTMLElement && target.hasAttribute(attribute)
        );
      } catch {
        return false;
      }
    };
  }
});

// src/components/context-menu.tsx
var _tmpl$28, _tmpl$29, _tmpl$35, _tmpl$44, ContextMenu;
var init_context_menu = __esm({
  "src/components/context-menu.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_constants();
    init_cn();
    init_arrow();
    init_tag_badge();
    init_bottom_section();
    init_format_shortcut();
    init_get_tag_display();
    init_resolve_action_enabled();
    init_is_event_from_overlay();
    _tmpl$28 = /* @__PURE__ */ template(`<div class="flex flex-col w-[calc(100%+16px)] -mx-2 -my-1.5">`);
    _tmpl$29 = /* @__PURE__ */ template(`<div data-react-grab-ignore-events data-react-grab-context-menu class="fixed font-sans text-[13px] antialiased filter-[drop-shadow(0px_1px_2px_#51515140)] select-none transition-opacity duration-150 ease-out"style=z-index:2147483647;pointer-events:auto><div><div class="contain-layout shrink-0 flex items-center gap-1 pt-1.5 pb-1 w-fit h-fit px-2">`);
    _tmpl$35 = /* @__PURE__ */ template(`<span class="text-[11px] font-sans text-black/50 ml-4">`);
    _tmpl$44 = /* @__PURE__ */ template(`<button data-react-grab-ignore-events class="contain-layout flex items-center justify-between w-full px-2 py-1 cursor-pointer transition-colors hover:bg-black/5 text-left border-none bg-transparent disabled:opacity-40 disabled:cursor-default disabled:hover:bg-transparent"><span class="text-[13px] leading-4 font-sans font-medium text-black">`);
    ContextMenu = (props) => {
      let containerRef;
      const [measuredWidth, setMeasuredWidth] = createSignal(0);
      const [measuredHeight, setMeasuredHeight] = createSignal(0);
      const isVisible = () => props.position !== null;
      const tagDisplayResult = () => getTagDisplay({
        tagName: props.tagName,
        componentName: props.componentName
      });
      const measureContainer = () => {
        if (containerRef) {
          const rect = containerRef.getBoundingClientRect();
          setMeasuredWidth(rect.width);
          setMeasuredHeight(rect.height);
        }
      };
      createEffect(() => {
        if (isVisible()) {
          requestAnimationFrame(measureContainer);
        }
      });
      const computedPosition = () => {
        const bounds = props.selectionBounds;
        const clickPosition = props.position;
        const labelWidth = measuredWidth();
        const labelHeight = measuredHeight();
        if (labelWidth === 0 || labelHeight === 0 || !bounds || !clickPosition) {
          return {
            left: -9999,
            top: -9999,
            arrowLeft: 0,
            arrowPosition: "bottom"
          };
        }
        const cursorX = clickPosition.x ?? bounds.x + bounds.width / 2;
        const positionLeft = cursorX - labelWidth / 2;
        const arrowLeft = labelWidth / 2;
        const positionBelow = bounds.y + bounds.height + ARROW_HEIGHT_PX + LABEL_GAP_PX;
        const positionAbove = bounds.y - labelHeight - ARROW_HEIGHT_PX - LABEL_GAP_PX;
        const wouldOverflowBottom = positionBelow + labelHeight > window.innerHeight;
        const hasSpaceAbove = positionAbove >= 0;
        const shouldFlipAbove = wouldOverflowBottom && hasSpaceAbove;
        const positionTop = shouldFlipAbove ? positionAbove : positionBelow;
        const arrowPosition = shouldFlipAbove ? "top" : "bottom";
        return {
          left: positionLeft,
          top: positionTop,
          arrowLeft,
          arrowPosition
        };
      };
      const menuItems = () => {
        const pluginActions = props.actions ?? [];
        const context = props.actionContext;
        return pluginActions.map((action) => ({
          label: action.label,
          action: () => {
            if (context) {
              action.onAction(context);
            }
          },
          enabled: resolveActionEnabled(action, context),
          shortcut: action.shortcut
        }));
      };
      const handleMenuEvent = (event) => {
        if (event.type === "contextmenu") {
          event.preventDefault();
        }
        event.stopImmediatePropagation();
      };
      const handleAction = (item, event) => {
        event.stopPropagation();
        if (item.enabled) {
          item.action();
          props.onHide();
        }
      };
      onMount(() => {
        measureContainer();
        const handleClickOutside = (event) => {
          if (!isVisible() || isEventFromOverlay(event, "data-react-grab-ignore-events")) return;
          if (event instanceof MouseEvent && event.button === 2) return;
          props.onDismiss();
        };
        const handleKeyDown = (event) => {
          if (!isVisible()) return;
          const isEscape = event.code === "Escape";
          const isEnter = event.key === "Enter";
          const hasModifierKey = event.metaKey || event.ctrlKey;
          const keyLower = event.key.toLowerCase();
          const pluginActions = props.actions ?? [];
          const context = props.actionContext;
          const runActionIfAllowed = (action) => {
            if (!context) return false;
            if (!resolveActionEnabled(action, context)) return false;
            event.preventDefault();
            event.stopPropagation();
            action.onAction(context);
            props.onHide();
            return true;
          };
          if (isEscape) {
            event.preventDefault();
            event.stopPropagation();
            props.onDismiss();
            return;
          }
          if (isEnter) {
            const enterAction = pluginActions.find((action) => action.shortcut === "Enter");
            if (enterAction) {
              runActionIfAllowed(enterAction);
            }
            return;
          }
          if (!hasModifierKey) return;
          if (event.repeat) return;
          const modifierAction = pluginActions.find((action) => action.shortcut && action.shortcut !== "Enter" && keyLower === action.shortcut.toLowerCase());
          if (modifierAction) {
            runActionIfAllowed(modifierAction);
          }
        };
        const frameId = requestAnimationFrame(() => {
          window.addEventListener("mousedown", handleClickOutside, {
            capture: true
          });
          window.addEventListener("touchstart", handleClickOutside, {
            capture: true
          });
        });
        window.addEventListener("keydown", handleKeyDown, {
          capture: true
        });
        onCleanup(() => {
          cancelAnimationFrame(frameId);
          window.removeEventListener("mousedown", handleClickOutside, {
            capture: true
          });
          window.removeEventListener("touchstart", handleClickOutside, {
            capture: true
          });
          window.removeEventListener("keydown", handleKeyDown, {
            capture: true
          });
        });
      });
      return createComponent(Show, {
        get when() {
          return isVisible();
        },
        get children() {
          var _el$ = _tmpl$29(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
          _el$.$$contextmenu = handleMenuEvent;
          _el$.$$click = handleMenuEvent;
          _el$.$$mousedown = handleMenuEvent;
          _el$.$$pointerdown = handleMenuEvent;
          var _ref$ = containerRef;
          typeof _ref$ === "function" ? use(_ref$, _el$) : containerRef = _el$;
          insert(_el$, createComponent(Arrow, {
            get position() {
              return computedPosition().arrowPosition;
            },
            leftPercent: 0,
            get leftOffsetPx() {
              return computedPosition().arrowLeft;
            }
          }), _el$2);
          insert(_el$3, createComponent(TagBadge, {
            get tagName() {
              return tagDisplayResult().tagName;
            },
            get componentName() {
              return tagDisplayResult().componentName;
            },
            get isClickable() {
              return props.hasFilePath;
            },
            onClick: (event) => {
              event.stopPropagation();
              if (props.hasFilePath && props.actionContext) {
                const openAction = props.actions?.find((action) => action.id === "open");
                openAction?.onAction(props.actionContext);
              }
            },
            shrink: true,
            get forceShowIcon() {
              return props.hasFilePath;
            }
          }));
          insert(_el$2, createComponent(BottomSection, {
            get children() {
              var _el$4 = _tmpl$28();
              insert(_el$4, createComponent(For, {
                get each() {
                  return menuItems();
                },
                children: (item) => (() => {
                  var _el$5 = _tmpl$44(), _el$6 = _el$5.firstChild;
                  _el$5.$$click = (event) => handleAction(item, event);
                  _el$5.$$pointerdown = (event) => event.stopPropagation();
                  insert(_el$6, () => item.label);
                  insert(_el$5, createComponent(Show, {
                    get when() {
                      return item.shortcut;
                    },
                    get children() {
                      var _el$7 = _tmpl$35();
                      insert(_el$7, () => formatShortcut(item.shortcut));
                      return _el$7;
                    }
                  }), null);
                  createRenderEffect((_p$) => {
                    var _v$4 = item.label.toLowerCase(), _v$5 = !item.enabled;
                    _v$4 !== _p$.e && setAttribute(_el$5, "data-react-grab-menu-item", _p$.e = _v$4);
                    _v$5 !== _p$.t && (_el$5.disabled = _p$.t = _v$5);
                    return _p$;
                  }, {
                    e: void 0,
                    t: void 0
                  });
                  return _el$5;
                })()
              }));
              return _el$4;
            }
          }), null);
          createRenderEffect((_p$) => {
            var _v$ = `${computedPosition().top}px`, _v$2 = `${computedPosition().left}px`, _v$3 = cn("contain-layout flex flex-col justify-center items-start rounded-[10px] antialiased w-fit h-fit min-w-[100px] [font-synthesis:none] [corner-shape:superellipse(1.25)]", PANEL_STYLES);
            _v$ !== _p$.e && setStyleProperty(_el$, "top", _p$.e = _v$);
            _v$2 !== _p$.t && setStyleProperty(_el$, "left", _p$.t = _v$2);
            _v$3 !== _p$.a && className(_el$2, _p$.a = _v$3);
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          });
          return _el$;
        }
      });
    };
    delegateEvents(["pointerdown", "mousedown", "click", "contextmenu"]);
  }
});

// src/components/renderer.tsx
var _tmpl$30, ReactGrabRenderer;
var init_renderer = __esm({
  "src/components/renderer.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_web();
    init_web();
    init_web();
    init_solid();
    init_constants();
    init_build_open_file_url();
    init_overlay_canvas();
    init_selection_label();
    init_toolbar();
    init_context_menu();
    _tmpl$30 = /* @__PURE__ */ template(`<div style="position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;transition:opacity 100ms ease-out;will-change:opacity;contain:strict;transform:translateZ(0)">`);
    ReactGrabRenderer = (props) => {
      return [createComponent(OverlayCanvas, {
        get crosshairVisible() {
          return props.crosshairVisible;
        },
        get mouseX() {
          return props.mouseX;
        },
        get mouseY() {
          return props.mouseY;
        },
        get selectionVisible() {
          return props.selectionVisible;
        },
        get selectionBounds() {
          return props.selectionBounds;
        },
        get selectionBoundsMultiple() {
          return props.selectionBoundsMultiple;
        },
        get selectionShouldSnap() {
          return props.selectionShouldSnap;
        },
        get selectionIsFading() {
          return props.selectionLabelStatus === "fading";
        },
        get dragVisible() {
          return props.dragVisible;
        },
        get dragBounds() {
          return props.dragBounds;
        },
        get grabbedBoxes() {
          return props.grabbedBoxes;
        },
        get agentSessions() {
          return props.agentSessions;
        },
        get labelInstances() {
          return props.labelInstances;
        }
      }), (() => {
        var _el$ = _tmpl$30();
        setStyleProperty(_el$, "z-index", Z_INDEX_OVERLAY_CANVAS);
        setStyleProperty(_el$, "box-shadow", `inset 0 0 ${FROZEN_GLOW_EDGE_PX}px ${FROZEN_GLOW_COLOR}`);
        createRenderEffect((_$p) => setStyleProperty(_el$, "opacity", props.isFrozen ? 1 : 0));
        return _el$;
      })(), createComponent(Index, {
        get each() {
          return memo(() => !!props.agentSessions)() ? Array.from(props.agentSessions.values()) : [];
        },
        children: (session) => createComponent(Show, {
          get when() {
            return session().selectionBounds.length > 0;
          },
          get children() {
            return createComponent(SelectionLabel, {
              get tagName() {
                return session().tagName;
              },
              get componentName() {
                return session().componentName;
              },
              get selectionBounds() {
                return session().selectionBounds[0];
              },
              get mouseX() {
                return session().position.x;
              },
              visible: true,
              hasAgent: true,
              isAgentConnected: true,
              get status() {
                if (session().isFading) return "fading";
                if (session().isStreaming) return "copying";
                return "copied";
              },
              get statusText() {
                return session().lastStatus || "Thinking\u2026";
              },
              get inputValue() {
                return session().context.prompt;
              },
              get previousPrompt() {
                return session().context.prompt;
              },
              get supportsUndo() {
                return props.supportsUndo;
              },
              get supportsFollowUp() {
                return props.supportsFollowUp;
              },
              get dismissButtonText() {
                return props.dismissButtonText;
              },
              onAbort: () => props.onRequestAbortSession?.(session().id),
              get onDismiss() {
                return session().isStreaming ? void 0 : () => props.onDismissSession?.(session().id);
              },
              get onUndo() {
                return session().isStreaming ? void 0 : () => props.onUndoSession?.(session().id);
              },
              get onFollowUpSubmit() {
                return session().isStreaming ? void 0 : (prompt) => props.onFollowUpSubmitSession?.(session().id, prompt);
              },
              get error() {
                return session().error;
              },
              onAcknowledgeError: () => props.onAcknowledgeSessionError?.(session().id),
              onRetry: () => props.onRetrySession?.(session().id),
              get isPendingAbort() {
                return memo(() => !!session().isStreaming)() && props.pendingAbortSessionId === session().id;
              },
              onConfirmAbort: () => props.onAbortSession?.(session().id, true),
              onCancelAbort: () => props.onAbortSession?.(session().id, false),
              onShowContextMenu: void 0
            });
          }
        })
      }), createComponent(Show, {
        get when() {
          return memo(() => !!props.selectionLabelVisible)() && props.selectionBounds;
        },
        get children() {
          return createComponent(SelectionLabel, {
            get tagName() {
              return props.selectionTagName;
            },
            get componentName() {
              return props.selectionComponentName;
            },
            get elementsCount() {
              return props.selectionElementsCount;
            },
            get selectionBounds() {
              return props.selectionBounds;
            },
            get mouseX() {
              return props.mouseX;
            },
            get visible() {
              return props.selectionLabelVisible;
            },
            get isPromptMode() {
              return props.isPromptMode;
            },
            get inputValue() {
              return props.inputValue;
            },
            get replyToPrompt() {
              return props.replyToPrompt;
            },
            get hasAgent() {
              return props.hasAgent;
            },
            get isAgentConnected() {
              return props.isAgentConnected;
            },
            get status() {
              return props.selectionLabelStatus;
            },
            get actionCycleState() {
              return props.selectionActionCycleState;
            },
            get filePath() {
              return props.selectionFilePath;
            },
            get lineNumber() {
              return props.selectionLineNumber;
            },
            get onInputChange() {
              return props.onInputChange;
            },
            get onSubmit() {
              return props.onInputSubmit;
            },
            get onCancel() {
              return props.onInputCancel;
            },
            get onToggleExpand() {
              return props.onToggleExpand;
            },
            get isPendingDismiss() {
              return props.isPendingDismiss;
            },
            get onConfirmDismiss() {
              return props.onConfirmDismiss;
            },
            get onCancelDismiss() {
              return props.onCancelDismiss;
            },
            onOpen: () => {
              if (props.selectionFilePath) {
                const openFileUrl = buildOpenFileUrl(props.selectionFilePath, props.selectionLineNumber);
                window.open(openFileUrl, "_blank");
              }
            },
            get isContextMenuOpen() {
              return props.contextMenuPosition !== null;
            }
          });
        }
      }), createComponent(Index, {
        get each() {
          return props.labelInstances ?? [];
        },
        children: (instance) => createComponent(SelectionLabel, {
          get tagName() {
            return instance().tagName;
          },
          get componentName() {
            return instance().componentName;
          },
          get selectionBounds() {
            return instance().bounds;
          },
          get mouseX() {
            return instance().mouseX;
          },
          visible: true,
          get status() {
            return instance().status;
          },
          get error() {
            return instance().errorMessage;
          },
          get onShowContextMenu() {
            return (instance().status === "copied" || instance().status === "fading") && instance().element && (document.body ?? document.documentElement).contains(instance().element) ? () => props.onShowContextMenuInstance?.(instance().id) : void 0;
          },
          onHoverChange: (isHovered) => props.onLabelInstanceHoverChange?.(instance().id, isHovered)
        })
      }), createComponent(Show, {
        get when() {
          return props.toolbarVisible !== false;
        },
        get children() {
          return createComponent(Toolbar, {
            get isActive() {
              return props.isActive;
            },
            get isCommentMode() {
              return props.isCommentMode;
            },
            get isContextMenuOpen() {
              return props.contextMenuPosition !== null;
            },
            get onToggle() {
              return props.onToggleActive;
            },
            get onComment() {
              return props.onComment;
            },
            get enabled() {
              return props.enabled;
            },
            get onToggleEnabled() {
              return props.onToggleEnabled;
            },
            get shakeCount() {
              return props.shakeCount;
            },
            get onStateChange() {
              return props.onToolbarStateChange;
            },
            get onSubscribeToStateChanges() {
              return props.onSubscribeToToolbarStateChanges;
            },
            get onSelectHoverChange() {
              return props.onToolbarSelectHoverChange;
            }
          });
        }
      }), createComponent(ContextMenu, {
        get position() {
          return props.contextMenuPosition ?? null;
        },
        get selectionBounds() {
          return props.contextMenuBounds ?? null;
        },
        get tagName() {
          return props.contextMenuTagName;
        },
        get componentName() {
          return props.contextMenuComponentName;
        },
        get hasFilePath() {
          return props.contextMenuHasFilePath ?? false;
        },
        get actions() {
          return props.actions;
        },
        get actionContext() {
          return props.actionContext;
        },
        get onDismiss() {
          return props.onContextMenuDismiss ?? (() => {
          });
        },
        get onHide() {
          return props.onContextMenuHide ?? (() => {
          });
        }
      })];
    };
  }
});

// ../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/source.js
var g3, _3, v2, y2, b2, x2, S2, ee2, C2, w2, te2, T2, ne2, E, re2, ie2, D, ae2, oe2, se2, O2, k2, A2, j2, M2, fe2, I2, L2, pe2, me2, R, z2, B2, he2, V2, H2, ge2, _e2, ve2, U2, W2, G2, K, q, ye2, J, Y, be2, X2, Z, xe2, Se2, Ce2, we2, Te2, Ee2, De2, Oe, Q, $2, je2, Me2, Ne2, Pe2;
var init_source = __esm({
  "../../node_modules/.pnpm/bippy@0.5.30_@types+react@19.2.11_react@19.2.1/node_modules/bippy/dist/source.js"() {
    "use strict";
    init_rdt_hook_BvBEbB9n();
    init_core_DrcMh8Kr();
    g3 = Object.create;
    _3 = Object.defineProperty;
    v2 = Object.getOwnPropertyDescriptor;
    y2 = Object.getOwnPropertyNames;
    b2 = Object.getPrototypeOf;
    x2 = Object.prototype.hasOwnProperty;
    S2 = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
    ee2 = (e2, t2, n2, r3) => {
      if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (var i2 = y2(t2), a3 = 0, o3 = i2.length, s3; a3 < o3; a3++) s3 = i2[a3], !x2.call(e2, s3) && s3 !== n2 && _3(e2, s3, { get: ((e3) => t2[e3]).bind(null, s3), enumerable: !(r3 = v2(t2, s3)) || r3.enumerable });
      return e2;
    };
    C2 = (e2, t2, n2) => (n2 = e2 == null ? {} : g3(b2(e2)), ee2(t2 || !e2 || !e2.__esModule ? _3(n2, `default`, { value: e2, enumerable: true }) : n2, e2));
    w2 = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;
    te2 = [`rsc://`, `file:///`, `webpack://`, `webpack-internal://`, `node:`, `turbopack://`, `metro://`, `/app-pages-browser/`];
    T2 = `about://React/`;
    ne2 = [`<anonymous>`, `eval`, ``];
    E = /\.(jsx|tsx|ts|js)$/;
    re2 = /(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i;
    ie2 = /^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/;
    D = `(at Server)`;
    ae2 = /(^|@)\S+:\d+/;
    oe2 = /^\s*at .*(\S+:\d+|\(native\))/m;
    se2 = /^(eval@)?(\[native code\])?$/;
    O2 = (e2, t2) => {
      if (t2?.includeInElement !== false) {
        let n2 = e2.split(`
`), r3 = [];
        for (let e3 of n2) if (/^\s*at\s+/.test(e3)) {
          let t3 = j2(e3, void 0)[0];
          t3 && r3.push(t3);
        } else if (/^\s*in\s+/.test(e3)) {
          let t3 = e3.replace(/^\s*in\s+/, ``).replace(/\s*\(at .*\)$/, ``);
          r3.push({ functionName: t3, source: e3 });
        } else if (e3.match(ae2)) {
          let t3 = M2(e3, void 0)[0];
          t3 && r3.push(t3);
        }
        return A2(r3, t2);
      }
      return e2.match(oe2) ? j2(e2, t2) : M2(e2, t2);
    };
    k2 = (e2) => {
      if (!e2.includes(`:`)) return [e2, void 0, void 0];
      let t2 = e2.startsWith(`(`) && /:\d+\)$/.test(e2), n2 = t2 ? e2.slice(1, -1) : e2, r3 = /(.+?)(?::(\d+))?(?::(\d+))?$/, i2 = r3.exec(n2);
      return i2 ? [i2[1], i2[2] || void 0, i2[3] || void 0] : [n2, void 0, void 0];
    };
    A2 = (e2, t2) => t2 && t2.slice != null ? Array.isArray(t2.slice) ? e2.slice(t2.slice[0], t2.slice[1]) : e2.slice(0, t2.slice) : e2;
    j2 = (e2, t2) => {
      let n2 = A2(e2.split(`
`).filter((e3) => !!e3.match(oe2)), t2);
      return n2.map((e3) => {
        let t3 = e3;
        t3.includes(`(eval `) && (t3 = t3.replace(/eval code/g, `eval`).replace(/(\(eval at [^()]*)|(,.*$)/g, ``));
        let n3 = t3.replace(/^\s+/, ``).replace(/\(eval code/g, `(`).replace(/^.*?\s+/, ``), r3 = n3.match(/ (\(.+\)$)/);
        n3 = r3 ? n3.replace(r3[0], ``) : n3;
        let i2 = k2(r3 ? r3[1] : n3), a3 = r3 && n3 || void 0, o3 = [`eval`, `<anonymous>`].includes(i2[0]) ? void 0 : i2[0];
        return { functionName: a3, fileName: o3, lineNumber: i2[1] ? +i2[1] : void 0, columnNumber: i2[2] ? +i2[2] : void 0, source: t3 };
      });
    };
    M2 = (e2, t2) => {
      let n2 = A2(e2.split(`
`).filter((e3) => !e3.match(se2)), t2);
      return n2.map((e3) => {
        let t3 = e3;
        if (t3.includes(` > eval`) && (t3 = t3.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, `:$1`)), !t3.includes(`@`) && !t3.includes(`:`)) return { functionName: t3 };
        {
          let e4 = /(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/, n3 = t3.match(e4), r3 = n3 && n3[1] ? n3[1] : void 0, i2 = k2(t3.replace(e4, ``));
          return { functionName: r3, fileName: i2[0], lineNumber: i2[1] ? +i2[1] : void 0, columnNumber: i2[2] ? +i2[2] : void 0, source: t3 };
        }
      });
    };
    fe2 = S2((exports, t2) => {
      (function(n2, r3) {
        typeof exports == `object` && t2 !== void 0 ? r3(exports) : typeof define == `function` && define.amd ? define([`exports`], r3) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, r3(n2.sourcemapCodec = {}));
      })(void 0, function(e2) {
        "use strict";
        let t3 = 44, n2 = 59, r3 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, i2 = new Uint8Array(64), a3 = new Uint8Array(128);
        for (let e3 = 0; e3 < r3.length; e3++) {
          let t4 = r3.charCodeAt(e3);
          i2[e3] = t4, a3[t4] = e3;
        }
        function o3(e3, t4) {
          let n3 = 0, r4 = 0, i3 = 0;
          do {
            let t5 = e3.next();
            i3 = a3[t5], n3 |= (i3 & 31) << r4, r4 += 5;
          } while (i3 & 32);
          let o4 = n3 & 1;
          return n3 >>>= 1, o4 && (n3 = -2147483648 | -n3), t4 + n3;
        }
        function s3(e3, t4, n3) {
          let r4 = t4 - n3;
          r4 = r4 < 0 ? -r4 << 1 | 1 : r4 << 1;
          do {
            let t5 = r4 & 31;
            r4 >>>= 5, r4 > 0 && (t5 |= 32), e3.write(i2[t5]);
          } while (r4 > 0);
          return t4;
        }
        function c3(e3, n3) {
          return e3.pos >= n3 ? false : e3.peek() !== t3;
        }
        let l3 = 1024 * 16, u3 = typeof TextDecoder < `u` ? new TextDecoder() : typeof Buffer < `u` ? { decode(e3) {
          let t4 = Buffer.from(e3.buffer, e3.byteOffset, e3.byteLength);
          return t4.toString();
        } } : { decode(e3) {
          let t4 = ``;
          for (let n3 = 0; n3 < e3.length; n3++) t4 += String.fromCharCode(e3[n3]);
          return t4;
        } };
        class d3 {
          constructor() {
            this.pos = 0, this.out = ``, this.buffer = new Uint8Array(l3);
          }
          write(e3) {
            let { buffer: t4 } = this;
            t4[this.pos++] = e3, this.pos === l3 && (this.out += u3.decode(t4), this.pos = 0);
          }
          flush() {
            let { buffer: e3, out: t4, pos: n3 } = this;
            return n3 > 0 ? t4 + u3.decode(e3.subarray(0, n3)) : t4;
          }
        }
        class f3 {
          constructor(e3) {
            this.pos = 0, this.buffer = e3;
          }
          next() {
            return this.buffer.charCodeAt(this.pos++);
          }
          peek() {
            return this.buffer.charCodeAt(this.pos);
          }
          indexOf(e3) {
            let { buffer: t4, pos: n3 } = this, r4 = t4.indexOf(e3, n3);
            return r4 === -1 ? t4.length : r4;
          }
        }
        let p3 = [];
        function m3(e3) {
          let { length: t4 } = e3, n3 = new f3(e3), r4 = [], i3 = [], a4 = 0;
          for (; n3.pos < t4; n3.pos++) {
            a4 = o3(n3, a4);
            let e4 = o3(n3, 0);
            if (!c3(n3, t4)) {
              let t5 = i3.pop();
              t5[2] = a4, t5[3] = e4;
              continue;
            }
            let s4 = o3(n3, 0), l4 = o3(n3, 0), u4 = l4 & 1, d4 = u4 ? [a4, e4, 0, 0, s4, o3(n3, 0)] : [a4, e4, 0, 0, s4], f4 = p3;
            if (c3(n3, t4)) {
              f4 = [];
              do {
                let e5 = o3(n3, 0);
                f4.push(e5);
              } while (c3(n3, t4));
            }
            d4.vars = f4, r4.push(d4), i3.push(d4);
          }
          return r4;
        }
        function h3(e3) {
          let t4 = new d3();
          for (let n3 = 0; n3 < e3.length; ) n3 = g4(e3, n3, t4, [0]);
          return t4.flush();
        }
        function g4(e3, n3, r4, i3) {
          let a4 = e3[n3], { 0: o4, 1: c4, 2: l4, 3: u4, 4: d4, vars: f4 } = a4;
          n3 > 0 && r4.write(t3), i3[0] = s3(r4, o4, i3[0]), s3(r4, c4, 0), s3(r4, d4, 0);
          let p4 = a4.length === 6 ? 1 : 0;
          s3(r4, p4, 0), a4.length === 6 && s3(r4, a4[5], 0);
          for (let e4 of f4) s3(r4, e4, 0);
          for (n3++; n3 < e3.length; ) {
            let t4 = e3[n3], { 0: a5, 1: o5 } = t4;
            if (a5 > l4 || a5 === l4 && o5 >= u4) break;
            n3 = g4(e3, n3, r4, i3);
          }
          return r4.write(t3), i3[0] = s3(r4, l4, i3[0]), s3(r4, u4, 0), n3;
        }
        function _4(e3) {
          let { length: t4 } = e3, n3 = new f3(e3), r4 = [], i3 = [], a4 = 0, s4 = 0, l4 = 0, u4 = 0, d4 = 0, m4 = 0, h4 = 0, g5 = 0;
          do {
            let e4 = n3.indexOf(`;`), t5 = 0;
            for (; n3.pos < e4; n3.pos++) {
              if (t5 = o3(n3, t5), !c3(n3, e4)) {
                let e5 = i3.pop();
                e5[2] = a4, e5[3] = t5;
                continue;
              }
              let f4 = o3(n3, 0), _5 = f4 & 1, v4 = f4 & 2, y4 = f4 & 4, b4 = null, x4 = p3, S4;
              if (_5) {
                let e5 = o3(n3, s4);
                l4 = o3(n3, s4 === e5 ? l4 : 0), s4 = e5, S4 = [a4, t5, 0, 0, e5, l4];
              } else S4 = [a4, t5, 0, 0];
              if (S4.isScope = !!y4, v4) {
                let e5 = u4, t6 = d4;
                u4 = o3(n3, u4);
                let r5 = e5 === u4;
                d4 = o3(n3, r5 ? d4 : 0), m4 = o3(n3, r5 && t6 === d4 ? m4 : 0), b4 = [u4, d4, m4];
              }
              if (S4.callsite = b4, c3(n3, e4)) {
                x4 = [];
                do {
                  h4 = a4, g5 = t5;
                  let e5 = o3(n3, 0), r5;
                  if (e5 < -1) {
                    r5 = [[o3(n3, 0)]];
                    for (let t6 = -1; t6 > e5; t6--) {
                      let e6 = h4;
                      h4 = o3(n3, h4), g5 = o3(n3, h4 === e6 ? g5 : 0);
                      let t7 = o3(n3, 0);
                      r5.push([t7, h4, g5]);
                    }
                  } else r5 = [[e5]];
                  x4.push(r5);
                } while (c3(n3, e4));
              }
              S4.bindings = x4, r4.push(S4), i3.push(S4);
            }
            a4++, n3.pos = e4 + 1;
          } while (n3.pos < t4);
          return r4;
        }
        function v3(e3) {
          if (e3.length === 0) return ``;
          let t4 = new d3();
          for (let n3 = 0; n3 < e3.length; ) n3 = y3(e3, n3, t4, [0, 0, 0, 0, 0, 0, 0]);
          return t4.flush();
        }
        function y3(e3, n3, r4, i3) {
          let a4 = e3[n3], { 0: o4, 1: c4, 2: l4, 3: u4, isScope: d4, callsite: f4, bindings: p4 } = a4;
          i3[0] < o4 ? (b3(r4, i3[0], o4), i3[0] = o4, i3[1] = 0) : n3 > 0 && r4.write(t3), i3[1] = s3(r4, a4[1], i3[1]);
          let m4 = (a4.length === 6 ? 1 : 0) | (f4 ? 2 : 0) | (d4 ? 4 : 0);
          if (s3(r4, m4, 0), a4.length === 6) {
            let { 4: e4, 5: t4 } = a4;
            e4 !== i3[2] && (i3[3] = 0), i3[2] = s3(r4, e4, i3[2]), i3[3] = s3(r4, t4, i3[3]);
          }
          if (f4) {
            let { 0: e4, 1: t4, 2: n4 } = a4.callsite;
            e4 === i3[4] ? t4 !== i3[5] && (i3[6] = 0) : (i3[5] = 0, i3[6] = 0), i3[4] = s3(r4, e4, i3[4]), i3[5] = s3(r4, t4, i3[5]), i3[6] = s3(r4, n4, i3[6]);
          }
          if (p4) for (let e4 of p4) {
            e4.length > 1 && s3(r4, -e4.length, 0);
            let t4 = e4[0][0];
            s3(r4, t4, 0);
            let n4 = o4, i4 = c4;
            for (let t5 = 1; t5 < e4.length; t5++) {
              let a5 = e4[t5];
              n4 = s3(r4, a5[1], n4), i4 = s3(r4, a5[2], i4), s3(r4, a5[0], 0);
            }
          }
          for (n3++; n3 < e3.length; ) {
            let t4 = e3[n3], { 0: a5, 1: o5 } = t4;
            if (a5 > l4 || a5 === l4 && o5 >= u4) break;
            n3 = y3(e3, n3, r4, i3);
          }
          return i3[0] < l4 ? (b3(r4, i3[0], l4), i3[0] = l4, i3[1] = 0) : r4.write(t3), i3[1] = s3(r4, u4, i3[1]), n3;
        }
        function b3(e3, t4, r4) {
          do
            e3.write(n2);
          while (++t4 < r4);
        }
        function x3(e3) {
          let { length: t4 } = e3, n3 = new f3(e3), r4 = [], i3 = 0, a4 = 0, s4 = 0, l4 = 0, u4 = 0;
          do {
            let e4 = n3.indexOf(`;`), t5 = [], d4 = true, f4 = 0;
            for (i3 = 0; n3.pos < e4; ) {
              let r5;
              i3 = o3(n3, i3), i3 < f4 && (d4 = false), f4 = i3, c3(n3, e4) ? (a4 = o3(n3, a4), s4 = o3(n3, s4), l4 = o3(n3, l4), c3(n3, e4) ? (u4 = o3(n3, u4), r5 = [i3, a4, s4, l4, u4]) : r5 = [i3, a4, s4, l4]) : r5 = [i3], t5.push(r5), n3.pos++;
            }
            d4 || S3(t5), r4.push(t5), n3.pos = e4 + 1;
          } while (n3.pos <= t4);
          return r4;
        }
        function S3(e3) {
          e3.sort(ee3);
        }
        function ee3(e3, t4) {
          return e3[0] - t4[0];
        }
        function C3(e3) {
          let r4 = new d3(), i3 = 0, a4 = 0, o4 = 0, c4 = 0;
          for (let l4 = 0; l4 < e3.length; l4++) {
            let u4 = e3[l4];
            if (l4 > 0 && r4.write(n2), u4.length === 0) continue;
            let d4 = 0;
            for (let e4 = 0; e4 < u4.length; e4++) {
              let n3 = u4[e4];
              e4 > 0 && r4.write(t3), d4 = s3(r4, n3[0], d4), n3.length !== 1 && (i3 = s3(r4, n3[1], i3), a4 = s3(r4, n3[2], a4), o4 = s3(r4, n3[3], o4), n3.length !== 4 && (c4 = s3(r4, n3[4], c4)));
            }
          }
          return r4.flush();
        }
        e2.decode = x3, e2.decodeGeneratedRanges = _4, e2.decodeOriginalScopes = m3, e2.encode = C3, e2.encodeGeneratedRanges = v3, e2.encodeOriginalScopes = h3, Object.defineProperty(e2, `__esModule`, { value: true });
      });
    });
    I2 = C2(fe2(), 1);
    L2 = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;
    pe2 = /^data:application\/json[^,]+base64,/;
    me2 = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/;
    R = typeof WeakRef < `u`;
    z2 = /* @__PURE__ */ new Map();
    B2 = /* @__PURE__ */ new Map();
    he2 = (e2) => R && e2 instanceof WeakRef;
    V2 = (e2, t2, n2, r3) => {
      if (n2 < 0 || n2 >= e2.length) return null;
      let i2 = e2[n2];
      if (!i2 || i2.length === 0) return null;
      let a3 = null;
      for (let e3 of i2) if (e3[0] <= r3) a3 = e3;
      else break;
      if (!a3 || a3.length < 4) return null;
      let [, o3, s3, c3] = a3;
      if (o3 === void 0 || s3 === void 0 || c3 === void 0) return null;
      let l3 = t2[o3];
      return l3 ? { columnNumber: c3, fileName: l3, lineNumber: s3 + 1 } : null;
    };
    H2 = (e2, t2, n2) => {
      if (e2.sections) {
        let r3 = null;
        for (let i3 of e2.sections) if (t2 > i3.offset.line || t2 === i3.offset.line && n2 >= i3.offset.column) r3 = i3;
        else break;
        if (!r3) return null;
        let i2 = t2 - r3.offset.line, a3 = t2 === r3.offset.line ? n2 - r3.offset.column : n2;
        return V2(r3.map.mappings, r3.map.sources, i2, a3);
      }
      return V2(e2.mappings, e2.sources, t2 - 1, n2);
    };
    ge2 = (e2, t2) => {
      let n2 = t2.split(`
`), r3;
      for (let e3 = n2.length - 1; e3 >= 0 && !r3; e3--) {
        let t3 = n2[e3].match(me2);
        t3 && (r3 = t3[1] || t3[2]);
      }
      if (!r3) return null;
      let i2 = L2.test(r3);
      if (!(pe2.test(r3) || i2 || r3.startsWith(`/`))) {
        let t3 = e2.split(`/`);
        t3[t3.length - 1] = r3, r3 = t3.join(`/`);
      }
      return r3;
    };
    _e2 = (e2) => ({ file: e2.file, mappings: (0, I2.decode)(e2.mappings), names: e2.names, sourceRoot: e2.sourceRoot, sources: e2.sources, sourcesContent: e2.sourcesContent, version: 3 });
    ve2 = (e2) => {
      let t2 = e2.sections.map(({ map: e3, offset: t3 }) => ({ map: { ...e3, mappings: (0, I2.decode)(e3.mappings) }, offset: t3 })), n2 = /* @__PURE__ */ new Set();
      for (let e3 of t2) for (let t3 of e3.map.sources) n2.add(t3);
      return { file: e2.file, mappings: [], names: [], sections: t2, sourceRoot: void 0, sources: Array.from(n2), sourcesContent: void 0, version: 3 };
    };
    U2 = (e2) => {
      if (!e2) return false;
      let t2 = e2.trim();
      if (!t2) return false;
      let n2 = t2.match(L2);
      if (!n2) return true;
      let r3 = n2[0].toLowerCase();
      return r3 === `http:` || r3 === `https:`;
    };
    W2 = async (e2, t2 = fetch) => {
      if (!U2(e2)) return null;
      let n2;
      try {
        let r4 = await t2(e2);
        if (!r4.ok) return null;
        n2 = await r4.text();
      } catch {
        return null;
      }
      if (!n2) return null;
      let r3 = ge2(e2, n2);
      if (!r3 || !U2(r3)) return null;
      try {
        let e3 = await t2(r3);
        if (!e3.ok) return null;
        let n3 = await e3.json();
        return `sections` in n3 ? ve2(n3) : _e2(n3);
      } catch {
        return null;
      }
    };
    G2 = async (e2, t2 = true, n2) => {
      if (t2 && z2.has(e2)) {
        let t3 = z2.get(e2);
        if (t3 == null) return null;
        if (he2(t3)) {
          let n3 = t3.deref();
          if (n3) return n3;
          z2.delete(e2);
        } else return t3;
      }
      if (t2 && B2.has(e2)) return B2.get(e2);
      let r3 = W2(e2, n2);
      t2 && B2.set(e2, r3);
      let i2 = await r3;
      return t2 && B2.delete(e2), t2 && (i2 === null ? z2.set(e2, null) : z2.set(e2, R ? new WeakRef(i2) : i2)), i2;
    };
    K = async (e2, t2 = true, n2) => await Promise.all(e2.map(async (e3) => {
      if (!e3.fileName) return e3;
      let r3 = await G2(e3.fileName, t2, n2);
      if (!r3 || typeof e3.lineNumber != `number` || typeof e3.columnNumber != `number`) return e3;
      let i2 = H2(r3, e3.lineNumber, e3.columnNumber);
      return i2 ? { ...e3, source: i2.fileName && e3.source ? e3.source.replace(e3.fileName, i2.fileName) : e3.source, fileName: i2.fileName, lineNumber: i2.lineNumber, columnNumber: i2.columnNumber, isSymbolicated: true } : e3;
    }));
    q = (e2) => e2._debugStack instanceof Error && typeof e2._debugStack?.stack == `string`;
    ye2 = () => {
      let n2 = h();
      for (let t2 of [...Array.from(d), ...Array.from(n2.renderers.values())]) {
        let e2 = t2.currentDispatcherRef;
        if (e2 && typeof e2 == `object`) return `H` in e2 ? e2.H : e2.current;
      }
      return null;
    };
    J = (t2) => {
      for (let n2 of d) {
        let e2 = n2.currentDispatcherRef;
        e2 && typeof e2 == `object` && (`H` in e2 ? e2.H = t2 : e2.current = t2);
      }
    };
    Y = (e2) => `
    in ${e2}`;
    be2 = (e2, t2) => {
      let n2 = Y(e2);
      return t2 && (n2 += ` (at ${t2})`), n2;
    };
    X2 = false;
    Z = (e2, t2) => {
      if (!e2 || X2) return ``;
      let n2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0, X2 = true;
      let r3 = ye2();
      J(null);
      let i2 = console.error, a3 = console.warn;
      console.error = () => {
      }, console.warn = () => {
      };
      try {
        let n3 = { DetermineComponentFrameRoot() {
          let n4;
          try {
            if (t2) {
              let t3 = function() {
                throw Error();
              };
              if (Object.defineProperty(t3.prototype, `props`, { set: function() {
                throw Error();
              } }), typeof Reflect == `object` && Reflect.construct) {
                try {
                  Reflect.construct(t3, []);
                } catch (e3) {
                  n4 = e3;
                }
                Reflect.construct(e2, [], t3);
              } else {
                try {
                  t3.call();
                } catch (e3) {
                  n4 = e3;
                }
                e2.call(t3.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (e3) {
                n4 = e3;
              }
              let t3 = e2();
              t3 && typeof t3.catch == `function` && t3.catch(() => {
              });
            }
          } catch (e3) {
            if (e3 instanceof Error && n4 instanceof Error && typeof e3.stack == `string`) return [e3.stack, n4.stack];
          }
          return [null, null];
        } };
        n3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        let r4 = Object.getOwnPropertyDescriptor(n3.DetermineComponentFrameRoot, `name`);
        r4?.configurable && Object.defineProperty(n3.DetermineComponentFrameRoot, `name`, { value: `DetermineComponentFrameRoot` });
        let [i3, a4] = n3.DetermineComponentFrameRoot();
        if (i3 && a4) {
          let t3 = i3.split(`
`), n4 = a4.split(`
`), r5 = 0, o4 = 0;
          for (; r5 < t3.length && !t3[r5].includes(`DetermineComponentFrameRoot`); ) r5++;
          for (; o4 < n4.length && !n4[o4].includes(`DetermineComponentFrameRoot`); ) o4++;
          if (r5 === t3.length || o4 === n4.length) for (r5 = t3.length - 1, o4 = n4.length - 1; r5 >= 1 && o4 >= 0 && t3[r5] !== n4[o4]; ) o4--;
          for (; r5 >= 1 && o4 >= 0; r5--, o4--) if (t3[r5] !== n4[o4]) {
            if (r5 !== 1 || o4 !== 1) do
              if (r5--, o4--, o4 < 0 || t3[r5] !== n4[o4]) {
                let n5 = `
${t3[r5].replace(` at new `, ` at `)}`, i4 = Te(e2);
                return i4 && n5.includes(`<anonymous>`) && (n5 = n5.replace(`<anonymous>`, i4)), n5;
              }
            while (r5 >= 1 && o4 >= 0);
            break;
          }
        }
      } finally {
        X2 = false, Error.prepareStackTrace = n2, J(r3), console.error = i2, console.warn = a3;
      }
      let o3 = e2 ? Te(e2) : ``, s3 = o3 ? Y(o3) : ``;
      return s3;
    };
    xe2 = (e2, t2) => {
      let m3 = e2.tag, h3 = ``;
      switch (m3) {
        case ne:
          h3 = Y(`Activity`);
          break;
        case o2:
          h3 = Z(e2.type, true);
          break;
        case f2:
          h3 = Z(e2.type.render, false);
          break;
        case a2:
        case h2:
          h3 = Z(e2.type, false);
          break;
        case c2:
        case y:
        case b:
          h3 = Y(e2.type);
          break;
        case ee:
          h3 = Y(`Lazy`);
          break;
        case p2:
          h3 = e2.child !== t2 && t2 !== null ? Y(`Suspense Fallback`) : Y(`Suspense`);
          break;
        case te:
          h3 = Y(`SuspenseList`);
          break;
        case re:
          h3 = Y(`ViewTransition`);
          break;
        default:
          return ``;
      }
      return h3;
    };
    Se2 = (e2) => {
      try {
        let t2 = ``, n2 = e2, r3 = null;
        do {
          t2 += xe2(n2, r3);
          let e3 = n2._debugInfo;
          if (e3 && Array.isArray(e3)) for (let n3 = e3.length - 1; n3 >= 0; n3--) {
            let r4 = e3[n3];
            typeof r4.name == `string` && (t2 += be2(r4.name, r4.env));
          }
          r3 = n2, n2 = n2.return;
        } while (n2);
        return t2;
      } catch (e3) {
        return e3 instanceof Error ? `
Error generating stack: ${e3.message}
${e3.stack}` : ``;
      }
    };
    Ce2 = (e2) => {
      let t2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      let n2 = e2;
      if (!n2) return ``;
      Error.prepareStackTrace = t2, n2.startsWith(`Error: react-stack-top-frame
`) && (n2 = n2.slice(29));
      let r3 = n2.indexOf(`
`);
      if (r3 !== -1 && (n2 = n2.slice(r3 + 1)), r3 = Math.max(n2.indexOf(`react_stack_bottom_frame`), n2.indexOf(`react-stack-bottom-frame`)), r3 !== -1 && (r3 = n2.lastIndexOf(`
`, r3)), r3 !== -1) n2 = n2.slice(0, r3);
      else return ``;
      return n2;
    };
    we2 = (e2) => !!(e2.fileName?.startsWith(`rsc://`) && e2.functionName);
    Te2 = (e2, t2) => e2.fileName === t2.fileName && e2.lineNumber === t2.lineNumber && e2.columnNumber === t2.columnNumber;
    Ee2 = (e2) => {
      let t2 = /* @__PURE__ */ new Map();
      for (let n2 of e2) for (let e3 of n2.stackFrames) {
        if (!we2(e3)) continue;
        let n3 = e3.functionName, r3 = t2.get(n3) ?? [], i2 = r3.some((t3) => Te2(t3, e3));
        i2 || (r3.push(e3), t2.set(n3, r3));
      }
      return t2;
    };
    De2 = (e2, t2, n2) => {
      if (!e2.functionName) return { ...e2, isServer: true };
      let r3 = t2.get(e2.functionName);
      if (!r3 || r3.length === 0) return { ...e2, isServer: true };
      let i2 = n2.get(e2.functionName) ?? 0, a3 = r3[i2 % r3.length];
      return n2.set(e2.functionName, i2 + 1), { ...e2, isServer: true, fileName: a3.fileName, lineNumber: a3.lineNumber, columnNumber: a3.columnNumber, source: e2.source?.replace(D, `(${a3.fileName}:${a3.lineNumber}:${a3.columnNumber})`) };
    };
    Oe = (e2) => {
      let t2 = [];
      return N(e2, (e3) => {
        if (!q(e3)) return;
        let n2 = typeof e3.type == `string` ? e3.type : Te(e3.type) || `<anonymous>`;
        t2.push({ componentName: n2, stackFrames: O2(Ce2(e3._debugStack?.stack)) });
      }, true), t2;
    };
    Q = async (e2, t2 = true, n2) => {
      let r3 = Oe(e2), i2 = O2(Se2(e2)), a3 = Ee2(r3), o3 = /* @__PURE__ */ new Map(), s3 = i2.map((e3) => {
        let t3 = e3.source?.includes(D) ?? false;
        return t3 ? De2(e3, a3, o3) : e3;
      }), c3 = s3.filter((e3, t3, n3) => {
        if (t3 === 0) return true;
        let r4 = n3[t3 - 1];
        return e3.functionName !== r4.functionName;
      });
      return K(c3, t2, n2);
    };
    $2 = (e2) => e2.split(`/`).filter(Boolean).length;
    je2 = (e2) => {
      let t2 = e2.split(`/`).filter(Boolean);
      return t2[0] ?? null;
    };
    Me2 = (e2) => {
      let t2 = e2.indexOf(`/`, 1);
      if (t2 === -1) return e2;
      let n2 = e2.slice(0, t2);
      if ($2(n2) !== 1) return e2;
      let r3 = e2.slice(t2);
      if (!E.test(r3) || $2(r3) < 2) return e2;
      let i2 = je2(r3);
      return !i2 || i2.startsWith(`@`) || i2.length > 4 ? e2 : r3;
    };
    Ne2 = (e2) => {
      if (!e2 || ne2.some((t3) => t3 === e2)) return ``;
      let t2 = e2, n2 = t2.startsWith(`http://`) || t2.startsWith(`https://`);
      if (n2) try {
        let e3 = new URL(t2);
        t2 = e3.pathname;
      } catch {
      }
      if (n2 && (t2 = Me2(t2)), t2.startsWith(T2)) {
        let e3 = t2.slice(T2.length), n3 = e3.indexOf(`/`), r4 = e3.indexOf(`:`);
        t2 = n3 !== -1 && (r4 === -1 || n3 < r4) ? e3.slice(n3 + 1) : e3;
      }
      let r3 = true;
      for (; r3; ) {
        r3 = false;
        for (let e3 of te2) if (t2.startsWith(e3)) {
          t2 = t2.slice(e3.length), e3 === `file:///` && (t2 = `/${t2.replace(/^\/+/, ``)}`), r3 = true;
          break;
        }
      }
      if (w2.test(t2)) {
        let e3 = t2.match(w2);
        e3 && (t2 = t2.slice(e3[0].length));
      }
      if (t2.startsWith(`//`)) {
        let e3 = t2.indexOf(`/`, 2);
        t2 = e3 === -1 ? `` : t2.slice(e3);
      }
      let i2 = t2.indexOf(`?`);
      if (i2 !== -1) {
        let e3 = t2.slice(i2);
        ie2.test(e3) && (t2 = t2.slice(0, i2));
      }
      return t2;
    };
    Pe2 = (e2) => {
      let t2 = Ne2(e2);
      return !(!t2 || !E.test(t2) || re2.test(t2));
    };
  }
});

// src/utils/is-capitalized.ts
var isCapitalized;
var init_is_capitalized = __esm({
  "src/utils/is-capitalized.ts"() {
    "use strict";
    isCapitalized = (value) => value.length > 0 && /^[A-Z]/.test(value);
  }
});

// src/core/context.ts
var userComponentFilter, setComponentFilter, NEXT_INTERNAL_COMPONENT_NAMES, REACT_INTERNAL_COMPONENT_NAMES, checkIsNextProject, checkIsInternalComponentName, checkIsSourceComponentName, stackCache, fetchStackForElement, getStack, getNearestComponentName, isUsefulComponentName, getComponentDisplayName, hasSourceFiles, getComponentNamesFromFiber, getElementContext, getFallbackContext, truncateAttrValue, formatPriorityAttrs, getHTMLPreview;
var init_context = __esm({
  "src/core/context.ts"() {
    "use strict";
    init_source();
    init_is_capitalized();
    init_dist();
    init_constants();
    init_get_tag_name();
    setComponentFilter = (filter) => {
      userComponentFilter = filter;
    };
    NEXT_INTERNAL_COMPONENT_NAMES = /* @__PURE__ */ new Set([
      "InnerLayoutRouter",
      "RedirectErrorBoundary",
      "RedirectBoundary",
      "HTTPAccessFallbackErrorBoundary",
      "HTTPAccessFallbackBoundary",
      "LoadingBoundary",
      "ErrorBoundary",
      "InnerScrollAndFocusHandler",
      "ScrollAndFocusHandler",
      "RenderFromTemplateContext",
      "OuterLayoutRouter",
      "body",
      "html",
      "DevRootHTTPAccessFallbackBoundary",
      "AppDevOverlayErrorBoundary",
      "AppDevOverlay",
      "HotReload",
      "Router",
      "ErrorBoundaryHandler",
      "AppRouter",
      "ServerRoot",
      "SegmentStateProvider",
      "RootErrorBoundary",
      "LoadableComponent",
      "MotionDOMComponent"
    ]);
    REACT_INTERNAL_COMPONENT_NAMES = /* @__PURE__ */ new Set([
      "Suspense",
      "Fragment",
      "StrictMode",
      "Profiler",
      "SuspenseList"
    ]);
    checkIsNextProject = () => {
      if (typeof document === "undefined") return false;
      return Boolean(
        document.getElementById("__NEXT_DATA__") || document.querySelector("nextjs-portal")
      );
    };
    checkIsInternalComponentName = (name) => {
      if (name.startsWith("_")) return true;
      if (NEXT_INTERNAL_COMPONENT_NAMES.has(name)) return true;
      if (REACT_INTERNAL_COMPONENT_NAMES.has(name)) return true;
      return false;
    };
    checkIsSourceComponentName = (name) => {
      if (name.length <= 1) return false;
      if (checkIsInternalComponentName(name)) return false;
      if (!isCapitalized(name)) return false;
      if (name.startsWith("Primitive.")) return false;
      if (name.includes("Provider") && name.includes("Context")) return false;
      if (userComponentFilter && !userComponentFilter(name)) return false;
      return true;
    };
    stackCache = /* @__PURE__ */ new WeakMap();
    fetchStackForElement = async (element) => {
      try {
        const fiber = Pe(element);
        if (!fiber) return null;
        return await Q(fiber);
      } catch {
        return null;
      }
    };
    getStack = (element) => {
      if (!Ee()) return Promise.resolve([]);
      const cached = stackCache.get(element);
      if (cached) return cached;
      const promise = fetchStackForElement(element);
      stackCache.set(element, promise);
      return promise;
    };
    getNearestComponentName = async (element) => {
      if (!Ee()) return null;
      const stack = await getStack(element);
      if (!stack) return null;
      for (const frame of stack) {
        if (frame.functionName && checkIsSourceComponentName(frame.functionName)) {
          return frame.functionName;
        }
      }
      return null;
    };
    isUsefulComponentName = (name) => {
      if (!name) return false;
      if (checkIsInternalComponentName(name)) return false;
      if (name.startsWith("Primitive.")) return false;
      if (name === "SlotClone" || name === "Slot") return false;
      if (userComponentFilter && !userComponentFilter(name)) return false;
      return true;
    };
    getComponentDisplayName = (element) => {
      if (!Ee()) return null;
      const fiber = Pe(element);
      if (!fiber) return null;
      let currentFiber = fiber.return;
      while (currentFiber) {
        if (pe(currentFiber)) {
          const name = Te(currentFiber.type);
          if (name && isUsefulComponentName(name)) {
            return name;
          }
        }
        currentFiber = currentFiber.return;
      }
      return null;
    };
    hasSourceFiles = (stack) => {
      if (!stack) return false;
      return stack.some(
        (frame) => frame.isServer || frame.fileName && Pe2(frame.fileName)
      );
    };
    getComponentNamesFromFiber = (element, maxCount) => {
      if (!Ee()) return [];
      const fiber = Pe(element);
      if (!fiber) return [];
      const componentNames = [];
      N(
        fiber,
        (currentFiber) => {
          if (componentNames.length >= maxCount) return true;
          if (pe(currentFiber)) {
            const name = Te(currentFiber.type);
            if (name && isUsefulComponentName(name)) {
              componentNames.push(name);
            }
          }
          return false;
        },
        true
      );
      return componentNames;
    };
    getElementContext = async (element, options = {}) => {
      const { maxLines = 3 } = options;
      const stack = await getStack(element);
      const html = getHTMLPreview(element);
      if (hasSourceFiles(stack)) {
        const isNextProject = checkIsNextProject();
        const stackContext = [];
        if (stack) {
          for (const frame of stack) {
            if (stackContext.length >= maxLines) break;
            if (frame.isServer && (!frame.functionName || checkIsSourceComponentName(frame.functionName))) {
              stackContext.push(
                `
  in ${frame.functionName || "<anonymous>"} (at Server)`
              );
              continue;
            }
            if (frame.fileName && Pe2(frame.fileName)) {
              let line = "\n  in ";
              const hasComponentName = frame.functionName && checkIsSourceComponentName(frame.functionName);
              if (hasComponentName) {
                line += `${frame.functionName} (at `;
              }
              line += Ne2(frame.fileName);
              if (isNextProject && frame.lineNumber && frame.columnNumber) {
                line += `:${frame.lineNumber}:${frame.columnNumber}`;
              }
              if (hasComponentName) {
                line += `)`;
              }
              stackContext.push(line);
            }
          }
        }
        return `${html}${stackContext.join("")}`;
      }
      const componentNames = getComponentNamesFromFiber(element, maxLines);
      if (componentNames.length > 0) {
        const componentContext = componentNames.map((name) => `
  in ${name}`).join("");
        return `${html}${componentContext}`;
      }
      return getFallbackContext(element);
    };
    getFallbackContext = (element) => {
      const tagName = getTagName(element);
      if (!(element instanceof HTMLElement)) {
        const attrsHint = formatPriorityAttrs(element, {
          truncate: false,
          maxAttrs: PREVIEW_PRIORITY_ATTRS.length
        });
        return `<${tagName}${attrsHint} />`;
      }
      const text = element.innerText?.trim() ?? element.textContent?.trim() ?? "";
      let attrsText = "";
      for (const { name, value } of element.attributes) {
        attrsText += ` ${name}="${value}"`;
      }
      const truncatedText = text.length > 100 ? `${text.slice(0, 100)}...` : text;
      if (truncatedText.length > 0) {
        return `<${tagName}${attrsText}>
  ${truncatedText}
</${tagName}>`;
      }
      return `<${tagName}${attrsText} />`;
    };
    truncateAttrValue = (value) => value.length > PREVIEW_ATTR_VALUE_MAX_LENGTH ? `${value.slice(0, PREVIEW_ATTR_VALUE_MAX_LENGTH)}...` : value;
    formatPriorityAttrs = (element, options = {}) => {
      const { truncate = true, maxAttrs = PREVIEW_MAX_ATTRS } = options;
      const priorityAttrs = [];
      for (const name of PREVIEW_PRIORITY_ATTRS) {
        if (priorityAttrs.length >= maxAttrs) break;
        const value = element.getAttribute(name);
        if (value) {
          const formattedValue = truncate ? truncateAttrValue(value) : value;
          priorityAttrs.push(`${name}="${formattedValue}"`);
        }
      }
      return priorityAttrs.length > 0 ? ` ${priorityAttrs.join(" ")}` : "";
    };
    getHTMLPreview = (element) => {
      const tagName = getTagName(element);
      if (!(element instanceof HTMLElement)) {
        const attrsHint = formatPriorityAttrs(element);
        return `<${tagName}${attrsHint} />`;
      }
      const text = element.innerText?.trim() ?? element.textContent?.trim() ?? "";
      let attrsText = "";
      for (const { name, value } of element.attributes) {
        attrsText += ` ${name}="${truncateAttrValue(value)}"`;
      }
      const topElements = [];
      const bottomElements = [];
      let foundFirstText = false;
      const childNodes = Array.from(element.childNodes);
      for (const node of childNodes) {
        if (node.nodeType === Node.COMMENT_NODE) continue;
        if (node.nodeType === Node.TEXT_NODE) {
          if (node.textContent && node.textContent.trim().length > 0) {
            foundFirstText = true;
          }
        } else if (node instanceof Element) {
          if (!foundFirstText) {
            topElements.push(node);
          } else {
            bottomElements.push(node);
          }
        }
      }
      const formatElements = (elements) => {
        if (elements.length === 0) return "";
        if (elements.length <= 2) {
          return elements.map((el) => `<${getTagName(el)} ...>`).join("\n  ");
        }
        return `(${elements.length} elements)`;
      };
      let content = "";
      const topElementsStr = formatElements(topElements);
      if (topElementsStr) content += `
  ${topElementsStr}`;
      if (text.length > 0) {
        const truncatedText = text.length > 100 ? `${text.slice(0, 100)}...` : text;
        content += `
  ${truncatedText}`;
      }
      const bottomElementsStr = formatElements(bottomElements);
      if (bottomElementsStr) content += `
  ${bottomElementsStr}`;
      if (content.length > 0) {
        return `<${tagName}${attrsText}>${content}
</${tagName}>`;
      }
      return `<${tagName}${attrsText} />`;
    };
  }
});

// src/core/noop-api.ts
var createNoopApi;
var init_noop_api = __esm({
  "src/core/noop-api.ts"() {
    "use strict";
    createNoopApi = () => {
      const getState = () => {
        return {
          isActive: false,
          isDragging: false,
          isCopying: false,
          isPromptMode: false,
          isCrosshairVisible: false,
          isSelectionBoxVisible: false,
          isDragBoxVisible: false,
          targetElement: null,
          dragBounds: null,
          grabbedBoxes: [],
          selectionFilePath: null,
          toolbarState: null
        };
      };
      return {
        activate: () => {
        },
        deactivate: () => {
        },
        toggle: () => {
        },
        isActive: () => false,
        isEnabled: () => false,
        setEnabled: () => {
        },
        getToolbarState: () => null,
        setToolbarState: () => {
        },
        onToolbarStateChange: () => () => {
        },
        dispose: () => {
        },
        copyElement: () => Promise.resolve(false),
        getSource: () => Promise.resolve(null),
        getState,
        setOptions: () => {
        },
        registerPlugin: () => {
        },
        unregisterPlugin: () => {
        },
        getPlugins: () => [],
        getDisplayName: () => null
      };
    };
  }
});

// src/core/events.ts
var createEventListenerManager;
var init_events = __esm({
  "src/core/events.ts"() {
    "use strict";
    createEventListenerManager = () => {
      const abortController = new AbortController();
      const addWindowListener = (type, listener, options = {}) => {
        window.addEventListener(type, listener, {
          ...options,
          signal: abortController.signal
        });
      };
      const addDocumentListener = (type, listener, options = {}) => {
        document.addEventListener(type, listener, {
          ...options,
          signal: abortController.signal
        });
      };
      return {
        signal: abortController.signal,
        abort: () => abortController.abort(),
        addWindowListener,
        addDocumentListener
      };
    };
  }
});

// src/utils/copy-content.ts
var LEXICAL_EDITOR_MIME_TYPE, REACT_GRAB_MIME_TYPE, generateUuid, createMentionNode, createTextNode, createLexicalClipboardData, copyContent;
var init_copy_content = __esm({
  "src/utils/copy-content.ts"() {
    "use strict";
    init_constants();
    LEXICAL_EDITOR_MIME_TYPE = "application/x-lexical-editor";
    REACT_GRAB_MIME_TYPE = "application/x-react-grab";
    generateUuid = () => {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
        const random = Math.random() * 16 | 0;
        const value = char === "x" ? random : random & 3 | 8;
        return value.toString(16);
      });
    };
    createMentionNode = (displayName, mentionKey, typeaheadType, metadata) => ({
      detail: 1,
      format: 0,
      mode: "segmented",
      style: "",
      text: `@${displayName}`,
      type: "mention",
      version: 1,
      mentionName: displayName,
      typeaheadType,
      storedKey: mentionKey,
      metadata,
      source: "chat"
    });
    createTextNode = (text) => ({
      detail: 0,
      format: 0,
      mode: "normal",
      style: "",
      text,
      type: "text",
      version: 1
    });
    createLexicalClipboardData = (content, elementName) => {
      const mentionKey = String(Math.floor(Math.random() * 1e4));
      const namespaceUuid = generateUuid();
      const displayName = `<${elementName}>`;
      const typeaheadType = {
        case: "file",
        path: `${displayName}.tsx`,
        content
      };
      const selectedOption = {
        key: displayName,
        type: typeaheadType,
        payload: { file: { path: `${displayName}.tsx`, content } },
        id: generateUuid(),
        name: displayName,
        _score: 20,
        isSlash: false,
        labelMatch: [{ start: 0, end: 2 }]
      };
      const mentionMetadata = {
        selection: { type: 0 },
        selectedOption
      };
      const escapedMentionMetadata = JSON.stringify(mentionMetadata).replace(
        /"/g,
        "&quot;"
      );
      return {
        plainText: `@${displayName}

${content}
`,
        htmlContent: `<meta charset='utf-8'><span data-mention-key="${mentionKey}" data-lexical-mention="true" data-mention-name="${displayName}" data-typeahead-type="[object Object]" data-mention-metadata="${escapedMentionMetadata}">@${displayName}</span><pre><code>${content}</code></pre>`,
        lexicalData: JSON.stringify({
          namespace: `chat-input${namespaceUuid}-pane`,
          nodes: [
            createMentionNode(
              displayName,
              mentionKey,
              typeaheadType,
              mentionMetadata
            ),
            createTextNode(`

${content}`)
          ]
        })
      };
    };
    copyContent = (content, options) => {
      const elementName = options?.name ?? "div";
      const { plainText, htmlContent, lexicalData } = createLexicalClipboardData(
        content,
        elementName
      );
      const reactGrabMetadata = {
        version: VERSION,
        content,
        timestamp: Date.now()
      };
      const copyHandler = (event) => {
        event.preventDefault();
        event.clipboardData?.setData("text/plain", plainText);
        event.clipboardData?.setData("text/html", htmlContent);
        event.clipboardData?.setData(LEXICAL_EDITOR_MIME_TYPE, lexicalData);
        event.clipboardData?.setData(
          REACT_GRAB_MIME_TYPE,
          JSON.stringify(reactGrabMetadata)
        );
      };
      document.addEventListener("copy", copyHandler);
      const textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.ariaHidden = "true";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        const didCopySucceed = document.execCommand("copy");
        if (didCopySucceed) {
          options?.onSuccess?.();
        }
        return didCopySucceed;
      } finally {
        document.removeEventListener("copy", copyHandler);
        textarea.remove();
      }
    };
  }
});

// src/utils/generate-snippet.ts
var generateSnippet;
var init_generate_snippet = __esm({
  "src/utils/generate-snippet.ts"() {
    "use strict";
    init_context();
    generateSnippet = async (elements, options = {}) => {
      const elementSnippetResults = await Promise.allSettled(
        elements.map((element) => getElementContext(element, options))
      );
      const elementSnippets = elementSnippetResults.map(
        (result) => result.status === "fulfilled" ? result.value : ""
      );
      return elementSnippets;
    };
  }
});

// src/core/copy.ts
var tryCopyWithFallback;
var init_copy = __esm({
  "src/core/copy.ts"() {
    "use strict";
    init_copy_content();
    init_generate_snippet();
    tryCopyWithFallback = async (options, hooks, elements, extraPrompt) => {
      let didCopy = false;
      let copiedContent = "";
      await hooks.onBeforeCopy(elements);
      try {
        let generatedContent;
        if (options.getContent) {
          generatedContent = await options.getContent(elements);
        } else {
          const rawSnippets = await generateSnippet(elements, {
            maxLines: options.maxContextLines
          });
          const transformedSnippets = await Promise.all(
            rawSnippets.map(
              (snippet, index) => snippet.trim() ? hooks.transformSnippet(snippet, elements[index]) : Promise.resolve("")
            )
          );
          generatedContent = transformedSnippets.filter((s3) => s3.trim()).join("\n\n");
        }
        if (generatedContent.trim()) {
          const transformedContent = await hooks.transformCopyContent(
            generatedContent,
            elements
          );
          copiedContent = extraPrompt ? `${extraPrompt}

${transformedContent}` : transformedContent;
          didCopy = copyContent(copiedContent, { name: options.componentName });
        }
      } catch (error) {
        const resolvedError = error instanceof Error ? error : new Error(String(error));
        hooks.onCopyError(resolvedError);
      }
      if (didCopy) {
        hooks.onCopySuccess(elements, copiedContent);
      }
      hooks.onAfterCopy(elements, didCopy);
      return didCopy;
    };
  }
});

// src/utils/is-root-element.ts
var isRootElement;
var init_is_root_element = __esm({
  "src/utils/is-root-element.ts"() {
    "use strict";
    init_get_tag_name();
    isRootElement = (element) => {
      const tagName = getTagName(element);
      return tagName === "html" || tagName === "body";
    };
  }
});

// src/utils/get-elements-in-drag.ts
var calculateIntersectionArea, hasIntersection, clampNumber, sortByDocumentOrder, createSamplePoints, filterElementsInDrag, removeNestedElements, getElementsInDrag;
var init_get_elements_in_drag = __esm({
  "src/utils/get-elements-in-drag.ts"() {
    "use strict";
    init_pointer_events_override();
    init_constants();
    init_is_root_element();
    calculateIntersectionArea = (rect1, rect2) => {
      const intersectionLeft = Math.max(rect1.left, rect2.left);
      const intersectionTop = Math.max(rect1.top, rect2.top);
      const intersectionRight = Math.min(rect1.right, rect2.right);
      const intersectionBottom = Math.min(rect1.bottom, rect2.bottom);
      const intersectionWidth = Math.max(0, intersectionRight - intersectionLeft);
      const intersectionHeight = Math.max(0, intersectionBottom - intersectionTop);
      return intersectionWidth * intersectionHeight;
    };
    hasIntersection = (rect1, rect2) => {
      return rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top;
    };
    clampNumber = (value, min, max) => {
      return Math.min(max, Math.max(min, value));
    };
    sortByDocumentOrder = (elements) => {
      return elements.sort((leftElement, rightElement) => {
        if (leftElement === rightElement) return 0;
        const position = leftElement.compareDocumentPosition(rightElement);
        if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
        if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
        return 0;
      });
    };
    createSamplePoints = (dragRect) => {
      if (dragRect.width <= 0 || dragRect.height <= 0) return [];
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const left = dragRect.x;
      const top = dragRect.y;
      const right = dragRect.x + dragRect.width;
      const bottom = dragRect.y + dragRect.height;
      const centerX = left + dragRect.width / 2;
      const centerY = top + dragRect.height / 2;
      const xCount = clampNumber(
        Math.ceil(dragRect.width / DRAG_SELECTION_SAMPLE_SPACING_PX),
        DRAG_SELECTION_MIN_SAMPLES_PER_AXIS,
        DRAG_SELECTION_MAX_SAMPLES_PER_AXIS
      );
      const yCount = clampNumber(
        Math.ceil(dragRect.height / DRAG_SELECTION_SAMPLE_SPACING_PX),
        DRAG_SELECTION_MIN_SAMPLES_PER_AXIS,
        DRAG_SELECTION_MAX_SAMPLES_PER_AXIS
      );
      const totalGridPoints = xCount * yCount;
      const scale = totalGridPoints > DRAG_SELECTION_MAX_TOTAL_SAMPLE_POINTS ? Math.sqrt(DRAG_SELECTION_MAX_TOTAL_SAMPLE_POINTS / totalGridPoints) : 1;
      const scaledXCount = clampNumber(
        Math.floor(xCount * scale),
        DRAG_SELECTION_MIN_SAMPLES_PER_AXIS,
        DRAG_SELECTION_MAX_SAMPLES_PER_AXIS
      );
      const scaledYCount = clampNumber(
        Math.floor(yCount * scale),
        DRAG_SELECTION_MIN_SAMPLES_PER_AXIS,
        DRAG_SELECTION_MAX_SAMPLES_PER_AXIS
      );
      const pointKeys = /* @__PURE__ */ new Set();
      const points = [];
      const addPoint = (x3, y3) => {
        const clampedX = clampNumber(Math.round(x3), 0, viewportWidth - 1);
        const clampedY = clampNumber(Math.round(y3), 0, viewportHeight - 1);
        const key = `${clampedX}:${clampedY}`;
        if (pointKeys.has(key)) return;
        pointKeys.add(key);
        points.push({ x: clampedX, y: clampedY });
      };
      addPoint(
        left + DRAG_SELECTION_EDGE_INSET_PX,
        top + DRAG_SELECTION_EDGE_INSET_PX
      );
      addPoint(
        right - DRAG_SELECTION_EDGE_INSET_PX,
        top + DRAG_SELECTION_EDGE_INSET_PX
      );
      addPoint(
        left + DRAG_SELECTION_EDGE_INSET_PX,
        bottom - DRAG_SELECTION_EDGE_INSET_PX
      );
      addPoint(
        right - DRAG_SELECTION_EDGE_INSET_PX,
        bottom - DRAG_SELECTION_EDGE_INSET_PX
      );
      addPoint(centerX, top + DRAG_SELECTION_EDGE_INSET_PX);
      addPoint(centerX, bottom - DRAG_SELECTION_EDGE_INSET_PX);
      addPoint(left + DRAG_SELECTION_EDGE_INSET_PX, centerY);
      addPoint(right - DRAG_SELECTION_EDGE_INSET_PX, centerY);
      addPoint(centerX, centerY);
      for (let xIndex = 0; xIndex < scaledXCount; xIndex += 1) {
        const x3 = left + (xIndex + 0.5) / scaledXCount * dragRect.width;
        for (let yIndex = 0; yIndex < scaledYCount; yIndex += 1) {
          const y3 = top + (yIndex + 0.5) / scaledYCount * dragRect.height;
          addPoint(x3, y3);
        }
      }
      return points;
    };
    filterElementsInDrag = (dragRect, isValidGrabbableElement2, shouldCheckCoverage) => {
      const dragBounds = {
        left: dragRect.x,
        top: dragRect.y,
        right: dragRect.x + dragRect.width,
        bottom: dragRect.y + dragRect.height
      };
      const candidates = /* @__PURE__ */ new Set();
      const samplePoints = createSamplePoints(dragRect);
      enablePointerEventsOverride();
      try {
        for (const point of samplePoints) {
          const elementsAtPoint = document.elementsFromPoint(point.x, point.y);
          for (const candidateElement of elementsAtPoint) {
            candidates.add(candidateElement);
          }
        }
      } finally {
        disablePointerEventsOverride();
      }
      const matchingElements = [];
      for (const candidateElement of candidates) {
        if (!shouldCheckCoverage) {
          if (isRootElement(candidateElement)) continue;
        }
        if (!isValidGrabbableElement2(candidateElement)) continue;
        const elementRect = candidateElement.getBoundingClientRect();
        if (elementRect.width <= 0 || elementRect.height <= 0) continue;
        const elementBounds = {
          left: elementRect.left,
          top: elementRect.top,
          right: elementRect.left + elementRect.width,
          bottom: elementRect.top + elementRect.height
        };
        if (shouldCheckCoverage) {
          const intersectionArea = calculateIntersectionArea(
            dragBounds,
            elementBounds
          );
          const elementArea = elementRect.width * elementRect.height;
          const hasMajorityCoverage = elementArea > 0 && intersectionArea / elementArea >= DRAG_SELECTION_COVERAGE_THRESHOLD;
          if (hasMajorityCoverage) {
            matchingElements.push(candidateElement);
          }
        } else if (hasIntersection(elementBounds, dragBounds)) {
          matchingElements.push(candidateElement);
        }
      }
      return sortByDocumentOrder(matchingElements);
    };
    removeNestedElements = (elements) => {
      return elements.filter((element) => {
        return !elements.some(
          (otherElement) => otherElement !== element && otherElement.contains(element)
        );
      });
    };
    getElementsInDrag = (dragRect, isValidGrabbableElement2, strict = true) => {
      const elements = filterElementsInDrag(
        dragRect,
        isValidGrabbableElement2,
        strict
      );
      return removeNestedElements(elements);
    };
  }
});

// src/utils/clear-all-caches.ts
var clearAllCaches;
var init_clear_all_caches = __esm({
  "src/utils/clear-all-caches.ts"() {
    "use strict";
    init_create_element_bounds();
    init_get_element_at_position();
    init_is_valid_grabbable_element();
    clearAllCaches = () => {
      invalidateBoundsCache();
      clearElementPositionCache();
      clearVisibilityCache();
    };
  }
});

// src/utils/create-bounds-from-drag-rect.ts
var createBoundsFromDragRect, createPageRectFromBounds, createFlatOverlayBounds;
var init_create_bounds_from_drag_rect = __esm({
  "src/utils/create-bounds-from-drag-rect.ts"() {
    "use strict";
    createBoundsFromDragRect = (dragRect) => ({
      x: dragRect.pageX - window.scrollX,
      y: dragRect.pageY - window.scrollY,
      width: dragRect.width,
      height: dragRect.height,
      borderRadius: "0px",
      transform: "none"
    });
    createPageRectFromBounds = (bounds) => ({
      pageX: bounds.x + window.scrollX,
      pageY: bounds.y + window.scrollY,
      width: bounds.width,
      height: bounds.height
    });
    createFlatOverlayBounds = (bounds) => ({
      ...bounds,
      borderRadius: "0px",
      transform: "none"
    });
  }
});

// src/utils/get-bounds-center.ts
var getBoundsCenter;
var init_get_bounds_center = __esm({
  "src/utils/get-bounds-center.ts"() {
    "use strict";
    getBoundsCenter = (bounds) => ({
      x: bounds.x + bounds.width / 2,
      y: bounds.y + bounds.height / 2
    });
  }
});

// src/utils/is-c-like-key.ts
var C_LIKE_CHARACTERS, isCLikeKey;
var init_is_c_like_key = __esm({
  "src/utils/is-c-like-key.ts"() {
    "use strict";
    C_LIKE_CHARACTERS = /* @__PURE__ */ new Set([
      "c",
      "C",
      "\u0441",
      // Cyrillic small es
      "\u0421",
      // Cyrillic capital es
      "\u023C",
      // c with stroke
      "\u023B",
      // C with stroke
      "\u2184",
      // reversed c
      "\u2183",
      // reversed C
      "\u1D04",
      // modifier small c
      "\u1D9C",
      // modifier small c turned
      "\u2C7C",
      // latin small c with palatal hook
      "\u217D",
      // small roman numeral 100
      "\u216D",
      // capital roman numeral 100
      "\xE7",
      // c with cedilla
      "\xC7",
      // C with cedilla
      "\u0107",
      // c with acute
      "\u0106",
      // C with acute
      "\u010D",
      // c with caron
      "\u010C",
      // C with caron
      "\u0109",
      // c with circumflex
      "\u0108",
      // C with circumflex
      "\u010B",
      // c with dot above
      "\u010A"
      // C with dot above
    ]);
    isCLikeKey = (key, code) => {
      if (code === "KeyC") return true;
      if (!key || key.length !== 1) return false;
      return C_LIKE_CHARACTERS.has(key);
    };
  }
});

// src/utils/key-matches-code.ts
var keyMatchesCode;
var init_key_matches_code = __esm({
  "src/utils/key-matches-code.ts"() {
    "use strict";
    keyMatchesCode = (targetKey, code) => {
      const normalizedTarget = targetKey.toLowerCase();
      if (code === "Space") {
        return normalizedTarget === "space" || normalizedTarget === " ";
      }
      if (code.startsWith("Key")) {
        return code.slice(3).toLowerCase() === normalizedTarget;
      }
      if (code.startsWith("Digit")) {
        return code.slice(5) === normalizedTarget;
      }
      return false;
    };
  }
});

// src/utils/parse-activation-key.ts
var MODIFIER_MAP, parseString, parseActivationKey, getModifiersFromActivationKey;
var init_parse_activation_key = __esm({
  "src/utils/parse-activation-key.ts"() {
    "use strict";
    init_is_mac();
    init_key_matches_code();
    MODIFIER_MAP = {
      meta: "metaKey",
      cmd: "metaKey",
      command: "metaKey",
      win: "metaKey",
      windows: "metaKey",
      ctrl: "ctrlKey",
      control: "ctrlKey",
      shift: "shiftKey",
      alt: "altKey",
      option: "altKey",
      opt: "altKey"
    };
    parseString = (shortcut) => {
      const parts = shortcut.split("+").map((part) => part.trim().toLowerCase());
      const result = {
        metaKey: false,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        key: null
      };
      for (const part of parts) {
        const modifierKey = MODIFIER_MAP[part];
        if (modifierKey) {
          result[modifierKey] = true;
        } else {
          result.key = part;
        }
      }
      return result;
    };
    parseActivationKey = (activationKey) => {
      if (typeof activationKey === "function") {
        return activationKey;
      }
      const parsed = parseString(activationKey);
      const targetKey = parsed.key;
      return (event) => {
        if (targetKey === null) {
          const metaMatches = parsed.metaKey ? event.metaKey || event.key === "Meta" : true;
          const ctrlMatches = parsed.ctrlKey ? event.ctrlKey || event.key === "Control" : true;
          const shiftMatches = parsed.shiftKey ? event.shiftKey || event.key === "Shift" : true;
          const altMatches = parsed.altKey ? event.altKey || event.key === "Alt" : true;
          const allRequiredModifiersPressed = metaMatches && ctrlMatches && shiftMatches && altMatches;
          const requiredModifierCount = [
            parsed.metaKey,
            parsed.ctrlKey,
            parsed.shiftKey,
            parsed.altKey
          ].filter(Boolean).length;
          const pressedModifierCount = [
            event.metaKey || event.key === "Meta",
            event.ctrlKey || event.key === "Control",
            event.shiftKey || event.key === "Shift",
            event.altKey || event.key === "Alt"
          ].filter(Boolean).length;
          return allRequiredModifiersPressed && pressedModifierCount >= requiredModifierCount;
        }
        const keyMatches = event.key?.toLowerCase() === targetKey || keyMatchesCode(targetKey, event.code);
        const hasModifier = parsed.metaKey || parsed.ctrlKey || parsed.shiftKey || parsed.altKey;
        const modifiersMatch = hasModifier ? (parsed.metaKey ? event.metaKey : true) && (parsed.ctrlKey ? event.ctrlKey : true) && (parsed.shiftKey ? event.shiftKey : true) && (parsed.altKey ? event.altKey : true) : !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
        return keyMatches && modifiersMatch;
      };
    };
    getModifiersFromActivationKey = (activationKey) => {
      if (!activationKey || typeof activationKey === "function") {
        return {
          metaKey: isMac(),
          ctrlKey: !isMac(),
          shiftKey: false,
          altKey: false,
          key: null
        };
      }
      return parseString(activationKey);
    };
  }
});

// src/utils/is-target-key-combination.ts
var isTargetKeyCombination;
var init_is_target_key_combination = __esm({
  "src/utils/is-target-key-combination.ts"() {
    "use strict";
    init_is_c_like_key();
    init_is_mac();
    init_parse_activation_key();
    isTargetKeyCombination = (event, options) => {
      if (options.activationKey) {
        const matcher = parseActivationKey(options.activationKey);
        return matcher(event);
      }
      const hasPlatformModifier = isMac() ? event.metaKey : event.ctrlKey;
      const hasOnlyPlatformModifier = hasPlatformModifier && !event.shiftKey && !event.altKey;
      return Boolean(
        event.key && hasOnlyPlatformModifier && isCLikeKey(event.key, event.code)
      );
    };
  }
});

// src/utils/capture-screenshot.ts
var combineBounds, captureVideoFrame, captureElementScreenshot, copyImageToClipboard;
var init_capture_screenshot = __esm({
  "src/utils/capture-screenshot.ts"() {
    "use strict";
    init_constants();
    combineBounds = (boundsList) => {
      if (boundsList.length === 0) {
        return { x: 0, y: 0, width: 0, height: 0 };
      }
      if (boundsList.length === 1) {
        return boundsList[0];
      }
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (const bounds of boundsList) {
        minX = Math.min(minX, bounds.x);
        minY = Math.min(minY, bounds.y);
        maxX = Math.max(maxX, bounds.x + bounds.width);
        maxY = Math.max(maxY, bounds.y + bounds.height);
      }
      return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    };
    captureVideoFrame = (video, bounds) => {
      return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Failed to get canvas context"));
          return;
        }
        const scaleX = video.videoWidth / window.innerWidth;
        const scaleY = video.videoHeight / window.innerHeight;
        const scaledBounds = {
          x: bounds.x * scaleX,
          y: bounds.y * scaleY,
          width: bounds.width * scaleX,
          height: bounds.height * scaleY
        };
        canvas.width = scaledBounds.width;
        canvas.height = scaledBounds.height;
        context.drawImage(
          video,
          scaledBounds.x,
          scaledBounds.y,
          scaledBounds.width,
          scaledBounds.height,
          0,
          0,
          scaledBounds.width,
          scaledBounds.height
        );
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Failed to create image blob"));
            }
          },
          "image/png",
          1
        );
      });
    };
    captureElementScreenshot = async (bounds) => {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "browser"
        },
        preferCurrentTab: true
      });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.autoplay = true;
      video.playsInline = true;
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error("Video metadata loading timed out"));
        }, VIDEO_METADATA_TIMEOUT_MS);
        video.onerror = () => {
          clearTimeout(timeout);
          reject(new Error("Video failed to load"));
        };
        video.onloadedmetadata = () => {
          clearTimeout(timeout);
          void video.play();
          resolve();
        };
      });
      await new Promise((resolve, reject) => {
        const startTime = Date.now();
        const checkReady = () => {
          if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
            resolve();
            return;
          }
          if (Date.now() - startTime >= VIDEO_READY_TIMEOUT_MS) {
            reject(new Error("Video frame not ready within timeout"));
            return;
          }
          setTimeout(checkReady, VIDEO_READY_POLL_INTERVAL_MS);
        };
        checkReady();
      });
      try {
        const blob = await captureVideoFrame(video, bounds);
        return blob;
      } finally {
        stream.getTracks().forEach((track) => track.stop());
        video.srcObject = null;
      }
    };
    copyImageToClipboard = async (blob) => {
      try {
        await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        return true;
      } catch {
        return false;
      }
    };
  }
});

// src/utils/is-screenshot-supported.ts
var isScreenshotSupported;
var init_is_screenshot_supported = __esm({
  "src/utils/is-screenshot-supported.ts"() {
    "use strict";
    isScreenshotSupported = () => {
      if (typeof window === "undefined" || typeof navigator === "undefined") {
        return false;
      }
      const hasGetDisplayMedia = typeof navigator.mediaDevices?.getDisplayMedia === "function";
      const hasClipboardWrite = typeof navigator.clipboard?.write === "function" && typeof ClipboardItem !== "undefined";
      return hasGetDisplayMedia && hasClipboardWrite;
    };
  }
});

// src/utils/delay.ts
var delay;
var init_delay = __esm({
  "src/utils/delay.ts"() {
    "use strict";
    delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  }
});

// src/utils/create-scroll-cycler.ts
var createScrollCycler;
var init_create_scroll_cycler = __esm({
  "src/utils/create-scroll-cycler.ts"() {
    "use strict";
    createScrollCycler = (options) => {
      const { thresholdPx, throttleMs, lineHeightPx, onStep } = options;
      let accumulatedDelta = 0;
      let currentDirection = null;
      let lastStepTimestamp = 0;
      const handleWheel = (event) => {
        const primaryAxisDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
        if (primaryAxisDelta === 0) return;
        let normalizedDelta = primaryAxisDelta;
        if (event.deltaMode === 1) {
          normalizedDelta *= lineHeightPx;
        } else if (event.deltaMode === 2) {
          normalizedDelta *= window.innerHeight;
        }
        const direction = normalizedDelta > 0 ? 1 : -1;
        if (currentDirection !== direction) {
          currentDirection = direction;
          accumulatedDelta = 0;
        }
        accumulatedDelta += Math.abs(normalizedDelta);
        const now = Date.now();
        if (now - lastStepTimestamp < throttleMs || accumulatedDelta < thresholdPx) {
          return;
        }
        accumulatedDelta -= thresholdPx;
        lastStepTimestamp = now;
        onStep(direction < 0 ? "backward" : "forward");
      };
      return { handleWheel };
    };
  }
});

// src/core/theme.ts
var DEFAULT_THEME, mergeThemeWithBase, deepMergeTheme;
var init_theme = __esm({
  "src/core/theme.ts"() {
    "use strict";
    DEFAULT_THEME = {
      enabled: true,
      hue: 0,
      selectionBox: {
        enabled: true
      },
      dragBox: {
        enabled: true
      },
      grabbedBoxes: {
        enabled: true
      },
      elementLabel: {
        enabled: true
      },
      crosshair: {
        enabled: true
      },
      toolbar: {
        enabled: true
      }
    };
    mergeThemeWithBase = (baseTheme, partialTheme) => ({
      enabled: partialTheme.enabled ?? baseTheme.enabled,
      hue: partialTheme.hue ?? baseTheme.hue,
      selectionBox: {
        enabled: partialTheme.selectionBox?.enabled ?? baseTheme.selectionBox.enabled
      },
      dragBox: {
        enabled: partialTheme.dragBox?.enabled ?? baseTheme.dragBox.enabled
      },
      grabbedBoxes: {
        enabled: partialTheme.grabbedBoxes?.enabled ?? baseTheme.grabbedBoxes.enabled
      },
      elementLabel: {
        enabled: partialTheme.elementLabel?.enabled ?? baseTheme.elementLabel.enabled
      },
      crosshair: {
        enabled: partialTheme.crosshair?.enabled ?? baseTheme.crosshair.enabled
      },
      toolbar: {
        enabled: partialTheme.toolbar?.enabled ?? baseTheme.toolbar.enabled
      }
    });
    deepMergeTheme = mergeThemeWithBase;
  }
});

// src/core/plugin-registry.ts
var DEFAULT_OPTIONS, createPluginRegistry;
var init_plugin_registry = __esm({
  "src/core/plugin-registry.ts"() {
    "use strict";
    init_store();
    init_theme();
    init_constants();
    DEFAULT_OPTIONS = {
      activationMode: "toggle",
      keyHoldDuration: DEFAULT_KEY_HOLD_DURATION_MS,
      allowActivationInsideInput: true,
      maxContextLines: 3,
      activationKey: void 0,
      getContent: void 0,
      freezeReactUpdates: true,
      componentFilter: void 0
    };
    createPluginRegistry = (initialOptions = {}) => {
      const plugins = /* @__PURE__ */ new Map();
      const directOptionOverrides = {};
      const [store, setStore] = createStore({
        theme: DEFAULT_THEME,
        options: { ...DEFAULT_OPTIONS, ...initialOptions },
        actions: []
      });
      const recomputeStore = () => {
        let mergedTheme = DEFAULT_THEME;
        let mergedOptions = { ...DEFAULT_OPTIONS, ...initialOptions };
        const allActions = [];
        for (const { config } of plugins.values()) {
          if (config.theme) {
            mergedTheme = deepMergeTheme(mergedTheme, config.theme);
          }
          if (config.options) {
            mergedOptions = { ...mergedOptions, ...config.options };
          }
          if (config.actions) {
            allActions.push(...config.actions);
          }
        }
        mergedOptions = { ...mergedOptions, ...directOptionOverrides };
        setStore("theme", mergedTheme);
        setStore("options", mergedOptions);
        setStore("actions", allActions);
      };
      const setOptions = (optionUpdates) => {
        for (const [optionKey, optionValue] of Object.entries(optionUpdates)) {
          if (optionValue === void 0) continue;
          directOptionOverrides[optionKey] = optionValue;
          setStore(
            "options",
            optionKey,
            optionValue
          );
        }
      };
      const register = (plugin, api) => {
        if (plugins.has(plugin.name)) {
          unregister(plugin.name);
        }
        let config;
        if (plugin.setup) {
          const setupResult = plugin.setup(
            api
          );
          config = setupResult ?? {};
        } else {
          config = {};
        }
        if (plugin.theme) {
          config.theme = config.theme ? deepMergeTheme(
            deepMergeTheme(DEFAULT_THEME, plugin.theme),
            config.theme
          ) : plugin.theme;
        }
        if (plugin.actions) {
          config.actions = [...plugin.actions, ...config.actions ?? []];
        }
        if (plugin.hooks) {
          config.hooks = config.hooks ? { ...plugin.hooks, ...config.hooks } : plugin.hooks;
        }
        if (plugin.options) {
          config.options = config.options ? { ...plugin.options, ...config.options } : plugin.options;
        }
        plugins.set(plugin.name, { plugin, config });
        recomputeStore();
        return config;
      };
      const unregister = (name) => {
        const registered = plugins.get(name);
        if (!registered) return;
        if (registered.config.cleanup) {
          registered.config.cleanup();
        }
        plugins.delete(name);
        recomputeStore();
      };
      const getPluginNames = () => {
        return Array.from(plugins.keys());
      };
      const callHook = (hookName, ...args) => {
        for (const { config } of plugins.values()) {
          const hook = config.hooks?.[hookName];
          if (hook) {
            hook(...args);
          }
        }
      };
      const callHookWithHandled = (hookName, ...args) => {
        let handled = false;
        for (const { config } of plugins.values()) {
          const hook = config.hooks?.[hookName];
          if (hook) {
            const result = hook(...args);
            if (result === true) {
              handled = true;
            }
          }
        }
        return handled;
      };
      const callHookAsync = async (hookName, ...args) => {
        for (const { config } of plugins.values()) {
          const hook = config.hooks?.[hookName];
          if (hook) {
            await hook(...args);
          }
        }
      };
      const callHookReduce = async (hookName, initialValue, ...extraArgs) => {
        let result = initialValue;
        for (const { config } of plugins.values()) {
          const hook = config.hooks?.[hookName];
          if (hook) {
            result = await hook(result, ...extraArgs);
          }
        }
        return result;
      };
      const callHookReduceSync = (hookName, initialValue, ...extraArgs) => {
        let result = initialValue;
        for (const { config } of plugins.values()) {
          const hook = config.hooks?.[hookName];
          if (hook) {
            result = hook(result, ...extraArgs);
          }
        }
        return result;
      };
      const hooks = {
        onActivate: () => callHook("onActivate"),
        onDeactivate: () => callHook("onDeactivate"),
        onElementHover: (element) => callHook("onElementHover", element),
        onElementSelect: (element) => callHook("onElementSelect", element),
        onDragStart: (startX, startY) => callHook("onDragStart", startX, startY),
        onDragEnd: (elements, bounds) => callHook("onDragEnd", elements, bounds),
        onBeforeCopy: async (elements) => callHookAsync("onBeforeCopy", elements),
        transformCopyContent: async (content, elements) => callHookReduce("transformCopyContent", content, elements),
        onAfterCopy: (elements, success) => callHook("onAfterCopy", elements, success),
        onCopySuccess: (elements, content) => callHook("onCopySuccess", elements, content),
        onCopyError: (error) => callHook("onCopyError", error),
        onStateChange: (state) => callHook("onStateChange", state),
        onPromptModeChange: (isPromptMode, context) => callHook("onPromptModeChange", isPromptMode, context),
        onSelectionBox: (visible, bounds, element) => callHook("onSelectionBox", visible, bounds, element),
        onDragBox: (visible, bounds) => callHook("onDragBox", visible, bounds),
        onGrabbedBox: (bounds, element) => callHook("onGrabbedBox", bounds, element),
        onElementLabel: (visible, variant, context) => callHook("onElementLabel", visible, variant, context),
        onCrosshair: (visible, context) => callHook("onCrosshair", visible, context),
        onContextMenu: (element, position) => callHook("onContextMenu", element, position),
        onOpenFile: (filePath, lineNumber) => callHookWithHandled("onOpenFile", filePath, lineNumber),
        transformHtmlContent: async (html, elements) => callHookReduce("transformHtmlContent", html, elements),
        transformScreenshot: async (blob, elements, bounds) => callHookReduce("transformScreenshot", blob, elements, bounds),
        transformAgentContext: async (context, elements) => callHookReduce("transformAgentContext", context, elements),
        transformActionContext: (context) => callHookReduceSync("transformActionContext", context),
        transformOpenFileUrl: (url, filePath, lineNumber) => callHookReduceSync("transformOpenFileUrl", url, filePath, lineNumber),
        transformSnippet: async (snippet, element) => callHookReduce("transformSnippet", snippet, element)
      };
      return {
        register,
        unregister,
        getPluginNames,
        setOptions,
        store,
        hooks
      };
    };
  }
});

// src/core/agent/session.ts
var STORAGE_KEY2, generateSessionId, createSession, memorySessions, saveSessions, saveSessionById, loadSessions, clearSessions, clearSessionById, updateSession;
var init_session = __esm({
  "src/core/agent/session.ts"() {
    "use strict";
    STORAGE_KEY2 = "react-grab:agent-sessions";
    generateSessionId = () => `session-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    createSession = (context, position, selectionBounds, tagName, componentName) => {
      const now = Date.now();
      return {
        id: generateSessionId(),
        context,
        lastStatus: "",
        isStreaming: true,
        createdAt: now,
        lastUpdatedAt: now,
        position,
        selectionBounds,
        tagName,
        componentName
      };
    };
    memorySessions = /* @__PURE__ */ new Map();
    saveSessions = (sessions, storage) => {
      if (!storage) {
        memorySessions.clear();
        sessions.forEach((session, id) => memorySessions.set(id, session));
        return;
      }
      try {
        const sessionsObject = Object.fromEntries(sessions);
        storage.setItem(STORAGE_KEY2, JSON.stringify(sessionsObject));
      } catch {
        memorySessions.clear();
        sessions.forEach((session, id) => memorySessions.set(id, session));
      }
    };
    saveSessionById = (session, storage) => {
      const sessions = loadSessions(storage);
      sessions.set(session.id, session);
      saveSessions(sessions, storage);
    };
    loadSessions = (storage) => {
      if (!storage) {
        return new Map(memorySessions);
      }
      try {
        const data = storage.getItem(STORAGE_KEY2);
        if (!data) return /* @__PURE__ */ new Map();
        const sessionsObject = JSON.parse(data);
        return new Map(Object.entries(sessionsObject));
      } catch {
        return /* @__PURE__ */ new Map();
      }
    };
    clearSessions = (storage) => {
      if (!storage) {
        memorySessions.clear();
        return;
      }
      try {
        storage.removeItem(STORAGE_KEY2);
      } catch {
        memorySessions.clear();
      }
    };
    clearSessionById = (sessionId, storage) => {
      const sessions = loadSessions(storage);
      sessions.delete(sessionId);
      saveSessions(sessions, storage);
    };
    updateSession = (session, updates, storage) => {
      const updatedSession = { ...session, ...updates, lastUpdatedAt: Date.now() };
      saveSessionById(updatedSession, storage);
      return updatedSession;
    };
  }
});

// src/core/agent/manager.ts
var createAgentManager;
var init_manager = __esm({
  "src/core/agent/manager.ts"() {
    "use strict";
    init_solid();
    init_session();
    init_create_element_bounds();
    init_is_element_connected();
    init_generate_snippet();
    init_context();
    init_constants();
    init_get_tag_name();
    createAgentManager = (initialAgentOptions, hooks) => {
      const [sessions, setSessions] = createSignal(
        /* @__PURE__ */ new Map()
      );
      const [canUndo, setCanUndo] = createSignal(false);
      const [canRedo, setCanRedo] = createSignal(false);
      const abortControllers = /* @__PURE__ */ new Map();
      const dismissTimeouts = /* @__PURE__ */ new Map();
      const sessionMetadata = /* @__PURE__ */ new Map();
      const undoneSessionsStack = [];
      const completedSessionsStack = [];
      let agentOptions = initialAgentOptions;
      const getAgentForSession = (sessionId) => sessionMetadata.get(sessionId)?.agent ?? agentOptions;
      const getElementsForSession = (sessionId) => sessionMetadata.get(sessionId)?.elements ?? [];
      const updateUndoRedoState = (agent) => {
        const effectiveAgent = agent ?? agentOptions;
        const providerCanUndo = effectiveAgent?.provider?.canUndo?.() ?? false;
        const providerCanRedo = effectiveAgent?.provider?.canRedo?.() ?? false;
        setCanUndo(providerCanUndo);
        setCanRedo(providerCanRedo);
      };
      const setOptions = (options) => {
        agentOptions = options;
        updateUndoRedoState();
      };
      const getOptions = () => {
        return agentOptions;
      };
      const isProcessing = () => Array.from(sessions().values()).some((session) => session.isStreaming);
      const executeSessionStream = async (session, streamIterator, activeAgent) => {
        const effectiveAgent = activeAgent ?? agentOptions;
        const storage = effectiveAgent?.storage;
        let wasAborted = false;
        try {
          for await (const status of streamIterator) {
            const currentSessions = sessions();
            const currentSession = currentSessions.get(session.id);
            if (!currentSession) break;
            const updatedSession = updateSession(
              currentSession,
              { lastStatus: status },
              storage
            );
            setSessions((prev) => new Map(prev).set(session.id, updatedSession));
            effectiveAgent?.onStatus?.(status, updatedSession);
          }
          const finalSessions = sessions();
          const finalSession = finalSessions.get(session.id);
          if (finalSession) {
            const completionMessage = effectiveAgent?.provider?.getCompletionMessage?.();
            const completedSession = updateSession(
              finalSession,
              {
                isStreaming: false,
                ...completionMessage ? { lastStatus: completionMessage } : {}
              },
              storage
            );
            setSessions((prev) => new Map(prev).set(session.id, completedSession));
            const elements = getElementsForSession(session.id);
            const result = await effectiveAgent?.onComplete?.(
              completedSession,
              elements
            );
            const existingCompletedIndex = completedSessionsStack.findIndex(
              (entry) => entry.session.id === session.id
            );
            if (existingCompletedIndex !== -1) {
              completedSessionsStack.splice(existingCompletedIndex, 1);
            }
            completedSessionsStack.push({
              session: completedSession,
              elements,
              agent: effectiveAgent
            });
            updateUndoRedoState(effectiveAgent);
            undoneSessionsStack.length = 0;
            if (result?.error) {
              const errorSession = updateSession(
                completedSession,
                { error: result.error },
                storage
              );
              setSessions((prev) => new Map(prev).set(session.id, errorSession));
            }
          }
        } catch (error) {
          const currentSessions = sessions();
          const currentSession = currentSessions.get(session.id);
          if (error instanceof Error && error.name === "AbortError") {
            wasAborted = true;
            if (currentSession) {
              const elements = getElementsForSession(session.id);
              effectiveAgent?.onAbort?.(currentSession, elements);
            }
          } else {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            if (currentSession) {
              const errorSession = updateSession(
                currentSession,
                {
                  error: errorMessage,
                  isStreaming: false
                },
                storage
              );
              setSessions((prev) => new Map(prev).set(session.id, errorSession));
              if (error instanceof Error) {
                effectiveAgent?.onError?.(error, errorSession);
              }
            }
          }
        } finally {
          abortControllers.delete(session.id);
          if (wasAborted) {
            sessionMetadata.delete(session.id);
            clearSessionById(session.id, storage);
            setSessions((prev) => {
              const next = new Map(prev);
              next.delete(session.id);
              return next;
            });
          }
        }
      };
      const tryReacquireElement = (session) => {
        const { selectionBounds, tagName } = session;
        const firstBounds = selectionBounds[0];
        if (!firstBounds) return void 0;
        const centerX = firstBounds.x + firstBounds.width / 2;
        const centerY = firstBounds.y + firstBounds.height / 2;
        const element = document.elementFromPoint(centerX, centerY);
        if (!element) return void 0;
        const isValidHtmlTagName = tagName && !tagName.includes(" ");
        if (isValidHtmlTagName && getTagName(element) !== tagName) {
          return void 0;
        }
        return element;
      };
      const tryResumeSessions = () => {
        const storage = agentOptions?.storage;
        if (!storage) {
          return;
        }
        const existingSessions = loadSessions(storage);
        if (existingSessions.size === 0) {
          return;
        }
        const now = Date.now();
        const resumableSessions = Array.from(existingSessions.values()).filter(
          (session) => {
            if (session.isStreaming) return true;
            const lastUpdatedAt = session.lastUpdatedAt ?? session.createdAt;
            const age = now - lastUpdatedAt;
            const isRecent = age < RECENT_THRESHOLD_MS;
            return isRecent && Boolean(session.error);
          }
        );
        if (resumableSessions.length === 0) {
          clearSessions(storage);
          return;
        }
        if (!agentOptions?.provider?.supportsResume || !agentOptions.provider.resume) {
          clearSessions(storage);
          return;
        }
        const resumableSessionsMap = new Map(
          resumableSessions.map((session) => [session.id, session])
        );
        setSessions(resumableSessionsMap);
        saveSessions(resumableSessionsMap, storage);
        for (const existingSession of resumableSessions) {
          const reacquiredElement = tryReacquireElement(existingSession);
          if (reacquiredElement && agentOptions) {
            sessionMetadata.set(existingSession.id, {
              elements: [reacquiredElement],
              agent: agentOptions
            });
          }
          const sessionWithResumeStatus = {
            ...existingSession,
            isStreaming: true,
            error: void 0,
            lastStatus: existingSession.lastStatus || "Resuming...",
            position: existingSession.position ?? {
              x: window.innerWidth / 2,
              y: window.innerHeight / 2
            }
          };
          setSessions(
            (prev) => new Map(prev).set(existingSession.id, sessionWithResumeStatus)
          );
          agentOptions?.onResume?.(sessionWithResumeStatus);
          const abortController = new AbortController();
          abortControllers.set(existingSession.id, abortController);
          const streamIterator = agentOptions.provider.resume(
            existingSession.id,
            abortController.signal,
            storage
          );
          void executeSessionStream(existingSession, streamIterator);
        }
      };
      const startSession = async (params) => {
        const { elements, prompt, position, selectionBounds, sessionId, agent } = params;
        const activeAgent = agent ?? (sessionId ? getAgentForSession(sessionId) : agentOptions);
        const storage = activeAgent?.storage;
        if (!activeAgent?.provider || elements.length === 0) {
          return;
        }
        const firstElement = elements[0];
        const existingSession = sessionId ? sessions().get(sessionId) : void 0;
        const isFollowUp = Boolean(sessionId);
        const content = existingSession ? existingSession.context.content : (await generateSnippet(elements, { maxLines: Infinity })).filter(
          (snippet) => snippet.trim()
        );
        const context = {
          content,
          prompt,
          options: activeAgent?.getOptions?.(),
          sessionId: isFollowUp ? sessionId : void 0
        };
        let session;
        if (existingSession) {
          session = updateSession(
            existingSession,
            {
              context,
              isStreaming: true,
              lastStatus: "Thinking\u2026"
            },
            storage
          );
        } else {
          const tagName = elements.length > 1 ? `${elements.length} elements` : getTagName(firstElement) || void 0;
          const componentName = elements.length > 1 ? void 0 : await getNearestComponentName(firstElement) || void 0;
          session = createSession(
            context,
            position,
            selectionBounds,
            tagName,
            componentName
          );
          session.lastStatus = "Thinking\u2026";
        }
        sessionMetadata.set(session.id, { elements, agent: activeAgent });
        setSessions((prev) => new Map(prev).set(session.id, session));
        saveSessionById(session, storage);
        activeAgent.onStart?.(session, elements);
        const abortController = new AbortController();
        abortControllers.set(session.id, abortController);
        const contextWithSessionId = {
          ...context,
          sessionId: sessionId ?? session.id
        };
        let transformedContext;
        try {
          transformedContext = hooks?.transformAgentContext ? await hooks.transformAgentContext(contextWithSessionId, elements) : contextWithSessionId;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Context transformation failed";
          const errorSession = updateSession(
            session,
            {
              error: errorMessage,
              isStreaming: false
            },
            storage
          );
          setSessions((prev) => new Map(prev).set(session.id, errorSession));
          abortControllers.delete(session.id);
          if (error instanceof Error) {
            activeAgent.onError?.(error, errorSession);
          }
          return;
        }
        const streamIterator = activeAgent.provider.send(
          transformedContext,
          abortController.signal
        );
        void executeSessionStream(session, streamIterator, activeAgent);
      };
      const abort = (sessionId) => {
        if (sessionId) {
          const controller = abortControllers.get(sessionId);
          if (controller) {
            controller.abort();
          }
        } else {
          abortControllers.forEach((controller) => controller.abort());
          abortControllers.clear();
          dismissTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
          dismissTimeouts.clear();
          sessionMetadata.clear();
          completedSessionsStack.length = 0;
          undoneSessionsStack.length = 0;
          setSessions(/* @__PURE__ */ new Map());
          clearSessions(agentOptions?.storage);
          updateUndoRedoState();
        }
      };
      const dismissSession = (sessionId, knownAgent, knownElements) => {
        const currentSessions = sessions();
        const session = currentSessions.get(sessionId);
        const activeAgent = knownAgent ?? getAgentForSession(sessionId);
        const elements = knownElements ?? getElementsForSession(sessionId);
        if (session?.isFading) return;
        if (session && elements.length > 0) {
          activeAgent?.onDismiss?.(session, elements);
        }
        setSessions((prev) => {
          const next = new Map(prev);
          const existingSession = next.get(sessionId);
          if (existingSession) {
            next.set(sessionId, { ...existingSession, isFading: true });
          }
          return next;
        });
        const existingTimeout = dismissTimeouts.get(sessionId);
        if (existingTimeout) clearTimeout(existingTimeout);
        const timeoutId = setTimeout(() => {
          dismissTimeouts.delete(sessionId);
          sessionMetadata.delete(sessionId);
          clearSessionById(sessionId, activeAgent?.storage);
          setSessions((prev) => {
            const next = new Map(prev);
            next.delete(sessionId);
            return next;
          });
        }, FADE_DURATION_MS + DISMISS_ANIMATION_BUFFER_MS);
        dismissTimeouts.set(sessionId, timeoutId);
      };
      const undoSession = (sessionId) => {
        const currentSessions = sessions();
        const session = currentSessions.get(sessionId);
        const activeAgent = getAgentForSession(sessionId);
        const elements = getElementsForSession(sessionId);
        if (session) {
          undoneSessionsStack.push({ session, elements, agent: activeAgent });
          const completedIndex = completedSessionsStack.findIndex(
            (entry) => entry.session.id === sessionId
          );
          if (completedIndex !== -1) {
            completedSessionsStack.splice(completedIndex, 1);
          }
          activeAgent?.onUndo?.(session, elements);
          void activeAgent?.provider?.undo?.();
        }
        dismissSession(sessionId, activeAgent, elements);
        updateUndoRedoState(activeAgent);
      };
      const globalUndo = () => {
        const completedSessionData = completedSessionsStack.pop();
        if (!completedSessionData) {
          return;
        }
        const { session, elements, agent } = completedSessionData;
        const effectiveAgent = agent ?? agentOptions;
        undoneSessionsStack.push(completedSessionData);
        effectiveAgent?.onUndo?.(session, elements);
        void effectiveAgent?.provider?.undo?.();
        dismissSession(session.id, effectiveAgent, elements);
        updateUndoRedoState(effectiveAgent);
      };
      const globalRedo = () => {
        const undoneSessionData = undoneSessionsStack.pop();
        if (!undoneSessionData) {
          return;
        }
        const effectiveAgent = undoneSessionData.agent ?? agentOptions;
        const { session, elements } = undoneSessionData;
        void effectiveAgent?.provider?.redo?.();
        let validElements = elements.filter(
          (element) => isElementConnected(element)
        );
        if (validElements.length === 0) {
          const reacquiredElement = tryReacquireElement(session);
          if (reacquiredElement) {
            validElements = [reacquiredElement];
          }
        }
        if (validElements.length > 0 && effectiveAgent) {
          completedSessionsStack.push(undoneSessionData);
          const newBounds = validElements.map(
            (element) => createElementBounds(element)
          );
          const restoredSession = {
            ...session,
            selectionBounds: newBounds
          };
          sessionMetadata.set(session.id, {
            elements: validElements,
            agent: effectiveAgent
          });
          setSessions((prev) => new Map(prev).set(session.id, restoredSession));
        }
        updateUndoRedoState(effectiveAgent);
      };
      const acknowledgeSessionError = (sessionId) => {
        const currentSessions = sessions();
        const session = currentSessions.get(sessionId);
        const prompt = session?.context.prompt;
        dismissSession(sessionId);
        return prompt;
      };
      const retrySession = (sessionId) => {
        const currentSessions = sessions();
        const session = currentSessions.get(sessionId);
        const activeAgent = getAgentForSession(sessionId);
        if (!session || !activeAgent?.provider) return;
        const storage = activeAgent.storage;
        const elements = getElementsForSession(sessionId);
        const retriedSession = updateSession(
          session,
          {
            error: void 0,
            isStreaming: true,
            lastStatus: "Retrying\u2026"
          },
          storage
        );
        setSessions((prev) => new Map(prev).set(sessionId, retriedSession));
        saveSessionById(retriedSession, storage);
        if (elements.length > 0) {
          activeAgent.onStart?.(retriedSession, elements);
        }
        const abortController = new AbortController();
        abortControllers.set(sessionId, abortController);
        const contextWithSessionId = {
          ...retriedSession.context,
          sessionId
        };
        const streamIterator = activeAgent.provider.send(
          contextWithSessionId,
          abortController.signal
        );
        void executeSessionStream(retriedSession, streamIterator, activeAgent);
      };
      const updateSessionBoundsOnViewportChange = () => {
        const currentSessions = sessions();
        if (currentSessions.size === 0) return;
        const updatedSessions = new Map(currentSessions);
        let didUpdate = false;
        for (const [sessionId, session] of currentSessions) {
          const elements = getElementsForSession(sessionId);
          const firstElement = elements[0];
          if (isElementConnected(firstElement)) {
            const newBounds = elements.filter((element) => isElementConnected(element)).map((element) => createElementBounds(element));
            if (newBounds.length > 0) {
              const oldFirstBounds = session.selectionBounds[0];
              const newFirstBounds = newBounds[0];
              let updatedPosition = session.position;
              if (oldFirstBounds && newFirstBounds) {
                const oldCenterX = oldFirstBounds.x + oldFirstBounds.width / 2;
                const oldHalfWidth = oldFirstBounds.width / 2;
                const offsetX = session.position.x - oldCenterX;
                const offsetRatio = oldHalfWidth > 0 ? offsetX / oldHalfWidth : 0;
                const newCenterX = newFirstBounds.x + newFirstBounds.width / 2;
                const newHalfWidth = newFirstBounds.width / 2;
                updatedPosition = {
                  ...session.position,
                  x: newCenterX + offsetRatio * newHalfWidth
                };
              }
              updatedSessions.set(sessionId, {
                ...session,
                selectionBounds: newBounds,
                position: updatedPosition
              });
              didUpdate = true;
            }
          }
        }
        if (didUpdate) {
          setSessions(updatedSessions);
        }
      };
      const getSessionElement = (sessionId) => getElementsForSession(sessionId)[0];
      const getSessionElements = (sessionId) => getElementsForSession(sessionId);
      return {
        sessions,
        isProcessing,
        canUndo,
        canRedo,
        session: {
          start: startSession,
          abort,
          dismiss: dismissSession,
          retry: retrySession,
          undo: undoSession,
          getElement: getSessionElement,
          getElements: getSessionElements,
          tryResume: tryResumeSessions,
          acknowledgeError: acknowledgeSessionError
        },
        history: {
          undo: globalUndo,
          redo: globalRedo
        },
        _internal: {
          updateBoundsOnViewportChange: updateSessionBoundsOnViewportChange,
          setOptions,
          getOptions
        }
      };
    };
  }
});

// src/core/agent/index.ts
var init_agent = __esm({
  "src/core/agent/index.ts"() {
    "use strict";
    init_manager();
  }
});

// src/core/arrow-navigation.ts
var createArrowNavigator;
var init_arrow_navigation = __esm({
  "src/core/arrow-navigation.ts"() {
    "use strict";
    init_get_element_at_position();
    init_is_element_connected();
    createArrowNavigator = (isValidGrabbableElement2, createElementBounds2) => {
      let navigationHistory = [];
      const findVerticalNext = (currentElement, direction) => {
        const bounds = createElementBounds2(currentElement);
        const elementsAtPoint = getElementsAtPoint(
          bounds.x + bounds.width / 2,
          bounds.y + bounds.height / 2
        ).filter(isValidGrabbableElement2);
        const currentIndex = elementsAtPoint.indexOf(currentElement);
        if (currentIndex === -1) return null;
        return elementsAtPoint[currentIndex + direction] ?? null;
      };
      const findUp = (currentElement) => {
        const nextElement = findVerticalNext(currentElement, 1);
        if (nextElement) {
          navigationHistory.push(currentElement);
        }
        return nextElement;
      };
      const findDown = (currentElement) => {
        if (navigationHistory.length > 0) {
          const previousElement = navigationHistory.pop();
          if (isElementConnected(previousElement)) {
            return previousElement;
          }
        }
        return findVerticalNext(currentElement, -1);
      };
      const findHorizontal = (currentElement, isForward) => {
        const findEdgeDescendant = (parentElement) => {
          const children = Array.from(parentElement.children);
          const ordered = isForward ? children : children.reverse();
          for (const childElement of ordered) {
            if (isForward) {
              if (isValidGrabbableElement2(childElement)) return childElement;
              const descendant = findEdgeDescendant(childElement);
              if (descendant) return descendant;
            } else {
              const descendant = findEdgeDescendant(childElement);
              if (descendant) return descendant;
              if (isValidGrabbableElement2(childElement)) return childElement;
            }
          }
          return null;
        };
        const getSibling = (element) => isForward ? element.nextElementSibling : element.previousElementSibling;
        let nextElement = null;
        if (isForward) {
          nextElement = findEdgeDescendant(currentElement);
        }
        if (!nextElement) {
          let searchElement = currentElement;
          while (searchElement) {
            let sibling = getSibling(searchElement);
            while (sibling) {
              const descendant = findEdgeDescendant(sibling);
              if (descendant) {
                nextElement = descendant;
                break;
              }
              if (isValidGrabbableElement2(sibling)) {
                nextElement = sibling;
                break;
              }
              sibling = getSibling(sibling);
            }
            if (nextElement) break;
            const parentElement = searchElement.parentElement;
            if (!isForward && parentElement && isValidGrabbableElement2(parentElement)) {
              nextElement = parentElement;
              break;
            }
            searchElement = parentElement;
          }
        }
        return nextElement;
      };
      const findNext = (key, currentElement) => {
        switch (key) {
          case "ArrowUp":
            return findUp(currentElement);
          case "ArrowDown":
            return findDown(currentElement);
          case "ArrowRight":
            return findHorizontal(currentElement, true);
          case "ArrowLeft":
            return findHorizontal(currentElement, false);
          default:
            return null;
        }
      };
      const clearHistory = () => {
        navigationHistory = [];
      };
      return {
        findNext,
        clearHistory
      };
    };
  }
});

// src/core/keyboard-handlers.ts
var getRequiredModifiers, setupKeyboardEventClaimer;
var init_keyboard_handlers = __esm({
  "src/core/keyboard-handlers.ts"() {
    "use strict";
    init_parse_activation_key();
    getRequiredModifiers = (options) => {
      const modifiers = getModifiersFromActivationKey(options.activationKey);
      return {
        metaKey: modifiers.metaKey,
        ctrlKey: modifiers.ctrlKey,
        shiftKey: modifiers.shiftKey,
        altKey: modifiers.altKey
      };
    };
    setupKeyboardEventClaimer = () => {
      const claimedEvents = /* @__PURE__ */ new WeakSet();
      const originalKeyDescriptor = Object.getOwnPropertyDescriptor(
        KeyboardEvent.prototype,
        "key"
      );
      let didPatch = false;
      if (originalKeyDescriptor?.get && !originalKeyDescriptor.get.__reactGrabPatched) {
        didPatch = true;
        const originalGetter = originalKeyDescriptor.get;
        const patchedGetter = function() {
          if (claimedEvents.has(this)) {
            return "";
          }
          return originalGetter.call(this);
        };
        patchedGetter.__reactGrabPatched = true;
        Object.defineProperty(KeyboardEvent.prototype, "key", {
          get: patchedGetter,
          configurable: true
        });
      }
      const restore = () => {
        if (didPatch && originalKeyDescriptor) {
          Object.defineProperty(
            KeyboardEvent.prototype,
            "key",
            originalKeyDescriptor
          );
        }
      };
      return {
        claimedEvents,
        originalKeyDescriptor,
        didPatch,
        restore
      };
    };
  }
});

// src/core/auto-scroll.ts
var getAutoScrollDirection, createAutoScroller;
var init_auto_scroll = __esm({
  "src/core/auto-scroll.ts"() {
    "use strict";
    init_constants();
    getAutoScrollDirection = (clientX, clientY) => {
      return {
        top: clientY < AUTO_SCROLL_EDGE_THRESHOLD_PX,
        bottom: clientY > window.innerHeight - AUTO_SCROLL_EDGE_THRESHOLD_PX,
        left: clientX < AUTO_SCROLL_EDGE_THRESHOLD_PX,
        right: clientX > window.innerWidth - AUTO_SCROLL_EDGE_THRESHOLD_PX
      };
    };
    createAutoScroller = (getMousePosition, shouldContinue) => {
      let animationId = null;
      const scroll = () => {
        if (!shouldContinue()) {
          stop2();
          return;
        }
        const position = getMousePosition();
        const direction = getAutoScrollDirection(position.x, position.y);
        if (direction.top) window.scrollBy(0, -AUTO_SCROLL_SPEED_PX);
        if (direction.bottom) window.scrollBy(0, AUTO_SCROLL_SPEED_PX);
        if (direction.left) window.scrollBy(-AUTO_SCROLL_SPEED_PX, 0);
        if (direction.right) window.scrollBy(AUTO_SCROLL_SPEED_PX, 0);
        if (direction.top || direction.bottom || direction.left || direction.right) {
          animationId = requestAnimationFrame(scroll);
        } else {
          animationId = null;
        }
      };
      const start = () => {
        scroll();
      };
      const stop2 = () => {
        if (animationId !== null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      };
      const isActive = () => animationId !== null;
      return {
        start,
        stop: stop2,
        isActive
      };
    };
  }
});

// src/utils/is-extension-context.ts
var isExtensionContext;
var init_is_extension_context = __esm({
  "src/utils/is-extension-context.ts"() {
    "use strict";
    isExtensionContext = () => {
      const global = globalThis;
      return Boolean(global.chrome?.runtime?.id || global.browser?.runtime?.id);
    };
  }
});

// src/core/log-intro.ts
var logIntro;
var init_log_intro = __esm({
  "src/core/log-intro.ts"() {
    "use strict";
    init_constants();
    init_is_extension_context();
    logIntro = () => {
      try {
        const version = "0.1.11-tw.1";
        const logoDataUri = `data:image/svg+xml;base64,${btoa(LOGO_SVG)}`;
        console.log(
          `%cReact Grab${version ? ` v${version}` : ""}%c
https://react-grab.com`,
          `background: #330039; color: #ffffff; border: 1px solid #d75fcb; padding: 4px 4px 4px 24px; border-radius: 4px; background-image: url("${logoDataUri}"); background-size: 16px 16px; background-repeat: no-repeat; background-position: 4px center; display: inline-block; margin-bottom: 4px;`,
          ""
        );
        if (navigator.onLine && version && !isExtensionContext()) {
          fetch(
            `https://www.react-grab.com/api/version?source=browser&t=${Date.now()}`,
            {
              referrerPolicy: "origin",
              keepalive: true,
              priority: "low",
              cache: "no-store"
            }
          ).then((res) => res.text()).then((latestVersion) => {
            if (latestVersion && latestVersion !== version) {
              console.warn(
                `[React Grab] v${version} is outdated (latest: v${latestVersion})`
              );
            }
          }).catch(() => null);
        }
      } catch {
      }
    };
  }
});

// src/utils/on-idle.ts
var onIdle;
var init_on_idle = __esm({
  "src/utils/on-idle.ts"() {
    "use strict";
    onIdle = (callback) => {
      if ("scheduler" in globalThis) {
        globalThis.scheduler.postTask(callback, {
          priority: "background"
        });
        return;
      }
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        requestIdleCallback(callback);
        return;
      }
      setTimeout(callback, 0);
    };
  }
});

// src/utils/get-script-options.ts
var getScriptOptions;
var init_get_script_options = __esm({
  "src/utils/get-script-options.ts"() {
    "use strict";
    getScriptOptions = () => {
      if (typeof window === "undefined") return null;
      try {
        const dataOptions = document.currentScript?.getAttribute("data-options");
        if (!dataOptions) return null;
        return JSON.parse(dataOptions);
      } catch {
        return null;
      }
    };
  }
});

// src/utils/is-enter-code.ts
var isEnterCode;
var init_is_enter_code = __esm({
  "src/utils/is-enter-code.ts"() {
    "use strict";
    isEnterCode = (code) => code === "Enter" || code === "NumpadEnter";
  }
});

// src/core/plugins/copy.ts
var copyPlugin;
var init_copy2 = __esm({
  "src/core/plugins/copy.ts"() {
    "use strict";
    copyPlugin = {
      name: "copy",
      actions: [
        {
          id: "copy",
          label: "Copy",
          shortcut: "C",
          onAction: (context) => {
            context.copy?.();
          }
        }
      ]
    };
  }
});

// src/core/plugins/screenshot.ts
var screenshotPlugin;
var init_screenshot = __esm({
  "src/core/plugins/screenshot.ts"() {
    "use strict";
    init_constants();
    init_capture_screenshot();
    init_is_screenshot_supported();
    init_delay();
    screenshotPlugin = {
      name: "screenshot",
      actions: [
        {
          id: "screenshot",
          label: "Screenshot",
          shortcut: "S",
          enabled: () => isScreenshotSupported(),
          onAction: async (context) => {
            const elementBoundsList = context.elements.map((element) => {
              const rect = element.getBoundingClientRect();
              return {
                x: rect.x + window.scrollX,
                y: rect.y + window.scrollY,
                width: rect.width,
                height: rect.height
              };
            });
            const captureBounds = combineBounds(elementBoundsList);
            if (captureBounds.width === 0 || captureBounds.height === 0) return;
            await context.performWithFeedback(async () => {
              context.hideOverlay();
              await delay(SCREENSHOT_CAPTURE_DELAY_MS);
              try {
                const capturedBlob = await captureElementScreenshot(captureBounds);
                const transformedBlob = await context.hooks.transformScreenshot(
                  capturedBlob,
                  context.elements,
                  captureBounds
                );
                return await copyImageToClipboard(transformedBlob);
              } finally {
                context.showOverlay();
              }
            });
          }
        }
      ]
    };
  }
});

// src/core/plugins/copy-html.ts
var copyHtmlPlugin;
var init_copy_html = __esm({
  "src/core/plugins/copy-html.ts"() {
    "use strict";
    copyHtmlPlugin = {
      name: "copy-html",
      actions: [
        {
          id: "copy-html",
          label: "Copy HTML",
          onAction: async (context) => {
            await context.performWithFeedback(async () => {
              const htmlElements = context.elements.filter(
                (element) => element instanceof HTMLElement
              );
              const combinedHtml = htmlElements.map((element) => element.outerHTML).join("\n\n");
              const transformedHtml = await context.hooks.transformHtmlContent(
                combinedHtml,
                context.elements
              );
              if (!transformedHtml) return false;
              await navigator.clipboard.writeText(transformedHtml);
              return true;
            });
          }
        }
      ]
    };
  }
});

// src/core/plugins/open.ts
var openPlugin;
var init_open = __esm({
  "src/core/plugins/open.ts"() {
    "use strict";
    init_build_open_file_url();
    openPlugin = {
      name: "open",
      actions: [
        {
          id: "open",
          label: "Open",
          shortcut: "O",
          enabled: (context) => Boolean(context.filePath),
          onAction: (context) => {
            if (!context.filePath) return;
            const wasHandled = context.hooks.onOpenFile(
              context.filePath,
              context.lineNumber
            );
            if (!wasHandled) {
              const rawUrl = buildOpenFileUrl(context.filePath, context.lineNumber);
              const url = context.hooks.transformOpenFileUrl(
                rawUrl,
                context.filePath,
                context.lineNumber
              );
              window.open(url, "_blank", "noopener,noreferrer");
            }
            context.hideContextMenu();
            context.cleanup();
          }
        }
      ]
    };
  }
});

// src/core/plugins/comment.ts
var commentPlugin;
var init_comment = __esm({
  "src/core/plugins/comment.ts"() {
    "use strict";
    commentPlugin = {
      name: "comment",
      actions: [
        {
          id: "comment",
          label: "Comment",
          shortcut: "Enter",
          onAction: (context) => {
            context.enterPromptMode?.();
          }
        }
      ]
    };
  }
});

// src/core/index.tsx
var core_exports = {};
__export(core_exports, {
  DEFAULT_THEME: () => DEFAULT_THEME,
  copyContent: () => copyContent,
  formatElementInfo: () => getElementContext,
  generateSnippet: () => generateSnippet,
  getStack: () => getStack,
  init: () => init,
  isInstrumentationActive: () => Ee
});
var builtInPlugins, hasInited, toolbarStateChangeCallbacks, init;
var init_core = __esm({
  "src/core/index.tsx"() {
    "use strict";
    init_web();
    init_web();
    init_styles();
    init_solid();
    init_web();
    init_store2();
    init_is_keyboard_event_triggered_by_input();
    init_mount_root();
    init_renderer();
    init_context();
    init_source();
    init_noop_api();
    init_events();
    init_copy();
    init_get_element_at_position();
    init_is_valid_grabbable_element();
    init_is_root_element();
    init_is_element_connected();
    init_get_elements_in_drag();
    init_create_element_bounds();
    init_clear_all_caches();
    init_create_bounds_from_drag_rect();
    init_get_tag_name();
    init_constants();
    init_get_bounds_center();
    init_is_c_like_key();
    init_is_target_key_combination();
    init_parse_activation_key();
    init_is_event_from_overlay();
    init_build_open_file_url();
    init_capture_screenshot();
    init_is_screenshot_supported();
    init_delay();
    init_resolve_action_enabled();
    init_create_scroll_cycler();
    init_theme();
    init_plugin_registry();
    init_agent();
    init_arrow_navigation();
    init_keyboard_handlers();
    init_auto_scroll();
    init_log_intro();
    init_on_idle();
    init_get_script_options();
    init_is_enter_code();
    init_is_mac();
    init_state();
    init_copy2();
    init_screenshot();
    init_copy_html();
    init_open();
    init_comment();
    init_freeze_animations();
    init_freeze_pseudo_states();
    init_freeze_updates();
    init_context();
    init_dist();
    init_theme();
    init_generate_snippet();
    init_copy_content();
    builtInPlugins = [copyPlugin, commentPlugin, screenshotPlugin, copyHtmlPlugin, openPlugin];
    hasInited = false;
    toolbarStateChangeCallbacks = /* @__PURE__ */ new Set();
    init = (rawOptions) => {
      if (typeof window === "undefined") {
        return createNoopApi();
      }
      const scriptOptions = getScriptOptions();
      const initialOptions = {
        enabled: true,
        activationMode: "toggle",
        keyHoldDuration: DEFAULT_KEY_HOLD_DURATION_MS,
        allowActivationInsideInput: true,
        maxContextLines: 3,
        ...scriptOptions,
        ...rawOptions
      };
      if (initialOptions.enabled === false || hasInited) {
        return createNoopApi();
      }
      hasInited = true;
      if (initialOptions.componentFilter) {
        setComponentFilter(initialOptions.componentFilter);
      }
      logIntro();
      const {
        enabled: _enabled,
        ...settableOptions
      } = initialOptions;
      return createRoot((dispose2) => {
        const pluginRegistry = createPluginRegistry(settableOptions);
        const getAgentFromActions = () => {
          for (const action of pluginRegistry.store.actions) {
            if (action.agent?.provider) {
              return action.agent;
            }
          }
          return void 0;
        };
        const {
          store,
          actions
        } = createGrabStore({
          theme: DEFAULT_THEME,
          hasAgentProvider: Boolean(getAgentFromActions()?.provider),
          keyHoldDuration: pluginRegistry.store.options.keyHoldDuration ?? DEFAULT_KEY_HOLD_DURATION_MS
        });
        const isHoldingKeys = createMemo(() => store.current.state === "holding");
        const isActivated = createMemo(() => store.current.state === "active");
        createEffect(on(isActivated, (activated, previousActivated) => {
          if (activated && !previousActivated) {
            freezePseudoStates();
            freezeGlobalAnimations();
            document.body.style.touchAction = "none";
          } else if (!activated && previousActivated) {
            unfreezePseudoStates();
            unfreezeGlobalAnimations();
            document.body.style.touchAction = "";
          }
        }));
        const isToggleFrozen = createMemo(() => store.current.state === "active" && store.current.phase === "frozen");
        const isDragging = createMemo(() => store.current.state === "active" && store.current.phase === "dragging");
        const didJustDrag = createMemo(() => store.current.state === "active" && store.current.phase === "justDragged");
        const isCopying = createMemo(() => store.current.state === "copying");
        const didJustCopy = createMemo(() => store.current.state === "justCopied");
        const isPromptMode = createMemo(() => store.current.state === "active" && store.current.isPromptMode);
        const isCommentMode = createMemo(() => store.pendingCommentMode || isPromptMode());
        const isPendingDismiss = createMemo(() => store.current.state === "active" && store.current.isPromptMode && store.current.isPendingDismiss);
        const savedToolbarState = loadToolbarState();
        const [isEnabled, setIsEnabled] = createSignal(savedToolbarState?.enabled ?? true);
        const [toolbarShakeCount, setToolbarShakeCount] = createSignal(0);
        const [currentToolbarState, setCurrentToolbarState] = createSignal(savedToolbarState);
        const [isToolbarSelectHovered, setIsToolbarSelectHovered] = createSignal(false);
        const pendingAbortSessionId = createMemo(() => store.pendingAbortSessionId);
        const hasAgentProvider = createMemo(() => store.hasAgentProvider);
        const clearHoldTimer = () => {
          if (holdTimerId !== null) {
            clearTimeout(holdTimerId);
            holdTimerId = null;
          }
        };
        const resetCopyConfirmation = () => {
          copyWaitingForConfirmation = false;
          holdTimerFiredWaitingForConfirmation = false;
          holdStartTimestamp = null;
        };
        createEffect(() => {
          if (store.current.state !== "holding") {
            clearHoldTimer();
            return;
          }
          holdStartTimestamp = Date.now();
          holdTimerId = window.setTimeout(() => {
            holdTimerId = null;
            if (copyWaitingForConfirmation) {
              holdTimerFiredWaitingForConfirmation = true;
              return;
            }
            actions.activate();
          }, store.keyHoldDuration);
          onCleanup(clearHoldTimer);
        });
        createEffect(() => {
          if (store.current.state !== "active" || store.current.phase !== "justDragged") return;
          const timerId = setTimeout(() => {
            actions.finishJustDragged();
          }, FEEDBACK_DURATION_MS);
          onCleanup(() => clearTimeout(timerId));
        });
        createEffect(() => {
          if (store.current.state !== "justCopied") return;
          const timerId = setTimeout(() => {
            actions.finishJustCopied();
          }, FEEDBACK_DURATION_MS);
          onCleanup(() => clearTimeout(timerId));
        });
        let previouslyHoldingKeys = false;
        createEffect(() => {
          const currentlyHolding = isHoldingKeys();
          const currentlyActive = isActivated();
          if (previouslyHoldingKeys && !currentlyHolding && currentlyActive) {
            if (pluginRegistry.store.options.activationMode !== "hold") {
              actions.setWasActivatedByToggle(true);
            }
            pluginRegistry.hooks.onActivate();
          }
          previouslyHoldingKeys = currentlyHolding;
        });
        const elementInputCache = /* @__PURE__ */ new WeakMap();
        const loadCachedInput = (element) => {
          const cachedInput = elementInputCache.get(element);
          actions.setInputText(cachedInput ?? "");
        };
        const preparePromptMode = (element, positionX, positionY) => {
          setCopyStartPosition(element, positionX, positionY);
          loadCachedInput(element);
        };
        const activatePromptMode = () => {
          const element = store.frozenElement || targetElement();
          if (element) {
            actions.enterPromptMode({
              x: store.pointer.x,
              y: store.pointer.y
            }, element);
          }
        };
        const setCopyStartPosition = (element, positionX, positionY) => {
          actions.setCopyStart({
            x: positionX,
            y: positionY
          }, element);
          return createElementBounds(element);
        };
        let lastElementDetectionTime = 0;
        let dragPreviewDebounceTimerId = null;
        const [debouncedDragPointer, setDebouncedDragPointer] = createSignal(null);
        const scheduleDragPreviewUpdate = (clientX, clientY) => {
          if (dragPreviewDebounceTimerId !== null) {
            clearTimeout(dragPreviewDebounceTimerId);
          }
          setDebouncedDragPointer(null);
          dragPreviewDebounceTimerId = window.setTimeout(() => {
            setDebouncedDragPointer({
              x: clientX,
              y: clientY
            });
            dragPreviewDebounceTimerId = null;
          }, DRAG_PREVIEW_DEBOUNCE_MS);
        };
        let keydownSpamTimerId = null;
        let holdTimerId = null;
        let holdStartTimestamp = null;
        let copyWaitingForConfirmation = false;
        let holdTimerFiredWaitingForConfirmation = false;
        let isScreenshotInProgress = false;
        let inToggleFeedbackPeriod = false;
        let toggleFeedbackTimerId = null;
        let actionCycleIdleTimeoutId = null;
        let selectionSourceRequestVersion = 0;
        let componentNameRequestVersion = 0;
        let componentNameDebounceTimerId = null;
        let keyboardSelectedElement = null;
        const [debouncedElementForComponentName, setDebouncedElementForComponentName] = createSignal(null);
        const [resolvedComponentName, setResolvedComponentName] = createSignal(void 0);
        const [actionCycleItems, setActionCycleItems] = createSignal([]);
        const [actionCycleActiveIndex, setActionCycleActiveIndex] = createSignal(null);
        const arrowNavigator = createArrowNavigator(isValidGrabbableElement, createElementBounds);
        const autoScroller = createAutoScroller(() => store.pointer, () => isDragging());
        const isRendererActive = createMemo(() => isActivated() && !isCopying());
        const crosshairVisible = createMemo(() => pluginRegistry.store.theme.enabled && pluginRegistry.store.theme.crosshair.enabled && isRendererActive() && !isDragging() && !store.isTouchMode && !isToggleFrozen() && !isPromptMode() && store.contextMenuPosition === null);
        const grabbedBoxTimeouts = /* @__PURE__ */ new Map();
        const showTemporaryGrabbedBox = (bounds, element) => {
          const boxId = `grabbed-${Date.now()}-${Math.random()}`;
          const createdAt = Date.now();
          const newBox = {
            id: boxId,
            bounds,
            createdAt,
            element
          };
          actions.addGrabbedBox(newBox);
          pluginRegistry.hooks.onGrabbedBox(bounds, element);
          const timeoutId = window.setTimeout(() => {
            grabbedBoxTimeouts.delete(boxId);
            actions.removeGrabbedBox(boxId);
          }, FEEDBACK_DURATION_MS);
          grabbedBoxTimeouts.set(boxId, timeoutId);
        };
        const notifyElementsSelected = async (elements) => {
          const elementsPayload = await Promise.all(elements.map(async (element) => {
            const stack = await getStack(element);
            let componentName = null;
            let filePath;
            let lineNumber;
            let columnNumber;
            if (stack && stack.length > 0) {
              for (const frame of stack) {
                const hasSourceComponentName = frame.functionName && checkIsSourceComponentName(frame.functionName);
                const hasSourceFile = frame.fileName && Pe2(frame.fileName);
                if (hasSourceComponentName && !componentName) {
                  componentName = frame.functionName;
                }
                if (hasSourceFile && !filePath) {
                  filePath = Ne2(frame.fileName);
                  lineNumber = frame.lineNumber || void 0;
                  columnNumber = frame.columnNumber || void 0;
                }
                if (componentName && filePath) break;
              }
            }
            if (!componentName) {
              componentName = getComponentDisplayName(element);
            }
            const textContent = element instanceof HTMLElement ? element.innerText?.slice(0, 100) : void 0;
            return {
              tagName: getTagName(element),
              id: element.id || void 0,
              className: element.getAttribute("class") || void 0,
              textContent,
              componentName: componentName ?? void 0,
              filePath,
              lineNumber,
              columnNumber
            };
          }));
          window.dispatchEvent(new CustomEvent("react-grab:element-selected", {
            detail: {
              elements: elementsPayload
            }
          }));
        };
        const createLabelInstance = (bounds, tagName, componentName, status, element, mouseX, elements, boundsMultiple) => {
          actions.clearLabelInstances();
          const instanceId = `label-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          const boundsCenterX = bounds.x + bounds.width / 2;
          const boundsHalfWidth = bounds.width / 2;
          const mouseXOffset = mouseX !== void 0 ? mouseX - boundsCenterX : void 0;
          const instance = {
            id: instanceId,
            bounds,
            boundsMultiple,
            tagName,
            componentName,
            status,
            createdAt: Date.now(),
            element,
            elements,
            mouseX,
            mouseXOffsetFromCenter: mouseXOffset,
            mouseXOffsetRatio: mouseXOffset !== void 0 && boundsHalfWidth > 0 ? mouseXOffset / boundsHalfWidth : void 0
          };
          actions.addLabelInstance(instance);
          return instanceId;
        };
        const updateLabelInstance = (instanceId, status, errorMessage) => {
          actions.updateLabelInstance(instanceId, status, errorMessage);
        };
        const removeLabelInstance = (instanceId) => {
          labelFadeTimeouts.delete(instanceId);
          actions.removeLabelInstance(instanceId);
        };
        const labelFadeTimeouts = /* @__PURE__ */ new Map();
        const cancelLabelFade = (instanceId) => {
          const existingTimeout = labelFadeTimeouts.get(instanceId);
          if (existingTimeout !== void 0) {
            window.clearTimeout(existingTimeout);
            labelFadeTimeouts.delete(instanceId);
          }
        };
        const scheduleLabelFade = (instanceId) => {
          cancelLabelFade(instanceId);
          const timeoutId = window.setTimeout(() => {
            labelFadeTimeouts.delete(instanceId);
            updateLabelInstance(instanceId, "fading");
            setTimeout(() => {
              removeLabelInstance(instanceId);
            }, FADE_COMPLETE_BUFFER_MS);
          }, FEEDBACK_DURATION_MS);
          labelFadeTimeouts.set(instanceId, timeoutId);
        };
        const handleLabelInstanceHoverChange = (instanceId, isHovered) => {
          if (isHovered) {
            cancelLabelFade(instanceId);
          } else {
            const instance = store.labelInstances.find((labelInstance) => labelInstance.id === instanceId);
            if (instance && instance.status === "copied") {
              scheduleLabelFade(instanceId);
            }
          }
        };
        const executeCopyOperation = async (positionX, positionY, operation, bounds, tagName, componentName, element, shouldDeactivateAfter, elements) => {
          inToggleFeedbackPeriod = false;
          actions.startCopy();
          const instanceId = bounds && tagName ? createLabelInstance(bounds, tagName, componentName, "copying", element, positionX, elements) : null;
          await operation().finally(() => {
            actions.completeCopy(element);
            if (instanceId) {
              updateLabelInstance(instanceId, "copied");
              scheduleLabelFade(instanceId);
            }
            if (shouldDeactivateAfter) {
              deactivateRenderer();
            } else {
              actions.activate();
              inToggleFeedbackPeriod = true;
              if (toggleFeedbackTimerId !== null) {
                window.clearTimeout(toggleFeedbackTimerId);
              }
              toggleFeedbackTimerId = window.setTimeout(() => {
                inToggleFeedbackPeriod = false;
                toggleFeedbackTimerId = null;
              }, FEEDBACK_DURATION_MS);
            }
          });
        };
        const copyWithFallback = (elements, extraPrompt) => {
          const firstElement = elements[0];
          const componentName = firstElement ? getComponentDisplayName(firstElement) : null;
          const tagName = firstElement ? getTagName(firstElement) : null;
          const elementName = componentName ?? tagName ?? void 0;
          return tryCopyWithFallback({
            maxContextLines: pluginRegistry.store.options.maxContextLines,
            getContent: pluginRegistry.store.options.getContent,
            componentName: elementName
          }, {
            onBeforeCopy: pluginRegistry.hooks.onBeforeCopy,
            transformSnippet: pluginRegistry.hooks.transformSnippet,
            transformCopyContent: pluginRegistry.hooks.transformCopyContent,
            onAfterCopy: pluginRegistry.hooks.onAfterCopy,
            onCopySuccess: pluginRegistry.hooks.onCopySuccess,
            onCopyError: pluginRegistry.hooks.onCopyError
          }, elements, extraPrompt);
        };
        const copyElementsToClipboard = async (targetElements, extraPrompt) => {
          if (targetElements.length === 0) return;
          for (const element of targetElements) {
            pluginRegistry.hooks.onElementSelect(element);
            if (pluginRegistry.store.theme.grabbedBoxes.enabled) {
              showTemporaryGrabbedBox(createElementBounds(element), element);
            }
          }
          await new Promise((resolve) => requestAnimationFrame(resolve));
          await copyWithFallback(targetElements, extraPrompt);
          void notifyElementsSelected(targetElements);
        };
        const performCopyWithLabel = ({
          element,
          positionX,
          positionY,
          elements,
          extraPrompt,
          shouldDeactivateAfter,
          onComplete,
          dragRect: passedDragRect
        }) => {
          const allElements = elements ?? [element];
          const dragRect = passedDragRect ?? store.frozenDragRect;
          let overlayBounds;
          if (dragRect && allElements.length > 1) {
            overlayBounds = createBoundsFromDragRect(dragRect);
          } else {
            overlayBounds = createFlatOverlayBounds(createElementBounds(element));
          }
          const labelPositionX = allElements.length > 1 ? overlayBounds.x + overlayBounds.width / 2 : positionX;
          const tagName = getTagName(element);
          void getNearestComponentName(element).then((componentName) => {
            void executeCopyOperation(labelPositionX, positionY, () => copyElementsToClipboard(allElements, extraPrompt), overlayBounds, tagName, componentName ?? void 0, element, shouldDeactivateAfter, elements).then(() => {
              onComplete?.();
            });
          });
        };
        const targetElement = createMemo(() => {
          if (!isRendererActive() || isDragging()) return null;
          const element = store.detectedElement;
          if (!isElementConnected(element)) return null;
          return element;
        });
        const effectiveElement = createMemo(() => store.frozenElement || (isToggleFrozen() ? null : targetElement()));
        createEffect(() => {
          const element = store.detectedElement;
          if (!element) return;
          const intervalId = setInterval(() => {
            if (!isElementConnected(element)) {
              actions.setDetectedElement(null);
            }
          }, BOUNDS_RECALC_INTERVAL_MS);
          onCleanup(() => clearInterval(intervalId));
        });
        createEffect(on(() => effectiveElement(), (element) => {
          if (componentNameDebounceTimerId !== null) {
            clearTimeout(componentNameDebounceTimerId);
          }
          if (!element) {
            setDebouncedElementForComponentName(null);
            return;
          }
          componentNameDebounceTimerId = window.setTimeout(() => {
            componentNameDebounceTimerId = null;
            setDebouncedElementForComponentName(element);
          }, COMPONENT_NAME_DEBOUNCE_MS);
          onCleanup(() => {
            if (componentNameDebounceTimerId !== null) {
              clearTimeout(componentNameDebounceTimerId);
              componentNameDebounceTimerId = null;
            }
          });
        }));
        createEffect(() => {
          const elements = store.frozenElements;
          const cleanup = freezeAnimations(elements);
          onCleanup(cleanup);
        });
        createEffect(on(isActivated, (activated) => {
          if (!activated) return;
          if (!pluginRegistry.store.options.freezeReactUpdates) return;
          const unfreezeUpdates = freezeUpdates();
          onCleanup(unfreezeUpdates);
        }));
        const getSelectionElement = () => {
          if (store.isTouchMode && isDragging()) {
            const detected = store.detectedElement;
            if (!detected || isRootElement(detected)) return void 0;
            return detected;
          }
          const element = effectiveElement();
          if (!element || isRootElement(element)) return void 0;
          return element;
        };
        const selectionElement = createMemo(() => getSelectionElement());
        const isSelectionElementVisible = () => {
          const element = getSelectionElement();
          if (!element) return false;
          if (store.isTouchMode && isDragging()) {
            return isRendererActive();
          }
          return isRendererActive() && !isDragging();
        };
        const frozenElementsBounds = createMemo(() => {
          void store.viewportVersion;
          const frozenElements2 = store.frozenElements;
          if (frozenElements2.length === 0) return [];
          const dragRect = store.frozenDragRect;
          if (dragRect && frozenElements2.length > 1) {
            return [createBoundsFromDragRect(dragRect)];
          }
          return frozenElements2.filter((element) => element !== null).map((element) => createElementBounds(element));
        });
        const selectionBounds = createMemo(() => {
          void store.viewportVersion;
          const frozenElements2 = store.frozenElements;
          if (frozenElements2.length > 0) {
            const frozenBounds = frozenElementsBounds();
            if (frozenElements2.length === 1) {
              const firstBounds = frozenBounds[0];
              if (firstBounds) return firstBounds;
            }
            const dragRect = store.frozenDragRect;
            if (dragRect) {
              const dragBounds2 = frozenBounds[0];
              return dragBounds2 ?? createBoundsFromDragRect(dragRect);
            }
            return createFlatOverlayBounds(combineBounds(frozenBounds));
          }
          const element = getSelectionElement();
          if (!element) return void 0;
          return createElementBounds(element);
        });
        const frozenElementsCount = createMemo(() => store.frozenElements.length);
        const calculateDragDistance = (endX, endY) => {
          const endPageX = endX + window.scrollX;
          const endPageY = endY + window.scrollY;
          return {
            x: Math.abs(endPageX - store.dragStart.x),
            y: Math.abs(endPageY - store.dragStart.y)
          };
        };
        const isDraggingBeyondThreshold = createMemo(() => {
          if (!isDragging()) return false;
          const dragDistance = calculateDragDistance(store.pointer.x, store.pointer.y);
          return dragDistance.x > DRAG_THRESHOLD_PX || dragDistance.y > DRAG_THRESHOLD_PX;
        });
        const calculateDragRectangle = (endX, endY) => {
          const endPageX = endX + window.scrollX;
          const endPageY = endY + window.scrollY;
          const dragPageX = Math.min(store.dragStart.x, endPageX);
          const dragPageY = Math.min(store.dragStart.y, endPageY);
          const dragWidth = Math.abs(endPageX - store.dragStart.x);
          const dragHeight = Math.abs(endPageY - store.dragStart.y);
          return {
            x: dragPageX - window.scrollX,
            y: dragPageY - window.scrollY,
            width: dragWidth,
            height: dragHeight
          };
        };
        const dragBounds = createMemo(() => {
          void store.viewportVersion;
          if (!isDraggingBeyondThreshold()) return void 0;
          const drag = calculateDragRectangle(store.pointer.x, store.pointer.y);
          return {
            borderRadius: "0px",
            height: drag.height,
            transform: "none",
            width: drag.width,
            x: drag.x,
            y: drag.y
          };
        });
        const dragPreviewBounds = createMemo(() => {
          void store.viewportVersion;
          if (!isDraggingBeyondThreshold()) return [];
          const pointer = debouncedDragPointer();
          if (!pointer) return [];
          const drag = calculateDragRectangle(pointer.x, pointer.y);
          const elements = getElementsInDrag(drag, isValidGrabbableElement);
          const previewElements = elements.length > 0 ? elements : getElementsInDrag(drag, isValidGrabbableElement, false);
          return previewElements.map((element) => createElementBounds(element));
        });
        const selectionBoundsMultiple = createMemo(() => {
          const previewBounds = dragPreviewBounds();
          if (previewBounds.length > 0) {
            return previewBounds;
          }
          return frozenElementsBounds();
        });
        const cursorPosition = createMemo(() => {
          if (isCopying() || isPromptMode()) {
            void store.viewportVersion;
            const element = store.frozenElement || targetElement();
            if (element) {
              const bounds = createElementBounds(element);
              return {
                x: getBoundsCenter(bounds).x + store.copyOffsetFromCenterX,
                y: store.copyStart.y
              };
            }
            return {
              x: store.copyStart.x,
              y: store.copyStart.y
            };
          }
          return {
            x: store.pointer.x,
            y: store.pointer.y
          };
        });
        createEffect(on(() => [targetElement(), store.lastGrabbedElement], ([currentElement, lastElement]) => {
          if (lastElement && currentElement && lastElement !== currentElement) {
            actions.setLastGrabbed(null);
          }
          if (currentElement) {
            pluginRegistry.hooks.onElementHover(currentElement);
          }
        }));
        createEffect(on(() => targetElement(), (element) => {
          const currentVersion = ++selectionSourceRequestVersion;
          const clearSource = () => {
            if (selectionSourceRequestVersion === currentVersion) {
              actions.setSelectionSource(null, null);
            }
          };
          if (!element) {
            clearSource();
            return;
          }
          getStack(element).then((stack) => {
            if (selectionSourceRequestVersion !== currentVersion) return;
            if (!stack) return;
            for (const frame of stack) {
              if (frame.fileName && Pe2(frame.fileName)) {
                actions.setSelectionSource(Ne2(frame.fileName), frame.lineNumber ?? null);
                return;
              }
            }
            clearSource();
          }).catch(() => {
            if (selectionSourceRequestVersion === currentVersion) {
              actions.setSelectionSource(null, null);
            }
          });
        }));
        createEffect(on(() => store.viewportVersion, () => agentManager._internal.updateBoundsOnViewportChange()));
        createEffect(on(() => [isActivated(), isDragging(), isCopying(), isPromptMode(), crosshairVisible(), targetElement(), dragBounds(), store.grabbedBoxes, pluginRegistry.store.theme.enabled, pluginRegistry.store.theme.selectionBox.enabled, pluginRegistry.store.theme.dragBox.enabled, isDraggingBeyondThreshold(), effectiveElement(), didJustCopy(), currentToolbarState()], ([active, dragging, copying, inputMode, isCrosshairVisible, target, drag, grabbedBoxes, themeEnabled, selectionBoxEnabled, dragBoxEnabled, draggingBeyondThreshold, effectiveTarget, justCopied, toolbarState]) => {
          const isSelectionBoxVisible = Boolean(themeEnabled && selectionBoxEnabled && active && !copying && !justCopied && !dragging && effectiveTarget != null);
          const isDragBoxVisible = Boolean(themeEnabled && dragBoxEnabled && active && !copying && draggingBeyondThreshold);
          pluginRegistry.hooks.onStateChange({
            isActive: active,
            isDragging: dragging,
            isCopying: copying,
            isPromptMode: inputMode,
            isCrosshairVisible: isCrosshairVisible ?? false,
            isSelectionBoxVisible,
            isDragBoxVisible,
            targetElement: target,
            dragBounds: drag ? {
              x: drag.x,
              y: drag.y,
              width: drag.width,
              height: drag.height
            } : null,
            grabbedBoxes: grabbedBoxes.map((box) => ({
              id: box.id,
              bounds: box.bounds,
              createdAt: box.createdAt
            })),
            selectionFilePath: store.selectionFilePath,
            toolbarState
          });
        }));
        createEffect(on(() => [isPromptMode(), store.pointer.x, store.pointer.y, targetElement()], ([inputMode, x3, y3, target]) => {
          pluginRegistry.hooks.onPromptModeChange(inputMode, {
            x: x3,
            y: y3,
            targetElement: target
          });
        }));
        createEffect(on(() => [selectionVisible(), selectionBounds(), targetElement()], ([visible, bounds, element]) => {
          pluginRegistry.hooks.onSelectionBox(Boolean(visible), bounds ?? null, element);
        }));
        createEffect(on(() => [dragVisible(), dragBounds()], ([visible, bounds]) => {
          pluginRegistry.hooks.onDragBox(Boolean(visible), bounds ?? null);
        }));
        createEffect(on(() => [crosshairVisible(), store.pointer.x, store.pointer.y], ([visible, x3, y3]) => {
          pluginRegistry.hooks.onCrosshair(Boolean(visible), {
            x: x3,
            y: y3
          });
        }));
        createEffect(on(() => [labelVisible(), labelVariant(), cursorPosition(), targetElement(), store.selectionFilePath, store.selectionLineNumber], ([visible, variant, position, element, filePath, lineNumber]) => {
          pluginRegistry.hooks.onElementLabel(Boolean(visible), variant, {
            x: position.x,
            y: position.y,
            content: "",
            element: element ?? void 0,
            tagName: element ? getTagName(element) || void 0 : void 0,
            filePath: filePath ?? void 0,
            lineNumber: lineNumber ?? void 0
          });
        }));
        let cursorStyleElement = null;
        const setCursorOverride = (cursor) => {
          if (cursor) {
            if (!cursorStyleElement) {
              cursorStyleElement = document.createElement("style");
              cursorStyleElement.setAttribute("data-react-grab-cursor", "");
              document.head.appendChild(cursorStyleElement);
            }
            cursorStyleElement.textContent = `* { cursor: ${cursor} !important; }`;
          } else if (cursorStyleElement) {
            cursorStyleElement.remove();
            cursorStyleElement = null;
          }
        };
        createEffect(on(() => [isActivated(), isCopying(), isPromptMode()], ([activated, copying, inputMode]) => {
          if (copying) {
            setCursorOverride("progress");
          } else if (activated && !inputMode) {
            setCursorOverride("crosshair");
          } else {
            setCursorOverride(null);
          }
        }));
        const activateRenderer = () => {
          const wasInHoldingState = isHoldingKeys();
          actions.activate();
          if (!wasInHoldingState) {
            pluginRegistry.hooks.onActivate();
          }
        };
        const deactivateRenderer = () => {
          const wasDragging = isDragging();
          const previousFocused = store.previouslyFocusedElement;
          actions.deactivate();
          arrowNavigator.clearHistory();
          keyboardSelectedElement = null;
          if (wasDragging) {
            document.body.style.userSelect = "";
          }
          if (keydownSpamTimerId) window.clearTimeout(keydownSpamTimerId);
          autoScroller.stop();
          if (previousFocused instanceof HTMLElement && isElementConnected(previousFocused)) {
            previousFocused.focus();
          }
          pluginRegistry.hooks.onDeactivate();
        };
        const toggleActivate = () => {
          actions.setWasActivatedByToggle(true);
          activateRenderer();
        };
        const restoreInputFromSession = (session, elements, agent) => {
          const element = elements[0];
          if (isElementConnected(element)) {
            const rect = element.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            actions.setPointer({
              x: session.position.x,
              y: centerY
            });
            actions.setFrozenElements(elements);
            actions.setInputText(session.context.prompt);
            actions.setWasActivatedByToggle(true);
            if (agent) {
              actions.setSelectedAgent(agent);
            }
            if (!isActivated()) {
              activateRenderer();
            }
          }
        };
        const wrapAgentWithCallbacks = (agent) => {
          return {
            ...agent,
            onAbort: (session, elements) => {
              agent.onAbort?.(session, elements);
              restoreInputFromSession(session, elements, agent);
            },
            onUndo: (session, elements) => {
              agent.onUndo?.(session, elements);
              restoreInputFromSession(session, elements, agent);
            }
          };
        };
        const getAgentOptionsWithCallbacks = () => {
          const agent = getAgentFromActions();
          if (!agent) return void 0;
          return wrapAgentWithCallbacks(agent);
        };
        const agentManager = createAgentManager(getAgentOptionsWithCallbacks(), {
          transformAgentContext: pluginRegistry.hooks.transformAgentContext
        });
        const handleInputChange = (value) => {
          actions.setInputText(value);
        };
        const handleInputSubmit = () => {
          actions.setLastCopied(null);
          const frozenElements2 = [...store.frozenElements];
          const element = store.frozenElement || targetElement();
          const prompt = isPromptMode() ? store.inputText.trim() : "";
          if (!element) {
            deactivateRenderer();
            return;
          }
          const elements = frozenElements2.length > 0 ? frozenElements2 : element ? [element] : [];
          const currentSelectionBounds = elements.map((el) => createElementBounds(el));
          const firstBounds = currentSelectionBounds[0];
          const currentX = firstBounds.x + firstBounds.width / 2;
          const currentY = firstBounds.y + firstBounds.height / 2;
          const labelPositionX = currentX + store.copyOffsetFromCenterX;
          if ((store.selectedAgent || hasAgentProvider()) && prompt) {
            elementInputCache.delete(element);
            const currentReplySessionId = store.replySessionId;
            const selectedAgent = store.selectedAgent;
            deactivateRenderer();
            actions.setReplySessionId(null);
            actions.clearSelectedAgent();
            void agentManager.session.start({
              elements,
              prompt,
              position: {
                x: labelPositionX,
                y: currentY
              },
              selectionBounds: currentSelectionBounds,
              sessionId: currentReplySessionId ?? void 0,
              agent: selectedAgent ? wrapAgentWithCallbacks(selectedAgent) : void 0
            });
            return;
          }
          actions.setPointer({
            x: currentX,
            y: currentY
          });
          actions.exitPromptMode();
          actions.clearInputText();
          actions.clearReplySessionId();
          if (prompt) {
            elementInputCache.set(element, prompt);
          } else {
            elementInputCache.delete(element);
          }
          performCopyWithLabel({
            element,
            positionX: labelPositionX,
            positionY: currentY,
            elements,
            extraPrompt: prompt || void 0,
            onComplete: deactivateRenderer
          });
        };
        const handleInputCancel = () => {
          actions.setLastCopied(null);
          if (!isPromptMode()) return;
          const currentInput = store.inputText.trim();
          if (currentInput && !isPendingDismiss()) {
            actions.setPendingDismiss(true);
            return;
          }
          const element = store.frozenElement || targetElement();
          if (element && currentInput) {
            elementInputCache.set(element, currentInput);
          }
          actions.clearInputText();
          actions.clearReplySessionId();
          deactivateRenderer();
        };
        const handleConfirmDismiss = () => {
          actions.clearInputText();
          actions.clearReplySessionId();
          deactivateRenderer();
        };
        const handleCancelDismiss = () => {
          actions.setPendingDismiss(false);
        };
        const handleAgentAbort = (sessionId, confirmed) => {
          actions.setPendingAbortSessionId(null);
          if (confirmed) {
            agentManager.session.abort(sessionId);
          }
        };
        const handleToggleExpand = () => {
          const element = store.frozenElement || targetElement();
          if (element) {
            preparePromptMode(element, store.pointer.x, store.pointer.y);
          }
          activatePromptMode();
        };
        const handleFollowUpSubmit = (sessionId, prompt) => {
          const session = agentManager.sessions().get(sessionId);
          const elements = agentManager.session.getElements(sessionId);
          const sessionBounds = session?.selectionBounds ?? [];
          const firstBounds = sessionBounds[0];
          if (session && elements.length > 0 && firstBounds) {
            const positionX = session.position.x;
            const followUpSessionId = session.context.sessionId ?? sessionId;
            agentManager.session.dismiss(sessionId);
            void agentManager.session.start({
              elements,
              prompt,
              position: {
                x: positionX,
                y: firstBounds.y + firstBounds.height / 2
              },
              selectionBounds: sessionBounds,
              sessionId: followUpSessionId
            });
          }
        };
        const handleAcknowledgeError = (sessionId) => {
          const prompt = agentManager.session.acknowledgeError(sessionId);
          if (prompt) {
            actions.setInputText(prompt);
          }
        };
        const handleToggleActive = () => {
          if (isActivated()) {
            deactivateRenderer();
          } else if (isEnabled()) {
            toggleActivate();
          }
        };
        const enterCommentModeForElement = (element, positionX, positionY) => {
          actions.setPendingCommentMode(false);
          loadCachedInput(element);
          actions.enterPromptMode({
            x: positionX,
            y: positionY
          }, element);
        };
        const handleComment = () => {
          if (!isEnabled()) return;
          const isAlreadyInCommentMode = isActivated() && isCommentMode();
          if (isAlreadyInCommentMode) {
            deactivateRenderer();
            return;
          }
          actions.setPendingCommentMode(true);
          if (!isActivated()) {
            toggleActivate();
          }
        };
        const handleToggleEnabled = () => {
          const newEnabled = !isEnabled();
          setIsEnabled(newEnabled);
          const currentState = loadToolbarState();
          const newState = {
            edge: currentState?.edge ?? "bottom",
            ratio: currentState?.ratio ?? 0.5,
            collapsed: currentState?.collapsed ?? false,
            enabled: newEnabled
          };
          saveToolbarState(newState);
          setCurrentToolbarState(newState);
          toolbarStateChangeCallbacks.forEach((cb) => cb(newState));
          if (!newEnabled) {
            if (isHoldingKeys()) {
              actions.release();
            }
            if (isActivated()) {
              deactivateRenderer();
            }
            if (toggleFeedbackTimerId !== null) {
              window.clearTimeout(toggleFeedbackTimerId);
              toggleFeedbackTimerId = null;
            }
            inToggleFeedbackPeriod = false;
          }
        };
        const handlePointerMove = (clientX, clientY) => {
          if (!isEnabled() || isPromptMode() || isToggleFrozen() || store.contextMenuPosition !== null) return;
          actions.setPointer({
            x: clientX,
            y: clientY
          });
          const now = performance.now();
          if (now - lastElementDetectionTime >= ELEMENT_DETECTION_THROTTLE_MS) {
            lastElementDetectionTime = now;
            onIdle(() => {
              const candidate = getElementAtPosition(clientX, clientY);
              actions.setDetectedElement(candidate);
            });
          }
          if (isDragging()) {
            scheduleDragPreviewUpdate(clientX, clientY);
            const direction = getAutoScrollDirection(clientX, clientY);
            const isNearEdge = direction.top || direction.bottom || direction.left || direction.right;
            if (isNearEdge && !autoScroller.isActive()) {
              autoScroller.start();
            } else if (!isNearEdge && autoScroller.isActive()) {
              autoScroller.stop();
            }
          }
        };
        const handlePointerDown = (clientX, clientY) => {
          if (!isRendererActive() || isCopying()) return false;
          actions.startDrag({
            x: clientX,
            y: clientY
          });
          actions.setPointer({
            x: clientX,
            y: clientY
          });
          document.body.style.userSelect = "none";
          scheduleDragPreviewUpdate(clientX, clientY);
          pluginRegistry.hooks.onDragStart(clientX + window.scrollX, clientY + window.scrollY);
          return true;
        };
        const handleDragSelection = (dragSelectionRect, hasModifierKeyHeld) => {
          const elements = getElementsInDrag(dragSelectionRect, isValidGrabbableElement);
          const selectedElements = elements.length > 0 ? elements : getElementsInDrag(dragSelectionRect, isValidGrabbableElement, false);
          if (selectedElements.length === 0) return;
          freezeAllAnimations(selectedElements);
          pluginRegistry.hooks.onDragEnd(selectedElements, dragSelectionRect);
          const firstElement = selectedElements[0];
          const center = getBoundsCenter(createElementBounds(firstElement));
          actions.setPointer(center);
          actions.setFrozenElements(selectedElements);
          const dragRect = createPageRectFromBounds(dragSelectionRect);
          actions.setFrozenDragRect(dragRect);
          actions.freeze();
          actions.setLastGrabbed(firstElement);
          if (store.pendingCommentMode) {
            enterCommentModeForElement(firstElement, center.x, center.y);
            return;
          }
          const shouldDeactivateAfter = store.wasActivatedByToggle && !hasModifierKeyHeld;
          performCopyWithLabel({
            element: firstElement,
            positionX: center.x,
            positionY: center.y,
            elements: selectedElements,
            shouldDeactivateAfter,
            dragRect
          });
        };
        const handleSingleClick = (clientX, clientY, hasModifierKeyHeld) => {
          const validFrozenElement = isElementConnected(store.frozenElement) ? store.frozenElement : null;
          const validKeyboardSelectedElement = isElementConnected(keyboardSelectedElement) ? keyboardSelectedElement : null;
          const element = validFrozenElement ?? validKeyboardSelectedElement ?? getElementAtPosition(clientX, clientY) ?? (isElementConnected(store.detectedElement) ? store.detectedElement : null);
          if (!element) return;
          const didSelectViaKeyboard = !validFrozenElement && validKeyboardSelectedElement === element;
          let positionX;
          let positionY;
          if (validFrozenElement) {
            positionX = store.pointer.x;
            positionY = store.pointer.y;
          } else if (didSelectViaKeyboard) {
            const elementCenter = getBoundsCenter(createElementBounds(element));
            positionX = elementCenter.x;
            positionY = elementCenter.y;
          } else {
            positionX = clientX;
            positionY = clientY;
          }
          keyboardSelectedElement = null;
          if (store.pendingCommentMode) {
            enterCommentModeForElement(element, positionX, positionY);
            return;
          }
          const shouldDeactivateAfter = store.wasActivatedByToggle && !hasModifierKeyHeld;
          actions.setLastGrabbed(element);
          performCopyWithLabel({
            element,
            positionX,
            positionY,
            shouldDeactivateAfter
          });
        };
        const handlePointerUp = (clientX, clientY, hasModifierKeyHeld) => {
          if (!isDragging()) return;
          if (dragPreviewDebounceTimerId !== null) {
            clearTimeout(dragPreviewDebounceTimerId);
            dragPreviewDebounceTimerId = null;
          }
          setDebouncedDragPointer(null);
          const dragDistance = calculateDragDistance(clientX, clientY);
          const wasDragGesture = dragDistance.x > DRAG_THRESHOLD_PX || dragDistance.y > DRAG_THRESHOLD_PX;
          const dragSelectionRect = wasDragGesture ? calculateDragRectangle(clientX, clientY) : null;
          if (wasDragGesture) {
            actions.endDrag();
          } else {
            actions.cancelDrag();
          }
          autoScroller.stop();
          document.body.style.userSelect = "";
          if (dragSelectionRect) {
            handleDragSelection(dragSelectionRect, hasModifierKeyHeld);
          } else {
            handleSingleClick(clientX, clientY, hasModifierKeyHeld);
          }
        };
        const eventListenerManager = createEventListenerManager();
        const keyboardClaimer = setupKeyboardEventClaimer();
        const blockEnterIfNeeded = (event) => {
          let originalKey;
          try {
            originalKey = keyboardClaimer.originalKeyDescriptor?.get ? keyboardClaimer.originalKeyDescriptor.get.call(event) : event.key;
          } catch {
            return false;
          }
          const isEnterKey = originalKey === "Enter" || isEnterCode(event.code);
          const isOverlayActive = isActivated() || isHoldingKeys();
          const shouldBlockEnter = isEnterKey && isOverlayActive && !isPromptMode() && !store.wasActivatedByToggle;
          if (shouldBlockEnter) {
            keyboardClaimer.claimedEvents.add(event);
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            return true;
          }
          return false;
        };
        eventListenerManager.addDocumentListener("keydown", blockEnterIfNeeded, {
          capture: true
        });
        eventListenerManager.addDocumentListener("keyup", blockEnterIfNeeded, {
          capture: true
        });
        eventListenerManager.addDocumentListener("keypress", blockEnterIfNeeded, {
          capture: true
        });
        const handleUndoRedoKeys = (event) => {
          const isUndoOrRedo = event.code === "KeyZ" && (event.metaKey || event.ctrlKey);
          if (!isUndoOrRedo) return false;
          const hasActiveConfirmation = Array.from(agentManager.sessions().values()).some((session) => !session.isStreaming && !session.error);
          if (hasActiveConfirmation) return false;
          const isRedo = event.shiftKey;
          if (isRedo && agentManager.canRedo()) {
            event.preventDefault();
            event.stopPropagation();
            agentManager.history.redo();
            return true;
          } else if (!isRedo && agentManager.canUndo()) {
            event.preventDefault();
            event.stopPropagation();
            agentManager.history.undo();
            return true;
          }
          return false;
        };
        const handleArrowNavigation = (event) => {
          if (!isActivated() || isPromptMode()) return false;
          if (!ARROW_KEYS.has(event.key)) return false;
          let currentElement = effectiveElement();
          const isInitialSelection = !currentElement;
          if (!currentElement) {
            const viewportCenterX = window.innerWidth / 2;
            const viewportCenterY = window.innerHeight / 2;
            currentElement = getElementAtPosition(viewportCenterX, viewportCenterY);
          }
          if (!currentElement) return false;
          const nextElement = arrowNavigator.findNext(event.key, currentElement);
          if (!nextElement && !isInitialSelection) return false;
          const elementToSelect = nextElement ?? currentElement;
          event.preventDefault();
          event.stopPropagation();
          actions.setFrozenElement(elementToSelect);
          actions.freeze();
          keyboardSelectedElement = elementToSelect;
          const selectionBounds2 = createElementBounds(elementToSelect);
          const selectionCenter = getBoundsCenter(selectionBounds2);
          actions.setPointer(selectionCenter);
          if (store.contextMenuPosition !== null) {
            actions.showContextMenu(selectionCenter, elementToSelect);
          }
          return true;
        };
        const handleEnterKeyActivation = (event) => {
          if (!isEnterCode(event.code)) return false;
          const copiedElement = store.lastCopiedElement;
          const canActivateFromCopied = !isHoldingKeys() && !isPromptMode() && !isActivated() && copiedElement && isElementConnected(copiedElement) && !store.labelInstances.some((instance) => instance.status === "copied" || instance.status === "fading");
          if (canActivateFromCopied) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            const center = getBoundsCenter(createElementBounds(copiedElement));
            actions.setPointer(center);
            preparePromptMode(copiedElement, center.x, center.y);
            actions.setFrozenElement(copiedElement);
            actions.setLastCopied(null);
            activatePromptMode();
            if (!isActivated()) {
              activateRenderer();
            }
            return true;
          }
          const canActivateFromHolding = isHoldingKeys() && !isPromptMode();
          if (canActivateFromHolding) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            const element = store.frozenElement || targetElement();
            if (element) {
              preparePromptMode(element, store.pointer.x, store.pointer.y);
            }
            actions.setPointer({
              x: store.pointer.x,
              y: store.pointer.y
            });
            if (element) {
              actions.setFrozenElement(element);
            }
            activatePromptMode();
            if (keydownSpamTimerId !== null) {
              window.clearTimeout(keydownSpamTimerId);
              keydownSpamTimerId = null;
            }
            if (!isActivated()) {
              activateRenderer();
            }
            return true;
          }
          return false;
        };
        const handleOpenFileShortcut = (event) => {
          if (event.key?.toLowerCase() !== "o" || isPromptMode()) return false;
          if (!isActivated() || !(event.metaKey || event.ctrlKey)) return false;
          const filePath = store.selectionFilePath;
          const lineNumber = store.selectionLineNumber;
          if (!filePath) return false;
          event.preventDefault();
          event.stopPropagation();
          const wasHandled = pluginRegistry.hooks.onOpenFile(filePath, lineNumber ?? void 0);
          if (!wasHandled) {
            const rawUrl = buildOpenFileUrl(filePath, lineNumber ?? void 0);
            const url = pluginRegistry.hooks.transformOpenFileUrl(rawUrl, filePath, lineNumber ?? void 0);
            window.open(url, "_blank", "noopener,noreferrer");
          }
          return true;
        };
        const handleScreenshotShortcut = (event) => {
          if (!isScreenshotSupported()) return false;
          if (store.contextMenuPosition !== null) return false;
          if (event.key?.toLowerCase() !== "s" || isPromptMode()) return false;
          if (!isActivated() || !(event.metaKey || event.ctrlKey)) return false;
          const allBounds = frozenElementsBounds();
          const singleBounds = selectionBounds();
          const element = store.frozenElement || targetElement();
          const bounds = allBounds.length > 1 ? combineBounds(allBounds) : singleBounds;
          if (!bounds) return false;
          event.preventDefault();
          event.stopPropagation();
          const tagName = element ? getTagName(element) || "element" : "element";
          const shouldDeactivate = store.wasActivatedByToggle;
          const overlayBounds = createFlatOverlayBounds(bounds);
          const selectionBoundsArray = allBounds.length > 1 ? allBounds : singleBounds ? [singleBounds] : [];
          const instanceId = createLabelInstance(overlayBounds, tagName, void 0, "copying", element ?? void 0, bounds.x + bounds.width / 2, void 0, selectionBoundsArray);
          isScreenshotInProgress = true;
          rendererRoot.style.visibility = "hidden";
          const elementsForScreenshot = store.frozenElements.length > 0 ? [...store.frozenElements] : element ? [element] : [];
          void (async () => {
            await delay(SCREENSHOT_CAPTURE_DELAY_MS);
            let didSucceed = false;
            let errorMessage;
            try {
              const rawBlob = await captureElementScreenshot(bounds);
              const transformedBlob = await pluginRegistry.hooks.transformScreenshot(rawBlob, elementsForScreenshot, bounds);
              didSucceed = await copyImageToClipboard(transformedBlob);
              if (!didSucceed) {
                errorMessage = "Failed to copy";
              }
            } catch (error) {
              errorMessage = error instanceof Error && error.message ? error.message : "Screenshot failed";
            }
            isScreenshotInProgress = false;
            rendererRoot.style.visibility = "";
            updateLabelInstance(instanceId, didSucceed ? "copied" : "error", didSucceed ? void 0 : errorMessage || "Unknown error");
            scheduleLabelFade(instanceId);
            if (shouldDeactivate) {
              deactivateRenderer();
            } else {
              actions.unfreeze();
            }
          })();
          return true;
        };
        const clearActionCycleIdleTimeout = () => {
          if (actionCycleIdleTimeoutId !== null) {
            window.clearTimeout(actionCycleIdleTimeoutId);
            actionCycleIdleTimeoutId = null;
          }
        };
        const resetActionCycle = () => {
          clearActionCycleIdleTimeout();
          setActionCycleItems([]);
          setActionCycleActiveIndex(null);
        };
        const canCycleActions = createMemo(() => {
          const element = selectionElement();
          return Boolean(element) && isRendererActive() && !isPromptMode() && !isDragging() && store.contextMenuPosition === null;
        });
        const actionCycleState = createMemo(() => ({
          items: actionCycleItems(),
          activeIndex: actionCycleActiveIndex(),
          isVisible: actionCycleActiveIndex() !== null && actionCycleItems().length > 0
        }));
        createEffect(on(selectionElement, () => {
          resetActionCycle();
        }));
        createEffect(on(canCycleActions, (isEnabled2) => {
          if (!isEnabled2) {
            resetActionCycle();
          }
        }));
        const getActionById = (actionId) => pluginRegistry.store.actions.find((action) => action.id === actionId);
        const getActionCycleContext = () => {
          const element = selectionElement();
          if (!element) return void 0;
          const fallbackBounds = selectionBounds();
          return buildActionContext({
            element,
            filePath: store.selectionFilePath ?? void 0,
            lineNumber: store.selectionLineNumber ?? void 0,
            tagName: getTagName(element) || void 0,
            componentName: selectionComponentName(),
            position: store.pointer,
            performWithFeedbackOptions: {
              fallbackBounds,
              fallbackSelectionBounds: fallbackBounds ? [fallbackBounds] : []
            },
            shouldDeferHideContextMenu: false,
            onBeforePrompt: resetActionCycle
          });
        };
        const availableActionCycleItems = createMemo(() => {
          const element = selectionElement();
          if (!element) return [];
          const actionsById = new Map(pluginRegistry.store.actions.map((action) => [action.id, action]));
          const cycleItems = [];
          for (const actionId of ACTION_CYCLE_ACTION_IDS) {
            const action = actionsById.get(actionId);
            if (!action) continue;
            const isStaticallyDisabled = typeof action.enabled === "boolean" && !action.enabled;
            if (isStaticallyDisabled) continue;
            cycleItems.push({
              id: action.id,
              label: action.label,
              shortcut: action.shortcut
            });
          }
          return cycleItems;
        });
        const scheduleActionCycleActivation = () => {
          clearActionCycleIdleTimeout();
          actionCycleIdleTimeoutId = window.setTimeout(() => {
            actionCycleIdleTimeoutId = null;
            const activeIndex = actionCycleActiveIndex();
            const items = actionCycleItems();
            if (activeIndex === null || items.length === 0) return;
            const selectedItem = items[activeIndex];
            if (!selectedItem) return;
            const action = getActionById(selectedItem.id);
            if (!action) {
              resetActionCycle();
              return;
            }
            const context = getActionCycleContext();
            if (!context || !resolveActionEnabled(action, context)) {
              resetActionCycle();
              return;
            }
            resetActionCycle();
            const result = action.onAction(context);
            if (result instanceof Promise) {
            }
          }, ACTION_CYCLE_IDLE_TRIGGER_MS);
        };
        const applyActionCycleItems = (cycleItems, direction) => {
          if (cycleItems.length === 0) return false;
          setActionCycleItems(cycleItems);
          const currentIndex = actionCycleActiveIndex();
          const isCurrentIndexValid = currentIndex !== null && currentIndex < cycleItems.length;
          const stepOffset = direction === "forward" ? 1 : -1;
          let nextIndex;
          if (!isCurrentIndexValid) {
            nextIndex = direction === "forward" ? 0 : cycleItems.length - 1;
          } else {
            nextIndex = (currentIndex + stepOffset + cycleItems.length) % cycleItems.length;
          }
          setActionCycleActiveIndex(nextIndex);
          scheduleActionCycleActivation();
          return true;
        };
        const handleActionCycleInput = (direction) => {
          if (!canCycleActions()) return false;
          const cycleItems = availableActionCycleItems();
          if (cycleItems.length === 0) return false;
          return applyActionCycleItems(cycleItems, direction);
        };
        const handleActionCycleKey = (event) => {
          if (event.code !== "KeyC") return false;
          if (event.altKey || event.repeat) return false;
          if (isKeyboardEventTriggeredByInput(event)) return false;
          if (!handleActionCycleInput("forward")) return false;
          event.preventDefault();
          event.stopPropagation();
          if (event.metaKey || event.ctrlKey) {
            event.stopImmediatePropagation();
          }
          return true;
        };
        const actionCycleScrollCycler = createScrollCycler({
          thresholdPx: ACTION_CYCLE_SCROLL_THRESHOLD_PX,
          throttleMs: ACTION_CYCLE_INPUT_THROTTLE_MS,
          lineHeightPx: ACTION_CYCLE_SCROLL_LINE_HEIGHT_PX,
          onStep: handleActionCycleInput
        });
        const handleActionCycleWheel = (event) => {
          if (!canCycleActions()) return;
          const isActionCycleActive = actionCycleActiveIndex() !== null;
          if (!isActionCycleActive) {
            const cycleItems = availableActionCycleItems();
            if (cycleItems.length === 0) return;
          }
          event.preventDefault();
          event.stopPropagation();
          actionCycleScrollCycler.handleWheel(event);
        };
        const handleActivationKeys = (event) => {
          if (!pluginRegistry.store.options.allowActivationInsideInput && isKeyboardEventTriggeredByInput(event)) {
            return;
          }
          if (!isTargetKeyCombination(event, pluginRegistry.store.options)) {
            if (isActivated() && !store.wasActivatedByToggle && (event.metaKey || event.ctrlKey)) {
              if (!MODIFIER_KEYS.includes(event.key) && !isEnterCode(event.code)) {
                deactivateRenderer();
              }
            }
            if (!isEnterCode(event.code) || !isHoldingKeys()) {
              return;
            }
          }
          if ((isActivated() || isHoldingKeys()) && !isPromptMode()) {
            event.preventDefault();
            if (isEnterCode(event.code)) {
              event.stopPropagation();
              event.stopImmediatePropagation();
            }
          }
          if (isActivated()) {
            if (store.wasActivatedByToggle && pluginRegistry.store.options.activationMode !== "hold") return;
            if (event.repeat) return;
            if (keydownSpamTimerId !== null) {
              window.clearTimeout(keydownSpamTimerId);
            }
            keydownSpamTimerId = window.setTimeout(() => {
              deactivateRenderer();
            }, KEYDOWN_SPAM_TIMEOUT_MS);
            return;
          }
          if (isHoldingKeys() && event.repeat) {
            if (copyWaitingForConfirmation) {
              const shouldActivate2 = holdTimerFiredWaitingForConfirmation;
              resetCopyConfirmation();
              if (shouldActivate2) {
                actions.activate();
              }
            }
            return;
          }
          if (isCopying() || didJustCopy()) return;
          if (!isHoldingKeys()) {
            const keyHoldDuration = pluginRegistry.store.options.keyHoldDuration ?? DEFAULT_KEY_HOLD_DURATION_MS;
            let activationDuration = keyHoldDuration;
            if (isKeyboardEventTriggeredByInput(event)) {
              if (hasTextSelectionInInput(event)) {
                activationDuration += INPUT_TEXT_SELECTION_ACTIVATION_DELAY_MS;
              } else {
                activationDuration += INPUT_FOCUS_ACTIVATION_DELAY_MS;
              }
            } else if (hasTextSelectionOnPage()) {
              activationDuration += INPUT_TEXT_SELECTION_ACTIVATION_DELAY_MS;
            }
            resetCopyConfirmation();
            actions.startHold(activationDuration);
          }
        };
        eventListenerManager.addWindowListener("keydown", (event) => {
          blockEnterIfNeeded(event);
          if (!isEnabled()) {
            if (isTargetKeyCombination(event, pluginRegistry.store.options) && !event.repeat) {
              setToolbarShakeCount((count) => count + 1);
            }
            return;
          }
          if (handleUndoRedoKeys(event)) return;
          const isEnterToActivateInput = isEnterCode(event.code) && isHoldingKeys() && !isPromptMode();
          const isFromReactGrabInput = isEventFromOverlay(event, "data-react-grab-input");
          if (isPromptMode() && isTargetKeyCombination(event, pluginRegistry.store.options) && !event.repeat && !isFromReactGrabInput) {
            event.preventDefault();
            event.stopPropagation();
            handleInputCancel();
            return;
          }
          const isFromOverlay = isEventFromOverlay(event, "data-react-grab-ignore-events") && !isEnterToActivateInput;
          if (isPromptMode() || isFromOverlay) {
            if (event.key === "Escape") {
              if (pendingAbortSessionId()) {
                event.preventDefault();
                event.stopPropagation();
                actions.setPendingAbortSessionId(null);
              } else if (store.wasActivatedByToggle && !isPromptMode()) {
                deactivateRenderer();
              }
            }
            if (isFromOverlay && ARROW_KEYS.has(event.key)) {
              if (handleArrowNavigation(event)) return;
            }
            return;
          }
          if (event.key === "Escape") {
            if (pendingAbortSessionId()) {
              event.preventDefault();
              event.stopPropagation();
              actions.setPendingAbortSessionId(null);
              return;
            }
            if (agentManager.isProcessing()) {
              return;
            }
            if (isHoldingKeys() || store.wasActivatedByToggle) {
              deactivateRenderer();
              return;
            }
          }
          if (handleActionCycleKey(event)) return;
          if (handleArrowNavigation(event)) return;
          if (handleEnterKeyActivation(event)) return;
          if (handleOpenFileShortcut(event)) return;
          if (handleScreenshotShortcut(event)) return;
          handleActivationKeys(event);
        }, {
          capture: true
        });
        eventListenerManager.addWindowListener("wheel", handleActionCycleWheel, {
          passive: false
        });
        eventListenerManager.addWindowListener("keyup", (event) => {
          if (blockEnterIfNeeded(event)) return;
          const requiredModifiers = getRequiredModifiers(pluginRegistry.store.options);
          const isReleasingModifier = requiredModifiers.metaKey || requiredModifiers.ctrlKey ? isMac() ? !event.metaKey : !event.ctrlKey : requiredModifiers.shiftKey && !event.shiftKey || requiredModifiers.altKey && !event.altKey;
          const isReleasingActivationKey = pluginRegistry.store.options.activationKey ? typeof pluginRegistry.store.options.activationKey === "function" ? pluginRegistry.store.options.activationKey(event) : parseActivationKey(pluginRegistry.store.options.activationKey)(event) : isCLikeKey(event.key, event.code);
          if (didJustCopy() || inToggleFeedbackPeriod) {
            if (isReleasingActivationKey || isReleasingModifier) {
              inToggleFeedbackPeriod = false;
              deactivateRenderer();
            }
            return;
          }
          if (!isHoldingKeys() && !isActivated()) return;
          if (isPromptMode()) return;
          const hasCustomShortcut = Boolean(pluginRegistry.store.options.activationKey);
          const isHoldMode = pluginRegistry.store.options.activationMode === "hold";
          if (isActivated()) {
            const hasContextMenu = store.contextMenuPosition !== null;
            if (isReleasingModifier) {
              if (store.wasActivatedByToggle && pluginRegistry.store.options.activationMode !== "hold") return;
              if (hasContextMenu) return;
              deactivateRenderer();
            } else if (isHoldMode && isReleasingActivationKey) {
              if (keydownSpamTimerId !== null) {
                window.clearTimeout(keydownSpamTimerId);
                keydownSpamTimerId = null;
              }
              if (hasContextMenu) return;
              deactivateRenderer();
            } else if (!hasCustomShortcut && isReleasingActivationKey && keydownSpamTimerId !== null) {
              window.clearTimeout(keydownSpamTimerId);
              keydownSpamTimerId = null;
            }
            return;
          }
          if (isReleasingActivationKey || isReleasingModifier) {
            if (store.wasActivatedByToggle && pluginRegistry.store.options.activationMode !== "hold") return;
            const shouldRelease = isHoldingKeys() || holdTimerFiredWaitingForConfirmation && isReleasingModifier;
            if (shouldRelease) {
              clearHoldTimer();
              const elapsedSinceHoldStart = holdStartTimestamp ? Date.now() - holdStartTimestamp : 0;
              const heldLongEnoughForActivation = elapsedSinceHoldStart >= MIN_HOLD_FOR_ACTIVATION_AFTER_COPY_MS;
              const shouldActivateAfterCopy = holdTimerFiredWaitingForConfirmation && heldLongEnoughForActivation && (pluginRegistry.store.options.allowActivationInsideInput || !isKeyboardEventTriggeredByInput(event));
              resetCopyConfirmation();
              if (shouldActivateAfterCopy) {
                actions.activate();
              } else {
                actions.release();
              }
            } else {
              deactivateRenderer();
            }
          }
        }, {
          capture: true
        });
        eventListenerManager.addDocumentListener("copy", () => {
          if (isHoldingKeys()) {
            copyWaitingForConfirmation = true;
          }
        });
        eventListenerManager.addWindowListener("keypress", blockEnterIfNeeded, {
          capture: true
        });
        eventListenerManager.addWindowListener("pointermove", (event) => {
          if (!event.isPrimary) return;
          const isTouchPointer = event.pointerType === "touch";
          actions.setTouchMode(isTouchPointer);
          if (isEventFromOverlay(event, "data-react-grab-ignore-events")) return;
          if (store.contextMenuPosition !== null) return;
          const isActiveState = isTouchPointer ? isHoldingKeys() : isActivated();
          if (isActiveState && !isPromptMode() && isToggleFrozen()) {
            actions.unfreeze();
            arrowNavigator.clearHistory();
          }
          handlePointerMove(event.clientX, event.clientY);
        }, {
          passive: true
        });
        eventListenerManager.addWindowListener("pointerdown", (event) => {
          if (event.button !== 0) return;
          if (!event.isPrimary) return;
          actions.setTouchMode(event.pointerType === "touch");
          if (isEventFromOverlay(event, "data-react-grab-ignore-events")) return;
          if (store.contextMenuPosition !== null) return;
          if (isPromptMode()) {
            const bounds = selectionBounds();
            const isClickOnSelection = bounds && event.clientX >= bounds.x && event.clientX <= bounds.x + bounds.width && event.clientY >= bounds.y && event.clientY <= bounds.y + bounds.height;
            if (isClickOnSelection) {
              void handleInputSubmit();
            } else {
              handleInputCancel();
            }
            return;
          }
          const didHandle = handlePointerDown(event.clientX, event.clientY);
          if (didHandle) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
          }
        }, {
          capture: true
        });
        eventListenerManager.addWindowListener("pointerup", (event) => {
          if (event.button !== 0) return;
          if (!event.isPrimary) return;
          if (isEventFromOverlay(event, "data-react-grab-ignore-events")) return;
          if (store.contextMenuPosition !== null) return;
          const hasModifierKeyHeld = event.metaKey || event.ctrlKey;
          handlePointerUp(event.clientX, event.clientY, hasModifierKeyHeld);
        }, {
          capture: true
        });
        eventListenerManager.addWindowListener("contextmenu", (event) => {
          if (!isRendererActive() || isCopying() || isPromptMode()) return;
          if (isEventFromOverlay(event, "data-react-grab-ignore-events")) return;
          if (store.contextMenuPosition !== null) {
            event.preventDefault();
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          const element = getElementAtPosition(event.clientX, event.clientY);
          if (!element) return;
          const existingFrozenElements = store.frozenElements;
          const isClickedElementAlreadyFrozen = existingFrozenElements.length > 1 && existingFrozenElements.includes(element);
          if (isClickedElementAlreadyFrozen) {
            freezeAllAnimations(existingFrozenElements);
          } else {
            freezeAllAnimations([element]);
            actions.setFrozenElement(element);
          }
          const position = {
            x: event.clientX,
            y: event.clientY
          };
          actions.setPointer(position);
          actions.freeze();
          actions.showContextMenu(position, element);
          pluginRegistry.hooks.onContextMenu(element, position);
        }, {
          capture: true
        });
        eventListenerManager.addWindowListener("pointercancel", (event) => {
          if (!event.isPrimary) return;
          if (isDragging()) {
            actions.cancelDrag();
            autoScroller.stop();
            document.body.style.userSelect = "";
          }
        });
        eventListenerManager.addWindowListener("click", (event) => {
          if (isEventFromOverlay(event, "data-react-grab-ignore-events")) return;
          if (store.contextMenuPosition !== null) return;
          if (isRendererActive() || isCopying() || didJustDrag()) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            if (store.wasActivatedByToggle && !isCopying() && !isPromptMode()) {
              if (!isHoldingKeys()) {
                deactivateRenderer();
              } else {
                actions.setWasActivatedByToggle(false);
              }
            }
          }
        }, {
          capture: true
        });
        eventListenerManager.addDocumentListener("visibilitychange", () => {
          if (document.hidden) {
            actions.clearGrabbedBoxes();
            const storeActivationTimestamp = store.activationTimestamp;
            if (isActivated() && !isPromptMode() && !isScreenshotInProgress && storeActivationTimestamp !== null && Date.now() - storeActivationTimestamp > BLUR_DEACTIVATION_THRESHOLD_MS) {
              deactivateRenderer();
            }
          }
        });
        const redetectElementUnderPointer = () => {
          if (isEnabled() && !isPromptMode() && !isToggleFrozen() && !isDragging() && store.contextMenuPosition === null && store.frozenElements.length === 0) {
            const candidate = getElementAtPosition(store.pointer.x, store.pointer.y);
            actions.setDetectedElement(candidate);
          }
        };
        const handleViewportChange = () => {
          clearAllCaches();
          redetectElementUnderPointer();
          actions.incrementViewportVersion();
          actions.updateSessionBounds();
          actions.updateContextMenuPosition();
        };
        eventListenerManager.addWindowListener("scroll", handleViewportChange, {
          capture: true
        });
        let previousViewportWidth = window.innerWidth;
        let previousViewportHeight = window.innerHeight;
        eventListenerManager.addWindowListener("resize", () => {
          const currentViewportWidth = window.innerWidth;
          const currentViewportHeight = window.innerHeight;
          if (previousViewportWidth > 0 && previousViewportHeight > 0) {
            const scaleX = currentViewportWidth / previousViewportWidth;
            const scaleY = currentViewportHeight / previousViewportHeight;
            const isUniformScale = Math.abs(scaleX - scaleY) < ZOOM_DETECTION_THRESHOLD;
            const hasScaleChanged = Math.abs(scaleX - 1) > ZOOM_DETECTION_THRESHOLD;
            if (isUniformScale && hasScaleChanged) {
              actions.setPointer({
                x: store.pointer.x * scaleX,
                y: store.pointer.y * scaleY
              });
            }
          }
          previousViewportWidth = currentViewportWidth;
          previousViewportHeight = currentViewportHeight;
          handleViewportChange();
        });
        let boundsRecalcIntervalId = null;
        let viewportChangeFrameId = null;
        const startBoundsRecalcIntervalIfNeeded = () => {
          const shouldRunInterval = pluginRegistry.store.theme.enabled && (isActivated() || isCopying() || store.labelInstances.length > 0 || store.grabbedBoxes.length > 0 || agentManager.sessions().size > 0);
          if (shouldRunInterval && boundsRecalcIntervalId === null) {
            boundsRecalcIntervalId = window.setInterval(() => {
              if (viewportChangeFrameId !== null) return;
              viewportChangeFrameId = requestAnimationFrame(() => {
                viewportChangeFrameId = null;
                actions.incrementViewportVersion();
                actions.updateSessionBounds();
              });
            }, BOUNDS_RECALC_INTERVAL_MS);
          } else if (!shouldRunInterval && boundsRecalcIntervalId !== null) {
            window.clearInterval(boundsRecalcIntervalId);
            boundsRecalcIntervalId = null;
            if (viewportChangeFrameId !== null) {
              cancelAnimationFrame(viewportChangeFrameId);
              viewportChangeFrameId = null;
            }
          }
        };
        createEffect(() => {
          void pluginRegistry.store.theme.enabled;
          void isActivated();
          void isCopying();
          void store.labelInstances.length;
          void store.grabbedBoxes.length;
          void agentManager.sessions().size;
          startBoundsRecalcIntervalIfNeeded();
        });
        onCleanup(() => {
          if (boundsRecalcIntervalId !== null) {
            window.clearInterval(boundsRecalcIntervalId);
          }
          if (viewportChangeFrameId !== null) {
            cancelAnimationFrame(viewportChangeFrameId);
          }
        });
        eventListenerManager.addDocumentListener("copy", (event) => {
          if (isPromptMode() || isEventFromOverlay(event, "data-react-grab-ignore-events")) {
            return;
          }
          if (isRendererActive() || isCopying()) {
            event.preventDefault();
          }
        }, {
          capture: true
        });
        onCleanup(() => {
          eventListenerManager.abort();
          if (keydownSpamTimerId) window.clearTimeout(keydownSpamTimerId);
          if (toggleFeedbackTimerId) window.clearTimeout(toggleFeedbackTimerId);
          if (actionCycleIdleTimeoutId) {
            window.clearTimeout(actionCycleIdleTimeoutId);
          }
          grabbedBoxTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
          grabbedBoxTimeouts.clear();
          autoScroller.stop();
          document.body.style.userSelect = "";
          document.body.style.touchAction = "";
          setCursorOverride(null);
          keyboardClaimer.restore();
        });
        const rendererRoot = mountRoot(styles_default);
        const selectionVisible = createMemo(() => {
          if (!pluginRegistry.store.theme.enabled) return false;
          if (!pluginRegistry.store.theme.selectionBox.enabled) return false;
          if (didJustCopy()) return false;
          const hasDragPreview = dragPreviewBounds().length > 0;
          if (hasDragPreview) return true;
          return isSelectionElementVisible();
        });
        const selectionTagName = createMemo(() => {
          const element = getSelectionElement();
          if (!element) return void 0;
          return getTagName(element) || void 0;
        });
        createEffect(on(() => debouncedElementForComponentName(), (element) => {
          const currentVersion = ++componentNameRequestVersion;
          if (!element) {
            setResolvedComponentName(void 0);
            return;
          }
          getNearestComponentName(element).then((name) => {
            if (componentNameRequestVersion !== currentVersion) return;
            setResolvedComponentName(name ?? void 0);
          }).catch(() => {
            if (componentNameRequestVersion !== currentVersion) return;
            setResolvedComponentName(void 0);
          });
        }));
        const selectionComponentName = resolvedComponentName;
        const selectionLabelVisible = createMemo(() => {
          if (store.contextMenuPosition !== null) return false;
          if (!pluginRegistry.store.theme.elementLabel.enabled) return false;
          if (didJustCopy()) return false;
          return isSelectionElementVisible();
        });
        const labelInstanceCache = /* @__PURE__ */ new Map();
        const computedLabelInstances = createMemo(() => {
          if (!pluginRegistry.store.theme.enabled) return [];
          if (!pluginRegistry.store.theme.grabbedBoxes.enabled) return [];
          void store.viewportVersion;
          const currentIds = new Set(store.labelInstances.map((i2) => i2.id));
          for (const cachedId of labelInstanceCache.keys()) {
            if (!currentIds.has(cachedId)) {
              labelInstanceCache.delete(cachedId);
            }
          }
          return store.labelInstances.map((instance) => {
            const hasMultipleElements = instance.elements && instance.elements.length > 1;
            const instanceElement = instance.element;
            const canRecalculateBounds = !hasMultipleElements && instanceElement && document.body.contains(instanceElement);
            const newBounds = canRecalculateBounds ? createElementBounds(instanceElement) : instance.bounds;
            const previousInstance = labelInstanceCache.get(instance.id);
            const boundsUnchanged = previousInstance && previousInstance.bounds.x === newBounds.x && previousInstance.bounds.y === newBounds.y && previousInstance.bounds.width === newBounds.width && previousInstance.bounds.height === newBounds.height;
            if (previousInstance && previousInstance.status === instance.status && previousInstance.errorMessage === instance.errorMessage && boundsUnchanged) {
              return previousInstance;
            }
            const newBoundsCenterX = newBounds.x + newBounds.width / 2;
            const newBoundsHalfWidth = newBounds.width / 2;
            const newMouseX = instance.mouseXOffsetRatio !== void 0 && newBoundsHalfWidth > 0 ? newBoundsCenterX + instance.mouseXOffsetRatio * newBoundsHalfWidth : instance.mouseXOffsetFromCenter !== void 0 ? newBoundsCenterX + instance.mouseXOffsetFromCenter : instance.mouseX;
            const newCached = {
              ...instance,
              bounds: newBounds,
              mouseX: newMouseX
            };
            labelInstanceCache.set(instance.id, newCached);
            return newCached;
          });
        });
        const computedGrabbedBoxes = createMemo(() => {
          if (!pluginRegistry.store.theme.enabled) return [];
          if (!pluginRegistry.store.theme.grabbedBoxes.enabled) return [];
          void store.viewportVersion;
          return store.grabbedBoxes.map((box) => {
            if (!box.element || !document.body.contains(box.element)) {
              return box;
            }
            return {
              ...box,
              bounds: createElementBounds(box.element)
            };
          });
        });
        const dragVisible = createMemo(() => pluginRegistry.store.theme.enabled && pluginRegistry.store.theme.dragBox.enabled && isRendererActive() && isDraggingBeyondThreshold());
        const labelVariant = createMemo(() => isCopying() ? "processing" : "hover");
        const labelVisible = createMemo(() => {
          if (!pluginRegistry.store.theme.enabled) return false;
          const themeEnabled = pluginRegistry.store.theme.elementLabel.enabled;
          const inPromptMode = isPromptMode();
          const copying = isCopying();
          const rendererActive = isRendererActive();
          const dragging = isDragging();
          const hasElement = Boolean(effectiveElement());
          if (!themeEnabled) return false;
          if (inPromptMode) return false;
          if (copying) return true;
          return rendererActive && !dragging && hasElement;
        });
        const contextMenuBounds = createMemo(() => {
          void store.viewportVersion;
          const element = store.contextMenuElement;
          if (!element) return null;
          return createElementBounds(element);
        });
        const contextMenuPosition = createMemo(() => {
          void store.viewportVersion;
          return store.contextMenuPosition;
        });
        const contextMenuTagName = createMemo(() => {
          const element = store.contextMenuElement;
          if (!element) return void 0;
          const frozenCount = store.frozenElements.length;
          if (frozenCount > 1) {
            return `${frozenCount} elements`;
          }
          return getTagName(element) || void 0;
        });
        const [contextMenuComponentName] = createResource(() => ({
          element: store.contextMenuElement,
          frozenCount: store.frozenElements.length
        }), async ({
          element,
          frozenCount
        }) => {
          if (!element) return void 0;
          if (frozenCount > 1) return void 0;
          const name = await getNearestComponentName(element);
          return name ?? void 0;
        });
        const [contextMenuFilePath] = createResource(() => store.contextMenuElement, async (element) => {
          if (!element) return null;
          const stack = await getStack(element);
          if (!stack || stack.length === 0) return null;
          for (const frame of stack) {
            if (frame.fileName && Pe2(frame.fileName)) {
              return {
                filePath: Ne2(frame.fileName),
                lineNumber: frame.lineNumber
              };
            }
          }
          return null;
        });
        const createPerformWithFeedback = (element, elements, tagName, componentName, options) => {
          return async (action) => {
            const fallbackBounds = options?.fallbackBounds ?? null;
            const fallbackSelectionBounds = options?.fallbackSelectionBounds ?? [];
            const position = options?.position ?? store.contextMenuPosition ?? store.pointer;
            const frozenBounds = frozenElementsBounds();
            const singleElementBounds = contextMenuBounds() ?? fallbackBounds;
            const hasMultipleElements = elements.length > 1;
            const labelBounds = hasMultipleElements ? createFlatOverlayBounds(combineBounds(frozenBounds)) : singleElementBounds;
            const shouldDeactivateAfter = store.wasActivatedByToggle;
            const selectionBoundsForLabel = hasMultipleElements ? frozenBounds : singleElementBounds ? [singleElementBounds] : fallbackSelectionBounds;
            actions.hideContextMenu();
            if (labelBounds) {
              const labelPositionX = hasMultipleElements ? labelBounds.x + labelBounds.width / 2 : position.x;
              const labelInstanceId = createLabelInstance(labelBounds, tagName || "element", componentName, "copying", element, labelPositionX, hasMultipleElements ? elements : void 0, selectionBoundsForLabel);
              let didSucceed = false;
              let errorMessage;
              try {
                didSucceed = await action();
                if (!didSucceed) {
                  errorMessage = "Failed to copy";
                }
              } catch (error) {
                errorMessage = error instanceof Error && error.message ? error.message : "Action failed";
              }
              updateLabelInstance(labelInstanceId, didSucceed ? "copied" : "error", didSucceed ? void 0 : errorMessage || "Unknown error");
              scheduleLabelFade(labelInstanceId);
            } else {
              try {
                await action();
              } catch {
              }
            }
            if (shouldDeactivateAfter) {
              deactivateRenderer();
            } else {
              actions.unfreeze();
            }
          };
        };
        const deferHideContextMenu = () => {
          setTimeout(() => {
            actions.hideContextMenu();
          }, 0);
        };
        const buildActionContext = (options) => {
          const {
            element,
            filePath,
            lineNumber,
            tagName,
            componentName,
            position,
            performWithFeedbackOptions,
            shouldDeferHideContextMenu,
            onBeforeCopy,
            onBeforePrompt,
            customEnterPromptMode
          } = options;
          const elements = store.frozenElements.length > 0 ? store.frozenElements : [element];
          const hideContextMenuAction = shouldDeferHideContextMenu ? deferHideContextMenu : actions.hideContextMenu;
          const copyAction = () => {
            onBeforeCopy?.();
            performCopyWithLabel({
              element,
              positionX: position.x,
              positionY: position.y,
              elements: elements.length > 1 ? elements : void 0,
              shouldDeactivateAfter: store.wasActivatedByToggle
            });
            hideContextMenuAction();
          };
          const defaultEnterPromptMode = (agent) => {
            if (agent) {
              actions.setSelectedAgent(agent);
            }
            onBeforePrompt?.();
            preparePromptMode(element, position.x, position.y);
            actions.setPointer({
              x: position.x,
              y: position.y
            });
            actions.setFrozenElement(element);
            activatePromptMode();
            if (!isActivated()) {
              activateRenderer();
            }
            hideContextMenuAction();
          };
          const context = {
            element,
            elements,
            filePath,
            lineNumber,
            componentName,
            tagName,
            enterPromptMode: customEnterPromptMode ?? defaultEnterPromptMode,
            copy: copyAction,
            hooks: {
              transformHtmlContent: pluginRegistry.hooks.transformHtmlContent,
              transformScreenshot: pluginRegistry.hooks.transformScreenshot,
              onOpenFile: pluginRegistry.hooks.onOpenFile,
              transformOpenFileUrl: pluginRegistry.hooks.transformOpenFileUrl
            },
            performWithFeedback: createPerformWithFeedback(element, elements, tagName, componentName, performWithFeedbackOptions),
            hideContextMenu: hideContextMenuAction,
            hideOverlay: () => {
              isScreenshotInProgress = true;
              rendererRoot.style.visibility = "hidden";
            },
            showOverlay: () => {
              isScreenshotInProgress = false;
              rendererRoot.style.visibility = "";
            },
            cleanup: () => {
              if (store.wasActivatedByToggle) {
                deactivateRenderer();
              } else {
                actions.unfreeze();
              }
            }
          };
          return pluginRegistry.hooks.transformActionContext(context);
        };
        const contextMenuActionContext = createMemo(() => {
          const element = store.contextMenuElement;
          if (!element) return void 0;
          const fileInfo = contextMenuFilePath();
          const position = store.contextMenuPosition ?? store.pointer;
          return buildActionContext({
            element,
            filePath: fileInfo?.filePath,
            lineNumber: fileInfo?.lineNumber,
            tagName: contextMenuTagName(),
            componentName: contextMenuComponentName(),
            position,
            shouldDeferHideContextMenu: true,
            onBeforeCopy: () => {
              keyboardSelectedElement = null;
            },
            customEnterPromptMode: (agent) => {
              if (agent) {
                actions.setSelectedAgent(agent);
              }
              loadCachedInput(element);
              actions.enterPromptMode(position, element);
              deferHideContextMenu();
            }
          });
        });
        const handleContextMenuDismiss = () => {
          setTimeout(() => {
            actions.hideContextMenu();
            deactivateRenderer();
          }, 0);
        };
        const handleShowContextMenuSession = (sessionId) => {
          const session = agentManager.sessions().get(sessionId);
          if (!session) return;
          const element = agentManager.session.getElement(sessionId);
          if (!element) return;
          if (!isElementConnected(element)) return;
          setTimeout(() => {
            if (!isActivated()) {
              actions.setWasActivatedByToggle(true);
              activateRenderer();
            }
            actions.setPointer(session.position);
            actions.setFrozenElement(element);
            actions.freeze();
            actions.showContextMenu(session.position, element);
          }, 0);
        };
        const handleShowContextMenuInstance = (instanceId) => {
          const instance = store.labelInstances.find((labelInstance) => labelInstance.id === instanceId);
          if (!instance?.element) return;
          if (!isElementConnected(instance.element)) return;
          const elementBounds = createElementBounds(instance.element);
          const position = {
            x: instance.mouseX ?? elementBounds.x + elementBounds.width / 2,
            y: elementBounds.y + elementBounds.height / 2
          };
          const elementsToFreeze = instance.elements && instance.elements.length > 0 ? instance.elements.filter((element) => isElementConnected(element)) : [instance.element];
          setTimeout(() => {
            if (!isActivated()) {
              actions.setWasActivatedByToggle(true);
              activateRenderer();
            }
            actions.setPointer(position);
            actions.setFrozenElements(elementsToFreeze);
            const hasMultipleElements = elementsToFreeze.length > 1;
            if (hasMultipleElements && instance.bounds) {
              actions.setFrozenDragRect(createPageRectFromBounds(instance.bounds));
            }
            actions.freeze();
            actions.showContextMenu(position, instance.element);
          }, 0);
        };
        createEffect(() => {
          const hue = pluginRegistry.store.theme.hue;
          if (hue !== 0) {
            rendererRoot.style.filter = `hue-rotate(${hue}deg)`;
          } else {
            rendererRoot.style.filter = "";
          }
        });
        if (pluginRegistry.store.theme.enabled) {
          render(() => {
            return createComponent(ReactGrabRenderer, {
              get selectionVisible() {
                return selectionVisible();
              },
              get selectionBounds() {
                return selectionBounds();
              },
              get selectionBoundsMultiple() {
                return selectionBoundsMultiple();
              },
              get selectionShouldSnap() {
                return store.frozenElements.length > 0 || dragPreviewBounds().length > 0;
              },
              get selectionElementsCount() {
                return frozenElementsCount();
              },
              get selectionFilePath() {
                return store.selectionFilePath ?? void 0;
              },
              get selectionLineNumber() {
                return store.selectionLineNumber ?? void 0;
              },
              get selectionTagName() {
                return selectionTagName();
              },
              get selectionComponentName() {
                return selectionComponentName();
              },
              get selectionLabelVisible() {
                return selectionLabelVisible();
              },
              selectionLabelStatus: "idle",
              get selectionActionCycleState() {
                return actionCycleState();
              },
              get labelInstances() {
                return computedLabelInstances();
              },
              get dragVisible() {
                return dragVisible();
              },
              get dragBounds() {
                return dragBounds();
              },
              get grabbedBoxes() {
                return computedGrabbedBoxes();
              },
              labelZIndex: Z_INDEX_LABEL,
              get mouseX() {
                return memo(() => store.frozenElements.length > 1)() ? void 0 : cursorPosition().x;
              },
              get mouseY() {
                return cursorPosition().y;
              },
              get crosshairVisible() {
                return crosshairVisible();
              },
              get isFrozen() {
                return isToggleFrozen() || isActivated() || isToolbarSelectHovered();
              },
              get inputValue() {
                return store.inputText;
              },
              get isPromptMode() {
                return isPromptMode();
              },
              get hasAgent() {
                return hasAgentProvider();
              },
              get isAgentConnected() {
                return store.isAgentConnected;
              },
              get agentSessions() {
                return agentManager.sessions();
              },
              get supportsUndo() {
                return store.supportsUndo;
              },
              get supportsFollowUp() {
                return store.supportsFollowUp;
              },
              get dismissButtonText() {
                return store.dismissButtonText;
              },
              get onDismissSession() {
                return agentManager.session.dismiss;
              },
              get onUndoSession() {
                return agentManager.session.undo;
              },
              onFollowUpSubmitSession: handleFollowUpSubmit,
              onAcknowledgeSessionError: handleAcknowledgeError,
              get onRetrySession() {
                return agentManager.session.retry;
              },
              onShowContextMenuSession: handleShowContextMenuSession,
              onShowContextMenuInstance: handleShowContextMenuInstance,
              onLabelInstanceHoverChange: handleLabelInstanceHoverChange,
              onInputChange: handleInputChange,
              onInputSubmit: () => void handleInputSubmit(),
              onInputCancel: handleInputCancel,
              onToggleExpand: handleToggleExpand,
              get isPendingDismiss() {
                return isPendingDismiss();
              },
              onConfirmDismiss: handleConfirmDismiss,
              onCancelDismiss: handleCancelDismiss,
              get pendingAbortSessionId() {
                return pendingAbortSessionId();
              },
              onRequestAbortSession: (sessionId) => actions.setPendingAbortSessionId(sessionId),
              onAbortSession: handleAgentAbort,
              get theme() {
                return pluginRegistry.store.theme;
              },
              get toolbarVisible() {
                return pluginRegistry.store.theme.toolbar.enabled;
              },
              get isActive() {
                return isActivated();
              },
              get isCommentMode() {
                return isCommentMode();
              },
              onToggleActive: handleToggleActive,
              onComment: handleComment,
              get enabled() {
                return isEnabled();
              },
              onToggleEnabled: handleToggleEnabled,
              get shakeCount() {
                return toolbarShakeCount();
              },
              onToolbarStateChange: (state) => {
                setCurrentToolbarState(state);
                toolbarStateChangeCallbacks.forEach((cb) => cb(state));
              },
              onSubscribeToToolbarStateChanges: (callback) => {
                toolbarStateChangeCallbacks.add(callback);
                return () => {
                  toolbarStateChangeCallbacks.delete(callback);
                };
              },
              onToolbarSelectHoverChange: setIsToolbarSelectHovered,
              get contextMenuPosition() {
                return contextMenuPosition();
              },
              get contextMenuBounds() {
                return contextMenuBounds();
              },
              get contextMenuTagName() {
                return contextMenuTagName();
              },
              get contextMenuComponentName() {
                return contextMenuComponentName();
              },
              get contextMenuHasFilePath() {
                return Boolean(contextMenuFilePath()?.filePath);
              },
              get actions() {
                return pluginRegistry.store.actions;
              },
              get actionContext() {
                return contextMenuActionContext();
              },
              onContextMenuDismiss: handleContextMenuDismiss,
              onContextMenuHide: deferHideContextMenu
            });
          }, rendererRoot);
        }
        if (hasAgentProvider()) {
          agentManager.session.tryResume();
        }
        const copyElementAPI = async (elements) => {
          const elementsArray = Array.isArray(elements) ? elements : [elements];
          if (elementsArray.length === 0) return false;
          return await copyWithFallback(elementsArray);
        };
        const syncAgentFromRegistry = () => {
          const agentOpts = getAgentOptionsWithCallbacks();
          if (agentOpts) {
            agentManager._internal.setOptions(agentOpts);
          }
          const hasProvider = Boolean(agentOpts?.provider);
          actions.setHasAgentProvider(hasProvider);
          if (hasProvider && agentOpts?.provider) {
            const capturedProvider = agentOpts.provider;
            actions.setAgentCapabilities({
              supportsUndo: Boolean(capturedProvider.undo),
              supportsFollowUp: Boolean(capturedProvider.supportsFollowUp),
              dismissButtonText: capturedProvider.dismissButtonText,
              isAgentConnected: false
            });
            if (capturedProvider.checkConnection) {
              capturedProvider.checkConnection().then((isConnected) => {
                const currentAgentOpts = getAgentOptionsWithCallbacks();
                if (currentAgentOpts?.provider !== capturedProvider) {
                  return;
                }
                actions.setAgentCapabilities({
                  supportsUndo: Boolean(capturedProvider.undo),
                  supportsFollowUp: Boolean(capturedProvider.supportsFollowUp),
                  dismissButtonText: capturedProvider.dismissButtonText,
                  isAgentConnected: isConnected
                });
              }).catch(() => {
              });
            }
            agentManager.session.tryResume();
          } else {
            actions.setAgentCapabilities({
              supportsUndo: false,
              supportsFollowUp: false,
              dismissButtonText: void 0,
              isAgentConnected: false
            });
          }
        };
        const api = {
          activate: () => {
            if (!isActivated() && isEnabled()) {
              toggleActivate();
            }
          },
          deactivate: () => {
            if (isActivated()) {
              deactivateRenderer();
            }
          },
          toggle: () => {
            if (isActivated()) {
              deactivateRenderer();
            } else if (isEnabled()) {
              toggleActivate();
            }
          },
          isActive: () => isActivated(),
          isEnabled: () => isEnabled(),
          setEnabled: (enabled) => {
            if (enabled === isEnabled()) return;
            setIsEnabled(enabled);
            if (!enabled) {
              if (isHoldingKeys()) {
                actions.release();
              }
              if (isActivated()) {
                deactivateRenderer();
              }
              if (toggleFeedbackTimerId !== null) {
                window.clearTimeout(toggleFeedbackTimerId);
                toggleFeedbackTimerId = null;
              }
              inToggleFeedbackPeriod = false;
            }
          },
          getToolbarState: () => loadToolbarState(),
          setToolbarState: (state) => {
            const currentState = loadToolbarState();
            const newState = {
              edge: state.edge ?? currentState?.edge ?? "bottom",
              ratio: state.ratio ?? currentState?.ratio ?? 0.5,
              collapsed: state.collapsed ?? currentState?.collapsed ?? false,
              enabled: state.enabled ?? currentState?.enabled ?? true
            };
            saveToolbarState(newState);
            setCurrentToolbarState(newState);
            if (state.enabled !== void 0 && state.enabled !== isEnabled()) {
              setIsEnabled(state.enabled);
            }
            toolbarStateChangeCallbacks.forEach((cb) => cb(newState));
          },
          onToolbarStateChange: (callback) => {
            toolbarStateChangeCallbacks.add(callback);
            return () => {
              toolbarStateChangeCallbacks.delete(callback);
            };
          },
          dispose: () => {
            hasInited = false;
            toolbarStateChangeCallbacks.clear();
            dispose2();
          },
          copyElement: copyElementAPI,
          getSource: async (element) => {
            const stack = await getStack(element);
            if (!stack) return null;
            for (const frame of stack) {
              if (frame.fileName && Pe2(frame.fileName)) {
                return {
                  filePath: Ne2(frame.fileName),
                  lineNumber: frame.lineNumber ?? null,
                  componentName: frame.functionName && checkIsSourceComponentName(frame.functionName) ? frame.functionName : null
                };
              }
            }
            return null;
          },
          getState: () => ({
            isActive: isActivated(),
            isDragging: isDragging(),
            isCopying: isCopying(),
            isPromptMode: isPromptMode(),
            isCrosshairVisible: crosshairVisible() ?? false,
            isSelectionBoxVisible: selectionVisible() ?? false,
            isDragBoxVisible: dragVisible() ?? false,
            targetElement: targetElement(),
            dragBounds: dragBounds() ?? null,
            grabbedBoxes: store.grabbedBoxes.map((box) => ({
              id: box.id,
              bounds: box.bounds,
              createdAt: box.createdAt
            })),
            selectionFilePath: store.selectionFilePath,
            toolbarState: currentToolbarState()
          }),
          setOptions: (newOptions) => {
            pluginRegistry.setOptions(newOptions);
            if ("componentFilter" in newOptions) {
              setComponentFilter(newOptions.componentFilter);
            }
          },
          registerPlugin: (plugin) => {
            pluginRegistry.register(plugin, api);
            syncAgentFromRegistry();
          },
          unregisterPlugin: (name) => {
            pluginRegistry.unregister(name);
            syncAgentFromRegistry();
          },
          getPlugins: () => pluginRegistry.getPluginNames(),
          getDisplayName: getComponentDisplayName
        };
        for (const plugin of builtInPlugins) {
          pluginRegistry.register(plugin, api);
        }
        return api;
      });
    };
  }
});

// src/react.tsx
init_dist();
import { useEffect, useRef } from "react";
var shouldActivate = () => {
  if (typeof window === "undefined") return false;
  const isProduction = process.env.NODE_ENV === "production";
  const hasQueryParam = new URLSearchParams(window.location.search).get("react-grab") === "true";
  return !isProduction || hasQueryParam;
};
var ReactGrab = (props) => {
  const apiRef = useRef(null);
  const didInitRef = useRef(false);
  const didCreateRef = useRef(false);
  useEffect(() => {
    if (didInitRef.current) return;
    if (!shouldActivate()) return;
    didInitRef.current = true;
    const existingApi = window.__REACT_GRAB__;
    if (existingApi) {
      apiRef.current = existingApi;
      didCreateRef.current = false;
      const {
        enabled: _enabled,
        ...settableOptions
      } = props;
      if (Object.keys(settableOptions).length > 0) {
        existingApi.setOptions(settableOptions);
      }
    } else {
      Promise.resolve().then(() => (init_core(), core_exports)).then(({
        init: init2
      }) => {
        if (!didInitRef.current || apiRef.current) return;
        apiRef.current = init2(props);
        didCreateRef.current = true;
      });
    }
    return () => {
      if (didCreateRef.current) {
        apiRef.current?.dispose();
      }
      apiRef.current = null;
      didInitRef.current = false;
      didCreateRef.current = false;
    };
  }, []);
  return null;
};
export {
  ReactGrab
};
/*! Bundled license information:

bippy/dist/rdt-hook-BvBEbB9n.js:
  (**
   * @license bippy
   *
   * Copyright (c) Aiden Bai
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

bippy/dist/install-hook-only-TrTYr6LK.js:
  (**
   * @license bippy
   *
   * Copyright (c) Aiden Bai
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

bippy/dist/core-DrcMh8Kr.js:
  (**
   * @license bippy
   *
   * Copyright (c) Aiden Bai
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

bippy/dist/index.js:
  (**
   * @license bippy
   *
   * Copyright (c) Aiden Bai
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

bippy/dist/source.js:
  (**
   * @license bippy
   *
   * Copyright (c) Aiden Bai
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
