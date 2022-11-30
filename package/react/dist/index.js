'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === 'object') || typeof from === 'function') {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable:
                        !(desc = __getOwnPropDesc(from, key)) ||
                        desc.enumerable,
                });
    }
    return to;
};
var __toCommonJS = (mod) =>
    __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// index.ts
var react_exports = {};
__export(react_exports, {
    SmartConsoleDevtool: () => SmartConsoleDevTool_default,
});
module.exports = __toCommonJS(react_exports);

// src/SmartConsoleDevTool/index.tsx
var import_jsx_runtime = require('react/jsx-runtime');
var SmartConsoleDevTools = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
        children: 'SmartConsoleDevToop',
    });
};
var SmartConsoleDevTool_default = SmartConsoleDevTools;
// Annotate the CommonJS export names for ESM import in node:
0 &&
    (module.exports = {
        SmartConsoleDevtool,
    });
