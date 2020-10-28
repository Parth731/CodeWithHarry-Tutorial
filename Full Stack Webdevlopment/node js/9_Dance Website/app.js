

const express = require("express");
const path = require("path");
const app = express();


// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contantDance', { useNewUrlParser: true });

// you want to store(save) data in database using post request to use (npm install body-parser)
const bodyparser = require("body-parser");


const port = 8000;


//define mongoose schema
const contactshema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String

});

const contact = mongoose.model('contact', contactshema);


// app.use(express.static('static',Option))

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static('Static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "Views"))



app.get("/", (req, res) => {

    const params = {}
    res.status(200).render("home.pug", params);

})


app.get("/contact", (req, res) => {

    const params = {}
    res.status(200).render("content.pug", params);

})



app.post("/contact", (req, res) => {

    var mydata = new contact(req.body);
    mydata.save().then(()=>{
        res.send("This items has been saved in database")
    }).catch(()=>{
        res.status(400).send("item was not saved to database");
    });

    // res.status(200).render("content.pug");

})


// SART THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})