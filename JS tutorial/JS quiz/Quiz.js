console.log("This is a quiz tutorial");


document.getElementById(`meanings`).addEventListener(`click`, makeevent().then(function(){
    console.log('promise resolved');
}).catch(function(){
    console.log('promise rejected')
}))


let title = document.getElementById(`vtitle`);
let itable = document.getElementById(`itable`);


function makeevent() {

    return new Promise(function (resolve, reject) {

        setTimeout(() => {


            console.log("Button clicked");//1

            // request object create
            const xhr = new XMLHttpRequest();

            //request create
            xhr.open("GET", `data.txt`, true);

            xhr.responseType = "json";

            xhr.onload = () => {

                if (xhr.status === 200) {

                    console.log("response");
                    console.log(xhr.response);

                    x = xhr.response;

                    let jsontitle = x[`title`];
                    let vegetable = x[`vegetable`];
                    let fruits = x[`fruits`];
                    title.innerHTML = jsontitle;

                    // console.log(fruits);

                    itable.innerHTML += `
            
                    <tbody>
                        <td>${vegetable}</td>
                        <td>${fruits}</td>
                    </tbody>

            
                     ` ;

                    resolve();

                }
                else {
                    console.log("problem occured");
                    reject();
                }

            };



            // request send
            xhr.send();
            console.log("request send");



        }, 5000);


    })
}



// // let newVegable = {name:"sanny", subject: "ML"}
// makeevent().then(function(){
//     console.log('promise resolved');
// }).catch(function(){
//     console.log('promise rejected')
// })




