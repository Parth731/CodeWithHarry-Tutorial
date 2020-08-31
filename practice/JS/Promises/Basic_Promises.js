

console.log("Basic promises")

function func1(){

    return new Promise(function(resolve,reject){

        let err = true;
        if(!err){
            resolve();
        }
        else{
            reject();
        }
    })

}




func1().then(() => console.log("This is resolve call"))
        .catch(() => console.log("This is reject call"));
