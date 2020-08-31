console.log("This is tut 28 Prototype");

// object literal  
// object start to object.prototype
let obj = {
    name:"harry",
    channel : "codewithharry",
    address:"mars"
}
console.log(obj);

function Obj(givenName){
    this.name = givenName;
}

let myobj2 = new Obj("parth");
console.log(myobj2);

// object prototype
Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
    this.name = newName;
}

let obj2 = new Obj("rohan dash");
console.log(obj2);
console.log(obj2.setName("niti mohan"));
console.log(obj2);
