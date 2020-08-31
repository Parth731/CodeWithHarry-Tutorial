

console.log("welcome to the newsapp");
console.log("hello");

// api key - 8ee9901ff1d24245a324617fbbbda96e


let newsAccordion = document.getElementById(`newsAccordion`);


// create xhr object
const xhr = new XMLHttpRequest();


xhr.open("GET",`data.txt`,true);
// true -> ansycronus request*
// false -> syncrouns requset

xhr.responseType = "json";


xhr.onload = function(){

    if(xhr.status === 200){
        console.log(xhr.response);

        let articles = xhr.response["articles"];
        console.log(articles);


        let newshtml = "";
        articles.forEach((element,index) => {
            
            console.log(element.title,index);


            let html  = `

            <div class="card">
                <div class="card-header" id="heading${index}">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <b style="color:black;">Breacking News: ${index+1}</b> ${element.title}
                        </button>
                    </h5>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                    <div class="card-body">
                       ${element.content}<a href="${element.url}" target="_blank">Read More Here</a>
                    </div>
                </div>
            </div>
                `


            newshtml += html
                
            newsAccordion.innerHTML = newshtml;
                
        });
            

    }
    else{
        console.log("event occure!");
    }

}

xhr.send();



hrml = `

<div class="card">
<div class="card-header" id="headingOne">
  <h5 class="mb-0">
    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Collapsible Group Item #1
    </button>
  </h5>
</div>

<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
  <div class="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </div>
</div>
</div>


`