// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocket from 'vue-socket.io'
import socket from 'socket.io-client'
import sockets from './sockets'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false
var storageToken
if (localStorage.getItem('user') !== null) {
  console.log(localStorage.getItem('user'))
  storageToken = JSON.parse(localStorage.getItem('user')).token
} else {
  storageToken = ''
}
Vue.use(VueAxios, axios)
Vue.use(VueSocket, socket('http://localhost:4001', {
  query: {token: storageToken}
}), store)

// router has to be before the app is mounted....
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/Login', '/Signup']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (authRequired && !loggedIn) {
    return next('/Login')
  } else {
    next()
  }
})

/* eslint-disable no-new */

export default new Vue({
  el: '#app',
  router,
  store,
  sockets,
  render: h => h(App)
})
