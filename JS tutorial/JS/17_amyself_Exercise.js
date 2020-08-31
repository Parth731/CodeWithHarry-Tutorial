

console.log("This is Tutorial 17 MySelf Exercise")

// create element
let element = document.createElement(`a`);
console.log(element);
element.className = 'clink';
element.id = 'ia';
element.setAttribute('href','https://www.codewithharry.com/');
element.innerHTML = "go to codewithharry";
let div = document.querySelector('div.this');
div.appendChild(element);


console.log(div);

// replacing element
let id = document.createElement('a');
id.href = "https://www.dell.com/"
id.setAttribute("id","dell");
id.setAttribute('target','_blank');
id.innerHTML="go to dell.com";

console.log(id);

// element.replaceWith(id);
// div.replaceChild(id,element);

let parent = document.getElementById("div");
let child = document.getElementById('ia');
parent.replaceChild(id,child);

// remove 
// div.removeChild(document.getElementById('dell'));


let get = id.getAttribute('id');
console.log(id,get);

get = id.hasAttribute('id');
console.log(id,get)


/////////////////// creating element before////////////

let para = document.createElement(`p`);
let node = document.createTextNode(`parth is good boy`);
para.appendChild(node);

get = document.getElementById('div');
 child = document.getElementById('dell');
get.insertBefore(para,child);


