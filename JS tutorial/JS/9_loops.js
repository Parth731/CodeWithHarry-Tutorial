console.log("we are tutorial 9 loops")

//general loop: for, while, do-while

// for(let i=0;i<100;i++)
// {
//     console.log(i);
// }


// let j=0;
// while(j<100)
// {
//     console.log(j);
//     j++;
// }


// let k = 0;

// do{
//     console.log(k);
//     k+=1;
// }while(k<10);

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//          break; 
//     }
//    console.log(i);
   
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//          continue; 
//     }
//    console.log(i);
   
// }

// let arr = [2,5,6,4,2,3];
// arr.forEach(function(element,array,index){
//     console.log(element, index, array);
// });

//console.log("done");


let obj= {
    name:"Rohan Das",
    age: 78,
    type:"dangerous programmer",
    os: "Ubuntu"
}

for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`)
}