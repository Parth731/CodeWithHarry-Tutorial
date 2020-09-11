
console.log("This is a Tutorial 59 Symbol");

// symbols primative type
// symbol is not a constructor
const sym1 = Symbol();
console.log(sym1);
console.log("Type of Symbol is :",typeof sym1);

const sym2 = Symbol("My identifier");
const sym3 = Symbol("My identifier");
console.log("symbol is :",sym2);

console.log(sym2 === sym3);//false

const a = "This is ";
const b = "This is ";
console.log(a === b);//true
console.log(null === null);//true
console.log(undefined === undefined);//true

const k1 = Symbol("indentifier for k1");
const k2 = Symbol("for k2");

myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Parth";
myObj["Name"] = "Good Boy";
myObj[4] = "Good init";


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k1); //can not do this to get Rohan because it is sama as myObj["k2"];

// symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}

console.log(JSON.stringify(myObj));



