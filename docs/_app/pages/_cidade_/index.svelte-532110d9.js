import{S as j,i as z,s as F,e as _,c as $,a as b,d as l,b as o,N as L,g,E as N,w as E,k as q,l as x,x as A,m as I,M as v,y as M,q as S,o as B,B as C,O as P}from"../../chunks/index-a7c96901.js";import{b as D}from"../../chunks/singletons-1b661bce.js";import{I as O,c as w,g as R,p as U}from"../../chunks/Icon-f407e6da.js";function V(n){let a,s;return{c(){a=_("iframe"),this.h()},l(t){a=$(t,"IFRAME",{class:!0,title:!0,src:!0}),b(a).forEach(l),this.h()},h(){o(a,"class","w-full h-full"),o(a,"title","Mapa Afetivo de Coqueiro Seco"),L(a.src,s="https://uploads.knightlab.com/storymapjs/c35fa21be0f6ec151b0aa2c5425efc86/"+n[1]+"/index.html")||o(a,"src",s)},m(t,c){g(t,a,c)},p:N,d(t){t&&l(a)}}}function G(n){let a,s,t,c,p,f,m,u,h,d;t=new O({props:{width:"100%",icon:"raphael:info"}}),m=new O({props:{width:"100%",icon:"ci:off-close"}});let i=n[1]!==""&&V(n);return{c(){a=_("div"),s=_("a"),E(t.$$.fragment),p=q(),f=_("a"),E(m.$$.fragment),u=q(),i&&i.c(),h=x(),this.h()},l(e){a=$(e,"DIV",{class:!0});var r=b(a);s=$(r,"A",{href:!0,class:!0});var k=b(s);A(t.$$.fragment,k),k.forEach(l),p=I(r),f=$(r,"A",{href:!0,class:!0});var y=b(f);A(m.$$.fragment,y),y.forEach(l),r.forEach(l),u=I(e),i&&i.l(e),h=x(),this.h()},h(){o(s,"href",c=D+"/"+n[0].params.cidade+"/creditos"),o(s,"class","w-8 transition-colors md:mr-4"),o(f,"href","/"),o(f,"class","w-8 transition-colors mb-2 md:mb-0"),o(a,"class","fixed top-6 right-0 p-2 flex flex-col-reverse z-20 bg-black bg-opacity-60 rounded-l-md md:flex-row md:top-4 md:right-4 md:p-0 md:bg-opacity-0")},m(e,r){g(e,a,r),v(a,s),M(t,s,null),v(a,p),v(a,f),M(m,f,null),g(e,u,r),i&&i.m(e,r),g(e,h,r),d=!0},p(e,[r]){(!d||r&1&&c!==(c=D+"/"+e[0].params.cidade+"/creditos"))&&o(s,"href",c),e[1]!==""&&i.p(e,r)},i(e){d||(S(t.$$.fragment,e),S(m.$$.fragment,e),d=!0)},o(e){B(t.$$.fragment,e),B(m.$$.fragment,e),d=!1},d(e){e&&l(a),C(t),C(m),e&&l(u),i&&i.d(e),e&&l(h)}}}function H(n,a,s){let t;P(n,U,p=>s(0,t=p)),w.hasOwnProperty(t.params.cidade)||R("/");const c=t.params.cidade in w?w[t.params.cidade].link:"";return[t,c]}class T extends j{constructor(a){super(),z(this,a,H,G,F,{})}}export{T as default};