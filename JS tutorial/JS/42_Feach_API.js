console.log("This is a Tutorial 42")

// Button with id mybtn
let mybtn = document.getElementById(`mybtn`);

// div with id content
let content = document.getElementById("content");



function getData() {
    console.log("started getData")

    url = "https://api.github.com/users";
    // this thing run in background
    fetch(url).then((response) => {
        console.log("inside first then")
        return response.json();
        // return response.text(); //get data in plane txt
    }).then((data) => {
        console.log("inside second then")
        console.log(data);
    })

}

// console.log("Before Running getData")
getData();
// console.log("after Running getData")

function PostData() {
    // console.log("started getData")

    url = "https://jsonplaceholder.typicode.com/posts/1/comments ";
    data = '{"name":"parth31","salary":"123","age":"23"}';
    params = {

        method: 'post',
        header: {
            'content-type': 'application/json'
        },
        //jab data object hai to json stringify use karo
        //  jab data string hai to Json stringify mat use karo
        body: data
    }

    // this thing run in background
    // fetch(url,params).then(function(response){
    // response.json() also return promise 
    //     return response.json();
    // }).then(function(data){
    //         console.log(data);
    // });
    fetch(url, params).then(response => response.json()).then(data => console.log(data))

}

PostData();