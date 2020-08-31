
console.log(`This is a Library.js`)

/*
1. store all data in local storage
2. give delete every note
3. add scrollbar 

*/

// constructor
function Book(name, author, type) {

    this.name = name;
    this.author = author;
    this.type = type;

}

// Display constructor
function Display() {


}

// add method to display prototype
Display.prototype.add = function (book) {

    console.log("adding to UI");

    console.log(book);

    tablebody = document.getElementById(`tablebody`)



    let myrow = tablebody.rows.length;
    let uistring =
        `  
    <tr>
        <th scope="row" id="no">${myrow + 1}</th>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>
    `;
    console.log(uistring);


    tablebody.innerHTML += uistring;



}

// Impliment the clear function
Display.prototype.clear = function () {

    let libraryform = document.getElementById(`libraryform`);
    libraryform.reset(); //form every fild reset

}

// impliment the validate function
Display.prototype.validate = function (book) {

    if (book.name.length < 2 ||
        book.author.length < 2) {

        return false;

    }
    else {

        return true;
    }

}

Display.prototype.show = function (type,DisplayMessage) {

    let message = document.getElementById(`message`);
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message</strong> ${DisplayMessage} 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
    </div>
    `;
    setTimeout(() => {
        message.innerHTML = ''; 
    }, 2000);

}





// add sumbit event listener to libraryform
let libraryform = document.getElementById(`libraryform`);
libraryform.addEventListener('submit', librabaryFormSubmit);

function librabaryFormSubmit(e) {

    console.log(`you have submit library form`);
    let name = document.getElementById(`bookname`).value;
    let author = document.getElementById(`author`).value;

    let type;
    let fiction = document.getElementById(`fiction`);
    let programing = document.getElementById(`programing`);
    let cooking = document.getElementById(`cooking`);

    // let keyno = document.getElementById(`tablebody`);
    // console.log(keyno);

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programing.checked) {
        type = programing.value;
    }
    else if (cooking.value) {
        type = programing.value;
    }


    // book object
    let book = new Book(name, author, type);
    console.log(book);

    // display object
    let display = new Display();


    if (display.validate(book)) {
        display.add(book)//add book in the table
        display.clear();    //clear the form
        display.show("success","Your book has been successful added");
    }
    else {

        display.show("danger","Sorry you can not this book.");
    }

    e.preventDefault(); //page can not reload
}
