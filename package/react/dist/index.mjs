import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import n from '@emotion/styled';

var O=Object.defineProperty,U=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var L=(t,e,o)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,d=(t,e)=>{for(var o in e||(e={}))J.call(e,o)&&L(t,o,e[o]);if(S)for(var o of S(e))N.call(e,o)&&L(t,o,e[o]);return t},b=(t,e)=>U(t,H(e));var j=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var v=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o);};var m=(t,e,o)=>(j(t,e,"access private method"),o);var A={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},G=t=>jsx(ThemeProvider,{theme:A,children:t.children}),w=G;var T={logs:[]},Y=t=>{let e=t,o=()=>e,r=new Set;return {getState:o,setState:i=>{e=d(d({},e),i(e)),r.forEach(c=>c());},subscribe:i=>(r.add(i),()=>r.delete(i))}},f=Y(T),M=t=>useSyncExternalStore(f.subscribe,useCallback(()=>t(f.getState()),[]),()=>t(T));var C=n.div`
    font-family: 'system-ui' !important;
    padding: 0px;
    background: ${t=>t.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    margin: 0;
`,R=n.div`
    display: flex;
`,D=n.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,k=n.li`
    width: 100%;
    cursor: pointer;
    color: ${t=>t.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,P=n.div`
    min-height: 25px;
    boxsizing: border-box;
    color: trasparent;
    min-width: 50px;
    padding: 2px 4px;
    background: ${t=>t.theme.color[t.status]};
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
`,z=n.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,E=n.div`
    width: 400px;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    border-left: 1px solid #ffffff15;
    padding: 12px;
    background: #161b22;
`;function _({position:t}){let[e,o]=useState(0),[r,l]=useState(!1),p=useRef(null),i=useCallback(()=>{l(!0);},[]),c=useCallback(()=>{l(!1);},[]),s=useCallback(()=>{r&&console.log(p);},[r]);return useEffect(()=>(window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s);}),[p.current]),useEffect(()=>{o(0);},[]),{mouseMove:e,props:{onMouseUp:c,onMouseDown:i,ref:p}}}var F=_;var te=()=>{let[t,e]=useState(!0),o=M(s=>s.logs),[r,l]=useState(null),{mouseMove:p,props:i}=F({position:"top-bottom"});useEffect(()=>{e(!1);},[]);let c=s=>()=>l(s);return t?null:jsx(w,{children:jsxs(C,{style:{height:`${300+p}px `},children:[jsx("div",b(d({},i),{style:{width:"100%",height:"1px",background:"white",cursor:"row-resize"}})),jsxs(R,{children:[jsx(D,{"data-testid":"ul",children:o.map((s,$)=>jsxs(k,{onClick:c(s),children:[jsx(P,{status:s.type,children:s.type}),jsx(z,{children:jsx("code",{children:s.data})})]},$))}),r?jsx(E,{children:JSON.stringify(r)}):null]})]})})},oe=te;var u,x,y=class{constructor(){v(this,u);}log(e){m(this,u,x).call(this,e,"log");}error(e){m(this,u,x).call(this,e,"error");}};u=new WeakSet,x=function(e,o){f.setState(r=>({logs:[...r.logs,{data:e,time:new Date,type:o}]}));};var V=new y;var Pe=V;

export { oe as SmartConsoleDevtool, Pe as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map