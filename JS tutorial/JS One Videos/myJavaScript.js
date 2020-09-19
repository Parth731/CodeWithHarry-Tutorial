
//1. Ways to print in JavaScript
console.log("Hello world");
// alert("me");
// document.write("This is Documnet write")


//2. java script console API: Application program interface
console.log("Hello World",4 + 6,"Another log")
console.warn("This is warning")
console.error("This is a error");
console.assert(4==4)
console.assert(4==6)
console.clear();


/*
multi 
line 
commment
*/


//3. JavaScript Variables
// what is Variable? => container to store data value
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Datatype in JavaScript
// number
var num1 = 455;
var num2 = 56.76;

// string
var str1 = "This is a string";
var str1 = "This is also a string";

// object
var marks = {
    ravi : 34,
    shubham : 78,
    harry : 99.97
}

// console.log(marks);


// boolean
var a = true;
var b = false;
// console.log(a,b)

// var und = undefined;
var und;
// console.log(und)

var n = null;
// console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1,2,"bablu",4,5];
// console.log(arr);
// console.log(arr[2]);


// operator in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);


// function JavaScript

