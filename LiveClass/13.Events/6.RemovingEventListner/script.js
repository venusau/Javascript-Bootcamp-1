const headingElement = document.getElementById("heading");

function clickHandler() {
  console.log("heading lelement clicked");
}

function mouseEnterHandler() {
  console.log("Mouse Enter handler ");
}

headingElement.addEventListener("click", clickHandler); // abc@1234
headingElement.addEventListener("mouseenter", mouseEnterHandler);

// Implmement  headingElement.removeEventListener("click", clickHandler); AFTER 5 SECONDS ...

// HACKY WAY TO REMOVE JUST FOR DEMONSTRATION
setTimeout(() => {
  headingElement.removeEventListener("click", clickHandler); // abc@1234
  headingElement.removeEventListener("mouseenter", mouseEnterHandler);
}, 5000);

// we nned to give same FUNCTION (Address wise) to both addEventListener and  removeEventListener that why I have not
// take then Arrow function.

// REAL USE OF beforeunload

document.addEventListener("beforeunload", () => {
  // CLEANUP ,......
  headingElement.removeEventListener("click", clickHandler); // abc@1234
  headingElement.removeEventListener("mouseenter", mouseEnterHandler);
});

// TODO: Form Event.
