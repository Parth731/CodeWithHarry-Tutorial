console.log("This is ES6 version of project 2");


class Book {
    constructor(no, name, author, type) {
        this.no = no;
        this.name = name;
        this.author = author;
        this.type = type;

    }
}

class Display {
    // add method
    add() {

        console.log("adding to UI");

        // console.log(bookarr);

        let tablebody = document.getElementById(`tablebody`)

        let uistring = "";
        // let myrow = tablebody.rows.length;

        let booklist = localStorage.getItem(`booklist`)
        if (booklist == null) {

            var bookarr = [];

        }
        else {

            bookarr = JSON.parse(booklist);
        }



        bookarr.forEach(function (element, index) {

            uistring += `  
            <tr class=${"books"}>
                <th scope="row">${index}</td>
                <td>${element.name}</td>
                <td>${element.author}</td>
                <td>${element.type}</td>
                <td><button onclick="DeleteBook(this.id)" id="${index}" class="btn btn-primary">Delete</button></td>
            </tr>
            `;
        });

        // console.log(uistring);

        if (bookarr.length != 0) {
            tablebody.innerHTML = uistring;
        }
        else {
            tablebody.innerHTML = `here add the notes`;
        }
    }

    // clear method
    clear() {

        let libraryform = document.getElementById(`libraryform`);
        libraryform.reset(); //form every fild reset

    }

    // validate method
    validate(book) {

        console.log("validate");
        if (book.name.length < 2 ||
            book.author.length < 2) {

            console.log("false");
            return false;

        }
        else {

            return true;
        }

    }

    // show book
    show(type, DisplayMessage) {


        let message = document.getElementById(`message`);
        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>Message</strong> ${DisplayMessage} 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>
        `;
        // setTimeout(() => {
        //     message.innerHTML = '';
        // }, 2000);

    }
}

let disobj = new Display();
disobj.add();

function DeleteBook(index) {

    // console.log("india");
    let booklist = localStorage.getItem(`booklist`)
    if (booklist == null) {

        bookarr = [];

    }
    else {

        bookarr = JSON.parse(booklist);
    }

    bookarr.splice(index,1);
    localStorage.setItem(`booklist`, JSON.stringify(bookarr));
    disobj.add();
}



let libraryform = document.getElementById(`libraryform`);
libraryform.addEventListener('submit', librabaryFormSubmit);

function librabaryFormSubmit(e) {

    //console.log(`you have submit library form`);
    let no = document.getElementById(`tablebody`);
    bookno = no.rows.length;

    console.log(bookno);


    let bookname = document.getElementById(`bookname`).value;
    let bookauthor = document.getElementById(`author`).value;

    let booktype;
    let fiction = document.getElementById(`fiction`);
    let programing = document.getElementById(`programing`);
    let cooking = document.getElementById(`cooking`);

    let booklist = localStorage.getItem(`booklist`);


    if (fiction.checked) {
        booktype = fiction.value;
    }
    else if (programing.checked) {
        booktype = programing.value;
    }
    else if (cooking.value) {
        booktype = cooking.value;
    }


    // book object
    let bookobj = new Book(bookno, bookname, bookauthor, booktype);
    console.log(bookobj);


    if (booklist == null) {
        bookarr = [];
    }
    else {
        bookarr = JSON.parse(booklist)
    }


    bookarr.push(bookobj);
    console.log(bookarr);

    // display object
    let display = new Display();


    if (display.validate(bookobj)) {
        localStorage.setItem(`booklist`, JSON.stringify(bookarr));
        display.add()//add book in the table
        display.clear();    //clear the form
        display.show('success', "Your book has been successful added");
    }
    else {

        display.show('danger', "Sorry you can not this book.");
    }

    e.preventDefault(); //page can not reload
}

let search = document.getElementById(`searchText`);
search.addEventListener(`input`,function(){
  
    inputvalue = search.value;
   
    let book = document.getElementsByClassName(`books`);
   
    
    Array.from(book).forEach(function(element){

        let searchBook = element.getElementsByTagName("td")[0].innerText;
        
        let searchauthor = element.getElementsByTagName("td")[1].innerText;

        if(searchBook.includes(inputvalue) || searchauthor.includes(inputvalue))
       {
           element.style.display = "table-row-group";
       }
       else{
        
            element.style.display = "none";
        
       }

        // console.log("hello");
       
    })
})
