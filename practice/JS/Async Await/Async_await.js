

console.log("This is a async and await");

async function func1(){
    console.log("inside the func1");

    const response = await fetch(`https://api.github.com/users`);
    const users = await response.json();
    return users;

}





let variable = func1()
console.log(variable);
variable.then(data => console.log(data));