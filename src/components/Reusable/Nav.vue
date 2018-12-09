<template>
  <div>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link tag="a" to="/Home">
          <a class="navbar-item" href="">
          <h4 @click="reload" class="title is-4">2p Snake.io</h4>
          </a>
        </router-link>
        <a role="button" class="navbar-burger" v-if="isLoggedIn" @click="showDropdown = !showDropdown" :class="{ 'is-active': showDropdown && isLoggedIn }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showDropdown && isLoggedIn}">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="isLoggedIn" @click="showLeaderboardModal" class="button is-light">
              Leaderboards
            </a>
            <a v-if="isLoggedIn" @click="showOnlineUsersModal" class="button is-light">
              Invite
            </a>
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
    },
    showOnlineUsersModal: function () {
      this.$store.commit('TOGGLE_SHOW_PLAYERS')
      this.$store.dispatch('getOnlinePlayers')
    },
    showLeaderboardModal: function () {
      this.$store.commit('TOGGLE_LEADERBOARDS')
      this.$store.dispatch('getLeaderboards')
    },
    // Reset the board, kick back to main lobby
    reload: function () {
      window.location.reload()
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
  .navbar {
    background-color: #42a5f5;
  }
  .navbar-burger span {
    background-color: #0077c2;
  }
</style>
