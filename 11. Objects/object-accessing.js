const ordInfo = {
    itemName : "Camera",
    price : 9999,
    status : "dispatched",
    isPaid : false
}

// Method 1 - using dot
console.log(ordInfo.itemName);
console.log(ordInfo.price);
console.log(ordInfo.status);
console.log(ordInfo.isPaid);

// Method 2

console.log(ordInfo["itemName"]);
console.log(ordInfo["price"]);
console.log(ordInfo["status"]);
console.log(ordInfo["isPaid"]);