
console.log(`welcome to notes app. This is apps.js`);
showNotes();


// if user adds a node, add it to the localstorage
let addbtn = document.getElementById(`addbtn`);
addbtn.addEventListener(`click`, function () {

    let addtxt = document.getElementById(`addtxt`);
    let addTitle = document.getElementById(`addTitle`);
    let notes = localStorage.getItem(`notes`);
    
    if (notes == null) {

        notesobj = [];
    }
    else {

        notesobj = JSON.parse(notes);//string to array(array of object)
    }

    let myobj = {

        title : addTitle.value,
        text: addtxt.value

    };

    notesobj.push(myobj);  //text store in array
    localStorage.setItem(`notes`, JSON.stringify(notesobj));//array to string
    addtxt.value = "";
    addTitle.value = "";
    // console.log(notesobj);

    showNotes();


})


// function to show elements from localstorage
function showNotes() {

    let notes = localStorage.getItem(`notes`);
    
    // console.log(title);

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    // console.log(typeof notesobj);
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
    
    let noteele = document.getElementById(`notes`);
    if(notesobj.length != 0){
        noteele.innerHTML = html
    }
    else{
        noteele.innerHTML = `Nothing to show! use "Add Note" section above to add notes.`;
    }

}


// function to delete node
function deleteNote(index){

    // console.log(`I am delete`, index);
    
    let notes = localStorage.getItem(`notes`);

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem(`notes`,JSON.stringify(notesobj));
    showNotes();
    
}

let search = document.getElementById(`searchText`);
search.addEventListener(`input`,function(){

    let inputval = search.value.toLowerCase();
  

    // console.log('input event fired!',inputval);
    let noteCard = document.getElementsByClassName(`noteCard`);
    Array.from(noteCard).forEach(function(elements){

        let cardText = elements.getElementsByClassName(`card-title`)[0].innerText;
        if(cardText.includes(inputval)){

            elements.style.display = "block";
            
        }
        else{
            elements.style.display = "none";
        }
        // console.log(cardText);
    })



})