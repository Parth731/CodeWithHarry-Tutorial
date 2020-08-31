
console.log(`library class`)

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {

    constructor(givenBookList){
        this.Booklist = givenBookList;
        this.Book = {};

    }

    getBookList(){

        this.Booklist.forEach(element => {
            console.log(element);
        });
        
    }

    issueBook(Bookname,user){

        if(this.Book[Bookname] == undefined){
            this.Book[Bookname] = user; 
        }
        else
        {
            console.log("user : " , this.Book[Bookname],
            "\n", " bookname : ", Bookname, " \nThis Book already issued");
        }

    }

    returnBook(Bookname){
        delete this.Book[Bookname];
    }

}


let myobj = new Library([`rich dad and poor dad`,`managment funda`,`Swami vivekand`])

myobj.getBookList();

myobj.issueBook("rich dad and poor dad","parth");
myobj.issueBook(`managment funda`,"praksh");
myobj.issueBook(`Swami vivekand`,"pranav");
myobj.issueBook(`Swami vivekand`,"pratik");

console.log(myobj);

myobj.returnBook(`rich dad and poor dad`);

// console.log(myobj); 
