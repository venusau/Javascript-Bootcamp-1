// console.log("hello");

// Requireent -> I want hello to be said after 5 sec

// 5000 ms = 5 seconds.

/*
setTimeout(() => {
  console.log("hello after 5 seconds");
}, 10000);

*/

// EXAMPLE: 1

/*
console.log("a");

console.log("b");

*/

/*
  Answer
  a
  b
*/

// EXAMPLE: 2

/*
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

*/

/*
  Answer
  a
  b  """" after 2 sconds
*/

// EXAMPLE 3:
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");

/*
  Answer

  a
  c
  b (2 sec)

*/

// RESOURCE EVENT LOOP: https://www.youtube.com/watch?v=8aGhZQkoFbQ
