"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var react_exports = {};
__export(react_exports, {
  SmartConsoleDevtool: () => SmartConsoleDevTool_default,
  default: () => react_default
});
module.exports = __toCommonJS(react_exports);

// src/SmartConsoleDevTool/index.tsx
var import_react = require("react");

// src/store/index.ts
var initialStore = {
  consoles: []
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

// src/SmartConsoleDevTool/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var SmartConsoleDevTools = () => {
  const state = (0, import_react.useSyncExternalStore)(
    store.subscribe,
    (0, import_react.useCallback)(() => store.getState(), [])
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
    children: state.consoles.map((value, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
        children: value
      }, index);
    })
  });
};
var SmartConsoleDevTool_default = SmartConsoleDevTools;

// src/console/index.ts
var console = {};
var log = (log2) => {
  store.setState((value) => {
    return {
      consoles: [...value.consoles, log2]
    };
  });
};
var errorr = (log2) => {
  store.setState((value) => {
    return {
      consoles: [...value.consoles, log2]
    };
  });
};
var console_default = Object.assign(console, {
  log,
  errorr
});

// index.ts
var react_default = console_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SmartConsoleDevtool
});
