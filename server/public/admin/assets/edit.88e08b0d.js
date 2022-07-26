import{bE as c,d as T,s as A,r as z,e as I,f as v,h as M,cr as Q,b1 as X,j as n,k as m,m as o,w as a,l as d,X as D,az as h,Q as E,Y as y,n as Y}from"./index.c3aea19d.js";import{E as G,a as H}from"./el-form-item.74423cde.js";/* empty css               */import{E as J,a as K}from"./el-select.1d971f97.js";import"./el-tree.47d5228f.js";import"./el-checkbox.61b5b1e3.js";import{E as W}from"./el-tree-select.ed576353.js";import{_ as Z}from"./picker.b23eb6d2.js";import{P as $}from"./index.6c6a7aaf.js";import{r as ee}from"./role.3d44a228.js";import{d as ue}from"./department.d218cfc5.js";import{c as le}from"./post.ed1509df.js";function De(r){return c.get("/auth.admin/lists",r)}function oe(r){return c.post("/auth.admin/add",r)}function te(r){return c.post("/auth.admin/edit",r)}function he(r){return c.post("/auth.admin/delete",r)}const ae={class:"edit-popup"},se={class:"h-[400px]"},de={class:"w-80"},re=d("div",{class:"form-tips"}," \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ",-1),ne={class:"w-80"},ie={class:"w-80"},pe={class:"w-80"},me={key:0,class:"form-tips"},ce=T({__name:"edit",emits:["success","close"],setup(r,{expose:k,emit:w}){const V=A(),_=A(),f=z("add"),j=I(()=>f.value=="edit"?"\u7F16\u8F91\u7BA1\u7406\u5458":"\u65B0\u589E\u7BA1\u7406\u5458"),u=v({id:"",account:"",name:"",dept_id:"",jobs_id:"",role_id:"",avatar:"",password:"",password_confirm:"",disable:0,multipoint_login:1,root:0}),F=v({account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],role_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}],password_confirm:[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:["blur"]}]}),i=v({role:[],dept:[],jobs:[]}),U=()=>{ee({page_type:0}).then(t=>{i.role=t.lists}),ue({page_type:0}).then(t=>{i.dept=t}),le({page_type:0}).then(t=>{i.jobs=t.lists})},x=async()=>{var t,e;await((t=V.value)==null?void 0:t.validate()),f.value=="edit"?await te(u):await oe(u),(e=_.value)==null||e.close(),w("success")},S=(t="add")=>{var e;f.value=t,(e=_.value)==null||e.open()},q=t=>{for(const e in u)t[e]!=null&&t[e]!=null&&(u[e]=t[e]);F.password=[],F.password_confirm=[]},R=()=>{w("close")};return U(),k({open:S,setFormData:q}),(t,e)=>{const p=M,s=G,L=Z,O=W,b=J,g=K,C=Q,N=H,P=X;return n(),m("div",ae,[o($,{ref_key:"popupRef",ref:_,title:Y(j),async:!0,width:"700px",clickModalClose:!0,onConfirm:x,onClose:R},{default:a(()=>[d("div",se,[o(P,null,{default:a(()=>[o(N,{ref_key:"formRef",ref:V,model:u,"label-width":"120px",rules:F},{default:a(()=>[o(s,{label:"\u8D26\u53F7",prop:"account"},{default:a(()=>[d("div",de,[o(p,{modelValue:u.account,"onUpdate:modelValue":e[0]||(e[0]=l=>u.account=l),disabled:u.root==1,placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7"},null,8,["modelValue","disabled"])])]),_:1}),o(s,{label:"\u5934\u50CF"},{default:a(()=>[d("div",null,[d("div",null,[o(L,{modelValue:u.avatar,"onUpdate:modelValue":e[1]||(e[1]=l=>u.avatar=l),limit:1},null,8,["modelValue"])]),re])]),_:1}),o(s,{label:"\u540D\u79F0",prop:"name"},{default:a(()=>[d("div",ne,[o(p,{modelValue:u.name,"onUpdate:modelValue":e[2]||(e[2]=l=>u.name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),o(s,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"dept_id"},{default:a(()=>[o(O,{class:"w-80",modelValue:u.dept_id,"onUpdate:modelValue":e[3]||(e[3]=l=>u.dept_id=l),data:i.dept,clearable:"","node-key":"id",props:{value:"id",label:"name",disabled(l){return l.status!==1}},"check-strictly":"","default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"},null,8,["modelValue","data","props"])]),_:1}),o(s,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"dept_id"},{default:a(()=>[o(g,{class:"w-80",modelValue:u.jobs_id,"onUpdate:modelValue":e[4]||(e[4]=l=>u.jobs_id=l),placeholder:"\u8BF7\u9009\u62E9\u5C97\u4F4D"},{default:a(()=>[(n(!0),m(D,null,h(i.jobs,(l,B)=>(n(),E(b,{key:B,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"\u89D2\u8272",prop:"role_id"},{default:a(()=>[o(g,{modelValue:u.role_id,"onUpdate:modelValue":e[5]||(e[5]=l=>u.role_id=l),disabled:u.root==1,class:"w-80",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"},{default:a(()=>[u.root==1?(n(),E(b,{key:0,label:"\u7CFB\u7EDF\u7BA1\u7406\u5458",value:0})):y("",!0),(n(!0),m(D,null,h(i.role,(l,B)=>(n(),E(b,{key:B,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),o(s,{label:"\u5BC6\u7801",prop:"password"},{default:a(()=>[d("div",ie,[o(p,{modelValue:u.password,"onUpdate:modelValue":e[6]||(e[6]=l=>u.password=l),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])])]),_:1}),o(s,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"password_confirm"},{default:a(()=>[d("div",pe,[o(p,{modelValue:u.password_confirm,"onUpdate:modelValue":e[7]||(e[7]=l=>u.password_confirm=l),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])])]),_:1}),o(s,{label:"\u7BA1\u7406\u5458\u72B6\u6001"},{default:a(()=>[d("div",null,[o(C,{modelValue:u.disable,"onUpdate:modelValue":e[8]||(e[8]=l=>u.disable=l),disabled:u.root==1,"active-value":0,"inactive-value":1},null,8,["modelValue","disabled"]),u.root==1?(n(),m("div",me," \u8D85\u7EA7\u7BA1\u7406\u5458\u72B6\u6001\u4E0D\u5141\u8BB8\u5173\u95ED ")):y("",!0)])]),_:1}),o(s,{label:"\u652F\u6301\u591A\u5904\u767B\u5F55"},{default:a(()=>[o(C,{modelValue:u.multipoint_login,"onUpdate:modelValue":e[9]||(e[9]=l=>u.multipoint_login=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])]),_:1},8,["title"])])}}}),ye=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{ce as _,te as a,he as b,De as c,ye as e};
