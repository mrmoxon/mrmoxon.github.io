import{s as ie,a as ue,n as W}from"../chunks/scheduler.BfJEPAwo.js";import{S as he,i as de,e as d,s as S,t as M,c as f,a as _,k as fe,f as P,d as h,b as D,l as i,g as H,h as l,o as se,p as le}from"../chunks/index.DriAOf5A.js";function J(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function ae(o,e,t){const a=o.slice();return a[0]=e[t].title,a[1]=e[t].date,a[2]=e[t].url,a[4]=t,a}function ne(o,e,t){const a=o.slice();return a[0]=e[t].title,a[2]=e[t].url,a[4]=t,a}function re(o){let e,t=o[0]+"",a,m=o[4]<Y.length-1?", ":".",n;return{c(){e=d("a"),a=M(t),n=M(m),this.h()},l(r){e=f(r,"A",{href:!0,class:!0});var u=_(e);a=D(u,t),u.forEach(h),n=D(r,m),this.h()},h(){i(e,"href",o[2]),i(e,"class","essay-recommendation-link svelte-ia6nso")},m(r,u){H(r,e,u),l(e,a),H(r,n,u)},p:W,d(r){r&&(h(e),h(n))}}}function ve(o){let e,t,a,m=o[0]+"",n,r,u,V=o[1]+"",k,A;return{c(){e=d("a"),t=d("div"),a=d("span"),n=M(m),r=S(),u=d("span"),k=M(V),A=S(),this.h()},l(b){e=f(b,"A",{href:!0,class:!0});var v=_(e);t=f(v,"DIV",{class:!0});var E=_(t);a=f(E,"SPAN",{class:!0});var w=_(a);n=D(w,m),w.forEach(h),r=P(E),u=f(E,"SPAN",{class:!0});var L=_(u);k=D(L,V),L.forEach(h),E.forEach(h),A=P(v),v.forEach(h),this.h()},h(){i(a,"class","essay-title svelte-ia6nso"),i(u,"class","essay-date svelte-ia6nso"),i(t,"class","essay-rectangle svelte-ia6nso"),i(e,"href",o[2]),i(e,"class","essay-link svelte-ia6nso")},m(b,v){H(b,e,v),l(e,t),l(t,a),l(a,n),l(t,r),l(t,u),l(u,k),l(e,A)},p:W,d(b){b&&h(e)}}}function me(o){let e,t,a,m=o[0]+"",n,r,u,V=o[1]+"",k,A;return{c(){e=d("a"),t=d("div"),a=d("span"),n=M(m),r=S(),u=d("span"),k=M(V),A=S(),this.h()},l(b){e=f(b,"A",{href:!0,target:!0,rel:!0,class:!0});var v=_(e);t=f(v,"DIV",{class:!0});var E=_(t);a=f(E,"SPAN",{class:!0});var w=_(a);n=D(w,m),w.forEach(h),r=P(E),u=f(E,"SPAN",{class:!0});var L=_(u);k=D(L,V),L.forEach(h),E.forEach(h),A=P(v),v.forEach(h),this.h()},h(){i(a,"class","essay-title svelte-ia6nso"),i(u,"class","essay-date svelte-ia6nso"),i(t,"class","essay-rectangle svelte-ia6nso"),i(e,"href",o[2]),i(e,"target","_blank"),i(e,"rel","noopener noreferrer"),i(e,"class","essay-link svelte-ia6nso")},m(b,v){H(b,e,v),l(e,t),l(t,a),l(a,n),l(t,r),l(t,u),l(u,k),l(e,A)},p:W,d(b){b&&h(e)}}}function oe(o){let e;function t(n,r){return n[2].startsWith("http")?me:ve}let m=t(o)(o);return{c(){m.c(),e=le()},l(n){m.l(n),e=le()},m(n,r){m.m(n,r),H(n,e,r)},p(n,r){m.p(n,r)},d(n){n&&h(e),m.d(n)}}}function _e(o){let e,t,a="Making some of my essays available here.",m,n,r,u,V,k,A,b,v,E,w=X.title+"",L,R,T,Z=X.date+"",U,B,O,j,F,z,K,G,x=J(Y),p=[];for(let c=0;c<x.length;c+=1)p[c]=re(ne(o,x,c));let C=J(ce),y=[];for(let c=0;c<C.length;c+=1)y[c]=oe(ae(o,C,c));return{c(){e=d("div"),t=d("p"),t.textContent=a,m=S(),n=d("a"),r=d("div"),u=d("img"),k=S(),A=d("div"),b=S(),v=d("div"),E=d("span"),L=M(w),R=S(),T=d("span"),U=M(Z),B=S(),O=d("br"),j=S(),F=d("p"),z=M(`If you're not sure which to read, try 
    `);for(let c=0;c<p.length;c+=1)p[c].c();K=S(),G=d("div");for(let c=0;c<y.length;c+=1)y[c].c();this.h()},l(c){e=f(c,"DIV",{class:!0});var g=_(e);t=f(g,"P",{class:!0,"data-svelte-h":!0}),fe(t)!=="svelte-1mr2ges"&&(t.textContent=a),m=P(g),n=f(g,"A",{href:!0,class:!0});var s=_(n);r=f(s,"DIV",{class:!0});var I=_(r);u=f(I,"IMG",{src:!0,alt:!0,class:!0}),k=P(I),A=f(I,"DIV",{class:!0}),_(A).forEach(h),b=P(I),v=f(I,"DIV",{class:!0});var q=_(v);E=f(q,"SPAN",{class:!0});var $=_(E);L=D($,w),$.forEach(h),R=P(q),T=f(q,"SPAN",{class:!0});var ee=_(T);U=D(ee,Z),ee.forEach(h),q.forEach(h),I.forEach(h),s.forEach(h),B=P(g),O=f(g,"BR",{}),j=P(g),F=f(g,"P",{class:!0});var Q=_(F);z=D(Q,`If you're not sure which to read, try 
    `);for(let N=0;N<p.length;N+=1)p[N].l(Q);Q.forEach(h),K=P(g),G=f(g,"DIV",{class:!0});var te=_(G);for(let N=0;N<y.length;N+=1)y[N].l(te);te.forEach(h),g.forEach(h),this.h()},h(){i(t,"class","intro"),ue(u.src,V="/star.png")||i(u,"src",V),i(u,"alt","Featured"),i(u,"class","featured-icon svelte-ia6nso"),i(A,"class","divider svelte-ia6nso"),i(E,"class","essay-title svelte-ia6nso"),i(T,"class","essay-date svelte-ia6nso"),i(v,"class","essay-content svelte-ia6nso"),i(r,"class","featured-essay svelte-ia6nso"),i(n,"href",X.url),i(n,"class","featured-essay-link svelte-ia6nso"),i(F,"class","recommendation"),i(G,"class","essays-container svelte-ia6nso"),i(e,"class","central-column svelte-ia6nso")},m(c,g){H(c,e,g),l(e,t),l(e,m),l(e,n),l(n,r),l(r,u),l(r,k),l(r,A),l(r,b),l(r,v),l(v,E),l(E,L),l(v,R),l(v,T),l(T,U),l(e,B),l(e,O),l(e,j),l(e,F),l(F,z);for(let s=0;s<p.length;s+=1)p[s]&&p[s].m(F,null);l(e,K),l(e,G);for(let s=0;s<y.length;s+=1)y[s]&&y[s].m(G,null)},p(c,[g]){if(g&0){x=J(Y);let s;for(s=0;s<x.length;s+=1){const I=ne(c,x,s);p[s]?p[s].p(I,g):(p[s]=re(I),p[s].c(),p[s].m(F,null))}for(;s<p.length;s+=1)p[s].d(1);p.length=x.length}if(g&0){C=J(ce);let s;for(s=0;s<C.length;s+=1){const I=ae(c,C,s);y[s]?y[s].p(I,g):(y[s]=oe(I),y[s].c(),y[s].m(G,null))}for(;s<y.length;s+=1)y[s].d(1);y.length=C.length}},i:W,o:W,d(c){c&&h(e),se(p,c),se(y,c)}}}const X={title:"Swarm Intelligence: How Agents Will Accelerate Research",date:"Feb 2024",url:"/essays/agent-swarms"},ce=[{title:"Pervasive Intelligence Systems: Learning to Live with AGI",date:"Apr 2023",url:"/essays/pervasive-intelligence"},{title:"Three Stages of AGI",date:"Apr 2023",url:"/essays/three-stages-of-agi"},{title:"When Freemium Goes Too Far",date:"Mar 2023",url:"/essays/freemium"},{title:"The Threat of Automation (A Study)",date:"Mar 2023",url:"https://medium.com/@oscarmoxon/the-threat-of-automation-an-economic-perspective-fd26f716b5db"},{title:"The Holy Grail of Invention",date:"Oct 2022",url:"/essays/holy-grail"},{title:"Live Long Enough to Live Forever",date:"Jul 2022",url:"/essays/dont-die"},{title:"Myths, Memes and Uncertainty",date:"Jul 2022",url:"/essays/myths-memes-uncertainty"}];let Y=[{title:"Live Long Enough to Live Forever",url:"/essays/dont-die"},{title:"Myths, Memes & Uncertainty",url:"/essays/myths-memes-uncertainty"},{title:"The Holy Grail of Invention",url:"/essays/holy-grail"}];class ge extends he{constructor(e){super(),de(this,e,null,_e,ie,{})}}export{ge as component};