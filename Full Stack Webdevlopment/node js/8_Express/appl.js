
/*

Google search:
template engine:

template engine ye process karatahai template ka. aap information feed karate hai kisi formate me aor output me template banake deta hai HTML banake deta hai  

example (username, user birthofdate, user ko konasa page dikhana hai) ye tampale engine me ush template me variable jis tah fit karana hai to fit karake reponse ko send kar dega


example: -> template engine 
pug node.js express

*/



const express = require("express"); 
const path = require("path");
const app = express();


const port = 80;


// serving static files
// note information 
// '/static' => it is url
// "static"  => it is folder name
app.use("/static",express.static('static'))


//set the template engine for pug
app.set('view engine', 'pug')


// set the view diectory
// views also called as template
// you also made tempalte floder
app.set('views',path.join(__dirname,"views"))


// our pug demo endpoint 
// here file name 'demo' (views/demo)
app.get("/demo", (req,res)=>{
    res.status(200).render('demo.pug', { title: 'Hey Parth', message: 'Hello there and thanks for telling how to use  pug!' })
})





app.get("/",(req,res)=>{

    // res.send("This is home page of my first express app with harry");

      // you want to send status code
      res.status(200).send("this is home page of my first express app with harry")
    
})


app.get("/about",(req,res)=>{

    res.send("This is about page of my first express app with harry")

})


app.get("/this",(req,res)=>{

    res.status(404).send("page not found");

})



app.post("/services",(req,res)=>{
    res.send("This is a post request services page of my first express app with harry")
})

app.post("/contant",(req,res)=>{
    res.send("This is a post request contant page of my first express app with harry")
})



app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})