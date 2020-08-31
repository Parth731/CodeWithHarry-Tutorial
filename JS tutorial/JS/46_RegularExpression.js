
console.log("This is a tutorial 46");

let reg = /harry/; //This is a regular expression litteral in js
reg = /harry/g; //g means global
// reg = /harry/i; //i means case insensitive

// console.log(reg);
// console.log(reg.source);    //regular expression ka source


let s = "This is great code with harry and also harry bhai";
// Function to match expression
// 1. exct() - this function will return an array or null for no match
let result = reg.exec(s);
// g->global
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); --> we can use multiple exct with global flag

if (result) {
    // console.log(result);
    // console.log(result.input);
    // console.log(result.index);
    // console.log(result.source);
}
// 2. test() -> return true or flase
let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the reg is true in the string "a" //false


// 3. match() --> it will return an array of results or null
// let result3 = reg.match(s) --> This is wrong
// let result3 = s.match(reg) --> This is right
let result3 = s.match(reg);
// console.log(result3);


// 4. search() --> return index of first match else -1
// let result4 = reg.search(s) --> This is wrong
// let result4 = s.search(reg) --> This is right
let result4 = s.search(reg);
// console.log(result4);


// 5. replace() --> return new replace string with all the replacements (if no flag is given, first match will be replace)
let result5 = s.replace(reg,"SHUBHAM");
console.log(result5);