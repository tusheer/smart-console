import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import s from '@emotion/styled';

var I=Object.defineProperty;var h=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var x=(e,t,o)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))V.call(t,o)&&x(e,o,t[o]);if(h)for(var o of h(t))O.call(t,o)&&x(e,o,t[o]);return e};var W=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var S=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var d=(e,t,o)=>(W(e,t,"access private method"),o);var H={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},M=e=>jsx(ThemeProvider,{theme:H,children:e.children}),L=M;var b={logs:[]},q=e=>{let t=e,o=()=>t,i=new Set;return {getState:o,setState:a=>{t=c(c({},t),a(t)),i.forEach(r=>r());},subscribe:a=>(i.add(a),()=>i.delete(a))}},l=q(b),T=e=>useSyncExternalStore(l.subscribe,useCallback(()=>e(l.getState()),[]),()=>e(b));var v=s.div`
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
`,w=s.div`
    display: flex;
`,R=s.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,C=s.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,k=s.div`
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
`,P=s.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,z=s.div`
    width: 400px;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    border-left: 1px solid #ffffff15;
    padding: 12px;
    background: #161b22;
`;function G({position:e}){return {ref:useRef(null)}}var D=G;var Q=()=>{let[e,t]=useState(!0),o=T(r=>r.logs),[i,g]=useState(null);useEffect(()=>{t(!1);},[]);let y=r=>()=>g(r),{ref:a}=D({position:"top-bottom"});return e?null:jsx(L,{children:jsxs(v,{ref:a,children:[jsx("div",{style:{width:"100%",height:"1px",background:"red",cursor:"e-resize"}}),jsxs(w,{children:[jsx(R,{"data-testid":"ul",children:o.map((r,F)=>jsxs(C,{onClick:y(r),children:[jsx(k,{status:r.type,children:r.type}),jsx(P,{children:jsx("code",{children:r.data})})]},F))}),i?jsx(z,{children:JSON.stringify(i)}):null]})]})})},U=Q;var p,u,m=class{constructor(){S(this,p);}log(t){d(this,p,u).call(this,t,"log");}error(t){d(this,p,u).call(this,t,"error");}};p=new WeakSet,u=function(t,o){l.setState(i=>({logs:[...i.logs,{data:t,time:new Date,type:o}]}));};var B=new m;var Te=B;

export { U as SmartConsoleDevtool, Te as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map