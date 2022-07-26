import{bY as W,bZ as tt,d as et,r as nt,e as ot,b1 as rt,i as it,j as D,k as M,m as w,w as S,X as ut,az as at,n as ct,T as st,b8 as lt,Q as ft,l as B,q as dt,x as pt}from"./index.c3aea19d.js";import{E as yt,a as mt}from"./el-tab-pane.6deb17af.js";import{f as F}from"./feedback.f1ab6e2e.js";import{E as vt}from"./index.6e7535e0.js";import"./el-loading.8f049a65.js";import"./index.bfca7591.js";var H={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(E,C){(function(x,h){E.exports=h()})(W,function(){return function(){var T={686:function(f,i,t){t.d(i,{default:function(){return K}});var o=t(279),s=t.n(o),d=t(370),v=t.n(d),y=t(817),g=t.n(y);function p(a){try{return document.execCommand(a)}catch{return!1}}var m=function(n){var e=g()(n);return p("cut"),e},c=m;function b(a){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=a,e}var N=function(n,e){var r=b(n);e.container.appendChild(r);var u=g()(r);return p("copy"),r.remove(),u},I=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=N(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=N(n.value,e):(r=g()(n),p("copy")),r},P=I;function k(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(a)}var U=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,u=n.container,l=n.target,_=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(l!==void 0)if(l&&k(l)==="object"&&l.nodeType===1){if(r==="copy"&&l.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(l.hasAttribute("readonly")||l.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return P(_,{container:u});if(l)return r==="cut"?c(l):P(l,{container:u})},z=U;function A(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(e){return typeof e}:A=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(a)}function Y(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function V(a,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function $(a,n,e){return n&&V(a.prototype,n),e&&V(a,e),a}function X(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&R(a,n)}function R(a,n){return R=Object.setPrototypeOf||function(r,u){return r.__proto__=u,r},R(a,n)}function G(a){var n=q();return function(){var r=O(a),u;if(n){var l=O(this).constructor;u=Reflect.construct(r,arguments,l)}else u=r.apply(this,arguments);return Q(this,u)}}function Q(a,n){return n&&(A(n)==="object"||typeof n=="function")?n:Z(a)}function Z(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function q(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function O(a){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(a)}function j(a,n){var e="data-clipboard-".concat(a);if(!!n.hasAttribute(e))return n.getAttribute(e)}var J=function(a){X(e,a);var n=G(e);function e(r,u){var l;return Y(this,e),l=n.call(this),l.resolveOptions(u),l.listenClick(r),l}return $(e,[{key:"resolveOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof u.action=="function"?u.action:this.defaultAction,this.target=typeof u.target=="function"?u.target:this.defaultTarget,this.text=typeof u.text=="function"?u.text:this.defaultText,this.container=A(u.container)==="object"?u.container:document.body}},{key:"listenClick",value:function(u){var l=this;this.listener=v()(u,"click",function(_){return l.onClick(_)})}},{key:"onClick",value:function(u){var l=u.delegateTarget||u.currentTarget,_=this.action(l)||"copy",L=z({action:_,container:this.container,target:this.target(l),text:this.text(l)});this.emit(L?"success":"error",{action:_,text:L,trigger:l,clearSelection:function(){l&&l.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(u){return j("action",u)}},{key:"defaultTarget",value:function(u){var l=j("target",u);if(l)return document.querySelector(l)}},{key:"defaultText",value:function(u){return j("text",u)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(u){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return P(u,l)}},{key:"cut",value:function(u){return c(u)}},{key:"isSupported",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],l=typeof u=="string"?[u]:u,_=!!document.queryCommandSupported;return l.forEach(function(L){_=_&&!!document.queryCommandSupported(L)}),_}}]),e}(s()),K=J},828:function(f){var i=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function o(s,d){for(;s&&s.nodeType!==i;){if(typeof s.matches=="function"&&s.matches(d))return s;s=s.parentNode}}f.exports=o},438:function(f,i,t){var o=t(828);function s(y,g,p,m,c){var b=v.apply(this,arguments);return y.addEventListener(p,b,c),{destroy:function(){y.removeEventListener(p,b,c)}}}function d(y,g,p,m,c){return typeof y.addEventListener=="function"?s.apply(null,arguments):typeof p=="function"?s.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(b){return s(b,g,p,m,c)}))}function v(y,g,p,m){return function(c){c.delegateTarget=o(c.target,g),c.delegateTarget&&m.call(y,c)}}f.exports=d},879:function(f,i){i.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},i.nodeList=function(t){var o=Object.prototype.toString.call(t);return t!==void 0&&(o==="[object NodeList]"||o==="[object HTMLCollection]")&&"length"in t&&(t.length===0||i.node(t[0]))},i.string=function(t){return typeof t=="string"||t instanceof String},i.fn=function(t){var o=Object.prototype.toString.call(t);return o==="[object Function]"}},370:function(f,i,t){var o=t(879),s=t(438);function d(p,m,c){if(!p&&!m&&!c)throw new Error("Missing required arguments");if(!o.string(m))throw new TypeError("Second argument must be a String");if(!o.fn(c))throw new TypeError("Third argument must be a Function");if(o.node(p))return v(p,m,c);if(o.nodeList(p))return y(p,m,c);if(o.string(p))return g(p,m,c);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(p,m,c){return p.addEventListener(m,c),{destroy:function(){p.removeEventListener(m,c)}}}function y(p,m,c){return Array.prototype.forEach.call(p,function(b){b.addEventListener(m,c)}),{destroy:function(){Array.prototype.forEach.call(p,function(b){b.removeEventListener(m,c)})}}}function g(p,m,c){return s(document.body,p,m,c)}f.exports=d},817:function(f){function i(t){var o;if(t.nodeName==="SELECT")t.focus(),o=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var s=t.hasAttribute("readonly");s||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),s||t.removeAttribute("readonly"),o=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var d=window.getSelection(),v=document.createRange();v.selectNodeContents(t),d.removeAllRanges(),d.addRange(v),o=d.toString()}return o}f.exports=i},279:function(f){function i(){}i.prototype={on:function(t,o,s){var d=this.e||(this.e={});return(d[t]||(d[t]=[])).push({fn:o,ctx:s}),this},once:function(t,o,s){var d=this;function v(){d.off(t,v),o.apply(s,arguments)}return v._=o,this.on(t,v,s)},emit:function(t){var o=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),d=0,v=s.length;for(d;d<v;d++)s[d].fn.apply(s[d].ctx,o);return this},off:function(t,o){var s=this.e||(this.e={}),d=s[t],v=[];if(d&&o)for(var y=0,g=d.length;y<g;y++)d[y].fn!==o&&d[y].fn._!==o&&v.push(d[y]);return v.length?s[t]=v:delete s[t],this}},f.exports=i,f.exports.TinyEmitter=i}},x={};function h(f){if(x[f])return x[f].exports;var i=x[f]={exports:{}};return T[f](i,i.exports,h),i.exports}return function(){h.n=function(f){var i=f&&f.__esModule?function(){return f.default}:function(){return f};return h.d(i,{a:i}),i}}(),function(){h.d=function(f,i){for(var t in i)h.o(i,t)&&!h.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:i[t]})}}(),function(){h.o=function(f,i){return Object.prototype.hasOwnProperty.call(f,i)}}(),h(686)}().default})})(H);const ht=tt(H.exports),gt=E=>{const C=(E==null?void 0:E.appendToBody)===void 0?!0:E.appendToBody;return{toClipboard(T,x){return new Promise((h,f)=>{const i=document.createElement("button"),t=new ht(i,{text:()=>T,action:()=>"copy",container:x!==void 0?x:document.body});t.on("success",o=>{t.destroy(),h(o)}),t.on("error",o=>{t.destroy(),f(o)}),C&&document.body.appendChild(i),i.click(),C&&document.body.removeChild(i)})}}},bt={class:"code-preview"},_t={class:"flex",style:{height:"60vh"}},Et=dt(" \u590D\u5236 "),Ot=et({__name:"code-preview",props:{modelValue:{type:Boolean},code:null},emits:["update:modelValue"],setup(E,{emit:C}){const T=E,{toClipboard:x}=gt(),h=nt("index0"),f=async t=>{try{await x(t),F.msgSuccess("\u590D\u5236\u6210\u529F")}catch{F.msgError("\u590D\u5236\u5931\u8D25")}},i=ot({get(){return T.modelValue},set(t){C("update:modelValue",t)}});return(t,o)=>{const s=lt("highlightjs"),d=rt,v=pt,y=it,g=yt,p=mt,m=vt;return D(),M("div",bt,[w(m,{modelValue:ct(i),"onUpdate:modelValue":o[1]||(o[1]=c=>st(i)?i.value=c:null),width:"1000px",title:"\u4EE3\u7801\u9884\u89C8"},{default:S(()=>[w(p,{modelValue:h.value,"onUpdate:modelValue":o[0]||(o[0]=c=>h.value=c)},{default:S(()=>[(D(!0),M(ut,null,at(E.code,(c,b)=>(D(),ft(g,{label:c.name,name:`index${b}`,key:b},{default:S(()=>[B("div",_t,[w(d,{class:"flex-1"},{default:S(()=>[w(s,{autodetect:"",code:c.content},null,8,["code"])]),_:2},1024),B("div",null,[w(y,{onClick:N=>f(c.content),type:"primary",link:""},{icon:S(()=>[w(v,{name:"el-icon-CopyDocument"})]),default:S(()=>[Et]),_:2},1032,["onClick"])])])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{Ot as default};
