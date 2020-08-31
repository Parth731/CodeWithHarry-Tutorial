
console.log("This is a tutorial 43");

// function parth(){
//     console.log("inside the parth funcation")
//     return "parth";
// }


// async return promise
async function parth(){
    console.log("inside the parth funcation");//2
    const response = await fetch(`https://api.github.com/users`);
    console.log("before response");//6
    const users = await response.json();
    console.log("users resolved");//7
    
    // here async return promise
    return users;
    

    // return "parth";
}

console.log("Before calling parth");//1
let variable = parth();
console.log("after calling parth");//3
console.log(variable);//4
variable.then(data => console.log(data));//8
console.log("last line of this js file");//5
