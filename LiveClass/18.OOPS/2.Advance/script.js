// Parent
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

const ankit = new Student("ankit", 10);
const amit = new Student("amit", 10);
console.log(
  ankit.markAttanndance === amit.markAttanndance,
  "class comparing functions"
);
const virat = new SportsCaptain("ViratKohli", 12, "bat");

// ---------------------------- INHERITANCE BEFORE 2015 (Es6) -----------------------

// 1. ---- FLAWED CONSTRUCTOR FUNCTION

/*
function StudentFunction(name, standard) {
  this.name = name;
  this.standard = standard;
  this.country = "INDIAN";

  //   Adding methods here is FLAWED because these methods will be inside the object and not on prototype.

  this.markAttanndance = function () {
    console.log(
      `hey there ${this.name}  is PRESENT :: NORMAL CLASS ATTANDANCE`
    );
  };
  this.grades = function () {
    console.log(`grades of ${this.name} are nice`);
  };
}




const amitFunc = new StudentFunction("amitFunc", 12);
const sumitFunc = new StudentFunction("sumitFunc", 12);

console.log(
  amitFunc.markAttanndance === sumitFunc.markAttanndance,
  "comparing functions"
); // false

console.log(ankit, amitFunc, sumitFunc);

*/

// -------- GOOD CONSTRUCTOR FUNCTION CLASS

// PARENT ...
function StudentFunction(name, standard) {
  // constext => this  - > new -> {}
  this.name = name;
  this.standard = standard;
  this.country = "INDIAN";
}

StudentFunction.prototype.markAttanndance = function () {
  console.log(`hey there ${this.name}  is PRESENT :: NORMAL CLASS ATTANDANCE`);
};

StudentFunction.prototype.grades = function () {
  console.log(`grades of ${this.name} are nice`);
};

const amitFunc = new StudentFunction("amitFunc", 12);
const sumitFunc = new StudentFunction("sumitFunc", 12);

amitFunc.markAttanndance();
sumitFunc.markAttanndance();

console.log(amitFunc, sumitFunc);

console.log(
  amitFunc.markAttanndance === sumitFunc.markAttanndance,
  "comparing functions"
);

// CHILD

function SportsCaptainFunc(name, standard, tool) {
  // Context -> this = {}
  //   super(name, standard);

  // ------ THIS IS BAD. ----
  //   StudentFunction(name, standard); //  is this a call site ? YES
  // Have you given any extra INFO // NO ?

  //   ------- THIS IS GOOD ------

  StudentFunction.call(this, name, standard); // SUPER CALL.
  //   StudentFunction.apply(this, [name, standard]);
  this.favTool = tool;
}

function myExtend() {
  // Parent -> StudentFunction
  const objectWithParentPrototype = Object.create(StudentFunction.prototype); // {} [[prototype]] {parent prototype}
  SportsCaptainFunc.prototype = objectWithParentPrototype;

  //   WE have lost Child Method and COnstructor
  SportsCaptainFunc.prototype.constructor = SportsCaptainFunc;
}
myExtend();

SportsCaptainFunc.prototype.markAttanndance = function () {
  console.log(
    `hey there ${this.name}  is PRESENT :: GROUND PRESENCE ATTANDANCE`
  );
};

SportsCaptainFunc.prototype.routine = function () {
  console.log("ROUTIENE of regrous things -> train -> excesice ");
};

// This is also EXTENDS || DO NOT USE THIS... go ahead with the myExtend()
// SportsCaptainFunc.prototype.__proto__ = StudentFunction.prototype;

// NOW WE THINK ABOUT THE LAST THING EXTENDS KEYWORD.......

const viratFunc = new SportsCaptainFunc("viratsss", 12, "bat");
console.log(viratFunc);
console.log(virat);

viratFunc.routine();
