<template>
  <div id="home">
      <Game></Game>
      <Chat></Chat>
      <InviteModal></InviteModal>
      <PlayersModal></PlayersModal>
      <LeaderboardModal></LeaderboardModal>
  </div>
</template>

<script>
import Game from '@/components/Game/Game.vue'
import Chat from '@/components/Chat/Chat.vue'
import InviteModal from '@/components/Game/InviteModal'
import PlayersModal from '@/components/Game/PlayersModal'
import LeaderboardModal from '@/components/Game/LeaderboardModal'

export default {
  name: 'Home',
  params: ['reload'],
  components: {
    Game,
    Chat,
    InviteModal,
    PlayersModal,
    LeaderboardModal
  },
  computed: {
    // gets the current chat room from the shared state
    shouldReload () {
      // eslint-disable-next-line
      return this.$store.getters.getInitReload
    }
  },
  // RELOAD THE PAGE ON THE FIRST LOGIN
  // This addresses an issue that I was having where the login token wouldn't be set
  // I couldn't dynamically add the vue-socket to the Vue instance so intead
  // I set the token to localStorage and then reload to pull it and allow the login to proceed.
  mounted: function () {
    // Only reload once
    if (this.shouldReload === true) {
      this.$store.dispatch('setReload')
      location.reload()
    }
  }
}
</script>
<style scoped>
</style>
