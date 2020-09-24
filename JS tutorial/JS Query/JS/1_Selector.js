
console.log("Selector")

$(document).ready(function(){

    // element selector
    $("p").click(function(){
        alert("Element selector")
    });

    // id selector
    $("#btn-id").click(function(){
        alert("ID selector")
    });

    // class selector
    $(".btn-class").click(function(){
        alert("class selector")
    });

    // * universal selector
    $("*").click(function(){
        alert("universal selector")
    });
});