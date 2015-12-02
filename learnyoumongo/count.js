const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
  if (err) { console.error(err); process.exit(1) }

  const value = parseInt(process.argv[2], 10)
  const age = { age: {$gt: value} }

  const parrots = db.collection('parrots')
  parrots.count(age, (err, count) => {
    console.log(count)
    db.close()
  })
})
