import{F as L}from"./index.f10a28f0.js";import{d as N,O as _,bK as O,u as U,m as j,l as q,c as M,a as o,w as n,ba as P,g as S,bR as $,ax as h,e as s,aP as H,o as D,i as z,f as b,h as G}from"./index.140321e9.js";import{a as I,i as J,j as Q,k as W}from"./auth.30a45707.js";const X={class:"role-add"},Y=G("\u4FDD\u5B58"),oe=N({__name:"edit",setup(Z){const m=_(),r=_(),{query:c}=O(),g=U(),a=j({loading:!1,isExpand:!1,menuArray:[],menuTree:[],formData:{name:"",desc:"",sort:0,menu_id:[]},rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]}}),y=q(()=>c.id?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),k=()=>{I({page_type:1}).then(t=>{a.menuTree=t.lists,a.menuArray=$(t.lists)})},v=async()=>{if(!!c.id){a.loading=!0;try{const t=await J({id:c.id});Object.keys(a.formData).forEach(e=>{a.formData[e]=t[e]}),h(()=>C()),a.loading=!1}catch{a.loading=!1}}},x=()=>{var l,u;const t=(l=r.value)==null?void 0:l.getCheckedKeys(),e=(u=r.value)==null?void 0:u.getHalfCheckedKeys();return t==null||t.unshift.apply(t,e),t},C=()=>{a.formData.menu_id.forEach(t=>{h(()=>{var e;(e=r.value)==null||e.setChecked(t,!0,!1)})})},F=t=>{const e=a.menuTree;for(let l=0;l<e.length;l++)r.value.store.nodesMap[e[l].id].expanded=t},w=t=>{var e,l;t?(e=r.value)==null||e.setCheckedKeys(a.menuArray.map(u=>u.id)):(l=r.value)==null||l.setCheckedKeys([])},E=async()=>{var e;const t=c.id;await((e=m.value)==null?void 0:e.validate()),a.formData.menu_id=x(),t?await Q({id:t,...a.formData}):await W(a.formData),g.back()};return k(),v(),(t,e)=>{const l=s("el-page-header"),u=s("el-card"),p=s("el-input"),i=s("el-form-item"),V=s("el-input-number"),f=s("el-checkbox"),B=s("el-tree"),R=s("el-form"),A=s("el-button"),T=L,K=H("loading");return D(),M("div",X,[o(u,{shadow:"never"},{default:n(()=>[o(l,{content:z(y),onBack:e[0]||(e[0]=d=>t.$router.back())},null,8,["content"])]),_:1}),P((D(),S(u,{shadow:"never",class:"m-t-16"},{default:n(()=>[o(R,{class:"ls-form",ref_key:"formRef",ref:m,rules:a.rules,model:a.formData,"label-width":"120px"},{default:n(()=>[o(i,{label:"\u540D\u79F0",prop:"name"},{default:n(()=>[o(p,{class:"ls-input",modelValue:a.formData.name,"onUpdate:modelValue":e[1]||(e[1]=d=>a.formData.name=d),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(i,{label:"\u5907\u6CE8",prop:"desc"},{default:n(()=>[o(p,{style:{width:"280px"},modelValue:a.formData.desc,"onUpdate:modelValue":e[2]||(e[2]=d=>a.formData.desc=d),type:"textarea",rows:4,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),o(i,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[o(V,{modelValue:a.formData.sort,"onUpdate:modelValue":e[3]||(e[3]=d=>a.formData.sort=d)},null,8,["modelValue"])]),_:1}),o(i,{label:"\u6743\u9650"},{default:n(()=>[b("div",null,[o(f,{label:"\u5C55\u5F00/\u6298\u53E0",onChange:F}),o(f,{label:"\u5168\u9009/\u4E0D\u5168\u9009",onChange:w}),b("div",null,[o(B,{ref_key:"treeRef",ref:r,data:a.menuTree,props:{label:"name",children:"children"},"node-key":"id","default-expand-all":a.isExpand,"show-checkbox":""},null,8,["data","default-expand-all"])])])]),_:1})]),_:1},8,["rules","model"])]),_:1})),[[K,a.loading]]),o(T,null,{default:n(()=>[o(A,{type:"primary",onClick:E},{default:n(()=>[Y]),_:1})]),_:1})])}}});export{oe as default};
