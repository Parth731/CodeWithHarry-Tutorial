
console.log("sliders");

/*
slide Method

-slidedown()
-slideup()
-slideToggle()

*/


$(document).ready(function () {

    // The jQuery slideDown() method is used to slide down an element.
    // $("#flip").click(function () {
    //     $("#panel").slideDown("slow");
    // });

    // The jQuery slideUp() method is used to slide up an element.
    // $("#flip").click(function(){
    //     $("#panel").slideUp("slow");
    //   });

    // The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
    // If the elements have been slid down, slideToggle() will slide them up.
    // If the elements have been slid up, slideToggle() will slide them down.
    $("#flip").click(function(){
        $("#panel").slideToggle("slow")
    });

});



