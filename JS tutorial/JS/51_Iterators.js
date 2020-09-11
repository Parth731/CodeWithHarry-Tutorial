
console.log("This is Tutorial 51");

// itrators


function fruitsItrator(values) {
    let nextIndex = 0;

    //  we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // we will return below object
                return {


                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // we will return below object with only done
                return {
                    
                    done: true
                }
            }
            
            
        }
    }
}



const myArray = ['Apple', 'Grapes', 'Mango', 'Bhindi'];
console.log("my Array is", myArray);

const fruits = fruitsItrator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);

// Array.forEach()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction1);

function myFunction1(value, index, array) {
  txt = txt + value + " ";
    console.log(txt);
  
}
console.log(txt);


// Array.map()
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction2);

function myFunction2(value, index, array) {
  return value * 2;
}
console.log(numbers2);


// Array.filter()
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction3);

function myFunction3(value, index, array) {
  return value > 18;
}
console.log(over18);


// Array.reduce()
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction4);

function myFunction4(total, value, index, array) {
  return total + value;
}
console.log(sum);


// Array.reduceRight()
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction5);

function myFunction5(total, value, index, array) {
  return total + value;
}
console.log(sum);


// Array.every()
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction6);

function myFunction6(value, index, array) {
  return value > 18;
}
console.log(allOver18);

// Array.some()
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction7);

function myFunction7(value, index, array) {
  return value > 18;
}
console.log(someOver18);


// Array.indexOf()
fruit = ["Apple", "Orange", "Apple", "Mango"];
var a = fruit.indexOf("Apple");
console.log(a);


// Array.lastIndexOf()
fruit = ["Apple", "Orange", "Apple", "Mango"];
var a = fruit.lastIndexOf("Apple");
console.log(a);

// Array.find()
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction8);

function myFunction8(value, index, array) {
  return value > 18;
}
console.log(first);

// Array.findIndex()
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);