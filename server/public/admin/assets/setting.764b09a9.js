var o=Object.defineProperty;var r=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var g=(t,s,n)=>s in t?o(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,i=(t,s)=>{for(var n in s||(s={}))a.call(s,n)&&g(t,n,s[n]);if(r)for(var n of r(s))u.call(s,n)&&g(t,n,s[n]);return t};import{bI as e}from"./index.9f40dca5.js";function c(){return e.get("/setting.web.web_setting/getCopyright")}function m(t){return e.post("/setting.web.web_setting/setCopyright",i({},t))}function C(){return e.get("/setting.web.web_setting/getWebsite")}function S(t){return e.post("/setting.web.web_setting/setWebsite",i({},t))}function b(){return e.get("/setting.web.web_setting/getAgreement")}function l(t){return e.post("/setting.web.web_setting/setAgreement",t)}const h=()=>e.get("/setting.customer_service/getConfig"),y=t=>e.post("/setting.customer_service/setConfig",t);function w(){return e.get("/setting.user.user/getConfig")}function d(t){return e.post("/setting.user.user/setConfig",t)}function _(){return e.get("/setting.user.user/getRegisterConfig")}function A(t){return e.post("/setting.user.user/setRegisterConfig",t)}function G(){return e.get("/setting.system.system/info")}function L(t){return e.get("/setting.system.log/lists",{params:t})}function v(){return e.post("/setting.system.cache/clear")}function W(t){return e.post("/auth.admin/editSelf",t)}function q(){return e.post("/auth.admin/mySelf")}function I(){return e.get("/setting.storage/lists")}function P(t){return e.post("/setting.storage/change",t)}function R(t){return e.get("/setting.storage/detail",{params:t})}function U(t){return e.post("/setting.storage/setup",t)}export{h as a,y as b,C as c,S as d,c as e,m as f,b as g,l as h,w as i,d as j,_ as k,A as l,G as m,L as n,v as o,q as p,W as q,I as r,P as s,R as t,U as u};
