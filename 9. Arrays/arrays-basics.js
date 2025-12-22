// Array Declaration 
let arr = [1, 2, 3, 4, 5];  // stack --> arr which refers to heap memory [1 2 3 4 5]


// Shallow Copy --->
/*

   1. Shallow Copy stores the references of objects to the original memory address.   	
   2. Shallow Copy reflects changes made to the new/copied object in the original object.
   3. Shallow Copy stores the copy of the original object and points the references to the objects.	
   4. A shallow copy is faster.	

*/

// Deep Copy --->
/*

   1. Deep copy stores copies of the object's value.
   2. Deep copy doesn't reflect changes made to the new/copied object in the original object.
   3.Deep copy stores the copy of the original object and recursively copies the objects as well.
   4. Deep copy is comparatively slower.

*/


// Creation of Arrays : 

// 1. Using Array Literals
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["Akhilesh" , 45, true, null,undefined];

console.log(arr1);
console.log(arr2);

// 2. Using Array Constructor

let arr3 = new Array(1,2,3,4,5);
console.log(arr3);


// Typeof array is Object
console.log(typeof arr3);