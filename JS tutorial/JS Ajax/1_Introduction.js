
console.log("AJAX Introduction");

let btn = document.getElementById(`objbtn`);
btn.addEventListener(`click`,ChangeContent);

function ChangeContent(){


    console.log("Ajax tutorial in one video")

    // instantion at xhr object
    let xhr = new XMLHttpRequest();
    
    // GET rquest
    xhr.open('GET','parth.txt',true);

    // what to do on progress (optional)
    xhr.onprogress = function(){
        console.log("on progress");
    }

    // what to do when reponse is ready
    xhr.onload = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            document.getElementById(`list`).innerHTML = `<li>${this.responseText}</li>`;
        }
        else{

            console.log("some error occure!!");
        }
    } 

    // Send request
    xhr.send();

}