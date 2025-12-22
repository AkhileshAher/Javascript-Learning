let myArr = [10, 20, 30, 40, 50];

myArr.push(60);
console.log(myArr);

myArr.pop();
console.log(myArr);

let res = myArr.shift();
console.log(res);

let newRes = myArr.unshift(5);
console.log(newRes);

let newArr = myArr.slice(1, 3);
console.log(newArr);

let spliceArr = myArr.splice(1, 3, 400, 600); // @returns — An array containing the elements that were deleted.
console.log(spliceArr);
console.log(myArr);

let tempArr = [10, 30, 20, 40, 50];
console.log(tempArr.join());
console.log(tempArr.includes(10));
console.log(tempArr.sort());

let mArr = [10, 20, [30, 40, 50], 60, [70, 80, [45, 55], 25], 65];
let mynewArr = mArr.flat(Infinity);  // Flat takes Depth as argument
console.log(mynewArr);

