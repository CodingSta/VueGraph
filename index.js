const express = require('express')
const http = require('http')
const history = require('connect-history-api-fallback')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 1337
const options = {
  index: 'index.html'
}
var middleware = history({
  index: '/index.html'
})

app.use(middleware)
app.use('/', express.static('/home/site/wwwroot', options))

server.listen(port, function() {
  console.log('Server listen on port!' + server.address().port)
})