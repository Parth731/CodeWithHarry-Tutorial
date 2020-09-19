
// object

// {name: "john", age: 30, city: "New York"} ->object
// {"name":"john","age":30,"city":"New York"} ->JSON object

myobj = {
    "name": "john",
    "age": 30,
    "car": null
};

// x = myobj.name;
x = myobj["name"];
console.log(x);

// looping an object
for (x in myobj) {
    // document.getElementById('demo').innerHTML += x + "<br>";

    document.getElementById('demo').innerHTML += myobj[x] + "<br>";

}


// nested json objects
myobj = {

    "name": "john",
    "age": 30,
    "car": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
    
}
// x = myobj.car.car2;
x = myobj.car["car2"];
document.getElementById('demo1').innerHTML +=  x + "<br>";
console.log(x);

// modify value
myobj.car.car2 = "Mercedes";
x = myobj.car["car2"];
document.getElementById('demo2').innerHTML +=  x + "<br>";
console.log("Mercedes")


// delete object property
delete myobj.car.car1;
let i;

for(x in myobj.car){
    i += myobj.car[x] + "<br>";
}
document.getElementById('demo3').innerHTML =  i;



