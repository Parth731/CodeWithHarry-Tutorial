
const express = require("express")

const app = express()


app.get("/",(req,res)=>{

    res.send("This is my first express app with harry");
    
})

app.listen(port,()=>{
    console.log("The application started successfully on port ");
})