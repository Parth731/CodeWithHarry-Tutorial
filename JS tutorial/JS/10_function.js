console.log("We are tutorial 10 function");

// function defination
function myfunction1(a,b) {
    return a*b;
    
}

// function declaration
let x = myfunction1(4,3);
console.log("value is " + x);


// //function expressions
var y = function(a,b){return a*b};
console.log("value is " + y(4,3));

//function constructor
var myfunction5 = new  Function("a","b","return a *b");
console.log(myfunction5(4,3));

//self-invoking function
(function(){
    var x = "Hello!!";
    console.log(x);
})();

//Functions Can Be Used as Values
function myfunction2(a,b){
    return a*b;
}

x = myfunction2(4,3)*2;
console.log(x);

//function are object
function myfunction3(a,b)
{
    return arguments.length;
    //return a*b;
}

console.log(myfunction3.toString());
console.log(myfunction3(4,3));

//arrow function
x = (x,y) => x*y;
x = (x,y) => {return x*y};
console.log(x(4,3));

//default parameter
function myfunction4(x,y){
    if(y == undefined){
        y=0;
    }
    return x*y;
}

console.log(myfunction4(4));


//argument object
x = findmax(1,123,500,115,44,88);

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

// console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"))
const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}


let name = 'SkillF';
let name2 ='Rohan';

let val = mygreet(name, 'Thanks a lot');
console.log(val);


const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});         



