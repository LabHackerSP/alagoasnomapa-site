import{S as Q,i as W,s as Z,k as p,a as R,l as v,c as x,n,C as j,b as y,B as V,h as m,e as me,f as C,g as X,t as q,d as ee,D as K,m as b,E as _e,F as _,G as Y,H as Ee,I as de,J as we,q as H,r as G,K as $e,w as te,x as le,y as ae,L as Oe,z as se,u as ye,M as Ie,N as Ae,O as Me,P as Re}from"../../chunks/index-f3223564.js";import{n as xe,p as ke}from"../../chunks/stores-733e153d.js";import{b as P}from"../../chunks/paths-6ff7d232.js";import{c as Ce}from"../../chunks/slideTransition-54d47e04.js";import{d as he}from"../../chunks/data-7e657676.js";import{C as Te}from"../../chunks/credits-5ae3e30c.js";function Le(u){let e,l,t,a,s,r,i,h;return{c(){e=p("img"),t=R(),a=p("img"),r=R(),i=p("img"),this.h()},l(c){e=v(c,"IMG",{class:!0,src:!0,alt:!0}),t=x(c),a=v(c,"IMG",{class:!0,src:!0,alt:!0}),r=x(c),i=v(c,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){n(e,"class","max-w-[30%] h-8 md:h-10 lg:h-14 px-2"),j(e.src,l=P+"/logos/sausub.svg")||n(e,"src",l),n(e,"alt","Alagoas no Mapa"),n(a,"class","max-w-[30%] h-8 md:h-10 lg:h-14 px-2"),j(a.src,s=P+"/logos/lab.svg")||n(a,"src",s),n(a,"alt","Alagoas no Mapa"),n(i,"class","max-h-8 md:max-h-10 lg:max-h-14 px-2"),j(i.src,h=P+"/logos/governo.svg")||n(i,"src",h),n(i,"alt","Alagoas no Mapa")},m(c,o){y(c,e,o),y(c,t,o),y(c,a,o),y(c,r,o),y(c,i,o)},p:V,i:V,o:V,d(c){c&&m(e),c&&m(t),c&&m(a),c&&m(r),c&&m(i)}}}class qe extends Q{constructor(e){super(),W(this,e,null,Le,Z,{})}}function J(u,{delay:e=0,duration:l=400,easing:t=Ce,x:a=0,y:s=0,opacity:r=0}={}){const i=getComputedStyle(u),h=+i.opacity,c=i.transform==="none"?"":i.transform,o=h*(1-r);return{delay:e,duration:l,easing:t,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*a}px, ${(1-f)*s}px);
			opacity: ${h-o*d}`}}function pe(u){let e,l,t,a,s,r,i,h,c,o,f,d,I,k,S,B;const A=[Ne,De],M=[];function F(g,E){return g[1]?0:1}return f=F(u),d=M[f]=A[f](u),{c(){e=p("header"),l=p("a"),t=p("img"),s=R(),r=p("button"),i=p("div"),c=R(),o=p("aside"),d.c(),this.h()},l(g){e=v(g,"HEADER",{class:!0});var E=b(e);l=v(E,"A",{class:!0,href:!0});var L=b(l);t=v(L,"IMG",{class:!0,src:!0,alt:!0}),L.forEach(m),s=x(E),r=v(E,"BUTTON",{class:!0});var D=b(r);i=v(D,"DIV",{class:!0}),b(i).forEach(m),D.forEach(m),E.forEach(m),c=x(g),o=v(g,"ASIDE",{class:!0});var U=b(o);d.l(U),U.forEach(m),this.h()},h(){n(t,"class","h-full"),j(t.src,a=P+"/imgs/logo_full.svg")||n(t,"src",a),n(t,"alt","Alagoas no Mapa"),n(l,"class","h-full aspect-[3/1] svelte-vq5tkc"),n(l,"href",P+"/cidades"),n(i,"class","svelte-vq5tkc"),n(r,"class","ml-auto hamburger svelte-vq5tkc"),_e(r,"active",u[0]),n(e,"class","flex flex-grow-0 h-20 p-4"),n(o,"class",I="flex flex-col justify-between absolute top-16 right-0 bottom-0 w-full bg-white z-50 transform "+(u[0]?"":"translate-x-full")+" transition-all ease-in-out duration-500")},m(g,E){y(g,e,E),_(e,l),_(l,t),_(e,s),_(e,r),_(r,i),y(g,c,E),y(g,o,E),M[f].m(o,null),k=!0,S||(B=[Y(r,"click",u[5]),Y(o,"transitionend",u[3])],S=!0)},p(g,E){(!k||E&1)&&_e(r,"active",g[0]);let L=f;f=F(g),f===L?M[f].p(g,E):(X(),q(M[L],1,1,()=>{M[L]=null}),ee(),d=M[f],d?d.p(g,E):(d=M[f]=A[f](g),d.c()),C(d,1),d.m(o,null)),(!k||E&1&&I!==(I="flex flex-col justify-between absolute top-16 right-0 bottom-0 w-full bg-white z-50 transform "+(g[0]?"":"translate-x-full")+" transition-all ease-in-out duration-500"))&&n(o,"class",I)},i(g){k||(Ee(()=>{h||(h=de(e,J,{y:-80},!0)),h.run(1)}),C(d),k=!0)},o(g){h||(h=de(e,J,{y:-80},!1)),h.run(0),q(d),k=!1},d(g){g&&m(e),g&&h&&h.end(),g&&m(c),g&&m(o),M[f].d(),S=!1,we(B)}}}function De(u){let e,l,t,a,s,r,i,h,c,o,f,d,I,k,S,B,A,M,F,g,E,L,D,U,w=u[2].params.cidade&&ve(u),$=u[2].params.cidade&&ge(u);return{c(){e=p("div"),w&&w.c(),l=R(),t=p("ol"),$&&$.c(),a=R(),s=p("li"),r=p("a"),i=H("INSTAGRAM"),h=R(),c=p("li"),o=p("a"),f=H("FLICKR"),d=R(),I=p("li"),k=p("a"),S=H("YOUTUBE"),B=R(),A=p("div"),M=H("OU, SE PREFERIR,"),F=p("br"),g=R(),E=p("a"),L=H("CONHE\xC7A MELHOR O PROJETO"),this.h()},l(O){e=v(O,"DIV",{class:!0});var T=b(e);w&&w.l(T),l=x(T),t=v(T,"OL",{class:!0});var N=b(t);$&&$.l(N),a=x(N),s=v(N,"LI",{class:!0});var re=b(s);r=v(re,"A",{href:!0,rel:!0,target:!0,class:!0});var oe=b(r);i=G(oe,"INSTAGRAM"),oe.forEach(m),re.forEach(m),h=x(N),c=v(N,"LI",{class:!0});var ie=b(c);o=v(ie,"A",{href:!0,rel:!0,target:!0,class:!0});var ne=b(o);f=G(ne,"FLICKR"),ne.forEach(m),ie.forEach(m),d=x(N),I=v(N,"LI",{class:!0});var ce=b(I);k=v(ce,"A",{href:!0,rel:!0,target:!0,class:!0});var fe=b(k);S=G(fe,"YOUTUBE"),fe.forEach(m),ce.forEach(m),N.forEach(m),B=x(T),A=v(T,"DIV",{class:!0});var z=b(A);M=G(z,"OU, SE PREFERIR,"),F=v(z,"BR",{}),g=x(z),E=v(z,"A",{href:!0,class:!0});var ue=b(E);L=G(ue,"CONHE\xC7A MELHOR O PROJETO"),ue.forEach(m),z.forEach(m),T.forEach(m),this.h()},h(){n(r,"href","https://www.instagram.com/alagoasnomapa/"),n(r,"rel","noreferrer"),n(r,"target","_blank"),n(r,"class","svelte-vq5tkc"),n(s,"class","mb-8"),n(o,"href","https://www.flickr.com/photos/195400239@N08/albums"),n(o,"rel","noreferrer"),n(o,"target","_blank"),n(o,"class","svelte-vq5tkc"),n(c,"class","mb-8"),n(k,"href","https://www.youtube.com/channel/UCvzcof2jkHkWY756hJiw-ZQ"),n(k,"rel","noreferrer"),n(k,"target","_blank"),n(k,"class","svelte-vq5tkc"),n(I,"class","mb-8"),n(t,"class","flex flex-col items-center text-lg my-auto"),n(E,"href","/sobre"),n(E,"class","underline svelte-vq5tkc"),n(A,"class","text-center pb-10"),n(e,"class","absolute w-full h-full flex flex-col")},m(O,T){y(O,e,T),w&&w.m(e,null),_(e,l),_(e,t),$&&$.m(t,null),_(t,a),_(t,s),_(s,r),_(r,i),_(t,h),_(t,c),_(c,o),_(o,f),_(t,d),_(t,I),_(I,k),_(k,S),_(e,B),_(e,A),_(A,M),_(A,F),_(A,g),_(A,E),_(E,L),U=!0},p(O,T){O[2].params.cidade?w?w.p(O,T):(w=ve(O),w.c(),w.m(e,l)):w&&(w.d(1),w=null),O[2].params.cidade?$?$.p(O,T):($=ge(O),$.c(),$.m(t,a)):$&&($.d(1),$=null)},i(O){U||(D&&D.end(1),U=!0)},o(O){D=$e(e,J,{x:-300,opacity:300,duration:500}),U=!1},d(O){O&&m(e),w&&w.d(),$&&$.d(),O&&D&&D.end()}}}function Ne(u){let e,l,t,a;return l=new Te({}),{c(){e=p("div"),te(l.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var r=b(e);le(l.$$.fragment,r),r.forEach(m),this.h()},h(){n(e,"class","absolute w-full h-full overflow-y-auto")},m(s,r){y(s,e,r),ae(l,e,null),a=!0},p:V,i(s){a||(C(l.$$.fragment,s),t||Ee(()=>{t=Oe(e,J,{x:300,opacity:300,duration:500}),t.start()}),a=!0)},o(s){q(l.$$.fragment,s),a=!1},d(s){s&&m(e),se(l)}}}function ve(u){let e,l,t=he[u[2].params.cidade].name+"",a,s;return{c(){e=p("a"),l=p("h1"),a=H(t),this.h()},l(r){e=v(r,"A",{href:!0,class:!0});var i=b(e);l=v(i,"H1",{class:!0});var h=b(l);a=G(h,t),h.forEach(m),i.forEach(m),this.h()},h(){n(l,"class","center font-bold text-3xl pt-10 text-center"),n(e,"href",s=P+"/cidades/"+u[2].params.cidade),n(e,"class","svelte-vq5tkc")},m(r,i){y(r,e,i),_(e,l),_(l,a)},p(r,i){i&4&&t!==(t=he[r[2].params.cidade].name+"")&&ye(a,t),i&4&&s!==(s=P+"/cidades/"+r[2].params.cidade)&&n(e,"href",s)},d(r){r&&m(e)}}}function ge(u){let e,l,t,a,s;return{c(){e=p("li"),l=p("button"),t=H("CR\xC9DITOS"),this.h()},l(r){e=v(r,"LI",{class:!0});var i=b(e);l=v(i,"BUTTON",{});var h=b(l);t=G(h,"CR\xC9DITOS"),h.forEach(m),i.forEach(m),this.h()},h(){n(e,"class","mb-8")},m(r,i){y(r,e,i),_(e,l),_(l,t),a||(s=Y(l,"click",u[6]),a=!0)},p:V,d(r){r&&m(e),a=!1,s()}}}function Se(u){let e,l,t=u[2].url.pathname!=="/"&&u[2].url.pathname!=="/teste"&&pe(u);return{c(){t&&t.c(),e=me()},l(a){t&&t.l(a),e=me()},m(a,s){t&&t.m(a,s),y(a,e,s),l=!0},p(a,[s]){a[2].url.pathname!=="/"&&a[2].url.pathname!=="/teste"?t?(t.p(a,s),s&4&&C(t,1)):(t=pe(a),t.c(),C(t,1),t.m(e.parentNode,e)):t&&(X(),q(t,1,1,()=>{t=null}),ee())},i(a){l||(C(t),l=!0)},o(a){q(t),l=!1},d(a){t&&t.d(a),a&&m(e)}}}function Ue(u,e,l){let t,a;K(u,xe,f=>l(4,t=f)),K(u,ke,f=>l(2,a=f));let s=!1,r=!1;const i=()=>l(0,s=!1),h=()=>l(1,r=!1),c=()=>l(0,s=!s),o=()=>l(1,r=!0);return u.$$.update=()=>{u.$$.dirty&16&&t&&i()},[s,r,a,h,t,c,o]}class He extends Q{constructor(e){super(),W(this,e,Ue,Se,Z,{})}}function be(u){let e,l,t;return l=new qe({}),{c(){e=p("footer"),te(l.$$.fragment),this.h()},l(a){e=v(a,"FOOTER",{class:!0});var s=b(e);le(l.$$.fragment,s),s.forEach(m),this.h()},h(){n(e,"class","flex justify-center portrait:flex-wrap my-4")},m(a,s){y(a,e,s),ae(l,e,null),t=!0},i(a){t||(C(l.$$.fragment,a),t=!0)},o(a){q(l.$$.fragment,a),t=!1},d(a){a&&m(e),se(l)}}}function Ge(u){let e,l,t,a,s,r=!u[0].params.hasOwnProperty("cidade"),i;l=new He({});const h=u[3].default,c=Ie(h,u,u[2],null);let o=r&&be();return{c(){e=p("div"),te(l.$$.fragment),t=R(),a=p("main"),c&&c.c(),s=R(),o&&o.c(),this.h()},l(f){e=v(f,"DIV",{class:!0});var d=b(e);le(l.$$.fragment,d),t=x(d),a=v(d,"MAIN",{class:!0});var I=b(a);c&&c.l(I),I.forEach(m),s=x(d),o&&o.l(d),d.forEach(m),this.h()},h(){n(a,"class","flex-grow bg-theme-gray portrait:bg-transparent relative overflow-y-auto z-0"),n(e,"class","relative w-screen h-screen flex flex-col overflow-hidden")},m(f,d){y(f,e,d),ae(l,e,null),_(e,t),_(e,a),c&&c.m(a,null),_(e,s),o&&o.m(e,null),i=!0},p(f,[d]){c&&c.p&&(!i||d&4)&&Ae(c,h,f,f[2],i?Re(h,f[2],d,null):Me(f[2]),null),d&1&&(r=!f[0].params.hasOwnProperty("cidade")),r?o?d&1&&C(o,1):(o=be(),o.c(),C(o,1),o.m(e,null)):o&&(X(),q(o,1,1,()=>{o=null}),ee())},i(f){i||(C(l.$$.fragment,f),C(c,f),C(o),i=!0)},o(f){q(l.$$.fragment,f),q(c,f),q(o),i=!1},d(f){f&&m(e),se(l),c&&c.d(f),o&&o.d()}}}function Pe(u,e,l){let t;K(u,ke,i=>l(0,t=i));let{$$slots:a={},$$scope:s}=e;const r=!0;return u.$$set=i=>{"$$scope"in i&&l(2,s=i.$$scope)},[t,r,s,a]}class Ke extends Q{constructor(e){super(),W(this,e,Pe,Ge,Z,{prerender:1})}get prerender(){return this.$$.ctx[1]}}export{Ke as default};
