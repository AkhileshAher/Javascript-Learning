const ordInfo = {
    itemName : "Camera",
    owner : {
        fname : "Sony",
        company : "Enterprises",
    },
    price : 9999,
    status : "dispatched",
    isPaid : false
};

// freeze

Object.freeze(ordInfo);  

ordInfo.itemName = "DSLR Sony Camera";
console.log(ordInfo.itemName);  // Camera Because Object is Freeze

// Object.keys()

console.log(Object.keys(ordInfo)); // Returns array of Keys of object passed as argument

// Object.values()

console.log(Object.values(ordInfo))

// Object.entries

console.log(Object.entries(ordInfo));

// and many more