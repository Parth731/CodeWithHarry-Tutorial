console.log("We are tutorial 10 function");

//function declaration
// x = myfunction(4,3);
// console.log("value is " + x);

// function myfunction(a,b) {
//     return a*b;
    
// }

// //function expressions
// var y = function(a,b){return a*b};
// console.log("value is " + y(4,3));

// //function constructor
// var myfunction = new  Function("a","b","return a *b");
// console.log(myfunction(4,3));

// //self-invoking function
// (function(){
//     var x = "Hello!!";
//     console.log(x);
// })();

//Functions Can Be Used as Values
// function myfunction(a,b){
//     return a*b;
// }

// var x = myfunction(4,3)*2;
// console.log(x);

//function are object
// function myfunction(a,b)
// {
//     return arguments.length;
//     //return a*b;
// }

// console.log(myfunction.toString());
// console.log(myfunction(4,3));

//arrow function
// const x = (x,y) => x*y;
// const x = (x,y) => {return x*y};
// console.log(x(4,3));

//default parameter
// function myfunction(x,y){
//     if(y == undefined){
//         y=0;
//     }
//     return x*y;
// }

// console.log(myfunction(4));


//argument object
let x = findmax(1,123,500,115,44,88);

function findmax(){
    let i;
    let max = -Infinity;
    for(let i=0;i<arguments.length;i++)
    {
        if(arguments[i]>max)
        {
            max = arguments[i];
        }
    }
    return max
}

console.log(x);


console.log('this is tut 10');

if(1){
    let i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i)
// const mygreet = function(name, thank='Thank You'){
//     let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
//     return msg;

// }


// let name = 'SkillF';
// let name2 ='Rohan';

// let val = mygreet(name, 'Thanks a lot');
// console.log(val);


// const myobj = {
//     name: "SkillF",
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game())

// arr = ['fruit', 'vegetable', 'furniture'];

// arr.forEach(function(element, index, array) {
//     console.log(element, index)
// });         



