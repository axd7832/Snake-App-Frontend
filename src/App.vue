<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Login from '@/components/Reusable/Login.vue'
import SignUp from '@/components/Reusable/SignUp.vue'
import Nav from '@/components/Reusable/Nav.vue'
export default {
  name: 'app',
  components: {
    Home,
    Login,
    SignUp,
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(229, 240, 243);
}
html,body,#app{
  height: 100%;
}
</style>
