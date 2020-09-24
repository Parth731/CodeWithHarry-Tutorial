
/*

AJAX get() and post() Methods

$.get() Method syntax:
$.get(URL,callback);


$.post() Method syntax:
$.get(URL,data,callback);





*/


$(document).ready(function () {
    $("#btn1").click(function () {

        // demo_test.txt file
        //   $.get("JS/demo_test.txt", function(data, status){
        //     alert("Data: " + data + "\nStatus: " + status);
        //   });

        // demo_test.txt file
        // $.get("JS/demo_test.asp", function (data, status) {
        //     alert("Data: " + data + "\nStatus: " + status);
        // });

        $.post("JS/demo_test_post.asp",
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            }
        );



    });
});