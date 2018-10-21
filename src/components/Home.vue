<template>
  <div id="home">
      <Game></Game>
      <Chat></Chat>
  </div>
</template>

<script>
import Game from '@/components/Game/Game.vue'
import Chat from '@/components/Chat/Chat.vue'

export default {
  name: 'Home',
  components: {
    Game,
    Chat
  }
}
</script>

<style scoped>
</style>
