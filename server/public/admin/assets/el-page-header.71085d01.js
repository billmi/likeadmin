import{a8 as m,al as u,dM as _,d as v,ct as k,P as y,o as s,c as l,e as n,T as o,h as a,U as r,f as i,w as x,W as b,p as P,i as c,g as p,t as d,X as C,$ as H}from"./index.384b7db0.js";const w=m({icon:{type:u,default:()=>_},title:String,content:{type:String,default:""}}),E={back:()=>!0},z={name:"ElPageHeader"},$=v({...z,props:w,emits:E,setup(N,{emit:g}){const{t:f}=k(),t=y("page-header");function h(){g("back")}return(e,S)=>(s(),l("div",{class:o(a(t).b())},[n("div",{class:o(a(t).e("left")),onClick:h},[e.icon||e.$slots.icon?(s(),l("div",{key:0,class:o(a(t).e("icon"))},[r(e.$slots,"icon",{},()=>[e.icon?(s(),i(a(P),{key:0},{default:x(()=>[(s(),i(b(e.icon)))]),_:1})):c("v-if",!0)])],2)):c("v-if",!0),n("div",{class:o(a(t).e("title"))},[r(e.$slots,"title",{},()=>[p(d(e.title||a(f)("el.pageHeader.title")),1)])],2)],2),n("div",{class:o(a(t).e("content"))},[r(e.$slots,"content",{},()=>[p(d(e.content),1)])],2)],2))}});var B=C($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/page-header/src/page-header.vue"]]);const V=H(B);export{V as E};
