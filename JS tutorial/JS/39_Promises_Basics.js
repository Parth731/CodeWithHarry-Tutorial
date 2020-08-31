
console.log("This is tutorial 39 Promise Basics");

// promise: Best video on promise
// -reslove
// -reject
// -pending

// promise is object

// func1 kasam khakar kaheta hai ki jabhi muje run karoge to ak function ko run karuga sab kuch sahi hua to aesa nai hua to reject kar duga
// func1 return one promise
function func1(){  

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            
            const error = true;
            if(!error){
               
                console.log("function: Your promise has been resolved");
                resolve();
            }
            else{

               
                console.log("function: Your promise has not been resolved");
                reject('sorry not fulfilled');
            }



        }, 3000);
    })
}

func1().then(function(){
    console.log("harry: Thanks for resolving");
}).catch(function(error) {
    console.log("harry: very bed bro. reason: " + error);
    
})