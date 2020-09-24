

/*

load() Method:
The jQuery load() method is a simple, but powerful AJAX method.
The load() method loads data from a server and puts the returned data into the selected element.

syntax:
$(selector).load(URL,data,callback);

Here is the content of our example file: "demo_test.txt":

<h2>jQuery and AJAX is FUN!!!</h2>
<p id="p1">This is some text in a paragraph.</p>


responseTxt - contains the resulting content if the call succeeds
statusTxt - contains the status of the call
xhr - contains the XMLHttpRequest object


*/


$(document).ready(function () {
    $("#btn1").click(function () {

        // read file
        // $("#div1").load("JS/demo_test.txt");
        
        // read file only p1
        // $("#div1").load("JS/demo_test.txt #p1");


        $("#div1").load("JS/demo_test.txt",function(responseTxt,statusTxt, xhr){

            if(statusTxt == "success"){
                alert("External content loaded successfully!");
            }
            if(statusTxt == "error"){
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            }
        });



    });
});