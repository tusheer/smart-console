'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var react$1 = require('@emotion/react');
var jsxRuntime = require('react/jsx-runtime');
var a = require('@emotion/styled');

var O=Object.defineProperty,J=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))U.call(t,o)&&T(e,o,t[o]);if(b)for(var o of b(t))X.call(t,o)&&T(e,o,t[o]);return e},y=(e,t)=>J(e,N(t));var Y=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var M=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var x=(e,t,o)=>(Y(e,t,"access private method"),o);var q={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},A=e=>jsxRuntime.jsx(react$1.ThemeProvider,{theme:q,children:e.children}),D=A;var C={logs:[]},Z=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:s=>{t=p(p({},t),s(t)),r.forEach(n=>n());},subscribe:s=>(r.add(s),()=>r.delete(s))}},g=Z(C),R=e=>react.useSyncExternalStore(g.subscribe,react.useCallback(()=>e(g.getState()),[]),()=>e(C));var k=a.div`
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
`,z=a.div`
    display: flex;
    height: 100%;
`,E=a.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,P=a.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,I=a.div`
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
`,W=a.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,B=a.div`
    width: 400px;
    display: flex;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    position: relative;
    background: #161b22;
`;function te({position:e}){let[t,o]=react.useState(null),[r,c]=react.useState(!1),d=react.useRef(null),s=react.useCallback(()=>{c(!0);},[]),n=react.useCallback(()=>{c(!1);},[]),m=react.useCallback(f=>{r&&o(e==="vertical"?f.pageY:f.pageX);},[r]);return react.useEffect(()=>(r&&(window.addEventListener("mousemove",m),window.addEventListener("mouseup",n)),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",n);}),[r]),{mouseMove:t,props:{onMouseDown:s,ref:d}}}var S=te;var re=()=>{let[e,t]=react.useState(!0),o=R(i=>i.logs),[r,c]=react.useState(null),{mouseMove:d,props:s}=S({position:"vertical"}),{mouseMove:n,props:m}=S({position:"horizontal"});react.useEffect(()=>{t(!1);},[]);let f=i=>()=>c(i);return e?null:jsxRuntime.jsx(D,{children:jsxRuntime.jsxs(k,{style:{height:d!==null?`${window.innerHeight-d}px`:"300px"},children:[jsxRuntime.jsx("div",y(p({},s),{style:{width:"100%",height:"2px",background:"white",cursor:"row-resize"}})),jsxRuntime.jsxs(z,{children:[jsxRuntime.jsx(E,{"data-testid":"ul",children:o.map((i,H)=>jsxRuntime.jsxs(P,{onClick:f(i),children:[jsxRuntime.jsx(I,{status:i.type,children:i.type}),jsxRuntime.jsx(W,{children:jsxRuntime.jsx("code",{children:i.data})})]},H))}),r?jsxRuntime.jsxs(B,{style:{width:n!==null?`${window.innerWidth-n}px`:"400px"},children:[jsxRuntime.jsx("div",y(p({},m),{style:{height:"100%",width:"2px",background:"#ffffff15",cursor:"ew-resize"}})),JSON.stringify(r)]}):null]})]})})},se=re;var u,L,w=class{constructor(){M(this,u);}log(t){x(this,u,L).call(this,t,"log");}error(t){x(this,u,L).call(this,t,"error");}};u=new WeakSet,L=function(t,o){g.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var V=new w;var Pe=V;

exports.SmartConsoleDevtool = se;
exports.default = Pe;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map