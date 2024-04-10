const buttonElement = document.getElementById("button");

// addEventListner will Add A listner to the Elementn when a Perticular event happens.

// addEventListner will EXECUTE the callbackFunction with the EVENT OBJECT.

// It is upto the Developoer if he agrees to consume the event object

/*
  Both of these examples are correct

  buttonElement.addEventListener("click", () => {})
  buttonElement.addEventListener("click", (event) => {})
*/

//  ---------------- IMPORTANT THINGS ABOUT EVENT OBJECT -------------
// 1. target -> Event Object knows about the element due to whom IT WAS CREATED
// 2. TYPE: type of event (Keyboard, click)

const containerElement = document.getElementById("container");

containerElement.addEventListener("mouseenter", (event) => {
  console.log(event);
});

buttonElement.addEventListener("click", (event) => {
  console.log(event);
});
