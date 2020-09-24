
console.log("callback and chaining");

/*

callback function
$(selector).hide(speed,callback);



*/


$(document).ready(function () {

    // with Callback
    // $("button").click(function(){
    //     $("p").hide("slow",function(){
    //         alert("The paragraph is now hidden")
    //     });
    // });

    // without callback
    // $("button").click(function(){
    //     $("p").hide(1000);
    //     alert("The paragraph is now hidden")
    // });

    // Chaining
    $("#chaining").click(function () {
        $("#p1").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    })
})