
// introduction

// console.log($);
// console.log(jQuery);

// let JQuery;

// $("Button").click(function(){

//     console.log("Click the button");
// });

// true write code
// jQuery.noConflit();

// $(document).ready(function($){

//     $("Button").click(function(){

//         console.log("Click the button");
//     });
// })


////////////////////////////////////////////////////////////

// hide and show method list
// hide()
// show()
// toggle()

$(document).ready(function(){
    
    
    // With jQuery, you can hide and show HTML elements with the hide() and show() methods:
    /*
    $("#show").click(function(){
         
        // $("p").show(); //without effects
        $("p").show(1000);  
    })

    $("#hide").click(function(){
         
        $("p").hide(1000);
    })
    */


    // You can also toggle between hiding and showing an element with the toggle() method.
    $("#toggle").click(function(){
         
        $("p").toggle(1000);
    })


})