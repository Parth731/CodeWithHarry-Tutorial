
/*

The first(), last(), eq(), filter() and not() Methods
The most basic filtering methods are first(), last() and eq(), which allow you to select a specific element based on its position in a group of elements.

Other filtering methods, like filter() and not() allow you to select elements that match, or do not match, a certain criteria.


first() :The first() method returns the first element of the specified elements.
last(): The last() method returns the last element of the specified elements.
eq(): The eq() method returns an element with a specific index number of the selected elements.

filter() :The filter() method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned.

note():The not() method returns all elements that do not match the criteria.


*/

$(document).ready(function(){

    // $("div").first().css({"background-color":"yellow"},)
    // $("div").last().css({"background-color":"yellow"},)
    // $("p").eq("4").css({"background-color":"yellow"},)  //forth paragraph
    // $("p").filter(".intro").css({"background-color":"yellow"},)

    // Tip: The not() method is the opposite of filter().
    $("p").not(".intro").css({"background-color":"yellow"},)


})