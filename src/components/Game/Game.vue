<template>
  <div id="gameContainer" @keyup="keyPress($event)">
    <span v-if="gameStarted">Score: {{score}}</span>
    <div id="gameBoard">
      <div id="boardOverlay" class="has-text-centered" v-if="showOverlay">
        <div id="boardOverlayCentered">
          <div>
            <span v-if="!gameStarted" id="gameStatusText">{{gameStatus}}</span>
          </div>
          <a v-if="showReadyButton" @click="readyUp" class="button is-success">Ready Up</a>
          <a v-if="gameOver" @click="playAgain" class="button is-success">Play Again</a>
        </div>
    </div>
    </div>
    <div id="howToPlay">
      <h3 class="title is-3">How to play</h3>
      <div>
        <p>In this game, teamwork is a must. Communicate with the other player to control the Snake and eat the food. Be careful not to run into yourself or fall off the map in the process.</p>
      </div>
      <div class="controls">
        <h5 class="title is-5">Controls</h5>
        <h6 class="subtitle is-6">W - UP</h6>
        <h6 class="subtitle is-6">A - LEFT</h6>
        <h6 class="subtitle is-6">S - DOWN</h6>
        <h6 class="subtitle is-6">D - RIGHT</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data: function () {
    return {
      gameStarted: false,
      gameOver: false,
      userInputDirection: '',
      snakeArr: [],
      foodLoc: {},
      score: 0,
      gameStatus: '',
      showReadyButton: false
    }
  },
  methods: {
    readyUp: function () {
      this.$store.dispatch('readyUp')
      this.gameStatus = 'Awaiting Other Player...'
    },
    // creates the SVG bounds for the board
    drawSVG () {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.setAttribute('height', 500)
      svg.setAttribute('width', 500)
      svg.setAttribute('style', 'background-color:black')
      svg.setAttribute('id', 'board0')
      document.getElementById('gameBoard').append(svg)
      this.drawBoard(500, 500)
    },
    // creates the 50 x 50 board of circles
    drawBoard (height, width) {
      let circleSize = 5
      for (let c = circleSize; c <= Math.floor(height); c += (circleSize * 2)) {
        for (let r = circleSize; r <= Math.floor(width); r += (circleSize * 2)) {
          this.drawCircle(r, c, 'translucent')
        }
      }
    },
    // removes the old snake and draws the new one
    paintSnake (currentSnakeArr, newSnakeArr) {
      for (let body of currentSnakeArr) {
        this.paintCell(body.x, body.y, 'translucent')
      }
      for (let body of newSnakeArr) {
        this.paintCell(body.x, body.y, 'red')
      }
    },
    // removed the old food and paints the new one
    paintFood (currentFood, newFood) {
      if (currentFood) {
        this.paintCell(currentFood.x, currentFood.y, 'translucent')
      }
      if (newFood) {
        this.paintCell(newFood.x, newFood.y, 'blue')
      }
    },
    // reused for food and snake
    // paints a circle at a location
    paintCell (x, y, color) {
      window.$(`#${x}-${y}`).attr('fill', color)
    },
    // Creates the SVG circle element for the game board
    drawCircle (x, y, color) {
      var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      window.$(circle).attr('fill', color)
      window.$(circle).attr('cx', x)
      window.$(circle).attr('cy', y)
      window.$(circle).attr('r', 5)
      window.$(circle).attr('id', (Math.floor(x / 10) + 1) + '-' + (Math.floor(y / 10) + 1))
      window.$('#board0').append(circle)
    },
    // overlay for the svg board for game start/ready/restart
    showOverlay () {
      if (this.gameStarted === false || this.showReadyButton === true) return true
      else return false
    },
    playAgain () {
      this.$store.dispatch('playAgain', this.currentChatRoom)
    }
  },
  created () {
    // awaiting invite invitation
    window.addEventListener('keydown', (e) => {
      // on use if the event is on the body and not the input field
      if (this.gameStarted === true) {
        if (e.target.localName === 'body') {
          // up - w | down - s | left - a | right - d
          // send response to the server when the command is received
          if (e.key === 'w') {
            this.userInputDirection = 'UP'
          } else if (e.key === 'a') {
            this.userInputDirection = 'LEFT'
          } else if (e.key === 's') {
            this.userInputDirection = 'DOWN'
          } else if (e.key === 'd') {
            this.userInputDirection = 'RIGHT'
          }
          // sends the command to the central state, sends command over WS
          this.$store.dispatch('sendGameCommand', {roomId: this.currentChatRoom, userInputDirection: this.userInputDirection})
        }
      }
    })
  },
  computed: {
    // gets the current chat room from the shared state
    currentChatRoom () {
      // eslint-disable-next-line
      return this.$store.getters.currentChatRoom
    }
  },
  mounted () {
    this.drawSVG()
    // Listens for Server WS Updates
    this.$options.sockets.GAME_UPDATE = (updateObject) => {
      if (updateObject) {
        // update food location if it has changed
        this.paintFood(this.foodLoc, updateObject.foodLoc)
        this.foodLoc = updateObject.foodLoc
        this.score = updateObject.score
        var tempGameStatus = updateObject.gameStatus
        // Check the game state, display info accordingly
        if (tempGameStatus === 'Awaiting Ready Up') {
          this.gameStarted = false
          this.showReadyButton = true
          this.gameOver = false
          this.gameStatus = 'Waiting for both players to Ready Up...'
        } else if (tempGameStatus === 'Active') {
          this.gameStatus = 'Game Active'
          this.showReadyButton = false
          this.gameStarted = true
        } else if (tempGameStatus === 'Completed') {
          this.gameStatus = 'Game Over'
          this.gameStarted = false
          this.gameOver = true
        }
        // currentSnake, newSnake
        this.paintSnake(this.snakeArr, updateObject.snakeArr)
        this.snakeArr = updateObject.snakeArr
      }
    }
  }
}
</script>

<style scoped>
    #gameContainer {
      min-height: 58vh;
      padding: 10px;
    }
    #gameBoard {
      width: fit-content;
      position: relative;
    }
    #boardOverlay {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    #centerButton {
      position: absolute;
      left: 30%;
    }
    #boardOverlayCentered {
      margin-top: 40%;
    }
    span {
      font-size: 1.3em;
    }
    #gameStatusText {
      color: white;
    }
    #howToPlay {
      position: absolute;
      width: 40vw;
      left: 520px;
      top: 90px;
    }
    .controls {
      margin-top: 10px;
    }
</style>
