console.log("This is a tutorial 34 Asynchronous Model");


// for (let index = 0; index < 4000; index++) {
//     const element = index;
//     console.log(element);

// }


setTimeout(() => {

    for (let index = 0; index < 4000; index++) {
        const element = index;
        console.log("This is idex number " + index);

    }

}, 200);

console.log("Process done");