// console.log("Ajax Tutorial in one video");


// let feachbtn = document.getElementById(`feachbtn`);


// feachbtn.addEventListener(`click`, buttonclickhandler);

// function buttonclickhandler() {

//     console.log('You have clicked the fetchBtn');

//     // instaotiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // open the object
//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

//     // use for post request
//     xhr.open('POST', `http://dummy.restapiexample.com/api/v1/create`, true);
//     // xhr.getAllResponseHeaders('Content-type','application/x-www-from-urlencoded');
//     xhr.getResponseHeader('Content-type','application/json');


//     // what to do on progress (optional)
//     xhr.onprogress = function () {
//         console.log(`on progress`);
//     }


//     /*
    
//     The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

//         Value	State	Description
//     0	UNSENT	Client has been created. open() not called yet.
//     1	OPENED	open() has been called.
//     2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
//     3	LOADING	Downloading; responseText holds partial data.
//     4	DONE	The operation is complete.
    
    
//     */

//     // xhr.onreadystatechange = function () {
//     //     console.log("Ready state is ", xhr.readyState);
//     // }



//     // what to do when response is ready
//     xhr.onload = function () {

//         if (this.status == 200) {
//             console.log(this.responseText)
//         }
//         else {
//             console.error("some error occured");
//         }
//     }


//     params = `{"name":"india is good","salary":"123","age":"23"}`;
//     xhr.send(params);

//     // send the rquest
//     // xhr.send(params);

//     console.log("we are done");

// }

// // http://dummy.restapiexample.com/api/v1/employees


// let popubtn = document.getElementById(`popubtn`);
// popubtn.addEventListener(`click`, pophandler);

// function pophandler(){

//     console.log('You have clicked the pophandler');

//     // instaotiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // open the object
//     xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


//     // what to do when response is ready
//     xhr.onload = function () {

//         if (this.status == 200) {   //200 is https is status code
//             let obj = JSON.parse(this.responseText);
//             console.log(obj)

//             let list = document.getElementById('list'); 
//             str = "";
//             for (key in obj){
//                 console.log("hello");
//                 str += `<li>${obj[key].employee_name} </li>`
//             }
//             list.innerHTML = str;
//         }
//         else {
//             console.error("some error occured");
//         }
//     }

//     xhr.send();

   

//     console.log("we are done feaching employee!");

// }



console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('feachbtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popubtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += obj[key].employee_age
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

