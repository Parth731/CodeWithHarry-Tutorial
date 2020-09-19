

// event and eventobject
console.log("this is Tutorial 17 Event_Object");

document.getElementById(`heading`).addEventListener('click',function(e){

    console.log(`you have click the heading`);

    // location.href = "//dell.com";
    
    console.log(e);//most import target

    let variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);
    console.log(variable);
    
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
});


