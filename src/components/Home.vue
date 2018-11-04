<template>
  <div id="home">
      <Game></Game>
      <Chat></Chat>
      <InviteModal></InviteModal>
  </div>
</template>

<script>
import Game from '@/components/Game/Game.vue'
import Chat from '@/components/Chat/Chat.vue'
import InviteModal from '@/components/Game/InviteModal'

export default {
  name: 'Home',
  components: {
    Game,
    InviteModal,
    Chat
  }
}
</script>

<style scoped>
</style>
