(function(t){function e(e){for(var o,a,i=e[0],c=e[1],d=e[2],u=0,f=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00db":function(t,e,n){"use strict";var o=n("0bb5"),s=n.n(o);s.a},"034f":function(t,e,n){"use strict";var o=n("85ec"),s=n.n(o);s.a},"0bb5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Dashboard",{attrs:{url:t.getURL()}}),n("Footer")],1)},r=[],a=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello container-fluid"},[n("Header"),n("div",{staticClass:"mt-4 my-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("CreateTodo",{on:{createTodo:t.todoCreate}})],1),n("div",{staticClass:"col-md-4 my-3 my-md-0 mt-md-4"},[n("DisplayBoard",{attrs:{numberOfTodos:t.numberOfTodos,numberOfFinishedTodos:t.numberOfFinishedTodos}})],1)])]),n("div",{staticClass:"row mr-3"},[n("div",{staticClass:"col-8"},[n("TodoList",{attrs:{todos:t.todos,title:"Todos",showDeleteButton:!0},on:{deleteTodo:t.deleteTodo,changeList:t.changeList,markAsDone:t.markAsDone}})],1),n("div",{staticClass:"col-4"},[n("TodoList",{attrs:{todos:t.done,title:"Dones",showDeleteButton:!1},on:{deleteTodo:t.deleteTodo,changeList:t.changeList,markAsDone:t.markAsDone}})],1)])],1)}),i=[],c=(n("99af"),n("d3b7"),n("96cf"),n("1da1")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",{staticClass:"display-2"},[t._v("kratodo")]),n("small",[t._v("A simple to-do app")])])}],u={name:"Header"},f=u,p=n("2877"),h=Object(p["a"])(f,d,l,!1,null,null,null),m=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7 mrgnbtm"},[n("h2",[t._v("Create Todo")]),n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-12"},[n("label",{attrs:{htmlFor:"title"}},[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title","aria-describedby":"emailHelp",placeholder:"Todo title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"form-group col-12"},[n("label",{attrs:{htmlFor:"description"}},[t._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"textArea",name:"description",id:"description",placeholder:"Anything you want about this todo....",rows:"2"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{type:"hidden",name:"status",id:"status"},domProps:{value:t.status},on:{input:function(e){e.target.composing||(t.status=e.target.value)}}}),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.createTodo}},[t._v("Create")])])])])])},b=[],g=(n("a4d3"),n("e01a"),{name:"CreateTodo",data:function(){return{title:"",description:"",status:"todo"}},methods:{createTodo:function(){var t={title:this.title,description:this.description,status:this.status};this.$emit("createTodo",t),this.clearForm()},clearForm:function(){this.title="",this.description=""}}}),_=g,T=Object(p["a"])(_,v,b,!1,null,null,null),w=T.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"display-board border-effect"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("h4",[t._v("Todo's Created")]),n("div",{staticClass:"number"},[t._v(" "+t._s(t.numberOfTodos)+" ")])]),n("div",{staticClass:"col-6"},[n("h4",[t._v("Done Todo's")]),n("div",{staticClass:"number"},[t._v(" "+t._s(t.numberOfFinishedTodos)+" ")])])])])},C=[],O={name:"DisplayBoard",props:["numberOfTodos","numberOfFinishedTodos"]},x=O,D=Object(p["a"])(x,y,C,!1,null,null,null),k=D.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border p-2"},[n("h2",{staticClass:"mb-2"},[t._v(t._s(this.title))]),t.todos.length>0?n("div",t._l(t.todos,(function(e){return n("div",{key:e._id},[n("Todo",{attrs:{todo:e,buttonName:"todo"===e.status?"Done":"<",showDeleteButton:t.showDeleteButton},on:{deleteTodo:t.deleteTodo,changeList:t.changeList,markAsDone:t.markAsDone}})],1)})),0):n("div",[n("small",[t._v(" There's nothing in "+t._s(this.title)+".")])])])},R=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row todo"},[n("div",{staticClass:"col-12 col-sm-4 col-lg-2"},[n("div",[t.isDone()?t._e():n("i",{staticClass:"far fa-thumbs-up text-secondary",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Mark as done!"},on:{click:function(e){t.$emit("markAsDone",t.doneData())}}}),t.isDone()?n("i",{staticClass:"fas fa-check text-success",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"If you want to undone..."},on:{click:function(e){t.$emit("markAsDone",t.doneData())}}}):t._e()])]),n("div",{staticClass:"col-12 col-sm-8 col-lg-8"},[n("div",{staticClass:"mt-1"},[n("p",{class:{isToogled:t.isDone()}},[t._v(" "+t._s(t.todo.title)+" - "+t._s(t.todo.status)+" ")])])]),t.showDeleteButton?n("div",{staticClass:"col-lg-2"},[n("b-button",{attrs:{variant:"danger",block:""},on:{click:function(e){return t.$emit("deleteTodo",t.$data)}}},[t._v("X")])],1):t._e()])},L=[],A={name:"Todo",props:["todo","buttonName","showDeleteButton"],data:function(){return{title:this.todo.title,description:this.todo.description,status:this.todo.status,id:this.todo._id}},methods:{doneData:function(){return{id:this.id,status:this.status}},isDone:function(){return"done"===this.status}}},F=A,S=(n("744f"),Object(p["a"])(F,$,L,!1,null,"28006c53",null)),E=S.exports,N={name:"TodoList",props:["todos","title","showDeleteButton"],components:{Todo:E},methods:{markAsDone:function(t){this.$emit("markAsDone",t)},changeList:function(){this.$emit("changeList")},deleteTodo:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$emit("deleteTodo",t);case 1:case"end":return n.stop()}}),n)})))()}}},J=N,P=Object(p["a"])(J,j,R,!1,null,null,null),B=P.exports,U={name:"Dashboard",props:["url"],components:{Header:m,CreateTodo:w,DisplayBoard:k,TodoList:B},data:function(){return{todos:[],done:[],numberOfTodos:0,numberOfFinishedTodos:0}},methods:{markAsDone:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var o,s,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o="todo"===t.status?"done":"todo",s="".concat(e.url,"/?_id=").concat(t.id),r={status:o},n.next=5,fetch(s,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 5:a=n.sent,console.log(a),e.fetchTodos();case 8:case"end":return n.stop()}}),n)})))()},changeList:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTodos();case 2:case"end":return e.stop()}}),e)})))()},letMeSee:function(){console.log("this is my data:\n\ntodos:\n"+JSON.stringify(this.todos)+"\ndone:\n"+JSON.stringify(this.done)+"\nnumber of Todo's: \n"+this.numberOfTodos+"\nnumber of Done Todo's: \n"+this.numberOfFinishedTodos)},fetchFinished:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.url,"/finished"));case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,t.done=o.todos,t.numberOfFinishedTodos=t.done?t.done.length:0,console.log("Just fetched this finished todos:\n\n"+JSON.stringify(t.done)),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},fetchUnfinished:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.url,"/unfinished"));case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,t.todos=o.todos,t.numberOfTodos=t.todos?t.todos.length:0,console.log("Just fetched this todos:\n\n"+JSON.stringify(t.todos)),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},fetchTodos:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchUnfinished(),t.fetchFinished();case 2:case"end":return e.stop()}}),e)})))()},deleteTodo:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log("todo id sent to api: "+JSON.stringify(t.id)),o="".concat(e.url,"/?_id=").concat(t.id),console.log("URl generated: "+o),n.next=6,fetch(o,{method:"DELETE",headers:{"Content-type":"application/json"}});case 6:return s=n.sent,n.next=9,e.fetchTodos();case 9:return n.abrupt("return",s);case 12:n.prev=12,n.t0=n["catch"](0),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))()},todoCreate:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("Create sent...\nData passed to api:"),console.log(JSON.stringify(t)),n.next=4,fetch(e.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return o=n.sent,n.next=7,e.fetchTodos();case 7:return n.next=9,o.json();case 9:return n.abrupt("return",n.sent);case 10:case"end":return n.stop()}}),n)})))()}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTodos();case 2:console.log("todos fetched by dashboard at mounting:"),console.log(t.todos);case 4:case"end":return e.stop()}}),e)})))()}},M=U,H=(n("00db"),Object(p["a"])(M,a,i,!1,null,"81416b14",null)),I=H.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"row justify-content-center align-items-bottom"},[n("div",{staticClass:"col-6"},[n("h4",[t._v("Useful resources:")]),n("p",[t._v("res 1")]),n("p",[t._v("res 2")]),n("p",[t._v("res 3")]),n("p",[t._v("res 4")])]),n("div",{staticClass:"col-6"},[n("h4",[t._v("Technologies used:")]),n("p",[t._v("tech 1")]),n("p",[t._v("tech 2")]),n("p",[t._v("tech 3")]),n("p",[t._v("tech 4")])]),n("small",{staticClass:"textBrand"},[t._v("© KratosDEV 2021")])])])}],X={name:"footer"},q=X,z=Object(p["a"])(q,K,V,!1,null,null,null),G=z.exports,Q={name:"App",data:function(){return{debug:!1}},components:{Dashboard:I,Footer:G},methods:{getURL:function(){return!0===this.debug?"http://localhost:5000/api/todos":"https://kratodo.herokuapp.com/api/todos"}}},W=Q,Y=(n("034f"),Object(p["a"])(W,s,r,!1,null,null,null)),Z=Y.exports,tt=n("5f5b");o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(Z)}}).$mount("#app"),o["default"].use(tt["a"])},"744f":function(t,e,n){"use strict";var o=n("ddd8"),s=n.n(o);s.a},"85ec":function(t,e,n){},ddd8:function(t,e,n){}});
//# sourceMappingURL=app.2cf20131.js.map