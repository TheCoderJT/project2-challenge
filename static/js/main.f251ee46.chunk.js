(this["webpackJsonpproject2-challenge"]=this["webpackJsonpproject2-challenge"]||[]).push([[0],{64:function(n,e,t){"use strict";t.r(e);var c,i,r,l,s,j,o,a,h,d=t(0),b=t.n(d),u=t(30),O=t.n(u),x=t(18),m=t(2),g=t(4),p=t(5),f=p.b.header(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n"]))),v=p.b.button(i||(i=Object(g.a)(["\n  width: 100%;\n  height: inherit;\n"]))),y=t(1),N=function(){var n=Object(m.f)(),e=function(e){n.push(e)};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(f,{children:[Object(y.jsx)(v,{onClick:function(){return e("/project2-challenge")},children:"users"}),Object(y.jsx)(v,{onClick:function(){return e("/project2-challenge/posts")},children:"posts"}),Object(y.jsx)(v,{onClick:function(){return e("/project2-challenge/comments")},children:"comments"})]})})},I=p.b.div(r||(r=Object(g.a)(["\n  height: inherit;\n"]))),S=p.b.div(l||(l=Object(g.a)(["\n  height: 100vh;\n  margin-top: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n"]))),k=t(14),w=t(35),J=t.n(w),A=function(n){var e=Object(d.useState)(null),t=Object(k.a)(e,2),c=t[0],i=t[1],r=Object(d.useState)(null),l=Object(k.a)(r,2),s=l[0],j=l[1],o=Object(d.useState)(!1),a=Object(k.a)(o,2),h=a[0],b=a[1];return Object(d.useEffect)((function(){b(!0),J.a.get(n).then((function(n){i(n.data)})).catch((function(n){j(n)})).finally((function(){b(!1)}))}),[n]),{data:c,loading:h,error:s}},C=function(){var n=A("https://jsonplaceholder.typicode.com/users"),e=n.data,t=n.loading,c=n.error;return t?Object(y.jsx)("h1",{children:"LOADING..."}):(c&&console.log(c),Object(y.jsx)(I,{children:Object(y.jsx)(S,{children:Object(y.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){return Object(y.jsx)("li",{className:"liItem",children:Object(y.jsx)("code",{children:JSON.stringify(n)})})}))})})}))},D=p.b.div(s||(s=Object(g.a)(["\n  height: inherit;\n"]))),G=p.b.div(j||(j=Object(g.a)(["\n  height: 100vh;\n  margin-top: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n"]))),L=function(){var n=A("https://jsonplaceholder.typicode.com/posts"),e=n.data,t=n.loading,c=n.error;return t?Object(y.jsx)("h1",{children:"LOADING..."}):(c&&console.log(c),Object(y.jsx)(D,{children:Object(y.jsx)(G,{children:Object(y.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){return Object(y.jsx)("li",{className:"liItem",children:Object(y.jsx)("code",{children:JSON.stringify(n)})})}))})})}))},z=p.b.div(o||(o=Object(g.a)(["\n  height: inherit;\n"]))),E=p.b.div(a||(a=Object(g.a)(["\n  height: 100vh;\n  margin-top: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n"]))),F=function(){var n=A("https://jsonplaceholder.typicode.com/comments"),e=n.data,t=n.loading,c=n.error;return t?Object(y.jsx)("h1",{children:"LOADING..."}):(c&&console.log(c),Object(y.jsx)(z,{children:Object(y.jsx)(E,{children:Object(y.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){return Object(y.jsx)("li",{className:"liItem",children:Object(y.jsx)("code",{children:JSON.stringify(n)})})}))})})}))},B=function(){return Object(y.jsxs)(x.a,{children:[Object(y.jsx)(N,{}),Object(y.jsxs)(m.c,{children:[Object(y.jsx)(m.a,{path:"/project2-challenge/",exact:!0,children:Object(y.jsx)(C,{})}),Object(y.jsx)(m.a,{path:"/project2-challenge/posts",exact:!0,children:Object(y.jsx)(L,{})}),Object(y.jsx)(m.a,{path:"/project2-challenge/comments",exact:!0,children:Object(y.jsx)(F,{})})]})]})},M=Object(p.a)(h||(h=Object(g.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    min-height: 100vh;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n  }\n\n  ul {\n    margin: 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .liItem {\n    max-width: 50%;\n    font-size: 1rem;\n    text-decoration: none;\n    margin: 1em;\n  }\n\n"])));var q=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(B,{}),Object(y.jsx)(M,{})]})};O.a.render(Object(y.jsx)(b.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.f251ee46.chunk.js.map