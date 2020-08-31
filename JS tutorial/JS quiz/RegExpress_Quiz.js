
console.log("regular Expression Quiz");

let reg = /samantha/;
// reg = /samantha/i;
reg = /samantha/g;
let str = "This is samantha and samantha is good girl";
console.log(reg);

// with use global flag
let result = reg.exec(str);
console.log(result);
result = reg.exec(str);
console.log(result);

if(result){
console.log(result.index);
console.log(result.input);
}

result = reg.test(str);
console.log(result); // -> true or false

result = str.match(reg);
console.log(result);

result = str.replace(reg,"tamanna");
console.log(result);

result = str.search(reg);
console.log(result);

