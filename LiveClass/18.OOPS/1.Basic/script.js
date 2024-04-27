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
/*
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
*/

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

// ------------------------------ INHERITANCE / MethodOverriding ---------------------------
// All the Properties and Methods of Parent will be part of Child (Derived Class).
// Any Properties of child can NEVER be Part of Parent.

// EXAMPLE 1 :
/*
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

console.log(child1.property); // 12

*/

// EXAMPLE 2 :

/*
// parent CLass
class Student {
  name;
  standard;

  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
  }

  markAttanndance() {
    console.log(`hey there ${this.name}  is PRESENT :: NORMAL ATTANDANCE`);
  }

  grades() {
    console.log(`grades are nice`);
  }
}
//  child Class

class SportsCaptain extends Student {
  favTool; // bat, ball, tennis racket, badmintionracket

  constructor(name, standard, tool) {
    super(name, standard);
    this.favTool = tool;
  }
}

const sportsCaptain = new SportsCaptain("ViratKohli", 12, "bat");



console.log(sportsCaptain);

const utkarshStudent = new Student("utkarsh", 9);
const arunStudent = new Student("arun", 10);

utkarshStudent.markAttanndance();
arunStudent.markAttanndance();
console.log(utkarshStudent);
console.log(arunStudent);

*/

// EXAMPLE 3:

/*
class Student {
  name;
  standard;
  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
    this.country = "INDIAN";
  }

  markAttanndance() {
    console.log(
      `hey there ${this.name}  is PRESENT :: NORMAL CLASS ATTANDANCE`
    );
  }

  grades() {
    console.log(`grades of ${this.name} are nice`);
  }
}
//  child Class

class SportsCaptain extends Student {
  favTool;
  constructor(name, standard, tool) {
    super(name, standard);
    this.favTool = tool;
  }

  markAttanndance() {
    console.log(
      `hey there ${this.name}  is PRESENT :: GROUND PRESENCE ATTANDANCE`
    );
  }

  routine() {
    console.log("ROUTIENE of regrous things -> train -> excesice ");
  }
}

const virat = new SportsCaptain("ViratKohli", 12, "bat");
console.log(virat);

virat.markAttanndance();
virat.routine();
virat.grades();

console.log(" =--------x x-x-x-x-x-x-x--xx--x-x------- ");

const utkarsh = new Student("utkarsh", 10);
console.log(utkarsh);

utkarsh.markAttanndance(); //  NORMAL CLASS ATTANDANCE
utkarsh.grades(); // grades are nice

*/

// ----------------- Inheritance in 2015 Before ES5 ------------------------
// See advance Part of OOPS.

// ---------------------- PRIVATE PROPERTIES ----------------------

/*
class Star {
  name;
  weight;
  years;

  constructor(name, weight, years) {
    this.name = name;
    this.weight = weight;
    this.years = years;
  }
}

const sun = new Star("sun", 100000000, 460);

console.log(sun);

// I can change the properties of the sun
// sun.weight = -100; // this is bad

// how can i protect it?

// WAY 1. Propery Descriptors:

Object.defineProperty(sun, "weight", {
  writable: false,
});

sun.weight = 999999999999; // this is bad
console.log(sun);
*/

/*If some scientific discovery happens and the sun Weight changes acc to calculation the through way 1 (property)
 descriptor we cant change the weight.
*/

// WAY 2 : using private Property -> BEST way do above things.

/*
class Star {
  name;
  #weight;
  #years;

  constructor(name, weight, years) {
    this.name = name;
    this.#weight = weight;
    this.#years = years;
  }
}

const andromedaSun = new Star("andromeda", 888888888, 100);

andromedaSun.name = "NORmal sun";
// andromedaSun.#weight = 9990000;
// andromedaSun.#yearssssssssss = 1;
console.log(andromedaSun);

*/

// ----------------- ------ GETTERS AND SETTERS -------------------

/*
class Star {
  name;
  #weight;
  #years;

  constructor(name, weight, years) {
    this.name = name;
    this.#weight = weight;
    this.#years = years;
  }

  set setWeight(value) {
    if (value < 0) {
      return;
    }
    
    // if(valid) {
    //   // if authorized people are changeing this or not 
    //   // Some calculation and statistics 

    //   return;
    // }
    

    this.#weight = value;
  }

  get getWeight() {
    return this.#weight;
  }

  get getYear() {
    return this.#years;
  }
}

const sun = new Star("sun", 100000, 100);

sun.setWeight = 999999999;
// sun.setWeight(999999999);

console.log(sun.name);
console.log(sun.getWeight);
console.log(sun.getYear);

*/

// --------------------------- Instance Vs Static Properties/Methods --------------------
/*
class Circle {
  radius;

  constructor(r) {
    this.radius = r;
  }

  // NORMAL METHOD
  draw() {
    console.log("DRWAR CIRCLE of ", this.radius);
    Circle.parse(); // LEGAL this will work.
  }

  // Static Method
  static parse() {
    console.log(`hello this is static parse`);
  }
}

const c1 = new Circle(100);
// console.log(c1);
c1.draw();

// c1 is INSTANCE OF Circle class.
// draw, radius these are Instance Properties.

Circle.parse();
// Circle.draw(); // This will not work.

*/

// --------------------------- CHECK INSTANCE ----------------------------

console.log(c1 instanceof Circle);
