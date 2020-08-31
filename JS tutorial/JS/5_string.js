
console.log("This is a Tutorial 5 String")

//JavaScript Strings
var carName1 = "Volvo XC60";  // Double quotes
var carName2 = 'Volvo XC60';  // Single quotes
console.log(carName1,carName2);

//string length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);

//Escape Character
var x = "We are the so-called \"Vikings\" from the north.";
var x = 'It\'s alright.';
var x = "The character \\ is called backslash.";
console.log(x);

// Strings Can be Objects
var firstName = new String("John");
console.log(firstName);

//findig string
var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate"); //return index no
var pos = str.lastIndexOf("locate");    
console.log(pos);

//Extracting String
var str = "Apple, Banana, Kiwi";
// var res = str.slice(7,13);
// var res = str.slice(-12, -6);
// var res = str.slice(7);
// var res = str.slice(-12);
// var res = str.substring(7,13); //negative number can not accpet
// var res = str.substr(7,6);
// var res = str.substr(7);
var res = str.substr(-12);
console.log(res);

//replacing string
str = "Please visit Microsoft and Microsoft!";
// str = "Please visit MICROSOFT  and MICROSOFT !";
// var n = str.replace(/MICROSOFT/i, "parasoft");
var n = str.replace(/Microsoft/g, "parasoft");
console.log(n);

// Converting to Upper and Lower Case
var text1 = "Hello World!";       // String
// var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
var text2 = text1.toLowerCase();  // text2 is text1 converted to lowwer
console.log(text2);


//concat()
// var text1 = "Hello";
// var text2 = "World";
// var text3 = text1.concat(" ", text2);
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");
console.log(text);


//trim()
var str = "       Hello World!        ";
console.log(str.trim());

//Extracting String Characters
var str1 = "HELLO WORLD";
var str2 = str1.charAt(0);            // returns H 
                                    //return index char 
console.log(str2);
var str2 = str1.charCodeAt(0)           // returns 72 (ACSII)

//Converting a String to an Array
var txt = "a,b,c,d,e";   // String
// console.log(txt.split(","))
// console.log(txt.split("|"))
console.log(txt.split(" "))

var txt = "Hello";       // String
console.log(txt.split(""));           // Split in characters
console.log(txt);

let fruit1 = "Orange";
let fruit2 = "Apple";
let myhtml = `Hello ${name}
                <h1> This is heading </h1>
                <p> you like ${fruit1} 
                and ${fruit2}
                `;
console.log(myhtml)

console.log(myhtml.endsWith("and"))