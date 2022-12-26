import { useState, useEffect, useSyncExternalStore, useCallback, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import n from '@emotion/styled';

var X=Object.defineProperty;var b=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var z=(e,t,o)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))Y.call(t,o)&&z(e,o,t[o]);if(b)for(var o of b(t))q.call(t,o)&&z(e,o,t[o]);return e};var A=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var R=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o);};var y=(e,t,o)=>(A(e,t,"access private method"),o);var K={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},Q=e=>jsx(ThemeProvider,{theme:K,children:e.children}),M=Q;var P={logs:[]},te=e=>{let t=e,o=()=>t,r=new Set;return {getState:o,setState:s=>{t=l(l({},t),s(t)),r.forEach(a=>a());},subscribe:s=>(r.add(s),()=>r.delete(s))}},g=te(P),k=e=>useSyncExternalStore(g.subscribe,useCallback(()=>e(g.getState()),[]),()=>e(P));var C=n.div`
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
`,I=n.li`
    width: 100%;
    cursor: pointer;
    color: ${e=>e.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,W=n.div`
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
`,B=n.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
`,H=n.div`
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
`;function ie(e){return typeof window!="undefined"&&Number(localStorage.getItem(`smart-devtool-resize-${e}`))||null}function ne({position:e}){let[t,o]=useState(ie(e)),[r,p]=useState(!1),d=useRef(null),s=useCallback(()=>{p(!0);},[]),a=useCallback(()=>{p(!1);},[]),m=useCallback(i=>{r&&o(e==="vertical"?i.pageY:i.pageX);},[r]),h=()=>({onMouseDown:s,ref:d});return useEffect(()=>{let i;return r&&(window.addEventListener("mousemove",m),window.addEventListener("mouseup",a)),i=setTimeout(()=>{localStorage.setItem(`smart-devtool-resize-${e}`,String(t===null?"":t));},700),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",a),clearTimeout(i);}},[r]),{mouseMove:t,getResizeProps:h}}var v=ne;var se=({log:e,onSelect:t})=>jsxs(I,{onClick:t(e),children:[jsx(W,{status:e.type,children:e.type}),jsxs(B,{children:[JSON.stringify(e.data),jsxs(F,{children:[jsx(ae,{}),e.time.toLocaleTimeString("en-US",{hour12:!0,formatMatcher:"best fit"})]})]})]}),ae=()=>jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),N=se;var pe=()=>{let[e,t]=useState(!0),o=k(i=>i.logs),[r,p]=useState(null),{mouseMove:d,getResizeProps:s}=v({position:"vertical"}),{mouseMove:a,getResizeProps:m}=v({position:"horizontal"});useEffect(()=>{t(!1);},[]);let h=i=>()=>p(i);return e?null:jsx(M,{children:jsxs(C,{varticalHeight:d,children:[jsx(V,l({},s())),jsxs(D,{children:[jsx(E,{"data-testid":"ul",children:o.map((i,j)=>jsx(N,{log:i,onSelect:h},j))}),r?jsxs(H,{horizontalWidth:a,children:[jsx($,l({},m())),JSON.stringify(r)]}):null]})]})})},ce=pe;var u,T,w=class{constructor(){R(this,u);}log(t){y(this,u,T).call(this,t,"log");}error(t){y(this,u,T).call(this,t,"error");}};u=new WeakSet,T=function(t,o){g.setState(r=>({logs:[...r.logs,{data:t,time:new Date,type:o}]}));};var U=new w;var Je=U;

export { ce as SmartConsoleDevtool, Je as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map