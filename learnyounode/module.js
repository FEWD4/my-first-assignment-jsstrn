var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err)
    var files = list.filter(function (file) {
      return (path.extname(file) === '.' + ext)
    })
    callback(null, files)
  })
}
