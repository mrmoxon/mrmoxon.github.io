import{s as I,a as $,n as A,o as C}from"../chunks/scheduler.BfJEPAwo.js";import{S as H,i as S,e as d,t as T,s as D,H as q,c as p,a as v,b as M,d as c,f as j,n as P,l as i,g,h as f}from"../chunks/index.DriAOf5A.js";import{m as R}from"../chunks/marked.esm.CbypJbNQ.js";function V(y){let a,e,t,u,o,n,E,_,r,m;return{c(){a=d("div"),e=d("div"),t=d("span"),u=T(w),o=D(),n=d("img"),_=D(),r=d("article"),m=new q(!1),this.h()},l(s){a=p(s,"DIV",{class:!0});var l=v(a);e=p(l,"DIV",{class:!0});var h=v(e);t=p(h,"SPAN",{class:!0});var k=v(t);u=M(k,w),k.forEach(c),o=j(h),n=p(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(c),l.forEach(c),_=j(s),r=p(s,"ARTICLE",{class:!0});var x=v(r);m=P(x,!1),x.forEach(c),this.h()},h(){i(t,"class","essay-date svelte-y1kj79"),$(n.src,E="/oscar.png")||i(n,"src",E),i(n,"alt","Oscar"),i(n,"class","oscar-icon svelte-y1kj79"),i(e,"class","essay-metadata svelte-y1kj79"),i(a,"class","essay-header svelte-y1kj79"),m.a=null,i(r,"class","essay-content")},m(s,l){g(s,a,l),f(a,e),f(e,t),f(t,u),f(e,o),f(e,n),g(s,_,l),g(s,r,l),m.m(y[0],r)},p(s,[l]){l&1&&m.p(s[0])},i:A,o:A,d(s){s&&(c(a),c(_),c(r))}}}const w="DATE DAY, YEAR";function Y(y,a,e){let t="";return C(async()=>{const o=await(await fetch("/content/pervasive-intelligence.md")).text();e(0,t=R(o))}),[t]}class N extends H{constructor(a){super(),S(this,a,Y,V,I,{})}}export{N as component};