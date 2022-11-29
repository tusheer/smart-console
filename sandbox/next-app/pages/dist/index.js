"use strict";
exports.__esModule = true;
var react_1 = require("@smart-console/react");
var react_2 = require("react");
function Web() {
    var _a = react_2.useState('Jane alamt usher'), state = _a[0], setState = _a[1];
    console.log('hello');
    console.log('ji');
    return (React.createElement("div", null,
        React.createElement("h1", null, "Web"),
        React.createElement(react_1.SmartConsoleDevtool, null)));
}
exports["default"] = Web;
