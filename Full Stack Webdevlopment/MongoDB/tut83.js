
//DELETE
show dbs
show harrykart
show collections

db.items.find()

db.items.find({price:22000})

//deleting items from the mongo DataBase
db.items.deleteOne({price:22000})


// deletOne will delete the matching entry and will delete the first entry in case of multi document match
db.items.deleteMany({price:22000})
