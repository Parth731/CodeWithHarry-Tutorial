console.log("This is a Tutorial 58 Sets");

// Set stores unique values
const mySet = new Set();    //initialize an empty set 
console.log("The set look like This :",mySet);

// Adding values to this set
mySet.add("This");
mySet.add("myName");
mySet.add("This");
mySet.add("That");
mySet.add(345);
mySet.add(true);
mySet.add(false);
mySet.add("That2");
console.log("The set look like This Now :",mySet);

// use a contructor to initialize the set
let mySet2 = new Set([1,45,"This", false,{a:4,b:5},"This"]);
console.log("New Set :",mySet2);

// get the size of the set
console.log(mySet.size);

// check weather set has 346 or not 
console.log(mySet.has(345));//true
console.log(mySet.has(34));//false

console.log("Before removing :",mySet.has("That2"));
mySet.delete("That2"); //removing an element from the set
console.log("after removing :",mySet.has("That2"));


// iterating a set
for(let item of mySet){
    console.log("This is :",item);
}

mySet.forEach((item)=>{

    console.log("This is :",item);
})

let myArray = Array.from(mySet);
console.log(myArray);