const parentElement = document.getElementById("parent");
const grandParentElement = document.getElementById("grandparent");
const childElement = document.getElementById("child");

// childElement.addEventListener("click", () => {
//   console.log("child Clicked");
// });

// grandParentElement.addEventListener("click", () => {
//   console.log("grandParent Clicked");
// });

// parentElement.addEventListener("click", (eventObje) => {
//   console.log("parent Clicked");
//   console.log(eventObje);
// });

/*
  PHASE OF EVENT 

  1. Capturing Phase -> A event will be ORIGINATED from the window
  Its AIM would be to find the TARGET/ELEMENT who clicked (or any action)

  eventObj = {
    type: click,
    target: null 
  }


  2. Targeting Phase ->  the time at which the event object is literally on the CULPRIT ELEMENT.
  in target phase the event object target is changed from null to targetElement.

  eventObj = {
    type: click,
    target: targetELEMENT 
  }


  3. Bubbling Phase -> A event after the targeting phase want to DIE, so it will travell up to the 
  window element and DIE there

  IN BUBBLING PHASE IT IS 100% GURANTEE about the CULPRIT 

 eventObj = {
    type: click,
    target: targetELEMENT 
  } 

*/

// ---------------- BUBBLING PHASE -----------------------

// childElement.addEventListener("click", (evenObj) => {
//   console.log("child Clicked");
// });

// parentElement.addEventListener("click", (evenObj) => {
//   console.log("parentElement Clicked");
// });

// grandParentElement.addEventListener(
//   "click",
//   (evenObj) => {
//     console.log("grandParentElement Clicked");
//   },
//   false
// );

// ---------------- CAPTURING PHASE ----------------

// childElement.addEventListener(
//   "click",
//   (evenObj) => {
//     console.log("child Clicked");
//   },
//   true
// );

// ---------- EXAMPLES ----------------

// QUESTION 1:  click on child

childElement.addEventListener("click", (evenObj) => {
  console.log(evenObj);
  console.log(evenObj.BUBBLING_PHASE);
  console.log(evenObj.CAPTURING_PHASE);
  console.log("child Clicked");
});

grandParentElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("grandParentElement Clicked");
  },
  false
);

// Answer: 1. child Clicked
// 2. grandParentElement Clicked

// QUESTION 2:  click on Parent

/*
childElement.addEventListener("click", (evenObj) => {
  console.log("child Clicked");
});

grandParentElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("grandParentElement Clicked");
  },
  false
);

// Answer: grandParentElement Clicked

*/

// QUESTION 3:  click on Parent

/*
childElement.addEventListener("click", (evenObj) => {
  console.log("child Clicked");
});

parentElement.addEventListener("click", () => {
  console.log("parent clicked");
});

grandParentElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("grandParentElement Clicked");
  },
  false
);

// Answer: 1. parent clicked
// 2. grandParentElement Clicked

*/

// QUESTION 4:  click on GrandParent

/*
childElement.addEventListener("click", (evenObj) => {
  console.log("child Clicked");
});

parentElement.addEventListener("click", () => {
  console.log("parent clicked");
});

grandParentElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("grandParentElement Clicked");
  },
  false
);

// Answer:
// 1. grandParentElement Clicked

*/

// Question 5: click on Child

/*
childElement.addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("grandparent Clicked");
  },
  true
);

// Answer
// 1. Grand parent clicked
// 2. Parent clicked
// 3. Child clicked
*/

// Question 6: click on Parent

/*
childElement.addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("grandparent Clicked");
  },
  true
);

// Answer
// 1. Grand parent clicked
// 2. Parent clicked

*/

// Question 7: click on Child

/*
childElement.addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  false
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("grandparent Clicked");
  },
  false
);

// Answer
// 1. Parent Clicked
// 2. Child Clicked
// 3. GrandParent clicked
*/

// Question 8: click on Child

/*
childElement.addEventListener(
  "dblclick",
  () => {
    console.log("child Clicked");
  },
  false
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("grandparent Clicked");
  },
  false
);

// Answer
// 1. Parent Clicked
// 2. GrandParent clicked

*/

// Question 9: click on Child

/*
childElement.addEventListener(
  "mouseover",
  () => {
    console.log("child Clicked");
  },
  false
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  true
);

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("grandparent Clicked");
  },
  false
);

// Answer

// MOUSE OVER EVENT

// 0. child Clicked

// CLICK eVent

// 1. Parent Clicked
// 2. GrandParent clicked

*/

// Question 10: click on Child

/*
let x = false;

// FALSE -> RIGHT SIDE
// TRUE -> LEFT SIDE

grandParentElement.addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  x
);

parentElement.addEventListener(
  "click",
  () => {
    console.log("parent clicked");
    x = true;

    // console.log("new val of x", x);
  },
  x
);

console.log(x, "x ki value");

// Answer:
// parent clicked
// grandparent clicked

*/
