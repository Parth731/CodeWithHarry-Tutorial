
console.log("tut7")

document.getElementById(`btnajax`).addEventListener(`click`, makerequest);
let name = document.getElementById("name-id1");
let roll = document.getElementById("roll-id1");


// without use json.parse
/* 
function makerequest() {
    console.log("Button clicked");//1

    // request object create
    const xhr = new XMLHttpRequest();

    //request create
    xhr.open("GET", "data.json", true);
   


    xhr.responseType = "json"; //responsetype converted to js
    xhr.onload = () => {

        if (xhr.status === 200) {
           
            // access json data
            console.log(xhr.response);
            console.log(xhr.response.name);
            console.log(xhr.response.roll);

            name.innerText = xhr.response.name;
            roll.innerText = xhr.response.roll;

            
        }
        else {
            console.log("problem occured");
        }

    };



    // request send
    xhr.send();
    console.log("request send");

    // webpage update without reloading
}

*/

function makerequest() {
    console.log("Button clicked");//1

    // request object create
    const xhr = new XMLHttpRequest();

    //request create
    xhr.open("GET", "data.json", true);
   


    xhr.onload = () => {

        if (xhr.status === 200) {
           
            // access json data
            console.log(xhr.response);
            
            let obj = JSON.parse(xhr.response);
            console.log(obj);

            for(let key in obj)
            console.log(obj[key]);

            console.log(obj.name);
            console.log(obj.roll);

            name.innerText = obj.name;
            roll.innerText = obj.roll;
         

            
        }
        else {
            console.log("problem occured");
        }

    };



    // request send
    xhr.send();
    console.log("request send");

    // webpage update without reloading
}
