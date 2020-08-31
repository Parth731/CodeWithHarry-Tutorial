
console.log("tut 11");

document.getElementById(`btnajax`).addEventListener(`click`, makerequest);


let data = document.getElementById("data1");


function makerequest() {
    console.log("Button clicked");//1

    // request object create
    const xhr = new XMLHttpRequest();

    //request create
    xhr.open("GET", `https://jsonplaceholder.typicode.com/posts`, true);

    xhr.responseType = "json";

    xhr.onload = () => {

        if (xhr.status === 200) {

            console.log(xhr.response);

            x = xhr.response;

            for (i = 0; i < x.length; i++) {

                console.log(x[i].userId);
                console.log(x[i].id);
                console.log(x[i].title);
                console.log(x[i].body);

                data.innerHTML += "<h3>" + x[i].id + ". " + x[i].title + "</h3>" + `<p style="list-style-type: none;">` + x[i].body + "</p>";
                
                

            }


            // console.log(xhr.response.userId);
            // console.log(xhr.response.id);
            // console.log(xhr.response.title);
            // console.log(xhr.response.body);



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

