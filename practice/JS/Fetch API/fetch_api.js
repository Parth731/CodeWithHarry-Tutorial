

let getbtn = document.getElementById(`getbtn`);
let postbtn = document.getElementById(`postbtn`);


getbtn.addEventListener(`click`,getData);

postbtn.addEventListener(`click`,Postdata);


function getData(){

    url = `https://api.github.com/users`;

    fetch(url).then((response)=> {return response.json()})
        .then((data) => console.log(data));

}


getData();


function Postdata(){

    url = `https://jsonplaceholder.typicode.com/posts/1/comments`;
    data = '{"name":"parth31","salary":"123","age":"23"}';
    params = {
        method : 'POST',
        header : {
            'content-type' : 'application/json'
        },
        body : data
    }


    fetch(url,params).then( (response) => {return response.json()})
    .then( (data) => console.log(data));
}



Postdata();