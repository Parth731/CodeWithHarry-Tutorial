console.log("this is a librabry project")

class Book {

    // create book constructor
    constructor(Bookno,Bookname, Bookauthor, Booktype) {
        this.Bookno = Bookno
        this.Bookname = Bookname;
        this.Bookauthor = Bookauthor;
        this.Booktype = Booktype;
    }

}

class Display {

    add() {

        let tablebody = document.getElementById(`tablebody`)
        let booklist = localStorage.getItem(`booklist`);

        if (booklist == null) {
    
            bookarr = [];
        }
        else {
            var bookarr = JSON.parse(booklist); //string to array
        }

        let uistring = "";
        bookarr.forEach(function(element,index) {

            uistring += `
            
        <tr class=${"books"}>
            <th scope="row" id="no" value="0">${index}</th>
            <td>${element.Bookname}</td>
            <td>${element.Bookauthor}</td>
            <td>${element.Booktype}</td>
            <td><button type="submit" onclick="DeleteBook(this.id)"class="btn btn-primary" id="${index}">Delete</button></td>
        </tr> 
            
            
            `
            
        });

        if(bookarr.length != 0){

            tablebody.innerHTML = uistring;
        }
        else{

            tablebody.innerHTML = "add books";
        }

        

    }

    validation(book) {

        console.log(book.name);
        if (book.Bookname.length < 2 || book.Bookauthor.length < 2) {
            return false;
        }
        else {

            return true;
        }


    }

    show(msgtype, bmessage) {

        let message = document.getElementById(`message`); 
        message.innerHTML = ` 
      <div class="alert alert-${msgtype} alert-dismissible fade show" role="alert">
            <strong>Message</strong> ${bmessage}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
             <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `
        setTimeout(() => {
            message.innerHTML = '';
        }, 3000);

    }

    clear() {

        let libraryform = document.getElementById(`libraryform`);
        libraryform.reset();

    }

}

let dis = new Display();
dis.add();
function DeleteBook(index){

    
    
    let booklist = localStorage.getItem(`booklist`);
    
    if (booklist == null) {
    
        bookarr = [];
        }
        else {
            bookarr = JSON.parse(booklist); //string to array
        }
        
    bookarr.splice(index,1);
    localStorage.setItem(`booklist`, JSON.stringify(bookarr));
    dis.add();
        // console.log("delete");
        
}
let addbtn = document.getElementById(`addbook`);
addbtn.addEventListener(`click`, librabryfromsubmit);

function librabryfromsubmit(e) {

    let tablebody = document.getElementById(`tablebody`);
    let bookno = tablebody.rows.length;
    console.log(bookno);

    let bookname = document.getElementById(`bookname`).value;
    let author = document.getElementById(`author`).value;

    let Booktype;
    let fiction = document.getElementById(`fiction`);
    let programing = document.getElementById(`programing`);
    let cooking = document.getElementById(`cooking`);

    if (fiction.checked) {
        Booktype = fiction.value;
    }
    else if (programing.checked) {
        Booktype = programing.value;
    }
    else {
        Booktype = cooking.value;
    }

    // book object create 
    let Bookobj = new Book(bookno,bookname, author, Booktype);
    console.log(Bookobj);

    let booklist = localStorage.getItem(`booklist`);

    if (booklist == null) {

        bookarr = [];
    }
    else {
        bookarr = JSON.parse(booklist); //string to array
    }

    bookarr.push(Bookobj);


    let display = new Display();

    if (display.validation(Bookobj)) {
        localStorage.setItem(`booklist`, JSON.stringify(bookarr));
        display.add();
        display.clear();
        display.show('success','Your book has been successful added');
    }
    else{

        display.show('danger','soory you can not add this book');
    }




    e.preventDefault();

}

let search = document.getElementById(`searchText`);
search.addEventListener(`input`,function(){

     inputvalue = search.value;

     let sbook = document.getElementsByClassName(`books`);
     Array.from(sbook).forEach(function(element){

        // let bookno = element.getElementsByTagName("th")[0].innerText;
        let bookname = element.getElementsByTagName("td")[1].innerText;
        let Bookauthor = element.getElementsByTagName("td")[2].innerText;

        if( bookname.includes(inputvalue) || Bookauthor.includes(inputvalue)){

            element.style.display = "table-row-group";

        }
        else{

            element.style.display = "none";
            console.log("none");
        }

     });
})
