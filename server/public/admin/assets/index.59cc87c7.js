import{t as V,F as $,I as A,D as T,M as L}from"./element-plus.1a139bf1.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang.cdeb6e76.js";import{f as R,b as S}from"./index.e1163f9a.js";import{c as I,r as M}from"./role.cf9799b5.js";import{u as P}from"./usePaging.c792cf84.js";import{_ as j}from"./edit.vue_vue_type_script_setup_true_lang.4ad35353.js";import{d as O,s as U,r as q,o as n,c as C,V as e,M as i,a as v,O as c,L as _,u as r,k as z,S as G,T as w,n as b,ae as H}from"./@vue.96b5b8e0.js";import"./@vueuse.63126fc0.js";import"./dayjs.6e4093f3.js";import"./axios.68af02ab.js";import"./@element-plus.ca121c50.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./pinia.07aac3ac.js";import"./vue-demi.ebc8116b.js";import"./vue-router.e7301c19.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.54513b29.js";import"./echarts.75216989.js";import"./zrender.6e590b1f.js";import"./highlight.js.dba6fa1b.js";import"./@highlightjs.0b4dcdb6.js";import"./menu.44e1e4ee.js";import"./index.aabb1301.js";const J={class:"role-lists"},K=w(" \u65B0\u589E\u89D2\u8272 "),Q={class:"mt-4"},W=w(" \u7F16\u8F91 "),X=w(" \u5220\u9664 "),Y={class:"flex justify-end mt-4"},Le=O({__name:"index",setup(Z){const m=U(),u=q(!1),{pager:s,getLists:d}=P({fetchFun:M}),k=async()=>{var t;u.value=!0,await b(),(t=m.value)==null||t.open("add")},F=async t=>{var o,p;u.value=!0,await b(),(o=m.value)==null||o.open("edit"),(p=m.value)==null||p.setFormData(t)},E=async t=>{await R.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await I({id:t}),d()};return d(),(t,o)=>{const p=S,f=V,a=$,g=A,y=N,B=T,h=H("perms"),D=L;return n(),C("div",J,[e(B,{class:"!border-none",shadow:"never"},{default:i(()=>[v("div",null,[c((n(),_(f,{type:"primary",onClick:k},{icon:i(()=>[e(p,{name:"el-icon-Plus"})]),default:i(()=>[K]),_:1})),[[h,["auth.role/add"]]])]),c((n(),C("div",Q,[v("div",null,[e(g,{data:r(s).lists},{default:i(()=>[e(a,{prop:"id",label:"ID","min-width":"100"}),e(a,{prop:"name",label:"\u540D\u79F0","min-width":"150"}),e(a,{prop:"desc",label:"\u5907\u6CE8","min-width":"150","show-overflow-tooltip":""}),e(a,{prop:"sort",label:"\u6392\u5E8F","min-width":"100"}),e(a,{prop:"num",label:"\u7BA1\u7406\u5458\u4EBA\u6570","min-width":"100"}),e(a,{prop:"create_time",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"180"}),e(a,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:i(({row:l})=>[c((n(),_(f,{link:"",type:"primary",onClick:x=>F(l)},{default:i(()=>[W]),_:2},1032,["onClick"])),[[h,["auth.role/edit"]]]),c((n(),_(f,{link:"",type:"danger",onClick:x=>E(l.id)},{default:i(()=>[X]),_:2},1032,["onClick"])),[[h,["auth.role/delete"]]])]),_:1})]),_:1},8,["data"])]),v("div",Y,[e(y,{modelValue:r(s),"onUpdate:modelValue":o[0]||(o[0]=l=>z(s)?s.value=l:null),onChange:r(d)},null,8,["modelValue","onChange"])])])),[[D,r(s).loading]])]),_:1}),u.value?(n(),_(j,{key:0,ref_key:"editRef",ref:m,onSuccess:r(d),onClose:o[1]||(o[1]=l=>u.value=!1)},null,8,["onSuccess"])):G("",!0)])}}});export{Le as default};
