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
      // Send the event to the central state of the application
      this.$store.commit('LOGOUT')
      // pushes the Login screen to the user
      this.$router.push('/Login')
    },
    showOnlineUsersModal: function () {
      // Tells the central state to show the online users modal
      this.$store.commit('TOGGLE_SHOW_PLAYERS')
      // Sends the command the state to perform a request for the online users
      this.$store.dispatch('getOnlinePlayers')
    },
    showLeaderboardModal: function () {
      // Tells the central state to show the leaderboards modal
      this.$store.commit('TOGGLE_LEADERBOARDS')
      // Sens teh command to state to perform a request for the leaderboards data
      this.$store.dispatch('getLeaderboards')
    },
    // Reset the board, kick back to main lobby
    reload: function () {
      window.location.reload()
    }
  },
  // constantly updates, checks for the most current value of isLoggedIn from the state
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
    background-color: #42a5f5 !important;
  }
  .navbar-burger span {
    background-color: #0077c2 !important;
  }
</style>
