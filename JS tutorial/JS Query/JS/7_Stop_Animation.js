

console.log("Stop Animation");

/*

Stop Animation Method

-stop() silding
-stop() animation

Syntax:

$(selector).stop(stopAll,goToEnd);

*/


$(document).ready(function(){

    $("#flip").click(function () {
        $("#panel").slideDown(3000);
    });

    $("#stop").click(function () {
        $("#panel").stop();
    });


});