webpackJsonp([0],{"1ygo":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW"),i={name:"App",data:function(){return{userId:"lisi"}},methods:{homeClick:function(){this.$router.push("/home"),console.log("homeClick")},aboutClick:function(){this.$router.push("/about"),console.log("aboutClick")}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-link",{attrs:{to:"/User/"+this.userId}},[this._v("User")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("erop")},null,null).exports,u=n("/ocq"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("我是首页")]),this._v(" "),e("p",[this._v("哈哈哈哈哈哈哈哈哈")])])}]};var c=n("VU/8")({name:"home"},a,!1,function(t){n("1ygo")},"data-v-11b803d9",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("我是关于")]),this._v(" "),e("p",[this._v("关于.......")])])}]};var l=n("VU/8")({name:"about"},h,!1,function(t){n("PQ54")},"data-v-45998fc6",null).exports,v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("我是用户界面")]),t._v(" "),n("p",[t._v("我是用户的相关信息，嘻嘻")]),t._v(" "),n("h2",[t._v("用户名："+t._s(t.userId))]),t._v(" "),n("h2",[t._v("用户名："+t._s(t.$route.params.id))])])},staticRenderFns:[]};var _=n("VU/8")({name:"User",computed:{userId:function(){return this.$route.params.id}}},v,!1,function(t){n("gXrQ")},"data-v-6a54e7e7",null).exports;r.a.use(u.a);var p=new u.a({routes:[{path:"/"},{path:"/home",component:c},{path:"/about",component:l},{path:"/User/:id",component:_}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:p,render:function(t){return t(o)}})},PQ54:function(t,e){},erop:function(t,e){},gXrQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.244c88d760ace459c00b.js.map