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

// THE CONTEXT is actually Depends upon the call site
// Call site Determines the CONTEXT or value of this keyword

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

// 2. Implicit Binding: JS is doing the HARDWORK to  Determine the CONTEXT

// ---- EXAMPLE 1:
/*
const obj = {
  name: "utkarsh",
  class: 12,
  rollNumber: 99,
  func: function () {
    // context -> this -> obj
    console.log("hello"); 
    console.log(this); // obj
    console.log(this.name); // utkarsh
    console.log(this.rollNumber); // 99
  },
};


obj.func(); // is this a call site ?  YES
// have i given any extra info ? YEs -> obj

*/

// ---- EXAMPLE 2:
/*
let obj = {
  name: "akash",
  rollNumber: 12,
  func: function () {
    // contenxt -> this -> obj
    console.log(this, "context");
    console.log(`hello my name is ${this.name}`); // akash
  },
};

obj.func(); // is this a call site ? YES
// Have I given Any Extra Info ? YES -> OBJ

*/

// ------ EXAMPLE 3: COPY FUNCTION
/*
let obj = {
  name: "akash",
  rollNumber: 12,
  func: function () {
    // contenxt -> this -> window
    console.log(this, "context"); // window
    console.log(`hello my name is ${this.name}`); // undefined
  },
};

const funcCopy = obj.func; // is this a call site ? NO.

funcCopy(); // is this a call site ? YES
// Have I given any extra information ? NO

// looks like its a case of Default Binding

*/

// EXAMPLE 4: MULTIPLE INFORMATION

/*
function func() {
  console.log("outside", this);
}

let obj2 = {
  name: "utkarsh",
  func: function () {
    // constext -> this -> obj2
    console.log(`hello .... ${this.name}`); // utkasrsh
  },
};

let obj1 = {
  name: "akash",
  rollNumber: 99,
  obj2: obj2,
};

// obj2.func()
obj1.obj2.func(); // is it legin call  ? YEs
// is this a call site? YES
// Have I given any extra infromation ? YEs -> OBJ2


obj1.obj2.obj3.obj4.obj5.func() ->  context would be obj5

*/

// 3. Explicit Binding

/*
  in here user/developer is doing the hard work to Give the context to the function.

  1. call
  2. apply
  3. bind

*/

// EXAMPLE 1: call

/*
const obj1 = {
  name: "utkarsh",
  rollNumber: 99,
  func: function (a, b) {
    //context => this => obj1 -> Line 195
    //context => this => obj2 -> Line 199
    console.log("context", this); // obj2
    console.log(this.name, a, b); // akash 1,2
  },
};

const obj2 = {
  name: "akash",
  rollNumber: 1,
};

obj1.func(1, 2); // is this a call site ? yES
// have I given anyExtraInfo ? YES -> obj1
// utkarsh 1 2

obj1.func.call(obj2, 22, 222);
// akash 22 222

*/

// Example 2: apply

/*
const obj1 = {
  name: "utkarsh",
  rollNumber: 99,
  func: function (a, b) {
    console.log("context", this); // obj2
    console.log(this.name, a, b); // akash 1,2
  },
};

const obj2 = {
  name: "akash",
  rollNumber: 1,
};

obj1.func(1, 2); // is this a call site ? yES
// have I given anyExtraInfo ? YES -> obj1
// utkarsh 1 2

obj1.func.call(obj2, 22, 222);
// akash 22 222
obj1.func.apply(obj2, [22, 222]);
// akash 22 222
*/

// -------- LITTLE BIT SETTIMEOUT ---------

/*
function abc () {
  // context - >window ? 
    console.log("hello world abc")
}

setTimeout(abc, 5000)
*/

/*
  What must be happening behind the scenes

  function setTimeout(fn, delay)  {

    // fn = abc
    // Waitfor delay Seconds thread.wait  

    fn(); // real call site of abc function  ?  YES 
    // have I given any Extra INFO ?  NO 

    // Its a flaw everyTIME it would always be DEFAULT BINDING
  }


*/

// Example 3: bind

/*
const obj = {
  name: "utkarsh",
  func: function (a, b) {
    // context -> this -> obj
    console.log(this);
    console.log(`Hello ... ${this.name}`, a, b);
  },

  func2: function () {
    console.log("hello fromfunction 2");
  },
};

// obj.func();
// obj.func2();

// setTimeout(obj.func2, 5000);

const funcCopy = obj.func.bind(obj, 80, 90);

setTimeout(funcCopy, 5000);
setTimeout(obj.func, 5000);

// googleService(func)

*/

// -----  4. new

/*
function Car(name, speed, mdel) {
  // context -> this -> new ({})
  this.name = name;
  this.speed = speed;
  this.model = mdel;
}

const ferrari = new Car("ferrari", 280, "v8");

// new is = {}

// AAre you calling Car function ? YES (call site)
// the extra info is new ({});

console.log(ferrari);
*/

// ---------------- RULES PRECEDENCE ----------------------

/*
  When 2 rules are fighting then the precedence rule comes into play

  new >>>>> explicit Binding > implicit > defult.

*/

// EXAMPLE: 4

/*
let obj = {
  name: "akash",
  func: function () {
    // context = {}
    this.standard = 12;
    console.log(`hello ... ${this.name}`);
  },
};

// new kwyword vs Implicit binding
// new keyword wins...

const object = new obj.func();
console.log(object);
*/

// hello undefined
// { standard: 12 }

// EXAMPLE 5:

/*
let obj1 = {
  name: "akash",
  func: function () {
    // context = {}
    this.standard = 12;
    console.log(`hello ... ${this.name}`);
  },
};

// Implicit binding

const object1 = obj.func();
console.log(object1);
console.log(obj1);

*/

/*
ANswer: 

  hello akash 
  undefined
  
  { name: "akash",
    func: function () {
    // context = {}
    this.standard = 12;
    console.log(`hello ... ${this.name}`);
    },
    standard: 12
  }
  

*/

// EXAMPLE 6:

/*
function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
}

// new keywod

const person1 = new Person("asd");
const person2 = {
  name: "xaxa",
};

// Inplicit Binding vs Explicit Binding

person1.sayHello.call(person2);

*/

/*
  ANSWER
  Hello xaxa
*/
