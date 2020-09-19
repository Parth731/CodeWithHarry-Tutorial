// Parsing JSON
// ex: '{ "name":"John", "age":30, "city":"New York"}'
// var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');


// JSON.parse() -> convert string to array(get value from localstorage)

let xhr = new XMLHttpRequest();

// json from the server
xhr.open("GET","json_demo.txt",true);   

// array as json
// xhr.open("GET","json_demo_array.txt",true);   

xhr.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        let obj = JSON.parse(this.responseText);

        // exercise 1:
        // console.log(obj.pets)



        let html = "";


        obj.pets.forEach(element => {
            // console.log(element)
            
            html += `
                <li>Name: ${obj.name}</li>
                <li>Age: ${obj.age}</li>
                <li>Age: ${element.animal}</li>
                <li>Age: ${element.name}</li>
                <br>


            `

        });






        document.getElementById("demo").innerHTML = html;


        // exercise2:
        // console.log(obj.length)

        // if(obj.length != 0){

        //     // console.log(x);
        //     document.getElementById("demo").innerHTML = obj;

        // }
    }
}

xhr.send();



// parsing Date
// json -> string to array
let text = `{
        "name":"John", 
        "birth":"1986-12-14", 
        "city":"NewYork"
}`;

obj = JSON.parse(text);

// obj = JSON.parse(text,function(key, value){

//     if(key == "birth"){
//         return new Date(value);
//     }
//     else{
//         return value;
//     }
// }); //Sun Dec 14 1986 05:30:00 GMT+0530 (India Standard Time)


// console.log(obj);
// console.log(obj.birth);

document.getElementById("demo1").innerHTML = obj.name + ", " + obj.birth + ", " + obj.city;




