
console.log("this is tut 36");

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)


console.log("This is Tutorial 36 Exercise 4 Soluation")

class Libraby{
    constructor(booklist){
        this.booklist = booklist;
        this.issueBooks = {};
        // this.issueBook = [];
    }

    getBooklist(){
       this.booklist.forEach(element => {
          console.log(element);
       });
    }

    issueBook(bookname,user){

        
        if(this.issueBooks[bookname] == undefined){
            this.issueBooks[bookname] = user;
        }
        else{
            console.log(`this book is already issued!`, this.issueBooks[bookname]);
        }
        
        // this.issueBook.push(bookname,user);
        // this.user = user;
    }

    returnBook(bookname){
        delete this.issueBooks[bookname];
    }
}

let lobj = new Libraby(["rich dad poor dad","krushnyan","vahali dikari"]);

// access the book
lobj.getBooklist();

//issuebook with user
lobj.issueBook("rich dad poor dad","harry");
lobj.issueBook("krushnyan","parth");
lobj.issueBook("vahali dikari","Pranav");

// already give the book
lobj.issueBook("rich dad poor dad","prakash");
lobj.issueBook("vahali dikari","parth");

// check the issuebook object
console.log(lobj.issueBooks);//property

// deleting book
lobj.returnBook("krushnyan");

// check the issuebook object
console.log(lobj.issueBooks);


