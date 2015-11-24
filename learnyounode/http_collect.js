var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.on('data')
})
