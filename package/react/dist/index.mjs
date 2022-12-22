import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import i from '@emotion/styled';

var N=Object.defineProperty;var L=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&b(e,o,t[o]);if(L)for(var o of L(t))U.call(t,o)&&b(e,o,t[o]);return e};var X=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var T=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var y=(e,t,o)=>(X(e,t,"access private method"),o);var j={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},q=e=>jsx(ThemeProvider,{theme:j,children:e.children}),z=q;var R={logs:[]},Q=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:s=>{t=c(c({},t),s(t)),r.forEach(p=>p());},subscribe:s=>(r.add(s),()=>r.delete(s))}},g=Q(R),M=e=>useSyncExternalStore(g.subscribe,useCallback(()=>e(g.getState()),[]),()=>e(R));var D=i.div`
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
`,C=i.div`
    display: flex;
    height: 100%;
`,k=i.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,P=i.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,E=i.div`
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
`,W=i.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,B=i.div`
    width: ${e=>e.horizontalWidth!==null?window.innerWidth-e.horizontalWidth+"px":"400px"};
    display: flex;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    position: relative;
    background: #161b22;
`,H=i.div`
    width: 100%;
    height: 2px;
    background: white;
    cursor: row-resize;
`,I=i.div`
    height: 100%;
    width: 2px;
    background: #ffffff15;
    cursor: ew-resize;
`;function ee(e){return typeof window!="undefined"&&Number(localStorage.getItem(`smart-devtool-resize-${e}`))||null}function te({position:e}){let[t,o]=useState(ee(e)),[r,u]=useState(!1),m=useRef(null),s=useCallback(()=>{u(!0);},[]),p=useCallback(()=>{u(!1);},[]),f=useCallback(a=>{r&&o(e==="vertical"?a.pageY:a.pageX);},[r]);return useEffect(()=>{let a;return r&&(window.addEventListener("mousemove",f),window.addEventListener("mouseup",p)),a=setTimeout(()=>{localStorage.setItem(`smart-devtool-resize-${e}`,String(t===null?"":t));},700),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",p),clearTimeout(a);}},[r]),{mouseMove:t,props:{onMouseDown:s,ref:m}}}var v=te;var re=()=>{let[e,t]=useState(!0),o=M(n=>n.logs),[r,u]=useState(null),{mouseMove:m,props:s}=v({position:"vertical"}),{mouseMove:p,props:f}=v({position:"horizontal"});useEffect(()=>{t(!1);},[]);let a=n=>()=>u(n);return e?null:jsx(z,{children:jsxs(D,{varticalHeight:m,children:[jsx(H,c({},s)),jsxs(C,{children:[jsx(k,{"data-testid":"ul",children:o.map((n,O)=>jsxs(P,{onClick:a(n),children:[jsx(E,{status:n.type,children:n.type}),jsx(W,{children:jsx("code",{children:n.data})})]},O))}),r?jsxs(B,{horizontalWidth:p,children:[jsx(I,c({},f)),JSON.stringify(r)]}):null]})]})})},ie=re;var d,w,S=class{constructor(){T(this,d);}log(t){y(this,d,w).call(this,t,"log");}error(t){y(this,d,w).call(this,t,"error");}};d=new WeakSet,w=function(t,o){g.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var F=new S;var Ee=F;

export { ie as SmartConsoleDevtool, Ee as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map