import Vuex from 'vuex'
import Vue from 'vue'
import vm from '@/main.js'

Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'
const defaults = {
  isLoggedIn: !!localStorage.getItem('user') || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoading: false,
  socket: {
    connected: false,
    currentRoom: 'Room -1',
    error: false
  }
}
export default new Vuex.Store({
  state: Object.assign({}, defaults),
  // Synchronous state changes
  mutations: {
    [LOGIN] (state) {
      state.isLoading = true
    },
    [LOGIN_SUCCESS] (state, data) {
      state.isLoggedIn = true
      state.isLoading = false
      state.user = data
      if (state.socket.connected === false) location.reload()
    },
    [LOGIN_FAILURE] (state) {
      state.isLoggedIn = false
      state.isLoading = false
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
      state.user = null
      localStorage.removeItem('user')
      console.log(defaults.socket)
      state.socket = {
        connected: false,
        currentRoom: 'Room -1',
        error: false
      }
    },
    // TODO: Move to Socket Store
    SOCKET_CONNECT (state) {
      state.socket.connected = true
    },
    SOCKET_DISCONNECT (state) {
      state.socket.connected = false
    },
    SOCKET_ROOMCHANGE (state, room) {
      state.socket.currentRoom = room[0]
    },
    SOCKET_ERROR (state, message) {
      state.socket.error = message.error
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    },
    isLoading: state => {
      return state.isLoading
    },
    getToken: state => {
      if (state.user && state.user.token) return state.user.token
      else return ''
    },
    currentChatRoom: state => {
      return state.socket.currentRoom
    },
    currentUser: state => {
      return state.user
    }
  },
  // Actions in VueX can be async
  actions: {
    sendMessage ({commit}, message) {
      vm.$socket.emit('SEND_MESSAGE', message)
    }
  }
})
