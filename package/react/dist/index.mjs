import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import s from '@emotion/styled';

var U=Object.defineProperty;var b=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))X.call(t,o)&&T(e,o,t[o]);if(b)for(var o of b(t))Y.call(t,o)&&T(e,o,t[o]);return e};var q=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var z=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var h=(e,t,o)=>(q(e,t,"access private method"),o);var G={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},K=e=>jsx(ThemeProvider,{theme:G,children:e.children}),R=K;var M={logs:[]},j=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:n=>{t=l(l({},t),n(t)),r.forEach(a=>a());},subscribe:n=>(r.add(n),()=>r.delete(n))}},f=j(M),P=e=>useSyncExternalStore(f.subscribe,useCallback(()=>e(f.getState()),[]),()=>e(M));var C=s.div`
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
`,D=s.div`
    display: flex;
    height: 100%;
`,k=s.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,E=s.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,H=s.div`
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
`,I=s.div`
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
`,V=s.div`
    height: 100%;
    width: 2px;
    background: #ffffff15;
    cursor: ew-resize;
    user-select: none;
`;function oe(e){return typeof window!="undefined"&&Number(localStorage.getItem(`smart-devtool-resize-${e}`))||null}function re({position:e}){let[t,o]=useState(oe(e)),[r,p]=useState(!1),d=useRef(null),n=useCallback(()=>{p(!0);},[]),a=useCallback(()=>{p(!1);},[]),m=useCallback(i=>{r&&o(e==="vertical"?i.pageY:i.pageX);},[r]),g=()=>({onMouseDown:n,ref:d});return useEffect(()=>{let i;return r&&(window.addEventListener("mousemove",m),window.addEventListener("mouseup",a)),i=setTimeout(()=>{localStorage.setItem(`smart-devtool-resize-${e}`,String(t===null?"":t));},700),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",a),clearTimeout(i);}},[r]),{mouseMove:t,getResizeProps:g}}var v=re;var ie=({log:e,onSelect:t})=>jsxs(E,{onClick:t(e),children:[jsx(H,{status:e.type,children:e.type}),jsx(I,{children:jsx("code",{children:e.data})})]}),F=ie;var ae=()=>{let[e,t]=useState(!0),o=P(i=>i.logs),[r,p]=useState(null),{mouseMove:d,getResizeProps:n}=v({position:"vertical"}),{mouseMove:a,getResizeProps:m}=v({position:"horizontal"});useEffect(()=>{t(!1);},[]);let g=i=>()=>p(i);return e?null:jsx(R,{children:jsxs(C,{varticalHeight:d,children:[jsx(B,l({},n())),jsxs(D,{children:[jsx(k,{"data-testid":"ul",children:o.map((i,J)=>jsx(F,{log:i,onSelect:g},J))}),r?jsxs(W,{horizontalWidth:a,children:[jsx(V,l({},m())),JSON.stringify(r)]}):null]})]})})},le=ae;var u,w,S=class{constructor(){z(this,u);}log(t){h(this,u,w).call(this,t,"log");}error(t){h(this,u,w).call(this,t,"error");}};u=new WeakSet,w=function(t,o){f.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var N=new S;var Oe=N;

export { le as SmartConsoleDevtool, Oe as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map