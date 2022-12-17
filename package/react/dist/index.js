'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var react$1 = require('@emotion/react');
var jsxRuntime = require('react/jsx-runtime');
var s = require('@emotion/styled');

var D=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var u=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r);};var c=(e,t,r)=>(D(e,t,"access private method"),r);var F={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},I=e=>jsxRuntime.jsx(react$1.ThemeProvider,{theme:F,children:e.children}),x=I;var h={logs:[]},$=e=>{let t=e,r=()=>t,i=new Set;return {getState:r,setState:o=>{t={...t,...o(t)},i.forEach(p=>p());},subscribe:o=>(i.add(o),()=>i.delete(o))}},l=$(h),y=e=>react.useSyncExternalStore(l.subscribe,react.useCallback(()=>e(l.getState()),[]),()=>e(h));var S=s.div`
    font-family: 'system-ui' !important;
    padding: 0px;
    background: ${e=>e.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    border-top: 1px solid white;
    margin: 0;
    display: flex;
`,L=s.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,b=s.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,T=s.div`
    min-height: 25px;
    boxsizing: border-box;
    color: trasparent;
    min-width: 50px;
    padding: 2px 4px;
    background: ${e=>e.theme.color[e.status]};
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
`,w=s.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,C=s.div`
    width: 400px;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    border-left: 1px solid #ffffff15;
    padding: 12px;
    background: #161b22;
`;var J=()=>{let[e,t]=react.useState(!0),r=y(o=>o.logs),[i,m]=react.useState(null);react.useEffect(()=>{t(!1);},[]);let g=o=>()=>m(o);return e?null:jsxRuntime.jsx(x,{children:jsxRuntime.jsxs(S,{children:[jsxRuntime.jsx(L,{"data-testid":"ul",children:r.map((o,p)=>jsxRuntime.jsxs(b,{onClick:g(o),children:[jsxRuntime.jsx(T,{status:o.type,children:o.type}),jsxRuntime.jsx(w,{children:jsxRuntime.jsx("code",{children:o.data})})]},p))}),i?jsxRuntime.jsx(C,{children:JSON.stringify(i)}):null]})})},N=J;var a,f,d=class{constructor(){u(this,a);}log(t){c(this,a,f).call(this,t,"log");}error(t){c(this,a,f).call(this,t,"error");}};a=new WeakSet,f=function(t,r){l.setState(i=>({logs:[...i.logs,{data:t,time:new Date,type:r}]}));};var P=new d;var ne=P;

exports.SmartConsoleDevtool = N;
exports.default = ne;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map