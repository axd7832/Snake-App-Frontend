<template>
  <div id="inviteModalContainer">
    <div class="modal" :class="{ 'is-active': modalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Game Invite</p>
            <button class="delete" @click="dismissModal" aria-label="close" data-bulma-modal="close"></button>
          </header>
          <section class="modal-card-body">
            <p>{{inviteUsername}} has invited you to a game.</p>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" @click="respondToInvite(true)">Accept</button>
            <button class="button" @click="respondToInvite(false)" data-bulma-modal="close">Cancel</button>
          </footer>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InviteModal',
  data: function () {
    return {
      modalActive: false,
      inviteUsername: ''
    }
  },
  methods: {
    dismissModal: function () {
      this.modalActive = false
      this.inviteUsername = ''
    },
    // sends the invite response
    // dismisses the modal
    respondToInvite: function (response) {
      this.$store.dispatch('inviteResponse', {answer: response, inviteeUsername: this.inviteUsername})
      this.dismissModal()
      this.inviteUsername = ''
    }
  },
  // when the component is created- listen for the gameInvite event from the WS
  created: function () {
    this.$options.sockets.gameInvite = (data) => {
      this.inviteUsername = data
      this.modalActive = true
    }
  }
}
</script>

<style scoped>
    #gameContainer {
        min-height: 58vh;
    }
</style>
