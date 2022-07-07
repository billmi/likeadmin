import{_ as T,d as U,l as L,m as A,s as I,bR as N,o as n,c as C,a as e,w as t,V as S,bQ as q,e as v,h as u,Q as _,f as p,g as i,t as z,S as J,E as Q}from"./index.384b7db0.js";import{v as R}from"./el-loading.abc3f1d4.js";import{E as M,a as O}from"./el-table-column.b0eae4f8.js";import"./el-checkbox.2a98827a.js";import"./el-tag.f1977c97.js";import{E as $}from"./el-card.2d504979.js";import{E as G,a as H}from"./el-form-item.f43edef0.js";import{E as K}from"./el-input.a93fc7f3.js";import{E as W,a as X}from"./el-select.762557fc.js";import{P as Y}from"./index.ca7f9f76.js";import{P as Z}from"./index.9f6c9ec5.js";import{b as ee,j as te}from"./organization.eaae5459.js";import{u as oe}from"./pages.e9fd114b.js";import{E as ae}from"./index.1b4cfcd8.js";import"./event.776e7e11.js";import"./isEqual.78bef719.js";import"./index.0a5e60ad.js";import"./scroll.cb490b8d.js";import"./validator.ae916af9.js";import"./el-overlay.97653f00.js";const le={class:"post"},se={class:"m-l-20"},ne=i("\u67E5\u8BE2"),ue=i("\u91CD\u7F6E"),ie=i("\u65B0\u589E\u5C97\u4F4D"),re={class:"m-t-15"},de=i("\u7F16\u8F91"),me=i("\u5220\u9664"),_e={class:"flex row-right"},pe=U({__name:"index",setup(ce){const a=L({code:"",name:"",status:""}),h=[{name:"\u6B63\u5E38",val:"1"},{name:"\u505C\u7528",val:"0"}],{pager:r,requestApi:c,resetParams:D,resetPage:x}=oe({callback:ee,params:a}),V=b=>{te({id:b}).then(()=>{c()})};return A(()=>{c()}),(b,l)=>{const E=K,m=G,y=X,k=W,d=Q,w=H,F=$,g=I("router-link"),s=M,B=ae,P=O,f=N("perms"),j=R;return n(),C("div",le,[e(F,{shadow:"never"},{default:t(()=>[e(w,{class:"ls-form",model:a,"label-width":"80px",inline:""},{default:t(()=>[e(m,{label:"\u5C97\u4F4D\u7F16\u7801"},{default:t(()=>[e(E,{modelValue:a.code,"onUpdate:modelValue":l[0]||(l[0]=o=>a.code=o),class:"ls-input"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u5C97\u4F4D\u540D\u79F0"},{default:t(()=>[e(E,{modelValue:a.name,"onUpdate:modelValue":l[1]||(l[1]=o=>a.name=o),class:"ls-input"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u5C97\u4F4D\u72B6\u6001\uFF1A"},{default:t(()=>[e(k,{modelValue:a.status,"onUpdate:modelValue":l[2]||(l[2]=o=>a.status=o),placeholder:"\u5168\u90E8"},{default:t(()=>[(n(),C(S,null,q(h,o=>e(y,{key:o.val,label:o.name,value:o.val},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[v("div",se,[e(d,{type:"primary",onClick:u(x)},{default:t(()=>[ne]),_:1},8,["onClick"]),e(d,{onClick:u(D)},{default:t(()=>[ue]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"])]),_:1}),_((n(),p(F,{class:"m-t-15",shadow:"never"},{default:t(()=>[_((n(),p(g,{to:"/organization/post/edit"},{default:t(()=>[e(d,{type:"primary"},{default:t(()=>[ie]),_:1})]),_:1})),[[f,["dept.jobs/add"]]]),v("div",re,[e(P,{data:u(r).lists,"row-key":"id"},{default:t(()=>[e(s,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"code","min-width":"100"}),e(s,{label:"\u5C97\u4F4D\u540D\u79F0",prop:"name","min-width":"100"}),e(s,{label:"\u5C97\u4F4D\u72B6\u6001",prop:"status_desc","min-width":"100"},{default:t(({row:o})=>[e(B,{class:"ml-2",type:o.status?"":"danger"},{default:t(()=>[i(z(o.status_desc),1)]),_:2},1032,["type"])]),_:1}),e(s,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(s,{label:"\u6DFB\u52A0\u65F6\u95F4",prop:"create_time","min-width":"100"}),e(s,{label:"\u64CD\u4F5C","min-width":"100",fixed:"right"},{default:t(({row:o})=>[_((n(),p(g,{class:"m-r-10",to:{path:"/organization/post/edit",query:{id:o.id}}},{default:t(()=>[e(d,{type:"text"},{default:t(()=>[de]),_:1})]),_:2},1032,["to"])),[[f,["dept.jobs/edit"]]]),_((n(),p(Z,{class:"m-r-10 inline",onConfirm:fe=>V(o.id)},{trigger:t(()=>[e(d,{type:"text"},{default:t(()=>[me]),_:1})]),_:2},1032,["onConfirm"])),[[f,["dept.jobs/delete"]]])]),_:1})]),_:1},8,["data"])]),v("div",_e,[e(Y,{modelValue:u(r),"onUpdate:modelValue":l[3]||(l[3]=o=>J(r)?r.value=o:null),layout:"total, prev, pager, next, jumper",onChange:u(c)},null,8,["modelValue","onChange"])])]),_:1})),[[j,u(r).loading]])])}}});var Ie=T(pe,[["__scopeId","data-v-5f9c433a"]]);export{Ie as default};
