function xx(r,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in r)){const c=Object.getOwnPropertyDescriptor(s,a);c&&Object.defineProperty(r,a,c.get?c:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function xg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Wc={exports:{}},ys={},Hc={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function wx(){if(jp)return ie;jp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function C(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,A={};function R(k,P,Y){this.props=k,this.context=P,this.refs=A,this.updater=Y||T}R.prototype.isReactComponent={},R.prototype.setState=function(k,P){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,P,"setState")},R.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function U(){}U.prototype=R.prototype;function q(k,P,Y){this.props=k,this.context=P,this.refs=A,this.updater=Y||T}var K=q.prototype=new U;K.constructor=q,j(K,R.prototype),K.isPureReactComponent=!0;var re=Array.isArray,ne=Object.prototype.hasOwnProperty,Z={current:null},Ae={key:!0,ref:!0,__self:!0,__source:!0};function pe(k,P,Y){var se,ue={},de=null,xe=null;if(P!=null)for(se in P.ref!==void 0&&(xe=P.ref),P.key!==void 0&&(de=""+P.key),P)ne.call(P,se)&&!Ae.hasOwnProperty(se)&&(ue[se]=P[se]);var me=arguments.length-2;if(me===1)ue.children=Y;else if(1<me){for(var Ne=Array(me),kt=0;kt<me;kt++)Ne[kt]=arguments[kt+2];ue.children=Ne}if(k&&k.defaultProps)for(se in me=k.defaultProps,me)ue[se]===void 0&&(ue[se]=me[se]);return{$$typeof:r,type:k,key:de,ref:xe,props:ue,_owner:Z.current}}function wt(k,P){return{$$typeof:r,type:k.type,key:P,ref:k.ref,props:k.props,_owner:k._owner}}function St(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function ht(k){var P={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Y){return P[Y]})}var Ke=/\/+/g;function We(k,P){return typeof k=="object"&&k!==null&&k.key!=null?ht(""+k.key):P.toString(36)}function Ye(k,P,Y,se,ue){var de=typeof k;(de==="undefined"||de==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(de){case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case r:case e:xe=!0}}if(xe)return xe=k,ue=ue(xe),k=se===""?"."+We(xe,0):se,re(ue)?(Y="",k!=null&&(Y=k.replace(Ke,"$&/")+"/"),Ye(ue,P,Y,"",function(kt){return kt})):ue!=null&&(St(ue)&&(ue=wt(ue,Y+(!ue.key||xe&&xe.key===ue.key?"":(""+ue.key).replace(Ke,"$&/")+"/")+k)),P.push(ue)),1;if(xe=0,se=se===""?".":se+":",re(k))for(var me=0;me<k.length;me++){de=k[me];var Ne=se+We(de,me);xe+=Ye(de,P,Y,Ne,ue)}else if(Ne=C(k),typeof Ne=="function")for(k=Ne.call(k),me=0;!(de=k.next()).done;)de=de.value,Ne=se+We(de,me++),xe+=Ye(de,P,Y,Ne,ue);else if(de==="object")throw P=String(k),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return xe}function ot(k,P,Y){if(k==null)return k;var se=[],ue=0;return Ye(k,se,"","",function(de){return P.call(Y,de,ue++)}),se}function je(k){if(k._status===-1){var P=k._result;P=P(),P.then(function(Y){(k._status===0||k._status===-1)&&(k._status=1,k._result=Y)},function(Y){(k._status===0||k._status===-1)&&(k._status=2,k._result=Y)}),k._status===-1&&(k._status=0,k._result=P)}if(k._status===1)return k._result.default;throw k._result}var _e={current:null},z={transition:null},X={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:z,ReactCurrentOwner:Z};function I(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:ot,forEach:function(k,P,Y){ot(k,function(){P.apply(this,arguments)},Y)},count:function(k){var P=0;return ot(k,function(){P++}),P},toArray:function(k){return ot(k,function(P){return P})||[]},only:function(k){if(!St(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ie.Component=R,ie.Fragment=n,ie.Profiler=a,ie.PureComponent=q,ie.StrictMode=s,ie.Suspense=m,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ie.act=I,ie.cloneElement=function(k,P,Y){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var se=j({},k.props),ue=k.key,de=k.ref,xe=k._owner;if(P!=null){if(P.ref!==void 0&&(de=P.ref,xe=Z.current),P.key!==void 0&&(ue=""+P.key),k.type&&k.type.defaultProps)var me=k.type.defaultProps;for(Ne in P)ne.call(P,Ne)&&!Ae.hasOwnProperty(Ne)&&(se[Ne]=P[Ne]===void 0&&me!==void 0?me[Ne]:P[Ne])}var Ne=arguments.length-2;if(Ne===1)se.children=Y;else if(1<Ne){me=Array(Ne);for(var kt=0;kt<Ne;kt++)me[kt]=arguments[kt+2];se.children=me}return{$$typeof:r,type:k.type,key:ue,ref:de,props:se,_owner:xe}},ie.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:c,_context:k},k.Consumer=k},ie.createElement=pe,ie.createFactory=function(k){var P=pe.bind(null,k);return P.type=k,P},ie.createRef=function(){return{current:null}},ie.forwardRef=function(k){return{$$typeof:p,render:k}},ie.isValidElement=St,ie.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:je}},ie.memo=function(k,P){return{$$typeof:y,type:k,compare:P===void 0?null:P}},ie.startTransition=function(k){var P=z.transition;z.transition={};try{k()}finally{z.transition=P}},ie.unstable_act=I,ie.useCallback=function(k,P){return _e.current.useCallback(k,P)},ie.useContext=function(k){return _e.current.useContext(k)},ie.useDebugValue=function(){},ie.useDeferredValue=function(k){return _e.current.useDeferredValue(k)},ie.useEffect=function(k,P){return _e.current.useEffect(k,P)},ie.useId=function(){return _e.current.useId()},ie.useImperativeHandle=function(k,P,Y){return _e.current.useImperativeHandle(k,P,Y)},ie.useInsertionEffect=function(k,P){return _e.current.useInsertionEffect(k,P)},ie.useLayoutEffect=function(k,P){return _e.current.useLayoutEffect(k,P)},ie.useMemo=function(k,P){return _e.current.useMemo(k,P)},ie.useReducer=function(k,P,Y){return _e.current.useReducer(k,P,Y)},ie.useRef=function(k){return _e.current.useRef(k)},ie.useState=function(k){return _e.current.useState(k)},ie.useSyncExternalStore=function(k,P,Y){return _e.current.useSyncExternalStore(k,P,Y)},ie.useTransition=function(){return _e.current.useTransition()},ie.version="18.3.1",ie}var Op;function Bu(){return Op||(Op=1,Hc.exports=wx()),Hc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Sx(){if(Lp)return ys;Lp=1;var r=Bu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(p,m,y){var x,v={},C=null,T=null;y!==void 0&&(C=""+y),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(T=m.ref);for(x in m)s.call(m,x)&&!c.hasOwnProperty(x)&&(v[x]=m[x]);if(p&&p.defaultProps)for(x in m=p.defaultProps,m)v[x]===void 0&&(v[x]=m[x]);return{$$typeof:e,type:p,key:C,ref:T,props:v,_owner:a.current}}return ys.Fragment=n,ys.jsx=d,ys.jsxs=d,ys}var Mp;function kx(){return Mp||(Mp=1,Wc.exports=Sx()),Wc.exports}var f=kx(),M=Bu();const wg=xg(M),Cx=xx({__proto__:null,default:wg},[M]);var ea={},$c={exports:{}},vt={},Vc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function Ex(){return Dp||(Dp=1,(function(r){function e(z,X){var I=z.length;z.push(X);e:for(;0<I;){var k=I-1>>>1,P=z[k];if(0<a(P,X))z[k]=X,z[I]=P,I=k;else break e}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var X=z[0],I=z.pop();if(I!==X){z[0]=I;e:for(var k=0,P=z.length,Y=P>>>1;k<Y;){var se=2*(k+1)-1,ue=z[se],de=se+1,xe=z[de];if(0>a(ue,I))de<P&&0>a(xe,ue)?(z[k]=xe,z[de]=I,k=de):(z[k]=ue,z[se]=I,k=se);else if(de<P&&0>a(xe,I))z[k]=xe,z[de]=I,k=de;else break e}}return X}function a(z,X){var I=z.sortIndex-X.sortIndex;return I!==0?I:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],y=[],x=1,v=null,C=3,T=!1,j=!1,A=!1,R=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(z){for(var X=n(y);X!==null;){if(X.callback===null)s(y);else if(X.startTime<=z)s(y),X.sortIndex=X.expirationTime,e(m,X);else break;X=n(y)}}function re(z){if(A=!1,K(z),!j)if(n(m)!==null)j=!0,je(ne);else{var X=n(y);X!==null&&_e(re,X.startTime-z)}}function ne(z,X){j=!1,A&&(A=!1,U(pe),pe=-1),T=!0;var I=C;try{for(K(X),v=n(m);v!==null&&(!(v.expirationTime>X)||z&&!ht());){var k=v.callback;if(typeof k=="function"){v.callback=null,C=v.priorityLevel;var P=k(v.expirationTime<=X);X=r.unstable_now(),typeof P=="function"?v.callback=P:v===n(m)&&s(m),K(X)}else s(m);v=n(m)}if(v!==null)var Y=!0;else{var se=n(y);se!==null&&_e(re,se.startTime-X),Y=!1}return Y}finally{v=null,C=I,T=!1}}var Z=!1,Ae=null,pe=-1,wt=5,St=-1;function ht(){return!(r.unstable_now()-St<wt)}function Ke(){if(Ae!==null){var z=r.unstable_now();St=z;var X=!0;try{X=Ae(!0,z)}finally{X?We():(Z=!1,Ae=null)}}else Z=!1}var We;if(typeof q=="function")We=function(){q(Ke)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,ot=Ye.port2;Ye.port1.onmessage=Ke,We=function(){ot.postMessage(null)}}else We=function(){R(Ke,0)};function je(z){Ae=z,Z||(Z=!0,We())}function _e(z,X){pe=R(function(){z(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){j||T||(j=!0,je(ne))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):wt=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(z){switch(C){case 1:case 2:case 3:var X=3;break;default:X=C}var I=C;C=X;try{return z()}finally{C=I}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=C;C=z;try{return X()}finally{C=I}},r.unstable_scheduleCallback=function(z,X,I){var k=r.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?k+I:k):I=k,z){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=I+P,z={id:x++,callback:X,priorityLevel:z,startTime:I,expirationTime:P,sortIndex:-1},I>k?(z.sortIndex=I,e(y,z),n(m)===null&&z===n(y)&&(A?(U(pe),pe=-1):A=!0,_e(re,I-k))):(z.sortIndex=P,e(m,z),j||T||(j=!0,je(ne))),z},r.unstable_shouldYield=ht,r.unstable_wrapCallback=function(z){var X=C;return function(){var I=C;C=X;try{return z.apply(this,arguments)}finally{C=I}}}})(Gc)),Gc}var Fp;function bx(){return Fp||(Fp=1,Vc.exports=Ex()),Vc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function Nx(){if(Up)return vt;Up=1;var r=Bu(),e=bx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function C(t){return m.call(v,t)?!0:m.call(x,t)?!1:y.test(t)?v[t]=!0:(x[t]=!0,!1)}function T(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j(t,i,o,l){if(i===null||typeof i>"u"||T(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,u,h,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=g}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){R[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];R[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){R[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){R[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){R[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){R[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){R[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){R[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){R[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var U=/[\-:]([a-z])/g;function q(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(U,q);R[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(U,q);R[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(U,q);R[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){R[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),R.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){R[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function K(t,i,o,l){var u=R.hasOwnProperty(i)?R[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(j(i,o,u,l)&&(o=null),l||u===null?C(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var re=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),Z=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),wt=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),ht=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),z=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var I=Object.assign,k;function P(t){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var Y=!1;function se(t,i){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var l=N}Reflect.construct(t,[],i)}else{try{i.call()}catch(N){l=N}t.call(i.prototype)}else{try{throw Error()}catch(N){l=N}t()}}catch(N){if(N&&l&&typeof N.stack=="string"){for(var u=N.stack.split(`
`),h=l.stack.split(`
`),g=u.length-1,_=h.length-1;1<=g&&0<=_&&u[g]!==h[_];)_--;for(;1<=g&&0<=_;g--,_--)if(u[g]!==h[_]){if(g!==1||_!==1)do if(g--,_--,0>_||u[g]!==h[_]){var w=`
`+u[g].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=g&&0<=_);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function ue(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ae:return"Fragment";case Z:return"Portal";case wt:return"Profiler";case pe:return"StrictMode";case We:return"Suspense";case Ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ht:return(t.displayName||"Context")+".Consumer";case St:return(t._context.displayName||"Context")+".Provider";case Ke:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ot:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case je:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kt(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,h.call(this,g)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Hs(t){t._valueTracker||(t._valueTracker=kt(t))}function Fd(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ne(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function $s(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ya(t,i){var o=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ud(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=me(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Bd(t,i){i=i.checked,i!=null&&K(t,"checked",i,!1)}function Qa(t,i){Bd(t,i);var o=me(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ja(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ja(t,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function zd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ja(t,i,o){(i!=="number"||$s(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ai=Array.isArray;function Br(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+me(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Xa(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wd(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ai(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:me(o)}}function Hd(t,i){var o=me(i.value),l=me(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function $d(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Vd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Vd(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,Gd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ji(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C0=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(t){C0.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oi[i]=Oi[t]})});function qd(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oi.hasOwnProperty(t)&&Oi[t]?(""+i).trim():i+"px"}function Kd(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=qd(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var E0=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(t,i){if(i){if(E0[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function tl(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function rl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var il=null,zr=null,Wr=null;function Yd(t){if(t=ns(t)){if(typeof il!="function")throw Error(n(280));var i=t.stateNode;i&&(i=mo(i),il(t.stateNode,t.type,i))}}function Qd(t){zr?Wr?Wr.push(t):Wr=[t]:zr=t}function Jd(){if(zr){var t=zr,i=Wr;if(Wr=zr=null,Yd(t),i)for(t=0;t<i.length;t++)Yd(i[t])}}function Xd(t,i){return t(i)}function Zd(){}var sl=!1;function eh(t,i,o){if(sl)return t(i,o);sl=!0;try{return Xd(t,i,o)}finally{sl=!1,(zr!==null||Wr!==null)&&(Zd(),Jd())}}function Li(t,i){var o=t.stateNode;if(o===null)return null;var l=mo(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ol=!1;if(p)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){ol=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{ol=!1}function b0(t,i,o,l,u,h,g,_,w){var N=Array.prototype.slice.call(arguments,3);try{i.apply(o,N)}catch(L){this.onError(L)}}var Di=!1,Gs=null,qs=!1,al=null,N0={onError:function(t){Di=!0,Gs=t}};function I0(t,i,o,l,u,h,g,_,w){Di=!1,Gs=null,b0.apply(N0,arguments)}function T0(t,i,o,l,u,h,g,_,w){if(I0.apply(this,arguments),Di){if(Di){var N=Gs;Di=!1,Gs=null}else throw Error(n(198));qs||(qs=!0,al=N)}}function cr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function th(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function nh(t){if(cr(t)!==t)throw Error(n(188))}function R0(t){var i=t.alternate;if(!i){if(i=cr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return nh(u),t;if(h===l)return nh(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var g=!1,_=u.child;_;){if(_===o){g=!0,o=u,l=h;break}if(_===l){g=!0,l=u,o=h;break}_=_.sibling}if(!g){for(_=h.child;_;){if(_===o){g=!0,o=h,l=u;break}if(_===l){g=!0,l=h,o=u;break}_=_.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function rh(t){return t=R0(t),t!==null?ih(t):null}function ih(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ih(t);if(i!==null)return i;t=t.sibling}return null}var sh=e.unstable_scheduleCallback,oh=e.unstable_cancelCallback,P0=e.unstable_shouldYield,A0=e.unstable_requestPaint,Le=e.unstable_now,j0=e.unstable_getCurrentPriorityLevel,ll=e.unstable_ImmediatePriority,ah=e.unstable_UserBlockingPriority,Ks=e.unstable_NormalPriority,O0=e.unstable_LowPriority,lh=e.unstable_IdlePriority,Ys=null,Jt=null;function L0(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:F0,M0=Math.log,D0=Math.LN2;function F0(t){return t>>>=0,t===0?32:31-(M0(t)/D0|0)|0}var Qs=64,Js=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xs(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,g=o&268435455;if(g!==0){var _=g&~u;_!==0?l=Fi(_):(h&=g,h!==0&&(l=Fi(h)))}else g=o&~u,g!==0?l=Fi(g):h!==0&&(l=Fi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Ft(i),u=1<<o,l|=t[o],i&=~u;return l}function U0(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B0(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var g=31-Ft(h),_=1<<g,w=u[g];w===-1?((_&o)===0||(_&l)!==0)&&(u[g]=U0(_,i)):w<=i&&(t.expiredLanes|=_),h&=~_}}function cl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ch(){var t=Qs;return Qs<<=1,(Qs&4194240)===0&&(Qs=64),t}function ul(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Ui(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ft(i),t[i]=o}function z0(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Ft(o),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function dl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Ft(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var ge=0;function uh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var dh,hl,hh,fh,ph,fl=!1,Zs=[],Tn=null,Rn=null,Pn=null,Bi=new Map,zi=new Map,An=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(t,i){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Bi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(i.pointerId)}}function Wi(t,i,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=ns(i),i!==null&&hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function H0(t,i,o,l,u){switch(i){case"focusin":return Tn=Wi(Tn,t,i,o,l,u),!0;case"dragenter":return Rn=Wi(Rn,t,i,o,l,u),!0;case"mouseover":return Pn=Wi(Pn,t,i,o,l,u),!0;case"pointerover":var h=u.pointerId;return Bi.set(h,Wi(Bi.get(h)||null,t,i,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,zi.set(h,Wi(zi.get(h)||null,t,i,o,l,u)),!0}return!1}function gh(t){var i=ur(t.target);if(i!==null){var o=cr(i);if(o!==null){if(i=o.tag,i===13){if(i=th(o),i!==null){t.blockedOn=i,ph(t.priority,function(){hh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ml(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);nl=l,o.target.dispatchEvent(l),nl=null}else return i=ns(o),i!==null&&hl(i),t.blockedOn=o,!1;i.shift()}return!0}function yh(t,i,o){eo(t)&&o.delete(i)}function $0(){fl=!1,Tn!==null&&eo(Tn)&&(Tn=null),Rn!==null&&eo(Rn)&&(Rn=null),Pn!==null&&eo(Pn)&&(Pn=null),Bi.forEach(yh),zi.forEach(yh)}function Hi(t,i){t.blockedOn===i&&(t.blockedOn=null,fl||(fl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$0)))}function $i(t){function i(u){return Hi(u,t)}if(0<Zs.length){Hi(Zs[0],t);for(var o=1;o<Zs.length;o++){var l=Zs[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Tn!==null&&Hi(Tn,t),Rn!==null&&Hi(Rn,t),Pn!==null&&Hi(Pn,t),Bi.forEach(i),zi.forEach(i),o=0;o<An.length;o++)l=An[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<An.length&&(o=An[0],o.blockedOn===null);)gh(o),o.blockedOn===null&&An.shift()}var Hr=re.ReactCurrentBatchConfig,to=!0;function V0(t,i,o,l){var u=ge,h=Hr.transition;Hr.transition=null;try{ge=1,pl(t,i,o,l)}finally{ge=u,Hr.transition=h}}function G0(t,i,o,l){var u=ge,h=Hr.transition;Hr.transition=null;try{ge=4,pl(t,i,o,l)}finally{ge=u,Hr.transition=h}}function pl(t,i,o,l){if(to){var u=ml(t,i,o,l);if(u===null)Al(t,i,l,no,o),mh(t,l);else if(H0(u,t,i,o,l))l.stopPropagation();else if(mh(t,l),i&4&&-1<W0.indexOf(t)){for(;u!==null;){var h=ns(u);if(h!==null&&dh(h),h=ml(t,i,o,l),h===null&&Al(t,i,l,no,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else Al(t,i,l,null,o)}}var no=null;function ml(t,i,o,l){if(no=null,t=rl(l),t=ur(t),t!==null)if(i=cr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=th(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return no=t,null}function vh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case ll:return 1;case ah:return 4;case Ks:case O0:return 16;case lh:return 536870912;default:return 16}default:return 16}}var jn=null,gl=null,ro=null;function _h(){if(ro)return ro;var t,i=gl,o=i.length,l,u="value"in jn?jn.value:jn.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var g=o-t;for(l=1;l<=g&&i[o-l]===u[h-l];l++);return ro=u.slice(t,1<l?1-l:void 0)}function io(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function xh(){return!1}function Ct(t){function i(o,l,u,h,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?so:xh,this.isPropagationStopped=xh,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),i}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Ct($r),Vi=I({},$r,{view:0,detail:0}),q0=Ct(Vi),vl,_l,Gi,oo=I({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(vl=t.screenX-Gi.screenX,_l=t.screenY-Gi.screenY):_l=vl=0,Gi=t),vl)},movementY:function(t){return"movementY"in t?t.movementY:_l}}),wh=Ct(oo),K0=I({},oo,{dataTransfer:0}),Y0=Ct(K0),Q0=I({},Vi,{relatedTarget:0}),xl=Ct(Q0),J0=I({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Ct(J0),Z0=I({},$r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e_=Ct(Z0),t_=I({},$r,{data:0}),Sh=Ct(t_),n_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=i_[t])?!!i[t]:!1}function wl(){return s_}var o_=I({},Vi,{key:function(t){if(t.key){var i=n_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a_=Ct(o_),l_=I({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=Ct(l_),c_=I({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),u_=Ct(c_),d_=I({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),h_=Ct(d_),f_=I({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p_=Ct(f_),m_=[9,13,27,32],Sl=p&&"CompositionEvent"in window,qi=null;p&&"documentMode"in document&&(qi=document.documentMode);var g_=p&&"TextEvent"in window&&!qi,Ch=p&&(!Sl||qi&&8<qi&&11>=qi),Eh=" ",bh=!1;function Nh(t,i){switch(t){case"keyup":return m_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function y_(t,i){switch(t){case"compositionend":return Ih(i);case"keypress":return i.which!==32?null:(bh=!0,Eh);case"textInput":return t=i.data,t===Eh&&bh?null:t;default:return null}}function v_(t,i){if(Vr)return t==="compositionend"||!Sl&&Nh(t,i)?(t=_h(),ro=gl=jn=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ch&&i.locale!=="ko"?null:i.data;default:return null}}var __={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!__[t.type]:i==="textarea"}function Rh(t,i,o,l){Qd(l),i=ho(i,"onChange"),0<i.length&&(o=new yl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var Ki=null,Yi=null;function x_(t){Kh(t,0)}function ao(t){var i=Qr(t);if(Fd(i))return t}function w_(t,i){if(t==="change")return i}var Ph=!1;if(p){var kl;if(p){var Cl="oninput"in document;if(!Cl){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),Cl=typeof Ah.oninput=="function"}kl=Cl}else kl=!1;Ph=kl&&(!document.documentMode||9<document.documentMode)}function jh(){Ki&&(Ki.detachEvent("onpropertychange",Oh),Yi=Ki=null)}function Oh(t){if(t.propertyName==="value"&&ao(Yi)){var i=[];Rh(i,Yi,t,rl(t)),eh(x_,i)}}function S_(t,i,o){t==="focusin"?(jh(),Ki=i,Yi=o,Ki.attachEvent("onpropertychange",Oh)):t==="focusout"&&jh()}function k_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(Yi)}function C_(t,i){if(t==="click")return ao(i)}function E_(t,i){if(t==="input"||t==="change")return ao(i)}function b_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ut=typeof Object.is=="function"?Object.is:b_;function Qi(t,i){if(Ut(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!m.call(i,u)||!Ut(t[u],i[u]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mh(t,i){var o=Lh(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Lh(o)}}function Dh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Fh(){for(var t=window,i=$s();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=$s(t.document)}return i}function El(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function N_(t){var i=Fh(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Dh(o.ownerDocument.documentElement,o)){if(l!==null&&El(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=Mh(o,h);var g=Mh(o,l);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I_=p&&"documentMode"in document&&11>=document.documentMode,Gr=null,bl=null,Ji=null,Nl=!1;function Uh(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Nl||Gr==null||Gr!==$s(l)||(l=Gr,"selectionStart"in l&&El(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ji&&Qi(Ji,l)||(Ji=l,l=ho(bl,"onSelect"),0<l.length&&(i=new yl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Gr)))}function lo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var qr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Il={},Bh={};p&&(Bh=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function co(t){if(Il[t])return Il[t];if(!qr[t])return t;var i=qr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Bh)return Il[t]=i[o];return t}var zh=co("animationend"),Wh=co("animationiteration"),Hh=co("animationstart"),$h=co("transitionend"),Vh=new Map,Gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,i){Vh.set(t,i),c(i,[t])}for(var Tl=0;Tl<Gh.length;Tl++){var Rl=Gh[Tl],T_=Rl.toLowerCase(),R_=Rl[0].toUpperCase()+Rl.slice(1);On(T_,"on"+R_)}On(zh,"onAnimationEnd"),On(Wh,"onAnimationIteration"),On(Hh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On($h,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function qh(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,T0(l,i,void 0,t),t.currentTarget=null}function Kh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var g=l.length-1;0<=g;g--){var _=l[g],w=_.instance,N=_.currentTarget;if(_=_.listener,w!==h&&u.isPropagationStopped())break e;qh(u,_,N),h=w}else for(g=0;g<l.length;g++){if(_=l[g],w=_.instance,N=_.currentTarget,_=_.listener,w!==h&&u.isPropagationStopped())break e;qh(u,_,N),h=w}}}if(qs)throw t=al,qs=!1,al=null,t}function Se(t,i){var o=i[Fl];o===void 0&&(o=i[Fl]=new Set);var l=t+"__bubble";o.has(l)||(Yh(i,t,2,!1),o.add(l))}function Pl(t,i,o){var l=0;i&&(l|=4),Yh(o,t,l,i)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Zi(t){if(!t[uo]){t[uo]=!0,s.forEach(function(o){o!=="selectionchange"&&(P_.has(o)||Pl(o,!1,t),Pl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uo]||(i[uo]=!0,Pl("selectionchange",!1,i))}}function Yh(t,i,o,l){switch(vh(i)){case 1:var u=V0;break;case 4:u=G0;break;default:u=pl}o=u.bind(null,i,o,t),u=void 0,!ol||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function Al(t,i,o,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var _=l.stateNode.containerInfo;if(_===u||_.nodeType===8&&_.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var w=g.tag;if((w===3||w===4)&&(w=g.stateNode.containerInfo,w===u||w.nodeType===8&&w.parentNode===u))return;g=g.return}for(;_!==null;){if(g=ur(_),g===null)return;if(w=g.tag,w===5||w===6){l=h=g;continue e}_=_.parentNode}}l=l.return}eh(function(){var N=h,L=rl(o),D=[];e:{var O=Vh.get(t);if(O!==void 0){var W=yl,$=t;switch(t){case"keypress":if(io(o)===0)break e;case"keydown":case"keyup":W=a_;break;case"focusin":$="focus",W=xl;break;case"focusout":$="blur",W=xl;break;case"beforeblur":case"afterblur":W=xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=u_;break;case zh:case Wh:case Hh:W=X0;break;case $h:W=h_;break;case"scroll":W=q0;break;case"wheel":W=p_;break;case"copy":case"cut":case"paste":W=e_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=kh}var V=(i&4)!==0,Me=!V&&t==="scroll",E=V?O!==null?O+"Capture":null:O;V=[];for(var S=N,b;S!==null;){b=S;var F=b.stateNode;if(b.tag===5&&F!==null&&(b=F,E!==null&&(F=Li(S,E),F!=null&&V.push(es(S,F,b)))),Me)break;S=S.return}0<V.length&&(O=new W(O,$,null,o,L),D.push({event:O,listeners:V}))}}if((i&7)===0){e:{if(O=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",O&&o!==nl&&($=o.relatedTarget||o.fromElement)&&(ur($)||$[un]))break e;if((W||O)&&(O=L.window===L?L:(O=L.ownerDocument)?O.defaultView||O.parentWindow:window,W?($=o.relatedTarget||o.toElement,W=N,$=$?ur($):null,$!==null&&(Me=cr($),$!==Me||$.tag!==5&&$.tag!==6)&&($=null)):(W=null,$=N),W!==$)){if(V=wh,F="onMouseLeave",E="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(V=kh,F="onPointerLeave",E="onPointerEnter",S="pointer"),Me=W==null?O:Qr(W),b=$==null?O:Qr($),O=new V(F,S+"leave",W,o,L),O.target=Me,O.relatedTarget=b,F=null,ur(L)===N&&(V=new V(E,S+"enter",$,o,L),V.target=b,V.relatedTarget=Me,F=V),Me=F,W&&$)t:{for(V=W,E=$,S=0,b=V;b;b=Kr(b))S++;for(b=0,F=E;F;F=Kr(F))b++;for(;0<S-b;)V=Kr(V),S--;for(;0<b-S;)E=Kr(E),b--;for(;S--;){if(V===E||E!==null&&V===E.alternate)break t;V=Kr(V),E=Kr(E)}V=null}else V=null;W!==null&&Qh(D,O,W,V,!1),$!==null&&Me!==null&&Qh(D,Me,$,V,!0)}}e:{if(O=N?Qr(N):window,W=O.nodeName&&O.nodeName.toLowerCase(),W==="select"||W==="input"&&O.type==="file")var G=w_;else if(Th(O))if(Ph)G=E_;else{G=k_;var Q=S_}else(W=O.nodeName)&&W.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(G=C_);if(G&&(G=G(t,N))){Rh(D,G,o,L);break e}Q&&Q(t,O,N),t==="focusout"&&(Q=O._wrapperState)&&Q.controlled&&O.type==="number"&&Ja(O,"number",O.value)}switch(Q=N?Qr(N):window,t){case"focusin":(Th(Q)||Q.contentEditable==="true")&&(Gr=Q,bl=N,Ji=null);break;case"focusout":Ji=bl=Gr=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,Uh(D,o,L);break;case"selectionchange":if(I_)break;case"keydown":case"keyup":Uh(D,o,L)}var J;if(Sl)e:{switch(t){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Vr?Nh(t,o)&&(ee="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(Ch&&o.locale!=="ko"&&(Vr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Vr&&(J=_h()):(jn=L,gl="value"in jn?jn.value:jn.textContent,Vr=!0)),Q=ho(N,ee),0<Q.length&&(ee=new Sh(ee,t,null,o,L),D.push({event:ee,listeners:Q}),J?ee.data=J:(J=Ih(o),J!==null&&(ee.data=J)))),(J=g_?y_(t,o):v_(t,o))&&(N=ho(N,"onBeforeInput"),0<N.length&&(L=new Sh("onBeforeInput","beforeinput",null,o,L),D.push({event:L,listeners:N}),L.data=J))}Kh(D,i)})}function es(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ho(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Li(t,o),h!=null&&l.unshift(es(t,h,u)),h=Li(t,i),h!=null&&l.push(es(t,h,u))),t=t.return}return l}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,i,o,l,u){for(var h=i._reactName,g=[];o!==null&&o!==l;){var _=o,w=_.alternate,N=_.stateNode;if(w!==null&&w===l)break;_.tag===5&&N!==null&&(_=N,u?(w=Li(o,h),w!=null&&g.unshift(es(o,w,_))):u||(w=Li(o,h),w!=null&&g.push(es(o,w,_)))),o=o.return}g.length!==0&&t.push({event:i,listeners:g})}var A_=/\r\n?/g,j_=/\u0000|\uFFFD/g;function Jh(t){return(typeof t=="string"?t:""+t).replace(A_,`
`).replace(j_,"")}function fo(t,i,o){if(i=Jh(i),Jh(t)!==i&&o)throw Error(n(425))}function po(){}var jl=null,Ol=null;function Ll(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,O_=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,L_=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(M_)}:Ml;function M_(t){setTimeout(function(){throw t})}function Dl(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),$i(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);$i(i)}function Ln(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Zh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Yr,ts="__reactProps$"+Yr,un="__reactContainer$"+Yr,Fl="__reactEvents$"+Yr,D_="__reactListeners$"+Yr,F_="__reactHandles$"+Yr;function ur(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[un]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Zh(t);t!==null;){if(o=t[Xt])return o;t=Zh(t)}return i}t=o,o=t.parentNode}return null}function ns(t){return t=t[Xt]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[ts]||null}var Ul=[],Jr=-1;function Mn(t){return{current:t}}function ke(t){0>Jr||(t.current=Ul[Jr],Ul[Jr]=null,Jr--)}function we(t,i){Jr++,Ul[Jr]=t.current,t.current=i}var Dn={},et=Mn(Dn),ft=Mn(!1),dr=Dn;function Xr(t,i){var o=t.type.contextTypes;if(!o)return Dn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function pt(t){return t=t.childContextTypes,t!=null}function go(){ke(ft),ke(et)}function ef(t,i,o){if(et.current!==Dn)throw Error(n(168));we(et,i),we(ft,o)}function tf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return I({},o,l)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,dr=et.current,we(et,t),we(ft,ft.current),!0}function nf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=tf(t,i,dr),l.__reactInternalMemoizedMergedChildContext=t,ke(ft),ke(et),we(et,t)):ke(ft),we(ft,o)}var dn=null,vo=!1,Bl=!1;function rf(t){dn===null?dn=[t]:dn.push(t)}function U_(t){vo=!0,rf(t)}function Fn(){if(!Bl&&dn!==null){Bl=!0;var t=0,i=ge;try{var o=dn;for(ge=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}dn=null,vo=!1}catch(u){throw dn!==null&&(dn=dn.slice(t+1)),sh(ll,Fn),u}finally{ge=i,Bl=!1}}return null}var Zr=[],ei=0,_o=null,xo=0,Tt=[],Rt=0,hr=null,hn=1,fn="";function fr(t,i){Zr[ei++]=xo,Zr[ei++]=_o,_o=t,xo=i}function sf(t,i,o){Tt[Rt++]=hn,Tt[Rt++]=fn,Tt[Rt++]=hr,hr=t;var l=hn;t=fn;var u=32-Ft(l)-1;l&=~(1<<u),o+=1;var h=32-Ft(i)+u;if(30<h){var g=u-u%5;h=(l&(1<<g)-1).toString(32),l>>=g,u-=g,hn=1<<32-Ft(i)+u|o<<u|l,fn=h+t}else hn=1<<h|o<<u|l,fn=t}function zl(t){t.return!==null&&(fr(t,1),sf(t,1,0))}function Wl(t){for(;t===_o;)_o=Zr[--ei],Zr[ei]=null,xo=Zr[--ei],Zr[ei]=null;for(;t===hr;)hr=Tt[--Rt],Tt[Rt]=null,fn=Tt[--Rt],Tt[Rt]=null,hn=Tt[--Rt],Tt[Rt]=null}var Et=null,bt=null,Ie=!1,Bt=null;function of(t,i){var o=Ot(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function af(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,bt=Ln(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,bt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=hr!==null?{id:hn,overflow:fn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ot(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,bt=null,!0):!1;default:return!1}}function Hl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $l(t){if(Ie){var i=bt;if(i){var o=i;if(!af(t,i)){if(Hl(t))throw Error(n(418));i=Ln(o.nextSibling);var l=Et;i&&af(t,i)?of(l,o):(t.flags=t.flags&-4097|2,Ie=!1,Et=t)}}else{if(Hl(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ie=!1,Et=t}}}function lf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function wo(t){if(t!==Et)return!1;if(!Ie)return lf(t),Ie=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ll(t.type,t.memoizedProps)),i&&(i=bt)){if(Hl(t))throw cf(),Error(n(418));for(;i;)of(t,i),i=Ln(i.nextSibling)}if(lf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){bt=Ln(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}bt=null}}else bt=Et?Ln(t.stateNode.nextSibling):null;return!0}function cf(){for(var t=bt;t;)t=Ln(t.nextSibling)}function ti(){bt=Et=null,Ie=!1}function Vl(t){Bt===null?Bt=[t]:Bt.push(t)}var B_=re.ReactCurrentBatchConfig;function rs(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(g){var _=u.refs;g===null?delete _[h]:_[h]=g},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function So(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function uf(t){var i=t._init;return i(t._payload)}function df(t){function i(E,S){if(t){var b=E.deletions;b===null?(E.deletions=[S],E.flags|=16):b.push(S)}}function o(E,S){if(!t)return null;for(;S!==null;)i(E,S),S=S.sibling;return null}function l(E,S){for(E=new Map;S!==null;)S.key!==null?E.set(S.key,S):E.set(S.index,S),S=S.sibling;return E}function u(E,S){return E=Gn(E,S),E.index=0,E.sibling=null,E}function h(E,S,b){return E.index=b,t?(b=E.alternate,b!==null?(b=b.index,b<S?(E.flags|=2,S):b):(E.flags|=2,S)):(E.flags|=1048576,S)}function g(E){return t&&E.alternate===null&&(E.flags|=2),E}function _(E,S,b,F){return S===null||S.tag!==6?(S=Mc(b,E.mode,F),S.return=E,S):(S=u(S,b),S.return=E,S)}function w(E,S,b,F){var G=b.type;return G===Ae?L(E,S,b.props.children,F,b.key):S!==null&&(S.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===je&&uf(G)===S.type)?(F=u(S,b.props),F.ref=rs(E,S,b),F.return=E,F):(F=Go(b.type,b.key,b.props,null,E.mode,F),F.ref=rs(E,S,b),F.return=E,F)}function N(E,S,b,F){return S===null||S.tag!==4||S.stateNode.containerInfo!==b.containerInfo||S.stateNode.implementation!==b.implementation?(S=Dc(b,E.mode,F),S.return=E,S):(S=u(S,b.children||[]),S.return=E,S)}function L(E,S,b,F,G){return S===null||S.tag!==7?(S=wr(b,E.mode,F,G),S.return=E,S):(S=u(S,b),S.return=E,S)}function D(E,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Mc(""+S,E.mode,b),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ne:return b=Go(S.type,S.key,S.props,null,E.mode,b),b.ref=rs(E,null,S),b.return=E,b;case Z:return S=Dc(S,E.mode,b),S.return=E,S;case je:var F=S._init;return D(E,F(S._payload),b)}if(Ai(S)||X(S))return S=wr(S,E.mode,b,null),S.return=E,S;So(E,S)}return null}function O(E,S,b,F){var G=S!==null?S.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return G!==null?null:_(E,S,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ne:return b.key===G?w(E,S,b,F):null;case Z:return b.key===G?N(E,S,b,F):null;case je:return G=b._init,O(E,S,G(b._payload),F)}if(Ai(b)||X(b))return G!==null?null:L(E,S,b,F,null);So(E,b)}return null}function W(E,S,b,F,G){if(typeof F=="string"&&F!==""||typeof F=="number")return E=E.get(b)||null,_(S,E,""+F,G);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ne:return E=E.get(F.key===null?b:F.key)||null,w(S,E,F,G);case Z:return E=E.get(F.key===null?b:F.key)||null,N(S,E,F,G);case je:var Q=F._init;return W(E,S,b,Q(F._payload),G)}if(Ai(F)||X(F))return E=E.get(b)||null,L(S,E,F,G,null);So(S,F)}return null}function $(E,S,b,F){for(var G=null,Q=null,J=S,ee=S=0,Ve=null;J!==null&&ee<b.length;ee++){J.index>ee?(Ve=J,J=null):Ve=J.sibling;var he=O(E,J,b[ee],F);if(he===null){J===null&&(J=Ve);break}t&&J&&he.alternate===null&&i(E,J),S=h(he,S,ee),Q===null?G=he:Q.sibling=he,Q=he,J=Ve}if(ee===b.length)return o(E,J),Ie&&fr(E,ee),G;if(J===null){for(;ee<b.length;ee++)J=D(E,b[ee],F),J!==null&&(S=h(J,S,ee),Q===null?G=J:Q.sibling=J,Q=J);return Ie&&fr(E,ee),G}for(J=l(E,J);ee<b.length;ee++)Ve=W(J,E,ee,b[ee],F),Ve!==null&&(t&&Ve.alternate!==null&&J.delete(Ve.key===null?ee:Ve.key),S=h(Ve,S,ee),Q===null?G=Ve:Q.sibling=Ve,Q=Ve);return t&&J.forEach(function(qn){return i(E,qn)}),Ie&&fr(E,ee),G}function V(E,S,b,F){var G=X(b);if(typeof G!="function")throw Error(n(150));if(b=G.call(b),b==null)throw Error(n(151));for(var Q=G=null,J=S,ee=S=0,Ve=null,he=b.next();J!==null&&!he.done;ee++,he=b.next()){J.index>ee?(Ve=J,J=null):Ve=J.sibling;var qn=O(E,J,he.value,F);if(qn===null){J===null&&(J=Ve);break}t&&J&&qn.alternate===null&&i(E,J),S=h(qn,S,ee),Q===null?G=qn:Q.sibling=qn,Q=qn,J=Ve}if(he.done)return o(E,J),Ie&&fr(E,ee),G;if(J===null){for(;!he.done;ee++,he=b.next())he=D(E,he.value,F),he!==null&&(S=h(he,S,ee),Q===null?G=he:Q.sibling=he,Q=he);return Ie&&fr(E,ee),G}for(J=l(E,J);!he.done;ee++,he=b.next())he=W(J,E,ee,he.value,F),he!==null&&(t&&he.alternate!==null&&J.delete(he.key===null?ee:he.key),S=h(he,S,ee),Q===null?G=he:Q.sibling=he,Q=he);return t&&J.forEach(function(_x){return i(E,_x)}),Ie&&fr(E,ee),G}function Me(E,S,b,F){if(typeof b=="object"&&b!==null&&b.type===Ae&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ne:e:{for(var G=b.key,Q=S;Q!==null;){if(Q.key===G){if(G=b.type,G===Ae){if(Q.tag===7){o(E,Q.sibling),S=u(Q,b.props.children),S.return=E,E=S;break e}}else if(Q.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===je&&uf(G)===Q.type){o(E,Q.sibling),S=u(Q,b.props),S.ref=rs(E,Q,b),S.return=E,E=S;break e}o(E,Q);break}else i(E,Q);Q=Q.sibling}b.type===Ae?(S=wr(b.props.children,E.mode,F,b.key),S.return=E,E=S):(F=Go(b.type,b.key,b.props,null,E.mode,F),F.ref=rs(E,S,b),F.return=E,E=F)}return g(E);case Z:e:{for(Q=b.key;S!==null;){if(S.key===Q)if(S.tag===4&&S.stateNode.containerInfo===b.containerInfo&&S.stateNode.implementation===b.implementation){o(E,S.sibling),S=u(S,b.children||[]),S.return=E,E=S;break e}else{o(E,S);break}else i(E,S);S=S.sibling}S=Dc(b,E.mode,F),S.return=E,E=S}return g(E);case je:return Q=b._init,Me(E,S,Q(b._payload),F)}if(Ai(b))return $(E,S,b,F);if(X(b))return V(E,S,b,F);So(E,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,S!==null&&S.tag===6?(o(E,S.sibling),S=u(S,b),S.return=E,E=S):(o(E,S),S=Mc(b,E.mode,F),S.return=E,E=S),g(E)):o(E,S)}return Me}var ni=df(!0),hf=df(!1),ko=Mn(null),Co=null,ri=null,Gl=null;function ql(){Gl=ri=Co=null}function Kl(t){var i=ko.current;ke(ko),t._currentValue=i}function Yl(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ii(t,i){Co=t,Gl=ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(mt=!0),t.firstContext=null)}function Pt(t){var i=t._currentValue;if(Gl!==t)if(t={context:t,memoizedValue:i,next:null},ri===null){if(Co===null)throw Error(n(308));ri=t,Co.dependencies={lanes:0,firstContext:t}}else ri=ri.next=t;return i}var pr=null;function Ql(t){pr===null?pr=[t]:pr.push(t)}function ff(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,Ql(i)):(o.next=u.next,u.next=o),i.interleaved=o,pn(t,l)}function pn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Un=!1;function Jl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Bn(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ce&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,pn(t,o)}return u=l.interleaved,u===null?(i.next=i,Ql(l)):(i.next=u.next,u.next=i),l.interleaved=i,pn(t,o)}function Eo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,dl(t,o)}}function mf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function bo(t,i,o,l){var u=t.updateQueue;Un=!1;var h=u.firstBaseUpdate,g=u.lastBaseUpdate,_=u.shared.pending;if(_!==null){u.shared.pending=null;var w=_,N=w.next;w.next=null,g===null?h=N:g.next=N,g=w;var L=t.alternate;L!==null&&(L=L.updateQueue,_=L.lastBaseUpdate,_!==g&&(_===null?L.firstBaseUpdate=N:_.next=N,L.lastBaseUpdate=w))}if(h!==null){var D=u.baseState;g=0,L=N=w=null,_=h;do{var O=_.lane,W=_.eventTime;if((l&O)===O){L!==null&&(L=L.next={eventTime:W,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var $=t,V=_;switch(O=i,W=o,V.tag){case 1:if($=V.payload,typeof $=="function"){D=$.call(W,D,O);break e}D=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=V.payload,O=typeof $=="function"?$.call(W,D,O):$,O==null)break e;D=I({},D,O);break e;case 2:Un=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,O=u.effects,O===null?u.effects=[_]:O.push(_))}else W={eventTime:W,lane:O,tag:_.tag,payload:_.payload,callback:_.callback,next:null},L===null?(N=L=W,w=D):L=L.next=W,g|=O;if(_=_.next,_===null){if(_=u.shared.pending,_===null)break;O=_,_=O.next,O.next=null,u.lastBaseUpdate=O,u.shared.pending=null}}while(!0);if(L===null&&(w=D),u.baseState=w,u.firstBaseUpdate=N,u.lastBaseUpdate=L,i=u.shared.interleaved,i!==null){u=i;do g|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);yr|=g,t.lanes=g,t.memoizedState=D}}function gf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var is={},Zt=Mn(is),ss=Mn(is),os=Mn(is);function mr(t){if(t===is)throw Error(n(174));return t}function Xl(t,i){switch(we(os,i),we(ss,t),we(Zt,is),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Za(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Za(i,t)}ke(Zt),we(Zt,i)}function si(){ke(Zt),ke(ss),ke(os)}function yf(t){mr(os.current);var i=mr(Zt.current),o=Za(i,t.type);i!==o&&(we(ss,t),we(Zt,o))}function Zl(t){ss.current===t&&(ke(Zt),ke(ss))}var Te=Mn(0);function No(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ec=[];function tc(){for(var t=0;t<ec.length;t++)ec[t]._workInProgressVersionPrimary=null;ec.length=0}var Io=re.ReactCurrentDispatcher,nc=re.ReactCurrentBatchConfig,gr=0,Re=null,Ue=null,He=null,To=!1,as=!1,ls=0,z_=0;function tt(){throw Error(n(321))}function rc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ut(t[o],i[o]))return!1;return!0}function ic(t,i,o,l,u,h){if(gr=h,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Io.current=t===null||t.memoizedState===null?V_:G_,t=o(l,u),as){h=0;do{if(as=!1,ls=0,25<=h)throw Error(n(301));h+=1,He=Ue=null,i.updateQueue=null,Io.current=q_,t=o(l,u)}while(as)}if(Io.current=Ao,i=Ue!==null&&Ue.next!==null,gr=0,He=Ue=Re=null,To=!1,i)throw Error(n(300));return t}function sc(){var t=ls!==0;return ls=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Re.memoizedState=He=t:He=He.next=t,He}function At(){if(Ue===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var i=He===null?Re.memoizedState:He.next;if(i!==null)He=i,Ue=t;else{if(t===null)throw Error(n(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Re.memoizedState=He=t:He=He.next=t}return He}function cs(t,i){return typeof i=="function"?i(t):i}function oc(t){var i=At(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Ue,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var g=u.next;u.next=h.next,h.next=g}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var _=g=null,w=null,N=h;do{var L=N.lane;if((gr&L)===L)w!==null&&(w=w.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),l=N.hasEagerState?N.eagerState:t(l,N.action);else{var D={lane:L,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};w===null?(_=w=D,g=l):w=w.next=D,Re.lanes|=L,yr|=L}N=N.next}while(N!==null&&N!==h);w===null?g=l:w.next=_,Ut(l,i.memoizedState)||(mt=!0),i.memoizedState=l,i.baseState=g,i.baseQueue=w,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Re.lanes|=h,yr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ac(t){var i=At(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do h=t(h,g.action),g=g.next;while(g!==u);Ut(h,i.memoizedState)||(mt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function vf(){}function _f(t,i){var o=Re,l=At(),u=i(),h=!Ut(l.memoizedState,u);if(h&&(l.memoizedState=u,mt=!0),l=l.queue,lc(Sf.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||He!==null&&He.memoizedState.tag&1){if(o.flags|=2048,us(9,wf.bind(null,o,l,u,i),void 0,null),$e===null)throw Error(n(349));(gr&30)!==0||xf(o,i,u)}return u}function xf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Re.updateQueue,i===null?(i={lastEffect:null,stores:null},Re.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function wf(t,i,o,l){i.value=o,i.getSnapshot=l,kf(i)&&Cf(t)}function Sf(t,i,o){return o(function(){kf(i)&&Cf(t)})}function kf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ut(t,o)}catch{return!0}}function Cf(t){var i=pn(t,1);i!==null&&$t(i,t,1,-1)}function Ef(t){var i=en();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},i.queue=t,t=t.dispatch=$_.bind(null,Re,t),[i.memoizedState,t]}function us(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Re.updateQueue,i===null?(i={lastEffect:null,stores:null},Re.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function bf(){return At().memoizedState}function Ro(t,i,o,l){var u=en();Re.flags|=t,u.memoizedState=us(1|i,o,void 0,l===void 0?null:l)}function Po(t,i,o,l){var u=At();l=l===void 0?null:l;var h=void 0;if(Ue!==null){var g=Ue.memoizedState;if(h=g.destroy,l!==null&&rc(l,g.deps)){u.memoizedState=us(i,o,h,l);return}}Re.flags|=t,u.memoizedState=us(1|i,o,h,l)}function Nf(t,i){return Ro(8390656,8,t,i)}function lc(t,i){return Po(2048,8,t,i)}function If(t,i){return Po(4,2,t,i)}function Tf(t,i){return Po(4,4,t,i)}function Rf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Pf(t,i,o){return o=o!=null?o.concat([t]):null,Po(4,4,Rf.bind(null,i,t),o)}function cc(){}function Af(t,i){var o=At();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&rc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function jf(t,i){var o=At();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&rc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Of(t,i,o){return(gr&21)===0?(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=o):(Ut(o,i)||(o=ch(),Re.lanes|=o,yr|=o,t.baseState=!0),i)}function W_(t,i){var o=ge;ge=o!==0&&4>o?o:4,t(!0);var l=nc.transition;nc.transition={};try{t(!1),i()}finally{ge=o,nc.transition=l}}function Lf(){return At().memoizedState}function H_(t,i,o){var l=$n(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Mf(t))Df(i,o);else if(o=ff(t,i,o,l),o!==null){var u=lt();$t(o,t,l,u),Ff(o,i,l)}}function $_(t,i,o){var l=$n(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Mf(t))Df(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var g=i.lastRenderedState,_=h(g,o);if(u.hasEagerState=!0,u.eagerState=_,Ut(_,g)){var w=i.interleaved;w===null?(u.next=u,Ql(i)):(u.next=w.next,w.next=u),i.interleaved=u;return}}catch{}finally{}o=ff(t,i,u,l),o!==null&&(u=lt(),$t(o,t,l,u),Ff(o,i,l))}}function Mf(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function Df(t,i){as=To=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Ff(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,dl(t,o)}}var Ao={readContext:Pt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},V_={readContext:Pt,useCallback:function(t,i){return en().memoizedState=[t,i===void 0?null:i],t},useContext:Pt,useEffect:Nf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ro(4194308,4,Rf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ro(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ro(4,2,t,i)},useMemo:function(t,i){var o=en();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=en();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=H_.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=en();return t={current:t},i.memoizedState=t},useState:Ef,useDebugValue:cc,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Ef(!1),i=t[0];return t=W_.bind(null,t[1]),en().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Re,u=en();if(Ie){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),$e===null)throw Error(n(349));(gr&30)!==0||xf(l,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,Nf(Sf.bind(null,l,h,t),[t]),l.flags|=2048,us(9,wf.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=en(),i=$e.identifierPrefix;if(Ie){var o=fn,l=hn;o=(l&~(1<<32-Ft(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=ls++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=z_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},G_={readContext:Pt,useCallback:Af,useContext:Pt,useEffect:lc,useImperativeHandle:Pf,useInsertionEffect:If,useLayoutEffect:Tf,useMemo:jf,useReducer:oc,useRef:bf,useState:function(){return oc(cs)},useDebugValue:cc,useDeferredValue:function(t){var i=At();return Of(i,Ue.memoizedState,t)},useTransition:function(){var t=oc(cs)[0],i=At().memoizedState;return[t,i]},useMutableSource:vf,useSyncExternalStore:_f,useId:Lf,unstable_isNewReconciler:!1},q_={readContext:Pt,useCallback:Af,useContext:Pt,useEffect:lc,useImperativeHandle:Pf,useInsertionEffect:If,useLayoutEffect:Tf,useMemo:jf,useReducer:ac,useRef:bf,useState:function(){return ac(cs)},useDebugValue:cc,useDeferredValue:function(t){var i=At();return Ue===null?i.memoizedState=t:Of(i,Ue.memoizedState,t)},useTransition:function(){var t=ac(cs)[0],i=At().memoizedState;return[t,i]},useMutableSource:vf,useSyncExternalStore:_f,useId:Lf,unstable_isNewReconciler:!1};function zt(t,i){if(t&&t.defaultProps){i=I({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function uc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:I({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var jo={isMounted:function(t){return(t=t._reactInternals)?cr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=lt(),u=$n(t),h=mn(l,u);h.payload=i,o!=null&&(h.callback=o),i=Bn(t,h,u),i!==null&&($t(i,t,u,l),Eo(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=lt(),u=$n(t),h=mn(l,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Bn(t,h,u),i!==null&&($t(i,t,u,l),Eo(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=lt(),l=$n(t),u=mn(o,l);u.tag=2,i!=null&&(u.callback=i),i=Bn(t,u,l),i!==null&&($t(i,t,l,o),Eo(i,t,l))}};function Uf(t,i,o,l,u,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,g):i.prototype&&i.prototype.isPureReactComponent?!Qi(o,l)||!Qi(u,h):!0}function Bf(t,i,o){var l=!1,u=Dn,h=i.contextType;return typeof h=="object"&&h!==null?h=Pt(h):(u=pt(i)?dr:et.current,l=i.contextTypes,h=(l=l!=null)?Xr(t,u):Dn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function zf(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&jo.enqueueReplaceState(i,i.state,null)}function dc(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Jl(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Pt(h):(h=pt(i)?dr:et.current,u.context=Xr(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(uc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&jo.enqueueReplaceState(u,u.state,null),bo(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function oi(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function hc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function fc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var K_=typeof WeakMap=="function"?WeakMap:Map;function Wf(t,i,o){o=mn(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Bo||(Bo=!0,Ic=l),fc(t,i)},o}function Hf(t,i,o){o=mn(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){fc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){fc(t,i),typeof l!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),o}function $f(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new K_;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=lx.bind(null,t,i,o),i.then(t,t))}function Vf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gf(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=mn(-1,1),i.tag=2,Bn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Y_=re.ReactCurrentOwner,mt=!1;function at(t,i,o,l){i.child=t===null?hf(i,null,o,l):ni(i,t.child,o,l)}function qf(t,i,o,l,u){o=o.render;var h=i.ref;return ii(i,u),l=ic(t,i,o,l,h,u),o=sc(),t!==null&&!mt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,gn(t,i,u)):(Ie&&o&&zl(i),i.flags|=1,at(t,i,l,u),i.child)}function Kf(t,i,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!Lc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Yf(t,i,h,l,u)):(t=Go(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:Qi,o(g,l)&&t.ref===i.ref)return gn(t,i,u)}return i.flags|=1,t=Gn(h,l),t.ref=i.ref,t.return=i,i.child=t}function Yf(t,i,o,l,u){if(t!==null){var h=t.memoizedProps;if(Qi(h,l)&&t.ref===i.ref)if(mt=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(mt=!0);else return i.lanes=t.lanes,gn(t,i,u)}return pc(t,i,o,l,u)}function Qf(t,i,o){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(li,Nt),Nt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,we(li,Nt),Nt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,we(li,Nt),Nt|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,we(li,Nt),Nt|=l;return at(t,i,u,o),i.child}function Jf(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function pc(t,i,o,l,u){var h=pt(o)?dr:et.current;return h=Xr(i,h),ii(i,u),o=ic(t,i,o,l,h,u),l=sc(),t!==null&&!mt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,gn(t,i,u)):(Ie&&l&&zl(i),i.flags|=1,at(t,i,o,u),i.child)}function Xf(t,i,o,l,u){if(pt(o)){var h=!0;yo(i)}else h=!1;if(ii(i,u),i.stateNode===null)Lo(t,i),Bf(i,o,l),dc(i,o,l,u),l=!0;else if(t===null){var g=i.stateNode,_=i.memoizedProps;g.props=_;var w=g.context,N=o.contextType;typeof N=="object"&&N!==null?N=Pt(N):(N=pt(o)?dr:et.current,N=Xr(i,N));var L=o.getDerivedStateFromProps,D=typeof L=="function"||typeof g.getSnapshotBeforeUpdate=="function";D||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(_!==l||w!==N)&&zf(i,g,l,N),Un=!1;var O=i.memoizedState;g.state=O,bo(i,l,g,u),w=i.memoizedState,_!==l||O!==w||ft.current||Un?(typeof L=="function"&&(uc(i,o,L,l),w=i.memoizedState),(_=Un||Uf(i,o,_,l,O,w,N))?(D||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=w),g.props=l,g.state=w,g.context=N,l=_):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{g=i.stateNode,pf(t,i),_=i.memoizedProps,N=i.type===i.elementType?_:zt(i.type,_),g.props=N,D=i.pendingProps,O=g.context,w=o.contextType,typeof w=="object"&&w!==null?w=Pt(w):(w=pt(o)?dr:et.current,w=Xr(i,w));var W=o.getDerivedStateFromProps;(L=typeof W=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(_!==D||O!==w)&&zf(i,g,l,w),Un=!1,O=i.memoizedState,g.state=O,bo(i,l,g,u);var $=i.memoizedState;_!==D||O!==$||ft.current||Un?(typeof W=="function"&&(uc(i,o,W,l),$=i.memoizedState),(N=Un||Uf(i,o,N,l,O,$,w)||!1)?(L||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,$,w),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,$,w)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||_===t.memoizedProps&&O===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&O===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=$),g.props=l,g.state=$,g.context=w,l=N):(typeof g.componentDidUpdate!="function"||_===t.memoizedProps&&O===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&O===t.memoizedState||(i.flags|=1024),l=!1)}return mc(t,i,o,l,h,u)}function mc(t,i,o,l,u,h){Jf(t,i);var g=(i.flags&128)!==0;if(!l&&!g)return u&&nf(i,o,!1),gn(t,i,h);l=i.stateNode,Y_.current=i;var _=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&g?(i.child=ni(i,t.child,null,h),i.child=ni(i,null,_,h)):at(t,i,_,h),i.memoizedState=l.state,u&&nf(i,o,!0),i.child}function Zf(t){var i=t.stateNode;i.pendingContext?ef(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ef(t,i.context,!1),Xl(t,i.containerInfo)}function ep(t,i,o,l,u){return ti(),Vl(u),i.flags|=256,at(t,i,o,l),i.child}var gc={dehydrated:null,treeContext:null,retryLane:0};function yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function tp(t,i,o){var l=i.pendingProps,u=Te.current,h=!1,g=(i.flags&128)!==0,_;if((_=g)||(_=t!==null&&t.memoizedState===null?!1:(u&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),we(Te,u&1),t===null)return $l(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=l.children,t=l.fallback,h?(l=i.mode,h=i.child,g={mode:"hidden",children:g},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=qo(g,l,0,null),t=wr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=yc(o),i.memoizedState=gc,t):vc(i,g));if(u=t.memoizedState,u!==null&&(_=u.dehydrated,_!==null))return Q_(t,i,g,l,_,u,o);if(h){h=l.fallback,g=i.mode,u=t.child,_=u.sibling;var w={mode:"hidden",children:l.children};return(g&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=w,i.deletions=null):(l=Gn(u,w),l.subtreeFlags=u.subtreeFlags&14680064),_!==null?h=Gn(_,h):(h=wr(h,g,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,g=t.child.memoizedState,g=g===null?yc(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=t.childLanes&~o,i.memoizedState=gc,l}return h=t.child,t=h.sibling,l=Gn(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function vc(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oo(t,i,o,l){return l!==null&&Vl(l),ni(i,t.child,null,o),t=vc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Q_(t,i,o,l,u,h,g){if(o)return i.flags&256?(i.flags&=-257,l=hc(Error(n(422))),Oo(t,i,g,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=qo({mode:"visible",children:l.children},u,0,null),h=wr(h,u,g,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ni(i,t.child,null,g),i.child.memoizedState=yc(g),i.memoizedState=gc,h);if((i.mode&1)===0)return Oo(t,i,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var _=l.dgst;return l=_,h=Error(n(419)),l=hc(h,l,void 0),Oo(t,i,g,l)}if(_=(g&t.childLanes)!==0,mt||_){if(l=$e,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|g))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,pn(t,u),$t(l,t,u,-1))}return Oc(),l=hc(Error(n(421))),Oo(t,i,g,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=cx.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,bt=Ln(u.nextSibling),Et=i,Ie=!0,Bt=null,t!==null&&(Tt[Rt++]=hn,Tt[Rt++]=fn,Tt[Rt++]=hr,hn=t.id,fn=t.overflow,hr=i),i=vc(i,l.children),i.flags|=4096,i)}function np(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Yl(t.return,i,o)}function _c(t,i,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function rp(t,i,o){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(at(t,i,l.children,o),l=Te.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&np(t,o,i);else if(t.tag===19)np(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(we(Te,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),_c(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&No(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}_c(i,!0,o,null,h);break;case"together":_c(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function gn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),yr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Gn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Gn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function J_(t,i,o){switch(i.tag){case 3:Zf(i),ti();break;case 5:yf(i);break;case 1:pt(i.type)&&yo(i);break;case 4:Xl(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;we(ko,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(we(Te,Te.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?tp(t,i,o):(we(Te,Te.current&1),t=gn(t,i,o),t!==null?t.sibling:null);we(Te,Te.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return rp(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),we(Te,Te.current),l)break;return null;case 22:case 23:return i.lanes=0,Qf(t,i,o)}return gn(t,i,o)}var ip,xc,sp,op;ip=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},xc=function(){},sp=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,mr(Zt.current);var h=null;switch(o){case"input":u=Ya(t,u),l=Ya(t,l),h=[];break;case"select":u=I({},u,{value:void 0}),l=I({},l,{value:void 0}),h=[];break;case"textarea":u=Xa(t,u),l=Xa(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=po)}el(o,l);var g;o=null;for(N in u)if(!l.hasOwnProperty(N)&&u.hasOwnProperty(N)&&u[N]!=null)if(N==="style"){var _=u[N];for(g in _)_.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(a.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in l){var w=l[N];if(_=u!=null?u[N]:void 0,l.hasOwnProperty(N)&&w!==_&&(w!=null||_!=null))if(N==="style")if(_){for(g in _)!_.hasOwnProperty(g)||w&&w.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in w)w.hasOwnProperty(g)&&_[g]!==w[g]&&(o||(o={}),o[g]=w[g])}else o||(h||(h=[]),h.push(N,o)),o=w;else N==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,_=_?_.__html:void 0,w!=null&&_!==w&&(h=h||[]).push(N,w)):N==="children"?typeof w!="string"&&typeof w!="number"||(h=h||[]).push(N,""+w):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(a.hasOwnProperty(N)?(w!=null&&N==="onScroll"&&Se("scroll",t),h||_===w||(h=[])):(h=h||[]).push(N,w))}o&&(h=h||[]).push("style",o);var N=h;(i.updateQueue=N)&&(i.flags|=4)}},op=function(t,i,o,l){o!==l&&(i.flags|=4)};function ds(t,i){if(!Ie)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function X_(t,i,o){var l=i.pendingProps;switch(Wl(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return pt(i.type)&&go(),nt(i),null;case 3:return l=i.stateNode,si(),ke(ft),ke(et),tc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(wo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bt!==null&&(Pc(Bt),Bt=null))),xc(t,i),nt(i),null;case 5:Zl(i);var u=mr(os.current);if(o=i.type,t!==null&&i.stateNode!=null)sp(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return nt(i),null}if(t=mr(Zt.current),wo(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[Xt]=i,l[ts]=h,t=(i.mode&1)!==0,o){case"dialog":Se("cancel",l),Se("close",l);break;case"iframe":case"object":case"embed":Se("load",l);break;case"video":case"audio":for(u=0;u<Xi.length;u++)Se(Xi[u],l);break;case"source":Se("error",l);break;case"img":case"image":case"link":Se("error",l),Se("load",l);break;case"details":Se("toggle",l);break;case"input":Ud(l,h),Se("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Se("invalid",l);break;case"textarea":Wd(l,h),Se("invalid",l)}el(o,h),u=null;for(var g in h)if(h.hasOwnProperty(g)){var _=h[g];g==="children"?typeof _=="string"?l.textContent!==_&&(h.suppressHydrationWarning!==!0&&fo(l.textContent,_,t),u=["children",_]):typeof _=="number"&&l.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&fo(l.textContent,_,t),u=["children",""+_]):a.hasOwnProperty(g)&&_!=null&&g==="onScroll"&&Se("scroll",l)}switch(o){case"input":Hs(l),zd(l,h,!0);break;case"textarea":Hs(l),$d(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=po)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=g.createElement(o,{is:l.is}):(t=g.createElement(o),o==="select"&&(g=t,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):t=g.createElementNS(t,o),t[Xt]=i,t[ts]=l,ip(t,i,!1,!1),i.stateNode=t;e:{switch(g=tl(o,l),o){case"dialog":Se("cancel",t),Se("close",t),u=l;break;case"iframe":case"object":case"embed":Se("load",t),u=l;break;case"video":case"audio":for(u=0;u<Xi.length;u++)Se(Xi[u],t);u=l;break;case"source":Se("error",t),u=l;break;case"img":case"image":case"link":Se("error",t),Se("load",t),u=l;break;case"details":Se("toggle",t),u=l;break;case"input":Ud(t,l),u=Ya(t,l),Se("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=I({},l,{value:void 0}),Se("invalid",t);break;case"textarea":Wd(t,l),u=Xa(t,l),Se("invalid",t);break;default:u=l}el(o,u),_=u;for(h in _)if(_.hasOwnProperty(h)){var w=_[h];h==="style"?Kd(t,w):h==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Gd(t,w)):h==="children"?typeof w=="string"?(o!=="textarea"||w!=="")&&ji(t,w):typeof w=="number"&&ji(t,""+w):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?w!=null&&h==="onScroll"&&Se("scroll",t):w!=null&&K(t,h,w,g))}switch(o){case"input":Hs(t),zd(t,l,!1);break;case"textarea":Hs(t),$d(t);break;case"option":l.value!=null&&t.setAttribute("value",""+me(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Br(t,!!l.multiple,h,!1):l.defaultValue!=null&&Br(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=po)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nt(i),null;case 6:if(t&&i.stateNode!=null)op(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=mr(os.current),mr(Zt.current),wo(i)){if(l=i.stateNode,o=i.memoizedProps,l[Xt]=i,(h=l.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:fo(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Xt]=i,i.stateNode=l}return nt(i),null;case 13:if(ke(Te),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&bt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)cf(),ti(),i.flags|=98560,h=!1;else if(h=wo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else ti(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else Bt!==null&&(Pc(Bt),Bt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Te.current&1)!==0?Be===0&&(Be=3):Oc())),i.updateQueue!==null&&(i.flags|=4),nt(i),null);case 4:return si(),xc(t,i),t===null&&Zi(i.stateNode.containerInfo),nt(i),null;case 10:return Kl(i.type._context),nt(i),null;case 17:return pt(i.type)&&go(),nt(i),null;case 19:if(ke(Te),h=i.memoizedState,h===null)return nt(i),null;if(l=(i.flags&128)!==0,g=h.rendering,g===null)if(l)ds(h,!1);else{if(Be!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(g=No(t),g!==null){for(i.flags|=128,ds(h,!1),l=g.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,t=g.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return we(Te,Te.current&1|2),i.child}t=t.sibling}h.tail!==null&&Le()>ci&&(i.flags|=128,l=!0,ds(h,!1),i.lanes=4194304)}else{if(!l)if(t=No(g),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ds(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ie)return nt(i),null}else 2*Le()-h.renderingStartTime>ci&&o!==1073741824&&(i.flags|=128,l=!0,ds(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(o=h.last,o!==null?o.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Le(),i.sibling=null,o=Te.current,we(Te,l?o&1|2:o&1),i):(nt(i),null);case 22:case 23:return jc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Nt&1073741824)!==0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Z_(t,i){switch(Wl(i),i.tag){case 1:return pt(i.type)&&go(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return si(),ke(ft),ke(et),tc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Zl(i),null;case 13:if(ke(Te),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ti()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ke(Te),null;case 4:return si(),null;case 10:return Kl(i.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var Mo=!1,rt=!1,ex=typeof WeakSet=="function"?WeakSet:Set,H=null;function ai(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Oe(t,i,l)}else o.current=null}function wc(t,i,o){try{o()}catch(l){Oe(t,i,l)}}var ap=!1;function tx(t,i){if(jl=to,t=Fh(),El(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,_=-1,w=-1,N=0,L=0,D=t,O=null;t:for(;;){for(var W;D!==o||u!==0&&D.nodeType!==3||(_=g+u),D!==h||l!==0&&D.nodeType!==3||(w=g+l),D.nodeType===3&&(g+=D.nodeValue.length),(W=D.firstChild)!==null;)O=D,D=W;for(;;){if(D===t)break t;if(O===o&&++N===u&&(_=g),O===h&&++L===l&&(w=g),(W=D.nextSibling)!==null)break;D=O,O=D.parentNode}D=W}o=_===-1||w===-1?null:{start:_,end:w}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ol={focusedElem:t,selectionRange:o},to=!1,H=i;H!==null;)if(i=H,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,H=t;else for(;H!==null;){i=H;try{var $=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($!==null){var V=$.memoizedProps,Me=$.memoizedState,E=i.stateNode,S=E.getSnapshotBeforeUpdate(i.elementType===i.type?V:zt(i.type,V),Me);E.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){Oe(i,i.return,F)}if(t=i.sibling,t!==null){t.return=i.return,H=t;break}H=i.return}return $=ap,ap=!1,$}function hs(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&wc(i,o,h)}u=u.next}while(u!==l)}}function Do(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Sc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function lp(t){var i=t.alternate;i!==null&&(t.alternate=null,lp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[ts],delete i[Fl],delete i[D_],delete i[F_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cp(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=po));else if(l!==4&&(t=t.child,t!==null))for(kc(t,i,o),t=t.sibling;t!==null;)kc(t,i,o),t=t.sibling}function Cc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Cc(t,i,o),t=t.sibling;t!==null;)Cc(t,i,o),t=t.sibling}var Qe=null,Wt=!1;function zn(t,i,o){for(o=o.child;o!==null;)dp(t,i,o),o=o.sibling}function dp(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ys,o)}catch{}switch(o.tag){case 5:rt||ai(o,i);case 6:var l=Qe,u=Wt;Qe=null,zn(t,i,o),Qe=l,Wt=u,Qe!==null&&(Wt?(t=Qe,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Qe.removeChild(o.stateNode));break;case 18:Qe!==null&&(Wt?(t=Qe,o=o.stateNode,t.nodeType===8?Dl(t.parentNode,o):t.nodeType===1&&Dl(t,o),$i(t)):Dl(Qe,o.stateNode));break;case 4:l=Qe,u=Wt,Qe=o.stateNode.containerInfo,Wt=!0,zn(t,i,o),Qe=l,Wt=u;break;case 0:case 11:case 14:case 15:if(!rt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&wc(o,i,g),u=u.next}while(u!==l)}zn(t,i,o);break;case 1:if(!rt&&(ai(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(_){Oe(o,i,_)}zn(t,i,o);break;case 21:zn(t,i,o);break;case 22:o.mode&1?(rt=(l=rt)||o.memoizedState!==null,zn(t,i,o),rt=l):zn(t,i,o);break;default:zn(t,i,o)}}function hp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ex),i.forEach(function(l){var u=ux.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function Ht(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,g=i,_=g;e:for(;_!==null;){switch(_.tag){case 5:Qe=_.stateNode,Wt=!1;break e;case 3:Qe=_.stateNode.containerInfo,Wt=!0;break e;case 4:Qe=_.stateNode.containerInfo,Wt=!0;break e}_=_.return}if(Qe===null)throw Error(n(160));dp(h,g,u),Qe=null,Wt=!1;var w=u.alternate;w!==null&&(w.return=null),u.return=null}catch(N){Oe(u,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)fp(i,t),i=i.sibling}function fp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(i,t),tn(t),l&4){try{hs(3,t,t.return),Do(3,t)}catch(V){Oe(t,t.return,V)}try{hs(5,t,t.return)}catch(V){Oe(t,t.return,V)}}break;case 1:Ht(i,t),tn(t),l&512&&o!==null&&ai(o,o.return);break;case 5:if(Ht(i,t),tn(t),l&512&&o!==null&&ai(o,o.return),t.flags&32){var u=t.stateNode;try{ji(u,"")}catch(V){Oe(t,t.return,V)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,g=o!==null?o.memoizedProps:h,_=t.type,w=t.updateQueue;if(t.updateQueue=null,w!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Bd(u,h),tl(_,g);var N=tl(_,h);for(g=0;g<w.length;g+=2){var L=w[g],D=w[g+1];L==="style"?Kd(u,D):L==="dangerouslySetInnerHTML"?Gd(u,D):L==="children"?ji(u,D):K(u,L,D,N)}switch(_){case"input":Qa(u,h);break;case"textarea":Hd(u,h);break;case"select":var O=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var W=h.value;W!=null?Br(u,!!h.multiple,W,!1):O!==!!h.multiple&&(h.defaultValue!=null?Br(u,!!h.multiple,h.defaultValue,!0):Br(u,!!h.multiple,h.multiple?[]:"",!1))}u[ts]=h}catch(V){Oe(t,t.return,V)}}break;case 6:if(Ht(i,t),tn(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(V){Oe(t,t.return,V)}}break;case 3:if(Ht(i,t),tn(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{$i(i.containerInfo)}catch(V){Oe(t,t.return,V)}break;case 4:Ht(i,t),tn(t);break;case 13:Ht(i,t),tn(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Nc=Le())),l&4&&hp(t);break;case 22:if(L=o!==null&&o.memoizedState!==null,t.mode&1?(rt=(N=rt)||L,Ht(i,t),rt=N):Ht(i,t),tn(t),l&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!L&&(t.mode&1)!==0)for(H=t,L=t.child;L!==null;){for(D=H=L;H!==null;){switch(O=H,W=O.child,O.tag){case 0:case 11:case 14:case 15:hs(4,O,O.return);break;case 1:ai(O,O.return);var $=O.stateNode;if(typeof $.componentWillUnmount=="function"){l=O,o=O.return;try{i=l,$.props=i.memoizedProps,$.state=i.memoizedState,$.componentWillUnmount()}catch(V){Oe(l,o,V)}}break;case 5:ai(O,O.return);break;case 22:if(O.memoizedState!==null){gp(D);continue}}W!==null?(W.return=O,H=W):gp(D)}L=L.sibling}e:for(L=null,D=t;;){if(D.tag===5){if(L===null){L=D;try{u=D.stateNode,N?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=D.stateNode,w=D.memoizedProps.style,g=w!=null&&w.hasOwnProperty("display")?w.display:null,_.style.display=qd("display",g))}catch(V){Oe(t,t.return,V)}}}else if(D.tag===6){if(L===null)try{D.stateNode.nodeValue=N?"":D.memoizedProps}catch(V){Oe(t,t.return,V)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;L===D&&(L=null),D=D.return}L===D&&(L=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Ht(i,t),tn(t),l&4&&hp(t);break;case 21:break;default:Ht(i,t),tn(t)}}function tn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(cp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ji(u,""),l.flags&=-33);var h=up(t);Cc(t,h,u);break;case 3:case 4:var g=l.stateNode.containerInfo,_=up(t);kc(t,_,g);break;default:throw Error(n(161))}}catch(w){Oe(t,t.return,w)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function nx(t,i,o){H=t,pp(t)}function pp(t,i,o){for(var l=(t.mode&1)!==0;H!==null;){var u=H,h=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||Mo;if(!g){var _=u.alternate,w=_!==null&&_.memoizedState!==null||rt;_=Mo;var N=rt;if(Mo=g,(rt=w)&&!N)for(H=u;H!==null;)g=H,w=g.child,g.tag===22&&g.memoizedState!==null?yp(u):w!==null?(w.return=g,H=w):yp(u);for(;h!==null;)H=h,pp(h),h=h.sibling;H=u,Mo=_,rt=N}mp(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,H=h):mp(t)}}function mp(t){for(;H!==null;){var i=H;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:rt||Do(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!rt)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:zt(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&gf(i,h,l);break;case 3:var g=i.updateQueue;if(g!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}gf(i,g,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var w=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&o.focus();break;case"img":w.src&&(o.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var L=N.memoizedState;if(L!==null){var D=L.dehydrated;D!==null&&$i(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}rt||i.flags&512&&Sc(i)}catch(O){Oe(i,i.return,O)}}if(i===t){H=null;break}if(o=i.sibling,o!==null){o.return=i.return,H=o;break}H=i.return}}function gp(t){for(;H!==null;){var i=H;if(i===t){H=null;break}var o=i.sibling;if(o!==null){o.return=i.return,H=o;break}H=i.return}}function yp(t){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Do(4,i)}catch(w){Oe(i,o,w)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(w){Oe(i,u,w)}}var h=i.return;try{Sc(i)}catch(w){Oe(i,h,w)}break;case 5:var g=i.return;try{Sc(i)}catch(w){Oe(i,g,w)}}}catch(w){Oe(i,i.return,w)}if(i===t){H=null;break}var _=i.sibling;if(_!==null){_.return=i.return,H=_;break}H=i.return}}var rx=Math.ceil,Fo=re.ReactCurrentDispatcher,Ec=re.ReactCurrentOwner,jt=re.ReactCurrentBatchConfig,ce=0,$e=null,De=null,Je=0,Nt=0,li=Mn(0),Be=0,fs=null,yr=0,Uo=0,bc=0,ps=null,gt=null,Nc=0,ci=1/0,yn=null,Bo=!1,Ic=null,Wn=null,zo=!1,Hn=null,Wo=0,ms=0,Tc=null,Ho=-1,$o=0;function lt(){return(ce&6)!==0?Le():Ho!==-1?Ho:Ho=Le()}function $n(t){return(t.mode&1)===0?1:(ce&2)!==0&&Je!==0?Je&-Je:B_.transition!==null?($o===0&&($o=ch()),$o):(t=ge,t!==0||(t=window.event,t=t===void 0?16:vh(t.type)),t)}function $t(t,i,o,l){if(50<ms)throw ms=0,Tc=null,Error(n(185));Ui(t,o,l),((ce&2)===0||t!==$e)&&(t===$e&&((ce&2)===0&&(Uo|=o),Be===4&&Vn(t,Je)),yt(t,l),o===1&&ce===0&&(i.mode&1)===0&&(ci=Le()+500,vo&&Fn()))}function yt(t,i){var o=t.callbackNode;B0(t,i);var l=Xs(t,t===$e?Je:0);if(l===0)o!==null&&oh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&oh(o),i===1)t.tag===0?U_(_p.bind(null,t)):rf(_p.bind(null,t)),L_(function(){(ce&6)===0&&Fn()}),o=null;else{switch(uh(l)){case 1:o=ll;break;case 4:o=ah;break;case 16:o=Ks;break;case 536870912:o=lh;break;default:o=Ks}o=Np(o,vp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function vp(t,i){if(Ho=-1,$o=0,(ce&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ui()&&t.callbackNode!==o)return null;var l=Xs(t,t===$e?Je:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Vo(t,l);else{i=l;var u=ce;ce|=2;var h=wp();($e!==t||Je!==i)&&(yn=null,ci=Le()+500,_r(t,i));do try{ox();break}catch(_){xp(t,_)}while(!0);ql(),Fo.current=h,ce=u,De!==null?i=0:($e=null,Je=0,i=Be)}if(i!==0){if(i===2&&(u=cl(t),u!==0&&(l=u,i=Rc(t,u))),i===1)throw o=fs,_r(t,0),Vn(t,l),yt(t,Le()),o;if(i===6)Vn(t,l);else{if(u=t.current.alternate,(l&30)===0&&!ix(u)&&(i=Vo(t,l),i===2&&(h=cl(t),h!==0&&(l=h,i=Rc(t,h))),i===1))throw o=fs,_r(t,0),Vn(t,l),yt(t,Le()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:xr(t,gt,yn);break;case 3:if(Vn(t,l),(l&130023424)===l&&(i=Nc+500-Le(),10<i)){if(Xs(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){lt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Ml(xr.bind(null,t,gt,yn),i);break}xr(t,gt,yn);break;case 4:if(Vn(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var g=31-Ft(l);h=1<<g,g=i[g],g>u&&(u=g),l&=~h}if(l=u,l=Le()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*rx(l/1960))-l,10<l){t.timeoutHandle=Ml(xr.bind(null,t,gt,yn),l);break}xr(t,gt,yn);break;case 5:xr(t,gt,yn);break;default:throw Error(n(329))}}}return yt(t,Le()),t.callbackNode===o?vp.bind(null,t):null}function Rc(t,i){var o=ps;return t.current.memoizedState.isDehydrated&&(_r(t,i).flags|=256),t=Vo(t,i),t!==2&&(i=gt,gt=o,i!==null&&Pc(i)),t}function Pc(t){gt===null?gt=t:gt.push.apply(gt,t)}function ix(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!Ut(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vn(t,i){for(i&=~bc,i&=~Uo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Ft(i),l=1<<o;t[o]=-1,i&=~l}}function _p(t){if((ce&6)!==0)throw Error(n(327));ui();var i=Xs(t,0);if((i&1)===0)return yt(t,Le()),null;var o=Vo(t,i);if(t.tag!==0&&o===2){var l=cl(t);l!==0&&(i=l,o=Rc(t,l))}if(o===1)throw o=fs,_r(t,0),Vn(t,i),yt(t,Le()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,xr(t,gt,yn),yt(t,Le()),null}function Ac(t,i){var o=ce;ce|=1;try{return t(i)}finally{ce=o,ce===0&&(ci=Le()+500,vo&&Fn())}}function vr(t){Hn!==null&&Hn.tag===0&&(ce&6)===0&&ui();var i=ce;ce|=1;var o=jt.transition,l=ge;try{if(jt.transition=null,ge=1,t)return t()}finally{ge=l,jt.transition=o,ce=i,(ce&6)===0&&Fn()}}function jc(){Nt=li.current,ke(li)}function _r(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,O_(o)),De!==null)for(o=De.return;o!==null;){var l=o;switch(Wl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&go();break;case 3:si(),ke(ft),ke(et),tc();break;case 5:Zl(l);break;case 4:si();break;case 13:ke(Te);break;case 19:ke(Te);break;case 10:Kl(l.type._context);break;case 22:case 23:jc()}o=o.return}if($e=t,De=t=Gn(t.current,null),Je=Nt=i,Be=0,fs=null,bc=Uo=yr=0,gt=ps=null,pr!==null){for(i=0;i<pr.length;i++)if(o=pr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var g=h.next;h.next=u,l.next=g}o.pending=l}pr=null}return t}function xp(t,i){do{var o=De;try{if(ql(),Io.current=Ao,To){for(var l=Re.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}To=!1}if(gr=0,He=Ue=Re=null,as=!1,ls=0,Ec.current=null,o===null||o.return===null){Be=1,fs=i,De=null;break}e:{var h=t,g=o.return,_=o,w=i;if(i=Je,_.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var N=w,L=_,D=L.tag;if((L.mode&1)===0&&(D===0||D===11||D===15)){var O=L.alternate;O?(L.updateQueue=O.updateQueue,L.memoizedState=O.memoizedState,L.lanes=O.lanes):(L.updateQueue=null,L.memoizedState=null)}var W=Vf(g);if(W!==null){W.flags&=-257,Gf(W,g,_,h,i),W.mode&1&&$f(h,N,i),i=W,w=N;var $=i.updateQueue;if($===null){var V=new Set;V.add(w),i.updateQueue=V}else $.add(w);break e}else{if((i&1)===0){$f(h,N,i),Oc();break e}w=Error(n(426))}}else if(Ie&&_.mode&1){var Me=Vf(g);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),Gf(Me,g,_,h,i),Vl(oi(w,_));break e}}h=w=oi(w,_),Be!==4&&(Be=2),ps===null?ps=[h]:ps.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var E=Wf(h,w,i);mf(h,E);break e;case 1:_=w;var S=h.type,b=h.stateNode;if((h.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wn===null||!Wn.has(b)))){h.flags|=65536,i&=-i,h.lanes|=i;var F=Hf(h,_,i);mf(h,F);break e}}h=h.return}while(h!==null)}kp(o)}catch(G){i=G,De===o&&o!==null&&(De=o=o.return);continue}break}while(!0)}function wp(){var t=Fo.current;return Fo.current=Ao,t===null?Ao:t}function Oc(){(Be===0||Be===3||Be===2)&&(Be=4),$e===null||(yr&268435455)===0&&(Uo&268435455)===0||Vn($e,Je)}function Vo(t,i){var o=ce;ce|=2;var l=wp();($e!==t||Je!==i)&&(yn=null,_r(t,i));do try{sx();break}catch(u){xp(t,u)}while(!0);if(ql(),ce=o,Fo.current=l,De!==null)throw Error(n(261));return $e=null,Je=0,Be}function sx(){for(;De!==null;)Sp(De)}function ox(){for(;De!==null&&!P0();)Sp(De)}function Sp(t){var i=bp(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,i===null?kp(t):De=i,Ec.current=null}function kp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=X_(o,i,Nt),o!==null){De=o;return}}else{if(o=Z_(o,i),o!==null){o.flags&=32767,De=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,De=null;return}}if(i=i.sibling,i!==null){De=i;return}De=i=t}while(i!==null);Be===0&&(Be=5)}function xr(t,i,o){var l=ge,u=jt.transition;try{jt.transition=null,ge=1,ax(t,i,o,l)}finally{jt.transition=u,ge=l}return null}function ax(t,i,o,l){do ui();while(Hn!==null);if((ce&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(z0(t,h),t===$e&&(De=$e=null,Je=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||zo||(zo=!0,Np(Ks,function(){return ui(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=jt.transition,jt.transition=null;var g=ge;ge=1;var _=ce;ce|=4,Ec.current=null,tx(t,o),fp(o,t),N_(Ol),to=!!jl,Ol=jl=null,t.current=o,nx(o),A0(),ce=_,ge=g,jt.transition=h}else t.current=o;if(zo&&(zo=!1,Hn=t,Wo=u),h=t.pendingLanes,h===0&&(Wn=null),L0(o.stateNode),yt(t,Le()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Bo)throw Bo=!1,t=Ic,Ic=null,t;return(Wo&1)!==0&&t.tag!==0&&ui(),h=t.pendingLanes,(h&1)!==0?t===Tc?ms++:(ms=0,Tc=t):ms=0,Fn(),null}function ui(){if(Hn!==null){var t=uh(Wo),i=jt.transition,o=ge;try{if(jt.transition=null,ge=16>t?16:t,Hn===null)var l=!1;else{if(t=Hn,Hn=null,Wo=0,(ce&6)!==0)throw Error(n(331));var u=ce;for(ce|=4,H=t.current;H!==null;){var h=H,g=h.child;if((H.flags&16)!==0){var _=h.deletions;if(_!==null){for(var w=0;w<_.length;w++){var N=_[w];for(H=N;H!==null;){var L=H;switch(L.tag){case 0:case 11:case 15:hs(8,L,h)}var D=L.child;if(D!==null)D.return=L,H=D;else for(;H!==null;){L=H;var O=L.sibling,W=L.return;if(lp(L),L===N){H=null;break}if(O!==null){O.return=W,H=O;break}H=W}}}var $=h.alternate;if($!==null){var V=$.child;if(V!==null){$.child=null;do{var Me=V.sibling;V.sibling=null,V=Me}while(V!==null)}}H=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,H=g;else e:for(;H!==null;){if(h=H,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:hs(9,h,h.return)}var E=h.sibling;if(E!==null){E.return=h.return,H=E;break e}H=h.return}}var S=t.current;for(H=S;H!==null;){g=H;var b=g.child;if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,H=b;else e:for(g=S;H!==null;){if(_=H,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:Do(9,_)}}catch(G){Oe(_,_.return,G)}if(_===g){H=null;break e}var F=_.sibling;if(F!==null){F.return=_.return,H=F;break e}H=_.return}}if(ce=u,Fn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ys,t)}catch{}l=!0}return l}finally{ge=o,jt.transition=i}}return!1}function Cp(t,i,o){i=oi(o,i),i=Wf(t,i,1),t=Bn(t,i,1),i=lt(),t!==null&&(Ui(t,1,i),yt(t,i))}function Oe(t,i,o){if(t.tag===3)Cp(t,t,o);else for(;i!==null;){if(i.tag===3){Cp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Wn===null||!Wn.has(l))){t=oi(o,t),t=Hf(i,t,1),i=Bn(i,t,1),t=lt(),i!==null&&(Ui(i,1,t),yt(i,t));break}}i=i.return}}function lx(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=lt(),t.pingedLanes|=t.suspendedLanes&o,$e===t&&(Je&o)===o&&(Be===4||Be===3&&(Je&130023424)===Je&&500>Le()-Nc?_r(t,0):bc|=o),yt(t,i)}function Ep(t,i){i===0&&((t.mode&1)===0?i=1:(i=Js,Js<<=1,(Js&130023424)===0&&(Js=4194304)));var o=lt();t=pn(t,i),t!==null&&(Ui(t,i,o),yt(t,o))}function cx(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ep(t,o)}function ux(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ep(t,o)}var bp;bp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ft.current)mt=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return mt=!1,J_(t,i,o);mt=(t.flags&131072)!==0}else mt=!1,Ie&&(i.flags&1048576)!==0&&sf(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Lo(t,i),t=i.pendingProps;var u=Xr(i,et.current);ii(i,o),u=ic(null,i,l,t,u,o);var h=sc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,pt(l)?(h=!0,yo(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Jl(i),u.updater=jo,i.stateNode=u,u._reactInternals=i,dc(i,l,t,o),i=mc(null,i,l,!0,h,o)):(i.tag=0,Ie&&h&&zl(i),at(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Lo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=hx(l),t=zt(l,t),u){case 0:i=pc(null,i,l,t,o);break e;case 1:i=Xf(null,i,l,t,o);break e;case 11:i=qf(null,i,l,t,o);break e;case 14:i=Kf(null,i,l,zt(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:zt(l,u),pc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:zt(l,u),Xf(t,i,l,u,o);case 3:e:{if(Zf(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,pf(t,i),bo(i,l,null,o);var g=i.memoizedState;if(l=g.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=oi(Error(n(423)),i),i=ep(t,i,l,o,u);break e}else if(l!==u){u=oi(Error(n(424)),i),i=ep(t,i,l,o,u);break e}else for(bt=Ln(i.stateNode.containerInfo.firstChild),Et=i,Ie=!0,Bt=null,o=hf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ti(),l===u){i=gn(t,i,o);break e}at(t,i,l,o)}i=i.child}return i;case 5:return yf(i),t===null&&$l(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,g=u.children,Ll(l,u)?g=null:h!==null&&Ll(l,h)&&(i.flags|=32),Jf(t,i),at(t,i,g,o),i.child;case 6:return t===null&&$l(i),null;case 13:return tp(t,i,o);case 4:return Xl(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ni(i,null,l,o):at(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:zt(l,u),qf(t,i,l,u,o);case 7:return at(t,i,i.pendingProps,o),i.child;case 8:return at(t,i,i.pendingProps.children,o),i.child;case 12:return at(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,g=u.value,we(ko,l._currentValue),l._currentValue=g,h!==null)if(Ut(h.value,g)){if(h.children===u.children&&!ft.current){i=gn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){g=h.child;for(var w=_.firstContext;w!==null;){if(w.context===l){if(h.tag===1){w=mn(-1,o&-o),w.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var L=N.pending;L===null?w.next=w:(w.next=L.next,L.next=w),N.pending=w}}h.lanes|=o,w=h.alternate,w!==null&&(w.lanes|=o),Yl(h.return,o,i),_.lanes|=o;break}w=w.next}}else if(h.tag===10)g=h.type===i.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(n(341));g.lanes|=o,_=g.alternate,_!==null&&(_.lanes|=o),Yl(g,o,i),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===i){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}at(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ii(i,o),u=Pt(u),l=l(u),i.flags|=1,at(t,i,l,o),i.child;case 14:return l=i.type,u=zt(l,i.pendingProps),u=zt(l.type,u),Kf(t,i,l,u,o);case 15:return Yf(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:zt(l,u),Lo(t,i),i.tag=1,pt(l)?(t=!0,yo(i)):t=!1,ii(i,o),Bf(i,l,u),dc(i,l,u,o),mc(null,i,l,!0,t,o);case 19:return rp(t,i,o);case 22:return Qf(t,i,o)}throw Error(n(156,i.tag))};function Np(t,i){return sh(t,i)}function dx(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,i,o,l){return new dx(t,i,o,l)}function Lc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hx(t){if(typeof t=="function")return Lc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ke)return 11;if(t===ot)return 14}return 2}function Gn(t,i){var o=t.alternate;return o===null?(o=Ot(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Go(t,i,o,l,u,h){var g=2;if(l=t,typeof t=="function")Lc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case Ae:return wr(o.children,u,h,i);case pe:g=8,u|=8;break;case wt:return t=Ot(12,o,i,u|2),t.elementType=wt,t.lanes=h,t;case We:return t=Ot(13,o,i,u),t.elementType=We,t.lanes=h,t;case Ye:return t=Ot(19,o,i,u),t.elementType=Ye,t.lanes=h,t;case _e:return qo(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case St:g=10;break e;case ht:g=9;break e;case Ke:g=11;break e;case ot:g=14;break e;case je:g=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ot(g,o,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function wr(t,i,o,l){return t=Ot(7,t,l,i),t.lanes=o,t}function qo(t,i,o,l){return t=Ot(22,t,l,i),t.elementType=_e,t.lanes=o,t.stateNode={isHidden:!1},t}function Mc(t,i,o){return t=Ot(6,t,null,i),t.lanes=o,t}function Dc(t,i,o){return i=Ot(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function fx(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Fc(t,i,o,l,u,h,g,_,w){return t=new fx(t,i,o,_,w),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ot(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(h),t}function px(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Ip(t){if(!t)return Dn;t=t._reactInternals;e:{if(cr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(pt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(pt(o))return tf(t,o,i)}return i}function Tp(t,i,o,l,u,h,g,_,w){return t=Fc(o,l,!0,t,u,h,g,_,w),t.context=Ip(null),o=t.current,l=lt(),u=$n(o),h=mn(l,u),h.callback=i??null,Bn(o,h,u),t.current.lanes=u,Ui(t,u,l),yt(t,l),t}function Ko(t,i,o,l){var u=i.current,h=lt(),g=$n(u);return o=Ip(o),i.context===null?i.context=o:i.pendingContext=o,i=mn(h,g),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Bn(u,i,g),t!==null&&($t(t,u,g,h),Eo(t,u,g)),g}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Uc(t,i){Rp(t,i),(t=t.alternate)&&Rp(t,i)}function mx(){return null}var Pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bc(t){this._internalRoot=t}Qo.prototype.render=Bc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ko(t,i,null,null)},Qo.prototype.unmount=Bc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;vr(function(){Ko(null,t,null,null)}),i[un]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=fh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<An.length&&i!==0&&i<An[o].priority;o++);An.splice(o,0,t),o===0&&gh(t)}};function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function gx(t,i,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var N=Yo(g);h.call(N)}}var g=Tp(i,l,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=g,t[un]=g.current,Zi(t.nodeType===8?t.parentNode:t),vr(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var _=l;l=function(){var N=Yo(w);_.call(N)}}var w=Fc(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=w,t[un]=w.current,Zi(t.nodeType===8?t.parentNode:t),vr(function(){Ko(i,w,o,l)}),w}function Xo(t,i,o,l,u){var h=o._reactRootContainer;if(h){var g=h;if(typeof u=="function"){var _=u;u=function(){var w=Yo(g);_.call(w)}}Ko(i,g,t,u)}else g=gx(o,i,t,u,l);return Yo(g)}dh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Fi(i.pendingLanes);o!==0&&(dl(i,o|1),yt(i,Le()),(ce&6)===0&&(ci=Le()+500,Fn()))}break;case 13:vr(function(){var l=pn(t,1);if(l!==null){var u=lt();$t(l,t,1,u)}}),Uc(t,1)}},hl=function(t){if(t.tag===13){var i=pn(t,134217728);if(i!==null){var o=lt();$t(i,t,134217728,o)}Uc(t,134217728)}},hh=function(t){if(t.tag===13){var i=$n(t),o=pn(t,i);if(o!==null){var l=lt();$t(o,t,i,l)}Uc(t,i)}},fh=function(){return ge},ph=function(t,i){var o=ge;try{return ge=t,i()}finally{ge=o}},il=function(t,i,o){switch(i){case"input":if(Qa(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=mo(l);if(!u)throw Error(n(90));Fd(l),Qa(l,u)}}}break;case"textarea":Hd(t,o);break;case"select":i=o.value,i!=null&&Br(t,!!o.multiple,i,!1)}},Xd=Ac,Zd=vr;var yx={usingClientEntryPoint:!1,Events:[ns,Qr,mo,Qd,Jd,Ac]},gs={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vx={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rh(t),t===null?null:t.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Ys=Zo.inject(vx),Jt=Zo}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx,vt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zc(i))throw Error(n(200));return px(t,i,null,o)},vt.createRoot=function(t,i){if(!zc(t))throw Error(n(299));var o=!1,l="",u=Pp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=Fc(t,1,!1,null,null,o,!1,l,u),t[un]=i.current,Zi(t.nodeType===8?t.parentNode:t),new Bc(i)},vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=rh(i),t=t===null?null:t.stateNode,t},vt.flushSync=function(t){return vr(t)},vt.hydrate=function(t,i,o){if(!Jo(i))throw Error(n(200));return Xo(null,t,i,!0,o)},vt.hydrateRoot=function(t,i,o){if(!zc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",g=Pp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),i=Tp(i,null,t,1,o??null,u,!1,h,g),t[un]=i.current,Zi(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new Qo(i)},vt.render=function(t,i,o){if(!Jo(i))throw Error(n(200));return Xo(null,t,i,!1,o)},vt.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(n(40));return t._reactRootContainer?(vr(function(){Xo(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1},vt.unstable_batchedUpdates=Ac,vt.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Xo(t,i,o,!1,l)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var Bp;function Sg(){if(Bp)return $c.exports;Bp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),$c.exports=Nx(),$c.exports}var zp;function Ix(){if(zp)return ea;zp=1;var r=Sg();return ea.createRoot=r.createRoot,ea.hydrateRoot=r.hydrateRoot,ea}var Tx=Ix();const Rx=xg(Tx);Sg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Ns.apply(this,arguments)}var Zn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Zn||(Zn={}));const Wp="popstate";function Px(r){r===void 0&&(r={});function e(s,a){let{pathname:c,search:d,hash:p}=s.location;return hu("",{pathname:c,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){return typeof a=="string"?a:ua(a)}return jx(e,n,null,r)}function Fe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function zu(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ax(){return Math.random().toString(36).substr(2,8)}function Hp(r,e){return{usr:r.state,key:r.key,idx:e}}function hu(r,e,n,s){return n===void 0&&(n=null),Ns({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||s||Ax()})}function ua(r){let{pathname:e="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ci(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function jx(r,e,n,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:c=!1}=s,d=a.history,p=Zn.Pop,m=null,y=x();y==null&&(y=0,d.replaceState(Ns({},d.state,{idx:y}),""));function x(){return(d.state||{idx:null}).idx}function v(){p=Zn.Pop;let R=x(),U=R==null?null:R-y;y=R,m&&m({action:p,location:A.location,delta:U})}function C(R,U){p=Zn.Push;let q=hu(A.location,R,U);y=x()+1;let K=Hp(q,y),re=A.createHref(q);try{d.pushState(K,"",re)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;a.location.assign(re)}c&&m&&m({action:p,location:A.location,delta:1})}function T(R,U){p=Zn.Replace;let q=hu(A.location,R,U);y=x();let K=Hp(q,y),re=A.createHref(q);d.replaceState(K,"",re),c&&m&&m({action:p,location:A.location,delta:0})}function j(R){let U=a.location.origin!=="null"?a.location.origin:a.location.href,q=typeof R=="string"?R:ua(R);return q=q.replace(/ $/,"%20"),Fe(U,"No window.location.(origin|href) available to create URL for href: "+q),new URL(q,U)}let A={get action(){return p},get location(){return r(a,d)},listen(R){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(Wp,v),m=R,()=>{a.removeEventListener(Wp,v),m=null}},createHref(R){return e(a,R)},createURL:j,encodeLocation(R){let U=j(R);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:C,replace:T,go(R){return d.go(R)}};return A}var $p;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})($p||($p={}));function Ox(r,e,n){return n===void 0&&(n="/"),Lx(r,e,n)}function Lx(r,e,n,s){let a=typeof e=="string"?Ci(e):e,c=Wu(a.pathname||"/",n);if(c==null)return null;let d=kg(r);Mx(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let y=Kx(c);p=Vx(d[m],y)}return p}function kg(r,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let a=(c,d,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(Fe(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let y=er([s,m.relativePath]),x=n.concat(m);c.children&&c.children.length>0&&(Fe(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),kg(c.children,e,x,y)),!(c.path==null&&!c.index)&&e.push({path:y,score:Hx(y,c.index),routesMeta:x})};return r.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))a(c,d);else for(let m of Cg(c.path))a(c,d,m)}),e}function Cg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,a=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return a?[c,""]:[c];let d=Cg(s.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),a&&p.push(...d),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function Mx(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:$x(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Dx=/^:[\w-]+$/,Fx=3,Ux=2,Bx=1,zx=10,Wx=-2,Vp=r=>r==="*";function Hx(r,e){let n=r.split("/"),s=n.length;return n.some(Vp)&&(s+=Wx),e&&(s+=Ux),n.filter(a=>!Vp(a)).reduce((a,c)=>a+(Dx.test(c)?Fx:c===""?Bx:zx),s)}function $x(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function Vx(r,e,n){let{routesMeta:s}=r,a={},c="/",d=[];for(let p=0;p<s.length;++p){let m=s[p],y=p===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",v=Gx({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},x),C=m.route;if(!v)return null;Object.assign(a,v.params),d.push({params:a,pathname:er([c,v.pathname]),pathnameBase:Zx(er([c,v.pathnameBase])),route:C}),v.pathnameBase!=="/"&&(c=er([c,v.pathnameBase]))}return d}function Gx(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=qx(r.path,r.caseSensitive,r.end),a=e.match(n);if(!a)return null;let c=a[0],d=c.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:s.reduce((y,x,v)=>{let{paramName:C,isOptional:T}=x;if(C==="*"){let A=p[v]||"";d=c.slice(0,c.length-A.length).replace(/(.)\/+$/,"$1")}const j=p[v];return T&&!j?y[C]=void 0:y[C]=(j||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:d,pattern:r}}function qx(r,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zu(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function Kx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zu(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Wu(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}const Yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qx=r=>Yx.test(r);function Jx(r,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:a=""}=typeof r=="string"?Ci(r):r,c;if(n)if(Qx(n))c=n;else{if(n.includes("//")){let d=n;n=n.replace(/\/\/+/g,"/"),zu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+n))}n.startsWith("/")?c=Gp(n.substring(1),"/"):c=Gp(n,e)}else c=e;return{pathname:c,search:ew(s),hash:tw(a)}}function Gp(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function qc(r,e,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xx(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Eg(r,e){let n=Xx(r);return e?n.map((s,a)=>a===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function bg(r,e,n,s){s===void 0&&(s=!1);let a;typeof r=="string"?a=Ci(r):(a=Ns({},r),Fe(!a.pathname||!a.pathname.includes("?"),qc("?","pathname","search",a)),Fe(!a.pathname||!a.pathname.includes("#"),qc("#","pathname","hash",a)),Fe(!a.search||!a.search.includes("#"),qc("#","search","hash",a)));let c=r===""||a.pathname==="",d=c?"/":a.pathname,p;if(d==null)p=n;else{let v=e.length-1;if(!s&&d.startsWith("..")){let C=d.split("/");for(;C[0]==="..";)C.shift(),v-=1;a.pathname=C.join("/")}p=v>=0?e[v]:"/"}let m=Jx(a,p),y=d&&d!=="/"&&d.endsWith("/"),x=(c||d===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(y||x)&&(m.pathname+="/"),m}const er=r=>r.join("/").replace(/\/\/+/g,"/"),Zx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ew=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,tw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function nw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Ng=["post","put","patch","delete"];new Set(Ng);const rw=["get",...Ng];new Set(rw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Is.apply(this,arguments)}const Hu=M.createContext(null),iw=M.createContext(null),jr=M.createContext(null),Pa=M.createContext(null),Or=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Ig=M.createContext(null);function sw(r,e){let{relative:n}=e===void 0?{}:e;Os()||Fe(!1);let{basename:s,navigator:a}=M.useContext(jr),{hash:c,pathname:d,search:p}=Rg(r,{relative:n}),m=d;return s!=="/"&&(m=d==="/"?s:er([s,d])),a.createHref({pathname:m,search:p,hash:c})}function Os(){return M.useContext(Pa)!=null}function lr(){return Os()||Fe(!1),M.useContext(Pa).location}function Tg(r){M.useContext(jr).static||M.useLayoutEffect(r)}function Aa(){let{isDataRoute:r}=M.useContext(Or);return r?vw():ow()}function ow(){Os()||Fe(!1);let r=M.useContext(Hu),{basename:e,future:n,navigator:s}=M.useContext(jr),{matches:a}=M.useContext(Or),{pathname:c}=lr(),d=JSON.stringify(Eg(a,n.v7_relativeSplatPath)),p=M.useRef(!1);return Tg(()=>{p.current=!0}),M.useCallback(function(y,x){if(x===void 0&&(x={}),!p.current)return;if(typeof y=="number"){s.go(y);return}let v=bg(y,JSON.parse(d),c,x.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:er([e,v.pathname])),(x.replace?s.replace:s.push)(v,x.state,x)},[e,s,d,c,r])}function Rg(r,e){let{relative:n}=e===void 0?{}:e,{future:s}=M.useContext(jr),{matches:a}=M.useContext(Or),{pathname:c}=lr(),d=JSON.stringify(Eg(a,s.v7_relativeSplatPath));return M.useMemo(()=>bg(r,JSON.parse(d),c,n==="path"),[r,d,c,n])}function aw(r,e){return lw(r,e)}function lw(r,e,n,s){Os()||Fe(!1);let{navigator:a}=M.useContext(jr),{matches:c}=M.useContext(Or),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let m=d?d.pathnameBase:"/";d&&d.route;let y=lr(),x;if(e){var v;let R=typeof e=="string"?Ci(e):e;m==="/"||(v=R.pathname)!=null&&v.startsWith(m)||Fe(!1),x=R}else x=y;let C=x.pathname||"/",T=C;if(m!=="/"){let R=m.replace(/^\//,"").split("/");T="/"+C.replace(/^\//,"").split("/").slice(R.length).join("/")}let j=Ox(r,{pathname:T}),A=fw(j&&j.map(R=>Object.assign({},R,{params:Object.assign({},p,R.params),pathname:er([m,a.encodeLocation?a.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?m:er([m,a.encodeLocation?a.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,n,s);return e&&A?M.createElement(Pa.Provider,{value:{location:Is({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Zn.Pop}},A):A}function cw(){let r=yw(),e=nw(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:a},n):null,null)}const uw=M.createElement(cw,null);class dw extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Or.Provider,{value:this.props.routeContext},M.createElement(Ig.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hw(r){let{routeContext:e,match:n,children:s}=r,a=M.useContext(Hu);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Or.Provider,{value:e},s)}function fw(r,e,n,s){var a;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var c;if(!n)return null;if(n.errors)r=n.matches;else if((c=s)!=null&&c.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let d=r,p=(a=n)==null?void 0:a.errors;if(p!=null){let x=d.findIndex(v=>v.route.id&&(p==null?void 0:p[v.route.id])!==void 0);x>=0||Fe(!1),d=d.slice(0,Math.min(d.length,x+1))}let m=!1,y=-1;if(n&&s&&s.v7_partialHydration)for(let x=0;x<d.length;x++){let v=d[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=x),v.route.id){let{loaderData:C,errors:T}=n,j=v.route.loader&&C[v.route.id]===void 0&&(!T||T[v.route.id]===void 0);if(v.route.lazy||j){m=!0,y>=0?d=d.slice(0,y+1):d=[d[0]];break}}}return d.reduceRight((x,v,C)=>{let T,j=!1,A=null,R=null;n&&(T=p&&v.route.id?p[v.route.id]:void 0,A=v.route.errorElement||uw,m&&(y<0&&C===0?(_w("route-fallback"),j=!0,R=null):y===C&&(j=!0,R=v.route.hydrateFallbackElement||null)));let U=e.concat(d.slice(0,C+1)),q=()=>{let K;return T?K=A:j?K=R:v.route.Component?K=M.createElement(v.route.Component,null):v.route.element?K=v.route.element:K=x,M.createElement(hw,{match:v,routeContext:{outlet:x,matches:U,isDataRoute:n!=null},children:K})};return n&&(v.route.ErrorBoundary||v.route.errorElement||C===0)?M.createElement(dw,{location:n.location,revalidation:n.revalidation,component:A,error:T,children:q(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):q()},null)}var Pg=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(Pg||{}),Ag=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Ag||{});function pw(r){let e=M.useContext(Hu);return e||Fe(!1),e}function mw(r){let e=M.useContext(iw);return e||Fe(!1),e}function gw(r){let e=M.useContext(Or);return e||Fe(!1),e}function jg(r){let e=gw(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function yw(){var r;let e=M.useContext(Ig),n=mw(),s=jg();return e!==void 0?e:(r=n.errors)==null?void 0:r[s]}function vw(){let{router:r}=pw(Pg.UseNavigateStable),e=jg(Ag.UseNavigateStable),n=M.useRef(!1);return Tg(()=>{n.current=!0}),M.useCallback(function(a,c){c===void 0&&(c={}),n.current&&(typeof a=="number"?r.navigate(a):r.navigate(a,Is({fromRouteId:e},c)))},[r,e])}const qp={};function _w(r,e,n){qp[r]||(qp[r]=!0)}function xw(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function vn(r){Fe(!1)}function ww(r){let{basename:e="/",children:n=null,location:s,navigationType:a=Zn.Pop,navigator:c,static:d=!1,future:p}=r;Os()&&Fe(!1);let m=e.replace(/^\/*/,"/"),y=M.useMemo(()=>({basename:m,navigator:c,static:d,future:Is({v7_relativeSplatPath:!1},p)}),[m,p,c,d]);typeof s=="string"&&(s=Ci(s));let{pathname:x="/",search:v="",hash:C="",state:T=null,key:j="default"}=s,A=M.useMemo(()=>{let R=Wu(x,m);return R==null?null:{location:{pathname:R,search:v,hash:C,state:T,key:j},navigationType:a}},[m,x,v,C,T,j,a]);return A==null?null:M.createElement(jr.Provider,{value:y},M.createElement(Pa.Provider,{children:n,value:A}))}function Sw(r){let{children:e,location:n}=r;return aw(fu(e),n)}new Promise(()=>{});function fu(r,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(r,(s,a)=>{if(!M.isValidElement(s))return;let c=[...e,a];if(s.type===M.Fragment){n.push.apply(n,fu(s.props.children,c));return}s.type!==vn&&Fe(!1),!s.props.index||!s.props.children||Fe(!1);let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=fu(s.props.children,c)),n.push(d)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pu(){return pu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},pu.apply(this,arguments)}function kw(r,e){if(r==null)return{};var n={},s=Object.keys(r),a,c;for(c=0;c<s.length;c++)a=s[c],!(e.indexOf(a)>=0)&&(n[a]=r[a]);return n}function Cw(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ew(r,e){return r.button===0&&(!e||e==="_self")&&!Cw(r)}const bw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nw="6";try{window.__reactRouterVersion=Nw}catch{}const Iw="startTransition",Kp=Cx[Iw];function Tw(r){let{basename:e,children:n,future:s,window:a}=r,c=M.useRef();c.current==null&&(c.current=Px({window:a,v5Compat:!0}));let d=c.current,[p,m]=M.useState({action:d.action,location:d.location}),{v7_startTransition:y}=s||{},x=M.useCallback(v=>{y&&Kp?Kp(()=>m(v)):m(v)},[m,y]);return M.useLayoutEffect(()=>d.listen(x),[d,x]),M.useEffect(()=>xw(s),[s]),M.createElement(ww,{basename:e,children:n,location:p.location,navigationType:p.action,navigator:d,future:s})}const Rw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sn=M.forwardRef(function(e,n){let{onClick:s,relative:a,reloadDocument:c,replace:d,state:p,target:m,to:y,preventScrollReset:x,viewTransition:v}=e,C=kw(e,bw),{basename:T}=M.useContext(jr),j,A=!1;if(typeof y=="string"&&Pw.test(y)&&(j=y,Rw))try{let K=new URL(window.location.href),re=y.startsWith("//")?new URL(K.protocol+y):new URL(y),ne=Wu(re.pathname,T);re.origin===K.origin&&ne!=null?y=ne+re.search+re.hash:A=!0}catch{}let R=sw(y,{relative:a}),U=Aw(y,{replace:d,state:p,target:m,preventScrollReset:x,relative:a,viewTransition:v});function q(K){s&&s(K),K.defaultPrevented||U(K)}return M.createElement("a",pu({},C,{href:j||R,onClick:A||c?s:q,ref:n,target:m}))});var Yp;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Yp||(Yp={}));var Qp;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Qp||(Qp={}));function Aw(r,e){let{target:n,replace:s,state:a,preventScrollReset:c,relative:d,viewTransition:p}=e===void 0?{}:e,m=Aa(),y=lr(),x=Rg(r,{relative:d});return M.useCallback(v=>{if(Ew(v,n)){v.preventDefault();let C=s!==void 0?s:ua(y)===ua(x);m(r,{replace:C,state:a,preventScrollReset:c,relative:d,viewTransition:p})}},[y,m,x,s,a,n,r,c,d,p])}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Og=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ow={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=M.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:d,...p},m)=>M.createElement("svg",{ref:m,...Ow,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:Og("lucide",a),...p},[...d.map(([y,x])=>M.createElement(y,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=(r,e)=>{const n=M.forwardRef(({className:s,...a},c)=>M.createElement(Lw,{ref:c,iconNode:e,className:Og(`lucide-${jw(r)}`,s),...a}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=Pe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=Pe("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=Pe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=Pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=Pe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=Pe("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=Pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=Pe("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=Pe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=Pe("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=Pe("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=Pe("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=Pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=Pe("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=Pe("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Pe("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=Pe("ShoppingBasket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=Pe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=Pe("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=Pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=Pe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=Pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=Pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Fg="/circle.png",Jp=[{label:"Services",href:"/#services"},{label:"Products",to:"/products"},{label:"About Us",to:"/about"},{label:"Contact",href:"/team#contact"}];function Qw(){const[r,e]=M.useState(!1),n=lr(),s=M.useMemo(()=>n.pathname,[n.pathname]);return f.jsx("header",{className:"sticky top-0 z-50 w-full border-b border-pink-100/70 bg-white shadow-sm",children:f.jsxs("nav",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8",children:[f.jsxs(sn,{to:"/",className:"group flex items-center gap-3",children:[f.jsx("img",{src:Fg,alt:"EL. Glamorous Face and Body Clinic, Salon and Spa",className:"h-9 w-9 rounded-full object-cover ring-2 ring-pink-100 transition group-hover:scale-105 group-hover:ring-pink-200"}),f.jsx("span",{className:"text-base font-semibold tracking-tight text-gray-900 sm:text-lg lg:text-xl",children:"EL Glamorous Face and Body Clinic, Salon and Spa"})]}),f.jsx("button",{type:"button",className:"rounded-lg p-2 text-gray-700 transition hover:bg-pink-50 hover:text-accent md:hidden","aria-label":r?"Close menu":"Open menu",onClick:()=>e(a=>!a),children:r?f.jsx(Yw,{className:"h-6 w-6"}):f.jsx(Ww,{className:"h-6 w-6"})}),f.jsx("div",{className:"hidden md:flex md:items-center md:gap-1",children:Jp.map(a=>a.to?f.jsx(sn,{to:a.to,className:`navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-accent ${s===a.to?"navbar-link-active text-accent":""}`,children:a.label},a.label):f.jsx("a",{href:a.href,className:"navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-accent",children:a.label},a.label))}),f.jsx("div",{className:`absolute left-0 right-0 top-full border-b border-pink-100 bg-white shadow-lg md:hidden ${r?"block":"hidden"}`,children:f.jsx("div",{className:"flex flex-col px-4 py-4",children:Jp.map(a=>a.to?f.jsx(sn,{to:a.to,className:`navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-accent ${s===a.to?"navbar-link-active text-accent":""}`,onClick:()=>e(!1),children:a.label},a.label):f.jsx("a",{href:a.href,className:"navbar-link rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-accent",onClick:()=>e(!1),children:a.label},a.label))})})]})})}function Jw(){return f.jsx("footer",{id:"about",className:"bg-gray-900 text-gray-300",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"grid gap-10 lg:grid-cols-3",children:[f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("img",{src:Fg,alt:"EL Glamorous Face and Body Clinic, Salon and Spa",className:"h-10 w-10 rounded-full object-cover"}),f.jsx("span",{className:"text-sm font-semibold text-accent",children:"About Us"})]}),f.jsx("h3",{className:"text-base font-semibold text-white",children:"EL Glamorous Face and Body Clinic, Salon and Spa"}),f.jsx("p",{className:"max-w-md text-sm text-gray-300",children:"We provide professional salon services with a focus on beauty, relaxation, and customer satisfaction."})]}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-sm font-semibold uppercase tracking-wide text-white",children:"Operating Hours"}),f.jsxs("ul",{className:"mt-3 space-y-1 text-sm",children:[f.jsx("li",{className:"text-gray-300",children:"Monday to Sunday"}),f.jsx("li",{className:"font-semibold text-gray-100",children:"10:00 AM – 8:00 PM"})]})]}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-sm font-semibold uppercase tracking-wide text-white",children:"Follow Us"}),f.jsx("p",{className:"mt-2 text-sm text-gray-300",children:"Stay connected for updates, promos, and glam transformations."}),f.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-4",children:[f.jsxs("a",{href:"https://www.facebook.com/el.glamorousofficialpage",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10",children:[f.jsx(Uw,{className:"h-4 w-4 text-[#1877F2]","aria-hidden":!0}),f.jsx("span",{className:"sr-only",children:"Facebook"})]}),f.jsxs("a",{href:"https://www.instagram.com/elglammainbranch?igsh=Z3kxdHc3OG1raDgz&utm_source=qr",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10",children:[f.jsx(Bw,{className:"h-4 w-4 text-pink-400","aria-hidden":!0}),f.jsx("span",{className:"sr-only",children:"Instagram"})]}),f.jsxs("a",{href:"https://www.tiktok.com/@elglamteamph?_r=1&_t=ZS-94eH7Vegoqa",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-white/10",children:[f.jsx(Hw,{className:"h-4 w-4 text-white","aria-hidden":!0}),f.jsx("span",{className:"sr-only",children:"TikTok"})]})]})]})]}),f.jsxs("div",{className:"mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500",children:["© ",new Date().getFullYear()," EL Glamorous Face and Body Clinic, Salon and Spa. All rights reserved."]})]})})}function Xw(){return f.jsxs("section",{className:"relative min-h-[85vh] w-full overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-black/40"}),f.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(236,72,153,0.28),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(147,51,234,0.24),transparent_40%)]"}),f.jsx("div",{className:"relative flex min-h-[85vh] items-center justify-center px-4 py-16 text-white sm:px-6 lg:px-8",children:f.jsxs("div",{className:"w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 px-6 py-10 text-center shadow-2xl backdrop-blur-md sm:px-10 sm:py-12",children:[f.jsx("span",{className:"inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-pink-100",children:"Premium Beauty Experience"}),f.jsx("h1",{className:"mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",children:"Transform Your Look"}),f.jsx("p",{className:"mx-auto mt-4 max-w-2xl text-base text-gray-100 sm:text-lg md:text-xl",children:"Experience luxury hair and beauty services with our expert team in a relaxing, elegant space."}),f.jsxs("div",{className:"mt-9 flex flex-wrap items-center justify-center gap-4",children:[f.jsxs(sn,{to:"/book",className:"inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:from-pink-600 hover:to-rose-600 hover:shadow-xl",children:[f.jsx(Vu,{className:"h-5 w-5","aria-hidden":!0}),"Book Appointment"]}),f.jsxs("a",{href:"#services",className:"inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-900",children:[f.jsx(zw,{className:"h-5 w-5","aria-hidden":!0}),"View Services"]})]})]})})]})}const Zw=[{icon:qu,title:"Expert Stylists",description:"Our team of certified professionals with years of experience."},{icon:Lr,title:"Premium Products",description:"We use only the highest quality hair care products."},{icon:Mg,title:"Flexible Booking",description:"Easy online booking with flexible scheduling options."}];function eS(){return f.jsx("section",{className:"bg-transparent py-16 sm:py-20 lg:py-24",children:f.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:f.jsx("div",{className:"grid gap-10 sm:grid-cols-2 lg:grid-cols-3",children:Zw.map(({icon:r,title:e,description:n})=>f.jsxs("div",{className:"flex flex-col items-center rounded-2xl border border-white/20 bg-white/75 p-6 text-center shadow-md backdrop-blur-sm transition hover:scale-[1.02]",children:[f.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 text-accent",children:f.jsx(r,{className:"h-8 w-8",strokeWidth:1.5,"aria-hidden":!0})}),f.jsx("h3",{className:"mt-4 text-xl font-semibold text-gray-900",children:e}),f.jsx("p",{className:"mt-2 max-w-sm text-gray-600",children:n})]},e))})})})}const tS=[{subcategory:"Facial Treatments",services:[{name:"Signature Facial",price:"₱399"},{name:"Facial with Diamond Peel",price:"₱499"},{name:"Facial Combo",price:"₱599"},{name:"Facial Botox",price:"₱699"},{name:"Acne Control Treatment",price:"₱899"},{name:"Backcial",price:"₱999"},{name:"Melasma Care Treatment",price:"₱2,499"},{name:"Korean BB Glow",price:"₱1,299"},{name:"Hydra-Facial Treatment",price:"₱999"},{name:"Carbon Laser Facial",price:"₱999"}]},{subcategory:"Warts Removal",services:[{name:"Unlimited Face Area",price:"₱799"},{name:"Unlimited Neck Area",price:"₱799"},{name:"Unlimited Face & Neck Area",price:"₱1,499"}]},{subcategory:"Eyelash Care",services:[{name:"Eyelash Lifting",price:"₱499"},{name:"Eyelash Lifting with Tint",price:"₱599"}]},{subcategory:"Eyelash Extensions",services:[{name:"Synthetic Eyelashes",price:"₱599"},{name:"Regular Human Hair",price:"₱799"},{name:"Ultrasoft Human Hair",price:"₱899"}]},{subcategory:"Semi-Permanent Makeup",services:[{name:"Micro-Shading",price:"₱2,499 (1 Session) / ₱3,999 (2 Sessions)"},{name:"Eyeliner",price:"₱2,499 / ₱3,999"},{name:"Lip Tattoo",price:"₱2,499 / ₱3,999"}]},{subcategory:"Eyebrow Care",services:[{name:"Brow Lamination",price:"₱399"},{name:"Brow Lamination with Tint",price:"₱449"}]},{subcategory:"Waxing / Threading",services:[{name:"Eyebrows Threading",price:"₱120"},{name:"Eyebrows Waxing",price:"₱149"},{name:"Upper Mouth",price:"₱149"},{name:"Lower Mouth",price:"₱149"},{name:"Underarms",price:"₱199"},{name:"Brazilian/Bikini Line",price:"₱699"}]},{subcategory:"Permanent Hair Removal",services:[{name:"Underarm Hair Removal",price:"₱699"},{name:"Underarm Whitening",price:"₱699"},{name:"Underarm Removal & Whitening",price:"₱1,099"},{name:"Lower/Upper Mouth",price:"₱399"},{name:"Lower & Upper Mouth Combo",price:"₱599"},{name:"Arms",price:"₱399 – ₱799"},{name:"Legs",price:"₱599 – ₱999"},{name:"Brazilian/Bikini Line",price:"₱999"},{name:"Pigmentation Laser",price:"₱899"},{name:"Acne/Skin Rejuvenating Laser",price:"₱899"}]}],nS=[{subcategory:"Men",services:[{name:"Haircut",price:"₱150"},{name:"Haircut with Shampoo",price:"₱250"},{name:"Haircut with Color",price:"₱1,000"}]},{subcategory:"Women",services:[{name:"Haircut",price:"₱250"},{name:"Haircut with Shampoo",price:"₱350"},{name:"Hair Iron/Blowdry",price:"₱350"}]},{subcategory:"Special Treatments",services:[{name:"Loreal Power Dose",price:"₱1,500"},{name:"Plarmia Scalp Treatment",price:"₱1,500"},{name:"Grand Linkage",price:"₱2,000"},{name:"Hair Cellophane",price:"₱800"}]},{subcategory:"Hair Color",services:[{name:"Hair Color with Treatment",price:"₱1,500"},{name:"Hair Color, Highlights, Treatment",price:"₱2,500"},{name:"Hair Balayage",price:"₱3,000 (starting price)"}]},{subcategory:"Rebonding",services:[{name:"Regular Hair Rebond",price:"₱1,500"},{name:"Premium Hair Rebond",price:"₱3,000"}]},{subcategory:"Brazilian Treatment",services:[{name:"Brazilian Treatment",price:"₱1,500"},{name:"Brazilian Treatment + Hair Color",price:"₱2,500"},{name:"Brazilian Treatment + Hair Rebond",price:"₱2,500"}]},{subcategory:"Hair Combos",services:[{name:"Hair Color + Rebond + Brazilian",price:"₱3,000"},{name:"Highlights + Color + Rebond + Brazilian",price:"₱3,500"}]},{subcategory:"Hair & Makeup",services:[{name:"Hairdo/Styling",price:"₱500"},{name:"Make Up",price:"₱500"},{name:"Hair & Make Up",price:"₱800"}]}],rS=[{subcategory:"Massage",services:[{name:"Full Body Massage (60 mins)",price:"₱599"},{name:"Full Body Massage (30 mins)",price:"₱399"},{name:"Foot Massage (60 mins)",price:"₱349"},{name:"Foot Massage (30 mins)",price:"₱249"},{name:"Ventosa Cupping",price:"₱699"}]},{subcategory:"Body Care",services:[{name:"Body Scrub & Whitening",price:"₱999"},{name:"Underarm Whitening",price:"₱499"},{name:"Underarm Premium Glow",price:"₱899"},{name:"Butt/Bikini Line Whitening",price:"₱599"},{name:"Bikini Premium Glow",price:"₱1,199"},{name:"Elbows/Knees Whitening",price:"₱499"}]},{subcategory:"Facial & Body Slimming",services:[{name:"RF Facial Contour",price:"₱349"},{name:"RF with Cavitation",price:"₱599"},{name:"RF Arms/Tummy/Back",price:"₱1,499"},{name:"Mesotherapy with FREE RF",price:"₱999"},{name:"Ultherapy (Face Area)",price:"₱3,999"},{name:"Ultherapy (Other Areas)",price:"₱5,999"},{name:"Trio Slim",price:"₱999"}]},{subcategory:"Nail Care - Regular Polish",services:[{name:"Manicure",price:"₱150"},{name:"Pedicure with Soaking",price:"₱200"},{name:"Pedicure with Footspa",price:"₱450"}]},{subcategory:"Nail Care - Imported Polish",services:[{name:"Manicure",price:"₱230"},{name:"Pedicure with Soaking",price:"₱300"},{name:"Pedicure with Footspa",price:"₱550"}]},{subcategory:"Nail Care - Gel Polish",services:[{name:"Manicure",price:"₱550"},{name:"Pedicure with Soaking",price:"₱600"},{name:"Pedicure with Footspa",price:"₱750"},{name:"Foot Spa Alone",price:"₱350"}]},{subcategory:"Nail Extensions",services:[{name:"Imported Extensions",price:"₱1,599"},{name:"Soft Gel Extensions",price:"₱1,299"}]},{subcategory:"Others",services:[{name:"Additional Nail Art",price:"₱350"},{name:"Stones",price:"₱10"}]},{subcategory:"Gluta Push & Drip",services:[{name:"Vitamin C Shot",price:"₱199"},{name:"Collagen Shot",price:"₱380"},{name:"Stem Cell",price:"₱380"},{name:"Gluta I.V. Push",price:"₱380"},{name:"Placenta",price:"₱499"},{name:"Glamorous White Shot",price:"₱599"},{name:"Express White Drip",price:"₱999"},{name:"Snow White Drip",price:"₱1,699"},{name:"Cinderella Drip",price:"₱1,799"},{name:"Hikari Drip",price:"₱1,799"}]}],pi=[{id:"face",title:"Face & Beauty",data:tS},{id:"hair",title:"Hair Care",data:nS},{id:"body",title:"Body Wellness",data:rS}],Xp=[{id:"mandaue",name:"Mandaue City Branch"},{id:"pajac",name:"Pajac Branch"},{id:"pusok",name:"Pusok Branch"},{id:"cebu",name:"Cebu City Branch"}],mu={mandaue:[{name:"Dela Torre, Imae Rose",role:"Nail Technician",specialty:"Nailtech"},{name:"Yekla, Sanny Grace",role:"Facialist / Massage Therapist"},{name:"Davis, Rosegina",role:"Hair and Nail Technician"},{name:"Momo, Ruthamie",role:"Hair and Nail Technician"},{name:"Yaon, Jenipher",role:"Senior Hairdresser"}],pajac:[{name:"Arnado, Buenafe",role:"Nail Technician"},{name:"Omac, Elvira",role:"Nail Technician"},{name:"Belarmino, Mattlaine Clyrr",role:"Facialist"},{name:"Entig, Jenalyn",role:"Nail Technician"},{name:"Gloria, Francisco",role:"Barber"},{name:"Demape, Keyn Joshua",role:"Barber"}],pusok:[{name:"Abadajos, Julie Ann",role:"Facialist"},{name:"Pedor, Rowena",role:"Nail Technician"},{name:"Dimco, Janeth",role:"Hairdresser"}],cebu:[{name:"Macatanong, Jessica",role:"Nail Technician"},{name:"Tallo, Lucille",role:"Hairdresser"},{name:"Cañizares, Rubelyn",role:"Facialist"},{name:"Cabreles, Jennifer",role:"Nail Technician"},{name:"Dela Torre, Jeanny",role:"Facialist"}]},iS=r=>{if(!r)return 0;let e=r.replace(/[₱,]/g,"");return e.includes("–")?Number(e.split("–")[0]):e.includes("/")?Number(e.split("/")[0]):Number(e)||0},sS={massage:["massage","ventosa","cupping"],gluta:["gluta","inject","drip","shot","vitamin c","collagen","placenta","stem cell"]},oS=({name:r,subcategory:e=""})=>{const n=`${r} ${e}`.toLowerCase();return Object.entries(sS).filter(([s,a])=>a.some(c=>n.includes(c))).map(([s])=>s)},Zp=pi.flatMap(r=>r.data.flatMap((e,n)=>e.services.map((s,a)=>({id:`${r.id}-${n}-${a}`,label:s.name,kind:"service",basePrice:iS(s.price),tags:oS({name:s.name,subcategory:e.subcategory})})))),aS=({item:r})=>{const e=Array.isArray(r==null?void 0:r.tags)?r.tags:[];return e.includes("massage")?.4:e.includes("gluta")?.1:.05};function lS({image:r,imageAlt:e,icon:n,title:s,description:a,price:c,duration:d,ctaLabel:p="Book This Service",onCtaClick:m}){return f.jsxs("article",{className:"service-card group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl",children:[f.jsxs("div",{className:"relative aspect-[4/3] w-full overflow-hidden bg-gray-200",children:[f.jsx("div",{className:"service-card-shine pointer-events-none absolute inset-0 z-10"}),f.jsx("img",{src:r,alt:e,className:"service-card-image h-full w-full object-cover"})]}),f.jsxs("div",{className:"service-card-body flex flex-1 flex-col p-6",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[n&&f.jsx(n,{className:"service-card-icon h-5 w-5 shrink-0 text-accent","aria-hidden":!0}),f.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:s})]}),f.jsx("p",{className:"mt-2 flex-1 text-gray-600",children:a}),f.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[f.jsx("span",{className:"text-lg font-semibold text-accent",children:c}),f.jsxs("span",{className:"flex items-center gap-1 text-sm text-gray-500",children:[f.jsx(Mg,{className:"h-4 w-4","aria-hidden":!0}),d]})]}),f.jsx("button",{type:"button",onClick:m,className:"service-card-cta mt-4 w-full rounded-lg bg-accent py-3 text-center font-medium text-white transition hover:bg-accent-dark",children:f.jsxs("span",{className:"inline-flex items-center gap-2",children:[p,f.jsx("span",{className:"service-card-cta-arrow","aria-hidden":!0,children:"→"})]})})]})]})}const cS={face:{image:"https://media.istockphoto.com/id/1399469980/photo/close-up-portrait-of-anorganic-facial-mask-application-at-spa-salon-facial-treatment-skin.jpg?s=612x612&w=0&k=20&c=ZvZi_bdGLicsykUtlrHgQe70ftZzd_xPKvq2vzfOyV0=",icon:Lr,description:"Facial treatments, lashes, semi-permanent makeup, and advanced skin care."},hair:{image:"https://media.istockphoto.com/id/1138252695/photo/woman-at-hair-salon.jpg?s=612x612&w=0&k=20&c=VfottXG-WF8Lr9o6zdgbU1bbZp0OcHdzdmz8j6LcaIU=",icon:Dg,description:"Cuts, color, treatments, rebonding, Brazilian, and event-ready hair styling."},body:{image:"https://images.squarespace-cdn.com/content/v1/553640b0e4b06779e02ce9a6/d40a9cfb-09b9-4437-863e-de47c6274efa/unnamed-2.webp",icon:ja,description:"Massages, body care, slimming, nail services, and wellness drips."}};function uS(){const[r,e]=M.useState("hair"),[n,s]=M.useState(null),[a,c]=M.useState(!1),d=pi.find(m=>m.id===r),p=m=>{s(y=>y===m?null:m)};return f.jsx("section",{id:"services",className:"scroll-mt-24 bg-transparent py-16 sm:py-20 lg:py-24",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("h2",{className:"text-3xl font-bold text-white sm:text-4xl",children:"Our Services"}),f.jsx("p",{className:"mx-auto mt-3 max-w-2xl text-white/95",children:"Explore our main service categories, then browse detailed offerings by branch and subcategory."})]}),f.jsx("div",{className:"mt-12 grid gap-8 md:grid-cols-3",children:pi.map(m=>{const y=cS[m.id];if(!y)return null;const x=y.icon,v=r===m.id;return f.jsx("div",{className:`service-animate-card rounded-2xl transition ${v?"scale-[1.01] ring-2 ring-accent shadow-xl":""}`,style:{animationDelay:`${pi.indexOf(m)*120}ms`},children:f.jsx(lS,{image:y.image,imageAlt:m.title,icon:x,title:m.title,description:y.description,price:"See branch rates",duration:"Multi-option",ctaLabel:"View services we offer",onCtaClick:()=>{e(m.id),s(null),c(!0)}})},m.id)})}),a&&d&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8",children:f.jsxs("div",{className:"relative max-h-[100vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl",children:[f.jsxs("div",{className:"flex items-start justify-between border-b border-gray-100 px-6 py-4 sm:px-8",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"mt-1 text-xl font-semibold text-gray-900 sm:text-2xl",children:d.title}),f.jsx("p",{className:"mt-1 text-xs text-gray-600 sm:text-sm",children:"Expand a section to see the services included in this category."})]}),f.jsx("button",{type:"button",onClick:()=>c(!1),className:"ml-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200",children:"Close"})]}),f.jsx("div",{className:"max-h-[60vh] space-y-4 overflow-y-auto px-6 py-4 sm:px-8",children:d.data.map(m=>{const y=n===m.subcategory;return f.jsxs("div",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-gray-50",children:[f.jsxs("button",{type:"button",onClick:()=>p(m.subcategory),className:"flex w-full items-center justify-between px-5 py-3 text-left transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset",children:[f.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-gray-800 sm:text-sm",children:m.subcategory}),f.jsx("span",{className:"text-[11px] text-gray-500",children:y?"Hide services":"View services"})]}),y&&f.jsx("div",{className:"border-t border-gray-200 bg-white px-5 pb-4 pt-2",children:f.jsx("ul",{className:"space-y-2 text-xs sm:text-sm",children:m.services.map(x=>f.jsxs("li",{className:"flex flex-col gap-2 rounded-xl bg-gray-50 px-3 py-2 sm:flex-row sm:items-center sm:justify-between",children:[f.jsx("div",{className:"min-w-0 flex-1",children:f.jsx("p",{className:"font-medium text-gray-900",children:x.name})}),f.jsx("span",{className:"mt-1 text-right text-accent font-semibold sm:mt-0",children:x.price})]},`${m.subcategory}-${x.name}`))})})]},m.subcategory)})})]})})]})})}const dS=[{quote:"Good services and quality products. Recommendable👍👍👍",author:"Elwisa Ano-os Caraballe",subtitle:"Customer at Mandaue City Branch"},{quote:"Absolutely! Staffs are friendly, quality service and it was a great pamper time for me! Will surely come back! 🩷",author:"Zheil Natali",subtitle:"Customer at Cebu City Branch"},{quote:"El Glamorous is a must-visit for anyone seeking a luxurious and enjoyable experience. The combination of stunning ambiance and exceptional customer service.",author:"Primerose Residences",subtitle:"Client from Pusok"}];function hS(){return f.jsx("section",{className:"bg-transparent py-16 sm:py-20 lg:py-24",children:f.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:f.jsxs("div",{className:"testimonials-shell rounded-3xl border border-white/30 p-8 shadow-xl backdrop-blur-md sm:p-10",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.16em] text-pink-600",children:"What clients say"}),f.jsx("h2",{className:"mt-2 text-2xl font-bold text-gray-900 sm:text-3xl",children:"Loved by our guests"}),f.jsx("p",{className:"mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base",children:"Real stories from clients who trust EL Glamorous for beauty, wellness, and premium care."})]}),f.jsx("div",{className:"mt-8 grid gap-5 md:grid-cols-3",children:dS.map((r,e)=>f.jsxs("blockquote",{className:"testimonial-card relative rounded-2xl border border-pink-100 bg-white p-5 text-sm text-gray-700 shadow-md",style:{animationDelay:`${e*120}ms`},children:[f.jsx($w,{className:"h-5 w-5 text-pink-400","aria-hidden":!0}),f.jsx("div",{className:"mt-3 flex gap-1 text-pink-500",children:[...Array(5)].map((n,s)=>f.jsx(qu,{className:"h-4 w-4 fill-current","aria-hidden":!0},s))}),f.jsxs("p",{className:"mt-3 leading-7",children:['"',r.quote,'"']}),f.jsxs("span",{className:"mt-4 block text-xs font-semibold uppercase tracking-wide text-gray-500",children:["— ",r.author,", ",r.subtitle]})]},r.author))})]})})})}function fS(){return f.jsxs("main",{className:"relative overflow-hidden",children:[f.jsx("div",{className:"pointer-events-none absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat",style:{backgroundImage:"url('elglam.jpg')"}}),f.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/35"}),f.jsxs("div",{className:"relative",children:[f.jsx(Xw,{}),f.jsx(eS,{}),f.jsx(uS,{}),f.jsx(hS,{})]})]})}const pS=[{name:"Acne Set",description:"Facial Care Product",price:799,image:"https://unsplash.com/photos/product-lot-deuGLZjp28M"},{name:"Whitening Set",description:"Facial Care Product",price:699,image:"https://images.unsplash.com/photo-1612810432633-96f64dc8ccb6?w=600&q=80"},{name:"Underarm Whitening Deo Cream",description:"Body Care Product",price:300,image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"},{name:"Sunblock Cream SPF50",description:"Facial Care Product",price:250,image:"https://images.unsplash.com/photo-1600433214751-9aa7f7b4c07a?w=600&q=80"},{name:"Sunblock Cream SPF110",description:"Facial Care Product",price:380,image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"},{name:"Vitamin C & E Serum",description:"Facial Care Product",price:350,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Collagen Serum",description:"Facial Care Product",price:380,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Hyaluronic Serum",description:"Facial Care Product",price:380,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Acne Cream",description:"Facial Care Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Warts Cream",description:"Face & Body Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Anti-Irritation Cream",description:"Face & Body Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Kojic Soap",description:"Face & Body Product",price:200,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Acne Soap",description:"Face & Body Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Whitening Soap",description:"Face & Body Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Toners",description:"Facial Care Product",price:250,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"EL Beauty Shine On Hair Serum",description:"Hair Care Product",price:300,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"EL Beauty Argan Oil Hair Mask",description:"Hair Care Product",price:850,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Deorebiss Shampoo & Conditioner",description:"Hair Care Product",price:1500,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Deorebiss Shampoo",description:"Hair Care Product",price:800,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Deorebiss Conditioner",description:"Hair Care Product",price:800,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Hair Curling Cream",description:"Hair Care Product",price:500,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"},{name:"Color Gadget Shampoo",description:"Hair Care Product",price:1100,image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80"}];function nn(r){return`₱${r.toLocaleString("en-PH")}`}function mS({onAddToCart:r,cartItems:e=[]}){return f.jsx("section",{id:"products",className:"scroll-mt-24 bg-[#f4f5f7] pt-6 pb-10 sm:pt-8 sm:pb-12",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("h2",{className:"text-3xl font-bold text-gray-900 sm:text-4xl",children:"Our Products"}),f.jsx("p",{className:"mx-auto mt-3 max-w-2xl text-gray-600",children:"Take the salon experience home with our curated selection of hair, skin, and body care products."})]}),f.jsx("div",{className:"mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",children:pS.map(n=>f.jsxs("article",{className:"flex h-full flex-col rounded-3xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md",children:[f.jsxs("div",{className:"relative flex-1 overflow-hidden rounded-t-3xl bg-[#f9737a]",children:[f.jsx("img",{src:n.image,alt:n.name,className:"h-32 w-full object-cover sm:h-40"}),e.length>0&&(()=>{var a;const s=((a=e.find(c=>c.name===n.name))==null?void 0:a.quantity)||0;return s?f.jsxs("span",{className:"absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white",children:["In cart: ",s]}):null})()]}),f.jsxs("div",{className:"flex flex-col rounded-b-3xl bg-[#fee2e2] px-4 pb-4 pt-3",children:[f.jsx("h3",{className:"text-sm font-semibold text-gray-900 sm:text-base",children:n.name}),f.jsx("p",{className:"mt-1 text-xs text-gray-600 line-clamp-3",children:n.description}),f.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3",children:[f.jsx("span",{className:"text-accent text-sm font-semibold sm:text-base",children:nn(n.price)}),r&&f.jsx("button",{type:"button",onClick:()=>r(n),className:"rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-accent-dark",children:"Add to Cart"})]})]})]},n.name))})]})})}function gS(){const[r,e]=M.useState([]),[n,s]=M.useState("cart"),[a,c]=M.useState(!1),[d,p]=M.useState(""),[m,y]=M.useState(""),[x,v]=M.useState(""),[C,T]=M.useState(""),[j,A]=M.useState(""),[R,U]=M.useState(null),q=I=>{e(k=>k.find(Y=>Y.name===I.name)?k.map(Y=>Y.name===I.name?{...Y,quantity:Y.quantity+1}:Y):[...k,{...I,quantity:1}])},K=(I,k)=>{e(P=>P.map(Y=>Y.name===I?{...Y,quantity:Math.max(1,Y.quantity+k)}:Y).filter(Y=>Y.quantity>0))},re=I=>{e(k=>k.filter(P=>P.name!==I))},ne=M.useMemo(()=>({subtotal:r.reduce((k,P)=>k+P.price*P.quantity,0)}),[r]),Z=r.reduce((I,k)=>I+k.quantity,0),Ae=()=>c(!1);M.useEffect(()=>{if(a){const I=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=I}}},[a]);const pe="4.5rem",wt=n!=="cart",St=r.length>0,ht=r.length>0,We=m.replace(/\D/g,"").length===11,Ye=d.trim().length>=3&&We&&!!C&&(C!=="cod"||x.trim().length>=5),ot=C==="cod",je=j==="bank"?{label:"Bank Transfer",name:"EL Glamorous Beauty Center",number:"0123-4567-8901"}:j==="gcash"?{label:"GCash",name:"EL Glamorous Beauty Center",number:"0917-123-4567"}:null,_e=[{key:"cart",label:"Step 1: Cart"},{key:"checkout",label:"Step 2: Checkout"},{key:"details",label:"Step 3: Details"},{key:C==="pickup"?"pickup-confirmation":"payment",label:C==="pickup"?"Step 4: Pickup Confirmation":"Step 4: Payment"},{key:"final-confirmation",label:"Step 5: Confirmation"}],z=M.useMemo(()=>{const I=_e.findIndex(k=>k.key===n);return I===-1?0:I},[n,_e]),X=()=>{s("cart"),c(!1),p(""),y(""),v(""),T(""),A(""),U(null),e([])};return f.jsxs("main",{className:"relative z-0 bg-[#fff5f8] pt-6 pb-8 sm:pt-8 sm:pb-10",children:[f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("section",{className:"mb-5 rounded-2xl border border-pink-100 bg-white/95 p-4 shadow-sm sm:p-5",children:[f.jsx("h1",{className:"text-xl font-bold text-rose-600 sm:text-2xl",children:"EL Glamorous Product Ordering"}),f.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Seamless shopping flow: Cart, Checkout, Details, Payment, and Confirmation."}),f.jsx("div",{className:"mt-4 grid gap-2 sm:grid-cols-5",children:_e.map((I,k)=>{const P=k===z,Y=k<z;return f.jsx("div",{className:`rounded-lg border px-3 py-2 text-xs font-medium sm:text-sm ${P?"border-rose-300 bg-rose-50 text-rose-700":Y?"border-pink-200 bg-pink-50 text-pink-700":"border-gray-200 bg-white text-gray-500"}`,children:I.label},I.key)})})]}),f.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-pink-100 bg-[#fff5f8] pb-4 pt-0",children:[f.jsxs("p",{className:"text-sm text-gray-600 sm:text-base",children:[f.jsx("span",{className:"font-semibold text-gray-900",children:"Our Products"})," ",f.jsx("span",{className:"mx-1.5 text-gray-400",children:"•"})," ",f.jsx("span",{className:"text-gray-500",children:"Add items to cart, then follow each checkout step."})]}),f.jsxs("button",{type:"button",onClick:()=>c(!0),className:"relative flex shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition hover:border-accent hover:bg-accent-light hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2","aria-label":"Open cart",children:[f.jsx(Vw,{className:"h-5 w-5 sm:h-6 sm:w-6"}),Z>0&&f.jsx("span",{className:"absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-semibold text-white shadow",children:Z})]})]}),f.jsx(mS,{onAddToCart:q,cartItems:r}),wt&&f.jsxs("section",{className:"mt-8 space-y-5",children:[n==="checkout"&&f.jsxs("div",{className:"rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6",children:[f.jsx("h2",{className:"text-lg font-semibold text-gray-900 sm:text-xl",children:"Checkout Summary"}),f.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Review your items before confirming your order."}),f.jsx("div",{className:"mt-4 space-y-2",children:r.map(I=>f.jsxs("div",{className:"flex items-center justify-between rounded-xl border border-pink-100 bg-pink-50/40 p-3",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-medium text-gray-900",children:I.name}),f.jsxs("p",{className:"text-xs text-gray-600",children:["Qty: ",I.quantity]})]}),f.jsx("p",{className:"font-semibold text-rose-600",children:nn(I.price*I.quantity)})]},I.name))}),f.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-pink-100 pt-4",children:[f.jsx("p",{className:"text-sm text-gray-700",children:"Total Amount"}),f.jsx("p",{className:"text-lg font-bold text-rose-600",children:nn(ne.subtotal)})]}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[f.jsx("button",{type:"button",className:"rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50",onClick:()=>s("cart"),children:"Back to Cart"}),f.jsx("button",{type:"button",disabled:!ht,className:"rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-gray-300",onClick:()=>s("details"),children:"Confirm Order"})]})]}),n==="details"&&f.jsxs("div",{className:"rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6",children:[f.jsx("h2",{className:"text-lg font-semibold text-gray-900 sm:text-xl",children:"Fill-Up Details"}),f.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Enter your details and choose your preferred fulfillment method."}),f.jsxs("div",{className:"mt-4 grid gap-4 sm:grid-cols-2",children:[f.jsxs("label",{className:"flex flex-col gap-1 text-sm",children:[f.jsx("span",{className:"font-medium text-gray-700",children:"Full Name"}),f.jsx("input",{type:"text",value:d,onChange:I=>p(I.target.value),placeholder:"Enter your full name",className:"rounded-lg border border-gray-300 px-3 py-2 outline-none ring-rose-300 transition focus:border-rose-400 focus:ring-2"})]}),f.jsxs("label",{className:"flex flex-col gap-1 text-sm",children:[f.jsx("span",{className:"font-medium text-gray-700",children:"Phone Number"}),f.jsx("input",{type:"tel",value:m,onChange:I=>y(I.target.value),placeholder:"09XXXXXXXXX",className:"rounded-lg border border-gray-300 px-3 py-2 outline-none ring-rose-300 transition focus:border-rose-400 focus:ring-2"}),f.jsx("span",{className:`text-xs ${We||!m?"text-gray-500":"text-red-500"}`,children:"Phone number must be exactly 11 digits."})]})]}),f.jsxs("div",{className:"mt-5",children:[f.jsx("p",{className:"mb-2 text-sm font-medium text-gray-700",children:"Choose Fulfillment Method"}),f.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[f.jsxs("button",{type:"button",className:`rounded-xl border p-3 text-left transition ${C==="pickup"?"border-rose-300 bg-rose-50":"border-gray-200 bg-white hover:border-rose-200"}`,onClick:()=>{T("pickup"),A(""),U(null),v("")},children:[f.jsx("p",{className:"font-semibold text-gray-900",children:"In-Store Pickup"}),f.jsx("p",{className:"text-xs text-gray-600",children:"Pay at store and pick up your products."})]}),f.jsxs("button",{type:"button",className:`rounded-xl border p-3 text-left transition ${C==="cod"?"border-rose-300 bg-rose-50":"border-gray-200 bg-white hover:border-rose-200"}`,onClick:()=>T("cod"),children:[f.jsx("p",{className:"font-semibold text-gray-900",children:"Cash on Delivery (COD)"}),f.jsx("p",{className:"text-xs text-gray-600",children:"Proceed to digital payment options."})]})]})]}),C==="cod"&&f.jsx("div",{className:"mt-4",children:f.jsxs("label",{className:"flex flex-col gap-1 text-sm",children:[f.jsx("span",{className:"font-medium text-gray-700",children:"Address"}),f.jsx("textarea",{value:x,onChange:I=>v(I.target.value),placeholder:"House no., street, barangay, city, province",rows:3,className:"rounded-lg border border-gray-300 px-3 py-2 outline-none ring-rose-300 transition focus:border-rose-400 focus:ring-2"}),f.jsx("span",{className:"text-xs text-gray-500",children:"Required for COD delivery."})]})}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[f.jsx("button",{type:"button",className:"rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50",onClick:()=>s("checkout"),children:"Back"}),f.jsx("button",{type:"button",disabled:!Ye,className:"rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-gray-300",onClick:()=>s(ot?"payment":"pickup-confirmation"),children:"Continue"})]})]}),n==="pickup-confirmation"&&f.jsxs("div",{className:"rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6",children:[f.jsx("h2",{className:"text-lg font-semibold text-gray-900 sm:text-xl",children:"Pickup Confirmation"}),f.jsx("p",{className:"mt-2 rounded-lg bg-pink-50 p-3 text-sm text-pink-700",children:"Your order is confirmed. Please proceed to the store to pay and pick up your order."}),f.jsxs("div",{className:"mt-4 rounded-xl border border-pink-100 bg-pink-50/40 p-4",children:[f.jsx("p",{className:"font-medium text-gray-900",children:"Order Summary"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-gray-700",children:r.map(I=>f.jsxs("li",{children:[I.name," x ",I.quantity," - ",nn(I.price*I.quantity)]},I.name))}),f.jsxs("p",{className:"mt-3 font-semibold text-rose-600",children:["Total: ",nn(ne.subtotal)]})]}),f.jsxs("div",{className:"mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700",children:[f.jsx("p",{className:"font-medium text-gray-900",children:"Pickup Instructions"}),f.jsx("p",{className:"mt-1",children:"Bring a valid ID and your registered phone number. Tell the staff your name for order verification."})]}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[f.jsx("button",{type:"button",className:"rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50",onClick:()=>s("details"),children:"Back"}),f.jsx("button",{type:"button",className:"rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600",onClick:()=>s("final-confirmation"),children:"Done"})]})]}),n==="payment"&&f.jsxs("div",{className:"rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6",children:[f.jsx("h2",{className:"text-lg font-semibold text-gray-900 sm:text-xl",children:"Payment Options"}),f.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Choose either Bank Transfer or GCash, then confirm your payment."}),f.jsxs("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[f.jsxs("button",{type:"button",className:`rounded-xl border p-3 text-left transition ${j==="bank"?"border-rose-300 bg-rose-50":"border-gray-200 bg-white hover:border-rose-200"}`,onClick:()=>A("bank"),children:[f.jsx("p",{className:"font-semibold text-gray-900",children:"Bank Transfer"}),f.jsx("p",{className:"text-xs text-gray-600",children:"Transfer to EL Glamorous bank account."})]}),f.jsxs("button",{type:"button",className:`rounded-xl border p-3 text-left transition ${j==="gcash"?"border-rose-300 bg-rose-50":"border-gray-200 bg-white hover:border-rose-200"}`,onClick:()=>A("gcash"),children:[f.jsx("p",{className:"font-semibold text-gray-900",children:"GCash"}),f.jsx("p",{className:"text-xs text-gray-600",children:"Pay to EL Glamorous GCash number."})]})]}),je&&f.jsxs("div",{className:"mt-4 rounded-xl border border-pink-100 bg-pink-50/50 p-4",children:[f.jsxs("p",{className:"text-sm font-semibold text-gray-900",children:[je.label," Details"]}),f.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["Account Name: ",f.jsx("span",{className:"font-medium",children:je.name})]}),f.jsxs("p",{className:"text-sm text-gray-700",children:[j==="bank"?"Account Number":"GCash Number",":"," ",f.jsx("span",{className:"font-medium",children:je.number})]}),f.jsxs("label",{className:"mt-3 flex flex-col gap-1 text-sm",children:[f.jsx("span",{className:"font-medium text-gray-700",children:"Upload proof of payment (optional)"}),f.jsx("input",{type:"file",onChange:I=>{var k;return U(((k=I.target.files)==null?void 0:k[0])??null)},className:"rounded-lg border border-gray-300 bg-white px-3 py-2"}),R&&f.jsxs("span",{className:"text-xs text-gray-600",children:["Selected: ",R.name]})]})]}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[f.jsx("button",{type:"button",className:"rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50",onClick:()=>s("details"),children:"Back"}),f.jsx("button",{type:"button",disabled:!j,className:"rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-gray-300",onClick:()=>s("final-confirmation"),children:"Confirm Payment"})]})]}),n==="final-confirmation"&&f.jsxs("div",{className:"rounded-2xl border border-pink-100 bg-white p-4 shadow-sm sm:p-6",children:[f.jsx("h2",{className:"text-lg font-semibold text-green-700 sm:text-xl",children:"Order Placed Successfully!"}),f.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"Your order has been placed successfully."}),f.jsxs("div",{className:"mt-4 rounded-xl border border-pink-100 bg-pink-50/40 p-4",children:[f.jsx("p",{className:"font-medium text-gray-900",children:"Order Details"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-gray-700",children:r.map(I=>f.jsxs("li",{children:[I.name," x ",I.quantity," - ",nn(I.price*I.quantity)]},I.name))}),f.jsxs("p",{className:"mt-3 font-semibold text-rose-600",children:["Total: ",nn(ne.subtotal)]}),f.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["Payment method:"," ",f.jsx("span",{className:"font-medium",children:C==="pickup"?"Pay in-store on pickup":j==="bank"?"Bank Transfer":j==="gcash"?"GCash":"Not selected"})]})]}),f.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:f.jsx("button",{type:"button",className:"rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600",onClick:X,children:"Back to Home"})})]})]})]}),a&&f.jsxs(f.Fragment,{children:[f.jsx("button",{type:"button",className:"fixed inset-0 z-[35] bg-black/50 transition-opacity",onClick:Ae,"aria-label":"Close cart"}),f.jsxs("div",{className:"fixed right-0 z-[40] flex w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl sm:w-[85%] md:w-1/2 lg:w-[28rem]",style:{top:pe,height:`calc(100vh - ${pe})`},children:[f.jsxs("div",{className:"flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-5",children:[f.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wide text-gray-700",children:"Your Basket"}),f.jsx("button",{type:"button",onClick:Ae,className:"rounded-full p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent","aria-label":"Close cart",children:f.jsx("span",{className:"text-xl leading-none",children:"×"})})]}),f.jsx("div",{className:"min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 sm:px-5",children:r.length===0?f.jsxs("p",{className:"text-sm text-gray-600",children:["Your basket is empty. Tap ",f.jsx("strong",{children:"Add to Cart"})," on a product to get started."]}):f.jsx("ul",{className:"space-y-3",children:r.map(I=>f.jsxs("li",{className:"flex flex-col gap-2 rounded-xl bg-gray-50 p-3 sm:flex-row sm:items-center sm:justify-between",children:[f.jsxs("div",{className:"min-w-0 flex-1",children:[f.jsx("p",{className:"font-medium text-gray-900",children:I.name}),f.jsxs("p",{className:"text-xs text-gray-500",children:[nn(I.price)," each"]})]}),f.jsxs("div",{className:"flex items-center justify-between gap-2 sm:justify-end",children:[f.jsxs("div",{className:"inline-flex items-center gap-1 rounded-lg bg-white px-2 py-1 shadow-sm",children:[f.jsx("button",{type:"button",onClick:()=>K(I.name,-1),className:"rounded p-0.5 text-sm font-medium text-gray-700 hover:bg-gray-100",children:"−"}),f.jsx("span",{className:"min-w-[1.25rem] text-center text-sm font-medium",children:I.quantity}),f.jsx("button",{type:"button",onClick:()=>K(I.name,1),className:"rounded p-0.5 text-sm font-medium text-gray-700 hover:bg-gray-100",children:"+"})]}),f.jsx("button",{type:"button",onClick:()=>re(I.name),className:"text-gray-400 hover:text-red-500","aria-label":"Remove item",children:f.jsx(Gw,{className:"h-4 w-4"})}),f.jsx("span",{className:"w-16 text-right text-sm font-semibold text-accent",children:nn(I.price*I.quantity)})]})]},I.name))})}),f.jsxs("div",{className:"shrink-0 border-t border-gray-200 bg-white px-4 py-4 sm:px-5",children:[f.jsxs("div",{className:"mb-3 flex items-center justify-between text-sm",children:[f.jsx("span",{className:"text-gray-600",children:"Total"}),f.jsx("span",{className:"text-base font-semibold text-accent",children:nn(ne.subtotal)})]}),f.jsx("div",{className:"space-y-2",children:f.jsx("button",{type:"button",disabled:!St,onClick:()=>{s("checkout"),Ae()},className:"w-full rounded-lg bg-rose-500 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-gray-300",children:"Proceed to Checkout"})})]})]})]})]})}function yS({open:r,onClose:e,title:n,children:s}){return r?f.jsx("div",{className:"fixed inset-0 z-40 flex justify-center bg-black/50","aria-modal":"true",role:"dialog",children:f.jsx("div",{className:"pointer-events-none flex w-full justify-center pt-24 pb-6 sm:pt-28 sm:pb-8",children:f.jsxs("div",{className:"pointer-events-auto w-full max-w-4xl max-h-[calc(100vh-6rem-2rem)] overflow-y-auto rounded-3xl bg-white shadow-2xl",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-gray-100 px-6 py-3 sm:px-8 sm:py-4",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-accent",children:"Branch landmark"}),f.jsx("h3",{className:"mt-1 text-lg font-semibold text-gray-900 sm:text-xl",children:n}),f.jsx("p",{className:"mt-1 text-xs text-gray-600 sm:text-sm",children:"A nearby landmark to help you find the salon easily."})]}),f.jsx("button",{type:"button",onClick:e,className:"ml-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200",children:"Close"})]}),f.jsx("div",{className:"px-4 pb-4 pt-3 sm:px-6 sm:pb-6",children:s})]})})}):null}const vS=["jpg","jpeg","png","webp"],_S={"Dela Torre, Imae Rose":"Dela Torre, Imae Rose_EL Glam Mandaue_Nail Technician.jpg","Yekla, Sanny Grace":"Yekla, Sanny Grace_EL Glam Mandaue_Aesthetician.jpg","Davis, Rosegina":"Davis, Rosegina_EL Glam Mandaue_Nail Technician.jpg","Momo, Ruthamie":"Momo. Ruthamie_EL Glam Mandaue_Facialist.jpg","Yaon, Jenipher":"Yaon, Jennipher_EL Glam Mandaue_Hairdresser.jpg","Arnado, Buenafe":"Arnado, Buenafe_EL Glam Pajac_Hairdresser or Nail Technician.jpg","Omac, Elvira":"Omac, Elvira_EL Glam Pajac_Hairdresser.jpg","Belarmino, Mattlaine Clyrr":"Belarmino, Mattlaine Clyrr_EL Glam Pajac_Aesthetician.jpg","Entig, Jenalyn":"Entig, Jenalyn_EL Glam Pajac_Nail Technician.jpg","Gloria, Francisco":"Gloria, Francisco_EL Glam Pajac_Barber.jpg","Demape, Keyn Joshua":"Demape, Keyn Joshua_EL Glam Pajac_Barber.jpg","Abadajos, Julie Ann":"Abadajos, Julie Ann_EL Glam Pusok_Aesthetician.jpg","Pedor, Rowena":"Pedor, Rowena_EL Glam Pusok_Nail Technician.jpg","Dimco, Janeth":"Dimco, Janeth_EL Glam Pusok_Hairdresser.jpg","Macatanong, Jessica":"Macatanong, Jessica_EL Glam Cebu_Nail Technician.jpg","Tallo, Lucille":"Tallo, Lucille_EL GLam Cebu_Hairdresser.jpg","Cañizares, Rubelyn":"Cañizares, Rubelyn_EL Glam Cebu_Facialist.jpg","Cabreles, Jennifer":"Cabreles, Jennifer_EL Glam Cebu_Nail Technician.jpg","Dela Torre, Jeanny":"Dela Torre, Jeanny_EL Glam Cebu_Facialist.jpg"},Ug=r=>r.split(",").map(e=>e.trim()[0]).filter(Boolean).slice(0,2).join("").toUpperCase(),Bg=r=>{const e=_S[r];if(e)return[encodeURI(`/${e}`)];const n=encodeURIComponent(r);return vS.map(s=>`/stylists/${n}.${s}`)},zg=(r,e)=>{const n=r.currentTarget,a=Number(n.dataset.photoIndex||"0")+1;if(a<e.length){n.dataset.photoIndex=String(a),n.src=e[a];return}n.style.display="none"},xS=[{id:"mandaue",title:"Mandaue City Branch",image:"Mandaue Branch.png"},{id:"pajac",title:"Pajac Branch",image:"Pajac Branch.jpg"},{id:"pusok",title:"Pusok Branch",image:"Pusok Branch.jpg"},{id:"cebu",title:"Cebu City Branch",image:"Cebu Branch.jpg"}];function wS(){const[r,e]=M.useState(null),n=r&&mu[r.id]?mu[r.id]:[];return f.jsx("section",{id:"contact",className:"scroll-mt-24 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-16 sm:py-20",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"mx-auto max-w-3xl text-center",children:[f.jsx("span",{className:"inline-flex items-center rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-pink-600 shadow-sm",children:"Contact & Locations"}),f.jsx("h2",{className:"mt-4 text-3xl font-bold text-gray-900 sm:text-4xl",children:"Visit Us"}),f.jsx("p",{className:"mx-auto mt-3 max-w-2xl text-gray-600",children:"Choose a branch to view the location photo and meet the team assigned to that branch."})]}),f.jsx("div",{className:"mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",children:xS.map(s=>f.jsxs("button",{type:"button",onClick:()=>e(s),className:"group relative overflow-hidden rounded-2xl border border-pink-100 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",children:[f.jsx("div",{className:"pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-pink-100/70 blur-2xl transition group-hover:bg-purple-100/70"}),f.jsx("div",{className:"relative flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110",children:f.jsx(Gu,{className:"h-6 w-6",strokeWidth:1.5,"aria-hidden":!0})}),f.jsx("h3",{className:"relative mt-4 text-base font-semibold text-gray-900",children:s.title}),f.jsx("p",{className:"relative mt-2 text-sm text-gray-500",children:"View location photo and branch team"}),f.jsx("span",{className:"relative mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-accent",children:"Open details"})]},s.id))}),f.jsx(yS,{open:!!r,onClose:()=>e(null),title:(r==null?void 0:r.title)??"",children:r&&f.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start",children:[f.jsx("div",{className:"rounded-2xl border border-pink-100 bg-white p-2 shadow-sm",children:f.jsx("img",{src:r.image,alt:r.title,className:"mx-auto h-auto w-full max-w-full rounded-xl object-contain"})}),n.length>0&&f.jsxs("div",{className:"rounded-2xl border border-gray-100 bg-gray-50 p-4",children:[f.jsx("p",{className:"text-sm font-semibold uppercase tracking-wide text-accent",children:"Team assigned to this branch"}),f.jsx("ul",{className:"mt-3 grid gap-3 text-sm",children:n.map(s=>{const a=Bg(s.name);return f.jsxs("li",{className:"flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm",children:[f.jsxs("div",{className:"relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-accent/10",children:[f.jsx("div",{className:"flex h-full w-full items-center justify-center text-xs font-semibold text-accent",children:Ug(s.name)}),f.jsx("img",{src:a[0],alt:`${s.name} profile`,className:"absolute inset-0 h-full w-full object-cover",loading:"lazy","data-photo-index":"0",onError:c=>zg(c,a)})]}),f.jsxs("div",{children:[f.jsx("p",{className:"font-semibold text-gray-900",children:s.name}),f.jsx("p",{className:"text-xs font-medium uppercase tracking-wide text-accent",children:s.role}),s.specialty&&f.jsx("p",{className:"mt-1 text-xs text-gray-500",children:s.specialty})]})]},s.name)})})]})]})})]})})}function SS(){return f.jsx("main",{children:f.jsx(wS,{})})}const kS="/assets/aboutus-hero-BPCuvF8v.png",CS="/assets/about-what-is-CZREU3hi.png",ES="/assets/founder-photo-Bf-cZ9t5.png",bS=[{icon:Lr,title:"Premium Beauty Services",description:"From signature facials to luxury styling, every service is personalized with care.",gradient:"from-pink-500 to-rose-400"},{icon:Lg,title:"Skilled Professionals",description:"Our experts are trained in advanced techniques and industry best practices.",gradient:"from-purple-500 to-pink-500"},{icon:ja,title:"Customer Satisfaction",description:"We prioritize comfort, trust, and outcomes that make every guest feel confident.",gradient:"from-rose-400 to-purple-500"},{icon:Vu,title:"Modern Booking Experience",description:"Simple scheduling, thoughtful follow-up, and seamless service from start to finish.",gradient:"from-pink-500 to-purple-500"}];function NS({children:r}){return f.jsx("span",{className:"inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-md",children:r})}function IS(){return M.useEffect(()=>{const r=document.querySelectorAll(".reveal"),e=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&s.target.classList.add("is-visible")})},{threshold:.18});return r.forEach(n=>e.observe(n)),()=>e.disconnect()},[]),f.jsxs("main",{className:"overflow-x-hidden bg-white text-gray-700",children:[f.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap",rel:"stylesheet"}),f.jsxs("section",{className:"relative isolate min-h-[60vh] overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-purple-300 md:min-h-[70vh]",children:[f.jsx("div",{className:"hero-orb absolute left-8 top-20 h-48 w-48 rounded-full bg-pink-300/60 blur-3xl"}),f.jsx("div",{className:"hero-orb-delay absolute right-12 top-28 h-64 w-64 rounded-full bg-purple-300/50 blur-3xl"}),f.jsx("div",{className:"hero-orb absolute bottom-14 left-1/3 h-44 w-44 rounded-full bg-rose-200/60 blur-3xl"}),f.jsx("img",{src:"https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80",alt:"Pink flowers",className:"pointer-events-none absolute bottom-0 right-0 hidden w-52 max-w-[28vw] opacity-60 md:block"}),f.jsxs("div",{className:"mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-16 sm:px-6 md:grid-cols-2 md:items-center md:gap-10 md:pb-16 md:pt-20 lg:px-8",children:[f.jsxs("div",{className:"reveal space-y-6",children:[f.jsx("p",{className:"inline-flex rounded-full border border-pink-300/50 bg-white/70 px-4 py-2 text-sm font-medium text-pink-700",children:"Premium Salon and Spa Experience"}),f.jsxs("h1",{className:"text-6xl sm:text-6xl md:text-8xl leading-tight",style:{fontFamily:"'Dancing Script', cursive",fontWeight:500,color:"#af4f67"},children:["Bring out the",f.jsx("br",{}),"beauty in you,",f.jsx("br",{})]}),f.jsx("p",{className:"max-w-xl text-lg leading-8 text-gray-700 sm:text-xl",children:"Discover elevated beauty services designed to celebrate your confidence, style, and individuality in a space crafted for luxury and care."})]}),f.jsxs("div",{className:"reveal relative hero-photo-shell",children:[f.jsx("div",{className:"absolute -left-6 -top-6 h-40 w-40 rounded-full bg-white/45 blur-2xl"}),f.jsx("div",{className:"hero-photo-glow pointer-events-none absolute -inset-4 z-0 rounded-[2rem]"}),f.jsx("img",{src:kS,alt:"Model with glowing skin",className:"hero-photo-image relative z-10 w-full rounded-3xl object-cover shadow-2xl"})]})]})]}),f.jsxs("section",{className:"about-us-section relative mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-[2.25rem] px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8",children:[f.jsxs("div",{className:"reveal relative about-photo-shell",children:[f.jsx("div",{className:"absolute -left-8 -top-8 h-48 w-48 rounded-full bg-pink-200/70 blur-3xl"}),f.jsx("div",{className:"absolute -right-4 -bottom-8 h-44 w-44 rounded-full bg-purple-200/70 blur-3xl"}),f.jsx("img",{src:CS,alt:"Elegant salon interior",className:"about-photo-image relative z-10 h-[480px] w-full rounded-3xl object-cover shadow-xl"}),f.jsx("div",{className:"about-photo-overlay absolute inset-0 z-20 rounded-3xl bg-gradient-to-t from-pink-500/35 via-transparent to-transparent"}),f.jsx("div",{className:"about-est-badge absolute bottom-6 left-6 z-30 rounded-2xl bg-white/90 px-5 py-3 shadow-lg",children:f.jsx("p",{className:"text-sm font-semibold text-gray-900",children:"Est. Since 2017"})})]}),f.jsxs("div",{className:"reveal space-y-6",children:[f.jsx(NS,{children:"✨ About Us"}),f.jsxs("h2",{className:"text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl",children:["What is"," ",f.jsx("span",{className:"about-gradient-text bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",children:"EL Glamorous"}),"?"]}),f.jsx("p",{className:"text-base leading-8 text-gray-600 sm:text-lg",children:"EL Glamorous Face and Body Clinic has grown from a single branch into a trusted beauty destination with four locations. We offer expert facial care, slimming treatments, massage, hair, and nail services—all designed to enhance your natural beauty."}),f.jsx("p",{className:"text-base leading-8 text-gray-600 sm:text-lg",children:"With a perfect balance of quality, affordability, and personalized care, we are committed to helping you look and feel your best—confident, radiant, and truly glamorous."}),f.jsxs("div",{className:"flex flex-wrap gap-3",children:[f.jsxs("span",{className:"about-pill inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700",children:[f.jsx(ja,{className:"h-4 w-4"})," Client-Centered"]}),f.jsxs("span",{className:"about-pill inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700",children:[f.jsx(Lr,{className:"h-4 w-4"})," Premium Quality"]}),f.jsxs("span",{className:"about-pill inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700",children:[f.jsx(qu,{className:"h-4 w-4"})," Award Winning"]})]})]})]}),f.jsx("section",{className:"founder-section bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-20",children:f.jsxs("div",{className:"mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",children:[f.jsxs("div",{className:"reveal space-y-5",children:[f.jsx("span",{className:"inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-md",children:"👑 Leadership"}),f.jsx("h2",{className:"text-4xl font-bold text-gray-900 sm:text-5xl",children:"Meet the Owner"}),f.jsxs("article",{className:"rounded-3xl bg-white p-6 shadow-lg sm:p-8",children:[f.jsx("h3",{className:"text-3xl font-bold text-gray-900",children:"Emily P. Loranas"}),f.jsx("p",{className:"mt-1 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",children:"Founder & Creative Director"}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[f.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700",children:[f.jsx(Fw,{className:"h-4 w-4"})," 15+ Years"]}),f.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700",children:[f.jsx(Lg,{className:"h-4 w-4"})," Certified Expert"]})]}),f.jsx("p",{className:"mt-5 text-base leading-8 text-gray-600",children:"At the heart of EL Glamorous Face & Body Clinic is its visionary CEO, Emily P. Loranas, a passionate leader committed to redefining beauty and wellness in Central Visayas. Guided by her philosophy, “Quality service above all,” she has built a team that delivers personalized treatments focused on enhancing both appearance and confidence."}),f.jsx("p",{className:"mt-4 text-base leading-8 text-gray-600",children:"With a blend of advanced technology and genuine care, the clinic offers more than just services—it creates meaningful experiences of self-discovery and rejuvenation. Under her leadership, EL Glamorous continues to grow as a trusted destination known for its consistency, innovation, and heartfelt service."})]}),f.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 p-6 text-white shadow-xl",children:[f.jsx("p",{className:"text-4xl leading-none opacity-60",children:'"'}),f.jsx("p",{className:"mt-2 text-lg leading-8",children:"True beauty begins when you feel seen, cared for, and empowered to shine in your own way."}),f.jsxs("div",{className:"mt-4 flex items-center gap-3 text-sm font-semibold",children:[f.jsx("span",{className:"h-px w-8 bg-white/70"}),"Emily P. Loranas"]})]})]}),f.jsxs("div",{className:"reveal relative founder-photo-shell",children:[f.jsx("div",{className:"absolute -right-4 -top-4 h-20 w-20 rounded-tr-3xl border-t-4 border-r-4 border-pink-300"}),f.jsx("div",{className:"absolute -left-10 top-20 h-56 w-56 rounded-full bg-pink-200/70 blur-3xl"}),f.jsx("div",{className:"absolute -right-6 bottom-12 h-52 w-52 rounded-full bg-purple-200/70 blur-3xl"}),f.jsx("div",{className:"founder-photo-shimmer pointer-events-none absolute inset-0 z-20 rounded-3xl"}),f.jsx("img",{src:ES,alt:"Sofia Martinez, founder of El Glam",className:"founder-photo-image relative z-10 h-full min-h-[480px] w-full rounded-3xl object-cover shadow-2xl"}),f.jsx("div",{className:"absolute inset-0 z-20 rounded-3xl bg-gradient-to-t from-black/35 to-transparent"})]})]})}),f.jsx("section",{className:"animated-gradient-bg py-20",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"reveal mx-auto max-w-3xl text-center",children:[f.jsx("span",{className:"inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-md",children:"⭐ Our Promise"}),f.jsxs("h2",{className:"mt-5 text-4xl font-bold text-gray-900 sm:text-5xl",children:["What We're"," ",f.jsx("span",{className:"bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",children:"Known For"})]}),f.jsx("p",{className:"mt-4 text-lg leading-8 text-gray-600",children:"Every detail of our service is designed around excellence, comfort, and elevated beauty results."})]}),f.jsx("div",{className:"mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4",children:bS.map(r=>{const e=r.icon;return f.jsxs("article",{className:"reveal group relative overflow-hidden rounded-3xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",children:[f.jsx(e,{className:"absolute -bottom-5 -right-3 h-24 w-24 text-pink-100 transition-colors group-hover:text-pink-200"}),f.jsx("div",{className:`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${r.gradient} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6`,children:f.jsx(e,{className:"h-7 w-7"})}),f.jsx("h3",{className:"relative mt-5 text-xl font-bold text-gray-900",children:r.title}),f.jsx("p",{className:"relative mt-3 text-sm leading-7 text-gray-600",children:r.description})]},r.title)})})]})})]})}const TS={pusok:"Menguito Building, ML Quezon National Highway, Pusok, Lapu-Lapu City, Cebu, 6015",pajac:"Helenville Apartment, Bankal Road, Pajac, Lapu-Lapu City, Cebu, 6015",mandaue:"2nd Floor, Paradise Square, H. Abellana St, Mandaue City, Cebu, 6014",cebu:"8V6R+8VM, Don Gil, Cebu City, 6000"};function RS(){const r=Aa(),e=n=>{r("/book/services",{state:{branchId:n,branchName:Xp.find(s=>s.id===n).name}})};return f.jsxs("div",{className:"booking-flow-bg relative min-h-screen overflow-hidden",children:[f.jsx("div",{className:"pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl"}),f.jsx("div",{className:"pointer-events-none absolute -right-14 bottom-20 h-64 w-64 rounded-full bg-purple-200/50 blur-3xl"}),f.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("h1",{className:"text-3xl font-bold text-gray-900 sm:text-4xl",children:"Choose Your Branch"}),f.jsx("p",{className:"mt-3 text-gray-600",children:"Select a branch to view available services and book your appointment"})]}),f.jsx("div",{className:"mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4",children:Xp.map((n,s)=>f.jsxs("button",{type:"button",onClick:()=>e(n.id),className:"booking-fade-up booking-interactive-card group flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/85 p-8 shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",style:{animationDelay:`${s*90}ms`},children:[f.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent/20",children:f.jsx(Gu,{className:"h-8 w-8",strokeWidth:1.5,"aria-hidden":!0})}),f.jsx("span",{className:"mt-4 text-lg font-semibold text-gray-900",children:n.name}),f.jsx("span",{className:"mt-1 text-xs text-gray-500 text-center",children:TS[n.id]})]},n.id))})]})]})}const PS={sparkles:Lr,scissors:Dg,heart:ja};function AS(){var j,A,R;const r=lr(),e=Aa(),n=((j=r.state)==null?void 0:j.branchName)||"Selected Branch",s=(A=r.state)==null?void 0:A.branchId,a=((R=r.state)==null?void 0:R.initialServices)||[],[c,d]=M.useState(null),[p,m]=M.useState(a),[y,x]=M.useState(""),v=(U,{categoryId:q,subcategory:K})=>{m(re=>re.find(Z=>Z.name===U.name&&Z.price===U.price&&Z.categoryId===q&&Z.subcategory===K||Z.categoryId==null&&Z.subcategory==null)?re.filter(Z=>!(Z.name===U.name&&Z.price===U.price&&(Z.categoryId===q&&Z.subcategory===K||Z.categoryId==null&&Z.subcategory==null))):[...re,{name:U.name,price:U.price,categoryId:q,subcategory:K}])},C=()=>{p.length&&e("/book/stylist",{state:{branchId:s,branchName:n,services:p}})},T=U=>{d(q=>q===U?null:U)};return f.jsxs("div",{className:"booking-flow-bg relative min-h-screen overflow-hidden",children:[f.jsx("div",{className:"pointer-events-none absolute -left-16 top-28 h-52 w-52 rounded-full bg-rose-200/60 blur-3xl"}),f.jsx("div",{className:"pointer-events-none absolute -right-16 top-1/2 h-56 w-56 rounded-full bg-purple-200/55 blur-3xl"}),f.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-8 sm:py-12",children:[f.jsxs(sn,{to:"/book",className:"mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent",children:[f.jsx($u,{className:"h-5 w-5"}),"Change branch"]}),f.jsxs("div",{className:"mb-8",children:[f.jsx("p",{className:"text-sm font-medium text-accent",children:"Booking at"}),f.jsx("h1",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:n}),f.jsx("p",{className:"mt-1 text-gray-600",children:"Select a category, then add one or more services"})]}),f.jsxs("div",{className:"mb-6 max-w-xs",children:[f.jsx("label",{htmlFor:"service-search",className:"block text-sm font-medium text-gray-700",children:"Search services"}),f.jsx("input",{id:"service-search",type:"text",value:y,onChange:U=>x(U.target.value),placeholder:"Type a service name, e.g. haircut, facial, massage...",className:"mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"})]}),f.jsx("div",{className:"space-y-4",children:pi.map(U=>{const q=PS[U.icon]||Lr,re=y.trim().length>0||c===U.id;return f.jsxs("div",{className:"booking-fade-up booking-interactive-card overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-md backdrop-blur-sm",style:{animationDelay:`${pi.indexOf(U)*90}ms`},children:[f.jsxs("button",{type:"button",onClick:()=>T(U.id),className:"flex w-full items-center justify-between p-6 text-left transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset",children:[f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsx("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent",children:f.jsx(q,{className:"h-7 w-7",strokeWidth:1.5})}),f.jsx("span",{className:"text-xl font-semibold text-gray-900",children:U.title})]}),f.jsx(Mw,{className:`h-6 w-6 shrink-0 text-gray-500 transition-transform ${re?"rotate-180":""}`})]}),re&&f.jsx("div",{className:"border-t border-gray-100 bg-gray-50/50 px-6 pb-6 pt-2",children:f.jsx("div",{className:"space-y-6",children:U.data.map(ne=>f.jsxs("div",{children:[f.jsx("h3",{className:"mb-2 text-sm font-semibold uppercase tracking-wide text-accent",children:ne.subcategory}),f.jsx("ul",{className:"space-y-2",children:ne.services.map(Z=>{if(y&&!Z.name.toLowerCase().includes(y.toLowerCase()))return null;const Ae=p.some(pe=>pe.name===Z.name&&pe.price===Z.price&&(pe.categoryId===U.id&&pe.subcategory===ne.subcategory||pe.categoryId==null&&pe.subcategory==null));return f.jsxs("li",{className:"flex flex-col gap-2 rounded-lg bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-3",children:[f.jsxs("div",{className:"min-w-0 flex-1",children:[f.jsx("span",{className:"font-medium text-gray-900",children:Z.name}),f.jsx("span",{className:"ml-0 block text-accent font-semibold sm:ml-2 sm:inline",children:Z.price})]}),f.jsx("button",{type:"button",onClick:()=>v(Z,{categoryId:U.id,subcategory:ne.subcategory}),className:`shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-white transition ${Ae?"bg-gray-500 hover:bg-gray-600":"bg-accent hover:bg-accent-dark"}`,children:Ae?"Remove":"Add"})]},`${ne.subcategory}-${Z.name}`)})})]},ne.subcategory))})})]},U.id)})}),f.jsxs("div",{className:"mt-10 rounded-2xl border border-dashed border-accent/40 bg-white p-5 shadow-sm",children:[f.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Selected services"}),p.length===0?f.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"No services selected yet. Tap “Add” on one or more services to include them in your booking."}):f.jsx("ul",{className:"mt-3 space-y-2 text-sm",children:p.map(U=>f.jsxs("li",{className:"flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-3 py-2",children:[f.jsx("span",{className:"font-medium text-gray-900",children:U.name}),f.jsx("span",{className:"text-accent font-semibold",children:U.price})]},`${U.name}-${U.price}`))}),f.jsx("button",{type:"button",onClick:C,disabled:!p.length,className:"mt-4 w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white shadow-md transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600",children:"Continue to appointment details"})]})]})]})}const gu=r=>String(r||"").toLowerCase(),jS=r=>{const e=new Set,n=Array.isArray(r)?r:[];for(const s of n){const a=gu(s==null?void 0:s.name),c=gu(s==null?void 0:s.subcategory),d=s==null?void 0:s.categoryId,p=c.includes("nail")||a.includes("nail")||a.includes("manicure")||a.includes("pedicure")||a.includes("extensions")||a.includes("polish")||a.includes("stones"),m=d==="hair"||c.includes("hair")||a.includes("hair")||a.includes("cut")||a.includes("rebond")||a.includes("color")||a.includes("blowdry")||a.includes("styling")||a.includes("balayage"),y=a.includes("massage")||c.includes("massage")||a.includes("ventosa")||a.includes("cupping")||a.includes("slim")||a.includes("trio slim")||a.includes("rf")||a.includes("cavitation"),x=d==="face"||c.includes("facial")||a.includes("facial")||a.includes("eyelash")||a.includes("eyebrow")||a.includes("brow")||a.includes("waxing")||a.includes("threading")||a.includes("gluta")||a.includes("inject")||a.includes("drip")||a.includes("shot");p&&e.add("nail"),m&&e.add("hair"),y&&e.add("massage"),x&&e.add("facial")}return e},em=r=>{const e=gu(r),n=new Set;return e.includes("nail")&&n.add("nail"),(e.includes("hair")||e.includes("barber")||e.includes("hairdresser"))&&n.add("hair"),e.includes("massage")&&n.add("massage"),e.includes("facialist")&&n.add("facial"),n},OS=r=>{switch(r){case"massage":return"Massage Therapist";case"hair":return"Hair Stylist";case"nail":return"Nail Technician";case"facial":return"Facialist";default:return r}};function LS(){const r=lr(),e=Aa(),{branchId:n,branchName:s,services:a}=r.state||{},[c,d]=M.useState([]),p=n?mu[n]||[]:[],m=M.useMemo(()=>jS(a),[a]),y=M.useMemo(()=>p.length?m.size===0?p:p.filter(T=>{const j=em(T.role);return[...m].some(A=>j.has(A))}):[],[p,m]),x=y.length===0;M.useEffect(()=>{d(T=>T.filter(j=>y.some(A=>A.name===j.name)))},[y]);const v=T=>{d(j=>j.find(R=>R.name===T.name)?j.filter(R=>R.name!==T.name):[...j,T])},C=()=>{if(x){e("/book/details",{state:{branchId:n,branchName:s,services:a,stylists:[]}});return}c.length&&e("/book/details",{state:{branchId:n,branchName:s,services:a,stylists:c}})};return!n||!s||!a||!a.length?f.jsxs("div",{className:"mx-auto max-w-md px-4 py-12 text-center",children:[f.jsx("p",{className:"text-gray-600",children:"No booking information found."}),f.jsx(sn,{to:"/book",className:"mt-4 inline-block text-accent hover:underline",children:"Start over"})]}):f.jsxs("div",{className:"booking-flow-bg relative min-h-screen overflow-hidden",children:[f.jsx("div",{className:"pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl"}),f.jsx("div",{className:"pointer-events-none absolute -right-16 bottom-16 h-64 w-64 rounded-full bg-violet-200/55 blur-3xl"}),f.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-8 sm:py-12",children:[f.jsxs(sn,{to:"/book/services",state:{branchId:n,branchName:s},className:"mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent",children:[f.jsx($u,{className:"h-5 w-5"}),"Back to services"]}),f.jsxs("div",{className:"mb-8",children:[f.jsx("p",{className:"text-sm font-medium text-accent",children:"Step 3 of 4"}),f.jsx("h1",{className:"mt-1 text-2xl font-bold text-gray-900 sm:text-3xl",children:"Choose your stylist"}),f.jsxs("p",{className:"mt-2 text-gray-600",children:["Available stylists at ",f.jsx("span",{className:"font-semibold",children:s})]})]}),f.jsxs("div",{className:"mb-6 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm",children:[f.jsx("h2",{className:"text-sm font-semibold text-gray-800",children:"Selected services"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm",children:a.map(T=>f.jsxs("li",{className:"flex items-center justify-between gap-2",children:[f.jsx("span",{className:"font-medium text-gray-900",children:T.name}),f.jsx("span",{className:"text-accent font-semibold",children:T.price})]},`${T.name}-${T.price}`))})]}),f.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:y.map((T,j)=>{const A=c.some(K=>K.name===T.name),U=[...em(T.role)].filter(K=>m.has(K)),q=Bg(T.name);return f.jsxs("button",{type:"button",onClick:()=>v(T),className:`booking-fade-up booking-interactive-card flex flex-col items-start rounded-2xl border-2 bg-white/92 p-5 text-left shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${A?"border-accent":"border-gray-200"}`,style:{animationDelay:`${j*80}ms`},children:[f.jsxs("div",{className:"relative h-12 w-12 overflow-hidden rounded-full bg-accent/10",children:[f.jsx("div",{className:"flex h-full w-full items-center justify-center text-xs font-semibold text-accent",children:Ug(T.name)}),f.jsx("img",{src:q[0],alt:`${T.name} profile`,className:"absolute inset-0 h-full w-full object-cover",loading:"lazy","data-photo-index":"0",onError:K=>zg(K,q)})]}),f.jsx("p",{className:"mt-3 text-sm font-medium uppercase tracking-wide text-gray-500",children:T.role}),f.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:T.name}),U.length>0&&f.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:U.map(K=>f.jsx("span",{className:"rounded-full bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-700",children:OS(K)},`${T.name}-${K}`))}),T.specialty&&f.jsx("p",{className:"mt-1 text-sm text-gray-500",children:T.specialty}),A&&f.jsxs("p",{className:"mt-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent",children:[f.jsx(Kw,{className:"h-3 w-3"}),"Selected"]})]},T.name)})}),p.length===0&&f.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"No specific stylists are listed for this branch yet. You can continue without choosing a stylist."}),p.length>0&&y.length===0&&f.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"This service currently has no assigned stylist. Our receptionist will personally select the best available stylist for you upon arrival. You’ll be notified once your booking is confirmed."}),f.jsxs("div",{className:"mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between",children:[f.jsx("button",{type:"button",onClick:()=>e("/book/details",{state:{branchId:n,branchName:s,services:a,stylists:[]}}),className:"rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50",children:"No preference – any available stylist"}),f.jsx("button",{type:"button",onClick:C,disabled:!x&&!c.length,className:"rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600",children:x?"Confirm your appointment":"Continue with selected stylists"})]})]})]})}const MS=()=>{};var tm={};/**
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
 */const Wg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const B=function(r,e){if(!r)throw Ei(e)},Ei=function(r){return new Error("Firebase Database ("+Wg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Hg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let a=r.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},DS=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const a=r[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=r[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=r[n++],d=r[n++],p=r[n++],m=((a&7)<<18|(c&63)<<12|(d&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const c=r[n++],d=r[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},Ku={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<r.length;a+=3){const c=r[a],d=a+1<r.length,p=d?r[a+1]:0,m=a+2<r.length,y=m?r[a+2]:0,x=c>>2,v=(c&3)<<4|p>>4;let C=(p&15)<<2|y>>6,T=y&63;m||(T=64,d||(C=64)),s.push(n[x],n[v],n[C],n[T])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Hg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):DS(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<r.length;){const c=n[r.charAt(a++)],p=a<r.length?n[r.charAt(a)]:0;++a;const y=a<r.length?n[r.charAt(a)]:64;++a;const v=a<r.length?n[r.charAt(a)]:64;if(++a,c==null||p==null||y==null||v==null)throw new FS;const C=c<<2|p>>4;if(s.push(C),y!==64){const T=p<<4&240|y>>2;if(s.push(T),v!==64){const j=y<<6&192|v;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class FS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $g=function(r){const e=Hg(r);return Ku.encodeByteArray(e,!0)},da=function(r){return $g(r).replace(/\./g,"")},ha=function(r){try{return Ku.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function US(r){return Vg(void 0,r)}function Vg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BS(n)||(r[n]=Vg(r[n],e[n]));return r}function BS(r){return r!=="__proto__"}/**
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
 */function zS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WS=()=>zS().__FIREBASE_DEFAULTS__,HS=()=>{if(typeof process>"u"||typeof tm>"u")return;const r=tm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},$S=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ha(r[1]);return e&&JSON.parse(e)},Yu=()=>{try{return MS()||WS()||HS()||$S()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Gg=r=>{var e,n;return(n=(e=Yu())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},VS=r=>{const e=Gg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qg=()=>{var r;return(r=Yu())==null?void 0:r.config},Kg=r=>{var e;return(e=Yu())==null?void 0:e[`_${r}`]};/**
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
 */class Oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function GS(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[da(JSON.stringify(n)),da(JSON.stringify(d)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function qS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KS(){const r=ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function YS(){return Wg.NODE_ADMIN===!0}function Jg(){try{return typeof indexedDB=="object"}catch{return!1}}function Xg(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}function QS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const JS="FirebaseError";class cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=JS,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?XS(c,s):"Error",p=`${this.serviceName}: ${d} (${a}).`;return new cn(a,p,s)}}function XS(r,e){return r.replace(ZS,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const ZS=/\{\$([^}]+)}/g;/**
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
 */function Ts(r){return JSON.parse(r)}function Ze(r){return JSON.stringify(r)}/**
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
 */const Zg=function(r){let e={},n={},s={},a="";try{const c=r.split(".");e=Ts(ha(c[0])||""),n=Ts(ha(c[1])||""),a=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:a}},ek=function(r){const e=Zg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},tk=function(r){const e=Zg(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function In(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function wi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function yu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function fa(r,e,n){const s={};for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[a]=e.call(n,r[a],a,r));return s}function sr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=r[a],d=e[a];if(nm(c)&&nm(d)){if(!sr(c,d))return!1}else if(c!==d)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function nm(r){return r!==null&&typeof r=="object"}/**
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
 */function bi(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class nk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const C=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(C<<1|C>>>31)&4294967295}let a=this.chain_[0],c=this.chain_[1],d=this.chain_[2],p=this.chain_[3],m=this.chain_[4],y,x;for(let v=0;v<80;v++){v<40?v<20?(y=p^c&(d^p),x=1518500249):(y=c^d^p,x=1859775393):v<60?(y=c&d|p&(c|d),x=2400959708):(y=c^d^p,x=3395469782);const C=(a<<5|a>>>27)+y+m+x+s[v]&4294967295;m=p,p=d,d=(c<<30|c>>>2)&4294967295,c=a,a=C}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let a=0;const c=this.buf_;let d=this.inbuf_;for(;a<n;){if(d===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<n;)if(c[d]=e.charCodeAt(a),++d,++a,d===this.blockSize){this.compress_(c),d=0;break}}else for(;a<n;)if(c[d]=e[a],++d,++a,d===this.blockSize){this.compress_(c),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[a]>>c&255,++s;return e}}function rk(r,e){const n=new ik(r,e);return n.subscribe.bind(n)}class ik{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sk(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=Kc),a.error===void 0&&(a.error=Kc),a.complete===void 0&&(a.complete=Kc);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sk(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Kc(){}function Ju(r,e){return`${r} failed: ${e} argument `}/**
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
 */const ok=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let a=r.charCodeAt(s);if(a>=55296&&a<=56319){const c=a-55296;s++,B(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;a=65536+(c<<10)+d}a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):a<65536?(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},La=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const ak=1e3,lk=2,ck=14400*1e3,uk=.5;function rm(r,e=ak,n=lk){const s=e*Math.pow(n,r),a=Math.round(uk*s*(Math.random()-.5)*2);return Math.min(ck,s+a)}/**
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
 */function dt(r){return r&&r._delegate?r._delegate:r}/**
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
 */function Ls(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ey(r){return(await fetch(r,{credentials:"include"})).ok}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sr="[DEFAULT]";/**
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
 */class dk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Oa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fk(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&d.resolve(a)}return a}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hk(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hk(r){return r===Sr?void 0:r}function fk(r){return r.instantiationMode==="EAGER"}/**
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
 */class pk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ye||(ye={}));const mk={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},gk=ye.INFO,yk={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},vk=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),a=yk[e];if(a)console[a](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=gk,this._logHandler=vk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const _k=(r,e)=>e.some(n=>r instanceof n);let im,sm;function xk(){return im||(im=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wk(){return sm||(sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,vu=new WeakMap,ny=new WeakMap,Yc=new WeakMap,Xu=new WeakMap;function Sk(r){const e=new Promise((n,s)=>{const a=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(tr(r.result)),a()},d=()=>{s(r.error),a()};r.addEventListener("success",c),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&ty.set(n,r)}).catch(()=>{}),Xu.set(e,r),e}function kk(r){if(vu.has(r))return;const e=new Promise((n,s)=>{const a=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),a()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});vu.set(r,e)}let _u={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return vu.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ny.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ck(r){_u=r(_u)}function Ek(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Qc(this),e,...n);return ny.set(s,e.sort?e.sort():[e]),tr(s)}:wk().includes(r)?function(...e){return r.apply(Qc(this),e),tr(ty.get(this))}:function(...e){return tr(r.apply(Qc(this),e))}}function bk(r){return typeof r=="function"?Ek(r):(r instanceof IDBTransaction&&kk(r),_k(r,xk())?new Proxy(r,_u):r)}function tr(r){if(r instanceof IDBRequest)return Sk(r);if(Yc.has(r))return Yc.get(r);const e=bk(r);return e!==r&&(Yc.set(r,e),Xu.set(e,r)),e}const Qc=r=>Xu.get(r);function ry(r,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const d=indexedDB.open(r,e),p=tr(d);return s&&d.addEventListener("upgradeneeded",m=>{s(tr(d.result),m.oldVersion,m.newVersion,tr(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),a&&m.addEventListener("versionchange",y=>a(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const Nk=["get","getKey","getAll","getAllKeys","count"],Ik=["put","add","delete","clear"],Jc=new Map;function om(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Jc.get(e))return Jc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=Ik.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Nk.includes(n)))return;const c=async function(d,...p){const m=this.transaction(d,a?"readwrite":"readonly");let y=m.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),a&&m.done]))[0]};return Jc.set(e,c),c}Ck(r=>({...r,get:(e,n,s)=>om(e,n)||r.get(e,n,s),has:(e,n)=>!!om(e,n)||r.has(e,n)}));/**
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
 */class Tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rk(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rk(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xu="@firebase/app",am="0.14.10";/**
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
 */const kn=new Ma("@firebase/app"),Pk="@firebase/app-compat",Ak="@firebase/analytics-compat",jk="@firebase/analytics",Ok="@firebase/app-check-compat",Lk="@firebase/app-check",Mk="@firebase/auth",Dk="@firebase/auth-compat",Fk="@firebase/database",Uk="@firebase/data-connect",Bk="@firebase/database-compat",zk="@firebase/functions",Wk="@firebase/functions-compat",Hk="@firebase/installations",$k="@firebase/installations-compat",Vk="@firebase/messaging",Gk="@firebase/messaging-compat",qk="@firebase/performance",Kk="@firebase/performance-compat",Yk="@firebase/remote-config",Qk="@firebase/remote-config-compat",Jk="@firebase/storage",Xk="@firebase/storage-compat",Zk="@firebase/firestore",e1="@firebase/ai",t1="@firebase/firestore-compat",n1="firebase",r1="12.11.0";/**
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
 */const wu="[DEFAULT]",i1={[xu]:"fire-core",[Pk]:"fire-core-compat",[jk]:"fire-analytics",[Ak]:"fire-analytics-compat",[Lk]:"fire-app-check",[Ok]:"fire-app-check-compat",[Mk]:"fire-auth",[Dk]:"fire-auth-compat",[Fk]:"fire-rtdb",[Uk]:"fire-data-connect",[Bk]:"fire-rtdb-compat",[zk]:"fire-fn",[Wk]:"fire-fn-compat",[Hk]:"fire-iid",[$k]:"fire-iid-compat",[Vk]:"fire-fcm",[Gk]:"fire-fcm-compat",[qk]:"fire-perf",[Kk]:"fire-perf-compat",[Yk]:"fire-rc",[Qk]:"fire-rc-compat",[Jk]:"fire-gcs",[Xk]:"fire-gcs-compat",[Zk]:"fire-fst",[t1]:"fire-fst-compat",[e1]:"fire-vertex","fire-js":"fire-js",[n1]:"fire-js-all"};/**
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
 */const pa=new Map,s1=new Map,Su=new Map;function lm(r,e){try{r.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ln(r){const e=r.name;if(Su.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Su.set(e,r);for(const n of pa.values())lm(n,r);for(const n of s1.values())lm(n,r);return!0}function Dr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Vt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const o1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new Mr("app","Firebase",o1);/**
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
 */class a1{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ni=r1;function iy(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:wu,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw nr.create("bad-app-name",{appName:String(a)});if(n||(n=qg()),!n)throw nr.create("no-options");const c=pa.get(a);if(c){if(sr(n,c.options)&&sr(s,c.config))return c;throw nr.create("duplicate-app",{appName:a})}const d=new pk(a);for(const m of Su.values())d.addComponent(m);const p=new a1(n,s,d);return pa.set(a,p),p}function Zu(r=wu){const e=pa.get(r);if(!e&&r===wu&&qg())return iy();if(!e)throw nr.create("no-app",{appName:r});return e}function Mt(r,e,n){let s=i1[r]??r;n&&(s+=`-${n}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(d.join(" "));return}ln(new Qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const l1="firebase-heartbeat-database",c1=1,Rs="firebase-heartbeat-store";let Xc=null;function sy(){return Xc||(Xc=ry(l1,c1,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Rs)}catch(n){console.warn(n)}}}}).catch(r=>{throw nr.create("idb-open",{originalErrorMessage:r.message})})),Xc}async function u1(r){try{const n=(await sy()).transaction(Rs),s=await n.objectStore(Rs).get(oy(r));return await n.done,s}catch(e){if(e instanceof cn)kn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function cm(r,e){try{const s=(await sy()).transaction(Rs,"readwrite");await s.objectStore(Rs).put(e,oy(r)),await s.done}catch(n){if(n instanceof cn)kn.warn(n.message);else{const s=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(s.message)}}}function oy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const d1=1024,h1=30;class f1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new m1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=um();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>h1){const d=g1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=um(),{heartbeatsToSend:s,unsentEntries:a}=p1(this._heartbeatsCache.heartbeats),c=da(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return kn.warn(n),""}}}function um(){return new Date().toISOString().substring(0,10)}function p1(r,e=d1){const n=[];let s=r.slice();for(const a of r){const c=n.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),dm(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),dm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class m1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jg()?Xg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await u1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return cm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return cm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dm(r){return da(JSON.stringify({version:2,heartbeats:r})).length}function g1(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function y1(r){ln(new Qt("platform-logger",e=>new Tk(e),"PRIVATE")),ln(new Qt("heartbeat",e=>new f1(e),"PRIVATE")),Mt(xu,am,r),Mt(xu,am,"esm2020"),Mt("fire-js","")}y1("");var hm={};const fm="@firebase/database",pm="1.1.2";/**
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
 */let ay="";function v1(r){ay=r}/**
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
 */class _1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class x1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return In(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ly=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _1(e)}}catch{}return new x1},Cr=ly("localStorage"),w1=ly("sessionStorage");/**
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
 */const mi=new Ma("@firebase/database"),S1=(function(){let r=1;return function(){return r++}})(),cy=function(r){const e=ok(r),n=new nk;n.update(e);const s=n.digest();return Ku.encodeByteArray(s)},Ms=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ms.apply(null,s):typeof s=="object"?e+=Ze(s):e+=s,e+=" "}return e};let Ss=null,mm=!0;const k1=function(r,e){B(!0,"Can't turn on custom loggers persistently."),mi.logLevel=ye.VERBOSE,Ss=mi.log.bind(mi)},it=function(...r){if(mm===!0&&(mm=!1,Ss===null&&w1.get("logging_enabled")===!0&&k1()),Ss){const e=Ms.apply(null,r);Ss(e)}},Ds=function(r){return function(...e){it(r,...e)}},ku=function(...r){const e="FIREBASE INTERNAL ERROR: "+Ms(...r);mi.error(e)},Cn=function(...r){const e=`FIREBASE FATAL ERROR: ${Ms(...r)}`;throw mi.error(e),new Error(e)},xt=function(...r){const e="FIREBASE WARNING: "+Ms(...r);mi.warn(e)},C1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uy=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},E1=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Nr="[MAX_NAME]",Ii=function(r,e){if(r===e)return 0;if(r===Si||e===Nr)return-1;if(e===Si||r===Nr)return 1;{const n=gm(r),s=gm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},b1=function(r,e){return r===e?0:r<e?-1:1},vs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ze(e))},ed=function(r){if(typeof r!="object"||r===null)return Ze(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ze(e[s]),n+=":",n+=ed(r[e[s]]);return n+="}",n},dy=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let a=0;a<n;a+=e)a+e>n?s.push(r.substring(a,n)):s.push(r.substring(a,a+e));return s};function Dt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const hy=function(r){B(!uy(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let a,c,d,p,m;r===0?(c=0,d=0,a=1/r===-1/0?1:0):(a=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(p=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=p+s,d=Math.round(r*Math.pow(2,n-p)-Math.pow(2,n))):(c=0,d=Math.round(r/Math.pow(2,1-s-n))));const y=[];for(m=n;m;m-=1)y.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)y.push(c%2?1:0),c=Math.floor(c/2);y.push(a?1:0),y.reverse();const x=y.join("");let v="";for(m=0;m<64;m+=8){let C=parseInt(x.substr(m,8),2).toString(16);C.length===1&&(C="0"+C),v=v+C}return v.toLowerCase()},N1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},I1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},T1=new RegExp("^-?(0*)\\d{1,10}$"),R1=-2147483648,P1=2147483647,gm=function(r){if(T1.test(r)){const e=Number(r);if(e>=R1&&e<=P1)return e}return null},Ti=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},A1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ks=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class j1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Vt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class O1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class sa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sa.OWNER="owner";/**
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
 */const td="5",fy="v",py="s",my="r",gy="f",yy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vy="ls",_y="p",Cu="ac",xy="websocket",wy="long_polling";/**
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
 */class Sy{constructor(e,n,s,a,c=!1,d="",p=!1,m=!1,y=null){this.secure=n,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=c,this.persistenceKey=d,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this.emulatorOptions=y,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function L1(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function ky(r,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let s;if(e===xy)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===wy)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);L1(r)&&(n.ns=r.namespace);const a=[];return Dt(n,(c,d)=>{a.push(c+"="+d)}),s+a.join("&")}/**
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
 */class M1{constructor(){this.counters_={}}incrementCounter(e,n=1){In(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return US(this.counters_)}}/**
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
 */const Zc={},eu={};function nd(r){const e=r.toString();return Zc[e]||(Zc[e]=new M1),Zc[e]}function D1(r,e){const n=r.toString();return eu[n]||(eu[n]=e()),eu[n]}/**
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
 */class F1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ti(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ym="start",U1="close",B1="pLPCommand",z1="pRTLPCB",Cy="id",Ey="pw",by="ser",W1="cb",H1="seg",$1="ts",V1="d",G1="dframe",Ny=1870,Iy=30,q1=Ny-Iy,K1=25e3,Y1=3e4;class hi{constructor(e,n,s,a,c,d,p){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.transportSessionId=d,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ds(e),this.stats_=nd(n),this.urlFn=m=>(this.appCheckToken&&(m[Cu]=this.appCheckToken),ky(n,wy,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new F1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Y1)),E1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rd((...c)=>{const[d,p,m,y,x]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===ym)this.id=p,this.password=m;else if(d===U1)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...c)=>{const[d,p]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(d,p)},()=>{this.onClosed_()},this.urlFn);const s={};s[ym]="t",s[by]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[W1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[fy]=td,this.transportSessionId&&(s[py]=this.transportSessionId),this.lastSessionId&&(s[vy]=this.lastSessionId),this.applicationId&&(s[_y]=this.applicationId),this.appCheckToken&&(s[Cu]=this.appCheckToken),typeof location<"u"&&location.hostname&&yy.test(location.hostname)&&(s[my]=gy);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hi.forceAllow_=!0}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){return hi.forceAllow_?!0:!hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!N1()&&!I1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$g(n),a=dy(s,q1);for(let c=0;c<a.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[G1]="t",s[Cy]=e,s[Ey]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rd{constructor(e,n,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=S1(),window[B1+this.uniqueCallbackIdentifier]=e,window[z1+this.uniqueCallbackIdentifier]=n,this.myIFrame=rd.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(p){it("frame writing exception"),p.stack&&it(p.stack),it(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cy]=this.myID,e[Ey]=this.myPW,e[by]=this.currentSerial;let n=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Iy+s.length<=Ny;){const d=this.pendingSegs.shift();s=s+"&"+H1+a+"="+d.seg+"&"+$1+a+"="+d.ts+"&"+V1+a+"="+d.d,a++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(s,Math.floor(K1)),c=()=>{clearTimeout(a),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Q1=16384,J1=45e3;let ma=null;typeof MozWebSocket<"u"?ma=MozWebSocket:typeof WebSocket<"u"&&(ma=WebSocket);class Gt{constructor(e,n,s,a,c,d,p){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ds(this.connId),this.stats_=nd(n),this.connURL=Gt.connectionURL_(n,d,p,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,a,c){const d={};return d[fy]=td,typeof location<"u"&&location.hostname&&yy.test(location.hostname)&&(d[my]=gy),n&&(d[py]=n),s&&(d[vy]=s),a&&(d[Cu]=a),c&&(d[_y]=c),ky(e,xy,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cr.set("previous_websocket_failure",!0);try{let s;YS(),this.mySock=new ma(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ma!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Cr.isInMemoryStorage||Cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ts(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=dy(n,Q1);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(J1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
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
 */class Ps{static get ALL_TRANSPORTS(){return[hi,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Gt&&Gt.isAvailable();let s=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Gt];else{const a=this.transports_=[];for(const c of Ps.ALL_TRANSPORTS)c&&c.isAvailable()&&a.push(c);Ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ps.globalTransportInitialized_=!1;/**
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
 */const X1=6e4,Z1=5e3,eC=10*1024,tC=100*1024,tu="t",vm="d",nC="s",_m="r",rC="e",xm="o",wm="a",Sm="n",km="p",iC="h";class sC{constructor(e,n,s,a,c,d,p,m,y,x){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=c,this.onMessage_=d,this.onReady_=p,this.onDisconnect_=m,this.onKill_=y,this.lastSessionId=x,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ds("c:"+this.id+":"),this.transportManager_=new Ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tu in e){const n=e[tu];n===wm?this.upgradeIfSecondaryHealthy_():n===_m?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vs("t",e),s=vs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:km,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vs("t",e),s=vs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vs(tu,e);if(vm in e){const s=e[vm];if(n===iC){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(n===Sm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nC?this.onConnectionShutdown_(s):n===_m?this.onReset_(s):n===rC?ku("Server Error: "+s):n===xm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ku("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),td!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(X1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Z1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:km,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ry{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const a=this.getInitialEvent(e);a&&n.apply(s,a)}off(e,n,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let c=0;c<a.length;c++)if(a[c].callback===n&&(!s||s===a[c].context)){a.splice(c,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ga extends Ry{static getInstance(){return new ga}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Cm=32,Em=768;class be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new be("")}function oe(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function or(r){return r.pieces_.length-r.pieceNum_}function Ee(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new be(r.pieces_,e)}function Py(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function oC(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ay(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function jy(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new be(e,0)}function ze(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof be)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&n.push(s[a])}return new be(n,0)}function ae(r){return r.pieceNum_>=r.pieces_.length}function Lt(r,e){const n=oe(r),s=oe(e);if(n===null)return e;if(n===s)return Lt(Ee(r),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function Oy(r,e){if(or(r)!==or(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function qt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(or(r)>or(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class aC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ay(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=La(this.parts_[s]);Ly(this)}}function lC(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=La(e),Ly(r)}function cC(r){const e=r.parts_.pop();r.byteLength_-=La(e),r.parts_.length>0&&(r.byteLength_-=1)}function Ly(r){if(r.byteLength_>Em)throw new Error(r.errorPrefix_+"has a key path longer than "+Em+" bytes ("+r.byteLength_+").");if(r.parts_.length>Cm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cm+") or object contains a cycle "+kr(r))}function kr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class id extends Ry{static getInstance(){return new id}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _s=1e3,uC=300*1e3,bm=30*1e3,dC=1.3,hC=3e4,fC="server_kill",Nm=3;class Sn extends Ty{constructor(e,n,s,a,c,d,p,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=c,this.authTokenProvider_=d,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=Sn.nextPersistentConnectionId_++,this.log_=Ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_s,this.maxReconnectDelay_=uC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");id.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ga.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const a=++this.requestNumber_,c={r:a,a:e,b:n};this.log_(Ze(c)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const n=new Oa,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const p=d.d;d.s==="ok"?n.resolve(p):n.reject(p)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,a){this.initConnection_();const c=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+c),this.listens.has(d)||this.listens.set(d,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(d).has(c),"listen() called twice for same path/queryId.");const p={onComplete:a,hashFn:n,query:e,tag:s};this.listens.get(d).set(c,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+s+" for "+a);const c={p:s},d="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(d,c,p=>{const m=p.d,y=p.s;Sn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",p),y!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(y,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&In(e,"w")){const s=wi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ek(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,a=>{const c=a.s,d=a.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,n)}sendUnlisten_(e,n,s,a){this.log_("Unlisten on "+e+" for "+n);const c={p:e},d="n";a&&(c.q=s,c.t=a),this.sendRequest(d,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,a){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,d=>{a&&setTimeout(()=>{a(d.s,d.d)},Math.floor(0))})}put(e,n,s,a){this.putInternal("p",e,n,s,a)}merge(e,n,s,a){this.putInternal("m",e,n,s,a)}putInternal(e,n,s,a,c){this.initConnection_();const d={p:n,d:s};c!==void 0&&(d.h=c),this.outstandingPuts_.push({action:e,request:d,onComplete:a}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ku("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hC&&(this.reconnectDelay_=_s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Sn.nextConnectionId_++,c=this.lastSessionId;let d=!1,p=null;const m=function(){p?p.close():(d=!0,s())},y=function(v){B(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(v)};this.realtime_={close:m,sendRequest:y};const x=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,C]=await Promise.all([this.authTokenProvider_.getToken(x),this.appCheckTokenProvider_.getToken(x)]);d?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=C&&C.token,p=new sC(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,T=>{xt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(fC)},c))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&xt(v),m())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yu(this.interruptReasons_)&&(this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>ed(c)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,n){const s=new be(e).toString();let a;if(this.listens.has(s)){const c=this.listens.get(s);a=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nm&&(this.reconnectDelay_=bm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ay.replace(/\./g,"-")]=1,Qu()?e["framework.cordova"]=1:Qg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ga.getInstance().currentlyOnline();return yu(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
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
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
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
 */class Da{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(Si,e),a=new le(Si,n);return this.compare(s,a)!==0}minPost(){return le.MIN}}/**
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
 */let ta;class My extends Da{static get __EMPTY_NODE(){return ta}static set __EMPTY_NODE(e){ta=e}compare(e,n){return Ii(e.name,n.name)}isDefinedOn(e){throw Ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(Nr,ta)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,ta)}toString(){return".key"}}const gi=new My;/**
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
 */class na{constructor(e,n,s,a,c=null){this.isReverse_=a,this.resultGenerator_=c,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,a&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??qe.RED,this.left=a??_t.EMPTY_NODE,this.right=c??_t.EMPTY_NODE}copy(e,n,s,a,c){return new qe(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return c<0?a=a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,a;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class pC{copy(e,n,s,a,c){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,a=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new na(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new na(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new na(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new na(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new pC;/**
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
 */function mC(r,e){return Ii(r.name,e.name)}function sd(r,e){return Ii(r,e)}/**
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
 */let Eu;function gC(r){Eu=r}const Dy=function(r){return typeof r=="number"?"number:"+hy(r):"string:"+r},Fy=function(r){if(r.isLeafNode()){const e=r.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&In(e,".sv"),"Priority must be a string or number.")}else B(r===Eu||r.isEmpty(),"priority of unexpected type.");B(r===Eu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Im;class Ge{static set __childrenNodeConstructor(e){Im=e}static get __childrenNodeConstructor(){return Im}constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:oe(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(B(s!==".priority"||or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hy(this.value_):e+=this.value_,this.lazyHash_=cy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,a=Ge.VALUE_TYPE_ORDER.indexOf(n),c=Ge.VALUE_TYPE_ORDER.indexOf(s);return B(a>=0,"Unknown leaf type: "+n),B(c>=0,"Unknown leaf type: "+s),a===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Uy,By;function yC(r){Uy=r}function vC(r){By=r}class _C extends Da{compare(e,n){const s=e.node.getPriority(),a=n.node.getPriority(),c=s.compareTo(a);return c===0?Ii(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Nr,new Ge("[PRIORITY-POST]",By))}makePost(e,n){const s=Uy(e);return new le(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const st=new _C;/**
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
 */const xC=Math.log(2);class wC{constructor(e){const n=c=>parseInt(Math.log(c)/xC,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ya=function(r,e,n,s){r.sort(e);const a=function(m,y){const x=y-m;let v,C;if(x===0)return null;if(x===1)return v=r[m],C=n?n(v):v,new qe(C,v.node,qe.BLACK,null,null);{const T=parseInt(x/2,10)+m,j=a(m,T),A=a(T+1,y);return v=r[T],C=n?n(v):v,new qe(C,v.node,qe.BLACK,j,A)}},c=function(m){let y=null,x=null,v=r.length;const C=function(j,A){const R=v-j,U=v;v-=j;const q=a(R+1,U),K=r[R],re=n?n(K):K;T(new qe(re,K.node,A,null,q))},T=function(j){y?(y.left=j,y=j):(x=j,y=j)};for(let j=0;j<m.count;++j){const A=m.nextBitIsOne(),R=Math.pow(2,m.count-(j+1));A?C(R,qe.BLACK):(C(R,qe.BLACK),C(R,qe.RED))}return x},d=new wC(r.length),p=c(d);return new _t(s||e,p)};/**
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
 */let nu;const di={};class _n{static get Default(){return B(di&&st,"ChildrenNode.ts has not been loaded"),nu=nu||new _n({".priority":di},{".priority":st}),nu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return In(this.indexSet_,e.toString())}addIndex(e,n){B(e!==gi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const c=n.getIterator(le.Wrap);let d=c.getNext();for(;d;)a=a||e.isDefinedOn(d.node),s.push(d),d=c.getNext();let p;a?p=ya(s,e.getCompare()):p=di;const m=e.toString(),y={...this.indexSet_};y[m]=e;const x={...this.indexes_};return x[m]=p,new _n(x,y)}addToIndexes(e,n){const s=fa(this.indexes_,(a,c)=>{const d=wi(this.indexSet_,c);if(B(d,"Missing index implementation for "+c),a===di)if(d.isDefinedOn(e.node)){const p=[],m=n.getIterator(le.Wrap);let y=m.getNext();for(;y;)y.name!==e.name&&p.push(y),y=m.getNext();return p.push(e),ya(p,d.getCompare())}else return di;else{const p=n.get(e.name);let m=a;return p&&(m=m.remove(new le(e.name,p))),m.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=fa(this.indexes_,a=>{if(a===di)return a;{const c=n.get(e.name);return c?a.remove(new le(e.name,c)):a}});return new _n(s,this.indexSet_)}}/**
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
 */let xs;class fe{static get EMPTY_NODE(){return xs||(xs=new fe(new _t(sd),null,_n.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fy(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xs}updatePriority(e){return this.children_.isEmpty()?this:new fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xs:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let a,c;n.isEmpty()?(a=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const d=a.isEmpty()?xs:this.priorityNode_;return new fe(a,d,c)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{B(oe(e)!==".priority"||or(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,a=0,c=!0;if(this.forEachChild(st,(d,p)=>{n[d]=p.val(e),s++,c&&fe.INTEGER_REGEXP_.test(d)?a=Math.max(a,Number(d)):c=!1}),!e&&c&&a<2*s){const d=[];for(const p in n)d[p]=n[p];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dy(this.getPriority().val())+":"),this.forEachChild(st,(n,s)=>{const a=s.hash();a!==""&&(e+=":"+n+":"+a)}),this.lazyHash_=e===""?"":cy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const a=this.resolveIndex_(s);if(a){const c=a.getPredecessorKey(new le(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,le.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)<0;)a.getNext(),c=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)>0;)a.getNext(),c=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fs?-1:0}withIndex(e){if(e===gi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(st),a=n.getIterator(st);let c=s.getNext(),d=a.getNext();for(;c&&d;){if(c.name!==d.name||!c.node.equals(d.node))return!1;c=s.getNext(),d=a.getNext()}return c===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===gi?null:this.indexMap_.get(e.toString())}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SC extends fe{constructor(){super(new _t(sd),fe.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fe.EMPTY_NODE}isEmpty(){return!1}}const Fs=new SC;Object.defineProperties(le,{MIN:{value:new le(Si,fe.EMPTY_NODE)},MAX:{value:new le(Nr,Fs)}});My.__EMPTY_NODE=fe.EMPTY_NODE;Ge.__childrenNodeConstructor=fe;gC(Fs);vC(Fs);/**
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
 */const kC=!0;function Xe(r,e=null){if(r===null)return fe.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ge(n,Xe(e))}if(!(r instanceof Array)&&kC){const n=[];let s=!1;if(Dt(r,(d,p)=>{if(d.substring(0,1)!=="."){const m=Xe(p);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new le(d,m)))}}),n.length===0)return fe.EMPTY_NODE;const c=ya(n,mC,d=>d.name,sd);if(s){const d=ya(n,st.getCompare());return new fe(c,Xe(e),new _n({".priority":d},{".priority":st}))}else return new fe(c,Xe(e),_n.Default)}else{let n=fe.EMPTY_NODE;return Dt(r,(s,a)=>{if(In(r,s)&&s.substring(0,1)!=="."){const c=Xe(a);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(Xe(e))}}yC(Xe);/**
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
 */class CC extends Da{constructor(e){super(),this.indexPath_=e,B(!ae(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),a=this.extractChild(n.node),c=s.compareTo(a);return c===0?Ii(e.name,n.name):c}makePost(e,n){const s=Xe(e),a=fe.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,a)}maxPost(){const e=fe.EMPTY_NODE.updateChild(this.indexPath_,Fs);return new le(Nr,e)}toString(){return Ay(this.indexPath_,0).join("/")}}/**
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
 */class EC extends Da{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ii(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=Xe(e);return new le(n,s)}toString(){return".value"}}const bC=new EC;/**
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
 */function NC(r){return{type:"value",snapshotNode:r}}function IC(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function TC(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Tm(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function RC(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=st}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===st}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===st?n="$priority":r.index_===bC?n="$value":r.index_===gi?n="$key":(B(r.index_ instanceof CC,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Ze(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Ze(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Ze(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Ze(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Ze(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Pm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==st&&(e.i=r.index_.toString()),e}/**
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
 */class va extends Ty{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Ds("p:rest:"),this.listens_={}}listen(e,n,s,a){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const d=va.getListenId_(e,s),p={};this.listens_[d]=p;const m=Rm(e._queryParams);this.restRequest_(c+".json",m,(y,x)=>{let v=x;if(y===404&&(v=null,y=null),y===null&&this.onDataUpdate_(c,v,!1,s),wi(this.listens_,d)===p){let C;y?y===401?C="permission_denied":C="rest_error:"+y:C="ok",a(C,null)}})}unlisten(e,n){const s=va.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Rm(e._queryParams),s=e._path.toString(),a=new Oa;return this.restRequest_(s+".json",n,(c,d)=>{let p=d;c===404&&(p=null,c=null),c===null?(this.onDataUpdate_(s,p,!1,null),a.resolve(p)):a.reject(new Error(p))}),a.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,c])=>{a&&a.accessToken&&(n.auth=a.accessToken),c&&c.token&&(n.ac=c.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bi(n);this.log_("Sending REST request for "+d);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(s&&p.readyState===4){this.log_("REST Response for "+d+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=Ts(p.responseText)}catch{xt("Failed to parse JSON response for "+d+": "+p.responseText)}s(null,m)}else p.status!==401&&p.status!==404&&xt("Got unsuccessful REST response for "+d+" Status: "+p.status),s(p.status);s=null}},p.open("GET",d,!0),p.send()})}}/**
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
 */class PC{constructor(){this.rootNode_=fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function _a(){return{value:null,children:new Map}}function zy(r,e,n){if(ae(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=oe(e);r.children.has(s)||r.children.set(s,_a());const a=r.children.get(s);e=Ee(e),zy(a,e,n)}}function bu(r,e,n){r.value!==null?n(e,r.value):AC(r,(s,a)=>{const c=new be(e.toString()+"/"+s);bu(a,c,n)})}function AC(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class jC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Dt(this.last_,(s,a)=>{n[s]=n[s]-a}),this.last_=e,n}}/**
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
 */const Am=10*1e3,OC=30*1e3,LC=300*1e3;class MC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jC(e);const s=Am+(OC-Am)*Math.random();ks(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Dt(e,(a,c)=>{c>0&&In(this.statsToReport_,a)&&(n[a]=c,s=!0)}),s&&this.server_.reportStats(n),ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*LC))}}/**
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
 */var rn;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function Wy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $y(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class xa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=rn.ACK_USER_WRITE,this.source=Wy()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new be(e));return new xa(ve(),n,this.revert)}}else return B(oe(this.path)===e,"operationForChild called for unrelated child."),new xa(Ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ir{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=rn.OVERWRITE}operationForChild(e){return ae(this.path)?new Ir(this.source,ve(),this.snap.getImmediateChild(e)):new Ir(this.source,Ee(this.path),this.snap)}}/**
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
 */class As{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=rn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new be(e));return n.isEmpty()?null:n.value?new Ir(this.source,ve(),n.value):new As(this.source,ve(),n)}else return B(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new As(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ad{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function DC(r,e,n,s){const a=[],c=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&c.push(RC(d.childName,d.snapshotNode))}),ws(r,a,"child_removed",e,s,n),ws(r,a,"child_added",e,s,n),ws(r,a,"child_moved",c,s,n),ws(r,a,"child_changed",e,s,n),ws(r,a,"value",e,s,n),a}function ws(r,e,n,s,a,c){const d=s.filter(p=>p.type===n);d.sort((p,m)=>UC(r,p,m)),d.forEach(p=>{const m=FC(r,p,c);a.forEach(y=>{y.respondsTo(p.type)&&e.push(y.createEvent(m,r.query_))})})}function FC(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function UC(r,e,n){if(e.childName==null||n.childName==null)throw Ei("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),a=new le(n.childName,n.snapshotNode);return r.index_.compare(s,a)}/**
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
 */function Vy(r,e){return{eventCache:r,serverCache:e}}function Cs(r,e,n,s){return Vy(new ad(e,n,s),r.serverCache)}function Gy(r,e,n,s){return Vy(r.eventCache,new ad(e,n,s))}function Nu(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Tr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let ru;const BC=()=>(ru||(ru=new _t(b1)),ru);class Ce{static fromObject(e){let n=new Ce(null);return Dt(e,(s,a)=>{n=n.set(new be(s),a)}),n}constructor(e,n=BC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ae(e))return null;{const s=oe(e),a=this.children.get(s);if(a!==null){const c=a.findRootMostMatchingPathAndValue(Ee(e),n);return c!=null?{path:ze(new be(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new Ce(null)}}set(e,n){if(ae(e))return new Ce(n,this.children);{const s=oe(e),c=(this.children.get(s)||new Ce(null)).set(Ee(e),n),d=this.children.insert(s,c);return new Ce(this.value,d)}}remove(e){if(ae(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const a=s.remove(Ee(e));let c;return a.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,a),this.value===null&&c.isEmpty()?new Ce(null):new Ce(this.value,c)}else return this}}get(e){if(ae(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(ae(e))return n;{const s=oe(e),c=(this.children.get(s)||new Ce(null)).setTree(Ee(e),n);let d;return c.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,c),new Ce(this.value,d)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((a,c)=>{s[a]=c.fold_(ze(e,a),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,s){const a=this.value?s(n,this.value):!1;if(a)return a;if(ae(e))return null;{const c=oe(e),d=this.children.get(c);return d?d.findOnPath_(Ee(e),ze(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const a=oe(e),c=this.children.get(a);return c?c.foreachOnPath_(Ee(e),ze(n,a),s):new Ce(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,a)=>{a.foreach_(ze(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new Ce(null))}}function Es(r,e,n){if(ae(e))return new Yt(new Ce(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let c=s.value;const d=Lt(a,e);return c=c.updateChild(d,n),new Yt(r.writeTree_.set(a,c))}else{const a=new Ce(n),c=r.writeTree_.setTree(e,a);return new Yt(c)}}}function jm(r,e,n){let s=r;return Dt(n,(a,c)=>{s=Es(s,ze(e,a),c)}),s}function Om(r,e){if(ae(e))return Yt.empty();{const n=r.writeTree_.setTree(e,new Ce(null));return new Yt(n)}}function Iu(r,e){return Fr(r,e)!=null}function Fr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function Lm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(st,(s,a)=>{e.push(new le(s,a))}):r.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new le(s,a.value))}),e}function rr(r,e){if(ae(e))return r;{const n=Fr(r,e);return n!=null?new Yt(new Ce(n)):new Yt(r.writeTree_.subtree(e))}}function Tu(r){return r.writeTree_.isEmpty()}function ki(r,e){return qy(ve(),r.writeTree_,e)}function qy(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((a,c)=>{a===".priority"?(B(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=qy(ze(r,a),c,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(ze(r,".priority"),s)),n}}/**
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
 */function Ky(r,e){return Zy(e,r)}function zC(r,e,n,s,a){B(s>r.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:a}),a&&(r.visibleWrites=Es(r.visibleWrites,e,n)),r.lastWriteId=s}function WC(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function HC(r,e){const n=r.allWrites.findIndex(p=>p.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let a=s.visible,c=!1,d=r.allWrites.length-1;for(;a&&d>=0;){const p=r.allWrites[d];p.visible&&(d>=n&&$C(p,s.path)?a=!1:qt(s.path,p.path)&&(c=!0)),d--}if(a){if(c)return VC(r),!0;if(s.snap)r.visibleWrites=Om(r.visibleWrites,s.path);else{const p=s.children;Dt(p,m=>{r.visibleWrites=Om(r.visibleWrites,ze(s.path,m))})}return!0}else return!1}function $C(r,e){if(r.snap)return qt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&qt(ze(r.path,n),e))return!0;return!1}function VC(r){r.visibleWrites=Yy(r.allWrites,GC,ve()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function GC(r){return r.visible}function Yy(r,e,n){let s=Yt.empty();for(let a=0;a<r.length;++a){const c=r[a];if(e(c)){const d=c.path;let p;if(c.snap)qt(n,d)?(p=Lt(n,d),s=Es(s,p,c.snap)):qt(d,n)&&(p=Lt(d,n),s=Es(s,ve(),c.snap.getChild(p)));else if(c.children){if(qt(n,d))p=Lt(n,d),s=jm(s,p,c.children);else if(qt(d,n))if(p=Lt(d,n),ae(p))s=jm(s,ve(),c.children);else{const m=wi(c.children,oe(p));if(m){const y=m.getChild(Ee(p));s=Es(s,ve(),y)}}}else throw Ei("WriteRecord should have .snap or .children")}}return s}function Qy(r,e,n,s,a){if(!s&&!a){const c=Fr(r.visibleWrites,e);if(c!=null)return c;{const d=rr(r.visibleWrites,e);if(Tu(d))return n;if(n==null&&!Iu(d,ve()))return null;{const p=n||fe.EMPTY_NODE;return ki(d,p)}}}else{const c=rr(r.visibleWrites,e);if(!a&&Tu(c))return n;if(!a&&n==null&&!Iu(c,ve()))return null;{const d=function(y){return(y.visible||a)&&(!s||!~s.indexOf(y.writeId))&&(qt(y.path,e)||qt(e,y.path))},p=Yy(r.allWrites,d,e),m=n||fe.EMPTY_NODE;return ki(p,m)}}}function qC(r,e,n){let s=fe.EMPTY_NODE;const a=Fr(r.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(st,(c,d)=>{s=s.updateImmediateChild(c,d)}),s;if(n){const c=rr(r.visibleWrites,e);return n.forEachChild(st,(d,p)=>{const m=ki(rr(c,new be(d)),p);s=s.updateImmediateChild(d,m)}),Lm(c).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const c=rr(r.visibleWrites,e);return Lm(c).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function KC(r,e,n,s,a){B(s||a,"Either existingEventSnap or existingServerSnap must exist");const c=ze(e,n);if(Iu(r.visibleWrites,c))return null;{const d=rr(r.visibleWrites,c);return Tu(d)?a.getChild(n):ki(d,a.getChild(n))}}function YC(r,e,n,s){const a=ze(e,n),c=Fr(r.visibleWrites,a);if(c!=null)return c;if(s.isCompleteForChild(n)){const d=rr(r.visibleWrites,a);return ki(d,s.getNode().getImmediateChild(n))}else return null}function QC(r,e){return Fr(r.visibleWrites,e)}function JC(r,e,n,s,a,c,d){let p;const m=rr(r.visibleWrites,e),y=Fr(m,ve());if(y!=null)p=y;else if(n!=null)p=ki(m,n);else return[];if(p=p.withIndex(d),!p.isEmpty()&&!p.isLeafNode()){const x=[],v=d.getCompare(),C=c?p.getReverseIteratorFrom(s,d):p.getIteratorFrom(s,d);let T=C.getNext();for(;T&&x.length<a;)v(T,s)!==0&&x.push(T),T=C.getNext();return x}else return[]}function XC(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function Ru(r,e,n,s){return Qy(r.writeTree,r.treePath,e,n,s)}function Jy(r,e){return qC(r.writeTree,r.treePath,e)}function Mm(r,e,n,s){return KC(r.writeTree,r.treePath,e,n,s)}function wa(r,e){return QC(r.writeTree,ze(r.treePath,e))}function ZC(r,e,n,s,a,c){return JC(r.writeTree,r.treePath,e,n,s,a,c)}function ld(r,e,n){return YC(r.writeTree,r.treePath,e,n)}function Xy(r,e){return Zy(ze(r.treePath,e),r.writeTree)}function Zy(r,e){return{treePath:r,writeTree:e}}/**
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
 */class eE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const c=a.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,Tm(s,e.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,TC(s,a.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,IC(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,Tm(s,e.snapshotNode,a.oldSnap));else throw Ei("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ev=new tE;class cd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ad(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ld(this.writes_,e,s)}}getChildAfterChild(e,n,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tr(this.viewCache_),c=ZC(this.writes_,a,n,1,s,e);return c.length===0?null:c[0]}}function nE(r,e){B(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function rE(r,e,n,s,a){const c=new eE;let d,p;if(n.type===rn.OVERWRITE){const y=n;y.source.fromUser?d=Pu(r,e,y.path,y.snap,s,a,c):(B(y.source.fromServer,"Unknown source."),p=y.source.tagged||e.serverCache.isFiltered()&&!ae(y.path),d=Sa(r,e,y.path,y.snap,s,a,p,c))}else if(n.type===rn.MERGE){const y=n;y.source.fromUser?d=sE(r,e,y.path,y.children,s,a,c):(B(y.source.fromServer,"Unknown source."),p=y.source.tagged||e.serverCache.isFiltered(),d=Au(r,e,y.path,y.children,s,a,p,c))}else if(n.type===rn.ACK_USER_WRITE){const y=n;y.revert?d=lE(r,e,y.path,s,a,c):d=oE(r,e,y.path,y.affectedTree,s,a,c)}else if(n.type===rn.LISTEN_COMPLETE)d=aE(r,e,n.path,s,c);else throw Ei("Unknown operation type: "+n.type);const m=c.getChanges();return iE(e,d,m),{viewCache:d,changes:m}}function iE(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Nu(r);(n.length>0||!r.eventCache.isFullyInitialized()||a&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(NC(Nu(e)))}}function tv(r,e,n,s,a,c){const d=e.eventCache;if(wa(s,n)!=null)return e;{let p,m;if(ae(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const y=Tr(e),x=y instanceof fe?y:fe.EMPTY_NODE,v=Jy(s,x);p=r.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const y=Ru(s,Tr(e));p=r.filter.updateFullNode(e.eventCache.getNode(),y,c)}else{const y=oe(n);if(y===".priority"){B(or(n)===1,"Can't have a priority with additional path components");const x=d.getNode();m=e.serverCache.getNode();const v=Mm(s,n,x,m);v!=null?p=r.filter.updatePriority(x,v):p=d.getNode()}else{const x=Ee(n);let v;if(d.isCompleteForChild(y)){m=e.serverCache.getNode();const C=Mm(s,n,d.getNode(),m);C!=null?v=d.getNode().getImmediateChild(y).updateChild(x,C):v=d.getNode().getImmediateChild(y)}else v=ld(s,y,e.serverCache);v!=null?p=r.filter.updateChild(d.getNode(),y,v,x,a,c):p=d.getNode()}}return Cs(e,p,d.isFullyInitialized()||ae(n),r.filter.filtersNodes())}}function Sa(r,e,n,s,a,c,d,p){const m=e.serverCache;let y;const x=d?r.filter:r.filter.getIndexedFilter();if(ae(n))y=x.updateFullNode(m.getNode(),s,null);else if(x.filtersNodes()&&!m.isFiltered()){const T=m.getNode().updateChild(n,s);y=x.updateFullNode(m.getNode(),T,null)}else{const T=oe(n);if(!m.isCompleteForPath(n)&&or(n)>1)return e;const j=Ee(n),R=m.getNode().getImmediateChild(T).updateChild(j,s);T===".priority"?y=x.updatePriority(m.getNode(),R):y=x.updateChild(m.getNode(),T,R,j,ev,null)}const v=Gy(e,y,m.isFullyInitialized()||ae(n),x.filtersNodes()),C=new cd(a,v,c);return tv(r,v,n,a,C,p)}function Pu(r,e,n,s,a,c,d){const p=e.eventCache;let m,y;const x=new cd(a,e,c);if(ae(n))y=r.filter.updateFullNode(e.eventCache.getNode(),s,d),m=Cs(e,y,!0,r.filter.filtersNodes());else{const v=oe(n);if(v===".priority")y=r.filter.updatePriority(e.eventCache.getNode(),s),m=Cs(e,y,p.isFullyInitialized(),p.isFiltered());else{const C=Ee(n),T=p.getNode().getImmediateChild(v);let j;if(ae(C))j=s;else{const A=x.getCompleteChild(v);A!=null?Py(C)===".priority"&&A.getChild(jy(C)).isEmpty()?j=A:j=A.updateChild(C,s):j=fe.EMPTY_NODE}if(T.equals(j))m=e;else{const A=r.filter.updateChild(p.getNode(),v,j,C,x,d);m=Cs(e,A,p.isFullyInitialized(),r.filter.filtersNodes())}}}return m}function Dm(r,e){return r.eventCache.isCompleteForChild(e)}function sE(r,e,n,s,a,c,d){let p=e;return s.foreach((m,y)=>{const x=ze(n,m);Dm(e,oe(x))&&(p=Pu(r,p,x,y,a,c,d))}),s.foreach((m,y)=>{const x=ze(n,m);Dm(e,oe(x))||(p=Pu(r,p,x,y,a,c,d))}),p}function Fm(r,e,n){return n.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Au(r,e,n,s,a,c,d,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,y;ae(n)?y=s:y=new Ce(null).setTree(n,s);const x=e.serverCache.getNode();return y.children.inorderTraversal((v,C)=>{if(x.hasChild(v)){const T=e.serverCache.getNode().getImmediateChild(v),j=Fm(r,T,C);m=Sa(r,m,new be(v),j,a,c,d,p)}}),y.children.inorderTraversal((v,C)=>{const T=!e.serverCache.isCompleteForChild(v)&&C.value===null;if(!x.hasChild(v)&&!T){const j=e.serverCache.getNode().getImmediateChild(v),A=Fm(r,j,C);m=Sa(r,m,new be(v),A,a,c,d,p)}}),m}function oE(r,e,n,s,a,c,d){if(wa(a,n)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(ae(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return Sa(r,e,n,m.getNode().getChild(n),a,c,p,d);if(ae(n)){let y=new Ce(null);return m.getNode().forEachChild(gi,(x,v)=>{y=y.set(new be(x),v)}),Au(r,e,n,y,a,c,p,d)}else return e}else{let y=new Ce(null);return s.foreach((x,v)=>{const C=ze(n,x);m.isCompleteForPath(C)&&(y=y.set(x,m.getNode().getChild(C)))}),Au(r,e,n,y,a,c,p,d)}}function aE(r,e,n,s,a){const c=e.serverCache,d=Gy(e,c.getNode(),c.isFullyInitialized()||ae(n),c.isFiltered());return tv(r,d,n,s,ev,a)}function lE(r,e,n,s,a,c){let d;if(wa(s,n)!=null)return e;{const p=new cd(s,e,a),m=e.eventCache.getNode();let y;if(ae(n)||oe(n)===".priority"){let x;if(e.serverCache.isFullyInitialized())x=Ru(s,Tr(e));else{const v=e.serverCache.getNode();B(v instanceof fe,"serverChildren would be complete if leaf node"),x=Jy(s,v)}x=x,y=r.filter.updateFullNode(m,x,c)}else{const x=oe(n);let v=ld(s,x,e.serverCache);v==null&&e.serverCache.isCompleteForChild(x)&&(v=m.getImmediateChild(x)),v!=null?y=r.filter.updateChild(m,x,v,Ee(n),p,c):e.eventCache.getNode().hasChild(x)?y=r.filter.updateChild(m,x,fe.EMPTY_NODE,Ee(n),p,c):y=m,y.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Ru(s,Tr(e)),d.isLeafNode()&&(y=r.filter.updateFullNode(y,d,c)))}return d=e.serverCache.isFullyInitialized()||wa(s,ve())!=null,Cs(e,y,d,r.filter.filtersNodes())}}function cE(r,e){const n=Tr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function Um(r,e,n,s){e.type===rn.MERGE&&e.source.queryId!==null&&(B(Tr(r.viewCache_),"We should always have a full cache before handling merges"),B(Nu(r.viewCache_),"Missing event cache, even though we have a server cache"));const a=r.viewCache_,c=rE(r.processor_,a,e,n,s);return nE(r.processor_,c.viewCache),B(c.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,uE(r,c.changes,c.viewCache.eventCache.getNode())}function uE(r,e,n,s){const a=r.eventRegistrations_;return DC(r.eventGenerator_,e,n,a)}/**
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
 */let Bm;function dE(r){B(!Bm,"__referenceConstructor has already been defined"),Bm=r}function ud(r,e,n,s){const a=e.source.queryId;if(a!==null){const c=r.views.get(a);return B(c!=null,"SyncTree gave us an op for an invalid query."),Um(c,e,n,s)}else{let c=[];for(const d of r.views.values())c=c.concat(Um(d,e,n,s));return c}}function dd(r,e){let n=null;for(const s of r.views.values())n=n||cE(s,e);return n}/**
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
 */let zm;function hE(r){B(!zm,"__referenceConstructor has already been defined"),zm=r}class Wm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=XC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nv(r,e,n,s,a){return zC(r.pendingWriteTree_,e,n,s,a),a?Ua(r,new Ir(Wy(),e,n)):[]}function Er(r,e,n=!1){const s=WC(r.pendingWriteTree_,e);if(HC(r.pendingWriteTree_,e)){let c=new Ce(null);return s.snap!=null?c=c.set(ve(),!0):Dt(s.children,d=>{c=c.set(new be(d),!0)}),Ua(r,new xa(s.path,c,n))}else return[]}function Fa(r,e,n){return Ua(r,new Ir(Hy(),e,n))}function fE(r,e,n){const s=Ce.fromObject(n);return Ua(r,new As(Hy(),e,s))}function pE(r,e,n,s){const a=sv(r,s);if(a!=null){const c=ov(a),d=c.path,p=c.queryId,m=Lt(d,e),y=new Ir($y(p),m,n);return av(r,d,y)}else return[]}function mE(r,e,n,s){const a=sv(r,s);if(a){const c=ov(a),d=c.path,p=c.queryId,m=Lt(d,e),y=Ce.fromObject(n),x=new As($y(p),m,y);return av(r,d,x)}else return[]}function hd(r,e,n){const a=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(d,p)=>{const m=Lt(d,e),y=dd(p,m);if(y)return y});return Qy(a,e,c,n,!0)}function Ua(r,e){return rv(e,r.syncPointTree_,null,Ky(r.pendingWriteTree_,ve()))}function rv(r,e,n,s){if(ae(r.path))return iv(r,e,n,s);{const a=e.get(ve());n==null&&a!=null&&(n=dd(a,ve()));let c=[];const d=oe(r.path),p=r.operationForChild(d),m=e.children.get(d);if(m&&p){const y=n?n.getImmediateChild(d):null,x=Xy(s,d);c=c.concat(rv(p,m,y,x))}return a&&(c=c.concat(ud(a,r,s,n))),c}}function iv(r,e,n,s){const a=e.get(ve());n==null&&a!=null&&(n=dd(a,ve()));let c=[];return e.children.inorderTraversal((d,p)=>{const m=n?n.getImmediateChild(d):null,y=Xy(s,d),x=r.operationForChild(d);x&&(c=c.concat(iv(x,p,m,y)))}),a&&(c=c.concat(ud(a,r,s,n))),c}function sv(r,e){return r.tagToQueryMap.get(e)}function ov(r){const e=r.indexOf("$");return B(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new be(r.substr(0,e))}}function av(r,e,n){const s=r.syncPointTree_.get(e);B(s,"Missing sync point for query tag that we're tracking");const a=Ky(r.pendingWriteTree_,e);return ud(s,n,a,null)}/**
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
 */class fd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fd(n)}node(){return this.node_}}class pd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new pd(this.syncTree_,n)}node(){return hd(this.syncTree_,this.path_)}}const gE=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Hm=function(r,e,n){if(!r||typeof r!="object")return r;if(B(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return yE(r[".sv"],e,n);if(typeof r[".sv"]=="object")return vE(r[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},yE=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+r)}},vE=function(r,e,n){r.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&B(!1,"Unexpected increment value: "+s);const a=e.node();if(B(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const d=a.getValue();return typeof d!="number"?s:d+s},_E=function(r,e,n,s){return md(e,new pd(n,r),s)},lv=function(r,e,n){return md(r,new fd(e),n)};function md(r,e,n){const s=r.getPriority().val(),a=Hm(s,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const d=r,p=Hm(d.getValue(),e,n);return p!==d.getValue()||a!==d.getPriority().val()?new Ge(p,Xe(a)):r}else{const d=r;return c=d,a!==d.getPriority().val()&&(c=c.updatePriority(new Ge(a))),d.forEachChild(st,(p,m)=>{const y=md(m,e.getImmediateChild(p),n);y!==m&&(c=c.updateImmediateChild(p,y))}),c}}/**
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
 */class gd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yd(r,e){let n=e instanceof be?e:new be(e),s=r,a=oe(n);for(;a!==null;){const c=wi(s.node.children,a)||{children:{},childCount:0};s=new gd(a,s,c),n=Ee(n),a=oe(n)}return s}function Ri(r){return r.node.value}function cv(r,e){r.node.value=e,ju(r)}function uv(r){return r.node.childCount>0}function xE(r){return Ri(r)===void 0&&!uv(r)}function Ba(r,e){Dt(r.node.children,(n,s)=>{e(new gd(n,r,s))})}function dv(r,e,n,s){n&&e(r),Ba(r,a=>{dv(a,e,!0)})}function wE(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Us(r){return new be(r.parent===null?r.name:Us(r.parent)+"/"+r.name)}function ju(r){r.parent!==null&&SE(r.parent,r.name,r)}function SE(r,e,n){const s=xE(n),a=In(r.node.children,e);s&&a?(delete r.node.children[e],r.node.childCount--,ju(r)):!s&&!a&&(r.node.children[e]=n.node,r.node.childCount++,ju(r))}/**
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
 */const kE=/[\[\].#$\/\u0000-\u001F\u007F]/,CE=/[\[\].#$\u0000-\u001F\u007F]/,iu=10*1024*1024,hv=function(r){return typeof r=="string"&&r.length!==0&&!kE.test(r)},fv=function(r){return typeof r=="string"&&r.length!==0&&!CE.test(r)},EE=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),fv(r)},pv=function(r,e,n,s){s&&e===void 0||vd(Ju(r,"value"),e,n)},vd=function(r,e,n){const s=n instanceof be?new aC(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+kr(s));if(typeof e=="function")throw new Error(r+"contains a function "+kr(s)+" with contents = "+e.toString());if(uy(e))throw new Error(r+"contains "+e.toString()+" "+kr(s));if(typeof e=="string"&&e.length>iu/3&&La(e)>iu)throw new Error(r+"contains a string greater than "+iu+" utf8 bytes "+kr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,c=!1;if(Dt(e,(d,p)=>{if(d===".value")a=!0;else if(d!==".priority"&&d!==".sv"&&(c=!0,!hv(d)))throw new Error(r+" contains an invalid key ("+d+") "+kr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lC(s,d),vd(r,p,s),cC(s)}),a&&c)throw new Error(r+' contains ".value" child '+kr(s)+" in addition to actual children.")}},mv=function(r,e,n,s){if(!fv(n))throw new Error(Ju(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bE=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mv(r,e,n)},gv=function(r,e){if(oe(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},NE=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EE(n))throw new Error(Ju(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class IE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yv(r,e){let n=null;for(let s=0;s<e.length;s++){const a=e[s],c=a.getPath();n!==null&&!Oy(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(a)}n&&r.eventLists_.push(n)}function En(r,e,n){yv(r,n),TE(r,s=>qt(s,e)||qt(e,s))}function TE(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const a=r.eventLists_[s];if(a){const c=a.path;e(c)?(RE(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function RE(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Ss&&it("event: "+n.toString()),Ti(s)}}}/**
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
 */const PE="repo_interrupt",AE=25;class jE{constructor(e,n,s,a){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_a(),this.transactionQueueTree_=new gd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OE(r,e,n){if(r.stats_=nd(r.repoInfo_),r.forceRestClient_||A1())r.server_=new va(r.repoInfo_,(s,a,c,d)=>{$m(r,s,a,c,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Vm(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Sn(r.repoInfo_,e,(s,a,c,d)=>{$m(r,s,a,c,d)},s=>{Vm(r,s)},s=>{LE(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=D1(r.repoInfo_,()=>new MC(r.stats_,r.server_)),r.infoData_=new PC,r.infoSyncTree_=new Wm({startListening:(s,a,c,d)=>{let p=[];const m=r.infoData_.getNode(s._path);return m.isEmpty()||(p=Fa(r.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),p},stopListening:()=>{}}),xd(r,"connected",!1),r.serverSyncTree_=new Wm({startListening:(s,a,c,d)=>(r.server_.listen(s,c,a,(p,m)=>{const y=d(p,m);En(r.eventQueue_,s._path,y)}),[]),stopListening:(s,a)=>{r.server_.unlisten(s,a)}})}function vv(r){const n=r.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _d(r){return gE({timestamp:vv(r)})}function $m(r,e,n,s,a){r.dataUpdateCount++;const c=new be(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(a)if(s){const m=fa(n,y=>Xe(y));d=mE(r.serverSyncTree_,c,m,a)}else{const m=Xe(n);d=pE(r.serverSyncTree_,c,m,a)}else if(s){const m=fa(n,y=>Xe(y));d=fE(r.serverSyncTree_,c,m)}else{const m=Xe(n);d=Fa(r.serverSyncTree_,c,m)}let p=c;d.length>0&&(p=za(r,c)),En(r.eventQueue_,p,d)}function Vm(r,e){xd(r,"connected",e),e===!1&&DE(r)}function LE(r,e){Dt(e,(n,s)=>{xd(r,n,s)})}function xd(r,e,n){const s=new be("/.info/"+e),a=Xe(n);r.infoData_.updateSnapshot(s,a);const c=Fa(r.infoSyncTree_,s,a);En(r.eventQueue_,s,c)}function _v(r){return r.nextWriteId_++}function ME(r,e,n,s,a){wd(r,"set",{path:e.toString(),value:n,priority:s});const c=_d(r),d=Xe(n,s),p=hd(r.serverSyncTree_,e),m=lv(d,p,c),y=_v(r),x=nv(r.serverSyncTree_,e,m,y,!0);yv(r.eventQueue_,x),r.server_.put(e.toString(),d.val(!0),(C,T)=>{const j=C==="ok";j||xt("set at "+e+" failed: "+C);const A=Er(r.serverSyncTree_,y,!j);En(r.eventQueue_,e,A),UE(r,a,C,T)});const v=Cv(r,e);za(r,v),En(r.eventQueue_,v,[])}function DE(r){wd(r,"onDisconnectEvents");const e=_d(r),n=_a();bu(r.onDisconnect_,ve(),(a,c)=>{const d=_E(a,c,r.serverSyncTree_,e);zy(n,a,d)});let s=[];bu(n,ve(),(a,c)=>{s=s.concat(Fa(r.serverSyncTree_,a,c));const d=Cv(r,a);za(r,d)}),r.onDisconnect_=_a(),En(r.eventQueue_,ve(),s)}function FE(r){r.persistentConnection_&&r.persistentConnection_.interrupt(PE)}function wd(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),it(n,...e)}function UE(r,e,n,s){e&&Ti(()=>{if(n==="ok")e(null);else{const a=(n||"error").toUpperCase();let c=a;s&&(c+=": "+s);const d=new Error(c);d.code=a,e(d)}})}function xv(r,e,n){return hd(r.serverSyncTree_,e,n)||fe.EMPTY_NODE}function Sd(r,e=r.transactionQueueTree_){if(e||Wa(r,e),Ri(e)){const n=Sv(r,e);B(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&BE(r,Us(e),n)}else uv(e)&&Ba(e,n=>{Sd(r,n)})}function BE(r,e,n){const s=n.map(y=>y.currentWriteId),a=xv(r,e,s);let c=a;const d=a.hash();for(let y=0;y<n.length;y++){const x=n[y];B(x.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),x.status=1,x.retryCount++;const v=Lt(e,x.path);c=c.updateChild(v,x.currentOutputSnapshotRaw)}const p=c.val(!0),m=e;r.server_.put(m.toString(),p,y=>{wd(r,"transaction put response",{path:m.toString(),status:y});let x=[];if(y==="ok"){const v=[];for(let C=0;C<n.length;C++)n[C].status=2,x=x.concat(Er(r.serverSyncTree_,n[C].currentWriteId)),n[C].onComplete&&v.push(()=>n[C].onComplete(null,!0,n[C].currentOutputSnapshotResolved)),n[C].unwatcher();Wa(r,yd(r.transactionQueueTree_,e)),Sd(r,r.transactionQueueTree_),En(r.eventQueue_,e,x);for(let C=0;C<v.length;C++)Ti(v[C])}else{if(y==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{xt("transaction at "+m.toString()+" failed: "+y);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=y}za(r,e)}},d)}function za(r,e){const n=wv(r,e),s=Us(n),a=Sv(r,n);return zE(r,a,s),s}function zE(r,e,n){if(e.length===0)return;const s=[];let a=[];const d=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],y=Lt(n,m.path);let x=!1,v;if(B(y!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)x=!0,v=m.abortReason,a=a.concat(Er(r.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=AE)x=!0,v="maxretry",a=a.concat(Er(r.serverSyncTree_,m.currentWriteId,!0));else{const C=xv(r,m.path,d);m.currentInputSnapshot=C;const T=e[p].update(C.val());if(T!==void 0){vd("transaction failed: Data returned ",T,m.path);let j=Xe(T);typeof T=="object"&&T!=null&&In(T,".priority")||(j=j.updatePriority(C.getPriority()));const R=m.currentWriteId,U=_d(r),q=lv(j,C,U);m.currentOutputSnapshotRaw=j,m.currentOutputSnapshotResolved=q,m.currentWriteId=_v(r),d.splice(d.indexOf(R),1),a=a.concat(nv(r.serverSyncTree_,m.path,q,m.currentWriteId,m.applyLocally)),a=a.concat(Er(r.serverSyncTree_,R,!0))}else x=!0,v="nodata",a=a.concat(Er(r.serverSyncTree_,m.currentWriteId,!0))}En(r.eventQueue_,n,a),a=[],x&&(e[p].status=2,(function(C){setTimeout(C,Math.floor(0))})(e[p].unwatcher),e[p].onComplete&&(v==="nodata"?s.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):s.push(()=>e[p].onComplete(new Error(v),!1,null))))}Wa(r,r.transactionQueueTree_);for(let p=0;p<s.length;p++)Ti(s[p]);Sd(r,r.transactionQueueTree_)}function wv(r,e){let n,s=r.transactionQueueTree_;for(n=oe(e);n!==null&&Ri(s)===void 0;)s=yd(s,n),e=Ee(e),n=oe(e);return s}function Sv(r,e){const n=[];return kv(r,e,n),n.sort((s,a)=>s.order-a.order),n}function kv(r,e,n){const s=Ri(e);if(s)for(let a=0;a<s.length;a++)n.push(s[a]);Ba(e,a=>{kv(r,a,n)})}function Wa(r,e){const n=Ri(e);if(n){let s=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[s]=n[a],s++);n.length=s,cv(e,n.length>0?n:void 0)}Ba(e,s=>{Wa(r,s)})}function Cv(r,e){const n=Us(wv(r,e)),s=yd(r.transactionQueueTree_,e);return wE(s,a=>{su(r,a)}),su(r,s),dv(s,a=>{su(r,a)}),n}function su(r,e){const n=Ri(e);if(n){const s=[];let a=[],c=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(B(c===d-1,"All SENT items should be at beginning of queue."),c=d,n[d].status=3,n[d].abortReason="set"):(B(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),a=a.concat(Er(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));c===-1?cv(e,void 0):n.length=c+1,En(r.eventQueue_,Us(e),a);for(let d=0;d<s.length;d++)Ti(s[d])}}/**
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
 */function WE(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let a=n[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function HE(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Gm=function(r,e){const n=$E(r),s=n.namespace;n.domain==="firebase.com"&&Cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||C1();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sy(n.host,n.secure,s,a,e,"",s!==n.subdomain),path:new be(n.pathString)}},$E=function(r){let e="",n="",s="",a="",c="",d=!0,p="https",m=443;if(typeof r=="string"){let y=r.indexOf("//");y>=0&&(p=r.substring(0,y-1),r=r.substring(y+2));let x=r.indexOf("/");x===-1&&(x=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(x,v)),x<v&&(a=WE(r.substring(x,v)));const C=HE(r.substring(Math.min(r.length,v)));y=e.indexOf(":"),y>=0?(d=p==="https"||p==="wss",m=parseInt(e.substring(y+1),10)):y=e.length;const T=e.slice(0,y);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const j=e.indexOf(".");s=e.substring(0,j).toLowerCase(),n=e.substring(j+1),c=s}"ns"in C&&(c=C.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:p,pathString:a,namespace:c}};/**
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
 */const qm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",VE=(function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let a;const c=new Array(8);for(a=7;a>=0;a--)c[a]=qm.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let d=c.join("");if(s){for(a=11;a>=0&&e[a]===63;a--)e[a]=0;e[a]++}else for(a=0;a<12;a++)e[a]=Math.floor(Math.random()*64);for(a=0;a<12;a++)d+=qm.charAt(e[a]);return B(d.length===20,"nextPushId: Length should be 20."),d}})();/**
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
 */class kd{constructor(e,n,s,a){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=a}get key(){return ae(this._path)?null:Py(this._path)}get ref(){return new Ur(this._repo,this._path)}get _queryIdentifier(){const e=Pm(this._queryParams),n=ed(e);return n==="{}"?"default":n}get _queryObject(){return Pm(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof kd))return!1;const n=this._repo===e._repo,s=Oy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return n&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+oC(this._path)}}class Ur extends kd{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=jy(this._path);return e===null?null:new Ur(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function GE(r,e){return r=dt(r),r._checkNotDeleted("ref"),e!==void 0?Ou(r._root,e):r._root}function Ou(r,e){return r=dt(r),oe(r._path)===null?bE("child","path",e):mv("child","path",e),new Ur(r._repo,ze(r._path,e))}function qE(r,e){r=dt(r),gv("push",r._path),pv("push",e,r._path,!0);const n=vv(r._repo),s=VE(n),a=Ou(r,s),c=Ou(r,s);let d;return e!=null?d=KE(c,e).then(()=>c):d=Promise.resolve(c),a.then=d.then.bind(d),a.catch=d.then.bind(d,void 0),a}function KE(r,e){r=dt(r),gv("set",r._path),pv("set",e,r._path,!1);const n=new Oa;return ME(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}dE(Ur);hE(Ur);/**
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
 */const YE="FIREBASE_DATABASE_EMULATOR_HOST",Lu={};let QE=!1;function JE(r,e,n,s){const a=e.lastIndexOf(":"),c=e.substring(0,a),d=Ls(c);r.repoInfo_=new Sy(e,d,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function XE(r,e,n,s,a){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Gm(c,a),p=d.repoInfo,m;typeof process<"u"&&hm&&(m=hm[YE]),m?(c=`http://${m}?ns=${p.namespace}`,d=Gm(c,a),p=d.repoInfo):d.repoInfo.secure;const y=new O1(r.name,r.options,e);NE("Invalid Firebase Database URL",d),ae(d.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const x=eb(p,r,y,new j1(r,n));return new tb(x,r)}function ZE(r,e){const n=Lu[e];(!n||n[r.key]!==r)&&Cn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),FE(r),delete n[r.key]}function eb(r,e,n,s){let a=Lu[e.name];a||(a={},Lu[e.name]=a);let c=a[r.toURLString()];return c&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new jE(r,QE,n,s),a[r.toURLString()]=c,c}class tb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ur(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}function nb(r=Zu(),e){const n=Dr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=VS("database");s&&rb(n,...s)}return n}function rb(r,e,n,s={}){r=dt(r),r._checkNotDeleted("useEmulator");const a=`${e}:${n}`,c=r._repoInternal;if(r._instanceStarted){if(a===r._repoInternal.repoInfo_.host&&sr(s,c.repoInfo_.emulatorOptions))return;Cn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new sa(sa.OWNER);else if(s.mockUserToken){const p=typeof s.mockUserToken=="string"?s.mockUserToken:GS(s.mockUserToken,r.app.options.projectId);d=new sa(p)}Ls(e)&&ey(e),JE(c,a,s,d)}/**
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
 */function ib(r){v1(Ni),ln(new Qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return XE(s,a,c,n)},"PUBLIC").setMultipleInstances(!0)),Mt(fm,pm,r),Mt(fm,pm,"esm2020")}Sn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Sn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};ib();var sb="firebase",ob="12.11.0";/**
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
 */Mt(sb,ob,"app");const Ev="@firebase/installations",Cd="0.6.21";/**
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
 */const bv=1e4,Nv=`w:${Cd}`,Iv="FIS_v2",ab="https://firebaseinstallations.googleapis.com/v1",lb=3600*1e3,cb="installations",ub="Installations";/**
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
 */const db={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rr=new Mr(cb,ub,db);function Tv(r){return r instanceof cn&&r.code.includes("request-failed")}/**
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
 */function Rv({projectId:r}){return`${ab}/projects/${r}/installations`}function Pv(r){return{token:r.token,requestStatus:2,expiresIn:fb(r.expiresIn),creationTime:Date.now()}}async function Av(r,e){const s=(await e.json()).error;return Rr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function jv({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function hb(r,{refreshToken:e}){const n=jv(r);return n.append("Authorization",pb(e)),n}async function Ov(r){const e=await r();return e.status>=500&&e.status<600?r():e}function fb(r){return Number(r.replace("s","000"))}function pb(r){return`${Iv} ${r}`}/**
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
 */async function mb({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=Rv(r),a=jv(r),c=e.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&a.append("x-firebase-client",y)}const d={fid:n,authVersion:Iv,appId:r.appId,sdkVersion:Nv},p={method:"POST",headers:a,body:JSON.stringify(d)},m=await Ov(()=>fetch(s,p));if(m.ok){const y=await m.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:Pv(y.authToken)}}else throw await Av("Create Installation",m)}/**
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
 */function Lv(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function gb(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yb=/^[cdef][\w-]{21}$/,Mu="";function vb(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=_b(r);return yb.test(n)?n:Mu}catch{return Mu}}function _b(r){return gb(r).substr(0,22)}/**
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
 */function Ha(r){return`${r.appName}!${r.appId}`}/**
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
 */const Mv=new Map;function Dv(r,e){const n=Ha(r);Fv(n,e),xb(n,e)}function Fv(r,e){const n=Mv.get(r);if(n)for(const s of n)s(e)}function xb(r,e){const n=wb();n&&n.postMessage({key:r,fid:e}),Sb()}let br=null;function wb(){return!br&&"BroadcastChannel"in self&&(br=new BroadcastChannel("[Firebase] FID Change"),br.onmessage=r=>{Fv(r.data.key,r.data.fid)}),br}function Sb(){Mv.size===0&&br&&(br.close(),br=null)}/**
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
 */const kb="firebase-installations-database",Cb=1,Pr="firebase-installations-store";let ou=null;function Ed(){return ou||(ou=ry(kb,Cb,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Pr)}}})),ou}async function ka(r,e){const n=Ha(r),a=(await Ed()).transaction(Pr,"readwrite"),c=a.objectStore(Pr),d=await c.get(n);return await c.put(e,n),await a.done,(!d||d.fid!==e.fid)&&Dv(r,e.fid),e}async function Uv(r){const e=Ha(r),s=(await Ed()).transaction(Pr,"readwrite");await s.objectStore(Pr).delete(e),await s.done}async function $a(r,e){const n=Ha(r),a=(await Ed()).transaction(Pr,"readwrite"),c=a.objectStore(Pr),d=await c.get(n),p=e(d);return p===void 0?await c.delete(n):await c.put(p,n),await a.done,p&&(!d||d.fid!==p.fid)&&Dv(r,p.fid),p}/**
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
 */async function bd(r){let e;const n=await $a(r.appConfig,s=>{const a=Eb(s),c=bb(r,a);return e=c.registrationPromise,c.installationEntry});return n.fid===Mu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Eb(r){const e=r||{fid:vb(),registrationStatus:0};return Bv(e)}function bb(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Rr.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Nb(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ib(r)}:{installationEntry:e}}async function Nb(r,e){try{const n=await mb(r,e);return ka(r.appConfig,n)}catch(n){throw Tv(n)&&n.customData.serverCode===409?await Uv(r.appConfig):await ka(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ib(r){let e=await Km(r.appConfig);for(;e.registrationStatus===1;)await Lv(100),e=await Km(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await bd(r);return s||n}return e}function Km(r){return $a(r,e=>{if(!e)throw Rr.create("installation-not-found");return Bv(e)})}function Bv(r){return Tb(r)?{fid:r.fid,registrationStatus:0}:r}function Tb(r){return r.registrationStatus===1&&r.registrationTime+bv<Date.now()}/**
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
 */async function Rb({appConfig:r,heartbeatServiceProvider:e},n){const s=Pb(r,n),a=hb(r,n),c=e.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&a.append("x-firebase-client",y)}const d={installation:{sdkVersion:Nv,appId:r.appId}},p={method:"POST",headers:a,body:JSON.stringify(d)},m=await Ov(()=>fetch(s,p));if(m.ok){const y=await m.json();return Pv(y)}else throw await Av("Generate Auth Token",m)}function Pb(r,{fid:e}){return`${Rv(r)}/${e}/authTokens:generate`}/**
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
 */async function Nd(r,e=!1){let n;const s=await $a(r.appConfig,c=>{if(!zv(c))throw Rr.create("not-registered");const d=c.authToken;if(!e&&Ob(d))return c;if(d.requestStatus===1)return n=Ab(r,e),c;{if(!navigator.onLine)throw Rr.create("app-offline");const p=Mb(c);return n=jb(r,p),p}});return n?await n:s.authToken}async function Ab(r,e){let n=await Ym(r.appConfig);for(;n.authToken.requestStatus===1;)await Lv(100),n=await Ym(r.appConfig);const s=n.authToken;return s.requestStatus===0?Nd(r,e):s}function Ym(r){return $a(r,e=>{if(!zv(e))throw Rr.create("not-registered");const n=e.authToken;return Db(n)?{...e,authToken:{requestStatus:0}}:e})}async function jb(r,e){try{const n=await Rb(r,e),s={...e,authToken:n};return await ka(r.appConfig,s),n}catch(n){if(Tv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Uv(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ka(r.appConfig,s)}throw n}}function zv(r){return r!==void 0&&r.registrationStatus===2}function Ob(r){return r.requestStatus===2&&!Lb(r)}function Lb(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+lb}function Mb(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function Db(r){return r.requestStatus===1&&r.requestTime+bv<Date.now()}/**
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
 */async function Fb(r){const e=r,{installationEntry:n,registrationPromise:s}=await bd(e);return s?s.catch(console.error):Nd(e).catch(console.error),n.fid}/**
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
 */async function Ub(r,e=!1){const n=r;return await Bb(n),(await Nd(n,e)).token}async function Bb(r){const{registrationPromise:e}=await bd(r);e&&await e}/**
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
 */function zb(r){if(!r||!r.options)throw au("App Configuration");if(!r.name)throw au("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw au(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function au(r){return Rr.create("missing-app-config-values",{valueName:r})}/**
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
 */const Wv="installations",Wb="installations-internal",Hb=r=>{const e=r.getProvider("app").getImmediate(),n=zb(e),s=Dr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},$b=r=>{const e=r.getProvider("app").getImmediate(),n=Dr(e,Wv).getImmediate();return{getId:()=>Fb(n),getToken:a=>Ub(n,a)}};function Vb(){ln(new Qt(Wv,Hb,"PUBLIC")),ln(new Qt(Wb,$b,"PRIVATE"))}Vb();Mt(Ev,Cd);Mt(Ev,Cd,"esm2020");/**
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
 */const Ca="analytics",Gb="firebase_id",qb="origin",Kb=60*1e3,Yb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Id="https://www.googletagmanager.com/gtag/js";/**
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
 */const ct=new Ma("@firebase/analytics");/**
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
 */const Qb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},It=new Mr("analytics","Analytics",Qb);/**
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
 */function Jb(r){if(!r.startsWith(Id)){const e=It.create("invalid-gtag-resource",{gtagURL:r});return ct.warn(e.message),""}return r}function Hv(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function Xb(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function Zb(r,e){const n=Xb("firebase-js-sdk-policy",{createScriptURL:Jb}),s=document.createElement("script"),a=`${Id}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function eN(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function tN(r,e,n,s,a,c){const d=s[a];try{if(d)await e[d];else{const m=(await Hv(n)).find(y=>y.measurementId===a);m&&await e[m.appId]}}catch(p){ct.error(p)}r("config",a,c)}async function nN(r,e,n,s,a){try{let c=[];if(a&&a.send_to){let d=a.send_to;Array.isArray(d)||(d=[d]);const p=await Hv(n);for(const m of d){const y=p.find(v=>v.measurementId===m),x=y&&e[y.appId];if(x)c.push(x);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),r("event",s,a||{})}catch(c){ct.error(c)}}function rN(r,e,n,s){async function a(c,...d){try{if(c==="event"){const[p,m]=d;await nN(r,e,n,p,m)}else if(c==="config"){const[p,m]=d;await tN(r,e,n,s,p,m)}else if(c==="consent"){const[p,m]=d;r("consent",p,m)}else if(c==="get"){const[p,m,y]=d;r("get",p,m,y)}else if(c==="set"){const[p]=d;r("set",p)}else r(c,...d)}catch(p){ct.error(p)}}return a}function iN(r,e,n,s,a){let c=function(...d){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(c=window[a]),window[a]=rN(c,r,e,n),{gtagCore:c,wrappedGtag:window[a]}}function sN(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Id)&&n.src.includes(r))return n;return null}/**
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
 */const oN=30,aN=1e3;class lN{constructor(e={},n=aN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $v=new lN;function cN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function uN(r){var d;const{appId:e,apiKey:n}=r,s={method:"GET",headers:cN(n)},a=Yb.replace("{app-id}",e),c=await fetch(a,s);if(c.status!==200&&c.status!==304){let p="";try{const m=await c.json();(d=m.error)!=null&&d.message&&(p=m.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:c.status,responseMessage:p})}return c.json()}async function dN(r,e=$v,n){const{appId:s,apiKey:a,measurementId:c}=r.options;if(!s)throw It.create("no-app-id");if(!a){if(c)return{measurementId:c,appId:s};throw It.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new pN;return setTimeout(async()=>{p.abort()},Kb),Vv({appId:s,apiKey:a,measurementId:c},d,p,e)}async function Vv(r,{throttleEndTimeMillis:e,backoffCount:n},s,a=$v){var p;const{appId:c,measurementId:d}=r;try{await hN(s,e)}catch(m){if(d)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:d};throw m}try{const m=await uN(r);return a.deleteThrottleMetadata(c),m}catch(m){const y=m;if(!fN(y)){if(a.deleteThrottleMetadata(c),d)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:c,measurementId:d};throw m}const x=Number((p=y==null?void 0:y.customData)==null?void 0:p.httpStatus)===503?rm(n,a.intervalMillis,oN):rm(n,a.intervalMillis),v={throttleEndTimeMillis:Date.now()+x,backoffCount:n+1};return a.setThrottleMetadata(c,v),ct.debug(`Calling attemptFetch again in ${x} millis`),Vv(r,v,s,a)}}function hN(r,e){return new Promise((n,s)=>{const a=Math.max(e-Date.now(),0),c=setTimeout(n,a);r.addEventListener(()=>{clearTimeout(c),s(It.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fN(r){if(!(r instanceof cn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class pN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mN(r,e,n,s,a){if(a&&a.global){r("event",n,s);return}else{const c=await e,d={...s,send_to:c};r("event",n,d)}}async function gN(r,e,n,s){if(s&&s.global){const a={};for(const c of Object.keys(n))a[`user_properties.${c}`]=n[c];return r("set",a),Promise.resolve()}else{const a=await e;r("config",a,{update:!0,user_properties:n})}}/**
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
 */async function yN(){if(Jg())try{await Xg()}catch(r){return ct.warn(It.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return ct.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vN(r,e,n,s,a,c,d){const p=dN(r);p.then(C=>{n[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>ct.error(C)),e.push(p);const m=yN().then(C=>{if(C)return s.getId()}),[y,x]=await Promise.all([p,m]);sN(c)||Zb(c,y.measurementId),a("js",new Date);const v=(d==null?void 0:d.config)??{};return v[qb]="firebase",v.update=!0,x!=null&&(v[Gb]=x),a("config",y.measurementId,v),y.measurementId}/**
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
 */class _N{constructor(e){this.app=e}_delete(){return delete yi[this.app.options.appId],Promise.resolve()}}let yi={},Qm=[];const Jm={};let lu="dataLayer",xN="gtag",Xm,Td,Zm=!1;function wN(){const r=[];if(Yg()&&r.push("This is a browser extension environment."),QS()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,a)=>`(${a+1}) ${s}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function SN(r,e,n){wN();const s=r.options.appId;if(!s)throw It.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(yi[s]!=null)throw It.create("already-exists",{id:s});if(!Zm){eN(lu);const{wrappedGtag:c,gtagCore:d}=iN(yi,Qm,Jm,lu,xN);Td=c,Xm=d,Zm=!0}return yi[s]=vN(r,Qm,Jm,e,Xm,lu,n),new _N(r)}function kN(r=Zu()){r=dt(r);const e=Dr(r,Ca);return e.isInitialized()?e.getImmediate():CN(r)}function CN(r,e={}){const n=Dr(r,Ca);if(n.isInitialized()){const a=n.getImmediate();if(sr(e,n.getOptions()))return a;throw It.create("already-initialized")}return n.initialize({options:e})}function EN(r,e,n){r=dt(r),gN(Td,yi[r.app.options.appId],e,n).catch(s=>ct.error(s))}function bN(r,e,n,s){r=dt(r),mN(Td,yi[r.app.options.appId],e,n,s).catch(a=>ct.error(a))}const eg="@firebase/analytics",tg="0.10.21";function NN(){ln(new Qt(Ca,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return SN(s,a,n)},"PUBLIC")),ln(new Qt("analytics-internal",r,"PRIVATE")),Mt(eg,tg),Mt(eg,tg,"esm2020");function r(e){try{const n=e.getProvider(Ca).getImmediate();return{logEvent:(s,a,c)=>bN(n,s,a,c),setUserProperties:(s,a)=>EN(n,s,a)}}catch(n){throw It.create("interop-component-reg-failed",{reason:n})}}}NN();function Gv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IN=Gv,qv=new Mr("auth","Firebase",Gv());/**
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
 */const Ea=new Ma("@firebase/auth");function TN(r,...e){Ea.logLevel<=ye.WARN&&Ea.warn(`Auth (${Ni}): ${r}`,...e)}function oa(r,...e){Ea.logLevel<=ye.ERROR&&Ea.error(`Auth (${Ni}): ${r}`,...e)}/**
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
 */function bn(r,...e){throw Rd(r,...e)}function on(r,...e){return Rd(r,...e)}function Kv(r,e,n){const s={...IN(),[e]:n};return new Mr("auth","Firebase",s).create(e,{appName:r.name})}function ir(r){return Kv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return qv.create(r,...e)}function te(r,e,...n){if(!r)throw Rd(e,...n)}function xn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw oa(e),new Error(e)}function Nn(r,e){r||xn(e)}/**
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
 */function Du(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function RN(){return ng()==="http:"||ng()==="https:"}function ng(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function PN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RN()||Yg()||"connection"in navigator)?navigator.onLine:!0}function AN(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qu()||Qg()}get(){return PN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pd(r,e){Nn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ON=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LN=new Bs(3e4,6e4);function Va(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Pi(r,e,n,s,a={}){return Qv(r,a,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const p=bi({key:r.config.apiKey,...d}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:m,...c};return qS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Ls(r.emulatorConfig.host)&&(y.credentials="include"),Yv.fetch()(await Xv(r,r.config.apiHost,n,p),y)})}async function Qv(r,e,n){r._canInitEmulator=!1;const s={...jN,...e};try{const a=new MN(r),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw ra(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const p=c.ok?d.errorMessage:d.error.message,[m,y]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(r,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw ra(r,"email-already-in-use",d);if(m==="USER_DISABLED")throw ra(r,"user-disabled",d);const x=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Kv(r,x,y);bn(r,x)}}catch(a){if(a instanceof cn)throw a;bn(r,"network-request-failed",{message:String(a)})}}async function Jv(r,e,n,s,a={}){const c=await Pi(r,e,n,s,a);return"mfaPendingCredential"in c&&bn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function Xv(r,e,n,s){const a=`${e}${n}?${s}`,c=r,d=c.config.emulator?Pd(r.config,a):`${r.config.apiScheme}://${a}`;return ON.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}class MN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(on(this.auth,"network-request-failed")),LN.get())})}}function ra(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=on(r,e,s);return a.customData._tokenResponse=n,a}/**
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
 */async function DN(r,e){return Pi(r,"POST","/v1/accounts:delete",e)}async function ba(r,e){return Pi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function bs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FN(r,e=!1){const n=dt(r),s=await n.getIdToken(e),a=Ad(s);te(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:bs(cu(a.auth_time)),issuedAtTime:bs(cu(a.iat)),expirationTime:bs(cu(a.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function cu(r){return Number(r)*1e3}function Ad(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const a=ha(n);return a?JSON.parse(a):(oa("Failed to decode base64 JWT payload"),null)}catch(a){return oa("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function rg(r){const e=Ad(r);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function js(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof cn&&UN(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function UN({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class BN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Na(r){var v;const e=r.auth,n=await r.getIdToken(),s=await js(r,ba(e,{idToken:n}));te(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];r._notifyReloadListener(a);const c=(v=a.providerUserInfo)!=null&&v.length?Zv(a.providerUserInfo):[],d=WN(r.providerData,c),p=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,x={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Fu(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(r,x)}async function zN(r){const e=dt(r);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WN(r,e){return[...r.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Zv(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function HN(r,e){const n=await Qv(r,{},async()=>{const s=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=r.config,d=await Xv(r,a,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&Ls(r.emulatorConfig.host)&&(m.credentials="include"),Yv.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $N(r,e){return Pi(r,"POST","/v2/accounts:revokeToken",Va(r,e))}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=rg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await HN(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,d=new vi;return s&&(te(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(te(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(te(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function Kn(r,e){te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new BN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Fu(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await js(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FN(this,e)}reload(){return zN(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await js(this,DN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,a=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,p=n.tenantId??void 0,m=n._redirectEventId??void 0,y=n.createdAt??void 0,x=n.lastLoginAt??void 0,{uid:v,emailVerified:C,isAnonymous:T,providerData:j,stsTokenManager:A}=n;te(v&&A,e,"internal-error");const R=vi.fromJSON(this.name,A);te(typeof v=="string",e,"internal-error"),Kn(s,e.name),Kn(a,e.name),te(typeof C=="boolean",e,"internal-error"),te(typeof T=="boolean",e,"internal-error"),Kn(c,e.name),Kn(d,e.name),Kn(p,e.name),Kn(m,e.name),Kn(y,e.name),Kn(x,e.name);const U=new Kt({uid:v,auth:e,email:a,emailVerified:C,displayName:s,isAnonymous:T,photoURL:d,phoneNumber:c,tenantId:p,stsTokenManager:R,createdAt:y,lastLoginAt:x});return j&&Array.isArray(j)&&(U.providerData=j.map(q=>({...q}))),m&&(U._redirectEventId=m),U}static async _fromIdTokenResponse(e,n,s=!1){const a=new vi;a.updateFromServerResponse(n);const c=new Kt({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Na(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];te(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Zv(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),p=new vi;p.updateFromIdToken(s);const m=new Kt({uid:a.localId,auth:e,stsTokenManager:p,isAnonymous:d}),y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Fu(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(m,y),m}}/**
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
 */const ig=new Map;function wn(r){Nn(r instanceof Function,"Expected a class definition");let e=ig.get(r);return e?(Nn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ig.set(r,e),e)}/**
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
 */class e0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}e0.type="NONE";const sg=e0;/**
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
 */function aa(r,e,n){return`firebase:${r}:${e}:${n}`}class _i{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=aa(this.userKey,a.apiKey,c),this.fullPersistenceKey=aa("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ba(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _i(wn(sg),e,s);const a=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=a[0]||wn(sg);const d=aa(s,e.config.apiKey,e.name);let p=null;for(const y of n)try{const x=await y._get(d);if(x){let v;if(typeof x=="string"){const C=await ba(e,{idToken:x}).catch(()=>{});if(!C)break;v=await Kt._fromGetAccountInfoResponse(e,C,x)}else v=Kt._fromJSON(e,x);y!==c&&(p=v),c=y;break}}catch{}const m=a.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new _i(c,e,s):(c=m[0],p&&await c._set(d,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(d)}catch{}})),new _i(c,e,s))}}/**
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
 */function og(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o0(e))return"Blackberry";if(a0(e))return"Webos";if(n0(e))return"Safari";if((e.includes("chrome/")||r0(e))&&!e.includes("edge/"))return"Chrome";if(s0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function t0(r=ut()){return/firefox\//i.test(r)}function n0(r=ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r0(r=ut()){return/crios\//i.test(r)}function i0(r=ut()){return/iemobile/i.test(r)}function s0(r=ut()){return/android/i.test(r)}function o0(r=ut()){return/blackberry/i.test(r)}function a0(r=ut()){return/webos/i.test(r)}function jd(r=ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function VN(r=ut()){var e;return jd(r)&&!!((e=window.navigator)!=null&&e.standalone)}function GN(){return KS()&&document.documentMode===10}function l0(r=ut()){return jd(r)||s0(r)||a0(r)||o0(r)||/windows phone/i.test(r)||i0(r)}/**
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
 */function c0(r,e=[]){let n;switch(r){case"Browser":n=og(ut());break;case"Worker":n=`${og(ut())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${s}`}/**
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
 */class qN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,p)=>{try{const m=e(c);d(m)}catch(m){p(m)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function KN(r,e={}){return Pi(r,"GET","/v2/passwordPolicy",Va(r,e))}/**
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
 */const YN=6;class QN{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??YN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class JN{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new qN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var s,a,c;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ba(this,{idToken:e}),s=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(Vt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(c=this.redirectUser)==null?void 0:c._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===p)&&(m!=null&&m.user)&&(s=m.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(ir(this));const n=e?dt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KN(this),n=new QN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await $N(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(p,this,"internal-error"),p.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,a);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=c0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&TN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ga(r){return dt(r)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=rk(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XN(r){Od=r}function ZN(r){return Od.loadJS(r)}function eI(){return Od.gapiScript}function tI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function nI(r,e){const n=Dr(r,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(sr(c,e??{}))return a;bn(a,"already-initialized")}return n.initialize({options:e})}function rI(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function iI(r,e,n){const s=Ga(r);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=u0(e),{host:d,port:p}=sI(e),m=p===null?"":`:${p}`,y={url:`${c}//${d}${m}/`},x=Object.freeze({host:d,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(sr(y,s.config.emulator)&&sr(x,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=x,s.settings.appVerificationDisabledForTesting=!0,Ls(d)?ey(`${c}//${d}${m}`):oI()}function u0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function sI(r){const e=u0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:lg(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:lg(d)}}}function lg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function oI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class d0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}/**
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
 */async function xi(r,e){return Jv(r,"POST","/v1/accounts:signInWithIdp",Va(r,e))}/**
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
 */const aI="http://localhost";class Ar extends d0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...c}=n;if(!s||!a)return null;const d=new Ar(s,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,xi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:aI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
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
 */class h0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zs extends h0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends zs{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Jn extends zs{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Xn extends zs{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Xn.credential(n,s)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */async function lI(r,e){return Jv(r,"POST","/v1/accounts:signUp",Va(r,e))}/**
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
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await Kt._fromIdTokenResponse(e,s,a),d=cg(s);return new ar({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=cg(s);return new ar({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function cg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function cI(r){var a;if(Vt(r.app))return Promise.reject(ir(r));const e=Ga(r);if(await e._initializationPromise,(a=e.currentUser)!=null&&a.isAnonymous)return new ar({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await lI(e,{returnSecureToken:!0}),s=await ar._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class Ia extends cn{constructor(e,n,s,a){super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Ia.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new Ia(e,n,s,a)}}function f0(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Ia._fromErrorAndOperation(r,c,e,s):c})}async function uI(r,e,n=!1){const s=await js(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ar._forOperation(r,"link",s)}/**
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
 */async function dI(r,e,n=!1){const{auth:s}=r;if(Vt(s.app))return Promise.reject(ir(s));const a="reauthenticate";try{const c=await js(r,f0(s,a,e,r),n);te(c.idToken,s,"internal-error");const d=Ad(c.idToken);te(d,s,"internal-error");const{sub:p}=d;return te(r.uid===p,s,"user-mismatch"),ar._forOperation(r,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&bn(s,"user-mismatch"),c}}/**
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
 */async function hI(r,e,n=!1){if(Vt(r.app))return Promise.reject(ir(r));const s="signIn",a=await f0(r,s,e),c=await ar._fromIdTokenResponse(r,s,a);return n||await r._updateCurrentUser(c.user),c}function fI(r,e,n,s){return dt(r).onIdTokenChanged(e,n,s)}function pI(r,e,n){return dt(r).beforeAuthStateChanged(e,n)}const Ta="__sak";/**
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
 */class p0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ta,"1"),this.storage.removeItem(Ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mI=1e3,gI=10;class m0 extends p0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,p,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);GN()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,gI):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m0.type="LOCAL";const yI=m0;/**
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
 */class g0 extends p0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g0.type="SESSION";const y0=g0;/**
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
 */function vI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new qa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,d=this.handlersMap[a];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const p=Array.from(d).map(async y=>y(n.origin,c)),m=await vI(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
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
 */function Ld(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class _I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((p,m)=>{const y=Ld("",20);a.port1.start();const x=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(v){const C=v;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(x),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(C.data.response);break;default:clearTimeout(x),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function an(){return window}function xI(r){an().location.href=r}/**
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
 */function v0(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function wI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function kI(){return v0()?self:null}/**
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
 */const _0="firebaseLocalStorageDb",CI=1,Ra="firebaseLocalStorage",x0="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(r,e){return r.transaction([Ra],e?"readwrite":"readonly").objectStore(Ra)}function EI(){const r=indexedDB.deleteDatabase(_0);return new Ws(r).toPromise()}function Uu(){const r=indexedDB.open(_0,CI);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ra,{keyPath:x0})}catch(a){n(a)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ra)?e(s):(s.close(),await EI(),e(await Uu()))})})}async function ug(r,e,n){const s=Ka(r,!0).put({[x0]:e,value:n});return new Ws(s).toPromise()}async function bI(r,e){const n=Ka(r,!1).get(e),s=await new Ws(n).toPromise();return s===void 0?null:s.value}function dg(r,e){const n=Ka(r,!0).delete(e);return new Ws(n).toPromise()}const NI=800,II=3;class w0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>II)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return v0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(kI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await wI(),!this.activeServiceWorker)return;this.sender=new _I(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await ug(e,Ta,"1"),await dg(e,Ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ug(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>bI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Ka(a,!1).getAll();return new Ws(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w0.type="LOCAL";const TI=w0;new Bs(3e4,6e4);/**
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
 */function RI(r,e){return e?wn(e):(te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Md extends d0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PI(r){return hI(r.auth,new Md(r),r.bypassAuthState)}function AI(r){const{auth:e,user:n}=r;return te(n,e,"internal-error"),dI(n,new Md(r),r.bypassAuthState)}async function jI(r){const{auth:e,user:n}=r;return te(n,e,"internal-error"),uI(n,new Md(r),r.bypassAuthState)}/**
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
 */class S0{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:d,type:p}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PI;case"linkViaPopup":case"linkViaRedirect":return jI;case"reauthViaPopup":case"reauthViaRedirect":return AI;default:bn(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OI=new Bs(2e3,1e4);class fi extends S0{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OI.get())};e()}}fi.currentPopupAction=null;/**
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
 */const LI="pendingRedirect",la=new Map;class MI extends S0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const s=await DI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DI(r,e){const n=BI(e),s=UI(r);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function FI(r,e){la.set(r._key(),e)}function UI(r){return wn(r._redirectPersistence)}function BI(r){return aa(LI,r.config.apiKey,r.name)}async function zI(r,e,n=!1){if(Vt(r.app))return Promise.reject(ir(r));const s=Ga(r),a=RI(s,e),d=await new MI(s,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const WI=600*1e3;class HI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$I(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!k0(e)){const a=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(on(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(hg(e))}saveEventToCache(e){this.cachedEventUids.add(hg(e)),this.lastProcessedEventTime=Date.now()}}function hg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function k0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $I(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k0(r);default:return!1}}/**
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
 */async function VI(r,e={}){return Pi(r,"GET","/v1/projects",e)}/**
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
 */const GI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function KI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await VI(r);for(const n of e)try{if(YI(n))return}catch{}bn(r,"unauthorized-domain")}function YI(r){const e=Du(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!qI.test(n))return!1;if(GI.test(r))return s===r;const a=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const QI=new Bs(3e4,6e4);function fg(){const r=an().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function JI(r){return new Promise((e,n)=>{var a,c,d;function s(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),n(on(r,"network-request-failed"))},timeout:QI.get()})}if((c=(a=an().gapi)==null?void 0:a.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((d=an().gapi)!=null&&d.load)s();else{const p=tI("iframefcb");return an()[p]=()=>{gapi.load?s():n(on(r,"network-request-failed"))},ZN(`${eI()}?onload=${p}`).catch(m=>n(m))}}).catch(e=>{throw ca=null,e})}let ca=null;function XI(r){return ca=ca||JI(r),ca}/**
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
 */const ZI=new Bs(5e3,15e3),eT="__/auth/iframe",tT="emulator/auth/iframe",nT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iT(r){const e=r.config;te(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Pd(e,tT):`https://${r.config.authDomain}/${eT}`,s={apiKey:e.apiKey,appName:r.name,v:Ni},a=rT.get(r.config.apiHost);a&&(s.eid=a);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${bi(s).slice(1)}`}async function sT(r){const e=await XI(r),n=an().gapi;return te(n,r,"internal-error"),e.open({where:document.body,url:iT(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nT,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const d=on(r,"network-request-failed"),p=an().setTimeout(()=>{c(d)},ZI.get());function m(){an().clearTimeout(p),a(s)}s.ping(m).then(m,()=>{c(d)})}))}/**
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
 */const oT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aT=500,lT=600,cT="_blank",uT="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dT(r,e,n,s=aT,a=lT){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...oT,width:s.toString(),height:a.toString(),top:c,left:d},y=ut().toLowerCase();n&&(p=r0(y)?cT:n),t0(y)&&(e=e||uT,m.scrollbars="yes");const x=Object.entries(m).reduce((C,[T,j])=>`${C}${T}=${j},`,"");if(VN(y)&&p!=="_self")return hT(e||"",p),new pg(null);const v=window.open(e||"",p,x);te(v,r,"popup-blocked");try{v.focus()}catch{}return new pg(v)}function hT(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fT="__/auth/handler",pT="emulator/auth/handler",mT=encodeURIComponent("fac");async function mg(r,e,n,s,a,c){te(r.config.authDomain,r,"auth-domain-config-required"),te(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ni,eventId:a};if(e instanceof h0){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",yu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[x,v]of Object.entries({}))d[x]=v}if(e instanceof zs){const x=e.getScopes().filter(v=>v!=="");x.length>0&&(d.scopes=x.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const x of Object.keys(p))p[x]===void 0&&delete p[x];const m=await r._getAppCheckToken(),y=m?`#${mT}=${encodeURIComponent(m)}`:"";return`${gT(r)}?${bi(p).slice(1)}${y}`}function gT({config:r}){return r.emulator?Pd(r,pT):`https://${r.authDomain}/${fT}`}/**
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
 */const uu="webStorageSupport";class yT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y0,this._completeRedirectFn=zI,this._overrideRedirectResult=FI}async _openPopup(e,n,s,a){var d;Nn((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const c=await mg(e,n,s,Du(),a);return dT(e,c,Ld())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await mg(e,n,s,Du(),a);return xI(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(Nn(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sT(e),s=new HI(e);return n.register("authEvent",a=>(te(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uu,{type:uu},a=>{var d;const c=(d=a==null?void 0:a[0])==null?void 0:d[uu];c!==void 0&&n(!!c),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l0()||n0()||jd()}}const vT=yT;var gg="@firebase/auth",yg="1.12.2";/**
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
 */class _T{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wT(r){ln(new Qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=s.options;te(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:c0(r)},y=new JN(s,a,c,m);return rI(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ln(new Qt("auth-internal",e=>{const n=Ga(e.getProvider("auth").getImmediate());return(s=>new _T(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(gg,yg,xT(r)),Mt(gg,yg,"esm2020")}/**
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
 */const ST=300,kT=Kg("authIdTokenMaxAge")||ST;let vg=null;const CT=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kT)return;const a=n==null?void 0:n.token;vg!==a&&(vg=a,await fetch(r,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function ET(r=Zu()){const e=Dr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=nI(r,{popupRedirectResolver:vT,persistence:[TI,yI,y0]}),s=Kg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=CT(c.toString());pI(n,d,()=>d(n.currentUser)),fI(n,p=>d(p))}}const a=Gg("auth");return a&&iI(n,`http://${a}`),n}function bT(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}XN({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=a=>{const c=on("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",bT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wT("Browser");const NT={apiKey:"AIzaSyBVAuC8XlF_76ILkyuKwSGNtYOT-6ujfaY",authDomain:"el-venture-incorporated.firebaseapp.com",databaseURL:"https://el-venture-incorporated-default-rtdb.firebaseio.com",projectId:"el-venture-incorporated",storageBucket:"el-venture-incorporated.firebasestorage.app",messagingSenderId:"327302567876",appId:"1:327302567876:web:62f1524a944f6d0faaf691",measurementId:"G-JJL7C7F8E4"},Dd=iy(NT);typeof window<"u"&&kN(Dd);const IT=nb(Dd),du=ET(Dd);let ia=null;const TT=async()=>du.currentUser?du.currentUser:(ia||(ia=cI(du).then(r=>r.user).finally(()=>{ia=null})),ia),RT=r=>{if(typeof r=="number")return r;if(typeof r!="string")return 0;const e=r.match(/[0-9,]+(\.\d+)?/);return e&&Number(e[0].replace(/,/g,""))||0},PT=["appointments","bookingRequests","bookings"],_g=r=>r.toLowerCase().replace(/\s+/g," ").trim(),AT=r=>{const e=Zp.find(s=>s.label===r);if(e)return e;const n=_g(r);return Zp.find(s=>_g(s.label)===n)||null},jT=async r=>{let e=null;for(const n of PT)try{await qE(GE(IT,n),r);return}catch(s){if(e=s,(s==null?void 0:s.code)!=="PERMISSION_DENIED")break}throw e};function OT(){const r=lr(),{branchId:e,branchName:n,services:s,stylists:a}=r.state||{},[c,d]=M.useState(!1),[p,m]=M.useState(!1),[y,x]=M.useState(""),[v,C]=M.useState({name:"",phone:"",date:"",time:"",notes:""}),T=A=>{const{name:R,value:U}=A.target;if(R==="phone"){const q=U.replace(/\D/g,"").slice(0,11);C(K=>({...K,phone:q}));return}if(R==="notes"){C(q=>({...q,notes:U.slice(0,200)}));return}C(q=>({...q,[R]:U}))},j=async A=>{A.preventDefault(),x(""),m(!0);try{await TT();const R=Array.isArray(a)?a:[],U=R.length>0?R:[{name:"Any available stylist"}],q=s.map(ne=>{const Z=RT(ne.price),pe=AT(ne.name)||{id:`fallback-${ne.name}`,label:ne.name,kind:"service",basePrice:Z,tags:[]},wt=U.map(ht=>{const Ke=ht.name,We=ht.role||"Any available stylist",Ye=aS({branchId:e,employeeName:Ke,item:pe,price:Z}),ot=1/U.length,je=Z*Ye*ot;return console.log("COMMISSION DEBUG:",{service:ne.name,employeeName:Ke,item:pe,tags:pe==null?void 0:pe.tags,rate:Ye,price:Z,commission:je}),{name:Ke,position:We,share:ot,commissionRate:Ye,commissionAmount:je}}),St=wt.reduce((ht,Ke)=>ht+Ke.commissionAmount,0);return{name:ne.name,type:pe.kind||"service",price:Z,assignedStylists:wt,totalServiceCommission:St}}),K=q.reduce((ne,Z)=>ne+Z.price,0),re=q.reduce((ne,Z)=>ne+Z.totalServiceCommission,0);await jT({customerName:v.name,phone:v.phone,preferredDate:v.date,preferredTime:v.time,notes:v.notes||"",branchId:e||"",branchName:n,services:q,stylists:R.length>0?R.map(ne=>({name:ne.name,position:ne.role||"Any available stylist",specialty:ne.specialty||""})):[{name:"Any available stylist",position:"Any available stylist"}],totalAmount:K,totalCommission:re,status:"pending",createdAt:Date.now()}),d(!0)}catch(R){(R==null?void 0:R.code)==="auth/admin-restricted-operation"?x("Anonymous sign-in is disabled in Firebase Auth. Enable Anonymous provider in Authentication > Sign-in method."):(R==null?void 0:R.code)==="PERMISSION_DENIED"?x("Firebase denied write access. Please update Realtime Database rules to allow writing appointments."):x("Failed to save booking request. Please try again."),console.error("Failed to save appointment:",R)}finally{m(!1)}};return!e||!n||!s||s.length===0?f.jsxs("div",{className:"mx-auto max-w-md px-4 py-12 text-center",children:[f.jsx("p",{className:"text-gray-600",children:"No booking selected."}),f.jsx(sn,{to:"/book",className:"mt-4 inline-block text-accent hover:underline",children:"Start over"})]}):c?f.jsxs("div",{className:"booking-flow-bg relative flex min-h-[82vh] items-center justify-center overflow-hidden px-4 py-8",children:[f.jsx("div",{className:"pointer-events-none absolute -left-16 top-12 h-56 w-56 rounded-full bg-pink-300/35 blur-3xl"}),f.jsx("div",{className:"pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl"}),f.jsxs("div",{className:"booking-fade-up w-full max-w-xl rounded-3xl border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-md sm:p-8",children:[f.jsx("div",{className:"mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-green-50 shadow-inner",children:f.jsx(Dw,{className:"h-12 w-12 text-green-600"})}),f.jsx("h2",{className:"mt-5 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:"Request Received! 💖"}),f.jsx("p",{className:"mx-auto mt-3 max-w-lg text-center text-sm leading-7 text-gray-600 sm:text-base",children:"Your appointment request has been successfully submitted. Thank you for choosing El Glam ✨"}),f.jsx("div",{className:"mt-6 rounded-2xl border border-pink-100 bg-white/90 p-4",children:f.jsxs("p",{className:"flex items-center gap-2 text-sm font-medium text-gray-700",children:[f.jsx(Gu,{className:"h-4 w-4 text-pink-500"}),"Branch: ",f.jsx("span",{className:"font-semibold text-gray-900",children:n})]})}),f.jsxs("div",{className:"mt-5 rounded-2xl border border-rose-100 bg-rose-50/60 p-4",children:[f.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.12em] text-rose-500",children:"Selected Service"}),f.jsx("ul",{className:"mt-3 space-y-2",children:s.map(A=>f.jsxs("li",{className:"flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2",children:[f.jsxs("span",{className:"inline-flex items-center gap-2 font-medium text-gray-800",children:[f.jsx(Lr,{className:"h-4 w-4 text-pink-500"}),A.name]}),f.jsx("span",{className:"font-semibold text-rose-600",children:A.price})]},`${A.name}-${A.price}`))})]}),f.jsx("div",{className:"mt-5 rounded-2xl bg-pink-50/80 p-4 text-sm leading-7 text-gray-600",children:"Please wait for a confirmation message from our receptionist. You will receive a text once your booking has been reviewed and confirmed."}),f.jsx("p",{className:"mt-4 text-center text-sm font-medium text-gray-700 sm:text-base",children:"We appreciate your patience and can't wait to take care of you! 💕"}),f.jsx(sn,{to:"/",className:"mt-7 block w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 py-3 text-center font-semibold text-white shadow-md transition hover:from-pink-600 hover:to-rose-600",children:"Back to Home"})]})]}):f.jsxs("div",{className:"booking-flow-bg relative min-h-screen overflow-hidden",children:[f.jsx("div",{className:"pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl"}),f.jsx("div",{className:"pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-purple-200/55 blur-3xl"}),f.jsxs("div",{className:"mx-auto max-w-lg px-4 py-8 sm:py-12",children:[f.jsxs(sn,{to:"/book/services",state:r.state,className:"mb-6 inline-flex items-center gap-2 text-gray-600 transition hover:text-accent",children:[f.jsx($u,{className:"h-5 w-5"}),"Change services or stylist"]}),f.jsxs("div",{className:"booking-fade-up rounded-2xl border border-white/70 bg-white/92 p-6 shadow-md backdrop-blur-sm",children:[f.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Appointment details"}),f.jsxs("div",{className:"mt-4 space-y-3 rounded-lg bg-gray-50 p-4",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm text-gray-500",children:"Branch"}),f.jsx("p",{className:"font-medium text-gray-900",children:n})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-sm text-gray-500",children:"Selected services"}),f.jsx("ul",{className:"mt-1 space-y-1 text-sm",children:s.map(A=>f.jsxs("li",{className:"flex items-center justify-between gap-2",children:[f.jsx("span",{className:"font-medium text-gray-900",children:A.name}),f.jsx("span",{className:"text-accent font-semibold",children:A.price})]},`${A.name}-${A.price}`))})]}),f.jsxs("div",{className:"flex items-center gap-3 rounded-lg bg-white px-3 py-2",children:[f.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent",children:f.jsx(qw,{className:"h-5 w-5"})}),f.jsxs("div",{className:"text-sm",children:[f.jsx("p",{className:"text-gray-500",children:"Preferred stylist"}),a&&a.length>0?f.jsx("ul",{className:"mt-1 space-y-1 text-sm",children:a.map(A=>f.jsxs("li",{className:"flex flex-col",children:[f.jsx("span",{className:"font-medium text-gray-900",children:A.name}),f.jsxs("span",{className:"text-xs text-gray-500",children:[A.role,A.specialty?` • ${A.specialty}`:""]})]},A.name))}):f.jsx("p",{className:"font-medium text-gray-900",children:"Any available stylist"})]})]})]}),f.jsxs("form",{onSubmit:j,className:"mt-6 space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full name"}),f.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:v.name,onChange:T,className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone"}),f.jsx("input",{id:"phone",name:"phone",type:"tel",required:!0,value:v.phone,onChange:T,inputMode:"numeric",pattern:"^09\\d{9}$",title:"Use 11-digit PH number (e.g. 09XXXXXXXXX)",maxLength:11,className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"})]}),f.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"date",className:"block text-sm font-medium text-gray-700",children:"Preferred date"}),f.jsx("input",{id:"date",name:"date",type:"date",required:!0,value:v.date,onChange:T,className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"time",className:"block text-sm font-medium text-gray-700",children:"Preferred time"}),f.jsx("input",{id:"time",name:"time",type:"time",required:!0,value:v.time,onChange:T,className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"})]})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"notes",className:"block text-sm font-medium text-gray-700",children:"Notes (optional)"}),f.jsx("textarea",{id:"notes",name:"notes",rows:3,value:v.notes,onChange:T,maxLength:200,placeholder:"Maximum 200 characters",className:"mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"}),f.jsxs("p",{className:"mt-1 text-xs text-gray-500",children:[v.notes.length,"/200"]})]}),y?f.jsx("p",{className:"rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700",children:y}):null,f.jsxs("button",{type:"submit",disabled:p,className:"flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-medium text-white transition hover:bg-accent-dark",children:[f.jsx(Vu,{className:"h-5 w-5"}),p?"Saving booking...":"Confirm booking request"]})]})]})]})]})}function LT(){return f.jsx(Tw,{children:f.jsxs("div",{className:"min-h-screen bg-white",children:[f.jsx(Qw,{}),f.jsxs(Sw,{children:[f.jsx(vn,{path:"/",element:f.jsx(fS,{})}),f.jsx(vn,{path:"/products",element:f.jsx(gS,{})}),f.jsx(vn,{path:"/about",element:f.jsx(IS,{})}),f.jsx(vn,{path:"/team",element:f.jsx(SS,{})}),f.jsx(vn,{path:"/book",element:f.jsx(RS,{})}),f.jsx(vn,{path:"/book/services",element:f.jsx(AS,{})}),f.jsx(vn,{path:"/book/stylist",element:f.jsx(LS,{})}),f.jsx(vn,{path:"/book/details",element:f.jsx(OT,{})})]}),f.jsx(Jw,{})]})})}Rx.createRoot(document.getElementById("root")).render(f.jsx(wg.StrictMode,{children:f.jsx(LT,{})}));
