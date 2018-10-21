import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Reusable/Login.vue'
import SignUp from '@/components/Reusable/SignUp.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/Login', component: Login},
    {path: '/SignUp', component: SignUp},
    {path: '/', component: Home},
    {path: '**', component: Home}
  ]
})
