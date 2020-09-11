
console.log("This is Tutorial 57 Maps");

// Maps in Javascript :we can use any type of key value

const myMap = new Map();

const key1 = 'myStr',
    key2 = {},
    key3 = function () { };

// setting map value...
myMap.set(key1, "This is a String");
myMap.set(key2, "This is a blank obj");
myMap.set(key3, "This is a empty function");

console.log(myMap);

// getting value from map
let value1 = myMap.get(key3);
console.log(value1);


// get the size of the map
console.log(myMap.size);

// You can loop using for...of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

// get only keys
for(let key of myMap.keys()){
    console.log("key is :",key);
}

// get only values
for(let value of myMap.values()){
    console.log("value is :",value);
}

// you can loop through a map using for each loop
// value must be begin
myMap.forEach((value,key)=>{

    console.log("key is :",key);
    console.log("value is :",value);

})

// conveting map to array
let myArray = Array.from(myMap);
console.log("Map to Array is :",myArray);

// conveting map key to array
let myKeyArray = Array.from(myMap.keys());
console.log("Map to Keys array is :",myKeyArray);

// conveting map value to array
let myValuesArray = Array.from(myMap.values());
console.log("Map to values array is :",myValuesArray);