console.log("tut No 24 Date");

let today = new Date();
console.log(today);
console.log(typeof today);

let otherdate = new Date(`8-4-2003 04:54:08`);
// otherdate = new Date(`june 13 1976`);
// otherdate = new Date(`09/16/1976`);//mm/dd/yyyy
console.log(otherdate);


let a;
a = otherdate.getDate();

// s m t w t f s
a = otherdate.getDay();
a = otherdate.getMinutes();
a = otherdate.getSeconds();
a = otherdate.getHours();
a = otherdate.getTime();
a = otherdate.getMilliseconds();
a = otherdate.getMonth();
console.log(a);

otherdate.setDate(31);
otherdate.setMonth(6);
otherdate.setFullYear(1995);
otherdate.setMinutes(40);
otherdate.setSeconds(30);
otherdate.setHours(3);
console.log(otherdate);