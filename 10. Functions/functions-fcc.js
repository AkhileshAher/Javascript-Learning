// Functions are called First Class Citizens because : -->

// Example 1 :

function GreetMe(greet, fullName) {
    console.log(`Hello , ${fullName}`);
    greet();
}

function greet() {
    console.log("Greeting of the Day");
}
GreetMe(greet, "Akhilesh Aher");

// Example 2 :
function solve(number) {
    return function (number) {
        return number * number;
    }
}
let tempfunc = solve(5);
let finalAns = tempfunc(5);
console.log(tempfunc);
console.log(finalAns);

// Example 3 :

const arr = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a - b;
    },
    function (a, b) {
        return a * b;
    }
];

let first = arr[2];
let ans = first(5, 6);
console.log(ans);

// Example 4 :
let obj = {
    age: 25,
    weight: 45,
    height: 120,
    greet: () => {
        console.log("Good Morning");
    }
}
obj.greet();

// Example 5 :

const sum = (a,b) =>{
    console.log(a+b);
}
sum(10,10);