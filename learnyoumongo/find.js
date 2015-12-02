const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
  if (err) { console.error(err); process.exit(1) }

  const age = parseInt(process.argv[2], 10)

  const parrots = db.collection('parrots')
  parrots.find({
    age: { $gt: age }
  }).toArray((err, doc) => {
    console.log(doc)
    db.close()
  })
})
