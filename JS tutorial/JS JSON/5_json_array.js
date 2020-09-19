
// ["fiord","BMW","fiat"]

// Arrays in JSON Objects
let myjson = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
}

// x = myjson.cars[0]; //ford
x = myjson.cars;
document.getElementById("demo").innerHTML += x  + "<br>";
 
// Looping Through an Array
let i = "";
for(x in myjson.cars){
    i += myjson.cars[x] + "<br>";
}
document.getElementById("demo1").innerHTML = i;


// Nested Arrays in JSON Objects
myObj = {
    "name":"John",
    "age":30,
    "cars": [
      { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
      { "name":"BMW", "models":[ "320", "X3", "X5" ] },
      { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
}

i = "";
for(x in myObj.cars){
    i += "<h2>" + myObj.cars[x].name + "</h2>";

    for(y in myObj.cars[x].models){
        i += myObj.cars[x].models[y] +"<br>"
    }

}

console.log(i);
document.getElementById("demo2").innerHTML = i;

// Modify Array Values
myjson = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
}
myjson.cars[1] = "Mercedes";

i = "";
for(x in myjson.cars){
    i += myjson.cars[x] + "<br>";
}
console.log(i);
document.getElementById("demo3").innerHTML = i;

// Delete Array Items
i="";
delete myjson.cars[0];
for(x in myjson.cars){
    i += myjson.cars[x] + "<br>";
}
console.log(i);
document.getElementById("demo4").innerHTML = i;
