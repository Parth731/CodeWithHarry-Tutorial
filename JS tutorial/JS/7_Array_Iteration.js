
//Array Iteration

console.log("This is a tutorial 7 Array Iteration")

//Array.forEach()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction1);

function myFunction1(value, index, array) {
  txt = txt + value + " ";
   
}
console.log(txt);


//Array.map()
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction2);

function myFunction2(value, index, array) {
  return value * 2;
}

console.log(numbers2);

//Array.filter()
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction3);

function myFunction3(value, index, array) {
  return value > 18;
}
console.log(over18);

//Array.reduce()
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction4);

function myFunction4(total, value, index, array) {
  return total + value;
}
console.log(sum);

//Array.reduceRight()
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction5);

function myFunction5(total, value, index, array) {
  return total + value;
}
console.log(sum);

//Array.every()
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction6);

function myFunction6(value, index, array) {
  return value > 18;
}
console.log(allOver18);


//Array.some()
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction7);

function myFunction7(value, index, array) {
  return value > 18;
}
console.log(someOver18)

//index finding
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a)
var a = fruits.lastIndexOf("Apple");
console.log(a)

//Array.find()
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction8);

function myFunction8(value, index, array) {
  return value > 18;
}
console.log(first)

//Array.findIndex()
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction9);

function myFunction9(value, index, array) {
  return value > 18;
}
console.log(first);