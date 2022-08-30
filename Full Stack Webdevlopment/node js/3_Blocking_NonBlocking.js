
/*

synchronous or blocking
-line by line execution 


Asynchronous or non blocking
-line by line execution not guaranteed 
-callback will fire


nodejs working nonblocking i/o model;(including callback)

readfile tab tak callback run nai hoga jab tak readfile operation complete nai hoga
*/

// file used ansyncronous mode(read file)
const fs  = require("fs");
let text = fs.readFile("data.txt","utf-8",function(err,data){
    console.log(err,data);
});
console.log("This is a message");

/*
output:(ansyncronous operation)

This is a message
null 
This is parth home        
this is reach man also good man

*/


