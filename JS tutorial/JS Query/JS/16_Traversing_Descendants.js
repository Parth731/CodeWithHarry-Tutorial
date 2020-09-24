

/*

Traversing Down the DOM Tree
Two useful jQuery methods for traversing down the DOM tree are:

children():The children() method returns all direct children of the selected element.
find(): The find() method returns descendant elements of the selected element, all the way down to the last descendant.

*/


$(document).ready(function(){

    // $("div").children().css({"color": "blue", "border": "2px solid blue"})
    // $("div").children("p.first").css({"color": "red", "border": "2px solid red"});
    $("div").find("span").css({"color": "green", "border": "2px solid green"});
    // $("div").find("*").css({"color": "skyblue", "border": "2px solid skyblue"});
});