const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
  if (err) { console.error(err); process.exit(1) }

  const size = process.argv[2]
  const match = { size: size }
  const group = {
    _id: 'average',
    average: { $avg: '$price' }
  }

  const prices = db.collection('prices')
  prices.aggregate([{ $match: match}, { $group: group}])
    .toArray((err, result) => {
      var num = Number(result[0].average).toFixed(2)
      console.log(num)
      db.close()
    })
})
