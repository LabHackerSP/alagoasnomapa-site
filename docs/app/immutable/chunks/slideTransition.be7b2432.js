import{S as C,i as I,s as p,e as h,b,v as M,d as c,M as N,f as q,g as f,h as _,O as z,k as E,l as H,m as L,n as Q,P as R,Q as T,R as V,H as X,N as j,L as A}from"./index.35a15947.js";function B(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function K(e){const n=e-1;return n*n*n+1}function k(e){let n,l,i,t;const a=e[6].default,s=z(a,e,e[5],null);return{c(){n=E("div"),s&&s.c(),this.h()},l(o){n=H(o,"DIV",{class:!0});var r=L(n);s&&s.l(r),r.forEach(_),this.h()},h(){Q(n,"class","absolute w-full h-full flex flex-col text-center top-0 z-40")},m(o,r){b(o,n,r),s&&s.m(n,null),t=!0},p(o,r){e=o,s&&s.p&&(!t||r&32)&&R(s,a,e,e[5],t?V(a,e[5],r,null):T(e[5]),null)},i(o){t||(f(s,o),X(()=>{t&&(i&&i.end(1),l=j(n,e[3],{out:e[2]?-1:1,duration:500,delay:e[0]}),l.start())}),t=!0)},o(o){c(s,o),l&&l.invalidate(),i=A(n,e[3],{out:e[2]?1:-1,duration:500,delay:e[0]}),t=!1},d(o){o&&_(n),s&&s.d(o),o&&i&&i.end()}}}function F(e){let n=e[1],l,i,t=k(e);return{c(){t.c(),l=h()},l(a){t.l(a),l=h()},m(a,s){t.m(a,s),b(a,l,s),i=!0},p(a,[s]){s&2&&p(n,n=a[1])?(M(),c(t,1,1,N),q(),t=k(a),t.c(),f(t,1),t.m(l.parentNode,l)):t.p(a,s)},i(a){i||(f(t),i=!0)},o(a){c(t),i=!1},d(a){a&&_(l),t.d(a)}}}function G(e,n,l){let{$$slots:i={},$$scope:t}=n,{key:a}=n,{transitionDelay:s=0}=n,o=-1,r=1,d=!0;const g=()=>{v()},v=()=>{l(1,r=a),l(2,d=r>o),o=r},D=(u,{out:y=1,delay:S=0,duration:P=0})=>{const O=+getComputedStyle(u).opacity;return{delay:S,duration:P,out:y,css:m=>{const w=B(m);return`transform: translateX(${y*(w*100-100)}%); opacity: ${m*O};`}}};return e.$$set=u=>{"key"in u&&l(4,a=u.key),"transitionDelay"in u&&l(0,s=u.transitionDelay),"$$scope"in u&&l(5,t=u.$$scope)},e.$$.update=()=>{e.$$.dirty&16&&g()},[s,r,d,D,a,t,i]}class U extends C{constructor(n){super(),I(this,n,G,F,p,{key:4,transitionDelay:0})}}export{U as S,K as c};
