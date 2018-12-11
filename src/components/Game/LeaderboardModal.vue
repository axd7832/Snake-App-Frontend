<template>
  <div id="leaderboardModalContainer">
    <div class="modal" :class="{ 'is-active': isModalActive}">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Leaderboards - Top 10 Games</p>
            <button class="delete" @click="dismissModal" aria-label="close" data-bulma-modal="close"></button>
          </header>
          <section class="modal-card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr v-bind:key="player.username+player.rank" v-for="player in highscorePlayers">
                  <td>{{player.rank}}</td>
                  <td>{{player.username}}</td>
                  <td>{{player.score}}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <footer class="modal-card-foot">
          </footer>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaderboardModal',
  data: function () {
    return {
      modalActive: false,
      highscorePlayers: []
    }
  },
  methods: {
    // toggles the leaderboard modal
    dismissModal: function () {
      this.$store.commit('TOGGLE_LEADERBOARDS')
    }
  },
  computed: {
    // checks to see if the modal is active
    isModalActive () {
      return this.$store.getters.showLeaderboards
    }
  },
  created: function () {
    // listens for the socket to emit the current leaderboards
    this.$options.sockets.currentLeaderboards = (data) => {
      this.highscorePlayers = data
    }
  }
}
</script>

<style scoped>
    #gameContainer {
        min-height: 58vh;
    }
    table {
      width: 100%;
    }
</style>
