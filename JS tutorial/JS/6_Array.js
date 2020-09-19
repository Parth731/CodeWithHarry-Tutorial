console.log("This is a Tutorial 6 Array");

const mark= [34,23,24,93,73,25];
//let mark= [34,23,24,93,73,25];
const fruits = ["orange","Apple","Pineapple"];
const mixed = ["str",89,[3,5]];

const arr = new Array(23,123,21,"orange");
console.log(mark);
console.log(arr);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.length);
console.log(Array.isArray("dfdf"));
console.log(Array.isArray(123));

arr[0] = "Parth";
let arrelement = arr[0];
console.log("element :", arrelement );
console.log(arr);

let value = mark.indexOf(73);
console.log(value);

// mutating or modifying arrays

mark.push(3564);
console.log(mark);
mark.unshift(122);
console.log(mark);
mark.pop();
console.log(mark);
mark.shift();
console.log(mark);

mark.splice(1,3) //1 parameter starting index 2nd parameter no of element delete 
console.log(mark)

mark.reverse();
console.log(mark);


// let mark2 = [1,2,3,7];
// mark = mark.concat(mark2);
// console.log(mark);

let myobj = {
    name:"Parth",
    channel:"codewithparth",
    isActive:true,
    mark: [1,2,3,4]

}

console.log(myobj);
console.log(myobj.isActive);
console.log(myobj["name"]);
console.log(myobj.channel);

//sorting Array
var fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.sort());
console.log(fruit.reverse());

//numberic sort
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}));
console.log(points.sort(function(a, b){return b - a}));
