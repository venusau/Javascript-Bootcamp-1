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
/*
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");
*/

/*
  Answer

  a
  c
  b (2 sec)

*/

// EXAMPLE :4
/*
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");
console.log("d");
console.log("e");
console.log("f");
console.log("g");
console.log("h");
console.log("i");
console.log("j");

*/

/*
  Answer
a,c,d,e,f,g,h,i,j, b
*/

/* ---------------------- Algo For Event loop  ------------------
  1. EXECUTOR at SetTimeout - as soon as EXECUTOR sees Settimeout/setInterval
    1.1 it send the callback function to the WEB API MEMORY.
    1.2 it starts the countdown for the delay


  2. Event loop is asking the question to the stack (after every 200ms)
    2.1 Are you Empty ? NO (nothing happens)
    2.2 Are you Empty ? YES (then it asks question from the QUEUES (macro, micro))

  3. WEB API MEMORY - as soon as the clock becomes 0, the callback function the clock is associated is popped out
  from the memory to the MACRO TASK QUEUE.

  4. Again Event loops asks questions
    4.1 Are you Empty ? NO (nothing happens)
    4.2 Are you Empty ? YES (then it asks question from the QUEUES (macro, micro))
    4.3 and If my queue is filled with task
  
  5. Pull out the item/task from the MACRO TASK QUEUE and execute it.

*/

// EXAMPLE 5:

/*
console.log("a");

setTimeout(() => {
  console.log("b");
}, 2000);

setTimeout(() => {
  console.log("c");
}, 500);

setTimeout(() => {
  console.log("d");
}, 1000);

setTimeout(() => {
  console.log("e");
}, 3000);

console.log("f");
*/

/* 
Answer
a,f,c,d,b,e


*/

// EXAMPLE 6:
/*
console.log("a");

setTimeout(() => {
  console.log("b");
}, 0);

console.log("c");
*/

/* 
Answer
a , c, b
*/

// READ: settimeout min waiting time is 1ms bec the c++ that implements setTimeout forces for 1 ms wait.

// RESOURCE EVENT LOOP: https://www.youtube.com/watch?v=8aGhZQkoFbQ

//  --------------------- ClearTimeout --------------------

/*
const id = setTimeout(() => {
  console.log("hello");
}, 4000);

clearTimeout(id);
*/

// --------------------- SetInterval/ clearInterval -----------------------

/*
console.log("a");

const intervalId = setInterval(() => {
  console.log("hello");
}, 2000);

console.log("b");

setTimeout(() => {
  clearInterval(intervalId);
}, 7000);

*/

// ------------------- Intelligent question ------------------
/*
EXAMPLE 7:
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
*/

/**
 0 ,1,2,3,4
 */

/*
 EXAMPLE 8:
 for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
*/

/**
 5,5,5,5,5
 */

//  How to Improve Example 8 :

for (var i = 0; i < 5; i++) {
  function inner(num) {
    setTimeout(() => {
      console.log(num);
    }, 0);
  }
  inner(i);
}
