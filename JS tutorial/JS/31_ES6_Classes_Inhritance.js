console.log("This is tut 31 FS6 Class in heritance");

// class is template
// when object is create,automatically call to constructor.
class Employee {
    constructor(givenname, givenexprience, givendivision) {

        this.name = givenname;
        this.exprience = givenexprience;
        this.division = givendivision;
    }

    // add in prototype
    slogan() {
        return `I am ${this.name} and this company is the best`;
    }

    // add in prototype
    joiningYear() {
        return 2020 - this.exprience;
    }

    //this can not used in static method
    static add(a, b) {
        return a + b;
    }
}


class Programer extends Employee {

    constructor(givenname, givenexprience, givendivision, language, github) {

        super(givenname, givenexprience, givendivision);
        this.language = language;
        this.github = github;
    }

    // add in prototype 
    favoriteLanguage() {
        if (this.language == "python") {
            return "python";
        } else {
            return "Javascript";
        }
    }

    static multiply(a, b) {
        return a * b;
    }

}

// class 

let parth = new Employee("parth", 4, "Division");
console.log(parth);
console.log(parth.slogan());
console.log(parth.joiningYear());

// you can directly use static method
console.log(Employee.add(30, 40.5));

//inhritance
let rohan = new Programer("Rohan", 3, "Lays", "python", "Rohan420");
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programer.multiply(6, 7));
console.log(Programer.add(10, 20));