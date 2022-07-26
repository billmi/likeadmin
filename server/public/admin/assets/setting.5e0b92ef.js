import{_ as V}from"./index.f8d951a2.js";import{d as A,r as h,a as v,f as i,h as D,i as b,j as U,k as y,m as u,w as s,l as n,q as k,e3 as I}from"./index.c3aea19d.js";import{E as x}from"./el-card.b8712dac.js";import{E as q,a as M}from"./el-form-item.74423cde.js";import{_ as N}from"./picker.b23eb6d2.js";import{f as a}from"./feedback.f1ab6e2e.js";import"./isEqual.662af1fc.js";import"./index.6c6a7aaf.js";import"./index.6e7535e0.js";import"./index.bfca7591.js";import"./index.c27f56fb.js";import"./el-loading.8f049a65.js";import"./index.60d15b23.js";/* empty css               */import"./el-select.1d971f97.js";import"./index.7cdad076.js";import"./el-table-column.83850a53.js";import"./el-checkbox.61b5b1e3.js";import"./el-tree.47d5228f.js";import"./paging.09ef6da0.js";const S={class:"user-setting"},R={class:"w-80"},j={class:"w-80"},T={class:"w-80"},z={class:"w-80"},G={class:"w-80"},H=k("\u4FDD\u5B58"),po=A({__name:"setting",setup(J){const m=h(),p=v(),o=i({avatar:"",account:"",name:"",password_old:"",password:"",password_confirm:""}),_=i({avatar:[{required:!0,message:"\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]}),f=async()=>{const l=p.userInfo;for(const e in o)o[e]=l[e]},c=async()=>{if(o.password_old||o.password||o.password_confirm){if(!o.password_old)return a.msgError("\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801");if(!o.password)return a.msgError("\u8BF7\u8F93\u5165\u65B0\u7684\u5BC6\u7801");if(!o.password_confirm)return a.msgError("\u8BF7\u8F93\u5165\u786E\u5B9A\u5BC6\u7801");if(o.password_confirm!=o.password)return a.msgError("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u6837")}if(o.password_old&&o.password&&o.password_confirm){if(o.password_old.length<6||o.password_old.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4");if(o.password.length<6||o.password.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4");if(o.password_confirm.length<6||o.password_confirm.length>32)return a.msgError("\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4")}await I(o),p.getUserInfo()},F=async()=>{var l;await((l=m.value)==null?void 0:l.validate()),c()};return f(),(l,e)=>{const w=N,t=q,d=D,E=M,B=x,g=b,C=V;return U(),y("div",S,[u(B,{class:"!border-none",shadow:"never"},{default:s(()=>[u(E,{ref_key:"formRef",ref:m,class:"ls-form",model:o,rules:_,"label-width":"150px"},{default:s(()=>[u(t,{label:"\u5934\u50CF\uFF1A",prop:"avatar"},{default:s(()=>[u(w,{modelValue:o.avatar,"onUpdate:modelValue":e[0]||(e[0]=r=>o.avatar=r),limit:1},null,8,["modelValue"])]),_:1}),u(t,{label:"\u8D26\u53F7\uFF1A",prop:"account"},{default:s(()=>[n("div",R,[u(d,{modelValue:o.account,"onUpdate:modelValue":e[1]||(e[1]=r=>o.account=r),disabled:""},null,8,["modelValue"])])]),_:1}),u(t,{label:"\u540D\u79F0\uFF1A",prop:"name"},{default:s(()=>[n("div",j,[u(d,{modelValue:o.name,"onUpdate:modelValue":e[2]||(e[2]=r=>o.name=r),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),u(t,{label:"\u5F53\u524D\u5BC6\u7801\uFF1A",prop:"password_old"},{default:s(()=>[n("div",T,[u(d,{modelValue:o.password_old,"onUpdate:modelValue":e[3]||(e[3]=r=>o.password_old=r),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),u(t,{label:"\u65B0\u7684\u5BC6\u7801\uFF1A",prop:"password"},{default:s(()=>[n("div",z,[u(d,{modelValue:o.password,"onUpdate:modelValue":e[4]||(e[4]=r=>o.password=r),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),u(t,{label:"\u786E\u5B9A\u5BC6\u7801\uFF1A",prop:"password_confirm"},{default:s(()=>[n("div",G,[u(d,{modelValue:o.password_confirm,"onUpdate:modelValue":e[5]||(e[5]=r=>o.password_confirm=r),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),u(C,null,{default:s(()=>[u(g,{type:"primary",onClick:F},{default:s(()=>[H]),_:1})]),_:1})])}}});export{po as default};
