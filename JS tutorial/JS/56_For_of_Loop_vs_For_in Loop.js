console.log("This is tutorial 56 on for-in and for-of loops");


let people = ["Harry","Subham","Parth","vikrant","Rohit"];


// ********************** for in loop****************
// traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);

//     // can be better

// }

for(let index in people){
    console.log(people[index]);
}


// 1. iteraing an object 
let obj ={
    name:"harry",
    language:"JavaScript",
    hobbies:"Android App Developer"
}
// console.log(obj);


// 1.1 iterating on object using traditional for loop
// let len = Object.keys(obj).length;
// console.log(len)
// for (let index = 0; index < len ; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);

//     // can be better

// }


// 1.2 iterating on object using for in loop
for(let key in obj){    // here key reprented in string
    console.log(obj[key]);
}


// 1. iterating a string
// we can use for in with string to loop through all the characters
let myString = "This is My String";
for(let char in myString){
    console.log(myString[char]);
}


// quiz : use traditional for loop to iterate through the same string
for(let i=0;i<myString.length;i++){
    console.log(myString[i]);
}


// ********************** for of loop****************

console.log("**************for of loop start here************************");
people = ["Harry","Subham","Parth","vikrant","Rohit"];

for(let name of people){
    console.log(name); 
}

for(let value of myString){
    console.log(value);
}


// for in use with object
// for of use with array, string (iterate)