/**
 * This file is the shared state for the entire application
 * Each of the Components must send/recieve data through this central state
 * Sends Commands to the WS when components request
 * Listens for Evenets from the WS and updates data accordingly
 * */
import Vuex from 'vuex'
import Vue from 'vue'
import vm from '@/main.js'

Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'
const TOGGLE_SHOW_PLAYERS = 'TOGGLE_SHOW_PLAYERS'
const TOGGLE_LEADERBOARDS = 'TOGGLE_LEADERBOARDS'
const RELOAD_ONCE = 'RELOAD_ONCE'

// Deafults for the application
const defaults = {
  isLoggedIn: !!localStorage.getItem('user') || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoading: false,
  showOnlinePlayers: false,
  showLeaderboards: false,
  socket: {
    connected: false,
    currentRoom: 'Room -1',
    error: false
  },
  initReload: localStorage.getItem('initReload') || true
}

// This is the central state for the entire app.
// These mutations are directly linked to server emit messages.
// Performs tasks to the state directly.
// Note: mutations are synchronous
export default new Vuex.Store({
  state: Object.assign({}, defaults),
  mutations: {
    [LOGIN] (state) {
      state.isLoading = true
    },
    [LOGIN_SUCCESS] (state, data) {
      state.isLoggedIn = true
      state.isLoading = false
      state.user = data
    },
    [LOGIN_FAILURE] (state) {
      state.isLoggedIn = false
      state.isLoading = false
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
      state.user = null
      state.showOnlinePlayers = false
      state.showLeaderboards = false
      localStorage.removeItem('user')
      localStorage.removeItem('initReload')
      state.initReload = true
      state.socket = {
        connected: false,
        currentRoom: 'Room -1',
        error: false
      }
    },
    [TOGGLE_SHOW_PLAYERS] (state) {
      state.showOnlinePlayers = !state.showOnlinePlayers
    },
    [TOGGLE_LEADERBOARDS] (state) {
      state.showLeaderboards = !state.showLeaderboards
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
    },
    RELOAD_ONCE (state) {
      state.initReload = false
      localStorage.setItem('initReload', false)
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
    },
    showOnlinePlayers: state => {
      return state.showOnlinePlayers
    },
    showLeaderboards: state => {
      return state.showLeaderboards
    },
    getInitReload: state => {
      return state.initReload
    }
  },
  // These are the websocket events that are fired off to the WS
  actions: {
    sendMessage ({commit}, message) {
      vm.$socket.emit('SEND_MESSAGE', message)
    },
    sendGameCommand ({commit}, gameCommand) {
      vm.$socket.emit('GAME_COMMAND', gameCommand)
    },
    invitePlayer ({commit}, username) {
      vm.$socket.emit('invitePlayer', username)
    },
    inviteResponse ({commit}, response) {
      vm.$socket.emit('inviteResponse', response)
    },
    playAgain ({commit}, roomId) {
      vm.$socket.emit('PLAY_AGAIN', roomId)
    },
    getOnlinePlayers () {
      vm.$socket.emit('getOnlinePlayers')
    },
    getLeaderboards () {
      vm.$socket.emit('getLeaderboards')
    },
    readyUp ({state}) {
      vm.$socket.emit('GAME_READY_UP', state.socket.currentRoom)
    },
    setReload ({state, commit}) {
      commit(RELOAD_ONCE)
    }
  }
})
