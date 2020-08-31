console.log("This is a tutorial 2 variable");

// Variables in js
// var, let, const

var name = 'parth';
var channel;
var marks = 3454;
marks = 2;
channel = 'CodeWithparth'
console.log(name, channel, marks);

// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/

var city = 'Delhi';
console.log(city);

// const variable
const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

// let variable
{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);

//const array can not change but 
//add and remove the element from array
const arr1 = [1,2,3,4,5];
arr1.push(24);
console.log(arr1);
arr1.pop();
console.log(arr1);