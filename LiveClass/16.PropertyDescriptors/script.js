/*
  We can go Ahead And do CRUD operation on the Properties of an Object 

*/

// OBJECT Opertations
/*
const obj = {
  name: "priyanka",
  standrad: 12,
  rollNumber: 15,
};



obj.name = "utkarsh";

delete obj.rollNumber;

obj.adharCard = "454433721829";

*/

/*
  AGENDA: 

  1. We want to protect Object and our Properties from Getting changed.

*/

// ------------------- PROPERTY DESCRIPTORS -------------------------

/*
const obj = {
  name: "priyanka",
  standrad: 12,
  rollNumber: 15,
};

const nameDescription = Object.getOwnPropertyDescriptor(obj, "name");
console.log(nameDescription);

*/

/*
{
    "value": "priyanka",
    "writable": true,
    "enumerable": true,
    "configurable": true
}

*/

/*
  1. value -> Value of that Key
  2. Writable -> if this is TRUE, basically means we can CHANGE the VALUE 
  ex : I can change the value of name from "priyanka" to "utkarsh"
  3. Enumerable -> if TRUE, we can get this Property inside of for-in loop 
  4. Configurable  -> if TRUE, property can be deleted
*/

/* ----------  BEFORE THE CHANGE IN PROPERTY DESCRIPTORS ------- */

/*
const obj = {
  name: "priyanka",
  standrad: 12,
  rollNumber: 15,
};
console.log(obj, "before any change");

// Writable ->
obj.name = "utkarsh";

console.log(obj, "writable");

// Enumerable ->
for (let key in obj) {
  console.log(key, "Enumerable");
}

// Configurable ->

delete obj.name;

console.log(obj, "Configurable");

*/

// ----------------- OBJ AFTER PROPERTY DESCRIPTORS -----------------
const obj = {
  name: "priyanka",
  standrad: 12,
  rollNumber: 15,
};

/*
const nameDescription = Object.getOwnPropertyDescriptor(obj, "name");
const standradDescription = Object.getOwnPropertyDescriptor(obj, "standrad");
console.log(nameDescription);
console.log(standradDescription);
*/

// console.log(obj, "before nay change");

// 1. ------------------- WRITABLE -----------------

/*
Object.defineProperty(obj, "name", {
  writable: false,
});

obj.name = "utkarsh"; // THIS WILL NOT HAVE AN EFFECT

obj.standrad = 990; // THIS WILL HAVE AN EFFECT

console.log(obj, "after writable false");

*/

//2. -------------------- ENUMERABLE  -------------

/*
for (let key in obj) {
  console.log(key + " :: :: " + obj[key]);
}

Object.defineProperty(obj, "name", {
  enumerable: false,
});

console.log(" - - - - - -- ");

for (let key in obj) {
  console.log(key + " :: :: " + obj[key]);
}
*/

//3. ---------------- Configurable ------------------

/*
Object.defineProperty(obj, "name", {
  configurable: false,
});

delete obj.name;
// delete obj.name;
// delete obj.name;
// delete obj.name;

console.log(obj, "obj after detele");

*/

// --------- FEW MORE THINGS TO KNOW --------
// 1. Object.freeze() ->
/* The Object.freeze() static method freezes an object. Freezing an object 
prevents extensions and makes existing properties non-writable and non-configurable. 
A frozen object can no longer be changed: new properties cannot be added, 
existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. 
freeze() returns the same object that was passed in. 
*/

/*
Object.freeze(obj);

obj.name = "asdasdas";
obj.rollNumber = 999900000;
obj.standrad = -1000;

obj["adharCard"] = "12312312312";

delete obj.name;

console.log(obj);

*/

// 2. Object.seal() -> DIY
