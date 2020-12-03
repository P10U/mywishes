(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{213:function(t,e,n){"use strict";n.r(e);var o={name:"navbar",data:function(){return{connected:!1,notConnected:!0}},props:["page"],methods:{logout:function(){localStorage.removeItem("jwt"),localStorage.removeItem("username"),window.location="/"}},created:function(){null!=localStorage.getItem("jwt")&&(this.connected=!0,this.notConnected=!1)}},r=n(23),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},[n("router-link",{staticClass:"special-elite navbar-brand",staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{id:"brand",to:"/"}},[n("img",{attrs:{src:"/logo_minimal.png",height:"30",alt:"",loading:"lazy"}})]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor03"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},["userWishes"!=t.page?n("router-link",{staticClass:"nav-link",class:{hidden:t.notConnected},attrs:{to:"/userWishes"}},[t._v("Add or remove a wish\n          ")]):t._e()],1)])]),t._v(" "),"account"!=t.page?n("router-link",{staticClass:"btn btn-outline-secondary my-2 my-sm-0 mr-2",class:{hidden:t.connected},attrs:{id:"signup",to:"/account"}},[t._v("Signup")]):t._e(),t._v(" "),"account"!=t.page?n("router-link",{staticClass:"btn btn-success my-2 my-sm-0",class:{hidden:t.connected},attrs:{id:"login",to:"/account"}},[t._v("Login")]):t._e(),t._v(" "),n("button",{staticClass:"btn btn-danger my-2 my-sm-0",class:{hidden:t.notConnected},attrs:{id:"logout"},on:{click:t.logout}},[t._v("Logout")])],1)])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("1930a9a0",content,!0,{sourceMap:!1})},215:function(t,e,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("163bf306",content,!0,{sourceMap:!1})},219:function(t,e,n){"use strict";n(214)},220:function(t,e,n){(e=n(47)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=e},221:function(t,e,n){"use strict";n(215)},222:function(t,e,n){(e=n(47)(!1)).push([t.i,".center-cropped[data-v-06d9a217]{width:100%;height:150px;background-position:50%;background-repeat:no-repeat}",""]),t.exports=e},223:function(t,e,n){"use strict";n.r(e);n(32);var o=n(6),r=(n(219),n(23)),c=(Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null).exports,{name:"home",data:function(){return{wishes:[],connected:!1,notConnected:!0}},components:{Navbar:n(213).default},methods:{getWishes:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/wish");case 2:n=e.sent,t.wishes=n;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){null!=localStorage.getItem("jwt")&&(this.connected=!0,this.notConnected=!1,this.getWishes())}}),l=(n(221),Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid p-0 pt-5"},[n("navbar",{attrs:{page:"home"}}),t._v(" "),n("div",{staticClass:"row mt-5 mx-0 d-flex justify-content-center"},[n("div",{staticClass:"col-2",class:{hidden:t.connected}},[t._m(0)]),t._v(" "),n("div",{staticClass:"col-8",class:{hidden:t.notConnected}},[t._m(1),t._v(" "),n("div",{staticClass:"row d-flex"},[n("h5",[t._v("Here is the list of all wishes.")]),t._v(" "),n("table",{staticClass:"table table-hover table-borderless  "},[t._m(2),t._v(" "),n("tbody",t._l(t.wishes,(function(e,i){return n("tr",{key:i,attrs:{data:e}},[n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[t._v(t._s(e.author))])])})),0)])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-dismissible alert-danger"},[e("strong",[this._v("Not connected !")]),e("br"),this._v("Please login to access the wish list.\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row d-flex justify-content-center mb-5"},[e("img",{attrs:{src:"/logo_extended.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("Wish")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Author")])])])}],!1,null,"06d9a217",null));e.default=l.exports;installComponents(l,{Navbar:n(213).default})}}]);