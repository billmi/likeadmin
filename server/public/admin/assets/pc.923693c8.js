import{_ as y}from"./index.53372026.js";import{I as V,w as P}from"./element-plus.9e793c12.js";import b from"./menu.4c351a94.js";import h from"./preview-pc.8e61e163.js";import{_ as B}from"./attr-setting.vue_vue_type_script_setup_true_lang.d133d156.js";import"./index.4bb67f2b.js";import{s as C,a as E}from"./decoration.cf031187.js";import"./lodash.189a293f.js";import{d as _,a1 as I,r as l,e as c,w as N,ah as k,o as d,c as S,W as i,O as s,a as M,u,P as O,M as U,U as W}from"./@vue.af680e04.js";import{d as F}from"./index.3856c597.js";import"./@vueuse.8c34eaea.js";import"./@element-plus.034bf3af.js";import"./lodash-es.70b90cb6.js";import"./dayjs.98e9ef27.js";import"./axios.90ed558f.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.e12a99db.js";import"./color.cb877126.js";import"./clone.3b081931.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.898036f7.js";import"./vue-clipboard3.f48896a5.js";import"./clipboard.7b09c130.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./attr.vue_vue_type_script_setup_true_lang.69f12c6a.js";import"./index.cfc22bb4.js";import"./picker.c6dada82.js";import"./index.a6060ef3.js";import"./picker.2df0664b.js";import"./index.44b72c58.js";import"./index.vue_vue_type_script_setup_true_lang.dcd3c589.js";import"./index.vue_vue_type_script_setup_true_lang.2a7db6c4.js";import"./usePaging.01638e85.js";import"./vue3-video-play.e9a50e78.js";import"./vuedraggable.cf85bd3e.js";import"./vue.3145de3d.js";import"./sortablejs.fd60a18f.js";import"./content.vue_vue_type_script_setup_true_lang.3889a25d.js";import"./decoration-img.dc0288d5.js";import"./attr.vue_vue_type_script_setup_true_lang.4aa64915.js";import"./content.1de56954.js";import"./attr.vue_vue_type_script_setup_true_lang.815f09af.js";import"./add-nav.vue_vue_type_script_setup_true_lang.7a64b1db.js";import"./content.e0501dd9.js";import"./attr.vue_vue_type_script_setup_true_lang.115d0e3a.js";import"./content.vue_vue_type_script_setup_true_lang.f122868d.js";import"./attr.vue_vue_type_script_setup_true_lang.33076aba.js";import"./content.be479e9b.js";import"./attr.vue_vue_type_script_setup_true_lang.f51fc154.js";import"./content.a88de67e.js";import"./attr.vue_vue_type_script_setup_true_lang.2065af4a.js";import"./content.vue_vue_type_script_setup_true_lang.4329a627.js";import"./attr.vue_vue_type_script_setup_true_lang.a23a87f3.js";import"./content.b62cb3e4.js";const J={class:"decoration-pages min-w-[1100px]"},T={class:"flex h-full items-start"},$=W("\u4FDD\u5B58"),j=_({name:"decorationPc"}),q=_({...j,setup(z){const a=I({[4]:{id:4,type:4,name:"\u9996\u9875\u88C5\u4FEE",pageData:[]}}),o=l("4"),r=l(0),p=c(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData)!=null?t:[]}),f=c(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData[r.value])!=null?t:""}),n=async()=>{const e=await E({id:o.value});a[String(e.id)].pageData=JSON.parse(e.data),r.value=p.value.findIndex(t=>!t.disabled)},v=async()=>{await C({...a[o.value],data:JSON.stringify(a[o.value].pageData)}),n()};return N(o,()=>{r.value=p.value.findIndex(e=>!e.disabled),n()},{immediate:!0}),(e,t)=>{const g=V,x=P,D=y,w=k("perms");return d(),S("div",J,[i(g,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:s(()=>[M("div",T,[i(b,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=m=>o.value=m),menus:a},null,8,["modelValue","menus"]),i(h,{class:"mx-4",modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=m=>r.value=m),pageData:u(p)},null,8,["modelValue","pageData"]),i(B,{class:"flex-1",widget:u(f),type:"pc"},null,8,["widget"])])]),_:1}),O((d(),U(D,{class:"mt-4",fixed:!1},{default:s(()=>[i(x,{type:"primary",onClick:v},{default:s(()=>[$]),_:1})]),_:1})),[[w,["decorate:pages:save"]]])])}}});const oe=F(q,[["__scopeId","data-v-63d3cf8a"]]);export{oe as default};