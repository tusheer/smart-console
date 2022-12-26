'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var react$1 = require('@emotion/react');
var jsxRuntime = require('react/jsx-runtime');
var n = require('@emotion/styled');

var X=Object.defineProperty;var b=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var z=(e,t,o)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))Y.call(t,o)&&z(e,o,t[o]);if(b)for(var o of b(t))q.call(t,o)&&z(e,o,t[o]);return e};var A=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var R=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var h=(e,t,o)=>(A(e,t,"access private method"),o);var K={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},Q=e=>jsxRuntime.jsx(react$1.ThemeProvider,{theme:K,children:e.children}),M=Q;var P={logs:[]},te=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:s=>{t=l(l({},t),s(t)),r.forEach(a=>a());},subscribe:s=>(r.add(s),()=>r.delete(s))}},g=te(P),k=e=>react.useSyncExternalStore(g.subscribe,react.useCallback(()=>e(g.getState()),[]),()=>e(P));var C=n.div`
    font-family: 'system-ui' !important;
    padding: 0px;
    background: ${e=>e.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${e=>e.varticalHeight!==null?window.innerHeight-e.varticalHeight+"px":"300px"};
    margin: 0;
`,D=n.div`
    display: flex;
    height: 100%;
`,E=n.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,W=n.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,B=n.div`
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
`,H=n.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
`,I=n.div`
    width: ${e=>e.horizontalWidth!==null?window.innerWidth-e.horizontalWidth+"px":"400px"};
    display: flex;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    position: relative;
    background: #161b22;
`,V=n.div`
    width: 100%;
    height: 2px;
    background: white;
    cursor: row-resize;
    user-select: none;
`,$=n.div`
    height: 100%;
    width: 2px;
    background: #ffffff15;
    cursor: ew-resize;
    user-select: none;
`,F=n.div`
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 15px;
    gap: 4px;
    svg {
        height: 18px;
        width: 18px;
    }
`;function ie(e){return typeof window!="undefined"&&Number(localStorage.getItem(`smart-devtool-resize-${e}`))||null}function ne({position:e}){let[t,o]=react.useState(ie(e)),[r,p]=react.useState(!1),d=react.useRef(null),s=react.useCallback(()=>{p(!0);},[]),a=react.useCallback(()=>{p(!1);},[]),m=react.useCallback(i=>{r&&o(e==="vertical"?i.pageY:i.pageX);},[r]),f=()=>({onMouseDown:s,ref:d});return react.useEffect(()=>{let i;return r&&(window.addEventListener("mousemove",m),window.addEventListener("mouseup",a)),i=setTimeout(()=>{localStorage.setItem(`smart-devtool-resize-${e}`,String(t===null?"":t));},700),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",a),clearTimeout(i);}},[r]),{mouseMove:t,getResizeProps:f}}var x=ne;var se=e=>typeof e,ae=({log:e,onSelect:t})=>(console.log(se(e.data)),jsxRuntime.jsxs(W,{onClick:t(e),children:[jsxRuntime.jsx(B,{status:e.type,children:e.type}),jsxRuntime.jsxs(H,{children:[JSON.stringify(e.data),jsxRuntime.jsxs(F,{children:[jsxRuntime.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:jsxRuntime.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.time.toLocaleTimeString("en-US",{hour12:!0,formatMatcher:"best fit"})]})]})]})),N=ae;var pe=()=>{let[e,t]=react.useState(!0),o=k(i=>i.logs),[r,p]=react.useState(null),{mouseMove:d,getResizeProps:s}=x({position:"vertical"}),{mouseMove:a,getResizeProps:m}=x({position:"horizontal"});react.useEffect(()=>{t(!1);},[]);let f=i=>()=>p(i);return e?null:jsxRuntime.jsx(M,{children:jsxRuntime.jsxs(C,{varticalHeight:d,children:[jsxRuntime.jsx(V,l({},s())),jsxRuntime.jsxs(D,{children:[jsxRuntime.jsx(E,{"data-testid":"ul",children:o.map((i,j)=>jsxRuntime.jsx(N,{log:i,onSelect:f},j))}),r?jsxRuntime.jsxs(I,{horizontalWidth:a,children:[jsxRuntime.jsx($,l({},m())),JSON.stringify(r)]}):null]})]})})},ce=pe;var u,T,w=class{constructor(){R(this,u);}log(t){h(this,u,T).call(this,t,"log");}error(t){h(this,u,T).call(this,t,"error");}};u=new WeakSet,T=function(t,o){g.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var U=new w;var Je=U;

exports.SmartConsoleDevtool = ce;
exports.default = Je;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map