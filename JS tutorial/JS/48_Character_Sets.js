 
 console.log("This is a Tutorial 48");

    //  regular Expressions
    // basic funcations
    // matacharacter symbols

// const regex = /^h/i;


// Character Sets - we use []
// const regex = /h[a-z]rry/;
let regex = /h[a-z]rry/;  // can be any charater from a to z
regex = /h[aty]rry/;  //can be an a,t and y
regex = /h[^aty]rr/;  // can not be any charater from a,t and y
regex = /h[^aty]rr[yYu]/;  // can not be any charater from a,t and y + can be an u or y
regex = /h[a-zA-z]rr[yu0-9][0-9]/;  //we can have as many character sets as we want

// const str = "hirry9 Bhai";

// Quantifiers - we use {}
regex = /har{2}y/;  //r can occur exactly 2 times
regex = /har{0,2}y/;  //r can occur exactly 0 to 2 (0 or 1 or 2)times

// str = "harrry bhai";

// groupings - we use paranthesis for grouping()
regex = /(har){2}([0-9]r){3}/;


str = "harhar1r8r5r bhai";


let result = regex.exec(str);
console.log("The result is from exec", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}


