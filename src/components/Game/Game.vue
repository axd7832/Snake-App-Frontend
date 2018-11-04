<template>
  <div id="gameContainer">
    <button @click="createLobby">Create Lobby</button>
    <button @click="invitePlayer">Invite</button>
  </div>
</template>

<script>
export default {
  name: 'Game',
  methods: {
    createLobby: function () {
      this.$store.dispatch('createLobby')
    },
    invitePlayer: function () {
      this.$store.dispatch('invitePlayer', 'notAndrew')
    }
  },
  created: function () {
    // awaiting invite invitation
    // this.$options.sockets.gameInvite = (data, callback) => {
    //   console.log(data)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #gameContainer {
        min-height: 58vh;
    }
</style>
