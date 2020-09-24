
console.log("events")

/*

events

-click()
-dblclick()
-mouseenter()
-mouseleave()
-mousedown()
-mouseup()
-hover()
-focus()
-blur()
-on()
*/



$(document).ready(function () {

    // click() : The click() method attaches an event handler function to an HTML element.    
    // $("p").click(function(){
    //     $(this).hide();
    // });

    // dblclick(): The dblclick() method attaches an event handler function to an HTML element.
    // $("p#p2").click(function(){
    //     $(this).hide();
    // });

    // mouseenter(): The mouseenter() method attaches an event handler function to an HTML element.
    // $("p#p2").mouseenter(function(){
    //     alert("You entered p2!")
    // });    

    // The mouseleave() method attaches an event handler function to an HTML element.
    // $("p#p2").mouseleave(function(){
    //     alert("Bye! You now leave p2!")
    // });  


    // The mousedown() method attaches an event handler function to an HTML element.
    // $("p#p2").mousedown(function(){
    //     alert("Mouse down over p2!")
    // });

    // The mouseup() method attaches an event handler function to an HTML element.
    // $("p#p2").mouseup(function () {
    //     alert("Mouse up over p2!")
    // });

    // The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.
    // $("#p2").hover(function(){
    //     alert("You entered p1!");
    //   },
    //   function(){
    //     alert("Bye! You now leave p1!");
    //   });


    // The focus() method attaches an event handler function to an HTML form field.
    // $("input").focus(function(){
    //     $(this).css("background-color", "yellow");

    // });

    // The blur() method attaches an event handler function to an HTML form field.
    // $("input").blur(function(){
    //     $(this).css("background-color", "green");

    // });

    // The on() method attaches one or more event handlers for the selected elements.
    $("p").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });



})