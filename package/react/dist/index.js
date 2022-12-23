'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var react$1 = require('@emotion/react');
var jsxRuntime = require('react/jsx-runtime');
var s = require('@emotion/styled');

var N=Object.defineProperty;var L=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&b(e,o,t[o]);if(L)for(var o of L(t))U.call(t,o)&&b(e,o,t[o]);return e};var X=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var z=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var y=(e,t,o)=>(X(e,t,"access private method"),o);var j={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},q=e=>jsxRuntime.jsx(react$1.ThemeProvider,{theme:j,children:e.children}),T=q;var R={logs:[]},Q=e=>{let t=e,o=()=>t,i=new Set;return {getState:o,setState:n=>{t=c(c({},t),n(t)),i.forEach(l=>l());},subscribe:n=>(i.add(n),()=>i.delete(n))}},f=Q(R),M=e=>react.useSyncExternalStore(f.subscribe,react.useCallback(()=>e(f.getState()),[]),()=>e(R));var P=s.div`
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
`,C=s.div`
    display: flex;
    height: 100%;
`,D=s.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,k=s.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,E=s.div`
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
`,H=s.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,W=s.div`
    width: ${e=>e.horizontalWidth!==null?window.innerWidth-e.horizontalWidth+"px":"400px"};
    display: flex;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    position: relative;
    background: #161b22;
`,B=s.div`
    width: 100%;
    height: 2px;
    background: white;
    cursor: row-resize;
    user-select: none;
`,I=s.div`
    height: 100%;
    width: 2px;
    background: #ffffff15;
    cursor: ew-resize;
    user-select: none;
`;function ee(e){return typeof window!="undefined"&&Number(localStorage.getItem(`smart-devtool-resize-${e}`))||null}function te({position:e}){let[t,o]=react.useState(ee(e)),[i,u]=react.useState(!1),d=react.useRef(null),n=react.useCallback(()=>{u(!0);},[]),l=react.useCallback(()=>{u(!1);},[]),m=react.useCallback(r=>{i&&o(e==="vertical"?r.pageY:r.pageX);},[i]),h=()=>({onMouseDown:n,ref:d});return react.useEffect(()=>{let r;return i&&(window.addEventListener("mousemove",m),window.addEventListener("mouseup",l)),r=setTimeout(()=>{localStorage.setItem(`smart-devtool-resize-${e}`,String(t===null?"":t));},700),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",l),clearTimeout(r);}},[i]),{mouseMove:t,getResizeProps:h}}var v=te;var re=()=>{let[e,t]=react.useState(!0),o=M(r=>r.logs),[i,u]=react.useState(null),{mouseMove:d,getResizeProps:n}=v({position:"vertical"}),{mouseMove:l,getResizeProps:m}=v({position:"horizontal"});react.useEffect(()=>{t(!1);},[]);let h=r=>()=>u(r);return e?null:jsxRuntime.jsx(T,{children:jsxRuntime.jsxs(P,{varticalHeight:d,children:[jsxRuntime.jsx(B,c({},n())),jsxRuntime.jsxs(C,{children:[jsxRuntime.jsx(D,{"data-testid":"ul",children:o.map((r,O)=>jsxRuntime.jsxs(k,{onClick:h(r),children:[jsxRuntime.jsx(E,{status:r.type,children:r.type}),jsxRuntime.jsx(H,{children:jsxRuntime.jsx("code",{children:r.data})})]},O))}),i?jsxRuntime.jsxs(W,{horizontalWidth:l,children:[jsxRuntime.jsx(I,c({},m())),JSON.stringify(i)]}):null]})]})})},ie=re;var p,w,S=class{constructor(){z(this,p);}log(t){y(this,p,w).call(this,t,"log");}error(t){y(this,p,w).call(this,t,"error");}};p=new WeakSet,w=function(t,o){f.setState(i=>({logs:[...i.logs,{data:t,time:new Date,type:o}]}));};var F=new S;var Ee=F;

exports.SmartConsoleDevtool = ie;
exports.default = Ee;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map