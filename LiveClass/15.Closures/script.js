// CLOSURES ->  Combination of FUNCTION + the LEXICAL EXNIRONMENT (Outer scope chaining).

/*
EXAMPLE 1:
let a = 99;

function abc(c) {
  console.log(a + b + c, "sum");
}

let b = 100;

abc(1);

*/

/*
EXAMPLE 2: 

*/

/*
let a = 12;

function foo() {
  let b = 9;

  function bar() {
    let c = 12;
    console.log(a + b + c + d); // 133
  }

  let d = 100;

  return bar;
}

const result = foo();
// result is nothing but bar function.

result();

*/

/*
EXAMPLE 3: 

  counter() // 1
  counter() // 2 
  counter() // 3


  TRY to implement counter function ..


*/
let count = 0;

function counter() {
  count++;
  return count;
}

const res1 = counter(); // 1
const res2 = counter(); // 2
const res3 = counter(); // 3
const res4 = counter(); // 4

console.log(res1, res2, res3, res4);

/*
EXAMPLE 4: 
  const counter1 = someFunction();
  const counter2 = someFunction();

  counter1(); // 1
  counter1(); // 2 

  counter2(); // 1
  counter2(); // 2

  IMPLEMENT the someFunction

*/

function someFunction() {
  let count = 0;

  function inner() {
    count++;

    return count;
  }

  return inner;
}

const counter1 = someFunction();
const counter2 = someFunction();

// counter1 and counter2 is nothing but inner Function only

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
