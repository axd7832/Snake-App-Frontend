<template>
  <div id="gameContainer" @keyup="keyPress($event)">
    <button @click="createLobby">Create Lobby</button>
    <button @click="readyUp">Ready Up</button>

    <!-- <div v-html="gameBoardSvg"></div> -->
    <div id="gameBoard">

    </div>
    <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100% 100%"></svg> -->
  </div>
</template>

<script>
import Snake from '@/components/Game/GameBoard/Snake'
export default {
  name: 'Game',
  data: function () {
    return {
      gameStarted: true,
      userInputDirection: '',
      snakeArr:[],
      foodLoc:{}
    }
  },
  methods: {
    createLobby: function () {
      this.$store.dispatch('createLobby')
    },
    readyUp: function () {
      this.$store.dispatch('readyUp')
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
    // used to either update the snake or to toggle cells to translucent
    // compare the two arrays for differences to determine the minimum changes needed
    // in a perfect world only the head and tail should change, and another tail added if a food is eatten
    paintSnake (currentSnakeArr, newSnakeArr) {
      // check the tail of the new snake to see if it is should be removed
      let currentSnakeTail = {} 
      if (currentSnakeArr.length === 0) {
        currentSnakeTail = currentSnakeArr[currentSnakeArr.length]
      } else {
        currentSnakeTail = currentSnakeArr[currentSnakeArr.length - 1]
      }

      let newSnakeTail = {}
      if (newSnakeArr === 0) {
        newSnakeArr = newSnakeArr[newSnakeArr.length]
      } else {
        newSnakeArr[newSnakeArr.length - 1] 
      }
      console.log(currentSnakeTail)
      console.log(newSnakeTail)
      if (currentSnakeArr.length !== 0) {
        if (newSnakeTail.x !== currentSnakeTail.x || newSnakeTail.y !== currentSnakeTail.y) {
          this.paintCell(currentSnakeTail.x, currentSnakeTail.y, 'translucent')
        }
      }
      console.log(newSnakeArr)
      for (var body of newSnakeArr) {
        if (body.head === true) {
          this.paintCell(body.x, body.y, 'red')
        } else {
          this.paintCell(body.x, body.y, 'white')
        }
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
    sendUserInputs () {
      if (this.gameStarted === true) {
        console.log("SENDING")
        setInterval(() => {
          // send the update to the server after an interval
            this.$store.dispatch('sendGameCommand', {roomId: this.currentChatRoom, userInputDirection: this.userInputDirection})
        }, 1000)
      }
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
        }
      }
    })
  },
  computed :{
    currentChatRoom () {
      // clear the chat on room change
      // eslint-disable-next-line
      return this.$store.getters.currentChatRoom
    }
  },
  mounted () {
    this.drawSVG()
    this.sendUserInputs()
    this.$options.sockets.GAME_UPDATE = (updateObject) => {
      console.log(updateObject)
      if (updateObject) {
        // listen for commands
        this.gameStarted = true
        this.paintFood(this.foodLoc,updateObject.foodLoc)
        this.foodLoc = updateObject.foodLoc
        // currentSnake, newSnake
        this.paintSnake(this.snakeArr,updateObject.snakeArr, )
        this.snakeArr = updateObject.snakeArr
        
      }
    }
  },
  keyPress (event) {
    console.log('key press called')
    console.log(event)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #gameContainer {
      min-height: 58vh;
      padding: 10px;
    }
    /* #gameBoard {
      min-width: 100%;
      min-height: 55vh;
      background: #000;
    } */
</style>
