import{ac as z,ae as T,d as w,I,P as N,e as V,j as n,k as $,l as t,W as m,V as o,n as a,Q as c,w as i,m as k,aI as g,aT as C,aF as y,Y as h,a0 as b,ao as M,$ as P,a3 as j}from"./index.c3aea19d.js";const F=z({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:T,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Q={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},W={name:"ElTag"},Y=w({...W,props:F,emits:Q,setup(l,{emit:r}){const v=l,S=I(),s=N("tag"),u=V(()=>{const{type:e,hit:f,effect:_,closable:B,round:E}=v;return[s.b(),s.is("closable",B),s.m(e),s.m(S.value),s.m(_),s.is("hit",f),s.is("round",E)]}),p=e=>{r("close",e)},d=e=>{r("click",e)};return(e,f)=>e.disableTransitions?(n(),$("span",{key:0,class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(y),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:i(()=>[k(a(g))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(n(),c(M,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:i(()=>[t("span",{class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(y),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:i(()=>[k(a(g))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var q=P(Y,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const D=j(q);export{D as E,F as t};
