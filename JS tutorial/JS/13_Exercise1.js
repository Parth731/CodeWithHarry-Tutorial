// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// codewithharry.com 
// javascript

console.log("This is Exercise 1")

a = document.links;
let str = "javascript";
let href;
Array.from(a).forEach(function(element){
   
    href = element.href;

    if(href.includes(str)){
        console.log(href);
    }
    else
    {
        console.log(false);
    }
});

