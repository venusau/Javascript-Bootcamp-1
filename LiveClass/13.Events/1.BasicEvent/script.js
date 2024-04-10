// ANY THING/ ANY ACTION in the browser is an EVENT.

/*
    What do we do in the Browser? 

    Click, DoubleCLick, Scroll, Hover, 
    Changing the screen size etc ....... 


    EVERY ACTION IS nothing but an Event of Its Own Type.


    // ROLE OF THE BROWSer

    USER ----ACTION---> BROWSER ----EVENT(type)---> TAB(Website)

    any action happens create an EVENT in the browser and send it to the website.

    ANY EVENT that is created by Browser is BroadCasted to all the component 
    included Javascript.
*/

const buttonElement = document.getElementById("button");

// --------------------- MOUSE EVENTS ------------------

// 1. Click

buttonElement.addEventListener("click", () => {
  //   console.log("clicked ME!!!");
  alert("button clicked");
});

// A single Element can Have Multiple Event Listners...

const containerElement = document.getElementById("container");

// 2. MouseOver->
containerElement.addEventListener("mouseover", () => {
  containerElement.style.background = "purple";
});

// 3. Mouse Out ->

containerElement.addEventListener("mouseout", () => {
  containerElement.style.background = "white";
});

containerElement.addEventListener("click", () => {
  containerElement.style.background = "yellow";
  containerElement.style.borderRadius = "20px";
});

// 4. Double Click

containerElement.addEventListener("dblclick", () => {
  containerElement.style.background = "Black";
  containerElement.style.borderRadius = "5px";
});

// buttonElement.addEventListener("mouseover", () => {
//     console.log("Mouse over");
//     const headingElement = document.getElementById("heading");
//     headingElement.innerText ="wow Hovering mouse enter"
// })

// ----------------------- KEYBOARD EVENTS ---------------------

const inputBoxElement = document.getElementById("inputbox");

// 1. KEY DOWN
inputBoxElement.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "a") {
    containerElement.style.background = "red";
  } else if (key === "b") {
    containerElement.style.background = "green";
  } else {
    containerElement.style.background = "white";
  }
});

// 2. KEY UP

// 3. KEY PRESSED

// ------------------ WINDOW EVENT -------------------
window.addEventListener("resize", (event) => {
  console.log("resize");
});
