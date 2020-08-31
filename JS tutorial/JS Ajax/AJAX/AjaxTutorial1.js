
document.getElementById(`btnajax`).addEventListener(`click`,makerequest);

function makerequest(){

    console.log("button clicked");

    //1.  object create
    const xhr = new XMLHttpRequest();
    
    //2. open object
    xhr.open("GET","data.txt",true);
    
    //4.  what to do when reponse is ready
    xhr.onreadystatechange = function(){
        
        if(xhr.readyState === XMLHttpRequest.DONE /*4*/){
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

    console.log("request send");

}