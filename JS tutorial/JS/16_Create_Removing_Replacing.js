

console.log("This is Tutorial 16 Create removing Replacing DOM")


///////////////// creating Element//////////////////////

let element = document.createElement(`li`);
console.log(element);

// add text 
let text = document.createTextNode(`india is a beautiful`);
element.appendChild(text);


// add a class name to the li element
element.className = `childul`;


// add a id name to the li element
element.id = `childli`;

// add the Attribute
element.setAttribute(`title`, `mytitle`);


// add the text other way
element.innerHTML = "<b>This is a text</b>";
// element.innerText = "<b>This is a text</b>";



let ul = document.querySelector(`ul.this`);
ul.appendChild(element);

console.log(ul);
console.log(element);



/////////////////////replacing element//////////////////////

let ele2 = document.createElement(`h3`);
ele2.id = `elem2`;
ele2.className = `elem2`;
ele2.title = 'mytitle';

let tnode = document.createTextNode(`this is a create node for elem2`);
ele2.appendChild(tnode);

// replacing text
element.replaceWith(ele2)

// replacing child element
let myul = document.getElementById(`myul`); //
let ful = document.getElementById(`ful`);   //text: this
myul.replaceChild(element,ful);// this replace the india is...



//////////////////////remove element/////////////////////
myul.removeChild(document.getElementById(`lul`));



// //////////////////////////
let pr = ele2.getAttribute('id');
console.log(pr);

pr = ele2.getAttribute(`class`);
console.log(pr);

pr = ele2.getAttribute(`title`);
console.log(pr);

pr = ele2.hasAttribute(`id`);
console.log(pr);

pr = ele2.hasAttribute(`href`);
console.log(ele2,pr);

pr = ele2.removeAttribute(`id`);
console.log(ele2,pr);


/////////////////// creating element before////////////

let para = document.createElement(`li`);
let node = document.createTextNode(`parth is good boy`);
para.appendChild(node);

let get = document.getElementById('myul');
let child = document.getElementById('childli');
get.insertBefore(para,child);


