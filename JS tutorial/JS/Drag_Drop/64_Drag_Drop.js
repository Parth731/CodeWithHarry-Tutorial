/*
dragstart
dragenter
dragover
gragleave
drop
dragend

*/


// console.log('This is drag-drop utility')

// const imgBox = document.querySelector('.imgBox');
// const whiteBoxes = document.getElementsByClassName('whiteBox');

// // event listeners for draggable element imgBox
// imgBox.addEventListener("dragstart", (e) => {

//     console.log('DragStart has been triggered')


//     e.target.className += ' hold'
//     setTimeout(() => {
//         e.target.className = "hide"
//     }, 0);


// });




// imgBox.addEventListener('dragend', (e) => {

//     console.log('DragEnd has been triggered')
//     e.target.className = 'imgBox'

// });

// for (whiteBox of whiteBoxes) {
//     whiteBox.addEventListener('dragover', (e) => {

//         e.preventDefault();
//         console.log('Dragover has been triggered')

//     })


//     whiteBox.addEventListener('dragenter', (e) => {

//         console.log('Dragenter has been triggered')
//         e.target.className += ' dashed'


//     })


//     whiteBox.addEventListener('dragleave', (e) => {

//         console.log('Dragleave has been triggered')
//         e.target.className = 'whiteBox'

//     })


//     whiteBox.addEventListener('drop', (e) => {

//         console.log('drop has been triggered')
//         e.target.append(imgBox);



//     })
// }


///////////////////////////////////////////////////////


console.log("This is drag-drop tutorial 64");

// whiteBox ke andar imageBox class aati hai isliye querrySelector aata hai
const imgBox = document.querySelector('.imgBox');
const whiteBox = document.getElementsByClassName('whiteBox');


imgBox.addEventListener('dragstart',(e) => {

    console.log('dragstart has been triggered')

    e.target.className += ' hold'

    setTimeout(() => {
        
        e.target.className = ' hide'
    }, 0);

    

})

imgBox.addEventListener('dragend',(e) => {

    console.log('dragend has been triggered')
    e.target.className = 'imgBox'
    

})


for(whiteBoxes of whiteBox){

    whiteBoxes.addEventListener('dragover',(e)=>{

        // e.preventDefault();
        e.preventDefault();
        console.log('dragover has been triggered');



    })


    whiteBoxes.addEventListener('dragenter',(e)=>{
        
        console.log('dragenter has been triggered');
        e.target.className += ' dashed'

    })


    whiteBoxes.addEventListener('dragleave',(e)=>{
    
        console.log('dragleave has been triggered');
        e.target.className = ' whiteBox'
        
    })


    whiteBoxes.addEventListener('drop',(e)=>{
        
        console.log('drop has been triggered');
        e.target.append(imgBox)
    })


}