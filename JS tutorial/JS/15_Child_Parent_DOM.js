
console.log("This is Tutorial 15 Child parent DOM")

// child, parent and Traversing the DOM

let cont = document.querySelector(`.no`);

// select parent node
cont = document.querySelector(`.container`);
console.log(cont);

// select childnode
// childnodes are comment length also inclue in total length
cont = document.querySelector(`.container`);
console.log(cont.childNodes);   //15

// children are not include comment and text length in total length only show element
cont = document.querySelector(`.container`);
console.log(cont.children); //6


let nodename = cont.childNodes[2].nodeName;
console.log(nodename)

let nodetype = cont.childNodes[2].nodeType;
console.log(nodetype)
/*

nodetype

1. Element
2. Attribute
3. text node
8. comment
10. doctype


*/

// child to child selecte
let container = document.querySelector(`div.container`);
console.log(container.children[1].children[0].children);//travrass

// childnode select
console.log(container.childNodes);
console.log(container.children);

// firstchild select
console.log(container.firstChild);
console.log(container.firstElementChild);

// lastchild select
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount); //count of child elements


// nextsibling selected
console.log(container.nextSibling);
console.log(container.nextElementSibling);
console.log(container.nextElementSibling.nextElementSibling);
console.log(container.nextElementSibling.nextElementSibling.nextElementSibling);

console.log(container.textContent);