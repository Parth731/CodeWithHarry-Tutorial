
console.log("tut 11");

document.getElementById(`btnajax`).addEventListener(`click`, makerequest);


let data = document.getElementById("data2");


function makerequest() {
    console.log("Button clicked");//1

    // request object create
    const xhr = new XMLHttpRequest();

    //request create
    xhr.open("POST", "https://reqres.in/api/users", true);

    xhr.responseType = "json";

    xhr.onload = () => {

        if (xhr.status === 201) {

            console.log(xhr.response);

            document.getElementById(`info`).innerHTML = "Data inserted";
           
        }
        else {
            console.log("problem occured");
        }

    };



    // assume hamane font me se data ko liya hai
    mydata = `
    
    {
        "name": "morpheus",
        "job": "leader"
    }
    
    `
    xhr.send(mydata);
    console.log("request send");

    // webpage update without reloading
}

