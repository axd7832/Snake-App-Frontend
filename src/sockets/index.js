module.exports = {
  connect: function () {
    console.log('socket connected')
  },
  roomChange: function (val) {
    console.log(val)
  },
  broadcast: function (val) {
    console.log(val)
  }
}
