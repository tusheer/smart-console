import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import a from '@emotion/styled';

var V=Object.defineProperty;var L=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(t,e,o)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))O.call(e,o)&&v(t,o,e[o]);if(L)for(var o of L(e))$.call(e,o)&&v(t,o,e[o]);return t};var H=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var b=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o);};var g=(t,e,o)=>(H(t,e,"access private method"),o);var N={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},U=t=>jsx(ThemeProvider,{theme:N,children:t.children}),w=U;var T={logs:[]},G=t=>{let e=t,o=()=>e,s=new Set;return {getState:o,setState:i=>{e=f(f({},e),i(e)),s.forEach(r=>r());},subscribe:i=>(s.add(i),()=>s.delete(i))}},m=G(T),C=t=>useSyncExternalStore(m.subscribe,useCallback(()=>t(m.getState()),[]),()=>t(T));var R=a.div`
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
`,k=a.div`
    display: flex;
`,E=a.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,D=a.li`
    width: 100%;
    cursor: pointer;
    color: ${t=>t.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,M=a.div`
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
`,P=a.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,z=a.div`
    width: 400px;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    border-left: 1px solid #ffffff15;
    padding: 12px;
    background: #161b22;
`;function X({position:t}){let[e,o]=useState(0),[s,p]=useState(!1),n=useRef(null),i=useCallback(()=>{p(!0);},[]),r=useCallback(()=>{p(!1);},[]),d=useCallback(()=>{console.log("mouse move");},[]);return console.log(n),useEffect(()=>{if(console.log(n.current),n.current===null)return;let u=n.current;return u.addEventListener("mousedown",i),u.addEventListener("mouseup",r),window.addEventListener("mousemove",d),()=>{u.removeEventListener("mousedown",i),u.removeEventListener("mouseup",r),window.removeEventListener("mousemove",d);}},[n.current]),{ref:n,mouseMove:e}}var B=X;var Z=()=>{let[t,e]=useState(!0),o=C(r=>r.logs),[s,p]=useState(null);useEffect(()=>{e(!1);},[]);let n=r=>()=>p(r),{ref:i}=B({position:"top-bottom"});return t?null:jsx(w,{children:jsxs(R,{children:[jsx("div",{ref:i,style:{width:"100%",height:"1px",background:"white",cursor:"row-resize"}}),jsxs(k,{children:[jsx(E,{"data-testid":"ul",children:o.map((r,d)=>jsxs(D,{onClick:n(r),children:[jsx(M,{status:r.type,children:r.type}),jsx(P,{children:jsx("code",{children:r.data})})]},d))}),s?jsx(z,{children:JSON.stringify(s)}):null]})]})})},_=Z;var c,S,x=class{constructor(){b(this,c);}log(e){g(this,c,S).call(this,e,"log");}error(e){g(this,c,S).call(this,e,"error");}};c=new WeakSet,S=function(e,o){m.setState(s=>({logs:[...s.logs,{data:e,time:new Date,type:o}]}));};var W=new x;var Re=W;

export { _ as SmartConsoleDevtool, Re as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map