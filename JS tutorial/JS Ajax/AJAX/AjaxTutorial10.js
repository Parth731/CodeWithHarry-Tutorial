
console.log("tut 10");


document.getElementById(`btnajax`).addEventListener(`click`, makerequest);

let title = document.getElementById("title");
let body = document.getElementById("body");



function makerequest() {
    console.log("Button clicked");//1

    // request object create
    const xhr = new XMLHttpRequest();

    //request create
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    xhr.responseType = "json";

    xhr.onload = () => {

        if (xhr.status === 200) {


            console.log(xhr.response);
            console.log(xhr.response.userId);
            console.log(xhr.response.id);
            console.log(xhr.response.title);
            console.log(xhr.response.body);

            title.innerText = xhr.response.title;
            body.innerText = xhr.response.body;

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
