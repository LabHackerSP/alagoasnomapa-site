import{S as qe,i as ze,s as Pe,e as E,t as H,c as k,a as I,h as N,d as c,b as O,g as v,M as u,j as K,k as S,m as q,X as ee,N as re,l as me,n as _e,x as oe,y as ae,z as ie,r as y,p as x,C as se,q as Me,O as De,o as Ge}from"../../../chunks/index-612c304d.js";import{b as ue}from"../../../chunks/singletons-1b661bce.js";import{I as ne,c as he,g as Ve,p as Fe}from"../../../chunks/Icon-df5effb3.js";const Re={chamada:"Fotografias realizadas",orientacao:"Amanda Moa"};var le={V\u00EDdeo:{chamada:"V\xEDdeos realizados",orientacao:"Danilo do Carmo"},Fotografia:Re,"Atua\xE7\xE3o para Redes Sociais":{chamada:"Capta\xE7\xE3o e roteiro para conte\xFAdos de redes sociais",orientacao:"Elaine Lima"},Produ\u00E7\u00E3o:{chamada:"Produ\xE7\xE3o Cultural",orientacao:"Evelyn Gomes"},Edi\u00E7\u00E3o:{chamada:"Edi\xE7\xE3o e Decupagem de Som e Imagem",orientacao:"Glauber Xavier"},Programa\u00E7\u00E3o:{chamada:"Programado",orientacao:"Eduardo Liron"}};function pe(r,e,a){const t=r.slice();return t[1]=e[a],t}function de(r,e,a){const t=r.slice();return t[4]=e[a],t}function ve(r,e,a){const t=r.slice();return t[7]=e[a],t}function ge(r,e,a){const t=r.slice();return t[10]=e[a],t}function be(r,e,a){const t=r.slice();return t[7]=e[a],t}function $e(r,e,a){const t=r.slice();return t[1]=e[a],t}function Ee(r,e,a){const t=r.slice();return t[17]=e[a],t}function ke(r){let e,a=r[0].slogan+"",t;return{c(){e=E("h3"),t=H(a),this.h()},l(i){e=k(i,"H3",{class:!0});var o=I(e);t=N(o,a),o.forEach(c),this.h()},h(){O(e,"class","mb-6")},m(i,o){v(i,e,o),u(e,t)},p(i,o){o&1&&a!==(a=i[0].slogan+"")&&K(t,a)},d(i){i&&c(e)}}}function we(r){let e,a=r[17]+"",t;return{c(){e=E("li"),t=H(a)},l(i){e=k(i,"LI",{});var o=I(e);t=N(o,a),o.forEach(c)},m(i,o){v(i,e,o),u(e,t)},p(i,o){o&1&&a!==(a=i[17]+"")&&K(t,a)},d(i){i&&c(e)}}}function Ae(r){let e,a=le[r[1].nome].chamada+"",t,i,o,n,h,f,m,j,g,P=le[r[1].nome].orientacao+"",U,V=r[1].participantes,w=[];for(let p=0;p<V.length;p+=1)w[p]=we(Ee(r,V,p));return{c(){e=E("h2"),t=H(a),i=H(" por:"),o=S(),n=E("ol");for(let p=0;p<w.length;p+=1)w[p].c();h=S(),f=E("li"),m=E("span"),j=H("Sob orienta\xE7\xE3o de:"),g=S(),U=H(P),this.h()},l(p){e=k(p,"H2",{});var z=I(e);t=N(z,a),i=N(z," por:"),z.forEach(c),o=q(p),n=k(p,"OL",{});var $=I(n);for(let T=0;T<w.length;T+=1)w[T].l($);h=q($),f=k($,"LI",{});var C=I(f);m=k(C,"SPAN",{class:!0});var B=I(m);j=N(B,"Sob orienta\xE7\xE3o de:"),B.forEach(c),g=q(C),U=N(C,P),C.forEach(c),$.forEach(c),this.h()},h(){O(m,"class","font-bold")},m(p,z){v(p,e,z),u(e,t),u(e,i),v(p,o,z),v(p,n,z);for(let $=0;$<w.length;$+=1)w[$].m(n,null);u(n,h),u(n,f),u(f,m),u(m,j),u(f,g),u(f,U)},p(p,z){if(z&1&&a!==(a=le[p[1].nome].chamada+"")&&K(t,a),z&1){V=p[1].participantes;let $;for($=0;$<V.length;$+=1){const C=Ee(p,V,$);w[$]?w[$].p(C,z):(w[$]=we(C),w[$].c(),w[$].m(n,h))}for(;$<w.length;$+=1)w[$].d(1);w.length=V.length}z&1&&P!==(P=le[p[1].nome].orientacao+"")&&K(U,P)},d(p){p&&c(e),p&&c(o),p&&c(n),ee(w,p)}}}function Ie(r){let e,a=r[7]+"",t;return{c(){e=E("li"),t=H(a)},l(i){e=k(i,"LI",{});var o=I(e);t=N(o,a),o.forEach(c)},m(i,o){v(i,e,o),u(e,t)},p(i,o){o&1&&a!==(a=i[7]+"")&&K(t,a)},d(i){i&&c(e)}}}function je(r){let e,a=r[10].titulo+"",t,i,o,n,h=r[10].nomes,f=[];for(let m=0;m<h.length;m+=1)f[m]=Ie(be(r,h,m));return{c(){e=E("h2"),t=H(a),i=H(":"),o=S(),n=E("ol");for(let m=0;m<f.length;m+=1)f[m].c()},l(m){e=k(m,"H2",{});var j=I(e);t=N(j,a),i=N(j,":"),j.forEach(c),o=q(m),n=k(m,"OL",{});var g=I(n);for(let P=0;P<f.length;P+=1)f[P].l(g);g.forEach(c)},m(m,j){v(m,e,j),u(e,t),u(e,i),v(m,o,j),v(m,n,j);for(let g=0;g<f.length;g+=1)f[g].m(n,null)},p(m,j){if(j&1&&a!==(a=m[10].titulo+"")&&K(t,a),j&1){h=m[10].nomes;let g;for(g=0;g<h.length;g+=1){const P=be(m,h,g);f[g]?f[g].p(P,j):(f[g]=Ie(P),f[g].c(),f[g].m(n,null))}for(;g<f.length;g+=1)f[g].d(1);f.length=h.length}},d(m){m&&c(e),m&&c(o),m&&c(n),ee(f,m)}}}function Ce(r){let e,a=r[4].titulo+"",t,i;return{c(){e=E("h2"),t=H(a),i=H(":")},l(o){e=k(o,"H2",{});var n=I(e);t=N(n,a),i=N(n,":"),n.forEach(c)},m(o,n){v(o,e,n),u(e,t),u(e,i)},p(o,n){n&1&&a!==(a=o[4].titulo+"")&&K(t,a)},d(o){o&&c(e)}}}function Le(r){let e,a=r[7]+"",t;return{c(){e=E("li"),t=H(a)},l(i){e=k(i,"LI",{});var o=I(e);t=N(o,a),o.forEach(c)},m(i,o){v(i,e,o),u(e,t)},p(i,o){o&1&&a!==(a=i[7]+"")&&K(t,a)},d(i){i&&c(e)}}}function He(r){let e,a,t="titulo"in r[4]&&Ce(r),i=r[4].nomes,o=[];for(let n=0;n<i.length;n+=1)o[n]=Le(ve(r,i,n));return{c(){t&&t.c(),e=S(),a=E("ol");for(let n=0;n<o.length;n+=1)o[n].c()},l(n){t&&t.l(n),e=q(n),a=k(n,"OL",{});var h=I(a);for(let f=0;f<o.length;f+=1)o[f].l(h);h.forEach(c)},m(n,h){t&&t.m(n,h),v(n,e,h),v(n,a,h);for(let f=0;f<o.length;f+=1)o[f].m(a,null)},p(n,h){if("titulo"in n[4]?t?t.p(n,h):(t=Ce(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),h&1){i=n[4].nomes;let f;for(f=0;f<i.length;f+=1){const m=ve(n,i,f);o[f]?o[f].p(m,h):(o[f]=Le(m),o[f].c(),o[f].m(a,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=i.length}},d(n){t&&t.d(n),n&&c(e),n&&c(a),ee(o,n)}}}function Ne(r){let e,a=r[1].nome+"",t,i,o=le[r[1].nome].orientacao+"",n;return{c(){e=E("li"),t=H(a),i=H(" - "),n=H(o)},l(h){e=k(h,"LI",{});var f=I(e);t=N(f,a),i=N(f," - "),n=N(f,o),f.forEach(c)},m(h,f){v(h,e,f),u(e,t),u(e,i),u(e,n)},p(h,f){f&1&&a!==(a=h[1].nome+"")&&K(t,a),f&1&&o!==(o=le[h[1].nome].orientacao+"")&&K(n,o)},d(h){h&&c(e)}}}function Oe(r){let e,a,t;return{c(){e=E("img"),this.h()},l(i){e=k(i,"IMG",{src:!0,alt:!0}),this.h()},h(){re(e.src,a=r[0].logo.src)||O(e,"src",a),O(e,"alt",t=r[0].logo.alt)},m(i,o){v(i,e,o)},p(i,o){o&1&&!re(e.src,a=i[0].logo.src)&&O(e,"src",a),o&1&&t!==(t=i[0].logo.alt)&&O(e,"alt",t)},d(i){i&&c(e)}}}function Te(r){let e,a,t=r[0].cidade+"",i,o,n,h,f,m,j,g,P,U,V,w,p,z,$,C,B,T,Z,W,J,M="slogan"in r[0]&&ke(r),Q=r[0].oficinas,L=[];for(let l=0;l<Q.length;l+=1)L[l]=Ae($e(r,Q,l));let Y=r[0].extras,d=[];for(let l=0;l<Y.length;l+=1)d[l]=je(ge(r,Y,l));let b=r[0].agradecimentos,A=[];for(let l=0;l<b.length;l+=1)A[l]=He(de(r,b,l));let F=r[0].oficinas,D=[];for(let l=0;l<F.length;l+=1)D[l]=Ne(pe(r,F,l));let G="logo"in r[0]&&Oe(r);return{c(){e=E("h1"),a=H("Cidade de "),i=H(t),o=S(),M&&M.c(),n=S();for(let l=0;l<L.length;l+=1)L[l].c();h=S(),f=E("h2"),m=H("Textos foram feitos coletivamente sob orienta\xE7\xE3o de:"),j=S(),g=E("p"),P=H("Renata Czarny"),U=S();for(let l=0;l<d.length;l+=1)d[l].c();V=S(),w=E("h2"),p=H("Agradecimentos"),z=S();for(let l=0;l<A.length;l+=1)A[l].c();$=S(),C=E("h2"),B=H("Oficinas realizadas:"),T=S(),Z=E("ol");for(let l=0;l<D.length;l+=1)D[l].c();W=S(),G&&G.c(),J=me(),this.h()},l(l){e=k(l,"H1",{});var _=I(e);a=N(_,"Cidade de "),i=N(_,t),_.forEach(c),o=q(l),M&&M.l(l),n=q(l);for(let X=0;X<L.length;X+=1)L[X].l(l);h=q(l),f=k(l,"H2",{});var s=I(f);m=N(s,"Textos foram feitos coletivamente sob orienta\xE7\xE3o de:"),s.forEach(c),j=q(l),g=k(l,"P",{});var R=I(g);P=N(R,"Renata Czarny"),R.forEach(c),U=q(l);for(let X=0;X<d.length;X+=1)d[X].l(l);V=q(l),w=k(l,"H2",{class:!0});var te=I(w);p=N(te,"Agradecimentos"),te.forEach(c),z=q(l);for(let X=0;X<A.length;X+=1)A[X].l(l);$=q(l),C=k(l,"H2",{class:!0});var fe=I(C);B=N(fe,"Oficinas realizadas:"),fe.forEach(c),T=q(l),Z=k(l,"OL",{});var ce=I(Z);for(let X=0;X<D.length;X+=1)D[X].l(ce);ce.forEach(c),W=q(l),G&&G.l(l),J=me(),this.h()},h(){O(w,"class","text-lg mb-6 mt-12"),O(C,"class","text-lg mt-12")},m(l,_){v(l,e,_),u(e,a),u(e,i),v(l,o,_),M&&M.m(l,_),v(l,n,_);for(let s=0;s<L.length;s+=1)L[s].m(l,_);v(l,h,_),v(l,f,_),u(f,m),v(l,j,_),v(l,g,_),u(g,P),v(l,U,_);for(let s=0;s<d.length;s+=1)d[s].m(l,_);v(l,V,_),v(l,w,_),u(w,p),v(l,z,_);for(let s=0;s<A.length;s+=1)A[s].m(l,_);v(l,$,_),v(l,C,_),u(C,B),v(l,T,_),v(l,Z,_);for(let s=0;s<D.length;s+=1)D[s].m(Z,null);v(l,W,_),G&&G.m(l,_),v(l,J,_)},p(l,[_]){if(_&1&&t!==(t=l[0].cidade+"")&&K(i,t),"slogan"in l[0]?M?M.p(l,_):(M=ke(l),M.c(),M.m(n.parentNode,n)):M&&(M.d(1),M=null),_&1){Q=l[0].oficinas;let s;for(s=0;s<Q.length;s+=1){const R=$e(l,Q,s);L[s]?L[s].p(R,_):(L[s]=Ae(R),L[s].c(),L[s].m(h.parentNode,h))}for(;s<L.length;s+=1)L[s].d(1);L.length=Q.length}if(_&1){Y=l[0].extras;let s;for(s=0;s<Y.length;s+=1){const R=ge(l,Y,s);d[s]?d[s].p(R,_):(d[s]=je(R),d[s].c(),d[s].m(V.parentNode,V))}for(;s<d.length;s+=1)d[s].d(1);d.length=Y.length}if(_&1){b=l[0].agradecimentos;let s;for(s=0;s<b.length;s+=1){const R=de(l,b,s);A[s]?A[s].p(R,_):(A[s]=He(R),A[s].c(),A[s].m($.parentNode,$))}for(;s<A.length;s+=1)A[s].d(1);A.length=b.length}if(_&1){F=l[0].oficinas;let s;for(s=0;s<F.length;s+=1){const R=pe(l,F,s);D[s]?D[s].p(R,_):(D[s]=Ne(R),D[s].c(),D[s].m(Z,null))}for(;s<D.length;s+=1)D[s].d(1);D.length=F.length}"logo"in l[0]?G?G.p(l,_):(G=Oe(l),G.c(),G.m(J.parentNode,J)):G&&(G.d(1),G=null)},i:_e,o:_e,d(l){l&&c(e),l&&c(o),M&&M.d(l),l&&c(n),ee(L,l),l&&c(h),l&&c(f),l&&c(j),l&&c(g),l&&c(U),ee(d,l),l&&c(V),l&&c(w),l&&c(z),ee(A,l),l&&c($),l&&c(C),l&&c(T),l&&c(Z),ee(D,l),l&&c(W),G&&G.d(l),l&&c(J)}}}function Xe(r,e,a){let{infos:t}=e;return r.$$set=i=>{"infos"in i&&a(0,t=i.infos)},[t]}class Be extends qe{constructor(e){super(),ze(this,e,Xe,Te,Pe,{infos:0})}}function Se(r){let e,a;return e=new Be({props:{infos:r[0]}}),{c(){oe(e.$$.fragment)},l(t){ae(e.$$.fragment,t)},m(t,i){ie(e,t,i),a=!0},p(t,i){const o={};i&1&&(o.infos=t[0]),e.$set(o)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){x(e.$$.fragment,t),a=!1},d(t){se(e,t)}}}function Je(r){let e,a,t,i,o,n,h,f,m,j,g,P,U,V=Object.keys(r[0]).length>0,w,p,z,$,C,B,T,Z,W,J,M,Q,L,Y;a=new ne({props:{width:"100%",icon:"ci:off-close"}});let d=V&&Se(r);return T=new ne({props:{width:"100%",icon:"bxl:instagram"}}),J=new ne({props:{width:"100%",icon:"bxl:flickr-square"}}),L=new ne({props:{width:"100%",icon:"bxl:youtube"}}),{c(){e=E("a"),oe(a.$$.fragment),i=S(),o=E("div"),n=E("img"),f=S(),m=E("p"),j=E("b"),g=H("Alagoas no Mapa"),P=H(` \xE9 um projeto que estimula a cultura de
    colabora\xE7\xE3o e participa\xE7\xE3o em meios digitais nos
    munic\xEDpios alagoanos, com o objetivo de mapear territ\xF3rios f\xEDsicos
    e afetivos e possibilitando que existam mais informa\xE7\xF5es sobre
    Alagoas na rede (internet), incentivando a autonomia e o protagonismo social
    dos cidad\xE3os, principalmente da juventude \u2013 convertendo-se em benef\xEDcios
    para a sociedade e para o desenvolvimento sociocultural local.\xA0`),U=S(),d&&d.c(),w=S(),p=E("h2"),z=H("Saiba mais:"),$=S(),C=E("div"),B=E("a"),oe(T.$$.fragment),Z=S(),W=E("a"),oe(J.$$.fragment),M=S(),Q=E("a"),oe(L.$$.fragment),this.h()},l(b){e=k(b,"A",{href:!0,class:!0});var A=I(e);ae(a.$$.fragment,A),A.forEach(c),i=q(b),o=k(b,"DIV",{class:!0});var F=I(o);n=k(F,"IMG",{src:!0,alt:!0}),f=q(F),m=k(F,"P",{});var D=I(m);j=k(D,"B",{});var G=I(j);g=N(G,"Alagoas no Mapa"),G.forEach(c),P=N(D,` \xE9 um projeto que estimula a cultura de
    colabora\xE7\xE3o e participa\xE7\xE3o em meios digitais nos
    munic\xEDpios alagoanos, com o objetivo de mapear territ\xF3rios f\xEDsicos
    e afetivos e possibilitando que existam mais informa\xE7\xF5es sobre
    Alagoas na rede (internet), incentivando a autonomia e o protagonismo social
    dos cidad\xE3os, principalmente da juventude \u2013 convertendo-se em benef\xEDcios
    para a sociedade e para o desenvolvimento sociocultural local.\xA0`),D.forEach(c),U=q(F),d&&d.l(F),w=q(F),p=k(F,"H2",{class:!0});var l=I(p);z=N(l,"Saiba mais:"),l.forEach(c),$=q(F),C=k(F,"DIV",{class:!0});var _=I(C);B=k(_,"A",{href:!0,class:!0});var s=I(B);ae(T.$$.fragment,s),s.forEach(c),Z=q(_),W=k(_,"A",{href:!0,class:!0});var R=I(W);ae(J.$$.fragment,R),R.forEach(c),M=q(_),Q=k(_,"A",{href:!0,class:!0});var te=I(Q);ae(L.$$.fragment,te),te.forEach(c),_.forEach(c),F.forEach(c),this.h()},h(){O(e,"href",t=ue+"/"+r[1].params.cidade),O(e,"class","fixed top-4 right-4 w-8 transition-colors"),re(n.src,h="/logo_full.jpg")||O(n,"src",h),O(n,"alt","logo do projeto representando o mapa de alagoas"),O(p,"class","mt-12 text-lg"),O(B,"href","https://www.instagram.com/alagoasnomapa/"),O(B,"class","svelte-fs6r7r"),O(W,"href","https://www.flickr.com/photos/195400239@N08/albums"),O(W,"class","svelte-fs6r7r"),O(Q,"href","https://www.youtube.com/channel/UCvzcof2jkHkWY756hJiw-ZQ"),O(Q,"class","svelte-fs6r7r"),O(C,"class","links flex mt-2 svelte-fs6r7r"),O(o,"class","max-w-4xl mx-auto py-32")},m(b,A){v(b,e,A),ie(a,e,null),v(b,i,A),v(b,o,A),u(o,n),u(o,f),u(o,m),u(m,j),u(j,g),u(m,P),u(o,U),d&&d.m(o,null),u(o,w),u(o,p),u(p,z),u(o,$),u(o,C),u(C,B),ie(T,B,null),u(C,Z),u(C,W),ie(J,W,null),u(C,M),u(C,Q),ie(L,Q,null),Y=!0},p(b,[A]){(!Y||A&2&&t!==(t=ue+"/"+b[1].params.cidade))&&O(e,"href",t),A&1&&(V=Object.keys(b[0]).length>0),V?d?(d.p(b,A),A&1&&y(d,1)):(d=Se(b),d.c(),y(d,1),d.m(o,w)):d&&(Ge(),x(d,1,1,()=>{d=null}),Me())},i(b){Y||(y(a.$$.fragment,b),y(d),y(T.$$.fragment,b),y(J.$$.fragment,b),y(L.$$.fragment,b),Y=!0)},o(b){x(a.$$.fragment,b),x(d),x(T.$$.fragment,b),x(J.$$.fragment,b),x(L.$$.fragment,b),Y=!1},d(b){b&&c(e),se(a),b&&c(i),b&&c(o),d&&d.d(),se(T),se(J),se(L)}}}function Qe(r,e,a){let t;De(r,Fe,o=>a(1,t=o));let i={};return t.params.cidade in he?i=he[t.params.cidade]:Ve("/"),[i,t]}class Ze extends qe{constructor(e){super(),ze(this,e,Qe,Je,Pe,{})}}export{Ze as default};
