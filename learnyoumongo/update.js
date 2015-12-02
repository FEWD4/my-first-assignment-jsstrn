const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
  if (err) { console.error(err); process.exit(1) }

  const username = { username: "tinatime" }
  const age = {
    $set:{ age: 40 }
  }

  const users = db.collection('users')
  users.update(username, age, (err, doc) => {
    console.log(doc)
    db.close()
  })
})
