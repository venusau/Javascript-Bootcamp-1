// ------------- -------- 1. LOCAL STORAGE --------------

// 1. USAGE.

/*
localStorage.setItem("age", 27);
localStorage.setItem("name", "utkarsh");
localStorage.setItem("adult", true);

const age = localStorage.getItem("age");
console.log("age", age, typeof age);

// localStorage.removeItem("age");

// localStorage.clear();

*/

// CONCLUSION -> localStorage before setting things, it converts the value in string.

// localStorage.clear();

// const utkarshPerson = {
//   name: "utkarsh",
//   age: 27,
//   adult: true,
// };

// const stringifiedVersion = JSON.stringify(utkarshPerson);

// localStorage.setItem("person", stringifiedVersion);

// const person = localStorage.getItem("person");
// const personObj = JSON.parse(person);

// console.log(person);
// console.log(personObj);

// ----- is localstorage sync or asunc

/*
console.log("a");
const person = localStorage.getItem("person");
console.log(person);
console.log("b");

*/

// ------------------------- 2. Location -------------------------
/**
 * it knows about the website and its path, query params, protocol and way to reload the page.
 */

console.log(window.location);

/**
 * WHEN YOU VISIT GOOGLE.com and search for "chennaisuperkings".
 * 
 * 
 * {
    "ancestorOrigins": {},
    "href": "https://www.google.com/search?q=chennaisuperkings",
    "origin": "https://www.google.com",
    "protocol": "https:",
    "host": "www.google.com",
    "hostname": "www.google.com",
    "port": "",
    "pathname": "/search",
    "search": "?q=chennaisuperkings",
    "hash": ""
}
 */
