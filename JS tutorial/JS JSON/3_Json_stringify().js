
// JSON.stringify() -> converted array to string(value set the localstorage)
// Stringify a JavaScript Object
// object var obj = { name: "John", age: 30, city: "New York" };
// var myJSON = JSON.stringify(obj);


// Stringify a JavaScript Object
let obj = {
    name : "john",
    age : 30,
    city : "New York"
}
console.log(obj);   //object
let myjson = JSON.stringify(obj);
console.log(myjson);    //string
document.getElementById('demo2').innerHTML = myjson;


// Stringify a JavaScript Array
let arr = [
    "john",
    "Peter",
    "Sally",
    "June"
];
console.log(arr);
myjson = JSON.stringify(arr);
console.log(myjson);
document.getElementById('demo3').innerHTML = myjson;


// Stringify Dates
obj = {
    name:"john",
    today:new Date(),
    city: "NewYork"
}

myJSON = JSON.stringify(obj);
document.getElementById('demo4').innerHTML = myJSON;

// Stringify Functions
obj = { 
    name: "John", 
    age: function () {
        return 30;
    }, 
    city: "New York"
};

obj.age = obj.age.toString();
myJSON = JSON.stringify(obj);

document.getElementById("demo5").innerHTML = myJSON;