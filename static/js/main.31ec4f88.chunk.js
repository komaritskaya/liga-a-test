(this["webpackJsonpkomaritskaya-test-liga-a"]=this["webpackJsonpkomaritskaya-test-liga-a"]||[]).push([[0],{24:function(e,t,n){e.exports=n(46)},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(20),c=n.n(o),u=n(8),i=n(4),l=n(2),s=n(5),f=n.n(s),p=n(3);function b(){var e=Object(l.a)(["\n  font-weight: 900;\n  color: black;\n"]);return b=function(){return e},e}function d(){var e=Object(l.a)(["\n  color: gray;\n"]);return d=function(){return e},e}function m(){var e=Object(l.a)(["\n  font-style: italic;\n"]);return m=function(){return e},e}function h(){var e=Object(l.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: tomato;\n"]);return h=function(){return e},e}function g(){var e=Object(l.a)(["\n  width: 100%;\n  border-radius: 10px;\n  border: 2px solid tomato;\n  margin: 20px 0;\n  padding: 10px;\n  font-size: 16px;\n"]);return g=function(){return e},e}var v=p.b.article(g()),j=p.b.p(h()),O=p.b.p(m()),E=p.b.p(d()),w=p.b.span(b()),x=function(e){var t=e.post,n=e.filter,r=t.title,o=t.body,c=t.user,u=c.name,i=c.username,l=function(e){return e.toLowerCase().startsWith(n.toLowerCase())?a.a.createElement(a.a.Fragment,null,a.a.createElement(w,null,e.slice(0,n.length)),e.slice(n.length)):e};return a.a.createElement(v,null,a.a.createElement(j,null,l(r)),a.a.createElement(O,null,a.a.createElement("b",null,l(i))," | ",l(u)),a.a.createElement(E,null,l(o)))},y=function(e){var t=e.filter,n=e.posts,o=Object(r.useState)([]),c=Object(i.a)(o,2),u=c[0],l=c[1];Object(r.useEffect)((function(){l(t?n.filter((function(e){return e.body.toLowerCase().startsWith(t.toLowerCase())||e.title.toLowerCase().startsWith(t.toLowerCase())||e.user.name.toLowerCase().startsWith(t.toLowerCase())||e.user.username.toLowerCase().startsWith(t.toLowerCase())})):n)}),[t,n]);return a.a.createElement("div",null,n.length?u.map((function(e){return a.a.createElement(x,{key:e.id,post:e,filter:t})})):"Loading...")};function C(){var e=Object(l.a)(["\n  width: 100%;\n  border-radius: 10px;\n  margin: 20px 0;\n  padding: 10px;\n  font-size: 16px;\n"]);return C=function(){return e},e}var L=p.b.input(C()),k=function(e){var t=e.handleSearchChange,n=Object(r.createRef)();return a.a.createElement(L,{placeholder:"Search...",type:"text",name:"search",id:"search",ref:n,onChange:function(e){e.preventDefault(),n.current&&t(n.current.value)}})};function S(){var e=Object(l.a)(["\n  margin: 50px;\n"]);return S=function(){return e},e}function W(){var e=Object(l.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n    background: lightgray;\n    font-family: Open-Sans, Helvetica, Sans-Serif;\n  }\n"]);return W=function(){return e},e}var z=Object(p.a)(W()),F=p.b.div(S()),I=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),l=Object(i.a)(c,2),s=l[0],p=l[1];Object(r.useEffect)((function(){var e=f.a.get("https://jsonplaceholder.typicode.com/users"),t=f.a.get("https://jsonplaceholder.typicode.com/posts");f.a.all([e,t]).then(f.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0].data,a=t[1].data;o(a.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{user:r.find((function(t){return t.id===e.userId}))})})))}))).catch((function(e){return console.log(e)}))}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,null),a.a.createElement(F,null,a.a.createElement(k,{handleSearchChange:function(e){p(e)}}),a.a.createElement(y,{filter:s,posts:n})))};c.a.render(a.a.createElement(I,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.31ec4f88.chunk.js.map