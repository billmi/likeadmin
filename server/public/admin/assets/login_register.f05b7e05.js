import{_ as b}from"./index.791788a0.js";import{B as w,a0 as y,D as V,t as k,I as x,w as q,F as U}from"./element-plus.81dd3128.js";import{g as W,s as P}from"./user.7d76a717.js";import{d as f,r as R,a1 as B,ah as N,o as g,c as S,W as t,O as l,a as u,V as _,P as I,M as L,U as a}from"./@vue.af680e04.js";import"./index.018c2b2d.js";import"./@vueuse.8c34eaea.js";import"./lodash.cceb5001.js";import"./axios.ef849b08.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.525addec.js";import"./color.629b30be.js";import"./clone.5fb606c0.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./@element-plus.034bf3af.js";import"./nprogress.06980d2d.js";import"./vue-clipboard3.5ebd6696.js";import"./clipboard.3fb7e13f.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./lodash-es.70b90cb6.js";import"./dayjs.8a39f93d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";const j={class:"login-register"},G=u("div",{class:"font-medium mb-7"},"\u901A\u7528\u8BBE\u7F6E",-1),M=a("\u8D26\u53F7\u5BC6\u7801\u767B\u5F55"),O=a("\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55"),T=u("div",{class:"form-tips"},"\u7CFB\u7EDF\u901A\u7528\u767B\u5F55\u65B9\u5F0F\uFF0C\u81F3\u5C11\u9009\u62E9\u4E00\u9879",-1),z={class:"mt-1 ml-2"},H=u("div",{class:"form-tips"},[a(" 1\u3001\u5982\u679C\u5F00\u542F\uFF0C\u5219\u65B0\u7528\u6237\u5728\u6CE8\u518C\u5B8C\u6210\u4E4B\u540E\u8981\u5F3A\u5236\u7ED1\u5B9A\u624B\u673A\u53F7"),u("br"),a(" 2\u3001\u8001\u7528\u6237\u767B\u5F55\u65F6\u5982\u679C\u68C0\u6D4B\u5230\u6CA1\u6709\u7ED1\u5B9A\u624B\u673A\uFF0C\u5219\u8981\u91CD\u65B0\u7ED1\u5B9A\u624B\u673A\u53F7 ")],-1),J={class:"mt-1 ml-2"},K=u("div",{class:"form-tips"},"\u767B\u5F55/\u6CE8\u518C\u4F1A\u5458\u65F6\uFF0C\u662F\u5426\u663E\u793A\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56",-1),Q=u("div",{class:"font-medium mb-7"},"\u7B2C\u4E09\u65B9\u8BBE\u7F6E",-1),X={class:"mt-1 ml-2"},Y=u("div",{class:"form-tips"},"\u767B\u5F55\u65F6\u652F\u6301\u7B2C\u4E09\u65B9\u767B\u5F55\uFF0C\u65B0\u7528\u6237\u6388\u6743\u5373\u81EA\u52A8\u6CE8\u518C\u8D26\u53F7",-1),Z=a(" \u5FAE\u4FE1\u767B\u5F55 "),$={href:"https://open.weixin.qq.com/",target:"_blank"},uu=a(" \u524D\u5F80\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0 "),eu=u("div",{class:"form-tips"},[a(" 1\u3001\u5728\u5404\u6E20\u9053\u4F7F\u7528\u5FAE\u4FE1\u6388\u6743\u767B\u5F55\u65F6\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0"),u("br"),a(" 2\u3001\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u5173\u8054\u516C\u4F17\u53F7\u3001\u5C0F\u7A0B\u5E8F\u548CAPP\u540E\uFF0C\u53EF\u5B9E\u73B0\u5404\u7AEF\u7528\u6237\u8D26\u53F7\u7EDF\u4E00\uFF0C\u8BC6\u522B\u4E70\u5BB6\u552F\u4E00\u5FAE\u4FE1\u8EAB\u4EFD"),u("br"),a(" 3\u3001\u6CA1\u6709\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\uFF0C\u540C\u4E00\u5FAE\u4FE1\u53F7\u4F1A\u751F\u6210\u591A\u4E2A\u7528\u6237\uFF0C\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u540E\u5DF2\u751F\u6210\u7684\u7528\u6237\u8D26\u53F7\u65E0\u6CD5\u5408\u5E76 ")],-1),tu=a("\u4FDD\u5B58"),ou=f({name:"loginRegister"}),Su=f({...ou,setup(lu){const F=R(),e=B({login_way:[],coerce_mobile:0,login_agreement:0,third_auth:0,wechat_auth:0,qq_auth:0}),C=B({loginWay:[{required:!0,validator:(i,o,s)=>{if(e.login_way.join("").length===0)s(new Error("\u767B\u5F55\u65B9\u5F0F\u81F3\u5C11\u9009\u62E9\u4E00\u9879\uFF01"));else{if(e.login_way!==""){if(!F.value)return;F.value.validateField("checkPass",()=>null)}s()}},trigger:"change"}],coerce_mobile:[{required:!0,trigger:"blur"}],login_agreement:[{required:!0,trigger:"blur"}],third_auth:[{required:!0,trigger:"blur"}]}),d=async()=>{try{const i=await W();for(const o in e)e[o]=i[o]}catch(i){console.log("\u83B7\u53D6=>",i)}},h=async()=>{var i;await((i=F.value)==null?void 0:i.validate());try{await P(e),d()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return d(),(i,o)=>{const s=w,c=y,n=V,m=k,E=x,p=q,A=U,v=b,D=N("perms");return g(),S("div",j,[t(A,{ref_key:"formRef",ref:F,rules:C,model:e,"label-width":"120px"},{default:l(()=>[t(E,{shadow:"never",class:"!border-none"},{default:l(()=>[G,t(n,{label:"\u767B\u5F55\u65B9\u5F0F",prop:"loginWay"},{default:l(()=>[u("div",null,[t(c,{modelValue:e.login_way,"onUpdate:modelValue":o[0]||(o[0]=r=>e.login_way=r)},{default:l(()=>[t(s,{label:"1"},{default:l(()=>[M]),_:1}),t(s,{label:"2"},{default:l(()=>[O]),_:1})]),_:1},8,["modelValue"]),T])]),_:1}),t(n,{label:"\u5F3A\u5236\u7ED1\u5B9A\u624B\u673A",prop:"coerce_mobile"},{default:l(()=>[u("div",null,[t(m,{modelValue:e.coerce_mobile,"onUpdate:modelValue":o[1]||(o[1]=r=>e.coerce_mobile=r),"active-value":1,"inactive-value":0},null,8,["modelValue"]),u("span",z,_(e.coerce_mobile?"\u5F00\u542F":"\u5173\u95ED"),1),H])]),_:1}),t(n,{label:"\u653F\u7B56\u534F\u8BAE",prop:"login_agreement"},{default:l(()=>[u("div",null,[t(m,{modelValue:e.login_agreement,"onUpdate:modelValue":o[2]||(o[2]=r=>e.login_agreement=r),"active-value":1,"inactive-value":0},null,8,["modelValue"]),u("span",J,_(e.login_agreement?"\u5F00\u542F":"\u5173\u95ED"),1),K])]),_:1})]),_:1}),t(E,{shadow:"never",class:"!border-none mt-4"},{default:l(()=>[Q,t(n,{label:"\u7B2C\u4E09\u65B9\u767B\u5F55",prop:"third_auth"},{default:l(()=>[u("div",null,[t(m,{modelValue:e.third_auth,"onUpdate:modelValue":o[3]||(o[3]=r=>e.third_auth=r),"active-value":1,"inactive-value":0},null,8,["modelValue"]),u("span",X,_(e.third_auth?"\u5F00\u542F":"\u5173\u95ED"),1),Y,u("div",null,[t(s,{modelValue:e.wechat_auth,"onUpdate:modelValue":o[4]||(o[4]=r=>e.wechat_auth=r),"true-label":1,"false-label":0},{default:l(()=>[Z]),_:1},8,["modelValue"])])])]),_:1}),t(n,{label:"\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0"},{default:l(()=>[u("div",null,[u("a",$,[t(p,{type:"primary",link:"",class:"underline"},{default:l(()=>[uu]),_:1})]),eu])]),_:1})]),_:1})]),_:1},8,["rules","model"]),I((g(),L(v,null,{default:l(()=>[t(p,{type:"primary",onClick:h},{default:l(()=>[tu]),_:1})]),_:1})),[[D,["setting.user.user/setRegisterConfig"]]])])}}});export{Su as default};
