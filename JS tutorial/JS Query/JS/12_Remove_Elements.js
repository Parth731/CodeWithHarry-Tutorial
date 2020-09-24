


/*

Remove Elements/Content

remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element

*/


$(document).ready(function(){

    // remove()
    // $("#btn1").click(function(){
    //     $("#div1").remove();

    // });

    // empty()
    $("#btn1").click(function(){
        $("#div1").empty();
        
    });

    // Filter the Elements to be Removed
    $("#btn2").click(function(){
        $("p").remove(".test,.demo");
        
    });


    


    
});