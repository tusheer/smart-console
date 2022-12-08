'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var react$1 = require('@emotion/react');
var jsxRuntime = require('react/jsx-runtime');
var s = require('@emotion/styled');

var C={color:{primary:"#161b22","grey:300":"#f2f2f2f2"}},L=t=>jsxRuntime.jsx(react$1.ThemeProvider,{theme:C,children:t.children}),p=L;var c={logs:[]},I=t=>{let e=t,a=()=>e,o=new Set;return {getState:a,setState:i=>{e={...e,...i(e)},o.forEach(b=>b());},subscribe:i=>(o.add(i),()=>o.delete(i))}},r=I(c),d=t=>react.useSyncExternalStore(r.subscribe,react.useCallback(()=>t(r.getState()),[]),()=>t(c));var m=s.div`
    fontfamily: -apple-system BlinkMacSystemFont 'Segoe UI' Roboto Helvetica
        Arial sans-serif 'Apple Color Emoji' 'Segoe UI Emoji' 'Segoe UI Symbol';
    padding: 0px;
    background: ${t=>t.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    border-top: 1px solid red;
    margin: 0;
`,f=s.ul`
    padding: 0;
    margin: 0;
`,g=s.li`
    color: red;
    background: #fffffc10;
    borderbottom: 1px solid #ffffff15;
    display: flex;
`,S=s.div`
    boxsizing: border-box;
    border-left: 2px solid #c9f236;
    color: red;
    width: 50px;
    padding: 2px 4px;
    font-size: 16px;
    texttransform: uppercase;
`,u=s.div`
    padding: 2px 2px;
    color: red;
`;var E=()=>{let[t,e]=react.useState(!0),a=d(o=>o.logs);return react.useEffect(()=>{e(!1);},[]),t?null:jsxRuntime.jsx(p,{children:jsxRuntime.jsx(m,{children:jsxRuntime.jsx(f,{"data-testid":"ul",children:a.map((o,l)=>jsxRuntime.jsxs(g,{children:[jsxRuntime.jsxs(S,{children:[" ",o.type," "]}),jsxRuntime.jsx(u,{children:o.data})]},l))})})})},F=E;var w={},D=t=>{r.setState(e=>({logs:[...e.logs,{data:t,time:new Date,type:"log"}]}));},R=t=>{r.setState(e=>({logs:[...e.logs,{data:t,time:new Date,type:"log"}]}));},y=Object.assign(w,{log:D,errorr:R});var Z=y;

exports.SmartConsoleDevtool = F;
exports.default = Z;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map