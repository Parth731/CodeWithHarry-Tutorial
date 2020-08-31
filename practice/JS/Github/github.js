
console.log("user information");

let users = document.getElementById(`UserAccordion`);


let xhr = new XMLHttpRequest();

xhr.open('GET',`https://api.github.com/users`,true);

xhr.responseType = "json";

xhr.onload = function(){

    if(xhr.status === 200){

        console.log(xhr.response);

        let html = "";
        xhr.response.forEach((element,index) => {

            html  += `

            <div class="card">
                <div class="card-header" id="heading${index}">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        
                        <b>${element.login}</b>

                        </button>
                    </h5>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#UserAccordion">
                    <div class="card-body">
                       <li style="list-style-type: none;"><a href="${element.url}" target="_blank">Read More information</a></li>
                    </div>
                </div>
            </div>
                `

            users.innerHTML = html;

            
        });



    }
    else{
        console.log("some error occure");
    }
}

xhr.send();

