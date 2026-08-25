function first(){
console.log("Frist");
}

function second(){
console.log("Second");
}
first();
second();
console.log("Third");

function one() {
    console.log("Inside one");
    two();
}

function two() {
    console.log("Inside two");
}

one();

console.log("Done");

