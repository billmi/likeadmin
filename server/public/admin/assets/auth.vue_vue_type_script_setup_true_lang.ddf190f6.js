import{B as T,V as L,D as N,E as O,F as P}from"./element-plus.81dd3128.js";import{r as q}from"./role.c13f4da2.js";import{m as H}from"./menu.9f639369.js";import{P as I}from"./index.4a1d9059.js";import{t as M}from"./index.018c2b2d.js";import{d as U,s as m,r as u,a1 as W,o as j,c as z,W as s,O as c,a as h,n as v}from"./@vue.af680e04.js";const G={class:"edit-popup"},te=U({__name:"auth",emits:["success","close"],setup(J,{expose:k,emit:p}){const o=m(),f=m(),r=m(),y=u(!1),d=u(!0),_=u([]),i=u([]),a=W({id:"",name:"",desc:"",sort:0,menu_id:[]}),C={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},x=()=>{H({page_type:0}).then(e=>{i.value=e.lists,_.value=M(e.lists),v(()=>{E()})})},b=()=>{var l,n;const e=(l=o.value)==null?void 0:l.getCheckedKeys(),t=(n=o.value)==null?void 0:n.getHalfCheckedKeys();return e==null||e.unshift.apply(e,t),e},E=()=>{a.menu_id.forEach(e=>{v(()=>{var t;(t=o.value)==null||t.setChecked(e,!0,!1)})})},g=e=>{const t=i.value;for(let l=0;l<t.length;l++)o.value.store.nodesMap[t[l].id].expanded=e},D=e=>{var t,l;e?(t=o.value)==null||t.setCheckedKeys(_.value.map(n=>n.id)):(l=o.value)==null||l.setCheckedKeys([])},F=async()=>{var e,t;await((e=f.value)==null?void 0:e.validate()),a.menu_id=b(),await q(a),(t=r.value)==null||t.close(),p("success")},w=()=>{p("close")},R=()=>{var e;(e=r.value)==null||e.open()},A=async e=>{for(const t in a)e[t]!=null&&e[t]!=null&&(a[t]=e[t])};return x(),k({open:R,setFormData:A}),(e,t)=>{const l=T,n=L,B=N,K=O,V=P;return j(),z("div",G,[s(I,{ref_key:"popupRef",ref:r,title:"\u5206\u914D\u6743\u9650",async:!0,width:"550px",onConfirm:F,onClose:w},{default:c(()=>[s(V,{class:"ls-form",ref_key:"formRef",ref:f,rules:C,model:a,"label-width":"60px"},{default:c(()=>[s(K,{class:"h-[400px] sm:h-[600px]"},{default:c(()=>[s(B,{label:"\u6743\u9650",prop:"menu_id"},{default:c(()=>[h("div",null,[s(l,{label:"\u5C55\u5F00/\u6298\u53E0",onChange:g}),s(l,{label:"\u5168\u9009/\u4E0D\u5168\u9009",onChange:D}),s(l,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=S=>d.value=S),label:"\u7236\u5B50\u8054\u52A8"},null,8,["modelValue"]),h("div",null,[s(n,{ref_key:"treeRef",ref:o,data:i.value,props:{label:"name",children:"children"},"check-strictly":!d.value,"node-key":"id","default-expand-all":y.value,"show-checkbox":""},null,8,["data","check-strictly","default-expand-all"])])])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{te as _};
