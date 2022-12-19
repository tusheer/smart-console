import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import l from '@emotion/styled';

var O=Object.defineProperty,N=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))U.call(t,o)&&T(e,o,t[o]);if(b)for(var o of b(t))X.call(t,o)&&T(e,o,t[o]);return e},y=(e,t)=>N(e,J(t));var Y=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var M=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var x=(e,t,o)=>(Y(e,t,"access private method"),o);var q={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},A=e=>jsx(ThemeProvider,{theme:q,children:e.children}),D=A;var R={logs:[]},Z=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:s=>{t=c(c({},t),s(t)),r.forEach(n=>n());},subscribe:s=>(r.add(s),()=>r.delete(s))}},g=Z(R),C=e=>useSyncExternalStore(g.subscribe,useCallback(()=>e(g.getState()),[]),()=>e(R));var k=l.div`
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
`,z=l.div`
    display: flex;
    height: 100%;
`,E=l.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,P=l.li`
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
`;function te({position:e}){let[t,o]=useState(Number(localStorage.getItem(`smart-devtool-resize-${e}`))||null),[r,u]=useState(!1),d=useRef(null),s=useCallback(()=>{u(!0);},[]),n=useCallback(()=>{u(!1);},[]),f=useCallback(a=>{r&&o(e==="vertical"?a.pageY:a.pageX);},[r]);return useEffect(()=>{let a;return r&&(window.addEventListener("mousemove",f),window.addEventListener("mouseup",n)),a=setTimeout(()=>{localStorage.setItem(`smart-devtool-resize-${e}`,String(t===null?"":t));},700),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",n),clearTimeout(a);}},[r]),{mouseMove:t,props:{onMouseDown:s,ref:d}}}var S=te;var re=()=>{let[e,t]=useState(!0),o=C(i=>i.logs),[r,u]=useState(null),{mouseMove:d,props:s}=S({position:"vertical"}),{mouseMove:n,props:f}=S({position:"horizontal"});useEffect(()=>{t(!1);},[]);let a=i=>()=>u(i);return e?null:jsx(D,{children:jsxs(k,{style:{height:d!==null?`${window.innerHeight-d}px`:"300px"},children:[jsx("div",y(c({},s),{style:{width:"100%",height:"2px",background:"white",cursor:"row-resize"}})),jsxs(z,{children:[jsx(E,{"data-testid":"ul",children:o.map((i,H)=>jsxs(P,{onClick:a(i),children:[jsx(I,{status:i.type,children:i.type}),jsx($,{children:jsx("code",{children:i.data})})]},H))}),r?jsxs(W,{style:{width:n!==null?`${window.innerWidth-n}px`:"400px"},children:[jsx("div",y(c({},f),{style:{height:"100%",width:"2px",background:"#ffffff15",cursor:"ew-resize"}})),JSON.stringify(r)]}):null]})]})})},se=re;var m,L,w=class{constructor(){M(this,m);}log(t){x(this,m,L).call(this,t,"log");}error(t){x(this,m,L).call(this,t,"error");}};m=new WeakSet,L=function(t,o){g.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var V=new w;var Pe=V;

export { se as SmartConsoleDevtool, Pe as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map