
/*

Traversing Sideways in The DOM Tree
There are many useful jQuery methods for traversing sideways in the DOM tree:

siblings() :The siblings() method returns all sibling elements of the selected element.
next(): The next() method returns the next sibling element of the selected element.
nextAll(): The nextAll() method returns all next sibling elements of the selected element.
nextUntil(): The nextUntil() method returns all next sibling elements between two given arguments.


The prev(), prevAll() and prevUntil() methods work just like the methods above but with reverse functionality: they return previous sibling elements (traverse backwards along sibling elements in the DOM tree, instead of forward).

prev()
prevAll()
prevUntil()


*/


$(document).ready(function () {

    // $("h2").siblings().css({ "color": "red", "border": "2px solid red" });
    // $("h2").siblings("p").css({ "color": "red", "border": "2px solid red" });

    // $("h2").next().css({"color": "red", "border": "2px solid red"});
    // $("h2").nextAll().css({"color": "red", "border": "2px solid red"});
    // $("h2").nextUntil().css({"color": "red", "border": "2px solid red"});
    // $("h2").nextUntil("h6").css({"color": "red", "border": "2px solid red"});

    // $("h4").prev().css({"color": "red", "border": "2px solid red"});
    // $("h4").prevAll().css({"color": "red", "border": "2px solid red"});
    // $("h4").prevUntil().css({"color": "red", "border": "2px solid red"});
    $("h4").prevUntil("span").css({ "color": "red", "border": "2px solid red" });


});