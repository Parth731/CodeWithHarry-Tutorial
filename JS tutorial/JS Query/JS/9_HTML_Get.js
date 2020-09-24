
/*
 Get Content - text(), html(), and val()

text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields
attr() method is used to get attribute values
*/


$(document).ready(function(){

    // get text
    $("#btn1").click(function(){
        alert("Text : " + $("#test").text())
    });

    // get html
    $("#btn2").click(function(){
        alert("HTML : " + $("#test").html())
    });

    // get value
    $("#btn3").click(function(){
        alert("Value : " + $("#test2").val())
    });
    
    // get attribute
    $("#btn4").click(function(){
        alert("attribute : " + $("#w3s").attr("href"));
    });



});