import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Reusable/Login.vue'
import SignUp from '@/components/Reusable/SignUp.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)
// This is where I declare the routes to all of my pages
// If there is no route or an invalid route -> direct to the login page
export default new Router({
  routes: [
    {path: '/Login', component: Login},
    {path: '/SignUp', component: SignUp},
    {path: '/Home', component: Home},
    {path: '/', component: Login},
    {path: '**', component: Login}
  ]
})
