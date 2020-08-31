
console.log("This is tutorial 39B Promise Basic");


// pretend that this reponse is coding from the server
// student object
const students = [


    {name: "harry", subject : "Javascript"},
    {name: "parth", subject : "python"}


]


function enrollstudent(student){

    // jo apa karate ho ve karate rahe me ye background me samabhal lunga 3000 second ke tak

    // resolve => then()
    // reject => catch()
    return new Promise(function(resolve,reject){
        
        setTimeout(() => {
            
            students.push(student);//2  //take 8 sec
            console.log("student has been enrolled");//3
            
            const error = false;
            if(!error){
                
                resolve();
            }
            else
            {
                reject();
            }


        }, 1000); //1000
    })



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


    }, 5000); //8000

}

let newStudent = {name:"sanny", subject: "ML"}
enrollstudent(newStudent).then(function(){
    getstudent();
}).catch(function(){
    console.log("some error occured!");
})


// function inside then is run as - resolve()
// function inside catch is run as - reject()