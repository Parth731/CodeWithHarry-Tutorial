

console.log("This is CallBack function");


let companys = [

    {name:"parth", position:"python devloper"},
    {name:"prakash" ,position:"Automation devloper"}
]



function setempolyee(company,callback){

    setTimeout(() => {
        
        companys.push(company);
        console.log("data is pushed");

        // getempolyee();
        callback();

    }, 5000);

}


function getempolyee(){


    setTimeout(() => {
        
        let html = "";

        
        companys.forEach(function(element){

            console.log(element)

            html = `
                    <li>${element.name}</li>
                    <li>${element.position}</li>
            
            `

            document.getElementsByClassName(`company`).innerHTML = html
            console.log("fetch data successfully")

        })


    }, 2000);

}



let employee = {name:"ramukaka", position:"HOD"}
setempolyee(employee,getempolyee);
