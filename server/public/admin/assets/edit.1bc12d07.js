import{F as L}from"./index.f10a28f0.js";import{d as R,bK as $,u as G,r as h,O as P,l as j,m as I,bL as d,c as K,a as l,w as t,ba as S,g as F,e as i,aP as z,o as p,i as n,j as E,f as a,h as m}from"./index.140321e9.js";import{_ as H}from"./select.4d522476.js";import{a as J,b as Q,c as W,d as X}from"./auth.30a45707.js";const Y={class:"menu-edit"},Z=m("\u76EE\u5F55"),uu=m("\u83DC\u5355"),eu=m("\u6309\u94AE"),lu=a("div",{class:"form-tips"},"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",-1),tu=a("div",{class:"form-tips"},"\u8BBF\u95EE\u7684\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u5982\uFF1A`user/setting`\uFF0C\u9ED8\u8BA4\u5728`views`\u76EE\u5F55\u4E0B",-1),ou=a("div",{class:"form-tips"},"\u5C06\u4F5C\u4E3Aserver\u7AEFAPI\u9A8C\u6743\u4F7F\u7528\uFF0C\u5982`auth.admin/user`\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539",-1),au=a("div",{class:"form-tips"},'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A`{"id": 1, "name": "admin"}`\u6216`id=1&name=admin`',-1),su=m("\u663E\u793A"),du=m("\u9690\u85CF"),nu=a("div",{class:"form-tips"},"\u9009\u62E9\u9690\u85CF\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE",-1),ru=m("\u6B63\u5E38"),iu=m("\u505C\u7528"),pu=a("div",{class:"form-tips"},"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",-1),mu=m("\u53D6\u6D88"),Fu=m("\u4FDD\u5B58"),Cu=R({__name:"edit",setup(_u){const{query:C}=$(),g=G(),f=h(!1),D=P(),A=j(()=>C.id?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355"),e=I({pid:0,type:d.CATALOGUE,icon:"",name:"",sort:1,paths:"",perms:"",component:"",selected:"",params:"",is_cache:0,is_show:1,is_disable:0}),w={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:["blur","change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],paths:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u5730\u5740",trigger:"blur"}],perms:[{required:!0,message:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26",trigger:"blur"}]},V=h([]),U=async()=>{const r=await J({page_type:1}),u={id:0,name:"\u9876\u7EA7",children:[]};u.children=r.lists,V.value.push(u)},k=async()=>{const r=C.id;if(!!r){f.value=!0;try{const u=await Q({id:r});Object.keys(e).forEach(B=>{e[B]=u[B]}),f.value=!1}catch{f.value=!1}}},T=async()=>{var u;const r=C.id;await((u=D.value)==null?void 0:u.validate()),r?await W({id:r,...e}):await X(e),g.back()};return U(),k(),(r,u)=>{const B=i("el-page-header"),y=i("el-card"),N=i("el-tree-select"),s=i("el-form-item"),_=i("el-radio"),b=i("el-radio-group"),c=i("el-input"),O=i("el-input-number"),q=i("el-form"),v=i("el-button"),M=L,x=z("loading");return p(),K("div",Y,[l(y,{shadow:"never"},{default:t(()=>[l(B,{content:n(A),onBack:u[0]||(u[0]=o=>r.$router.back())},null,8,["content"])]),_:1}),S((p(),F(y,{class:"m-t-16",shadow:"never"},{default:t(()=>[l(q,{class:"ls-form",ref_key:"formRef",ref:D,model:e,"label-width":"120px",rules:w},{default:t(()=>[l(s,{label:"\u7236\u7EA7\u83DC\u5355",prop:"pid"},{default:t(()=>[l(N,{modelValue:e.pid,"onUpdate:modelValue":u[1]||(u[1]=o=>e.pid=o),data:V.value,clearable:"","node-key":"id",props:{label:"name"},placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),l(s,{label:"\u83DC\u5355\u7C7B\u578B",prop:"type",required:""},{default:t(()=>[l(b,{modelValue:e.type,"onUpdate:modelValue":u[2]||(u[2]=o=>e.type=o)},{default:t(()=>[l(_,{label:n(d).CATALOGUE},{default:t(()=>[Z]),_:1},8,["label"]),l(_,{label:n(d).MENU},{default:t(()=>[uu]),_:1},8,["label"]),l(_,{label:n(d).BUTTON},{default:t(()=>[eu]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"\u83DC\u5355\u540D\u79F0",prop:"name"},{default:t(()=>[l(c,{modelValue:e.name,"onUpdate:modelValue":u[3]||(u[3]=o=>e.name=o),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e.type!=n(d).BUTTON?(p(),F(s,{key:0,label:"\u83DC\u5355\u56FE\u6807",prop:"icon"},{default:t(()=>[l(H,{modelValue:e.icon,"onUpdate:modelValue":u[4]||(u[4]=o=>e.icon=o),style:{width:"280px"}},null,8,["modelValue"])]),_:1})):E("",!0),l(s,{label:"\u83DC\u5355\u6392\u5E8F",prop:"sort"},{default:t(()=>[l(O,{modelValue:e.sort,"onUpdate:modelValue":u[5]||(u[5]=o=>e.sort=o)},null,8,["modelValue"])]),_:1}),e.type!=n(d).BUTTON?(p(),F(s,{key:1,label:"\u8DEF\u7531\u8DEF\u5F84",prop:"paths"},{default:t(()=>[a("div",null,[l(c,{modelValue:e.paths,"onUpdate:modelValue":u[6]||(u[6]=o=>e.paths=o),style:{width:"280px"},placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84"},null,8,["modelValue"]),lu])]),_:1})):E("",!0),e.type==n(d).MENU?(p(),F(s,{key:2,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:t(()=>[a("div",null,[l(c,{modelValue:e.component,"onUpdate:modelValue":u[7]||(u[7]=o=>e.component=o),style:{width:"280px"},placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"]),tu])]),_:1})):E("",!0),e.type!=n(d).CATALOGUE?(p(),F(s,{key:3,label:"\u6743\u9650\u5B57\u7B26",prop:"perms"},{default:t(()=>[a("div",null,[l(c,{modelValue:e.perms,"onUpdate:modelValue":u[8]||(u[8]=o=>e.perms=o),style:{width:"280px"},placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26"},null,8,["modelValue"]),ou])]),_:1})):E("",!0),e.type==n(d).MENU?(p(),F(s,{key:4,label:"\u8DEF\u7531\u53C2\u6570",prop:"params"},{default:t(()=>[a("div",null,[l(c,{modelValue:e.params,"onUpdate:modelValue":u[9]||(u[9]=o=>e.params=o),style:{width:"280px"},placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570"},null,8,["modelValue"]),au])]),_:1})):E("",!0),e.type!=n(d).BUTTON?(p(),F(s,{key:5,label:"\u662F\u5426\u663E\u793A",prop:"is_show",required:""},{default:t(()=>[a("div",null,[l(b,{modelValue:e.is_show,"onUpdate:modelValue":u[10]||(u[10]=o=>e.is_show=o)},{default:t(()=>[l(_,{label:1},{default:t(()=>[su]),_:1}),l(_,{label:0},{default:t(()=>[du]),_:1})]),_:1},8,["modelValue"]),nu])]),_:1})):E("",!0),e.type!=n(d).BUTTON?(p(),F(s,{key:6,label:"\u83DC\u5355\u72B6\u6001",prop:"is_disable",required:""},{default:t(()=>[a("div",null,[l(b,{modelValue:e.is_disable,"onUpdate:modelValue":u[11]||(u[11]=o=>e.is_disable=o)},{default:t(()=>[l(_,{label:0},{default:t(()=>[ru]),_:1}),l(_,{label:1},{default:t(()=>[iu]),_:1})]),_:1},8,["modelValue"]),pu])]),_:1})):E("",!0)]),_:1},8,["model"])]),_:1})),[[x,f.value]]),l(M,null,{default:t(()=>[l(v,{onClick:u[12]||(u[12]=o=>r.$router.back())},{default:t(()=>[mu]),_:1}),l(v,{type:"primary",onClick:T},{default:t(()=>[Fu]),_:1})]),_:1})])}}});export{Cu as default};
