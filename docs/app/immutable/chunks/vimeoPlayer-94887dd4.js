import{S as K,i as Z,s as ee,k as te,l as ne,m as re,h as z,n as ie,b as oe,B as O,V as ae,o as ue,W as se}from"./index-f3223564.js";/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */function le(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ce(r,e,t){return e&&Q(r.prototype,e),t&&Q(r,t),r}var $=typeof global<"u"&&{}.toString.call(global)==="[object global]";function U(r,e){return r.indexOf(e.toLowerCase())===0?r:"".concat(e.toLowerCase()).concat(r.substr(0,1).toUpperCase()).concat(r.substr(1))}function fe(r){return Boolean(r&&r.nodeType===1&&"nodeName"in r&&r.ownerDocument&&r.ownerDocument.defaultView)}function de(r){return!isNaN(parseFloat(r))&&isFinite(r)&&Math.floor(r)==r}function _(r){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(r)}function B(r){var e=/^https:\/\/player\.vimeo\.com\/video\/\d+/;return e.test(r)}function H(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.id,t=r.url,n=e||t;if(!n)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(de(n))return"https://vimeo.com/".concat(n);if(_(n))return n.replace("http:","https:");throw e?new TypeError("\u201C".concat(e,"\u201D is not a valid video id.")):new TypeError("\u201C".concat(n,"\u201D is not a vimeo.com url."))}var he=typeof Array.prototype.indexOf<"u",ge=typeof window<"u"&&typeof window.postMessage<"u";if(!$&&(!he||!ge))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ve(r,e){return e={exports:{}},r(e,e.exports),e.exports}/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */(function(r){if(r.WeakMap)return;var e=Object.prototype.hasOwnProperty,t=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{value:1}).x===1}catch{}}(),n=function(a,s,c){t?Object.defineProperty(a,s,{configurable:!0,writable:!0,value:c}):a[s]=c};r.WeakMap=function(){function a(){if(this===void 0)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",c("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}n(a.prototype,"delete",function(u){if(s(this,"delete"),!i(u))return!1;var v=u[this._id];return v&&v[0]===u?(delete u[this._id],!0):!1}),n(a.prototype,"get",function(u){if(s(this,"get"),!!i(u)){var v=u[this._id];if(v&&v[0]===u)return v[1]}}),n(a.prototype,"has",function(u){if(s(this,"has"),!i(u))return!1;var v=u[this._id];return!!(v&&v[0]===u)}),n(a.prototype,"set",function(u,v){if(s(this,"set"),!i(u))throw new TypeError("Invalid value used as weak map key");var y=u[this._id];return y&&y[0]===u?(y[1]=v,this):(n(u,this._id,[u,v]),this)});function s(u,v){if(!i(u)||!e.call(u,"_id"))throw new TypeError(v+" method called on incompatible receiver "+typeof u)}function c(u){return u+"_"+g()+"."+g()}function g(){return Math.random().toString().substring(2)}return n(a,"_polyfill",!0),a}();function i(a){return Object(a)===a}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:S);var M=ve(function(r){/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/(function(t,n,i){n[t]=n[t]||i(),r.exports&&(r.exports=n[t])})("Promise",S,function(){var t,n,i,a=Object.prototype.toString,s=typeof setImmediate<"u"?function(l){return setImmediate(l)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(l,o,d,h){return Object.defineProperty(l,o,{value:d,writable:!0,configurable:h!==!1})}}catch{t=function(o,d,h){return o[d]=h,o}}i=function(){var l,o,d;function h(m,w){this.fn=m,this.self=w,this.next=void 0}return{add:function(w,P){d=new h(w,P),o?o.next=d:l=d,o=d,d=void 0},drain:function(){var w=l;for(l=o=n=void 0;w;)w.fn.call(w.self),w=w.next}}}();function c(f,l){i.add(f,l),n||(n=s(i.drain))}function g(f){var l,o=typeof f;return f!=null&&(o=="object"||o=="function")&&(l=f.then),typeof l=="function"?l:!1}function u(){for(var f=0;f<this.chain.length;f++)v(this,this.state===1?this.chain[f].success:this.chain[f].failure,this.chain[f]);this.chain.length=0}function v(f,l,o){var d,h;try{l===!1?o.reject(f.msg):(l===!0?d=f.msg:d=l.call(void 0,f.msg),d===o.promise?o.reject(TypeError("Promise-chain cycle")):(h=g(d))?h.call(d,o.resolve,o.reject):o.resolve(d))}catch(m){o.reject(m)}}function y(f){var l,o=this;if(!o.triggered){o.triggered=!0,o.def&&(o=o.def);try{(l=g(f))?c(function(){var d=new x(o);try{l.call(f,function(){y.apply(d,arguments)},function(){p.apply(d,arguments)})}catch(h){p.call(d,h)}}):(o.msg=f,o.state=1,o.chain.length>0&&c(u,o))}catch(d){p.call(new x(o),d)}}}function p(f){var l=this;l.triggered||(l.triggered=!0,l.def&&(l=l.def),l.msg=f,l.state=2,l.chain.length>0&&c(u,l))}function E(f,l,o,d){for(var h=0;h<l.length;h++)(function(w){f.resolve(l[w]).then(function(C){o(w,C)},d)})(h)}function x(f){this.def=f,this.triggered=!1}function F(f){this.promise=f,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function k(f){if(typeof f!="function")throw TypeError("Not a function");if(this.__NPO__!==0)throw TypeError("Not a promise");this.__NPO__=1;var l=new F(this);this.then=function(d,h){var m={success:typeof d=="function"?d:!0,failure:typeof h=="function"?h:!1};return m.promise=new this.constructor(function(P,C){if(typeof P!="function"||typeof C!="function")throw TypeError("Not a function");m.resolve=P,m.reject=C}),l.chain.push(m),l.state!==0&&c(u,l),m.promise},this.catch=function(d){return this.then(void 0,d)};try{f.call(void 0,function(d){y.call(l,d)},function(d){p.call(l,d)})}catch(o){p.call(l,o)}}var V=t({},"constructor",k,!1);return k.prototype=V,t(V,"__NPO__",0,!1),t(k,"resolve",function(l){var o=this;return l&&typeof l=="object"&&l.__NPO__===1?l:new o(function(h,m){if(typeof h!="function"||typeof m!="function")throw TypeError("Not a function");h(l)})}),t(k,"reject",function(l){return new this(function(d,h){if(typeof d!="function"||typeof h!="function")throw TypeError("Not a function");h(l)})}),t(k,"all",function(l){var o=this;return a.call(l)!="[object Array]"?o.reject(TypeError("Not an array")):l.length===0?o.resolve([]):new o(function(h,m){if(typeof h!="function"||typeof m!="function")throw TypeError("Not a function");var w=l.length,P=Array(w),C=0;E(o,l,function(X,G){P[X]=G,++C===w&&h(P)},m)})}),t(k,"race",function(l){var o=this;return a.call(l)!="[object Array]"?o.reject(TypeError("Not an array")):new o(function(h,m){if(typeof h!="function"||typeof m!="function")throw TypeError("Not a function");E(o,l,function(P,C){h(C)},m)})}),k})}),T=new WeakMap;function I(r,e,t){var n=T.get(r.element)||{};e in n||(n[e]=[]),n[e].push(t),T.set(r.element,n)}function q(r,e){var t=T.get(r.element)||{};return t[e]||[]}function D(r,e,t){var n=T.get(r.element)||{};if(!n[e])return!0;if(!t)return n[e]=[],T.set(r.element,n),!0;var i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),T.set(r.element,n),n[e]&&n[e].length===0}function pe(r,e){var t=q(r,e);if(t.length<1)return!1;var n=t.shift();return D(r,e,n),n}function me(r,e){var t=T.get(r);T.set(e,t),T.delete(r)}function R(r){if(typeof r=="string")try{r=JSON.parse(r)}catch(e){return console.warn(e),{}}return r}function A(r,e,t){if(!(!r.element.contentWindow||!r.element.contentWindow.postMessage)){var n={method:e};t!==void 0&&(n.value=t);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(n=JSON.stringify(n)),r.element.contentWindow.postMessage(n,r.origin)}}function ye(r,e){e=R(e);var t=[],n;if(e.event){if(e.event==="error"){var i=q(r,e.data.method);i.forEach(function(s){var c=new Error(e.data.message);c.name=e.data.name,s.reject(c),D(r,e.data.method,s)})}t=q(r,"event:".concat(e.event)),n=e.data}else if(e.method){var a=pe(r,e.method);a&&(t.push(a),n=e.value)}t.forEach(function(s){try{if(typeof s=="function"){s.call(r,n);return}s.resolve(n)}catch{}})}var we=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function Y(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return we.reduce(function(t,n){var i=r.getAttribute("data-vimeo-".concat(n));return(i||i==="")&&(t[n]=i===""?1:i),t},e)}function W(r,e){var t=r.html;if(!e)throw new TypeError("An element must be provided");if(e.getAttribute("data-vimeo-initialized")!==null)return e.querySelector("iframe");var n=document.createElement("div");return n.innerHTML=t,e.appendChild(n.firstChild),e.setAttribute("data-vimeo-initialized","true"),e.querySelector("iframe")}function J(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return new Promise(function(n,i){if(!_(r))throw new TypeError("\u201C".concat(r,"\u201D is not a vimeo.com url."));var a="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(r));for(var s in e)e.hasOwnProperty(s)&&(a+="&".concat(s,"=").concat(encodeURIComponent(e[s])));var c="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;c.open("GET",a,!0),c.onload=function(){if(c.status===404){i(new Error("\u201C".concat(r,"\u201D was not found.")));return}if(c.status===403){i(new Error("\u201C".concat(r,"\u201D is not embeddable.")));return}try{var g=JSON.parse(c.responseText);if(g.domain_status_code===403){W(g,t),i(new Error("\u201C".concat(r,"\u201D is not embeddable.")));return}n(g)}catch(u){i(u)}},c.onerror=function(){var g=c.status?" (".concat(c.status,")"):"";i(new Error("There was an error fetching the embed code from Vimeo".concat(g,".")))},c.send()})}function be(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document,e=[].slice.call(r.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),t=function(i){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(i))};e.forEach(function(n){try{if(n.getAttribute("data-vimeo-defer")!==null)return;var i=Y(n),a=H(i);J(a,i,n).then(function(s){return W(s,n)}).catch(t)}catch(s){t(s)}})}function ke(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var e=function(n){if(!!_(n.origin)&&!(!n.data||n.data.event!=="spacechange")){for(var i=r.querySelectorAll("iframe"),a=0;a<i.length;a++)if(i[a].contentWindow===n.source){var s=i[a].parentElement;s.style.paddingBottom="".concat(n.data.data[0].bottom,"px");break}}};window.addEventListener("message",e)}}function Ee(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var e=function(n){if(!!_(n.origin)){var i=R(n.data);if(!(!i||i.event!=="ready"))for(var a=r.querySelectorAll("iframe"),s=0;s<a.length;s++){var c=a[s],g=c.contentWindow===n.source;if(B(c.src)&&g){var u=new L(c);u.callMethod("appendVideoMetadata",window.location.href)}}}};window.addEventListener("message",e)}}function Pe(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var e=function(i){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(i))},t=function(i){if(!!_(i.origin)){var a=R(i.data);if(!(!a||a.event!=="ready"))for(var s=r.querySelectorAll("iframe"),c=0;c<s.length;c++){var g=s[c],u=g.contentWindow===i.source;B(g.src)&&u&&function(){var v=new L(g);v.getVideoId().then(function(y){var p=new RegExp("[?&]vimeo_t_".concat(y,"=([^&#]*)")).exec(window.location.href);if(p&&p[1]){var E=decodeURI(p[1]);v.setCurrentTime(E)}}).catch(e)}()}}};window.addEventListener("message",t)}}function Te(){var r=function(){for(var n,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a=0,s=i.length,c={};a<s;a++)if(n=i[a],n&&n[1]in document){for(a=0;a<n.length;a++)c[i[0][a]]=n[a];return c}return!1}(),e={fullscreenchange:r.fullscreenchange,fullscreenerror:r.fullscreenerror},t={request:function(i){return new Promise(function(a,s){var c=function u(){t.off("fullscreenchange",u),a()};t.on("fullscreenchange",c),i=i||document.documentElement;var g=i[r.requestFullscreen]();g instanceof Promise&&g.then(c).catch(s)})},exit:function(){return new Promise(function(i,a){if(!t.isFullscreen){i();return}var s=function g(){t.off("fullscreenchange",g),i()};t.on("fullscreenchange",s);var c=document[r.exitFullscreen]();c instanceof Promise&&c.then(s).catch(a)})},on:function(i,a){var s=e[i];s&&document.addEventListener(s,a)},off:function(i,a){var s=e[i];s&&document.removeEventListener(s,a)}};return Object.defineProperties(t,{isFullscreen:{get:function(){return Boolean(document[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[r.fullscreenEnabled])}}}),t}var N=new WeakMap,j=new WeakMap,b={},L=function(){function r(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(le(this,r),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),typeof document<"u"&&typeof e=="string"&&(e=document.getElementById(e)),!fe(e))throw new TypeError("You must pass either a valid element or a valid id.");if(e.nodeName!=="IFRAME"){var i=e.querySelector("iframe");i&&(e=i)}if(e.nodeName==="IFRAME"&&!_(e.getAttribute("src")||""))throw new Error("The player element passed isn\u2019t a Vimeo embed.");if(N.has(e))return N.get(e);this._window=e.ownerDocument.defaultView,this.element=e,this.origin="*";var a=new M(function(c,g){if(t._onMessage=function(y){if(!(!_(y.origin)||t.element.contentWindow!==y.source)){t.origin==="*"&&(t.origin=y.origin);var p=R(y.data),E=p&&p.event==="error",x=E&&p.data&&p.data.method==="ready";if(x){var F=new Error(p.data.message);F.name=p.data.name,g(F);return}var k=p&&p.event==="ready",V=p&&p.method==="ping";if(k||V){t.element.setAttribute("data-ready","true"),c();return}ye(t,p)}},t._window.addEventListener("message",t._onMessage),t.element.nodeName!=="IFRAME"){var u=Y(e,n),v=H(u);J(v,u,e).then(function(y){var p=W(y,e);return t.element=p,t._originalElement=e,me(e,p),N.set(t.element,t),y}).catch(g)}});if(j.set(this,a),N.set(this.element,this),this.element.nodeName==="IFRAME"&&A(this,"ping"),b.isEnabled){var s=function(){return b.exit()};this.fullscreenchangeHandler=function(){b.isFullscreen?I(t,"event:exitFullscreen",s):D(t,"event:exitFullscreen",s),t.ready().then(function(){A(t,"fullscreenchange",b.isFullscreen)})},b.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return ce(r,[{key:"callMethod",value:function(t){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new M(function(a,s){return n.ready().then(function(){I(n,t,{resolve:a,reject:s}),A(n,t,i)}).catch(s)})}},{key:"get",value:function(t){var n=this;return new M(function(i,a){return t=U(t,"get"),n.ready().then(function(){I(n,t,{resolve:i,reject:a}),A(n,t)}).catch(a)})}},{key:"set",value:function(t,n){var i=this;return new M(function(a,s){if(t=U(t,"set"),n==null)throw new TypeError("There must be a value to set.");return i.ready().then(function(){I(i,t,{resolve:a,reject:s}),A(i,t,n)}).catch(s)})}},{key:"on",value:function(t,n){if(!t)throw new TypeError("You must pass an event name.");if(!n)throw new TypeError("You must pass a callback function.");if(typeof n!="function")throw new TypeError("The callback must be a function.");var i=q(this,"event:".concat(t));i.length===0&&this.callMethod("addEventListener",t).catch(function(){}),I(this,"event:".concat(t),n)}},{key:"off",value:function(t,n){if(!t)throw new TypeError("You must pass an event name.");if(n&&typeof n!="function")throw new TypeError("The callback must be a function.");var i=D(this,"event:".concat(t),n);i&&this.callMethod("removeEventListener",t).catch(function(a){})}},{key:"loadVideo",value:function(t){return this.callMethod("loadVideo",t)}},{key:"ready",value:function(){var t=j.get(this)||new M(function(n,i){i(new Error("Unknown player. Probably unloaded."))});return M.resolve(t)}},{key:"addCuePoint",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.callMethod("addCuePoint",{time:t,data:n})}},{key:"removeCuePoint",value:function(t){return this.callMethod("removeCuePoint",t)}},{key:"enableTextTrack",value:function(t,n){if(!t)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:t,kind:n})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return b.isEnabled?b.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return b.isEnabled?b.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return b.isEnabled?M.resolve(b.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var t=this;return new M(function(n){if(j.delete(t),N.delete(t.element),t._originalElement&&(N.delete(t._originalElement),t._originalElement.removeAttribute("data-vimeo-initialized")),t.element&&t.element.nodeName==="IFRAME"&&t.element.parentNode&&(t.element.parentNode.parentNode&&t._originalElement&&t._originalElement!==t.element.parentNode?t.element.parentNode.parentNode.removeChild(t.element.parentNode):t.element.parentNode.removeChild(t.element)),t.element&&t.element.nodeName==="DIV"&&t.element.parentNode){t.element.removeAttribute("data-vimeo-initialized");var i=t.element.querySelector("iframe");i&&i.parentNode&&(i.parentNode.parentNode&&t._originalElement&&t._originalElement!==i.parentNode?i.parentNode.parentNode.removeChild(i.parentNode):i.parentNode.removeChild(i))}t._window.removeEventListener("message",t._onMessage),b.isEnabled&&b.off("fullscreenchange",t.fullscreenchangeHandler),n()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(t){return this.set("autopause",t)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(t){return this.set("cameraProps",t)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(t){return this.set("color",t)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(t){return this.set("currentTime",t)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(t){return this.set("loop",t)}},{key:"setMuted",value:function(t){return this.set("muted",t)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(t){return this.set("playbackRate",t)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(t){return this.set("quality",t)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(t){return this.set("volume",t)}}]),r}();$||(b=Te(),be(),ke(),Ee(),Pe());function Ce(r){let e;return{c(){e=te("div"),this.h()},l(t){e=ne(t,"DIV",{id:!0});var n=re(e);n.forEach(z),this.h()},h(){ie(e,"id","player")},m(t,n){oe(t,e,n),r[11](e)},p:O,i:O,o:O,d(t){t&&z(e),r[11](null)}}}function Me(r,e,t){const n=ae();let{url:i}=e,{autoplay:a=!1}=e,{loop:s=!1}=e,c={url:i,autoplay:a,loop:s,muted:!1,byline:!1,controls:!0,title:!1,playsinline:!0,responsive:!0,keyboard:!1,pip:!1,portrait:!1},g,u,v=0;const y=()=>{u.on("loaded",()=>n("loaded")),u.on("durationchange",o=>{v=o.duration,n("durationchange",v)}),u.on("bufferstart",()=>n("bufferstart")),u.on("bufferend",()=>n("bufferend")),u.on("progress",o=>n("progress",o)),u.on("play",()=>n("play")),u.on("playing",()=>n("playing")),u.on("pause",()=>n("pause")),u.on("timeupdate",o=>n("timeupdate",o)),u.on("ended",()=>n("ended")),u.on("error",o=>{console.log("error",o)}),s&&u.setLoop(!0)},p=()=>{u.play()},E=()=>{u.pause()},x=()=>v,F=()=>{u.getPaused().then(o=>{o?p():E()})},k=o=>{const d=o<0?0:o>1?v-1:o*v;u.setCurrentTime(d)},V=()=>u,f=()=>{!u||u.loadVideo({url:i})};ue(()=>(u=new L(g,c),u.ready().then(()=>{y(),u.getDuration().then(o=>{v=o,n("durationchange",v)})}),()=>{u.unload()}));function l(o){se[o?"unshift":"push"](()=>{g=o,t(0,g)})}return r.$$set=o=>{"url"in o&&t(1,i=o.url),"autoplay"in o&&t(2,a=o.autoplay),"loop"in o&&t(3,s=o.loop)},r.$$.update=()=>{r.$$.dirty&2&&f()},[g,i,a,s,p,E,x,F,k,V,f,l]}class Fe extends K{constructor(e){super(),Z(this,e,Me,Ce,ee,{url:1,autoplay:2,loop:3,play:4,pause:5,getDuration:6,togglePlay:7,seekTo:8,getPlayer:9,loadVideo:10})}get play(){return this.$$.ctx[4]}get pause(){return this.$$.ctx[5]}get getDuration(){return this.$$.ctx[6]}get togglePlay(){return this.$$.ctx[7]}get seekTo(){return this.$$.ctx[8]}get getPlayer(){return this.$$.ctx[9]}get loadVideo(){return this.$$.ctx[10]}}export{Fe as V};
