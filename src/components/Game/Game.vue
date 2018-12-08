<template>
  <div id="gameContainer" @keyup="keyPress($event)">
    <span>Score: {{score}}</span>
    <div id="gameBoard">
      <div id="boardOverlay" v-if="showOverlay">
        <div id="boardOverlayCentered">
          <a v-if="showReadyButton" @click="readyUp" class="button is-success">Ready Up</a>
          <div>
            <span v-if="!gameStarted" id="gameStatusText">{{gameStatus}}</span>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Snake from '@/components/Game/GameBoard/Snake'
export default {
  name: 'Game',
  data: function () {
    return {
      gameStarted: false,
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
    // creates the board of circles
    drawBoard (height, width) {
      let circleSize = 5
      for (let c = circleSize; c <= Math.floor(height); c += (circleSize * 2)) {
        for (let r = circleSize; r <= Math.floor(width); r += (circleSize * 2)) {
          this.drawCircle(r, c, 'translucent')
        }
      }
    },
    paintSnake (currentSnakeArr, newSnakeArr) {
      for (let body of currentSnakeArr) {
        this.paintCell(body.x, body.y, 'translucent')
      }
      for (let body of newSnakeArr) {
        this.paintCell(body.x, body.y, 'red')
      }
    },
    paintFood (currentFood, newFood) {
      if (currentFood) {
        this.paintCell(currentFood.x, currentFood.y, 'translucent')
      }
      if (newFood) {
        this.paintCell(newFood.x, newFood.y, 'blue')
      }
    },
    paintCell (x, y, color) {
      window.$(`#${x}-${y}`).attr('fill', color)
    },
    drawCircle (x, y, color) {
      var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      window.$(circle).attr('fill', color)
      window.$(circle).attr('cx', x)
      window.$(circle).attr('cy', y)
      window.$(circle).attr('r', 5)
      window.$(circle).attr('id', (Math.floor(x / 10) + 1) + '-' + (Math.floor(y / 10) + 1))
      window.$('#board0').append(circle)
    },
    showOverlay () {
      if (this.gameStarted === false || this.showReadyButton === true) return true
      else return false
    }
  },
  created () {
    // awaiting invite invitation
    this.snake = new Snake()
    console.log(this.snake.start())

    window.addEventListener('keydown', (e) => {
      // on use if the event is on the body and not the input field
      if (this.gameStarted === true) {
        if (e.target.localName === 'body') {
          // up - w | down - s | left - a | right - d
          // send response to the server when the command is received
          if (e.key === 'w') {
            console.log('INPUT: w')
            this.userInputDirection = 'UP'
          } else if (e.key === 'a') {
            console.log('INPUT:  A')
            this.userInputDirection = 'LEFT'
          } else if (e.key === 's') {
            console.log('INPUT: S')
            this.userInputDirection = 'DOWN'
          } else if (e.key === 'd') {
            console.log('INPUT:  D')
            this.userInputDirection = 'RIGHT'
          }
          this.$store.dispatch('sendGameCommand', {roomId: this.currentChatRoom, userInputDirection: this.userInputDirection})
        }
      }
    })
  },
  computed: {
    currentChatRoom () {
      // clear the chat on room change
      // eslint-disable-next-line
      return this.$store.getters.currentChatRoom
    }
  },
  mounted () {
    this.drawSVG()
    this.$options.sockets.GAME_UPDATE = (updateObject) => {
      console.log(updateObject)
      if (updateObject) {
        // listen for commands
        this.paintFood(this.foodLoc, updateObject.foodLoc)
        this.foodLoc = updateObject.foodLoc
        this.score = updateObject.score
        var tempGameStatus = updateObject.gameStatus
        if (tempGameStatus === 'Awaiting Ready Up') {
          this.gameStarted = false
          this.showReadyButton = true
          this.gameStatus = 'Waiting for both players to Ready Up...'
        } else if (tempGameStatus === 'Active') {
          this.gameStatus = 'Game Active'
          this.showReadyButton = false
          this.gameStarted = true
        } else if (tempGameStatus === 'Completed') {
          this.gameStatus = 'Game Over'
          this.gameStarted = false
        }
        // currentSnake, newSnake
        this.paintSnake(this.snakeArr, updateObject.snakeArr)
        this.snakeArr = updateObject.snakeArr
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    #boardOverlayCentered {
      position: absolute;
      top: 50%;
      left: 40%;
    }
    #gameStatusText {
      color: white;
    }
</style>
