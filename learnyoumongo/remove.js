const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
const db = process.argv[2]

mongo.connect(url, (err, db) => {
  if (err) { console.error(err); process.exit(1) }
  const userId = { _id: process.argv[4] }
  const collection = db.collection(process.argv[3])
  collection.remove(userId, (err, doc) => {
    console.log(doc)
    db.close()
  })
})
