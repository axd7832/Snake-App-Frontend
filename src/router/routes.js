// import Home from '@/components/Home.vue'
import Login from '@/components/Reusable/Login.vue'
import SignUp from '@/components/Reusable/SignUp.vue'

export default [
  {path: '/Login', component: Login},
  {path: '/SignUp', component: SignUp},
  {path: '/', component: Login},
  // otherwise redirect to home
  { path: '*', redirect: '/' }
]
