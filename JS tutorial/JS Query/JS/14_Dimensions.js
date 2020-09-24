

/*

jQuery Dimension Methods
jQuery has several important methods for working with dimensions:

width()
height()
innerWidth()
innerHeight()
outerWidth()
outerHeight()

*/


$(document).ready(function () {

    $("#btn1").click(function () {
        let txt = "";
        txt += "Width of div : " + $("#div1").width() + "</br>";
        txt += "Height of div : " + $("#div1").height() + "</br>";
        txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
        txt += "Inner height of div: " + $("#div1").innerHeight() + "</br>";
        txt += "Outer width of div: " + $("#div1").outerWidth() + "</br>";
        txt += "Outer height of div: " + $("#div1").outerHeight() + "</br>";
        txt += "Outer width of div: " + $("#div1").outerWidth(true) + "</br>";
        txt += "Outer height of div: " + $("#div1").outerHeight(true) + "</br>";
        $("#div1").html(txt);
    });

    // width() and height() of document and window
    $("#btn2").click(function () {

        let txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);

    });

    // resize
    $("#btn3").click(function(){

      $("#div1").width(200).height(200);

    });

});