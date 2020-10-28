
//searching for data in mongo db
use harrykart

// Read
// the query will return all the object with rating equal to 3.5
db.items.find({rating:3.5});
db.items.find({rating: {$gte:4.0}})
db.items.find({rating: {$gt:4.0}})


// and operator
db.items.find({rating: {$gt:4.0},price:{$gt:25000}})
db.items.find({rating: {$lt:4.0},price:{$gt:114000}})


// or operator
db.items.find({$or:[{rating:{$lt:4.5}},{price:{$gt:30000}}]})


// perticular data filtering
db.items.find({rating:{$gt:3.5}}, {rating:1});
db.items.find({rating:{$gt:3.5}}, {rating:1,qty:1});
