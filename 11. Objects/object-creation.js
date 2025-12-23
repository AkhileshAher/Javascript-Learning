// First Method - Using Object Constructor
const obj1 = new Object({name : "Akhilesh"});
console.log(obj1);


// Second Method - Using Create Method
const obj2 = Object.create();  // Creates singleton Object
console.log(obj2);

// Third Method - Directly 
const obj3 = {
    movie : "Iron Man",
    genre : "Action",
    year : "2009",
    production : "Marvel",
    type : "Comics"
};