(this["webpackJsonpreact-poker"]=this["webpackJsonpreact-poker"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),r=n.n(s),i=(n(10),n(2)),u=(n(11),n(0)),o=function(e){return Object(u.jsx)("div",{className:"table",children:e.children})},l=(n(13),function(e){return Object(u.jsx)("button",{type:"button",className:e.className,onClick:e.onClick,children:Object(u.jsx)("span",{className:"buttonText",children:e.buttonName})})}),j=n(3),b=(n(14),function(e){return Object(u.jsxs)("div",{className:"card ".concat(e.winner),children:[Object(u.jsx)("span",{children:e.value}),Object(u.jsx)("span",{children:e.suite})]})}),d=(n(15),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(i.a)(s,2),d=r[0],O=(r[1],Object(c.useState)([])),f=Object(i.a)(O,2),h=f[0],m=(f[1],Object(c.useState)(!1)),x=Object(i.a)(m,2),p=x[0],v=x[1],N=Object(c.useState)(!1),S=Object(i.a)(N,2),w=S[0],g=S[1],y=["Hearts","Diamonds","Spades","Clubs"],C=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],k=function(){for(var e=[],t=0;t<y.length;t++)for(var n=0;n<C.length;n++){var c=C[n],a=y[t];e.push({value:c,suit:a})}return e}(),A=function(e,t){var n,c=Math.floor(51*Math.random()),a=e[c].value,s=e[c].suit;return"Hearts"===s&&(n=Object(u.jsx)(j.c,{})),"Diamonds"===s&&(n=Object(u.jsx)(j.b,{})),"Spades"===s&&(n=Object(u.jsx)(j.d,{})),"Clubs"===s&&(n=Object(u.jsx)(j.a,{})),t.push({cardValue:a,entity:n})};Array.from(Array(5)).forEach((function(){A(k,d)})),Array.from(Array(5)).forEach((function(){A(k,h)}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"cards-container",children:n&&Object(u.jsx)("div",{className:"card-container ml",children:d.slice(0,5).map((function(e,t){return Object(u.jsx)(b,{value:e.cardValue,suite:e.entity,winner:p?"winner":""},t)}))})}),n&&Object(u.jsxs)("p",{className:"winner-title",children:["WINNER:"," ",(p?1:"")||(w?2:"")||(p||w?"":"DRAW")]}),Object(u.jsxs)(o,{children:[Object(u.jsx)(l,{className:"button",buttonName:"Generate cards",onClick:function(){console.log(d,h)}}),Object(u.jsx)(l,{className:"button",buttonName:"Show cards",onClick:function(){a(!n),function(){var e=new Set(d.map((function(e){return e.cardValue}))),t=new Set(h.map((function(e){return e.cardValue})));console.log(e,t),e.size<t.size&&v(!0),e.size>t.size&&g(!0),e.size,t.size}()}})]}),n&&Object(u.jsx)("div",{className:"card-container mr",children:h.slice(0,5).map((function(e,t){return Object(u.jsx)(b,{value:e.cardValue,suite:e.entity,winner:w?"winner":""},t)}))})]})}),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),O()}],[[16,1,2]]]);
//# sourceMappingURL=main.9e9af5a9.chunk.js.map