/*

backend is serving file



*/

// The Built-in HTTP Module
const http = require("http");


// The Built-in file module
const fs = require("fs");


// reading the from server 
// const filecontent = fs.readFileSync("../Java Script/13_Date_Object.html");
const filecontent = fs.readFileSync('data.txt');

// 1 --> request 
// 2 --> response

//create a server object:
const server = http.createServer((req,res) => {

    res.writeHead(200,{'content-type':'text/html'});
    
    res.write("hello world ");  //write a response to the client
    
    // res.write(req.url); //req argument that represents the request from the client
    
    res.end(filecontent);   //end the response
    // res.end()
})

//the server object listens on port 8080
server.listen(8080,'127.0.0.1',()=>{
    console.log("Listening on port 8080");
})