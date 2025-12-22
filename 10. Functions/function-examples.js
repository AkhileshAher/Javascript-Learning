// Example 1 : 
function printcounting() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

printcounting();

// Example 2 :
function printNumber(num) {
    console.log(`Printing Number : ${num}`);
}
printNumber(12);

// Example 3 : 
function getAverage(num1,num2) {
    let avg = num1 + num2/2;
    console.log(avg);
}
getAverage(10,20);

// Example 4 :
function getSum(a,b,c) {
    let sum = a + b + c;
    return sum;
}
let res = getSum(10,20,30);
console.log(res);