const obj = {
  name: "akash",
  class: 9,
  rollNumber: 12,
};

// ---------- BasiC Class  Object ----------------------
/*
  Object is the BASE class .
  Every Object in Javascript is derived from the Object class (Arrays, functions, Object)
*/

// Object

// If I want to get Key-Value Pair

const keyValuePair = Object.entries(obj);
console.log(keyValuePair);

// If you only want KEYS

const onlyKeysArray = Object.keys(obj); // 99%
console.log(onlyKeysArray);

// if you ONLY want Values
const onlyValuesArray = Object.values(obj);
console.log(onlyValuesArray);

// ------------
