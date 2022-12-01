var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/SmartConsoleDevTool/index.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";

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

// src/SmartConsoleDevTool/style-component.ts
import {
  forwardRef,
  createElement,
  useEffect,
  useState
} from "react";
var styled = (type, newStyles = {}, queries = {}) => {
  const ForwardComponent = forwardRef((_a, ref) => {
    var _b = _a, { style } = _b, rest = __objRest(_b, ["style"]);
    const theme = {};
    const mediaStyles = Object.entries(queries).reduce(
      (current, [key, value]) => {
        return useMediaQuery(key) ? __spreadValues(__spreadValues({}, current), typeof value === "function" ? value(
          rest,
          theme
        ) : value) : current;
      },
      {}
    );
    return createElement(type, __spreadProps(__spreadValues({}, rest), {
      style: __spreadValues(__spreadValues(__spreadValues({}, typeof newStyles === "function" ? newStyles(rest, theme) : newStyles), style), mediaStyles),
      ref
    }));
  });
  ForwardComponent.displayName = "SmartConsole" + type;
  return ForwardComponent;
};
function useMediaQuery(query) {
  const [isMatch, setIsMatch] = useState(
    () => window.matchMedia && window.matchMedia(query).matches
  );
  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    const matcher = window.matchMedia(query);
    const onChange = ({ matches }) => setIsMatch(matches);
    matcher.addListener(onChange);
    return () => {
      matcher.removeListener(onChange);
    };
  }, [isMatch, query, setIsMatch]);
  return isMatch;
}
var style_component_default = styled;

// src/SmartConsoleDevTool/SmartConsoleProvider.tsx
import { jsx } from "react/jsx-runtime";
var Div = style_component_default("div", {
  background: "blue"
});
var SmartConsoleProvider = () => {
  return /* @__PURE__ */ jsx(Div, { style: { height: "300px" }, value: "green", children: /* @__PURE__ */ jsx("div", { children: "Tusher" }) });
};
var SmartConsoleProvider_default = SmartConsoleProvider;

// src/SmartConsoleDevTool/index.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var SmartConsoleDevTools = () => {
  const [isSsr, setIsSsr] = useState2(true);
  const logs = useStore((sate) => sate.logs);
  useEffect2(() => {
    setIsSsr(false);
  }, []);
  if (isSsr)
    return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "red"
      },
      children: [
        logs.map((value, index) => {
          return /* @__PURE__ */ jsx2("li", { children: value }, index);
        }),
        /* @__PURE__ */ jsx2(SmartConsoleProvider_default, {})
      ]
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
