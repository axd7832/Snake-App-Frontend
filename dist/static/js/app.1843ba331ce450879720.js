webpackJsonp([1],{0:function(e,s){},"7q2U":function(e,s){},D06M:function(e,s){},GK12:function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("7+uW"),n={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"gameContainer"}})},staticRenderFns:[]};var r={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"chatContainer"}},[t("div",{attrs:{id:"chatRoomName"}},[t("h6",{staticClass:"title is-6"},[e._v(e._s(e.currentChatRoom))])]),e._v(" "),t("div",{attrs:{id:"chatMessages"}},e._l(e.messages,function(s){return t("div",{key:s.length,staticClass:"chatMessage"},[t("div",[t("span",{staticClass:"messageUsernameText has-text-weight-bold"},[e._v(e._s(s.username))]),e._v(" "),t("span",{staticClass:"messageText"},[e._v(e._s(s.messageText))]),e._v(" "),t("span",{staticClass:"messageTimestampText is-pulled-right"},[e._v(e._s(s.timestamp))])]),e._v(" "),t("hr",{staticClass:"messageHr"})])})),e._v(" "),t("div",{attrs:{id:"chatSendMessage"}},[t("div",{staticClass:"field has-addons"},[t("div",{staticClass:"control is-expanded"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.chatText,expression:"chatText"}],staticClass:"input",attrs:{type:"text",placeholder:"Press Enter to send a chat"},domProps:{value:e.chatText},on:{keyup:function(s){return"button"in s||!e._k(s.keyCode,"enter",13,s.key,"Enter")?e.sendMessage(s):null},input:function(s){s.target.composing||(e.chatText=s.target.value)}}})]),e._v(" "),t("div",{staticClass:"control"},[t("a",{staticClass:"button is-info",on:{click:e.sendMessage}},[e._v("\n            Send\n          ")])])])])])},staticRenderFns:[]};var o={name:"Home",components:{Game:t("VU/8")({name:"Game"},n,!1,function(e){t("VsFq")},"data-v-5e5144ae",null).exports,Chat:t("VU/8")({name:"Chat",data:function(){return{chatText:"",messages:[]}},methods:{sendMessage:function(){this.$store.dispatch("sendMessage",{username:this.$store.getters.currentUser.username,messageText:this.chatText}),this.chatText=""}},computed:{currentChatRoom:function(){return this.$store.getters.currentChatRoom}},mounted:function(){var e=this;this.$options.sockets.message=function(s){e.messages.push(s)}}},r,!1,function(e){t("jAM2")},"data-v-0843c78b",null).exports}},i={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"home"}},[s("Game"),this._v(" "),s("Chat")],1)},staticRenderFns:[]};var c=t("VU/8")(o,i,!1,function(e){t("D06M")},"data-v-dffdba9a",null).exports,l=t("mvHQ"),u=t.n(l),d={name:"Login",data:function(){return{user:{username:"",password:""},errors:[]}},methods:{login:function(){var e=this;this.errors=[],this.$store.commit("LOGIN"),this.axios.post("https://shrouded-eyrie-80233.herokuapp.com/api/login",this.user).then(function(s){e.$store.commit("LOGIN_SUCCESS",s.data.user),localStorage.setItem("user",u()(s.data.user)),e.$router.push("/Home")}).catch(function(s){s.response.data.message&&e.errors.push(s.response.data.message),e.$store.commit("LOGIN_FAILURE")})},clearErrors:function(){this.errors=[]}},computed:{isLoading:function(){return this.$store.getters.isLoading}}},m={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"bg-img"},[t("div",{staticClass:"container"},[t("div",{staticClass:"column is-three-fifths is-offset-one-fifth has-top-spacer"},[t("form",[t("div",{staticClass:"box"},[t("h3",{staticClass:"title is-3 has-text-centered"},[e._v("Log In")]),e._v(" "),e.errors.length?t("article",{staticClass:"message is-danger"},[t("div",{staticClass:"message-body"},[t("div",[t("ul",e._l(e.errors,function(s){return t("li",{key:s},[e._v(e._s(s))])}))])])]):e._e(),e._v(" "),t("div",{staticClass:"field"},[t("div",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.user.username},on:{click:e.clearErrors,input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}),e._v(" "),e._m(0)])]),e._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{click:e.clearErrors,input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),e._v(" "),e._m(1)])]),e._v(" "),t("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":e.isLoading},on:{click:e.login}},[e._v("Log In")]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"has-text-centered"},[t("span",[e._v("Don't have an account?")]),e._v(" "),t("router-link",{attrs:{tag:"a",to:"/Signup"}},[t("a",[e._v("Sign Up")])])],1)])])])])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])}]};var v=t("VU/8")(d,m,!1,function(e){t("WQWm")},"data-v-43d29f8e",null).exports,p={name:"SignUp",data:function(){return{newUser:{username:"",password:"",reEnteredPassword:""},errors:[]}},methods:{register:function(){var e=this;this.errors=[],this.validateForm()&&this.axios.post("https://shrouded-eyrie-80233.herokuapp.com/api/register",{username:this.newUser.username,password:this.newUser.password}).then(function(s){e.$router.push("/Login")}).catch(function(s){e.errors.push(s.response.data.message)})},validateForm:function(){return this.newUser.username||this.errors.push("Username cannot be empty"),this.newUser.password||this.errors.push("Password cannot be empty"),this.newUser.reEnteredPassword||this.errors.push("Re-Entered password cannot be empty"),this.newUser.password!==this.newUser.reEnteredPassword&&this.errors.push("Passwords do not match"),!this.errors.length},clearErrors:function(){this.errors=[]}},computed:{isLoading:function(){return console.log(this.$store.getters.isLoading),this.$store.getters.isLoading}}},h={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"bg-img"},[t("div",{staticClass:"container"},[t("div",{staticClass:"column is-three-fifths is-offset-one-fifth has-top-spacer"},[t("form",[t("div",{staticClass:"box"},[t("h3",{staticClass:"title is-3 has-text-centered"},[e._v("Sign Up")]),e._v(" "),e.errors.length?t("article",{staticClass:"message is-danger"},[t("div",{staticClass:"message-body"},[e._v("\n            Please correct the following and try again:\n            "),t("div",[t("ul",e._l(e.errors,function(s){return t("li",{key:s},[e._v(e._s(s))])}))])])]):e._e(),e._v(" "),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Username")]),e._v(" "),t("div",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.username,expression:"newUser.username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.newUser.username},on:{click:e.clearErrors,input:function(s){s.target.composing||e.$set(e.newUser,"username",s.target.value)}}}),e._v(" "),e._m(0)])]),e._v(" "),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Password")]),e._v(" "),t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.newUser.password},on:{click:e.clearErrors,input:function(s){s.target.composing||e.$set(e.newUser,"password",s.target.value)}}}),e._v(" "),e._m(1)])]),e._v(" "),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[e._v("Re-Enter Password")]),e._v(" "),t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.reEnteredPassword,expression:"newUser.reEnteredPassword"}],staticClass:"input",attrs:{type:"password",placeholder:"Re-Enter Password"},domProps:{value:e.newUser.reEnteredPassword},on:{click:e.clearErrors,input:function(s){s.target.composing||e.$set(e.newUser,"reEnteredPassword",s.target.value)}}}),e._v(" "),e._m(2)])]),e._v(" "),t("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":e.isLoading},on:{click:e.register}},[e._v("Sign Up")]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"has-text-centered"},[t("span",[e._v("Already Sign Up?")]),e._v(" "),t("router-link",{attrs:{tag:"a",to:"/Login"}},[t("a",[e._v("Log In")])])],1)])])])])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])}]};var g=t("VU/8")(p,h,!1,function(e){t("Qzjv")},"data-v-55655cb7",null).exports,f={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[t("div",{staticClass:"navbar-brand"},[t("router-link",{attrs:{tag:"a",to:"/Home"}},[t("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[t("h4",{staticClass:"title is-4"},[e._v("Final App Name")])])]),e._v(" "),t("a",{staticClass:"navbar-burger",class:{"is-active":e.showDropdown&&e.isLoggedIn},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(s){e.showDropdown=!e.showDropdown}}},[t("span",{attrs:{"aria-hidden":"true"}}),e._v(" "),t("span",{attrs:{"aria-hidden":"true"}}),e._v(" "),t("span",{attrs:{"aria-hidden":"true"}})])],1),e._v(" "),t("div",{staticClass:"navbar-menu",class:{"is-active":e.showDropdown&&e.isLoggedIn},attrs:{id:"navbarBasicExample"}},[t("div",{staticClass:"navbar-end"},[t("div",{staticClass:"navbar-item"},[t("div",{staticClass:"buttons"},[e.isLoggedIn?t("a",{staticClass:"button is-light",on:{click:e.logout}},[e._v("\n            Log Out\n          ")]):e._e()])])])])])])},staticRenderFns:[]};var _={name:"app",components:{Home:c,Login:v,SignUp:g,Nav:t("VU/8")({name:"Nav",data:function(){return{showDropdown:!1}},methods:{logout:function(){this.$store.commit("LOGOUT"),this.$router.push("/Login")}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}}},f,!1,function(e){t("mhH5")},"data-v-eb8b564c",null).exports}},C={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("Nav"),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var w=t("VU/8")(_,C,!1,function(e){t("7q2U")},null,null).exports,U=t("/ocq");a.a.use(U.a);var b,E=new U.a({routes:[{path:"/Login",component:v},{path:"/SignUp",component:g},{path:"/",component:c},{path:"**",component:c}]}),L=t("bOdI"),k=t.n(L),x=t("woOf"),S=t.n(x),$=t("NYxO");a.a.use($.a);var I,O={isLoggedIn:!!localStorage.getItem("user")||!1,user:JSON.parse(localStorage.getItem("user"))||null,isLoading:!1,socket:{connected:!1,currentRoom:"Room -1",error:!1}},N=new $.a.Store({state:S()({},O),mutations:(b={},k()(b,"LOGIN",function(e){e.isLoading=!0}),k()(b,"LOGIN_SUCCESS",function(e,s){e.isLoggedIn=!0,e.isLoading=!1,e.user=s,!1===e.socket.connected&&location.reload()}),k()(b,"LOGIN_FAILURE",function(e){e.isLoggedIn=!1,e.isLoading=!1}),k()(b,"LOGOUT",function(e){e.isLoggedIn=!1,e.user=null,localStorage.removeItem("user"),console.log(O.socket),e.socket={connected:!1,currentRoom:"Room -1",error:!1}}),k()(b,"SOCKET_CONNECT",function(e){e.socket.connected=!0}),k()(b,"SOCKET_DISCONNECT",function(e){e.socket.connected=!1}),k()(b,"SOCKET_ROOMCHANGE",function(e,s){e.socket.currentRoom=s[0]}),k()(b,"SOCKET_ERROR",function(e,s){e.socket.error=s.error}),b),getters:{isLoggedIn:function(e){return e.isLoggedIn},isLoading:function(e){return e.isLoading},getToken:function(e){return e.user&&e.user.token?e.user.token:""},currentChatRoom:function(e){return e.socket.currentRoom},currentUser:function(e){return e.user}},actions:{sendMessage:function(e,s){e.commit;A.$socket.emit("SEND_MESSAGE",s)}}}),R=t("mtWM"),y=t.n(R),T=t("Rf8U"),P=t.n(T),M=t("hMcO"),G=t.n(M),F=t("DmT9"),D=t.n(F),H=t("OLUw"),V=t.n(H);t("GK12");a.a.config.productionTip=!1,null!==localStorage.getItem("user")?(console.log(localStorage.getItem("user")),I=JSON.parse(localStorage.getItem("user")).token):I="",a.a.use(P.a,y.a),a.a.use(G.a,D()("https://shrouded-eyrie-80233.herokuapp.com",{query:{token:I}}),N),E.beforeEach(function(e,s,t){var a=!["/Login","/Signup"].includes(e.path),n=localStorage.getItem("user");if(a&&!n)return t("/Login");t()});var A=s.default=new a.a({el:"#app",router:E,store:N,sockets:V.a,render:function(e){return e(w)}})},OLUw:function(e,s){e.exports={connect:function(){console.log("socket connected")},roomChange:function(e){console.log(e)},broadcast:function(e){console.log(e)}}},Qzjv:function(e,s){},VsFq:function(e,s){},WQWm:function(e,s){},jAM2:function(e,s){},mhH5:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.1843ba331ce450879720.js.map