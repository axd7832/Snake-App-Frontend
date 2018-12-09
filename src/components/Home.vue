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

  mounted: function () {
    if (this.shouldReload === true) {
      this.$store.dispatch('setReload')
      location.reload()
    }
  }
}
</script>
<style scoped>
</style>
