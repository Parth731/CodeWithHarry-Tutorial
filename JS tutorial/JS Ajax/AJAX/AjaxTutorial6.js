
console.log("tut6")

document.getElementById(`btnajax`).addEventListener(`click`, makerequest);
let dt = document.getElementById("data");

function makerequest() {
    console.log("Button clicked");//1

    // request object create
    const xhr = new XMLHttpRequest();

    //request create
    xhr.open("GET", "data.txt", true);
   

    // reponse handle
    xhr.onload = () => {

        if (xhr.status === 200) {
           
            // console.log(xhr.responseText);
            dt.innerText = xhr.responseText;

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
