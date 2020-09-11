
console.log("This is Tuturial 53");

// generator in java script


function* numbersGen(){

    let i=0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(true){
        yield i++;
        // yield (i++).toString();
    }

    
}



let gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


