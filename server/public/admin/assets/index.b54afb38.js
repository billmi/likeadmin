import{d as V,s as $,r as A,i as N,j as s,k as b,m as e,w as n,l as h,R as p,Q as _,n as r,T as R,Y as T,q as C,N as k,x as L,b9 as j}from"./index.c3aea19d.js";import{v as P}from"./el-loading.8f049a65.js";import{E as S}from"./el-card.b8712dac.js";import{_ as q}from"./index.60d15b23.js";import{E as I,a as Q}from"./el-table-column.83850a53.js";import"./el-checkbox.61b5b1e3.js";/* empty css               */import{c as U,r as Y}from"./role.3d44a228.js";import{u as z}from"./paging.09ef6da0.js";import{f as G}from"./feedback.f1ab6e2e.js";import H from"./edit.2961691f.js";import"./el-select.1d971f97.js";import"./index.7cdad076.js";import"./isEqual.662af1fc.js";import"./index.bfca7591.js";import"./el-form-item.74423cde.js";import"./el-tree.47d5228f.js";import"./el-input-number.8c09c70a.js";import"./index.1f9198fb.js";import"./menu.02e44fa2.js";import"./index.6c6a7aaf.js";import"./index.6e7535e0.js";const J={class:"role-lists"},K=C(" \u65B0\u589E\u89D2\u8272 "),M={class:"mt-4"},O=C(" \u7F16\u8F91 "),W=C(" \u5220\u9664 "),X={class:"flex justify-end mt-4"},Fe=V({__name:"index",setup(Z){const u=$(),c=A(!1),{pager:l,getLists:m}=z({fetchFun:Y}),E=async()=>{var t;c.value=!0,await k(),(t=u.value)==null||t.open("add")},F=async t=>{var o,d;c.value=!0,await k(),(o=u.value)==null||o.open("edit"),(d=u.value)==null||d.setFormData(t)},g=async t=>{await G.confirm("\u786E\u8BA4\u8981\u5220\u9664\uFF1F"),await U({id:t}),m()};return m(),(t,o)=>{const d=L,f=N,a=I,y=Q,B=q,w=S,v=j("perms"),D=P;return s(),b("div",J,[e(w,{class:"!border-none",shadow:"never"},{default:n(()=>[h("div",null,[p((s(),_(f,{type:"primary",onClick:E},{icon:n(()=>[e(d,{name:"el-icon-Plus"})]),default:n(()=>[K]),_:1})),[[v,["auth.role/add"]]])]),p((s(),b("div",M,[h("div",null,[e(y,{data:r(l).lists},{default:n(()=>[e(a,{prop:"id",label:"ID"}),e(a,{prop:"name",label:"\u540D\u79F0"}),e(a,{prop:"desc",label:"\u5907\u6CE8"}),e(a,{prop:"sort",label:"\u6392\u5E8F"}),e(a,{prop:"num",label:"\u7BA1\u7406\u5458\u4EBA\u6570"}),e(a,{prop:"create_time",label:"\u521B\u5EFA\u65F6\u95F4"}),e(a,{label:"\u64CD\u4F5C"},{default:n(({row:i})=>[p((s(),_(f,{link:"",type:"primary",onClick:x=>F(i)},{default:n(()=>[O]),_:2},1032,["onClick"])),[[v,["auth.role/edit"]]]),p((s(),_(f,{link:"",type:"danger",onClick:x=>g(i.id)},{default:n(()=>[W]),_:2},1032,["onClick"])),[[v,["auth.role/delete"]]])]),_:1})]),_:1},8,["data"])]),h("div",X,[e(B,{modelValue:r(l),"onUpdate:modelValue":o[0]||(o[0]=i=>R(l)?l.value=i:null),onChange:r(m)},null,8,["modelValue","onChange"])])])),[[D,r(l).loading]])]),_:1}),c.value?(s(),_(H,{key:0,ref_key:"editRef",ref:u,onSuccess:r(m),onClose:o[1]||(o[1]=i=>c.value=!1)},null,8,["onSuccess"])):T("",!0)])}}});export{Fe as default};
