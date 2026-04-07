function _w(r,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in r)){const c=Object.getOwnPropertyDescriptor(s,a);c&&Object.defineProperty(r,a,c.get?c:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function vg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Hc={exports:{}},gs={},Vc={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function ww(){if(Ap)return ne;Ap=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function E(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,O={};function T(C,R,te){this.props=C,this.context=R,this.refs=O,this.updater=te||A}T.prototype.isReactComponent={},T.prototype.setState=function(C,R){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,R,"setState")},T.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function F(){}F.prototype=T.prototype;function q(C,R,te){this.props=C,this.context=R,this.refs=O,this.updater=te||A}var K=q.prototype=new F;K.constructor=q,M(K,T.prototype),K.isPureReactComponent=!0;var ee=Array.isArray,ie=Object.prototype.hasOwnProperty,le={current:null},ze={key:!0,ref:!0,__self:!0,__source:!0};function be(C,R,te){var re,ue={},de=null,ve=null;if(R!=null)for(re in R.ref!==void 0&&(ve=R.ref),R.key!==void 0&&(de=""+R.key),R)ie.call(R,re)&&!ze.hasOwnProperty(re)&&(ue[re]=R[re]);var pe=arguments.length-2;if(pe===1)ue.children=te;else if(1<pe){for(var ke=Array(pe),wt=0;wt<pe;wt++)ke[wt]=arguments[wt+2];ue.children=ke}if(C&&C.defaultProps)for(re in pe=C.defaultProps,pe)ue[re]===void 0&&(ue[re]=pe[re]);return{$$typeof:r,type:C,key:de,ref:ve,props:ue,_owner:le.current}}function Lt(C,R){return{$$typeof:r,type:C.type,key:R,ref:C.ref,props:C.props,_owner:C._owner}}function Mt(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function Dt(C){var R={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(te){return R[te]})}var Je=/\/+/g;function Ge(C,R){return typeof C=="object"&&C!==null&&C.key!=null?Dt(""+C.key):R.toString(36)}function ct(C,R,te,re,ue){var de=typeof C;(de==="undefined"||de==="boolean")&&(C=null);var ve=!1;if(C===null)ve=!0;else switch(de){case"string":case"number":ve=!0;break;case"object":switch(C.$$typeof){case r:case e:ve=!0}}if(ve)return ve=C,ue=ue(ve),C=re===""?"."+Ge(ve,0):re,ee(ue)?(te="",C!=null&&(te=C.replace(Je,"$&/")+"/"),ct(ue,R,te,"",function(wt){return wt})):ue!=null&&(Mt(ue)&&(ue=Lt(ue,te+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(Je,"$&/")+"/")+C)),R.push(ue)),1;if(ve=0,re=re===""?".":re+":",ee(C))for(var pe=0;pe<C.length;pe++){de=C[pe];var ke=re+Ge(de,pe);ve+=ct(de,R,te,ke,ue)}else if(ke=E(C),typeof ke=="function")for(C=ke.call(C),pe=0;!(de=C.next()).done;)de=de.value,ke=re+Ge(de,pe++),ve+=ct(de,R,te,ke,ue);else if(de==="object")throw R=String(C),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ve}function _t(C,R,te){if(C==null)return C;var re=[],ue=0;return ct(C,re,"","",function(de){return R.call(te,de,ue++)}),re}function ut(C){if(C._status===-1){var R=C._result;R=R(),R.then(function(te){(C._status===0||C._status===-1)&&(C._status=1,C._result=te)},function(te){(C._status===0||C._status===-1)&&(C._status=2,C._result=te)}),C._status===-1&&(C._status=0,C._result=R)}if(C._status===1)return C._result.default;throw C._result}var Re={current:null},z={transition:null},J={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:z,ReactCurrentOwner:le};function H(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:_t,forEach:function(C,R,te){_t(C,function(){R.apply(this,arguments)},te)},count:function(C){var R=0;return _t(C,function(){R++}),R},toArray:function(C){return _t(C,function(R){return R})||[]},only:function(C){if(!Mt(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ne.Component=T,ne.Fragment=n,ne.Profiler=a,ne.PureComponent=q,ne.StrictMode=s,ne.Suspense=m,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,ne.act=H,ne.cloneElement=function(C,R,te){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var re=M({},C.props),ue=C.key,de=C.ref,ve=C._owner;if(R!=null){if(R.ref!==void 0&&(de=R.ref,ve=le.current),R.key!==void 0&&(ue=""+R.key),C.type&&C.type.defaultProps)var pe=C.type.defaultProps;for(ke in R)ie.call(R,ke)&&!ze.hasOwnProperty(ke)&&(re[ke]=R[ke]===void 0&&pe!==void 0?pe[ke]:R[ke])}var ke=arguments.length-2;if(ke===1)re.children=te;else if(1<ke){pe=Array(ke);for(var wt=0;wt<ke;wt++)pe[wt]=arguments[wt+2];re.children=pe}return{$$typeof:r,type:C.type,key:ue,ref:de,props:re,_owner:ve}},ne.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:c,_context:C},C.Consumer=C},ne.createElement=be,ne.createFactory=function(C){var R=be.bind(null,C);return R.type=C,R},ne.createRef=function(){return{current:null}},ne.forwardRef=function(C){return{$$typeof:p,render:C}},ne.isValidElement=Mt,ne.lazy=function(C){return{$$typeof:_,_payload:{_status:-1,_result:C},_init:ut}},ne.memo=function(C,R){return{$$typeof:y,type:C,compare:R===void 0?null:R}},ne.startTransition=function(C){var R=z.transition;z.transition={};try{C()}finally{z.transition=R}},ne.unstable_act=H,ne.useCallback=function(C,R){return Re.current.useCallback(C,R)},ne.useContext=function(C){return Re.current.useContext(C)},ne.useDebugValue=function(){},ne.useDeferredValue=function(C){return Re.current.useDeferredValue(C)},ne.useEffect=function(C,R){return Re.current.useEffect(C,R)},ne.useId=function(){return Re.current.useId()},ne.useImperativeHandle=function(C,R,te){return Re.current.useImperativeHandle(C,R,te)},ne.useInsertionEffect=function(C,R){return Re.current.useInsertionEffect(C,R)},ne.useLayoutEffect=function(C,R){return Re.current.useLayoutEffect(C,R)},ne.useMemo=function(C,R){return Re.current.useMemo(C,R)},ne.useReducer=function(C,R,te){return Re.current.useReducer(C,R,te)},ne.useRef=function(C){return Re.current.useRef(C)},ne.useState=function(C){return Re.current.useState(C)},ne.useSyncExternalStore=function(C,R,te){return Re.current.useSyncExternalStore(C,R,te)},ne.useTransition=function(){return Re.current.useTransition()},ne.version="18.3.1",ne}var Op;function Bu(){return Op||(Op=1,Vc.exports=ww()),Vc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function xw(){if(jp)return gs;jp=1;var r=Bu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(p,m,y){var _,v={},E=null,A=null;y!==void 0&&(E=""+y),m.key!==void 0&&(E=""+m.key),m.ref!==void 0&&(A=m.ref);for(_ in m)s.call(m,_)&&!c.hasOwnProperty(_)&&(v[_]=m[_]);if(p&&p.defaultProps)for(_ in m=p.defaultProps,m)v[_]===void 0&&(v[_]=m[_]);return{$$typeof:e,type:p,key:E,ref:A,props:v,_owner:a.current}}return gs.Fragment=n,gs.jsx=d,gs.jsxs=d,gs}var Lp;function Sw(){return Lp||(Lp=1,Hc.exports=xw()),Hc.exports}var f=Sw(),D=Bu();const _g=vg(D),Ew=_w({__proto__:null,default:_g},[D]);var Zo={},$c={exports:{}},gt={},Gc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Cw(){return Mp||(Mp=1,(function(r){function e(z,J){var H=z.length;z.push(J);e:for(;0<H;){var C=H-1>>>1,R=z[C];if(0<a(R,J))z[C]=J,z[H]=R,H=C;else break e}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var J=z[0],H=z.pop();if(H!==J){z[0]=H;e:for(var C=0,R=z.length,te=R>>>1;C<te;){var re=2*(C+1)-1,ue=z[re],de=re+1,ve=z[de];if(0>a(ue,H))de<R&&0>a(ve,ue)?(z[C]=ve,z[de]=H,C=de):(z[C]=ue,z[re]=H,C=re);else if(de<R&&0>a(ve,H))z[C]=ve,z[de]=H,C=de;else break e}}return J}function a(z,J){var H=z.sortIndex-J.sortIndex;return H!==0?H:z.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],y=[],_=1,v=null,E=3,A=!1,M=!1,O=!1,T=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(z){for(var J=n(y);J!==null;){if(J.callback===null)s(y);else if(J.startTime<=z)s(y),J.sortIndex=J.expirationTime,e(m,J);else break;J=n(y)}}function ee(z){if(O=!1,K(z),!M)if(n(m)!==null)M=!0,ut(ie);else{var J=n(y);J!==null&&Re(ee,J.startTime-z)}}function ie(z,J){M=!1,O&&(O=!1,F(be),be=-1),A=!0;var H=E;try{for(K(J),v=n(m);v!==null&&(!(v.expirationTime>J)||z&&!Dt());){var C=v.callback;if(typeof C=="function"){v.callback=null,E=v.priorityLevel;var R=C(v.expirationTime<=J);J=r.unstable_now(),typeof R=="function"?v.callback=R:v===n(m)&&s(m),K(J)}else s(m);v=n(m)}if(v!==null)var te=!0;else{var re=n(y);re!==null&&Re(ee,re.startTime-J),te=!1}return te}finally{v=null,E=H,A=!1}}var le=!1,ze=null,be=-1,Lt=5,Mt=-1;function Dt(){return!(r.unstable_now()-Mt<Lt)}function Je(){if(ze!==null){var z=r.unstable_now();Mt=z;var J=!0;try{J=ze(!0,z)}finally{J?Ge():(le=!1,ze=null)}}else le=!1}var Ge;if(typeof q=="function")Ge=function(){q(Je)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,_t=ct.port2;ct.port1.onmessage=Je,Ge=function(){_t.postMessage(null)}}else Ge=function(){T(Je,0)};function ut(z){ze=z,le||(le=!0,Ge())}function Re(z,J){be=T(function(){z(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){M||A||(M=!0,ut(ie))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lt=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(z){switch(E){case 1:case 2:case 3:var J=3;break;default:J=E}var H=E;E=J;try{return z()}finally{E=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,J){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=E;E=z;try{return J()}finally{E=H}},r.unstable_scheduleCallback=function(z,J,H){var C=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?C+H:C):H=C,z){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=H+R,z={id:_++,callback:J,priorityLevel:z,startTime:H,expirationTime:R,sortIndex:-1},H>C?(z.sortIndex=H,e(y,z),n(m)===null&&z===n(y)&&(O?(F(be),be=-1):O=!0,Re(ee,H-C))):(z.sortIndex=R,e(m,z),M||A||(M=!0,ut(ie))),z},r.unstable_shouldYield=Dt,r.unstable_wrapCallback=function(z){var J=E;return function(){var H=E;E=J;try{return z.apply(this,arguments)}finally{E=H}}}})(qc)),qc}var Dp;function kw(){return Dp||(Dp=1,Gc.exports=Cw()),Gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function Iw(){if(Fp)return gt;Fp=1;var r=Bu(),e=kw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function E(t){return m.call(v,t)?!0:m.call(_,t)?!1:y.test(t)?v[t]=!0:(_[t]=!0,!1)}function A(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,i,o,l){if(i===null||typeof i>"u"||A(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function O(t,i,o,l,u,h,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=g}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){T[t]=new O(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];T[i]=new O(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){T[t]=new O(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){T[t]=new O(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){T[t]=new O(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){T[t]=new O(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){T[t]=new O(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){T[t]=new O(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){T[t]=new O(t,5,!1,t.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function q(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(F,q);T[i]=new O(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(F,q);T[i]=new O(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(F,q);T[i]=new O(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){T[t]=new O(t,1,!1,t.toLowerCase(),null,!1,!1)}),T.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){T[t]=new O(t,1,!1,t.toLowerCase(),null,!0,!0)});function K(t,i,o,l){var u=T.hasOwnProperty(i)?T[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,u,l)&&(o=null),l||u===null?E(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),le=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),Lt=Symbol.for("react.profiler"),Mt=Symbol.for("react.provider"),Dt=Symbol.for("react.context"),Je=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),z=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,C;function R(t){if(C===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);C=i&&i[1]||""}return`
`+C+t}var te=!1;function re(t,i){if(!t||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var l=N}Reflect.construct(t,[],i)}else{try{i.call()}catch(N){l=N}t.call(i.prototype)}else{try{throw Error()}catch(N){l=N}t()}}catch(N){if(N&&l&&typeof N.stack=="string"){for(var u=N.stack.split(`
`),h=l.stack.split(`
`),g=u.length-1,w=h.length-1;1<=g&&0<=w&&u[g]!==h[w];)w--;for(;1<=g&&0<=w;g--,w--)if(u[g]!==h[w]){if(g!==1||w!==1)do if(g--,w--,0>w||u[g]!==h[w]){var x=`
`+u[g].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=g&&0<=w);break}}}finally{te=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function ue(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ze:return"Fragment";case le:return"Portal";case Lt:return"Profiler";case be:return"StrictMode";case Ge:return"Suspense";case ct:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dt:return(t.displayName||"Context")+".Consumer";case Mt:return(t._context.displayName||"Context")+".Provider";case Je:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _t:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case ut:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wt(t){var i=ke(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,h.call(this,g)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ws(t){t._valueTracker||(t._valueTracker=wt(t))}function Dd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Hs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qa(t,i){var o=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Fd(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ud(t,i){i=i.checked,i!=null&&K(t,"checked",i,!1)}function Ja(t,i){Ud(t,i);var o=pe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Xa(t,i.type,o):i.hasOwnProperty("defaultValue")&&Xa(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function zd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Xa(t,i,o){(i!=="number"||Hs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Pi=Array.isArray;function Fr(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+pe(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Za(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Pi(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:pe(o)}}function Wd(t,i){var o=pe(i.value),l=pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function Hd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Vd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Vd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,$d=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ai(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E_=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(t){E_.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oi[i]=Oi[t]})});function Gd(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oi.hasOwnProperty(t)&&Oi[t]?(""+i).trim():i+"px"}function qd(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Gd(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var C_=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(t,i){if(i){if(C_[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nl(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function il(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sl=null,Ur=null,zr=null;function Kd(t){if(t=ts(t)){if(typeof sl!="function")throw Error(n(280));var i=t.stateNode;i&&(i=po(i),sl(t.stateNode,t.type,i))}}function Yd(t){Ur?zr?zr.push(t):zr=[t]:Ur=t}function Qd(){if(Ur){var t=Ur,i=zr;if(zr=Ur=null,Kd(t),i)for(t=0;t<i.length;t++)Kd(i[t])}}function Jd(t,i){return t(i)}function Xd(){}var ol=!1;function Zd(t,i,o){if(ol)return t(i,o);ol=!0;try{return Jd(t,i,o)}finally{ol=!1,(Ur!==null||zr!==null)&&(Xd(),Qd())}}function ji(t,i){var o=t.stateNode;if(o===null)return null;var l=po(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var al=!1;if(p)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){al=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{al=!1}function k_(t,i,o,l,u,h,g,w,x){var N=Array.prototype.slice.call(arguments,3);try{i.apply(o,N)}catch(P){this.onError(P)}}var Mi=!1,$s=null,Gs=!1,ll=null,I_={onError:function(t){Mi=!0,$s=t}};function N_(t,i,o,l,u,h,g,w,x){Mi=!1,$s=null,k_.apply(I_,arguments)}function T_(t,i,o,l,u,h,g,w,x){if(N_.apply(this,arguments),Mi){if(Mi){var N=$s;Mi=!1,$s=null}else throw Error(n(198));Gs||(Gs=!0,ll=N)}}function ar(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function eh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function th(t){if(ar(t)!==t)throw Error(n(188))}function b_(t){var i=t.alternate;if(!i){if(i=ar(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return th(u),t;if(h===l)return th(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var g=!1,w=u.child;w;){if(w===o){g=!0,o=u,l=h;break}if(w===l){g=!0,l=u,o=h;break}w=w.sibling}if(!g){for(w=h.child;w;){if(w===o){g=!0,o=h,l=u;break}if(w===l){g=!0,l=h,o=u;break}w=w.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function nh(t){return t=b_(t),t!==null?rh(t):null}function rh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=rh(t);if(i!==null)return i;t=t.sibling}return null}var ih=e.unstable_scheduleCallback,sh=e.unstable_cancelCallback,R_=e.unstable_shouldYield,P_=e.unstable_requestPaint,Oe=e.unstable_now,A_=e.unstable_getCurrentPriorityLevel,cl=e.unstable_ImmediatePriority,oh=e.unstable_UserBlockingPriority,qs=e.unstable_NormalPriority,O_=e.unstable_LowPriority,ah=e.unstable_IdlePriority,Ks=null,Jt=null;function j_(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ks,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:D_,L_=Math.log,M_=Math.LN2;function D_(t){return t>>>=0,t===0?32:31-(L_(t)/M_|0)|0}var Ys=64,Qs=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Js(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,g=o&268435455;if(g!==0){var w=g&~u;w!==0?l=Di(w):(h&=g,h!==0&&(l=Di(h)))}else g=o&~u,g!==0?l=Di(g):h!==0&&(l=Di(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Ft(i),u=1<<o,l|=t[o],i&=~u;return l}function F_(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U_(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var g=31-Ft(h),w=1<<g,x=u[g];x===-1?((w&o)===0||(w&l)!==0)&&(u[g]=F_(w,i)):x<=i&&(t.expiredLanes|=w),h&=~w}}function ul(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lh(){var t=Ys;return Ys<<=1,(Ys&4194240)===0&&(Ys=64),t}function dl(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Fi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ft(i),t[i]=o}function z_(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Ft(o),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function hl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Ft(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var me=0;function ch(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var uh,fl,dh,hh,fh,pl=!1,Xs=[],Tn=null,bn=null,Rn=null,Ui=new Map,zi=new Map,Pn=[],B_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(t,i){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ui.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(i.pointerId)}}function Bi(t,i,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=ts(i),i!==null&&fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function W_(t,i,o,l,u){switch(i){case"focusin":return Tn=Bi(Tn,t,i,o,l,u),!0;case"dragenter":return bn=Bi(bn,t,i,o,l,u),!0;case"mouseover":return Rn=Bi(Rn,t,i,o,l,u),!0;case"pointerover":var h=u.pointerId;return Ui.set(h,Bi(Ui.get(h)||null,t,i,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,zi.set(h,Bi(zi.get(h)||null,t,i,o,l,u)),!0}return!1}function mh(t){var i=lr(t.target);if(i!==null){var o=ar(i);if(o!==null){if(i=o.tag,i===13){if(i=eh(o),i!==null){t.blockedOn=i,fh(t.priority,function(){dh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zs(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=gl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);rl=l,o.target.dispatchEvent(l),rl=null}else return i=ts(o),i!==null&&fl(i),t.blockedOn=o,!1;i.shift()}return!0}function gh(t,i,o){Zs(t)&&o.delete(i)}function H_(){pl=!1,Tn!==null&&Zs(Tn)&&(Tn=null),bn!==null&&Zs(bn)&&(bn=null),Rn!==null&&Zs(Rn)&&(Rn=null),Ui.forEach(gh),zi.forEach(gh)}function Wi(t,i){t.blockedOn===i&&(t.blockedOn=null,pl||(pl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,H_)))}function Hi(t){function i(u){return Wi(u,t)}if(0<Xs.length){Wi(Xs[0],t);for(var o=1;o<Xs.length;o++){var l=Xs[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Tn!==null&&Wi(Tn,t),bn!==null&&Wi(bn,t),Rn!==null&&Wi(Rn,t),Ui.forEach(i),zi.forEach(i),o=0;o<Pn.length;o++)l=Pn[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)mh(o),o.blockedOn===null&&Pn.shift()}var Br=ee.ReactCurrentBatchConfig,eo=!0;function V_(t,i,o,l){var u=me,h=Br.transition;Br.transition=null;try{me=1,ml(t,i,o,l)}finally{me=u,Br.transition=h}}function $_(t,i,o,l){var u=me,h=Br.transition;Br.transition=null;try{me=4,ml(t,i,o,l)}finally{me=u,Br.transition=h}}function ml(t,i,o,l){if(eo){var u=gl(t,i,o,l);if(u===null)Ol(t,i,l,to,o),ph(t,l);else if(W_(u,t,i,o,l))l.stopPropagation();else if(ph(t,l),i&4&&-1<B_.indexOf(t)){for(;u!==null;){var h=ts(u);if(h!==null&&uh(h),h=gl(t,i,o,l),h===null&&Ol(t,i,l,to,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else Ol(t,i,l,null,o)}}var to=null;function gl(t,i,o,l){if(to=null,t=il(l),t=lr(t),t!==null)if(i=ar(t),i===null)t=null;else if(o=i.tag,o===13){if(t=eh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return to=t,null}function yh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A_()){case cl:return 1;case oh:return 4;case qs:case O_:return 16;case ah:return 536870912;default:return 16}default:return 16}}var An=null,yl=null,no=null;function vh(){if(no)return no;var t,i=yl,o=i.length,l,u="value"in An?An.value:An.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var g=o-t;for(l=1;l<=g&&i[o-l]===u[h-l];l++);return no=u.slice(t,1<l?1-l:void 0)}function ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function _h(){return!1}function xt(t){function i(o,l,u,h,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?io:_h,this.isPropagationStopped=_h,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),i}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=xt(Wr),Vi=H({},Wr,{view:0,detail:0}),G_=xt(Vi),_l,wl,$i,so=H({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(_l=t.screenX-$i.screenX,wl=t.screenY-$i.screenY):wl=_l=0,$i=t),_l)},movementY:function(t){return"movementY"in t?t.movementY:wl}}),wh=xt(so),q_=H({},so,{dataTransfer:0}),K_=xt(q_),Y_=H({},Vi,{relatedTarget:0}),xl=xt(Y_),Q_=H({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),J_=xt(Q_),X_=H({},Wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z_=xt(X_),e0=H({},Wr,{data:0}),xh=xt(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=r0[t])?!!i[t]:!1}function Sl(){return i0}var s0=H({},Vi,{key:function(t){if(t.key){var i=t0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sl,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o0=xt(s0),a0=H({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=xt(a0),l0=H({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sl}),c0=xt(l0),u0=H({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=xt(u0),h0=H({},so,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=xt(h0),p0=[9,13,27,32],El=p&&"CompositionEvent"in window,Gi=null;p&&"documentMode"in document&&(Gi=document.documentMode);var m0=p&&"TextEvent"in window&&!Gi,Eh=p&&(!El||Gi&&8<Gi&&11>=Gi),Ch=" ",kh=!1;function Ih(t,i){switch(t){case"keyup":return p0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function g0(t,i){switch(t){case"compositionend":return Nh(i);case"keypress":return i.which!==32?null:(kh=!0,Ch);case"textInput":return t=i.data,t===Ch&&kh?null:t;default:return null}}function y0(t,i){if(Hr)return t==="compositionend"||!El&&Ih(t,i)?(t=vh(),no=yl=An=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Eh&&i.locale!=="ko"?null:i.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!v0[t.type]:i==="textarea"}function bh(t,i,o,l){Yd(l),i=uo(i,"onChange"),0<i.length&&(o=new vl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var qi=null,Ki=null;function _0(t){qh(t,0)}function oo(t){var i=Kr(t);if(Dd(i))return t}function w0(t,i){if(t==="change")return i}var Rh=!1;if(p){var Cl;if(p){var kl="oninput"in document;if(!kl){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),kl=typeof Ph.oninput=="function"}Cl=kl}else Cl=!1;Rh=Cl&&(!document.documentMode||9<document.documentMode)}function Ah(){qi&&(qi.detachEvent("onpropertychange",Oh),Ki=qi=null)}function Oh(t){if(t.propertyName==="value"&&oo(Ki)){var i=[];bh(i,Ki,t,il(t)),Zd(_0,i)}}function x0(t,i,o){t==="focusin"?(Ah(),qi=i,Ki=o,qi.attachEvent("onpropertychange",Oh)):t==="focusout"&&Ah()}function S0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(Ki)}function E0(t,i){if(t==="click")return oo(i)}function C0(t,i){if(t==="input"||t==="change")return oo(i)}function k0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ut=typeof Object.is=="function"?Object.is:k0;function Yi(t,i){if(Ut(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!m.call(i,u)||!Ut(t[u],i[u]))return!1}return!0}function jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lh(t,i){var o=jh(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=jh(o)}}function Mh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Mh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Dh(){for(var t=window,i=Hs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Hs(t.document)}return i}function Il(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function I0(t){var i=Dh(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Mh(o.ownerDocument.documentElement,o)){if(l!==null&&Il(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=Lh(o,h);var g=Lh(o,l);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var N0=p&&"documentMode"in document&&11>=document.documentMode,Vr=null,Nl=null,Qi=null,Tl=!1;function Fh(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Tl||Vr==null||Vr!==Hs(l)||(l=Vr,"selectionStart"in l&&Il(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qi&&Yi(Qi,l)||(Qi=l,l=uo(Nl,"onSelect"),0<l.length&&(i=new vl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Vr)))}function ao(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var $r={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},bl={},Uh={};p&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function lo(t){if(bl[t])return bl[t];if(!$r[t])return t;var i=$r[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Uh)return bl[t]=i[o];return t}var zh=lo("animationend"),Bh=lo("animationiteration"),Wh=lo("animationstart"),Hh=lo("transitionend"),Vh=new Map,$h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,i){Vh.set(t,i),c(i,[t])}for(var Rl=0;Rl<$h.length;Rl++){var Pl=$h[Rl],T0=Pl.toLowerCase(),b0=Pl[0].toUpperCase()+Pl.slice(1);On(T0,"on"+b0)}On(zh,"onAnimationEnd"),On(Bh,"onAnimationIteration"),On(Wh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(Hh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function Gh(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,T_(l,i,void 0,t),t.currentTarget=null}function qh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var g=l.length-1;0<=g;g--){var w=l[g],x=w.instance,N=w.currentTarget;if(w=w.listener,x!==h&&u.isPropagationStopped())break e;Gh(u,w,N),h=x}else for(g=0;g<l.length;g++){if(w=l[g],x=w.instance,N=w.currentTarget,w=w.listener,x!==h&&u.isPropagationStopped())break e;Gh(u,w,N),h=x}}}if(Gs)throw t=ll,Gs=!1,ll=null,t}function we(t,i){var o=i[Ul];o===void 0&&(o=i[Ul]=new Set);var l=t+"__bubble";o.has(l)||(Kh(i,t,2,!1),o.add(l))}function Al(t,i,o){var l=0;i&&(l|=4),Kh(o,t,l,i)}var co="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[co]){t[co]=!0,s.forEach(function(o){o!=="selectionchange"&&(R0.has(o)||Al(o,!1,t),Al(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[co]||(i[co]=!0,Al("selectionchange",!1,i))}}function Kh(t,i,o,l){switch(yh(i)){case 1:var u=V_;break;case 4:u=$_;break;default:u=ml}o=u.bind(null,i,o,t),u=void 0,!al||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function Ol(t,i,o,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var w=l.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var x=g.tag;if((x===3||x===4)&&(x=g.stateNode.containerInfo,x===u||x.nodeType===8&&x.parentNode===u))return;g=g.return}for(;w!==null;){if(g=lr(w),g===null)return;if(x=g.tag,x===5||x===6){l=h=g;continue e}w=w.parentNode}}l=l.return}Zd(function(){var N=h,P=il(o),j=[];e:{var b=Vh.get(t);if(b!==void 0){var B=vl,V=t;switch(t){case"keypress":if(ro(o)===0)break e;case"keydown":case"keyup":B=o0;break;case"focusin":V="focus",B=xl;break;case"focusout":V="blur",B=xl;break;case"beforeblur":case"afterblur":B=xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=K_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=c0;break;case zh:case Bh:case Wh:B=J_;break;case Hh:B=d0;break;case"scroll":B=G_;break;case"wheel":B=f0;break;case"copy":case"cut":case"paste":B=Z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Sh}var $=(i&4)!==0,je=!$&&t==="scroll",k=$?b!==null?b+"Capture":null:b;$=[];for(var S=N,I;S!==null;){I=S;var L=I.stateNode;if(I.tag===5&&L!==null&&(I=L,k!==null&&(L=ji(S,k),L!=null&&$.push(Zi(S,L,I)))),je)break;S=S.return}0<$.length&&(b=new B(b,V,null,o,P),j.push({event:b,listeners:$}))}}if((i&7)===0){e:{if(b=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",b&&o!==rl&&(V=o.relatedTarget||o.fromElement)&&(lr(V)||V[ln]))break e;if((B||b)&&(b=P.window===P?P:(b=P.ownerDocument)?b.defaultView||b.parentWindow:window,B?(V=o.relatedTarget||o.toElement,B=N,V=V?lr(V):null,V!==null&&(je=ar(V),V!==je||V.tag!==5&&V.tag!==6)&&(V=null)):(B=null,V=N),B!==V)){if($=wh,L="onMouseLeave",k="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&($=Sh,L="onPointerLeave",k="onPointerEnter",S="pointer"),je=B==null?b:Kr(B),I=V==null?b:Kr(V),b=new $(L,S+"leave",B,o,P),b.target=je,b.relatedTarget=I,L=null,lr(P)===N&&($=new $(k,S+"enter",V,o,P),$.target=I,$.relatedTarget=je,L=$),je=L,B&&V)t:{for($=B,k=V,S=0,I=$;I;I=Gr(I))S++;for(I=0,L=k;L;L=Gr(L))I++;for(;0<S-I;)$=Gr($),S--;for(;0<I-S;)k=Gr(k),I--;for(;S--;){if($===k||k!==null&&$===k.alternate)break t;$=Gr($),k=Gr(k)}$=null}else $=null;B!==null&&Yh(j,b,B,$,!1),V!==null&&je!==null&&Yh(j,je,V,$,!0)}}e:{if(b=N?Kr(N):window,B=b.nodeName&&b.nodeName.toLowerCase(),B==="select"||B==="input"&&b.type==="file")var G=w0;else if(Th(b))if(Rh)G=C0;else{G=S0;var Y=x0}else(B=b.nodeName)&&B.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(G=E0);if(G&&(G=G(t,N))){bh(j,G,o,P);break e}Y&&Y(t,b,N),t==="focusout"&&(Y=b._wrapperState)&&Y.controlled&&b.type==="number"&&Xa(b,"number",b.value)}switch(Y=N?Kr(N):window,t){case"focusin":(Th(Y)||Y.contentEditable==="true")&&(Vr=Y,Nl=N,Qi=null);break;case"focusout":Qi=Nl=Vr=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Fh(j,o,P);break;case"selectionchange":if(N0)break;case"keydown":case"keyup":Fh(j,o,P)}var Q;if(El)e:{switch(t){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Hr?Ih(t,o)&&(X="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(X="onCompositionStart");X&&(Eh&&o.locale!=="ko"&&(Hr||X!=="onCompositionStart"?X==="onCompositionEnd"&&Hr&&(Q=vh()):(An=P,yl="value"in An?An.value:An.textContent,Hr=!0)),Y=uo(N,X),0<Y.length&&(X=new xh(X,t,null,o,P),j.push({event:X,listeners:Y}),Q?X.data=Q:(Q=Nh(o),Q!==null&&(X.data=Q)))),(Q=m0?g0(t,o):y0(t,o))&&(N=uo(N,"onBeforeInput"),0<N.length&&(P=new xh("onBeforeInput","beforeinput",null,o,P),j.push({event:P,listeners:N}),P.data=Q))}qh(j,i)})}function Zi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function uo(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=ji(t,o),h!=null&&l.unshift(Zi(t,h,u)),h=ji(t,i),h!=null&&l.push(Zi(t,h,u))),t=t.return}return l}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yh(t,i,o,l,u){for(var h=i._reactName,g=[];o!==null&&o!==l;){var w=o,x=w.alternate,N=w.stateNode;if(x!==null&&x===l)break;w.tag===5&&N!==null&&(w=N,u?(x=ji(o,h),x!=null&&g.unshift(Zi(o,x,w))):u||(x=ji(o,h),x!=null&&g.push(Zi(o,x,w)))),o=o.return}g.length!==0&&t.push({event:i,listeners:g})}var P0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(P0,`
`).replace(A0,"")}function ho(t,i,o){if(i=Qh(i),Qh(t)!==i&&o)throw Error(n(425))}function fo(){}var jl=null,Ll=null;function Ml(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(L0)}:Dl;function L0(t){setTimeout(function(){throw t})}function Fl(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),Hi(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Hi(i)}function jn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Xh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+qr,es="__reactProps$"+qr,ln="__reactContainer$"+qr,Ul="__reactEvents$"+qr,M0="__reactListeners$"+qr,D0="__reactHandles$"+qr;function lr(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ln]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Xh(t);t!==null;){if(o=t[Xt])return o;t=Xh(t)}return i}t=o,o=t.parentNode}return null}function ts(t){return t=t[Xt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function po(t){return t[es]||null}var zl=[],Yr=-1;function Ln(t){return{current:t}}function xe(t){0>Yr||(t.current=zl[Yr],zl[Yr]=null,Yr--)}function _e(t,i){Yr++,zl[Yr]=t.current,t.current=i}var Mn={},Xe=Ln(Mn),dt=Ln(!1),cr=Mn;function Qr(t,i){var o=t.type.contextTypes;if(!o)return Mn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function ht(t){return t=t.childContextTypes,t!=null}function mo(){xe(dt),xe(Xe)}function Zh(t,i,o){if(Xe.current!==Mn)throw Error(n(168));_e(Xe,i),_e(dt,o)}function ef(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,ve(t)||"Unknown",u));return H({},o,l)}function go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,cr=Xe.current,_e(Xe,t),_e(dt,dt.current),!0}function tf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=ef(t,i,cr),l.__reactInternalMemoizedMergedChildContext=t,xe(dt),xe(Xe),_e(Xe,t)):xe(dt),_e(dt,o)}var cn=null,yo=!1,Bl=!1;function nf(t){cn===null?cn=[t]:cn.push(t)}function F0(t){yo=!0,nf(t)}function Dn(){if(!Bl&&cn!==null){Bl=!0;var t=0,i=me;try{var o=cn;for(me=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}cn=null,yo=!1}catch(u){throw cn!==null&&(cn=cn.slice(t+1)),ih(cl,Dn),u}finally{me=i,Bl=!1}}return null}var Jr=[],Xr=0,vo=null,_o=0,It=[],Nt=0,ur=null,un=1,dn="";function dr(t,i){Jr[Xr++]=_o,Jr[Xr++]=vo,vo=t,_o=i}function rf(t,i,o){It[Nt++]=un,It[Nt++]=dn,It[Nt++]=ur,ur=t;var l=un;t=dn;var u=32-Ft(l)-1;l&=~(1<<u),o+=1;var h=32-Ft(i)+u;if(30<h){var g=u-u%5;h=(l&(1<<g)-1).toString(32),l>>=g,u-=g,un=1<<32-Ft(i)+u|o<<u|l,dn=h+t}else un=1<<h|o<<u|l,dn=t}function Wl(t){t.return!==null&&(dr(t,1),rf(t,1,0))}function Hl(t){for(;t===vo;)vo=Jr[--Xr],Jr[Xr]=null,_o=Jr[--Xr],Jr[Xr]=null;for(;t===ur;)ur=It[--Nt],It[Nt]=null,dn=It[--Nt],It[Nt]=null,un=It[--Nt],It[Nt]=null}var St=null,Et=null,Ie=!1,zt=null;function sf(t,i){var o=Pt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function of(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,St=t,Et=jn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,St=t,Et=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ur!==null?{id:un,overflow:dn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Pt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,St=t,Et=null,!0):!1;default:return!1}}function Vl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $l(t){if(Ie){var i=Et;if(i){var o=i;if(!of(t,i)){if(Vl(t))throw Error(n(418));i=jn(o.nextSibling);var l=St;i&&of(t,i)?sf(l,o):(t.flags=t.flags&-4097|2,Ie=!1,St=t)}}else{if(Vl(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ie=!1,St=t}}}function af(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function wo(t){if(t!==St)return!1;if(!Ie)return af(t),Ie=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ml(t.type,t.memoizedProps)),i&&(i=Et)){if(Vl(t))throw lf(),Error(n(418));for(;i;)sf(t,i),i=jn(i.nextSibling)}if(af(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Et=jn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Et=null}}else Et=St?jn(t.stateNode.nextSibling):null;return!0}function lf(){for(var t=Et;t;)t=jn(t.nextSibling)}function Zr(){Et=St=null,Ie=!1}function Gl(t){zt===null?zt=[t]:zt.push(t)}var U0=ee.ReactCurrentBatchConfig;function ns(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(g){var w=u.refs;g===null?delete w[h]:w[h]=g},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function xo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function cf(t){var i=t._init;return i(t._payload)}function uf(t){function i(k,S){if(t){var I=k.deletions;I===null?(k.deletions=[S],k.flags|=16):I.push(S)}}function o(k,S){if(!t)return null;for(;S!==null;)i(k,S),S=S.sibling;return null}function l(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function u(k,S){return k=$n(k,S),k.index=0,k.sibling=null,k}function h(k,S,I){return k.index=I,t?(I=k.alternate,I!==null?(I=I.index,I<S?(k.flags|=2,S):I):(k.flags|=2,S)):(k.flags|=1048576,S)}function g(k){return t&&k.alternate===null&&(k.flags|=2),k}function w(k,S,I,L){return S===null||S.tag!==6?(S=Dc(I,k.mode,L),S.return=k,S):(S=u(S,I),S.return=k,S)}function x(k,S,I,L){var G=I.type;return G===ze?P(k,S,I.props.children,L,I.key):S!==null&&(S.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ut&&cf(G)===S.type)?(L=u(S,I.props),L.ref=ns(k,S,I),L.return=k,L):(L=$o(I.type,I.key,I.props,null,k.mode,L),L.ref=ns(k,S,I),L.return=k,L)}function N(k,S,I,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==I.containerInfo||S.stateNode.implementation!==I.implementation?(S=Fc(I,k.mode,L),S.return=k,S):(S=u(S,I.children||[]),S.return=k,S)}function P(k,S,I,L,G){return S===null||S.tag!==7?(S=_r(I,k.mode,L,G),S.return=k,S):(S=u(S,I),S.return=k,S)}function j(k,S,I){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Dc(""+S,k.mode,I),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ie:return I=$o(S.type,S.key,S.props,null,k.mode,I),I.ref=ns(k,null,S),I.return=k,I;case le:return S=Fc(S,k.mode,I),S.return=k,S;case ut:var L=S._init;return j(k,L(S._payload),I)}if(Pi(S)||J(S))return S=_r(S,k.mode,I,null),S.return=k,S;xo(k,S)}return null}function b(k,S,I,L){var G=S!==null?S.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return G!==null?null:w(k,S,""+I,L);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ie:return I.key===G?x(k,S,I,L):null;case le:return I.key===G?N(k,S,I,L):null;case ut:return G=I._init,b(k,S,G(I._payload),L)}if(Pi(I)||J(I))return G!==null?null:P(k,S,I,L,null);xo(k,I)}return null}function B(k,S,I,L,G){if(typeof L=="string"&&L!==""||typeof L=="number")return k=k.get(I)||null,w(S,k,""+L,G);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ie:return k=k.get(L.key===null?I:L.key)||null,x(S,k,L,G);case le:return k=k.get(L.key===null?I:L.key)||null,N(S,k,L,G);case ut:var Y=L._init;return B(k,S,I,Y(L._payload),G)}if(Pi(L)||J(L))return k=k.get(I)||null,P(S,k,L,G,null);xo(S,L)}return null}function V(k,S,I,L){for(var G=null,Y=null,Q=S,X=S=0,He=null;Q!==null&&X<I.length;X++){Q.index>X?(He=Q,Q=null):He=Q.sibling;var he=b(k,Q,I[X],L);if(he===null){Q===null&&(Q=He);break}t&&Q&&he.alternate===null&&i(k,Q),S=h(he,S,X),Y===null?G=he:Y.sibling=he,Y=he,Q=He}if(X===I.length)return o(k,Q),Ie&&dr(k,X),G;if(Q===null){for(;X<I.length;X++)Q=j(k,I[X],L),Q!==null&&(S=h(Q,S,X),Y===null?G=Q:Y.sibling=Q,Y=Q);return Ie&&dr(k,X),G}for(Q=l(k,Q);X<I.length;X++)He=B(Q,k,X,I[X],L),He!==null&&(t&&He.alternate!==null&&Q.delete(He.key===null?X:He.key),S=h(He,S,X),Y===null?G=He:Y.sibling=He,Y=He);return t&&Q.forEach(function(Gn){return i(k,Gn)}),Ie&&dr(k,X),G}function $(k,S,I,L){var G=J(I);if(typeof G!="function")throw Error(n(150));if(I=G.call(I),I==null)throw Error(n(151));for(var Y=G=null,Q=S,X=S=0,He=null,he=I.next();Q!==null&&!he.done;X++,he=I.next()){Q.index>X?(He=Q,Q=null):He=Q.sibling;var Gn=b(k,Q,he.value,L);if(Gn===null){Q===null&&(Q=He);break}t&&Q&&Gn.alternate===null&&i(k,Q),S=h(Gn,S,X),Y===null?G=Gn:Y.sibling=Gn,Y=Gn,Q=He}if(he.done)return o(k,Q),Ie&&dr(k,X),G;if(Q===null){for(;!he.done;X++,he=I.next())he=j(k,he.value,L),he!==null&&(S=h(he,S,X),Y===null?G=he:Y.sibling=he,Y=he);return Ie&&dr(k,X),G}for(Q=l(k,Q);!he.done;X++,he=I.next())he=B(Q,k,X,he.value,L),he!==null&&(t&&he.alternate!==null&&Q.delete(he.key===null?X:he.key),S=h(he,S,X),Y===null?G=he:Y.sibling=he,Y=he);return t&&Q.forEach(function(vw){return i(k,vw)}),Ie&&dr(k,X),G}function je(k,S,I,L){if(typeof I=="object"&&I!==null&&I.type===ze&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ie:e:{for(var G=I.key,Y=S;Y!==null;){if(Y.key===G){if(G=I.type,G===ze){if(Y.tag===7){o(k,Y.sibling),S=u(Y,I.props.children),S.return=k,k=S;break e}}else if(Y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ut&&cf(G)===Y.type){o(k,Y.sibling),S=u(Y,I.props),S.ref=ns(k,Y,I),S.return=k,k=S;break e}o(k,Y);break}else i(k,Y);Y=Y.sibling}I.type===ze?(S=_r(I.props.children,k.mode,L,I.key),S.return=k,k=S):(L=$o(I.type,I.key,I.props,null,k.mode,L),L.ref=ns(k,S,I),L.return=k,k=L)}return g(k);case le:e:{for(Y=I.key;S!==null;){if(S.key===Y)if(S.tag===4&&S.stateNode.containerInfo===I.containerInfo&&S.stateNode.implementation===I.implementation){o(k,S.sibling),S=u(S,I.children||[]),S.return=k,k=S;break e}else{o(k,S);break}else i(k,S);S=S.sibling}S=Fc(I,k.mode,L),S.return=k,k=S}return g(k);case ut:return Y=I._init,je(k,S,Y(I._payload),L)}if(Pi(I))return V(k,S,I,L);if(J(I))return $(k,S,I,L);xo(k,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,S!==null&&S.tag===6?(o(k,S.sibling),S=u(S,I),S.return=k,k=S):(o(k,S),S=Dc(I,k.mode,L),S.return=k,k=S),g(k)):o(k,S)}return je}var ei=uf(!0),df=uf(!1),So=Ln(null),Eo=null,ti=null,ql=null;function Kl(){ql=ti=Eo=null}function Yl(t){var i=So.current;xe(So),t._currentValue=i}function Ql(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ni(t,i){Eo=t,ql=ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ft=!0),t.firstContext=null)}function Tt(t){var i=t._currentValue;if(ql!==t)if(t={context:t,memoizedValue:i,next:null},ti===null){if(Eo===null)throw Error(n(308));ti=t,Eo.dependencies={lanes:0,firstContext:t}}else ti=ti.next=t;return i}var hr=null;function Jl(t){hr===null?hr=[t]:hr.push(t)}function hf(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,Jl(i)):(o.next=u.next,u.next=o),i.interleaved=o,hn(t,l)}function hn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fn=!1;function Xl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ff(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ce&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,hn(t,o)}return u=l.interleaved,u===null?(i.next=i,Jl(l)):(i.next=u.next,u.next=i),l.interleaved=i,hn(t,o)}function Co(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,hl(t,o)}}function pf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ko(t,i,o,l){var u=t.updateQueue;Fn=!1;var h=u.firstBaseUpdate,g=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var x=w,N=x.next;x.next=null,g===null?h=N:g.next=N,g=x;var P=t.alternate;P!==null&&(P=P.updateQueue,w=P.lastBaseUpdate,w!==g&&(w===null?P.firstBaseUpdate=N:w.next=N,P.lastBaseUpdate=x))}if(h!==null){var j=u.baseState;g=0,P=N=x=null,w=h;do{var b=w.lane,B=w.eventTime;if((l&b)===b){P!==null&&(P=P.next={eventTime:B,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var V=t,$=w;switch(b=i,B=o,$.tag){case 1:if(V=$.payload,typeof V=="function"){j=V.call(B,j,b);break e}j=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=$.payload,b=typeof V=="function"?V.call(B,j,b):V,b==null)break e;j=H({},j,b);break e;case 2:Fn=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,b=u.effects,b===null?u.effects=[w]:b.push(w))}else B={eventTime:B,lane:b,tag:w.tag,payload:w.payload,callback:w.callback,next:null},P===null?(N=P=B,x=j):P=P.next=B,g|=b;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;b=w,w=b.next,b.next=null,u.lastBaseUpdate=b,u.shared.pending=null}}while(!0);if(P===null&&(x=j),u.baseState=x,u.firstBaseUpdate=N,u.lastBaseUpdate=P,i=u.shared.interleaved,i!==null){u=i;do g|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);mr|=g,t.lanes=g,t.memoizedState=j}}function mf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var rs={},Zt=Ln(rs),is=Ln(rs),ss=Ln(rs);function fr(t){if(t===rs)throw Error(n(174));return t}function Zl(t,i){switch(_e(ss,i),_e(is,t),_e(Zt,rs),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:el(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=el(i,t)}xe(Zt),_e(Zt,i)}function ri(){xe(Zt),xe(is),xe(ss)}function gf(t){fr(ss.current);var i=fr(Zt.current),o=el(i,t.type);i!==o&&(_e(is,t),_e(Zt,o))}function ec(t){is.current===t&&(xe(Zt),xe(is))}var Ne=Ln(0);function Io(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tc=[];function nc(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var No=ee.ReactCurrentDispatcher,rc=ee.ReactCurrentBatchConfig,pr=0,Te=null,De=null,Be=null,To=!1,os=!1,as=0,z0=0;function Ze(){throw Error(n(321))}function ic(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ut(t[o],i[o]))return!1;return!0}function sc(t,i,o,l,u,h){if(pr=h,Te=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,No.current=t===null||t.memoizedState===null?V0:$0,t=o(l,u),os){h=0;do{if(os=!1,as=0,25<=h)throw Error(n(301));h+=1,Be=De=null,i.updateQueue=null,No.current=G0,t=o(l,u)}while(os)}if(No.current=Po,i=De!==null&&De.next!==null,pr=0,Be=De=Te=null,To=!1,i)throw Error(n(300));return t}function oc(){var t=as!==0;return as=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=t:Be=Be.next=t,Be}function bt(){if(De===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var i=Be===null?Te.memoizedState:Be.next;if(i!==null)Be=i,De=t;else{if(t===null)throw Error(n(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?Te.memoizedState=Be=t:Be=Be.next=t}return Be}function ls(t,i){return typeof i=="function"?i(t):i}function ac(t){var i=bt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=De,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var g=u.next;u.next=h.next,h.next=g}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var w=g=null,x=null,N=h;do{var P=N.lane;if((pr&P)===P)x!==null&&(x=x.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),l=N.hasEagerState?N.eagerState:t(l,N.action);else{var j={lane:P,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};x===null?(w=x=j,g=l):x=x.next=j,Te.lanes|=P,mr|=P}N=N.next}while(N!==null&&N!==h);x===null?g=l:x.next=w,Ut(l,i.memoizedState)||(ft=!0),i.memoizedState=l,i.baseState=g,i.baseQueue=x,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Te.lanes|=h,mr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function lc(t){var i=bt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do h=t(h,g.action),g=g.next;while(g!==u);Ut(h,i.memoizedState)||(ft=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function yf(){}function vf(t,i){var o=Te,l=bt(),u=i(),h=!Ut(l.memoizedState,u);if(h&&(l.memoizedState=u,ft=!0),l=l.queue,cc(xf.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Be!==null&&Be.memoizedState.tag&1){if(o.flags|=2048,cs(9,wf.bind(null,o,l,u,i),void 0,null),We===null)throw Error(n(349));(pr&30)!==0||_f(o,i,u)}return u}function _f(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Te.updateQueue,i===null?(i={lastEffect:null,stores:null},Te.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function wf(t,i,o,l){i.value=o,i.getSnapshot=l,Sf(i)&&Ef(t)}function xf(t,i,o){return o(function(){Sf(i)&&Ef(t)})}function Sf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ut(t,o)}catch{return!0}}function Ef(t){var i=hn(t,1);i!==null&&Vt(i,t,1,-1)}function Cf(t){var i=en();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},i.queue=t,t=t.dispatch=H0.bind(null,Te,t),[i.memoizedState,t]}function cs(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Te.updateQueue,i===null?(i={lastEffect:null,stores:null},Te.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function kf(){return bt().memoizedState}function bo(t,i,o,l){var u=en();Te.flags|=t,u.memoizedState=cs(1|i,o,void 0,l===void 0?null:l)}function Ro(t,i,o,l){var u=bt();l=l===void 0?null:l;var h=void 0;if(De!==null){var g=De.memoizedState;if(h=g.destroy,l!==null&&ic(l,g.deps)){u.memoizedState=cs(i,o,h,l);return}}Te.flags|=t,u.memoizedState=cs(1|i,o,h,l)}function If(t,i){return bo(8390656,8,t,i)}function cc(t,i){return Ro(2048,8,t,i)}function Nf(t,i){return Ro(4,2,t,i)}function Tf(t,i){return Ro(4,4,t,i)}function bf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Rf(t,i,o){return o=o!=null?o.concat([t]):null,Ro(4,4,bf.bind(null,i,t),o)}function uc(){}function Pf(t,i){var o=bt();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&ic(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Af(t,i){var o=bt();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&ic(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Of(t,i,o){return(pr&21)===0?(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=o):(Ut(o,i)||(o=lh(),Te.lanes|=o,mr|=o,t.baseState=!0),i)}function B0(t,i){var o=me;me=o!==0&&4>o?o:4,t(!0);var l=rc.transition;rc.transition={};try{t(!1),i()}finally{me=o,rc.transition=l}}function jf(){return bt().memoizedState}function W0(t,i,o){var l=Hn(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Lf(t))Mf(i,o);else if(o=hf(t,i,o,l),o!==null){var u=st();Vt(o,t,l,u),Df(o,i,l)}}function H0(t,i,o){var l=Hn(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Lf(t))Mf(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var g=i.lastRenderedState,w=h(g,o);if(u.hasEagerState=!0,u.eagerState=w,Ut(w,g)){var x=i.interleaved;x===null?(u.next=u,Jl(i)):(u.next=x.next,x.next=u),i.interleaved=u;return}}catch{}finally{}o=hf(t,i,u,l),o!==null&&(u=st(),Vt(o,t,l,u),Df(o,i,l))}}function Lf(t){var i=t.alternate;return t===Te||i!==null&&i===Te}function Mf(t,i){os=To=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Df(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,hl(t,o)}}var Po={readContext:Tt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},V0={readContext:Tt,useCallback:function(t,i){return en().memoizedState=[t,i===void 0?null:i],t},useContext:Tt,useEffect:If,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,bo(4194308,4,bf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return bo(4194308,4,t,i)},useInsertionEffect:function(t,i){return bo(4,2,t,i)},useMemo:function(t,i){var o=en();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=en();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=W0.bind(null,Te,t),[l.memoizedState,t]},useRef:function(t){var i=en();return t={current:t},i.memoizedState=t},useState:Cf,useDebugValue:uc,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Cf(!1),i=t[0];return t=B0.bind(null,t[1]),en().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Te,u=en();if(Ie){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),We===null)throw Error(n(349));(pr&30)!==0||_f(l,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,If(xf.bind(null,l,h,t),[t]),l.flags|=2048,cs(9,wf.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=en(),i=We.identifierPrefix;if(Ie){var o=dn,l=un;o=(l&~(1<<32-Ft(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=as++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=z0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},$0={readContext:Tt,useCallback:Pf,useContext:Tt,useEffect:cc,useImperativeHandle:Rf,useInsertionEffect:Nf,useLayoutEffect:Tf,useMemo:Af,useReducer:ac,useRef:kf,useState:function(){return ac(ls)},useDebugValue:uc,useDeferredValue:function(t){var i=bt();return Of(i,De.memoizedState,t)},useTransition:function(){var t=ac(ls)[0],i=bt().memoizedState;return[t,i]},useMutableSource:yf,useSyncExternalStore:vf,useId:jf,unstable_isNewReconciler:!1},G0={readContext:Tt,useCallback:Pf,useContext:Tt,useEffect:cc,useImperativeHandle:Rf,useInsertionEffect:Nf,useLayoutEffect:Tf,useMemo:Af,useReducer:lc,useRef:kf,useState:function(){return lc(ls)},useDebugValue:uc,useDeferredValue:function(t){var i=bt();return De===null?i.memoizedState=t:Of(i,De.memoizedState,t)},useTransition:function(){var t=lc(ls)[0],i=bt().memoizedState;return[t,i]},useMutableSource:yf,useSyncExternalStore:vf,useId:jf,unstable_isNewReconciler:!1};function Bt(t,i){if(t&&t.defaultProps){i=H({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function dc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:H({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ao={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=st(),u=Hn(t),h=fn(l,u);h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,u),i!==null&&(Vt(i,t,u,l),Co(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=st(),u=Hn(t),h=fn(l,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,u),i!==null&&(Vt(i,t,u,l),Co(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=st(),l=Hn(t),u=fn(o,l);u.tag=2,i!=null&&(u.callback=i),i=Un(t,u,l),i!==null&&(Vt(i,t,l,o),Co(i,t,l))}};function Ff(t,i,o,l,u,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,g):i.prototype&&i.prototype.isPureReactComponent?!Yi(o,l)||!Yi(u,h):!0}function Uf(t,i,o){var l=!1,u=Mn,h=i.contextType;return typeof h=="object"&&h!==null?h=Tt(h):(u=ht(i)?cr:Xe.current,l=i.contextTypes,h=(l=l!=null)?Qr(t,u):Mn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ao,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function zf(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ao.enqueueReplaceState(i,i.state,null)}function hc(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Xl(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Tt(h):(h=ht(i)?cr:Xe.current,u.context=Qr(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(dc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Ao.enqueueReplaceState(u,u.state,null),ko(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ii(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function fc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function pc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var q0=typeof WeakMap=="function"?WeakMap:Map;function Bf(t,i,o){o=fn(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Uo||(Uo=!0,bc=l),pc(t,i)},o}function Wf(t,i,o){o=fn(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){pc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){pc(t,i),typeof l!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),o}function Hf(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new q0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=aw.bind(null,t,i,o),i.then(t,t))}function Vf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function $f(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=fn(-1,1),i.tag=2,Un(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var K0=ee.ReactCurrentOwner,ft=!1;function it(t,i,o,l){i.child=t===null?df(i,null,o,l):ei(i,t.child,o,l)}function Gf(t,i,o,l,u){o=o.render;var h=i.ref;return ni(i,u),l=sc(t,i,o,l,h,u),o=oc(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,pn(t,i,u)):(Ie&&o&&Wl(i),i.flags|=1,it(t,i,l,u),i.child)}function qf(t,i,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!Mc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Kf(t,i,h,l,u)):(t=$o(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:Yi,o(g,l)&&t.ref===i.ref)return pn(t,i,u)}return i.flags|=1,t=$n(h,l),t.ref=i.ref,t.return=i,i.child=t}function Kf(t,i,o,l,u){if(t!==null){var h=t.memoizedProps;if(Yi(h,l)&&t.ref===i.ref)if(ft=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(ft=!0);else return i.lanes=t.lanes,pn(t,i,u)}return mc(t,i,o,l,u)}function Yf(t,i,o){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(oi,Ct),Ct|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,_e(oi,Ct),Ct|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,_e(oi,Ct),Ct|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,_e(oi,Ct),Ct|=l;return it(t,i,u,o),i.child}function Qf(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mc(t,i,o,l,u){var h=ht(o)?cr:Xe.current;return h=Qr(i,h),ni(i,u),o=sc(t,i,o,l,h,u),l=oc(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,pn(t,i,u)):(Ie&&l&&Wl(i),i.flags|=1,it(t,i,o,u),i.child)}function Jf(t,i,o,l,u){if(ht(o)){var h=!0;go(i)}else h=!1;if(ni(i,u),i.stateNode===null)jo(t,i),Uf(i,o,l),hc(i,o,l,u),l=!0;else if(t===null){var g=i.stateNode,w=i.memoizedProps;g.props=w;var x=g.context,N=o.contextType;typeof N=="object"&&N!==null?N=Tt(N):(N=ht(o)?cr:Xe.current,N=Qr(i,N));var P=o.getDerivedStateFromProps,j=typeof P=="function"||typeof g.getSnapshotBeforeUpdate=="function";j||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==l||x!==N)&&zf(i,g,l,N),Fn=!1;var b=i.memoizedState;g.state=b,ko(i,l,g,u),x=i.memoizedState,w!==l||b!==x||dt.current||Fn?(typeof P=="function"&&(dc(i,o,P,l),x=i.memoizedState),(w=Fn||Ff(i,o,w,l,b,x,N))?(j||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=x),g.props=l,g.state=x,g.context=N,l=w):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{g=i.stateNode,ff(t,i),w=i.memoizedProps,N=i.type===i.elementType?w:Bt(i.type,w),g.props=N,j=i.pendingProps,b=g.context,x=o.contextType,typeof x=="object"&&x!==null?x=Tt(x):(x=ht(o)?cr:Xe.current,x=Qr(i,x));var B=o.getDerivedStateFromProps;(P=typeof B=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==j||b!==x)&&zf(i,g,l,x),Fn=!1,b=i.memoizedState,g.state=b,ko(i,l,g,u);var V=i.memoizedState;w!==j||b!==V||dt.current||Fn?(typeof B=="function"&&(dc(i,o,B,l),V=i.memoizedState),(N=Fn||Ff(i,o,N,l,b,V,x)||!1)?(P||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,V,x),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,V,x)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&b===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&b===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=V),g.props=l,g.state=V,g.context=x,l=N):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&b===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&b===t.memoizedState||(i.flags|=1024),l=!1)}return gc(t,i,o,l,h,u)}function gc(t,i,o,l,u,h){Qf(t,i);var g=(i.flags&128)!==0;if(!l&&!g)return u&&tf(i,o,!1),pn(t,i,h);l=i.stateNode,K0.current=i;var w=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&g?(i.child=ei(i,t.child,null,h),i.child=ei(i,null,w,h)):it(t,i,w,h),i.memoizedState=l.state,u&&tf(i,o,!0),i.child}function Xf(t){var i=t.stateNode;i.pendingContext?Zh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Zh(t,i.context,!1),Zl(t,i.containerInfo)}function Zf(t,i,o,l,u){return Zr(),Gl(u),i.flags|=256,it(t,i,o,l),i.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ep(t,i,o){var l=i.pendingProps,u=Ne.current,h=!1,g=(i.flags&128)!==0,w;if((w=g)||(w=t!==null&&t.memoizedState===null?!1:(u&2)!==0),w?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),_e(Ne,u&1),t===null)return $l(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=l.children,t=l.fallback,h?(l=i.mode,h=i.child,g={mode:"hidden",children:g},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=Go(g,l,0,null),t=_r(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=vc(o),i.memoizedState=yc,t):_c(i,g));if(u=t.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return Y0(t,i,g,l,w,u,o);if(h){h=l.fallback,g=i.mode,u=t.child,w=u.sibling;var x={mode:"hidden",children:l.children};return(g&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=x,i.deletions=null):(l=$n(u,x),l.subtreeFlags=u.subtreeFlags&14680064),w!==null?h=$n(w,h):(h=_r(h,g,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,g=t.child.memoizedState,g=g===null?vc(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=t.childLanes&~o,i.memoizedState=yc,l}return h=t.child,t=h.sibling,l=$n(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function _c(t,i){return i=Go({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oo(t,i,o,l){return l!==null&&Gl(l),ei(i,t.child,null,o),t=_c(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Y0(t,i,o,l,u,h,g){if(o)return i.flags&256?(i.flags&=-257,l=fc(Error(n(422))),Oo(t,i,g,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Go({mode:"visible",children:l.children},u,0,null),h=_r(h,u,g,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ei(i,t.child,null,g),i.child.memoizedState=vc(g),i.memoizedState=yc,h);if((i.mode&1)===0)return Oo(t,i,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var w=l.dgst;return l=w,h=Error(n(419)),l=fc(h,l,void 0),Oo(t,i,g,l)}if(w=(g&t.childLanes)!==0,ft||w){if(l=We,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|g))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,hn(t,u),Vt(l,t,u,-1))}return Lc(),l=fc(Error(n(421))),Oo(t,i,g,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=lw.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,Et=jn(u.nextSibling),St=i,Ie=!0,zt=null,t!==null&&(It[Nt++]=un,It[Nt++]=dn,It[Nt++]=ur,un=t.id,dn=t.overflow,ur=i),i=_c(i,l.children),i.flags|=4096,i)}function tp(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ql(t.return,i,o)}function wc(t,i,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function np(t,i,o){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(it(t,i,l.children,o),l=Ne.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tp(t,o,i);else if(t.tag===19)tp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(_e(Ne,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&Io(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),wc(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Io(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}wc(i,!0,o,null,h);break;case"together":wc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function jo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function pn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),mr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=$n(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=$n(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Q0(t,i,o){switch(i.tag){case 3:Xf(i),Zr();break;case 5:gf(i);break;case 1:ht(i.type)&&go(i);break;case 4:Zl(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;_e(So,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(_e(Ne,Ne.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?ep(t,i,o):(_e(Ne,Ne.current&1),t=pn(t,i,o),t!==null?t.sibling:null);_e(Ne,Ne.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return np(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(Ne,Ne.current),l)break;return null;case 22:case 23:return i.lanes=0,Yf(t,i,o)}return pn(t,i,o)}var rp,xc,ip,sp;rp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},xc=function(){},ip=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,fr(Zt.current);var h=null;switch(o){case"input":u=Qa(t,u),l=Qa(t,l),h=[];break;case"select":u=H({},u,{value:void 0}),l=H({},l,{value:void 0}),h=[];break;case"textarea":u=Za(t,u),l=Za(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=fo)}tl(o,l);var g;o=null;for(N in u)if(!l.hasOwnProperty(N)&&u.hasOwnProperty(N)&&u[N]!=null)if(N==="style"){var w=u[N];for(g in w)w.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(a.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in l){var x=l[N];if(w=u!=null?u[N]:void 0,l.hasOwnProperty(N)&&x!==w&&(x!=null||w!=null))if(N==="style")if(w){for(g in w)!w.hasOwnProperty(g)||x&&x.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in x)x.hasOwnProperty(g)&&w[g]!==x[g]&&(o||(o={}),o[g]=x[g])}else o||(h||(h=[]),h.push(N,o)),o=x;else N==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,w=w?w.__html:void 0,x!=null&&w!==x&&(h=h||[]).push(N,x)):N==="children"?typeof x!="string"&&typeof x!="number"||(h=h||[]).push(N,""+x):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(a.hasOwnProperty(N)?(x!=null&&N==="onScroll"&&we("scroll",t),h||w===x||(h=[])):(h=h||[]).push(N,x))}o&&(h=h||[]).push("style",o);var N=h;(i.updateQueue=N)&&(i.flags|=4)}},sp=function(t,i,o,l){o!==l&&(i.flags|=4)};function us(t,i){if(!Ie)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function et(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function J0(t,i,o){var l=i.pendingProps;switch(Hl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(i),null;case 1:return ht(i.type)&&mo(),et(i),null;case 3:return l=i.stateNode,ri(),xe(dt),xe(Xe),nc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(wo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zt!==null&&(Ac(zt),zt=null))),xc(t,i),et(i),null;case 5:ec(i);var u=fr(ss.current);if(o=i.type,t!==null&&i.stateNode!=null)ip(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return et(i),null}if(t=fr(Zt.current),wo(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[Xt]=i,l[es]=h,t=(i.mode&1)!==0,o){case"dialog":we("cancel",l),we("close",l);break;case"iframe":case"object":case"embed":we("load",l);break;case"video":case"audio":for(u=0;u<Ji.length;u++)we(Ji[u],l);break;case"source":we("error",l);break;case"img":case"image":case"link":we("error",l),we("load",l);break;case"details":we("toggle",l);break;case"input":Fd(l,h),we("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},we("invalid",l);break;case"textarea":Bd(l,h),we("invalid",l)}tl(o,h),u=null;for(var g in h)if(h.hasOwnProperty(g)){var w=h[g];g==="children"?typeof w=="string"?l.textContent!==w&&(h.suppressHydrationWarning!==!0&&ho(l.textContent,w,t),u=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(h.suppressHydrationWarning!==!0&&ho(l.textContent,w,t),u=["children",""+w]):a.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&we("scroll",l)}switch(o){case"input":Ws(l),zd(l,h,!0);break;case"textarea":Ws(l),Hd(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=fo)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=g.createElement(o,{is:l.is}):(t=g.createElement(o),o==="select"&&(g=t,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):t=g.createElementNS(t,o),t[Xt]=i,t[es]=l,rp(t,i,!1,!1),i.stateNode=t;e:{switch(g=nl(o,l),o){case"dialog":we("cancel",t),we("close",t),u=l;break;case"iframe":case"object":case"embed":we("load",t),u=l;break;case"video":case"audio":for(u=0;u<Ji.length;u++)we(Ji[u],t);u=l;break;case"source":we("error",t),u=l;break;case"img":case"image":case"link":we("error",t),we("load",t),u=l;break;case"details":we("toggle",t),u=l;break;case"input":Fd(t,l),u=Qa(t,l),we("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=H({},l,{value:void 0}),we("invalid",t);break;case"textarea":Bd(t,l),u=Za(t,l),we("invalid",t);break;default:u=l}tl(o,u),w=u;for(h in w)if(w.hasOwnProperty(h)){var x=w[h];h==="style"?qd(t,x):h==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&$d(t,x)):h==="children"?typeof x=="string"?(o!=="textarea"||x!=="")&&Ai(t,x):typeof x=="number"&&Ai(t,""+x):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?x!=null&&h==="onScroll"&&we("scroll",t):x!=null&&K(t,h,x,g))}switch(o){case"input":Ws(t),zd(t,l,!1);break;case"textarea":Ws(t),Hd(t);break;case"option":l.value!=null&&t.setAttribute("value",""+pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Fr(t,!!l.multiple,h,!1):l.defaultValue!=null&&Fr(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=fo)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return et(i),null;case 6:if(t&&i.stateNode!=null)sp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=fr(ss.current),fr(Zt.current),wo(i)){if(l=i.stateNode,o=i.memoizedProps,l[Xt]=i,(h=l.nodeValue!==o)&&(t=St,t!==null))switch(t.tag){case 3:ho(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Xt]=i,i.stateNode=l}return et(i),null;case 13:if(xe(Ne),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Et!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lf(),Zr(),i.flags|=98560,h=!1;else if(h=wo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Zr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;et(i),h=!1}else zt!==null&&(Ac(zt),zt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ne.current&1)!==0?Fe===0&&(Fe=3):Lc())),i.updateQueue!==null&&(i.flags|=4),et(i),null);case 4:return ri(),xc(t,i),t===null&&Xi(i.stateNode.containerInfo),et(i),null;case 10:return Yl(i.type._context),et(i),null;case 17:return ht(i.type)&&mo(),et(i),null;case 19:if(xe(Ne),h=i.memoizedState,h===null)return et(i),null;if(l=(i.flags&128)!==0,g=h.rendering,g===null)if(l)us(h,!1);else{if(Fe!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(g=Io(t),g!==null){for(i.flags|=128,us(h,!1),l=g.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,t=g.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return _e(Ne,Ne.current&1|2),i.child}t=t.sibling}h.tail!==null&&Oe()>ai&&(i.flags|=128,l=!0,us(h,!1),i.lanes=4194304)}else{if(!l)if(t=Io(g),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),us(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ie)return et(i),null}else 2*Oe()-h.renderingStartTime>ai&&o!==1073741824&&(i.flags|=128,l=!0,us(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(o=h.last,o!==null?o.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Oe(),i.sibling=null,o=Ne.current,_e(Ne,l?o&1|2:o&1),i):(et(i),null);case 22:case 23:return jc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Ct&1073741824)!==0&&(et(i),i.subtreeFlags&6&&(i.flags|=8192)):et(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function X0(t,i){switch(Hl(i),i.tag){case 1:return ht(i.type)&&mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ri(),xe(dt),xe(Xe),nc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return ec(i),null;case 13:if(xe(Ne),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Zr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return xe(Ne),null;case 4:return ri(),null;case 10:return Yl(i.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var Lo=!1,tt=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,W=null;function si(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Pe(t,i,l)}else o.current=null}function Sc(t,i,o){try{o()}catch(l){Pe(t,i,l)}}var op=!1;function ew(t,i){if(jl=eo,t=Dh(),Il(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,w=-1,x=-1,N=0,P=0,j=t,b=null;t:for(;;){for(var B;j!==o||u!==0&&j.nodeType!==3||(w=g+u),j!==h||l!==0&&j.nodeType!==3||(x=g+l),j.nodeType===3&&(g+=j.nodeValue.length),(B=j.firstChild)!==null;)b=j,j=B;for(;;){if(j===t)break t;if(b===o&&++N===u&&(w=g),b===h&&++P===l&&(x=g),(B=j.nextSibling)!==null)break;j=b,b=j.parentNode}j=B}o=w===-1||x===-1?null:{start:w,end:x}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ll={focusedElem:t,selectionRange:o},eo=!1,W=i;W!==null;)if(i=W,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,W=t;else for(;W!==null;){i=W;try{var V=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var $=V.memoizedProps,je=V.memoizedState,k=i.stateNode,S=k.getSnapshotBeforeUpdate(i.elementType===i.type?$:Bt(i.type,$),je);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var I=i.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(L){Pe(i,i.return,L)}if(t=i.sibling,t!==null){t.return=i.return,W=t;break}W=i.return}return V=op,op=!1,V}function ds(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Sc(i,o,h)}u=u.next}while(u!==l)}}function Mo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Ec(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function ap(t){var i=t.alternate;i!==null&&(t.alternate=null,ap(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[es],delete i[Ul],delete i[M0],delete i[D0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lp(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=fo));else if(l!==4&&(t=t.child,t!==null))for(Cc(t,i,o),t=t.sibling;t!==null;)Cc(t,i,o),t=t.sibling}function kc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(kc(t,i,o),t=t.sibling;t!==null;)kc(t,i,o),t=t.sibling}var qe=null,Wt=!1;function zn(t,i,o){for(o=o.child;o!==null;)up(t,i,o),o=o.sibling}function up(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ks,o)}catch{}switch(o.tag){case 5:tt||si(o,i);case 6:var l=qe,u=Wt;qe=null,zn(t,i,o),qe=l,Wt=u,qe!==null&&(Wt?(t=qe,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):qe.removeChild(o.stateNode));break;case 18:qe!==null&&(Wt?(t=qe,o=o.stateNode,t.nodeType===8?Fl(t.parentNode,o):t.nodeType===1&&Fl(t,o),Hi(t)):Fl(qe,o.stateNode));break;case 4:l=qe,u=Wt,qe=o.stateNode.containerInfo,Wt=!0,zn(t,i,o),qe=l,Wt=u;break;case 0:case 11:case 14:case 15:if(!tt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&Sc(o,i,g),u=u.next}while(u!==l)}zn(t,i,o);break;case 1:if(!tt&&(si(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(w){Pe(o,i,w)}zn(t,i,o);break;case 21:zn(t,i,o);break;case 22:o.mode&1?(tt=(l=tt)||o.memoizedState!==null,zn(t,i,o),tt=l):zn(t,i,o);break;default:zn(t,i,o)}}function dp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Z0),i.forEach(function(l){var u=cw.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function Ht(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,g=i,w=g;e:for(;w!==null;){switch(w.tag){case 5:qe=w.stateNode,Wt=!1;break e;case 3:qe=w.stateNode.containerInfo,Wt=!0;break e;case 4:qe=w.stateNode.containerInfo,Wt=!0;break e}w=w.return}if(qe===null)throw Error(n(160));up(h,g,u),qe=null,Wt=!1;var x=u.alternate;x!==null&&(x.return=null),u.return=null}catch(N){Pe(u,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)hp(i,t),i=i.sibling}function hp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(i,t),tn(t),l&4){try{ds(3,t,t.return),Mo(3,t)}catch($){Pe(t,t.return,$)}try{ds(5,t,t.return)}catch($){Pe(t,t.return,$)}}break;case 1:Ht(i,t),tn(t),l&512&&o!==null&&si(o,o.return);break;case 5:if(Ht(i,t),tn(t),l&512&&o!==null&&si(o,o.return),t.flags&32){var u=t.stateNode;try{Ai(u,"")}catch($){Pe(t,t.return,$)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,g=o!==null?o.memoizedProps:h,w=t.type,x=t.updateQueue;if(t.updateQueue=null,x!==null)try{w==="input"&&h.type==="radio"&&h.name!=null&&Ud(u,h),nl(w,g);var N=nl(w,h);for(g=0;g<x.length;g+=2){var P=x[g],j=x[g+1];P==="style"?qd(u,j):P==="dangerouslySetInnerHTML"?$d(u,j):P==="children"?Ai(u,j):K(u,P,j,N)}switch(w){case"input":Ja(u,h);break;case"textarea":Wd(u,h);break;case"select":var b=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var B=h.value;B!=null?Fr(u,!!h.multiple,B,!1):b!==!!h.multiple&&(h.defaultValue!=null?Fr(u,!!h.multiple,h.defaultValue,!0):Fr(u,!!h.multiple,h.multiple?[]:"",!1))}u[es]=h}catch($){Pe(t,t.return,$)}}break;case 6:if(Ht(i,t),tn(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch($){Pe(t,t.return,$)}}break;case 3:if(Ht(i,t),tn(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Hi(i.containerInfo)}catch($){Pe(t,t.return,$)}break;case 4:Ht(i,t),tn(t);break;case 13:Ht(i,t),tn(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Tc=Oe())),l&4&&dp(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(tt=(N=tt)||P,Ht(i,t),tt=N):Ht(i,t),tn(t),l&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!P&&(t.mode&1)!==0)for(W=t,P=t.child;P!==null;){for(j=W=P;W!==null;){switch(b=W,B=b.child,b.tag){case 0:case 11:case 14:case 15:ds(4,b,b.return);break;case 1:si(b,b.return);var V=b.stateNode;if(typeof V.componentWillUnmount=="function"){l=b,o=b.return;try{i=l,V.props=i.memoizedProps,V.state=i.memoizedState,V.componentWillUnmount()}catch($){Pe(l,o,$)}}break;case 5:si(b,b.return);break;case 22:if(b.memoizedState!==null){mp(j);continue}}B!==null?(B.return=b,W=B):mp(j)}P=P.sibling}e:for(P=null,j=t;;){if(j.tag===5){if(P===null){P=j;try{u=j.stateNode,N?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(w=j.stateNode,x=j.memoizedProps.style,g=x!=null&&x.hasOwnProperty("display")?x.display:null,w.style.display=Gd("display",g))}catch($){Pe(t,t.return,$)}}}else if(j.tag===6){if(P===null)try{j.stateNode.nodeValue=N?"":j.memoizedProps}catch($){Pe(t,t.return,$)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===t)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===t)break e;for(;j.sibling===null;){if(j.return===null||j.return===t)break e;P===j&&(P=null),j=j.return}P===j&&(P=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Ht(i,t),tn(t),l&4&&dp(t);break;case 21:break;default:Ht(i,t),tn(t)}}function tn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(lp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ai(u,""),l.flags&=-33);var h=cp(t);kc(t,h,u);break;case 3:case 4:var g=l.stateNode.containerInfo,w=cp(t);Cc(t,w,g);break;default:throw Error(n(161))}}catch(x){Pe(t,t.return,x)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function tw(t,i,o){W=t,fp(t)}function fp(t,i,o){for(var l=(t.mode&1)!==0;W!==null;){var u=W,h=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||Lo;if(!g){var w=u.alternate,x=w!==null&&w.memoizedState!==null||tt;w=Lo;var N=tt;if(Lo=g,(tt=x)&&!N)for(W=u;W!==null;)g=W,x=g.child,g.tag===22&&g.memoizedState!==null?gp(u):x!==null?(x.return=g,W=x):gp(u);for(;h!==null;)W=h,fp(h),h=h.sibling;W=u,Lo=w,tt=N}pp(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,W=h):pp(t)}}function pp(t){for(;W!==null;){var i=W;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:tt||Mo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!tt)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:Bt(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&mf(i,h,l);break;case 3:var g=i.updateQueue;if(g!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}mf(i,g,o)}break;case 5:var w=i.stateNode;if(o===null&&i.flags&4){o=w;var x=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&o.focus();break;case"img":x.src&&(o.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var P=N.memoizedState;if(P!==null){var j=P.dehydrated;j!==null&&Hi(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}tt||i.flags&512&&Ec(i)}catch(b){Pe(i,i.return,b)}}if(i===t){W=null;break}if(o=i.sibling,o!==null){o.return=i.return,W=o;break}W=i.return}}function mp(t){for(;W!==null;){var i=W;if(i===t){W=null;break}var o=i.sibling;if(o!==null){o.return=i.return,W=o;break}W=i.return}}function gp(t){for(;W!==null;){var i=W;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Mo(4,i)}catch(x){Pe(i,o,x)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(x){Pe(i,u,x)}}var h=i.return;try{Ec(i)}catch(x){Pe(i,h,x)}break;case 5:var g=i.return;try{Ec(i)}catch(x){Pe(i,g,x)}}}catch(x){Pe(i,i.return,x)}if(i===t){W=null;break}var w=i.sibling;if(w!==null){w.return=i.return,W=w;break}W=i.return}}var nw=Math.ceil,Do=ee.ReactCurrentDispatcher,Ic=ee.ReactCurrentOwner,Rt=ee.ReactCurrentBatchConfig,ce=0,We=null,Le=null,Ke=0,Ct=0,oi=Ln(0),Fe=0,hs=null,mr=0,Fo=0,Nc=0,fs=null,pt=null,Tc=0,ai=1/0,mn=null,Uo=!1,bc=null,Bn=null,zo=!1,Wn=null,Bo=0,ps=0,Rc=null,Wo=-1,Ho=0;function st(){return(ce&6)!==0?Oe():Wo!==-1?Wo:Wo=Oe()}function Hn(t){return(t.mode&1)===0?1:(ce&2)!==0&&Ke!==0?Ke&-Ke:U0.transition!==null?(Ho===0&&(Ho=lh()),Ho):(t=me,t!==0||(t=window.event,t=t===void 0?16:yh(t.type)),t)}function Vt(t,i,o,l){if(50<ps)throw ps=0,Rc=null,Error(n(185));Fi(t,o,l),((ce&2)===0||t!==We)&&(t===We&&((ce&2)===0&&(Fo|=o),Fe===4&&Vn(t,Ke)),mt(t,l),o===1&&ce===0&&(i.mode&1)===0&&(ai=Oe()+500,yo&&Dn()))}function mt(t,i){var o=t.callbackNode;U_(t,i);var l=Js(t,t===We?Ke:0);if(l===0)o!==null&&sh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&sh(o),i===1)t.tag===0?F0(vp.bind(null,t)):nf(vp.bind(null,t)),j0(function(){(ce&6)===0&&Dn()}),o=null;else{switch(ch(l)){case 1:o=cl;break;case 4:o=oh;break;case 16:o=qs;break;case 536870912:o=ah;break;default:o=qs}o=Ip(o,yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function yp(t,i){if(Wo=-1,Ho=0,(ce&6)!==0)throw Error(n(327));var o=t.callbackNode;if(li()&&t.callbackNode!==o)return null;var l=Js(t,t===We?Ke:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Vo(t,l);else{i=l;var u=ce;ce|=2;var h=wp();(We!==t||Ke!==i)&&(mn=null,ai=Oe()+500,yr(t,i));do try{sw();break}catch(w){_p(t,w)}while(!0);Kl(),Do.current=h,ce=u,Le!==null?i=0:(We=null,Ke=0,i=Fe)}if(i!==0){if(i===2&&(u=ul(t),u!==0&&(l=u,i=Pc(t,u))),i===1)throw o=hs,yr(t,0),Vn(t,l),mt(t,Oe()),o;if(i===6)Vn(t,l);else{if(u=t.current.alternate,(l&30)===0&&!rw(u)&&(i=Vo(t,l),i===2&&(h=ul(t),h!==0&&(l=h,i=Pc(t,h))),i===1))throw o=hs,yr(t,0),Vn(t,l),mt(t,Oe()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:vr(t,pt,mn);break;case 3:if(Vn(t,l),(l&130023424)===l&&(i=Tc+500-Oe(),10<i)){if(Js(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){st(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Dl(vr.bind(null,t,pt,mn),i);break}vr(t,pt,mn);break;case 4:if(Vn(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var g=31-Ft(l);h=1<<g,g=i[g],g>u&&(u=g),l&=~h}if(l=u,l=Oe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*nw(l/1960))-l,10<l){t.timeoutHandle=Dl(vr.bind(null,t,pt,mn),l);break}vr(t,pt,mn);break;case 5:vr(t,pt,mn);break;default:throw Error(n(329))}}}return mt(t,Oe()),t.callbackNode===o?yp.bind(null,t):null}function Pc(t,i){var o=fs;return t.current.memoizedState.isDehydrated&&(yr(t,i).flags|=256),t=Vo(t,i),t!==2&&(i=pt,pt=o,i!==null&&Ac(i)),t}function Ac(t){pt===null?pt=t:pt.push.apply(pt,t)}function rw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!Ut(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vn(t,i){for(i&=~Nc,i&=~Fo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Ft(i),l=1<<o;t[o]=-1,i&=~l}}function vp(t){if((ce&6)!==0)throw Error(n(327));li();var i=Js(t,0);if((i&1)===0)return mt(t,Oe()),null;var o=Vo(t,i);if(t.tag!==0&&o===2){var l=ul(t);l!==0&&(i=l,o=Pc(t,l))}if(o===1)throw o=hs,yr(t,0),Vn(t,i),mt(t,Oe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,vr(t,pt,mn),mt(t,Oe()),null}function Oc(t,i){var o=ce;ce|=1;try{return t(i)}finally{ce=o,ce===0&&(ai=Oe()+500,yo&&Dn())}}function gr(t){Wn!==null&&Wn.tag===0&&(ce&6)===0&&li();var i=ce;ce|=1;var o=Rt.transition,l=me;try{if(Rt.transition=null,me=1,t)return t()}finally{me=l,Rt.transition=o,ce=i,(ce&6)===0&&Dn()}}function jc(){Ct=oi.current,xe(oi)}function yr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,O0(o)),Le!==null)for(o=Le.return;o!==null;){var l=o;switch(Hl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&mo();break;case 3:ri(),xe(dt),xe(Xe),nc();break;case 5:ec(l);break;case 4:ri();break;case 13:xe(Ne);break;case 19:xe(Ne);break;case 10:Yl(l.type._context);break;case 22:case 23:jc()}o=o.return}if(We=t,Le=t=$n(t.current,null),Ke=Ct=i,Fe=0,hs=null,Nc=Fo=mr=0,pt=fs=null,hr!==null){for(i=0;i<hr.length;i++)if(o=hr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var g=h.next;h.next=u,l.next=g}o.pending=l}hr=null}return t}function _p(t,i){do{var o=Le;try{if(Kl(),No.current=Po,To){for(var l=Te.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}To=!1}if(pr=0,Be=De=Te=null,os=!1,as=0,Ic.current=null,o===null||o.return===null){Fe=1,hs=i,Le=null;break}e:{var h=t,g=o.return,w=o,x=i;if(i=Ke,w.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var N=x,P=w,j=P.tag;if((P.mode&1)===0&&(j===0||j===11||j===15)){var b=P.alternate;b?(P.updateQueue=b.updateQueue,P.memoizedState=b.memoizedState,P.lanes=b.lanes):(P.updateQueue=null,P.memoizedState=null)}var B=Vf(g);if(B!==null){B.flags&=-257,$f(B,g,w,h,i),B.mode&1&&Hf(h,N,i),i=B,x=N;var V=i.updateQueue;if(V===null){var $=new Set;$.add(x),i.updateQueue=$}else V.add(x);break e}else{if((i&1)===0){Hf(h,N,i),Lc();break e}x=Error(n(426))}}else if(Ie&&w.mode&1){var je=Vf(g);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),$f(je,g,w,h,i),Gl(ii(x,w));break e}}h=x=ii(x,w),Fe!==4&&(Fe=2),fs===null?fs=[h]:fs.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var k=Bf(h,x,i);pf(h,k);break e;case 1:w=x;var S=h.type,I=h.stateNode;if((h.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Bn===null||!Bn.has(I)))){h.flags|=65536,i&=-i,h.lanes|=i;var L=Wf(h,w,i);pf(h,L);break e}}h=h.return}while(h!==null)}Sp(o)}catch(G){i=G,Le===o&&o!==null&&(Le=o=o.return);continue}break}while(!0)}function wp(){var t=Do.current;return Do.current=Po,t===null?Po:t}function Lc(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||(mr&268435455)===0&&(Fo&268435455)===0||Vn(We,Ke)}function Vo(t,i){var o=ce;ce|=2;var l=wp();(We!==t||Ke!==i)&&(mn=null,yr(t,i));do try{iw();break}catch(u){_p(t,u)}while(!0);if(Kl(),ce=o,Do.current=l,Le!==null)throw Error(n(261));return We=null,Ke=0,Fe}function iw(){for(;Le!==null;)xp(Le)}function sw(){for(;Le!==null&&!R_();)xp(Le)}function xp(t){var i=kp(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,i===null?Sp(t):Le=i,Ic.current=null}function Sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=J0(o,i,Ct),o!==null){Le=o;return}}else{if(o=X0(o,i),o!==null){o.flags&=32767,Le=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Le=null;return}}if(i=i.sibling,i!==null){Le=i;return}Le=i=t}while(i!==null);Fe===0&&(Fe=5)}function vr(t,i,o){var l=me,u=Rt.transition;try{Rt.transition=null,me=1,ow(t,i,o,l)}finally{Rt.transition=u,me=l}return null}function ow(t,i,o,l){do li();while(Wn!==null);if((ce&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(z_(t,h),t===We&&(Le=We=null,Ke=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||zo||(zo=!0,Ip(qs,function(){return li(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Rt.transition,Rt.transition=null;var g=me;me=1;var w=ce;ce|=4,Ic.current=null,ew(t,o),hp(o,t),I0(Ll),eo=!!jl,Ll=jl=null,t.current=o,tw(o),P_(),ce=w,me=g,Rt.transition=h}else t.current=o;if(zo&&(zo=!1,Wn=t,Bo=u),h=t.pendingLanes,h===0&&(Bn=null),j_(o.stateNode),mt(t,Oe()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Uo)throw Uo=!1,t=bc,bc=null,t;return(Bo&1)!==0&&t.tag!==0&&li(),h=t.pendingLanes,(h&1)!==0?t===Rc?ps++:(ps=0,Rc=t):ps=0,Dn(),null}function li(){if(Wn!==null){var t=ch(Bo),i=Rt.transition,o=me;try{if(Rt.transition=null,me=16>t?16:t,Wn===null)var l=!1;else{if(t=Wn,Wn=null,Bo=0,(ce&6)!==0)throw Error(n(331));var u=ce;for(ce|=4,W=t.current;W!==null;){var h=W,g=h.child;if((W.flags&16)!==0){var w=h.deletions;if(w!==null){for(var x=0;x<w.length;x++){var N=w[x];for(W=N;W!==null;){var P=W;switch(P.tag){case 0:case 11:case 15:ds(8,P,h)}var j=P.child;if(j!==null)j.return=P,W=j;else for(;W!==null;){P=W;var b=P.sibling,B=P.return;if(ap(P),P===N){W=null;break}if(b!==null){b.return=B,W=b;break}W=B}}}var V=h.alternate;if(V!==null){var $=V.child;if($!==null){V.child=null;do{var je=$.sibling;$.sibling=null,$=je}while($!==null)}}W=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,W=g;else e:for(;W!==null;){if(h=W,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ds(9,h,h.return)}var k=h.sibling;if(k!==null){k.return=h.return,W=k;break e}W=h.return}}var S=t.current;for(W=S;W!==null;){g=W;var I=g.child;if((g.subtreeFlags&2064)!==0&&I!==null)I.return=g,W=I;else e:for(g=S;W!==null;){if(w=W,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Mo(9,w)}}catch(G){Pe(w,w.return,G)}if(w===g){W=null;break e}var L=w.sibling;if(L!==null){L.return=w.return,W=L;break e}W=w.return}}if(ce=u,Dn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ks,t)}catch{}l=!0}return l}finally{me=o,Rt.transition=i}}return!1}function Ep(t,i,o){i=ii(o,i),i=Bf(t,i,1),t=Un(t,i,1),i=st(),t!==null&&(Fi(t,1,i),mt(t,i))}function Pe(t,i,o){if(t.tag===3)Ep(t,t,o);else for(;i!==null;){if(i.tag===3){Ep(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Bn===null||!Bn.has(l))){t=ii(o,t),t=Wf(i,t,1),i=Un(i,t,1),t=st(),i!==null&&(Fi(i,1,t),mt(i,t));break}}i=i.return}}function aw(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=st(),t.pingedLanes|=t.suspendedLanes&o,We===t&&(Ke&o)===o&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>Oe()-Tc?yr(t,0):Nc|=o),mt(t,i)}function Cp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qs,Qs<<=1,(Qs&130023424)===0&&(Qs=4194304)));var o=st();t=hn(t,i),t!==null&&(Fi(t,i,o),mt(t,o))}function lw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Cp(t,o)}function cw(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Cp(t,o)}var kp;kp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||dt.current)ft=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ft=!1,Q0(t,i,o);ft=(t.flags&131072)!==0}else ft=!1,Ie&&(i.flags&1048576)!==0&&rf(i,_o,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;jo(t,i),t=i.pendingProps;var u=Qr(i,Xe.current);ni(i,o),u=sc(null,i,l,t,u,o);var h=oc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ht(l)?(h=!0,go(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Xl(i),u.updater=Ao,i.stateNode=u,u._reactInternals=i,hc(i,l,t,o),i=gc(null,i,l,!0,h,o)):(i.tag=0,Ie&&h&&Wl(i),it(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(jo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=dw(l),t=Bt(l,t),u){case 0:i=mc(null,i,l,t,o);break e;case 1:i=Jf(null,i,l,t,o);break e;case 11:i=Gf(null,i,l,t,o);break e;case 14:i=qf(null,i,l,Bt(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Bt(l,u),mc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Bt(l,u),Jf(t,i,l,u,o);case 3:e:{if(Xf(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,ff(t,i),ko(i,l,null,o);var g=i.memoizedState;if(l=g.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=ii(Error(n(423)),i),i=Zf(t,i,l,o,u);break e}else if(l!==u){u=ii(Error(n(424)),i),i=Zf(t,i,l,o,u);break e}else for(Et=jn(i.stateNode.containerInfo.firstChild),St=i,Ie=!0,zt=null,o=df(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Zr(),l===u){i=pn(t,i,o);break e}it(t,i,l,o)}i=i.child}return i;case 5:return gf(i),t===null&&$l(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,g=u.children,Ml(l,u)?g=null:h!==null&&Ml(l,h)&&(i.flags|=32),Qf(t,i),it(t,i,g,o),i.child;case 6:return t===null&&$l(i),null;case 13:return ep(t,i,o);case 4:return Zl(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ei(i,null,l,o):it(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Bt(l,u),Gf(t,i,l,u,o);case 7:return it(t,i,i.pendingProps,o),i.child;case 8:return it(t,i,i.pendingProps.children,o),i.child;case 12:return it(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,g=u.value,_e(So,l._currentValue),l._currentValue=g,h!==null)if(Ut(h.value,g)){if(h.children===u.children&&!dt.current){i=pn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var w=h.dependencies;if(w!==null){g=h.child;for(var x=w.firstContext;x!==null;){if(x.context===l){if(h.tag===1){x=fn(-1,o&-o),x.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var P=N.pending;P===null?x.next=x:(x.next=P.next,P.next=x),N.pending=x}}h.lanes|=o,x=h.alternate,x!==null&&(x.lanes|=o),Ql(h.return,o,i),w.lanes|=o;break}x=x.next}}else if(h.tag===10)g=h.type===i.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(n(341));g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),Ql(g,o,i),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===i){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}it(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ni(i,o),u=Tt(u),l=l(u),i.flags|=1,it(t,i,l,o),i.child;case 14:return l=i.type,u=Bt(l,i.pendingProps),u=Bt(l.type,u),qf(t,i,l,u,o);case 15:return Kf(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Bt(l,u),jo(t,i),i.tag=1,ht(l)?(t=!0,go(i)):t=!1,ni(i,o),Uf(i,l,u),hc(i,l,u,o),gc(null,i,l,!0,t,o);case 19:return np(t,i,o);case 22:return Yf(t,i,o)}throw Error(n(156,i.tag))};function Ip(t,i){return ih(t,i)}function uw(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,i,o,l){return new uw(t,i,o,l)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dw(t){if(typeof t=="function")return Mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Je)return 11;if(t===_t)return 14}return 2}function $n(t,i){var o=t.alternate;return o===null?(o=Pt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $o(t,i,o,l,u,h){var g=2;if(l=t,typeof t=="function")Mc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case ze:return _r(o.children,u,h,i);case be:g=8,u|=8;break;case Lt:return t=Pt(12,o,i,u|2),t.elementType=Lt,t.lanes=h,t;case Ge:return t=Pt(13,o,i,u),t.elementType=Ge,t.lanes=h,t;case ct:return t=Pt(19,o,i,u),t.elementType=ct,t.lanes=h,t;case Re:return Go(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mt:g=10;break e;case Dt:g=9;break e;case Je:g=11;break e;case _t:g=14;break e;case ut:g=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Pt(g,o,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function _r(t,i,o,l){return t=Pt(7,t,l,i),t.lanes=o,t}function Go(t,i,o,l){return t=Pt(22,t,l,i),t.elementType=Re,t.lanes=o,t.stateNode={isHidden:!1},t}function Dc(t,i,o){return t=Pt(6,t,null,i),t.lanes=o,t}function Fc(t,i,o){return i=Pt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function hw(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Uc(t,i,o,l,u,h,g,w,x){return t=new hw(t,i,o,w,x),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Pt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(h),t}function fw(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Np(t){if(!t)return Mn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ht(o))return ef(t,o,i)}return i}function Tp(t,i,o,l,u,h,g,w,x){return t=Uc(o,l,!0,t,u,h,g,w,x),t.context=Np(null),o=t.current,l=st(),u=Hn(o),h=fn(l,u),h.callback=i??null,Un(o,h,u),t.current.lanes=u,Fi(t,u,l),mt(t,l),t}function qo(t,i,o,l){var u=i.current,h=st(),g=Hn(u);return o=Np(o),i.context===null?i.context=o:i.pendingContext=o,i=fn(h,g),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Un(u,i,g),t!==null&&(Vt(t,u,g,h),Co(t,u,g)),g}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function zc(t,i){bp(t,i),(t=t.alternate)&&bp(t,i)}function pw(){return null}var Rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bc(t){this._internalRoot=t}Yo.prototype.render=Bc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qo(t,i,null,null)},Yo.prototype.unmount=Bc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;gr(function(){qo(null,t,null,null)}),i[ln]=null}};function Yo(t){this._internalRoot=t}Yo.prototype.unstable_scheduleHydration=function(t){if(t){var i=hh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Pn.length&&i!==0&&i<Pn[o].priority;o++);Pn.splice(o,0,t),o===0&&mh(t)}};function Wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function mw(t,i,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var N=Ko(g);h.call(N)}}var g=Tp(i,l,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=g,t[ln]=g.current,Xi(t.nodeType===8?t.parentNode:t),gr(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var w=l;l=function(){var N=Ko(x);w.call(N)}}var x=Uc(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=x,t[ln]=x.current,Xi(t.nodeType===8?t.parentNode:t),gr(function(){qo(i,x,o,l)}),x}function Jo(t,i,o,l,u){var h=o._reactRootContainer;if(h){var g=h;if(typeof u=="function"){var w=u;u=function(){var x=Ko(g);w.call(x)}}qo(i,g,t,u)}else g=mw(o,i,t,u,l);return Ko(g)}uh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Di(i.pendingLanes);o!==0&&(hl(i,o|1),mt(i,Oe()),(ce&6)===0&&(ai=Oe()+500,Dn()))}break;case 13:gr(function(){var l=hn(t,1);if(l!==null){var u=st();Vt(l,t,1,u)}}),zc(t,1)}},fl=function(t){if(t.tag===13){var i=hn(t,134217728);if(i!==null){var o=st();Vt(i,t,134217728,o)}zc(t,134217728)}},dh=function(t){if(t.tag===13){var i=Hn(t),o=hn(t,i);if(o!==null){var l=st();Vt(o,t,i,l)}zc(t,i)}},hh=function(){return me},fh=function(t,i){var o=me;try{return me=t,i()}finally{me=o}},sl=function(t,i,o){switch(i){case"input":if(Ja(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=po(l);if(!u)throw Error(n(90));Dd(l),Ja(l,u)}}}break;case"textarea":Wd(t,o);break;case"select":i=o.value,i!=null&&Fr(t,!!o.multiple,i,!1)}},Jd=Oc,Xd=gr;var gw={usingClientEntryPoint:!1,Events:[ts,Kr,po,Yd,Qd,Oc]},ms={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nh(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Ks=Xo.inject(yw),Jt=Xo}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw,gt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(i))throw Error(n(200));return fw(t,i,null,o)},gt.createRoot=function(t,i){if(!Wc(t))throw Error(n(299));var o=!1,l="",u=Rp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=Uc(t,1,!1,null,null,o,!1,l,u),t[ln]=i.current,Xi(t.nodeType===8?t.parentNode:t),new Bc(i)},gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=nh(i),t=t===null?null:t.stateNode,t},gt.flushSync=function(t){return gr(t)},gt.hydrate=function(t,i,o){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!0,o)},gt.hydrateRoot=function(t,i,o){if(!Wc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",g=Rp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),i=Tp(i,null,t,1,o??null,u,!1,h,g),t[ln]=i.current,Xi(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new Yo(i)},gt.render=function(t,i,o){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!1,o)},gt.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(n(40));return t._reactRootContainer?(gr(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1},gt.unstable_batchedUpdates=Oc,gt.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Qo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Jo(t,i,o,!1,l)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var Up;function wg(){if(Up)return $c.exports;Up=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),$c.exports=Iw(),$c.exports}var zp;function Nw(){if(zp)return Zo;zp=1;var r=wg();return Zo.createRoot=r.createRoot,Zo.hydrateRoot=r.hydrateRoot,Zo}var Tw=Nw();const bw=vg(Tw);wg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Is.apply(this,arguments)}var Xn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Xn||(Xn={}));const Bp="popstate";function Rw(r){r===void 0&&(r={});function e(s,a){let{pathname:c,search:d,hash:p}=s.location;return fu("",{pathname:c,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){return typeof a=="string"?a:ua(a)}return Aw(e,n,null,r)}function Me(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Wu(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Pw(){return Math.random().toString(36).substr(2,8)}function Wp(r,e){return{usr:r.state,key:r.key,idx:e}}function fu(r,e,n,s){return n===void 0&&(n=null),Is({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Si(e):e,{state:n,key:e&&e.key||s||Pw()})}function ua(r){let{pathname:e="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Si(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function Aw(r,e,n,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:c=!1}=s,d=a.history,p=Xn.Pop,m=null,y=_();y==null&&(y=0,d.replaceState(Is({},d.state,{idx:y}),""));function _(){return(d.state||{idx:null}).idx}function v(){p=Xn.Pop;let T=_(),F=T==null?null:T-y;y=T,m&&m({action:p,location:O.location,delta:F})}function E(T,F){p=Xn.Push;let q=fu(O.location,T,F);y=_()+1;let K=Wp(q,y),ee=O.createHref(q);try{d.pushState(K,"",ee)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;a.location.assign(ee)}c&&m&&m({action:p,location:O.location,delta:1})}function A(T,F){p=Xn.Replace;let q=fu(O.location,T,F);y=_();let K=Wp(q,y),ee=O.createHref(q);d.replaceState(K,"",ee),c&&m&&m({action:p,location:O.location,delta:0})}function M(T){let F=a.location.origin!=="null"?a.location.origin:a.location.href,q=typeof T=="string"?T:ua(T);return q=q.replace(/ $/,"%20"),Me(F,"No window.location.(origin|href) available to create URL for href: "+q),new URL(q,F)}let O={get action(){return p},get location(){return r(a,d)},listen(T){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(Bp,v),m=T,()=>{a.removeEventListener(Bp,v),m=null}},createHref(T){return e(a,T)},createURL:M,encodeLocation(T){let F=M(T);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:E,replace:A,go(T){return d.go(T)}};return O}var Hp;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Hp||(Hp={}));function Ow(r,e,n){return n===void 0&&(n="/"),jw(r,e,n)}function jw(r,e,n,s){let a=typeof e=="string"?Si(e):e,c=Hu(a.pathname||"/",n);if(c==null)return null;let d=xg(r);Lw(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let y=qw(c);p=Vw(d[m],y)}return p}function xg(r,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let a=(c,d,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(Me(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let y=Zn([s,m.relativePath]),_=n.concat(m);c.children&&c.children.length>0&&(Me(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),xg(c.children,e,_,y)),!(c.path==null&&!c.index)&&e.push({path:y,score:Ww(y,c.index),routesMeta:_})};return r.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))a(c,d);else for(let m of Sg(c.path))a(c,d,m)}),e}function Sg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,a=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return a?[c,""]:[c];let d=Sg(s.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),a&&p.push(...d),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function Lw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:Hw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Mw=/^:[\w-]+$/,Dw=3,Fw=2,Uw=1,zw=10,Bw=-2,Vp=r=>r==="*";function Ww(r,e){let n=r.split("/"),s=n.length;return n.some(Vp)&&(s+=Bw),e&&(s+=Fw),n.filter(a=>!Vp(a)).reduce((a,c)=>a+(Mw.test(c)?Dw:c===""?Uw:zw),s)}function Hw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function Vw(r,e,n){let{routesMeta:s}=r,a={},c="/",d=[];for(let p=0;p<s.length;++p){let m=s[p],y=p===s.length-1,_=c==="/"?e:e.slice(c.length)||"/",v=$w({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},_),E=m.route;if(!v)return null;Object.assign(a,v.params),d.push({params:a,pathname:Zn([c,v.pathname]),pathnameBase:Xw(Zn([c,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(c=Zn([c,v.pathnameBase]))}return d}function $w(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Gw(r.path,r.caseSensitive,r.end),a=e.match(n);if(!a)return null;let c=a[0],d=c.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:s.reduce((y,_,v)=>{let{paramName:E,isOptional:A}=_;if(E==="*"){let O=p[v]||"";d=c.slice(0,c.length-O.length).replace(/(.)\/+$/,"$1")}const M=p[v];return A&&!M?y[E]=void 0:y[E]=(M||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:d,pattern:r}}function Gw(r,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wu(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function qw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wu(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Hu(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}const Kw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yw=r=>Kw.test(r);function Qw(r,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:a=""}=typeof r=="string"?Si(r):r,c;if(n)if(Yw(n))c=n;else{if(n.includes("//")){let d=n;n=n.replace(/\/\/+/g,"/"),Wu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+n))}n.startsWith("/")?c=$p(n.substring(1),"/"):c=$p(n,e)}else c=e;return{pathname:c,search:Zw(s),hash:ex(a)}}function $p(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Kc(r,e,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Eg(r,e){let n=Jw(r);return e?n.map((s,a)=>a===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function Cg(r,e,n,s){s===void 0&&(s=!1);let a;typeof r=="string"?a=Si(r):(a=Is({},r),Me(!a.pathname||!a.pathname.includes("?"),Kc("?","pathname","search",a)),Me(!a.pathname||!a.pathname.includes("#"),Kc("#","pathname","hash",a)),Me(!a.search||!a.search.includes("#"),Kc("#","search","hash",a)));let c=r===""||a.pathname==="",d=c?"/":a.pathname,p;if(d==null)p=n;else{let v=e.length-1;if(!s&&d.startsWith("..")){let E=d.split("/");for(;E[0]==="..";)E.shift(),v-=1;a.pathname=E.join("/")}p=v>=0?e[v]:"/"}let m=Qw(a,p),y=d&&d!=="/"&&d.endsWith("/"),_=(c||d===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(y||_)&&(m.pathname+="/"),m}const Zn=r=>r.join("/").replace(/\/\/+/g,"/"),Xw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Zw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,ex=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function tx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const kg=["post","put","patch","delete"];new Set(kg);const nx=["get",...kg];new Set(nx);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Ns.apply(this,arguments)}const Vu=D.createContext(null),rx=D.createContext(null),Pr=D.createContext(null),Aa=D.createContext(null),Ar=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Ig=D.createContext(null);function ix(r,e){let{relative:n}=e===void 0?{}:e;Os()||Me(!1);let{basename:s,navigator:a}=D.useContext(Pr),{hash:c,pathname:d,search:p}=Tg(r,{relative:n}),m=d;return s!=="/"&&(m=d==="/"?s:Zn([s,d])),a.createHref({pathname:m,search:p,hash:c})}function Os(){return D.useContext(Aa)!=null}function Or(){return Os()||Me(!1),D.useContext(Aa).location}function Ng(r){D.useContext(Pr).static||D.useLayoutEffect(r)}function Oa(){let{isDataRoute:r}=D.useContext(Ar);return r?yx():sx()}function sx(){Os()||Me(!1);let r=D.useContext(Vu),{basename:e,future:n,navigator:s}=D.useContext(Pr),{matches:a}=D.useContext(Ar),{pathname:c}=Or(),d=JSON.stringify(Eg(a,n.v7_relativeSplatPath)),p=D.useRef(!1);return Ng(()=>{p.current=!0}),D.useCallback(function(y,_){if(_===void 0&&(_={}),!p.current)return;if(typeof y=="number"){s.go(y);return}let v=Cg(y,JSON.parse(d),c,_.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Zn([e,v.pathname])),(_.replace?s.replace:s.push)(v,_.state,_)},[e,s,d,c,r])}function Tg(r,e){let{relative:n}=e===void 0?{}:e,{future:s}=D.useContext(Pr),{matches:a}=D.useContext(Ar),{pathname:c}=Or(),d=JSON.stringify(Eg(a,s.v7_relativeSplatPath));return D.useMemo(()=>Cg(r,JSON.parse(d),c,n==="path"),[r,d,c,n])}function ox(r,e){return ax(r,e)}function ax(r,e,n,s){Os()||Me(!1);let{navigator:a}=D.useContext(Pr),{matches:c}=D.useContext(Ar),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let m=d?d.pathnameBase:"/";d&&d.route;let y=Or(),_;if(e){var v;let T=typeof e=="string"?Si(e):e;m==="/"||(v=T.pathname)!=null&&v.startsWith(m)||Me(!1),_=T}else _=y;let E=_.pathname||"/",A=E;if(m!=="/"){let T=m.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(T.length).join("/")}let M=Ow(r,{pathname:A}),O=hx(M&&M.map(T=>Object.assign({},T,{params:Object.assign({},p,T.params),pathname:Zn([m,a.encodeLocation?a.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?m:Zn([m,a.encodeLocation?a.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),c,n,s);return e&&O?D.createElement(Aa.Provider,{value:{location:Ns({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Xn.Pop}},O):O}function lx(){let r=gx(),e=tx(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:a},n):null,null)}const cx=D.createElement(lx,null);class ux extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Ar.Provider,{value:this.props.routeContext},D.createElement(Ig.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dx(r){let{routeContext:e,match:n,children:s}=r,a=D.useContext(Vu);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Ar.Provider,{value:e},s)}function hx(r,e,n,s){var a;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var c;if(!n)return null;if(n.errors)r=n.matches;else if((c=s)!=null&&c.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let d=r,p=(a=n)==null?void 0:a.errors;if(p!=null){let _=d.findIndex(v=>v.route.id&&(p==null?void 0:p[v.route.id])!==void 0);_>=0||Me(!1),d=d.slice(0,Math.min(d.length,_+1))}let m=!1,y=-1;if(n&&s&&s.v7_partialHydration)for(let _=0;_<d.length;_++){let v=d[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=_),v.route.id){let{loaderData:E,errors:A}=n,M=v.route.loader&&E[v.route.id]===void 0&&(!A||A[v.route.id]===void 0);if(v.route.lazy||M){m=!0,y>=0?d=d.slice(0,y+1):d=[d[0]];break}}}return d.reduceRight((_,v,E)=>{let A,M=!1,O=null,T=null;n&&(A=p&&v.route.id?p[v.route.id]:void 0,O=v.route.errorElement||cx,m&&(y<0&&E===0?(vx("route-fallback"),M=!0,T=null):y===E&&(M=!0,T=v.route.hydrateFallbackElement||null)));let F=e.concat(d.slice(0,E+1)),q=()=>{let K;return A?K=O:M?K=T:v.route.Component?K=D.createElement(v.route.Component,null):v.route.element?K=v.route.element:K=_,D.createElement(dx,{match:v,routeContext:{outlet:_,matches:F,isDataRoute:n!=null},children:K})};return n&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?D.createElement(ux,{location:n.location,revalidation:n.revalidation,component:O,error:A,children:q(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):q()},null)}var bg=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(bg||{}),Rg=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Rg||{});function fx(r){let e=D.useContext(Vu);return e||Me(!1),e}function px(r){let e=D.useContext(rx);return e||Me(!1),e}function mx(r){let e=D.useContext(Ar);return e||Me(!1),e}function Pg(r){let e=mx(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function gx(){var r;let e=D.useContext(Ig),n=px(),s=Pg();return e!==void 0?e:(r=n.errors)==null?void 0:r[s]}function yx(){let{router:r}=fx(bg.UseNavigateStable),e=Pg(Rg.UseNavigateStable),n=D.useRef(!1);return Ng(()=>{n.current=!0}),D.useCallback(function(a,c){c===void 0&&(c={}),n.current&&(typeof a=="number"?r.navigate(a):r.navigate(a,Ns({fromRouteId:e},c)))},[r,e])}const Gp={};function vx(r,e,n){Gp[r]||(Gp[r]=!0)}function _x(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function gn(r){Me(!1)}function wx(r){let{basename:e="/",children:n=null,location:s,navigationType:a=Xn.Pop,navigator:c,static:d=!1,future:p}=r;Os()&&Me(!1);let m=e.replace(/^\/*/,"/"),y=D.useMemo(()=>({basename:m,navigator:c,static:d,future:Ns({v7_relativeSplatPath:!1},p)}),[m,p,c,d]);typeof s=="string"&&(s=Si(s));let{pathname:_="/",search:v="",hash:E="",state:A=null,key:M="default"}=s,O=D.useMemo(()=>{let T=Hu(_,m);return T==null?null:{location:{pathname:T,search:v,hash:E,state:A,key:M},navigationType:a}},[m,_,v,E,A,M,a]);return O==null?null:D.createElement(Pr.Provider,{value:y},D.createElement(Aa.Provider,{children:n,value:O}))}function xx(r){let{children:e,location:n}=r;return ox(pu(e),n)}new Promise(()=>{});function pu(r,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(r,(s,a)=>{if(!D.isValidElement(s))return;let c=[...e,a];if(s.type===D.Fragment){n.push.apply(n,pu(s.props.children,c));return}s.type!==gn&&Me(!1),!s.props.index||!s.props.children||Me(!1);let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=pu(s.props.children,c)),n.push(d)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mu(){return mu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},mu.apply(this,arguments)}function Sx(r,e){if(r==null)return{};var n={},s=Object.keys(r),a,c;for(c=0;c<s.length;c++)a=s[c],!(e.indexOf(a)>=0)&&(n[a]=r[a]);return n}function Ex(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Cx(r,e){return r.button===0&&(!e||e==="_self")&&!Ex(r)}const kx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ix="6";try{window.__reactRouterVersion=Ix}catch{}const Nx="startTransition",qp=Ew[Nx];function Tx(r){let{basename:e,children:n,future:s,window:a}=r,c=D.useRef();c.current==null&&(c.current=Rw({window:a,v5Compat:!0}));let d=c.current,[p,m]=D.useState({action:d.action,location:d.location}),{v7_startTransition:y}=s||{},_=D.useCallback(v=>{y&&qp?qp(()=>m(v)):m(v)},[m,y]);return D.useLayoutEffect(()=>d.listen(_),[d,_]),D.useEffect(()=>_x(s),[s]),D.createElement(wx,{basename:e,children:n,location:p.location,navigationType:p.action,navigator:d,future:s})}const bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wn=D.forwardRef(function(e,n){let{onClick:s,relative:a,reloadDocument:c,replace:d,state:p,target:m,to:y,preventScrollReset:_,viewTransition:v}=e,E=Sx(e,kx),{basename:A}=D.useContext(Pr),M,O=!1;if(typeof y=="string"&&Rx.test(y)&&(M=y,bx))try{let K=new URL(window.location.href),ee=y.startsWith("//")?new URL(K.protocol+y):new URL(y),ie=Hu(ee.pathname,A);ee.origin===K.origin&&ie!=null?y=ie+ee.search+ee.hash:O=!0}catch{}let T=ix(y,{relative:a}),F=Px(y,{replace:d,state:p,target:m,preventScrollReset:_,relative:a,viewTransition:v});function q(K){s&&s(K),K.defaultPrevented||F(K)}return D.createElement("a",mu({},E,{href:M||T,onClick:O||c?s:q,ref:n,target:m}))});var Kp;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Kp||(Kp={}));var Yp;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Yp||(Yp={}));function Px(r,e){let{target:n,replace:s,state:a,preventScrollReset:c,relative:d,viewTransition:p}=e===void 0?{}:e,m=Oa(),y=Or(),_=Tg(r,{relative:d});return D.useCallback(v=>{if(Cx(v,n)){v.preventDefault();let E=s!==void 0?s:ua(y)===ua(_);m(r,{replace:E,state:a,preventScrollReset:c,relative:d,viewTransition:p})}},[y,m,_,s,a,n,r,c,d,p])}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ag=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ox={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=D.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:d,...p},m)=>D.createElement("svg",{ref:m,...Ox,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:Ag("lucide",a),...p},[...d.map(([y,_])=>D.createElement(y,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(r,e)=>{const n=D.forwardRef(({className:s,...a},c)=>D.createElement(jx,{ref:c,iconNode:e,className:Ag(`lucide-${Ax(r)}`,s),...a}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=Ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=Ae("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=Ae("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=Ae("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=Ae("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=Ae("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=Ae("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=Ae("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=Ae("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=Ae("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=Ae("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=Ae("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=Ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=Ae("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=Ae("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=Ae("ShoppingBasket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=Ae("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=Ae("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=Ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Ae("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=Ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Dg="/circle.png",Kx=[{label:"Services",href:"/#services"},{label:"Products",to:"/products"},{label:"About Us",to:"/about"},{label:"Contact",href:"/team#contact"}];function Yx(){const[r,e]=D.useState(!1);return f.jsx("header",{className:"sticky top-0 z-50 w-full bg-white shadow-sm",children:f.jsxs("nav",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",children:[f.jsxs(wn,{to:"/",className:"flex items-center gap-3",children:[f.jsx("img",{src:Dg,alt:"EL. Glamorous Face and Body Clinic, Salon and Spa",className:"h-9 w-9 rounded-full object-cover"}),f.jsx("span",{className:"text-xl font-semibold text-gray-900",children:"EL Glamorous Face and Body Clinic, Salon and Spa"})]}),f.jsx("button",{type:"button",className:"rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden","aria-label":r?"Close menu":"Open menu",onClick:()=>e(n=>!n),children:r?f.jsx(qx,{className:"h-6 w-6"}):f.jsx(Bx,{className:"h-6 w-6"})}),f.jsx("div",{className:`absolute left-0 right-0 top-full bg-white shadow-lg md:static md:flex md:items-center md:gap-8 md:shadow-none ${r?"block":"hidden"}`,children:f.jsx("div",{className:"flex flex-col px-4 py-4 md:flex-row md:items-center md:gap-8 md:px-0 md:py-0",children:Kx.map(n=>n.to?f.jsx(wn,{to:n.to,className:"py-2 text-gray-700 transition hover:text-accent md:py-0",onClick:()=>e(!1),children:n.label},n.label):f.jsx("a",{href:n.href,className:"py-2 text-gray-700 transition hover:text-accent md:py-0",onClick:()=>e(!1),children:n.label},n.label))})})]})})}function Qx(){return f.jsx("footer",{id:"about",className:"bg-gray-900 text-gray-300",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"grid gap-10 lg:grid-cols-3",children:[f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("img",{src:Dg,alt:"EL Glamorous Face and Body Clinic, Salon and Spa",className:"h-10 w-10 rounded-full object-cover"}),f.jsx("span",{className:"text-sm font-semibold text-accent",children:"About Us"})]}),f.jsx("h3",{className:"text-base font-semibold text-white",children:"EL Glamorous Face and Body Clinic, Salon and Spa"}),f.jsx("p",{className:"max-w-md text-sm text-gray-300",children:"We provide professional salon services with a focus on beauty, relaxation, and customer satisfaction."})]}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-sm font-semibold uppercase tracking-wide text-white",children:"Operating Hours"}),f.jsxs("ul",{className:"mt-3 space-y-1 text-sm",children:[f.jsx("li",{className:"text-gray-300",children:"Monday to Sunday"}),f.jsx("li",{className:"font-semibold text-gray-100",children:"10:00 AM – 8:00 PM"})]})]}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-sm font-semibold uppercase tracking-wide text-white",children:"Follow Us"}),f.jsx("p",{className:"mt-2 text-sm text-gray-300",children:"Stay connected for updates, promos, and glam transformations."}),f.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-4",children:[f.jsxs("a",{href:"https://www.facebook.com/el.glamorousofficialpage",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10",children:[f.jsx(Fx,{className:"h-4 w-4 text-[#1877F2]","aria-hidden":!0}),f.jsx("span",{className:"sr-only",children:"Facebook"})]}),f.jsxs("a",{href:"https://www.instagram.com/elglammainbranch?igsh=Z3kxdHc3OG1raDgz&utm_source=qr",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10",children:[f.jsx(Ux,{className:"h-4 w-4 text-pink-400","aria-hidden":!0}),f.jsx("span",{className:"sr-only",children:"Instagram"})]}),f.jsxs("a",{href:"https://www.tiktok.com/@elglamteamph?_r=1&_t=ZS-94eH7Vegoqa",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10",children:[f.jsx(Wx,{className:"h-4 w-4 text-white","aria-hidden":!0}),f.jsx("span",{className:"sr-only",children:"TikTok"})]})]})]})]}),f.jsxs("div",{className:"mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500",children:["© ",new Date().getFullYear()," EL Glamorous Face and Body Clinic, Salon and Spa. All rights reserved."]})]})})}const Jx="elglam.jpg";function Xx(){return f.jsxs("section",{className:"relative min-h-[85vh] w-full overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${Jx})`}}),f.jsx("div",{className:"absolute inset-0 bg-black/50"}),f.jsxs("div",{className:"relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center text-white",children:[f.jsx("h1",{className:"text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",children:"Transform Your Look"}),f.jsx("p",{className:"mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl",children:"Experience luxury hair and beauty services with our expert team."}),f.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-4",children:[f.jsxs(wn,{to:"/book",className:"inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white shadow-lg transition hover:bg-accent-dark hover:shadow-xl",children:[f.jsx(Gu,{className:"h-5 w-5","aria-hidden":!0}),"Book Appointment"]}),f.jsxs("a",{href:"#services",className:"inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white hover:text-gray-900",children:[f.jsx(zx,{className:"h-5 w-5","aria-hidden":!0}),"View Services"]})]})]})]})}const Zx=[{icon:gu,title:"Expert Stylists",description:"Our team of certified professionals with years of experience."},{icon:Ei,title:"Premium Products",description:"We use only the highest quality hair care products."},{icon:jg,title:"Flexible Booking",description:"Easy online booking with flexible scheduling options."}];function eS(){return f.jsx("section",{className:"bg-white py-16 sm:py-20 lg:py-24",children:f.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:f.jsx("div",{className:"grid gap-10 sm:grid-cols-2 lg:grid-cols-3",children:Zx.map(({icon:r,title:e,description:n})=>f.jsxs("div",{className:"flex flex-col items-center text-center transition hover:scale-[1.02]",children:[f.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 text-accent",children:f.jsx(r,{className:"h-8 w-8",strokeWidth:1.5,"aria-hidden":!0})}),f.jsx("h3",{className:"mt-4 text-xl font-semibold text-gray-900",children:e}),f.jsx("p",{className:"mt-2 max-w-sm text-gray-600",children:n})]},e))})})})}const tS=[{subcategory:"Facial Treatments",services:[{name:"Signature Facial",price:"₱399"},{name:"Facial with Diamond Peel",price:"₱499"},{name:"Facial Combo",price:"₱599"},{name:"Facial Botox",price:"₱699"},{name:"Acne Control Treatment",price:"₱899"},{name:"Backcial",price:"₱999"},{name:"Melasma Care Treatment",price:"₱2,499"},{name:"Korean BB Glow",price:"₱1,299"},{name:"Hydra-Facial Treatment",price:"₱999"},{name:"Carbon Laser Facial",price:"₱999"}]},{subcategory:"Warts Removal",services:[{name:"Unlimited Face Area",price:"₱799"},{name:"Unlimited Neck Area",price:"₱799"},{name:"Unlimited Face & Neck Area",price:"₱1,499"}]},{subcategory:"Eyelash Care",services:[{name:"Eyelash Lifting",price:"₱499"},{name:"Eyelash Lifting with Tint",price:"₱599"}]},{subcategory:"Eyelash Extensions",services:[{name:"Synthetic Eyelashes",price:"₱599"},{name:"Regular Human Hair",price:"₱799"},{name:"Ultrasoft Human Hair",price:"₱899"}]},{subcategory:"Semi-Permanent Makeup",services:[{name:"Micro-Shading",price:"₱2,499 (1 Session) / ₱3,999 (2 Sessions)"},{name:"Eyeliner",price:"₱2,499 / ₱3,999"},{name:"Lip Tattoo",price:"₱2,499 / ₱3,999"}]},{subcategory:"Eyebrow Care",services:[{name:"Brow Lamination",price:"₱399"},{name:"Brow Lamination with Tint",price:"₱449"}]},{subcategory:"Waxing / Threading",services:[{name:"Eyebrows Threading",price:"₱120"},{name:"Eyebrows Waxing",price:"₱149"},{name:"Upper Mouth",price:"₱149"},{name:"Lower Mouth",price:"₱149"},{name:"Underarms",price:"₱199"},{name:"Brazilian/Bikini Line",price:"₱699"}]},{subcategory:"Permanent Hair Removal",services:[{name:"Underarm Hair Removal",price:"₱699"},{name:"Underarm Whitening",price:"₱699"},{name:"Underarm Removal & Whitening",price:"₱1,099"},{name:"Lower/Upper Mouth",price:"₱399"},{name:"Lower & Upper Mouth Combo",price:"₱599"},{name:"Arms",price:"₱399 – ₱799"},{name:"Legs",price:"₱599 – ₱999"},{name:"Brazilian/Bikini Line",price:"₱999"},{name:"Pigmentation Laser",price:"₱899"},{name:"Acne/Skin Rejuvenating Laser",price:"₱899"}]}],nS=[{subcategory:"Men",services:[{name:"Haircut",price:"₱150"},{name:"Haircut with Shampoo",price:"₱250"},{name:"Haircut with Color",price:"₱1,000"}]},{subcategory:"Women",services:[{name:"Haircut",price:"₱250"},{name:"Haircut with Shampoo",price:"₱350"},{name:"Hair Iron/Blowdry",price:"₱350"}]},{subcategory:"Special Treatments",services:[{name:"Loreal Power Dose",price:"₱1,500"},{name:"Plarmia Scalp Treatment",price:"₱1,500"},{name:"Grand Linkage",price:"₱2,000"},{name:"Hair Cellophane",price:"₱800"}]},{subcategory:"Hair Color",services:[{name:"Hair Color with Treatment",price:"₱1,500"},{name:"Hair Color, Highlights, Treatment",price:"₱2,500"},{name:"Hair Balayage",price:"₱3,000 (starting price)"}]},{subcategory:"Rebonding",services:[{name:"Regular Hair Rebond",price:"₱1,500"},{name:"Premium Hair Rebond",price:"₱3,000"}]},{subcategory:"Brazilian Treatment",services:[{name:"Brazilian Treatment",price:"₱1,500"},{name:"Brazilian Treatment + Hair Color",price:"₱2,500"},{name:"Brazilian Treatment + Hair Rebond",price:"₱2,500"}]},{subcategory:"Hair Combos",services:[{name:"Hair Color + Rebond + Brazilian",price:"₱3,000"},{name:"Highlights + Color + Rebond + Brazilian",price:"₱3,500"}]},{subcategory:"Hair & Makeup",services:[{name:"Hairdo/Styling",price:"₱500"},{name:"Make Up",price:"₱500"},{name:"Hair & Make Up",price:"₱800"}]}],rS=[{subcategory:"Massage",services:[{name:"Full Body Massage (60 mins)",price:"₱599"},{name:"Full Body Massage (30 mins)",price:"₱399"},{name:"Foot Massage (60 mins)",price:"₱349"},{name:"Foot Massage (30 mins)",price:"₱249"},{name:"Ventosa Cupping",price:"₱699"}]},{subcategory:"Body Care",services:[{name:"Body Scrub & Whitening",price:"₱999"},{name:"Underarm Whitening",price:"₱499"},{name:"Underarm Premium Glow",price:"₱899"},{name:"Butt/Bikini Line Whitening",price:"₱599"},{name:"Bikini Premium Glow",price:"₱1,199"},{name:"Elbows/Knees Whitening",price:"₱499"}]},{subcategory:"Facial & Body Slimming",services:[{name:"RF Facial Contour",price:"₱349"},{name:"RF with Cavitation",price:"₱599"},{name:"RF Arms/Tummy/Back",price:"₱1,499"},{name:"Mesotherapy with FREE RF",price:"₱999"},{name:"Ultherapy (Face Area)",price:"₱3,999"},{name:"Ultherapy (Other Areas)",price:"₱5,999"},{name:"Trio Slim",price:"₱999"}]},{subcategory:"Nail Care - Regular Polish",services:[{name:"Manicure",price:"₱150"},{name:"Pedicure with Soaking",price:"₱200"},{name:"Pedicure with Footspa",price:"₱450"}]},{subcategory:"Nail Care - Imported Polish",services:[{name:"Manicure",price:"₱230"},{name:"Pedicure with Soaking",price:"₱300"},{name:"Pedicure with Footspa",price:"₱550"}]},{subcategory:"Nail Care - Gel Polish",services:[{name:"Manicure",price:"₱550"},{name:"Pedicure with Soaking",price:"₱600"},{name:"Pedicure with Footspa",price:"₱750"},{name:"Foot Spa Alone",price:"₱350"}]},{subcategory:"Nail Extensions",services:[{name:"Imported Extensions",price:"₱1,599"},{name:"Soft Gel Extensions",price:"₱1,299"}]},{subcategory:"Others",services:[{name:"Additional Nail Art",price:"₱350"},{name:"Stones",price:"₱10"}]},{subcategory:"Gluta Push & Drip",services:[{name:"Vitamin C Shot",price:"₱199"},{name:"Collagen Shot",price:"₱380"},{name:"Stem Cell",price:"₱380"},{name:"Gluta I.V. Push",price:"₱380"},{name:"Placenta",price:"₱499"},{name:"Glamorous White Shot",price:"₱599"},{name:"Express White Drip",price:"₱999"},{name:"Snow White Drip",price:"₱1,699"},{name:"Cinderella Drip",price:"₱1,799"},{name:"Hikari Drip",price:"₱1,799"}]}],da=[{id:"face",title:"Face & Beauty",data:tS},{id:"hair",title:"Hair Care",data:nS},{id:"body",title:"Body Wellness",data:rS}],Qp=[{id:"mandaue",name:"Mandaue City Branch"},{id:"pajac",name:"Pajac Branch"},{id:"pusok",name:"Pusok Branch"},{id:"cebu",name:"Cebu City Branch"}],yu={mandaue:[{name:"Dela Torre, Imae Rose",role:"Nail Technician",specialty:"Nailtech"},{name:"Yekla, Sanny Grace",role:"Facialist / Massage Therapist"},{name:"Davis, Rosegina",role:"Hair and Nail Technician"},{name:"Momo, Ruthamie",role:"Hair and Nail Technician"},{name:"Yaon, Jenipher",role:"Senior Hairdresser"}],pajac:[{name:"Arnado, Buenafe",role:"Nail Technician"},{name:"Omac, Elvira",role:"Nail Technician"},{name:"Belarmino, Mattlaine Clyrr",role:"Facialist"},{name:"Entig, Jenalyn",role:"Nail Technician"},{name:"Gloria, Francisco",role:"Barber"},{name:"Demape, Keyn Joshua",role:"Barber"}],pusok:[{name:"Abadajos, Julie Ann",role:"Facialist"},{name:"Pedor, Rowena",role:"Nail Technician"},{name:"Dimco, Janeth",role:"Hairdresser"}],cebu:[{name:"Macatanong, Jessica",role:"Nail Technician"},{name:"Tallo, Lucille",role:"Hairdresser"},{name:"Cañizares, Rubelyn",role:"Facialist"},{name:"Cabreles, Jennifer",role:"Nail Technician"},{name:"Dela Torre, Jeanny",role:"Facialist"}]},iS=r=>{if(!r)return 0;let e=r.replace(/[₱,]/g,"");return e.includes("–")?Number(e.split("–")[0]):e.includes("/")?Number(e.split("/")[0]):Number(e)||0},sS={massage:["massage"],inject:["gluta","inject","drip","shot"],major:["rebond","laser","treatment"]},oS=r=>{const e=r.toLowerCase();return Object.entries(sS).filter(([n,s])=>s.some(a=>e.includes(a))).map(([n])=>n)},Jp=da.flatMap(r=>r.data.flatMap((e,n)=>e.services.map((s,a)=>({id:`${r.id}-${n}-${a}`,label:s.name,kind:"service",basePrice:iS(s.price),tags:oS(s.name)})))),ci=r=>r.toLowerCase().replace(/[^a-z]/g,""),aS=({branchId:r,employeeName:e,item:n,price:s})=>{const a=ci(e||""),c=Array.isArray(n==null?void 0:n.tags)?n.tags:[];return((n==null?void 0:n.kind)||"service")==="product"||c.includes("product")?.1:r==="mandaue"&&a===ci("Yekla, Sanny Grace")?c.includes("massage")?.4:c.includes("inject")?.1:.05:r==="pusok"&&a===ci("Pedor, Rowena")?s>499&&c.includes("major")?.1:.05:r==="pajac"?a===ci("Belarmino, Mattlaine Clyrr")?c.includes("massage")?.4:c.includes("inject")?.1:.05:(a===ci("Gloria, Francisco")||a===ci("Demape, Keyn Joshua"))&&s>499&&c.includes("major")?.1:.05:(r==="cebu"&&a.includes("jennifer"),.05)};function lS({image:r,imageAlt:e,icon:n,title:s,description:a,price:c,duration:d,ctaLabel:p="Book This Service",onCtaClick:m}){return f.jsxs("article",{className:"flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl",children:[f.jsx("div",{className:"aspect-[4/3] w-full overflow-hidden bg-gray-200",children:f.jsx("img",{src:r,alt:e,className:"h-full w-full object-cover transition hover:scale-105"})}),f.jsxs("div",{className:"flex flex-1 flex-col p-6",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[n&&f.jsx(n,{className:"h-5 w-5 shrink-0 text-accent","aria-hidden":!0}),f.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:s})]}),f.jsx("p",{className:"mt-2 flex-1 text-gray-600",children:a}),f.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[f.jsx("span",{className:"text-lg font-semibold text-accent",children:c}),f.jsxs("span",{className:"flex items-center gap-1 text-sm text-gray-500",children:[f.jsx(jg,{className:"h-4 w-4","aria-hidden":!0}),d]})]}),f.jsx("button",{type:"button",onClick:m,className:"mt-4 w-full rounded-lg bg-accent py-3 text-center font-medium text-white transition hover:bg-accent-dark",children:p})]})]})}const cS={face:{image:"https://media.istockphoto.com/id/1399469980/photo/close-up-portrait-of-anorganic-facial-mask-application-at-spa-salon-facial-treatment-skin.jpg?s=612x612&w=0&k=20&c=ZvZi_bdGLicsykUtlrHgQe70ftZzd_xPKvq2vzfOyV0=",icon:Ei,description:"Facial treatments, lashes, semi-permanent makeup, and advanced skin care."},hair:{image:"https://media.istockphoto.com/id/1138252695/photo/woman-at-hair-salon.jpg?s=612x612&w=0&k=20&c=VfottXG-WF8Lr9o6zdgbU1bbZp0OcHdzdmz8j6LcaIU=",icon:Mg,description:"Cuts, color, treatments, rebonding, Brazilian, and event-ready hair styling."},body:{image:"https://images.squarespace-cdn.com/content/v1/553640b0e4b06779e02ce9a6/d40a9cfb-09b9-4437-863e-de47c6274efa/unnamed-2.webp",icon:ja,description:"Massages, body care, slimming, nail services, and wellness drips."}};function uS(){const[r,e]=D.useState("hair"),[n,s]=D.useState(null),[a,c]=D.useState(!1),d=da.find(m=>m.id===r),p=m=>{s(y=>y===m?null:m)};return f.jsx("section",{id:"services",className:"scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-24",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("h2",{className:"text-3xl font-bold text-gray-900 sm:text-4xl",children:"Our Services"}),f.jsx("p",{className:"mx-auto mt-3 max-w-2xl text-gray-600",children:"Explore our main service categories, then browse detailed offerings by branch and subcategory."})]}),f.jsx("div",{className:"mt-12 grid gap-8 md:grid-cols-3",children:da.map(m=>{const y=cS[m.id];if(!y)return null;const _=y.icon,v=r===m.id;return f.jsx("div",{className:v?"rounded-2xl ring-2 ring-accent":"",children:f.jsx(lS,{image:y.image,imageAlt:m.title,icon:_,title:m.title,description:y.description,price:"See branch rates",duration:"Multi-option",ctaLabel:"View services we offer",onCtaClick:()=>{e(m.id),s(null),c(!0)}})},m.id)})}),a&&d&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8",children:f.jsxs("div",{className:"relative max-h-[100vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl",children:[f.jsxs("div",{className:"flex items-start justify-between border-b border-gray-100 px-6 py-4 sm:px-8",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"mt-1 text-xl font-semibold text-gray-900 sm:text-2xl",children:d.title}),f.jsx("p",{className:"mt-1 text-xs text-gray-600 sm:text-sm",children:"Expand a section to see the services included in this category."})]}),f.jsx("button",{type:"button",onClick:()=>c(!1),className:"ml-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200",children:"Close"})]}),f.jsx("div",{className:"max-h-[60vh] space-y-4 overflow-y-auto px-6 py-4 sm:px-8",children:d.data.map(m=>{const y=n===m.subcategory;return f.jsxs("div",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-gray-50",children:[f.jsxs("button",{type:"button",onClick:()=>p(m.subcategory),className:"flex w-full items-center justify-between px-5 py-3 text-left transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset",children:[f.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-gray-800 sm:text-sm",children:m.subcategory}),f.jsx("span",{className:"text-[11px] text-gray-500",children:y?"Hide services":"View services"})]}),y&&f.jsx("div",{className:"border-t border-gray-200 bg-white px-5 pb-4 pt-2",children:f.jsx("ul",{className:"space-y-2 text-xs sm:text-sm",children:m.services.map(_=>f.jsxs("li",{className:"flex flex-col gap-2 rounded-xl bg-gray-50 px-3 py-2 sm:flex-row sm:items-center sm:justify-between",children:[f.jsx("div",{className:"min-w-0 flex-1",children:f.jsx("p",{className:"font-medium text-gray-900",children:_.name})}),f.jsx("span",{className:"mt-1 text-right text-accent font-semibold sm:mt-0",children:_.price})]},`${m.subcategory}-${_.name}`))})})]},m.subcategory)})})]})})]})})}function dS(){return f.jsx("section",{className:"bg-white py-16 sm:py-20 lg:py-24",children:f.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:f.jsxs("div",{className:"grid gap-8 rounded-3xl bg-gray-50 p-8 shadow-md sm:grid-cols-3",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-accent",children:"What clients say"}),f.jsx("h2",{className:"mt-1 text-xl font-semibold text-gray-900 sm:text-2xl",children:"Loved by our guests"}),f.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Real stories from clients who visit our branches across Cebu."})]}),f.jsxs("div",{className:"space-y-4 text-sm text-gray-700 sm:col-span-2",children:[f.jsxs("blockquote",{className:"rounded-2xl bg-white p-4",children:["“Best salon experience I've had in Cebu. The staff are warm and very professional.”",f.jsx("span",{className:"mt-2 block text-xs font-semibold text-gray-500",children:"— Maria, regular at Mandaue City Branch"})]}),f.jsxs("blockquote",{className:"rounded-2xl bg-white p-4",children:["“I love how consistent the quality is whether I book in Pajac or Pusok. Highly recommended.”",f.jsx("span",{className:"mt-2 block text-xs font-semibold text-gray-500",children:"— Anne, hair & nail client"})]}),f.jsxs("blockquote",{className:"rounded-2xl bg-white p-4",children:["“The therapists in Cebu City branch are amazing. I always leave feeling refreshed.”",f.jsx("span",{className:"mt-2 block text-xs font-semibold text-gray-500",children:"— John, wellness client"})]})]})]})})})}function hS(){return f.jsxs("main",{children:[f.jsx(Xx,{}),f.jsx(eS,{}),f.jsx(uS,{}),f.jsx(dS,{})]})}const fS=[{name:"Acne Set",description:"Facial Care Product",price:799,image:"https://unsplash.com/photos/product-lot-deuGLZjp28M"},{name:"Whitening Set",description:"Facial Care Product",price:699,image:"https://images.unsplash.com/photo-1612810432633-96f64dc8ccb6?w=600&q=80"},{name:"Underarm Whitening Deo Cream",description:"Body Care Product",price:300,image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"},{name:"Sunblock Cream SPF50",description:"Facial Care Product",price:250,image:"https://images.unsplash.com/photo-1600433214751-9aa7f7b4c07a?w=600&q=80"},{name:"Sunblock Cream SPF110",description:"Facial Care Product",price:380,image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"},{name:"Vitamin C & E Serum",description:"Facial Care Product",price:350,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Collagen Serum",description:"Facial Care Product",price:380,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Hyaluronic Serum",description:"Facial Care Product",price:380,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Acne Cream",description:"Facial Care Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Warts Cream",description:"Face & Body Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Anti-Irritation Cream",description:"Face & Body Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Kojic Soap",description:"Face & Body Product",price:200,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Acne Soap",description:"Face & Body Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Whitening Soap",description:"Face & Body Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Toners",description:"Facial Care Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"EL Beauty Shine On Hair Serum",description:"Hair Care Product",price:300,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"EL Beauty Argan Oil Hair Mask",description:"Hair Care Product",price:850,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Deorebiss Shampoo & Conditioner",description:"Hair Care Product",price:1500,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Deorebiss Shampoo",description:"Hair Care Product",price:800,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Deorebiss Conditioner",description:"Hair Care Product",price:800,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Hair Curling Cream",description:"Hair Care Product",price:500,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Color Gadget Shampoo",description:"Hair Care Product",price:1100,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"}];function ia(r){return`₱${r.toLocaleString("en-PH")}`}function pS({onAddToCart:r,cartItems:e=[]}){return f.jsx("section",{id:"products",className:"scroll-mt-24 bg-[#f4f5f7] pt-6 pb-10 sm:pt-8 sm:pb-12",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("h2",{className:"text-3xl font-bold text-gray-900 sm:text-4xl",children:"Our Products"}),f.jsx("p",{className:"mx-auto mt-3 max-w-2xl text-gray-600",children:"Take the salon experience home with our curated selection of hair, skin, and body care products."})]}),f.jsx("div",{className:"mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",children:fS.map(n=>f.jsxs("article",{className:"flex h-full flex-col rounded-3xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md",children:[f.jsxs("div",{className:"relative flex-1 overflow-hidden rounded-t-3xl bg-[#f9737a]",children:[f.jsx("img",{src:n.image,alt:n.name,className:"h-32 w-full object-cover sm:h-40"}),e.length>0&&(()=>{var a;const s=((a=e.find(c=>c.name===n.name))==null?void 0:a.quantity)||0;return s?f.jsxs("span",{className:"absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white",children:["In cart: ",s]}):null})()]}),f.jsxs("div",{className:"flex flex-col rounded-b-3xl bg-[#fee2e2] px-4 pb-4 pt-3",children:[f.jsx("h3",{className:"text-sm font-semibold text-gray-900 sm:text-base",children:n.name}),f.jsx("p",{className:"mt-1 text-xs text-gray-600 line-clamp-3",children:n.description}),f.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[f.jsx("span",{className:"text-accent text-sm font-semibold sm:text-base",children:ia(n.price)}),r&&f.jsx("button",{type:"button",onClick:()=>r(n),className:"rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-accent-dark",children:"Add to Cart"})]})]})]},n.name))})]})})}function mS(){const[r,e]=D.useState([]),[n,s]=D.useState(null),[a,c]=D.useState(!1),[d,p]=D.useState(!1),m=T=>{a||e(F=>F.find(K=>K.name===T.name)?F.map(K=>K.name===T.name?{...K,quantity:K.quantity+1}:K):[...F,{...T,quantity:1}])},y=(T,F)=>{a||e(q=>q.map(K=>K.name===T?{...K,quantity:Math.max(1,K.quantity+F)}:K).filter(K=>K.quantity>0))},_=T=>{a||e(F=>F.filter(q=>q.name!==T))},v=D.useMemo(()=>({subtotal:r.reduce((F,q)=>F+q.price*q.quantity,0)}),[r]),E=T=>{r.length&&(s(T),c(!0))},A=r.reduce((T,F)=>T+F.quantity,0),M=()=>p(!1);D.useEffect(()=>{if(d){const T=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=T}}},[d]);const O="4.5rem";return f.jsxs("main",{className:"relative z-0 bg-[#f4f5f7] pt-6 pb-8 sm:pt-8 sm:pb-10",children:[f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-[#f4f5f7] pb-4 pt-0",children:[f.jsxs("p",{className:"text-sm text-gray-600 sm:text-base",children:[f.jsx("span",{className:"font-semibold text-gray-900",children:"Our Products"}),f.jsx("span",{className:"mx-1.5 text-gray-400",children:"•"}),f.jsx("span",{className:"text-gray-500",children:"Tap the cart to review your selections."})]}),f.jsxs("button",{type:"button",onClick:()=>p(!0),className:"relative flex shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition hover:border-accent hover:bg-accent-light hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2","aria-label":"Open cart",children:[f.jsx(Hx,{className:"h-5 w-5 sm:h-6 sm:w-6"}),A>0&&f.jsx("span",{className:"absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-semibold text-white shadow",children:A})]})]}),f.jsx(pS,{onAddToCart:m,cartItems:r})]}),d&&f.jsxs(f.Fragment,{children:[f.jsx("button",{type:"button",className:"fixed inset-0 z-[35] bg-black/50 transition-opacity",onClick:M,"aria-label":"Close cart"}),f.jsxs("div",{className:"fixed right-0 z-[40] flex w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl sm:w-[85%] md:w-1/2 lg:w-[28rem]",style:{top:O,height:`calc(100vh - ${O})`},children:[f.jsxs("div",{className:"flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-5",children:[f.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wide text-gray-700",children:"Your Basket"}),f.jsx("button",{type:"button",onClick:M,className:"rounded-full p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent","aria-label":"Close cart",children:f.jsx("span",{className:"text-xl leading-none",children:"×"})})]}),f.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 sm:px-5",children:r.length===0?f.jsxs("p",{className:"text-sm text-gray-600",children:["Your basket is empty. Tap ",f.jsx("strong",{children:"Add to Cart"})," on a product to get started."]}):f.jsx("ul",{className:"space-y-3",children:r.map(T=>f.jsxs("li",{className:"flex flex-col gap-2 rounded-xl bg-gray-50 p-3 sm:flex-row sm:items-center sm:justify-between",children:[f.jsxs("div",{className:"min-w-0 flex-1",children:[f.jsx("p",{className:"font-medium text-gray-900",children:T.name}),f.jsxs("p",{className:"text-xs text-gray-500",children:[ia(T.price)," each"]})]}),f.jsxs("div",{className:"flex items-center justify-between gap-2 sm:justify-end",children:[f.jsxs("div",{className:"inline-flex items-center gap-1 rounded-lg bg-white px-2 py-1 shadow-sm",children:[f.jsx("button",{type:"button",disabled:a,onClick:()=>y(T.name,-1),className:"rounded p-0.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50",children:"−"}),f.jsx("span",{className:"min-w-[1.25rem] text-center text-sm font-medium",children:T.quantity}),f.jsx("button",{type:"button",disabled:a,onClick:()=>y(T.name,1),className:"rounded p-0.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50",children:"+"})]}),f.jsx("button",{type:"button",disabled:a,onClick:()=>_(T.name),className:"text-gray-400 hover:text-red-500 disabled:opacity-50","aria-label":"Remove item",children:f.jsx(Vx,{className:"h-4 w-4"})}),f.jsx("span",{className:"w-16 text-right text-sm font-semibold text-accent",children:ia(T.price*T.quantity)})]})]},T.name))})}),f.jsxs("div",{className:"shrink-0 border-t border-gray-200 bg-white px-4 py-4 sm:px-5",children:[f.jsxs("div",{className:"mb-3 flex items-center justify-between text-sm",children:[f.jsx("span",{className:"text-gray-600",children:"Total"}),f.jsx("span",{className:"text-base font-semibold text-accent",children:ia(v.subtotal)})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("button",{type:"button",disabled:!r.length||a,onClick:()=>E("gcash"),className:"w-full rounded-lg bg-[#0077FF] py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#0062d1] disabled:cursor-not-allowed disabled:bg-gray-300",children:"Confirm with GCash"}),f.jsx("button",{type:"button",disabled:!r.length||a,onClick:()=>E("card"),className:"w-full rounded-lg bg-accent py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-gray-300",children:"Confirm with Credit / Debit Card"})]}),a&&f.jsx("p",{className:"mt-3 text-xs text-gray-500",children:"Order confirmed. No cancellations allowed."})]})]})]})]})}function gS({open:r,onClose:e,title:n,children:s}){return r?f.jsx("div",{className:"fixed inset-0 z-40 flex justify-center bg-black/50","aria-modal":"true",role:"dialog",children:f.jsx("div",{className:"pointer-events-none flex w-full justify-center pt-24 pb-6 sm:pt-28 sm:pb-8",children:f.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl max-h-[calc(100vh-6rem-2rem)] overflow-y-auto rounded-3xl bg-white shadow-2xl",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-gray-100 px-6 py-3 sm:px-8 sm:py-4",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-accent",children:"Branch landmark"}),f.jsx("h3",{className:"mt-1 text-lg font-semibold text-gray-900 sm:text-xl",children:n}),f.jsx("p",{className:"mt-1 text-xs text-gray-600 sm:text-sm",children:"A nearby landmark to help you find the salon easily."})]}),f.jsx("button",{type:"button",onClick:e,className:"ml-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200",children:"Close"})]}),f.jsx("div",{className:"px-4 pb-4 pt-3 sm:px-6 sm:pb-6",children:s})]})})}):null}const yS=["jpg","jpeg","png","webp"],vS={"Dela Torre, Imae Rose":"Dela Torre, Imae Rose_EL Glam Mandaue_Nail Technician.jpg","Yekla, Sanny Grace":"Yekla, Sanny Grace_EL Glam Mandaue_Aesthetician.jpg","Davis, Rosegina":"Davis, Rosegina_EL Glam Mandaue_Nail Technician.jpg","Momo, Ruthamie":"Momo. Ruthamie_EL Glam Mandaue_Facialist.jpg","Yaon, Jenipher":"Yaon, Jennipher_EL Glam Mandaue_Hairdresser.jpg","Arnado, Buenafe":"Arnado, Buenafe_EL Glam Pajac_Hairdresser or Nail Technician.jpg","Omac, Elvira":"Omac, Elvira_EL Glam Pajac_Hairdresser.jpg","Belarmino, Mattlaine Clyrr":"Belarmino, Mattlaine Clyrr_EL Glam Pajac_Aesthetician.jpg","Entig, Jenalyn":"Entig, Jenalyn_EL Glam Pajac_Nail Technician.jpg","Gloria, Francisco":"Gloria, Francisco_EL Glam Pajac_Barber.jpg","Demape, Keyn Joshua":"Demape, Keyn Joshua_EL Glam Pajac_Barber.jpg","Abadajos, Julie Ann":"Abadajos, Julie Ann_EL Glam Pusok_Aesthetician.jpg","Pedor, Rowena":"Pedor, Rowena_EL Glam Pusok_Nail Technician.jpg","Dimco, Janeth":"Dimco, Janeth_EL Glam Pusok_Hairdresser.jpg","Macatanong, Jessica":"Macatanong, Jessica_EL Glam Cebu_Nail Technician.jpg","Tallo, Lucille":"Tallo, Lucille_EL GLam Cebu_Hairdresser.jpg","Cañizares, Rubelyn":"Cañizares, Rubelyn_EL Glam Cebu_Facialist.jpg","Cabreles, Jennifer":"Cabreles, Jennifer_EL Glam Cebu_Nail Technician.jpg","Dela Torre, Jeanny":"Dela Torre, Jeanny_EL Glam Cebu_Facialist.jpg"},Fg=r=>r.split(",").map(e=>e.trim()[0]).filter(Boolean).slice(0,2).join("").toUpperCase(),Ug=r=>{const e=vS[r];if(e)return[encodeURI(`/${e}`)];const n=encodeURIComponent(r);return yS.map(s=>`/stylists/${n}.${s}`)},zg=(r,e)=>{const n=r.currentTarget,a=Number(n.dataset.photoIndex||"0")+1;if(a<e.length){n.dataset.photoIndex=String(a),n.src=e[a];return}n.style.display="none"},_S=[{id:"mandaue",title:"Mandaue City Branch",image:"Mandaue Branch.png"},{id:"pajac",title:"Pajac Branch",image:"Pajac Branch.jpg"},{id:"pusok",title:"Pusok Branch",image:"Pusok Branch.jpg"},{id:"cebu ",title:"Cebu City Branch",image:"Cebu Branch.jpg"}];function wS(){const[r,e]=D.useState(null),n=r&&yu[r.id]?yu[r.id]:[];return f.jsx("section",{id:"contact",className:"scroll-mt-24 bg-gray-50 py-16 sm:py-20 lg:py-12",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("h2",{className:"text-3xl font-bold text-gray-900 sm:text-4xl",children:"Visit Us"}),f.jsx("p",{className:"mx-auto mt-3 max-w-2xl text-gray-600",children:"We'd love to see you at our salon"})]}),f.jsx("div",{className:"mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",children:_S.map(s=>f.jsxs("button",{type:"button",onClick:()=>e(s),className:"rounded-2xl bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",children:[f.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent",children:f.jsx(Lg,{className:"h-6 w-6",strokeWidth:1.5,"aria-hidden":!0})}),f.jsx("h3",{className:"mt-4 text-base font-semibold text-gray-900",children:s.title}),f.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Tap to view nearby landmark photo"})]},s.id))}),f.jsx(gS,{open:!!r,onClose:()=>e(null),title:(r==null?void 0:r.title)??"",children:r&&f.jsxs(f.Fragment,{children:[f.jsx("img",{src:r.image,alt:r.title,className:"mx-auto h-auto w-full max-w-full rounded-2xl object-contain"}),n.length>0&&f.jsxs("div",{className:"mt-6 rounded-2xl bg-gray-50 p-4",children:[f.jsx("p",{className:"text-sm font-semibold uppercase tracking-wide text-accent",children:"Team assigned to this branch"}),f.jsx("ul",{className:"mt-3 grid gap-3 text-sm sm:grid-cols-2",children:n.map(s=>{const a=Ug(s.name);return f.jsxs("li",{className:"flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm",children:[f.jsxs("div",{className:"relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-accent/10",children:[f.jsx("div",{className:"flex h-full w-full items-center justify-center text-xs font-semibold text-accent",children:Fg(s.name)}),f.jsx("img",{src:a[0],alt:`${s.name} profile`,className:"absolute inset-0 h-full w-full object-cover",loading:"lazy","data-photo-index":"0",onError:c=>zg(c,a)})]}),f.jsxs("div",{children:[f.jsx("p",{className:"font-semibold text-gray-900",children:s.name}),f.jsx("p",{className:"text-xs font-medium uppercase tracking-wide text-accent",children:s.role}),s.specialty&&f.jsx("p",{className:"mt-1 text-xs text-gray-500",children:s.specialty})]})]},s.name)})})]})]})})]})})}function xS(){return f.jsx("main",{children:f.jsx(wS,{})})}const SS=[{name:"Isabella Chen",role:"Senior Hair Stylist",bio:"Known for precision cuts and high-fashion color work tailored to every client.",image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"},{name:"Maya Patel",role:"Lead Makeup Artist",bio:"Blends modern artistry with timeless glam for bridal, editorial, and events.",image:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80"},{name:"Olivia Thompson",role:"Spa & Wellness Director",bio:"Designs restorative treatments focused on glow, balance, and total relaxation.",image:"https://images.unsplash.com/photo-1512310604669-443f26c35f52?auto=format&fit=crop&w=900&q=80"}],ES=[{icon:Ei,title:"Premium Beauty Services",description:"From signature facials to luxury styling, every service is personalized with care.",gradient:"from-pink-500 to-rose-400"},{icon:Og,title:"Skilled Professionals",description:"Our experts are trained in advanced techniques and industry best practices.",gradient:"from-purple-500 to-pink-500"},{icon:ja,title:"Customer Satisfaction",description:"We prioritize comfort, trust, and outcomes that make every guest feel confident.",gradient:"from-rose-400 to-purple-500"},{icon:Gu,title:"Modern Booking Experience",description:"Simple scheduling, thoughtful follow-up, and seamless service from start to finish.",gradient:"from-pink-500 to-purple-500"}];function Xp({children:r}){return f.jsx("span",{className:"inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-md",children:r})}function CS(){return D.useEffect(()=>{const r=document.querySelectorAll(".reveal"),e=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&s.target.classList.add("is-visible")})},{threshold:.18});return r.forEach(n=>e.observe(n)),()=>e.disconnect()},[]),f.jsxs("main",{className:"overflow-x-hidden bg-white text-gray-700",children:[f.jsxs("section",{className:"relative isolate min-h-[88vh] overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200",children:[f.jsx("div",{className:"hero-orb absolute left-8 top-20 h-48 w-48 rounded-full bg-pink-300/60 blur-3xl"}),f.jsx("div",{className:"hero-orb-delay absolute right-12 top-28 h-64 w-64 rounded-full bg-purple-300/50 blur-3xl"}),f.jsx("div",{className:"hero-orb absolute bottom-14 left-1/3 h-44 w-44 rounded-full bg-rose-200/60 blur-3xl"}),f.jsxs("div",{className:"pointer-events-none absolute inset-x-0 top-4 z-10 mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-white/40 bg-white/35 px-4 py-3 text-sm shadow-lg backdrop-blur-md sm:px-8",children:[f.jsx("p",{className:"text-base font-bold tracking-[0.28em] text-gray-900",children:"EL GLAM"}),f.jsx("p",{className:"hidden text-gray-700 sm:block",children:"Luxury Beauty and Wellness Studio"})]}),f.jsx("img",{src:"https://images.unsplash.com/photo-1596704017254-9ecf5f986640?auto=format&fit=crop&w=900&q=80",alt:"Lavender flowers",className:"pointer-events-none absolute bottom-0 left-0 hidden w-48 max-w-[26vw] opacity-70 md:block"}),f.jsx("img",{src:"https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80",alt:"Pink flowers",className:"pointer-events-none absolute bottom-0 right-0 hidden w-52 max-w-[28vw] opacity-60 md:block"}),f.jsxs("div",{className:"mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-2 md:items-center lg:px-8",children:[f.jsxs("div",{className:"reveal space-y-6",children:[f.jsx("p",{className:"inline-flex rounded-full border border-pink-300/50 bg-white/70 px-4 py-2 text-sm font-medium text-pink-700",children:"Premium Salon and Spa Experience"}),f.jsxs("h1",{className:"font-serif text-6xl leading-[0.95] text-gray-900 sm:text-7xl md:text-8xl",children:["Glow",f.jsx("br",{}),"Starts Here,"]}),f.jsx("p",{className:"max-w-xl text-lg leading-8 text-gray-700 sm:text-xl",children:"Discover elevated beauty services designed to celebrate your confidence, style, and individuality in a space crafted for luxury and care."})]}),f.jsxs("div",{className:"reveal relative",children:[f.jsx("div",{className:"absolute -left-6 -top-6 h-40 w-40 rounded-full bg-white/45 blur-2xl"}),f.jsx("img",{src:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",alt:"Model with glowing skin",className:"relative z-10 w-full rounded-3xl object-cover shadow-2xl"})]})]})]}),f.jsxs("section",{className:"relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8",children:[f.jsxs("div",{className:"reveal relative",children:[f.jsx("div",{className:"absolute -left-8 -top-8 h-48 w-48 rounded-full bg-pink-200/70 blur-3xl"}),f.jsx("div",{className:"absolute -right-4 -bottom-8 h-44 w-44 rounded-full bg-purple-200/70 blur-3xl"}),f.jsx("img",{src:"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",alt:"Elegant salon interior",className:"relative z-10 h-[480px] w-full rounded-3xl object-cover shadow-xl"}),f.jsx("div",{className:"absolute inset-0 z-20 rounded-3xl bg-gradient-to-t from-pink-500/35 via-transparent to-transparent"}),f.jsx("div",{className:"absolute bottom-6 left-6 z-30 rounded-2xl bg-white/90 px-5 py-3 shadow-lg",children:f.jsx("p",{className:"text-sm font-semibold text-gray-900",children:"Est. Since 2010"})})]}),f.jsxs("div",{className:"reveal space-y-6",children:[f.jsx(Xp,{children:"✨ About Us"}),f.jsxs("h2",{className:"text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl",children:["What is"," ",f.jsx("span",{className:"bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",children:"El Glam"}),"?"]}),f.jsx("p",{className:"text-base leading-8 text-gray-600 sm:text-lg",children:"El Glam is a premium beauty destination where artistry meets innovation. We combine salon excellence, advanced treatments, and warm hospitality to deliver a truly personalized experience for every client."}),f.jsx("p",{className:"text-base leading-8 text-gray-600 sm:text-lg",children:"Our mission is to create a space where beauty feels empowering and effortless. From first consultation to final reveal, we focus on quality, comfort, and results that highlight your natural glow."}),f.jsxs("div",{className:"flex flex-wrap gap-3",children:[f.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700",children:[f.jsx(ja,{className:"h-4 w-4"})," Client-Centered"]}),f.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700",children:[f.jsx(Ei,{className:"h-4 w-4"})," Premium Quality"]}),f.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700",children:[f.jsx(gu,{className:"h-4 w-4"})," Award Winning"]})]})]})]}),f.jsx("section",{className:"bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-20",children:f.jsxs("div",{className:"mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",children:[f.jsxs("div",{className:"reveal space-y-5",children:[f.jsx("span",{className:"inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-md",children:"👑 Leadership"}),f.jsx("h2",{className:"text-4xl font-bold text-gray-900 sm:text-5xl",children:"Meet the Owner"}),f.jsxs("article",{className:"rounded-3xl bg-white p-6 shadow-lg sm:p-8",children:[f.jsx("h3",{className:"text-3xl font-bold text-gray-900",children:"Sofia Martinez"}),f.jsx("p",{className:"mt-1 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",children:"Founder & Creative Director"}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[f.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700",children:[f.jsx(Dx,{className:"h-4 w-4"})," 15+ Years"]}),f.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700",children:[f.jsx(Og,{className:"h-4 w-4"})," Certified Expert"]})]}),f.jsx("p",{className:"mt-5 text-base leading-8 text-gray-600",children:"Sofia built El Glam with a clear vision: to redefine beauty care with intention and precision. Her career spans editorial styling, advanced skincare, and team mentorship, with every detail rooted in quality and elegance."}),f.jsx("p",{className:"mt-4 text-base leading-8 text-gray-600",children:"Today, she leads with a client-first philosophy and a passion for innovation, ensuring each guest experiences confidence, comfort, and transformational results."})]}),f.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 p-6 text-white shadow-xl",children:[f.jsx("p",{className:"text-4xl leading-none opacity-60",children:'"'}),f.jsx("p",{className:"mt-2 text-lg leading-8",children:"True beauty begins when you feel seen, cared for, and empowered to shine in your own way."}),f.jsxs("div",{className:"mt-4 flex items-center gap-3 text-sm font-semibold",children:[f.jsx("span",{className:"h-px w-8 bg-white/70"}),"Sofia Martinez"]})]})]}),f.jsxs("div",{className:"reveal relative",children:[f.jsx("div",{className:"absolute -right-4 -top-4 h-20 w-20 rounded-tr-3xl border-t-4 border-r-4 border-pink-300"}),f.jsx("div",{className:"absolute -left-10 top-20 h-56 w-56 rounded-full bg-pink-200/70 blur-3xl"}),f.jsx("div",{className:"absolute -right-6 bottom-12 h-52 w-52 rounded-full bg-purple-200/70 blur-3xl"}),f.jsx("img",{src:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80",alt:"Sofia Martinez, founder of El Glam",className:"relative z-10 h-full min-h-[480px] w-full rounded-3xl object-cover shadow-2xl"}),f.jsx("div",{className:"absolute inset-0 z-20 rounded-3xl bg-gradient-to-t from-black/35 to-transparent"})]})]})}),f.jsxs("section",{className:"relative overflow-hidden bg-white py-20",children:[f.jsx("div",{className:"dot-overlay pointer-events-none absolute inset-0 opacity-40"}),f.jsxs("div",{className:"relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"reveal mx-auto max-w-3xl text-center",children:[f.jsx(Xp,{children:"💎 Our Experts"}),f.jsxs("h2",{className:"mt-5 text-4xl font-bold text-gray-900 sm:text-5xl",children:["Our"," ",f.jsx("span",{className:"bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",children:"Executive Team"})]}),f.jsx("p",{className:"mt-4 text-lg leading-8 text-gray-600",children:"Meet the specialists behind El Glam's signature standards in beauty, style, and wellness."})]}),f.jsx("div",{className:"mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3",children:SS.map(r=>f.jsxs("article",{className:"reveal group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",children:[f.jsxs("div",{className:"relative h-80 overflow-hidden",children:[f.jsx("img",{src:r.image,alt:r.name,className:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"}),f.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-r from-pink-500/75 to-purple-500/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:f.jsx("div",{className:"flex gap-1 text-white",children:[...Array(5)].map((e,n)=>f.jsx(gu,{className:"h-5 w-5 fill-current"},n))})})]}),f.jsxs("div",{className:"p-6",children:[f.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:r.name}),f.jsx("span",{className:"mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"}),f.jsx("p",{className:"mt-3 text-base font-semibold text-pink-600",children:r.role}),f.jsx("p",{className:"mt-3 text-sm leading-7 text-gray-600",children:r.bio})]})]},r.name))})]})]}),f.jsx("section",{className:"animated-gradient-bg py-20",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"reveal mx-auto max-w-3xl text-center",children:[f.jsx("span",{className:"inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-md",children:"⭐ Our Promise"}),f.jsxs("h2",{className:"mt-5 text-4xl font-bold text-gray-900 sm:text-5xl",children:["What We're"," ",f.jsx("span",{className:"bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",children:"Known For"})]}),f.jsx("p",{className:"mt-4 text-lg leading-8 text-gray-600",children:"Every detail of our service is designed around excellence, comfort, and elevated beauty results."})]}),f.jsx("div",{className:"mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4",children:ES.map(r=>{const e=r.icon;return f.jsxs("article",{className:"reveal group relative overflow-hidden rounded-3xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",children:[f.jsx(e,{className:"absolute -bottom-5 -right-3 h-24 w-24 text-pink-100 transition-colors group-hover:text-pink-200"}),f.jsx("div",{className:`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${r.gradient} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6`,children:f.jsx(e,{className:"h-7 w-7"})}),f.jsx("h3",{className:"relative mt-5 text-xl font-bold text-gray-900",children:r.title}),f.jsx("p",{className:"relative mt-3 text-sm leading-7 text-gray-600",children:r.description})]},r.title)})})]})})]})}const kS={pusok:"Menguito Building, ML Quezon National Highway, Pusok, Lapu-Lapu City, Cebu, 6015",pajac:"Helenville Apartment, Bankal Road, Pajac, Lapu-Lapu City, Cebu, 6015","mandaue city":"2nd Floor, Paradise Square, H. Abellana St, Mandaue City, Cebu, 6014",cebu:"8V6R+8VM, Don Gil, Cebu City, 6000"};function IS(){const r=Oa(),e=n=>{r("/book/services",{state:{branchId:n,branchName:Qp.find(s=>s.id===n).name}})};return f.jsx("div",{className:"min-h-screen bg-gray-50",children:f.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("h1",{className:"text-3xl font-bold text-gray-900 sm:text-4xl",children:"Choose Your Branch"}),f.jsx("p",{className:"mt-3 text-gray-600",children:"Select a branch to view available services and book your appointment"})]}),f.jsx("div",{className:"mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4",children:Qp.map(n=>f.jsxs("button",{type:"button",onClick:()=>e(n.id),className:"group flex min-h-[160px] flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-md transition hover:border-accent hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",children:[f.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent/20",children:f.jsx(Lg,{className:"h-8 w-8",strokeWidth:1.5,"aria-hidden":!0})}),f.jsx("span",{className:"mt-4 text-lg font-semibold text-gray-900",children:n.name}),f.jsx("span",{className:"mt-1 text-xs text-gray-500 text-center",children:kS[n.id]})]},n.id))})]})})}const NS={sparkles:Ei,scissors:Mg,heart:ja};function TS(){var M,O,T;const r=Or(),e=Oa(),n=((M=r.state)==null?void 0:M.branchName)||"Selected Branch",s=(O=r.state)==null?void 0:O.branchId,a=((T=r.state)==null?void 0:T.initialServices)||[],[c,d]=D.useState(null),[p,m]=D.useState(a),[y,_]=D.useState(""),v=F=>{m(q=>q.find(ee=>ee.name===F.name&&ee.price===F.price)?q.filter(ee=>!(ee.name===F.name&&ee.price===F.price)):[...q,{name:F.name,price:F.price}])},E=()=>{p.length&&e("/book/stylist",{state:{branchId:s,branchName:n,services:p}})},A=F=>{d(q=>q===F?null:F)};return f.jsx("div",{className:"min-h-screen bg-gray-50",children:f.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-8 sm:py-12",children:[f.jsxs(wn,{to:"/book",className:"mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent",children:[f.jsx($u,{className:"h-5 w-5"}),"Change branch"]}),f.jsxs("div",{className:"mb-8",children:[f.jsx("p",{className:"text-sm font-medium text-accent",children:"Booking at"}),f.jsx("h1",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:n}),f.jsx("p",{className:"mt-1 text-gray-600",children:"Select a category, then add one or more services"})]}),f.jsxs("div",{className:"mb-6 max-w-xs",children:[f.jsx("label",{htmlFor:"service-search",className:"block text-sm font-medium text-gray-700",children:"Search services"}),f.jsx("input",{id:"service-search",type:"text",value:y,onChange:F=>_(F.target.value),placeholder:"Type a service name, e.g. haircut, facial, massage...",className:"mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"})]}),f.jsx("div",{className:"space-y-4",children:da.map(F=>{const q=NS[F.icon]||Ei,ee=y.trim().length>0||c===F.id;return f.jsxs("div",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md",children:[f.jsxs("button",{type:"button",onClick:()=>A(F.id),className:"flex w-full items-center justify-between p-6 text-left transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset",children:[f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsx("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent",children:f.jsx(q,{className:"h-7 w-7",strokeWidth:1.5})}),f.jsx("span",{className:"text-xl font-semibold text-gray-900",children:F.title})]}),f.jsx(Lx,{className:`h-6 w-6 shrink-0 text-gray-500 transition-transform ${ee?"rotate-180":""}`})]}),ee&&f.jsx("div",{className:"border-t border-gray-100 bg-gray-50/50 px-6 pb-6 pt-2",children:f.jsx("div",{className:"space-y-6",children:F.data.map(ie=>f.jsxs("div",{children:[f.jsx("h3",{className:"mb-2 text-sm font-semibold uppercase tracking-wide text-accent",children:ie.subcategory}),f.jsx("ul",{className:"space-y-2",children:ie.services.map(le=>{if(y&&!le.name.toLowerCase().includes(y.toLowerCase()))return null;const ze=p.some(be=>be.name===le.name&&be.price===le.price);return f.jsxs("li",{className:"flex flex-col gap-2 rounded-lg bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-3",children:[f.jsxs("div",{className:"min-w-0 flex-1",children:[f.jsx("span",{className:"font-medium text-gray-900",children:le.name}),f.jsx("span",{className:"ml-0 block text-accent font-semibold sm:ml-2 sm:inline",children:le.price})]}),f.jsx("button",{type:"button",onClick:()=>v(le),className:`shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-white transition ${ze?"bg-gray-500 hover:bg-gray-600":"bg-accent hover:bg-accent-dark"}`,children:ze?"Remove":"Add"})]},`${ie.subcategory}-${le.name}`)})})]},ie.subcategory))})})]},F.id)})}),f.jsxs("div",{className:"mt-10 rounded-2xl border border-dashed border-accent/40 bg-white p-5 shadow-sm",children:[f.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Selected services"}),p.length===0?f.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"No services selected yet. Tap “Add” on one or more services to include them in your booking."}):f.jsx("ul",{className:"mt-3 space-y-2 text-sm",children:p.map(F=>f.jsxs("li",{className:"flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-3 py-2",children:[f.jsx("span",{className:"font-medium text-gray-900",children:F.name}),f.jsx("span",{className:"text-accent font-semibold",children:F.price})]},`${F.name}-${F.price}`))}),f.jsx("button",{type:"button",onClick:E,disabled:!p.length,className:"mt-4 w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white shadow-md transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600",children:"Continue to appointment details"})]})]})})}function bS(){const r=Or(),e=Oa(),{branchId:n,branchName:s,services:a}=r.state||{},[c,d]=D.useState([]),p=n?yu[n]||[]:[],m=_=>{d(v=>v.find(A=>A.name===_.name)?v.filter(A=>A.name!==_.name):[...v,_])},y=()=>{c.length&&e("/book/details",{state:{branchId:n,branchName:s,services:a,stylists:c}})};return!n||!s||!a||!a.length?f.jsxs("div",{className:"mx-auto max-w-md px-4 py-12 text-center",children:[f.jsx("p",{className:"text-gray-600",children:"No booking information found."}),f.jsx(wn,{to:"/book",className:"mt-4 inline-block text-accent hover:underline",children:"Start over"})]}):f.jsx("div",{className:"min-h-screen bg-gray-50",children:f.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-8 sm:py-12",children:[f.jsxs(wn,{to:"/book/services",state:{branchId:n,branchName:s},className:"mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent",children:[f.jsx($u,{className:"h-5 w-5"}),"Back to services"]}),f.jsxs("div",{className:"mb-8",children:[f.jsx("p",{className:"text-sm font-medium text-accent",children:"Step 3 of 4"}),f.jsx("h1",{className:"mt-1 text-2xl font-bold text-gray-900 sm:text-3xl",children:"Choose your stylist"}),f.jsxs("p",{className:"mt-2 text-gray-600",children:["Available stylists at ",f.jsx("span",{className:"font-semibold",children:s})]})]}),f.jsxs("div",{className:"mb-6 rounded-2xl bg-white p-4 shadow-sm",children:[f.jsx("h2",{className:"text-sm font-semibold text-gray-800",children:"Selected services"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm",children:a.map(_=>f.jsxs("li",{className:"flex items-center justify-between gap-2",children:[f.jsx("span",{className:"font-medium text-gray-900",children:_.name}),f.jsx("span",{className:"text-accent font-semibold",children:_.price})]},`${_.name}-${_.price}`))})]}),f.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:p.map(_=>{const v=c.some(A=>A.name===_.name),E=Ug(_.name);return f.jsxs("button",{type:"button",onClick:()=>m(_),className:`flex flex-col items-start rounded-2xl border-2 bg-white p-5 text-left shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${v?"border-accent":"border-gray-200"}`,children:[f.jsxs("div",{className:"relative h-12 w-12 overflow-hidden rounded-full bg-accent/10",children:[f.jsx("div",{className:"flex h-full w-full items-center justify-center text-xs font-semibold text-accent",children:Fg(_.name)}),f.jsx("img",{src:E[0],alt:`${_.name} profile`,className:"absolute inset-0 h-full w-full object-cover",loading:"lazy","data-photo-index":"0",onError:A=>zg(A,E)})]}),f.jsx("p",{className:"mt-3 text-sm font-medium uppercase tracking-wide text-gray-500",children:_.role}),f.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:_.name}),_.specialty&&f.jsx("p",{className:"mt-1 text-sm text-gray-500",children:_.specialty}),v&&f.jsxs("p",{className:"mt-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent",children:[f.jsx(Gx,{className:"h-3 w-3"}),"Selected"]})]},_.name)})}),p.length===0&&f.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"No specific stylists are listed for this branch yet. You can continue without choosing a stylist."}),f.jsxs("div",{className:"mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between",children:[f.jsx("button",{type:"button",onClick:()=>e("/book/details",{state:{branchId:n,branchName:s,services:a,stylists:[]}}),className:"rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50",children:"No preference – any available stylist"}),f.jsx("button",{type:"button",onClick:y,disabled:!c.length,className:"rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600",children:"Continue with selected stylists"})]})]})})}const RS=()=>{};var Zp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(r,e){if(!r)throw Ci(e)},Ci=function(r){return new Error("Firebase Database ("+Bg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let a=r.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},PS=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const a=r[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=r[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=r[n++],d=r[n++],p=r[n++],m=((a&7)<<18|(c&63)<<12|(d&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const c=r[n++],d=r[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<r.length;a+=3){const c=r[a],d=a+1<r.length,p=d?r[a+1]:0,m=a+2<r.length,y=m?r[a+2]:0,_=c>>2,v=(c&3)<<4|p>>4;let E=(p&15)<<2|y>>6,A=y&63;m||(A=64,d||(E=64)),s.push(n[_],n[v],n[E],n[A])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Wg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):PS(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<r.length;){const c=n[r.charAt(a++)],p=a<r.length?n[r.charAt(a)]:0;++a;const y=a<r.length?n[r.charAt(a)]:64;++a;const v=a<r.length?n[r.charAt(a)]:64;if(++a,c==null||p==null||y==null||v==null)throw new AS;const E=c<<2|p>>4;if(s.push(E),y!==64){const A=p<<4&240|y>>2;if(s.push(A),v!==64){const M=y<<6&192|v;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class AS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(r){const e=Wg(r);return qu.encodeByteArray(e,!0)},ha=function(r){return Hg(r).replace(/\./g,"")},fa=function(r){try{return qu.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(r){return Vg(void 0,r)}function Vg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!jS(n)||(r[n]=Vg(r[n],e[n]));return r}function jS(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=()=>LS().__FIREBASE_DEFAULTS__,DS=()=>{if(typeof process>"u"||typeof Zp>"u")return;const r=Zp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},FS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&fa(r[1]);return e&&JSON.parse(e)},Ku=()=>{try{return RS()||MS()||DS()||FS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},$g=r=>{var e,n;return(n=(e=Ku())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},US=r=>{const e=$g(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Gg=()=>{var r;return(r=Ku())==null?void 0:r.config},qg=r=>{var e;return(e=Ku())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[ha(JSON.stringify(n)),ha(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function BS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WS(){const r=at();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function HS(){return Bg.NODE_ADMIN===!0}function Qg(){try{return typeof indexedDB=="object"}catch{return!1}}function Jg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}function VS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=$S,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?GS(c,s):"Error",p=`${this.serviceName}: ${d} (${a}).`;return new an(a,p,s)}}function GS(r,e){return r.replace(qS,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const qS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r){return JSON.parse(r)}function Qe(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(r){let e={},n={},s={},a="";try{const c=r.split(".");e=Ts(fa(c[0])||""),n=Ts(fa(c[1])||""),a=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:a}},KS=function(r){const e=Xg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YS=function(r){const e=Xg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function _i(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function vu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function pa(r,e,n){const s={};for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[a]=e.call(n,r[a],a,r));return s}function ir(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=r[a],d=e[a];if(em(c)&&em(d)){if(!ir(c,d))return!1}else if(c!==d)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function em(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const E=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(E<<1|E>>>31)&4294967295}let a=this.chain_[0],c=this.chain_[1],d=this.chain_[2],p=this.chain_[3],m=this.chain_[4],y,_;for(let v=0;v<80;v++){v<40?v<20?(y=p^c&(d^p),_=1518500249):(y=c^d^p,_=1859775393):v<60?(y=c&d|p&(c|d),_=2400959708):(y=c^d^p,_=3395469782);const E=(a<<5|a>>>27)+y+m+_+s[v]&4294967295;m=p,p=d,d=(c<<30|c>>>2)&4294967295,c=a,a=E}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let a=0;const c=this.buf_;let d=this.inbuf_;for(;a<n;){if(d===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<n;)if(c[d]=e.charCodeAt(a),++d,++a,d===this.blockSize){this.compress_(c),d=0;break}}else for(;a<n;)if(c[d]=e[a],++d,++a,d===this.blockSize){this.compress_(c),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[a]>>c&255,++s;return e}}function JS(r,e){const n=new XS(r,e);return n.subscribe.bind(n)}class XS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=Yc),a.error===void 0&&(a.error=Yc),a.complete===void 0&&(a.complete=Yc);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Yc(){}function Qu(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let a=r.charCodeAt(s);if(a>=55296&&a<=56319){const c=a-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;a=65536+(c<<10)+d}a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):a<65536?(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Ma=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=1e3,nE=2,rE=14400*1e3,iE=.5;function tm(r,e=tE,n=nE){const s=e*Math.pow(n,r),a=Math.round(iE*s*(Math.random()-.5)*2);return Math.min(rE,s+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zg(r){return(await fetch(r,{credentials:"include"})).ok}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new La;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aE(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&d.resolve(a)}return a}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:oE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oE(r){return r===wr?void 0:r}function aE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ge||(ge={}));const cE={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},uE=ge.INFO,dE={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},hE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),a=dE[e];if(a)console[a](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=uE,this._logHandler=hE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const fE=(r,e)=>e.some(n=>r instanceof n);let nm,rm;function pE(){return nm||(nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mE(){return rm||(rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ey=new WeakMap,_u=new WeakMap,ty=new WeakMap,Qc=new WeakMap,Ju=new WeakMap;function gE(r){const e=new Promise((n,s)=>{const a=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(er(r.result)),a()},d=()=>{s(r.error),a()};r.addEventListener("success",c),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&ey.set(n,r)}).catch(()=>{}),Ju.set(e,r),e}function yE(r){if(_u.has(r))return;const e=new Promise((n,s)=>{const a=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),a()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});_u.set(r,e)}let wu={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return _u.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ty.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function vE(r){wu=r(wu)}function _E(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Jc(this),e,...n);return ty.set(s,e.sort?e.sort():[e]),er(s)}:mE().includes(r)?function(...e){return r.apply(Jc(this),e),er(ey.get(this))}:function(...e){return er(r.apply(Jc(this),e))}}function wE(r){return typeof r=="function"?_E(r):(r instanceof IDBTransaction&&yE(r),fE(r,pE())?new Proxy(r,wu):r)}function er(r){if(r instanceof IDBRequest)return gE(r);if(Qc.has(r))return Qc.get(r);const e=wE(r);return e!==r&&(Qc.set(r,e),Ju.set(e,r)),e}const Jc=r=>Ju.get(r);function ny(r,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const d=indexedDB.open(r,e),p=er(d);return s&&d.addEventListener("upgradeneeded",m=>{s(er(d.result),m.oldVersion,m.newVersion,er(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),a&&m.addEventListener("versionchange",y=>a(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const xE=["get","getKey","getAll","getAllKeys","count"],SE=["put","add","delete","clear"],Xc=new Map;function im(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xc.get(e))return Xc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=SE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||xE.includes(n)))return;const c=async function(d,...p){const m=this.transaction(d,a?"readwrite":"readonly");let y=m.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),a&&m.done]))[0]};return Xc.set(e,c),c}vE(r=>({...r,get:(e,n,s)=>im(e,n)||r.get(e,n,s),has:(e,n)=>!!im(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function CE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xu="@firebase/app",sm="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Da("@firebase/app"),kE="@firebase/app-compat",IE="@firebase/analytics-compat",NE="@firebase/analytics",TE="@firebase/app-check-compat",bE="@firebase/app-check",RE="@firebase/auth",PE="@firebase/auth-compat",AE="@firebase/database",OE="@firebase/data-connect",jE="@firebase/database-compat",LE="@firebase/functions",ME="@firebase/functions-compat",DE="@firebase/installations",FE="@firebase/installations-compat",UE="@firebase/messaging",zE="@firebase/messaging-compat",BE="@firebase/performance",WE="@firebase/performance-compat",HE="@firebase/remote-config",VE="@firebase/remote-config-compat",$E="@firebase/storage",GE="@firebase/storage-compat",qE="@firebase/firestore",KE="@firebase/ai",YE="@firebase/firestore-compat",QE="firebase",JE="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="[DEFAULT]",XE={[xu]:"fire-core",[kE]:"fire-core-compat",[NE]:"fire-analytics",[IE]:"fire-analytics-compat",[bE]:"fire-app-check",[TE]:"fire-app-check-compat",[RE]:"fire-auth",[PE]:"fire-auth-compat",[AE]:"fire-rtdb",[OE]:"fire-data-connect",[jE]:"fire-rtdb-compat",[LE]:"fire-fn",[ME]:"fire-fn-compat",[DE]:"fire-iid",[FE]:"fire-iid-compat",[UE]:"fire-fcm",[zE]:"fire-fcm-compat",[BE]:"fire-perf",[WE]:"fire-perf-compat",[HE]:"fire-rc",[VE]:"fire-rc-compat",[$E]:"fire-gcs",[GE]:"fire-gcs-compat",[qE]:"fire-fst",[YE]:"fire-fst-compat",[KE]:"fire-vertex","fire-js":"fire-js",[QE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map,ZE=new Map,Eu=new Map;function om(r,e){try{r.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function on(r){const e=r.name;if(Eu.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Eu.set(e,r);for(const n of ma.values())om(n,r);for(const n of ZE.values())om(n,r);return!0}function Lr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function $t(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new jr("app","Firebase",eC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=JE;function ry(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Su,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw tr.create("bad-app-name",{appName:String(a)});if(n||(n=Gg()),!n)throw tr.create("no-options");const c=ma.get(a);if(c){if(ir(n,c.options)&&ir(s,c.config))return c;throw tr.create("duplicate-app",{appName:a})}const d=new lE(a);for(const m of Eu.values())d.addComponent(m);const p=new tC(n,s,d);return ma.set(a,p),p}function Xu(r=Su){const e=ma.get(r);if(!e&&r===Su&&Gg())return ry();if(!e)throw tr.create("no-app",{appName:r});return e}function Ot(r,e,n){let s=XE[r]??r;n&&(s+=`-${n}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(d.join(" "));return}on(new Qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebase-heartbeat-database",rC=1,bs="firebase-heartbeat-store";let Zc=null;function iy(){return Zc||(Zc=ny(nC,rC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(bs)}catch(n){console.warn(n)}}}}).catch(r=>{throw tr.create("idb-open",{originalErrorMessage:r.message})})),Zc}async function iC(r){try{const n=(await iy()).transaction(bs),s=await n.objectStore(bs).get(sy(r));return await n.done,s}catch(e){if(e instanceof an)Sn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function am(r,e){try{const s=(await iy()).transaction(bs,"readwrite");await s.objectStore(bs).put(e,sy(r)),await s.done}catch(n){if(n instanceof an)Sn.warn(n.message);else{const s=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(s.message)}}}function sy(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=1024,oC=30;class aC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=lm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>oC){const d=uC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lm(),{heartbeatsToSend:s,unsentEntries:a}=lC(this._heartbeatsCache.heartbeats),c=ha(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Sn.warn(n),""}}}function lm(){return new Date().toISOString().substring(0,10)}function lC(r,e=sC){const n=[];let s=r.slice();for(const a of r){const c=n.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),cm(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),cm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qg()?Jg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return am(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return am(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cm(r){return ha(JSON.stringify({version:2,heartbeats:r})).length}function uC(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(r){on(new Qt("platform-logger",e=>new EE(e),"PRIVATE")),on(new Qt("heartbeat",e=>new aC(e),"PRIVATE")),Ot(xu,sm,r),Ot(xu,sm,"esm2020"),Ot("fire-js","")}dC("");var um={};const dm="@firebase/database",hm="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oy="";function hC(r){oy=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fC(e)}}catch{}return new pC},Sr=ay("localStorage"),mC=ay("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Da("@firebase/database"),gC=(function(){let r=1;return function(){return r++}})(),ly=function(r){const e=eE(r),n=new QS;n.update(e);const s=n.digest();return qu.encodeByteArray(s)},Ls=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ls.apply(null,s):typeof s=="object"?e+=Qe(s):e+=s,e+=" "}return e};let xs=null,fm=!0;const yC=function(r,e){U(!0,"Can't turn on custom loggers persistently."),fi.logLevel=ge.VERBOSE,xs=fi.log.bind(fi)},nt=function(...r){if(fm===!0&&(fm=!1,xs===null&&mC.get("logging_enabled")===!0&&yC()),xs){const e=Ls.apply(null,r);xs(e)}},Ms=function(r){return function(...e){nt(r,...e)}},Cu=function(...r){const e="FIREBASE INTERNAL ERROR: "+Ls(...r);fi.error(e)},En=function(...r){const e=`FIREBASE FATAL ERROR: ${Ls(...r)}`;throw fi.error(e),new Error(e)},vt=function(...r){const e="FIREBASE WARNING: "+Ls(...r);fi.warn(e)},vC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cy=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},_C=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wi="[MIN_NAME]",kr="[MAX_NAME]",Ni=function(r,e){if(r===e)return 0;if(r===wi||e===kr)return-1;if(e===wi||r===kr)return 1;{const n=pm(r),s=pm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},wC=function(r,e){return r===e?0:r<e?-1:1},ys=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Qe(e))},Zu=function(r){if(typeof r!="object"||r===null)return Qe(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Qe(e[s]),n+=":",n+=Zu(r[e[s]]);return n+="}",n},uy=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let a=0;a<n;a+=e)a+e>n?s.push(r.substring(a,n)):s.push(r.substring(a,a+e));return s};function jt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const dy=function(r){U(!cy(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let a,c,d,p,m;r===0?(c=0,d=0,a=1/r===-1/0?1:0):(a=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(p=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=p+s,d=Math.round(r*Math.pow(2,n-p)-Math.pow(2,n))):(c=0,d=Math.round(r/Math.pow(2,1-s-n))));const y=[];for(m=n;m;m-=1)y.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)y.push(c%2?1:0),c=Math.floor(c/2);y.push(a?1:0),y.reverse();const _=y.join("");let v="";for(m=0;m<64;m+=8){let E=parseInt(_.substr(m,8),2).toString(16);E.length===1&&(E="0"+E),v=v+E}return v.toLowerCase()},xC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},EC=new RegExp("^-?(0*)\\d{1,10}$"),CC=-2147483648,kC=2147483647,pm=function(r){if(EC.test(r)){const e=Number(r);if(e>=CC&&e<=kC)return e}return null},Ti=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},IC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ss=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,$t(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){vt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vt(e)}}class sa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sa.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="5",hy="v",fy="s",py="r",my="f",gy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yy="ls",vy="p",ku="ac",_y="websocket",wy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n,s,a,c=!1,d="",p=!1,m=!1,y=null){this.secure=n,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=c,this.persistenceKey=d,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this.emulatorOptions=y,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bC(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Sy(r,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===_y)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===wy)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bC(r)&&(n.ns=r.namespace);const a=[];return jt(n,(c,d)=>{a.push(c+"="+d)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.counters_={}}incrementCounter(e,n=1){Nn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return OS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu={},tu={};function td(r){const e=r.toString();return eu[e]||(eu[e]=new RC),eu[e]}function PC(r,e){const n=r.toString();return tu[n]||(tu[n]=e()),tu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ti(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="start",OC="close",jC="pLPCommand",LC="pRTLPCB",Ey="id",Cy="pw",ky="ser",MC="cb",DC="seg",FC="ts",UC="d",zC="dframe",Iy=1870,Ny=30,BC=Iy-Ny,WC=25e3,HC=3e4;class di{constructor(e,n,s,a,c,d,p){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.transportSessionId=d,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ms(e),this.stats_=td(n),this.urlFn=m=>(this.appCheckToken&&(m[ku]=this.appCheckToken),Sy(n,wy,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HC)),_C(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nd((...c)=>{const[d,p,m,y,_]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===mm)this.id=p,this.password=m;else if(d===OC)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...c)=>{const[d,p]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(d,p)},()=>{this.onClosed_()},this.urlFn);const s={};s[mm]="t",s[ky]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[MC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[hy]=ed,this.transportSessionId&&(s[fy]=this.transportSessionId),this.lastSessionId&&(s[yy]=this.lastSessionId),this.applicationId&&(s[vy]=this.applicationId),this.appCheckToken&&(s[ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&gy.test(location.hostname)&&(s[py]=my);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){di.forceAllow_=!0}static forceDisallow(){di.forceDisallow_=!0}static isAvailable(){return di.forceAllow_?!0:!di.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xC()&&!SC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hg(n),a=uy(s,BC);for(let c=0;c<a.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[zC]="t",s[Ey]=e,s[Cy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nd{constructor(e,n,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gC(),window[jC+this.uniqueCallbackIdentifier]=e,window[LC+this.uniqueCallbackIdentifier]=n,this.myIFrame=nd.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(p){nt("frame writing exception"),p.stack&&nt(p.stack),nt(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ey]=this.myID,e[Cy]=this.myPW,e[ky]=this.currentSerial;let n=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ny+s.length<=Iy;){const d=this.pendingSegs.shift();s=s+"&"+DC+a+"="+d.seg+"&"+FC+a+"="+d.ts+"&"+UC+a+"="+d.d,a++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(s,Math.floor(WC)),c=()=>{clearTimeout(a),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=16384,$C=45e3;let ga=null;typeof MozWebSocket<"u"?ga=MozWebSocket:typeof WebSocket<"u"&&(ga=WebSocket);class Gt{constructor(e,n,s,a,c,d,p){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ms(this.connId),this.stats_=td(n),this.connURL=Gt.connectionURL_(n,d,p,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,a,c){const d={};return d[hy]=ed,typeof location<"u"&&location.hostname&&gy.test(location.hostname)&&(d[py]=my),n&&(d[fy]=n),s&&(d[yy]=s),a&&(d[ku]=a),c&&(d[vy]=c),Sy(e,_y,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;HS(),this.mySock=new ga(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ga!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ts(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=uy(n,VC);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($C))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{static get ALL_TRANSPORTS(){return[di,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Gt&&Gt.isAvailable();let s=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Gt];else{const a=this.transports_=[];for(const c of Rs.ALL_TRANSPORTS)c&&c.isAvailable()&&a.push(c);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=6e4,qC=5e3,KC=10*1024,YC=100*1024,nu="t",gm="d",QC="s",ym="r",JC="e",vm="o",_m="a",wm="n",xm="p",XC="h";class ZC{constructor(e,n,s,a,c,d,p,m,y,_){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=c,this.onMessage_=d,this.onReady_=p,this.onDisconnect_=m,this.onKill_=y,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ms("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nu in e){const n=e[nu];n===_m?this.upgradeIfSecondaryHealthy_():n===ym?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_m,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ys(nu,e);if(gm in e){const s=e[gm];if(n===XC){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(n===wm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===QC?this.onConnectionShutdown_(s):n===ym?this.onReset_(s):n===JC?Cu("Server Error: "+s):n===vm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ed!==s&&vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{put(e,n,s,a){}merge(e,n,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const a=this.getInitialEvent(e);a&&n.apply(s,a)}off(e,n,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let c=0;c<a.length;c++)if(a[c].callback===n&&(!s||s===a[c].context)){a.splice(c,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends by{static getInstance(){return new ya}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=32,Em=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Ce("")}function se(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function sr(r){return r.pieces_.length-r.pieceNum_}function Ee(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Ce(r.pieces_,e)}function Ry(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function e1(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Py(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Ay(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new Ce(e,0)}function Ue(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof Ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&n.push(s[a])}return new Ce(n,0)}function oe(r){return r.pieceNum_>=r.pieces_.length}function At(r,e){const n=se(r),s=se(e);if(n===null)return e;if(n===s)return At(Ee(r),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function Oy(r,e){if(sr(r)!==sr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function qt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(sr(r)>sr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class t1{constructor(e,n){this.errorPrefix_=n,this.parts_=Py(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ma(this.parts_[s]);jy(this)}}function n1(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Ma(e),jy(r)}function r1(r){const e=r.parts_.pop();r.byteLength_-=Ma(e),r.parts_.length>0&&(r.byteLength_-=1)}function jy(r){if(r.byteLength_>Em)throw new Error(r.errorPrefix_+"has a key path longer than "+Em+" bytes ("+r.byteLength_+").");if(r.parts_.length>Sm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sm+") or object contains a cycle "+xr(r))}function xr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends by{static getInstance(){return new rd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=1e3,i1=300*1e3,Cm=30*1e3,s1=1.3,o1=3e4,a1="server_kill",km=3;class xn extends Ty{constructor(e,n,s,a,c,d,p,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=c,this.authTokenProvider_=d,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=xn.nextPersistentConnectionId_++,this.log_=Ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vs,this.maxReconnectDelay_=i1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ya.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const a=++this.requestNumber_,c={r:a,a:e,b:n};this.log_(Qe(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const n=new La,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const p=d.d;d.s==="ok"?n.resolve(p):n.reject(p)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,a){this.initConnection_();const c=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+c),this.listens.has(d)||this.listens.set(d,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(d).has(c),"listen() called twice for same path/queryId.");const p={onComplete:a,hashFn:n,query:e,tag:s};this.listens.get(d).set(c,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+s+" for "+a);const c={p:s},d="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(d,c,p=>{const m=p.d,y=p.s;xn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",p),y!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(y,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nn(e,"w")){const s=_i(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=KS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,a=>{const c=a.s,d=a.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,n)}sendUnlisten_(e,n,s,a){this.log_("Unlisten on "+e+" for "+n);const c={p:e},d="n";a&&(c.q=s,c.t=a),this.sendRequest(d,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,a){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,d=>{a&&setTimeout(()=>{a(d.s,d.d)},Math.floor(0))})}put(e,n,s,a){this.putInternal("p",e,n,s,a)}merge(e,n,s,a){this.putInternal("m",e,n,s,a)}putInternal(e,n,s,a,c){this.initConnection_();const d={p:n,d:s};c!==void 0&&(d.h=c),this.outstandingPuts_.push({action:e,request:d,onComplete:a}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cu("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>o1&&(this.reconnectDelay_=vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*s1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+xn.nextConnectionId_++,c=this.lastSessionId;let d=!1,p=null;const m=function(){p?p.close():(d=!0,s())},y=function(v){U(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(v)};this.realtime_={close:m,sendRequest:y};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,E]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);d?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=E&&E.token,p=new ZC(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,A=>{vt(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(a1)},c))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&vt(v),m())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vu(this.interruptReasons_)&&(this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>Zu(c)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,n){const s=new Ce(e).toString();let a;if(this.listens.has(s)){const c=this.listens.get(s);a=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=km&&(this.reconnectDelay_=Cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=km&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+oy.replace(/\./g,"-")]=1,Yu()?e["framework.cordova"]=1:Yg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ya.getInstance().currentlyOnline();return vu(this.interruptReasons_)&&e}}xn.nextPersistentConnectionId_=0;xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae(wi,e),a=new ae(wi,n);return this.compare(s,a)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;class Ly extends Fa{static get __EMPTY_NODE(){return ea}static set __EMPTY_NODE(e){ea=e}compare(e,n){return Ni(e.name,n.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(kr,ea)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,ea)}toString(){return".key"}}const pi=new Ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,s,a,c=null){this.isReverse_=a,this.resultGenerator_=c,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,a&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??$e.RED,this.left=a??yt.EMPTY_NODE,this.right=c??yt.EMPTY_NODE}copy(e,n,s,a,c){return new $e(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return c<0?a=a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,a;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class l1{copy(e,n,s,a,c){return this}insert(e,n,s){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,a=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ta(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ta(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ta(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ta(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new l1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(r,e){return Ni(r.name,e.name)}function id(r,e){return Ni(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;function u1(r){Iu=r}const My=function(r){return typeof r=="number"?"number:"+dy(r):"string:"+r},Dy=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nn(e,".sv"),"Priority must be a string or number.")}else U(r===Iu||r.isEmpty(),"priority of unexpected type.");U(r===Iu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Im;class Ve{static set __childrenNodeConstructor(e){Im=e}static get __childrenNodeConstructor(){return Im}constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:se(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+My(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dy(this.value_):e+=this.value_,this.lazyHash_=ly(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,a=Ve.VALUE_TYPE_ORDER.indexOf(n),c=Ve.VALUE_TYPE_ORDER.indexOf(s);return U(a>=0,"Unknown leaf type: "+n),U(c>=0,"Unknown leaf type: "+s),a===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fy,Uy;function d1(r){Fy=r}function h1(r){Uy=r}class f1 extends Fa{compare(e,n){const s=e.node.getPriority(),a=n.node.getPriority(),c=s.compareTo(a);return c===0?Ni(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(kr,new Ve("[PRIORITY-POST]",Uy))}makePost(e,n){const s=Fy(e);return new ae(n,new Ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const rt=new f1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=Math.log(2);class m1{constructor(e){const n=c=>parseInt(Math.log(c)/p1,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const va=function(r,e,n,s){r.sort(e);const a=function(m,y){const _=y-m;let v,E;if(_===0)return null;if(_===1)return v=r[m],E=n?n(v):v,new $e(E,v.node,$e.BLACK,null,null);{const A=parseInt(_/2,10)+m,M=a(m,A),O=a(A+1,y);return v=r[A],E=n?n(v):v,new $e(E,v.node,$e.BLACK,M,O)}},c=function(m){let y=null,_=null,v=r.length;const E=function(M,O){const T=v-M,F=v;v-=M;const q=a(T+1,F),K=r[T],ee=n?n(K):K;A(new $e(ee,K.node,O,null,q))},A=function(M){y?(y.left=M,y=M):(_=M,y=M)};for(let M=0;M<m.count;++M){const O=m.nextBitIsOne(),T=Math.pow(2,m.count-(M+1));O?E(T,$e.BLACK):(E(T,$e.BLACK),E(T,$e.RED))}return _},d=new m1(r.length),p=c(d);return new yt(s||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;const ui={};class yn{static get Default(){return U(ui&&rt,"ChildrenNode.ts has not been loaded"),ru=ru||new yn({".priority":ui},{".priority":rt}),ru}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=_i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return Nn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const c=n.getIterator(ae.Wrap);let d=c.getNext();for(;d;)a=a||e.isDefinedOn(d.node),s.push(d),d=c.getNext();let p;a?p=va(s,e.getCompare()):p=ui;const m=e.toString(),y={...this.indexSet_};y[m]=e;const _={...this.indexes_};return _[m]=p,new yn(_,y)}addToIndexes(e,n){const s=pa(this.indexes_,(a,c)=>{const d=_i(this.indexSet_,c);if(U(d,"Missing index implementation for "+c),a===ui)if(d.isDefinedOn(e.node)){const p=[],m=n.getIterator(ae.Wrap);let y=m.getNext();for(;y;)y.name!==e.name&&p.push(y),y=m.getNext();return p.push(e),va(p,d.getCompare())}else return ui;else{const p=n.get(e.name);let m=a;return p&&(m=m.remove(new ae(e.name,p))),m.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=pa(this.indexes_,a=>{if(a===ui)return a;{const c=n.get(e.name);return c?a.remove(new ae(e.name,c)):a}});return new yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class fe{static get EMPTY_NODE(){return _s||(_s=new fe(new yt(id),null,yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Dy(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let a,c;n.isEmpty()?(a=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const d=a.isEmpty()?_s:this.priorityNode_;return new fe(a,d,c)}}updateChild(e,n){const s=se(e);if(s===null)return n;{U(se(e)!==".priority"||sr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,a=0,c=!0;if(this.forEachChild(rt,(d,p)=>{n[d]=p.val(e),s++,c&&fe.INTEGER_REGEXP_.test(d)?a=Math.max(a,Number(d)):c=!1}),!e&&c&&a<2*s){const d=[];for(const p in n)d[p]=n[p];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+My(this.getPriority().val())+":"),this.forEachChild(rt,(n,s)=>{const a=s.hash();a!==""&&(e+=":"+n+":"+a)}),this.lazyHash_=e===""?"":ly(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const a=this.resolveIndex_(s);if(a){const c=a.getPredecessorKey(new ae(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,ae.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)<0;)a.getNext(),c=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)>0;)a.getNext(),c=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(rt),a=n.getIterator(rt);let c=s.getNext(),d=a.getNext();for(;c&&d;){if(c.name!==d.name||!c.node.equals(d.node))return!1;c=s.getNext(),d=a.getNext()}return c===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class g1 extends fe{constructor(){super(new yt(id),fe.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fe.EMPTY_NODE}isEmpty(){return!1}}const Ds=new g1;Object.defineProperties(ae,{MIN:{value:new ae(wi,fe.EMPTY_NODE)},MAX:{value:new ae(kr,Ds)}});Ly.__EMPTY_NODE=fe.EMPTY_NODE;Ve.__childrenNodeConstructor=fe;u1(Ds);h1(Ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=!0;function Ye(r,e=null){if(r===null)return fe.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ve(n,Ye(e))}if(!(r instanceof Array)&&y1){const n=[];let s=!1;if(jt(r,(d,p)=>{if(d.substring(0,1)!=="."){const m=Ye(p);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new ae(d,m)))}}),n.length===0)return fe.EMPTY_NODE;const c=va(n,c1,d=>d.name,id);if(s){const d=va(n,rt.getCompare());return new fe(c,Ye(e),new yn({".priority":d},{".priority":rt}))}else return new fe(c,Ye(e),yn.Default)}else{let n=fe.EMPTY_NODE;return jt(r,(s,a)=>{if(Nn(r,s)&&s.substring(0,1)!=="."){const c=Ye(a);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(Ye(e))}}d1(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1 extends Fa{constructor(e){super(),this.indexPath_=e,U(!oe(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),a=this.extractChild(n.node),c=s.compareTo(a);return c===0?Ni(e.name,n.name):c}makePost(e,n){const s=Ye(e),a=fe.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,a)}maxPost(){const e=fe.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new ae(kr,e)}toString(){return Py(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1 extends Fa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ni(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=Ye(e);return new ae(n,s)}toString(){return".value"}}const w1=new _1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(r){return{type:"value",snapshotNode:r}}function S1(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function E1(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Nm(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function C1(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wi}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rt}copy(){const e=new sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===rt?n="$priority":r.index_===w1?n="$value":r.index_===pi?n="$key":(U(r.index_ instanceof v1,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Qe(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Qe(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Qe(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Qe(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function bm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==rt&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Ty{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Ms("p:rest:"),this.listens_={}}listen(e,n,s,a){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const d=_a.getListenId_(e,s),p={};this.listens_[d]=p;const m=Tm(e._queryParams);this.restRequest_(c+".json",m,(y,_)=>{let v=_;if(y===404&&(v=null,y=null),y===null&&this.onDataUpdate_(c,v,!1,s),_i(this.listens_,d)===p){let E;y?y===401?E="permission_denied":E="rest_error:"+y:E="ok",a(E,null)}})}unlisten(e,n){const s=_a.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Tm(e._queryParams),s=e._path.toString(),a=new La;return this.restRequest_(s+".json",n,(c,d)=>{let p=d;c===404&&(p=null,c=null),c===null?(this.onDataUpdate_(s,p,!1,null),a.resolve(p)):a.reject(new Error(p))}),a.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,c])=>{a&&a.accessToken&&(n.auth=a.accessToken),c&&c.token&&(n.ac=c.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(n);this.log_("Sending REST request for "+d);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(s&&p.readyState===4){this.log_("REST Response for "+d+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=Ts(p.responseText)}catch{vt("Failed to parse JSON response for "+d+": "+p.responseText)}s(null,m)}else p.status!==401&&p.status!==404&&vt("Got unsuccessful REST response for "+d+" Status: "+p.status),s(p.status);s=null}},p.open("GET",d,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.rootNode_=fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return{value:null,children:new Map}}function zy(r,e,n){if(oe(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=se(e);r.children.has(s)||r.children.set(s,wa());const a=r.children.get(s);e=Ee(e),zy(a,e,n)}}function Nu(r,e,n){r.value!==null?n(e,r.value):I1(r,(s,a)=>{const c=new Ce(e.toString()+"/"+s);Nu(a,c,n)})}function I1(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&jt(this.last_,(s,a)=>{n[s]=n[s]-a}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=10*1e3,T1=30*1e3,b1=300*1e3;class R1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new N1(e);const s=Rm+(T1-Rm)*Math.random();Ss(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;jt(e,(a,c)=>{c>0&&Nn(this.statsToReport_,a)&&(n[a]=c,s=!0)}),s&&this.server_.reportStats(n),Ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*b1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function By(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hy(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=nn.ACK_USER_WRITE,this.source=By()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new xa(ye(),n,this.revert)}}else return U(se(this.path)===e,"operationForChild called for unrelated child."),new xa(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=nn.OVERWRITE}operationForChild(e){return oe(this.path)?new Ir(this.source,ye(),this.snap.getImmediateChild(e)):new Ir(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=nn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Ir(this.source,ye(),n.value):new Ps(this.source,ye(),n)}else return U(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ps(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function P1(r,e,n,s){const a=[],c=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&c.push(C1(d.childName,d.snapshotNode))}),ws(r,a,"child_removed",e,s,n),ws(r,a,"child_added",e,s,n),ws(r,a,"child_moved",c,s,n),ws(r,a,"child_changed",e,s,n),ws(r,a,"value",e,s,n),a}function ws(r,e,n,s,a,c){const d=s.filter(p=>p.type===n);d.sort((p,m)=>O1(r,p,m)),d.forEach(p=>{const m=A1(r,p,c);a.forEach(y=>{y.respondsTo(p.type)&&e.push(y.createEvent(m,r.query_))})})}function A1(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function O1(r,e,n){if(e.childName==null||n.childName==null)throw Ci("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),a=new ae(n.childName,n.snapshotNode);return r.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(r,e){return{eventCache:r,serverCache:e}}function Es(r,e,n,s){return Vy(new od(e,n,s),r.serverCache)}function $y(r,e,n,s){return Vy(r.eventCache,new od(e,n,s))}function Tu(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Nr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;const j1=()=>(iu||(iu=new yt(wC)),iu);class Se{static fromObject(e){let n=new Se(null);return jt(e,(s,a)=>{n=n.set(new Ce(s),a)}),n}constructor(e,n=j1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(oe(e))return null;{const s=se(e),a=this.children.get(s);if(a!==null){const c=a.findRootMostMatchingPathAndValue(Ee(e),n);return c!=null?{path:Ue(new Ce(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new Se(null)}}set(e,n){if(oe(e))return new Se(n,this.children);{const s=se(e),c=(this.children.get(s)||new Se(null)).set(Ee(e),n),d=this.children.insert(s,c);return new Se(this.value,d)}}remove(e){if(oe(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const a=s.remove(Ee(e));let c;return a.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,a),this.value===null&&c.isEmpty()?new Se(null):new Se(this.value,c)}else return this}}get(e){if(oe(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(oe(e))return n;{const s=se(e),c=(this.children.get(s)||new Se(null)).setTree(Ee(e),n);let d;return c.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,c),new Se(this.value,d)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((a,c)=>{s[a]=c.fold_(Ue(e,a),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const a=this.value?s(n,this.value):!1;if(a)return a;if(oe(e))return null;{const c=se(e),d=this.children.get(c);return d?d.findOnPath_(Ee(e),Ue(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const a=se(e),c=this.children.get(a);return c?c.foreachOnPath_(Ee(e),Ue(n,a),s):new Se(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,a)=>{a.foreach_(Ue(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new Se(null))}}function Cs(r,e,n){if(oe(e))return new Yt(new Se(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let c=s.value;const d=At(a,e);return c=c.updateChild(d,n),new Yt(r.writeTree_.set(a,c))}else{const a=new Se(n),c=r.writeTree_.setTree(e,a);return new Yt(c)}}}function Pm(r,e,n){let s=r;return jt(n,(a,c)=>{s=Cs(s,Ue(e,a),c)}),s}function Am(r,e){if(oe(e))return Yt.empty();{const n=r.writeTree_.setTree(e,new Se(null));return new Yt(n)}}function bu(r,e){return Mr(r,e)!=null}function Mr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(At(n.path,e)):null}function Om(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(rt,(s,a)=>{e.push(new ae(s,a))}):r.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new ae(s,a.value))}),e}function nr(r,e){if(oe(e))return r;{const n=Mr(r,e);return n!=null?new Yt(new Se(n)):new Yt(r.writeTree_.subtree(e))}}function Ru(r){return r.writeTree_.isEmpty()}function xi(r,e){return Gy(ye(),r.writeTree_,e)}function Gy(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((a,c)=>{a===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=Gy(Ue(r,a),c,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Ue(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(r,e){return Xy(e,r)}function L1(r,e,n,s,a){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:a}),a&&(r.visibleWrites=Cs(r.visibleWrites,e,n)),r.lastWriteId=s}function M1(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function D1(r,e){const n=r.allWrites.findIndex(p=>p.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let a=s.visible,c=!1,d=r.allWrites.length-1;for(;a&&d>=0;){const p=r.allWrites[d];p.visible&&(d>=n&&F1(p,s.path)?a=!1:qt(s.path,p.path)&&(c=!0)),d--}if(a){if(c)return U1(r),!0;if(s.snap)r.visibleWrites=Am(r.visibleWrites,s.path);else{const p=s.children;jt(p,m=>{r.visibleWrites=Am(r.visibleWrites,Ue(s.path,m))})}return!0}else return!1}function F1(r,e){if(r.snap)return qt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&qt(Ue(r.path,n),e))return!0;return!1}function U1(r){r.visibleWrites=Ky(r.allWrites,z1,ye()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function z1(r){return r.visible}function Ky(r,e,n){let s=Yt.empty();for(let a=0;a<r.length;++a){const c=r[a];if(e(c)){const d=c.path;let p;if(c.snap)qt(n,d)?(p=At(n,d),s=Cs(s,p,c.snap)):qt(d,n)&&(p=At(d,n),s=Cs(s,ye(),c.snap.getChild(p)));else if(c.children){if(qt(n,d))p=At(n,d),s=Pm(s,p,c.children);else if(qt(d,n))if(p=At(d,n),oe(p))s=Pm(s,ye(),c.children);else{const m=_i(c.children,se(p));if(m){const y=m.getChild(Ee(p));s=Cs(s,ye(),y)}}}else throw Ci("WriteRecord should have .snap or .children")}}return s}function Yy(r,e,n,s,a){if(!s&&!a){const c=Mr(r.visibleWrites,e);if(c!=null)return c;{const d=nr(r.visibleWrites,e);if(Ru(d))return n;if(n==null&&!bu(d,ye()))return null;{const p=n||fe.EMPTY_NODE;return xi(d,p)}}}else{const c=nr(r.visibleWrites,e);if(!a&&Ru(c))return n;if(!a&&n==null&&!bu(c,ye()))return null;{const d=function(y){return(y.visible||a)&&(!s||!~s.indexOf(y.writeId))&&(qt(y.path,e)||qt(e,y.path))},p=Ky(r.allWrites,d,e),m=n||fe.EMPTY_NODE;return xi(p,m)}}}function B1(r,e,n){let s=fe.EMPTY_NODE;const a=Mr(r.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(rt,(c,d)=>{s=s.updateImmediateChild(c,d)}),s;if(n){const c=nr(r.visibleWrites,e);return n.forEachChild(rt,(d,p)=>{const m=xi(nr(c,new Ce(d)),p);s=s.updateImmediateChild(d,m)}),Om(c).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const c=nr(r.visibleWrites,e);return Om(c).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function W1(r,e,n,s,a){U(s||a,"Either existingEventSnap or existingServerSnap must exist");const c=Ue(e,n);if(bu(r.visibleWrites,c))return null;{const d=nr(r.visibleWrites,c);return Ru(d)?a.getChild(n):xi(d,a.getChild(n))}}function H1(r,e,n,s){const a=Ue(e,n),c=Mr(r.visibleWrites,a);if(c!=null)return c;if(s.isCompleteForChild(n)){const d=nr(r.visibleWrites,a);return xi(d,s.getNode().getImmediateChild(n))}else return null}function V1(r,e){return Mr(r.visibleWrites,e)}function $1(r,e,n,s,a,c,d){let p;const m=nr(r.visibleWrites,e),y=Mr(m,ye());if(y!=null)p=y;else if(n!=null)p=xi(m,n);else return[];if(p=p.withIndex(d),!p.isEmpty()&&!p.isLeafNode()){const _=[],v=d.getCompare(),E=c?p.getReverseIteratorFrom(s,d):p.getIteratorFrom(s,d);let A=E.getNext();for(;A&&_.length<a;)v(A,s)!==0&&_.push(A),A=E.getNext();return _}else return[]}function G1(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function Pu(r,e,n,s){return Yy(r.writeTree,r.treePath,e,n,s)}function Qy(r,e){return B1(r.writeTree,r.treePath,e)}function jm(r,e,n,s){return W1(r.writeTree,r.treePath,e,n,s)}function Sa(r,e){return V1(r.writeTree,Ue(r.treePath,e))}function q1(r,e,n,s,a,c){return $1(r.writeTree,r.treePath,e,n,s,a,c)}function ad(r,e,n){return H1(r.writeTree,r.treePath,e,n)}function Jy(r,e){return Xy(Ue(r.treePath,e),r.writeTree)}function Xy(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const c=a.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,Nm(s,e.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,E1(s,a.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,S1(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,Nm(s,e.snapshotNode,a.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Zy=new Y1;class ld{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new od(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ad(this.writes_,e,s)}}getChildAfterChild(e,n,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),c=q1(this.writes_,a,n,1,s,e);return c.length===0?null:c[0]}}function Q1(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function J1(r,e,n,s,a){const c=new K1;let d,p;if(n.type===nn.OVERWRITE){const y=n;y.source.fromUser?d=Au(r,e,y.path,y.snap,s,a,c):(U(y.source.fromServer,"Unknown source."),p=y.source.tagged||e.serverCache.isFiltered()&&!oe(y.path),d=Ea(r,e,y.path,y.snap,s,a,p,c))}else if(n.type===nn.MERGE){const y=n;y.source.fromUser?d=Z1(r,e,y.path,y.children,s,a,c):(U(y.source.fromServer,"Unknown source."),p=y.source.tagged||e.serverCache.isFiltered(),d=Ou(r,e,y.path,y.children,s,a,p,c))}else if(n.type===nn.ACK_USER_WRITE){const y=n;y.revert?d=nk(r,e,y.path,s,a,c):d=ek(r,e,y.path,y.affectedTree,s,a,c)}else if(n.type===nn.LISTEN_COMPLETE)d=tk(r,e,n.path,s,c);else throw Ci("Unknown operation type: "+n.type);const m=c.getChanges();return X1(e,d,m),{viewCache:d,changes:m}}function X1(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Tu(r);(n.length>0||!r.eventCache.isFullyInitialized()||a&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(x1(Tu(e)))}}function ev(r,e,n,s,a,c){const d=e.eventCache;if(Sa(s,n)!=null)return e;{let p,m;if(oe(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const y=Nr(e),_=y instanceof fe?y:fe.EMPTY_NODE,v=Qy(s,_);p=r.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const y=Pu(s,Nr(e));p=r.filter.updateFullNode(e.eventCache.getNode(),y,c)}else{const y=se(n);if(y===".priority"){U(sr(n)===1,"Can't have a priority with additional path components");const _=d.getNode();m=e.serverCache.getNode();const v=jm(s,n,_,m);v!=null?p=r.filter.updatePriority(_,v):p=d.getNode()}else{const _=Ee(n);let v;if(d.isCompleteForChild(y)){m=e.serverCache.getNode();const E=jm(s,n,d.getNode(),m);E!=null?v=d.getNode().getImmediateChild(y).updateChild(_,E):v=d.getNode().getImmediateChild(y)}else v=ad(s,y,e.serverCache);v!=null?p=r.filter.updateChild(d.getNode(),y,v,_,a,c):p=d.getNode()}}return Es(e,p,d.isFullyInitialized()||oe(n),r.filter.filtersNodes())}}function Ea(r,e,n,s,a,c,d,p){const m=e.serverCache;let y;const _=d?r.filter:r.filter.getIndexedFilter();if(oe(n))y=_.updateFullNode(m.getNode(),s,null);else if(_.filtersNodes()&&!m.isFiltered()){const A=m.getNode().updateChild(n,s);y=_.updateFullNode(m.getNode(),A,null)}else{const A=se(n);if(!m.isCompleteForPath(n)&&sr(n)>1)return e;const M=Ee(n),T=m.getNode().getImmediateChild(A).updateChild(M,s);A===".priority"?y=_.updatePriority(m.getNode(),T):y=_.updateChild(m.getNode(),A,T,M,Zy,null)}const v=$y(e,y,m.isFullyInitialized()||oe(n),_.filtersNodes()),E=new ld(a,v,c);return ev(r,v,n,a,E,p)}function Au(r,e,n,s,a,c,d){const p=e.eventCache;let m,y;const _=new ld(a,e,c);if(oe(n))y=r.filter.updateFullNode(e.eventCache.getNode(),s,d),m=Es(e,y,!0,r.filter.filtersNodes());else{const v=se(n);if(v===".priority")y=r.filter.updatePriority(e.eventCache.getNode(),s),m=Es(e,y,p.isFullyInitialized(),p.isFiltered());else{const E=Ee(n),A=p.getNode().getImmediateChild(v);let M;if(oe(E))M=s;else{const O=_.getCompleteChild(v);O!=null?Ry(E)===".priority"&&O.getChild(Ay(E)).isEmpty()?M=O:M=O.updateChild(E,s):M=fe.EMPTY_NODE}if(A.equals(M))m=e;else{const O=r.filter.updateChild(p.getNode(),v,M,E,_,d);m=Es(e,O,p.isFullyInitialized(),r.filter.filtersNodes())}}}return m}function Lm(r,e){return r.eventCache.isCompleteForChild(e)}function Z1(r,e,n,s,a,c,d){let p=e;return s.foreach((m,y)=>{const _=Ue(n,m);Lm(e,se(_))&&(p=Au(r,p,_,y,a,c,d))}),s.foreach((m,y)=>{const _=Ue(n,m);Lm(e,se(_))||(p=Au(r,p,_,y,a,c,d))}),p}function Mm(r,e,n){return n.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Ou(r,e,n,s,a,c,d,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,y;oe(n)?y=s:y=new Se(null).setTree(n,s);const _=e.serverCache.getNode();return y.children.inorderTraversal((v,E)=>{if(_.hasChild(v)){const A=e.serverCache.getNode().getImmediateChild(v),M=Mm(r,A,E);m=Ea(r,m,new Ce(v),M,a,c,d,p)}}),y.children.inorderTraversal((v,E)=>{const A=!e.serverCache.isCompleteForChild(v)&&E.value===null;if(!_.hasChild(v)&&!A){const M=e.serverCache.getNode().getImmediateChild(v),O=Mm(r,M,E);m=Ea(r,m,new Ce(v),O,a,c,d,p)}}),m}function ek(r,e,n,s,a,c,d){if(Sa(a,n)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(oe(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return Ea(r,e,n,m.getNode().getChild(n),a,c,p,d);if(oe(n)){let y=new Se(null);return m.getNode().forEachChild(pi,(_,v)=>{y=y.set(new Ce(_),v)}),Ou(r,e,n,y,a,c,p,d)}else return e}else{let y=new Se(null);return s.foreach((_,v)=>{const E=Ue(n,_);m.isCompleteForPath(E)&&(y=y.set(_,m.getNode().getChild(E)))}),Ou(r,e,n,y,a,c,p,d)}}function tk(r,e,n,s,a){const c=e.serverCache,d=$y(e,c.getNode(),c.isFullyInitialized()||oe(n),c.isFiltered());return ev(r,d,n,s,Zy,a)}function nk(r,e,n,s,a,c){let d;if(Sa(s,n)!=null)return e;{const p=new ld(s,e,a),m=e.eventCache.getNode();let y;if(oe(n)||se(n)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=Pu(s,Nr(e));else{const v=e.serverCache.getNode();U(v instanceof fe,"serverChildren would be complete if leaf node"),_=Qy(s,v)}_=_,y=r.filter.updateFullNode(m,_,c)}else{const _=se(n);let v=ad(s,_,e.serverCache);v==null&&e.serverCache.isCompleteForChild(_)&&(v=m.getImmediateChild(_)),v!=null?y=r.filter.updateChild(m,_,v,Ee(n),p,c):e.eventCache.getNode().hasChild(_)?y=r.filter.updateChild(m,_,fe.EMPTY_NODE,Ee(n),p,c):y=m,y.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Pu(s,Nr(e)),d.isLeafNode()&&(y=r.filter.updateFullNode(y,d,c)))}return d=e.serverCache.isFullyInitialized()||Sa(s,ye())!=null,Es(e,y,d,r.filter.filtersNodes())}}function rk(r,e){const n=Nr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Dm(r,e,n,s){e.type===nn.MERGE&&e.source.queryId!==null&&(U(Nr(r.viewCache_),"We should always have a full cache before handling merges"),U(Tu(r.viewCache_),"Missing event cache, even though we have a server cache"));const a=r.viewCache_,c=J1(r.processor_,a,e,n,s);return Q1(r.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,ik(r,c.changes,c.viewCache.eventCache.getNode())}function ik(r,e,n,s){const a=r.eventRegistrations_;return P1(r.eventGenerator_,e,n,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm;function sk(r){U(!Fm,"__referenceConstructor has already been defined"),Fm=r}function cd(r,e,n,s){const a=e.source.queryId;if(a!==null){const c=r.views.get(a);return U(c!=null,"SyncTree gave us an op for an invalid query."),Dm(c,e,n,s)}else{let c=[];for(const d of r.views.values())c=c.concat(Dm(d,e,n,s));return c}}function ud(r,e){let n=null;for(const s of r.views.values())n=n||rk(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Um;function ok(r){U(!Um,"__referenceConstructor has already been defined"),Um=r}class zm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=G1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tv(r,e,n,s,a){return L1(r.pendingWriteTree_,e,n,s,a),a?za(r,new Ir(By(),e,n)):[]}function Er(r,e,n=!1){const s=M1(r.pendingWriteTree_,e);if(D1(r.pendingWriteTree_,e)){let c=new Se(null);return s.snap!=null?c=c.set(ye(),!0):jt(s.children,d=>{c=c.set(new Ce(d),!0)}),za(r,new xa(s.path,c,n))}else return[]}function Ua(r,e,n){return za(r,new Ir(Wy(),e,n))}function ak(r,e,n){const s=Se.fromObject(n);return za(r,new Ps(Wy(),e,s))}function lk(r,e,n,s){const a=iv(r,s);if(a!=null){const c=sv(a),d=c.path,p=c.queryId,m=At(d,e),y=new Ir(Hy(p),m,n);return ov(r,d,y)}else return[]}function ck(r,e,n,s){const a=iv(r,s);if(a){const c=sv(a),d=c.path,p=c.queryId,m=At(d,e),y=Se.fromObject(n),_=new Ps(Hy(p),m,y);return ov(r,d,_)}else return[]}function dd(r,e,n){const a=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(d,p)=>{const m=At(d,e),y=ud(p,m);if(y)return y});return Yy(a,e,c,n,!0)}function za(r,e){return nv(e,r.syncPointTree_,null,qy(r.pendingWriteTree_,ye()))}function nv(r,e,n,s){if(oe(r.path))return rv(r,e,n,s);{const a=e.get(ye());n==null&&a!=null&&(n=ud(a,ye()));let c=[];const d=se(r.path),p=r.operationForChild(d),m=e.children.get(d);if(m&&p){const y=n?n.getImmediateChild(d):null,_=Jy(s,d);c=c.concat(nv(p,m,y,_))}return a&&(c=c.concat(cd(a,r,s,n))),c}}function rv(r,e,n,s){const a=e.get(ye());n==null&&a!=null&&(n=ud(a,ye()));let c=[];return e.children.inorderTraversal((d,p)=>{const m=n?n.getImmediateChild(d):null,y=Jy(s,d),_=r.operationForChild(d);_&&(c=c.concat(rv(_,p,m,y)))}),a&&(c=c.concat(cd(a,r,s,n))),c}function iv(r,e){return r.tagToQueryMap.get(e)}function sv(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Ce(r.substr(0,e))}}function ov(r,e,n){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const a=qy(r.pendingWriteTree_,e);return cd(s,n,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hd(n)}node(){return this.node_}}class fd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new fd(this.syncTree_,n)}node(){return dd(this.syncTree_,this.path_)}}const uk=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Bm=function(r,e,n){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return dk(r[".sv"],e,n);if(typeof r[".sv"]=="object")return hk(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},dk=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+r)}},hk=function(r,e,n){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const a=e.node();if(U(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const d=a.getValue();return typeof d!="number"?s:d+s},fk=function(r,e,n,s){return pd(e,new fd(n,r),s)},av=function(r,e,n){return pd(r,new hd(e),n)};function pd(r,e,n){const s=r.getPriority().val(),a=Bm(s,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const d=r,p=Bm(d.getValue(),e,n);return p!==d.getValue()||a!==d.getPriority().val()?new Ve(p,Ye(a)):r}else{const d=r;return c=d,a!==d.getPriority().val()&&(c=c.updatePriority(new Ve(a))),d.forEachChild(rt,(p,m)=>{const y=pd(m,e.getImmediateChild(p),n);y!==m&&(c=c.updateImmediateChild(p,y))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function gd(r,e){let n=e instanceof Ce?e:new Ce(e),s=r,a=se(n);for(;a!==null;){const c=_i(s.node.children,a)||{children:{},childCount:0};s=new md(a,s,c),n=Ee(n),a=se(n)}return s}function bi(r){return r.node.value}function lv(r,e){r.node.value=e,ju(r)}function cv(r){return r.node.childCount>0}function pk(r){return bi(r)===void 0&&!cv(r)}function Ba(r,e){jt(r.node.children,(n,s)=>{e(new md(n,r,s))})}function uv(r,e,n,s){n&&e(r),Ba(r,a=>{uv(a,e,!0)})}function mk(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fs(r){return new Ce(r.parent===null?r.name:Fs(r.parent)+"/"+r.name)}function ju(r){r.parent!==null&&gk(r.parent,r.name,r)}function gk(r,e,n){const s=pk(n),a=Nn(r.node.children,e);s&&a?(delete r.node.children[e],r.node.childCount--,ju(r)):!s&&!a&&(r.node.children[e]=n.node,r.node.childCount++,ju(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=/[\[\].#$\/\u0000-\u001F\u007F]/,vk=/[\[\].#$\u0000-\u001F\u007F]/,su=10*1024*1024,dv=function(r){return typeof r=="string"&&r.length!==0&&!yk.test(r)},hv=function(r){return typeof r=="string"&&r.length!==0&&!vk.test(r)},_k=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),hv(r)},fv=function(r,e,n,s){s&&e===void 0||yd(Qu(r,"value"),e,n)},yd=function(r,e,n){const s=n instanceof Ce?new t1(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+xr(s));if(typeof e=="function")throw new Error(r+"contains a function "+xr(s)+" with contents = "+e.toString());if(cy(e))throw new Error(r+"contains "+e.toString()+" "+xr(s));if(typeof e=="string"&&e.length>su/3&&Ma(e)>su)throw new Error(r+"contains a string greater than "+su+" utf8 bytes "+xr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,c=!1;if(jt(e,(d,p)=>{if(d===".value")a=!0;else if(d!==".priority"&&d!==".sv"&&(c=!0,!dv(d)))throw new Error(r+" contains an invalid key ("+d+") "+xr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);n1(s,d),yd(r,p,s),r1(s)}),a&&c)throw new Error(r+' contains ".value" child '+xr(s)+" in addition to actual children.")}},pv=function(r,e,n,s){if(!hv(n))throw new Error(Qu(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wk=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pv(r,e,n)},mv=function(r,e){if(se(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},xk=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_k(n))throw new Error(Qu(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gv(r,e){let n=null;for(let s=0;s<e.length;s++){const a=e[s],c=a.getPath();n!==null&&!Oy(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(a)}n&&r.eventLists_.push(n)}function Cn(r,e,n){gv(r,n),Ek(r,s=>qt(s,e)||qt(e,s))}function Ek(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const a=r.eventLists_[s];if(a){const c=a.path;e(c)?(Ck(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function Ck(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();xs&&nt("event: "+n.toString()),Ti(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="repo_interrupt",Ik=25;class Nk{constructor(e,n,s,a){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Sk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wa(),this.transactionQueueTree_=new md,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Tk(r,e,n){if(r.stats_=td(r.repoInfo_),r.forceRestClient_||IC())r.server_=new _a(r.repoInfo_,(s,a,c,d)=>{Wm(r,s,a,c,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Hm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new xn(r.repoInfo_,e,(s,a,c,d)=>{Wm(r,s,a,c,d)},s=>{Hm(r,s)},s=>{bk(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=PC(r.repoInfo_,()=>new R1(r.stats_,r.server_)),r.infoData_=new k1,r.infoSyncTree_=new zm({startListening:(s,a,c,d)=>{let p=[];const m=r.infoData_.getNode(s._path);return m.isEmpty()||(p=Ua(r.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),p},stopListening:()=>{}}),_d(r,"connected",!1),r.serverSyncTree_=new zm({startListening:(s,a,c,d)=>(r.server_.listen(s,c,a,(p,m)=>{const y=d(p,m);Cn(r.eventQueue_,s._path,y)}),[]),stopListening:(s,a)=>{r.server_.unlisten(s,a)}})}function yv(r){const n=r.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vd(r){return uk({timestamp:yv(r)})}function Wm(r,e,n,s,a){r.dataUpdateCount++;const c=new Ce(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(a)if(s){const m=pa(n,y=>Ye(y));d=ck(r.serverSyncTree_,c,m,a)}else{const m=Ye(n);d=lk(r.serverSyncTree_,c,m,a)}else if(s){const m=pa(n,y=>Ye(y));d=ak(r.serverSyncTree_,c,m)}else{const m=Ye(n);d=Ua(r.serverSyncTree_,c,m)}let p=c;d.length>0&&(p=Wa(r,c)),Cn(r.eventQueue_,p,d)}function Hm(r,e){_d(r,"connected",e),e===!1&&Pk(r)}function bk(r,e){jt(e,(n,s)=>{_d(r,n,s)})}function _d(r,e,n){const s=new Ce("/.info/"+e),a=Ye(n);r.infoData_.updateSnapshot(s,a);const c=Ua(r.infoSyncTree_,s,a);Cn(r.eventQueue_,s,c)}function vv(r){return r.nextWriteId_++}function Rk(r,e,n,s,a){wd(r,"set",{path:e.toString(),value:n,priority:s});const c=vd(r),d=Ye(n,s),p=dd(r.serverSyncTree_,e),m=av(d,p,c),y=vv(r),_=tv(r.serverSyncTree_,e,m,y,!0);gv(r.eventQueue_,_),r.server_.put(e.toString(),d.val(!0),(E,A)=>{const M=E==="ok";M||vt("set at "+e+" failed: "+E);const O=Er(r.serverSyncTree_,y,!M);Cn(r.eventQueue_,e,O),Ok(r,a,E,A)});const v=Ev(r,e);Wa(r,v),Cn(r.eventQueue_,v,[])}function Pk(r){wd(r,"onDisconnectEvents");const e=vd(r),n=wa();Nu(r.onDisconnect_,ye(),(a,c)=>{const d=fk(a,c,r.serverSyncTree_,e);zy(n,a,d)});let s=[];Nu(n,ye(),(a,c)=>{s=s.concat(Ua(r.serverSyncTree_,a,c));const d=Ev(r,a);Wa(r,d)}),r.onDisconnect_=wa(),Cn(r.eventQueue_,ye(),s)}function Ak(r){r.persistentConnection_&&r.persistentConnection_.interrupt(kk)}function wd(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),nt(n,...e)}function Ok(r,e,n,s){e&&Ti(()=>{if(n==="ok")e(null);else{const a=(n||"error").toUpperCase();let c=a;s&&(c+=": "+s);const d=new Error(c);d.code=a,e(d)}})}function _v(r,e,n){return dd(r.serverSyncTree_,e,n)||fe.EMPTY_NODE}function xd(r,e=r.transactionQueueTree_){if(e||Ha(r,e),bi(e)){const n=xv(r,e);U(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&jk(r,Fs(e),n)}else cv(e)&&Ba(e,n=>{xd(r,n)})}function jk(r,e,n){const s=n.map(y=>y.currentWriteId),a=_v(r,e,s);let c=a;const d=a.hash();for(let y=0;y<n.length;y++){const _=n[y];U(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const v=At(e,_.path);c=c.updateChild(v,_.currentOutputSnapshotRaw)}const p=c.val(!0),m=e;r.server_.put(m.toString(),p,y=>{wd(r,"transaction put response",{path:m.toString(),status:y});let _=[];if(y==="ok"){const v=[];for(let E=0;E<n.length;E++)n[E].status=2,_=_.concat(Er(r.serverSyncTree_,n[E].currentWriteId)),n[E].onComplete&&v.push(()=>n[E].onComplete(null,!0,n[E].currentOutputSnapshotResolved)),n[E].unwatcher();Ha(r,gd(r.transactionQueueTree_,e)),xd(r,r.transactionQueueTree_),Cn(r.eventQueue_,e,_);for(let E=0;E<v.length;E++)Ti(v[E])}else{if(y==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{vt("transaction at "+m.toString()+" failed: "+y);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=y}Wa(r,e)}},d)}function Wa(r,e){const n=wv(r,e),s=Fs(n),a=xv(r,n);return Lk(r,a,s),s}function Lk(r,e,n){if(e.length===0)return;const s=[];let a=[];const d=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],y=At(n,m.path);let _=!1,v;if(U(y!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)_=!0,v=m.abortReason,a=a.concat(Er(r.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=Ik)_=!0,v="maxretry",a=a.concat(Er(r.serverSyncTree_,m.currentWriteId,!0));else{const E=_v(r,m.path,d);m.currentInputSnapshot=E;const A=e[p].update(E.val());if(A!==void 0){yd("transaction failed: Data returned ",A,m.path);let M=Ye(A);typeof A=="object"&&A!=null&&Nn(A,".priority")||(M=M.updatePriority(E.getPriority()));const T=m.currentWriteId,F=vd(r),q=av(M,E,F);m.currentOutputSnapshotRaw=M,m.currentOutputSnapshotResolved=q,m.currentWriteId=vv(r),d.splice(d.indexOf(T),1),a=a.concat(tv(r.serverSyncTree_,m.path,q,m.currentWriteId,m.applyLocally)),a=a.concat(Er(r.serverSyncTree_,T,!0))}else _=!0,v="nodata",a=a.concat(Er(r.serverSyncTree_,m.currentWriteId,!0))}Cn(r.eventQueue_,n,a),a=[],_&&(e[p].status=2,(function(E){setTimeout(E,Math.floor(0))})(e[p].unwatcher),e[p].onComplete&&(v==="nodata"?s.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):s.push(()=>e[p].onComplete(new Error(v),!1,null))))}Ha(r,r.transactionQueueTree_);for(let p=0;p<s.length;p++)Ti(s[p]);xd(r,r.transactionQueueTree_)}function wv(r,e){let n,s=r.transactionQueueTree_;for(n=se(e);n!==null&&bi(s)===void 0;)s=gd(s,n),e=Ee(e),n=se(e);return s}function xv(r,e){const n=[];return Sv(r,e,n),n.sort((s,a)=>s.order-a.order),n}function Sv(r,e,n){const s=bi(e);if(s)for(let a=0;a<s.length;a++)n.push(s[a]);Ba(e,a=>{Sv(r,a,n)})}function Ha(r,e){const n=bi(e);if(n){let s=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[s]=n[a],s++);n.length=s,lv(e,n.length>0?n:void 0)}Ba(e,s=>{Ha(r,s)})}function Ev(r,e){const n=Fs(wv(r,e)),s=gd(r.transactionQueueTree_,e);return mk(s,a=>{ou(r,a)}),ou(r,s),uv(s,a=>{ou(r,a)}),n}function ou(r,e){const n=bi(e);if(n){const s=[];let a=[],c=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(U(c===d-1,"All SENT items should be at beginning of queue."),c=d,n[d].status=3,n[d].abortReason="set"):(U(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),a=a.concat(Er(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));c===-1?lv(e,void 0):n.length=c+1,Cn(r.eventQueue_,Fs(e),a);for(let d=0;d<s.length;d++)Ti(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let a=n[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function Dk(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):vt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Vm=function(r,e){const n=Fk(r),s=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vC();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xy(n.host,n.secure,s,a,e,"",s!==n.subdomain),path:new Ce(n.pathString)}},Fk=function(r){let e="",n="",s="",a="",c="",d=!0,p="https",m=443;if(typeof r=="string"){let y=r.indexOf("//");y>=0&&(p=r.substring(0,y-1),r=r.substring(y+2));let _=r.indexOf("/");_===-1&&(_=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(_,v)),_<v&&(a=Mk(r.substring(_,v)));const E=Dk(r.substring(Math.min(r.length,v)));y=e.indexOf(":"),y>=0?(d=p==="https"||p==="wss",m=parseInt(e.substring(y+1),10)):y=e.length;const A=e.slice(0,y);if(A.toLowerCase()==="localhost")n="localhost";else if(A.split(".").length<=2)n=A;else{const M=e.indexOf(".");s=e.substring(0,M).toLowerCase(),n=e.substring(M+1),c=s}"ns"in E&&(c=E.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:p,pathString:a,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Uk=(function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let a;const c=new Array(8);for(a=7;a>=0;a--)c[a]=$m.charAt(n%64),n=Math.floor(n/64);U(n===0,"Cannot push at time == 0");let d=c.join("");if(s){for(a=11;a>=0&&e[a]===63;a--)e[a]=0;e[a]++}else for(a=0;a<12;a++)e[a]=Math.floor(Math.random()*64);for(a=0;a<12;a++)d+=$m.charAt(e[a]);return U(d.length===20,"nextPushId: Length should be 20."),d}})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,s,a){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=a}get key(){return oe(this._path)?null:Ry(this._path)}get ref(){return new Dr(this._repo,this._path)}get _queryIdentifier(){const e=bm(this._queryParams),n=Zu(e);return n==="{}"?"default":n}get _queryObject(){return bm(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof Sd))return!1;const n=this._repo===e._repo,s=Oy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return n&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+e1(this._path)}}class Dr extends Sd{constructor(e,n){super(e,n,new sd,!1)}get parent(){const e=Ay(this._path);return e===null?null:new Dr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function zk(r,e){return r=lt(r),r._checkNotDeleted("ref"),e!==void 0?Lu(r._root,e):r._root}function Lu(r,e){return r=lt(r),se(r._path)===null?wk("child","path",e):pv("child","path",e),new Dr(r._repo,Ue(r._path,e))}function Bk(r,e){r=lt(r),mv("push",r._path),fv("push",e,r._path,!0);const n=yv(r._repo),s=Uk(n),a=Lu(r,s),c=Lu(r,s);let d;return e!=null?d=Wk(c,e).then(()=>c):d=Promise.resolve(c),a.then=d.then.bind(d),a.catch=d.then.bind(d,void 0),a}function Wk(r,e){r=lt(r),mv("set",r._path),fv("set",e,r._path,!1);const n=new La;return Rk(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}sk(Dr);ok(Dr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="FIREBASE_DATABASE_EMULATOR_HOST",Mu={};let Vk=!1;function $k(r,e,n,s){const a=e.lastIndexOf(":"),c=e.substring(0,a),d=js(c);r.repoInfo_=new xy(e,d,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function Gk(r,e,n,s,a){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Vm(c,a),p=d.repoInfo,m;typeof process<"u"&&um&&(m=um[Hk]),m?(c=`http://${m}?ns=${p.namespace}`,d=Vm(c,a),p=d.repoInfo):d.repoInfo.secure;const y=new TC(r.name,r.options,e);xk("Invalid Firebase Database URL",d),oe(d.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const _=Kk(p,r,y,new NC(r,n));return new Yk(_,r)}function qk(r,e){const n=Mu[e];(!n||n[r.key]!==r)&&En(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Ak(r),delete n[r.key]}function Kk(r,e,n,s){let a=Mu[e.name];a||(a={},Mu[e.name]=a);let c=a[r.toURLString()];return c&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new Nk(r,Vk,n,s),a[r.toURLString()]=c,c}class Yk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Tk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dr(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function Qk(r=Xu(),e){const n=Lr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=US("database");s&&Jk(n,...s)}return n}function Jk(r,e,n,s={}){r=lt(r),r._checkNotDeleted("useEmulator");const a=`${e}:${n}`,c=r._repoInternal;if(r._instanceStarted){if(a===r._repoInternal.repoInfo_.host&&ir(s,c.repoInfo_.emulatorOptions))return;En("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new sa(sa.OWNER);else if(s.mockUserToken){const p=typeof s.mockUserToken=="string"?s.mockUserToken:zS(s.mockUserToken,r.app.options.projectId);d=new sa(p)}js(e)&&Zg(e),$k(c,a,s,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(r){hC(Ii),on(new Qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return Gk(s,a,c,n)},"PUBLIC").setMultipleInstances(!0)),Ot(dm,hm,r),Ot(dm,hm,"esm2020")}xn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};xn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};Xk();var Zk="firebase",eI="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(Zk,eI,"app");const Cv="@firebase/installations",Ed="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=1e4,Iv=`w:${Ed}`,Nv="FIS_v2",tI="https://firebaseinstallations.googleapis.com/v1",nI=3600*1e3,rI="installations",iI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tr=new jr(rI,iI,sI);function Tv(r){return r instanceof an&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv({projectId:r}){return`${tI}/projects/${r}/installations`}function Rv(r){return{token:r.token,requestStatus:2,expiresIn:aI(r.expiresIn),creationTime:Date.now()}}async function Pv(r,e){const s=(await e.json()).error;return Tr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Av({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function oI(r,{refreshToken:e}){const n=Av(r);return n.append("Authorization",lI(e)),n}async function Ov(r){const e=await r();return e.status>=500&&e.status<600?r():e}function aI(r){return Number(r.replace("s","000"))}function lI(r){return`${Nv} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=bv(r),a=Av(r),c=e.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&a.append("x-firebase-client",y)}const d={fid:n,authVersion:Nv,appId:r.appId,sdkVersion:Iv},p={method:"POST",headers:a,body:JSON.stringify(d)},m=await Ov(()=>fetch(s,p));if(m.ok){const y=await m.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:Rv(y.authToken)}}else throw await Pv("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=/^[cdef][\w-]{21}$/,Du="";function hI(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=fI(r);return dI.test(n)?n:Du}catch{return Du}}function fI(r){return uI(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new Map;function Mv(r,e){const n=Va(r);Dv(n,e),pI(n,e)}function Dv(r,e){const n=Lv.get(r);if(n)for(const s of n)s(e)}function pI(r,e){const n=mI();n&&n.postMessage({key:r,fid:e}),gI()}let Cr=null;function mI(){return!Cr&&"BroadcastChannel"in self&&(Cr=new BroadcastChannel("[Firebase] FID Change"),Cr.onmessage=r=>{Dv(r.data.key,r.data.fid)}),Cr}function gI(){Lv.size===0&&Cr&&(Cr.close(),Cr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="firebase-installations-database",vI=1,br="firebase-installations-store";let au=null;function Cd(){return au||(au=ny(yI,vI,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(br)}}})),au}async function Ca(r,e){const n=Va(r),a=(await Cd()).transaction(br,"readwrite"),c=a.objectStore(br),d=await c.get(n);return await c.put(e,n),await a.done,(!d||d.fid!==e.fid)&&Mv(r,e.fid),e}async function Fv(r){const e=Va(r),s=(await Cd()).transaction(br,"readwrite");await s.objectStore(br).delete(e),await s.done}async function $a(r,e){const n=Va(r),a=(await Cd()).transaction(br,"readwrite"),c=a.objectStore(br),d=await c.get(n),p=e(d);return p===void 0?await c.delete(n):await c.put(p,n),await a.done,p&&(!d||d.fid!==p.fid)&&Mv(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kd(r){let e;const n=await $a(r.appConfig,s=>{const a=_I(s),c=wI(r,a);return e=c.registrationPromise,c.installationEntry});return n.fid===Du?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _I(r){const e=r||{fid:hI(),registrationStatus:0};return Uv(e)}function wI(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Tr.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=xI(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SI(r)}:{installationEntry:e}}async function xI(r,e){try{const n=await cI(r,e);return Ca(r.appConfig,n)}catch(n){throw Tv(n)&&n.customData.serverCode===409?await Fv(r.appConfig):await Ca(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function SI(r){let e=await Gm(r.appConfig);for(;e.registrationStatus===1;)await jv(100),e=await Gm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await kd(r);return s||n}return e}function Gm(r){return $a(r,e=>{if(!e)throw Tr.create("installation-not-found");return Uv(e)})}function Uv(r){return EI(r)?{fid:r.fid,registrationStatus:0}:r}function EI(r){return r.registrationStatus===1&&r.registrationTime+kv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI({appConfig:r,heartbeatServiceProvider:e},n){const s=kI(r,n),a=oI(r,n),c=e.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&a.append("x-firebase-client",y)}const d={installation:{sdkVersion:Iv,appId:r.appId}},p={method:"POST",headers:a,body:JSON.stringify(d)},m=await Ov(()=>fetch(s,p));if(m.ok){const y=await m.json();return Rv(y)}else throw await Pv("Generate Auth Token",m)}function kI(r,{fid:e}){return`${bv(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(r,e=!1){let n;const s=await $a(r.appConfig,c=>{if(!zv(c))throw Tr.create("not-registered");const d=c.authToken;if(!e&&TI(d))return c;if(d.requestStatus===1)return n=II(r,e),c;{if(!navigator.onLine)throw Tr.create("app-offline");const p=RI(c);return n=NI(r,p),p}});return n?await n:s.authToken}async function II(r,e){let n=await qm(r.appConfig);for(;n.authToken.requestStatus===1;)await jv(100),n=await qm(r.appConfig);const s=n.authToken;return s.requestStatus===0?Id(r,e):s}function qm(r){return $a(r,e=>{if(!zv(e))throw Tr.create("not-registered");const n=e.authToken;return PI(n)?{...e,authToken:{requestStatus:0}}:e})}async function NI(r,e){try{const n=await CI(r,e),s={...e,authToken:n};return await Ca(r.appConfig,s),n}catch(n){if(Tv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Fv(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Ca(r.appConfig,s)}throw n}}function zv(r){return r!==void 0&&r.registrationStatus===2}function TI(r){return r.requestStatus===2&&!bI(r)}function bI(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+nI}function RI(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function PI(r){return r.requestStatus===1&&r.requestTime+kv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(r){const e=r,{installationEntry:n,registrationPromise:s}=await kd(e);return s?s.catch(console.error):Id(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(r,e=!1){const n=r;return await jI(n),(await Id(n,e)).token}async function jI(r){const{registrationPromise:e}=await kd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(r){if(!r||!r.options)throw lu("App Configuration");if(!r.name)throw lu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw lu(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function lu(r){return Tr.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="installations",MI="installations-internal",DI=r=>{const e=r.getProvider("app").getImmediate(),n=LI(e),s=Lr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},FI=r=>{const e=r.getProvider("app").getImmediate(),n=Lr(e,Bv).getImmediate();return{getId:()=>AI(n),getToken:a=>OI(n,a)}};function UI(){on(new Qt(Bv,DI,"PUBLIC")),on(new Qt(MI,FI,"PRIVATE"))}UI();Ot(Cv,Ed);Ot(Cv,Ed,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="analytics",zI="firebase_id",BI="origin",WI=60*1e3,HI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Da("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new jr("analytics","Analytics",VI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(r){if(!r.startsWith(Nd)){const e=kt.create("invalid-gtag-resource",{gtagURL:r});return ot.warn(e.message),""}return r}function Wv(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function GI(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function qI(r,e){const n=GI("firebase-js-sdk-policy",{createScriptURL:$I}),s=document.createElement("script"),a=`${Nd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function KI(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function YI(r,e,n,s,a,c){const d=s[a];try{if(d)await e[d];else{const m=(await Wv(n)).find(y=>y.measurementId===a);m&&await e[m.appId]}}catch(p){ot.error(p)}r("config",a,c)}async function QI(r,e,n,s,a){try{let c=[];if(a&&a.send_to){let d=a.send_to;Array.isArray(d)||(d=[d]);const p=await Wv(n);for(const m of d){const y=p.find(v=>v.measurementId===m),_=y&&e[y.appId];if(_)c.push(_);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),r("event",s,a||{})}catch(c){ot.error(c)}}function JI(r,e,n,s){async function a(c,...d){try{if(c==="event"){const[p,m]=d;await QI(r,e,n,p,m)}else if(c==="config"){const[p,m]=d;await YI(r,e,n,s,p,m)}else if(c==="consent"){const[p,m]=d;r("consent",p,m)}else if(c==="get"){const[p,m,y]=d;r("get",p,m,y)}else if(c==="set"){const[p]=d;r("set",p)}else r(c,...d)}catch(p){ot.error(p)}}return a}function XI(r,e,n,s,a){let c=function(...d){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(c=window[a]),window[a]=JI(c,r,e,n),{gtagCore:c,wrappedGtag:window[a]}}function ZI(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nd)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=30,tN=1e3;class nN{constructor(e={},n=tN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hv=new nN;function rN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function iN(r){var d;const{appId:e,apiKey:n}=r,s={method:"GET",headers:rN(n)},a=HI.replace("{app-id}",e),c=await fetch(a,s);if(c.status!==200&&c.status!==304){let p="";try{const m=await c.json();(d=m.error)!=null&&d.message&&(p=m.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:p})}return c.json()}async function sN(r,e=Hv,n){const{appId:s,apiKey:a,measurementId:c}=r.options;if(!s)throw kt.create("no-app-id");if(!a){if(c)return{measurementId:c,appId:s};throw kt.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new lN;return setTimeout(async()=>{p.abort()},WI),Vv({appId:s,apiKey:a,measurementId:c},d,p,e)}async function Vv(r,{throttleEndTimeMillis:e,backoffCount:n},s,a=Hv){var p;const{appId:c,measurementId:d}=r;try{await oN(s,e)}catch(m){if(d)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:d};throw m}try{const m=await iN(r);return a.deleteThrottleMetadata(c),m}catch(m){const y=m;if(!aN(y)){if(a.deleteThrottleMetadata(c),d)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:c,measurementId:d};throw m}const _=Number((p=y==null?void 0:y.customData)==null?void 0:p.httpStatus)===503?tm(n,a.intervalMillis,eN):tm(n,a.intervalMillis),v={throttleEndTimeMillis:Date.now()+_,backoffCount:n+1};return a.setThrottleMetadata(c,v),ot.debug(`Calling attemptFetch again in ${_} millis`),Vv(r,v,s,a)}}function oN(r,e){return new Promise((n,s)=>{const a=Math.max(e-Date.now(),0),c=setTimeout(n,a);r.addEventListener(()=>{clearTimeout(c),s(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function aN(r){if(!(r instanceof an)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class lN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cN(r,e,n,s,a){if(a&&a.global){r("event",n,s);return}else{const c=await e,d={...s,send_to:c};r("event",n,d)}}async function uN(r,e,n,s){if(s&&s.global){const a={};for(const c of Object.keys(n))a[`user_properties.${c}`]=n[c];return r("set",a),Promise.resolve()}else{const a=await e;r("config",a,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(){if(Qg())try{await Jg()}catch(r){return ot.warn(kt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return ot.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hN(r,e,n,s,a,c,d){const p=sN(r);p.then(E=>{n[E.measurementId]=E.appId,r.options.measurementId&&E.measurementId!==r.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>ot.error(E)),e.push(p);const m=dN().then(E=>{if(E)return s.getId()}),[y,_]=await Promise.all([p,m]);ZI(c)||qI(c,y.measurementId),a("js",new Date);const v=(d==null?void 0:d.config)??{};return v[BI]="firebase",v.update=!0,_!=null&&(v[zI]=_),a("config",y.measurementId,v),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.app=e}_delete(){return delete mi[this.app.options.appId],Promise.resolve()}}let mi={},Km=[];const Ym={};let cu="dataLayer",pN="gtag",Qm,Td,Jm=!1;function mN(){const r=[];if(Kg()&&r.push("This is a browser extension environment."),VS()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,a)=>`(${a+1}) ${s}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});ot.warn(n.message)}}function gN(r,e,n){mN();const s=r.options.appId;if(!s)throw kt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(mi[s]!=null)throw kt.create("already-exists",{id:s});if(!Jm){KI(cu);const{wrappedGtag:c,gtagCore:d}=XI(mi,Km,Ym,cu,pN);Td=c,Qm=d,Jm=!0}return mi[s]=hN(r,Km,Ym,e,Qm,cu,n),new fN(r)}function yN(r=Xu()){r=lt(r);const e=Lr(r,ka);return e.isInitialized()?e.getImmediate():vN(r)}function vN(r,e={}){const n=Lr(r,ka);if(n.isInitialized()){const a=n.getImmediate();if(ir(e,n.getOptions()))return a;throw kt.create("already-initialized")}return n.initialize({options:e})}function _N(r,e,n){r=lt(r),uN(Td,mi[r.app.options.appId],e,n).catch(s=>ot.error(s))}function wN(r,e,n,s){r=lt(r),cN(Td,mi[r.app.options.appId],e,n,s).catch(a=>ot.error(a))}const Xm="@firebase/analytics",Zm="0.10.21";function xN(){on(new Qt(ka,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return gN(s,a,n)},"PUBLIC")),on(new Qt("analytics-internal",r,"PRIVATE")),Ot(Xm,Zm),Ot(Xm,Zm,"esm2020");function r(e){try{const n=e.getProvider(ka).getImmediate();return{logEvent:(s,a,c)=>wN(n,s,a,c),setUserProperties:(s,a)=>_N(n,s,a)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}xN();function $v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SN=$v,Gv=new jr("auth","Firebase",$v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Da("@firebase/auth");function EN(r,...e){Ia.logLevel<=ge.WARN&&Ia.warn(`Auth (${Ii}): ${r}`,...e)}function oa(r,...e){Ia.logLevel<=ge.ERROR&&Ia.error(`Auth (${Ii}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(r,...e){throw bd(r,...e)}function rn(r,...e){return bd(r,...e)}function qv(r,e,n){const s={...SN(),[e]:n};return new jr("auth","Firebase",s).create(e,{appName:r.name})}function rr(r){return qv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Gv.create(r,...e)}function Z(r,e,...n){if(!r)throw bd(e,...n)}function vn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw oa(e),new Error(e)}function In(r,e){r||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function CN(){return eg()==="http:"||eg()==="https:"}function eg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CN()||Kg()||"connection"in navigator)?navigator.onLine:!0}function IN(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Yu()||Yg()}get(){return kN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(r,e){In(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bN=new Us(3e4,6e4);function Ga(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ri(r,e,n,s,a={}){return Yv(r,a,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const p=ki({key:r.config.apiKey,...d}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:m,...c};return BS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&js(r.emulatorConfig.host)&&(y.credentials="include"),Kv.fetch()(await Jv(r,r.config.apiHost,n,p),y)})}async function Yv(r,e,n){r._canInitEmulator=!1;const s={...NN,...e};try{const a=new RN(r),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw na(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const p=c.ok?d.errorMessage:d.error.message,[m,y]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw na(r,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw na(r,"email-already-in-use",d);if(m==="USER_DISABLED")throw na(r,"user-disabled",d);const _=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw qv(r,_,y);kn(r,_)}}catch(a){if(a instanceof an)throw a;kn(r,"network-request-failed",{message:String(a)})}}async function Qv(r,e,n,s,a={}){const c=await Ri(r,e,n,s,a);return"mfaPendingCredential"in c&&kn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function Jv(r,e,n,s){const a=`${e}${n}?${s}`,c=r,d=c.config.emulator?Rd(r.config,a):`${r.config.apiScheme}://${a}`;return TN.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}class RN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rn(this.auth,"network-request-failed")),bN.get())})}}function na(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=rn(r,e,s);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(r,e){return Ri(r,"POST","/v1/accounts:delete",e)}async function Na(r,e){return Ri(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AN(r,e=!1){const n=lt(r),s=await n.getIdToken(e),a=Pd(s);Z(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:ks(uu(a.auth_time)),issuedAtTime:ks(uu(a.iat)),expirationTime:ks(uu(a.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function uu(r){return Number(r)*1e3}function Pd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const a=fa(n);return a?JSON.parse(a):(oa("Failed to decode base64 JWT payload"),null)}catch(a){return oa("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function tg(r){const e=Pd(r);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof an&&ON(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ON({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(r){var v;const e=r.auth,n=await r.getIdToken(),s=await As(r,Na(e,{idToken:n}));Z(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];r._notifyReloadListener(a);const c=(v=a.providerUserInfo)!=null&&v.length?Xv(a.providerUserInfo):[],d=MN(r.providerData,c),p=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Uu(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(r,_)}async function LN(r){const e=lt(r);await Ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MN(r,e){return[...r.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Xv(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(r,e){const n=await Yv(r,{},async()=>{const s=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=r.config,d=await Jv(r,a,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&js(r.emulatorConfig.host)&&(m.credentials="include"),Kv.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FN(r,e){return Ri(r,"POST","/v2/accounts:revokeToken",Ga(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=tg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await DN(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,d=new gi;return s&&(Z(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(Z(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(Z(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(r,e){Z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new jN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Uu(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await As(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AN(this,e)}reload(){return LN(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ta(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await As(this,PN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,a=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,p=n.tenantId??void 0,m=n._redirectEventId??void 0,y=n.createdAt??void 0,_=n.lastLoginAt??void 0,{uid:v,emailVerified:E,isAnonymous:A,providerData:M,stsTokenManager:O}=n;Z(v&&O,e,"internal-error");const T=gi.fromJSON(this.name,O);Z(typeof v=="string",e,"internal-error"),qn(s,e.name),qn(a,e.name),Z(typeof E=="boolean",e,"internal-error"),Z(typeof A=="boolean",e,"internal-error"),qn(c,e.name),qn(d,e.name),qn(p,e.name),qn(m,e.name),qn(y,e.name),qn(_,e.name);const F=new Kt({uid:v,auth:e,email:a,emailVerified:E,displayName:s,isAnonymous:A,photoURL:d,phoneNumber:c,tenantId:p,stsTokenManager:T,createdAt:y,lastLoginAt:_});return M&&Array.isArray(M)&&(F.providerData=M.map(q=>({...q}))),m&&(F._redirectEventId=m),F}static async _fromIdTokenResponse(e,n,s=!1){const a=new gi;a.updateFromServerResponse(n);const c=new Kt({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Ta(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];Z(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Xv(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),p=new gi;p.updateFromIdToken(s);const m=new Kt({uid:a.localId,auth:e,stsTokenManager:p,isAnonymous:d}),y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Uu(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new Map;function _n(r){In(r instanceof Function,"Expected a class definition");let e=ng.get(r);return e?(In(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ng.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zv.type="NONE";const rg=Zv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(r,e,n){return`firebase:${r}:${e}:${n}`}class yi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=aa(this.userKey,a.apiKey,c),this.fullPersistenceKey=aa("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Na(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new yi(_n(rg),e,s);const a=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=a[0]||_n(rg);const d=aa(s,e.config.apiKey,e.name);let p=null;for(const y of n)try{const _=await y._get(d);if(_){let v;if(typeof _=="string"){const E=await Na(e,{idToken:_}).catch(()=>{});if(!E)break;v=await Kt._fromGetAccountInfoResponse(e,E,_)}else v=Kt._fromJSON(e,_);y!==c&&(p=v),c=y;break}}catch{}const m=a.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new yi(c,e,s):(c=m[0],p&&await c._set(d,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(d)}catch{}})),new yi(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(r_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(s_(e))return"Blackberry";if(o_(e))return"Webos";if(t_(e))return"Safari";if((e.includes("chrome/")||n_(e))&&!e.includes("edge/"))return"Chrome";if(i_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function e_(r=at()){return/firefox\//i.test(r)}function t_(r=at()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n_(r=at()){return/crios\//i.test(r)}function r_(r=at()){return/iemobile/i.test(r)}function i_(r=at()){return/android/i.test(r)}function s_(r=at()){return/blackberry/i.test(r)}function o_(r=at()){return/webos/i.test(r)}function Ad(r=at()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function UN(r=at()){var e;return Ad(r)&&!!((e=window.navigator)!=null&&e.standalone)}function zN(){return WS()&&document.documentMode===10}function a_(r=at()){return Ad(r)||i_(r)||o_(r)||s_(r)||/windows phone/i.test(r)||r_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(r,e=[]){let n;switch(r){case"Browser":n=ig(at());break;case"Worker":n=`${ig(at())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,p)=>{try{const m=e(c);d(m)}catch(m){p(m)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(r,e={}){return Ri(r,"GET","/v2/passwordPolicy",Ga(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=6;class VN{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??HN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sg(this),this.idTokenSubscription=new sg(this),this.beforeStateQueue=new BN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var s,a,c;if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Na(this,{idToken:e}),s=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if($t(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(c=this.redirectUser)==null?void 0:c._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===p)&&(m!=null&&m.user)&&(s=m.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(rr(this));const n=e?lt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WN(this),n=new VN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await FN(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(p,this,"internal-error"),p.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,a);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&EN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qa(r){return lt(r)}class sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=JS(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GN(r){Od=r}function qN(r){return Od.loadJS(r)}function KN(){return Od.gapiScript}function YN(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(r,e){const n=Lr(r,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(ir(c,e??{}))return a;kn(a,"already-initialized")}return n.initialize({options:e})}function JN(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function XN(r,e,n){const s=qa(r);Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=c_(e),{host:d,port:p}=ZN(e),m=p===null?"":`:${p}`,y={url:`${c}//${d}${m}/`},_=Object.freeze({host:d,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Z(ir(y,s.config.emulator)&&ir(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,js(d)?Zg(`${c}//${d}${m}`):eT()}function c_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ZN(r){const e=c_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:og(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:og(d)}}}function og(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function eT(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(r,e){return Qv(r,"POST","/v1/accounts:signInWithIdp",Ga(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="http://localhost";class Rr extends u_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...c}=n;if(!s||!a)return null;const d=new Rr(s,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return vi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vi(e,n)}buildRequest(){const e={requestUri:tT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends d_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends zs{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends zs{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends zs{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jn.credential(n,s)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(r,e){return Qv(r,"POST","/v1/accounts:signUp",Ga(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await Kt._fromIdTokenResponse(e,s,a),d=ag(s);return new or({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=ag(s);return new or({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function ag(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(r){var a;if($t(r.app))return Promise.reject(rr(r));const e=qa(r);if(await e._initializationPromise,(a=e.currentUser)!=null&&a.isAnonymous)return new or({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await nT(e,{returnSecureToken:!0}),s=await or._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends an{constructor(e,n,s,a){super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new ba(e,n,s,a)}}function h_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(r,c,e,s):c})}async function iT(r,e,n=!1){const s=await As(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return or._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(r,e,n=!1){const{auth:s}=r;if($t(s.app))return Promise.reject(rr(s));const a="reauthenticate";try{const c=await As(r,h_(s,a,e,r),n);Z(c.idToken,s,"internal-error");const d=Pd(c.idToken);Z(d,s,"internal-error");const{sub:p}=d;return Z(r.uid===p,s,"user-mismatch"),or._forOperation(r,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&kn(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(r,e,n=!1){if($t(r.app))return Promise.reject(rr(r));const s="signIn",a=await h_(r,s,e),c=await or._fromIdTokenResponse(r,s,a);return n||await r._updateCurrentUser(c.user),c}function aT(r,e,n,s){return lt(r).onIdTokenChanged(e,n,s)}function lT(r,e,n){return lt(r).beforeAuthStateChanged(e,n)}const Ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=1e3,uT=10;class p_ extends f_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,p,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);zN()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,uT):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p_.type="LOCAL";const dT=p_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_ extends f_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m_.type="SESSION";const g_=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new Ka(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,d=this.handlersMap[a];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const p=Array.from(d).map(async y=>y(n.origin,c)),m=await hT(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((p,m)=>{const y=jd("",20);a.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(v){const E=v;if(E.data.eventId===y)switch(E.data.status){case"ack":clearTimeout(_),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(E.data.response);break;default:clearTimeout(_),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function pT(r){sn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function mT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gT(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function yT(){return y_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebaseLocalStorageDb",vT=1,Pa="firebaseLocalStorage",__="fbase_key";class Bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ya(r,e){return r.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function _T(){const r=indexedDB.deleteDatabase(v_);return new Bs(r).toPromise()}function zu(){const r=indexedDB.open(v_,vT);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Pa,{keyPath:__})}catch(a){n(a)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Pa)?e(s):(s.close(),await _T(),e(await zu()))})})}async function lg(r,e,n){const s=Ya(r,!0).put({[__]:e,value:n});return new Bs(s).toPromise()}async function wT(r,e){const n=Ya(r,!1).get(e),s=await new Bs(n).toPromise();return s===void 0?null:s.value}function cg(r,e){const n=Ya(r,!0).delete(e);return new Bs(n).toPromise()}const xT=800,ST=3;class w_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ST)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(yT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await mT(),!this.activeServiceWorker)return;this.sender=new fT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zu();return await lg(e,Ra,"1"),await cg(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>wT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Ya(a,!1).getAll();return new Bs(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w_.type="LOCAL";const ET=w_;new Us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(r,e){return e?_n(e):(Z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends u_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kT(r){return oT(r.auth,new Ld(r),r.bypassAuthState)}function IT(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),sT(n,new Ld(r),r.bypassAuthState)}async function NT(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),iT(n,new Ld(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:d,type:p}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kT;case"linkViaPopup":case"linkViaRedirect":return NT;case"reauthViaPopup":case"reauthViaRedirect":return IT;default:kn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new Us(2e3,1e4);class hi extends x_{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TT.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="pendingRedirect",la=new Map;class RT extends x_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const s=await PT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PT(r,e){const n=jT(e),s=OT(r);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function AT(r,e){la.set(r._key(),e)}function OT(r){return _n(r._redirectPersistence)}function jT(r){return aa(bT,r.config.apiKey,r.name)}async function LT(r,e,n=!1){if($t(r.app))return Promise.reject(rr(r));const s=qa(r),a=CT(s,e),d=await new RT(s,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=600*1e3;class DT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!S_(e)){const a=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ug(e))}saveEventToCache(e){this.cachedEventUids.add(ug(e)),this.lastProcessedEventTime=Date.now()}}function ug(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function S_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FT(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return S_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(r,e={}){return Ri(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BT=/^https?/;async function WT(r){if(r.config.emulator)return;const{authorizedDomains:e}=await UT(r);for(const n of e)try{if(HT(n))return}catch{}kn(r,"unauthorized-domain")}function HT(r){const e=Fu(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!BT.test(n))return!1;if(zT.test(r))return s===r;const a=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new Us(3e4,6e4);function dg(){const r=sn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function $T(r){return new Promise((e,n)=>{var a,c,d;function s(){dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dg(),n(rn(r,"network-request-failed"))},timeout:VT.get()})}if((c=(a=sn().gapi)==null?void 0:a.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((d=sn().gapi)!=null&&d.load)s();else{const p=YN("iframefcb");return sn()[p]=()=>{gapi.load?s():n(rn(r,"network-request-failed"))},qN(`${KN()}?onload=${p}`).catch(m=>n(m))}}).catch(e=>{throw ca=null,e})}let ca=null;function GT(r){return ca=ca||$T(r),ca}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new Us(5e3,15e3),KT="__/auth/iframe",YT="emulator/auth/iframe",QT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XT(r){const e=r.config;Z(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Rd(e,YT):`https://${r.config.authDomain}/${KT}`,s={apiKey:e.apiKey,appName:r.name,v:Ii},a=JT.get(r.config.apiHost);a&&(s.eid=a);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${ki(s).slice(1)}`}async function ZT(r){const e=await GT(r),n=sn().gapi;return Z(n,r,"internal-error"),e.open({where:document.body,url:XT(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QT,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const d=rn(r,"network-request-failed"),p=sn().setTimeout(()=>{c(d)},qT.get());function m(){sn().clearTimeout(p),a(s)}s.ping(m).then(m,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tb=500,nb=600,rb="_blank",ib="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sb(r,e,n,s=tb,a=nb){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...eb,width:s.toString(),height:a.toString(),top:c,left:d},y=at().toLowerCase();n&&(p=n_(y)?rb:n),e_(y)&&(e=e||ib,m.scrollbars="yes");const _=Object.entries(m).reduce((E,[A,M])=>`${E}${A}=${M},`,"");if(UN(y)&&p!=="_self")return ob(e||"",p),new hg(null);const v=window.open(e||"",p,_);Z(v,r,"popup-blocked");try{v.focus()}catch{}return new hg(v)}function ob(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="__/auth/handler",lb="emulator/auth/handler",cb=encodeURIComponent("fac");async function fg(r,e,n,s,a,c){Z(r.config.authDomain,r,"auth-domain-config-required"),Z(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ii,eventId:a};if(e instanceof d_){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",vu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries({}))d[_]=v}if(e instanceof zs){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(d.scopes=_.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const _ of Object.keys(p))p[_]===void 0&&delete p[_];const m=await r._getAppCheckToken(),y=m?`#${cb}=${encodeURIComponent(m)}`:"";return`${ub(r)}?${ki(p).slice(1)}${y}`}function ub({config:r}){return r.emulator?Rd(r,lb):`https://${r.authDomain}/${ab}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="webStorageSupport";class db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g_,this._completeRedirectFn=LT,this._overrideRedirectResult=AT}async _openPopup(e,n,s,a){var d;In((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const c=await fg(e,n,s,Fu(),a);return sb(e,c,jd())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await fg(e,n,s,Fu(),a);return pT(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(In(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ZT(e),s=new DT(e);return n.register("authEvent",a=>(Z(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(du,{type:du},a=>{var d;const c=(d=a==null?void 0:a[0])==null?void 0:d[du];c!==void 0&&n(!!c),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return a_()||t_()||Ad()}}const hb=db;var pg="@firebase/auth",mg="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mb(r){on(new Qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=s.options;Z(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l_(r)},y=new $N(s,a,c,m);return JN(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),on(new Qt("auth-internal",e=>{const n=qa(e.getProvider("auth").getImmediate());return(s=>new fb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(pg,mg,pb(r)),Ot(pg,mg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=300,yb=qg("authIdTokenMaxAge")||gb;let gg=null;const vb=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yb)return;const a=n==null?void 0:n.token;gg!==a&&(gg=a,await fetch(r,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function _b(r=Xu()){const e=Lr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=QN(r,{popupRedirectResolver:hb,persistence:[ET,dT,g_]}),s=qg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=vb(c.toString());lT(n,d,()=>d(n.currentUser)),aT(n,p=>d(p))}}const a=$g("auth");return a&&XN(n,`http://${a}`),n}function wb(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}GN({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=a=>{const c=rn("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",wb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mb("Browser");const xb={apiKey:"AIzaSyBVAuC8XlF_76ILkyuKwSGNtYOT-6ujfaY",authDomain:"el-venture-incorporated.firebaseapp.com",databaseURL:"https://el-venture-incorporated-default-rtdb.firebaseio.com",projectId:"el-venture-incorporated",storageBucket:"el-venture-incorporated.firebasestorage.app",messagingSenderId:"327302567876",appId:"1:327302567876:web:62f1524a944f6d0faaf691",measurementId:"G-JJL7C7F8E4"},Md=ry(xb);typeof window<"u"&&yN(Md);const Sb=Qk(Md),hu=_b(Md);let ra=null;const Eb=async()=>hu.currentUser?hu.currentUser:(ra||(ra=rT(hu).then(r=>r.user).finally(()=>{ra=null})),ra),Cb=r=>{if(typeof r=="number")return r;if(typeof r!="string")return 0;const e=r.match(/[0-9,]+(\.\d+)?/);return e&&Number(e[0].replace(/,/g,""))||0},kb=["appointments","bookingRequests","bookings"],yg=r=>r.toLowerCase().replace(/\s+/g," ").trim(),Ib=r=>{const e=Jp.find(s=>s.label===r);if(e)return e;const n=yg(r);return Jp.find(s=>yg(s.label)===n)||null},Nb=async r=>{let e=null;for(const n of kb)try{await Bk(zk(Sb,n),r);return}catch(s){if(e=s,(s==null?void 0:s.code)!=="PERMISSION_DENIED")break}throw e};function Tb(){const r=Or(),{branchId:e,branchName:n,services:s,stylists:a}=r.state||{},[c,d]=D.useState(!1),[p,m]=D.useState(!1),[y,_]=D.useState(""),[v,E]=D.useState({name:"",phone:"",date:"",time:"",notes:""}),A=O=>{const{name:T,value:F}=O.target;if(T==="phone"){const q=F.replace(/\D/g,"").slice(0,11);E(K=>({...K,phone:q}));return}if(T==="notes"){E(q=>({...q,notes:F.slice(0,200)}));return}E(q=>({...q,[T]:F}))},M=async O=>{O.preventDefault(),_(""),m(!0);try{await Eb();const T=Array.isArray(a)?a:[],F=T.length>0?T:[{name:"Any available stylist"}],q=s.map(ie=>{const le=Cb(ie.price),be=Ib(ie.name)||{id:`fallback-${ie.name}`,label:ie.name,kind:"service",basePrice:le,tags:[]},Lt=F.map(Dt=>{const Je=Dt.name,Ge=aS({branchId:e,employeeName:Je,item:be,price:le}),ct=1/F.length,_t=le*Ge*ct;return console.log("COMMISSION DEBUG:",{service:ie.name,employeeName:Je,item:be,tags:be==null?void 0:be.tags,rate:Ge,price:le,commission:_t}),{name:Je,share:ct,commissionRate:Ge,commissionAmount:_t}}),Mt=Lt.reduce((Dt,Je)=>Dt+Je.commissionAmount,0);return{name:ie.name,type:be.kind||"service",price:le,assignedStylists:Lt,totalServiceCommission:Mt}}),K=q.reduce((ie,le)=>ie+le.price,0),ee=q.reduce((ie,le)=>ie+le.totalServiceCommission,0);await Nb({customerName:v.name,phone:v.phone,preferredDate:v.date,preferredTime:v.time,notes:v.notes||"",branchId:e||"",branchName:n,services:q,stylists:T.length>0?T.map(ie=>({name:ie.name})):[{name:"Any available stylist"}],totalAmount:K,totalCommission:ee,status:"pending",createdAt:Date.now()}),d(!0)}catch(T){(T==null?void 0:T.code)==="auth/admin-restricted-operation"?_("Anonymous sign-in is disabled in Firebase Auth. Enable Anonymous provider in Authentication > Sign-in method."):(T==null?void 0:T.code)==="PERMISSION_DENIED"?_("Firebase denied write access. Please update Realtime Database rules to allow writing appointments."):_("Failed to save booking request. Please try again."),console.error("Failed to save appointment:",T)}finally{m(!1)}};return!e||!n||!s||s.length===0?f.jsxs("div",{className:"mx-auto max-w-md px-4 py-12 text-center",children:[f.jsx("p",{className:"text-gray-600",children:"No booking selected."}),f.jsx(wn,{to:"/book",className:"mt-4 inline-block text-accent hover:underline",children:"Start over"})]}):c?f.jsx("div",{className:"flex items-center justify-center min-h-[80vh] px-4",children:f.jsxs("div",{className:"w-full max-w-md bg-white shadow-xl rounded-2xl p-6 text-center",children:[f.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100",children:f.jsx(Mx,{className:"h-12 w-12 text-green-600"})}),f.jsx("h2",{className:"mt-4 text-3xl font-bold text-gray-900",children:"Request Received"}),f.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Your appointment request has been submitted successfully."}),f.jsxs("p",{className:"mt-3 font-semibold text-gray-800",children:["📍 ",n]}),f.jsxs("div",{className:"mt-4 text-left",children:[f.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Selected Services:"}),f.jsx("div",{className:"divide-y",children:s.map(O=>f.jsxs("div",{className:"flex justify-between py-2 text-sm",children:[f.jsx("span",{className:"text-gray-800 font-medium",children:O.name}),f.jsx("span",{className:"font-semibold text-accent",children:O.price})]},`${O.name}-${O.price}`))})]}),f.jsx(wn,{to:"/",className:"mt-6 block w-full rounded-lg bg-accent py-3 font-medium text-white hover:bg-accent-dark",children:"Back to Home"})]})}):f.jsx("div",{className:"min-h-screen bg-gray-50",children:f.jsxs("div",{className:"mx-auto max-w-lg px-4 py-8 sm:py-12",children:[f.jsxs(wn,{to:"/book/services",state:r.state,className:"mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent",children:[f.jsx($u,{className:"h-5 w-5"}),"Change services or stylist"]}),f.jsxs("div",{className:"rounded-2xl border border-gray-200 bg-white p-6 shadow-md",children:[f.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Appointment details"}),f.jsxs("div",{className:"mt-4 space-y-3 rounded-lg bg-gray-50 p-4",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm text-gray-500",children:"Branch"}),f.jsx("p",{className:"font-medium text-gray-900",children:n})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-sm text-gray-500",children:"Selected services"}),f.jsx("ul",{className:"mt-1 space-y-1 text-sm",children:s.map(O=>f.jsxs("li",{className:"flex items-center justify-between gap-2",children:[f.jsx("span",{className:"font-medium text-gray-900",children:O.name}),f.jsx("span",{className:"text-accent font-semibold",children:O.price})]},`${O.name}-${O.price}`))})]}),f.jsxs("div",{className:"flex items-center gap-3 rounded-lg bg-white px-3 py-2",children:[f.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent",children:f.jsx($x,{className:"h-5 w-5"})}),f.jsxs("div",{className:"text-sm",children:[f.jsx("p",{className:"text-gray-500",children:"Preferred stylist"}),a&&a.length>0?f.jsx("ul",{className:"mt-1 space-y-1 text-sm",children:a.map(O=>f.jsxs("li",{className:"flex flex-col",children:[f.jsx("span",{className:"font-medium text-gray-900",children:O.name}),f.jsxs("span",{className:"text-xs text-gray-500",children:[O.role,O.specialty?` • ${O.specialty}`:""]})]},O.name))}):f.jsx("p",{className:"font-medium text-gray-900",children:"Any available stylist"})]})]})]}),f.jsxs("form",{onSubmit:M,className:"mt-6 space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full name"}),f.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:v.name,onChange:A,className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone"}),f.jsx("input",{id:"phone",name:"phone",type:"tel",required:!0,value:v.phone,onChange:A,inputMode:"numeric",pattern:"^09\\d{9}$",title:"Use 11-digit PH number (e.g. 09XXXXXXXXX)",maxLength:11,className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"})]}),f.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"date",className:"block text-sm font-medium text-gray-700",children:"Preferred date"}),f.jsx("input",{id:"date",name:"date",type:"date",required:!0,value:v.date,onChange:A,className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"time",className:"block text-sm font-medium text-gray-700",children:"Preferred time"}),f.jsx("input",{id:"time",name:"time",type:"time",required:!0,value:v.time,onChange:A,className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"})]})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"notes",className:"block text-sm font-medium text-gray-700",children:"Notes (optional)"}),f.jsx("textarea",{id:"notes",name:"notes",rows:3,value:v.notes,onChange:A,maxLength:200,placeholder:"Maximum 200 characters",className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"}),f.jsxs("p",{className:"mt-1 text-xs text-gray-500",children:[v.notes.length,"/200"]})]}),y?f.jsx("p",{className:"rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700",children:y}):null,f.jsxs("button",{type:"submit",disabled:p,className:"flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-medium text-white transition hover:bg-accent-dark",children:[f.jsx(Gu,{className:"h-5 w-5"}),p?"Saving booking...":"Confirm booking request"]})]})]})]})})}function bb(){return f.jsx(Tx,{children:f.jsxs("div",{className:"min-h-screen bg-white",children:[f.jsx(Yx,{}),f.jsxs(xx,{children:[f.jsx(gn,{path:"/",element:f.jsx(hS,{})}),f.jsx(gn,{path:"/products",element:f.jsx(mS,{})}),f.jsx(gn,{path:"/about",element:f.jsx(CS,{})}),f.jsx(gn,{path:"/team",element:f.jsx(xS,{})}),f.jsx(gn,{path:"/book",element:f.jsx(IS,{})}),f.jsx(gn,{path:"/book/services",element:f.jsx(TS,{})}),f.jsx(gn,{path:"/book/stylist",element:f.jsx(bS,{})}),f.jsx(gn,{path:"/book/details",element:f.jsx(Tb,{})})]}),f.jsx(Qx,{})]})})}bw.createRoot(document.getElementById("root")).render(f.jsx(_g.StrictMode,{children:f.jsx(bb,{})}));
