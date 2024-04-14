// 1. DOMContentLoaded -> it is an event which is LAUNCHED ONLY WHEN the DOM TREE CREATION is 100%

document.addEventListener("DOMContentLoaded", () => {
  const headingElement = document.getElementById("heading");

  headingElement.style.background = "red";
});

// when DOMContentLoaded happens it is a GURANTEEE that DOM TREE is Fully Created (100%).
// It is Not A GURANTEE that the Image will be Loaded Completly.

// 2. Load -> when External Resources (images, Videos, Audio, css etc ) are loaded 100% then this event will be launched.

document.addEventListener("load", () => {
  // Play with audio, video or image....
});

// 3. beforeUnload -> It works when the document is about to be take off/unloaded.

document.addEventListener("beforeunload", () => {
  // Cleanup
  // Remove event listners
  // remove timers..
  //   document.removeEventListner("eventName", funcName)
});
