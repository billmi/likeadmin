import{a as O,b as P}from"./dev_tools.e58d2e5b.js";import{d as S,bK as j,u as G,r as B,m as A,O as I,c as g,a as e,w as l,b4 as W,e as n,o as E,a1 as z,aN as H,h as r,f as i,g as J}from"./index.140321e9.js";import{F as M}from"./index.f10a28f0.js";import{P as Q}from"./index.ff7b23c4.js";import{a as X}from"./dict.467893e9.js";const Y={class:"code-edit"},Z=r("\u5355\u8868\uFF08curd\uFF09"),ee=r("\u538B\u7F29\u5305\u4E0B\u8F7D"),ue=r("\u751F\u6210\u5230\u6A21\u5757"),le=i("div",{class:"muted"},"\u751F\u6210\u6587\u4EF6\u6240\u5728\u6A21\u5757",-1),ae=i("div",{class:"muted"},[r(" \u751F\u6210\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u540D,\u4E0D\u586B\u5219\u5728\u6A21\u5757\u5BF9\u5E94\u6587\u4EF6\u5939\u5185\u751F\u6210\u3002 "),i("br"),r("\u4F8B\uFF1A\u586B\u5199test\uFF0C\u5219\u63A7\u5236\u5668xxxControlle\u6587\u4EF6\u751F\u6210\u5728app/\u6A21\u5757\u540D/controller/test\u6587\u4EF6\u5939\u4E0B\u3002\u4E0D\u586B\u65F6\uFF0CxxxController\u751F\u6210\u5728app/\u6A21\u5757\u540D/controller\u6587\u4EF6\u5939\u4E0B\u3002 ")],-1),te=i("div",{class:"muted"},[r(" \u751F\u6210\u6587\u4EF6\u63CF\u8FF0\u3002 "),i("br"),r("\u4F8B\uFF1A\u586B\u5199\u7528\u6237\uFF0C\u751F\u6210\u63A7\u5236\u5668\u540D/\u903B\u8F91/\u6A21\u578B\u7B49\uFF0C\u6587\u4EF6\u5185\u63CF\u8FF0\u4E3A\u7528\u6237\u63A7\u5236\u5668/\u7528\u6237\u903B\u8F91/\u7528\u6237\u6A21\u578B ")],-1),oe=r("\u4FDD\u5B58"),pe=S({__name:"edit",setup(de){const k=j(),x=G(),v=B("base"),t=A({id:"",table_name:"",table_comment:"",author:"",remark:"",template_type:0,generate_type:0,module_name:"",class_dir:"",class_comment:"",table_column:[]});B(!1);const C=I(),y=B([]),q=A({table_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0",trigger:"blur"}],table_comment:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0",trigger:"blur"}],module_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D",trigger:"blur"}]}),h=async()=>{const p=await O({id:k.query.id});Object.keys(t).forEach(a=>{t[a]=p[a]}),W(()=>t.generate_type,a=>{var b;a==1&&((b=C.value)==null||b.open())})},w=async()=>{const p=await X({page_type:0});y.value=p.lists},N=async()=>{await P(t),x.back()};return h(),w(),(p,a)=>{const b=n("el-page-header"),D=n("el-card"),_=n("el-input"),s=n("el-form-item"),c=n("el-tab-pane"),m=n("el-table-column"),F=n("el-checkbox"),d=n("el-option"),V=n("el-select"),R=n("el-table"),f=n("el-radio"),U=n("el-radio-group"),T=n("el-tabs"),L=n("el-form"),$=n("el-button");return E(),g("div",Y,[e(D,{shadow:"never"},{default:l(()=>[e(b,{content:"\u7F16\u8F91",onBack:a[0]||(a[0]=u=>p.$router.back())})]),_:1}),e(D,{class:"m-t-16",shadow:"never"},{default:l(()=>[e(L,{class:"ls-form",model:t,"label-width":"80px",rules:q},{default:l(()=>[e(T,{modelValue:v.value,"onUpdate:modelValue":a[10]||(a[10]=u=>v.value=u)},{default:l(()=>[e(c,{label:"\u57FA\u7840\u4FE1\u606F",name:"base"},{default:l(()=>[e(s,{label:"\u8868\u540D\u79F0",prop:"table_name"},{default:l(()=>[e(_,{modelValue:t.table_name,"onUpdate:modelValue":a[1]||(a[1]=u=>t.table_name=u),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(s,{label:"\u8868\u63CF\u8FF0",prop:"table_comment"},{default:l(()=>[e(_,{modelValue:t.table_comment,"onUpdate:modelValue":a[2]||(a[2]=u=>t.table_comment=u),placeholder:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),e(s,{label:"\u4F5C\u8005"},{default:l(()=>[e(_,{modelValue:t.author,"onUpdate:modelValue":a[3]||(a[3]=u=>t.author=u)},null,8,["modelValue"])]),_:1}),e(s,{label:"\u5907\u6CE8"},{default:l(()=>[e(_,{modelValue:t.remark,"onUpdate:modelValue":a[4]||(a[4]=u=>t.remark=u),class:"el-input",type:"textarea",rows:4},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{label:"\u5B57\u6BB5\u7BA1\u7406",name:"field"},{default:l(()=>[e(R,{data:t.table_column,style:{width:"100%"}},{default:l(()=>[e(m,{label:"\u5B57\u6BB5\u5217\u540D",prop:"column_name"}),e(m,{label:"\u5B57\u6BB5\u63CF\u8FF0",prop:"column_comment"},{default:l(({row:u})=>[e(_,{modelValue:u.column_comment,"onUpdate:modelValue":o=>u.column_comment=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u7269\u7406\u7C7B\u578B",prop:"column_type"}),e(m,{label:"\u5FC5\u586B",width:"50"},{default:l(({row:u})=>[e(F,{modelValue:u.is_required,"onUpdate:modelValue":o=>u.is_required=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u63D2\u5165",width:"50"},{default:l(({row:u})=>[e(F,{modelValue:u.is_insert,"onUpdate:modelValue":o=>u.is_insert=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u7F16\u8F91",width:"50"},{default:l(({row:u})=>[e(F,{modelValue:u.is_update,"onUpdate:modelValue":o=>u.is_update=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u5217\u8868",width:"50"},{default:l(({row:u})=>[e(F,{modelValue:u.is_lists,"onUpdate:modelValue":o=>u.is_lists=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u67E5\u8BE2",width:"50"},{default:l(({row:u})=>[e(F,{modelValue:u.is_query,"onUpdate:modelValue":o=>u.is_query=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u67E5\u8BE2\u65B9\u5F0F"},{default:l(({row:u})=>[e(V,{modelValue:u.query_type,"onUpdate:modelValue":o=>u.query_type=o},{default:l(()=>[e(d,{label:"=",value:"="}),e(d,{label:"!=",value:"!="}),e(d,{label:">",value:">"}),e(d,{label:">=",value:">="}),e(d,{label:"<",value:"<"}),e(d,{label:"<=",value:"<="}),e(d,{label:"LIKE",value:"like"}),e(d,{label:"BETWEEN",value:"between"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u663E\u793A\u7C7B\u578B"},{default:l(({row:u})=>[e(V,{modelValue:u.view_type,"onUpdate:modelValue":o=>u.view_type=o},{default:l(()=>[e(d,{label:"\u6587\u672C\u6846",value:"input"}),e(d,{label:"\u6587\u672C\u57DF",value:"textarea"}),e(d,{label:"\u4E0B\u62C9\u6846",value:"select"}),e(d,{label:"\u5355\u9009\u6846",value:"radio"}),e(d,{label:"\u590D\u9009\u6846",value:"checkbox"}),e(d,{label:"\u65E5\u671F\u63A7\u4EF6",value:"datetime"}),e(d,{label:"\u56FE\u7247\u9009\u62E9\u63A7\u4EF6",value:"imageSelect"}),e(d,{label:"\u5BCC\u6587\u672C\u63A7\u4EF6",value:"editor"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u5B57\u5178\u7C7B\u578B"},{default:l(({row:u})=>[e(V,{modelValue:u.dict_type,"onUpdate:modelValue":o=>u.dict_type=o,placeholder:"\u5B57\u5178\u7C7B\u578B"},{default:l(()=>[(E(!0),g(z,null,H(y.value,(o,K)=>(E(),J(d,{key:K,label:o.name,value:o.type},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"])]),_:1}),e(c,{label:"\u751F\u6210\u914D\u7F6E",name:"config"},{default:l(()=>[e(s,{label:"\u6A21\u677F\u7C7B\u578B",required:""},{default:l(()=>[e(U,{modelValue:t.template_type,"onUpdate:modelValue":a[5]||(a[5]=u=>t.template_type=u)},{default:l(()=>[e(f,{label:0},{default:l(()=>[Z]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u751F\u6210\u65B9\u5F0F",required:""},{default:l(()=>[e(U,{modelValue:t.generate_type,"onUpdate:modelValue":a[6]||(a[6]=u=>t.generate_type=u)},{default:l(()=>[e(f,{label:0},{default:l(()=>[ee]),_:1}),e(f,{label:1},{default:l(()=>[ue]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u6A21\u5757\u540D",prop:"module_name"},{default:l(()=>[e(_,{modelValue:t.module_name,"onUpdate:modelValue":a[7]||(a[7]=u=>t.module_name=u),placeholder:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D"},null,8,["modelValue"]),le]),_:1}),e(s,{label:"\u7C7B\u76EE\u5F55"},{default:l(()=>[e(_,{modelValue:t.class_dir,"onUpdate:modelValue":a[8]||(a[8]=u=>t.class_dir=u)},null,8,["modelValue"]),ae]),_:1}),e(s,{label:"\u7C7B\u63CF\u8FF0"},{default:l(()=>[e(_,{modelValue:t.class_comment,"onUpdate:modelValue":a[9]||(a[9]=u=>t.class_comment=u)},null,8,["modelValue"]),te]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model","rules"])]),_:1}),e(M,null,{default:l(()=>[e($,{type:"primary",onClick:N},{default:l(()=>[oe]),_:1})]),_:1}),e(Q,{ref_key:"popupRef",ref:C,class:"inline",content:"\u751F\u6210\u5230\u6A21\u5757\u65B9\u5F0F\u5982\u9047\u540C\u540D\u6587\u4EF6\u4F1A\u8986\u76D6\u65E7\u6587\u4EF6\uFF0C\u786E\u5B9A\u8981\u9009\u62E9\u6B64\u65B9\u5F0F\u5417\uFF1F",onCancel:a[11]||(a[11]=u=>t.generate_type=0)},null,512)])}}});export{pe as default};
