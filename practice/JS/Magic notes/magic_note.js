
console.log("Magic Notes project");
showNote();

let addbtn = document.getElementById(`addbtn`);
console.log(addbtn);
addbtn.addEventListener(`click`, function () {

    let addtitle = document.getElementById(`addTitle`)
    let addtext = document.getElementById(`addtxt`);
    let notes = localStorage.getItem(`notes`);

    if (notes == null) {
        notesobj = [];
    }
    else {

        notesobj = JSON.parse(notes)//string to array

    }

    let myobj = {
        title: addtitle.value,
        text: addtext.value,
    };

    notesobj.push(myobj);   //value store in array

    // array convert to string and store local storage
    localStorage.setItem(`notes`, JSON.stringify(notesobj));
    addtitle.value = "";
    addtext.value = "";

    showNote();

})

function showNote() {

    let notes = localStorage.getItem(`notes`);

    if (notes == null) {
        notesobj = [];
    }
    else {

        notesobj = JSON.parse(notes)//string to array

    }

    let html = "";
    notesobj.forEach(function(element,index) {

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
    console.log(notesobj.length);
    if(notesobj.length != 0){   //if array length is not equal to zero
        notesele.innerHTML = html
    }
    else
    {
        notesele.innerHTML = `here add the notes`;
    }

}

function deleteNote(index){

    let notes = localStorage.getItem(`notes`);

    if (notes == null) {
        notesobj = [];
    }
    else {

        notesobj = JSON.parse(notes)//string to array

    }

    notesobj.splice(index,1);
    localStorage.setItem(`notes`,JSON.stringify(notesobj));
    showNote();

}


let search = document.getElementById(`searchText`);
search.addEventListener(`input`,function(){
  
            inputvalue = search.value;
   
    let noteCard = document.getElementsByClassName(`noteCard`);
    Array.from(noteCard).forEach(function(element){

        let cardtxt = element.getElementsByClassName(`card-text`)[0].innerText;
        let cardtitle = element.getElementsByClassName(`card-title`)[0].innerText;

        if(cardtxt.includes(inputvalue) || cardtitle.includes(inputvalue)){

            element.style.display = "block";

        } 
        else
        {
            element.style.display = "none";
        }
    })
})