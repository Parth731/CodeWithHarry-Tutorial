
console.log("This is Tutorial 20 Local & session storage");

// add key value pair inside local storage
localStorage.setItem("name1","parth");
localStorage.setItem("name2","harry");

// receive an item from the local storage
let name = localStorage.getItem('name');
console.log(name);
let name2 = localStorage.getItem('name2');
console.log(name2);
let name3 = localStorage.getItem('hdkdks');
console.log(name3);

// clear the entire local storage
// localStorage.clear();

// clear the perticular value
localStorage.removeItem('name');


// localstorage as string (not array)
//array can not store local storage directly but used indirectly
// array add the local storage
let impArray = ['adrak','pyaj','bhindi'];
// localStorage.setItem('sbaji',impArray);
// array store as string in localstorage but use JSON.stringify() convert from array to string
localStorage.setItem('sabaji',JSON.stringify(impArray));
// JSON.parse() convert from string to array 
let sabaji = JSON.parse(localStorage.getItem('sabaji'));
console.log(sabaji);
console.log(typeof sabaji);



// session storage
// sessionStorage.setItem("name1","parth");
// sessionStorage.setItem("name2","harry");

// clear session storage
sessionStorage.clear();


// different between local and session storage
// local storage is permently store in memory
// session storage is tempary store in memory when browser closed, session storage clear 



