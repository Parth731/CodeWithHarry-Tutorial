
console.log("tut 21 exercise 2");

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

let divele = document.createElement(`div`);
divele.setAttribute('id', 'divid');
divele.setAttribute('class', 'divid');
divele.innerHTML = `india is beautiful`;
let th = document.getElementById('div');
th.appendChild(divele);
console.log(th);

divele.addEventListener(`click`, function () {
    
    let len = document.getElementsByClassName(`int`).length;
    if (len == 0) {

        let html = divid.innerHTML;
        divele.innerHTML = `<input type="text" class="int" id="int" value="">${html}</input>`
        
    }
    console.log(th);
    // The main difference is that the onblur event does not bubble. Therefore, if you want to find out whether an element or its child loses focus, you could use the onfocusout event.
    let text = document.getElementById('int');
    text.addEventListener(`blur`,function(){
              divele.innerHTML  = text.value;
              console.log(divele.innerHTML);
              localStorage.setItem(`value`,divele.innerHTML);  
    })
    
    

})

// text.addEventListener('')













