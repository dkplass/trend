(function(e){function t(t){for(var n,o,s=t[0],i=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);m&&m(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1fe7a026":"f9d17c66","chunk-24593f31":"4144b84d","chunk-49bbf485":"f733bebf","chunk-bfd75adc":"1993ee79","chunk-2d21a3d2":"206c0ac4","chunk-307921d2":"86c17a44","chunk-3c77b8e4":"82250b42","chunk-4aa2fa7e":"f2e507e8","chunk-4f081c8f":"33074f37","chunk-58885f9a":"0d649041","chunk-7e82d018":"cea8a06b","chunk-e1647044":"3fc37b7b"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-1fe7a026":1,"chunk-24593f31":1,"chunk-49bbf485":1,"chunk-bfd75adc":1,"chunk-307921d2":1,"chunk-4aa2fa7e":1,"chunk-58885f9a":1,"chunk-e1647044":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-1fe7a026":"845be820","chunk-24593f31":"87b515ef","chunk-49bbf485":"7ee61529","chunk-bfd75adc":"2e6297b7","chunk-2d21a3d2":"31d6cfe0","chunk-307921d2":"1ea97750","chunk-3c77b8e4":"31d6cfe0","chunk-4aa2fa7e":"e0266cf8","chunk-4f081c8f":"31d6cfe0","chunk-58885f9a":"962ba702","chunk-7e82d018":"31d6cfe0","chunk-e1647044":"45be4630"}[e]+".css",r=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===r))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],d=u.getAttribute("data-href");if(d===n||d===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],m.parentNode.removeChild(m),a(c)},m.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,a[1](f)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/trend/dist/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=a("2f62"),r=a("bc3a"),c=a.n(r),s=a("a7fe"),i=a.n(s),u=a("9062"),d=a.n(u),f=a("a925"),m=a("60d4");n["a"].use(f["a"]);var h=new f["a"]({locale:"zhTW",messages:{zhTW:{fields:{email:"電子郵件",password:"密碼",name:"姓名",phone:"電話",address:"地址"},validation:m.messages}}}),l=a("7bb1"),p=a("4c93");n["a"].component("ValidationProvider",l["b"]),n["a"].component("ValidationObserver",l["a"]),Object(l["c"])({defaultMessage:function(e,t){return t._field_=h.t("fields.".concat(e)),h.t("validation.".concat(t._rule_),t)}}),Object(l["d"])("required",p["b"]),Object(l["d"])("email",p["a"]),Object(l["d"])("phone",{validate:function(e){var t=/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i,a=/^0\d{2,3}-?\d{7,8}$/;return t.test(e)||a.test(e)},message:"不符合手機或市話格式"});a("e40d"),a("4989");var g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),a("router-view")],1)},v=[],b={name:"App",computed:{isLoading:function(){return this.$store.state.isLoading}}},k=b,O=(a("5c0b"),a("2877")),A=Object(O["a"])(k,g,v,!1,null,null,null),E=A.exports,T=(a("d3b7"),a("8c4f"));n["a"].use(T["a"]);var y=[{path:"*",redirect:"/home"},{path:"/home",name:"Site",component:function(){return Promise.all([a.e("chunk-24593f31"),a.e("chunk-bfd75adc")]).then(a.bind(null,"8364"))},children:[{path:"/home",name:"Home",component:function(){return a.e("chunk-2d21a3d2").then(a.bind(null,"bb51"))},meta:{title:"首頁"}},{path:"/shop",name:"Shop",component:function(){return a.e("chunk-4aa2fa7e").then(a.bind(null,"0fa5"))},meta:{title:"商店",breadcrumb:[{name:"首頁",link:"/home"},{name:"線上商店",link:"/shop"}]}},{path:"/shop/:productId",name:"Product",component:function(){return a.e("chunk-58885f9a").then(a.bind(null,"d2f1"))},meta:{title:"商品頁面",breadcrumb:[{name:"首頁",link:"/home"},{name:"線上商店",link:"/shop"}],beforeEach:function(e,t,a){a()}}},{path:"/pay",name:"Pay",component:function(){return a.e("chunk-307921d2").then(a.bind(null,"76a1"))},meta:{title:"結帳頁面"}},{path:"/events",name:"Events",component:function(){return a.e("chunk-1fe7a026").then(a.bind(null,"aa9c"))},meta:{title:"優惠活動",breadcrumb:[{name:"首頁",link:"/home"},{name:"優惠活動",link:"/events"}]}}]},{name:"Login",path:"/login",component:function(){return a.e("chunk-e1647044").then(a.bind(null,"676a"))},meta:{title:"後台管理系統登入"}},{name:"Dashboard",path:"/admin",component:function(){return Promise.all([a.e("chunk-24593f31"),a.e("chunk-49bbf485")]).then(a.bind(null,"0c7c"))},children:[{path:"products",name:"Products",component:function(){return a.e("chunk-7e82d018").then(a.bind(null,"d416"))},meta:{requiresAuth:!0,title:"產品管理頁面"}},{path:"coupons",name:"Coupons",component:function(){return a.e("chunk-4f081c8f").then(a.bind(null,"d0a3"))},meta:{requiresAuth:!0,title:"產品管理頁面"}},{path:"orders",name:"Orders",component:function(){return a.e("chunk-3c77b8e4").then(a.bind(null,"5651"))},meta:{requiresAuth:!0,title:"產品管理頁面"}}]}],S=new T["a"]({routes:y}),L=S,M=(a("99af"),{namespaced:!0,state:{products:[]},actions:{getProducts:function(e){var t="".concat("https://vue-course-api.herokuapp.com","/api/").concat("hanshou","/products/all");return e.commit("LOADING",!0,{root:!0}),new Promise((function(a,n){c.a.get(t).then((function(t){t.data.success&&(e.commit("PRODUCTS",t.data.products),e.commit("LOADING",!1,{root:!0}),a())}))}))}},mutations:{PRODUCTS:function(e,t){e.products=t}},getters:{products:function(e){return e.products}}}),_={namespaced:!0,state:{cart:{carts:[]},cartsTotal:0},actions:{getCart:function(e){var t="".concat("https://vue-course-api.herokuapp.com","/api/").concat("hanshou","/cart");e.commit("LOADING",!0,{root:!0}),c.a.get(t).then((function(t){e.commit("CART",t.data.data),e.commit("CARTTOTAL",t.data.data.carts.length),e.commit("LOADING",!1,{root:!0})}))},removeCartItem:function(e,t){var a="".concat("https://vue-course-api.herokuapp.com","/api/").concat("hanshou","/cart/").concat(t);e.commit("LOADING",!0,{root:!0}),c.a.delete(a).then((function(t){e.commit("LOADING",!1,{root:!0}),e.dispatch("getCart"),t.data.success?e.dispatch("messagesModules/updateMessage",{message:"".concat(t.data.message),status:"success"},{root:!0}):e.dispatch("messagesModules/updateMessage",{message:"".concat(t.data.message),status:"danger"},{root:!0})}))},addToCart:function(e,t){var a=t.id,n=t.qty,o="".concat("https://vue-course-api.herokuapp.com","/api/").concat("hanshou","/cart"),r={product_id:a,qty:n};e.commit("LOADING",!0,{root:!0}),c.a.post(o,{data:r}).then((function(t){t.data.success?e.dispatch("messagesModules/updateMessage",{message:"".concat(t.data.message),status:"success"},{root:!0}):e.dispatch("messagesModules/updateMessage",{message:"".concat(t.data.message),status:"danger"},{root:!0}),e.commit("LOADING",!1,{root:!0}),e.dispatch("getCart")}))}},mutations:{CART:function(e,t){e.cart=t},CARTTOTAL:function(e,t){e.cartsTotal=t}},getters:{cart:function(e){return e.cart},cartstotal:function(e){return e.cartsTotal}}},I=(a("4160"),a("a434"),a("0d03"),a("159b"),{namespaced:!0,state:{messages:[]},actions:{updateMessage:function(e,t){var a=t.message,n=t.status,o=Math.floor(new Date/1e3);e.commit("MESSAGE",{message:a,status:n,timestamp:o}),e.dispatch("removeMessageWithTiming",o)},removeMessage:function(e,t){e.commit("REMOVE_MESSAGE",t)},removeMessageWithTiming:function(e,t){setTimeout((function(){e.state.messages.forEach((function(a,n){a.timestamp===t&&e.commit("REMOVE_MESSAGE",n)}))}),5e3)}},mutations:{MESSAGE:function(e,t){e.messages.push(t)},REMOVE_MESSAGE:function(e,t){e.messages.splice(t,1)}},getters:{messages:function(e){return e.messages}}}),w=(a("c975"),a("d81d"),{namespaced:!0,state:{favoriteQty:0,favorite:[],favorite_class:""},actions:{getFavorite:function(e){var t=JSON.parse(window.localStorage.getItem("favoriteStored"))||[];e.commit("FAVORITE",t),e.commit("FAVORITE_TOTAL",t.length)},changeFavoriteClass:function(e,t){e.dispatch("getFavorite");var a=e.state.favorite.map((function(e){return e.id})).indexOf(t);-1===a?e.commit("FAVORITE_CLASS","far fa-heart"):e.commit("FAVORITE_CLASS","fas fa-heart")},addFavorite:function(e,t){var a={id:t.id,title:t.title};e.commit("ADD_FAVORITE",a),localStorage.setItem("favoriteStored",JSON.stringify(e.state.favorite)),e.dispatch("getFavorite"),e.dispatch("messagesModules/updateMessage",{message:"已加入我的最愛",status:"success"},{root:!0})},deleteFavoriteItem:function(e,t){e.commit("DELETE_FAVORITE",t),localStorage.setItem("favoriteStored",JSON.stringify(e.state.favorite)),e.dispatch("getFavorite"),e.dispatch("changeFavoriteClass",t),e.dispatch("messagesModules/updateMessage",{message:"已移出我的最愛",status:"danger"},{root:!0})},isFavoriteItem:function(e,t){e.dispatch("getFavorite");var a=e.state.favorite.map((function(e){return e.id})).indexOf(t.id);-1===a?(e.dispatch("addFavorite",t),e.dispatch("changeFavoriteClass",t.id)):(e.dispatch("deleteFavoriteItem",t.id),e.dispatch("changeFavoriteClass",t.id))}},mutations:{FAVORITE:function(e,t){e.favorite=t},FAVORITE_TOTAL:function(e,t){e.favoriteQty=t},ADD_FAVORITE:function(e,t){e.favorite.push(t)},DELETE_FAVORITE:function(e,t){e.favorite.forEach((function(a,n){a.id===t&&e.favorite.splice(n,1)}))},FAVORITE_CLASS:function(e,t){e.favorite_class=t}},getters:{favorites:function(e){return e.favorite},favoritesQty:function(e){return e.favoriteQty},favoriteClass:function(e){return e.favorite_class}}});n["a"].use(o["a"]);var C=new o["a"].Store({strict:!0,state:{isLoading:!1},actions:{updateLoading:function(e,t){e.commit("LOADING",t)}},mutations:{LOADING:function(e,t){e.isLoading=t}},modules:{productsModules:M,cartsModules:_,messagesModules:I,favoritesModules:w}});n["a"].prototype.$bus=new n["a"];a("a9e3"),a("b680"),a("ac1f"),a("5319");var F=function(e){var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,(function(e,t,a){var n=t&&"."!==e&&(a.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return n})))},D=function(e){var t=new Date(1e3*e);return t.toLocaleDateString()};n["a"].config.productionTip=!1,c.a.defaults.withCredentials=!0,n["a"].use(i.a,c.a),n["a"].use(o["a"]),n["a"].component("Loading",d.a),n["a"].filter("currency",F),n["a"].filter("date",D),new n["a"]({i18n:h,router:L,store:C,render:function(e){return e(E)}}).$mount("#app"),L.beforeEach((function(e,t,a){if(document.title=e.meta.title,e.meta.requiresAuth){var n="".concat("https://vue-course-api.herokuapp.com","/api/user/check");c.a.post(n).then((function(e){console.log(e.data),e.data.success?a():a({path:"/home"})}))}else a()}))},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.729bb954.js.map