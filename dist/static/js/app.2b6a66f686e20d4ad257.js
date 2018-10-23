webpackJsonp([1],{0:function(s,e){},"7q2U":function(s,e){},D06M:function(s,e){},GK12:function(s,e){},NHnr:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("7+uW"),n={render:function(){var s=this.$createElement;return(this._self._c||s)("div",{attrs:{id:"gameContainer"}})},staticRenderFns:[]};var r={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"chatContainer"}},[t("div",{attrs:{id:"chatRoomName"}},[t("h6",{staticClass:"title is-6"},[s._v(s._s(s.currentChatRoom))])]),s._v(" "),t("div",{attrs:{id:"chatMessages"}},s._l(s.messages,function(e){return t("div",{key:e.length,staticClass:"chatMessage"},[t("div",[t("span",{staticClass:"messageUsernameText has-text-weight-bold"},[s._v(s._s(e.username))]),s._v(" "),t("span",{staticClass:"messageText"},[s._v(s._s(e.messageText))]),s._v(" "),t("span",{staticClass:"messageTimestampText is-pulled-right"},[s._v(s._s(e.timestamp))])]),s._v(" "),t("hr",{staticClass:"messageHr"})])})),s._v(" "),t("div",{attrs:{id:"chatSendMessage"}},[t("div",{staticClass:"field has-addons"},[t("div",{staticClass:"control is-expanded"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.chatText,expression:"chatText"}],staticClass:"input",attrs:{type:"text",placeholder:"Press Enter to send a chat"},domProps:{value:s.chatText},on:{keyup:function(e){return"button"in e||!s._k(e.keyCode,"enter",13,e.key,"Enter")?s.sendMessage(e):null},input:function(e){e.target.composing||(s.chatText=e.target.value)}}})]),s._v(" "),t("div",{staticClass:"control"},[t("a",{staticClass:"button is-info",on:{click:s.sendMessage}},[s._v("\n            Send\n          ")])])])])])},staticRenderFns:[]};var o={name:"Home",components:{Game:t("VU/8")({name:"Game"},n,!1,function(s){t("VsFq")},"data-v-5e5144ae",null).exports,Chat:t("VU/8")({name:"Chat",data:function(){return{chatText:"",messages:[]}},methods:{sendMessage:function(){this.$store.dispatch("sendMessage",{username:this.$store.getters.currentUser.username,messageText:this.chatText}),this.chatText=""}},computed:{currentChatRoom:function(){return this.$store.getters.currentChatRoom}},mounted:function(){var s=this;this.$options.sockets.message=function(e){s.messages.push(e)}}},r,!1,function(s){t("jAM2")},"data-v-0843c78b",null).exports}},i={render:function(){var s=this.$createElement,e=this._self._c||s;return e("div",{attrs:{id:"home"}},[e("Game"),this._v(" "),e("Chat")],1)},staticRenderFns:[]};var c=t("VU/8")(o,i,!1,function(s){t("D06M")},"data-v-dffdba9a",null).exports,l=t("mvHQ"),u=t.n(l),d={name:"Login",data:function(){return{user:{username:"",password:""},errors:[]}},methods:{login:function(){var s=this;this.errors=[],this.$store.commit("LOGIN"),this.axios.post("http://localhost:4000/api/login",this.user).then(function(e){s.$store.commit("LOGIN_SUCCESS",e.data.user),localStorage.setItem("user",u()(e.data.user)),s.$router.push("/Home")}).catch(function(e){e.response.data.message&&s.errors.push(e.response.data.message),s.$store.commit("LOGIN_FAILURE")})},clearErrors:function(){this.errors=[]}},computed:{isLoading:function(){return this.$store.getters.isLoading}}},m={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"bg-img"},[t("div",{staticClass:"container"},[t("div",{staticClass:"column is-three-fifths is-offset-one-fifth has-top-spacer"},[t("form",[t("div",{staticClass:"box"},[t("h3",{staticClass:"title is-3 has-text-centered"},[s._v("Log In")]),s._v(" "),s.errors.length?t("article",{staticClass:"message is-danger"},[t("div",{staticClass:"message-body"},[t("div",[t("ul",s._l(s.errors,function(e){return t("li",{key:e},[s._v(s._s(e))])}))])])]):s._e(),s._v(" "),t("div",{staticClass:"field"},[t("div",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:s.user.username},on:{click:s.clearErrors,input:function(e){e.target.composing||s.$set(s.user,"username",e.target.value)}}}),s._v(" "),s._m(0)])]),s._v(" "),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:s.user.password},on:{click:s.clearErrors,input:function(e){e.target.composing||s.$set(s.user,"password",e.target.value)}}}),s._v(" "),s._m(1)])]),s._v(" "),t("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":s.isLoading},on:{click:s.login}},[s._v("Log In")]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"has-text-centered"},[t("span",[s._v("Don't have an account?")]),s._v(" "),t("router-link",{attrs:{tag:"a",to:"/Signup"}},[t("a",[s._v("Sign Up")])])],1)])])])])])},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-user"})])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])}]};var v=t("VU/8")(d,m,!1,function(s){t("TK5G")},"data-v-0fe5db28",null).exports,p={name:"SignUp",data:function(){return{newUser:{username:"",password:"",reEnteredPassword:""},errors:[]}},methods:{register:function(){var s=this;this.errors=[],this.validateForm()&&this.axios.post("http://localhost:4000/api/register",{username:this.newUser.username,password:this.newUser.password}).then(function(e){s.$router.push("/Login")}).catch(function(e){s.errors.push(e.response.data.message)})},validateForm:function(){return this.newUser.username||this.errors.push("Username cannot be empty"),this.newUser.password||this.errors.push("Password cannot be empty"),this.newUser.reEnteredPassword||this.errors.push("Re-Entered password cannot be empty"),this.newUser.password!==this.newUser.reEnteredPassword&&this.errors.push("Passwords do not match"),!this.errors.length},clearErrors:function(){this.errors=[]}},computed:{isLoading:function(){return console.log(this.$store.getters.isLoading),this.$store.getters.isLoading}}},h={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"bg-img"},[t("div",{staticClass:"container"},[t("div",{staticClass:"column is-three-fifths is-offset-one-fifth has-top-spacer"},[t("form",[t("div",{staticClass:"box"},[t("h3",{staticClass:"title is-3 has-text-centered"},[s._v("Sign Up")]),s._v(" "),s.errors.length?t("article",{staticClass:"message is-danger"},[t("div",{staticClass:"message-body"},[s._v("\n            Please correct the following and try again:\n            "),t("div",[t("ul",s._l(s.errors,function(e){return t("li",{key:e},[s._v(s._s(e))])}))])])]):s._e(),s._v(" "),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[s._v("Username")]),s._v(" "),t("div",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.newUser.username,expression:"newUser.username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:s.newUser.username},on:{click:s.clearErrors,input:function(e){e.target.composing||s.$set(s.newUser,"username",e.target.value)}}}),s._v(" "),s._m(0)])]),s._v(" "),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[s._v("Password")]),s._v(" "),t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.newUser.password,expression:"newUser.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:s.newUser.password},on:{click:s.clearErrors,input:function(e){e.target.composing||s.$set(s.newUser,"password",e.target.value)}}}),s._v(" "),s._m(1)])]),s._v(" "),t("div",{staticClass:"field"},[t("label",{staticClass:"label"},[s._v("Re-Enter Password")]),s._v(" "),t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.newUser.reEnteredPassword,expression:"newUser.reEnteredPassword"}],staticClass:"input",attrs:{type:"password",placeholder:"Re-Enter Password"},domProps:{value:s.newUser.reEnteredPassword},on:{click:s.clearErrors,input:function(e){e.target.composing||s.$set(s.newUser,"reEnteredPassword",e.target.value)}}}),s._v(" "),s._m(2)])]),s._v(" "),t("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":s.isLoading},on:{click:s.register}},[s._v("Sign Up")]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"has-text-centered"},[t("span",[s._v("Already Sign Up?")]),s._v(" "),t("router-link",{attrs:{tag:"a",to:"/Login"}},[t("a",[s._v("Log In")])])],1)])])])])])},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-user"})])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])}]};var g=t("VU/8")(p,h,!1,function(s){t("pvnV")},"data-v-ef94b638",null).exports,f={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[t("div",{staticClass:"navbar-brand"},[t("router-link",{attrs:{tag:"a",to:"/Home"}},[t("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[t("h4",{staticClass:"title is-4"},[s._v("Final App Name")])])]),s._v(" "),t("a",{staticClass:"navbar-burger",class:{"is-active":s.showDropdown&&s.isLoggedIn},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){s.showDropdown=!s.showDropdown}}},[t("span",{attrs:{"aria-hidden":"true"}}),s._v(" "),t("span",{attrs:{"aria-hidden":"true"}}),s._v(" "),t("span",{attrs:{"aria-hidden":"true"}})])],1),s._v(" "),t("div",{staticClass:"navbar-menu",class:{"is-active":s.showDropdown&&s.isLoggedIn},attrs:{id:"navbarBasicExample"}},[t("div",{staticClass:"navbar-end"},[t("div",{staticClass:"navbar-item"},[t("div",{staticClass:"buttons"},[s.isLoggedIn?t("a",{staticClass:"button is-light",on:{click:s.logout}},[s._v("\n            Log Out\n          ")]):s._e()])])])])])])},staticRenderFns:[]};var _={name:"app",components:{Home:c,Login:v,SignUp:g,Nav:t("VU/8")({name:"Nav",data:function(){return{showDropdown:!1}},methods:{logout:function(){this.$store.commit("LOGOUT"),this.$router.push("/Login")}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}}},f,!1,function(s){t("mhH5")},"data-v-eb8b564c",null).exports}},C={render:function(){var s=this.$createElement,e=this._self._c||s;return e("div",{attrs:{id:"app"}},[e("Nav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var w=t("VU/8")(_,C,!1,function(s){t("7q2U")},null,null).exports,U=t("/ocq");a.a.use(U.a);var b,E=new U.a({routes:[{path:"/Login",component:v},{path:"/SignUp",component:g},{path:"/",component:c},{path:"**",component:c}]}),L=t("bOdI"),k=t.n(L),x=t("woOf"),S=t.n(x),$=t("NYxO");a.a.use($.a);var I,O={isLoggedIn:!!localStorage.getItem("user")||!1,user:JSON.parse(localStorage.getItem("user"))||null,isLoading:!1,socket:{connected:!1,currentRoom:"Room -1",error:!1}},N=new $.a.Store({state:S()({},O),mutations:(b={},k()(b,"LOGIN",function(s){s.isLoading=!0}),k()(b,"LOGIN_SUCCESS",function(s,e){s.isLoggedIn=!0,s.isLoading=!1,s.user=e,!1===s.socket.connected&&location.reload()}),k()(b,"LOGIN_FAILURE",function(s){s.isLoggedIn=!1,s.isLoading=!1}),k()(b,"LOGOUT",function(s){s.isLoggedIn=!1,s.user=null,localStorage.removeItem("user"),console.log(O.socket),s.socket={connected:!1,currentRoom:"Room -1",error:!1}}),k()(b,"SOCKET_CONNECT",function(s){s.socket.connected=!0}),k()(b,"SOCKET_DISCONNECT",function(s){s.socket.connected=!1}),k()(b,"SOCKET_ROOMCHANGE",function(s,e){s.socket.currentRoom=e[0]}),k()(b,"SOCKET_ERROR",function(s,e){s.socket.error=e.error}),b),getters:{isLoggedIn:function(s){return s.isLoggedIn},isLoading:function(s){return s.isLoading},getToken:function(s){return s.user&&s.user.token?s.user.token:""},currentChatRoom:function(s){return s.socket.currentRoom},currentUser:function(s){return s.user}},actions:{sendMessage:function(s,e){s.commit;A.$socket.emit("SEND_MESSAGE",e)}}}),R=t("mtWM"),T=t.n(R),y=t("Rf8U"),P=t.n(y),G=t("hMcO"),M=t.n(G),F=t("DmT9"),D=t.n(F),H=t("OLUw"),V=t.n(H);t("GK12");a.a.config.productionTip=!1,null!==localStorage.getItem("user")?(console.log(localStorage.getItem("user")),I=JSON.parse(localStorage.getItem("user")).token):I="",a.a.use(P.a,T.a),a.a.use(M.a,D()("http://localhost:4001",{query:{token:I}}),N),E.beforeEach(function(s,e,t){var a=!["/Login","/Signup"].includes(s.path),n=localStorage.getItem("user");if(a&&!n)return t("/Login");t()});var A=e.default=new a.a({el:"#app",router:E,store:N,sockets:V.a,render:function(s){return s(w)}})},OLUw:function(s,e){s.exports={connect:function(){console.log("socket connected")},roomChange:function(s){console.log(s)},broadcast:function(s){console.log(s)}}},TK5G:function(s,e){},VsFq:function(s,e){},jAM2:function(s,e){},mhH5:function(s,e){},pvnV:function(s,e){}},["NHnr"]);
//# sourceMappingURL=app.2b6a66f686e20d4ad257.js.map