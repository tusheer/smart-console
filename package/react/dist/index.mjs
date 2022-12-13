import { useState, useEffect, useSyncExternalStore, useCallback } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import i from '@emotion/styled';

var C={color:{primary:"#161b22","grey:300":"#f2f2f2f2"}},L=t=>jsx(ThemeProvider,{theme:C,children:t.children}),c=L;var m={logs:[]},P=t=>{let e=t,s=()=>e,o=new Set;return {getState:s,setState:n=>{e={...e,...n(e)},o.forEach(h=>h());},subscribe:n=>(o.add(n),()=>o.delete(n))}},r=P(m),f=t=>useSyncExternalStore(r.subscribe,useCallback(()=>t(r.getState()),[]),()=>t(m));var d=i.div`
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
    overflow-y: auto;
`,g=i.ul`
    padding: 0;
    margin: 0;
`,u=i.li`
    color: ${t=>t.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,S=i.div`
    min-height: 25px;
    boxsizing: border-box;
    color: trasparent;
    min-width: 50px;
    padding: 2px 4px;
    background: #ffc107;
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
`,x=i.div`
    padding: 2px 2px;
    color: white;
`;var D=()=>{let[t,e]=useState(!0),s=f(o=>o.logs);return useEffect(()=>{e(!1);},[]),t?null:jsx(c,{children:jsx(d,{children:jsx(g,{"data-testid":"ul",children:s.map((o,l)=>jsxs(u,{children:[jsxs(S,{children:[" ",o.type," "]}),jsxs(x,{children:[" ",JSON.stringify(o.data)]})]},l))})})})},F=D;var I={},E=t=>{r.setState(e=>({logs:[...e.logs,{data:t,time:new Date,type:"log"}]}));},R=t=>{r.setState(e=>({logs:[...e.logs,{data:t,time:new Date,type:"log"}]}));},y=Object.assign(I,{log:E,errorr:R});var _=y;

export { F as SmartConsoleDevtool, _ as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map