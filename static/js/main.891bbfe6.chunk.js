(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),s=c(7),r=c(16),i=c(6),l=c(14),o=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4),b=function(e){return{type:"filter/QUERY",payload:e}},f=function(e){return{type:"filter/STATUS",payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:"all"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},x=function(e){return{type:"todos/SET",payload:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{todos:[]},t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?Object(h.a)(Object(h.a)({},e),{},{todos:t.payload}):e},p=Object(i.combineReducers)({currentTodo:j,filter:m,todos:O}),v=Object(i.createStore)(p,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),y=c(9),N=c(3),g=c(5),T=c.n(g),k=c(0),w=c.n(k),S=(c(25),c(26),s.b),E=s.c,C=c(1),R=function(){var e=S(),t=E((function(e){return e.todos.todos})),c=E((function(e){return e.currentTodo})),n=E((function(e){return e.filter.query})),a=E((function(e){return e.filter.status})),s=w.a.useMemo((function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));switch(a){case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}}),[t,n,a]);return Object(C.jsxs)(C.Fragment,{children:[t.length>0&&0===s.length&&Object(C.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:s.map((function(t){return Object(C.jsxs)("tr",{"data-cy":"todo",children:[Object(C.jsx)("td",{className:"is-vcentered",children:t.id}),Object(C.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:t.completed?"has-text-success":"has-text-danger",children:t.title})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(d(t))},children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"far ".concat((null===c||void 0===c?void 0:c.id)===t.id?"fa-eye-slash":"fa-eye")})})})})]},t.id)}))})]})]})},_=function(){var e=S(),t=E((function(e){return e.filter.query}));return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){e(f(t.target.value))},children:[Object(C.jsx)("option",{value:"all",children:"All"}),Object(C.jsx)("option",{value:"active",children:"Active"}),Object(C.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){e(b(t.target.value))}}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.trim().length>0&&Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(C.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"delete",type:"button",className:"delete",onClick:function(){return e(b(""))}})})]})]})};function q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(28);var A=function(){return Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})})},L=function(){var e=S(),t=E((function(e){return e.currentTodo})),c=w.a.useState(!1),n=Object(N.a)(c,2),a=n[0],s=n[1],r=w.a.useState(null),i=Object(N.a)(r,2),l=i[0],o=i[1],d=function(){var e=Object(y.a)(T.a.mark((function e(){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),e.prev=1,!t){e.next=7;break}return e.next=5,n=t.userId,q("/users/".concat(n));case 5:c=e.sent,o(c);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),Promise.reject();case 12:return e.prev=12,s(!1),e.finish(12);case 15:case"end":return e.stop()}var n}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return w.a.useEffect((function(){d()}),[]),Object(C.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(C.jsx)("div",{className:"modal-background"}),a?Object(C.jsx)(A,{}):Object(C.jsxs)("div",{className:"modal-card",children:[Object(C.jsxs)("header",{className:"modal-card-head",children:[Object(C.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(C.jsx)("button",{type:"button","aria-label":"remove",className:"delete","data-cy":"modal-close",onClick:function(){return e(u())}})]}),Object(C.jsxs)("div",{className:"modal-card-body",children:[Object(C.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(C.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!0===(null===t||void 0===t?void 0:t.completed)?Object(C.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(C.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(C.jsx)("a",{href:"mailto:".concat(null===l||void 0===l?void 0:l.email),children:null===l||void 0===l?void 0:l.name})]})]})]})]})},M=function(){var e=S(),t=E((function(e){return e.currentTodo})),c=w.a.useState(!1),n=Object(N.a)(c,2),a=n[0],s=n[1],r=function(){var t=Object(y.a)(T.a.mark((function t(){var c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,q("/todos");case 4:c=t.sent,e(x(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Promise.reject();case 11:return t.prev=11,s(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return w.a.useEffect((function(){r()}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"box",children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(_,{})}),Object(C.jsx)("div",{className:"block",children:a?Object(C.jsx)(A,{}):Object(C.jsx)(R,{})})]})})}),t&&Object(C.jsx)(L,{})]})},P=function(){return Object(C.jsx)(s.a,{store:v,children:Object(C.jsx)(r.a,{children:Object(C.jsx)(M,{})})})};a.a.render(Object(C.jsx)(P,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.891bbfe6.chunk.js.map