function b(){}const I=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function X(){return Object.create(null)}function v(t){t.forEach(tt)}function C(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Ft(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Ht(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,l){if(r){const s=et(e,n,i,l);t.p(s,r)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Kt(t){return t&&C(t.destroy)?t.destroy:b}function Qt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const nt=typeof window<"u";let G=nt?()=>window.performance.now():()=>Date.now(),J=nt?t=>requestAnimationFrame(t):b;const N=new Set;function it(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&J(it)}function K(t){let e;return N.size===0&&J(it),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}const yt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in yt;let F=!1;function gt(){F=!0}function bt(){F=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=a?r+1:xt(1,r,h=>e[n[h]].claim_order,a))-1;i[c]=n[d]+1;const u=d+1;n[u]=c,r=Math.max(u,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<l.length&&s[c].claim_order>=l[a].claim_order;)a++;const d=a<l.length?l[a]:null;t.insertBefore(s[c],d)}}function wt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=ot("style");return Et(rt(t),e),e.sheet}function Et(t,e){return wt(t.head||t,e),e.sheet}function kt(t,e){if(F){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){F&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Xt(){return Q(" ")}function Yt(){return Q("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function te(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function St(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){At(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ne(t,e,n){return lt(t,e,n,ot)}function ie(t,e,n){return lt(t,e,n,Nt)}function Ct(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function re(t){return Ct(t," ")}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function le(t,e){return new t(e)}const L=new Map;let R=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:vt(e),rules:{}};return L.set(t,n),n}function z(t,e,n,i,r,l,s,o=0){const c=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*l(p);a+=p*100+`%{${s(y,1-y)}}
`}const d=a+`100% {${s(n,1-n)}}
}`,u=`__svelte_${Mt(d)}_${o}`,h=rt(t),{stylesheet:f,rules:_}=L.get(h)||jt(h,t);_[u]||(_[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${r}ms 1 both`,R+=1,u}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),R-=r,R||qt())}function qt(){J(()=>{R||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&st(e)}),L.clear())})}let O;function D(t){O=t}function M(){if(!O)throw new Error("Function called outside component initialization");return O}function ae(t){M().$$.on_mount.push(t)}function ue(t){M().$$.after_update.push(t)}function fe(t){M().$$.on_destroy.push(t)}function de(){const t=M();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=at(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function _e(t,e){return M().$$.context.set(t,e),e}function he(t){return M().$$.context.get(t)}const k=[],Y=[];let S=[];const Z=[],ut=Promise.resolve();let H=!1;function ft(){H||(H=!0,ut.then(dt))}function me(){return ft(),ut}function A(t){S.push(t)}const W=new Set;let E=0;function dt(){if(E!==0)return;const t=O;do{try{for(;E<k.length;){const e=k[E];E++,D(e),Dt(e.$$)}}catch(e){throw k.length=0,E=0,e}for(D(null),k.length=0,E=0;Y.length;)Y.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];W.has(n)||(W.add(n),n())}S.length=0}while(k.length);for(;Z.length;)Z.pop()();H=!1,W.clear(),D(t)}function Dt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function Ot(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let q;function U(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function w(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const T=new Set;let g;function pe(){g={r:0,c:[],p:g}}function ye(){g.r||v(g.c),g=g.p}function Pt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function ge(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),g.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const V={duration:0};function be(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,s,o,c=0;function a(){s&&B(t,s)}function d(){const{delay:h=0,duration:f=300,easing:_=I,tick:m=b,css:p}=r||V;p&&(s=z(t,0,1,f,h,_,p,c++)),m(0,1);const y=G()+h,j=y+f;o&&o.abort(),l=!0,A(()=>w(t,!0,"start")),o=K(x=>{if(l){if(x>=j)return m(1,0),w(t,!0,"end"),a(),l=!1;if(x>=y){const $=_((x-y)/f);m($,1-$)}}return l})}let u=!1;return{start(){u||(u=!0,B(t),C(r)?(r=r(i),U().then(d)):d())},invalidate(){u=!1},end(){l&&(a(),l=!1)}}}function xe(t,e,n){const i={direction:"out"};let r=e(t,n,i),l=!0,s;const o=g;o.r+=1;function c(){const{delay:a=0,duration:d=300,easing:u=I,tick:h=b,css:f}=r||V;f&&(s=z(t,1,0,d,a,u,f));const _=G()+a,m=_+d;A(()=>w(t,!1,"start")),K(p=>{if(l){if(p>=m)return h(0,1),w(t,!1,"end"),--o.r||v(o.c),!1;if(p>=_){const y=u((p-_)/d);h(1-y,y)}}return l})}return C(r)?U().then(()=>{r=r(i),c()}):c(),{end(a){a&&r.tick&&r.tick(1,0),l&&(s&&B(t,s),l=!1)}}}function $e(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,a=null;function d(){a&&B(t,a)}function u(f,_){const m=f.b-s;return _*=Math.abs(m),{a:s,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:p=I,tick:y=b,css:j}=l||V,x={start:G()+_,b:f};f||(x.group=g,g.r+=1),o||c?c=x:(j&&(d(),a=z(t,s,f,m,_,p,j)),f&&y(0,1),o=u(x,m),A(()=>w(t,f,"start")),K($=>{if(c&&$>c.start&&(o=u(c,m),c=null,w(t,o.b,"start"),j&&(d(),a=z(t,s,o.b,o.duration,0,p,l.css))),o){if($>=o.end)y(s=o.b,1-s),w(t,o.b,"end"),c||(o.b?d():--o.group.r||v(o.group.c)),o=null;else if($>=o.start){const _t=$-o.start;s=o.a+o.d*p(_t/o.duration),y(s,1-s)}}return!!(o||c)}))}return{run(f){C(l)?U().then(()=>{l=l(r),h(f)}):h(f)},end(){d(),o=c=null}}}const Tt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Tt];function we(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Lt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||A(()=>{const s=t.$$.on_mount.map(tt).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(A)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(k.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,r,l,s,o=[-1]){const c=O;D(t);const a=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const _=f.length?f[0]:h;return a.ctx&&r(a.ctx[u],a.ctx[u]=_)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](_),d&&zt(t,u)),h}):[],a.update(),d=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){gt();const u=St(e.target);a.fragment&&a.fragment.l(u),u.forEach(st)}else a.fragment&&a.fragment.c();e.intro&&Pt(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),bt(),dt()}D(c)}class ke{$destroy(){Rt(this,1),this.$destroy=b}$on(e,n){if(!C(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as $,Lt as A,Rt as B,Qt as C,Ft as D,ce as E,kt as F,Zt as G,A as H,$e as I,v as J,Wt as K,xe as L,b as M,be as N,Ht as O,Gt as P,Jt as Q,It as R,ke as S,Nt as T,ie as U,ee as V,de as W,Vt as X,Kt as Y,_e as Z,he as _,Xt as a,Ut as b,re as c,ge as d,Yt as e,ye as f,Pt as g,st as h,Ee as i,ue as j,ot as k,ne as l,St as m,te as n,ae as o,oe as p,Q as q,Ct as r,Bt as s,me as t,se as u,pe as v,Y as w,le as x,we as y,ve as z};
