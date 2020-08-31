
console.log("This is tutorial 37 Callback Function");

// pretend that this reponse is coding from the server
// student object
const students = [


    {name: "harry", subject : "Javascript"},
    {name: "parth", subject : "python"}


]


function enrollstudent(student,callback){

    // jo apa karate ho ve karate rahe me ye background me samabhal lunga 3000 second ke bad

    setTimeout(() => {
        
        students.push(student);//2  //take 8 sec
        console.log("student has been enrolled");//3
        
        // getstudent();//4

        callback();
    }, 8000); //1000

}

function getstudent(){

    setTimeout(() => {  //take 1 sec
        
        let str="";
        students.forEach(function(student){
            str += `<li>${student.name}</li> 
                    <li>${student.subject}</li>
            
                    `;
        });
        
        document.getElementById(`student`).innerHTML = str;//5
        console.log("student has been feadhed");//1,6


    }, 1000); //8000

}

let newStudent = {name:"sanny", subject: "ML"}
enrollstudent(newStudent,getstudent);
// getstudent()