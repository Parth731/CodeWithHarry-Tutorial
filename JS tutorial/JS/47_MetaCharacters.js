
console.log("This is a tutorial 47");

let regex = /harry asa/;
// let's look into some metacharacter sysmbols
regex = /^harrui/; // ^ means expression will match is starting starts with

regex = /ryy$/; // $ at the end of the stating means "starting end with"

regex = /h.rry/; // . means matching any one character
regex = /h*rry/; // * means matching any zero and more character
regex = /ha?rryi?t/; // ? after character means that character is optionl   
regex = /h\*rry/; // 



let str = "harry means codewith"; //

let result = regex.exec(str);
console.log("The result is from exec", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}


