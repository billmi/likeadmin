var H=Object.defineProperty,I=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var z=(r,n,d)=>n in r?H(r,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[n]=d,T=(r,n)=>{for(var d in n||(n={}))Q.call(n,d)&&z(r,d,n[d]);if(R)for(var d of R(n))W.call(n,d)&&z(r,d,n[d]);return r},J=(r,n)=>I(r,K(n));import{M as X}from"./index.96a63401.js";import{F as Y}from"./index.0f28710b.js";import{d as ee,r as b,u as le,c as ue,P as te,a as ae,o as oe,e as m,aN as se,f as F,g as C,i as e,w as l,b8 as ne,a8 as y,bN as de,bO as re,l as o,bJ as ie,Z as M,aL as S,h as pe,k as _,bL as me,bP as _e}from"./index.be24683b.js";import{a as ce,b as fe}from"./organization.83740555.js";import"./index.92c98489.js";import"./index.dfcbba5f.js";const Fe={class:"admin"},ve=pe("div",{class:"muted"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),be=_("\u65B0\u589E\u90E8\u95E8"),ge=_("|"),Be=_("\u5237\u65B0"),Ve=_("\u65B0\u589E\u5C97\u4F4D"),we=_("|"),De=_("\u5237\u65B0"),Ce=_("\u65B0\u589E\u89D2\u8272"),ye=_("|"),Ee=_("\u5237\u65B0"),he=_("\u4FDD\u5B58"),Ne=ee({setup(r){const n=b(null),{router:d,route:P}=le(),f=ue(()=>{var s;return(s=P.query)==null?void 0:s.id}),B=b(!1),E=b([]),h=b([]),k=b([]),{formData:u,rules:V}=te(ae({formData:{account:"",name:"",role_id:"",avatar:"",password:"",password_confirm:"",disable:0,multipoint_login:0,dept_id:"",jobs_id:""},rules:{account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],role_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur"]}],password:[],password_confirm:[]}})),x=()=>{de({page_type:0}).then(s=>{E.value=s.lists})},A=()=>{ce().then(s=>{h.value=L(s)})},L=s=>s.map(c=>{const v=c.children;return v.length&&L(v),c.id==f.value||c.status==0?c.disabled=!0:c.disabled=!1,c}),U=()=>{fe({page_type:0}).then(s=>{k.value=s.lists})},$=()=>{if(!f.value){V.value.password=[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}],V.value.password_confirm=[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:["blur"]}];return}B.value=!0,re({id:f.value}).then(s=>{u.value=s}).finally(()=>{B.value=!1})},O=()=>{var s;(s=n.value)==null||s.validate(a=>{if(!a)return;u.value.dept_id=u.value.dept_id[u.value.dept_id.length-1],(f.value?me(J(T({},u.value),{id:f.value})):_e(u.value)).then(()=>{setTimeout(()=>d.go(-1),500)})})};return oe(()=>{$(),x(),A(),U()}),(s,a)=>{const c=m("el-page-header"),v=m("el-card"),g=m("el-input"),i=m("el-form-item"),Z=m("el-cascader"),p=m("el-button"),w=m("router-link"),j=m("el-option"),q=m("el-select"),N=m("el-switch"),G=se("loading");return F(),C("div",Fe,[e(v,{shadow:"never"},{default:l(()=>[e(c,{content:o(f)?"\u7F16\u8F91\u7BA1\u7406\u5458":"\u65B0\u589E\u7BA1\u7406\u5458",onBack:a[0]||(a[0]=t=>s.$router.back())},null,8,["content"])]),_:1}),ne((F(),y(v,{shadow:"never",class:"m-t-15"},{default:l(()=>[e(o(ie),{ref_key:"formRefs",ref:n,rules:o(V),class:"ls-form",model:o(u),"label-width":"150px",size:"small"},{default:l(()=>[e(i,{label:"\u8D26\u53F7",prop:"account"},{default:l(()=>[e(g,{modelValue:o(u).account,"onUpdate:modelValue":a[1]||(a[1]=t=>o(u).account=t),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u5934\u50CF"},{default:l(()=>[e(X,{modelValue:o(u).avatar,"onUpdate:modelValue":a[2]||(a[2]=t=>o(u).avatar=t),limit:1},null,8,["modelValue"]),ve]),_:1}),e(i,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[e(g,{modelValue:o(u).name,"onUpdate:modelValue":a[3]||(a[3]=t=>o(u).name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"dept_id"},{default:l(()=>[e(Z,{modelValue:o(u).dept_id,"onUpdate:modelValue":a[4]||(a[4]=t=>o(u).dept_id=t),options:h.value,props:{value:"id",label:"name",checkStrictly:!0},clearable:""},null,8,["modelValue","options"]),e(w,{to:"/organization/department",target:"_blank"},{default:l(()=>[e(p,{type:"text",style:{margin:"0 10px"}},{default:l(()=>[be]),_:1})]),_:1}),e(p,{type:"text"},{default:l(()=>[ge]),_:1}),e(p,{type:"text",onClick:A},{default:l(()=>[Be]),_:1})]),_:1}),e(i,{label:"\u5C97\u4F4D",prop:"jobs_id"},{default:l(()=>[e(q,{modelValue:o(u).jobs_id,"onUpdate:modelValue":a[5]||(a[5]=t=>o(u).jobs_id=t),placeholder:"\u8BF7\u9009\u62E9\u5C97\u4F4D"},{default:l(()=>[(F(!0),C(M,null,S(k.value,(t,D)=>(F(),y(j,{key:D,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(w,{to:"/organization/post",target:"_blank"},{default:l(()=>[e(p,{type:"text",style:{margin:"0 10px"}},{default:l(()=>[Ve]),_:1})]),_:1}),e(p,{type:"text"},{default:l(()=>[we]),_:1}),e(p,{type:"text",onClick:U},{default:l(()=>[De]),_:1})]),_:1}),e(i,{label:"\u89D2\u8272",prop:"role_id"},{default:l(()=>[e(q,{modelValue:o(u).role_id,"onUpdate:modelValue":a[6]||(a[6]=t=>o(u).role_id=t),placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"},{default:l(()=>[(F(!0),C(M,null,S(E.value,(t,D)=>(F(),y(j,{key:D,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(w,{to:"/permission/role",target:"_blank"},{default:l(()=>[e(p,{type:"text",style:{margin:"0 10px"}},{default:l(()=>[Ce]),_:1})]),_:1}),e(p,{type:"text"},{default:l(()=>[ye]),_:1}),e(p,{type:"text",onClick:x},{default:l(()=>[Ee]),_:1})]),_:1}),e(i,{label:"\u5BC6\u7801",prop:"password"},{default:l(()=>[e(g,{modelValue:o(u).password,"onUpdate:modelValue":a[7]||(a[7]=t=>o(u).password=t),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"password_confirm"},{default:l(()=>[e(g,{modelValue:o(u).password_confirm,"onUpdate:modelValue":a[8]||(a[8]=t=>o(u).password_confirm=t),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(i,{label:"\u7BA1\u7406\u5458\u72B6\u6001"},{default:l(()=>[e(N,{modelValue:o(u).disable,"onUpdate:modelValue":a[9]||(a[9]=t=>o(u).disable=t),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1}),e(i,{label:"\u652F\u6301\u591A\u5904\u767B\u5F55"},{default:l(()=>[e(N,{modelValue:o(u).multipoint_login,"onUpdate:modelValue":a[10]||(a[10]=t=>o(u).multipoint_login=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1})),[[G,B.value]]),e(Y,null,{default:l(()=>[e(p,{type:"primary",size:"small",onClick:O},{default:l(()=>[he]),_:1})]),_:1})])}}});export{Ne as default};
