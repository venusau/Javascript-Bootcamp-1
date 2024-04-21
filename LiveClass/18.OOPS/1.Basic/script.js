/*
  OOPS -> Object Oriented Programming ...

  In OOPS language Prime focus is Object (Creation, manupulation, Desctruction)

  IN Scripting Language (JS) the Prime focus is Functions. 

  JS is a Functional Language, 

  JS has LEss support of OOPS.


  // Main thing is OOPS and FUNCTIONAL are PARADIMES (WAY OF LIFE)

  // MAIn aim of any Program (software ) is to create Objects and handle them 
  // Objects can be created Through OOPS and FUNCTIONAL Programming. 


  // OOPS: 

  1. Object 
  2. Class 
  3. Inheritance

  4. Polymorphism 
  5. Abstraction 
  6. Encapsulation 
*/

// --------------- How to Create Object in JAvascript ---------------------

// way 1:
const utkarshPerson = {
  name: "utkarsh",
  age: 27,
  canWalk: function () {
    console.log("hello I can walk " + this.name);
  },
};

const yatinPerson = {
  name: "Yatin",
  age: 27,
  // Methods
  canWalk: function () {
    console.log("hello I can walk " + this.name);
  },
};

// way 2:  class
/*
  JAVA, .net dont provide way 1, the only way to make object in that language is through WAay 2 (classes).

  Classes in JS are JUST SYNTATICAL SUGAR 
*/

/*
class Person {
  // OPTIONAL HERE

  name;
  oldAge;

  constructor(namessssss, agezzzz) {
    // Mostly with class this -> class Itself -> Person
    this.name = namessssss;
    this.oldAge = agezzzz;
    this.county = "India";
  }

  // METHODS

  canWalk() {
    console.log("hello I can walk Classssss method " + this.name);
  }
}

const arunPerson = new Person("arun", 30);
const amitPerson = new Person("amit", 40);
const animikaPerson = new Person("animika", 25);
const priyankaPerson = new Person("priyanka", 13);

console.log(utkarshPerson);
console.log(utkarshPerson.canWalk());

console.log(yatinPerson);
console.log(yatinPerson.canWalk());

console.log("---------x-x-x-x-x-x-x-------------");

console.log(arunPerson);
console.log(amitPerson);
// arunPerson.canWalk();
// amitPerson.canWalk();
// console.log(animikaPerson);
// console.log(priyankaPerson);

*/

/*
  Comparing yatinPerson (Normal object) vs arunPerson  (class object)

  Only Difference is the method canWalk() otherwise EVERYTHING else is SAME;

  canWAlk method -> OWN method/Property in yatinPerson
  canWAlk method -> NOT OWN method/Property in arunPerson

*/

// ----------------------- BEFORE CLASS KEYWORD (BEFORE ES6) SCHEMA (CONSTRUCTOR FUNCTION ) -----------------------

// Way 3: CONSTRUCTOR FUNCTION

/*
function PersonFunction(namessssss, agezzzz) {
  this.name = namessssss;
  this.oldAge = agezzzz;
  this.residence = "Delhi";

  this.canWalk = function () {
    console.log("hello I can walk CONSTRUCTOOR FUNCTION method " + this.name);
  };
}

const arunPersonC = new PersonFunction("arun", 15);
const animikaPersonC = new PersonFunction("animaka", 20);

console.log(arunPersonC);
console.log(animikaPersonC);

animikaPersonC.canWalk();

*/

/*
  having look at COnstructor FUnction and Classes 
  we can COnclude EVERYTHING IS SAME EXECEPT the Methods

  Methods in Constructor Function -> OWn Methods. 
  Methods in CLASS -> NOT Own Methods.

*/

// QUESTION: Having the limited Knowledge Please tell WHo is Better ? COnstructor Function Vs Classes Vs Normal Objects ?
/*
  Answer: 


  // check for the Construtor fUnction Methdos

  const constructorFunctionCanWalkResult =
    arunPersonC.canWalk === animikaPersonC.canWalk;
  console.log(
    constructorFunctionCanWalkResult,
    "constructorFunctionCanWalkResult"
  ); // false

  const classFunctionCanWalkResult = arunPerson.canWalk === animikaPerson.canWalk;
  const class1 = priyankaPerson.canWalk === arunPerson.canWalk;

  console.log("classFunctionCanWalkResult", classFunctionCanWalkResult, class1);



  in Constructor Function if you create 10000 object then we will have 10000 copies of Function also 

  but in Class if you create 10000 object then we will have 1 copy of Function. 

  Thats IT

  CLASSES WON !!!!
*/

// ------------------------------ INHERITANCE ---------------------------
// All the Properties and Methods of Parent will be part of Child (Derived Class).
// Any Properties of child can NEVER be Part of Parent.

class Parent {
  property = 12;

  constructor() {}
}

class Child extends Parent {
  name;
  toys;

  constructor(name, toys) {
    // this -> CHild
    // super -> Parent super()
    super();

    this.name = name;
    this.toys = toys;
  }
}

const child1 = new Child("ch", 100);

console.log(child1);

// See Inheritance in Function Constructor ?
