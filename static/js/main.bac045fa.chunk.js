(this["webpackJsonpelis-erp-ui"]=this["webpackJsonpelis-erp-ui"]||[]).push([[0],{36:function(e,t,n){e.exports=n(49)},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r,a=n(11),c=n.n(a),o=n(20),u=n(19);!function(e){e.GET_PRODUCTS="[Test] Get Products",e.GET_PRODUCTS_SUCCESS="[Test] Get Products Success",e.GET_PRODUCTS_ERROR="[Test] Get Products Error"}(r||(r={}));var s=function(){return{type:r.GET_PRODUCTS}},l=function(e){return{type:r.GET_PRODUCTS_SUCCESS,payload:e}},i=function(e){return{type:r.GET_PRODUCTS_ERROR,payload:e}},p=c.a.mark(f),d=c.a.mark(O);function f(){var e,t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(u.a)(fetch,"http://api.iledan.com/api/products",{headers:{"Content-Type":"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.next=9,Object(u.b)(l(t));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(u.b)(i(n.t0));case 15:case"end":return n.stop()}}),p,null,[[0,11]])}function O(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(r.GET_PRODUCTS,f);case 2:case"end":return e.stop()}}),d)}var b=c.a.mark(v);function v(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)([O()]);case 2:case"end":return e.stop()}}),b)}var E=n(1),m=n.n(E),j=n(22),h=n.n(j),T=n(15),S=n(13),g=n(14),y=n(16),C=n(17),R=n(10),P=(n(46),function(e){Object(C.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(S.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).getTest=function(){e.props.getProducts()},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.props,t=e.loading,n=e.products;console.log("loading",t),console.log("products",n);var r=n.map((function(e,t){return m.a.createElement("li",{key:t},e.created_at)}));return!0===t?m.a.createElement("div",null," You are a morron"):m.a.createElement("div",null,m.a.createElement("ul",null,r))}}]),n}(E.Component)),_=Object(T.b)((function(e){return{products:e.testState.products,loading:e.testState.loading}}),(function(e){return{getProducts:function(){return e(s())}}}))(P),G=function(e){Object(C.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(S.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).getTest=function(){e.props.getProducts(),e.props.history.push("./test2")},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",null,"Hello everyone on app page!"),m.a.createElement("button",{onClick:function(){return e.getTest()}},"Get Products"))}}]),n}(E.Component),k=Object(R.f)(Object(T.b)(null,(function(e){return{getProducts:function(){return e(s())}}}))(G)),U=function(e){Object(C.a)(n,e);var t=Object(y.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(R.c,null,m.a.createElement(R.a,{path:"/Test2",component:_}),m.a.createElement(R.a,{exact:!0,path:"/",component:k}))}}]),n}(E.Component),w=n(9),x=n(34),D=n(35),A=n(25),J={loading:!1,products:[],error:""},M=Object(w.combineReducers)({testState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.GET_PRODUCTS:return Object(A.a)({},e,{loading:!0});case r.GET_PRODUCTS_SUCCESS:return Object(A.a)({},e,{loading:!1,products:t.payload});case r.GET_PRODUCTS_ERROR:return Object(A.a)({},e,{loading:!1,error:t.payload})}return e}}),B=Object(D.a)(),H=Object(x.composeWithDevTools)(Object(w.applyMiddleware)(B));var I=Object(w.createStore)(M,H),L=(n(48),n(24));B.run(v),h.a.render(m.a.createElement(T.a,{store:I},m.a.createElement(L.a,null,m.a.createElement(E.Suspense,{fallback:m.a.createElement("h1",null,"Loading profile...")},m.a.createElement(U,null)))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.bac045fa.chunk.js.map