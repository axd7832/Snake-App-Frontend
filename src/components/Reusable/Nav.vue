<template>
  <div>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link tag="a" to="/Home">
          <a class="navbar-item" href="https://bulma.io">
          <h4 class="title is-4">Final App Name</h4>
          </a>
        </router-link>

        <a role="button" class="navbar-burger" @click="showDropdown = !showDropdown" :class="{ 'is-active': showDropdown && isLoggedIn }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showDropdown && isLoggedIn}">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="isLoggedIn" @click="logout" class="button is-light">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function () {
    return {
      showDropdown: false
    }
  },
  methods: {
    logout: function () {
      this.$store.commit('LOGOUT')
      this.$router.push('/Login')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
