
// show the database
show dbs

// use the harrykart database
use harrykart

// how to create database
use newDB

// show database items
show harrykart

// show the harrykart collections
show collections

// show the all items
db.items.find()


// update the one object
db.items.updateOne({name:"Samsung 30s"},{$set:{price : 2}})
db.items.find()


// update the many object
db.items.updateMany({name:"Samsung 30s"},{$set:{rating : 2}})
db.item.find()


