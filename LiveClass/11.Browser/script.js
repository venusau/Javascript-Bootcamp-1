// --------CREATION of Arrays --------

/*
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array();

console.log(arr, arr2);

*/

// ------------ Equating Arrays -----------

/*
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

console.log(arr1 === arr2); // false;

const arr3 = arr1;

console.log(arr2 === arr3) // false
console.log(arr1 === arr3) // true

*/

// --------------- OPERATIONS On Arrays ------------------

// 2 TYPES
// 1. In-Place: Changing the Object in the same Adress. WITHOUR creating a new Object
// 2. Not IN-Place: is opposite to the above statement.

// 1. Push -> In-Place ::: It adds a new Element in the last of the array

// let arr = [1, 2, 3, 4];

/*

console.log("print ORIGINAL ARRAY", arr);
const originalLength = arr.length; // 4

const newLengthOfArray = arr.push(15); // 5

console.log("print AFTER PUSH ", arr, newLengthOfArray);

*/

// 2. Pop-> In-Place ::: removes the last value in the array
/*
console.log("print ORIGINAL ARRAY", arr);
const removedValue = arr.pop();
console.log(removedValue, arr);

*/

// 3. TODO: shift and unshift

// 4. slice -> Not IN-Place  -> it returns the shallow copy of array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

/*
console.log("print ORIGINAL ARRAY", arr);

const slicedArray = arr.slice(2, 5); // [3,4,5]
console.log(slicedArray, "sliced array");

console.log("print ORIGINAL ARRAY AFTER SLICING ", arr);

*/

// 5. Splice -> In-Place ::: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

/*
console.log("print ORIGINAL ARRAY", arr);

const slicedArray = arr.splice(3, 4);

console.log("splice Arrays", slicedArray);
console.log("print ORIGINAL ARRAY AFTER SPLICE", arr);

*/

// 6. Sort -> IN-Place ::: Sorts the elemnts inside the array in INC or DEC form.

/*
const arr = [9, 3, 7, 4, 8, 1, 2]; // abc@123
console.log("print ORIGINAL ARRAY", arr);

arr.sort();

console.log("print ORIGINAL ARRAY AFTER SORT", arr);
*/

/*
const arr = [
  1, 20, 300, 8, 305, 70, 400, 999, 10000, 1000000000, 90, 81, 1, 20, 70,
];

console.log("print ORIGINAL ARRAY", arr);
arr.sort();
console.log("print ORIGINAL ARRAY AFTER SORT", arr);

// BY DEFAULT IT IS DICTONARY SORTING.

arr.sort((a, b) => a - b); // Ascneding order

console.log("print ORIGINAL ARRAY AFTER ASCENDING SORT", arr);

arr.sort((a, b) => b - a); // Decending order

console.log("print ORIGINAL ARRAY AFTER DECENDING SORT", arr);

*/
