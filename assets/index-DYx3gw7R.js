function gS(r,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const u=Object.getOwnPropertyDescriptor(s,o);u&&Object.defineProperty(r,o,u.get?u:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function pS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fd={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function yS(){if(uv)return dl;uv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return dl.Fragment=t,dl.jsx=n,dl.jsxs=n,dl}var cv;function vS(){return cv||(cv=1,fd.exports=yS()),fd.exports}var at=vS(),dd={exports:{}},Rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function _S(){if(hv)return Rt;hv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,X={};function F(D,Y,st){this.props=D,this.context=Y,this.refs=X,this.updater=st||B}F.prototype.isReactComponent={},F.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},F.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function it(){}it.prototype=F.prototype;function ut(D,Y,st){this.props=D,this.context=Y,this.refs=X,this.updater=st||B}var ht=ut.prototype=new it;ht.constructor=ut,Q(ht,F.prototype),ht.isPureReactComponent=!0;var bt=Array.isArray,mt={H:null,A:null,T:null,S:null},Ot=Object.prototype.hasOwnProperty;function M(D,Y,st,et,nt,vt){return st=vt.ref,{$$typeof:r,type:D,key:Y,ref:st!==void 0?st:null,props:vt}}function I(D,Y){return M(D.type,Y,void 0,void 0,void 0,D.props)}function S(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function C(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(st){return Y[st]})}var N=/\/+/g;function U(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):Y.toString(36)}function w(){}function Ct(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(w,w):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Et(D,Y,st,et,nt){var vt=typeof D;(vt==="undefined"||vt==="boolean")&&(D=null);var Tt=!1;if(D===null)Tt=!0;else switch(vt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(D.$$typeof){case r:case t:Tt=!0;break;case E:return Tt=D._init,Et(Tt(D._payload),Y,st,et,nt)}}if(Tt)return nt=nt(D),Tt=et===""?"."+U(D,0):et,bt(nt)?(st="",Tt!=null&&(st=Tt.replace(N,"$&/")+"/"),Et(nt,Y,st,"",function(ie){return ie})):nt!=null&&(S(nt)&&(nt=I(nt,st+(nt.key==null||D&&D.key===nt.key?"":(""+nt.key).replace(N,"$&/")+"/")+Tt)),Y.push(nt)),1;Tt=0;var de=et===""?".":et+":";if(bt(D))for(var qt=0;qt<D.length;qt++)et=D[qt],vt=de+U(et,qt),Tt+=Et(et,Y,st,vt,nt);else if(qt=x(D),typeof qt=="function")for(D=qt.call(D),qt=0;!(et=D.next()).done;)et=et.value,vt=de+U(et,qt++),Tt+=Et(et,Y,st,vt,nt);else if(vt==="object"){if(typeof D.then=="function")return Et(Ct(D),Y,st,et,nt);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function Z(D,Y,st){if(D==null)return D;var et=[],nt=0;return Et(D,et,"","",function(vt){return Y.call(st,vt,nt++)}),et}function ct(D){if(D._status===-1){var Y=D._result;Y=Y(),Y.then(function(st){(D._status===0||D._status===-1)&&(D._status=1,D._result=st)},function(st){(D._status===0||D._status===-1)&&(D._status=2,D._result=st)}),D._status===-1&&(D._status=0,D._result=Y)}if(D._status===1)return D._result.default;throw D._result}var rt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function It(){}return Rt.Children={map:Z,forEach:function(D,Y,st){Z(D,function(){Y.apply(this,arguments)},st)},count:function(D){var Y=0;return Z(D,function(){Y++}),Y},toArray:function(D){return Z(D,function(Y){return Y})||[]},only:function(D){if(!S(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Rt.Component=F,Rt.Fragment=n,Rt.Profiler=o,Rt.PureComponent=ut,Rt.StrictMode=s,Rt.Suspense=p,Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,Rt.act=function(){throw Error("act(...) is not supported in production builds of React.")},Rt.cache=function(D){return function(){return D.apply(null,arguments)}},Rt.cloneElement=function(D,Y,st){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var et=Q({},D.props),nt=D.key,vt=void 0;if(Y!=null)for(Tt in Y.ref!==void 0&&(vt=void 0),Y.key!==void 0&&(nt=""+Y.key),Y)!Ot.call(Y,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&Y.ref===void 0||(et[Tt]=Y[Tt]);var Tt=arguments.length-2;if(Tt===1)et.children=st;else if(1<Tt){for(var de=Array(Tt),qt=0;qt<Tt;qt++)de[qt]=arguments[qt+2];et.children=de}return M(D.type,nt,void 0,void 0,vt,et)},Rt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Rt.createElement=function(D,Y,st){var et,nt={},vt=null;if(Y!=null)for(et in Y.key!==void 0&&(vt=""+Y.key),Y)Ot.call(Y,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(nt[et]=Y[et]);var Tt=arguments.length-2;if(Tt===1)nt.children=st;else if(1<Tt){for(var de=Array(Tt),qt=0;qt<Tt;qt++)de[qt]=arguments[qt+2];nt.children=de}if(D&&D.defaultProps)for(et in Tt=D.defaultProps,Tt)nt[et]===void 0&&(nt[et]=Tt[et]);return M(D,vt,void 0,void 0,null,nt)},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(D){return{$$typeof:m,render:D}},Rt.isValidElement=S,Rt.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:ct}},Rt.memo=function(D,Y){return{$$typeof:y,type:D,compare:Y===void 0?null:Y}},Rt.startTransition=function(D){var Y=mt.T,st={};mt.T=st;try{var et=D(),nt=mt.S;nt!==null&&nt(st,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(It,rt)}catch(vt){rt(vt)}finally{mt.T=Y}},Rt.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},Rt.use=function(D){return mt.H.use(D)},Rt.useActionState=function(D,Y,st){return mt.H.useActionState(D,Y,st)},Rt.useCallback=function(D,Y){return mt.H.useCallback(D,Y)},Rt.useContext=function(D){return mt.H.useContext(D)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(D,Y){return mt.H.useDeferredValue(D,Y)},Rt.useEffect=function(D,Y){return mt.H.useEffect(D,Y)},Rt.useId=function(){return mt.H.useId()},Rt.useImperativeHandle=function(D,Y,st){return mt.H.useImperativeHandle(D,Y,st)},Rt.useInsertionEffect=function(D,Y){return mt.H.useInsertionEffect(D,Y)},Rt.useLayoutEffect=function(D,Y){return mt.H.useLayoutEffect(D,Y)},Rt.useMemo=function(D,Y){return mt.H.useMemo(D,Y)},Rt.useOptimistic=function(D,Y){return mt.H.useOptimistic(D,Y)},Rt.useReducer=function(D,Y,st){return mt.H.useReducer(D,Y,st)},Rt.useRef=function(D){return mt.H.useRef(D)},Rt.useState=function(D){return mt.H.useState(D)},Rt.useSyncExternalStore=function(D,Y,st){return mt.H.useSyncExternalStore(D,Y,st)},Rt.useTransition=function(){return mt.H.useTransition()},Rt.version="19.0.0",Rt}var fv;function pm(){return fv||(fv=1,dd.exports=_S()),dd.exports}var W=pm();const ES=pS(W),TS=gS({__proto__:null,default:ES},[W]);var md={exports:{}},ml={},gd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function AS(){return dv||(dv=1,function(r){function t(Z,ct){var rt=Z.length;Z.push(ct);t:for(;0<rt;){var It=rt-1>>>1,D=Z[It];if(0<o(D,ct))Z[It]=ct,Z[rt]=D,rt=It;else break t}}function n(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ct=Z[0],rt=Z.pop();if(rt!==ct){Z[0]=rt;t:for(var It=0,D=Z.length,Y=D>>>1;It<Y;){var st=2*(It+1)-1,et=Z[st],nt=st+1,vt=Z[nt];if(0>o(et,rt))nt<D&&0>o(vt,et)?(Z[It]=vt,Z[nt]=rt,It=nt):(Z[It]=et,Z[st]=rt,It=st);else if(nt<D&&0>o(vt,rt))Z[It]=vt,Z[nt]=rt,It=nt;else break t}}return ct}function o(Z,ct){var rt=Z.sortIndex-ct.sortIndex;return rt!==0?rt:Z.id-ct.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,b=null,x=3,B=!1,Q=!1,X=!1,F=typeof setTimeout=="function"?setTimeout:null,it=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;function ht(Z){for(var ct=n(y);ct!==null;){if(ct.callback===null)s(y);else if(ct.startTime<=Z)s(y),ct.sortIndex=ct.expirationTime,t(p,ct);else break;ct=n(y)}}function bt(Z){if(X=!1,ht(Z),!Q)if(n(p)!==null)Q=!0,Ct();else{var ct=n(y);ct!==null&&Et(bt,ct.startTime-Z)}}var mt=!1,Ot=-1,M=5,I=-1;function S(){return!(r.unstable_now()-I<M)}function C(){if(mt){var Z=r.unstable_now();I=Z;var ct=!0;try{t:{Q=!1,X&&(X=!1,it(Ot),Ot=-1),B=!0;var rt=x;try{e:{for(ht(Z),b=n(p);b!==null&&!(b.expirationTime>Z&&S());){var It=b.callback;if(typeof It=="function"){b.callback=null,x=b.priorityLevel;var D=It(b.expirationTime<=Z);if(Z=r.unstable_now(),typeof D=="function"){b.callback=D,ht(Z),ct=!0;break e}b===n(p)&&s(p),ht(Z)}else s(p);b=n(p)}if(b!==null)ct=!0;else{var Y=n(y);Y!==null&&Et(bt,Y.startTime-Z),ct=!1}}break t}finally{b=null,x=rt,B=!1}ct=void 0}}finally{ct?N():mt=!1}}}var N;if(typeof ut=="function")N=function(){ut(C)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,w=U.port2;U.port1.onmessage=C,N=function(){w.postMessage(null)}}else N=function(){F(C,0)};function Ct(){mt||(mt=!0,N())}function Et(Z,ct){Ot=F(function(){Z(r.unstable_now())},ct)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){Q||B||(Q=!0,Ct())},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var ct=3;break;default:ct=x}var rt=x;x=ct;try{return Z()}finally{x=rt}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ct){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var rt=x;x=Z;try{return ct()}finally{x=rt}},r.unstable_scheduleCallback=function(Z,ct,rt){var It=r.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?It+rt:It):rt=It,Z){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=rt+D,Z={id:E++,callback:ct,priorityLevel:Z,startTime:rt,expirationTime:D,sortIndex:-1},rt>It?(Z.sortIndex=rt,t(y,Z),n(p)===null&&Z===n(y)&&(X?(it(Ot),Ot=-1):X=!0,Et(bt,rt-It))):(Z.sortIndex=D,t(p,Z),Q||B||(Q=!0,Ct())),Z},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(Z){var ct=x;return function(){var rt=x;x=ct;try{return Z.apply(this,arguments)}finally{x=rt}}}}(pd)),pd}var mv;function SS(){return mv||(mv=1,gd.exports=AS()),gd.exports}var yd={exports:{}},He={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function bS(){if(gv)return He;gv=1;var r=pm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return He.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,He.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,E)},He.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},He.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},He.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},He.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,b=m(E,y.crossOrigin),x=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:B}):E==="script"&&s.d.X(p,{crossOrigin:b,integrity:x,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},He.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},He.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,b=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},He.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},He.requestFormReset=function(p){s.d.r(p)},He.unstable_batchedUpdates=function(p,y){return p(y)},He.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},He.useFormStatus=function(){return f.H.useHostTransitionStatus()},He.version="19.0.0",He}var pv;function u0(){if(pv)return yd.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yd.exports=bS(),yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function wS(){if(yv)return ml;yv=1;var r=SS(),t=pm(),n=u0();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),B=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),ht=Symbol.for("react.offscreen"),bt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Ot(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var M=Symbol.for("react.client.reference");function I(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===M?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case m:return"Portal";case E:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case B:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case Q:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return i=e.displayName||null,i!==null?i:I(e.type)||"Memo";case ut:i=e._payload,e=e._init;try{return I(e(i))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,N,U;function w(e){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||"",U=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+e+U}var Ct=!1;function Et(e,i){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(q){var z=q}Reflect.construct(e,[],$)}else{try{$.call()}catch(q){z=q}e.call($.prototype)}}else{try{throw Error()}catch(q){z=q}($=e())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(q){if(q&&z&&typeof q.stack=="string")return[q.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var R=_.split(`
`),V=T.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<V.length&&!V[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===V.length)for(l=R.length-1,h=V.length-1;1<=l&&0<=h&&R[l]!==V[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==V[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==V[h]){var H=`
`+R[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=h);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?w(a):""}function Z(e){switch(e.tag){case 26:case 27:case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 15:return e=Et(e.type,!1),e;case 11:return e=Et(e.type.render,!1),e;case 1:return e=Et(e.type,!0),e;default:return""}}function ct(e){try{var i="";do i+=Z(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function rt(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,i.flags&4098&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function It(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function D(e){if(rt(e)!==e)throw Error(s(188))}function Y(e){var i=e.alternate;if(!i){if(i=rt(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return D(h),e;if(d===l)return D(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,T=h.child;T;){if(T===a){_=!0,a=h,l=d;break}if(T===l){_=!0,l=h,a=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===a){_=!0,a=d,l=h;break}if(T===l){_=!0,l=d,a=h;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function st(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=st(e),i!==null)return i;e=e.sibling}return null}var et=Array.isArray,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vt={pending:!1,data:null,method:null,action:null},Tt=[],de=-1;function qt(e){return{current:e}}function ie(e){0>de||(e.current=Tt[de],Tt[de]=null,de--)}function Qt(e,i){de++,Tt[de]=e.current,e.current=i}var Ye=qt(null),pi=qt(null),_n=qt(null),Xi=qt(null);function Zi(e,i){switch(Qt(_n,i),Qt(pi,e),Qt(Ye,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?Py(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=Py(e),i=zy(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ie(Ye),Qt(Ye,i)}function yi(){ie(Ye),ie(pi),ie(_n)}function oo(e){e.memoizedState!==null&&Qt(Xi,e);var i=Ye.current,a=zy(i,e.type);i!==a&&(Qt(pi,e),Qt(Ye,a))}function Fs(e){pi.current===e&&(ie(Ye),ie(pi)),Xi.current===e&&(ie(Xi),ll._currentValue=vt)}var Gs=Object.prototype.hasOwnProperty,Zr=r.unstable_scheduleCallback,Ks=r.unstable_cancelCallback,dh=r.unstable_shouldYield,lo=r.unstable_requestPaint,en=r.unstable_now,ql=r.unstable_getCurrentPriorityLevel,_e=r.unstable_ImmediatePriority,Ie=r.unstable_UserBlockingPriority,vi=r.unstable_NormalPriority,Hl=r.unstable_LowPriority,uo=r.unstable_IdlePriority,mh=r.log,Jr=r.unstable_setDisableYieldValue,Ji=null,je=null;function co(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}function Qn(e){if(typeof mh=="function"&&Jr(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(Ji,e)}catch{}}var $e=Math.clz32?Math.clz32:Gl,ho=Math.log,Fl=Math.LN2;function Gl(e){return e>>>=0,e===0?32:31-(ho(e)/Fl|0)|0}var Yn=128,Wi=4194304;function zn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function En(e,i){var a=e.pendingLanes;if(a===0)return 0;var l=0,h=e.suspendedLanes,d=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=zn(a):(d&=T,d!==0?l=zn(d):e||(_=T&~_,_!==0&&(l=zn(_))))):(T=a&~h,T!==0?l=zn(T):d!==0?l=zn(d):e||(_=a&~_,_!==0&&(l=zn(_)))),l===0?0:i!==0&&i!==l&&!(i&h)&&(h=l&-l,_=i&-i,h>=_||h===32&&(_&4194176)!==0)?i:l}function tr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Qs(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fo(){var e=Yn;return Yn<<=1,!(Yn&4194176)&&(Yn=128),e}function er(){var e=Wi;return Wi<<=1,!(Wi&62914560)&&(Wi=4194304),e}function Ys(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function ue(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kl(e,i,a,l,h,d){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,R=e.expirationTimes,V=e.hiddenUpdates;for(a=_&~a;0<a;){var H=31-$e(a),$=1<<H;T[H]=0,R[H]=-1;var z=V[H];if(z!==null)for(V[H]=null,H=0;H<z.length;H++){var q=z[H];q!==null&&(q.lane&=-536870913)}a&=~$}l!==0&&nr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~i))}function nr(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-$e(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194218}function ir(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-$e(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Ql(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Yl(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:iv(e.type))}function rr(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var $n=Math.random().toString(36).slice(2),Ce="__reactFiber$"+$n,Ee="__reactProps$"+$n,_i="__reactContainer$"+$n,Wr="__reactEvents$"+$n,$s="__reactListeners$"+$n,Xn="__reactHandles$"+$n,mo="__reactResources$"+$n,sr="__reactMarker$"+$n;function ts(e){delete e[Ce],delete e[Ee],delete e[Wr],delete e[$s],delete e[Xn]}function Bn(e){var i=e[Ce];if(i)return i;for(var a=e.parentNode;a;){if(i=a[_i]||a[Ce]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=qy(e);e!==null;){if(a=e[Ce])return a;e=qy(e)}return i}e=a,a=e.parentNode}return null}function Ei(e){if(e=e[Ce]||e[_i]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function ar(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function or(e){var i=e[mo];return i||(i=e[mo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Wt(e){e[sr]=!0}var go=new Set,Xs={};function hn(e,i){nn(e,i),nn(e+"Capture",i)}function nn(e,i){for(Xs[e]=i,e=0;e<i.length;e++)go.add(i[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),po={},yo={};function $l(e){return Gs.call(yo,e)?!0:Gs.call(po,e)?!1:gh.test(e)?yo[e]=!0:(po[e]=!0,!1)}function lr(e,i,a){if($l(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function ur(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Tn(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}function Xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xl(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ph(e){var i=Xl(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function es(e){e._valueTracker||(e._valueTracker=ph(e))}function vo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=Xl(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function Zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ti=/[\n"\\]/g;function re(e){return e.replace(Ti,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function cr(e,i,a,l,h,d,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),i!=null?_==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Xe(i)):e.value!==""+Xe(i)&&(e.value=""+Xe(i)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),i!=null?Js(e,_,Xe(i)):a!=null?Js(e,_,Xe(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Xe(T):e.removeAttribute("name")}function ns(e,i,a,l,h,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Xe(a):"",i=i!=null?""+Xe(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function Js(e,i,a){i==="number"&&Zs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ht(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Xe(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function is(e,i,a){if(i!=null&&(i=""+Xe(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Xe(a):""}function hr(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(et(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Xe(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function An(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var yh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _o(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||yh.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Zl(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&_o(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&_o(e,d,i[d])}function Eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_h=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(e){return _h.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Sn=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,Si=null;function bi(e){var i=Ei(e);if(i&&(e=i.stateNode)){var a=e[Ee]||null;t:switch(e=i.stateNode,i.type){case"input":if(cr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[Ee]||null;if(!h)throw Error(s(90));cr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&vo(l)}break t;case"textarea":is(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ht(e,!!a.multiple,i,!1)}}}var To=!1;function Jl(e,i,a){if(To)return e(i,a);To=!0;try{var l=e(i);return l}finally{if(To=!1,(Ai!==null||Si!==null)&&(Hu(),Ai&&(i=Ai,e=Si,Si=Ai=null,bi(i),e)))for(i=0;i<e.length;i++)bi(e[i])}}function rs(e,i){var a=e.stateNode;if(a===null)return null;var l=a[Ee]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var bn=!1;if(fn)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){bn=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{bn=!1}var Jn=null,fr=null,wi=null;function Ao(){if(wi)return wi;var e,i=fr,a=i.length,l,h="value"in Jn?Jn.value:Jn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var _=a-e;for(l=1;l<=_&&i[a-l]===h[d-l];l++);return wi=h.slice(e,1<l?1-l:void 0)}function Wn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function So(){return!1}function De(e){function i(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ti:So,this.isPropagationStopped=So,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),i}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=De(Kt),as=C({},Kt,{view:0,detail:0}),Wl=De(as),ea,na,ei,os=C({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(ea=e.screenX-ei.screenX,na=e.screenY-ei.screenY):na=ea=0,ei=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:na}}),wn=De(os),tu=C({},os,{dataTransfer:0}),Eh=De(tu),ls=C({},as,{relatedTarget:0}),ia=De(ls),bo=C({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),ra=De(bo),eu=C({},Kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sa=De(eu),Th=C({},Kt,{data:0}),wo=De(Th),us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ro(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=iu[e])?!!i[e]:!1}function cs(){return Ro}var ru=C({},as,{key:function(e){if(e.key){var i=us[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aa=De(ru),su=C({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=De(su),Ri=C({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),au=De(Ri),ou=C({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lu=De(ou),uu=C({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oa=De(uu),Ze=C({},Kt,{newState:0,oldState:0}),cu=De(Ze),hu=[9,13,27,32],ni=fn&&"CompositionEvent"in window,c=null;fn&&"documentMode"in document&&(c=document.documentMode);var g=fn&&"TextEvent"in window&&!c,v=fn&&(!ni||c&&8<c&&11>=c),A=" ",L=!1;function j(e,i){switch(e){case"keyup":return hu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Te(e,i){switch(e){case"compositionend":return J(i);case"keypress":return i.which!==32?null:(L=!0,A);case"textInput":return e=i.data,e===A&&L?null:e;default:return null}}function Ut(e,i){if(kt)return e==="compositionend"||!ni&&j(e,i)?(e=Ao(),wi=fr=Jn=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var Oe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ae(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Oe[e.type]:i==="textarea"}function Ii(e,i,a,l){Ai?Si?Si.push(l):Si=[l]:Ai=l,i=Yu(i,"onChange"),0<i.length&&(a=new ta("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var ke=null,ii=null;function Co(e){Vy(e,0)}function fu(e){var i=ar(e);if(vo(i))return e}function lg(e,i){if(e==="change")return i}var ug=!1;if(fn){var Ah;if(fn){var Sh="oninput"in document;if(!Sh){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),Sh=typeof cg.oninput=="function"}Ah=Sh}else Ah=!1;ug=Ah&&(!document.documentMode||9<document.documentMode)}function hg(){ke&&(ke.detachEvent("onpropertychange",fg),ii=ke=null)}function fg(e){if(e.propertyName==="value"&&fu(ii)){var i=[];Ii(i,ii,e,Ws(e)),Jl(Co,i)}}function GT(e,i,a){e==="focusin"?(hg(),ke=i,ii=a,ke.attachEvent("onpropertychange",fg)):e==="focusout"&&hg()}function KT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fu(ii)}function QT(e,i){if(e==="click")return fu(i)}function YT(e,i){if(e==="input"||e==="change")return fu(i)}function $T(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var dn=typeof Object.is=="function"?Object.is:$T;function Do(e,i){if(dn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Gs.call(i,h)||!dn(e[h],i[h]))return!1}return!0}function dg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mg(e,i){var a=dg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=dg(a)}}function gg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?gg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function pg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Zs(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=Zs(e.document)}return i}function bh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function XT(e,i){var a=pg(i);i=e.focusedElem;var l=e.selectionRange;if(a!==i&&i&&i.ownerDocument&&gg(i.ownerDocument.documentElement,i)){if(l!==null&&bh(i)){if(e=l.start,a=l.end,a===void 0&&(a=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(a,i.value.length);else if(a=(e=i.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=mg(i,d);var _=mg(i,l);h&&_&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==_.node||a.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(e),a.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),a.addRange(e)))}}for(e=[],a=i;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)a=e[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var ZT=fn&&"documentMode"in document&&11>=document.documentMode,la=null,wh=null,Oo=null,Rh=!1;function yg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rh||la==null||la!==Zs(l)||(l=la,"selectionStart"in l&&bh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Oo&&Do(Oo,l)||(Oo=l,l=Yu(wh,"onSelect"),0<l.length&&(i=new ta("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=la)))}function hs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ua={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ih={},vg={};fn&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function fs(e){if(Ih[e])return Ih[e];if(!ua[e])return e;var i=ua[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in vg)return Ih[e]=i[a];return e}var _g=fs("animationend"),Eg=fs("animationiteration"),Tg=fs("animationstart"),JT=fs("transitionrun"),WT=fs("transitionstart"),tA=fs("transitioncancel"),Ag=fs("transitionend"),Sg=new Map,bg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function jn(e,i){Sg.set(e,i),hn(i,[e])}var Rn=[],ca=0,Ch=0;function du(){for(var e=ca,i=Ch=ca=0;i<e;){var a=Rn[i];Rn[i++]=null;var l=Rn[i];Rn[i++]=null;var h=Rn[i];Rn[i++]=null;var d=Rn[i];if(Rn[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&wg(a,h,d)}}function mu(e,i,a,l){Rn[ca++]=e,Rn[ca++]=i,Rn[ca++]=a,Rn[ca++]=l,Ch|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Dh(e,i,a,l){return mu(e,i,a,l),gu(e)}function dr(e,i){return mu(e,null,null,i),gu(e)}function wg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&i!==null&&e.tag===3&&(d=e.stateNode,h=31-$e(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[i]:e.push(i),i.lane=a|536870912)}function gu(e){if(50<el)throw el=0,Uf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ha={},Rg=new WeakMap;function In(e,i){if(typeof e=="object"&&e!==null){var a=Rg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ct(i)},Rg.set(e,i),i)}return{value:e,source:i,stack:ct(i)}}var fa=[],da=0,pu=null,yu=0,Cn=[],Dn=0,ds=null,Ci=1,Di="";function ms(e,i){fa[da++]=yu,fa[da++]=pu,pu=e,yu=i}function Ig(e,i,a){Cn[Dn++]=Ci,Cn[Dn++]=Di,Cn[Dn++]=ds,ds=e;var l=Ci;e=Di;var h=32-$e(l)-1;l&=~(1<<h),a+=1;var d=32-$e(i)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Ci=1<<32-$e(i)+h|a<<h|l,Di=d+e}else Ci=1<<d|a<<h|l,Di=e}function Oh(e){e.return!==null&&(ms(e,1),Ig(e,1,0))}function Nh(e){for(;e===pu;)pu=fa[--da],fa[da]=null,yu=fa[--da],fa[da]=null;for(;e===ds;)ds=Cn[--Dn],Cn[Dn]=null,Di=Cn[--Dn],Cn[Dn]=null,Ci=Cn[--Dn],Cn[Dn]=null}var Je=null,Ue=null,Ft=!1,qn=null,ri=!1,Mh=Error(s(519));function gs(e){var i=Error(s(418,""));throw Vo(In(i,e)),Mh}function Cg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Ce]=e,i[Ee]=l,a){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(a=0;a<il.length;a++)xt(il[a],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),ns(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),es(i);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),hr(i,l.value,l.defaultValue,l.children),es(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Ly(i.textContent,a)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=$u),i=!0):i=!1,i||gs(e)}function Dg(e){for(Je=e.return;Je;)switch(Je.tag){case 3:case 27:ri=!0;return;case 5:case 13:ri=!1;return;default:Je=Je.return}}function No(e){if(e!==Je)return!1;if(!Ft)return Dg(e),Ft=!0,!1;var i=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&(i=!0),i&&Ue&&gs(e),Dg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){Ue=Fn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}Ue=null}}else Ue=Je?Fn(e.stateNode.nextSibling):null;return!0}function Mo(){Ue=Je=null,Ft=!1}function Vo(e){qn===null?qn=[e]:qn.push(e)}var xo=Error(s(460)),Og=Error(s(474)),Vh={then:function(){}};function Ng(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vu(){}function Mg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(vu,vu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===xo?Error(s(483)):e;default:if(typeof i.status=="string")i.then(vu,vu);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===xo?Error(s(483)):e}throw ko=i,xo}}var ko=null;function Vg(){if(ko===null)throw Error(s(459));var e=ko;return ko=null,e}var ma=null,Uo=0;function _u(e){var i=Uo;return Uo+=1,ma===null&&(ma=[]),Mg(ma,e,i)}function Lo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Eu(e,i){throw i.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function xg(e){var i=e._init;return i(e._payload)}function kg(e){function i(k,O){if(e){var P=k.deletions;P===null?(k.deletions=[O],k.flags|=16):P.push(O)}}function a(k,O){if(!e)return null;for(;O!==null;)i(k,O),O=O.sibling;return null}function l(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function h(k,O){return k=wr(k,O),k.index=0,k.sibling=null,k}function d(k,O,P){return k.index=P,e?(P=k.alternate,P!==null?(P=P.index,P<O?(k.flags|=33554434,O):P):(k.flags|=33554434,O)):(k.flags|=1048576,O)}function _(k){return e&&k.alternate===null&&(k.flags|=33554434),k}function T(k,O,P,G){return O===null||O.tag!==6?(O=Cf(P,k.mode,G),O.return=k,O):(O=h(O,P),O.return=k,O)}function R(k,O,P,G){var lt=P.type;return lt===p?H(k,O,P.props.children,G,P.key):O!==null&&(O.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ut&&xg(lt)===O.type)?(O=h(O,P.props),Lo(O,P),O.return=k,O):(O=Pu(P.type,P.key,P.props,null,k.mode,G),Lo(O,P),O.return=k,O)}function V(k,O,P,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==P.containerInfo||O.stateNode.implementation!==P.implementation?(O=Df(P,k.mode,G),O.return=k,O):(O=h(O,P.children||[]),O.return=k,O)}function H(k,O,P,G,lt){return O===null||O.tag!==7?(O=ws(P,k.mode,G,lt),O.return=k,O):(O=h(O,P),O.return=k,O)}function $(k,O,P){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Cf(""+O,k.mode,P),O.return=k,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case f:return P=Pu(O.type,O.key,O.props,null,k.mode,P),Lo(P,O),P.return=k,P;case m:return O=Df(O,k.mode,P),O.return=k,O;case ut:var G=O._init;return O=G(O._payload),$(k,O,P)}if(et(O)||Ot(O))return O=ws(O,k.mode,P,null),O.return=k,O;if(typeof O.then=="function")return $(k,_u(O),P);if(O.$$typeof===B)return $(k,ku(k,O),P);Eu(k,O)}return null}function z(k,O,P,G){var lt=O!==null?O.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return lt!==null?null:T(k,O,""+P,G);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case f:return P.key===lt?R(k,O,P,G):null;case m:return P.key===lt?V(k,O,P,G):null;case ut:return lt=P._init,P=lt(P._payload),z(k,O,P,G)}if(et(P)||Ot(P))return lt!==null?null:H(k,O,P,G,null);if(typeof P.then=="function")return z(k,O,_u(P),G);if(P.$$typeof===B)return z(k,O,ku(k,P),G);Eu(k,P)}return null}function q(k,O,P,G,lt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return k=k.get(P)||null,T(O,k,""+G,lt);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return k=k.get(G.key===null?P:G.key)||null,R(O,k,G,lt);case m:return k=k.get(G.key===null?P:G.key)||null,V(O,k,G,lt);case ut:var Nt=G._init;return G=Nt(G._payload),q(k,O,P,G,lt)}if(et(G)||Ot(G))return k=k.get(P)||null,H(O,k,G,lt,null);if(typeof G.then=="function")return q(k,O,P,_u(G),lt);if(G.$$typeof===B)return q(k,O,P,ku(O,G),lt);Eu(O,G)}return null}function ft(k,O,P,G){for(var lt=null,Nt=null,dt=O,gt=O=0,Ve=null;dt!==null&&gt<P.length;gt++){dt.index>gt?(Ve=dt,dt=null):Ve=dt.sibling;var Gt=z(k,dt,P[gt],G);if(Gt===null){dt===null&&(dt=Ve);break}e&&dt&&Gt.alternate===null&&i(k,dt),O=d(Gt,O,gt),Nt===null?lt=Gt:Nt.sibling=Gt,Nt=Gt,dt=Ve}if(gt===P.length)return a(k,dt),Ft&&ms(k,gt),lt;if(dt===null){for(;gt<P.length;gt++)dt=$(k,P[gt],G),dt!==null&&(O=d(dt,O,gt),Nt===null?lt=dt:Nt.sibling=dt,Nt=dt);return Ft&&ms(k,gt),lt}for(dt=l(dt);gt<P.length;gt++)Ve=q(dt,k,gt,P[gt],G),Ve!==null&&(e&&Ve.alternate!==null&&dt.delete(Ve.key===null?gt:Ve.key),O=d(Ve,O,gt),Nt===null?lt=Ve:Nt.sibling=Ve,Nt=Ve);return e&&dt.forEach(function(Mr){return i(k,Mr)}),Ft&&ms(k,gt),lt}function At(k,O,P,G){if(P==null)throw Error(s(151));for(var lt=null,Nt=null,dt=O,gt=O=0,Ve=null,Gt=P.next();dt!==null&&!Gt.done;gt++,Gt=P.next()){dt.index>gt?(Ve=dt,dt=null):Ve=dt.sibling;var Mr=z(k,dt,Gt.value,G);if(Mr===null){dt===null&&(dt=Ve);break}e&&dt&&Mr.alternate===null&&i(k,dt),O=d(Mr,O,gt),Nt===null?lt=Mr:Nt.sibling=Mr,Nt=Mr,dt=Ve}if(Gt.done)return a(k,dt),Ft&&ms(k,gt),lt;if(dt===null){for(;!Gt.done;gt++,Gt=P.next())Gt=$(k,Gt.value,G),Gt!==null&&(O=d(Gt,O,gt),Nt===null?lt=Gt:Nt.sibling=Gt,Nt=Gt);return Ft&&ms(k,gt),lt}for(dt=l(dt);!Gt.done;gt++,Gt=P.next())Gt=q(dt,k,gt,Gt.value,G),Gt!==null&&(e&&Gt.alternate!==null&&dt.delete(Gt.key===null?gt:Gt.key),O=d(Gt,O,gt),Nt===null?lt=Gt:Nt.sibling=Gt,Nt=Gt);return e&&dt.forEach(function(mS){return i(k,mS)}),Ft&&ms(k,gt),lt}function oe(k,O,P,G){if(typeof P=="object"&&P!==null&&P.type===p&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case f:t:{for(var lt=P.key;O!==null;){if(O.key===lt){if(lt=P.type,lt===p){if(O.tag===7){a(k,O.sibling),G=h(O,P.props.children),G.return=k,k=G;break t}}else if(O.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ut&&xg(lt)===O.type){a(k,O.sibling),G=h(O,P.props),Lo(G,P),G.return=k,k=G;break t}a(k,O);break}else i(k,O);O=O.sibling}P.type===p?(G=ws(P.props.children,k.mode,G,P.key),G.return=k,k=G):(G=Pu(P.type,P.key,P.props,null,k.mode,G),Lo(G,P),G.return=k,k=G)}return _(k);case m:t:{for(lt=P.key;O!==null;){if(O.key===lt)if(O.tag===4&&O.stateNode.containerInfo===P.containerInfo&&O.stateNode.implementation===P.implementation){a(k,O.sibling),G=h(O,P.children||[]),G.return=k,k=G;break t}else{a(k,O);break}else i(k,O);O=O.sibling}G=Df(P,k.mode,G),G.return=k,k=G}return _(k);case ut:return lt=P._init,P=lt(P._payload),oe(k,O,P,G)}if(et(P))return ft(k,O,P,G);if(Ot(P)){if(lt=Ot(P),typeof lt!="function")throw Error(s(150));return P=lt.call(P),At(k,O,P,G)}if(typeof P.then=="function")return oe(k,O,_u(P),G);if(P.$$typeof===B)return oe(k,O,ku(k,P),G);Eu(k,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,O!==null&&O.tag===6?(a(k,O.sibling),G=h(O,P),G.return=k,k=G):(a(k,O),G=Cf(P,k.mode,G),G.return=k,k=G),_(k)):a(k,O)}return function(k,O,P,G){try{Uo=0;var lt=oe(k,O,P,G);return ma=null,lt}catch(dt){if(dt===xo)throw dt;var Nt=Vn(29,dt,null,k.mode);return Nt.lanes=G,Nt.return=k,Nt}finally{}}}var ps=kg(!0),Ug=kg(!1),ga=qt(null),Tu=qt(0);function Lg(e,i){e=Bi,Qt(Tu,e),Qt(ga,i),Bi=e|i.baseLanes}function xh(){Qt(Tu,Bi),Qt(ga,ga.current)}function kh(){Bi=Tu.current,ie(ga),ie(Tu)}var On=qt(null),si=null;function mr(e){var i=e.alternate;Qt(Se,Se.current&1),Qt(On,e),si===null&&(i===null||ga.current!==null||i.memoizedState!==null)&&(si=e)}function Pg(e){if(e.tag===22){if(Qt(Se,Se.current),Qt(On,e),si===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(si=e)}}else gr()}function gr(){Qt(Se,Se.current),Qt(On,On.current)}function Oi(e){ie(On),si===e&&(si=null),ie(Se)}var Se=qt(0);function Au(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var eA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},nA=r.unstable_scheduleCallback,iA=r.unstable_NormalPriority,be={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uh(){return{controller:new eA,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&nA(iA,function(){e.controller.abort()})}var zo=null,Lh=0,pa=0,ya=null;function rA(e,i){if(zo===null){var a=zo=[];Lh=0,pa=Ff(),ya={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Lh++,i.then(zg,zg),i}function zg(){if(--Lh===0&&zo!==null){ya!==null&&(ya.status="fulfilled");var e=zo;zo=null,pa=0,ya=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function sA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Bg=S.S;S.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&rA(e,i),Bg!==null&&Bg(e,i)};var ys=qt(null);function Ph(){var e=ys.current;return e!==null?e:Zt.pooledCache}function Su(e,i){i===null?Qt(ys,ys.current):Qt(ys,i.pool)}function jg(){var e=Ph();return e===null?null:{parent:be._currentValue,pool:e}}var pr=0,Dt=null,Yt=null,me=null,bu=!1,va=!1,vs=!1,wu=0,Bo=0,_a=null,aA=0;function ce(){throw Error(s(321))}function zh(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!dn(e[a],i[a]))return!1;return!0}function Bh(e,i,a,l,h,d){return pr=d,Dt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,S.H=e===null||e.memoizedState===null?_s:yr,vs=!1,d=a(l,h),vs=!1,va&&(d=Hg(i,a,l,h)),qg(e),d}function qg(e){S.H=ai;var i=Yt!==null&&Yt.next!==null;if(pr=0,me=Yt=Dt=null,bu=!1,Bo=0,_a=null,i)throw Error(s(300));e===null||Ne||(e=e.dependencies,e!==null&&xu(e)&&(Ne=!0))}function Hg(e,i,a,l){Dt=e;var h=0;do{if(va&&(_a=null),Bo=0,va=!1,25<=h)throw Error(s(301));if(h+=1,me=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=Es,d=i(a,l)}while(va);return d}function oA(){var e=S.H,i=e.useState()[0];return i=typeof i.then=="function"?jo(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(Dt.flags|=1024),i}function jh(){var e=wu!==0;return wu=0,e}function qh(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Hh(e){if(bu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}bu=!1}pr=0,me=Yt=Dt=null,va=!1,Bo=wu=0,_a=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?Dt.memoizedState=me=e:me=me.next=e,me}function ge(){if(Yt===null){var e=Dt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=me===null?Dt.memoizedState:me.next;if(i!==null)me=i,Yt=e;else{if(e===null)throw Dt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},me===null?Dt.memoizedState=me=e:me=me.next=e}return me}var Ru;Ru=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function jo(e){var i=Bo;return Bo+=1,_a===null&&(_a=[]),e=Mg(_a,e,i),i=Dt,(me===null?i.memoizedState:me.next)===null&&(i=i.alternate,S.H=i===null||i.memoizedState===null?_s:yr),e}function Iu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===B)return qe(e)}throw Error(s(438,String(e)))}function Fh(e){var i=null,a=Dt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ru(),Dt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=bt;return i.index++,a}function Ni(e,i){return typeof i=="function"?i(e):i}function Cu(e){var i=ge();return Gh(i,Yt,e)}function Gh(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=_=null,R=null,V=i,H=!1;do{var $=V.lane&-536870913;if($!==V.lane?(Lt&$)===$:(pr&$)===$){var z=V.revertLane;if(z===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),$===pa&&(H=!0);else if((pr&z)===z){V=V.next,z===pa&&(H=!0);continue}else $={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(T=R=$,_=d):R=R.next=$,Dt.lanes|=z,Rr|=z;$=V.action,vs&&a(d,$),d=V.hasEagerState?V.eagerState:a(d,$)}else z={lane:$,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(T=R=z,_=d):R=R.next=z,Dt.lanes|=$,Rr|=$;V=V.next}while(V!==null&&V!==i);if(R===null?_=d:R.next=T,!dn(d,e.memoizedState)&&(Ne=!0,H&&(a=ya,a!==null)))throw a;e.memoizedState=d,e.baseState=_,e.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Kh(e){var i=ge(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=e(d,_.action),_=_.next;while(_!==h);dn(d,i.memoizedState)||(Ne=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Fg(e,i,a){var l=Dt,h=ge(),d=Ft;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!dn((Yt||h).memoizedState,a);if(_&&(h.memoizedState=a,Ne=!0),h=h.queue,$h(Qg.bind(null,l,h,e),[e]),h.getSnapshot!==i||_||me!==null&&me.memoizedState.tag&1){if(l.flags|=2048,Ea(9,Kg.bind(null,l,h,a,i),{destroy:void 0},null),Zt===null)throw Error(s(349));d||pr&60||Gg(l,i,a)}return a}function Gg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Dt.updateQueue,i===null?(i=Ru(),Dt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Kg(e,i,a,l){i.value=a,i.getSnapshot=l,Yg(i)&&$g(e)}function Qg(e,i,a){return a(function(){Yg(i)&&$g(e)})}function Yg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!dn(e,a)}catch{return!0}}function $g(e){var i=dr(e,2);i!==null&&We(i,e,2)}function Qh(e){var i=rn();if(typeof e=="function"){var a=e;if(e=a(),vs){Qn(!0);try{a()}finally{Qn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},i}function Xg(e,i,a,l){return e.baseState=a,Gh(e,Yt,typeof l=="function"?l:Ni)}function lA(e,i,a,l,h){if(Nu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};S.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Zg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Zg(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=S.T,_={};S.T=_;try{var T=a(h,l),R=S.S;R!==null&&R(_,T),Jg(e,i,T)}catch(V){Yh(e,i,V)}finally{S.T=d}}else try{d=a(h,l),Jg(e,i,d)}catch(V){Yh(e,i,V)}}function Jg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Wg(e,i,l)},function(l){return Yh(e,i,l)}):Wg(e,i,a)}function Wg(e,i,a){i.status="fulfilled",i.value=a,tp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Zg(e,a)))}function Yh(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,tp(i),i=i.next;while(i!==l)}e.action=null}function tp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function ep(e,i){return i}function np(e,i){if(Ft){var a=Zt.formState;if(a!==null){t:{var l=Dt;if(Ft){if(Ue){e:{for(var h=Ue,d=ri;h.nodeType!==8;){if(!d){h=null;break e}if(h=Fn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Ue=Fn(h.nextSibling),l=h.data==="F!";break t}}gs(l)}l=!1}l&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ep,lastRenderedState:i},a.queue=l,a=Ep.bind(null,Dt,l),l.dispatch=a,l=Qh(!1),d=tf.bind(null,Dt,!1,l.queue),l=rn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=lA.bind(null,Dt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function ip(e){var i=ge();return rp(i,Yt,e)}function rp(e,i,a){i=Gh(e,i,ep)[0],e=Cu(Ni)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?jo(i):i;var l=ge(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Dt.flags|=2048,Ea(9,uA.bind(null,h,a),{destroy:void 0},null)),[i,d,e]}function uA(e,i){e.action=i}function sp(e){var i=ge(),a=Yt;if(a!==null)return rp(i,a,e);ge(),i=i.memoizedState,a=ge();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Ea(e,i,a,l){return e={tag:e,create:i,inst:a,deps:l,next:null},i=Dt.updateQueue,i===null&&(i=Ru(),Dt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function ap(){return ge().memoizedState}function Du(e,i,a,l){var h=rn();Dt.flags|=e,h.memoizedState=Ea(1|i,a,{destroy:void 0},l===void 0?null:l)}function Ou(e,i,a,l){var h=ge();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&zh(l,Yt.memoizedState.deps)?h.memoizedState=Ea(i,a,d,l):(Dt.flags|=e,h.memoizedState=Ea(1|i,a,d,l))}function op(e,i){Du(8390656,8,e,i)}function $h(e,i){Ou(2048,8,e,i)}function lp(e,i){return Ou(4,2,e,i)}function up(e,i){return Ou(4,4,e,i)}function cp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function hp(e,i,a){a=a!=null?a.concat([e]):null,Ou(4,4,cp.bind(null,i,e),a)}function Xh(){}function fp(e,i){var a=ge();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&zh(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function dp(e,i){var a=ge();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&zh(i,l[1]))return l[0];if(l=e(),vs){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[l,i],l}function Zh(e,i,a){return a===void 0||pr&1073741824?e.memoizedState=i:(e.memoizedState=a,e=gy(),Dt.lanes|=e,Rr|=e,a)}function mp(e,i,a,l){return dn(a,i)?a:ga.current!==null?(e=Zh(e,a,l),dn(e,i)||(Ne=!0),e):pr&42?(e=gy(),Dt.lanes|=e,Rr|=e,i):(Ne=!0,e.memoizedState=a)}function gp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var _=S.T,T={};S.T=T,tf(e,!1,i,a);try{var R=h(),V=S.S;if(V!==null&&V(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var H=sA(R,l);qo(e,i,H,yn(e))}else qo(e,i,l,yn(e))}catch($){qo(e,i,{then:function(){},status:"rejected",reason:$},yn())}finally{nt.p=d,S.T=_}}function cA(){}function Jh(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=pp(e).queue;gp(e,h,i,vt,a===null?cA:function(){return yp(e),a(l)})}function pp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:vt,baseState:vt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:vt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function yp(e){var i=pp(e).next.queue;qo(e,i,{},yn())}function Wh(){return qe(ll)}function vp(){return ge().memoizedState}function _p(){return ge().memoizedState}function hA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=yn();e=Er(a);var l=Tr(i,e,a);l!==null&&(We(l,i,a),Go(l,i,a)),i={cache:Uh()},e.payload=i;return}i=i.return}}function fA(e,i,a){var l=yn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nu(e)?Tp(i,a):(a=Dh(e,i,a,l),a!==null&&(We(a,e,l),Ap(a,i,l)))}function Ep(e,i,a){var l=yn();qo(e,i,a,l)}function qo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))Tp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,T=d(_,a);if(h.hasEagerState=!0,h.eagerState=T,dn(T,_))return mu(e,i,h,0),Zt===null&&du(),!1}catch{}finally{}if(a=Dh(e,i,h,l),a!==null)return We(a,e,l),Ap(a,i,l),!0}return!1}function tf(e,i,a,l){if(l={lane:2,revertLane:Ff(),action:l,hasEagerState:!1,eagerState:null,next:null},Nu(e)){if(i)throw Error(s(479))}else i=Dh(e,a,l,2),i!==null&&We(i,e,2)}function Nu(e){var i=e.alternate;return e===Dt||i!==null&&i===Dt}function Tp(e,i){va=bu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Ap(e,i,a){if(a&4194176){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,ir(e,a)}}var ai={readContext:qe,use:Iu,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce};ai.useCacheRefresh=ce,ai.useMemoCache=ce,ai.useHostTransitionStatus=ce,ai.useFormState=ce,ai.useActionState=ce,ai.useOptimistic=ce;var _s={readContext:qe,use:Iu,useCallback:function(e,i){return rn().memoizedState=[e,i===void 0?null:i],e},useContext:qe,useEffect:op,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Du(4194308,4,cp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Du(4194308,4,e,i)},useInsertionEffect:function(e,i){Du(4,2,e,i)},useMemo:function(e,i){var a=rn();i=i===void 0?null:i;var l=e();if(vs){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=rn();if(a!==void 0){var h=a(i);if(vs){Qn(!0);try{a(i)}finally{Qn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=fA.bind(null,Dt,e),[l.memoizedState,e]},useRef:function(e){var i=rn();return e={current:e},i.memoizedState=e},useState:function(e){e=Qh(e);var i=e.queue,a=Ep.bind(null,Dt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Xh,useDeferredValue:function(e,i){var a=rn();return Zh(a,e,i)},useTransition:function(){var e=Qh(!1);return e=gp.bind(null,Dt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Dt,h=rn();if(Ft){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Zt===null)throw Error(s(349));Lt&60||Gg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,op(Qg.bind(null,l,d,e),[e]),l.flags|=2048,Ea(9,Kg.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var e=rn(),i=Zt.identifierPrefix;if(Ft){var a=Di,l=Ci;a=(l&~(1<<32-$e(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=wu++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=aA++,i=":"+i+"r"+a.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return rn().memoizedState=hA.bind(null,Dt)}};_s.useMemoCache=Fh,_s.useHostTransitionStatus=Wh,_s.useFormState=np,_s.useActionState=np,_s.useOptimistic=function(e){var i=rn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=tf.bind(null,Dt,!0,a),a.dispatch=i,[e,i]};var yr={readContext:qe,use:Iu,useCallback:fp,useContext:qe,useEffect:$h,useImperativeHandle:hp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:dp,useReducer:Cu,useRef:ap,useState:function(){return Cu(Ni)},useDebugValue:Xh,useDeferredValue:function(e,i){var a=ge();return mp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Cu(Ni)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:Fg,useId:vp};yr.useCacheRefresh=_p,yr.useMemoCache=Fh,yr.useHostTransitionStatus=Wh,yr.useFormState=ip,yr.useActionState=ip,yr.useOptimistic=function(e,i){var a=ge();return Xg(a,Yt,e,i)};var Es={readContext:qe,use:Iu,useCallback:fp,useContext:qe,useEffect:$h,useImperativeHandle:hp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:dp,useReducer:Kh,useRef:ap,useState:function(){return Kh(Ni)},useDebugValue:Xh,useDeferredValue:function(e,i){var a=ge();return Yt===null?Zh(a,e,i):mp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Kh(Ni)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:Fg,useId:vp};Es.useCacheRefresh=_p,Es.useMemoCache=Fh,Es.useHostTransitionStatus=Wh,Es.useFormState=sp,Es.useActionState=sp,Es.useOptimistic=function(e,i){var a=ge();return Yt!==null?Xg(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])};function ef(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:C({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nf={isMounted:function(e){return(e=e._reactInternals)?rt(e)===e:!1},enqueueSetState:function(e,i,a){e=e._reactInternals;var l=yn(),h=Er(l);h.payload=i,a!=null&&(h.callback=a),i=Tr(e,h,l),i!==null&&(We(i,e,l),Go(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=yn(),h=Er(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Tr(e,h,l),i!==null&&(We(i,e,l),Go(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=yn(),l=Er(a);l.tag=2,i!=null&&(l.callback=i),i=Tr(e,l,a),i!==null&&(We(i,e,a),Go(i,e,a))}};function Sp(e,i,a,l,h,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!Do(a,l)||!Do(h,d):!0}function bp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&nf.enqueueReplaceState(i,i.state,null)}function Ts(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=C({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Mu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wp(e){Mu(e)}function Rp(e){console.error(e)}function Ip(e){Mu(e)}function Vu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Cp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function rf(e,i,a){return a=Er(a),a.tag=3,a.payload={element:null},a.callback=function(){Vu(e,i)},a}function Dp(e){return e=Er(e),e.tag=3,e}function Op(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Cp(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Cp(i,a,l),typeof h!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function dA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Fo(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return si===null?zf():a.alternate===null&&ae===0&&(ae=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Vh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),jf(e,l,h)),!1;case 22:return a.flags|=65536,l===Vh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),jf(e,l,h)),!1}throw Error(s(435,a.tag))}return jf(e,l,h),zf(),!1}if(Ft)return i=On.current,i!==null?(!(i.flags&65536)&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Mh&&(e=Error(s(422),{cause:l}),Vo(In(e,a)))):(l!==Mh&&(i=Error(s(423),{cause:l}),Vo(In(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=In(l,a),h=rf(e.stateNode,l,h),_f(e,h),ae!==4&&(ae=2)),!1;var d=Error(s(520),{cause:l});if(d=In(d,a),Wo===null?Wo=[d]:Wo.push(d),ae!==4&&(ae=2),i===null)return!0;l=In(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=rf(a.stateNode,l,e),_f(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ir===null||!Ir.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Dp(h),Op(h,e,a,l),_f(a,h),!1}a=a.return}while(a!==null);return!1}var Np=Error(s(461)),Ne=!1;function Le(e,i,a,l){i.child=e===null?Ug(i,null,a,l):ps(i,e.child,a,l)}function Mp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return Ss(i),l=Bh(e,i,a,_,d,h),T=jh(),e!==null&&!Ne?(qh(e,i,h),Mi(e,i,h)):(Ft&&T&&Oh(i),i.flags|=1,Le(e,i,l,h),i.child)}function Vp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!If(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,xp(e,i,d,l,h)):(e=Pu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!df(e,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(_,l)&&e.ref===i.ref)return Mi(e,i,h)}return i.flags|=1,e=wr(d,l),e.ref=i.ref,e.return=i,i.child=e}function xp(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Do(d,l)&&e.ref===i.ref)if(Ne=!1,i.pendingProps=l=d,df(e,h))e.flags&131072&&(Ne=!0);else return i.lanes=e.lanes,Mi(e,i,h)}return sf(e,i,a,l,h)}function kp(e,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(Ho(e,i),l.mode==="hidden"||d){if(i.flags&128){if(l=_!==null?_.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Up(e,i,l,a)}if(a&536870912)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Su(i,_!==null?_.cachePool:null),_!==null?Lg(i,_):xh(),Pg(i);else return i.lanes=i.childLanes=536870912,Up(e,i,_!==null?_.baseLanes|a:a,a)}else _!==null?(Su(i,_.cachePool),Lg(i,_),gr(),i.memoizedState=null):(e!==null&&Su(i,null),xh(),gr());return Le(e,i,h,a),i.child}function Up(e,i,a,l){var h=Ph();return h=h===null?null:{parent:be._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Su(i,null),xh(),Pg(i),e!==null&&Fo(e,i,l,!0),null}function Ho(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=2097664)}}function sf(e,i,a,l,h){return Ss(i),a=Bh(e,i,a,l,void 0,h),l=jh(),e!==null&&!Ne?(qh(e,i,h),Mi(e,i,h)):(Ft&&l&&Oh(i),i.flags|=1,Le(e,i,a,h),i.child)}function Lp(e,i,a,l,h,d){return Ss(i),i.updateQueue=null,a=Hg(i,l,a,h),qg(e),l=jh(),e!==null&&!Ne?(qh(e,i,d),Mi(e,i,d)):(Ft&&l&&Oh(i),i.flags|=1,Le(e,i,a,d),i.child)}function Pp(e,i,a,l,h){if(Ss(i),i.stateNode===null){var d=ha,_=a.contextType;typeof _=="object"&&_!==null&&(d=qe(_)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=nf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},yf(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?qe(_):ha,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ef(i,a,_,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&nf.enqueueReplaceState(d,d.state,null),Qo(i,l,d,h),Ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,R=Ts(a,T);d.props=R;var V=d.context,H=a.contextType;_=ha,typeof H=="object"&&H!==null&&(_=qe(H));var $=a.getDerivedStateFromProps;H=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||V!==_)&&bp(i,d,l,_),_r=!1;var z=i.memoizedState;d.state=z,Qo(i,l,d,h),Ko(),V=i.memoizedState,T||z!==V||_r?(typeof $=="function"&&(ef(i,a,$,l),V=i.memoizedState),(R=_r||Sp(i,a,R,l,z,V,_))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),d.props=l,d.state=V,d.context=_,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,vf(e,i),_=i.memoizedProps,H=Ts(a,_),d.props=H,$=i.pendingProps,z=d.context,V=a.contextType,R=ha,typeof V=="object"&&V!==null&&(R=qe(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==$||z!==R)&&bp(i,d,l,R),_r=!1,z=i.memoizedState,d.state=z,Qo(i,l,d,h),Ko();var q=i.memoizedState;_!==$||z!==q||_r||e!==null&&e.dependencies!==null&&xu(e.dependencies)?(typeof T=="function"&&(ef(i,a,T,l),q=i.memoizedState),(H=_r||Sp(i,a,H,l,z,q,R)||e!==null&&e.dependencies!==null&&xu(e.dependencies))?(V||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=R,l=H):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ho(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=ps(i,e.child,null,h),i.child=ps(i,null,a,h)):Le(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Mi(e,i,h),e}function zp(e,i,a,l){return Mo(),i.flags|=256,Le(e,i,a,l),i.child}var af={dehydrated:null,treeContext:null,retryLane:0};function of(e){return{baseLanes:e,cachePool:jg()}}function lf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=xn),e}function Bp(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ft){if(h?mr(i):gr(),Ft){var T=Ue,R;if(R=T){t:{for(R=T,T=ri;R.nodeType!==8;){if(!T){T=null;break t}if(R=Fn(R.nextSibling),R===null){T=null;break t}}T=R}T!==null?(i.memoizedState={dehydrated:T,treeContext:ds!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},R=Vn(18,null,null,0),R.stateNode=T,R.return=i,i.child=R,Je=i,Ue=null,R=!0):R=!1}R||gs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?i.lanes=16:i.lanes=536870912,null;Oi(i)}return T=l.children,l=l.fallback,h?(gr(),h=i.mode,T=cf({mode:"hidden",children:T},h),l=ws(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=of(a),h.childLanes=lf(e,_,a),i.memoizedState=af,l):(mr(i),uf(i,T))}if(R=e.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)i.flags&256?(mr(i),i.flags&=-257,i=hf(e,i,a)):i.memoizedState!==null?(gr(),i.child=e.child,i.flags|=128,i=null):(gr(),h=l.fallback,T=i.mode,l=cf({mode:"visible",children:l.children},T),h=ws(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,ps(i,e.child,null,a),l=i.child,l.memoizedState=of(a),l.childLanes=lf(e,_,a),i.memoizedState=af,i=h);else if(mr(i),T.data==="$!"){if(_=T.nextSibling&&T.nextSibling.dataset,_)var V=_.dgst;_=V,l=Error(s(419)),l.stack="",l.digest=_,Vo({value:l,source:null,stack:null}),i=hf(e,i,a)}else if(Ne||Fo(e,i,a,!1),_=(a&e.childLanes)!==0,Ne||_){if(_=Zt,_!==null){if(l=a&-a,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(_.suspendedLanes|a)?0:l,l!==0&&l!==R.retryLane)throw R.retryLane=l,dr(e,l),We(_,e,l),Np}T.data==="$?"||zf(),i=hf(e,i,a)}else T.data==="$?"?(i.flags|=128,i.child=e.child,i=CA.bind(null,e),T._reactRetry=i,i=null):(e=R.treeContext,Ue=Fn(T.nextSibling),Je=i,Ft=!0,qn=null,ri=!1,e!==null&&(Cn[Dn++]=Ci,Cn[Dn++]=Di,Cn[Dn++]=ds,Ci=e.id,Di=e.overflow,ds=i),i=uf(i,l.children),i.flags|=4096);return i}return h?(gr(),h=l.fallback,T=i.mode,R=e.child,V=R.sibling,l=wr(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&31457280,V!==null?h=wr(V,h):(h=ws(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=of(a):(R=T.cachePool,R!==null?(V=be._currentValue,R=R.parent!==V?{parent:V,pool:V}:R):R=jg(),T={baseLanes:T.baseLanes|a,cachePool:R}),h.memoizedState=T,h.childLanes=lf(e,_,a),i.memoizedState=af,l):(mr(i),a=e.child,e=a.sibling,a=wr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(_=i.deletions,_===null?(i.deletions=[e],i.flags|=16):_.push(e)),i.child=a,i.memoizedState=null,a)}function uf(e,i){return i=cf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function cf(e,i){return fy(e,i,0,null)}function hf(e,i,a){return ps(i,e.child,null,a),e=uf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function jp(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),gf(e.return,i,a)}function ff(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function qp(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Le(e,i,l.children,a),l=Se.current,l&2)l=l&1|2,i.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jp(e,a,i);else if(e.tag===19)jp(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Qt(Se,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Au(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),ff(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Au(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}ff(i,!0,a,null,d);break;case"together":ff(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Mi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Rr|=i.lanes,!(a&i.childLanes))if(e!==null){if(Fo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=wr(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=wr(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function df(e,i){return e.lanes&i?!0:(e=e.dependencies,!!(e!==null&&xu(e)))}function mA(e,i,a){switch(i.tag){case 3:Zi(i,i.stateNode.containerInfo),vr(i,be,e.memoizedState.cache),Mo();break;case 27:case 5:oo(i);break;case 4:Zi(i,i.stateNode.containerInfo);break;case 10:vr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(mr(i),i.flags|=128,null):a&i.child.childLanes?Bp(e,i,a):(mr(i),e=Mi(e,i,a),e!==null?e.sibling:null);mr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Fo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return qp(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Qt(Se,Se.current),l)break;return null;case 22:case 23:return i.lanes=0,kp(e,i,a);case 24:vr(i,be,e.memoizedState.cache)}return Mi(e,i,a)}function Hp(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ne=!0;else{if(!df(e,a)&&!(i.flags&128))return Ne=!1,mA(e,i,a);Ne=!!(e.flags&131072)}else Ne=!1,Ft&&i.flags&1048576&&Ig(i,yu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")If(l)?(e=Ts(l,e),i.tag=1,i=Pp(null,i,l,e,a)):(i.tag=0,i=sf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Q){i.tag=11,i=Mp(null,i,l,e,a);break t}else if(h===it){i.tag=14,i=Vp(null,i,l,e,a);break t}}throw i=I(l)||l,Error(s(306,i,""))}}return i;case 0:return sf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ts(l,i.pendingProps),Pp(e,i,l,h,a);case 3:t:{if(Zi(i,i.stateNode.containerInfo),e===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,vf(e,i),Qo(i,d,null,a);var _=i.memoizedState;if(d=_.cache,vr(i,be,d),d!==h.cache&&pf(i,[be],a,!0),Ko(),d=_.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=zp(e,i,d,a);break t}else if(d!==l){l=In(Error(s(424)),i),Vo(l),i=zp(e,i,d,a);break t}else for(Ue=Fn(i.stateNode.containerInfo.firstChild),Je=i,Ft=!0,qn=null,ri=!0,a=Ug(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Mo(),d===l){i=Mi(e,i,a);break t}Le(e,i,d,a)}i=i.child}return i;case 26:return Ho(e,i),e===null?(a=Ky(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ft||(a=i.type,e=i.pendingProps,l=Xu(_n.current).createElement(a),l[Ce]=i,l[Ee]=e,Pe(l,a,e),Wt(l),i.stateNode=l):i.memoizedState=Ky(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return oo(i),e===null&&Ft&&(l=i.stateNode=Hy(i.type,i.pendingProps,_n.current),Je=i,ri=!0,Ue=Fn(l.firstChild)),l=i.pendingProps.children,e!==null||Ft?Le(e,i,l,a):i.child=ps(i,null,l,a),Ho(e,i),i.child;case 5:return e===null&&Ft&&((h=l=Ue)&&(l=FA(l,i.type,i.pendingProps,ri),l!==null?(i.stateNode=l,Je=i,Ue=Fn(l.firstChild),ri=!1,h=!0):h=!1),h||gs(i)),oo(i),h=i.type,d=i.pendingProps,_=e!==null?e.memoizedProps:null,l=d.children,Wf(h,d)?l=null:_!==null&&Wf(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=Bh(e,i,oA,null,null,a),ll._currentValue=h),Ho(e,i),Le(e,i,l,a),i.child;case 6:return e===null&&Ft&&((e=a=Ue)&&(a=GA(a,i.pendingProps,ri),a!==null?(i.stateNode=a,Je=i,Ue=null,e=!0):e=!1),e||gs(i)),null;case 13:return Bp(e,i,a);case 4:return Zi(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ps(i,null,l,a):Le(e,i,l,a),i.child;case 11:return Mp(e,i,i.type,i.pendingProps,a);case 7:return Le(e,i,i.pendingProps,a),i.child;case 8:return Le(e,i,i.pendingProps.children,a),i.child;case 12:return Le(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,vr(i,i.type,l.value),Le(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ss(i),h=qe(h),l=l(h),i.flags|=1,Le(e,i,l,a),i.child;case 14:return Vp(e,i,i.type,i.pendingProps,a);case 15:return xp(e,i,i.type,i.pendingProps,a);case 19:return qp(e,i,a);case 22:return kp(e,i,a);case 24:return Ss(i),l=qe(be),e===null?(h=Ph(),h===null&&(h=Zt,d=Uh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},yf(i),vr(i,be,h)):(e.lanes&a&&(vf(e,i),Qo(i,null,null,a),Ko()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),vr(i,be,l)):(l=d.cache,vr(i,be,l),l!==h.cache&&pf(i,[be],a,!0))),Le(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var mf=qt(null),As=null,Vi=null;function vr(e,i,a){Qt(mf,i._currentValue),i._currentValue=a}function xi(e){e._currentValue=mf.current,ie(mf)}function gf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function pf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var R=0;R<i.length;R++)if(T.context===i[R]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),gf(d.return,a,e),l||(_=null);break t}d=T.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),gf(_,a,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Fo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if(h.flags&524288)d=!0;else if(h.flags&262144)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=h.type;dn(h.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(h===Xi.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}h=h.return}e!==null&&pf(i,e,a,l),i.flags|=262144}function xu(e){for(e=e.firstContext;e!==null;){if(!dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){As=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return Fp(As,e)}function ku(e,i){return As===null&&Ss(e),Fp(e,i)}function Fp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Vi=Vi.next=i;return a}var _r=!1;function yf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Er(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ee&2){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=gu(e),wg(e,null,a),i}return mu(e,l,i,a),gu(e)}function Go(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,ir(e,a)}}function _f(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Ef=!1;function Ko(){if(Ef){var e=ya;if(e!==null)throw e}}function Qo(e,i,a,l){Ef=!1;var h=e.updateQueue;_r=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var R=T,V=R.next;R.next=null,_===null?d=V:_.next=V,_=R;var H=e.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==_&&(T===null?H.firstBaseUpdate=V:T.next=V,H.lastBaseUpdate=R))}if(d!==null){var $=h.baseState;_=0,H=V=R=null,T=d;do{var z=T.lane&-536870913,q=z!==T.lane;if(q?(Lt&z)===z:(l&z)===z){z!==0&&z===pa&&(Ef=!0),H!==null&&(H=H.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ft=e,At=T;z=i;var oe=a;switch(At.tag){case 1:if(ft=At.payload,typeof ft=="function"){$=ft.call(oe,$,z);break t}$=ft;break t;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=At.payload,z=typeof ft=="function"?ft.call(oe,$,z):ft,z==null)break t;$=C({},$,z);break t;case 2:_r=!0}}z=T.callback,z!==null&&(e.flags|=64,q&&(e.flags|=8192),q=h.callbacks,q===null?h.callbacks=[z]:q.push(z))}else q={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(V=H=q,R=$):H=H.next=q,_|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;q=T,T=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);H===null&&(R=$),h.baseState=R,h.firstBaseUpdate=V,h.lastBaseUpdate=H,d===null&&(h.shared.lanes=0),Rr|=_,e.lanes=_,e.memoizedState=$}}function Gp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Kp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gp(a[e],i)}function Yo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(T){Xt(i,i.return,T)}}function Ar(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,h=i;var R=a;try{T()}catch(V){Xt(h,R,V)}}}l=l.next}while(l!==d)}}catch(V){Xt(i,i.return,V)}}function Qp(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Kp(i,a)}catch(l){Xt(e,e.return,l)}}}function Yp(e,i,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Xt(e,i,l)}}function bs(e,i){try{var a=e.ref;if(a!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){Xt(e,i,d)}}function mn(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Xt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,i,h)}else a.current=null}function $p(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function Xp(e,i,a){try{var l=e.stateNode;zA(l,e.type,a,i),l[Ee]=i}catch(h){Xt(e,e.return,h)}}function Zp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(e,i):a.insertBefore(e,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(e,a)):(i=a,i.appendChild(e)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$u));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Af(e,i,a),e=e.sibling;e!==null;)Af(e,i,a),e=e.sibling}function Uu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Uu(e,i,a),e=e.sibling;e!==null;)Uu(e,i,a),e=e.sibling}var ki=!1,se=!1,Sf=!1,Jp=typeof WeakSet=="function"?WeakSet:Set,Me=null,Wp=!1;function gA(e,i){if(e=e.containerInfo,Zf=nc,e=pg(e),bh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var _=0,T=-1,R=-1,V=0,H=0,$=e,z=null;e:for(;;){for(var q;$!==a||h!==0&&$.nodeType!==3||(T=_+h),$!==d||l!==0&&$.nodeType!==3||(R=_+l),$.nodeType===3&&(_+=$.nodeValue.length),(q=$.firstChild)!==null;)z=$,$=q;for(;;){if($===e)break e;if(z===a&&++V===h&&(T=_),z===d&&++H===l&&(R=_),(q=$.nextSibling)!==null)break;$=z,z=$.parentNode}$=q}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},nc=!1,Me=i;Me!==null;)if(i=Me,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Me=e;else for(;Me!==null;){switch(i=Me,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ft=Ts(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(ft,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(At){Xt(a,a.return,At)}}break;case 3:if(e&1024){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)nd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Me=e;break}Me=i.return}return ft=Wp,Wp=!1,ft}function ty(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Li(e,a),l&4&&Yo(5,a);break;case 1:if(Li(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(T){Xt(a,a.return,T)}else{var h=Ts(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Xt(a,a.return,T)}}l&64&&Qp(a),l&512&&bs(a,a.return);break;case 3:if(Li(e,a),l&64&&(l=a.updateQueue,l!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Kp(l,e)}catch(T){Xt(a,a.return,T)}}break;case 26:Li(e,a),l&512&&bs(a,a.return);break;case 27:case 5:Li(e,a),i===null&&l&4&&$p(a),l&512&&bs(a,a.return);break;case 12:Li(e,a);break;case 13:Li(e,a),l&4&&iy(e,a);break;case 22:if(h=a.memoizedState!==null||ki,!h){i=i!==null&&i.memoizedState!==null||se;var d=ki,_=se;ki=h,(se=i)&&!_?Sr(e,a,(a.subtreeFlags&8772)!==0):Li(e,a),ki=d,se=_}l&512&&(a.memoizedProps.mode==="manual"?bs(a,a.return):mn(a,a.return));break;default:Li(e,a)}}function ey(e){var i=e.alternate;i!==null&&(e.alternate=null,ey(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ts(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pe=null,gn=!1;function Ui(e,i,a){for(a=a.child;a!==null;)ny(e,i,a),a=a.sibling}function ny(e,i,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Ji,a)}catch{}switch(a.tag){case 26:se||mn(a,i),Ui(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:se||mn(a,i);var l=pe,h=gn;for(pe=a.stateNode,Ui(e,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);ts(a),pe=l,gn=h;break;case 5:se||mn(a,i);case 6:h=pe;var d=gn;if(pe=null,Ui(e,i,a),pe=h,gn=d,pe!==null)if(gn)try{e=pe,l=a.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(_){Xt(a,i,_)}else try{pe.removeChild(a.stateNode)}catch(_){Xt(a,i,_)}break;case 18:pe!==null&&(gn?(i=pe,a=a.stateNode,i.nodeType===8?ed(i.parentNode,a):i.nodeType===1&&ed(i,a),fl(i)):ed(pe,a.stateNode));break;case 4:l=pe,h=gn,pe=a.stateNode.containerInfo,gn=!0,Ui(e,i,a),pe=l,gn=h;break;case 0:case 11:case 14:case 15:se||Ar(2,a,i),se||Ar(4,a,i),Ui(e,i,a);break;case 1:se||(mn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Yp(a,i,l)),Ui(e,i,a);break;case 21:Ui(e,i,a);break;case 22:se||mn(a,i),se=(l=se)||a.memoizedState!==null,Ui(e,i,a),se=l;break;default:Ui(e,i,a)}}function iy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fl(e)}catch(a){Xt(i,i.return,a)}}function pA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Jp),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Jp),i;default:throw Error(s(435,e.tag))}}function bf(e,i){var a=pA(e);i.forEach(function(l){var h=DA.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function Nn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,_=i,T=_;t:for(;T!==null;){switch(T.tag){case 27:case 5:pe=T.stateNode,gn=!1;break t;case 3:pe=T.stateNode.containerInfo,gn=!0;break t;case 4:pe=T.stateNode.containerInfo,gn=!0;break t}T=T.return}if(pe===null)throw Error(s(160));ny(d,_,h),pe=null,gn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)ry(i,e),i=i.sibling}var Hn=null;function ry(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nn(i,e),Mn(e),l&4&&(Ar(3,e,e.return),Yo(3,e),Ar(5,e,e.return));break;case 1:Nn(i,e),Mn(e),l&512&&(se||a===null||mn(a,a.return)),l&64&&ki&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Hn;if(Nn(i,e),Mn(e),l&512&&(se||a===null||mn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[sr]||d[Ce]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Pe(d,l,a),d[Ce]=e,Wt(d),l=d;break t;case"link":var _=$y("link","href",h).get(l+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break e}}d=h.createElement(l),Pe(d,l,a),h.head.appendChild(d);break;case"meta":if(_=$y("meta","content",h).get(l+(a.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break e}}d=h.createElement(l),Pe(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ce]=e,Wt(d),l=d}e.stateNode=l}else Xy(h,e.type,e.stateNode);else e.stateNode=Yy(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Xy(h,e.type,e.stateNode):Yy(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Xp(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var R=h.firstChild;R;){var V=R.nextSibling,H=R.nodeName;R[sr]||H==="HEAD"||H==="BODY"||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&R.rel.toLowerCase()==="stylesheet"||h.removeChild(R),R=V}for(var $=e.type,z=h.attributes;z.length;)h.removeAttributeNode(z[0]);Pe(h,$,d),h[Ce]=e,h[Ee]=d}catch(ft){Xt(e,e.return,ft)}}case 5:if(Nn(i,e),Mn(e),l&512&&(se||a===null||mn(a,a.return)),e.flags&32){h=e.stateNode;try{An(h,"")}catch(ft){Xt(e,e.return,ft)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Xp(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Sf=!0);break;case 6:if(Nn(i,e),Mn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(ft){Xt(e,e.return,ft)}}break;case 3:if(Wu=null,h=Hn,Hn=Zu(i.containerInfo),Nn(i,e),Hn=h,Mn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fl(i.containerInfo)}catch(ft){Xt(e,e.return,ft)}Sf&&(Sf=!1,sy(e));break;case 4:l=Hn,Hn=Zu(e.stateNode.containerInfo),Nn(i,e),Mn(e),Hn=l;break;case 12:Nn(i,e),Mn(e);break;case 13:Nn(i,e),Mn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vf=en()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bf(e,l)));break;case 22:if(l&512&&(se||a===null||mn(a,a.return)),R=e.memoizedState!==null,V=a!==null&&a.memoizedState!==null,H=ki,$=se,ki=H||R,se=$||V,Nn(i,e),se=$,ki=H,Mn(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=R?i._visibility&-2:i._visibility|1,R&&(i=ki||se,a===null||V||i||Ta(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){V=a=i;try{if(h=V.stateNode,R)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=V.stateNode,T=V.memoizedProps.style;var q=T!=null&&T.hasOwnProperty("display")?T.display:null;_.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ft){Xt(V,V.return,ft)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=R?"":V.memoizedProps}catch(ft){Xt(V,V.return,ft)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,bf(e,a))));break;case 19:Nn(i,e),Mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bf(e,l)));break;case 21:break;default:Nn(i,e),Mn(e)}}function Mn(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Zp(a)){var l=a;break t}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=Tf(e);Uu(e,d,h);break;case 5:var _=l.stateNode;l.flags&32&&(An(_,""),l.flags&=-33);var T=Tf(e);Uu(e,T,_);break;case 3:case 4:var R=l.stateNode.containerInfo,V=Tf(e);Af(e,V,R);break;default:throw Error(s(161))}}}catch(H){Xt(e,e.return,H)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function sy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;sy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Li(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ty(e,i.alternate,i),i=i.sibling}function Ta(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ar(4,i,i.return),Ta(i);break;case 1:mn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Yp(i,i.return,a),Ta(i);break;case 26:case 27:case 5:mn(i,i.return),Ta(i);break;case 22:mn(i,i.return),i.memoizedState===null&&Ta(i);break;default:Ta(i)}e=e.sibling}}function Sr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:Sr(h,d,a),Yo(4,d);break;case 1:if(Sr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(V){Xt(l,l.return,V)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)Gp(R[h],T)}catch(V){Xt(l,l.return,V)}}a&&_&64&&Qp(d),bs(d,d.return);break;case 26:case 27:case 5:Sr(h,d,a),a&&l===null&&_&4&&$p(d),bs(d,d.return);break;case 12:Sr(h,d,a);break;case 13:Sr(h,d,a),a&&_&4&&iy(h,d);break;case 22:d.memoizedState===null&&Sr(h,d,a),bs(d,d.return);break;default:Sr(h,d,a)}i=i.sibling}}function wf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Po(a))}function Rf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e))}function br(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ay(e,i,a,l),i=i.sibling}function ay(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:br(e,i,a,l),h&2048&&Yo(9,i);break;case 3:br(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e)));break;case 12:if(h&2048){br(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Xt(i,i.return,R)}}else br(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?br(e,i,a,l):$o(e,i):d._visibility&4?br(e,i,a,l):(d._visibility|=4,Aa(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&wf(i.alternate,i);break;case 24:br(e,i,a,l),h&2048&&Rf(i.alternate,i);break;default:br(e,i,a,l)}}function Aa(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,_=i,T=a,R=l,V=_.flags;switch(_.tag){case 0:case 11:case 15:Aa(d,_,T,R,h),Yo(8,_);break;case 23:break;case 22:var H=_.stateNode;_.memoizedState!==null?H._visibility&4?Aa(d,_,T,R,h):$o(d,_):(H._visibility|=4,Aa(d,_,T,R,h)),h&&V&2048&&wf(_.alternate,_);break;case 24:Aa(d,_,T,R,h),h&&V&2048&&Rf(_.alternate,_);break;default:Aa(d,_,T,R,h)}i=i.sibling}}function $o(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:$o(a,l),h&2048&&wf(l.alternate,l);break;case 24:$o(a,l),h&2048&&Rf(l.alternate,l);break;default:$o(a,l)}i=i.sibling}}var Xo=8192;function Sa(e){if(e.subtreeFlags&Xo)for(e=e.child;e!==null;)oy(e),e=e.sibling}function oy(e){switch(e.tag){case 26:Sa(e),e.flags&Xo&&e.memoizedState!==null&&rS(Hn,e.memoizedState,e.memoizedProps);break;case 5:Sa(e);break;case 3:case 4:var i=Hn;Hn=Zu(e.stateNode.containerInfo),Sa(e),Hn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xo,Xo=16777216,Sa(e),Xo=i):Sa(e));break;default:Sa(e)}}function ly(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Zo(e){var i=e.deletions;if(e.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Me=l,cy(l,e)}ly(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uy(e),e=e.sibling}function uy(e){switch(e.tag){case 0:case 11:case 15:Zo(e),e.flags&2048&&Ar(9,e,e.return);break;case 3:Zo(e);break;case 12:Zo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,Lu(e)):Zo(e);break;default:Zo(e)}}function Lu(e){var i=e.deletions;if(e.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Me=l,cy(l,e)}ly(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ar(8,i,i.return),Lu(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,Lu(i));break;default:Lu(i)}e=e.sibling}}function cy(e,i){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:Ar(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Po(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Me=l;else t:for(a=e;Me!==null;){l=Me;var h=l.sibling,d=l.return;if(ey(l),l===a){Me=null;break t}if(h!==null){h.return=d,Me=h;break t}Me=d}}}function yA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(e,i,a,l){return new yA(e,i,a,l)}function If(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wr(e,i){var a=e.alternate;return a===null?(a=Vn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function hy(e,i){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Pu(e,i,a,l,h,d){var _=0;if(l=e,typeof e=="function")If(e)&&(_=1);else if(typeof e=="string")_=nS(e,a,Ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return ws(a.children,h,d,i);case y:_=8,h|=24;break;case E:return e=Vn(12,a,i,h|2),e.elementType=E,e.lanes=d,e;case X:return e=Vn(13,a,i,h),e.elementType=X,e.lanes=d,e;case F:return e=Vn(19,a,i,h),e.elementType=F,e.lanes=d,e;case ht:return fy(a,h,d,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case b:case B:_=10;break t;case x:_=9;break t;case Q:_=11;break t;case it:_=14;break t;case ut:_=16,l=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=Vn(_,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function ws(e,i,a,l){return e=Vn(7,e,l,i),e.lanes=a,e}function fy(e,i,a,l){e=Vn(22,e,l,i),e.elementType=ht,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if(!(h._pendingVisibility&2)){var _=dr(d,2);_!==null&&(h._pendingVisibility|=2,We(_,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if(h._pendingVisibility&2){var _=dr(d,2);_!==null&&(h._pendingVisibility&=-3,We(_,d,2))}}};return e.stateNode=h,e}function Cf(e,i,a){return e=Vn(6,e,null,i),e.lanes=a,e}function Df(e,i,a){return i=Vn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function Pi(e){e.flags|=4}function dy(e,i){if(i.type!=="stylesheet"||i.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zy(i)){if(i=On.current,i!==null&&((Lt&4194176)===Lt?si!==null:(Lt&62914560)!==Lt&&!(Lt&536870912)||i!==si))throw ko=Vh,Og;e.flags|=8192}}function zu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?er():536870912,e.lanes|=i,wa|=i)}function Jo(e,i){if(!Ft)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function te(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function vA(e,i,a){var l=i.pendingProps;switch(Nh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(i),null;case 1:return te(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),xi(be),yi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(No(i)?Pi(i):e===null||e.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,qn!==null&&(Lf(qn),qn=null))),te(i),null;case 26:return a=i.memoizedState,e===null?(Pi(i),a!==null?(te(i),dy(i,a)):(te(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Pi(i),te(i),dy(i,a)):(te(i),i.flags&=-16777217):(e.memoizedProps!==l&&Pi(i),te(i),i.flags&=-16777217),null;case 27:Fs(i),a=_n.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Pi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return te(i),null}e=Ye.current,No(i)?Cg(i):(e=Hy(h,l,a),i.stateNode=e,Pi(i))}return te(i),null;case 5:if(Fs(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Pi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return te(i),null}if(e=Ye.current,No(i))Cg(i);else{switch(h=Xu(_n.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Ce]=i,e[Ee]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Pe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Pi(i)}}return te(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Pi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=_n.current,No(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=Je,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ce]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ly(e.nodeValue,a)),e||gs(i)}else e=Xu(e).createTextNode(l),e[Ce]=i,i.stateNode=e}return te(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=No(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ce]=i}else Mo(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;te(i),h=!1}else qn!==null&&(Lf(qn),qn=null),h=!0;if(!h)return i.flags&256?(Oi(i),i):(Oi(i),null)}if(Oi(i),i.flags&128)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),zu(i,i.updateQueue),te(i),null;case 4:return yi(),e===null&&Yf(i.stateNode.containerInfo),te(i),null;case 10:return xi(i.type),te(i),null;case 19:if(ie(Se),h=i.memoizedState,h===null)return te(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Jo(h,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=i.child;e!==null;){if(d=Au(e),d!==null){for(i.flags|=128,Jo(h,!1),e=d.updateQueue,i.updateQueue=e,zu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)hy(a,e),a=a.sibling;return Qt(Se,Se.current&1|2),i.child}e=e.sibling}h.tail!==null&&en()>Bu&&(i.flags|=128,l=!0,Jo(h,!1),i.lanes=4194304)}else{if(!l)if(e=Au(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,zu(i,e),Jo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ft)return te(i),null}else 2*en()-h.renderingStartTime>Bu&&a!==536870912&&(i.flags|=128,l=!0,Jo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=en(),i.sibling=null,e=Se.current,Qt(Se,l?e&1|2:e&1),i):(te(i),null);case 22:case 23:return Oi(i),kh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?a&536870912&&!(i.flags&128)&&(te(i),i.subtreeFlags&6&&(i.flags|=8192)):te(i),a=i.updateQueue,a!==null&&zu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&ie(ys),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),xi(be),te(i),null;case 25:return null}throw Error(s(156,i.tag))}function _A(e,i){switch(Nh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return xi(be),yi(),e=i.flags,e&65536&&!(e&128)?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Fs(i),null;case 13:if(Oi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Mo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ie(Se),null;case 4:return yi(),null;case 10:return xi(i.type),null;case 22:case 23:return Oi(i),kh(),e!==null&&ie(ys),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return xi(be),null;case 25:return null;default:return null}}function my(e,i){switch(Nh(i),i.tag){case 3:xi(be),yi();break;case 26:case 27:case 5:Fs(i);break;case 4:yi();break;case 13:Oi(i);break;case 19:ie(Se);break;case 10:xi(i.type);break;case 22:case 23:Oi(i),kh(),e!==null&&ie(ys);break;case 24:xi(be)}}var EA={getCacheForType:function(e){var i=qe(be),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},TA=typeof WeakMap=="function"?WeakMap:Map,ee=0,Zt=null,Mt=null,Lt=0,Jt=0,pn=null,zi=!1,ba=!1,Of=!1,Bi=0,ae=0,Rr=0,Rs=0,Nf=0,xn=0,wa=0,Wo=null,oi=null,Mf=!1,Vf=0,Bu=1/0,ju=null,Ir=null,qu=!1,Is=null,tl=0,xf=0,kf=null,el=0,Uf=null;function yn(){if(ee&2&&Lt!==0)return Lt&-Lt;if(S.T!==null){var e=pa;return e!==0?e:Ff()}return Yl()}function gy(){xn===0&&(xn=!(Lt&536870912)||Ft?fo():536870912);var e=On.current;return e!==null&&(e.flags|=32),xn}function We(e,i,a){(e===Zt&&Jt===2||e.cancelPendingCommit!==null)&&(Ra(e,0),ji(e,Lt,xn,!1)),ue(e,a),(!(ee&2)||e!==Zt)&&(e===Zt&&(!(ee&2)&&(Rs|=a),ae===4&&ji(e,Lt,xn,!1)),li(e))}function py(e,i,a){if(ee&6)throw Error(s(327));var l=!a&&(i&60)===0&&(i&e.expiredLanes)===0||tr(e,i),h=l?bA(e,i):Bf(e,i,!0),d=l;do{if(h===0){ba&&!l&&ji(e,i,0,!1);break}else if(h===6)ji(e,i,0,!zi);else{if(a=e.current.alternate,d&&!AA(a)){h=Bf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;t:{var T=e;h=Wo;var R=T.current.memoizedState.isDehydrated;if(R&&(Ra(T,_).flags|=256),_=Bf(T,_,!1),_!==2){if(Of&&!R){T.errorRecoveryDisabledLanes|=d,Rs|=d,h=4;break t}d=oi,oi=h,d!==null&&Lf(d)}h=_}if(d=!1,h!==2)continue}}if(h===1){Ra(e,0),ji(e,i,0,!0);break}t:{switch(l=e,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){ji(l,i,xn,!zi);break t}break;case 2:oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=Vf+300-en(),10<d)){if(ji(l,i,xn,!zi),En(l,0)!==0)break t;l.timeoutHandle=By(yy.bind(null,l,a,oi,ju,Mf,i,xn,Rs,wa,zi,2,-0,0),d);break t}yy(l,a,oi,ju,Mf,i,xn,Rs,wa,zi,0,-0,0)}}break}while(!0);li(e)}function Lf(e){oi===null?oi=e:oi.push.apply(oi,e)}function yy(e,i,a,l,h,d,_,T,R,V,H,$,z){var q=i.subtreeFlags;if((q&8192||(q&16785408)===16785408)&&(ol={stylesheets:null,count:0,unsuspend:iS},oy(i),i=sS(),i!==null)){e.cancelPendingCommit=i(by.bind(null,e,a,l,h,_,T,R,1,$,z)),ji(e,d,_,!V);return}by(e,a,l,h,_,T,R,H,$,z)}function AA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!dn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ji(e,i,a,l){i&=~Nf,i&=~Rs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-$e(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&nr(e,a,i)}function Hu(){return ee&6?!0:(nl(0),!1)}function Pf(){if(Mt!==null){if(Jt===0)var e=Mt.return;else e=Mt,Vi=As=null,Hh(e),ma=null,Uo=0,e=Mt;for(;e!==null;)my(e.alternate,e),e=e.return;Mt=null}}function Ra(e,i){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Pf(),Zt=e,Mt=a=wr(e.current,null),Lt=i,Jt=0,pn=null,zi=!1,ba=tr(e,i),Of=!1,wa=xn=Nf=Rs=Rr=ae=0,oi=Wo=null,Mf=!1,i&8&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-$e(l),d=1<<h;i|=e[h],l&=~d}return Bi=i,du(),a}function vy(e,i){Dt=null,S.H=ai,i===xo?(i=Vg(),Jt=3):i===Og?(i=Vg(),Jt=4):Jt=i===Np?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,Mt===null&&(ae=1,Vu(e,In(i,e.current)))}function _y(){var e=S.H;return S.H=ai,e===null?ai:e}function Ey(){var e=S.A;return S.A=EA,e}function zf(){ae=4,zi||(Lt&4194176)!==Lt&&On.current!==null||(ba=!0),!(Rr&134217727)&&!(Rs&134217727)||Zt===null||ji(Zt,Lt,xn,!1)}function Bf(e,i,a){var l=ee;ee|=2;var h=_y(),d=Ey();(Zt!==e||Lt!==i)&&(ju=null,Ra(e,i)),i=!1;var _=ae;t:do try{if(Jt!==0&&Mt!==null){var T=Mt,R=pn;switch(Jt){case 8:Pf(),_=6;break t;case 3:case 2:case 6:On.current===null&&(i=!0);var V=Jt;if(Jt=0,pn=null,Ia(e,T,R,V),a&&ba){_=0;break t}break;default:V=Jt,Jt=0,pn=null,Ia(e,T,R,V)}}SA(),_=ae;break}catch(H){vy(e,H)}while(!0);return i&&e.shellSuspendCounter++,Vi=As=null,ee=l,S.H=h,S.A=d,Mt===null&&(Zt=null,Lt=0,du()),_}function SA(){for(;Mt!==null;)Ty(Mt)}function bA(e,i){var a=ee;ee|=2;var l=_y(),h=Ey();Zt!==e||Lt!==i?(ju=null,Bu=en()+500,Ra(e,i)):ba=tr(e,i);t:do try{if(Jt!==0&&Mt!==null){i=Mt;var d=pn;e:switch(Jt){case 1:Jt=0,pn=null,Ia(e,i,d,1);break;case 2:if(Ng(d)){Jt=0,pn=null,Ay(i);break}i=function(){Jt===2&&Zt===e&&(Jt=7),li(e)},d.then(i,i);break t;case 3:Jt=7;break t;case 4:Jt=5;break t;case 7:Ng(d)?(Jt=0,pn=null,Ay(i)):(Jt=0,pn=null,Ia(e,i,d,7));break;case 5:var _=null;switch(Mt.tag){case 26:_=Mt.memoizedState;case 5:case 27:var T=Mt;if(!_||Zy(_)){Jt=0,pn=null;var R=T.sibling;if(R!==null)Mt=R;else{var V=T.return;V!==null?(Mt=V,Fu(V)):Mt=null}break e}}Jt=0,pn=null,Ia(e,i,d,5);break;case 6:Jt=0,pn=null,Ia(e,i,d,6);break;case 8:Pf(),ae=6;break t;default:throw Error(s(462))}}wA();break}catch(H){vy(e,H)}while(!0);return Vi=As=null,S.H=l,S.A=h,ee=a,Mt!==null?0:(Zt=null,Lt=0,du(),ae)}function wA(){for(;Mt!==null&&!dh();)Ty(Mt)}function Ty(e){var i=Hp(e.alternate,e,Bi);e.memoizedProps=e.pendingProps,i===null?Fu(e):Mt=i}function Ay(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Lp(a,i,i.pendingProps,i.type,void 0,Lt);break;case 11:i=Lp(a,i,i.pendingProps,i.type.render,i.ref,Lt);break;case 5:Hh(i);default:my(a,i),i=Mt=hy(i,Bi),i=Hp(a,i,Bi)}e.memoizedProps=e.pendingProps,i===null?Fu(e):Mt=i}function Ia(e,i,a,l){Vi=As=null,Hh(i),ma=null,Uo=0;var h=i.return;try{if(dA(e,h,i,a,Lt)){ae=1,Vu(e,In(a,e.current)),Mt=null;return}}catch(d){if(h!==null)throw Mt=h,d;ae=1,Vu(e,In(a,e.current)),Mt=null;return}i.flags&32768?(Ft||l===1?e=!0:ba||Lt&536870912?e=!1:(zi=e=!0,(l===2||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),Sy(i,e)):Fu(i)}function Fu(e){var i=e;do{if(i.flags&32768){Sy(i,zi);return}e=i.return;var a=vA(i.alternate,i,Bi);if(a!==null){Mt=a;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=e}while(i!==null);ae===0&&(ae=5)}function Sy(e,i){do{var a=_A(e.alternate,e);if(a!==null){a.flags&=32767,Mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=a}while(e!==null);ae=6,Mt=null}function by(e,i,a,l,h,d,_,T,R,V){var H=S.T,$=nt.p;try{nt.p=2,S.T=null,RA(e,i,a,l,$,h,d,_,T,R,V)}finally{S.T=H,nt.p=$}}function RA(e,i,a,l,h,d,_,T){do Ca();while(Is!==null);if(ee&6)throw Error(s(327));var R=e.finishedWork;if(l=e.finishedLanes,R===null)return null;if(e.finishedWork=null,e.finishedLanes=0,R===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=R.lanes|R.childLanes;if(V|=Ch,Kl(e,l,V,d,_,T),e===Zt&&(Mt=Zt=null,Lt=0),!(R.subtreeFlags&10256)&&!(R.flags&10256)||qu||(qu=!0,xf=V,kf=a,OA(vi,function(){return Ca(),null})),a=(R.flags&15990)!==0,R.subtreeFlags&15990||a?(a=S.T,S.T=null,d=nt.p,nt.p=2,_=ee,ee|=4,gA(e,R),ry(R,e),XT(Jf,e.containerInfo),nc=!!Zf,Jf=Zf=null,e.current=R,ty(e,R.alternate,R),lo(),ee=_,nt.p=d,S.T=a):e.current=R,qu?(qu=!1,Is=e,tl=l):wy(e,V),V=e.pendingLanes,V===0&&(Ir=null),co(R.stateNode),li(e),i!==null)for(h=e.onRecoverableError,R=0;R<i.length;R++)V=i[R],h(V.value,{componentStack:V.stack});return tl&3&&Ca(),V=e.pendingLanes,l&4194218&&V&42?e===Uf?el++:(el=0,Uf=e):el=0,nl(0),null}function wy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Po(i)))}function Ca(){if(Is!==null){var e=Is,i=xf;xf=0;var a=Ql(tl),l=S.T,h=nt.p;try{if(nt.p=32>a?32:a,S.T=null,Is===null)var d=!1;else{a=kf,kf=null;var _=Is,T=tl;if(Is=null,tl=0,ee&6)throw Error(s(331));var R=ee;if(ee|=4,uy(_.current),ay(_,_.current,T,a),ee=R,nl(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Ji,_)}catch{}d=!0}return d}finally{nt.p=h,S.T=l,wy(e,i)}}return!1}function Ry(e,i,a){i=In(a,i),i=rf(e.stateNode,i,2),e=Tr(e,i,2),e!==null&&(ue(e,2),li(e))}function Xt(e,i,a){if(e.tag===3)Ry(e,e,a);else for(;i!==null;){if(i.tag===3){Ry(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ir===null||!Ir.has(l))){e=In(a,e),a=Dp(2),l=Tr(i,a,2),l!==null&&(Op(a,l,i,e),ue(l,2),li(l));break}}i=i.return}}function jf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new TA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Of=!0,h.add(a),e=IA.bind(null,e,i,a),i.then(e,e))}function IA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(Lt&a)===a&&(ae===4||ae===3&&(Lt&62914560)===Lt&&300>en()-Vf?!(ee&2)&&Ra(e,0):Nf|=a,wa===Lt&&(wa=0)),li(e)}function Iy(e,i){i===0&&(i=er()),e=dr(e,i),e!==null&&(ue(e,i),li(e))}function CA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Iy(e,a)}function DA(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Iy(e,a)}function OA(e,i){return Zr(e,i)}var Gu=null,Da=null,qf=!1,Ku=!1,Hf=!1,Cs=0;function li(e){e!==Da&&e.next===null&&(Da===null?Gu=Da=e:Da=Da.next=e),Ku=!0,qf||(qf=!0,MA(NA))}function nl(e,i){if(!Hf&&Ku){Hf=!0;do for(var a=!1,l=Gu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-$e(42|e)+1)-1,d&=h&~(_&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,Oy(l,d))}else d=Lt,d=En(l,l===Zt?d:0),!(d&3)||tr(l,d)||(a=!0,Oy(l,d));l=l.next}while(a);Hf=!1}}function NA(){Ku=qf=!1;var e=0;Cs!==0&&(BA()&&(e=Cs),Cs=0);for(var i=en(),a=null,l=Gu;l!==null;){var h=l.next,d=Cy(l,i);d===0?(l.next=null,a===null?Gu=h:a.next=h,h===null&&(Da=a)):(a=l,(e!==0||d&3)&&(Ku=!0)),l=h}nl(e)}function Cy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-$e(d),T=1<<_,R=h[_];R===-1?(!(T&a)||T&l)&&(h[_]=Qs(T,i)):R<=i&&(e.expiredLanes|=T),d&=~T}if(i=Zt,a=Lt,a=En(e,e===i?a:0),l=e.callbackNode,a===0||e===i&&Jt===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ks(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||tr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Ks(l),Ql(a)){case 2:case 8:a=Ie;break;case 32:a=vi;break;case 268435456:a=uo;break;default:a=vi}return l=Dy.bind(null,e),a=Zr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Ks(l),e.callbackPriority=2,e.callbackNode=null,2}function Dy(e,i){var a=e.callbackNode;if(Ca()&&e.callbackNode!==a)return null;var l=Lt;return l=En(e,e===Zt?l:0),l===0?null:(py(e,l,i),Cy(e,en()),e.callbackNode!=null&&e.callbackNode===a?Dy.bind(null,e):null)}function Oy(e,i){if(Ca())return null;py(e,i,!0)}function MA(e){qA(function(){ee&6?Zr(_e,e):e()})}function Ff(){return Cs===0&&(Cs=fo()),Cs}function Ny(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zn(""+e)}function My(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function VA(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Ny((h[Ee]||null).action),_=l.submitter;_&&(i=(i=_[Ee]||null)?Ny(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var T=new ta("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Cs!==0){var R=_?My(h,_):new FormData(h);Jh(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=_?My(h,_):new FormData(h),Jh(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var Gf=0;Gf<bg.length;Gf++){var Kf=bg[Gf],xA=Kf.toLowerCase(),kA=Kf[0].toUpperCase()+Kf.slice(1);jn(xA,"on"+kA)}jn(_g,"onAnimationEnd"),jn(Eg,"onAnimationIteration"),jn(Tg,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(JT,"onTransitionRun"),jn(WT,"onTransitionStart"),jn(tA,"onTransitionCancel"),jn(Ag,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Vy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var T=l[_],R=T.instance,V=T.currentTarget;if(T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=V;try{d(h)}catch(H){Mu(H)}h.currentTarget=null,d=R}else for(_=0;_<l.length;_++){if(T=l[_],R=T.instance,V=T.currentTarget,T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=V;try{d(h)}catch(H){Mu(H)}h.currentTarget=null,d=R}}}}function xt(e,i){var a=i[Wr];a===void 0&&(a=i[Wr]=new Set);var l=e+"__bubble";a.has(l)||(xy(i,e,2,!1),a.add(l))}function Qf(e,i,a){var l=0;i&&(l|=4),xy(a,e,l,i)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[Qu]){e[Qu]=!0,go.forEach(function(a){a!=="selectionchange"&&(UA.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Qu]||(i[Qu]=!0,Qf("selectionchange",!1,i))}}function xy(e,i,a,l){switch(iv(i)){case 2:var h=lS;break;case 8:h=uS;break;default:h=od}a=h.bind(null,i,a,e),h=void 0,!bn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function $f(e,i,a,l,h){var d=l;if(!(i&1)&&!(i&2)&&l!==null)t:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(_===4)for(_=l.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===h||R.nodeType===8&&R.parentNode===h))return;_=_.return}for(;T!==null;){if(_=Bn(T),_===null)return;if(R=_.tag,R===5||R===6||R===26||R===27){l=d=_;continue t}T=T.parentNode}}l=l.return}Jl(function(){var V=d,H=Ws(a),$=[];t:{var z=Sg.get(e);if(z!==void 0){var q=ta,ft=e;switch(e){case"keypress":if(Wn(a)===0)break t;case"keydown":case"keyup":q=aa;break;case"focusin":ft="focus",q=ia;break;case"focusout":ft="blur",q=ia;break;case"beforeblur":case"afterblur":q=ia;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=au;break;case _g:case Eg:case Tg:q=ra;break;case Ag:q=lu;break;case"scroll":case"scrollend":q=Wl;break;case"wheel":q=oa;break;case"copy":case"cut":case"paste":q=sa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Io;break;case"toggle":case"beforetoggle":q=cu}var At=(i&4)!==0,oe=!At&&(e==="scroll"||e==="scrollend"),k=At?z!==null?z+"Capture":null:z;At=[];for(var O=V,P;O!==null;){var G=O;if(P=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||P===null||k===null||(G=rs(O,k),G!=null&&At.push(rl(O,G,P))),oe)break;O=O.return}0<At.length&&(z=new q(z,ft,null,a,H),$.push({event:z,listeners:At}))}}if(!(i&7)){t:{if(z=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",z&&a!==Sn&&(ft=a.relatedTarget||a.fromElement)&&(Bn(ft)||ft[_i]))break t;if((q||z)&&(z=H.window===H?H:(z=H.ownerDocument)?z.defaultView||z.parentWindow:window,q?(ft=a.relatedTarget||a.toElement,q=V,ft=ft?Bn(ft):null,ft!==null&&(oe=rt(ft),At=ft.tag,ft!==oe||At!==5&&At!==27&&At!==6)&&(ft=null)):(q=null,ft=V),q!==ft)){if(At=wn,G="onMouseLeave",k="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(At=Io,G="onPointerLeave",k="onPointerEnter",O="pointer"),oe=q==null?z:ar(q),P=ft==null?z:ar(ft),z=new At(G,O+"leave",q,a,H),z.target=oe,z.relatedTarget=P,G=null,Bn(H)===V&&(At=new At(k,O+"enter",ft,a,H),At.target=P,At.relatedTarget=oe,G=At),oe=G,q&&ft)e:{for(At=q,k=ft,O=0,P=At;P;P=Oa(P))O++;for(P=0,G=k;G;G=Oa(G))P++;for(;0<O-P;)At=Oa(At),O--;for(;0<P-O;)k=Oa(k),P--;for(;O--;){if(At===k||k!==null&&At===k.alternate)break e;At=Oa(At),k=Oa(k)}At=null}else At=null;q!==null&&ky($,z,q,At,!1),ft!==null&&oe!==null&&ky($,oe,ft,At,!0)}}t:{if(z=V?ar(V):window,q=z.nodeName&&z.nodeName.toLowerCase(),q==="select"||q==="input"&&z.type==="file")var lt=lg;else if(Ae(z))if(ug)lt=YT;else{lt=KT;var Nt=GT}else q=z.nodeName,!q||q.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?V&&Eo(V.elementType)&&(lt=lg):lt=QT;if(lt&&(lt=lt(e,V))){Ii($,lt,a,H);break t}Nt&&Nt(e,z,V),e==="focusout"&&V&&z.type==="number"&&V.memoizedProps.value!=null&&Js(z,"number",z.value)}switch(Nt=V?ar(V):window,e){case"focusin":(Ae(Nt)||Nt.contentEditable==="true")&&(la=Nt,wh=V,Oo=null);break;case"focusout":Oo=wh=la=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,yg($,a,H);break;case"selectionchange":if(ZT)break;case"keydown":case"keyup":yg($,a,H)}var dt;if(ni)t:{switch(e){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else kt?j(e,a)&&(gt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(v&&a.locale!=="ko"&&(kt||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&kt&&(dt=Ao()):(Jn=H,fr="value"in Jn?Jn.value:Jn.textContent,kt=!0)),Nt=Yu(V,gt),0<Nt.length&&(gt=new wo(gt,e,null,a,H),$.push({event:gt,listeners:Nt}),dt?gt.data=dt:(dt=J(a),dt!==null&&(gt.data=dt)))),(dt=g?Te(e,a):Ut(e,a))&&(gt=Yu(V,"onBeforeInput"),0<gt.length&&(Nt=new wo("onBeforeInput","beforeinput",null,a,H),$.push({event:Nt,listeners:gt}),Nt.data=dt)),VA($,e,V,a,H)}Vy($,i)})}function rl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Yu(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=rs(e,a),h!=null&&l.unshift(rl(e,h,d)),h=rs(e,i),h!=null&&l.push(rl(e,h,d))),e=e.return}return l}function Oa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ky(e,i,a,l,h){for(var d=i._reactName,_=[];a!==null&&a!==l;){var T=a,R=T.alternate,V=T.stateNode;if(T=T.tag,R!==null&&R===l)break;T!==5&&T!==26&&T!==27||V===null||(R=V,h?(V=rs(a,d),V!=null&&_.unshift(rl(a,V,R))):h||(V=rs(a,d),V!=null&&_.push(rl(a,V,R)))),a=a.return}_.length!==0&&e.push({event:i,listeners:_})}var LA=/\r\n?/g,PA=/\u0000|\uFFFD/g;function Uy(e){return(typeof e=="string"?e:""+e).replace(LA,`
`).replace(PA,"")}function Ly(e,i){return i=Uy(i),Uy(e)===i}function $u(){}function $t(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||An(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&An(e,""+l);break;case"className":ur(e,"class",l);break;case"tabIndex":ur(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ur(e,a,l);break;case"style":Zl(e,l,d);break;case"data":if(i!=="object"){ur(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&$t(e,i,"name",h.name,h,null),$t(e,i,"formEncType",h.formEncType,h,null),$t(e,i,"formMethod",h.formMethod,h,null),$t(e,i,"formTarget",h.formTarget,h,null)):($t(e,i,"encType",h.encType,h,null),$t(e,i,"method",h.method,h,null),$t(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=$u);break;case"onScroll":l!=null&&xt("scroll",e);break;case"onScrollEnd":l!=null&&xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":xt("beforetoggle",e),xt("toggle",e),lr(e,"popover",l);break;case"xlinkActuate":Tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Tn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Tn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Tn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Tn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":lr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vh.get(a)||a,lr(e,a,l))}}function Xf(e,i,a,l,h,d){switch(a){case"style":Zl(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?An(e,l):(typeof l=="number"||typeof l=="bigint")&&An(e,""+l);break;case"onScroll":l!=null&&xt("scroll",e);break;case"onScrollEnd":l!=null&&xt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=$u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[Ee]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):lr(e,a,l)}}}function Pe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$t(e,i,d,_,a,null)}}h&&$t(e,i,"srcSet",a.srcSet,a,null),l&&$t(e,i,"src",a.src,a,null);return;case"input":xt("invalid",e);var T=d=_=h=null,R=null,V=null;for(l in a)if(a.hasOwnProperty(l)){var H=a[l];if(H!=null)switch(l){case"name":h=H;break;case"type":_=H;break;case"checked":R=H;break;case"defaultChecked":V=H;break;case"value":d=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:$t(e,i,l,H,a,null)}}ns(e,d,T,R,V,_,h,!1),es(e);return;case"select":xt("invalid",e),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:$t(e,i,h,T,a,null)}i=d,a=_,e.multiple=!!l,i!=null?Ht(e,!!l,i,!1):a!=null&&Ht(e,!!l,a,!0);return;case"textarea":xt("invalid",e),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:$t(e,i,_,T,a,null)}hr(e,l,h,d),es(e);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(e,i,R,l,a,null)}return;case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(l=0;l<il.length;l++)xt(il[l],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(l=a[V],l!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$t(e,i,V,l,a,null)}return;default:if(Eo(i)){for(H in a)a.hasOwnProperty(H)&&(l=a[H],l!==void 0&&Xf(e,i,H,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&$t(e,i,T,l,a,null))}function zA(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,T=null,R=null,V=null,H=null;for(q in a){var $=a[q];if(a.hasOwnProperty(q)&&$!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=$;default:l.hasOwnProperty(q)||$t(e,i,q,null,l,$)}}for(var z in l){var q=l[z];if($=a[z],l.hasOwnProperty(z)&&(q!=null||$!=null))switch(z){case"type":d=q;break;case"name":h=q;break;case"checked":V=q;break;case"defaultChecked":H=q;break;case"value":_=q;break;case"defaultValue":T=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:q!==$&&$t(e,i,z,q,l,$)}}cr(e,_,T,R,V,H,d,h);return;case"select":q=_=T=z=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":q=R;default:l.hasOwnProperty(d)||$t(e,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==R&&$t(e,i,h,d,l,R)}i=T,a=_,l=q,z!=null?Ht(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ht(e,!!a,i,!0):Ht(e,!!a,a?[]:"",!1));return;case"textarea":q=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:$t(e,i,T,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":z=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$t(e,i,_,h,l,d)}is(e,z,q);return;case"option":for(var ft in a)if(z=a[ft],a.hasOwnProperty(ft)&&z!=null&&!l.hasOwnProperty(ft))switch(ft){case"selected":e.selected=!1;break;default:$t(e,i,ft,null,l,z)}for(R in l)if(z=l[R],q=a[R],l.hasOwnProperty(R)&&z!==q&&(z!=null||q!=null))switch(R){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:$t(e,i,R,z,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var At in a)z=a[At],a.hasOwnProperty(At)&&z!=null&&!l.hasOwnProperty(At)&&$t(e,i,At,null,l,z);for(V in l)if(z=l[V],q=a[V],l.hasOwnProperty(V)&&z!==q&&(z!=null||q!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:$t(e,i,V,z,l,q)}return;default:if(Eo(i)){for(var oe in a)z=a[oe],a.hasOwnProperty(oe)&&z!==void 0&&!l.hasOwnProperty(oe)&&Xf(e,i,oe,void 0,l,z);for(H in l)z=l[H],q=a[H],!l.hasOwnProperty(H)||z===q||z===void 0&&q===void 0||Xf(e,i,H,z,l,q);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!l.hasOwnProperty(k)&&$t(e,i,k,null,l,z);for($ in l)z=l[$],q=a[$],!l.hasOwnProperty($)||z===q||z==null&&q==null||$t(e,i,$,z,l,q)}var Zf=null,Jf=null;function Xu(e){return e.nodeType===9?e:e.ownerDocument}function Py(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Wf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var td=null;function BA(){var e=window.event;return e&&e.type==="popstate"?e===td?!1:(td=e,!0):(td=null,!1)}var By=typeof setTimeout=="function"?setTimeout:void 0,jA=typeof clearTimeout=="function"?clearTimeout:void 0,jy=typeof Promise=="function"?Promise:void 0,qA=typeof queueMicrotask=="function"?queueMicrotask:typeof jy<"u"?function(e){return jy.resolve(null).then(e).catch(HA)}:By;function HA(e){setTimeout(function(){throw e})}function ed(e,i){var a=i,l=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){e.removeChild(h),fl(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);fl(i)}function nd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nd(a),ts(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function FA(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[sr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Fn(e.nextSibling),e===null)break}return null}function GA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Fn(e.nextSibling),e===null))return null;return e}function Fn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function qy(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function Hy(e,i,a){switch(i=Xu(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var kn=new Map,Fy=new Set;function Zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var qi=nt.d;nt.d={f:KA,r:QA,D:YA,C:$A,L:XA,m:ZA,X:WA,S:JA,M:tS};function KA(){var e=qi.f(),i=Hu();return e||i}function QA(e){var i=Ei(e);i!==null&&i.tag===5&&i.type==="form"?yp(i):qi.r(e)}var Na=typeof document>"u"?null:document;function Gy(e,i,a){var l=Na;if(l&&typeof i=="string"&&i){var h=re(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Fy.has(h)||(Fy.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Pe(i,"link",e),Wt(i),l.head.appendChild(i)))}}function YA(e){qi.D(e),Gy("dns-prefetch",e,null)}function $A(e,i){qi.C(e,i),Gy("preconnect",e,i)}function XA(e,i,a){qi.L(e,i,a);var l=Na;if(l&&e&&i){var h='link[rel="preload"][as="'+re(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+re(a.imageSizes)+'"]')):h+='[href="'+re(e)+'"]';var d=h;switch(i){case"style":d=Ma(e);break;case"script":d=Va(e)}kn.has(d)||(e=C({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),kn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(sl(d))||i==="script"&&l.querySelector(al(d))||(i=l.createElement("link"),Pe(i,"link",e),Wt(i),l.head.appendChild(i)))}}function ZA(e,i){qi.m(e,i);var a=Na;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+re(l)+'"][href="'+re(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Va(e)}if(!kn.has(d)&&(e=C({rel:"modulepreload",href:e},i),kn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(d)))return}l=a.createElement("link"),Pe(l,"link",e),Wt(l),a.head.appendChild(l)}}}function JA(e,i,a){qi.S(e,i,a);var l=Na;if(l&&e){var h=or(l).hoistableStyles,d=Ma(e);i=i||"default";var _=h.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(sl(d)))T.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":i},a),(a=kn.get(d))&&id(e,a);var R=_=l.createElement("link");Wt(R),Pe(R,"link",e),R._p=new Promise(function(V,H){R.onload=V,R.onerror=H}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ju(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:T},h.set(d,_)}}}function WA(e,i){qi.X(e,i);var a=Na;if(a&&e){var l=or(a).hoistableScripts,h=Va(e),d=l.get(h);d||(d=a.querySelector(al(h)),d||(e=C({src:e,async:!0},i),(i=kn.get(h))&&rd(e,i),d=a.createElement("script"),Wt(d),Pe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function tS(e,i){qi.M(e,i);var a=Na;if(a&&e){var l=or(a).hoistableScripts,h=Va(e),d=l.get(h);d||(d=a.querySelector(al(h)),d||(e=C({src:e,async:!0,type:"module"},i),(i=kn.get(h))&&rd(e,i),d=a.createElement("script"),Wt(d),Pe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Ky(e,i,a,l){var h=(h=_n.current)?Zu(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ma(a.href),a=or(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ma(a.href);var d=or(h).hoistableStyles,_=d.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=h.querySelector(sl(e)))&&!d._p&&(_.instance=d,_.state.loading=5),kn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(e,a),d||eS(h,e,a,_.state))),i&&l===null)throw Error(s(528,""));return _}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Va(a),a=or(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ma(e){return'href="'+re(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function Qy(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Pe(i,"link",a),Wt(i),e.head.appendChild(i))}function Va(e){return'[src="'+re(e)+'"]'}function al(e){return"script[async]"+e}function Yy(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+re(a.href)+'"]');if(l)return i.instance=l,Wt(l),l;var h=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Wt(l),Pe(l,"style",h),Ju(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ma(a.href);var d=e.querySelector(sl(h));if(d)return i.state.loading|=4,i.instance=d,Wt(d),d;l=Qy(a),(h=kn.get(h))&&id(l,h),d=(e.ownerDocument||e).createElement("link"),Wt(d);var _=d;return _._p=new Promise(function(T,R){_.onload=T,_.onerror=R}),Pe(d,"link",l),i.state.loading|=4,Ju(d,a.precedence,e),i.instance=d;case"script":return d=Va(a.src),(h=e.querySelector(al(d)))?(i.instance=h,Wt(h),h):(l=a,(h=kn.get(d))&&(l=C({},a),rd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),Wt(h),Pe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&!(i.state.loading&4)&&(l=i.instance,i.state.loading|=4,Ju(l,a.precedence,e));return i.instance}function Ju(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function id(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function rd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Wu=null;function $y(e,i,a){if(Wu===null){var l=new Map,h=Wu=new Map;h.set(a,l)}else h=Wu,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[sr]||d[Ce]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=e+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function Xy(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function nS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Zy(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var ol=null;function iS(){}function rS(e,i,a){if(ol===null)throw Error(s(475));var l=ol;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(i.state.loading&4)){if(i.instance===null){var h=Ma(a.href),d=e.querySelector(sl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=tc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,Wt(d);return}d=e.ownerDocument||e,a=Qy(a),(h=kn.get(h))&&id(a,h),d=d.createElement("link"),Wt(d);var _=d;_._p=new Promise(function(T,R){_.onload=T,_.onerror=R}),Pe(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&!(i.state.loading&3)&&(l.count++,i=tc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function sS(){if(ol===null)throw Error(s(475));var e=ol;return e.stylesheets&&e.count===0&&sd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&sd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)sd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function sd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,i.forEach(aS,e),ec=null,tc.call(e))}function aS(e,i){if(!(i.state.loading&4)){var a=ec.get(e);if(a)var l=a.get(null);else{a=new Map,ec.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=tc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ll={$$typeof:B,Provider:null,Consumer:null,_currentValue:vt,_currentValue2:vt,_threadCount:0};function oS(e,i,a,l,h,d,_,T){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.hiddenUpdates=Ys(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Jy(e,i,a,l,h,d,_,T,R,V,H,$){return e=new oS(e,i,a,_,T,R,V,$),i=1,d===!0&&(i|=24),d=Vn(3,null,null,i),e.current=d,d.stateNode=e,i=Uh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},yf(d),e}function Wy(e){return e?(e=ha,e):ha}function tv(e,i,a,l,h,d){h=Wy(h),l.context===null?l.context=h:l.pendingContext=h,l=Er(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Tr(e,l,i),a!==null&&(We(a,e,i),Go(a,e,i))}function ev(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function ad(e,i){ev(e,i),(e=e.alternate)&&ev(e,i)}function nv(e){if(e.tag===13){var i=dr(e,67108864);i!==null&&We(i,e,67108864),ad(e,67108864)}}var nc=!0;function lS(e,i,a,l){var h=S.T;S.T=null;var d=nt.p;try{nt.p=2,od(e,i,a,l)}finally{nt.p=d,S.T=h}}function uS(e,i,a,l){var h=S.T;S.T=null;var d=nt.p;try{nt.p=8,od(e,i,a,l)}finally{nt.p=d,S.T=h}}function od(e,i,a,l){if(nc){var h=ld(l);if(h===null)$f(e,i,l,ic,a),rv(e,l);else if(hS(h,e,i,a,l))l.stopPropagation();else if(rv(e,l),i&4&&-1<cS.indexOf(e)){for(;h!==null;){var d=Ei(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=zn(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var R=1<<31-$e(_);T.entanglements[1]|=R,_&=~R}li(d),!(ee&6)&&(Bu=en()+500,nl(0))}}break;case 13:T=dr(d,2),T!==null&&We(T,d,2),Hu(),ad(d,2)}if(d=ld(l),d===null&&$f(e,i,l,ic,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else $f(e,i,l,null,a)}}function ld(e){return e=Ws(e),ud(e)}var ic=null;function ud(e){if(ic=null,e=Bn(e),e!==null){var i=rt(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=It(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ic=e,null}function iv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ql()){case _e:return 2;case Ie:return 8;case vi:case Hl:return 32;case uo:return 268435456;default:return 32}default:return 32}}var cd=!1,Cr=null,Dr=null,Or=null,ul=new Map,cl=new Map,Nr=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rv(e,i){switch(e){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":ul.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function hl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Ei(i),i!==null&&nv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function hS(e,i,a,l,h){switch(i){case"focusin":return Cr=hl(Cr,e,i,a,l,h),!0;case"dragenter":return Dr=hl(Dr,e,i,a,l,h),!0;case"mouseover":return Or=hl(Or,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return ul.set(d,hl(ul.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,cl.set(d,hl(cl.get(d)||null,e,i,a,l,h)),!0}return!1}function sv(e){var i=Bn(e.target);if(i!==null){var a=rt(i);if(a!==null){if(i=a.tag,i===13){if(i=It(a),i!==null){e.blockedOn=i,rr(e.priority,function(){if(a.tag===13){var l=yn(),h=dr(a,l);h!==null&&We(h,a,l),ad(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=ld(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Sn=l,a.target.dispatchEvent(l),Sn=null}else return i=Ei(a),i!==null&&nv(i),e.blockedOn=a,!1;i.shift()}return!0}function av(e,i,a){rc(e)&&a.delete(i)}function fS(){cd=!1,Cr!==null&&rc(Cr)&&(Cr=null),Dr!==null&&rc(Dr)&&(Dr=null),Or!==null&&rc(Or)&&(Or=null),ul.forEach(av),cl.forEach(av)}function sc(e,i){e.blockedOn===i&&(e.blockedOn=null,cd||(cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,fS)))}var ac=null;function ov(e){ac!==e&&(ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(ud(l||a)===null)continue;break}var d=Ei(a);d!==null&&(e.splice(i,3),i-=3,Jh(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function fl(e){function i(R){return sc(R,e)}Cr!==null&&sc(Cr,e),Dr!==null&&sc(Dr,e),Or!==null&&sc(Or,e),ul.forEach(i),cl.forEach(i);for(var a=0;a<Nr.length;a++){var l=Nr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Nr.length&&(a=Nr[0],a.blockedOn===null);)sv(a),a.blockedOn===null&&Nr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Ee]||null;if(typeof d=="function")_||ov(a);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Ee]||null)T=_.formAction;else if(ud(h)!==null)continue}else T=_.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),ov(a)}}}function hd(e){this._internalRoot=e}oc.prototype.render=hd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=yn();tv(a,l,e,i,null,null)},oc.prototype.unmount=hd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&Ca(),tv(e.current,2,null,e,null,null),Hu(),i[_i]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Yl();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Nr.length&&i!==0&&i<Nr[a].priority;a++);Nr.splice(a,0,e),a===0&&sv(e)}};var lv=t.version;if(lv!=="19.0.0")throw Error(s(527,lv,"19.0.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Y(i),e=e!==null?st(e):null,e=e===null?null:e.stateNode,e};var dS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Bn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Ji=lc.inject(dS),je=lc}catch{}}return ml.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=wp,d=Rp,_=Ip,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=Jy(e,1,!1,null,null,a,l,h,d,_,T,null),e[_i]=i.current,Yf(e.nodeType===8?e.parentNode:e),new hd(i)},ml.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=wp,_=Rp,T=Ip,R=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),i=Jy(e,1,!0,i,a??null,l,h,d,_,T,R,V),i.context=Wy(null),a=i.current,l=yn(),h=Er(l),h.callback=null,Tr(a,h,l),i.current.lanes=l,ue(i,l),li(i),e[_i]=i.current,Yf(e),new oc(i)},ml.version="19.0.0",ml}var vv;function RS(){if(vv)return md.exports;vv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),md.exports=wS(),md.exports}var IS=RS();u0();/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},bl.apply(this,arguments)}var Lr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Lr||(Lr={}));const _v="popstate";function CS(r){r===void 0&&(r={});function t(s,o){let{pathname:u,search:f,hash:m}=s.location;return Pd("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:wc(o)}return OS(t,n,null,r)}function ve(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function c0(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function DS(){return Math.random().toString(36).substr(2,8)}function Ev(r,t){return{usr:r.state,key:r.key,idx:t}}function Pd(r,t,n,s){return n===void 0&&(n=null),bl({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof t=="string"?to(t):t,{state:n,key:t&&t.key||s||DS()})}function wc(r){let{pathname:t="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function to(r){let t={};if(r){let n=r.indexOf("#");n>=0&&(t.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(t.search=r.substr(s),r=r.substr(0,s)),r&&(t.pathname=r)}return t}function OS(r,t,n,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m=Lr.Pop,p=null,y=E();y==null&&(y=0,f.replaceState(bl({},f.state,{idx:y}),""));function E(){return(f.state||{idx:null}).idx}function b(){m=Lr.Pop;let F=E(),it=F==null?null:F-y;y=F,p&&p({action:m,location:X.location,delta:it})}function x(F,it){m=Lr.Push;let ut=Pd(X.location,F,it);y=E()+1;let ht=Ev(ut,y),bt=X.createHref(ut);try{f.pushState(ht,"",bt)}catch(mt){if(mt instanceof DOMException&&mt.name==="DataCloneError")throw mt;o.location.assign(bt)}u&&p&&p({action:m,location:X.location,delta:1})}function B(F,it){m=Lr.Replace;let ut=Pd(X.location,F,it);y=E();let ht=Ev(ut,y),bt=X.createHref(ut);f.replaceState(ht,"",bt),u&&p&&p({action:m,location:X.location,delta:0})}function Q(F){let it=o.location.origin!=="null"?o.location.origin:o.location.href,ut=typeof F=="string"?F:wc(F);return ut=ut.replace(/ $/,"%20"),ve(it,"No window.location.(origin|href) available to create URL for href: "+ut),new URL(ut,it)}let X={get action(){return m},get location(){return r(o,f)},listen(F){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(_v,b),p=F,()=>{o.removeEventListener(_v,b),p=null}},createHref(F){return t(o,F)},createURL:Q,encodeLocation(F){let it=Q(F);return{pathname:it.pathname,search:it.search,hash:it.hash}},push:x,replace:B,go(F){return f.go(F)}};return X}var Tv;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Tv||(Tv={}));function NS(r,t,n){return n===void 0&&(n="/"),MS(r,t,n)}function MS(r,t,n,s){let o=typeof t=="string"?to(t):t,u=ym(o.pathname||"/",n);if(u==null)return null;let f=h0(r);VS(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=GS(u);m=qS(f[p],y)}return m}function h0(r,t,n,s){t===void 0&&(t=[]),n===void 0&&(n=[]),s===void 0&&(s="");let o=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(ve(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let y=Br([s,p.relativePath]),E=n.concat(p);u.children&&u.children.length>0&&(ve(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),h0(u.children,t,E,y)),!(u.path==null&&!u.index)&&t.push({path:y,score:BS(y,u.index),routesMeta:E})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let p of f0(u.path))o(u,f,p)}),t}function f0(r){let t=r.split("/");if(t.length===0)return[];let[n,...s]=t,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=f0(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function VS(r){r.sort((t,n)=>t.score!==n.score?n.score-t.score:jS(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const xS=/^:[\w-]+$/,kS=3,US=2,LS=1,PS=10,zS=-2,Av=r=>r==="*";function BS(r,t){let n=r.split("/"),s=n.length;return n.some(Av)&&(s+=zS),t&&(s+=US),n.filter(o=>!Av(o)).reduce((o,u)=>o+(xS.test(u)?kS:u===""?LS:PS),s)}function jS(r,t){return r.length===t.length&&r.slice(0,-1).every((s,o)=>s===t[o])?r[r.length-1]-t[t.length-1]:0}function qS(r,t,n){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,E=u==="/"?t:t.slice(u.length)||"/",b=HS({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),x=p.route;if(!b)return null;Object.assign(o,b.params),f.push({params:o,pathname:Br([u,b.pathname]),pathnameBase:$S(Br([u,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(u=Br([u,b.pathnameBase]))}return f}function HS(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=FS(r.path,r.caseSensitive,r.end),o=t.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,E,b)=>{let{paramName:x,isOptional:B}=E;if(x==="*"){let X=m[b]||"";f=u.slice(0,u.length-X.length).replace(/(.)\/+$/,"$1")}const Q=m[b];return B&&!Q?y[x]=void 0:y[x]=(Q||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function FS(r,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),c0(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),s]}function GS(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return c0(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),r}}function ym(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function KS(r,t){t===void 0&&(t="/");let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?to(r):r;return{pathname:n?n.startsWith("/")?n:QS(n,t):t,search:XS(s),hash:ZS(o)}}function QS(r,t){let n=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function vd(r,t,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YS(r){return r.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function d0(r,t){let n=YS(r);return t?n.map((s,o)=>o===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function m0(r,t,n,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=to(r):(o=bl({},r),ve(!o.pathname||!o.pathname.includes("?"),vd("?","pathname","search",o)),ve(!o.pathname||!o.pathname.includes("#"),vd("#","pathname","hash",o)),ve(!o.search||!o.search.includes("#"),vd("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let b=t.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),b-=1;o.pathname=x.join("/")}m=b>=0?t[b]:"/"}let p=KS(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}const Br=r=>r.join("/").replace(/\/\/+/g,"/"),$S=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),XS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,ZS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function JS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const g0=["post","put","patch","delete"];new Set(g0);const WS=["get",...g0];new Set(WS);/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},wl.apply(this,arguments)}const vm=W.createContext(null),tb=W.createContext(null),Bs=W.createContext(null),Gc=W.createContext(null),js=W.createContext({outlet:null,matches:[],isDataRoute:!1}),p0=W.createContext(null);function eb(r,t){let{relative:n}=t===void 0?{}:t;Vl()||ve(!1);let{basename:s,navigator:o}=W.useContext(Bs),{hash:u,pathname:f,search:m}=v0(r,{relative:n}),p=f;return s!=="/"&&(p=f==="/"?s:Br([s,f])),o.createHref({pathname:p,search:m,hash:u})}function Vl(){return W.useContext(Gc)!=null}function Kc(){return Vl()||ve(!1),W.useContext(Gc).location}function y0(r){W.useContext(Bs).static||W.useLayoutEffect(r)}function nb(){let{isDataRoute:r}=W.useContext(js);return r?gb():ib()}function ib(){Vl()||ve(!1);let r=W.useContext(vm),{basename:t,future:n,navigator:s}=W.useContext(Bs),{matches:o}=W.useContext(js),{pathname:u}=Kc(),f=JSON.stringify(d0(o,n.v7_relativeSplatPath)),m=W.useRef(!1);return y0(()=>{m.current=!0}),W.useCallback(function(y,E){if(E===void 0&&(E={}),!m.current)return;if(typeof y=="number"){s.go(y);return}let b=m0(y,JSON.parse(f),u,E.relative==="path");r==null&&t!=="/"&&(b.pathname=b.pathname==="/"?t:Br([t,b.pathname])),(E.replace?s.replace:s.push)(b,E.state,E)},[t,s,f,u,r])}function v0(r,t){let{relative:n}=t===void 0?{}:t,{future:s}=W.useContext(Bs),{matches:o}=W.useContext(js),{pathname:u}=Kc(),f=JSON.stringify(d0(o,s.v7_relativeSplatPath));return W.useMemo(()=>m0(r,JSON.parse(f),u,n==="path"),[r,f,u,n])}function rb(r,t){return sb(r,t)}function sb(r,t,n,s){Vl()||ve(!1);let{navigator:o,static:u}=W.useContext(Bs),{matches:f}=W.useContext(js),m=f[f.length-1],p=m?m.params:{};m&&m.pathname;let y=m?m.pathnameBase:"/";m&&m.route;let E=Kc(),b;if(t){var x;let it=typeof t=="string"?to(t):t;y==="/"||(x=it.pathname)!=null&&x.startsWith(y)||ve(!1),b=it}else b=E;let B=b.pathname||"/",Q=B;if(y!=="/"){let it=y.replace(/^\//,"").split("/");Q="/"+B.replace(/^\//,"").split("/").slice(it.length).join("/")}let X=NS(r,{pathname:Q}),F=cb(X&&X.map(it=>Object.assign({},it,{params:Object.assign({},p,it.params),pathname:Br([y,o.encodeLocation?o.encodeLocation(it.pathname).pathname:it.pathname]),pathnameBase:it.pathnameBase==="/"?y:Br([y,o.encodeLocation?o.encodeLocation(it.pathnameBase).pathname:it.pathnameBase])})),f,n,s);return t&&F?W.createElement(Gc.Provider,{value:{location:wl({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:Lr.Pop}},F):F}function ab(){let r=mb(),t=JS(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},t),n?W.createElement("pre",{style:o},n):null,null)}const ob=W.createElement(ab,null);class lb extends W.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?W.createElement(js.Provider,{value:this.props.routeContext},W.createElement(p0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ub(r){let{routeContext:t,match:n,children:s}=r,o=W.useContext(vm);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),W.createElement(js.Provider,{value:t},s)}function cb(r,t,n,s){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var u;if(!n)return null;if(n.errors)r=n.matches;else if((u=s)!=null&&u.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let f=r,m=(o=n)==null?void 0:o.errors;if(m!=null){let E=f.findIndex(b=>b.route.id&&(m==null?void 0:m[b.route.id])!==void 0);E>=0||ve(!1),f=f.slice(0,Math.min(f.length,E+1))}let p=!1,y=-1;if(n&&s&&s.v7_partialHydration)for(let E=0;E<f.length;E++){let b=f[E];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(y=E),b.route.id){let{loaderData:x,errors:B}=n,Q=b.route.loader&&x[b.route.id]===void 0&&(!B||B[b.route.id]===void 0);if(b.route.lazy||Q){p=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((E,b,x)=>{let B,Q=!1,X=null,F=null;n&&(B=m&&b.route.id?m[b.route.id]:void 0,X=b.route.errorElement||ob,p&&(y<0&&x===0?(pb("route-fallback"),Q=!0,F=null):y===x&&(Q=!0,F=b.route.hydrateFallbackElement||null)));let it=t.concat(f.slice(0,x+1)),ut=()=>{let ht;return B?ht=X:Q?ht=F:b.route.Component?ht=W.createElement(b.route.Component,null):b.route.element?ht=b.route.element:ht=E,W.createElement(ub,{match:b,routeContext:{outlet:E,matches:it,isDataRoute:n!=null},children:ht})};return n&&(b.route.ErrorBoundary||b.route.errorElement||x===0)?W.createElement(lb,{location:n.location,revalidation:n.revalidation,component:X,error:B,children:ut(),routeContext:{outlet:null,matches:it,isDataRoute:!0}}):ut()},null)}var _0=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(_0||{}),E0=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(E0||{});function hb(r){let t=W.useContext(vm);return t||ve(!1),t}function fb(r){let t=W.useContext(tb);return t||ve(!1),t}function db(r){let t=W.useContext(js);return t||ve(!1),t}function T0(r){let t=db(),n=t.matches[t.matches.length-1];return n.route.id||ve(!1),n.route.id}function mb(){var r;let t=W.useContext(p0),n=fb(),s=T0();return t!==void 0?t:(r=n.errors)==null?void 0:r[s]}function gb(){let{router:r}=hb(_0.UseNavigateStable),t=T0(E0.UseNavigateStable),n=W.useRef(!1);return y0(()=>{n.current=!0}),W.useCallback(function(o,u){u===void 0&&(u={}),n.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,wl({fromRouteId:t},u)))},[r,t])}const Sv={};function pb(r,t,n){Sv[r]||(Sv[r]=!0)}function yb(r,t){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function zd(r){ve(!1)}function vb(r){let{basename:t="/",children:n=null,location:s,navigationType:o=Lr.Pop,navigator:u,static:f=!1,future:m}=r;Vl()&&ve(!1);let p=t.replace(/^\/*/,"/"),y=W.useMemo(()=>({basename:p,navigator:u,static:f,future:wl({v7_relativeSplatPath:!1},m)}),[p,m,u,f]);typeof s=="string"&&(s=to(s));let{pathname:E="/",search:b="",hash:x="",state:B=null,key:Q="default"}=s,X=W.useMemo(()=>{let F=ym(E,p);return F==null?null:{location:{pathname:F,search:b,hash:x,state:B,key:Q},navigationType:o}},[p,E,b,x,B,Q,o]);return X==null?null:W.createElement(Bs.Provider,{value:y},W.createElement(Gc.Provider,{children:n,value:X}))}function _b(r){let{children:t,location:n}=r;return rb(Bd(t),n)}new Promise(()=>{});function Bd(r,t){t===void 0&&(t=[]);let n=[];return W.Children.forEach(r,(s,o)=>{if(!W.isValidElement(s))return;let u=[...t,o];if(s.type===W.Fragment){n.push.apply(n,Bd(s.props.children,u));return}s.type!==zd&&ve(!1),!s.props.index||!s.props.children||ve(!1);let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Bd(s.props.children,u)),n.push(f)}),n}/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jd(){return jd=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},jd.apply(this,arguments)}function Eb(r,t){if(r==null)return{};var n={},s=Object.keys(r),o,u;for(u=0;u<s.length;u++)o=s[u],!(t.indexOf(o)>=0)&&(n[o]=r[o]);return n}function Tb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ab(r,t){return r.button===0&&(!t||t==="_self")&&!Tb(r)}const Sb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bb="6";try{window.__reactRouterVersion=bb}catch{}const wb="startTransition",bv=TS[wb];function Rb(r){let{basename:t,children:n,future:s,window:o}=r,u=W.useRef();u.current==null&&(u.current=CS({window:o,v5Compat:!0}));let f=u.current,[m,p]=W.useState({action:f.action,location:f.location}),{v7_startTransition:y}=s||{},E=W.useCallback(b=>{y&&bv?bv(()=>p(b)):p(b)},[p,y]);return W.useLayoutEffect(()=>f.listen(E),[f,E]),W.useEffect(()=>yb(s),[s]),W.createElement(vb,{basename:t,children:n,location:m.location,navigationType:m.action,navigator:f,future:s})}const Ib=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Db=W.forwardRef(function(t,n){let{onClick:s,relative:o,reloadDocument:u,replace:f,state:m,target:p,to:y,preventScrollReset:E,viewTransition:b}=t,x=Eb(t,Sb),{basename:B}=W.useContext(Bs),Q,X=!1;if(typeof y=="string"&&Cb.test(y)&&(Q=y,Ib))try{let ht=new URL(window.location.href),bt=y.startsWith("//")?new URL(ht.protocol+y):new URL(y),mt=ym(bt.pathname,B);bt.origin===ht.origin&&mt!=null?y=mt+bt.search+bt.hash:X=!0}catch{}let F=eb(y,{relative:o}),it=Ob(y,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:b});function ut(ht){s&&s(ht),ht.defaultPrevented||it(ht)}return W.createElement("a",jd({},x,{href:Q||F,onClick:X||u?s:ut,ref:n,target:p}))});var wv;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(wv||(wv={}));var Rv;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Rv||(Rv={}));function Ob(r,t){let{target:n,replace:s,state:o,preventScrollReset:u,relative:f,viewTransition:m}=t===void 0?{}:t,p=nb(),y=Kc(),E=v0(r,{relative:f});return W.useCallback(b=>{if(Ab(b,n)){b.preventDefault();let x=s!==void 0?s:wc(y)===wc(E);p(r,{replace:x,state:o,preventScrollReset:u,relative:f,viewTransition:m})}},[y,p,E,s,o,n,r,u,f,m])}var Iv={};/**
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
 */const A0=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Nb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},S0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,b=(u&3)<<4|m>>4;let x=(m&15)<<2|y>>6,B=y&63;p||(B=64,f||(x=64)),s.push(n[E],n[b],n[x],n[B])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(A0(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Nb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||b==null)throw new Mb;const x=u<<2|m>>4;if(s.push(x),y!==64){const B=m<<4&240|y>>2;if(s.push(B),b!==64){const Q=y<<6&192|b;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Mb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vb=function(r){const t=A0(r);return S0.encodeByteArray(t,!0)},Rc=function(r){return Vb(r).replace(/\./g,"")},b0=function(r){try{return S0.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kb=()=>xb().__FIREBASE_DEFAULTS__,Ub=()=>{if(typeof process>"u"||typeof Iv>"u")return;const r=Iv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Lb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&b0(r[1]);return t&&JSON.parse(t)},Qc=()=>{try{return kb()||Ub()||Lb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},w0=r=>{var t,n;return(n=(t=Qc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},R0=r=>{const t=w0(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},I0=()=>{var r;return(r=Qc())===null||r===void 0?void 0:r.config},C0=r=>{var t;return(t=Qc())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class Pb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function zb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Rc(JSON.stringify(n)),Rc(JSON.stringify(f)),""].join(".")}/**
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
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function jb(){var r;const t=(r=Qc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _m(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Hb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fb(){const r=Qe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Gb(){return!jb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Em(){try{return typeof indexedDB=="object"}catch{return!1}}function Tm(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function D0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Kb="FirebaseError";class Pn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Kb,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Qb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Pn(o,m,s)}}function Qb(r,t){return r.replace(Yb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Yb=/\{\$([^}]+)}/g;function $b(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Rl(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(Cv(u)&&Cv(f)){if(!Rl(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Cv(r){return r!==null&&typeof r=="object"}/**
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
 */function xl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Xb(r,t){const n=new Zb(r,t);return n.subscribe.bind(n)}class Zb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Jb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=_d),o.error===void 0&&(o.error=_d),o.complete===void 0&&(o.complete=_d);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function _d(){}/**
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
 */const Wb=1e3,tw=2,ew=4*60*60*1e3,nw=.5;function Dv(r,t=Wb,n=tw){const s=t*Math.pow(n,r),o=Math.round(nw*s*(Math.random()-.5)*2);return Math.min(ew,s+o)}/**
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
 */function cn(r){return r&&r._delegate?r._delegate:r}class Ln{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ds="[DEFAULT]";/**
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
 */class iw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Pb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sw(t))try{this.getOrInitializeService({instanceIdentifier:Ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ds){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ds){return this.instances.has(t)}getOptions(t=Ds){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rw(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ds){return this.component?this.component.multipleInstances?t:Ds:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rw(r){return r===Ds?void 0:r}function sw(r){return r.instantiationMode==="EAGER"}/**
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
 */class aw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new iw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const ow={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},lw=Vt.INFO,uw={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},cw=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=uw[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yc{constructor(t){this.name=t,this._logLevel=lw,this._logHandler=cw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ow[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const hw=(r,t)=>t.some(n=>r instanceof n);let Ov,Nv;function fw(){return Ov||(Ov=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dw(){return Nv||(Nv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O0=new WeakMap,qd=new WeakMap,N0=new WeakMap,Ed=new WeakMap,Am=new WeakMap;function mw(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(jr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&O0.set(n,r)}).catch(()=>{}),Am.set(t,r),t}function gw(r){if(qd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});qd.set(r,t)}let Hd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return qd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||N0.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function pw(r){Hd=r(Hd)}function yw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Td(this),t,...n);return N0.set(s,t.sort?t.sort():[t]),jr(s)}:dw().includes(r)?function(...t){return r.apply(Td(this),t),jr(O0.get(this))}:function(...t){return jr(r.apply(Td(this),t))}}function vw(r){return typeof r=="function"?yw(r):(r instanceof IDBTransaction&&gw(r),hw(r,fw())?new Proxy(r,Hd):r)}function jr(r){if(r instanceof IDBRequest)return mw(r);if(Ed.has(r))return Ed.get(r);const t=vw(r);return t!==r&&(Ed.set(r,t),Am.set(t,r)),t}const Td=r=>Am.get(r);function M0(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=jr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(jr(f.result),p.oldVersion,p.newVersion,jr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const _w=["get","getKey","getAll","getAllKeys","count"],Ew=["put","add","delete","clear"],Ad=new Map;function Mv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Ad.get(t))return Ad.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=Ew.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||_w.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Ad.set(t,u),u}pw(r=>({...r,get:(t,n,s)=>Mv(t,n)||r.get(t,n,s),has:(t,n)=>!!Mv(t,n)||r.has(t,n)}));/**
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
 */class Tw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Aw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Aw(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fd="@firebase/app",Vv="0.11.1";/**
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
 */const Qi=new Yc("@firebase/app"),Sw="@firebase/app-compat",bw="@firebase/analytics-compat",ww="@firebase/analytics",Rw="@firebase/app-check-compat",Iw="@firebase/app-check",Cw="@firebase/auth",Dw="@firebase/auth-compat",Ow="@firebase/database",Nw="@firebase/data-connect",Mw="@firebase/database-compat",Vw="@firebase/functions",xw="@firebase/functions-compat",kw="@firebase/installations",Uw="@firebase/installations-compat",Lw="@firebase/messaging",Pw="@firebase/messaging-compat",zw="@firebase/performance",Bw="@firebase/performance-compat",jw="@firebase/remote-config",qw="@firebase/remote-config-compat",Hw="@firebase/storage",Fw="@firebase/storage-compat",Gw="@firebase/firestore",Kw="@firebase/vertexai",Qw="@firebase/firestore-compat",Yw="firebase",$w="11.3.1";/**
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
 */const Gd="[DEFAULT]",Xw={[Fd]:"fire-core",[Sw]:"fire-core-compat",[ww]:"fire-analytics",[bw]:"fire-analytics-compat",[Iw]:"fire-app-check",[Rw]:"fire-app-check-compat",[Cw]:"fire-auth",[Dw]:"fire-auth-compat",[Ow]:"fire-rtdb",[Nw]:"fire-data-connect",[Mw]:"fire-rtdb-compat",[Vw]:"fire-fn",[xw]:"fire-fn-compat",[kw]:"fire-iid",[Uw]:"fire-iid-compat",[Lw]:"fire-fcm",[Pw]:"fire-fcm-compat",[zw]:"fire-perf",[Bw]:"fire-perf-compat",[jw]:"fire-rc",[qw]:"fire-rc-compat",[Hw]:"fire-gcs",[Fw]:"fire-gcs-compat",[Gw]:"fire-fst",[Qw]:"fire-fst-compat",[Kw]:"fire-vertex","fire-js":"fire-js",[Yw]:"fire-js-all"};/**
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
 */const Ic=new Map,Zw=new Map,Kd=new Map;function xv(r,t){try{r.container.addComponent(t)}catch(n){Qi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Kn(r){const t=r.name;if(Kd.has(t))return Qi.debug(`There were multiple attempts to register component ${t}.`),!1;Kd.set(t,r);for(const n of Ic.values())xv(n,r);for(const n of Zw.values())xv(n,r);return!0}function Xr(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Un(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new qs("app","Firebase",Jw);/**
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
 */class Ww{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=$w;function V0(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Gd,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw qr.create("bad-app-name",{appName:String(o)});if(n||(n=I0()),!n)throw qr.create("no-options");const u=Ic.get(o);if(u){if(Rl(n,u.options)&&Rl(s,u.config))return u;throw qr.create("duplicate-app",{appName:o})}const f=new aw(o);for(const p of Kd.values())f.addComponent(p);const m=new Ww(n,s,f);return Ic.set(o,m),m}function $c(r=Gd){const t=Ic.get(r);if(!t&&r===Gd&&I0())return V0();if(!t)throw qr.create("no-app",{appName:r});return t}function on(r,t,n){var s;let o=(s=Xw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qi.warn(m.join(" "));return}Kn(new Ln(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const tR="firebase-heartbeat-database",eR=1,Il="firebase-heartbeat-store";let Sd=null;function x0(){return Sd||(Sd=M0(tR,eR,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(r=>{throw qr.create("idb-open",{originalErrorMessage:r.message})})),Sd}async function nR(r){try{const n=(await x0()).transaction(Il),s=await n.objectStore(Il).get(k0(r));return await n.done,s}catch(t){if(t instanceof Pn)Qi.warn(t.message);else{const n=qr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qi.warn(n.message)}}}async function kv(r,t){try{const s=(await x0()).transaction(Il,"readwrite");await s.objectStore(Il).put(t,k0(r)),await s.done}catch(n){if(n instanceof Pn)Qi.warn(n.message);else{const s=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qi.warn(s.message)}}}function k0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const iR=1024,rR=30;class sR{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Uv();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>rR){const f=lR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uv(),{heartbeatsToSend:s,unsentEntries:o}=aR(this._heartbeatsCache.heartbeats),u=Rc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Qi.warn(n),""}}}function Uv(){return new Date().toISOString().substring(0,10)}function aR(r,t=iR){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Lv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Lv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oR{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Em()?Tm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Lv(r){return Rc(JSON.stringify({version:2,heartbeats:r})).length}function lR(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function uR(r){Kn(new Ln("platform-logger",t=>new Tw(t),"PRIVATE")),Kn(new Ln("heartbeat",t=>new sR(t),"PRIVATE")),on(Fd,Vv,r),on(Fd,Vv,"esm2017"),on("fire-js","")}uR("");var Pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,U0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,I){function S(){}S.prototype=I.prototype,M.D=I.prototype,M.prototype=new S,M.prototype.constructor=M,M.C=function(C,N,U){for(var w=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)w[Ct-2]=arguments[Ct];return I.prototype[N].apply(C,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,I,S){S||(S=0);var C=Array(16);if(typeof I=="string")for(var N=0;16>N;++N)C[N]=I.charCodeAt(S++)|I.charCodeAt(S++)<<8|I.charCodeAt(S++)<<16|I.charCodeAt(S++)<<24;else for(N=0;16>N;++N)C[N]=I[S++]|I[S++]<<8|I[S++]<<16|I[S++]<<24;I=M.g[0],S=M.g[1],N=M.g[2];var U=M.g[3],w=I+(U^S&(N^U))+C[0]+3614090360&4294967295;I=S+(w<<7&4294967295|w>>>25),w=U+(N^I&(S^N))+C[1]+3905402710&4294967295,U=I+(w<<12&4294967295|w>>>20),w=N+(S^U&(I^S))+C[2]+606105819&4294967295,N=U+(w<<17&4294967295|w>>>15),w=S+(I^N&(U^I))+C[3]+3250441966&4294967295,S=N+(w<<22&4294967295|w>>>10),w=I+(U^S&(N^U))+C[4]+4118548399&4294967295,I=S+(w<<7&4294967295|w>>>25),w=U+(N^I&(S^N))+C[5]+1200080426&4294967295,U=I+(w<<12&4294967295|w>>>20),w=N+(S^U&(I^S))+C[6]+2821735955&4294967295,N=U+(w<<17&4294967295|w>>>15),w=S+(I^N&(U^I))+C[7]+4249261313&4294967295,S=N+(w<<22&4294967295|w>>>10),w=I+(U^S&(N^U))+C[8]+1770035416&4294967295,I=S+(w<<7&4294967295|w>>>25),w=U+(N^I&(S^N))+C[9]+2336552879&4294967295,U=I+(w<<12&4294967295|w>>>20),w=N+(S^U&(I^S))+C[10]+4294925233&4294967295,N=U+(w<<17&4294967295|w>>>15),w=S+(I^N&(U^I))+C[11]+2304563134&4294967295,S=N+(w<<22&4294967295|w>>>10),w=I+(U^S&(N^U))+C[12]+1804603682&4294967295,I=S+(w<<7&4294967295|w>>>25),w=U+(N^I&(S^N))+C[13]+4254626195&4294967295,U=I+(w<<12&4294967295|w>>>20),w=N+(S^U&(I^S))+C[14]+2792965006&4294967295,N=U+(w<<17&4294967295|w>>>15),w=S+(I^N&(U^I))+C[15]+1236535329&4294967295,S=N+(w<<22&4294967295|w>>>10),w=I+(N^U&(S^N))+C[1]+4129170786&4294967295,I=S+(w<<5&4294967295|w>>>27),w=U+(S^N&(I^S))+C[6]+3225465664&4294967295,U=I+(w<<9&4294967295|w>>>23),w=N+(I^S&(U^I))+C[11]+643717713&4294967295,N=U+(w<<14&4294967295|w>>>18),w=S+(U^I&(N^U))+C[0]+3921069994&4294967295,S=N+(w<<20&4294967295|w>>>12),w=I+(N^U&(S^N))+C[5]+3593408605&4294967295,I=S+(w<<5&4294967295|w>>>27),w=U+(S^N&(I^S))+C[10]+38016083&4294967295,U=I+(w<<9&4294967295|w>>>23),w=N+(I^S&(U^I))+C[15]+3634488961&4294967295,N=U+(w<<14&4294967295|w>>>18),w=S+(U^I&(N^U))+C[4]+3889429448&4294967295,S=N+(w<<20&4294967295|w>>>12),w=I+(N^U&(S^N))+C[9]+568446438&4294967295,I=S+(w<<5&4294967295|w>>>27),w=U+(S^N&(I^S))+C[14]+3275163606&4294967295,U=I+(w<<9&4294967295|w>>>23),w=N+(I^S&(U^I))+C[3]+4107603335&4294967295,N=U+(w<<14&4294967295|w>>>18),w=S+(U^I&(N^U))+C[8]+1163531501&4294967295,S=N+(w<<20&4294967295|w>>>12),w=I+(N^U&(S^N))+C[13]+2850285829&4294967295,I=S+(w<<5&4294967295|w>>>27),w=U+(S^N&(I^S))+C[2]+4243563512&4294967295,U=I+(w<<9&4294967295|w>>>23),w=N+(I^S&(U^I))+C[7]+1735328473&4294967295,N=U+(w<<14&4294967295|w>>>18),w=S+(U^I&(N^U))+C[12]+2368359562&4294967295,S=N+(w<<20&4294967295|w>>>12),w=I+(S^N^U)+C[5]+4294588738&4294967295,I=S+(w<<4&4294967295|w>>>28),w=U+(I^S^N)+C[8]+2272392833&4294967295,U=I+(w<<11&4294967295|w>>>21),w=N+(U^I^S)+C[11]+1839030562&4294967295,N=U+(w<<16&4294967295|w>>>16),w=S+(N^U^I)+C[14]+4259657740&4294967295,S=N+(w<<23&4294967295|w>>>9),w=I+(S^N^U)+C[1]+2763975236&4294967295,I=S+(w<<4&4294967295|w>>>28),w=U+(I^S^N)+C[4]+1272893353&4294967295,U=I+(w<<11&4294967295|w>>>21),w=N+(U^I^S)+C[7]+4139469664&4294967295,N=U+(w<<16&4294967295|w>>>16),w=S+(N^U^I)+C[10]+3200236656&4294967295,S=N+(w<<23&4294967295|w>>>9),w=I+(S^N^U)+C[13]+681279174&4294967295,I=S+(w<<4&4294967295|w>>>28),w=U+(I^S^N)+C[0]+3936430074&4294967295,U=I+(w<<11&4294967295|w>>>21),w=N+(U^I^S)+C[3]+3572445317&4294967295,N=U+(w<<16&4294967295|w>>>16),w=S+(N^U^I)+C[6]+76029189&4294967295,S=N+(w<<23&4294967295|w>>>9),w=I+(S^N^U)+C[9]+3654602809&4294967295,I=S+(w<<4&4294967295|w>>>28),w=U+(I^S^N)+C[12]+3873151461&4294967295,U=I+(w<<11&4294967295|w>>>21),w=N+(U^I^S)+C[15]+530742520&4294967295,N=U+(w<<16&4294967295|w>>>16),w=S+(N^U^I)+C[2]+3299628645&4294967295,S=N+(w<<23&4294967295|w>>>9),w=I+(N^(S|~U))+C[0]+4096336452&4294967295,I=S+(w<<6&4294967295|w>>>26),w=U+(S^(I|~N))+C[7]+1126891415&4294967295,U=I+(w<<10&4294967295|w>>>22),w=N+(I^(U|~S))+C[14]+2878612391&4294967295,N=U+(w<<15&4294967295|w>>>17),w=S+(U^(N|~I))+C[5]+4237533241&4294967295,S=N+(w<<21&4294967295|w>>>11),w=I+(N^(S|~U))+C[12]+1700485571&4294967295,I=S+(w<<6&4294967295|w>>>26),w=U+(S^(I|~N))+C[3]+2399980690&4294967295,U=I+(w<<10&4294967295|w>>>22),w=N+(I^(U|~S))+C[10]+4293915773&4294967295,N=U+(w<<15&4294967295|w>>>17),w=S+(U^(N|~I))+C[1]+2240044497&4294967295,S=N+(w<<21&4294967295|w>>>11),w=I+(N^(S|~U))+C[8]+1873313359&4294967295,I=S+(w<<6&4294967295|w>>>26),w=U+(S^(I|~N))+C[15]+4264355552&4294967295,U=I+(w<<10&4294967295|w>>>22),w=N+(I^(U|~S))+C[6]+2734768916&4294967295,N=U+(w<<15&4294967295|w>>>17),w=S+(U^(N|~I))+C[13]+1309151649&4294967295,S=N+(w<<21&4294967295|w>>>11),w=I+(N^(S|~U))+C[4]+4149444226&4294967295,I=S+(w<<6&4294967295|w>>>26),w=U+(S^(I|~N))+C[11]+3174756917&4294967295,U=I+(w<<10&4294967295|w>>>22),w=N+(I^(U|~S))+C[2]+718787259&4294967295,N=U+(w<<15&4294967295|w>>>17),w=S+(U^(N|~I))+C[9]+3951481745&4294967295,M.g[0]=M.g[0]+I&4294967295,M.g[1]=M.g[1]+(N+(w<<21&4294967295|w>>>11))&4294967295,M.g[2]=M.g[2]+N&4294967295,M.g[3]=M.g[3]+U&4294967295}s.prototype.u=function(M,I){I===void 0&&(I=M.length);for(var S=I-this.blockSize,C=this.B,N=this.h,U=0;U<I;){if(N==0)for(;U<=S;)o(this,M,U),U+=this.blockSize;if(typeof M=="string"){for(;U<I;)if(C[N++]=M.charCodeAt(U++),N==this.blockSize){o(this,C),N=0;break}}else for(;U<I;)if(C[N++]=M[U++],N==this.blockSize){o(this,C),N=0;break}}this.h=N,this.o+=I},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var I=1;I<M.length-8;++I)M[I]=0;var S=8*this.o;for(I=M.length-8;I<M.length;++I)M[I]=S&255,S/=256;for(this.u(M),M=Array(16),I=S=0;4>I;++I)for(var C=0;32>C;C+=8)M[S++]=this.g[I]>>>C&255;return M};function u(M,I){var S=m;return Object.prototype.hasOwnProperty.call(S,M)?S[M]:S[M]=I(M)}function f(M,I){this.h=I;for(var S=[],C=!0,N=M.length-1;0<=N;N--){var U=M[N]|0;C&&U==I||(S[N]=U,C=!1)}this.g=S}var m={};function p(M){return-128<=M&&128>M?u(M,function(I){return new f([I|0],0>I?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return F(y(-M));for(var I=[],S=1,C=0;M>=S;C++)I[C]=M/S|0,S*=4294967296;return new f(I,0)}function E(M,I){if(M.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(M.charAt(0)=="-")return F(E(M.substring(1),I));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(I,8)),C=b,N=0;N<M.length;N+=8){var U=Math.min(8,M.length-N),w=parseInt(M.substring(N,N+U),I);8>U?(U=y(Math.pow(I,U)),C=C.j(U).add(y(w))):(C=C.j(S),C=C.add(y(w)))}return C}var b=p(0),x=p(1),B=p(16777216);r=f.prototype,r.m=function(){if(X(this))return-F(this).m();for(var M=0,I=1,S=0;S<this.g.length;S++){var C=this.i(S);M+=(0<=C?C:4294967296+C)*I,I*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(Q(this))return"0";if(X(this))return"-"+F(this).toString(M);for(var I=y(Math.pow(M,6)),S=this,C="";;){var N=bt(S,I).g;S=it(S,N.j(I));var U=((0<S.g.length?S.g[0]:S.h)>>>0).toString(M);if(S=N,Q(S))return U+C;for(;6>U.length;)U="0"+U;C=U+C}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function Q(M){if(M.h!=0)return!1;for(var I=0;I<M.g.length;I++)if(M.g[I]!=0)return!1;return!0}function X(M){return M.h==-1}r.l=function(M){return M=it(this,M),X(M)?-1:Q(M)?0:1};function F(M){for(var I=M.g.length,S=[],C=0;C<I;C++)S[C]=~M.g[C];return new f(S,~M.h).add(x)}r.abs=function(){return X(this)?F(this):this},r.add=function(M){for(var I=Math.max(this.g.length,M.g.length),S=[],C=0,N=0;N<=I;N++){var U=C+(this.i(N)&65535)+(M.i(N)&65535),w=(U>>>16)+(this.i(N)>>>16)+(M.i(N)>>>16);C=w>>>16,U&=65535,w&=65535,S[N]=w<<16|U}return new f(S,S[S.length-1]&-2147483648?-1:0)};function it(M,I){return M.add(F(I))}r.j=function(M){if(Q(this)||Q(M))return b;if(X(this))return X(M)?F(this).j(F(M)):F(F(this).j(M));if(X(M))return F(this.j(F(M)));if(0>this.l(B)&&0>M.l(B))return y(this.m()*M.m());for(var I=this.g.length+M.g.length,S=[],C=0;C<2*I;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var N=0;N<M.g.length;N++){var U=this.i(C)>>>16,w=this.i(C)&65535,Ct=M.i(N)>>>16,Et=M.i(N)&65535;S[2*C+2*N]+=w*Et,ut(S,2*C+2*N),S[2*C+2*N+1]+=U*Et,ut(S,2*C+2*N+1),S[2*C+2*N+1]+=w*Ct,ut(S,2*C+2*N+1),S[2*C+2*N+2]+=U*Ct,ut(S,2*C+2*N+2)}for(C=0;C<I;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=I;C<2*I;C++)S[C]=0;return new f(S,0)};function ut(M,I){for(;(M[I]&65535)!=M[I];)M[I+1]+=M[I]>>>16,M[I]&=65535,I++}function ht(M,I){this.g=M,this.h=I}function bt(M,I){if(Q(I))throw Error("division by zero");if(Q(M))return new ht(b,b);if(X(M))return I=bt(F(M),I),new ht(F(I.g),F(I.h));if(X(I))return I=bt(M,F(I)),new ht(F(I.g),I.h);if(30<M.g.length){if(X(M)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var S=x,C=I;0>=C.l(M);)S=mt(S),C=mt(C);var N=Ot(S,1),U=Ot(C,1);for(C=Ot(C,2),S=Ot(S,2);!Q(C);){var w=U.add(C);0>=w.l(M)&&(N=N.add(S),U=w),C=Ot(C,1),S=Ot(S,1)}return I=it(M,N.j(I)),new ht(N,I)}for(N=b;0<=M.l(I);){for(S=Math.max(1,Math.floor(M.m()/I.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),U=y(S),w=U.j(I);X(w)||0<w.l(M);)S-=C,U=y(S),w=U.j(I);Q(U)&&(U=x),N=N.add(U),M=it(M,w)}return new ht(N,M)}r.A=function(M){return bt(this,M).h},r.and=function(M){for(var I=Math.max(this.g.length,M.g.length),S=[],C=0;C<I;C++)S[C]=this.i(C)&M.i(C);return new f(S,this.h&M.h)},r.or=function(M){for(var I=Math.max(this.g.length,M.g.length),S=[],C=0;C<I;C++)S[C]=this.i(C)|M.i(C);return new f(S,this.h|M.h)},r.xor=function(M){for(var I=Math.max(this.g.length,M.g.length),S=[],C=0;C<I;C++)S[C]=this.i(C)^M.i(C);return new f(S,this.h^M.h)};function mt(M){for(var I=M.g.length+1,S=[],C=0;C<I;C++)S[C]=M.i(C)<<1|M.i(C-1)>>>31;return new f(S,M.h)}function Ot(M,I){var S=I>>5;I%=32;for(var C=M.g.length-S,N=[],U=0;U<C;U++)N[U]=0<I?M.i(U+S)>>>I|M.i(U+S+1)<<32-I:M.i(U+S);return new f(N,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,U0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Hr=f}).apply(typeof Pv<"u"?Pv:typeof self<"u"?self:typeof window<"u"?window:{});var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var L0,gl,P0,pc,Qd,z0,B0,j0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in v))break t;v=v[L]}c=c[c.length-1],A=v[c],g=g(A),g!=A&&g!=null&&t(v,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var v=0,A=!1,L={next:function(){if(!A&&v<c.length){var j=v++;return{value:g(j,c[j]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,v){return c.call.apply(c.bind,arguments)}function b(c,g,v){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),c.apply(g,L)}}return function(){return c.apply(g,arguments)}}function x(c,g,v){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,x.apply(null,arguments)}function B(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function Q(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(A,L,j){for(var J=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)J[kt-2]=arguments[kt];return g.prototype[L].apply(A,J)}}function X(c){const g=c.length;if(0<g){const v=Array(g);for(let A=0;A<g;A++)v[A]=c[A];return v}return[]}function F(c,g){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const L=c.length||0,j=A.length||0;c.length=L+j;for(let J=0;J<j;J++)c[L+J]=A[J]}else c.push(A)}}class it{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ut(c){return/^[\s\xa0]*$/.test(c)}function ht(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function bt(c){return bt[" "](c),c}bt[" "]=function(){};var mt=ht().indexOf("Gecko")!=-1&&!(ht().toLowerCase().indexOf("webkit")!=-1&&ht().indexOf("Edge")==-1)&&!(ht().indexOf("Trident")!=-1||ht().indexOf("MSIE")!=-1)&&ht().indexOf("Edge")==-1;function Ot(c,g,v){for(const A in c)g.call(v,c[A],A,c)}function M(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function I(c){const g={};for(const v in c)g[v]=c[v];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,g){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)c[v]=A[v];for(let j=0;j<S.length;j++)v=S[j],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function N(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function U(c){m.setTimeout(()=>{throw c},0)}function w(){var c=It;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Ct{constructor(){this.h=this.g=null}add(g,v){const A=Et.get();A.set(g,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Et=new it(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,rt=!1,It=new Ct,D=()=>{const c=m.Promise.resolve(void 0);ct=()=>{c.then(Y)}};var Y=()=>{for(var c;c=w();){try{c.h.call(c.g)}catch(v){U(v)}var g=Et;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}rt=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function et(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var nt=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,g),m.removeEventListener("test",v,g)}catch{}return c}();function vt(c,g){if(et.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(mt){t:{try{bt(g.nodeName);var L=!0;break t}catch{}L=!1}L||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Tt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&vt.aa.h.call(this)}}Q(vt,et);var Tt={2:"touch",3:"pen",4:"mouse"};vt.prototype.h=function(){vt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),qt=0;function ie(c,g,v,A,L){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!A,this.ha=L,this.key=++qt,this.da=this.fa=!1}function Qt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ye(c){this.src=c,this.g={},this.h=0}Ye.prototype.add=function(c,g,v,A,L){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var J=_n(c,g,A,L);return-1<J?(g=c[J],v||(g.fa=!1)):(g=new ie(g,this.src,j,!!A,L),g.fa=v,c.push(g)),g};function pi(c,g){var v=g.type;if(v in c.g){var A=c.g[v],L=Array.prototype.indexOf.call(A,g,void 0),j;(j=0<=L)&&Array.prototype.splice.call(A,L,1),j&&(Qt(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function _n(c,g,v,A){for(var L=0;L<c.length;++L){var j=c[L];if(!j.da&&j.listener==g&&j.capture==!!v&&j.ha==A)return L}return-1}var Xi="closure_lm_"+(1e6*Math.random()|0),Zi={};function yi(c,g,v,A,L){if(Array.isArray(g)){for(var j=0;j<g.length;j++)yi(c,g[j],v,A,L);return null}return v=ql(v),c&&c[de]?c.K(g,v,y(A)?!!A.capture:!1,L):oo(c,g,v,!1,A,L)}function oo(c,g,v,A,L,j){if(!g)throw Error("Invalid event type");var J=y(L)?!!L.capture:!!L,kt=lo(c);if(kt||(c[Xi]=kt=new Ye(c)),v=kt.add(g,v,A,J,j),v.proxy)return v;if(A=Fs(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)nt||(L=J),L===void 0&&(L=!1),c.addEventListener(g.toString(),A,L);else if(c.attachEvent)c.attachEvent(Ks(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Fs(){function c(v){return g.call(c.src,c.listener,v)}const g=dh;return c}function Gs(c,g,v,A,L){if(Array.isArray(g))for(var j=0;j<g.length;j++)Gs(c,g[j],v,A,L);else A=y(A)?!!A.capture:!!A,v=ql(v),c&&c[de]?(c=c.i,g=String(g).toString(),g in c.g&&(j=c.g[g],v=_n(j,v,A,L),-1<v&&(Qt(j[v]),Array.prototype.splice.call(j,v,1),j.length==0&&(delete c.g[g],c.h--)))):c&&(c=lo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=_n(g,v,A,L)),(v=-1<c?g[c]:null)&&Zr(v))}function Zr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[de])pi(g.i,c);else{var v=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(v,A,c.capture):g.detachEvent?g.detachEvent(Ks(v),A):g.addListener&&g.removeListener&&g.removeListener(A),(v=lo(g))?(pi(v,c),v.h==0&&(v.src=null,g[Xi]=null)):Qt(c)}}}function Ks(c){return c in Zi?Zi[c]:Zi[c]="on"+c}function dh(c,g){if(c.da)c=!0;else{g=new vt(g,this);var v=c.listener,A=c.ha||c.src;c.fa&&Zr(c),c=v.call(A,g)}return c}function lo(c){return c=c[Xi],c instanceof Ye?c:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function ql(c){return typeof c=="function"?c:(c[en]||(c[en]=function(g){return c.handleEvent(g)}),c[en])}function _e(){st.call(this),this.i=new Ye(this),this.M=this,this.F=null}Q(_e,st),_e.prototype[de]=!0,_e.prototype.removeEventListener=function(c,g,v,A){Gs(this,c,g,v,A)};function Ie(c,g){var v,A=c.F;if(A)for(v=[];A;A=A.F)v.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new et(g,c);else if(g instanceof et)g.target=g.target||c;else{var L=g;g=new et(A,c),C(g,L)}if(L=!0,v)for(var j=v.length-1;0<=j;j--){var J=g.g=v[j];L=vi(J,A,!0,g)&&L}if(J=g.g=c,L=vi(J,A,!0,g)&&L,L=vi(J,A,!1,g)&&L,v)for(j=0;j<v.length;j++)J=g.g=v[j],L=vi(J,A,!1,g)&&L}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],A=0;A<v.length;A++)Qt(v[A]);delete c.g[g],c.h--}}this.F=null},_e.prototype.K=function(c,g,v,A){return this.i.add(String(c),g,!1,v,A)},_e.prototype.L=function(c,g,v,A){return this.i.add(String(c),g,!0,v,A)};function vi(c,g,v,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var L=!0,j=0;j<g.length;++j){var J=g[j];if(J&&!J.da&&J.capture==v){var kt=J.listener,Te=J.ha||J.src;J.fa&&pi(c.i,J),L=kt.call(Te,A)!==!1&&L}}return L&&!A.defaultPrevented}function Hl(c,g,v){if(typeof c=="function")v&&(c=x(c,v));else if(c&&typeof c.handleEvent=="function")c=x(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function uo(c){c.g=Hl(()=>{c.g=null,c.i&&(c.i=!1,uo(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class mh extends st{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:uo(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(c){st.call(this),this.h=c,this.g={}}Q(Jr,st);var Ji=[];function je(c){Ot(c.g,function(g,v){this.g.hasOwnProperty(v)&&Zr(g)},c),c.g={}}Jr.prototype.N=function(){Jr.aa.N.call(this),je(this)},Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var co=m.JSON.stringify,Qn=m.JSON.parse,$e=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function ho(){}ho.prototype.h=null;function Fl(c){return c.h||(c.h=c.i())}function Gl(){}var Yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wi(){et.call(this,"d")}Q(Wi,et);function zn(){et.call(this,"c")}Q(zn,et);var En={},tr=null;function Qs(){return tr=tr||new _e}En.La="serverreachability";function fo(c){et.call(this,En.La,c)}Q(fo,et);function er(c){const g=Qs();Ie(g,new fo(g))}En.STAT_EVENT="statevent";function Ys(c,g){et.call(this,En.STAT_EVENT,c),this.stat=g}Q(Ys,et);function ue(c){const g=Qs();Ie(g,new Ys(g,c))}En.Ma="timingevent";function Kl(c,g){et.call(this,En.Ma,c),this.size=g}Q(Kl,et);function nr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function ir(){this.g=!0}ir.prototype.xa=function(){this.g=!1};function Ql(c,g,v,A,L,j){c.info(function(){if(c.g)if(j)for(var J="",kt=j.split("&"),Te=0;Te<kt.length;Te++){var Ut=kt[Te].split("=");if(1<Ut.length){var Oe=Ut[0];Ut=Ut[1];var Ae=Oe.split("_");J=2<=Ae.length&&Ae[1]=="type"?J+(Oe+"="+Ut+"&"):J+(Oe+"=redacted&")}}else J=null;else J=j;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+g+`
`+v+`
`+J})}function Yl(c,g,v,A,L,j,J){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+g+`
`+v+`
`+j+" "+J})}function rr(c,g,v,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ce(c,v)+(A?" "+A:"")})}function $n(c,g){c.info(function(){return"TIMEOUT: "+g})}ir.prototype.info=function(){};function Ce(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var A=v[c];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return co(v)}catch{return g}}var Ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wr;function $s(){}Q($s,ho),$s.prototype.g=function(){return new XMLHttpRequest},$s.prototype.i=function(){return{}},Wr=new $s;function Xn(c,g,v,A){this.j=c,this.i=g,this.l=v,this.R=A||1,this.U=new Jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mo}function mo(){this.i=null,this.g="",this.h=!1}var sr={},ts={};function Bn(c,g,v){c.L=1,c.v=is(re(g)),c.m=v,c.P=!0,Ei(c,null)}function Ei(c,g){c.F=Date.now(),Wt(c),c.A=re(c.v);var v=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Si(v.i,"t",A),c.C=0,v=c.j.J,c.h=new mo,c.g=lu(c.j,v?g:null,!c.m),0<c.O&&(c.M=new mh(x(c.Y,c,c.g),c.O)),g=c.U,v=c.g,A=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ji[0]=L.toString()),L=Ji);for(var j=0;j<L.length;j++){var J=yi(v,L[j],A||g.handleEvent,!1,g.h||g);if(!J)break;g.g[J.key]=J}g=c.H?I(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),er(),Ql(c.i,c.u,c.A,c.l,c.R,c.m)}Xn.prototype.ca=function(c){c=c.target;const g=this.M;g&&wn(c)==3?g.j():this.Y(c)},Xn.prototype.Y=function(c){try{if(c==this.g)t:{const Ae=wn(this.g);var g=this.g.Ba();const Ii=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||tu(this.g)))){this.J||Ae!=4||g==7||(g==8||0>=Ii?er(3):er(2)),Xs(this);var v=this.g.Z();this.X=v;e:if(ar(this)){var A=tu(this.g);c="";var L=A.length,j=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),hn(this);var J="";break e}this.h.i=new m.TextDecoder}for(g=0;g<L;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(j&&g==L-1)});A.length=0,this.h.g+=c,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=v==200,Yl(this.i,this.u,this.A,this.l,this.R,Ae,v),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,Te=this.g;if((kt=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ut(kt)){var Ut=kt;break e}}Ut=null}if(v=Ut)rr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fn(this,v);else{this.o=!1,this.s=3,ue(12),nn(this),hn(this);break t}}if(this.P){v=!0;let ke;for(;!this.J&&this.C<J.length;)if(ke=or(this,J),ke==ts){Ae==4&&(this.s=4,ue(14),v=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==sr){this.s=4,ue(15),rr(this.i,this.l,J,"[Invalid Chunk]"),v=!1;break}else rr(this.i,this.l,ke,null),fn(this,ke);if(ar(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||J.length!=0||this.h.h||(this.s=1,ue(16),v=!1),this.o=this.o&&v,!v)rr(this.i,this.l,J,"[Invalid Chunked Response]"),nn(this),hn(this);else if(0<J.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),cs(Oe),Oe.M=!0,ue(11))}}else rr(this.i,this.l,J,null),fn(this,J);Ae==4&&nn(this),this.o&&!this.J&&(Ae==4?su(this.j,this):(this.o=!1,Wt(this)))}else Eh(this.g),v==400&&0<J.indexOf("Unknown SID")?(this.s=3,ue(12)):(this.s=0,ue(13)),nn(this),hn(this)}}}catch{}finally{}};function ar(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function or(c,g){var v=c.C,A=g.indexOf(`
`,v);return A==-1?ts:(v=Number(g.substring(v,A)),isNaN(v)?sr:(A+=1,A+v>g.length?ts:(g=g.slice(A,A+v),c.C=A+v,g)))}Xn.prototype.cancel=function(){this.J=!0,nn(this)};function Wt(c){c.S=Date.now()+c.I,go(c,c.I)}function go(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=nr(x(c.ba,c),g)}function Xs(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Xn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?($n(this.i,this.A),this.L!=2&&(er(),ue(17)),nn(this),this.s=2,hn(this)):go(this,this.S-c)};function hn(c){c.j.G==0||c.J||su(c.j,c)}function nn(c){Xs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,je(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function fn(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||lr(v.h,c))){if(!c.K&&lr(v.h,c)&&v.G==3){try{var A=v.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)aa(v),ra(v);else break t;Ro(v),ue(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=nr(x(v.Za,v),6e3));if(1>=$l(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ri(v,11)}else if((c.K||v.g==c)&&aa(v),!ut(g))for(L=v.Da.g.parse(g),g=0;g<L.length;g++){let Ut=L[g];if(v.T=Ut[0],Ut=Ut[1],v.G==2)if(Ut[0]=="c"){v.K=Ut[1],v.ia=Ut[2];const Oe=Ut[3];Oe!=null&&(v.la=Oe,v.j.info("VER="+v.la));const Ae=Ut[4];Ae!=null&&(v.Aa=Ae,v.j.info("SVER="+v.Aa));const Ii=Ut[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(A=1.5*Ii,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const ke=c.g;if(ke){const ii=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var j=A.h;j.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ur(j,j.h),j.h=null))}if(A.D){const Co=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Co&&(A.ya=Co,Ht(A.I,A.D,Co))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var J=c;if(A.qa=ou(A,A.J?A.ia:null,A.W),J.K){Tn(A.h,J);var kt=J,Te=A.L;Te&&(kt.I=Te),kt.B&&(Xs(kt),Wt(kt)),A.g=J}else iu(A);0<v.i.length&&sa(v)}else Ut[0]!="stop"&&Ut[0]!="close"||Ri(v,7);else v.G==3&&(Ut[0]=="stop"||Ut[0]=="close"?Ut[0]=="stop"?Ri(v,7):bo(v):Ut[0]!="noop"&&v.l&&v.l.ta(Ut),v.v=0)}}er(4)}catch{}}var gh=class{constructor(c,g){this.g=c,this.map=g}};function po(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function $l(c){return c.h?1:c.g?c.g.size:0}function lr(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ur(c,g){c.g?c.g.add(g):c.h=g}function Tn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}po.prototype.cancel=function(){if(this.i=Xe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Xe(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return X(c.i)}function Xl(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],v=c.length,A=0;A<v;A++)g.push(c[A]);return g}g=[],v=0;for(A in c)g[v++]=c[A];return g}function ph(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const A in c)g[v++]=A;return g}}}function es(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=ph(c),A=Xl(c),L=A.length,j=0;j<L;j++)g.call(void 0,A[j],v&&v[j],c)}var vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zs(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var A=c[v].indexOf("="),L=null;if(0<=A){var j=c[v].substring(0,A);L=c[v].substring(A+1)}else j=c[v];g(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ti(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ti){this.h=c.h,cr(this,c.j),this.o=c.o,this.g=c.g,ns(this,c.s),this.l=c.l;var g=c.i,v=new Zn;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Js(this,v),this.m=c.m}else c&&(g=String(c).match(vo))?(this.h=!1,cr(this,g[1]||"",!0),this.o=hr(g[2]||""),this.g=hr(g[3]||"",!0),ns(this,g[4]),this.l=hr(g[5]||"",!0),Js(this,g[6]||"",!0),this.m=hr(g[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Ti.prototype.toString=function(){var c=[],g=this.j;g&&c.push(An(g,_o,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(An(g,_o,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(An(v,v.charAt(0)=="/"?Eo:Zl,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",An(v,_h)),c.join("")};function re(c){return new Ti(c)}function cr(c,g,v){c.j=v?hr(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function ns(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Js(c,g,v){g instanceof Zn?(c.i=g,To(c.i,c.h)):(v||(g=An(g,vh)),c.i=new Zn(g,c.h))}function Ht(c,g,v){c.i.set(g,v)}function is(c){return Ht(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function hr(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function An(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,yh),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yh(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var _o=/[#\/\?@]/g,Zl=/[#\?:]/g,Eo=/[#\?]/g,vh=/[#\?@]/g,_h=/#/g;function Zn(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Sn(c){c.g||(c.g=new Map,c.h=0,c.i&&Zs(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=Zn.prototype,r.add=function(c,g){Sn(this),this.i=null,c=bi(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function Ws(c,g){Sn(c),g=bi(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ai(c,g){return Sn(c),g=bi(c,g),c.g.has(g)}r.forEach=function(c,g){Sn(this),this.g.forEach(function(v,A){v.forEach(function(L){c.call(g,L,A,this)},this)},this)},r.na=function(){Sn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let A=0;A<g.length;A++){const L=c[A];for(let j=0;j<L.length;j++)v.push(g[A])}return v},r.V=function(c){Sn(this);let g=[];if(typeof c=="string")Ai(this,c)&&(g=g.concat(this.g.get(bi(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},r.set=function(c,g){return Sn(this),this.i=null,c=bi(this,c),Ai(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Si(c,g,v){Ws(c,g),0<v.length&&(c.i=null,c.g.set(bi(c,g),X(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var A=g[v];const j=encodeURIComponent(String(A)),J=this.V(A);for(A=0;A<J.length;A++){var L=j;J[A]!==""&&(L+="="+encodeURIComponent(String(J[A]))),c.push(L)}}return this.i=c.join("&")};function bi(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function To(c,g){g&&!c.j&&(Sn(c),c.i=null,c.g.forEach(function(v,A){var L=A.toLowerCase();A!=L&&(Ws(this,A),Si(this,L,v))},c)),c.j=g}function Jl(c,g){const v=new ir;if(m.Image){const A=new Image;A.onload=B(bn,v,"TestLoadImage: loaded",!0,g,A),A.onerror=B(bn,v,"TestLoadImage: error",!1,g,A),A.onabort=B(bn,v,"TestLoadImage: abort",!1,g,A),A.ontimeout=B(bn,v,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function rs(c,g){const v=new ir,A=new AbortController,L=setTimeout(()=>{A.abort(),bn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(L),j.ok?bn(v,"TestPingServer: ok",!0,g):bn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),bn(v,"TestPingServer: error",!1,g)})}function bn(c,g,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function ss(){this.g=new $e}function Jn(c,g,v){const A=v||"";try{es(c,function(L,j){let J=L;y(L)&&(J=co(L)),g.push(A+j+"="+encodeURIComponent(J))})}catch(L){throw g.push(A+"type="+encodeURIComponent("_badmap")),L}}function fr(c){this.l=c.Ub||null,this.j=c.eb||!1}Q(fr,ho),fr.prototype.g=function(){return new wi(this.l,this.j)},fr.prototype.i=function(c){return function(){return c}}({});function wi(c,g){_e.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(wi,_e),r=wi.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ti(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ao(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ao(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Wn(this):ti(this),this.readyState==3&&Ao(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Wn(this))},r.Qa=function(c){this.g&&(this.response=c,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ti(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function ti(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function So(c){let g="";return Ot(c,function(v,A){g+=A,g+=":",g+=v,g+=`\r
`}),g}function De(c,g,v){t:{for(A in v){var A=!1;break t}A=!0}A||(v=So(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Ht(c,g,v))}function Kt(c){_e.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(Kt,_e);var ta=/^https?$/i,as=["POST","PUT"];r=Kt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wr.g(),this.v=this.o?Fl(this.o):Fl(Wr),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){Wl(this,j);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())v.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(as,g,void 0))||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of v)this.g.setRequestHeader(j,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{os(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){Wl(this,j)}};function Wl(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,ea(c),ei(c)}function ea(c){c.A||(c.A=!0,Ie(c,"complete"),Ie(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ie(this,"complete"),Ie(this,"abort"),ei(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),Kt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?na(this):this.bb())},r.bb=function(){na(this)};function na(c){if(c.h&&typeof f<"u"&&(!c.v[1]||wn(c)!=4||c.Z()!=2)){if(c.u&&wn(c)==4)Hl(c.Ea,0,c);else if(Ie(c,"readystatechange"),wn(c)==4){c.h=!1;try{const J=c.Z();t:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var v;if(!(v=g)){var A;if(A=J===0){var L=String(c.D).match(vo)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),A=!ta.test(L?L.toLowerCase():"")}v=A}if(v)Ie(c,"complete"),Ie(c,"success");else{c.m=6;try{var j=2<wn(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",ea(c)}}finally{ei(c)}}}}function ei(c,g){if(c.g){os(c);const v=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ie(c,"ready");try{v.onreadystatechange=A}catch{}}}function os(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function wn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Qn(g)}};function tu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Eh(c){const g={};c=(c.g&&2<=wn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ut(c[A]))continue;var v=N(c[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const j=g[L]||[];g[L]=j,j.push(v)}M(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function ia(c){this.Aa=0,this.i=[],this.j=new ir,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ls("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ls("baseRetryDelayMs",5e3,c),this.cb=ls("retryDelaySeedMs",1e4,c),this.Wa=ls("forwardChannelMaxRetries",2,c),this.wa=ls("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new po(c&&c.concurrentRequestLimit),this.Da=new ss,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ia.prototype,r.la=8,r.G=1,r.connect=function(c,g,v,A){ue(0),this.W=c,this.H=g||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=ou(this,null,this.W),sa(this)};function bo(c){if(eu(c),c.G==3){var g=c.U++,v=re(c.I);if(Ht(v,"SID",c.K),Ht(v,"RID",g),Ht(v,"TYPE","terminate"),us(c,v),g=new Xn(c,c.j,g),g.L=2,g.v=is(re(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=g.v,v=!0),v||(g.g=lu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Wt(g)}au(c)}function ra(c){c.g&&(cs(c),c.g.cancel(),c.g=null)}function eu(c){ra(c),c.u&&(m.clearTimeout(c.u),c.u=null),aa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function sa(c){if(!yo(c.h)&&!c.s){c.s=!0;var g=c.Ga;ct||D(),rt||(ct(),rt=!0),It.add(g,c),c.B=0}}function Th(c,g){return $l(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=nr(x(c.Ga,c,g),Io(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new Xn(this,this.j,c);let j=this.o;if(this.S&&(j?(j=I(j),C(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)t:{for(var g=0,v=0;v<this.i.length;v++){e:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=v;break t}if(g===4096||v===this.i.length-1){g=v+1;break t}}g=1e3}else g=1e3;g=nu(this,L,g),v=re(this.I),Ht(v,"RID",c),Ht(v,"CVER",22),this.D&&Ht(v,"X-HTTP-Session-Id",this.D),us(this,v),j&&(this.O?g="headers="+encodeURIComponent(String(So(j)))+"&"+g:this.m&&De(v,this.m,j)),ur(this.h,L),this.Ua&&Ht(v,"TYPE","init"),this.P?(Ht(v,"$req",g),Ht(v,"SID","null"),L.T=!0,Bn(L,v,null)):Bn(L,v,g),this.G=2}}else this.G==3&&(c?wo(this,c):this.i.length==0||yo(this.h)||wo(this))};function wo(c,g){var v;g?v=g.l:v=c.U++;const A=re(c.I);Ht(A,"SID",c.K),Ht(A,"RID",v),Ht(A,"AID",c.T),us(c,A),c.m&&c.o&&De(A,c.m,c.o),v=new Xn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=nu(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ur(c.h,v),Bn(v,A,g)}function us(c,g){c.H&&Ot(c.H,function(v,A){Ht(g,A,v)}),c.l&&es({},function(v,A){Ht(g,A,v)})}function nu(c,g,v){v=Math.min(c.i.length,v);var A=c.l?x(c.l.Na,c.l,c):null;t:{var L=c.i;let j=-1;for(;;){const J=["count="+v];j==-1?0<v?(j=L[0].g,J.push("ofs="+j)):j=0:J.push("ofs="+j);let kt=!0;for(let Te=0;Te<v;Te++){let Ut=L[Te].g;const Oe=L[Te].map;if(Ut-=j,0>Ut)j=Math.max(0,L[Te].g-100),kt=!1;else try{Jn(Oe,J,"req"+Ut+"_")}catch{A&&A(Oe)}}if(kt){A=J.join("&");break t}}}return c=c.i.splice(0,v),g.D=c,A}function iu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;ct||D(),rt||(ct(),rt=!0),It.add(g,c),c.v=0}}function Ro(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=nr(x(c.Fa,c),Io(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,ru(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=nr(x(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ue(10),ra(this),ru(this))};function cs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function ru(c){c.g=new Xn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=re(c.qa);Ht(g,"RID","rpc"),Ht(g,"SID",c.K),Ht(g,"AID",c.T),Ht(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ht(g,"TO",c.ja),Ht(g,"TYPE","xmlhttp"),us(c,g),c.m&&c.o&&De(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=is(re(g)),v.m=null,v.P=!0,Ei(v,c)}r.Za=function(){this.C!=null&&(this.C=null,ra(this),Ro(this),ue(19))};function aa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function su(c,g){var v=null;if(c.g==g){aa(c),cs(c),c.g=null;var A=2}else if(lr(c.h,g))v=g.D,Tn(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var L=c.B;A=Qs(),Ie(A,new Kl(A,v)),sa(c)}else iu(c);else if(L=g.s,L==3||L==0&&0<g.X||!(A==1&&Th(c,g)||A==2&&Ro(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),L){case 1:Ri(c,5);break;case 4:Ri(c,10);break;case 3:Ri(c,6);break;default:Ri(c,2)}}}function Io(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function Ri(c,g){if(c.j.info("Error code "+g),g==2){var v=x(c.fb,c),A=c.Xa;const L=!A;A=new Ti(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||cr(A,"https"),is(A),L?Jl(A.toString(),v):rs(A.toString(),v)}else ue(2);c.G=0,c.l&&c.l.sa(g),au(c),eu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ue(2)):(this.j.info("Failed to ping google.com"),ue(1))};function au(c){if(c.G=0,c.ka=[],c.l){const g=Xe(c.h);(g.length!=0||c.i.length!=0)&&(F(c.ka,g),F(c.ka,c.i),c.h.i.length=0,X(c.i),c.i.length=0),c.l.ra()}}function ou(c,g,v){var A=v instanceof Ti?re(v):new Ti(v);if(A.g!="")g&&(A.g=g+"."+A.g),ns(A,A.s);else{var L=m.location;A=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;var j=new Ti(null);A&&cr(j,A),g&&(j.g=g),L&&ns(j,L),v&&(j.l=v),A=j}return v=c.D,g=c.ya,v&&g&&Ht(A,v,g),Ht(A,"VER",c.la),us(c,A),A}function lu(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Kt(new fr({eb:v})):new Kt(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function uu(){}r=uu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function oa(){}oa.prototype.g=function(c,g){return new Ze(c,g)};function Ze(c,g){_e.call(this),this.g=new ia(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ut(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ut(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ni(this)}Q(Ze,_e),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){bo(this.g)},Ze.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=co(c),c=v);g.i.push(new gh(g.Ya++,c)),g.G==3&&sa(g)},Ze.prototype.N=function(){this.g.l=null,delete this.j,bo(this.g),delete this.g,Ze.aa.N.call(this)};function cu(c){Wi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const v in g){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}Q(cu,Wi);function hu(){zn.call(this),this.status=1}Q(hu,zn);function ni(c){this.g=c}Q(ni,uu),ni.prototype.ua=function(){Ie(this.g,"a")},ni.prototype.ta=function(c){Ie(this.g,new cu(c))},ni.prototype.sa=function(c){Ie(this.g,new hu)},ni.prototype.ra=function(){Ie(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,j0=function(){return new oa},B0=function(){return Qs()},z0=En,Qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ee.NO_ERROR=0,Ee.TIMEOUT=8,Ee.HTTP_ERROR=6,pc=Ee,_i.COMPLETE="complete",P0=_i,Gl.EventType=Yn,Yn.OPEN="a",Yn.CLOSE="b",Yn.ERROR="c",Yn.MESSAGE="d",_e.prototype.listen=_e.prototype.K,gl=Gl,Kt.prototype.listenOnce=Kt.prototype.L,Kt.prototype.getLastError=Kt.prototype.Ka,Kt.prototype.getLastErrorCode=Kt.prototype.Ba,Kt.prototype.getStatus=Kt.prototype.Z,Kt.prototype.getResponseJson=Kt.prototype.Oa,Kt.prototype.getResponseText=Kt.prototype.oa,Kt.prototype.send=Kt.prototype.ea,Kt.prototype.setWithCredentials=Kt.prototype.Ha,L0=Kt}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});const zv="@firebase/firestore",Bv="4.7.8";/**
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
 */class Ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let no="11.3.1";/**
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
 */const Us=new Yc("@firebase/firestore");function ka(){return Us.logLevel}function ot(r,...t){if(Us.logLevel<=Vt.DEBUG){const n=t.map(Sm);Us.debug(`Firestore (${no}): ${r}`,...n)}}function Yi(r,...t){if(Us.logLevel<=Vt.ERROR){const n=t.map(Sm);Us.error(`Firestore (${no}): ${r}`,...n)}}function Ga(r,...t){if(Us.logLevel<=Vt.WARN){const n=t.map(Sm);Us.warn(`Firestore (${no}): ${r}`,...n)}}function Sm(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function wt(r="Unexpected state"){const t=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: `+r;throw Yi(t),new Error(t)}function ne(r,t){r||wt()}function Bt(r,t){return r}/**
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
 */const tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pt extends Pn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vs{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class q0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class cR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class hR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fR{constructor(t){this.t=t,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ne(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Vs;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Vs,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{ot("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ot("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Vs)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(ot("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ne(typeof s.accessToken=="string"),new q0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ne(t===null||typeof t=="string"),new Ge(t)}}class dR{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mR{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new dR(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gR{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Un(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){ne(this.o===void 0);const s=u=>{u.error!=null&&ot("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,ot("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{ot("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ot("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new jv(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ne(typeof n.token=="string"),this.R=n.token,new jv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pR(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class yR{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=pR(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function zt(r,t){return r<t?-1:r>t?1:0}function Ka(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
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
 */const qv=-62135596800,Hv=1e6;class ln{static now(){return ln.fromMillis(Date.now())}static fromDate(t){return ln.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Hv);return new ln(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new pt(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new pt(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<qv)throw new pt(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new pt(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hv}_compareTo(t){return this.seconds===t.seconds?zt(this.nanoseconds,t.nanoseconds):zt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-qv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class St{static fromTimestamp(t){return new St(t)}static min(){return new St(new ln(0,0))}static max(){return new St(new ln(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fv="__name__";class ui{constructor(t,n,s){n===void 0?n=0:n>t.length&&wt(),s===void 0?s=t.length-n:s>t.length-n&&wt(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ui.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ui?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=ui.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Math.sign(t.length-n.length)}static compareSegments(t,n){const s=ui.isNumericId(t),o=ui.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ui.extractNumericId(t).compare(ui.extractNumericId(n)):t<n?-1:t>n?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Hr.fromString(t.substring(4,t.length-2))}}class le extends ui{construct(t,n,s){return new le(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new pt(tt.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new le(n)}static emptyPath(){return new le([])}}const vR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends ui{construct(t,n,s){return new tn(t,n,s)}static isValidIdentifier(t){return vR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fv}static keyField(){return new tn([Fv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new pt(tt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new pt(tt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pt(tt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new pt(tt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tn(n)}static emptyPath(){return new tn([])}}/**
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
 */class yt{constructor(t){this.path=t}static fromPath(t){return new yt(le.fromString(t))}static fromName(t){return new yt(le.fromString(t).popFirst(5))}static empty(){return new yt(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&le.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return le.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new yt(new le(t.slice()))}}/**
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
 */const Cl=-1;function _R(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=St.fromTimestamp(s===1e9?new ln(n+1,0):new ln(n,s));return new Fr(o,yt.empty(),t)}function ER(r){return new Fr(r.readTime,r.key,Cl)}class Fr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Fr(St.min(),yt.empty(),Cl)}static max(){return new Fr(St.max(),yt.empty(),Cl)}}function TR(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=yt.comparator(r.documentKey,t.documentKey),n!==0?n:zt(r.largestBatchId,t.largestBatchId))}/**
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
 */const AR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Xc(r){if(r.code!==tt.FAILED_PRECONDITION||r.message!==AR)throw r;ot("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&wt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new K((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):K.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):K.reject(n)}static resolve(t){return new K((n,s)=>{n(t)})}static reject(t){return new K((n,s)=>{s(t)})}static waitFor(t){return new K((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(t){let n=K.resolve(!1);for(const s of t)n=n.next(o=>o?K.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new K((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(t,n){return new K((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function bR(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function io(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Zc.ae=-1;/**
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
 */const wR=-1;function Jc(r){return r==null}function Yd(r){return r===0&&1/r==-1/0}/**
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
 */const H0="";function RR(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Gv(t)),t=IR(r.get(n),t);return Gv(t)}function IR(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case H0:n+="";break;default:n+=u}}return n}function Gv(r){return r+H0+""}/**
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
 */function Kv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function kl(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function CR(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class fe{constructor(t,n){this.comparator=t,this.root=n||ze.EMPTY}insert(t,n){return new fe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(t){return new fe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ze.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cc(this.root,t,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cc(this.root,t,this.comparator,!0)}}class cc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ze{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??ze.RED,this.left=o??ze.EMPTY,this.right=u??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new ze(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return ze.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw wt();const t=this.left.check();if(t!==this.right.check())throw wt();return t+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw wt()}get value(){throw wt()}get color(){throw wt()}get left(){throw wt()}get right(){throw wt()}copy(t,n,s,o,u){return this}insert(t,n,s){return new ze(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(t){this.comparator=t,this.data=new fe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qv(this.data.getIterator())}getIteratorFrom(t){return new Qv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Re(this.comparator);return n.data=t,n}}class Qv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pr{constructor(t){this.fields=t,t.sort(tn.comparator)}static empty(){return new Pr([])}unionWith(t){let n=new Re(tn.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Pr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ka(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class F0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Be{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new F0("Invalid base64 string: "+u):u}}(t);return new Be(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new Be(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return zt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const DR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(r){if(ne(!!r),typeof r=="string"){let t=0;const n=DR.exec(r);if(ne(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:he(r.seconds),nanos:he(r.nanos)}}function he(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Kr(r){return typeof r=="string"?Be.fromBase64String(r):Be.fromUint8Array(r)}/**
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
 */const G0="server_timestamp",K0="__type__",Q0="__previous_value__",Y0="__local_write_time__";function bm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[K0])===null||n===void 0?void 0:n.stringValue)===G0}function Wc(r){const t=r.mapValue.fields[Q0];return bm(t)?Wc(t):t}function Dl(r){const t=Gr(r.mapValue.fields[Y0].timestampValue);return new ln(t.seconds,t.nanos)}/**
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
 */class OR{constructor(t,n,s,o,u,f,m,p,y){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const Cc="(default)";class Ol{constructor(t,n){this.projectId=t,this.database=n||Cc}static empty(){return new Ol("","")}get isDefaultDatabase(){return this.database===Cc}isEqual(t){return t instanceof Ol&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const NR="__type__",MR="__max__",hc={mapValue:{}},VR="__vector__",$d="value";function Qr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?bm(r)?4:kR(r)?9007199254740991:xR(r)?10:11:wt()}function di(r,t){if(r===t)return!0;const n=Qr(r);if(n!==Qr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Dl(r).isEqual(Dl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Gr(o.timestampValue),m=Gr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return Kr(o.bytesValue).isEqual(Kr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return he(o.geoPointValue.latitude)===he(u.geoPointValue.latitude)&&he(o.geoPointValue.longitude)===he(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return he(o.integerValue)===he(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=he(o.doubleValue),m=he(u.doubleValue);return f===m?Yd(f)===Yd(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Ka(r.arrayValue.values||[],t.arrayValue.values||[],di);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Kv(f)!==Kv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!di(f[p],m[p])))return!1;return!0}(r,t);default:return wt()}}function Nl(r,t){return(r.values||[]).find(n=>di(n,t))!==void 0}function Qa(r,t){if(r===t)return 0;const n=Qr(r),s=Qr(t);if(n!==s)return zt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return zt(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=he(u.integerValue||u.doubleValue),p=he(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,t);case 3:return Yv(r.timestampValue,t.timestampValue);case 4:return Yv(Dl(r),Dl(t));case 5:return zt(r.stringValue,t.stringValue);case 6:return function(u,f){const m=Kr(u),p=Kr(f);return m.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=zt(m[y],p[y]);if(E!==0)return E}return zt(m.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=zt(he(u.latitude),he(f.latitude));return m!==0?m:zt(he(u.longitude),he(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return $v(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,p,y,E;const b=u.fields||{},x=f.fields||{},B=(m=b[$d])===null||m===void 0?void 0:m.arrayValue,Q=(p=x[$d])===null||p===void 0?void 0:p.arrayValue,X=zt(((y=B==null?void 0:B.values)===null||y===void 0?void 0:y.length)||0,((E=Q==null?void 0:Q.values)===null||E===void 0?void 0:E.length)||0);return X!==0?X:$v(B,Q)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===hc.mapValue&&f===hc.mapValue)return 0;if(u===hc.mapValue)return 1;if(f===hc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let b=0;b<p.length&&b<E.length;++b){const x=zt(p[b],E[b]);if(x!==0)return x;const B=Qa(m[p[b]],y[E[b]]);if(B!==0)return B}return zt(p.length,E.length)}(r.mapValue,t.mapValue);default:throw wt()}}function Yv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return zt(r,t);const n=Gr(r),s=Gr(t),o=zt(n.seconds,s.seconds);return o!==0?o:zt(n.nanos,s.nanos)}function $v(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Qa(n[o],s[o]);if(u)return u}return zt(n.length,s.length)}function Ya(r){return Xd(r)}function Xd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Gr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Kr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return yt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Xd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Xd(n.fields[f])}`;return o+"}"}(r.mapValue):wt()}function yc(r){switch(Qr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Wc(r);return t?16+yc(t):16;case 5:return 2*r.stringValue.length;case 6:return Kr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+yc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return kl(s.fields,(u,f)=>{o+=u.length+yc(f)}),o}(r.mapValue);default:throw wt()}}function Zd(r){return!!r&&"integerValue"in r}function wm(r){return!!r&&"arrayValue"in r}function Xv(r){return!!r&&"nullValue"in r}function Zv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bd(r){return!!r&&"mapValue"in r}function xR(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[NR])===null||n===void 0?void 0:n.stringValue)===VR}function vl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return kl(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=vl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=vl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function kR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===MR}/**
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
 */class ci{constructor(t){this.value=t}static empty(){return new ci({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!bd(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=vl(n)}setAll(t){let n=tn.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=vl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());bd(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return di(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];bd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){kl(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new ci(vl(this.value))}}/**
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
 */class Ke{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Ke(t,0,St.min(),St.min(),St.min(),ci.empty(),0)}static newFoundDocument(t,n,s,o){return new Ke(t,1,n,St.min(),s,o,0)}static newNoDocument(t,n){return new Ke(t,2,n,St.min(),St.min(),ci.empty(),0)}static newUnknownDocument(t,n){return new Ke(t,3,n,St.min(),St.min(),ci.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ci.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ci.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ke&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dc{constructor(t,n){this.position=t,this.inclusive=n}}function Jv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=yt.comparator(yt.fromName(f.referenceValue),n.key):s=Qa(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!di(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Oc{constructor(t,n="asc"){this.field=t,this.dir=n}}function UR(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class $0{}class we extends $0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new PR(t,n,s):n==="array-contains"?new jR(t,s):n==="in"?new qR(t,s):n==="not-in"?new HR(t,s):n==="array-contains-any"?new FR(t,s):new we(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new zR(t,s):new BR(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qa(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Qa(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return wt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mi extends $0{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new mi(t,n)}matches(t){return X0(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function X0(r){return r.op==="and"}function Z0(r){return LR(r)&&X0(r)}function LR(r){for(const t of r.filters)if(t instanceof mi)return!1;return!0}function Jd(r){if(r instanceof we)return r.field.canonicalString()+r.op.toString()+Ya(r.value);if(Z0(r))return r.filters.map(t=>Jd(t)).join(",");{const t=r.filters.map(n=>Jd(n)).join(",");return`${r.op}(${t})`}}function J0(r,t){return r instanceof we?function(s,o){return o instanceof we&&s.op===o.op&&s.field.isEqual(o.field)&&di(s.value,o.value)}(r,t):r instanceof mi?function(s,o){return o instanceof mi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&J0(f,o.filters[m]),!0):!1}(r,t):void wt()}function W0(r){return r instanceof we?function(n){return`${n.field.canonicalString()} ${n.op} ${Ya(n.value)}`}(r):r instanceof mi?function(n){return n.op.toString()+" {"+n.getFilters().map(W0).join(" ,")+"}"}(r):"Filter"}class PR extends we{constructor(t,n,s){super(t,n,s),this.key=yt.fromName(s.referenceValue)}matches(t){const n=yt.comparator(t.key,this.key);return this.matchesComparison(n)}}class zR extends we{constructor(t,n){super(t,"in",n),this.keys=tE("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class BR extends we{constructor(t,n){super(t,"not-in",n),this.keys=tE("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function tE(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>yt.fromName(s.referenceValue))}class jR extends we{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return wm(n)&&Nl(n.arrayValue,this.value)}}class qR extends we{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Nl(this.value.arrayValue,n)}}class HR extends we{constructor(t,n){super(t,"not-in",n)}matches(t){if(Nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Nl(this.value.arrayValue,n)}}class FR extends we{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!wm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Nl(this.value.arrayValue,s))}}/**
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
 */class GR{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function t_(r,t=null,n=[],s=[],o=null,u=null,f=null){return new GR(r,t,n,s,o,u,f)}function Rm(r){const t=Bt(r);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Jd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Jc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ya(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ya(s)).join(",")),t.le=n}return t.le}function Im(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!UR(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!J0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Wv(r.startAt,t.startAt)&&Wv(r.endAt,t.endAt)}function Wd(r){return yt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class th{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function KR(r,t,n,s,o,u,f,m){return new th(r,t,n,s,o,u,f,m)}function eE(r){return new th(r)}function e_(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function QR(r){return r.collectionGroup!==null}function _l(r){const t=Bt(r);if(t.he===null){t.he=[];const n=new Set;for(const u of t.explicitOrderBy)t.he.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Re(tn.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.he.push(new Oc(u,s))}),n.has(tn.keyField().canonicalString())||t.he.push(new Oc(tn.keyField(),s))}return t.he}function hi(r){const t=Bt(r);return t.Pe||(t.Pe=YR(t,_l(r))),t.Pe}function YR(r,t){if(r.limitType==="F")return t_(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Oc(o.field,u)});const n=r.endAt?new Dc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Dc(r.startAt.position,r.startAt.inclusive):null;return t_(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function tm(r,t,n){return new th(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function eh(r,t){return Im(hi(r),hi(t))&&r.limitType===t.limitType}function nE(r){return`${Rm(hi(r))}|lt:${r.limitType}`}function Ua(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>W0(o)).join(", ")}]`),Jc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Ya(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Ya(o)).join(",")),`Target(${s})`}(hi(r))}; limitType=${r.limitType})`}function nh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):yt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of _l(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=Jv(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,_l(s),o)||s.endAt&&!function(f,m,p){const y=Jv(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,_l(s),o))}(r,t)}function $R(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function iE(r){return(t,n)=>{let s=!1;for(const o of _l(r)){const u=XR(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function XR(r,t,n){const s=r.field.isKeyField()?yt.comparator(t.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?Qa(p,y):wt()}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return wt()}}/**
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
 */class Hs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){kl(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return CR(this.inner)}size(){return this.innerSize}}/**
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
 */const ZR=new fe(yt.comparator);function Yr(){return ZR}const rE=new fe(yt.comparator);function pl(...r){let t=rE;for(const n of r)t=t.insert(n.key,n);return t}function JR(r){let t=rE;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Os(){return El()}function sE(){return El()}function El(){return new Hs(r=>r.toString(),(r,t)=>r.isEqual(t))}const WR=new Re(yt.comparator);function jt(...r){let t=WR;for(const n of r)t=t.add(n);return t}const t1=new Re(zt);function e1(){return t1}/**
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
 */function n1(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yd(t)?"-0":t}}function i1(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this._=void 0}}function r1(r,t,n){return r instanceof em?function(o,u){const f={fields:{[K0]:{stringValue:G0},[Y0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&bm(u)&&(u=Wc(u)),u&&(f.fields[Q0]=u),{mapValue:f}}(n,t):r instanceof Nc?aE(r,t):r instanceof Mc?oE(r,t):function(o,u){const f=a1(o,u),m=n_(f)+n_(o.Ie);return Zd(f)&&Zd(o.Ie)?i1(m):n1(o.serializer,m)}(r,t)}function s1(r,t,n){return r instanceof Nc?aE(r,t):r instanceof Mc?oE(r,t):n}function a1(r,t){return r instanceof nm?function(s){return Zd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class em extends ih{}class Nc extends ih{constructor(t){super(),this.elements=t}}function aE(r,t){const n=lE(t);for(const s of r.elements)n.some(o=>di(o,s))||n.push(s);return{arrayValue:{values:n}}}class Mc extends ih{constructor(t){super(),this.elements=t}}function oE(r,t){let n=lE(t);for(const s of r.elements)n=n.filter(o=>!di(o,s));return{arrayValue:{values:n}}}class nm extends ih{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function n_(r){return he(r.integerValue||r.doubleValue)}function lE(r){return wm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function o1(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Nc&&o instanceof Nc||s instanceof Mc&&o instanceof Mc?Ka(s.elements,o.elements,di):s instanceof nm&&o instanceof nm?di(s.Ie,o.Ie):s instanceof em&&o instanceof em}(r.transform,t.transform)}class xs{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new xs}static exists(t){return new xs(void 0,t)}static updateTime(t){return new xs(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Cm{}function uE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new u1(r.key,xs.none()):new Dm(r.key,r.data,xs.none());{const n=r.data,s=ci.empty();let o=new Re(tn.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new rh(r.key,s,new Pr(o.toArray()),xs.none())}}function l1(r,t,n){r instanceof Dm?function(o,u,f){const m=o.value.clone(),p=r_(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof rh?function(o,u,f){if(!vc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=r_(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(cE(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Tl(r,t,n,s){return r instanceof Dm?function(u,f,m,p){if(!vc(u.precondition,f))return m;const y=u.value.clone(),E=s_(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof rh?function(u,f,m,p){if(!vc(u.precondition,f))return m;const y=s_(u.fieldTransforms,p,f),E=f.data;return E.setAll(cE(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,t,n,s):function(u,f,m){return vc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function i_(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ka(s,o,(u,f)=>o1(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Dm extends Cm{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class rh extends Cm{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function cE(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function r_(r,t,n){const s=new Map;ne(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,s1(f,m,n[o]))}return s}function s_(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,r1(u,f,t))}return s}class u1 extends Cm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class c1{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&l1(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Tl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Tl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=sE();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=uE(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(St.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),jt())}isEqual(t){return this.batchId===t.batchId&&Ka(this.mutations,t.mutations,(n,s)=>i_(n,s))&&Ka(this.baseMutations,t.baseMutations,(n,s)=>i_(n,s))}}/**
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
 */class h1{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class f1{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var ye,Pt;function hE(r){if(r===void 0)return Yi("GRPC error has no .code"),tt.UNKNOWN;switch(r){case ye.OK:return tt.OK;case ye.CANCELLED:return tt.CANCELLED;case ye.UNKNOWN:return tt.UNKNOWN;case ye.DEADLINE_EXCEEDED:return tt.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return tt.RESOURCE_EXHAUSTED;case ye.INTERNAL:return tt.INTERNAL;case ye.UNAVAILABLE:return tt.UNAVAILABLE;case ye.UNAUTHENTICATED:return tt.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return tt.INVALID_ARGUMENT;case ye.NOT_FOUND:return tt.NOT_FOUND;case ye.ALREADY_EXISTS:return tt.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return tt.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return tt.FAILED_PRECONDITION;case ye.ABORTED:return tt.ABORTED;case ye.OUT_OF_RANGE:return tt.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return tt.UNIMPLEMENTED;case ye.DATA_LOSS:return tt.DATA_LOSS;default:return wt()}}(Pt=ye||(ye={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function d1(){return new TextEncoder}/**
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
 */const m1=new Hr([4294967295,4294967295],0);function a_(r){const t=d1().encode(r),n=new U0;return n.update(t),new Uint8Array(n.digest())}function o_(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Hr([n,s],0),new Hr([o,u],0)]}class Om{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new yl(`Invalid padding: ${n}`);if(s<0)throw new yl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new yl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=Hr.fromNumber(this.Ee)}Ae(t,n,s){let o=t.add(n.multiply(Hr.fromNumber(s)));return o.compare(m1)===1&&(o=new Hr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=a_(t),[s,o]=o_(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Om(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.Ee===0)return;const n=a_(t),[s,o]=o_(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Ul.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new sh(St.min(),o,new fe(zt),Yr(),jt())}}class Ul{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Ul(s,n,jt(),jt(),jt())}}/**
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
 */class _c{constructor(t,n,s,o){this.me=t,this.removedTargetIds=n,this.key=s,this.fe=o}}class fE{constructor(t,n){this.targetId=t,this.ge=n}}class dE{constructor(t,n,s=Be.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class l_{constructor(){this.pe=0,this.ye=u_(),this.we=Be.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=jt(),n=jt(),s=jt();return this.ye.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:wt()}}),new Ul(this.we,this.Se,t,n,s)}Me(){this.be=!1,this.ye=u_()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,ne(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class g1{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Yr(),this.$e=fc(),this.Ke=fc(),this.Ue=new fe(zt)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const s=this.He(n);switch(t.state){case 0:this.Je(n)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(t.resumeToken));break;default:wt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(t){const n=t.targetId,s=t.ge.count,o=this.Xe(n);if(o){const u=o.target;if(Wd(u))if(s===0){const f=new yt(u.path);this.ze(n,f,Ke.newNoDocument(f,St.min()))}else ne(s===1);else{const f=this.et(n);if(f!==s){const m=this.tt(t),p=m?this.nt(m,t,f):1;if(p!==0){this.Ye(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,y)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Kr(s).toUint8Array()}catch(p){if(p instanceof F0)return Ga("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Om(f,o,u)}catch(p){return Ga(p instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(t,n,s){return n.ge.count===s-this.st(t,n.targetId)?0:2}st(t,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(t){const n=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&Wd(m.target)){const p=new yt(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Ke.newNoDocument(p,t))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=jt();this.Ke.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(t));const o=new sh(t,n,this.Ue,this.Qe,s);return this.Qe=Yr(),this.$e=fc(),this.Ke=fc(),this.Ue=new fe(zt),o}Ge(t,n){if(!this.Je(t))return;const s=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(t))}ze(t,n,s){if(!this.Je(t))return;const o=this.He(t);this.ut(t,n)?o.xe(n,1):o.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(t)),this.Ke=this.Ke.insert(n,this.ct(n).add(t)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new l_,this.qe.set(t,n)),n}ct(t){let n=this.Ke.get(t);return n||(n=new Re(zt),this.Ke=this.Ke.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Re(zt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||ot("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new l_),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function fc(){return new fe(yt.comparator)}function u_(){return new fe(yt.comparator)}const p1={asc:"ASCENDING",desc:"DESCENDING"},y1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v1={and:"AND",or:"OR"};class _1{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function im(r,t){return r.useProto3Json||Jc(t)?t:{value:t}}function E1(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function T1(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function za(r){return ne(!!r),St.fromTimestamp(function(n){const s=Gr(n);return new ln(s.seconds,s.nanos)}(r))}function A1(r,t){return rm(r,t).canonicalString()}function rm(r,t){const n=function(o){return new le(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function mE(r){const t=le.fromString(r);return ne(_E(t)),t}function wd(r,t){const n=mE(t);if(n.get(1)!==r.databaseId.projectId)throw new pt(tt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new pt(tt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new yt(pE(n))}function gE(r,t){return A1(r.databaseId,t)}function S1(r){const t=mE(r);return t.length===4?le.emptyPath():pE(t)}function c_(r){return new le(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function pE(r){return ne(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function b1(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:wt()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(ne(E===void 0||typeof E=="string"),Be.fromBase64String(E||"")):(ne(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Be.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const E=y.code===void 0?tt.UNKNOWN:hE(y.code);return new pt(E,y.message||"")}(f);n=new dE(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=wd(r,s.document.name),u=za(s.document.updateTime),f=s.document.createTime?za(s.document.createTime):St.min(),m=new ci({mapValue:{fields:s.document.fields}}),p=Ke.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new _c(y,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=wd(r,s.document),u=s.readTime?za(s.readTime):St.min(),f=Ke.newNoDocument(o,u),m=s.removedTargetIds||[];n=new _c([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=wd(r,s.document),u=s.removedTargetIds||[];n=new _c([],u,o,null)}else{if(!("filter"in t))return wt();{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new f1(o,u),m=s.targetId;n=new fE(m,f)}}return n}function w1(r,t){return{documents:[gE(r,t.path)]}}function R1(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=gE(r,o);const u=function(y){if(y.length!==0)return vE(mi.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(x){return{field:La(x.field),direction:D1(x.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=im(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:n,parent:o}}function I1(r){let t=S1(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){ne(s===1);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(b){const x=yE(b);return x instanceof mi&&Z0(x)?x.getFilters():[x]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(x=>function(Q){return new Oc(Pa(Q.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(x))}(n.orderBy));let m=null;n.limit&&(m=function(b){let x;return x=typeof b=="object"?b.value:b,Jc(x)?null:x}(n.limit));let p=null;n.startAt&&(p=function(b){const x=!!b.before,B=b.values||[];return new Dc(B,x)}(n.startAt));let y=null;return n.endAt&&(y=function(b){const x=!b.before,B=b.values||[];return new Dc(B,x)}(n.endAt)),KR(t,o,f,u,m,"F",p,y)}function C1(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return wt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function yE(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Pa(n.unaryFilter.field);return we.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Pa(n.unaryFilter.field);return we.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Pa(n.unaryFilter.field);return we.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Pa(n.unaryFilter.field);return we.create(f,"!=",{nullValue:"NULL_VALUE"});default:return wt()}}(r):r.fieldFilter!==void 0?function(n){return we.create(Pa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return wt()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return mi.create(n.compositeFilter.filters.map(s=>yE(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return wt()}}(n.compositeFilter.op))}(r):wt()}function D1(r){return p1[r]}function O1(r){return y1[r]}function N1(r){return v1[r]}function La(r){return{fieldPath:r.canonicalString()}}function Pa(r){return tn.fromServerFormat(r.fieldPath)}function vE(r){return r instanceof we?function(n){if(n.op==="=="){if(Zv(n.value))return{unaryFilter:{field:La(n.field),op:"IS_NAN"}};if(Xv(n.value))return{unaryFilter:{field:La(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zv(n.value))return{unaryFilter:{field:La(n.field),op:"IS_NOT_NAN"}};if(Xv(n.value))return{unaryFilter:{field:La(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:La(n.field),op:O1(n.op),value:n.value}}}(r):r instanceof mi?function(n){const s=n.getFilters().map(o=>vE(o));return s.length===1?s[0]:{compositeFilter:{op:N1(n.op),filters:s}}}(r):wt()}function _E(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class zr{constructor(t,n,s,o,u=St.min(),f=St.min(),m=Be.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new zr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class M1{constructor(t){this.Tt=t}}function V1(r){const t=I1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?tm(t,t.limit,"L"):t}/**
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
 */class x1{constructor(){this.Tn=new k1}addToCollectionParentIndex(t,n){return this.Tn.add(n),K.resolve()}getCollectionParents(t,n){return K.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return K.resolve()}deleteFieldIndex(t,n){return K.resolve()}deleteAllFieldIndexes(t){return K.resolve()}createTargetIndexes(t,n){return K.resolve()}getDocumentsMatchingTarget(t,n){return K.resolve(null)}getIndexType(t,n){return K.resolve(0)}getFieldIndexes(t,n){return K.resolve([])}getNextCollectionGroupToUpdate(t){return K.resolve(null)}getMinOffset(t,n){return K.resolve(Fr.min())}getMinOffsetFromCollectionGroup(t,n){return K.resolve(Fr.min())}updateCollectionGroup(t,n,s){return K.resolve()}updateIndexEntries(t,n){return K.resolve()}}class k1{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Re(le.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Re(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},EE=41943040;class sn{static withCacheSize(t){return new sn(t,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(EE,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
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
 */class $a{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new $a(0)}static Un(){return new $a(-1)}}/**
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
 */const f_="LruGarbageCollector",U1=1048576;function d_([r,t],[n,s]){const o=zt(r,n);return o===0?zt(t,s):o}class L1{constructor(t){this.Hn=t,this.buffer=new Re(d_),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();d_(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class P1{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ot(f_,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){io(n)?ot(f_,"Ignoring IndexedDB error during garbage collection: ",n):await Xc(n)}await this.er(3e5)})}}class z1{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return K.resolve(Zc.ae);const s=new L1(n);return this.tr.forEachTarget(t,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.tr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(ot("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(h_)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ot("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),h_):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ot("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(t,s,n))).next(b=>(u=b,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(b=>(y=Date.now(),ka()<=Vt.DEBUG&&ot("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${b} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function B1(r,t){return new z1(r,t)}/**
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
 */class j1{constructor(){this.changes=new Hs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ke.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?K.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class q1{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class H1{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Tl(s.mutation,o,Pr.empty(),ln.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,jt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=jt()){const o=Os();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=pl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Os();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,jt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=Yr();const f=El(),m=function(){return El()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof rh)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Tl(E.mutation,y,E.mutation.getFieldMask(),ln.now())):f.set(y.key,Pr.empty())}),this.recalculateAndSaveOverlays(t,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var b;return m.set(y,new q1(E,(b=f.get(y))!==null&&b!==void 0?b:null))}),m))}recalculateAndSaveOverlays(t,n){const s=El();let o=new fe((f,m)=>f-m),u=jt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Pr.empty();E=m.applyToLocalView(y,E),s.set(p,E);const b=(o.get(m.batchId)||jt()).add(p);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,b=sE();E.forEach(x=>{if(!u.has(x)){const B=uE(n.get(x),s.get(x));B!==null&&b.set(x,B),u=u.add(x)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,b))}return K.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return yt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):QR(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):K.resolve(Os());let m=Cl,p=u;return f.next(y=>K.forEach(y,(E,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(E)?K.resolve():this.remoteDocumentCache.getEntry(t,E).next(x=>{p=p.insert(E,x)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,p,y,jt())).next(E=>({batchId:m,changes:JR(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new yt(n)).next(s=>{let o=pl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=pl();return this.indexManager.getCollectionParents(t,u).next(m=>K.forEach(m,p=>{const y=function(b,x){return new th(x,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(E=>{E.forEach((b,x)=>{f=f.insert(b,x)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Ke.newInvalidDocument(E)))});let m=pl();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Tl(E.mutation,y,Pr.empty(),ln.now()),nh(n,y)&&(m=m.insert(p,y))}),m})}}/**
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
 */class F1{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return K.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:za(o.createTime)}}(n)),K.resolve()}getNamedQuery(t,n){return K.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:V1(o.bundledQuery),readTime:za(o.readTime)}}(n)),K.resolve()}}/**
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
 */class G1{constructor(){this.overlays=new fe(yt.comparator),this.Rr=new Map}getOverlay(t,n){return K.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Os();return K.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.Et(t,n,u)}),K.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),K.resolve()}getOverlaysForCollection(t,n,s){const o=Os(),u=n.length+1,f=new yt(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new fe((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Os(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Os(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return K.resolve(m)}Et(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new h1(n,s));let u=this.Rr.get(n);u===void 0&&(u=jt(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(t){return K.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,K.resolve()}}/**
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
 */class Nm{constructor(){this.Vr=new Re(xe.mr),this.gr=new Re(xe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const s=new xe(t,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.wr(new xe(t,n))}Sr(t,n){t.forEach(s=>this.removeReference(s,n))}br(t){const n=new yt(new le([])),s=new xe(n,t),o=new xe(n,t+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new yt(new le([])),s=new xe(n,t),o=new xe(n,t+1);let u=jt();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new xe(t,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class xe{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return yt.comparator(t.key,n.key)||zt(t.Cr,n.Cr)}static pr(t,n){return zt(t.Cr,n.Cr)||yt.comparator(t.key,n.key)}}/**
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
 */class Q1{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Re(xe.mr)}checkEmpty(t){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new c1(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new xe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return K.resolve(f)}lookupMutationBatch(t,n){return K.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return K.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?wR:this.Fr-1)}getAllMutationBatches(t){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new xe(n,0),o=new xe(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);u.push(m)}),K.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Re(zt);return n.forEach(o=>{const u=new xe(o,0),f=new xe(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{s=s.add(m.Cr)})}),K.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;yt.isDocumentKey(u)||(u=u.child(""));const f=new xe(new yt(u),0);let m=new Re(zt);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Cr)),!0)},f),K.resolve(this.Br(m))}Br(t){const n=[];return t.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){ne(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return K.forEach(n.mutations,o=>{const u=new xe(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,n){const s=new xe(n,0),o=this.Mr.firstAfterOrEqual(s);return K.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,K.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Y1{constructor(t){this.kr=t,this.docs=function(){return new fe(yt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return K.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(t,n){let s=Yr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ke.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Yr();const f=n.path,m=new yt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||TR(ER(E),s)<=0||(o.has(E.key)||nh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return K.resolve(u)}getAllFromCollectionGroup(t,n,s,o){wt()}qr(t,n){return K.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new $1(this)}getSize(t){return K.resolve(this.size)}}class $1 extends j1{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(s)}),K.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class X1{constructor(t){this.persistence=t,this.Qr=new Hs(n=>Rm(n),Im),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Nm,this.targetCount=0,this.Ur=$a.Kn()}forEachTarget(t,n){return this.Qr.forEach((s,o)=>n(o)),K.resolve()}getLastRemoteSnapshotVersion(t){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return K.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),K.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ur=new $a(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,K.resolve()}updateTargetData(t,n){return this.zn(n),K.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Kr.br(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),K.waitFor(u).next(()=>o)}getTargetCount(t){return K.resolve(this.targetCount)}getTargetData(t,n){const s=this.Qr.get(n)||null;return K.resolve(s)}addMatchingKeys(t,n,s){return this.Kr.yr(n,s),K.resolve()}removeMatchingKeys(t,n,s){this.Kr.Sr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),K.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.Kr.br(n),K.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Kr.vr(n);return K.resolve(s)}containsKey(t,n){return K.resolve(this.Kr.containsKey(n))}}/**
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
 */class TE{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new Zc(0),this.zr=!1,this.zr=!0,this.jr=new K1,this.referenceDelegate=t(this),this.Hr=new X1(this),this.indexManager=new x1,this.remoteDocumentCache=function(o){return new Y1(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new M1(n),this.Yr=new F1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new G1,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Wr[t.toKey()];return s||(s=new Q1(n,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,s){ot("MemoryPersistence","Starting transaction:",t);const o=new Z1(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(t,n){return K.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,n)))}}class Z1 extends SR{constructor(t){super(),this.currentSequenceNumber=t}}class Mm{constructor(t){this.persistence=t,this.ti=new Nm,this.ni=null}static ri(t){return new Mm(t)}get ii(){if(this.ni)return this.ni;throw wt()}addReference(t,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),K.resolve()}removeReference(t,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),K.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),K.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ii,s=>{const o=yt.fromPath(s);return this.si(t,o).next(u=>{u||n.removeEntry(o,St.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return K.or([()=>K.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Vc{constructor(t,n){this.persistence=t,this.oi=new Hs(s=>RR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=B1(this,n)}static ri(t,n){return new Vc(t,n)}Zr(){}Xr(t){return K.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}sr(t){let n=0;return this.rr(t,s=>{n++}).next(()=>n)}rr(t,n){return K.forEach(this.oi,(s,o)=>this.ar(t,s,o).next(u=>u?K.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(t,f=>this.ar(t,f,n).next(m=>{m||(s++,u.removeEntry(f,St.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),K.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),K.resolve()}removeReference(t,n,s){return this.oi.set(s,t.currentSequenceNumber),K.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),K.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=yc(t.data.value)),n}ar(t,n,s){return K.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.oi.get(n);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Vm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(t,n){let s=jt(),o=jt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Vm(t,n.fromCache,s,o)}}/**
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
 */class J1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class W1{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Gb()?8:bR(Qe())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.rs(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new J1;return this._s(t,n,f).next(m=>{if(u.result=m,this.Xi)return this.us(t,n,f,m.size)})}).next(()=>u.result)}us(t,n,s,o){return s.documentReadCount<this.es?(ka()<=Vt.DEBUG&&ot("QueryEngine","SDK will not create cache indexes for query:",Ua(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),K.resolve()):(ka()<=Vt.DEBUG&&ot("QueryEngine","Query:",Ua(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(ka()<=Vt.DEBUG&&ot("QueryEngine","The SDK decides to create cache indexes for query:",Ua(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,hi(n))):K.resolve())}rs(t,n){if(e_(n))return K.resolve(null);let s=hi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=tm(n,null,"F"),s=hi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=jt(...u);return this.ns.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.cs(n,m);return this.ls(n,y,f,p.readTime)?this.rs(t,tm(n,null,"F")):this.hs(t,y,n,p)}))})))}ss(t,n,s,o){return e_(n)||o.isEqual(St.min())?K.resolve(null):this.ns.getDocuments(t,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?K.resolve(null):(ka()<=Vt.DEBUG&&ot("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ua(n)),this.hs(t,f,n,_R(o,Cl)).next(m=>m))})}cs(t,n){let s=new Re(iE(t));return n.forEach((o,u)=>{nh(t,u)&&(s=s.add(u))}),s}ls(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(t,n,s){return ka()<=Vt.DEBUG&&ot("QueryEngine","Using full collection scan to execute query:",Ua(n)),this.ns.getDocumentsMatchingQuery(t,n,Fr.min(),s)}hs(t,n,s,o){return this.ns.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const xm="LocalStore",tI=3e8;class eI{constructor(t,n,s,o){this.persistence=t,this.Ps=n,this.serializer=o,this.Ts=new fe(zt),this.Is=new Hs(u=>Rm(u),Im),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new H1(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function nI(r,t,n,s){return new eI(r,t,n,s)}async function AE(r,t){const n=Bt(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=jt();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:m}))})})}function SE(r){const t=Bt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function iI(r,t){const n=Bt(r),s=t.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];t.targetChanges.forEach((E,b)=>{const x=o.get(b);if(!x)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,b).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,b)));let B=x.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?B=B.withResumeToken(Be.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(b,B),function(X,F,it){return X.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=tI?!0:it.addedDocuments.size+it.modifiedDocuments.size+it.removedDocuments.size>0}(x,B,E)&&m.push(n.Hr.updateTargetData(u,B))});let p=Yr(),y=jt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(rI(u,f,t.documentUpdates).next(E=>{p=E.Vs,y=E.fs})),!s.isEqual(St.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(b=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return K.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Ts=o,u))}function rI(r,t,n){let s=jt(),o=jt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Yr();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(St.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):ot(xm,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function sI(r,t){const n=Bt(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,t).next(u=>u?(o=u,K.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new zr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(t,s.targetId)),s})}async function sm(r,t,n){const s=Bt(r),o=s.Ts.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!io(f))throw f;ot(xm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(o.target)}function m_(r,t,n){const s=Bt(r);let o=St.min(),u=jt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const b=Bt(p),x=b.Is.get(E);return x!==void 0?K.resolve(b.Ts.get(x)):b.Hr.getTargetData(y,E)}(s,f,hi(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,n?o:St.min(),n?u:jt())).next(m=>(aI(s,$R(t),m),{documents:m,gs:u})))}function aI(r,t,n){let s=r.Es.get(t)||St.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(t,s)}class g_{constructor(){this.activeTargetIds=e1()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class oI{constructor(){this.ho=new g_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,s){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new g_,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class lI{To(t){}shutdown(){}}/**
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
 */const p_="ConnectivityMonitor";class y_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ot(p_,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ot(p_,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dc=null;function am(){return dc===null?dc=function(){return 268435456+Math.round(2147483648*Math.random())}():dc++,"0x"+dc.toString(16)}/**
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
 */const Rd="RestConnection",uI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cI{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Cc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(t,n,s,o,u){const f=am(),m=this.bo(t,n.toUriEncodedString());ot(Rd,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(t,m,p,s).then(y=>(ot(Rd,`Received RPC '${t}' ${f}: `,y),y),y=>{throw Ga(Rd,`RPC '${t}' ${f} failed with error: `,y,"url: ",m,"request:",s),y})}Co(t,n,s,o,u,f){return this.So(t,n,s,o,u)}Do(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}bo(t,n){const s=uI[t];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
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
 */class hI{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const Fe="WebChannelConnection";class fI extends cI{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,s,o){const u=am();return new Promise((f,m)=>{const p=new L0;p.setWithCredentials(!0),p.listenOnce(P0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case pc.NO_ERROR:const E=p.getResponseJson();ot(Fe,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(E)),f(E);break;case pc.TIMEOUT:ot(Fe,`RPC '${t}' ${u} timed out`),m(new pt(tt.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const b=p.getStatus();if(ot(Fe,`RPC '${t}' ${u} failed with status:`,b,"response text:",p.getResponseText()),b>0){let x=p.getResponseJson();Array.isArray(x)&&(x=x[0]);const B=x==null?void 0:x.error;if(B&&B.status&&B.message){const Q=function(F){const it=F.toLowerCase().replace(/_/g,"-");return Object.values(tt).indexOf(it)>=0?it:tt.UNKNOWN}(B.status);m(new pt(Q,B.message))}else m(new pt(tt.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new pt(tt.UNAVAILABLE,"Connection failed."));break;default:wt()}}finally{ot(Fe,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(o);ot(Fe,`RPC '${t}' ${u} sending request:`,o),p.send(n,"POST",y,s,15)})}Wo(t,n,s){const o=am(),u=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=j0(),m=B0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");ot(Fe,`Creating RPC '${t}' stream ${o}: ${E}`,p);const b=f.createWebChannel(E,p);let x=!1,B=!1;const Q=new hI({Fo:F=>{B?ot(Fe,`Not sending because RPC '${t}' stream ${o} is closed:`,F):(x||(ot(Fe,`Opening RPC '${t}' stream ${o} transport.`),b.open(),x=!0),ot(Fe,`RPC '${t}' stream ${o} sending:`,F),b.send(F))},Mo:()=>b.close()}),X=(F,it,ut)=>{F.listen(it,ht=>{try{ut(ht)}catch(bt){setTimeout(()=>{throw bt},0)}})};return X(b,gl.EventType.OPEN,()=>{B||(ot(Fe,`RPC '${t}' stream ${o} transport opened.`),Q.Qo())}),X(b,gl.EventType.CLOSE,()=>{B||(B=!0,ot(Fe,`RPC '${t}' stream ${o} transport closed`),Q.Ko())}),X(b,gl.EventType.ERROR,F=>{B||(B=!0,Ga(Fe,`RPC '${t}' stream ${o} transport errored:`,F),Q.Ko(new pt(tt.UNAVAILABLE,"The operation could not be completed")))}),X(b,gl.EventType.MESSAGE,F=>{var it;if(!B){const ut=F.data[0];ne(!!ut);const ht=ut,bt=(ht==null?void 0:ht.error)||((it=ht[0])===null||it===void 0?void 0:it.error);if(bt){ot(Fe,`RPC '${t}' stream ${o} received error:`,bt);const mt=bt.status;let Ot=function(S){const C=ye[S];if(C!==void 0)return hE(C)}(mt),M=bt.message;Ot===void 0&&(Ot=tt.INTERNAL,M="Unknown error status: "+mt+" with message "+bt.message),B=!0,Q.Ko(new pt(Ot,M)),b.close()}else ot(Fe,`RPC '${t}' stream ${o} received:`,ut),Q.Uo(ut)}}),X(m,z0.STAT_EVENT,F=>{F.stat===Qd.PROXY?ot(Fe,`RPC '${t}' stream ${o} detected buffering proxy`):F.stat===Qd.NOPROXY&&ot(Fe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Q.$o()},0),Q}}function Id(){return typeof document<"u"?document:null}/**
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
 */function bE(r){return new _1(r,!0)}/**
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
 */class wE{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Ti=t,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&ot("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const v_="PersistentStream";class dI{constructor(t,n,s,o,u,f,m,p){this.Ti=t,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new wE(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===tt.RESOURCE_EXHAUSTED?(Yi(n.toString()),Yi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===tt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{t(()=>{const o=new pt(tt.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(t,n){const s=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ot(v_,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(ot(v_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mI extends dI{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=b1(this.serializer,t),s=function(u){if(!("targetChange"in u))return St.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?St.min():f.readTime?za(f.readTime):St.min()}(t);return this.listener.p_(n,s)}y_(t){const n={};n.database=c_(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=Wd(p)?{documents:w1(u,p)}:{query:R1(u,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=T1(u,f.resumeToken);const y=im(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(St.min())>0){m.readTime=E1(u,f.snapshotVersion.toTimestamp());const y=im(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=C1(this.serializer,t);s&&(n.labels=s),this.I_(n)}w_(t){const n={};n.database=c_(this.serializer),n.removeTarget=t,this.I_(n)}}/**
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
 */class gI{}class pI extends gI{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new pt(tt.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.So(t,rm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new pt(tt.UNKNOWN,u.toString())})}Co(t,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(t,rm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new pt(tt.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class yI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Yi(n),this.N_=!1):ot("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Xa="RemoteStore";class vI{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{Pl(this)&&(ot(Xa,"Restarting streams for network reachability change."),await async function(p){const y=Bt(p);y.W_.add(4),await Ll(y),y.j_.set("Unknown"),y.W_.delete(4),await ah(y)}(this))})}),this.j_=new yI(s,o)}}async function ah(r){if(Pl(r))for(const t of r.G_)await t(!0)}async function Ll(r){for(const t of r.G_)await t(!1)}function RE(r,t){const n=Bt(r);n.U_.has(t.targetId)||(n.U_.set(t.targetId,t),Pm(n)?Lm(n):ro(n).c_()&&Um(n,t))}function km(r,t){const n=Bt(r),s=ro(n);n.U_.delete(t),s.c_()&&IE(n,t),n.U_.size===0&&(s.c_()?s.P_():Pl(n)&&n.j_.set("Unknown"))}function Um(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ro(r).y_(t)}function IE(r,t){r.H_.Ne(t),ro(r).w_(t)}function Lm(r){r.H_=new g1({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),ro(r).start(),r.j_.B_()}function Pm(r){return Pl(r)&&!ro(r).u_()&&r.U_.size>0}function Pl(r){return Bt(r).W_.size===0}function CE(r){r.H_=void 0}async function _I(r){r.j_.set("Online")}async function EI(r){r.U_.forEach((t,n)=>{Um(r,t)})}async function TI(r,t){CE(r),Pm(r)?(r.j_.q_(t),Lm(r)):r.j_.set("Unknown")}async function AI(r,t,n){if(r.j_.set("Online"),t instanceof dE&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.U_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.U_.delete(m),o.H_.removeTarget(m))}(r,t)}catch(s){ot(Xa,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await __(r,s)}else if(t instanceof _c?r.H_.We(t):t instanceof fE?r.H_.Ze(t):r.H_.je(t),!n.isEqual(St.min()))try{const s=await SE(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.U_.get(y);E&&u.U_.set(y,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const E=u.U_.get(p);if(!E)return;u.U_.set(p,E.withResumeToken(Be.EMPTY_BYTE_STRING,E.snapshotVersion)),IE(u,p);const b=new zr(E.target,p,y,E.sequenceNumber);Um(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){ot(Xa,"Failed to raise snapshot:",s),await __(r,s)}}async function __(r,t,n){if(!io(t))throw t;r.W_.add(1),await Ll(r),r.j_.set("Offline"),n||(n=()=>SE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ot(Xa,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await ah(r)})}async function E_(r,t){const n=Bt(r);n.asyncQueue.verifyOperationInProgress(),ot(Xa,"RemoteStore received new credentials");const s=Pl(n);n.W_.add(3),await Ll(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await ah(n)}async function SI(r,t){const n=Bt(r);t?(n.W_.delete(2),await ah(n)):t||(n.W_.add(2),await Ll(n),n.j_.set("Unknown"))}function ro(r){return r.J_||(r.J_=function(n,s,o){const u=Bt(n);return u.M_(),new mI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:_I.bind(null,r),No:EI.bind(null,r),Lo:TI.bind(null,r),p_:AI.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Pm(r)?Lm(r):r.j_.set("Unknown")):(await r.J_.stop(),CE(r))})),r.J_}/**
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
 */class zm{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new zm(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pt(tt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function DE(r,t){if(Yi("AsyncQueue",`${t}: ${r}`),io(r))return new pt(tt.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ba{static emptySet(t){return new Ba(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||yt.comparator(n.key,s.key):(n,s)=>yt.comparator(n.key,s.key),this.keyedMap=pl(),this.sortedSet=new fe(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ba)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ba;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class T_{constructor(){this.Z_=new fe(yt.comparator)}track(t){const n=t.doc.key,s=this.Z_.get(n);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(n):t.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):wt():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,s)=>{t.push(s)}),t}}class Za{constructor(t,n,s,o,u,f,m,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new Za(t,n,Ba.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&eh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class bI{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class wI{constructor(){this.queries=A_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=Bt(n),u=o.queries;o.queries=A_(),u.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new pt(tt.ABORTED,"Firestore shutting down"))}}function A_(){return new Hs(r=>nE(r),eh)}async function RI(r,t){const n=Bt(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.na()&&t.ra()&&(s=2):(u=new bI,s=t.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=DE(f,`Initialization of query '${Ua(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.ta.push(t),t.sa(n.onlineState),u.ea&&t.oa(u.ea)&&Bm(n)}async function II(r,t){const n=Bt(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(t);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=t.ra()?0:1:!u.na()&&t.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function CI(r,t){const n=Bt(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&Bm(n)}function DI(r,t,n){const s=Bt(r),o=s.queries.get(t);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(t)}function Bm(r){r.ia.forEach(t=>{t.next()})}var om,S_;(S_=om||(om={}))._a="default",S_.Cache="cache";class OI{constructor(t,n,s){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Za(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=Za.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==om.Cache}}/**
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
 */class OE{constructor(t){this.key=t}}class NE{constructor(t){this.key=t}}class NI{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=jt(),this.mutatedKeys=jt(),this.ya=iE(t),this.wa=new Ba(this.ya)}get Sa(){return this.fa}ba(t,n){const s=n?n.Da:new T_,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,b)=>{const x=o.get(E),B=nh(this.query,b)?b:null,Q=!!x&&this.mutatedKeys.has(x.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let F=!1;x&&B?x.data.isEqual(B.data)?Q!==X&&(s.track({type:3,doc:B}),F=!0):this.va(x,B)||(s.track({type:2,doc:B}),F=!0,(p&&this.ya(B,p)>0||y&&this.ya(B,y)<0)&&(m=!0)):!x&&B?(s.track({type:0,doc:B}),F=!0):x&&!B&&(s.track({type:1,doc:x}),F=!0,(p||y)&&(m=!0)),F&&(B?(f=f.add(B),u=X?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:f,Da:s,ls:m,mutatedKeys:u}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((E,b)=>function(B,Q){const X=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return wt()}};return X(B)-X(Q)}(E.type,b.type)||this.ya(E.doc,b.doc)),this.Ca(s),o=o!=null&&o;const m=n&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new Za(this.query,t.wa,u,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new T_,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=jt(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return t.forEach(s=>{this.pa.has(s)||n.push(new NE(s))}),this.pa.forEach(s=>{t.has(s)||n.push(new OE(s))}),n}Oa(t){this.fa=t.gs,this.pa=jt();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return Za.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const jm="SyncEngine";class MI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class VI{constructor(t){this.key=t,this.Ba=!1}}class xI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Hs(m=>nE(m),eh),this.qa=new Map,this.Qa=new Set,this.$a=new fe(yt.comparator),this.Ka=new Map,this.Ua=new Nm,this.Wa={},this.Ga=new Map,this.za=$a.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function kI(r,t,n=!0){const s=UE(r);let o;const u=s.ka.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await ME(s,t,n,!0),o}async function UI(r,t){const n=UE(r);await ME(n,t,!0,!1)}async function ME(r,t,n,s){const o=await sI(r.localStore,hi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await LI(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&RE(r.remoteStore,o),m}async function LI(r,t,n,s,o){r.Ha=(b,x,B)=>async function(X,F,it,ut){let ht=F.view.ba(it);ht.ls&&(ht=await m_(X.localStore,F.query,!1).then(({documents:M})=>F.view.ba(M,ht)));const bt=ut&&ut.targetChanges.get(F.targetId),mt=ut&&ut.targetMismatches.get(F.targetId)!=null,Ot=F.view.applyChanges(ht,X.isPrimaryClient,bt,mt);return w_(X,F.targetId,Ot.Ma),Ot.snapshot}(r,b,x,B);const u=await m_(r.localStore,t,!0),f=new NI(t,u.gs),m=f.ba(u.documents),p=Ul.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);w_(r,n,y.Ma);const E=new MI(t,n,f);return r.ka.set(t,E),r.qa.has(n)?r.qa.get(n).push(t):r.qa.set(n,[t]),y.snapshot}async function PI(r,t,n){const s=Bt(r),o=s.ka.get(t),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!eh(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await sm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&km(s.remoteStore,o.targetId),lm(s,o.targetId)}).catch(Xc)):(lm(s,o.targetId),await sm(s.localStore,o.targetId,!0))}async function zI(r,t){const n=Bt(r),s=n.ka.get(t),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),km(n.remoteStore,s.targetId))}async function VE(r,t){const n=Bt(r);try{const s=await iI(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Ka.get(u);f&&(ne(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?ne(f.Ba):o.removedDocuments.size>0&&(ne(f.Ba),f.Ba=!1))}),await kE(n,s,t)}catch(s){await Xc(s)}}function b_(r,t,n){const s=Bt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const m=f.view.sa(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Bt(f);p.onlineState=m;let y=!1;p.queries.forEach((E,b)=>{for(const x of b.ta)x.sa(m)&&(y=!0)}),y&&Bm(p)}(s.eventManager,t),o.length&&s.La.p_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function BI(r,t,n){const s=Bt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Ka.get(t),u=o&&o.key;if(u){let f=new fe(yt.comparator);f=f.insert(u,Ke.newNoDocument(u,St.min()));const m=jt().add(u),p=new sh(St.min(),new Map,new fe(zt),f,m);await VE(s,p),s.$a=s.$a.remove(u),s.Ka.delete(t),qm(s)}else await sm(s.localStore,t,!1).then(()=>lm(s,t,n)).catch(Xc)}function lm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(t),r.isPrimaryClient&&r.Ua.br(t).forEach(s=>{r.Ua.containsKey(s)||xE(r,s)})}function xE(r,t){r.Qa.delete(t.path.canonicalString());const n=r.$a.get(t);n!==null&&(km(r.remoteStore,n),r.$a=r.$a.remove(t),r.Ka.delete(n),qm(r))}function w_(r,t,n){for(const s of n)s instanceof OE?(r.Ua.addReference(s.key,t),jI(r,s)):s instanceof NE?(ot(jm,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||xE(r,s.key)):wt()}function jI(r,t){const n=t.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(ot(jm,"New document in limbo: "+n),r.Qa.add(s),qm(r))}function qm(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const n=new yt(le.fromString(t)),s=r.za.next();r.Ka.set(s,new VI(n)),r.$a=r.$a.insert(n,s),RE(r.remoteStore,new zr(hi(eE(n.path)),s,"TargetPurposeLimboResolution",Zc.ae))}}async function kE(r,t,n){const s=Bt(r),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,t,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(y){o.push(y);const b=Vm.Yi(p.targetId,y);u.push(b)}}))}),await Promise.all(f),s.La.p_(o),await async function(p,y){const E=Bt(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>K.forEach(y,x=>K.forEach(x.Hi,B=>E.persistence.referenceDelegate.addReference(b,x.targetId,B)).next(()=>K.forEach(x.Ji,B=>E.persistence.referenceDelegate.removeReference(b,x.targetId,B)))))}catch(b){if(!io(b))throw b;ot(xm,"Failed to update sequence numbers: "+b)}for(const b of y){const x=b.targetId;if(!b.fromCache){const B=E.Ts.get(x),Q=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(Q);E.Ts=E.Ts.insert(x,X)}}}(s.localStore,u))}async function qI(r,t){const n=Bt(r);if(!n.currentUser.isEqual(t)){ot(jm,"User change. New user:",t.toKey());const s=await AE(n.localStore,t);n.currentUser=t,function(u,f){u.Ga.forEach(m=>{m.forEach(p=>{p.reject(new pt(tt.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await kE(n,s.Rs)}}function HI(r,t){const n=Bt(r),s=n.Ka.get(t);if(s&&s.Ba)return jt().add(s.key);{let o=jt();const u=n.qa.get(t);if(!u)return o;for(const f of u){const m=n.ka.get(f);o=o.unionWith(m.view.Sa)}return o}}function UE(r){const t=Bt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=VE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=HI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=BI.bind(null,t),t.La.p_=CI.bind(null,t.eventManager),t.La.Ja=DI.bind(null,t.eventManager),t}class xc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=bE(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return nI(this.persistence,new W1,t.initialUser,this.serializer)}Xa(t){return new TE(Mm.ri,this.serializer)}Za(t){return new oI}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xc.provider={build:()=>new xc};class FI extends xc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){ne(this.persistence.referenceDelegate instanceof Vc);const s=this.persistence.referenceDelegate.garbageCollector;return new P1(s,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new TE(s=>Vc.ri(s,n),this.serializer)}}class um{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>b_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qI.bind(null,this.syncEngine),await SI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wI}()}createDatastore(t){const n=bE(t.databaseInfo.databaseId),s=function(u){return new fI(u)}(t.databaseInfo);return function(u,f,m,p){return new pI(u,f,m,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new vI(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>b_(this.syncEngine,n,0),function(){return y_.D()?new y_:new lI}())}createSyncEngine(t,n){return function(o,u,f,m,p,y,E){const b=new xI(o,u,f,m,p,y);return E&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=Bt(o);ot(Xa,"RemoteStore shutting down."),u.W_.add(5),await Ll(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}um.provider={build:()=>new um};/**
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
 *//**
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
 */class GI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Yi("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const $r="FirestoreClient";class KI{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ge.UNAUTHENTICATED,this.clientId=yR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{ot($r,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ot($r,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=DE(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Cd(r,t){r.asyncQueue.verifyOperationInProgress(),ot($r,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await AE(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function R_(r,t){r.asyncQueue.verifyOperationInProgress();const n=await QI(r);ot($r,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>E_(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>E_(t.remoteStore,o)),r._onlineComponents=t}async function QI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ot($r,"Using user provided OfflineComponentProvider");try{await Cd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===tt.FAILED_PRECONDITION||o.code===tt.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Ga("Error using user provided cache. Falling back to memory cache: "+n),await Cd(r,new xc)}}else ot($r,"Using default OfflineComponentProvider"),await Cd(r,new FI(void 0));return r._offlineComponents}async function YI(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ot($r,"Using user provided OnlineComponentProvider"),await R_(r,r._uninitializedComponentsProvider._online)):(ot($r,"Using default OnlineComponentProvider"),await R_(r,new um))),r._onlineComponents}async function $I(r){const t=await YI(r),n=t.eventManager;return n.onListen=kI.bind(null,t.syncEngine),n.onUnlisten=PI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=UI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=zI.bind(null,t.syncEngine),n}function XI(r,t,n={}){const s=new Vs;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const E=new GI({next:x=>{E.su(),f.enqueueAndForget(()=>II(u,b)),x.fromCache&&p.source==="server"?y.reject(new pt(tt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(x)},error:x=>y.reject(x)}),b=new OI(m,E,{includeMetadataChanges:!0,Ta:!0});return RI(u,b)}(await $I(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */function LE(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const I_=new Map;function ZI(r,t,n,s){if(t===!0&&s===!0)throw new pt(tt.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function C_(r){if(yt.isDocumentKey(r))throw new pt(tt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function JI(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":wt()}function cm(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new pt(tt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=JI(r);throw new pt(tt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */const PE="firestore.googleapis.com",D_=!0;class O_{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new pt(tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PE,this.ssl=D_}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:D_;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=EE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<U1)throw new pt(tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ZI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LE((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new pt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new pt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new pt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hm{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pt(tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new pt(tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O_(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new cR;switch(s.type){case"firstParty":return new mR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pt(tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=I_.get(n);s&&(ot("ComponentProvider","Removing Datastore"),I_.delete(n),s.terminate())}(this),Promise.resolve()}}function WI(r,t,n,s={}){var o;const u=(r=cm(r,Hm))._getSettings(),f=`${t}:${n}`;if(u.host!==PE&&u.host!==f&&Ga("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:f,ssl:!1})),s.mockUserToken){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=Ge.MOCK_USER;else{m=zb(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new pt(tt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ge(y)}r._authCredentials=new hR(new q0(m,p))}}/**
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
 */class oh{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new oh(this.firestore,t,this._query)}}class so{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ja(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new so(this.firestore,t,this._key)}}class ja extends oh{constructor(t,n,s){super(t,n,eE(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new so(this.firestore,null,new yt(t))}withConverter(t){return new ja(this.firestore,t,this._path)}}function tC(r,t,...n){if(r=cn(r),r instanceof Hm){const s=le.fromString(t,...n);return C_(s),new ja(r,null,s)}{if(!(r instanceof so||r instanceof ja))throw new pt(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(le.fromString(t,...n));return C_(s),new ja(r.firestore,null,s)}}/**
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
 */const N_="AsyncQueue";class M_{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new wE(this,"async_queue_retry"),this.Su=()=>{const s=Id();s&&ot(N_,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=t;const n=Id();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Id();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Vs;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!io(t))throw t;ot(N_,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw Yi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(t,n,s){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const o=zm.createAndSchedule(this,t,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&wt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class zE extends Hm{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new M_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new M_(t),this._firestoreClient=void 0,await t}}}function eC(r,t){const n=typeof r=="object"?r:$c(),s=typeof r=="string"?r:Cc,o=Xr(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=R0("firestore");u&&WI(o,...u)}return o}function nC(r){if(r._terminated)throw new pt(tt.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||iC(r),r._firestoreClient}function iC(r){var t,n,s;const o=r._freezeSettings(),u=function(m,p,y,E){return new OR(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,LE(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new KI(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class kc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kc(Be.fromBase64String(t))}catch(n){throw new pt(tt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new kc(Be.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class BE{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new pt(tt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class rC{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new pt(tt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new pt(tt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return zt(this._lat,t._lat)||zt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}const aC=new RegExp("[~\\*/\\[\\]]");function oC(r,t,n){if(t.search(aC)>=0)throw V_(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new BE(...t.split("."))._internalPath}catch{throw V_(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function V_(r,t,n,s,o){let u=`Function ${t}() called with invalid data`;u+=". ";let f="";return new pt(tt.INVALID_ARGUMENT,u+r+f)}/**
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
 */class jE{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new so(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(qE("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lC extends jE{data(){return super.data()}}function qE(r,t){return typeof t=="string"?oC(r,t):t instanceof BE?t._internalPath:t._delegate._internalPath}/**
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
 */function uC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new pt(tt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cC{convertValue(t,n="none"){switch(Qr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return he(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Kr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw wt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return kl(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[$d].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>he(f.doubleValue));return new sC(u)}convertGeoPoint(t){return new rC(he(t.latitude),he(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Wc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Dl(t));default:return null}}convertTimestamp(t){const n=Gr(t);return new ln(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=le.fromString(t);ne(_E(s));const o=new Ol(s.get(1),s.get(3)),u=new yt(s.popFirst(5));return o.isEqual(n)||Yi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */class mc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hC extends jE{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(qE("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ec extends hC{data(t={}){return super.data(t)}}class fC{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new mc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ec(this._firestore,this._userDataWriter,s.key,s,new mc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new pt(tt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new Ec(o._firestore,o._userDataWriter,m.doc.key,m.doc,new mc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Ec(o._firestore,o._userDataWriter,m.doc.key,m.doc,new mc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:dC(m.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return wt()}}class mC extends cC{constructor(t){super(),this.firestore=t}convertBytes(t){return new kc(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new so(this.firestore,null,n)}}function gC(r){r=cm(r,oh);const t=cm(r.firestore,zE),n=nC(t),s=new mC(t);return uC(r._query),XI(n,r._query).then(o=>new fC(t,s,r,o))}(function(t,n=!0){(function(o){no=o})(eo),Kn(new Ln("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new zE(new fR(s.getProvider("auth-internal")),new gR(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pt(tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ol(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),on(zv,Bv,t),on(zv,Bv,"esm2017")})();var pC="firebase",yC="11.3.1";/**
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
 */on(pC,yC,"app");const HE="@firebase/installations",Fm="0.6.12";/**
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
 */const FE=1e4,GE=`w:${Fm}`,KE="FIS_v2",vC="https://firebaseinstallations.googleapis.com/v1",_C=60*60*1e3,EC="installations",TC="Installations";/**
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
 */const AC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ls=new qs(EC,TC,AC);function QE(r){return r instanceof Pn&&r.code.includes("request-failed")}/**
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
 */function YE({projectId:r}){return`${vC}/projects/${r}/installations`}function $E(r){return{token:r.token,requestStatus:2,expiresIn:bC(r.expiresIn),creationTime:Date.now()}}async function XE(r,t){const s=(await t.json()).error;return Ls.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ZE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function SC(r,{refreshToken:t}){const n=ZE(r);return n.append("Authorization",wC(t)),n}async function JE(r){const t=await r();return t.status>=500&&t.status<600?r():t}function bC(r){return Number(r.replace("s","000"))}function wC(r){return`${KE} ${r}`}/**
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
 */async function RC({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=YE(r),o=ZE(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:KE,appId:r.appId,sdkVersion:GE},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await JE(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:$E(y.authToken)}}else throw await XE("Create Installation",p)}/**
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
 */function WE(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function IC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const CC=/^[cdef][\w-]{21}$/,hm="";function DC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=OC(r);return CC.test(n)?n:hm}catch{return hm}}function OC(r){return IC(r).substr(0,22)}/**
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
 */function lh(r){return`${r.appName}!${r.appId}`}/**
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
 */const tT=new Map;function eT(r,t){const n=lh(r);nT(n,t),NC(n,t)}function nT(r,t){const n=tT.get(r);if(n)for(const s of n)s(t)}function NC(r,t){const n=MC();n&&n.postMessage({key:r,fid:t}),VC()}let Ns=null;function MC(){return!Ns&&"BroadcastChannel"in self&&(Ns=new BroadcastChannel("[Firebase] FID Change"),Ns.onmessage=r=>{nT(r.data.key,r.data.fid)}),Ns}function VC(){tT.size===0&&Ns&&(Ns.close(),Ns=null)}/**
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
 */const xC="firebase-installations-database",kC=1,Ps="firebase-installations-store";let Dd=null;function Gm(){return Dd||(Dd=M0(xC,kC,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ps)}}})),Dd}async function Uc(r,t){const n=lh(r),o=(await Gm()).transaction(Ps,"readwrite"),u=o.objectStore(Ps),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&eT(r,t.fid),t}async function iT(r){const t=lh(r),s=(await Gm()).transaction(Ps,"readwrite");await s.objectStore(Ps).delete(t),await s.done}async function uh(r,t){const n=lh(r),o=(await Gm()).transaction(Ps,"readwrite"),u=o.objectStore(Ps),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&eT(r,m.fid),m}/**
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
 */async function Km(r){let t;const n=await uh(r.appConfig,s=>{const o=UC(s),u=LC(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===hm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function UC(r){const t=r||{fid:DC(),registrationStatus:0};return rT(t)}function LC(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ls.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=PC(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:zC(r)}:{installationEntry:t}}async function PC(r,t){try{const n=await RC(r,t);return Uc(r.appConfig,n)}catch(n){throw QE(n)&&n.customData.serverCode===409?await iT(r.appConfig):await Uc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function zC(r){let t=await x_(r.appConfig);for(;t.registrationStatus===1;)await WE(100),t=await x_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Km(r);return s||n}return t}function x_(r){return uh(r,t=>{if(!t)throw Ls.create("installation-not-found");return rT(t)})}function rT(r){return BC(r)?{fid:r.fid,registrationStatus:0}:r}function BC(r){return r.registrationStatus===1&&r.registrationTime+FE<Date.now()}/**
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
 */async function jC({appConfig:r,heartbeatServiceProvider:t},n){const s=qC(r,n),o=SC(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:GE,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await JE(()=>fetch(s,m));if(p.ok){const y=await p.json();return $E(y)}else throw await XE("Generate Auth Token",p)}function qC(r,{fid:t}){return`${YE(r)}/${t}/authTokens:generate`}/**
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
 */async function Qm(r,t=!1){let n;const s=await uh(r.appConfig,u=>{if(!sT(u))throw Ls.create("not-registered");const f=u.authToken;if(!t&&GC(f))return u;if(f.requestStatus===1)return n=HC(r,t),u;{if(!navigator.onLine)throw Ls.create("app-offline");const m=QC(u);return n=FC(r,m),m}});return n?await n:s.authToken}async function HC(r,t){let n=await k_(r.appConfig);for(;n.authToken.requestStatus===1;)await WE(100),n=await k_(r.appConfig);const s=n.authToken;return s.requestStatus===0?Qm(r,t):s}function k_(r){return uh(r,t=>{if(!sT(t))throw Ls.create("not-registered");const n=t.authToken;return YC(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function FC(r,t){try{const n=await jC(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Uc(r.appConfig,s),n}catch(n){if(QE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await iT(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Uc(r.appConfig,s)}throw n}}function sT(r){return r!==void 0&&r.registrationStatus===2}function GC(r){return r.requestStatus===2&&!KC(r)}function KC(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+_C}function QC(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function YC(r){return r.requestStatus===1&&r.requestTime+FE<Date.now()}/**
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
 */async function $C(r){const t=r,{installationEntry:n,registrationPromise:s}=await Km(t);return s?s.catch(console.error):Qm(t).catch(console.error),n.fid}/**
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
 */async function XC(r,t=!1){const n=r;return await ZC(n),(await Qm(n,t)).token}async function ZC(r){const{registrationPromise:t}=await Km(r);t&&await t}/**
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
 */function JC(r){if(!r||!r.options)throw Od("App Configuration");if(!r.name)throw Od("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Od(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Od(r){return Ls.create("missing-app-config-values",{valueName:r})}/**
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
 */const aT="installations",WC="installations-internal",tD=r=>{const t=r.getProvider("app").getImmediate(),n=JC(t),s=Xr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},eD=r=>{const t=r.getProvider("app").getImmediate(),n=Xr(t,aT).getImmediate();return{getId:()=>$C(n),getToken:o=>XC(n,o)}};function nD(){Kn(new Ln(aT,tD,"PUBLIC")),Kn(new Ln(WC,eD,"PRIVATE"))}nD();on(HE,Fm);on(HE,Fm,"esm2017");/**
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
 */const Lc="analytics",iD="firebase_id",rD="origin",sD=60*1e3,aD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ym="https://www.googletagmanager.com/gtag/js";/**
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
 */const un=new Yc("@firebase/analytics");/**
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
 */const oD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vn=new qs("analytics","Analytics",oD);/**
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
 */function lD(r){if(!r.startsWith(Ym)){const t=vn.create("invalid-gtag-resource",{gtagURL:r});return un.warn(t.message),""}return r}function oT(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function uD(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function cD(r,t){const n=uD("firebase-js-sdk-policy",{createScriptURL:lD}),s=document.createElement("script"),o=`${Ym}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function hD(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function fD(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const p=(await oT(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(m){un.error(m)}r("config",o,u)}async function dD(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await oT(n);for(const p of f){const y=m.find(b=>b.measurementId===p),E=y&&t[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){un.error(u)}}function mD(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await dD(r,t,n,m,p)}else if(u==="config"){const[m,p]=f;await fD(r,t,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){un.error(m)}}return o}function gD(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=mD(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function pD(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ym)&&n.src.includes(r))return n;return null}/**
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
 */const yD=30,vD=1e3;class _D{constructor(t={},n=vD){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const lT=new _D;function ED(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function TD(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:ED(s)},u=aD.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(m=p.error.message)}catch{}throw vn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function AD(r,t=lT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw vn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw vn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new wD;return setTimeout(async()=>{m.abort()},sD),uT({appId:s,apiKey:o,measurementId:u},f,m,t)}async function uT(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=lT){var u;const{appId:f,measurementId:m}=r;try{await SD(s,t)}catch(p){if(m)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await TD(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!bD(y)){if(o.deleteThrottleMetadata(f),m)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?Dv(n,o.intervalMillis,yD):Dv(n,o.intervalMillis),b={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,b),un.debug(`Calling attemptFetch again in ${E} millis`),uT(r,b,s,o)}}function SD(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(vn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function bD(r){if(!(r instanceof Pn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class wD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function RD(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
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
 */async function ID(){if(Em())try{await Tm()}catch(r){return un.warn(vn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return un.warn(vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CD(r,t,n,s,o,u,f){var m;const p=AD(r);p.then(B=>{n[B.measurementId]=B.appId,r.options.measurementId&&B.measurementId!==r.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${B.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(B=>un.error(B)),t.push(p);const y=ID().then(B=>{if(B)return s.getId()}),[E,b]=await Promise.all([p,y]);pD(u)||cD(u,E.measurementId),o("js",new Date);const x=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return x[rD]="firebase",x.update=!0,b!=null&&(x[iD]=b),o("config",E.measurementId,x),E.measurementId}/**
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
 */class DD{constructor(t){this.app=t}_delete(){return delete Al[this.app.options.appId],Promise.resolve()}}let Al={},U_=[];const L_={};let Nd="dataLayer",OD="gtag",P_,cT,z_=!1;function ND(){const r=[];if(_m()&&r.push("This is a browser extension environment."),D0()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=vn.create("invalid-analytics-context",{errorInfo:t});un.warn(n.message)}}function MD(r,t,n){ND();const s=r.options.appId;if(!s)throw vn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vn.create("no-api-key");if(Al[s]!=null)throw vn.create("already-exists",{id:s});if(!z_){hD(Nd);const{wrappedGtag:u,gtagCore:f}=gD(Al,U_,L_,Nd,OD);cT=u,P_=f,z_=!0}return Al[s]=CD(r,U_,L_,t,P_,Nd,n),new DD(r)}function VD(r=$c()){r=cn(r);const t=Xr(r,Lc);return t.isInitialized()?t.getImmediate():xD(r)}function xD(r,t={}){const n=Xr(r,Lc);if(n.isInitialized()){const o=n.getImmediate();if(Rl(t,n.getOptions()))return o;throw vn.create("already-initialized")}return n.initialize({options:t})}async function kD(){if(_m()||!D0()||!Em())return!1;try{return await Tm()}catch{return!1}}function UD(r,t,n,s){r=cn(r),RD(cT,Al[r.app.options.appId],t,n,s).catch(o=>un.error(o))}const B_="@firebase/analytics",j_="0.10.11";function LD(){Kn(new Ln(Lc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return MD(s,o,n)},"PUBLIC")),Kn(new Ln("analytics-internal",r,"PRIVATE")),on(B_,j_),on(B_,j_,"esm2017");function r(t){try{const n=t.getProvider(Lc).getImmediate();return{logEvent:(s,o,u)=>UD(n,s,o,u)}}catch(n){throw vn.create("interop-component-reg-failed",{reason:n})}}}LD();/**
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
 */const PD="type.googleapis.com/google.protobuf.Int64Value",zD="type.googleapis.com/google.protobuf.UInt64Value";function hT(r,t){const n={};for(const s in r)r.hasOwnProperty(s)&&(n[s]=t(r[s]));return n}function Pc(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(t=>Pc(t));if(typeof r=="function"||typeof r=="object")return hT(r,t=>Pc(t));throw new Error("Data cannot be encoded in JSON: "+r)}function Ja(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case PD:case zD:{const t=Number(r.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+r);return t}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(t=>Ja(t)):typeof r=="function"||typeof r=="object"?hT(r,t=>Ja(t)):r}/**
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
 */const $m="functions";/**
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
 */const q_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class an extends Pn{constructor(t,n,s){super(`${$m}/${t}`,n||""),this.details=s,Object.setPrototypeOf(this,an.prototype)}}function BD(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function zc(r,t){let n=BD(r),s=n,o;try{const u=t&&t.error;if(u){const f=u.status;if(typeof f=="string"){if(!q_[f])return new an("internal","internal");n=q_[f],s=f}const m=u.message;typeof m=="string"&&(s=m),o=u.details,o!==void 0&&(o=Ja(o))}}catch{}return n==="ok"?null:new an(n,s,o)}/**
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
 */class jD{constructor(t,n,s,o){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Un(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||n.get().then(u=>this.auth=u,()=>{}),this.messaging||s.get().then(u=>this.messaging=u,()=>{}),this.appCheck||o==null||o.get().then(u=>this.appCheck=u,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(t){const n=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(t);return{authToken:n,messagingToken:s,appCheckToken:o}}}/**
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
 */const fm="us-central1",qD=/^data: (.*?)(?:\n|$)/;function HD(r){let t=null;return{promise:new Promise((n,s)=>{t=setTimeout(()=>{s(new an("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{t&&clearTimeout(t)}}}class FD{constructor(t,n,s,o,u=fm,f=(...m)=>fetch(...m)){this.app=t,this.fetchImpl=f,this.emulatorOrigin=null,this.contextProvider=new jD(t,n,s,o),this.cancelAllRequests=new Promise(m=>{this.deleteService=()=>Promise.resolve(m())});try{const m=new URL(u);this.customDomain=m.origin+(m.pathname==="/"?"":m.pathname),this.region=fm}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function GD(r,t,n){r.emulatorOrigin=`http://${t}:${n}`}function KD(r,t,n){const s=o=>YD(r,t,o,{});return s.stream=(o,u)=>XD(r,t,o,u),s}async function QD(r,t,n,s){n["Content-Type"]="application/json";let o;try{o=await s(r,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let u=null;try{u=await o.json()}catch{}return{status:o.status,json:u}}async function fT(r,t){const n={},s=await r.contextProvider.getContext(t.limitedUseAppCheckTokens);return s.authToken&&(n.Authorization="Bearer "+s.authToken),s.messagingToken&&(n["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=s.appCheckToken),n}function YD(r,t,n,s){const o=r._url(t);return $D(r,o,n,s)}async function $D(r,t,n,s){n=Pc(n);const o={data:n},u=await fT(r,s),f=s.timeout||7e4,m=HD(f),p=await Promise.race([QD(t,o,u,r.fetchImpl),m.promise,r.cancelAllRequests]);if(m.cancel(),!p)throw new an("cancelled","Firebase Functions instance was deleted.");const y=zc(p.status,p.json);if(y)throw y;if(!p.json)throw new an("internal","Response is not valid JSON object.");let E=p.json.data;if(typeof E>"u"&&(E=p.json.result),typeof E>"u")throw new an("internal","Response is missing data field.");return{data:Ja(E)}}function XD(r,t,n,s){const o=r._url(t);return ZD(r,o,n,s||{})}async function ZD(r,t,n,s){var o;n=Pc(n);const u={data:n},f=await fT(r,s);f["Content-Type"]="application/json",f.Accept="text/event-stream";let m;try{m=await r.fetchImpl(t,{method:"POST",body:JSON.stringify(u),headers:f,signal:s==null?void 0:s.signal})}catch(B){if(B instanceof Error&&B.name==="AbortError"){const X=new an("cancelled","Request was cancelled.");return{data:Promise.reject(X),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(X)}}}}}}const Q=zc(0,null);return{data:Promise.reject(Q),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(Q)}}}}}}let p,y;const E=new Promise((B,Q)=>{p=B,y=Q});(o=s==null?void 0:s.signal)===null||o===void 0||o.addEventListener("abort",()=>{const B=new an("cancelled","Request was cancelled.");y(B)});const b=m.body.getReader(),x=JD(b,p,y,s==null?void 0:s.signal);return{stream:{[Symbol.asyncIterator](){const B=x.getReader();return{async next(){const{value:Q,done:X}=await B.read();return{value:Q,done:X}},async return(){return await B.cancel(),{done:!0,value:void 0}}}}},data:E}}function JD(r,t,n,s){const o=(f,m)=>{const p=f.match(qD);if(!p)return;const y=p[1];try{const E=JSON.parse(y);if("result"in E){t(Ja(E.result));return}if("message"in E){m.enqueue(Ja(E.message));return}if("error"in E){const b=zc(0,E);m.error(b),n(b);return}}catch(E){if(E instanceof an){m.error(E),n(E);return}}},u=new TextDecoder;return new ReadableStream({start(f){let m="";return p();async function p(){if(s!=null&&s.aborted){const y=new an("cancelled","Request was cancelled");return f.error(y),n(y),Promise.resolve()}try{const{value:y,done:E}=await r.read();if(E){m.trim()&&o(m.trim(),f),f.close();return}if(s!=null&&s.aborted){const x=new an("cancelled","Request was cancelled");f.error(x),n(x),await r.cancel();return}m+=u.decode(y,{stream:!0});const b=m.split(`
`);m=b.pop()||"";for(const x of b)x.trim()&&o(x.trim(),f);return p()}catch(y){const E=y instanceof an?y:zc(0,null);f.error(E),n(E)}}},cancel(){return r.cancel()}})}const H_="@firebase/functions",F_="0.12.2";/**
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
 */const WD="auth-internal",t2="app-check-internal",e2="messaging-internal";function n2(r){const t=(n,{instanceIdentifier:s})=>{const o=n.getProvider("app").getImmediate(),u=n.getProvider(WD),f=n.getProvider(e2),m=n.getProvider(t2);return new FD(o,u,f,m,s)};Kn(new Ln($m,t,"PUBLIC").setMultipleInstances(!0)),on(H_,F_,r),on(H_,F_,"esm2017")}/**
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
 */function i2(r=$c(),t=fm){const s=Xr(cn(r),$m).getImmediate({identifier:t}),o=R0("functions");return o&&r2(s,...o),s}function r2(r,t,n){GD(cn(r),t,n)}function Md(r,t,n){return KD(cn(r),t)}n2();const s2={apiKey:"AIzaSyD5ALf922ZonYrURoAECZT_OWMPJwR1h8E",authDomain:"rankyale.firebaseapp.com",projectId:"rankyale",storageBucket:"rankyale.firebasestorage.app",messagingSenderId:"463872924342",appId:"1:463872924342:web:7266b4ff9f8b80eb73e417",measurementId:"G-L3PLKNTLJ1"},Xm=V0(s2),a2=eC(Xm),Vd=i2(Xm);typeof window<"u"&&kD().then(r=>r&&VD(Xm));const o2=async r=>{const t=tC(a2,"categories",r,"entries");try{return(await gC(t)).docs.map(s=>({id:s.id,...s.data()}))}catch(n){return console.error(`Error retrieving collection ${r}:`,n),[]}};function Zm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function dT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l2=dT,mT=new qs("auth","Firebase",dT());/**
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
 */const Bc=new Yc("@firebase/auth");function u2(r,...t){Bc.logLevel<=Vt.WARN&&Bc.warn(`Auth (${eo}): ${r}`,...t)}function Tc(r,...t){Bc.logLevel<=Vt.ERROR&&Bc.error(`Auth (${eo}): ${r}`,...t)}/**
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
 */function gi(r,...t){throw Wm(r,...t)}function Gn(r,...t){return Wm(r,...t)}function Jm(r,t,n){const s=Object.assign(Object.assign({},l2()),{[t]:n});return new qs("auth","Firebase",s).create(t,{appName:r.name})}function ks(r){return Jm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function c2(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&gi(r,"argument-error"),Jm(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return mT.create(r,...t)}function _t(r,t,...n){if(!r)throw Wm(t,...n)}function Fi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Tc(t),new Error(t)}function $i(r,t){r||Fi(t)}/**
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
 */function dm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function h2(){return G_()==="http:"||G_()==="https:"}function G_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function f2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h2()||_m()||"connection"in navigator)?navigator.onLine:!0}function d2(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class zl{constructor(t,n){this.shortDelay=t,this.longDelay=n,$i(n>t,"Short delay should be less than long delay!"),this.isMobile=Bb()||Hb()}get(){return f2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tg(r,t){$i(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class gT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const m2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const g2=new zl(3e4,6e4);function eg(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function ao(r,t,n,s,o={}){return pT(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=xl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},u);return qb()||(y.referrerPolicy="no-referrer"),gT.fetch()(yT(r,r.config.apiHost,n,m),y)})}async function pT(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},m2),t);try{const o=new y2(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw gc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw gc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw gc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw gc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Jm(r,E,y);gi(r,E)}}catch(o){if(o instanceof Pn)throw o;gi(r,"network-request-failed",{message:String(o)})}}async function p2(r,t,n,s,o={}){const u=await ao(r,t,n,s,o);return"mfaPendingCredential"in u&&gi(r,"multi-factor-auth-required",{_serverResponse:u}),u}function yT(r,t,n,s){const o=`${t}${n}?${s}`;return r.config.emulator?tg(r.config,o):`${r.config.apiScheme}://${o}`}class y2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),g2.get())})}}function gc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Gn(r,t,s);return o.customData._tokenResponse=n,o}/**
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
 */async function v2(r,t){return ao(r,"POST","/v1/accounts:delete",t)}async function vT(r,t){return ao(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Sl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function _2(r,t=!1){const n=cn(r),s=await n.getIdToken(t),o=ng(s);_t(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Sl(xd(o.auth_time)),issuedAtTime:Sl(xd(o.iat)),expirationTime:Sl(xd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function xd(r){return Number(r)*1e3}function ng(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const o=b0(n);return o?JSON.parse(o):(Tc("Failed to decode base64 JWT payload"),null)}catch(o){return Tc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function K_(r){const t=ng(r);return _t(t,"internal-error"),_t(typeof t.exp<"u","internal-error"),_t(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ml(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Pn&&E2(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function E2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class T2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sl(this.lastLoginAt),this.creationTime=Sl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Ml(r,vT(n,{idToken:s}));_t(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?_T(u.providerUserInfo):[],m=S2(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?y:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new mm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,b)}async function A2(r){const t=cn(r);await jc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function S2(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function _T(r){return r.map(t=>{var{providerId:n}=t,s=Zm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function b2(r,t){const n=await pT(r,{},async()=>{const s=xl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=yT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",gT.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function w2(r,t){return ao(r,"POST","/v2/accounts:revokeToken",eg(r,t))}/**
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
 */class qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_t(t.idToken,"internal-error"),_t(typeof t.idToken<"u","internal-error"),_t(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):K_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){_t(t.length!==0,"internal-error");const n=K_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_t(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await b2(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new qa;return s&&(_t(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(_t(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(_t(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qa,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
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
 */function Vr(r,t){_t(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Gi{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Zm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new mm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Ml(this,this.stsTokenManager.getToken(this.auth,t));return _t(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return _2(this,t)}reload(){return A2(this)}_assign(t){this!==t&&(_t(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Gi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){_t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await jc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(ks(this.auth));const t=await this.getIdToken();return await Ml(this,v2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,p,y,E;const b=(s=n.displayName)!==null&&s!==void 0?s:void 0,x=(o=n.email)!==null&&o!==void 0?o:void 0,B=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(f=n.photoURL)!==null&&f!==void 0?f:void 0,X=(m=n.tenantId)!==null&&m!==void 0?m:void 0,F=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,it=(y=n.createdAt)!==null&&y!==void 0?y:void 0,ut=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ht,emailVerified:bt,isAnonymous:mt,providerData:Ot,stsTokenManager:M}=n;_t(ht&&M,t,"internal-error");const I=qa.fromJSON(this.name,M);_t(typeof ht=="string",t,"internal-error"),Vr(b,t.name),Vr(x,t.name),_t(typeof bt=="boolean",t,"internal-error"),_t(typeof mt=="boolean",t,"internal-error"),Vr(B,t.name),Vr(Q,t.name),Vr(X,t.name),Vr(F,t.name),Vr(it,t.name),Vr(ut,t.name);const S=new Gi({uid:ht,auth:t,email:x,emailVerified:bt,displayName:b,isAnonymous:mt,photoURL:Q,phoneNumber:B,tenantId:X,stsTokenManager:I,createdAt:it,lastLoginAt:ut});return Ot&&Array.isArray(Ot)&&(S.providerData=Ot.map(C=>Object.assign({},C))),F&&(S._redirectEventId=F),S}static async _fromIdTokenResponse(t,n,s=!1){const o=new qa;o.updateFromServerResponse(n);const u=new Gi({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await jc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];_t(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?_T(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new qa;m.updateFromIdToken(s);const p=new Gi({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new mm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
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
 */const Q_=new Map;function Ki(r){$i(r instanceof Function,"Expected a class definition");let t=Q_.get(r);return t?($i(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Q_.set(r,t),t)}/**
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
 */class ET{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ET.type="NONE";const Y_=ET;/**
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
 */function Ac(r,t,n){return`firebase:${r}:${t}:${n}`}class Ha{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ac(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ac("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Gi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ha(Ki(Y_),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Ki(Y_);const f=Ac(s,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){const b=Gi._fromJSON(t,E);y!==u&&(m=b),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ha(u,t,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Ha(u,t,s))}}/**
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
 */function $_(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(TT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(RT(t))return"Blackberry";if(IT(t))return"Webos";if(AT(t))return"Safari";if((t.includes("chrome/")||ST(t))&&!t.includes("edge/"))return"Chrome";if(wT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function TT(r=Qe()){return/firefox\//i.test(r)}function AT(r=Qe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ST(r=Qe()){return/crios\//i.test(r)}function bT(r=Qe()){return/iemobile/i.test(r)}function wT(r=Qe()){return/android/i.test(r)}function RT(r=Qe()){return/blackberry/i.test(r)}function IT(r=Qe()){return/webos/i.test(r)}function ig(r=Qe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function R2(r=Qe()){var t;return ig(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function I2(){return Fb()&&document.documentMode===10}function CT(r=Qe()){return ig(r)||wT(r)||IT(r)||RT(r)||/windows phone/i.test(r)||bT(r)}/**
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
 */function DT(r,t=[]){let n;switch(r){case"Browser":n=$_(Qe());break;case"Worker":n=`${$_(Qe())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${s}`}/**
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
 */class C2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const p=t(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function D2(r,t={}){return ao(r,"GET","/v2/passwordPolicy",eg(r,t))}/**
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
 */const O2=6;class N2{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:O2,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class M2{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new X_(this),this.idTokenSubscription=new X_(this),this.beforeStateQueue=new C2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Ha.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await vT(this,{idToken:t}),s=await Gi._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Un(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await jc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=d2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Un(this.app))return Promise.reject(ks(this));const n=t?cn(t):null;return n&&_t(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&_t(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(ks(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Un(this.app)?Promise.reject(ks(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await D2(this),n=new N2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new qs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await w2(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ki(t)||this._popupRedirectResolver;_t(n,this,"argument-error"),this.redirectPersistenceManager=await Ha.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_t(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=DT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&u2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ch(r){return cn(r)}class X_{constructor(t){this.auth=t,this.observer=null,this.addObserver=Xb(n=>this.observer=n)}get next(){return _t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V2(r){rg=r}function x2(r){return rg.loadJS(r)}function k2(){return rg.gapiScript}function U2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function L2(r,t){const n=Xr(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Rl(u,t??{}))return o;gi(o,"already-initialized")}return n.initialize({options:t})}function P2(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ki);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function z2(r,t,n){const s=ch(r);_t(s._canInitEmulator,s,"emulator-config-failed"),_t(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=OT(t),{host:f,port:m}=B2(t),p=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${f}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),j2()}function OT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function B2(r){const t=OT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Z_(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Z_(f)}}}function Z_(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function j2(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class NT{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Fi("not implemented")}_getIdTokenResponse(t){return Fi("not implemented")}_linkToIdToken(t,n){return Fi("not implemented")}_getReauthenticationResolver(t){return Fi("not implemented")}}/**
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
 */async function Fa(r,t){return p2(r,"POST","/v1/accounts:signInWithIdp",eg(r,t))}/**
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
 */const q2="http://localhost";class zs extends NT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):gi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Zm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new zs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Fa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Fa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fa(t,n)}buildRequest(){const t={requestUri:q2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=xl(n)}return t}}/**
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
 */class sg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bl extends sg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class xr extends Bl{constructor(){super("facebook.com")}static credential(t){return zs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xr.credentialFromTaggedObject(t)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xr.credential(t.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
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
 */class Hi extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zs._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Hi.credentialFromTaggedObject(t)}static credentialFromError(t){return Hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Hi.credential(n,s)}catch{return null}}}Hi.GOOGLE_SIGN_IN_METHOD="google.com";Hi.PROVIDER_ID="google.com";/**
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
 */class kr extends Bl{constructor(){super("github.com")}static credential(t){return zs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kr.credential(t.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class Ur extends Bl{constructor(){super("twitter.com")}static credential(t,n){return zs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Ur.credential(n,s)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
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
 */class Wa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Gi._fromIdTokenResponse(t,s,o),f=J_(s);return new Wa({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=J_(s);return new Wa({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function J_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class qc extends Pn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new qc(t,n,s,o)}}function MT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(r,u,t,s):u})}async function H2(r,t,n=!1){const s=await Ml(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Wa._forOperation(r,"link",s)}/**
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
 */async function F2(r,t,n=!1){const{auth:s}=r;if(Un(s.app))return Promise.reject(ks(s));const o="reauthenticate";try{const u=await Ml(r,MT(s,o,t,r),n);_t(u.idToken,s,"internal-error");const f=ng(u.idToken);_t(f,s,"internal-error");const{sub:m}=f;return _t(r.uid===m,s,"user-mismatch"),Wa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&gi(s,"user-mismatch"),u}}/**
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
 */async function G2(r,t,n=!1){if(Un(r.app))return Promise.reject(ks(r));const s="signIn",o=await MT(r,s,t),u=await Wa._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function K2(r,t,n,s){return cn(r).onIdTokenChanged(t,n,s)}function Q2(r,t,n){return cn(r).beforeAuthStateChanged(t,n)}function Y2(r,t,n,s){return cn(r).onAuthStateChanged(t,n,s)}function kd(r){return cn(r).signOut()}const Hc="__sak";/**
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
 */class VT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hc,"1"),this.storage.removeItem(Hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $2=1e3,X2=10;class xT extends VT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);I2()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,X2):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},$2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}xT.type="LOCAL";const Z2=xT;/**
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
 */class kT extends VT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}kT.type="SESSION";const UT=kT;/**
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
 */function J2(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new hh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await J2(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
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
 */function ag(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class W2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=ag("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const x=b;if(x.data.eventId===y)switch(x.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function fi(){return window}function tO(r){fi().location.href=r}/**
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
 */function LT(){return typeof fi().WorkerGlobalScope<"u"&&typeof fi().importScripts=="function"}async function eO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nO(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function iO(){return LT()?self:null}/**
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
 */const PT="firebaseLocalStorageDb",rO=1,Fc="firebaseLocalStorage",zT="fbase_key";class jl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fh(r,t){return r.transaction([Fc],t?"readwrite":"readonly").objectStore(Fc)}function sO(){const r=indexedDB.deleteDatabase(PT);return new jl(r).toPromise()}function gm(){const r=indexedDB.open(PT,rO);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Fc,{keyPath:zT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Fc)?t(s):(s.close(),await sO(),t(await gm()))})})}async function W_(r,t,n){const s=fh(r,!0).put({[zT]:t,value:n});return new jl(s).toPromise()}async function aO(r,t){const n=fh(r,!1).get(t),s=await new jl(n).toPromise();return s===void 0?null:s.value}function t0(r,t){const n=fh(r,!0).delete(t);return new jl(n).toPromise()}const oO=800,lO=3;class BT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>lO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(iO()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await eO(),!this.activeServiceWorker)return;this.sender=new W2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||nO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await gm();return await W_(t,Hc,"1"),await t0(t,Hc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>W_(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>aO(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>t0(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=fh(o,!1).getAll();return new jl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BT.type="LOCAL";const uO=BT;new zl(3e4,6e4);/**
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
 */function jT(r,t){return t?Ki(t):(_t(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class og extends NT{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function cO(r){return G2(r.auth,new og(r),r.bypassAuthState)}function hO(r){const{auth:t,user:n}=r;return _t(n,t,"internal-error"),F2(n,new og(r),r.bypassAuthState)}async function fO(r){const{auth:t,user:n}=r;return _t(n,t,"internal-error"),H2(n,new og(r),r.bypassAuthState)}/**
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
 */class qT{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return cO;case"linkViaPopup":case"linkViaRedirect":return fO;case"reauthViaPopup":case"reauthViaRedirect":return hO;default:gi(this.auth,"internal-error")}}resolve(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dO=new zl(2e3,1e4);async function mO(r,t,n){if(Un(r.app))return Promise.reject(Gn(r,"operation-not-supported-in-this-environment"));const s=ch(r);c2(r,t,sg);const o=jT(s,n);return new Ms(s,"signInViaPopup",t,o).executeNotNull()}class Ms extends qT{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _t(t,this.auth,"internal-error"),t}async onExecution(){$i(this.filter.length===1,"Popup operations only handle one event");const t=ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,dO.get())};t()}}Ms.currentPopupAction=null;/**
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
 */const gO="pendingRedirect",Sc=new Map;class pO extends qT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Sc.get(this.auth._key());if(!t){try{const s=await yO(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Sc.set(this.auth._key(),t)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yO(r,t){const n=EO(t),s=_O(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function vO(r,t){Sc.set(r._key(),t)}function _O(r){return Ki(r._redirectPersistence)}function EO(r){return Ac(gO,r.config.apiKey,r.name)}async function TO(r,t,n=!1){if(Un(r.app))return Promise.reject(ks(r));const s=ch(r),o=jT(s,t),f=await new pO(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const AO=10*60*1e3;class SO{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bO(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!HT(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=AO&&this.cachedEventUids.clear(),this.cachedEventUids.has(e0(t))}saveEventToCache(t){this.cachedEventUids.add(e0(t)),this.lastProcessedEventTime=Date.now()}}function e0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function HT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function bO(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HT(r);default:return!1}}/**
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
 */async function wO(r,t={}){return ao(r,"GET","/v1/projects",t)}/**
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
 */const RO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IO=/^https?/;async function CO(r){if(r.config.emulator)return;const{authorizedDomains:t}=await wO(r);for(const n of t)try{if(DO(n))return}catch{}gi(r,"unauthorized-domain")}function DO(r){const t=dm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!IO.test(n))return!1;if(RO.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const OO=new zl(3e4,6e4);function n0(){const r=fi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function NO(r){return new Promise((t,n)=>{var s,o,u;function f(){n0(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{n0(),n(Gn(r,"network-request-failed"))},timeout:OO.get()})}if(!((o=(s=fi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=fi().gapi)===null||u===void 0)&&u.load)f();else{const m=U2("iframefcb");return fi()[m]=()=>{gapi.load?f():n(Gn(r,"network-request-failed"))},x2(`${k2()}?onload=${m}`).catch(p=>n(p))}}).catch(t=>{throw bc=null,t})}let bc=null;function MO(r){return bc=bc||NO(r),bc}/**
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
 */const VO=new zl(5e3,15e3),xO="__/auth/iframe",kO="emulator/auth/iframe",UO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PO(r){const t=r.config;_t(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?tg(t,kO):`https://${r.config.authDomain}/${xO}`,s={apiKey:t.apiKey,appName:r.name,v:eo},o=LO.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${xl(s).slice(1)}`}async function zO(r){const t=await MO(r),n=fi().gapi;return _t(n,r,"internal-error"),t.open({where:document.body,url:PO(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Gn(r,"network-request-failed"),m=fi().setTimeout(()=>{u(f)},VO.get());function p(){fi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const BO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jO=500,qO=600,HO="_blank",FO="http://localhost";class i0{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GO(r,t,n,s=jO,o=qO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},BO),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Qe().toLowerCase();n&&(m=ST(y)?HO:n),TT(y)&&(t=t||FO,p.scrollbars="yes");const E=Object.entries(p).reduce((x,[B,Q])=>`${x}${B}=${Q},`,"");if(R2(y)&&m!=="_self")return KO(t||"",m),new i0(null);const b=window.open(t||"",m,E);_t(b,r,"popup-blocked");try{b.focus()}catch{}return new i0(b)}function KO(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const QO="__/auth/handler",YO="emulator/auth/handler",$O=encodeURIComponent("fac");async function r0(r,t,n,s,o,u){_t(r.config.authDomain,r,"auth-domain-config-required"),_t(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:eo,eventId:o};if(t instanceof sg){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",$b(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,b]of Object.entries({}))f[E]=b}if(t instanceof Bl){const E=t.getScopes().filter(b=>b!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${$O}=${encodeURIComponent(p)}`:"";return`${XO(r)}?${xl(m).slice(1)}${y}`}function XO({config:r}){return r.emulator?tg(r,YO):`https://${r.authDomain}/${QO}`}/**
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
 */const Ud="webStorageSupport";class ZO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UT,this._completeRedirectFn=TO,this._overrideRedirectResult=vO}async _openPopup(t,n,s,o){var u;$i((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await r0(t,n,s,dm(),o);return GO(t,f,ag())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await r0(t,n,s,dm(),o);return tO(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):($i(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await zO(t),s=new SO(t);return n.register("authEvent",o=>(_t(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ud,{type:Ud},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Ud];f!==void 0&&n(!!f),gi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CO(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return CT()||AT()||ig()}}const JO=ZO;var s0="@firebase/auth",a0="1.9.0";/**
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
 */class WO{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eN(r){Kn(new Ln("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_t(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DT(r)},y=new M2(s,o,u,p);return P2(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Kn(new Ln("auth-internal",t=>{const n=ch(t.getProvider("auth").getImmediate());return(s=>new WO(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(s0,a0,tN(r)),on(s0,a0,"esm2017")}/**
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
 */const nN=5*60,iN=C0("authIdTokenMaxAge")||nN;let o0=null;const rN=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>iN)return;const o=n==null?void 0:n.token;o0!==o&&(o0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sN(r=$c()){const t=Xr(r,"auth");if(t.isInitialized())return t.getImmediate();const n=L2(r,{popupRedirectResolver:JO,persistence:[uO,Z2,UT]}),s=C0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=rN(u.toString());Q2(n,f,()=>f(n.currentUser)),K2(n,m=>f(m))}}const o=w0("auth");return o&&z2(n,`http://${o}`),n}function aN(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}V2({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=Gn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",aN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eN("Browser");const l0=({entry:r,onClick:t})=>(W.useEffect(()=>{if(r){const n=new Image;n.src=r.image?r.image==="assets/defaultStudent.avif"?"/defaultStudent.png":r.image:"/defaultStudent.png"}},[r]),r?at.jsxs("div",{onClick:t,className:"flex flex-col flex-1 items-center rounded-lg hover:scale-105 transition duration-200 active:scale-100 cursor-pointer",children:[at.jsxs("div",{className:"h-46 min-w-32 sm:h-60 sm:min-w-44 md:h-80 md:min-w-60 w-full flex items-center justify-center rounded-lg overflow-hidden",children:[at.jsx("img",{src:r.image==="assets/defaultStudent.avif"?"/defaultStudent.png":r.image,alt:r.name,className:"object-contain h-full",style:{display:r.image?"block":"none"}}),!r.image&&at.jsx("div",{className:"text-gray-400",children:"Loading..."})]}),at.jsx("span",{className:"sm:mt-4 mt-2 sm:text-2xl text-base font-semibold",children:r.name})]}):null),oN=({pairs:r,currentPairIndex:t,entriesSubset:n,onVote:s,remainingVotes:o,valid:u,isPairsLoading:f})=>{var m,p;return W.useEffect(()=>{(E=>{var b,x,B,Q;if(E<r.length){const X=F=>{const it=n[F];if(it){const ut=new Image;ut.src=it.image?it.image==="assets/defaultStudent.avif"?"/defaultStudent.png":it.image:"/defaultStudent.png"}};X((b=r[E])==null?void 0:b.entry1),X((x=r[E])==null?void 0:x.entry2),E+1<r.length&&(X((B=r[E+1])==null?void 0:B.entry1),X((Q=r[E+1])==null?void 0:Q.entry2))}})(t)},[t,r,n]),f&&n.length!==0?at.jsx("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin my-24"}):r.length===0?at.jsx(at.Fragment,{children:n.length!==0&&at.jsx("div",{className:"sm:text-lg text-sm text-gray-600 flex flex-col items-center sm:my-6 my-4 sm:mb-8 mb-6",children:u?at.jsx("div",{children:"Come back tomorrow for more rankings!"}):at.jsx("div",{children:"You are unable to rank this category"})})}):at.jsxs("div",{className:"sm:p-6 py-4 w-full text-center relative flex flex-col items-center",children:[at.jsxs("div",{className:"flex justify-center gap-2 sm:gap-12 flex-row sm:mx-8 sm:mb-6 mb-4",children:[at.jsx(l0,{entry:n[(m=r[t-1])==null?void 0:m.entry1],onClick:()=>s(r[t-1],0)}),at.jsx("div",{className:"sm:text-3xl text-xl font-semibold self-center",children:"or"}),at.jsx(l0,{entry:n[(p=r[t-1])==null?void 0:p.entry2],onClick:()=>s(r[t-1],1)})]}),at.jsx("button",{onClick:()=>s(r[t-1],2),className:"sm:px-12 px-8 sm:py-4 py-3 bg-white sm:text-xl text-base font-semibold rounded-lg hover:scale-105 active:scale-100 transition duration-200 shadow-lg",children:"I'm indifferent"}),at.jsxs("div",{className:"text-gray-400 my-2 sm:text-base text-sm",children:[o-t+1," votes left today for this category"]})]})},FT=({handleLogout:r})=>at.jsxs("div",{className:"flex items-center w-screen justify-between sm:p-6 p-4 sm:pr-10",children:[at.jsx("div",{className:"text-3xl sm:text-4xl font-bold font-['Knewave'] tracking-wide cursor-pointer",onClick:()=>window.location.href="/",children:"RANKYALE"}),at.jsxs("div",{className:"flex items-center gap-4 sm:gap-8 text-base sm:text-lg font-semibold",children:[at.jsx(Db,{to:"/about",className:"relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",children:"About"}),at.jsx("a",{href:"https://forms.gle/Pqmeex4c6ubKRDAh8",target:"_blank",rel:"noopener noreferrer",className:"relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hidden sm:block",children:"Feedback"}),at.jsx("button",{onClick:r,className:"relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-red-600",children:"Sign Out"})]})]}),lN=()=>at.jsx("div",{className:"w-full my-6 sm:my-10 text-center text-gray-500 sm:text-sm text-xs font-light tracking-wide",children:"An Addison Goolsbee production © 2025"}),xa=sN(),Ld={Freshmen:2028,Sophomores:2027,Juniors:2026,Seniors:2025};function uN(){const[r,t]=W.useState([]),[n,s]=W.useState([]),[o,u]=W.useState(null),[f,m]=W.useState(null),[p,y]=W.useState(!1),[E,b]=W.useState("All"),[x,B]=W.useState({All:[],Freshmen:[],Sophomores:[],Juniors:[],Seniors:[]}),[Q,X]=W.useState(!0),[F,it]=W.useState({All:0,Freshmen:0,Sophomores:0,Juniors:0,Seniors:0}),[ut,ht]=W.useState({All:0,Freshmen:0,Sophomores:0,Juniors:0,Seniors:0}),[bt,mt]=W.useState(1),Ot=Md(Vd,"updateEloRating"),M=32,I=100;W.useEffect(()=>{const w=Y2(xa,async Ct=>{var Et;(Et=Ct==null?void 0:Ct.email)!=null&&Et.endsWith("@yale.edu")?u(Ct):(Ct&&await kd(xa),u(null)),y(!0)});return()=>w()},[]),W.useEffect(()=>{const w={2028:"Freshmen",2027:"Sophomores",2026:"Juniors",2025:"Seniors"};o&&((async()=>{try{const ct=(await Md(Vd,"getUser")()).data;m(ct.classYear),b(w[ct.classYear]);const rt=ct.todaysVotes,It={...rt};return Object.keys(rt).forEach(D=>{(D==="All"||D===w[ct.classYear])&&(It[D]=I-rt[D])}),ht(It),ct.classYear}catch(Et){console.error("Failed to fetch class year:",Et)}})(),o2("students").then(Et=>{const Z=Et.sort((ct,rt)=>rt.score-ct.score||ct.name.localeCompare(rt.name));t(Z)}))},[o]),W.useEffect(()=>{const w=Md(Vd,"fetchVotesAndGeneratePairs");if(!o||!E)return;(async()=>{let Et=r;if(E==="All")s(Et);else{const rt=Ld[E];Et=r.filter(It=>It.class_year===rt),s(Et)}if(x[E].length>0){mt(F[E]+1);return}if(!o||Et.length<2||E!=="All"&&Ld[E]!==f)return;X(!0);const ct=(await w({collection:"students",uid:o.uid,subset:E})).data;B(rt=>({...rt,[E]:ct})),it(rt=>({...rt,[E]:0})),X(!1)})()},[E,r,o,f,x,F]);const S=async()=>{const w=new Hi;try{const Ct=await mO(xa,w),Et=(Ct==null?void 0:Ct.user)||xa.currentUser,Z=Et==null?void 0:Et.email;Z!=null&&Z.endsWith("@yale.edu")||(alert("Only yale.edu emails are allowed"),await kd(xa))}catch(Ct){console.error("Login error:",Ct)}},C=async()=>{await kd(xa)},N=async(w,Ct)=>{it(Y=>({...Y,[E]:Y[E]+1})),mt(bt+1);const Et=n[w.entry1],Z=n[w.entry2],ct=1/(1+Math.pow(10,(Z.score-Et.score)/400)),rt=1/(1+Math.pow(10,(Et.score-Z.score)/400));let It=Et.score,D=Z.score;Ct===0?(It+=M*(1-ct),D+=M*(0-rt)):Ct===1&&(It+=M*(0-ct),D+=M*(1-rt)),t(Y=>{const st=[...Y],et=st.findIndex(vt=>vt.id===Et.id),nt=st.findIndex(vt=>vt.id===Z.id);return et!==-1&&(st[et]={...Et,score:It}),nt!==-1&&(st[nt]={...Z,score:D}),st.sort((vt,Tt)=>Tt.score-vt.score||vt.name.localeCompare(Tt.name))}),s(Y=>{const st=[...Y];return st[w.entry1]={...Et,score:It},st[w.entry2]={...Z,score:D},st.sort((et,nt)=>nt.score-et.score||et.name.localeCompare(nt.name)),st});try{await Ot({collectionName:"students",entry1Id:Et.id,entry2Id:Z.id,mode:Ct,subcategory:E})}catch(Y){console.error("Error calling updateEloRating:",Y)}};if(!p)return at.jsx("div",{className:"flex items-center justify-center min-h-[100dvh] bg-gray-100",children:at.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!o)return at.jsxs("div",{className:"flex items-center justify-center min-h-[100dvh] bg-gray-100 flex-col gap-8",children:[at.jsx("div",{className:"text-6xl sm:text-8xl font-bold font-['Knewave'] tracking-wide",children:"RANKYALE"}),at.jsx("div",{className:"text-lg sm:text-xl italic font-light mx-10 text-center",children:"Who is the most popular student?"}),at.jsx("button",{onClick:S,className:"bg-blue-600 text-white px-6 py-3 text-lg rounded shadow hover:bg-blue-700 transition",children:"Sign in with your Yale email"})]});const U=n.length===0;return at.jsxs(at.Fragment,{children:[at.jsx(FT,{handleLogout:C}),at.jsxs("div",{className:"flex flex-col w-full bg-gray-100 min-h-[100dvh]",children:[at.jsxs("div",{className:"flex flex-col items-center w-full",children:[at.jsx("h1",{className:"text-4xl sm:text-5xl font-bold mt-4 sm:mt-0 mb-8 sm:mb-8 text-center bg-clip-text",children:"Who is the Most Popular Student?"}),!U&&at.jsx("div",{className:"flex bg-white rounded-lg shadow-md p-1 mb-2 text-xs sm:text-base",children:["All","Freshmen","Sophomores","Juniors","Seniors"].map(w=>at.jsx("button",{onClick:()=>b(w),className:`px-3 sm:px-6 py-2 rounded-md transition-colors duration-200 cursor-pointer ${E===w?"bg-blue-500 text-white":"text-gray-600 hover:bg-gray-100"}`,children:w},w))}),at.jsx(oN,{pairs:x[E],currentPairIndex:bt,entriesSubset:n,onVote:N,remainingVotes:ut[E],valid:E!=="All"&&Ld[E]===f,isPairsLoading:Q})]}),at.jsx("div",{className:"flex flex-col items-center w-full",children:U?at.jsx("div",{className:"fixed inset-0 flex items-center justify-center",children:at.jsx("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})}):at.jsx("div",{className:"flex flex-col items-center mx-3 sm:mx-0 sm:w-full space-y-3",children:n.slice(0,100).map((w,Ct)=>at.jsxs("div",{className:"bg-white rounded-xl py-2 px-4 flex flex-row justify-between items-center space-x-4 w-full max-w-xl shadow-xs",children:[at.jsxs("div",{className:"flex flex-row gap-4 text-xl font-medium",children:[at.jsx("span",{children:Ct+1}),at.jsx("span",{className:"sm:text-xl text-lg",children:w.name})]}),at.jsx("img",{src:w.image==="assets/defaultStudent.avif"?"/defaultStudent.png":w.image,alt:w.name,className:"h-16 object-contain rounded-md"})]},w.email??w.name))})})]}),at.jsx(lN,{})]})}const cN=()=>at.jsxs(at.Fragment,{children:[at.jsx(FT,{handleLogout:()=>Promise.resolve()}),at.jsxs("div",{className:"text-center p-5",children:[at.jsx("h1",{className:"text-4xl font-bold mt-16 sm:mt-40 mb-4",children:"Welcome to Rank Yale 🏆"}),at.jsxs("div",{className:"flex flex-col justify-center items-center text-xl max-w-2xl mx-auto gap-4 my-8",children:[at.jsx("p",{children:"Rank Yale is a toxic website for ranking the popularity of Yale students. There's not much more to say. Have fun!"}),at.jsxs("div",{children:["I love feedback! Fill out ",at.jsx("a",{href:"https://forms.gle/Pqmeex4c6ubKRDAh8",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-500 transition-all duration-300 underline",children:"this anonymous google form"})," to let me know of any requested features, complaints, bugs, etc."]})]})]})]});function hN(){return at.jsxs(_b,{children:[at.jsx(zd,{path:"/",element:at.jsx(uN,{})}),at.jsx(zd,{path:"/about",element:at.jsx(cN,{})})]})}IS.createRoot(document.getElementById("root")).render(at.jsx(W.StrictMode,{children:at.jsx(Rb,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:at.jsx(hN,{})})}));
