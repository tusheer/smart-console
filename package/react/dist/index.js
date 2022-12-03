"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var react_exports = {};
__export(react_exports, {
  SmartConsoleDevtool: () => SmartConsoleDevTool_default,
  default: () => react_default
});
module.exports = __toCommonJS(react_exports);

// src/SmartConsoleDevTool/index.tsx
var import_react4 = require("react");

// src/store/index.ts
var import_react = require("react");
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
  return (0, import_react.useSyncExternalStore)(
    store.subscribe,
    (0, import_react.useCallback)(() => callback(store.getState()), []),
    () => callback(initialStore)
  );
};

// src/SmartConsoleDevTool/style-component.ts
var import_react3 = require("react");

// src/SmartConsoleDevTool/ThemeProvider.tsx
var import_react2 = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var theme = {
  color: {
    primary: "#161b22",
    "grey:300": "#f2f2f2f2"
  }
};
var ThemeContext = import_react2.default.createContext(theme);
function useTheme() {
  return import_react2.default.useContext(ThemeContext);
}

// src/SmartConsoleDevTool/style-component.ts
var styled = (type, newStyles = {}, queries = {}) => {
  const ForwardComponent = (0, import_react3.forwardRef)((_a, ref) => {
    var _b = _a, { style } = _b, rest = __objRest(_b, ["style"]);
    const theme2 = useTheme();
    const mediaStyles = Object.entries(queries).reduce(
      (current, [key, value]) => {
        return useMediaQuery(key) ? __spreadValues(__spreadValues({}, current), typeof value === "function" ? value(
          rest,
          theme2
        ) : value) : current;
      },
      {}
    );
    return (0, import_react3.createElement)(type, __spreadProps(__spreadValues({}, rest), {
      style: __spreadValues(__spreadValues(__spreadValues({}, typeof newStyles === "function" ? newStyles(rest, theme2) : newStyles), style), mediaStyles),
      ref
    }));
  });
  ForwardComponent.displayName = "SmartConsole" + type;
  return ForwardComponent;
};
function useMediaQuery(query) {
  const [isMatch, setIsMatch] = (0, import_react3.useState)(
    () => window.matchMedia && window.matchMedia(query).matches
  );
  (0, import_react3.useEffect)(() => {
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

// src/SmartConsoleDevTool/Styles.tsx
var Container = style_component_default("div", (_, theme2) => {
  return {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol',
    padding: "0px",
    background: theme2.color.primary,
    color: "white",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "300px",
    borderTop: "0.5px solid  #100000f",
    margin: 0
  };
});
var ListContainer = style_component_default("ul", () => {
  return {
    padding: 0,
    margin: 0,
    marginTop: "20px"
  };
});
var List = style_component_default("li", (_, theme2) => {
  return {
    color: theme2.color["grey:300"],
    background: "#fffffc10",
    borderBottom: "1px solid #ffffff15",
    display: "flex"
  };
});
var LogStatus = style_component_default("div", (_, theme2) => {
  return {
    boxSizing: "border-box",
    borderLeft: "2px solid #c9f236",
    color: theme2.color["grey:300"],
    width: "50px",
    padding: "2px 4px",
    fontSize: "16px",
    textTransform: "uppercase"
  };
});
var LogBody = style_component_default("div", (_, theme2) => {
  return {
    padding: "2px 2px",
    color: theme2.color["grey:300"]
  };
});

// src/SmartConsoleDevTool/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var SmartConsoleDevTools = () => {
  const [isSsr, setIsSsr] = (0, import_react4.useState)(true);
  const logs = useStore((sate) => sate.logs);
  (0, import_react4.useEffect)(() => {
    setIsSsr(false);
  }, []);
  if (isSsr)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ListContainer, { "data-testid": "ul", children: logs.map((value, index) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(LogStatus, { children: [
        " ",
        value.type,
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LogBody, { children: value.data })
    ] }, index);
  }) }) });
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SmartConsoleDevtool
});
