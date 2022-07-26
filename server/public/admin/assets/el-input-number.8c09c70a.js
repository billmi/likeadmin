import{ac as te,y as ae,F as d,b0 as re,cs as le,ca as h,U as ue,d as se,aU as ie,P as oe,r as ce,f as de,bs as me,e as V,aM as _,I as pe,bq as be,K as fe,o as ve,ai as Ne,j as b,k as C,R as $,n as t,V as T,p as w,m as B,w as R,Q as E,bv as Ve,ct as he,aF as Y,Y as G,b7 as Ie,aL as ge,aT as D,h as ye,$ as _e,D as we,L as j,a3 as Ee}from"./index.c3aea19d.js";import{v as q}from"./index.1f9198fb.js";const Se=te({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,disabled:Boolean,size:ae,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||d(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),Pe={[re]:(l,S)=>l!==S,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[le]:l=>d(l)||h(l),[ue]:l=>d(l)||h(l)},ke=["aria-label","onKeydown"],Fe=["aria-label","onKeydown"],Ae={name:"ElInputNumber"},xe=se({...Ae,props:Se,emits:Pe,setup(l,{expose:S,emit:p}){const a=l,{t:K}=ie(),c=oe("input-number"),v=ce(),s=de({currentValue:a.modelValue,userInput:null}),{formItem:f}=me(),M=V(()=>d(a.modelValue)&&I(a.modelValue,-1)<a.min),z=V(()=>d(a.modelValue)&&I(a.modelValue)>a.max),H=V(()=>{const e=U(a.step);return _(a.precision)?Math.max(U(a.modelValue),e):(e>a.precision,a.precision)}),P=V(()=>a.controls&&a.controlsPosition==="right"),O=pe(),N=be(),Q=V(()=>{if(s.userInput!==null)return s.userInput;let e=s.currentValue;if(h(e))return"";if(d(e)){if(Number.isNaN(e))return"";_(a.precision)||(e=e.toFixed(a.precision))}return e}),k=(e,n)=>{if(_(n)&&(n=H.value),n===0)return Math.round(e);let r=String(e);const u=r.indexOf(".");if(u===-1||!r.replace(".","").split("")[u+n])return e;const g=r.length;return r.charAt(g-1)==="5"&&(r=`${r.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(r).toFixed(n))},U=e=>{if(h(e))return 0;const n=e.toString(),r=n.indexOf(".");let u=0;return r!==-1&&(u=n.length-r-1),u},I=(e,n=1)=>d(e)?k(e+a.step*n):s.currentValue,F=()=>{if(N.value||z.value)return;const e=a.modelValue||0,n=I(e);x(n)},A=()=>{if(N.value||M.value)return;const e=a.modelValue||0,n=I(e,-1);x(n)},L=(e,n)=>{const{max:r,min:u,step:i,precision:m,stepStrictly:g,valueOnClear:y}=a;let o=Number(e);if(h(e)||Number.isNaN(o))return null;if(e===""){if(y===null)return null;o=we(y)?{min:u,max:r}[y]:y}return g&&(o=k(Math.round(o/i)*i,m)),_(m)||(o=k(o,m)),(o>r||o<u)&&(o=o>r?r:u,n&&p("update:modelValue",o)),o},x=e=>{var n;const r=s.currentValue,u=L(e);r!==u&&(s.userInput=null,p("update:modelValue",u),p("input",u),p("change",u,r),a.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"change").catch(i=>j())),s.currentValue=u)},W=e=>s.userInput=e,J=e=>{const n=e!==""?Number(e):"";(d(n)&&!Number.isNaN(n)||e==="")&&x(n),s.userInput=null},X=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},Z=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},ee=e=>{p("focus",e)},ne=e=>{var n;p("blur",e),a.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(r=>j()))};return fe(()=>a.modelValue,e=>{s.currentValue=L(e,!0),s.userInput=null},{immediate:!0}),ve(()=>{var e;const{min:n,max:r,modelValue:u}=a,i=(e=v.value)==null?void 0:e.input;if(i.setAttribute("role","spinbutton"),Number.isFinite(r)?i.setAttribute("aria-valuemax",String(r)):i.removeAttribute("aria-valuemax"),Number.isFinite(n)?i.setAttribute("aria-valuemin",String(n)):i.removeAttribute("aria-valuemin"),i.setAttribute("aria-valuenow",String(s.currentValue)),i.setAttribute("aria-disabled",String(N.value)),!d(u)&&u!=null){let m=Number(u);Number.isNaN(m)&&(m=null),p("update:modelValue",m)}}),Ne(()=>{var e;const n=(e=v.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${s.currentValue}`)}),S({focus:X,blur:Z}),(e,n)=>(b(),C("div",{class:T([t(c).b(),t(c).m(t(O)),t(c).is("disabled",t(N)),t(c).is("without-controls",!e.controls),t(c).is("controls-right",t(P))]),onDragstart:n[0]||(n[0]=D(()=>{},["prevent"]))},[e.controls?$((b(),C("span",{key:0,role:"button","aria-label":t(K)("el.inputNumber.decrease"),class:T([t(c).e("decrease"),t(c).is("disabled",t(M))]),onKeydown:w(A,["enter"])},[B(t(Y),null,{default:R(()=>[t(P)?(b(),E(t(Ve),{key:0})):(b(),E(t(he),{key:1}))]),_:1})],42,ke)),[[t(q),A]]):G("v-if",!0),e.controls?$((b(),C("span",{key:1,role:"button","aria-label":t(K)("el.inputNumber.increase"),class:T([t(c).e("increase"),t(c).is("disabled",t(z))]),onKeydown:w(F,["enter"])},[B(t(Y),null,{default:R(()=>[t(P)?(b(),E(t(Ie),{key:0})):(b(),E(t(ge),{key:1}))]),_:1})],42,Fe)),[[t(q),F]]):G("v-if",!0),B(t(ye),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(Q),placeholder:e.placeholder,disabled:t(N),size:t(O),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[w(D(F,["prevent"]),["up"]),w(D(A,["prevent"]),["down"])],onBlur:ne,onFocus:ee,onInput:W,onChange:J},null,8,["id","step","model-value","placeholder","disabled","size","max","min","name","label","onKeydown"])],34))}});var Ce=_e(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const De=Ee(Ce);export{De as E};
