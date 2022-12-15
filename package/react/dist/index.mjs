import { useState, useEffect, useSyncExternalStore, useCallback } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import i from '@emotion/styled';

var v={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},T=t=>jsx(ThemeProvider,{theme:v,children:t.children}),d=T;var f={logs:[]},B=t=>{let o=t,a=()=>o,r=new Set;return {getState:a,setState:e=>{o={...o,...e(o)},r.forEach(l=>l());},subscribe:e=>(r.add(e),()=>r.delete(e))}},n=B(f),m=t=>useSyncExternalStore(n.subscribe,useCallback(()=>t(n.getState()),[]),()=>t(f));var g=i.div`
    font-family: 'system-ui' !important;
    padding: 0px;
    background: ${t=>t.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    border-top: 1px solid white;
    margin: 0;
    display: flex;
`,u=i.ul`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,x=i.li`
    width: 100%;
    cursor: pointer;
    color: ${t=>t.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,h=i.div`
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
`,S=i.div`
    padding: 4px 5px;
    color: white;
    width: 100%;
`,y=i.div`
    width: 400px;
    height: 100%;
    overflow-y: auto;
    flex-shrink: 0;
    border-left: 1px solid #ffffff15;
    padding: 12px;
    background: #161b22;
`;var I=()=>{let[t,o]=useState(!0),a=m(e=>e.logs),[r,c]=useState(null);useEffect(()=>{o(!1);},[]);let p=e=>()=>c(e);return t?null:jsx(d,{children:jsxs(g,{children:[jsx(u,{"data-testid":"ul",children:a.map((e,l)=>jsxs(x,{onClick:p(e),children:[jsx(h,{status:e.type,children:e.type}),jsx(S,{children:jsx("code",{children:e.data})})]},l))}),r?jsx(y,{children:JSON.stringify(r)}):null]})})},E=I;var R={},V=t=>{n.setState(o=>({logs:[...o.logs,{data:t,time:new Date,type:"log"}]}));},$=t=>{n.setState(o=>({logs:[...o.logs,{data:t,time:new Date,type:"error"}]}));},C=Object.assign(R,{log:V,error:$});var tt=C;

export { E as SmartConsoleDevtool, tt as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map