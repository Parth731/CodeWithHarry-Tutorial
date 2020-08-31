
document.getElementById(`btnajax`).addEventListener(`click`,makerequest);

function makerequest(){

    console.log("button clicked");

    //1.  object create
    const xhr = new XMLHttpRequest();
    if(xhr.readyState === 0){
        console.log("Before Open",xhr.readyState);
        console.log("Open method not yet called 0");
    }
    
    //2. request sent to data.txt file
    // xhr.open("GET","data2.txt",true);
    xhr.open("GET","data.txt",true);
    if(xhr.readyState === 1){
        
        console.log("After Open",xhr.readyState)
        console.log("Open method called 1");
    }
    
    //4.  when reponse come, handled onreadystatechane
    xhr.onreadystatechange = () => {
        
        if(xhr.readyState === 2){
           console.log("ReadyState",xhr.readyState);
            console.log("Response Header 2");
        }
        if(xhr.readyState === 3){
            console.log("ReadyState",xhr.readyState);
            console.log("Loading... 3");
        }
        if(xhr.readyState === 4){
            console.log("ReadyState",xhr.readyState);
            console.log("Done 4");
        }
        

        if(xhr.readyState === 4 /*4*/){
            if(xhr.status === 200){

                console.log(xhr);
                console.log(xhr.responseText);


            }
            else{
                console.log("problem Occured");
            }
        }
    };

    //3. send request
    xhr.send();
    console.log("Send request",xhr.readyState)

    console.log("request send");



}