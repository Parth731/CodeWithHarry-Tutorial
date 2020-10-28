
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harrykart', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    // we're connected!

    //console.log("We are connected bro/sis...");


});

// schema is layer. it is top of mongoDB. validation, which data going to the database is control using schema.
const kittySchema = new mongoose.Schema({
    name: String
});


// speak method add
kittySchema.methods.speak = function () {
    const greeting = "Meow name is " + this.name;
    console.log(greeting);
}


// kittySchema is converting model Kitten
// Schema me kosi fild kya rahegi aor
// model is final complite Schema
// schema is converting model
const Kitten = mongoose.model('ParthKitten', kittySchema);


const harryKitty = new Kitten({ name: 'harryKitty' });
const harryKitty2 = new Kitten({ name: 'harryKitty2' });
//console.log(harryKitty.name); // 'harryKitty'
//harryKitty.speak();

/*
output:

harryKitty Name
Meow name is harryKitty Name
We are connected bro/sis...

we are connected bro/sis. badame run horaha hai koyki 
nodejs nonblocking (ayscronoustion)
*/

/*
two parameter:
1->error
2->harryKitty(objct)

this is save in to the harrykart database
*/
harryKitty.save(function (err, harryKitty) {
    if (err) return console.error(err);
    harryKitty.speak();
});


harryKitty2.save(function (err, harryKitty2) {
    if (err) return console.error(err);
    //harryKitty2.speak();
});


Kitten.find({ name: "harryKitty2" }, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})