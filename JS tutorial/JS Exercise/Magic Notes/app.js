
console.log("hello");
ShowNotes();


let addbtn = document.getElementById(`addbtn`);
addbtn.addEventListener(`click`, function () {

    let addtitle = document.getElementById(`addTitle`);
    let addtext = document.getElementById(`addtxt`);
    let notes = localStorage.getItem(`notes`);

    if (notes == null) {
        notesobj = [];
    }
    else {

        // get text from localstorage to array(string to array)
        notesobj = JSON.parse(notes);
    }

    let myobj = {
        title: addtitle.value,
        text: addtext.value
    }
    notesobj.push(myobj);

    // set text from array to localstorage(array to string)
    localStorage.setItem(`notes`, JSON.stringify(notesobj));

    addtitle.value = "";
    addtext.value = "";

    // console.log(notesobj);
    ShowNotes();


})

function ShowNotes() {


    let notes = localStorage.getItem(`notes`);

    if (notes == null) {
        notesobj = [];
    }
    else {

        // get text from localstorage to array(string to array)
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {

        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `

    });

    let notesele = document.getElementById(`notes`);
    // console.log(notesobj);
    if(notesobj.length != 0){

        notesele.innerHTML = html;

    }
    else{
        notesele.innerHTML = `here, you can add notes`;
    }
}


function deleteNote(index){

    let notes = localStorage.getItem(`notes`);

    if (notes == null) {
        notesobj = [];
    }
    else {

        // get text from localstorage to array(string to array)
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem(`notes`, JSON.stringify(notesobj));
    ShowNotes();


}

let search  = document.getElementById(`searchText`);
search.addEventListener(`input`,function(){

    inputvalue = search.value.toLowerCase();

    let noteCard = document.getElementsByClassName(`noteCard`);
    Array.from(noteCard).forEach(function(element){

        // let cardtext = element.getElementsByTagName("p")[0].innerText;

        let cardtext = element.getElementsByClassName(`card-title`)[0].innerText;

        if(cardtext.includes(inputvalue)){
            
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

    })



})
