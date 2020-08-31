

// object, inheritance, class
console.log("This is tut 27 Object Oriented");

// object literal for creating objcts
let car = {
    name:"Maruti 500",
    topspeed : "89",
    run: function (){
            console.log("car is run");
        }
}
car.run();

// we have already seen constructor like this
// new.Date();

// creating a contructor for cars
function GeneralCar(givenName, givenSpeed){

    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.topspeed} km/H than mercedes`)
    }
}
car1 = new GeneralCar("Nisan","180")
console.log(car1);
console.log(car1.topspeed);
console.log(car1.name);
console.log(car1.run());
console.log(car1.analyze());

car2 = new GeneralCar("BMW","250");
console.log(car2.analyze());

car3 = new GeneralCar("mercedes","200");
console.log(car3.analyze());
