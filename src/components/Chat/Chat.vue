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
    // sends the data from the message to the store to emit the message to the WS
    // clears the input field
    sendMessage: function () {
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
    }
  },
  updated: function () {
    var elem = document.getElementById('chatMessages')
    elem.scrollTop = elem.scrollHeight - elem.clientHeight
  }
}
</script>

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
  .button.is-info{
    background-color: #42a5f5 !important;
  }
</style>
