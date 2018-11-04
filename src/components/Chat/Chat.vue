<template>
  <div id="chatContainer">
      <div id="chatRoomName">
        <h6 class="title is-6">{{currentChatRoom}}</h6>
      </div>
      <div id="chatMessages">
        <div class="chatMessage" :key="message.length" v-for="message in messages">
            <div>
              <span class="messageUsernameText has-text-weight-bold">{{message.username}}</span>
              <span class="messageText">{{message.messageText}}</span>
              <span class="messageTimestampText is-pulled-right">{{message.timestamp}}</span>
            </div>
            <hr class="messageHr"/>
        </div>
      </div>
      <div id="chatSendMessage">
        <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" type="text" @keyup.enter="sendMessage" v-model="chatText" placeholder="Press Enter to send a chat">
          </div>
          <div class="control">
            <a class="button is-info" @click="sendMessage">
              Send
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data: function () {
    return {
      chatText: '',
      messages: []
    }
  },
  methods: {
    sendMessage: function () {
      console.log({username: this.$store.getters.currentUser.username, messageText: this.chatText})
      this.$store.dispatch('sendMessage', {username: this.$store.getters.currentUser.username, messageText: this.chatText})
      this.chatText = ''
    }
  },
  computed: {
    currentChatRoom () {
      // clear the chat on room change
      // eslint-disable-next-line
      this.messages = []
      return this.$store.getters.currentChatRoom
    }
  },
  mounted: function () {
    this.$options.sockets.message = (message) => {
      this.messages.push(message)
      // TODO: scroll to bottom of the chat when a new message is received
    }
  },
  updated: function () {
    var elem = document.getElementById('chatMessages')
    elem.scrollTop = elem.scrollHeight - elem.clientHeight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #chatContainer {
    height: 34vh;
    padding: 10px;
  }
  #chatRoomName {
    border: 1px solid rgb(49, 113, 211);
    padding: 10px;
    background-color: white;
  }
  #chatMessages {
    height: 75%;
    background-color: white;
    overflow: auto;
  }
  /* #chatSendMessage {

  } */
  #chatMessages, #chatSendMessage {
    border: 1px solid rgb(49, 113, 211);
    border-width: 0px 1px 1px 1px;
    padding: 10px;
  }
  .messageUsernameText {
    font-size: 1rem;
    padding-right: 5px;
  }
  .messageTimestampText {
    font-size: .8rem;
    color: rgb(105, 105, 105)
  }
  hr.messageHr {
      border-top: 1px solid #8c8b8b;
      margin: .5rem 0;
  }
</style>
