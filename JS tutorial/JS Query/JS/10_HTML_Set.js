
/*
Set Content - text(), html(), and val()

text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields



*/


$(document).ready(function(){


    // set text
    $("#btn1").click(function(){
        $("#test1").text("Hello world !!");
    });

    // set html
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!!</b>");
    });

    // set value
    $("#btn3").click(function(){
        $("#test3").val("Parth Patel");
    });


    //Callback Function for text(), html(), and val()
    $("#btn4").click(function(){
        $("#test4").text(function(x, orintaxt){
            return "Old Text : " + orintaxt + " New Text : Hello <b>World!!</b> (index : " + x + ")"; 
        });
    });

    $("#btn5").click(function(){
        $("#test5").html(function(x, orintaxt){
            return "Old Text : " + orintaxt + " New Text : Hello <b>World!!</b> (index : " + x + ")"; 
        });
    });


    // set attribute
    $("#btn6").click(function(){
       $("#w3s").attr("href","https://www.w3schools.com/jquery/")
    });

    // attr() method also allows you to set multiple attributes at the same time.
    $("#btn6").click(function(){
        $("#w3s").attr({
            "href":"https://www.w3schools.com/jquery/",
            "title" : "W3Schools jQuery Tutorial"
        });
    });
 

    //  Callback Function for attr()
    $("#btn6").click(function(){
        $("#w3s").attr(function(x, origValue){
            return origValue + "/Jquery/";
        });
    });
    


})