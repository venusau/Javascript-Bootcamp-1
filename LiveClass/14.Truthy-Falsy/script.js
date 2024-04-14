// CONCRETE TRUE AND FLASE VALUES
// THIS IS A BOOLEAN
const isSunHot = true;
const isMoonHot = false;

console.log(isSunHot, "isSunHot");
console.log(isMoonHot, "isMoonHot");

// ------ TRUTHY and FALSY -> these act as true and False but are not in real True and false values.

// --------------- String to Boolean ----------

/*
const str1 = "";
const str2 = "hello";

// With common sense we can say that str1 is a FALSY value
// str2 is a TRUTH value..

console.log(Boolean(str1), "str1");
console.log(Boolean(str2), "str2");

// If block will try to convert str1 into BOOLEAN
// it will be a FALSY value
if (str1) {
  console.log("hello str1 is printed if part");
} else {
  console.log("hello str1 is printed else part");
}

if (str2) {
  console.log("hello str2 is printed if part");
} else {
  console.log("hello str2 is printed else part");
}

// AVOID THIS

console.log(!!str1, "!!str1");
console.log(!!str2, "!!str2");

*/

// ------------ Number to Boolean --------

/*
const num1 = 0;
const num2 = -100;
const num3 = 99;

console.log(Boolean(num1), "num1"); // false
console.log(Boolean(num2), "num2"); // true
console.log(Boolean(num3), "num3"); // true

// for 0 IT will always be FALSE
// for any other number it will always be TRUE.

if (num1) {
  console.log("num1 if part");
} else {
  console.log("num1 else part");
}

// as if block need BOOLEAN CONDITION to work
// behind the scenes the if block converts the num1 to BOOLEAN (TRUTHY/Falsy values)

*/

// -------------------- Object to Boolean ----------

/*
const obj1 = {}; // abc@123
const obj2 = {
  // abc@111
  name: "utkasrh",
};

console.log(Boolean(obj1), "obj1"); // true
console.log(Boolean(obj2), "obj2"); // true

// Same for the Arrays. [], [1,2,3,4,5]

*/

// -------------------- null and undefined -----

/*
const val1 = null;
const val2 = undefined;

console.log(Boolean(val1), "val1 "); // false
console.log(Boolean(val2), "val2 "); // false

if (val1) {
  console.log("val 1 if ");
} else {
  console.log("val 1 else ");
}

*/
