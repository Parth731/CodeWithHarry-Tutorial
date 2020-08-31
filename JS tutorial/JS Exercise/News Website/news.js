// ${} this is iteral

console.log("NEWS Website")
//API Key: 5fd7a66ebe6e4ef398c1cf629e087c9c

//initization variable
let source = 'bbc-news';
let apikey = '5fd7a66ebe6e4ef398c1cf629e087c9c';


// Grab the news container
let newsaccordion = document.getElementById(`newsAccordion`);


// create an Ajax get request
const xhr = new XMLHttpRequest();
// xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5fd7a66ebe6e4ef398c1cf629e087c9c`, true);
xhr.open('GET', `data.txt`, true);


xhr.responseType = "json";

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {

        console.log("status done");
        // let json = JSON.parse(this.responseText);
        // console.log(json)
        // console.log(xhr.response)
        let x = xhr.response;
        let articles = x["articles"];
        // console.log(articles)

        // console.log()


        let newshtml = "";
        articles.forEach(function(element,index){

            // console.log(element,index)

            let ns = `
                    <div class="card">
                    <div class="card-header" id="heading${index}">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="false" aria-controls="collapse${index}">
                                <b style="color:black;">Backing NEWS ${index+1}: </b>${element.title}
                            </button>
                        </h5>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion"/*parent id*/>
                        <div class="card-body">
                            ${element.content}<a href="${element.url}" target="_blank">Read More here</a>
                        </div>
                    </div> 
                </div>
            `
            newshtml += ns 
            
            newsaccordion.innerHTML  = newshtml; 

        });



       
           

        
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();






