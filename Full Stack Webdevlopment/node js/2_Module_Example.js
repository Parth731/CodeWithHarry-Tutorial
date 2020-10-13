
// include the module
const fs  = require("fs");
let text = fs.readFileSync("data.txt","utf-8");
text = text.replace(/man/g,"girl");

console.log("The content of file is");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("samntha.txt",text);