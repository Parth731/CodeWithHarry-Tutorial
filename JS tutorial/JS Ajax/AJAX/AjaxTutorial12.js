
console.log("tut 12");

document.getElementById(`btnajax`).addEventListener(`click`, makerequest);


let table = document.getElementById("table");


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

                // console.log(x[i].userId);
                // console.log(x[i].id);
                // console.log(x[i].title);
                // console.log(x[i].body);

               table.innerHTML += `
               
               <tr>
                    <td>${x[i].id}</td>           
                    <td>${x[i].title}</td>
                    <td>${x[i].body}</td>
                </tr>
               
               
               `



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

