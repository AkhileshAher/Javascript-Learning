// Object Cloning 

const usrInfo = {
    fname: "T Chala",
    address: "Wakanda",
    contact: 9900,
}

const ordInfo = {
    itemName: "Camera",
    price: 9999,
    status: "dispatched",
    isPaid: false
}


// Method 1 : Using Spread Operator

const clonedObj = { ...usrInfo };
console.log(clonedObj);


// Method 2 : Using assign() method

const newObj = Object.assign({}, usrInfo, ordInfo);
console.log(newObj);


// Method 3 : Using Iteration

const src = {
    ht : 123,
    wt : 90,
    age : 88
}
const dest = {};

for(let key in src) {
    let newKey = key;
    let newVal = src[key];
    dest[newKey] = newVal;
}

console.log(dest);