'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var react$1 = require('@emotion/react');
var jsxRuntime = require('react/jsx-runtime');
var l = require('@emotion/styled');

var O=Object.defineProperty,N=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))U.call(t,o)&&T(e,o,t[o]);if(b)for(var o of b(t))X.call(t,o)&&T(e,o,t[o]);return e},y=(e,t)=>N(e,J(t));var Y=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var M=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var x=(e,t,o)=>(Y(e,t,"access private method"),o);var q={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},A=e=>jsxRuntime.jsx(react$1.ThemeProvider,{theme:q,children:e.children}),R=A;var D={logs:[]},Z=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:i=>{t=u(u({},t),i(t)),r.forEach(n=>n());},subscribe:i=>(r.add(i),()=>r.delete(i))}},g=Z(D),z=e=>react.useSyncExternalStore(g.subscribe,react.useCallback(()=>e(g.getState()),[]),()=>e(D));var C=l.div`
    font-family: 'system-ui' !important;
    padding: 0px;
    background: ${e=>e.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    margin: 0;
`,k=l.div`
    display: flex;
    height: 100%;
`,P=l.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,E=l.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,I=l.div`
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
`,$=l.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,W=l.div`
    width: 400px;
    display: flex;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    position: relative;
    background: #161b22;
`;function te(e){return typeof window!="undefined"&&Number(localStorage.getItem(`smart-devtool-resize-${e}`))||null}function oe({position:e}){let[t,o]=react.useState(te(e)),[r,c]=react.useState(!1),d=react.useRef(null),i=react.useCallback(()=>{c(!0);},[]),n=react.useCallback(()=>{c(!1);},[]),f=react.useCallback(a=>{r&&o(e==="vertical"?a.pageY:a.pageX);},[r]);return react.useEffect(()=>{let a;return r&&(window.addEventListener("mousemove",f),window.addEventListener("mouseup",n)),a=setTimeout(()=>{localStorage.setItem(`smart-devtool-resize-${e}`,String(t===null?"":t));},700),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",n),clearTimeout(a);}},[r]),{mouseMove:t,props:{onMouseDown:i,ref:d}}}var v=oe;var ie=()=>{let[e,t]=react.useState(!0),o=z(s=>s.logs),[r,c]=react.useState(null),{mouseMove:d,props:i}=v({position:"vertical"}),{mouseMove:n,props:f}=v({position:"horizontal"});react.useEffect(()=>{t(!1);},[]);let a=s=>()=>c(s);return e?null:jsxRuntime.jsx(R,{children:jsxRuntime.jsxs(C,{style:{height:d!==null?`${window.innerHeight-d}px`:"300px"},children:[jsxRuntime.jsx("div",y(u({},i),{style:{width:"100%",height:"2px",background:"white",cursor:"row-resize"}})),jsxRuntime.jsxs(k,{children:[jsxRuntime.jsx(P,{"data-testid":"ul",children:o.map((s,H)=>jsxRuntime.jsxs(E,{onClick:a(s),children:[jsxRuntime.jsx(I,{status:s.type,children:s.type}),jsxRuntime.jsx($,{children:jsxRuntime.jsx("code",{children:s.data})})]},H))}),r?jsxRuntime.jsxs(W,{style:{width:n!==null?`${window.innerWidth-n}px`:"400px"},children:[jsxRuntime.jsx("div",y(u({},f),{style:{height:"100%",width:"2px",background:"#ffffff15",cursor:"ew-resize"}})),JSON.stringify(r)]}):null]})]})})},se=ie;var m,L,w=class{constructor(){M(this,m);}log(t){x(this,m,L).call(this,t,"log");}error(t){x(this,m,L).call(this,t,"error");}};m=new WeakSet,L=function(t,o){g.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var V=new w;var Ie=V;

exports.SmartConsoleDevtool = se;
exports.default = Ie;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map