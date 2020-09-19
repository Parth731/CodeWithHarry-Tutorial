
// Storing data in local storage

// sending data to server
// If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server
let myobj = {
    name:"john",
    age:31,
    city:"New Youk"
};
let myJSON = JSON.stringify(myobj);
// window.location = "demo_json.php" + myJSON
localStorage.setItem("myobj",myJSON);


// Receiving Data
// If you receive data in JSON format, you can convert it into a JavaScript object
let res = localStorage.getItem("myobj");
console.log(res);

n = JSON.parse(res);//string to array
console.log(n);

let html = "";



html += `

    <li>Name: ${n.name}</li>
    <li>Age: ${n.age}</li>
    <li>City: ${n.city}</li>
`

console.log(html);
document.getElementById("indroduction").innerHTML = html;

