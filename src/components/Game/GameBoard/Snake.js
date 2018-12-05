export default class Snake {
  // create the snake
  xPos = 0
  yPos = 0
  speed = 0
  scale = 0
  lastDir = 'UP'

  // pass in the coords of the board, figure out where to place the snake
  constructor () {
    this.xPos = 1
    this.yPos = 1
    this.speed = 1
    this.scale = 1
    this.lastDir = 'RIGHT'
  }
  start () {
    return true
  }
  // for now - create a 500 x 500 board
  initBoard () {
    return '<div>AAA</div>'
  }
}
