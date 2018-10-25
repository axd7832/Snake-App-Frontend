const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
var history = require('connect-history-api-fallback')

// create the express app
const app = express()
// create middleware to handle serving the app
app.use(history())
app.use(serveStatic(path.join(__dirname, 'dist')))
// Catch all routes and redirect to the index file (Using vue-router history)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})
// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log to feedback that this is actually running
console.log('Server started on port ' + port)
