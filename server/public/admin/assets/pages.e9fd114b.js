import{b4 as l,l as g}from"./index.384b7db0.js";let n={};function P(o){const{page:r=1,size:i=15,callback:c,params:t={}}=o;n=Object.assign({},l(t));const a=g({page:r,size:i,loading:!1,count:0,lists:[]}),s=()=>a.loading?Promise.reject():(a.loading=!0,c({page_no:a.page,page_size:a.size,...t}).then(e=>(a.count=e==null?void 0:e.count,a.lists=e==null?void 0:e.lists,Promise.resolve(e))).catch(e=>Promise.reject(e)).finally(()=>{a.loading=!1}));return{pager:a,requestApi:s,resetParams:()=>{Object.keys(n).forEach(e=>{t[e]=n[e]}),s()},resetPage:()=>{a.page=1,s()}}}export{P as u};
