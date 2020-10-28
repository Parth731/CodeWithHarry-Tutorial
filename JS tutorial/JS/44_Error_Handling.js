console.log("This is tutorial 44");

// pretend this is coming from server as response
let a = "parth bhai";
a = undefined;
if (a != undefined) {

    throw new Error("This is not undefined");
} else {
    console.log("This is undefined");
}


try {

    // sdsdfdddfd
    console.log("we are inside try block");
    functionHarry();

} catch (error) {

    console.log("Are you Okay ?");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("finally we will run this");
}


/*

EvalError	    An error has occurred in the eval() function
RangeError	    A number "out of range" has occurred
ReferenceError	An illegal reference has occurred
SyntaxError	    A syntax error has occurred
TypeError	    A type error has occurred
URIError	    An error in encodeURI() has occurred

*/

// range error
let num = 1;
try {
    num.toPrecision(500); //argument btn 1 and 100
} catch (error) {

    console.log(error);
    console.log(error.name);

}


// ReferenceError
let x;
try {
    x = y + 1;
} catch (error) {

    console.log(error);

}


// synatx error
try {
    eval("alert('Hello)"); // Missing ' will produce an error
} catch (error) {
    console.log(error)
}

// Typeerror
num = 1;
try {
    num.toUpperCase();
} catch (error) {
    console.log(error);
}

// URL Error
try {
    decodeURI("%%%")
} catch (error) {
    console.log(error);
    console.error();
}

console.log("error");