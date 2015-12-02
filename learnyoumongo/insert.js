const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
  if (err) { console.error(err); process.exit(1) }

  const firstName = process.argv[2]
  const lastName = process.argv[3]
  const newUser = {
    firstName: firstName,
    lastName: lastName
  }

  const users = db.collection('users')
  users.insert(newUser, (err, doc) => {
      if (err) throw err
      // console.log(JSON.stringify(doc))
      console.log(JSON.stringify(newUser))
      db.close()
    })
})
