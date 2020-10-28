


const express = require("express"); 
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;



// EXPRESS SPECIFIC STUFF
app.use("/static",express.static('static'))// serving static files
app.use(express.urlencoded())


// PUG SPECIFIC STUFF
app.set('view engine', 'pug')//set the template engine for pug
app.set('views',path.join(__dirname,"views"))// set the view diectory


// END POINT
app.get("/",(req,res)=>{

    console.log(req.body)
    const con = "This is the best content on the internet so far so use it windly"
    const params = {title:"PubG is best game", "content":con}
    res.status(200).render("index.pug",params);

})


app.post('/',(req,res)=>{


    // console.log(req.body)

    // jo bhi body aata hai he name ko dekhake aata hai
    name = req.body.name; 
    age = req.body.age; 
    gender = req.body.gender; 
    address = req.body.address; 
    more = req.body.more;
    
    let outputToWrite = `The name of the clint is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`  

    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message':"Your form has been sumbitted successfully"}
    res.status(200).render("index.pug",params);

})



// SART THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})