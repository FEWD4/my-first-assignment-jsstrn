var fs = require('fs') // require filesystem
var file = fs.readFileSync(process.argv[2])
var line = file.toString().split('\n').length - 1
console.log(line)
