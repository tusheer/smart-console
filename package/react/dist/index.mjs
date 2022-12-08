import { useState, useEffect, useSyncExternalStore, useCallback } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import s from '@emotion/styled';

var C={color:{primary:"#161b22","grey:300":"#f2f2f2f2"}},L=t=>jsx(ThemeProvider,{theme:C,children:t.children}),l=L;var c={logs:[]},k=t=>{let e=t,a=()=>e,o=new Set;return {getState:a,setState:i=>{e={...e,...i(e)},o.forEach(b=>b());},subscribe:i=>(o.add(i),()=>o.delete(i))}},r=k(c),d=t=>useSyncExternalStore(r.subscribe,useCallback(()=>t(r.getState()),[]),()=>t(c));var m=s.div`
    font-family: 'system-ui' !important;
    padding: 0px;
    background: ${t=>t.theme.color.primary};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    border-top: 1px solid red;
    margin: 0;
`,f=s.ul`
    padding: 0;
    margin: 0;
`,g=s.li`
    color: blue;
    background: #fffffc10;
    borderbottom: 1px solid #ffffff15;
    display: flex;
    &:hover {
        color: green;
    }
`,u=s.div`
    boxsizing: border-box;
    border-left: 2px solid #c9f236;
    /* color: red; */
    width: 50px;
    padding: 2px 4px;
    font-size: 16px;
    texttransform: uppercase;
`,S=s.div`
    padding: 2px 2px;
    color: red;
`;var D=()=>{let[t,e]=useState(!0),a=d(o=>o.logs);return useEffect(()=>{e(!1);},[]),t?null:jsx(l,{children:jsx(m,{children:jsx(f,{"data-testid":"ul",children:a.map((o,p)=>jsxs(g,{children:[jsxs(u,{children:[" ",o.type," "]}),jsx(S,{children:o.data})]},p))})})})},F=D;var I={},E=t=>{r.setState(e=>({logs:[...e.logs,{data:t,time:new Date,type:"log"}]}));},R=t=>{r.setState(e=>({logs:[...e.logs,{data:t,time:new Date,type:"log"}]}));},y=Object.assign(I,{log:E,errorr:R});var _=y;

export { F as SmartConsoleDevtool, _ as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map