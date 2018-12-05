<template>
  <div id="playersOnlineContainer">
    <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Players Online</p>
            <button class="delete" @click="dismissModal" aria-label="close" data-bulma-modal="close"></button>
          </header>
          <section class="modal-card-body">
            <ul>
              <li @click="invitePlayer(player)" v-bind:key="player" v-for="player in currentOnlinePlayers">{{player}}</li>
            </ul>
          </section>
          <footer class="modal-card-foot">
          </footer>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayersModal',
  data: function () {
    return {
      currentOnlinePlayers: []
    }
  },
  methods: {
    dismissModal: function () {
      this.$store.commit('TOGGLE_SHOW_PLAYERS')
    },
    invitePlayer: function (username) {
      this.$store.dispatch('invitePlayer', username)
      this.dismissModal()
    }
  },
  computed: {
    isModalActive () {
      return this.$store.getters.showOnlinePlayers
    }
  },
  created: function () {
    this.$options.sockets.currentOnlinePlayers = (data) => {
      this.currentOnlinePlayers = data
      // this.inviteUsername = data
      // this.modalActive = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #gameContainer {
        min-height: 58vh;
    }
</style>
