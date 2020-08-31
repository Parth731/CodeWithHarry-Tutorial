
console.log("tut9");


document.getElementById(`btnajax`).addEventListener(`click`, makerequest);
let data = document.getElementById("data1");

// without use json.parse

function makerequest() {
    console.log("Button clicked");//1

    // request object create
    const xhr = new XMLHttpRequest();

    //request create
    xhr.open("GET", "data.xml", true);

    xhr.responseType = "document";

    xhr.onload = () => {

        if (xhr.status === 200) {

            x = xhr.response.getElementsByTagName("student");

            for (i = 0; i < x.length; i++) {
                data.innerHTML += "<li>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</li>" + 
                "<li>" + x[i].getElementsByTagName("roll")[0].childNodes[0].nodeValue + "</li>" + "<br>";
            }


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



