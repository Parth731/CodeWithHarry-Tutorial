console.log("This is JS tutorial 9 if...else")
const age = 65;
const doesdrive = false;
//const vari = 34;

if(age!=19)     //value compare
{
    console.log("Age is 19")
}
else if(age !== 65)     //value and type compare
{
    console.log("Age is 65")
}
else
{
    console.log("Age is not 19")
}

////////////////////////////////
if(typeof vari !== "undefined")
{
    console.log("vari is defined");
}
else
{
    console.log("vari is not defined");
}

////////////////////////////////////
if(doesdrive || age>18)
{
    console.log("You can drive");
}
else
{
    console.log("You can not drive");
}

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}         
