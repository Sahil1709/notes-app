(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{58:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},88:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),i=n.n(r),o=(n(81),n(66)),s=n(11),j=n(34),l=(n(82),n(134)),b=n(137),d=n(139),u=n(141),x=n(140),O=n(63),h=n.n(O),p=n(64),f=n.n(p),v=n(144),m=n(67),N=n(143),g=n(3),k=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function C(){var e=k(),t=a.a.useState(!0),n=Object(j.a)(t,2),c=n[0],r=(n[1],a.a.useState(null)),i=Object(j.a)(r,2),o=i[0],s=i[1],l=Boolean(o),O=function(){s(null)};return Object(g.jsx)("div",{className:e.root,children:Object(g.jsx)(b.a,{position:"static",children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(x.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(g.jsx)(h.a,{})}),Object(g.jsx)(u.a,{variant:"h6",className:e.title,children:"Notes"}),Object(g.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(g.jsx)(N.a,{id:"standard-search",label:"Search field",type:"search",style:{color:"white",backgroundColor:"white"}})}),c&&Object(g.jsxs)("div",{children:[Object(g.jsx)(x.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(g.jsx)(f.a,{})}),Object(g.jsxs)(m.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:O,children:[Object(g.jsx)(v.a,{onClick:O,children:"Profile"}),Object(g.jsx)(v.a,{onClick:O,children:"My account"})]})]})]})})})}n(88);function S(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("footer",{children:Object(g.jsx)("div",{className:"foot",children:"\xa92021 Sahil Gupta"})})]})}var w=n(142),y=n(52),T=n.n(y),I=(n(58),n(68)),B=n(65),G=n.n(B),z=function(e){var t=e.inputText,n=e.setInputText,c=e.note,a=e.setNote;return Object(g.jsxs)("form",{children:[Object(g.jsx)(N.a,{value:t,id:"outlined-basic",label:"New Note",onChange:function(e){n(e.target.value)},variant:"outlined"}),Object(g.jsx)(w.a,{startIcon:Object(g.jsx)(G.a,{}),variant:"outlined",onClick:function(e){e.preventDefault(),a([].concat(Object(I.a)(c),[{text:t,id:1e3*Math.random()}])),n("")},size:"large",children:"Save"})]})},D=function(e){var t=e.note1,n=e.text,c=e.note,a=e.setNote;e.key;return Object(g.jsxs)("div",{className:"card-container",children:[Object(g.jsx)("div",{className:"card",children:Object(g.jsx)("p",{className:"text",children:n})}),Object(g.jsx)("div",{className:"btnHolder",children:Object(g.jsx)(w.a,{id:"btn",variant:"contained",endIcon:Object(g.jsx)(T.a,{}),color:"secondary",onClick:function(e){a(c.filter((function(e){return e.id!==t.id})))},children:"Delete note"})})]})},E=function(e){var t=e.note,n=e.setNote;return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("ul",{children:t.map((function(e){return Object(g.jsx)(D,{text:e.text,note:t,setNote:n,note1:e},e.id)}))})})};var M=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),o=i[0],s=i[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(C,{}),Object(g.jsx)("br",{}),Object(g.jsx)("h1",{children:"Notes app "}),Object(g.jsx)(z,{setInputText:a,note:o,setNote:s,inputText:n}),Object(g.jsx)(E,{note:o,setNote:s}),Object(g.jsx)(S,{})]})},A=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(C,{}),Object(g.jsx)("h1",{children:"This is todo page"})]})},J=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"404 PAGE NOT FOUND ! "}),Object(g.jsx)("p",{children:"Created by Sahil"})]})};var P=function(){return Object(g.jsx)(o.a,{children:Object(g.jsxs)(s.d,{children:[Object(g.jsx)(s.b,{exact:!0,path:"/",component:M}),Object(g.jsx)(s.b,{exact:!0,path:"/todo",component:A}),Object(g.jsx)(s.b,{path:"/404",component:J}),Object(g.jsx)(s.a,{to:"/404"})]})})};i.a.render(Object(g.jsx)(P,{}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.0e964ba2.chunk.js.map