import{r as c}from"./index.BVOCwoKb.js";/* empty css                       */var d={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function R(){if(x)return u;x=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(o,e,r){var t=null;if(r!==void 0&&(t=""+r),e.key!==void 0&&(t=""+e.key),"key"in e){r={};for(var n in e)n!=="key"&&(r[n]=e[n])}else r=e;return e=r.ref,{$$typeof:s,type:o,key:t,ref:e!==void 0?e:null,props:r}}return u.Fragment=i,u.jsx=l,u.jsxs=l,u}var h;function f(){return h||(h=1,d.exports=R()),d.exports}var a=f();const j=({date:s})=>{const i=new Intl.DateTimeFormat("id-ID",{year:"numeric",month:"long",day:"numeric"}).format(new Date(s));return a.jsx("span",{children:i})};function S({posts:s}){const[i,l]=c.useState(""),[o,e]=c.useState([]);c.useEffect(()=>{e(s)},[s]);const r=t=>{const n=t.target.value.toLowerCase();l(n);const m=s.filter(p=>p.data.title.toLowerCase().includes(n));e(m)};return a.jsxs("div",{children:[a.jsx("input",{type:"search",value:i,onChange:r,placeholder:"Search blog posts...",className:"search-input"}),a.jsx("ul",{children:o.map(t=>a.jsx("li",{children:a.jsxs("a",{href:`/blog-id/${t.id}/`,children:[a.jsx("b",{className:"title",children:t.data.title}),a.jsx("p",{className:"date",children:a.jsx(j,{date:t.data.pubDate})})]})},t.id))})]})}export{S as default};
