/*
    Everyting in JS is true or false (in boolean context).
    This doesnt mean their value itself is false or true ,
    but they are treated as false or true if taken in Boolean context.

    Falsy Values : false, 0, -0, 0n (Bigint value), "" (Empty String), null, undefined, Nan
    Truthy Values : Everything Else

*/



// Examples
console.log(false || 3);  // 3
console.log(false && "Akhilesh") // false 
console.log(true || "Namaste"); // true
console.log("Namaste" || true); // Namaste