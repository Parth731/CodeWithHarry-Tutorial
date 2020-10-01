
console.log("This is 7 Function");

// function defination
function greet(name,greetText="Greeting from Javascript"){

    let name1 = "Name1";
    let name2 = "Name2";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
    return name1,name2;

    // This line will never execute (unreachable code)
    // console.log("Function is returned");

}




let name1 = "harry";
let name2 = "Shubam";
let name3 = "Rohan";
let name4 = "Parth";
let greetText = "Good Morning";
// let greetText;

// function call
greet(name1,greetText);
greet(name2,greetText);
greet(name3);
let na1,na2;
// na1,na2 = greet(name4);  //undefined name2
na2 = greet(name4);
console.log(na2);  

// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");


