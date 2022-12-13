import { useState, useEffect, useSyncExternalStore, useCallback } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import s from '@emotion/styled';

var C={color:{primary:"#161b22",log:"#ffc107",error:"#ed4337",info:"",describe:"",success:""}},L=t=>jsx(ThemeProvider,{theme:C,children:t.children}),p=L;var l={logs:[]},P=t=>{let e=t,a=()=>e,o=new Set;return {getState:a,setState:i=>{e={...e,...i(e)},o.forEach(h=>h());},subscribe:i=>(o.add(i),()=>o.delete(i))}},r=P(l),m=t=>useSyncExternalStore(r.subscribe,useCallback(()=>t(r.getState()),[]),()=>t(l));var d=s.div`
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
`,f=s.ul`
    padding: 0;
    margin: 0;
`,u=s.li`
    color: ${t=>t.theme.color.primary};
    background: #fffffc10;
    border-bottom: 1px solid #ffffff15;
    display: flex;
`,g=s.div`
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
`,S=s.div`
    padding: 4px 5px;
    color: white;
`;var D=()=>{let[t,e]=useState(!0),a=m(o=>o.logs);return useEffect(()=>{e(!1);},[]),t?null:jsx(p,{children:jsx(d,{children:jsx(f,{"data-testid":"ul",children:a.map((o,c)=>jsxs(u,{children:[jsx(g,{status:o.type,children:o.type}),jsxs(S,{children:[" ",JSON.stringify(o.data)]})]},c))})})})},F=D;var I={},E=t=>{r.setState(e=>({logs:[...e.logs,{data:t,time:new Date,type:"log"}]}));},R=t=>{r.setState(e=>({logs:[...e.logs,{data:t,time:new Date,type:"error"}]}));},y=Object.assign(I,{log:E,error:R});var _=y;

export { F as SmartConsoleDevtool, _ as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map