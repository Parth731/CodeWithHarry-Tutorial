// Type conversion 
console.log('This is a tutorial 4 Typeconversion');
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');


//console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);




//typesof operator
// console.log(typeof "john" + " " +
// typeof 3.14 + " " +
// typeof NaN + " " +
// typeof false + " " +
// typeof [1,2,3,4] + " " +
// typeof {name:'john', age:34} + " " +
// typeof new Date() + " " +
// typeof function () {} + " " +
// typeof myCar + " " +
// typeof null);

// typeof "John"                 // Returns "string" 
// typeof 3.14                   // Returns "number"
// typeof NaN                    // Returns "number"
// typeof false                  // Returns "boolean"
// typeof [1,2,3,4]              // Returns "object"
// typeof {name:'John', age:34}  // Returns "object"
// typeof new Date()             // Returns "object"
// typeof function () {}         // Returns "function"
// typeof myCar                  // Returns "undefined" *
// typeof null                   // Returns "object"


//number to string
var x = 123
console.log(x.toString());
console.log((123).toString());
console.log((100+23).toString());

//










