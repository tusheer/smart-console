import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import n from '@emotion/styled';

var H=Object.defineProperty,O=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&b(e,o,t[o]);if(L)for(var o of L(t))N.call(t,o)&&b(e,o,t[o]);return e},v=(e,t)=>O(e,U(t));var X=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var w=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var g=(e,t,o)=>(X(e,t,"access private method"),o);var j={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},q=e=>jsx(ThemeProvider,{theme:j,children:e.children}),T=q;var M={logs:[]},Q=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:i=>{t=d(d({},t),i(t)),r.forEach(c=>c());},subscribe:i=>(r.add(i),()=>r.delete(i))}},f=Q(M),C=e=>useSyncExternalStore(f.subscribe,useCallback(()=>e(f.getState()),[]),()=>e(M));var R=n.div`
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
`,D=n.div`
    display: flex;
`,k=n.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,P=n.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,E=n.div`
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
`,z=n.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,I=n.div`
    width: 400px;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    border-left: 1px solid #ffffff15;
    padding: 12px;
    background: #161b22;
`;function _({position:e}){let[t,o]=useState(0),[r,p]=useState(!1),l=useRef(null),i=useCallback(()=>{p(!0);},[]),c=useCallback(()=>{p(!1);},[]),s=useCallback(m=>{r&&o(e==="top-bottom"?m.pageY:m.pageX);},[r]);return useEffect(()=>(window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s);}),[r]),useEffect(()=>{o(0);},[]),{mouseMove:t,props:{onMouseUp:c,onMouseDown:i,ref:l}}}var W=_;var te=()=>{let[e,t]=useState(!0),o=C(s=>s.logs),[r,p]=useState(null),{mouseMove:l,props:i}=W({position:"top-bottom"});useEffect(()=>{t(!1);},[]);let c=s=>()=>p(s);return e?null:jsx(T,{children:jsxs(R,{style:{height:l!==0?`${window.innerHeight-l}px`:"300px"},children:[jsx("div",v(d({},i),{style:{width:"100%",height:"1px",background:"white",cursor:"row-resize"}})),jsxs(D,{children:[jsx(k,{"data-testid":"ul",children:o.map((s,m)=>jsxs(P,{onClick:c(s),children:[jsx(E,{status:s.type,children:s.type}),jsx(z,{children:jsx("code",{children:s.data})})]},m))}),r?jsx(I,{children:JSON.stringify(r)}):null]})]})})},oe=te;var u,S,x=class{constructor(){w(this,u);}log(t){g(this,u,S).call(this,t,"log");}error(t){g(this,u,S).call(this,t,"error");}};u=new WeakSet,S=function(t,o){f.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var $=new x;var Pe=$;

export { oe as SmartConsoleDevtool, Pe as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map