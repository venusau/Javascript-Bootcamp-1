// const promise = new Promise((res, rej) => {
//   console.log("eager promise");
//   res(100);
// });

// EXAMPLE: 1

/*
console.log("a");

setTimeout(() => {
  console.log("c");
}, 0);

console.log("b");
*/

/**
 * Answer
 * a b c
 */

// EXAMPLE: 2

/*
console.log("a");

promise.then((data) => {
  console.log("c", data);
});

console.log("b");
*/

/**
 * Answer
 *a
 b
 c 100
 */

//  EXAMPLE 3:

/*
console.log("a");

// macro task queeu
setTimeout(() => {
  console.log("d");
}, 0);

// Microtask queue
promise.then((data) => {
  console.log("c", data);
});

console.log("b");

*/

/**
 * Answer
 *
 * a b
 * c 100
 * d
 *
 *
 */

const promise = new Promise((res, rej) => {
  // 1  cal server
  setTimeout(() => {
    res(100);
  }, 5000);
});

//  EXAMPLE 4:

console.log("a");

setTimeout(() => {
  console.log("d");
}, 10);

promise.then((data) => {
  console.log("c", data);
});

console.log("b");

/**
 * Answer
 *
 * a
 * b
 * d
 * c 100
 *
 *
 */

// LEARN: https://www.youtube.com/watch?v=8aGhZQkoFbQ
