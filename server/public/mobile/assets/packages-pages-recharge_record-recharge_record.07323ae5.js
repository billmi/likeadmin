import{d as e,V as a,z as s,o as t,c as r,w as l,b as o,e as d,f as u,F as p,k as c,r as i,a as m,l as n,t as _}from"./index.e62d9ee1.js";import{_ as f}from"./z-paging.696d45a3.js";import{b as g}from"./recharge.09ca7ed7.js";import"./plugin-vue_export-helper.21dcd24c.js";const x=e({__name:"recharge_record",setup(e){const x=a(),b=s([]),h=async(e,a)=>{try{const s=await g({page_no:e,page_size:a});x.value.complete(s.lists)}catch(s){x.value.complete(!1)}};return(e,a)=>{const s=c,g=i(m("z-paging"),f);return t(),r(g,{ref_key:"paging",ref:x,modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value=e),onQuery:h,"show-loading-more-when-reload":!0},{default:l((()=>[o(s,{class:"pt-2.5"},{default:l((()=>[(t(!0),d(p,null,u(b.value,(e=>(t(),r(s,{key:e.id,class:"bg-white border-solid border-b border-0 border-light px-[26rpx] py-[24rpx]"},{default:l((()=>[o(s,{class:"flex justify-between"},{default:l((()=>[o(s,{class:"mr-2"},{default:l((()=>[n(_(e.tips),1)])),_:2},1024),o(s,{class:"text-lg text-primary"},{default:l((()=>[n(" +"+_(e.order_amount),1)])),_:2},1024)])),_:2},1024),o(s,{class:"text-sm text-muted mr-1"},{default:l((()=>[n(_(e.create_time),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])}}});export{x as default};
