
console.log("this is tutorial 25 Exercise 2 Soluation");
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

let divele = document.createElement('div');
let text = document.createTextNode(`this is my element, click to edit it`);
divele.appendChild(text);
divele.setAttribute(`id`, `elem`);
divele.setAttribute('style', `border:2px solid black;width:154px; margin:34px; padding:23px;`);


let container = document.querySelector(`.this`);
let first = document.getElementById(`heading`);
container.insertBefore(divele, first);
console.log(divele, container, first);


divele.addEventListener(`click`, function () {

    let nooftextarea = document.getElementsByClassName('textarea').length;

    if (nooftextarea == 0) {
        let html = elem.innerHTML;
        divele.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="5">${html}</textarea>`;
    }

    let textarea = document.getElementById(`textarea`);
    textarea.addEventListener(`blur`,function(){
        elem.innerHTML = textarea.value;
        console.log(elem.innerHTML);
        localStorage.setItem("text",elem.innerHTML);
    })
    
});



