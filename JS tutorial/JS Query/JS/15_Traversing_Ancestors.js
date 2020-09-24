

/*

Traversing Up the DOM Tree
Three useful jQuery methods for traversing up the DOM tree are:

parent(): The parent() method returns the direct parent element of the selected element.
parents(): The parents() method returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).
parentsUntil():The parentsUntil() method returns all ancestor elements between two given arguments.

*/


$(document).ready(function(){

    // $("span").parent().css({"color": "red", "border": "2px solid red"});
    // $("span").parents().css({"color": "blue", "border": "2px solid blue"});
    // $("span").parents("ul").css({"color": "blue", "border": "2px solid blue"});
    $("span").parentsUntil("div").css({"color": "blue", "border": "2px solid blue"});
})