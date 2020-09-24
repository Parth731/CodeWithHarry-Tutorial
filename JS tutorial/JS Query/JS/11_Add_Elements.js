

/*
Add Elements

append() - Inserts content at the end of the selected elements
prepend() - Inserts content at the beginning of the selected elements
after() - Inserts content after the selected elements
before() - Inserts content before the selected elements


*/


$(document).ready(function(){

    // Append() method
    $("#btn1").click(function(){
        $("p").append(" <b>Appended Text</b>");
    });
    $("#btn2").click(function(){
        $("ol").append("<li>Appended Item</li>");
    });

    // prepend() method
    $("#btn3").click(function(){
        $("p").prepend("<b>prepend Text</b> ");
    });
    $("#btn4").click(function(){
        $("ol").prepend("<li>prepend Item</li>");
    });

    // after method
    $("#btn5").click(function(){
        $("img").before("<b>before</b>");
    });
    
   
    $("#btn6").click(function(){
        $("img").after("<i>after</i>");
    });


});

// New Elements With append() and prepend()
function appendText(){

    let txt1 = "<p>text</p>";                   //using HTML
    let txt2 = document.createElement("p");     //using DOM
    txt2.innerHTML = "text";                
    let txt3 = $("<p></p>").text("text");   //using Jquery
    $("body").append(txt1, txt2, txt3);
    // $("body").prepend(txt1, txt2, txt3);

}


// New Elements With after() and before()
function afterText(){

    let txt1 = "<b>I</b>";
    let txt2 = document.createElement("i");
    txt2.innerHTML = " love ";
    let txt3 = $("<b></b>").text("Jquery");
    $("img").after(txt1 ,txt2, txt3);
    // $("img").before(txt1 ,txt2, txt3);
}
