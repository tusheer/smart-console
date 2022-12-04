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

// src/SmartConsoleDevTool/ThemeProvider.tsx
import { ThemeProvider as Provider } from "styled-components";
import { jsx } from "react/jsx-runtime";
var theme = {
  color: {
    primary: "#161b22",
    "grey:300": "#f2f2f2f2"
  }
};
var ThemeProvider = (props) => {
  return /* @__PURE__ */ jsx(Provider, { theme, children: props.children });
};
var ThemeProvider_default = ThemeProvider;

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

// src/SmartConsoleDevTool/Styles.tsx
import styled from "styled-components";
var Container = styled.div`
    fontfamily: -apple-system BlinkMacSystemFont 'Segoe UI' Roboto Helvetica
        Arial sans-serif 'Apple Color Emoji' 'Segoe UI Emoji' 'Segoe UI Symbol';
    padding: 0px;
    background: red;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    border-top: 1px solid red;
    margin: 0;
`;
var ListContainer = styled.ul`
    padding: 0;
    margin: 0;
`;
var List = styled.li`
    color: red;
    background: #fffffc10;
    borderbottom: 1px solid #ffffff15;
    display: flex;
`;
var LogStatus = styled.div`
    boxsizing: border-box;
    border-left: 2px solid #c9f236;
    color: red;
    width: 50px;
    padding: 2px 4px;
    font-size: 16px;
    texttransform: uppercase;
`;
var LogBody = styled.div`
    padding: 2px 2px;
    color: red;
`;

// src/SmartConsoleDevTool/index.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var SmartConsoleDevTools = () => {
  const [isSsr, setIsSsr] = useState(true);
  const logs = useStore((sate) => sate.logs);
  useEffect(() => {
    setIsSsr(false);
  }, []);
  if (isSsr)
    return null;
  return /* @__PURE__ */ jsx2(ThemeProvider_default, { children: /* @__PURE__ */ jsx2(Container, { children: /* @__PURE__ */ jsx2(ListContainer, { "data-testid": "ul", children: logs.map((value, index) => {
    return /* @__PURE__ */ jsxs(List, { children: [
      /* @__PURE__ */ jsxs(LogStatus, { children: [
        " ",
        value.type,
        " "
      ] }),
      /* @__PURE__ */ jsx2(LogBody, { children: value.data })
    ] }, index);
  }) }) }) });
};
var SmartConsoleDevTool_default = SmartConsoleDevTools;

// src/console/index.ts
var console = {};
var log = (log2) => {
  store.setState((value) => {
    return {
      logs: [
        ...value.logs,
        {
          data: log2,
          time: new Date(),
          type: "log"
        }
      ]
    };
  });
};
var errorr = (log2) => {
  store.setState((value) => {
    return {
      logs: [
        ...value.logs,
        {
          data: log2,
          time: new Date(),
          type: "log"
        }
      ]
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
