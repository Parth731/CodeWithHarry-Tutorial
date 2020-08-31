
console.log("tut4")

document.getElementById(`btnajax`).addEventListener(`click`,makerequest);

function makerequest(){
    console.log("Button clicked");//1

    const xhr = new XMLHttpRequest();
    xhr.open("GET","data.txt",true);

    xhr.timeout = 2000;

    xhr.onload = () => {
       
        if(xhr.status === 200){
            console.log(xhr);       //6
            console.log(xhr.responseText);//7
        }
        else{
            console.log("problem occured");
        }

    }
    

    xhr.onprogress = (e) =>{

        console.log(e.loaded);//4
        console.log(e.total);//5
    }

    xhr.onerror = () =>{
        
        console.log("Network note Available");
    
    }

    xhr.onloadstart = () =>{
        
        console.log("Teansaction has started...");//2
    
    }

    xhr.onloadend = () =>{
        
        console.log("Transaction End."); //8
    
    }

    xhr.onabort = () =>{
        
        console.log("Abort");
    
    }

    xhr.ontimeout = () =>{
        
        console.log("timeout");
    
    }

    xhr.send();
    console.log("request send");//3
}
