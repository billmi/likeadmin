import{_ as k,J as w,w as y,K as C,I as B,L as x}from"./element-plus.81dd3128.js";import{d as D}from"./message.7fa04c87.js";import{_ as F}from"./edit.vue_vue_type_script_setup_true_lang.fbee1a5a.js";import{d as u,s as L,a1 as T,ah as R,o,c as N,P as d,M as a,O as t,W as i,U as m}from"./@vue.af680e04.js";import"./@vueuse.8c34eaea.js";import"./@element-plus.034bf3af.js";import"./lodash-es.70b90cb6.js";import"./dayjs.8a39f93d.js";import"./axios.ef849b08.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.018c2b2d.js";import"./lodash.cceb5001.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.525addec.js";import"./color.629b30be.js";import"./clone.5fb606c0.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.06980d2d.js";import"./vue-clipboard3.5ebd6696.js";import"./clipboard.3fb7e13f.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./index.4a1d9059.js";const S=m("\u5F00\u542F"),V=m("\u5173\u95ED"),$=m(" \u8BBE\u7F6E "),z=u({name:"shortLetter"}),Et=u({...z,setup(I){const p=L(),e=T({loading:!1,lists:[]}),c=async()=>{try{e.loading=!0,e.lists=await D(),e.loading=!1}catch{e.loading=!1}},f=s=>{var r;(r=p.value)==null||r.open(s)};return c(),(s,r)=>{const n=w,_=k,h=y,g=C,E=B,v=R("perms"),b=x;return o(),N("div",null,[d((o(),a(E,{class:"!border-none",shadow:"never"},{default:t(()=>[i(g,{size:"large",data:e.lists},{default:t(()=>[i(n,{label:"\u77ED\u4FE1\u6E20\u9053",prop:"name","min-width":"120"}),i(n,{label:"\u72B6\u6001","min-width":"120"},{default:t(({row:l})=>[l.status==1?(o(),a(_,{key:0},{default:t(()=>[S]),_:1})):(o(),a(_,{key:1,type:"danger"},{default:t(()=>[V]),_:1}))]),_:1}),i(n,{label:"\u64CD\u4F5C","min-width":"120",fixed:"right"},{default:t(({row:l})=>[d((o(),a(h,{type:"primary",link:"",onClick:J=>f(l.type)},{default:t(()=>[$]),_:2},1032,["onClick"])),[[v,["notice.sms_config/setConfig"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[b,e.loading]]),i(F,{ref_key:"editRef",ref:p,onSuccess:c},null,512)])}}});export{Et as default};
