
console.log("THis is a tutorial 41");

// Arrow Function


// create regular funcation
// function harry(){
//     console.log("This is the best person ever");
// }


// create regular funcation
// const harry = function(){
//     console.log("This is the best person ever");
// }

// Arrow funcation
// const harry = () => {
//         console.log("This is the best person ever");
// }
// harry();


// funcation returning something
// const greet = () => {
//        return "Good Morning";
// }

// one line do not require brace/return
// one line will automatically return
// const greet = () => "Good Morning";
// const greet = () => {return "Good Morning"};

// return object
// const greet = () => ({name:"parth"});
    
// console.log(greet());

// one argument pass
// single parameter do not need parameter but will have to put parenthesis if there are multiple parameter
// const greet = name => "Good Morning " + name;

// two argument pass in fucation
const greet = (name,ending) => "Good Morning " + name +  " " + ending;

console.log(greet("parth","bye"))
