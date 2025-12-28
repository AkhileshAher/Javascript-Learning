function add(a) {
    return function(b) {
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(1)(2)(3));

// Using Modern Way of ES6

const add1 = (a) => (b) => (c) => (a+b+c);
console.log(add1(1)(2)(3));