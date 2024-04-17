// NORMAL EXAMPLES

/*
function foo() {
  console.log("hello");
}

foo();

const obj = {
  name: "utkarsha",
  class: 12,
  rollNumber: 80,
  hobbies: ["painting", "gaming"],
  func: function () {
    console.log("hello to the func");
  },
};

obj.func();

*/

// ----------------  CALL SITE  --------------

/*
function foo() {}

foo(); //  this is a call site

const fooCopy = foo; // this is NOT a call site.
// I do not see ()

fooCopy(); // this is a call site
*/

// -------------- FEAR of this Keyword ------------------

// 1. this keyword: context at which the function is called. OR
// on which context the function is called

/*
  I am CALLING priyanka, "Polietly" -> Context -> polite
  I am CALLING priyanka, "Rudely" -> Context -> Rude 

  IN JS we can ONLY call FUNCTIONS and nothing else.
  AGENDA: Our Main agenda for this would be to understand the CONTEXT.

  Whenever you are calling a function you always have a CONTEXT.

  in js Context is this KEyword  
*/

// ----------------- 4 RULES of CONTEXT (this) --------------

// 1. Default binding

/*
function foo() {
  //context - this // window/null (null -> strict mode)
  console.log("hello");
  console.log(this);
}

foo(); //  is this a call site ? YES
// have I given any extra Information ? NO.

*/

// 2. Implicit Binding

const obj = {
  name: "utkarsh",
  class: 12,
  rollNumber: 99,
  func: function () {
    // context -> this -> obj
    console.log("hello");
    console.log(this);
    console.log(this.name);
    console.log(this.rollNumber);
  },
};

obj.func(); // is this a call site ?  YES
// have i given any extra info ? YEs -> obj
