(function(t){function e(e){for(var n,a,i=e[0],c=e[1],d=e[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"11f5":function(t,e,o){},"455f":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Dashboard",{attrs:{url:t.getURL()}}),o("Footer")],1)},s=[],a=(o("f9e3"),o("2dd8"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello container-fluid"},[o("Header"),o("div",{staticClass:"mt-4 my-3"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-8"},[o("CreateTodo",{attrs:{isLoading:t.isLoading},on:{createTodo:t.todoCreate}})],1),o("div",{staticClass:"col-md-4 my-3 my-md-0 mt-md-4"},[o("DisplayBoard",{attrs:{numberOfTodos:t.numberOfTodos,numberOfFinishedTodos:t.numberOfFinishedTodos}})],1)])]),o("div",{staticClass:"row mr-3"},[o("div",{staticClass:"col-8"},[o("TodoList",{attrs:{todos:t.todos,title:"Todos",showDeleteButton:!0},on:{deleteTodo:t.deleteTodo,changeList:t.changeList,markAsDone:t.markAsDone,onDrop:t.onDrop}})],1),o("div",{staticClass:"col-4"},[o("TodoList",{attrs:{todos:t.done,title:"Dones",showDeleteButton:!1},on:{deleteTodo:t.deleteTodo,changeList:t.changeList,markAsDone:t.markAsDone,onDrop:t.onDrop}})],1)])],1)}),i=[],c=(o("99af"),o("d81d"),o("d3b7"),o("96cf"),o("1da1")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("h1",{staticClass:"display-2"},[t._v("kratodo")]),o("small",[t._v("A simple to-do app")])])}],u={name:"Header"},p=u,f=o("2877"),h=Object(f["a"])(p,d,l,!1,null,null,null),m=h.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-7 mrgnbtm"},[o("h2",[t._v("Create Todo")]),o("form",[o("div",{staticClass:"row"},[o("div",{staticClass:"form-group col-12"},[o("label",{attrs:{htmlFor:"title"}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title","aria-describedby":"emailHelp",placeholder:"Todo title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),o("div",{staticClass:"form-group col-12"},[o("label",{attrs:{htmlFor:"description"}},[t._v("Description")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"textArea",name:"description",id:"description",placeholder:"Anything you want about this todo....",rows:"2"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{type:"hidden",name:"status",id:"status"},domProps:{value:t.status},on:{input:function(e){e.target.composing||(t.status=e.target.value)}}}),t.isLoading?o("div",{staticClass:"spinner-border text-success",attrs:{role:"status"}},[o("span",{staticClass:"sr-only"},[t._v(" Creating your todo...")])]):t._e(),t.isLoading?t._e():o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.createTodo}},[t._v("Create")])])])])])},v=[],b=(o("a4d3"),o("e01a"),{name:"CreateTodo",props:["isLoading"],data:function(){return{title:"",description:"",status:"todo"}},methods:{createTodo:function(){var t={title:this.title,description:this.description,status:this.status};this.$emit("createTodo",t),this.clearForm()},clearForm:function(){this.title="",this.description=""}}}),w=b,C=Object(f["a"])(w,g,v,!1,null,null,null),_=C.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"display-board border-effect"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6"},[o("h4",[t._v("Todo's Created")]),o("div",{staticClass:"number"},[t._v(" "+t._s(t.numberOfTodos)+" ")])]),o("div",{staticClass:"col-6"},[o("h4",[t._v("Done Todo's")]),o("div",{staticClass:"number"},[t._v(" "+t._s(t.numberOfFinishedTodos)+" ")])])])])},x=[],y={name:"DisplayBoard",props:["numberOfTodos","numberOfFinishedTodos"]},O=y,D=Object(f["a"])(O,T,x,!1,null,null,null),j=D.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"border p-2"},[o("h2",{staticClass:"mb-2"},[t._v(t._s(this.title))]),t.todos.length>0?o("div",t._l(t.todos,(function(e){return o("div",{key:e._id},[o("Todo",{attrs:{todo:e,buttonName:"todo"===e.status?"Done":"<",showDeleteButton:t.showDeleteButton},on:{deleteTodo:t.deleteTodo,changeList:t.changeList,markAsDone:t.markAsDone,onDrop:t.onDrop}})],1)})),0):o("div",[o("small",[t._v(" There's nothing in "+t._s(this.title)+".")])])])},L=[],R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row todo",attrs:{draggable:"true"},on:{drop:function(e){return e.preventDefault(),t.onDrop(e)},dragover:function(t){t.preventDefault()}}},[o("div",{staticClass:"col-12 col-sm-4 col-lg-2"},[o("div",[t.isDone()?t._e():o("i",{staticClass:"far fa-thumbs-up text-secondary",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mark as done!"},on:{click:function(e){t.$emit("markAsDone",t.doneData())}}}),t.isDone()?o("i",{staticClass:"fas fa-check text-success",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"If you want to undone..."},on:{click:function(e){t.$emit("markAsDone",t.doneData())}}}):t._e()])]),o("div",{staticClass:"col-12 col-sm-8 col-lg-8"},[o("div",{staticClass:"mt-1 text-center"},[o("h5",{staticClass:"text-center",class:{isToogled:t.isDone()}},[t._v(" "+t._s(t.todo.title)+" ")]),o("p",{staticClass:"text-center"},[o("small",{staticClass:"text-center"},[t._v(t._s(t.todo.description))])])])]),t.showDeleteButton?o("div",{staticClass:"col-lg-2"},[o("i",{staticClass:"far fa-trash-alt text-danger float-right",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Exclude this todo!"},on:{click:function(e){return t.$emit("deleteTodo",t.$data)}}})]):t._e()])},$=[],S={name:"Todo",props:["todo","buttonName","showDeleteButton"],data:function(){return{title:this.todo.title,description:this.todo.description,status:this.todo.status,id:this.todo._id,order:this.todo.order,files:[{_id:this.id,order:this.order}]}},methods:{doneData:function(){return{id:this.id,status:this.status}},isDone:function(){return"done"===this.status},onDrop:function(t){console.log(t);var e=t.dataTransfer.order,o=this.order,n=t.dataTransfer.emmitent,r={};this.order=e,n.order=o,r.sender={_id:n.id,order:n.order},r.receiver={_id:this.id,order:this.order},this.$emit("changeOrder",r)}}},A=S,E=(o("b1fc"),Object(f["a"])(A,R,$,!1,null,"51cec470",null)),F=E.exports,J={name:"TodoList",props:["todos","title","showDeleteButton"],components:{Todo:F},methods:{markAsDone:function(t){this.$emit("markAsDone",t)},changeList:function(){this.$emit("changeList")},deleteTodo:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:e.$emit("deleteTodo",t);case 1:case"end":return o.stop()}}),o)})))()},onDrop:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:e.$emit("onDrop",t);case 1:case"end":return o.stop()}}),o)})))()}}},N=J,U=Object(f["a"])(N,k,L,!1,null,null,null),B=U.exports,P={name:"Dashboard",props:["url"],components:{Header:m,CreateTodo:_,DisplayBoard:j,TodoList:B},data:function(){return{todos:[],done:[],numberOfTodos:0,numberOfFinishedTodos:0,isLoading:!1}},methods:{onDrop:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:e.updateTodo(t.sender),e.updateTodo(t.receiver);case 2:case"end":return o.stop()}}),o)})))()},markAsDone:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){var n,r,s,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.isLoading=!0,n="todo"===t.status?"done":"todo",r="".concat(e.url,"/?_id=").concat(t.id),s={status:n,order:e.getOrder(n)},o.next=6,fetch(r,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(s)});case 6:a=o.sent,console.log(a),e.fetchTodos(),e.isLoading=!1;case 10:case"end":return o.stop()}}),o)})))()},changeList:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTodos();case 2:case"end":return e.stop()}}),e)})))()},letMeSee:function(){console.log("this is my data:\n\ntodos:\n"+JSON.stringify(this.todos)+"\ndone:\n"+JSON.stringify(this.done)+"\nnumber of Todo's: \n"+this.numberOfTodos+"\nnumber of Done Todo's: \n"+this.numberOfFinishedTodos)},fetchFinished:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.url,"/finished"));case 3:return o=e.sent,e.next=6,o.json();case 6:n=e.sent,t.done=n.todos,t.numberOfFinishedTodos=t.done?t.done.length:0,console.log("Just fetched this finished todos:\n\n"+JSON.stringify(t.done)),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},fetchUnfinished:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.url,"/unfinished"));case 3:return o=e.sent,e.next=6,o.json();case 6:n=e.sent,t.todos=n.todos,t.numberOfTodos=t.todos?t.todos.length:0,console.log("Just fetched this todos:\n\n"+JSON.stringify(t.todos)),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},fetchTodos:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.isLoading=!0,t.fetchUnfinished(),t.fetchFinished(),t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},deleteTodo:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,e.isLoading=!0,console.log("todo id sent to api: "+JSON.stringify(t.id)),n="".concat(e.url,"/?_id=").concat(t.id),console.log("URl generated: "+n),o.next=7,fetch(n,{method:"DELETE",headers:{"Content-type":"application/json"}});case 7:return r=o.sent,o.next=10,e.fetchTodos();case 10:return e.isLoading=!1,o.abrupt("return",r);case 14:o.prev=14,o.t0=o["catch"](0),console.error(o.t0);case 17:case"end":return o.stop()}}),o,null,[[0,14]])})))()},todoCreate:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.isLoading=!0,console.log("Create sent...\nData passed to api:"),console.log(JSON.stringify(t)),t.order=e.getOrder(t.status),o.next=6,fetch(e.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 6:return n=o.sent,o.next=9,e.fetchTodos();case 9:return e.isLoading=!1,o.next=12,n.json();case 12:return o.abrupt("return",o.sent);case 13:case"end":return o.stop()}}),o)})))()},getOrder:function(t){var e=0,o=0;return this.todos.map(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(o){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o.order>e&&(e=o.order);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.done.map(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.order>o&&(o=e.order);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),"todo"==t?++e:++o},updateTodo:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.isLoading=!0,n="".concat(e.url,"/?_id=").concat(t.id),o.next=4,fetch(n,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 4:r=o.sent,console.log(r),e.fetchTodos(),e.isLoading=!1;case 8:case"end":return o.stop()}}),o)})))()}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTodos();case 2:console.log("todos fetched by dashboard at mounting:"),console.log(t.todos);case 4:case"end":return e.stop()}}),e)})))()}},I=P,M=(o("747d"),Object(f["a"])(I,a,i,!1,null,"5b615cc5",null)),K=M.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer"},[o("div",{staticClass:"row justify-content-center align-items-bottom"},[o("div",{staticClass:"col-6"},[o("div",{staticClass:"row justify-content-center align-items-between"},[o("h4",{staticClass:"col-12 mb-3"},[t._v("Useful resources:")]),o("a",{staticClass:"col",attrs:{href:"https://nodejs.org/en/docs/"}},[t._v("Node.js docs")]),o("a",{staticClass:"col",attrs:{href:"https://docs.mongodb.com/"}},[t._v("Mongo docs")]),o("a",{staticClass:"col",attrs:{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"}},[t._v("Javascript docs")]),o("a",{staticClass:"col",attrs:{href:"https://expressjs.com/pt-br/4x/api.html"}},[t._v("Express.js docs")]),o("a",{staticClass:"col",attrs:{href:"https://vuejs.org/v2/guide/"}},[t._v("Vue docs")])])]),o("div",{staticClass:"col-6"},[o("div",{staticClass:"row justify-content-center align-items-between"},[o("h4",{staticClass:"col-12 mb-3"},[t._v("Technologies used:")]),o("i",{staticClass:"col fab fa-node"}),o("div",{staticClass:"col"},[o("img",{staticClass:"footerImg",attrs:{src:"https://img.icons8.com/color/48/000000/mongodb.png",alt:"mongoDB"}})]),o("i",{staticClass:"col fab fa-vuejs"}),o("div",{staticClass:"col"},[o("img",{staticClass:"footerImg",attrs:{src:"https://cdn.iconscout.com/icon/free/png-64/express-8-1175029.png",alt:"express.js"}})])])]),o("small",{staticClass:"textBrand mt-5 mb-0"},[t._v("© KratosDEV 2021")])])])}],q={name:"footer"},z=q,W=(o("6508"),Object(f["a"])(z,H,V,!1,null,"3d199c18",null)),G=W.exports,Q={name:"App",data:function(){return{debug:!0}},components:{Dashboard:K,Footer:G},methods:{getURL:function(){return!0===this.debug?"http://localhost:5000/api/todos":"https://kratodo.herokuapp.com/api/todos"},getLogoURL:function(){return!0===this.debug?"http://localhost:5000/logo.png":"https://kratodo.herokuapp.com/logo.png"},getIndexURL:function(){return!0===this.debug?"http://localhost:5000":"https://kratodo.herokuapp.com"}},metaInfo:{title:"Krato-do",titleTemplate:"%s",meta:[{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Simple todo app"},{property:"og:title",content:"Krato-to"},{property:"og:site_name",content:"kratodo"},{property:"og:type",content:"website"},{property:"og:url",content:(void 0).getIndexURL()},{property:"og:image",content:(void 0).getLogoURL()},{property:"og:description",content:"A Simple todo app."},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:(void 0).getIndexURL()},{name:"twitter:title",content:"Krato-do"},{name:"twitter:description",content:"A simple todo app."},{itemprop:"name",content:"Krato-do"},{itemprop:"description",content:"A simple todo app."},{itemprop:"image",content:(void 0).getLogoURL()}],link:[{rel:"canonical",href:(void 0).getIndexURL()}]}},X=Q,Y=(o("034f"),Object(f["a"])(X,r,s,!1,null,null,null)),Z=Y.exports,tt=o("5f5b"),et=o("7f5f");n["default"].config.productionTip=!1,n["default"].use(tt["a"]),n["default"].use(et["a"]),new n["default"]({render:function(t){return t(Z)}}).$mount("#app")},6508:function(t,e,o){"use strict";var n=o("845c"),r=o.n(n);r.a},"747d":function(t,e,o){"use strict";var n=o("455f"),r=o.n(n);r.a},"845c":function(t,e,o){},"85ec":function(t,e,o){},b1fc:function(t,e,o){"use strict";var n=o("11f5"),r=o.n(n);r.a}});
//# sourceMappingURL=app.b24a0361.js.map