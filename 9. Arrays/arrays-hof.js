// Higher Order Functions - map,reduce.filter,every,some,forEach

const myArr = ["Akhilesh", 12, 34, "Ironman"];

// forEach Function
myArr.forEach((element) => {
    element = element + 40;
    console.log(element);
});

// map method
const newArr = myArr.map((element, index) => {
    console.log(element);
    console.log(index);
    return element + index;
});
console.log(newArr);

//filter method
let farr = [2, 3, 4, 5, 8];
const newArr2 = farr.filter((element, index) => {
    return element % 2 == 0;
});
console.log(newArr2);

// reduce method
let rarr = [10, 20, 30, 50];
const newArr3 = rarr.reduce((acc, currVal, currInd) => {
    return acc + currVal;
}, 0)
console.log(newArr3);

// every
let newArr4 = [1, 2, 3, 4, 5, 6, 7, 8];
const result = newArr4.every((value, index) => {
    return value % 2 === 0;
})
console.log(result);

// some
const newResult = newArr4.some((value, index) => {
    return value % 2 === 0;
});
console.log(newResult);