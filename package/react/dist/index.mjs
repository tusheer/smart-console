var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/SmartConsoleDevTool/index.tsx
import { useEffect, useState } from "react";

// src/store/index.ts
import { useCallback, useSyncExternalStore } from "react";
var initialStore = {
  logs: []
};
var createStore = (initialStore2) => {
  let state = initialStore2;
  const getState = () => state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (fn) => {
    state = __spreadValues(__spreadValues({}, state), fn(state));
    listeners.forEach((l) => l());
  };
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  return { getState, setState, subscribe };
};
var store = createStore(initialStore);
var useStore = (callback) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => callback(store.getState()), []),
    () => callback(initialStore)
  );
};

// src/SmartConsoleDevTool/index.tsx
import { jsx } from "react/jsx-runtime";
var SmartConsoleDevTools = () => {
  const [isSsr, setIsSsr] = useState(true);
  const logs = useStore((sate) => sate.logs);
  useEffect(() => {
    setIsSsr(false);
  }, []);
  if (isSsr)
    return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "red"
      },
      children: logs.map((value, index) => {
        return /* @__PURE__ */ jsx("li", { children: value }, index);
      })
    }
  );
};
var SmartConsoleDevTool_default = SmartConsoleDevTools;

// src/console/index.ts
var console = {};
var log = (log2) => {
  store.setState((value) => {
    return {
      logs: [...value.logs, log2]
    };
  });
};
var errorr = (log2) => {
  store.setState((value) => {
    return {
      logs: [...value.logs, log2]
    };
  });
};
var console_default = Object.assign(console, {
  log,
  errorr
});

// index.ts
var react_default = console_default;
export {
  SmartConsoleDevTool_default as SmartConsoleDevtool,
  react_default as default
};
