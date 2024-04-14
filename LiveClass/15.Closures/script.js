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
