
console.log("Animation");

/*

Animation method

animate()

syntax:
$(selector).animate({params},speed,callback);


*/

$(document).ready(function () {

    // The jQuery animate() method is used to create custom animations.
    // $("#animation").click(function () {
    //     $("div").animate({ left: "250px" });
    // });

    // animate() - Manipulate Multiple Properties
    // $("#animation").click(function () {
    //     $("div").animate({
    //         left: '250px',
    //         opacity: '0.5',
    //         height: '150px',
    //         width: '150px'
    //     });
    // });


    // animate() - Using Relative Values
    // $("button").click(function () {
    //     $("div").animate({
    //         left: '250px',
    //         height: '+=150px',
    //         width: '+=150px'
    //     });
    // });

    // animate() - Using Pre-defined Values
    // You can even specify a property's animation value as "show", "hide", or "toggle":
    // $("button").click(function () {
    //     $("div").animate({
    //         height: 'toggle'
    //     });
    // });


    // animate() - Uses Queue Functionality
    $("button").click(function () {
        var div = $("div");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
    });

    $("button").click(function(){
        var div = $("div");
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
      }); 

});