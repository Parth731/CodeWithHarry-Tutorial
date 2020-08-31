
console.log("This is a tutorial 49");

// character classes
let regex = /\war/; //word character - _or alphabet or numbers
regex = /\w+d1r/;   //\w+ means one or more word characters
regex = /\Wbhai/   // non word character
regex = /\W+bhai/;  // \W+ means more than one non word character

regex = /number \d999/; //\d means digit
regex = /number \d+/; //\d+ means more than one digit

regex = /\D999/; // \D means non digit
regex = /\D+999/; // \D+ means more than non digit

regex = /\ska number/; // \s Match whitespace character
regex = /\s+ka number/; // \s+ means match one more than one whitespace characters

regex = /\Ska number/; // \S Match non whitespace character
regex = /\S+ka number/; // \S Match one or more than one non whitespace character

regex = /4r5r\b/; // word boundary

// Assertions
regex = /h(?=y)/; //h ke bad me y hone chahiye to match karega
regex = /h(?!y)/;   //h ke bad me y nai hona chahiye to match karega

// str = "harh%7rd1r4r5r bhai";
str = "harh%7rd1r4r5ry%%$@bhai hdrryika number 8999harry9999";

let result = regex.exec(str);
console.log("The result is from exec", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}

