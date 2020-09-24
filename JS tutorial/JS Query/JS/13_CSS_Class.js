

/*
jQuery Manipulating CSS
jQuery has several methods for CSS manipulation. We will look at the following methods:

addClass() - Adds one or more classes to the selected elements
removeClass() - Removes one or more classes from the selected elements
toggleClass() - Toggles between adding/removing classes from the selected elements

css() - Sets or returns the style attribute
Return a CSS Property : css("propertyname");
Set a CSS Property : css("propertyname","value");
Set Multiple CSS Properties: css({"propertyname":"value","propertyname":"value",...});

*/

$(document).ready(function(){

    // addClass() Method
    $("#btn1").click(function(){
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important blue");
    });

    // removeClass() Method
    $("#btn2").click(function(){
        $("h1, h2, p").removeClass("blue");
    });

    // toggleClass() Method
    $("#btn3").click(function(){
        $("div").toggleClass("important");
    });


    $("#btn4").click(function(){
        $("p").css("background-color"); //Return a CSS Property
        $("p, div").css("background-color", "yellow");  //Set a CSS Property
        $("div").css({"background-color": "yellow", "font-size": "200%"});  //Set Multiple CSS Properties

    });





})