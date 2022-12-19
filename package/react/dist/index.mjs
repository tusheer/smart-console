import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import n from '@emotion/styled';

var O=Object.defineProperty,U=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&T(e,o,t[o]);if(b)for(var o of b(t))X.call(t,o)&&T(e,o,t[o]);return e},y=(e,t)=>U(e,J(t));var Y=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var M=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var x=(e,t,o)=>(Y(e,t,"access private method"),o);var q={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},A=e=>jsx(ThemeProvider,{theme:q,children:e.children}),D=A;var C={logs:[]},Z=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:s=>{t=p(p({},t),s(t)),r.forEach(l=>l());},subscribe:s=>(r.add(s),()=>r.delete(s))}},g=Z(C),R=e=>useSyncExternalStore(g.subscribe,useCallback(()=>e(g.getState()),[]),()=>e(C));var k=n.div`
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
`,P=n.div`
    display: flex;
    height: 100%;
`,z=n.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,E=n.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,I=n.div`
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
`,W=n.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,B=n.div`
    width: 400px;
    display: flex;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    position: relative;
    background: #161b22;
`;function te({position:e}){let[t,o]=useState(null),[r,c]=useState(!1),u=useRef(null),s=useCallback(()=>{c(!0);},[]),l=useCallback(()=>{c(!1);},[]),m=useCallback(f=>{r&&o(e==="top-bottom"?f.pageY:f.pageX);},[r]);return useEffect(()=>(r&&window.addEventListener("mousemove",m),()=>{window.removeEventListener("mousemove",m);}),[r]),{mouseMove:t,props:{onMouseUp:l,onMouseDown:s,ref:u}}}var v=te;var re=()=>{let[e,t]=useState(!0),o=R(i=>i.logs),[r,c]=useState(null),{mouseMove:u,props:s}=v({position:"top-bottom"}),{mouseMove:l,props:m}=v({position:"left-right"});useEffect(()=>{t(!1);},[]);let f=i=>()=>c(i);return e?null:jsx(D,{children:jsxs(k,{style:{height:u!==null?`${window.innerHeight-u}px`:"300px"},children:[jsx("div",y(p({},s),{style:{width:"100%",height:"2px",background:"white",cursor:"row-resize"}})),jsxs(P,{children:[jsx(z,{"data-testid":"ul",children:o.map((i,H)=>jsxs(E,{onClick:f(i),children:[jsx(I,{status:i.type,children:i.type}),jsx(W,{children:jsx("code",{children:i.data})})]},H))}),r?jsxs(B,{style:{width:l!==null?`${window.innerWidth-l}px`:"400px"},children:[jsx("div",y(p({},m),{style:{height:"100%",width:"2px",background:"#ffffff15",cursor:"ew-resize"}})),JSON.stringify(r)]}):null]})]})})},se=re;var d,L,w=class{constructor(){M(this,d);}log(t){x(this,d,L).call(this,t,"log");}error(t){x(this,d,L).call(this,t,"error");}};d=new WeakSet,L=function(t,o){g.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var V=new w;var Ee=V;

export { se as SmartConsoleDevtool, Ee as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map