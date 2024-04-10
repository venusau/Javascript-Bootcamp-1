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

childElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("child Clicked");
  },
  false
);

parentElement.addEventListener("click", (evenObj) => {
  console.log("parentElement Clicked");
});

grandParentElement.addEventListener(
  "click",
  (evenObj) => {
    console.log("grandParentElement Clicked");
  },
  false
);

// ---------------- CAPTURING PHASE ----------------

// childElement.addEventListener(
//   "click",
//   (evenObj) => {
//     console.log("child Clicked");
//   },
//   true
// );
