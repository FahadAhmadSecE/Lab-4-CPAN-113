//Task 1

function add(x,y) {
    return x + y;
}

const product = function(x,y) {
    return x * y;
}

const difference = (x,y) => a - b;

//Task 2

function sum(...numbers) {
        let sum = 0
        for (let num of numbers) {
            sum += num;
        }
        

return sum;
    }

function greeting(name = "Anonymous") {
    console.log("Good Afternoon, " + name + ".")
}

function sum() {
    let total = 0
    for (let n = 0; n < arguments.length; n++) {
        total += arguments[n];
    }
    return total;
}

//Task 3

function person(name, age) {
    let person = {name: name, age: age}
    return person
}

function OorE(x) {
    if (x % 2 == 0) {
        return true
    } else {
        return false
    }
}

function air() {

}


//Task 4

function n(Name) {
    

    function other() {
        console.log("My name is Alex but " + Name + " is cool.");
    }

    return other;
}

let closure = n("Fahad");
closure();

function counter() {
let count = 0;
    function edit (change) {
        count += change;
        console.log("Counter : " + count)
}
return edit
}

const myCounter = counter();

for (let t = 1; t <= 10; t++) {
    myCounter(1);
}

for (let t = 10; t > 0; t--) {
    myCounter(-1);
}