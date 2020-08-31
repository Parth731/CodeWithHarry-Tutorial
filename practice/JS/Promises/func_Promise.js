

console.log("This is Call Back Promise");


let companys = [

    {name:"parth", position:"python devloper"},
    {name:"prakash" ,position:"Automation devloper"}
]



function setempolyee(company){

    return new Promise(function(resolve,reject){
        
        setTimeout(() => {
            
            companys.push(company);
            console.log("data is pushed");
    
            // getempolyee();
            // callback();

            let error = true;
            if(error){
                resolve();
            }
            else{
                reject();
            }


    
        }, 5000);
    })

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
            console.log("fetch data successfully");

        })


    }, 2000);

}



let employee = {name:"ramukaka", position:"HOD"}
setempolyee(employee).then( () => getempolyee()).catch( () => console.log("some error occure"));
