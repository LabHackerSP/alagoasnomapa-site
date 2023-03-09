import{S as ee,i as te,s as le,k as b,q as T,a as q,y as se,l as E,m as x,r as H,h as m,c as y,z as ae,n as v,b as $,E as d,A as oe,g as ie,d as ne,B as re,J as ce,C as z,F,u as D,W as V,I as ue,e as J}from"./index.fcc9cbf9.js";import{p as fe}from"./stores.a15ae280.js";import{d as me}from"./data.1951c4fb.js";import{S as he}from"./slideTransition.44b09cad.js";function K(u,l,o){const a=u.slice();return a[6]=l[o],a}function W(u,l,o){const a=u.slice();return a[9]=l[o],a}function Q(u,l,o){const a=u.slice();return a[12]=l[o],a}function R(u){let l,o=u[12]+"",a;return{c(){l=b("li"),a=T(o)},l(f){l=E(f,"LI",{});var r=x(l);a=H(r,o),r.forEach(m)},m(f,r){$(f,l,r),d(l,a)},p(f,r){r&2&&o!==(o=f[12]+"")&&D(a,o)},d(f){f&&m(l)}}}function X(u){let l,o=u[9].title+"",a,f,r,c,i=u[9].names,t=[];for(let e=0;e<i.length;e+=1)t[e]=R(Q(u,i,e));return{c(){l=b("h4"),a=T(o),f=q(),r=b("ol");for(let e=0;e<t.length;e+=1)t[e].c();c=q(),this.h()},l(e){l=E(e,"H4",{class:!0});var s=x(l);a=H(s,o),s.forEach(m),f=y(e),r=E(e,"OL",{});var n=x(r);for(let p=0;p<t.length;p+=1)t[p].l(n);c=y(n),n.forEach(m),this.h()},h(){v(l,"class","font-bold uppercase mt-4")},m(e,s){$(e,l,s),d(l,a),$(e,f,s),$(e,r,s);for(let n=0;n<t.length;n+=1)t[n].m(r,null);d(r,c)},p(e,s){if(s&2&&o!==(o=e[9].title+"")&&D(a,o),s&2){i=e[9].names;let n;for(n=0;n<i.length;n+=1){const p=Q(e,i,n);t[n]?t[n].p(p,s):(t[n]=R(p),t[n].c(),t[n].m(r,c))}for(;n<t.length;n+=1)t[n].d(1);t.length=i.length}},d(e){e&&m(l),e&&m(f),e&&m(r),V(t,e)}}}function Y(u){let l,o=u[6].section+"",a,f,r,c=u[6].values,i=[];for(let t=0;t<c.length;t+=1)i[t]=X(W(u,c,t));return{c(){l=b("h3"),a=T(o),f=q();for(let t=0;t<i.length;t+=1)i[t].c();r=J(),this.h()},l(t){l=E(t,"H3",{class:!0});var e=x(l);a=H(e,o),e.forEach(m),f=y(t);for(let s=0;s<i.length;s+=1)i[s].l(t);r=J(),this.h()},h(){v(l,"class","font-bold uppercase")},m(t,e){$(t,l,e),d(l,a),$(t,f,e);for(let s=0;s<i.length;s+=1)i[s].m(t,e);$(t,r,e)},p(t,e){if(e&2&&o!==(o=t[6].section+"")&&D(a,o),e&2){c=t[6].values;let s;for(s=0;s<c.length;s+=1){const n=W(t,c,s);i[s]?i[s].p(n,e):(i[s]=X(n),i[s].c(),i[s].m(r.parentNode,r))}for(;s<i.length;s+=1)i[s].d(1);i.length=c.length}},d(t){t&&m(l),t&&m(f),V(i,t),t&&m(r)}}}function _e(u){let l,o,a,f,r,c,i,t=u[1].name+"",e,s,n,p,N,A,j,I,C=u[1].info+"",L,O,P,w=u[1].about,g=[];for(let h=0;h<w.length;h+=1)g[h]=Y(K(u,w,h));return{c(){l=b("div"),o=b("button"),a=b("img"),r=q(),c=b("div"),i=b("h1"),e=T(t),s=q(),n=b("button"),p=b("img"),A=q(),j=b("div"),I=b("h2"),L=q();for(let h=0;h<g.length;h+=1)g[h].c();this.h()},l(h){l=E(h,"DIV",{class:!0});var k=x(l);o=E(k,"BUTTON",{class:!0});var _=x(o);a=E(_,"IMG",{class:!0,src:!0,alt:!0}),_.forEach(m),r=y(k),c=E(k,"DIV",{class:!0});var M=x(c);i=E(M,"H1",{class:!0});var G=x(i);e=H(G,t),G.forEach(m),M.forEach(m),s=y(k),n=E(k,"BUTTON",{class:!0});var U=x(n);p=E(U,"IMG",{class:!0,src:!0,alt:!0}),U.forEach(m),k.forEach(m),A=y(h),j=E(h,"DIV",{class:!0});var B=x(j);I=E(B,"H2",{class:!0});var Z=x(I);Z.forEach(m),L=y(B);for(let S=0;S<g.length;S+=1)g[S].l(B);B.forEach(m),this.h()},h(){v(a,"class","w-8 transform rotate-180"),z(a.src,f="/imgs/seta.svg")||v(a,"src",f),v(a,"alt","Proximo slide"),v(o,"class","flex items-center justify-center h-full text-white"),v(i,"class","font-bold text-3xl my-4 text-center"),v(c,"class","flex-grow"),v(p,"class","w-8"),z(p.src,N="/imgs/seta.svg")||v(p,"src",N),v(p,"alt","Proximo slide"),v(n,"class","flex items-center justify-center h-full text-white"),v(l,"class","flex py-2 bg-theme-gray items-center"),v(I,"class","font-thin mb-6"),v(j,"class","p-6 text-center")},m(h,k){$(h,l,k),d(l,o),d(o,a),d(l,r),d(l,c),d(c,i),d(i,e),d(l,s),d(l,n),d(n,p),$(h,A,k),$(h,j,k),d(j,I),I.innerHTML=C,d(j,L);for(let _=0;_<g.length;_+=1)g[_].m(j,null);O||(P=[F(o,"click",u[4]),F(n,"click",u[5])],O=!0)},p(h,k){if(k&2&&t!==(t=h[1].name+"")&&D(e,t),k&2&&C!==(C=h[1].info+"")&&(I.innerHTML=C),k&2){w=h[1].about;let _;for(_=0;_<w.length;_+=1){const M=K(h,w,_);g[_]?g[_].p(M,k):(g[_]=Y(M),g[_].c(),g[_].m(j,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=w.length}},d(h){h&&m(l),h&&m(A),h&&m(j),V(g,h),O=!1,ue(P)}}}function de(u){let l,o,a,f,r,c,i,t;return i=new he({props:{key:u[0],$$slots:{default:[_e]},$$scope:{ctx:u}}}),{c(){l=b("p"),o=b("b"),a=T("Alagoas no Mapa"),f=T(` é um projeto que estimula a cultura de
  colaboração e participação em meios digitais nos
  municípios alagoanos, com o objetivo de mapear territórios físicos
  e afetivos e possibilitando que existam mais informações sobre
  Alagoas na rede (internet), incentivando a autonomia e o protagonismo social
  dos cidadãos, principalmente da juventude – convertendo-se em benefícios
  para a sociedade e para o desenvolvimento sociocultural local.`),r=q(),c=b("div"),se(i.$$.fragment),this.h()},l(e){l=E(e,"P",{class:!0});var s=x(l);o=E(s,"B",{});var n=x(o);a=H(n,"Alagoas no Mapa"),n.forEach(m),f=H(s,` é um projeto que estimula a cultura de
  colaboração e participação em meios digitais nos
  municípios alagoanos, com o objetivo de mapear territórios físicos
  e afetivos e possibilitando que existam mais informações sobre
  Alagoas na rede (internet), incentivando a autonomia e o protagonismo social
  dos cidadãos, principalmente da juventude – convertendo-se em benefícios
  para a sociedade e para o desenvolvimento sociocultural local.`),s.forEach(m),r=y(e),c=E(e,"DIV",{class:!0});var p=x(c);ae(i.$$.fragment,p),p.forEach(m),this.h()},h(){v(l,"class","p-6"),v(c,"class","relative")},m(e,s){$(e,l,s),d(l,o),d(o,a),d(l,f),$(e,r,s),$(e,c,s),oe(i,c,null),t=!0},p(e,[s]){const n={};s&1&&(n.key=e[0]),s&32771&&(n.$$scope={dirty:s,ctx:e}),i.$set(n)},i(e){t||(ie(i.$$.fragment,e),t=!0)},o(e){ne(i.$$.fragment,e),t=!1},d(e){e&&m(l),e&&m(r),e&&m(c),re(i)}}}function pe(u,l,o){let a,f,r;ce(u,fe,e=>o(3,r=e));let c=["coqueiroseco","jequiadapraia","marechaldeodoro"];const i=()=>o(0,a=a>0?a-1:c.length-1),t=()=>o(0,a=a<c.length-1?a+1:0);return u.$$.update=()=>{u.$$.dirty&8&&o(0,a=r.params.cidade?c.indexOf(r.params.cidade):0),u.$$.dirty&1&&o(1,f=me[c[a]])},[a,f,c,r,i,t]}class ke extends ee{constructor(l){super(),te(this,l,pe,de,le,{})}}export{ke as C};
