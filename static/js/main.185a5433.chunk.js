(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(10),r=a.n(o),l=(a(17),a(6)),i=a(7),u=(a(18),a(23)),s=a(24),m=a(25);function d(){return c.a.createElement(u.a,null,c.a.createElement(s.a,{className:"nav"},c.a.createElement(m.a,{href:"/"},"To-Do App")))}function f(e){var t=e.task,a=e.index,n=e.completeTask,o=e.removeTask;return c.a.createElement(u.a,{className:"task",style:{textDecoration:t.completed?"line-through":" "}},t.title,c.a.createElement("button",{style:{background:"red"},onClick:function(){return o(a)}},"X"),c.a.createElement("button",{onClick:function(){return n(a)}},"Complete"))}function p(e){var t=e.addTask,a=Object(n.useState)(""),o=Object(i.a)(a,2),r=o[0],l=o[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),l(""))}},c.a.createElement("input",{type:"text",className:"input",value:r,placeholder:"Add a new task",onChange:function(e){return l(e.target.value)}}))}var k=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([{title:"Code, code, code",completed:!1}]),s=Object(i.a)(r,2),m=s[0],k=s[1];Object(n.useEffect)(function(){o(m.filter(function(e){return!e.completed}).length)});var v=function(e){var t=Object(l.a)(m);t[e].completed=!0,k(t)},E=function(e){var t=Object(l.a)(m);t.splice(e,1),k(t)};return c.a.createElement(u.a,null,c.a.createElement(d,null),c.a.createElement(u.a,{className:"todo-container"},c.a.createElement(u.a,{className:"header"},"Pending tasks (",a,")"),c.a.createElement(u.a,{className:"tasks"},m.map(function(e,t){return c.a.createElement(f,{task:e,index:t,completeTask:v,removeTask:E,key:t})})),c.a.createElement(u.a,{className:"create-task"},c.a.createElement(p,{addTask:function(e){var t=[].concat(Object(l.a)(m),[{title:e,completed:!1}]);k(t)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.185a5433.chunk.js.map