import{z as e}from"./index.e62d9ee1.js";function t(t){const a=e(!1);return{isLock:a,lockFn:async(...e)=>{if(!a.value){a.value=!0;try{const n=await t(...e);return a.value=!1,n}catch(n){throw a.value=!1,n}}}}}export{t as u};
