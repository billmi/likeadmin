import{e as F,f as b}from"./setting.7c354fdf.js";import{F as C}from"./index.5985eef2.js";import{_ as B}from"./index.73a5badc.js";import{d as k,r as D,o as V,a as i,b as h,c as g,f as e,w as t,e as m,m as E}from"./vendor.7e827f17.js";const v=k({components:{FooterBtns:C},setup(){const u=D({info:"",icp_number:"",icp_link:"",public_number:"",public_link:""}),o={},p=()=>{F().then(l=>{console.log("res",l),u.info=l.info,u.icp_number=l.icp_number,u.icp_link=l.icp_link,u.public_number=l.public_number,u.public_link=l.public_link})},s=()=>{b({info:u.info,icp_number:u.icp_number,icp_link:u.icp_link,public_number:u.public_number,public_link:u.public_link}).then(l=>{console.log("res",l),p()}).catch(l=>{console.log("err",l)})};return V(()=>{p()}),{formData:u,rules:o,getCopyright:p,setCopyright:s}}}),w={class:"website-filing"},y=m("div",{class:"muted xs m-r-16"},"\u4F8B\u5982\u586B\u5199\uFF0CCopyright \xA9 2019-2020 \u516C\u53F8\u540D\u79F0",-1),A=m("div",{class:"muted xs m-r-16"}," \u4F8B\u5982\u586B\u5199\u57DF\u540D\u4FE1\u606F\u5907\u6848\u7CFB\u7EDF\u94FE\u63A5\uFF0Chttp://beian.miit.gov.cn ",-1),U=m("div",{class:"muted xs m-r-16"}," \u4F8B\u5982\u586B\u5199\u516C\u5B89\u4FE1\u606F\u5907\u6848\u7CFB\u7EDF\u94FE\u63A5\uFF0Chttp://www.beian.gov.cn ",-1),I=E("\u4FDD\u5B58");function P(u,o,p,s,l,$){const a=i("el-input"),r=i("el-form-item"),d=i("el-form"),c=i("el-card"),_=i("el-button"),f=i("footer-btns");return h(),g("div",w,[e(c,{shadow:"never",class:""},{default:t(()=>[e(d,{ref:"form",rules:u.rules,class:"ls-form",model:u.formData,"label-width":"150px",size:"small"},{default:t(()=>[e(r,{label:"\u7248\u6743\u4FE1\u606F",prop:"info"},{default:t(()=>[e(a,{modelValue:u.formData.info,"onUpdate:modelValue":o[0]||(o[0]=n=>u.formData.info=n),placeholder:"\u8BF7\u8F93\u5165\u7248\u6743\u4FE1\u606F"},null,8,["modelValue"]),y]),_:1}),e(r,{label:"ICP\u5907\u6848\u53F7",prop:"icp_number"},{default:t(()=>[e(a,{modelValue:u.formData.icp_number,"onUpdate:modelValue":o[1]||(o[1]=n=>u.formData.icp_number=n),placeholder:"\u8BF7\u8F93\u5165ICP\u5907\u6848\u53F7"},null,8,["modelValue"])]),_:1}),e(r,{label:"ICP\u5907\u6848\u53F7\u94FE\u63A5",prop:"icp_link"},{default:t(()=>[e(a,{modelValue:u.formData.icp_link,"onUpdate:modelValue":o[2]||(o[2]=n=>u.formData.icp_link=n),placeholder:"\u8BF7\u8F93\u5165ICP\u5907\u6848\u53F7\u94FE\u63A5"},null,8,["modelValue"]),A]),_:1}),e(r,{label:"\u516C\u5B89\u5907\u6848\u53F7",prop:"public_number"},{default:t(()=>[e(a,{modelValue:u.formData.public_number,"onUpdate:modelValue":o[3]||(o[3]=n=>u.formData.public_number=n),placeholder:"\u8BF7\u8F93\u5165\u516C\u5B89\u5907\u6848\u53F7"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u516C\u5B89\u5907\u6848\u53F7\u94FE\u63A5",prop:"public_link"},{default:t(()=>[e(a,{modelValue:u.formData.public_link,"onUpdate:modelValue":o[4]||(o[4]=n=>u.formData.public_link=n),placeholder:"\u8BF7\u8F93\u5165\u516C\u5B89\u5907\u6848\u53F7\u94FE\u63A5"},null,8,["modelValue"]),U]),_:1})]),_:1},8,["rules","model"])]),_:1}),e(f,null,{default:t(()=>[e(_,{type:"primary",size:"small",onClick:u.setCopyright},{default:t(()=>[I]),_:1},8,["onClick"])]),_:1})])}var S=B(v,[["render",P]]);export{S as default};