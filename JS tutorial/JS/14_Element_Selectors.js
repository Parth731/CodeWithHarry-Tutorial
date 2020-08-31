

console.log("This is Tutorial 14 Element Selector")


/*

element selector

1. single elements selector
2. multiple elements selector



*/

// 1. single elements selector
// let element = document.getElementById("first");
// console.log(element);
// console.log(element.className);
// console.log(element.childNodes);
// console.log(element.parentNode);
// element.style.color  = "red";
// console.log(element.style.color);
// element.innerText = "Parth is good boy";
// console.log(element.innerText)
// element.innerHTML = "<b>Parth is good boy</b>"
// console.log(element.innerHTML);

// class selector
// let sel  = document.querySelector(`#first`);
// console.log(sel);

// id selector
// sel  = document.querySelector(`.child`);
// console.log(sel);

// sel  = document.querySelector(`div`);
// console.log(sel);

// sel.style.color = "green";
// console.log(sel);


// 2.multiple element selectors

let elems = document.getElementsByClassName(`child`);
console.log(elems[0]);

elems = document.getElementsByClassName(`container`);
console.log(elems[0].getElementsByClassName(`child`))

elems = document.getElementsByTagName(`div`);

console.log(elems);

// Array.from(elems).forEach(function (element) {
//     console.log(element);
//     element.style.color = "blue";

// })

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = "blue";
}