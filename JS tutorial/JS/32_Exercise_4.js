console.log("This is Tut 32 Exercise 4");

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class library{

    constructor(givenbooklist){
        this.booklist = givenbooklist;
        this.book = {};
    }

    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
        });
    }

    issuseBook(bookname,user){

        if(this.book[bookname]==undefined){
            this.book[bookname] = user;
        }
        else{
            console.log("user : " , this.book[bookname],
            "\n", " bookname : ", bookname, " \nThis Book already issued")
        }
    }

    returnBook(bookname){
        delete this.book[bookname];
    }
}

let obj = new library(["india legaest","friends","big bang"]);

obj.getBookList();

obj.issuseBook("india legaest","parth");
obj.issuseBook("friends","purn");
obj.issuseBook("big bang","pranav");

obj.issuseBook("india legaest","prakash");

console.log(obj.book);

obj.returnBook("friends");

console.log(obj.book);



