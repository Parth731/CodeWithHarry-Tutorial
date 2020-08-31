
console.log("tut8");


document.getElementById(`btnajax`).addEventListener(`click`, makerequest);
let name1 = document.getElementById("name-id1");
let roll1 = document.getElementById("roll-id1");

let name2 = document.getElementById("name-id2");
let roll2 = document.getElementById("roll-id2");

function makerequest() {
    console.log("Button clicked");//1

    // request object create
    const xhr = new XMLHttpRequest();

    //request create
    xhr.open("GET", "data.xml", true);

    xhr.responseType = "document";

    xhr.onload = () => {


        if (xhr.status === 200) {

            // access json data
            console.log(xhr.response);

            // target student tag
            console.log(xhr.response.getElementsByTagName("student"));

            // student inner name tag
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0]);

            // student tag -> name tag -> name("tapasee")
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0]);

            // // student tag -> name tag -> name("tapasee") -> name(tapasee)
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);


            // data show in webpage
            name1.innerText = xhr.response.getElementsByTagName("student")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;

            ////////////////////roll
            // student inner roll tag
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0]);

            // student tag -> name tag -> roll("101")
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0]);

            // // student tag -> name tag -> roll("101") -> roll(101)
            console.log(xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0].nodeValue);


            // 
            roll1.innerText = xhr.response.getElementsByTagName("student")[0].getElementsByTagName("roll")[0].childNodes[0].nodeValue;








            console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("name")[0].childNodes[0].nodeValue);

            name2.innerText = xhr.response.getElementsByTagName("student")[1].getElementsByTagName("name")[0].childNodes[0].nodeValue;

            console.log(xhr.response.getElementsByTagName("student")[1].getElementsByTagName("roll")[0].childNodes[0].nodeValue);

            roll2.innerText = xhr.response.getElementsByTagName("student")[1].getElementsByTagName("roll")[0].childNodes[0].nodeValue;



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



