console.log("This is tut 30 Prototype inheritance");

const proto = {
    slogan : function(){
        return "This company is the best";
    },
    changName : function(newName){
        this.name = newName;
    }
}


// This create harry object
const harry = Object.create(proto);
harry.name = "Parth";
harry.role = "Programer";
harry.changName("Parth Patel");
console.log(harry);


// This also create herry object
const harry1 = Object.create(proto,{
    name : {value:"Meet", writable:true},
    role : {value: "developer"},
})

harry1.changName("sagar");
console.log(harry1);

/////////////////////////////////


// Employee constructor
function Employee(name, salary, exprience){
    this.name = name;
    this.salary = salary;
    this.exprience = exprience;
}

// 
// add slogan
Employee.prototype.slogan = function(){
    return `This company is the best. Regrads ${this.name}`;
}

// create object from this contructor
let pro  = new Employee("Pratik", 350000, "1year");
console.log(pro.slogan());
console.log(harry.slogan());


// programer : inheritance
function programer(name, salary, exprience, language){
    Employee.call(this,name,salary,exprience);
    this.language = language;  
}

// inheritance of prototype
programer.prototype = Object.create(Employee.prototype);

// manually set the constructor
programer.prototype.constructor = programer;

let rohan = new programer("Pranav",2,0,"Python"); 
console.log(rohan.slogan());
console.log(rohan);

