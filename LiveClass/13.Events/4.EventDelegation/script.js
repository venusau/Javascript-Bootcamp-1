const colorPalletElement = document.getElementById("colorPallet");

const containerElement = document.getElementById("container");

// const redElement = document.getElementById("red");
// const greenElement = document.getElementById("green");
// const purpleElement = document.getElementById("purple");
// const blueElement = document.getElementById("blue");
// const yellowElement = document.getElementById("yellow");

// redElement.addEventListener("click", () => {
//   colorPalletElement.style.background = "red";
// });

// greenElement.addEventListener("click", () => {
//   colorPalletElement.style.background = "green";
// });

// blueElement.addEventListener("click", () => {
//   colorPalletElement.style.background = "blue";
// });

// purpleElement.addEventListener("click", () => {
//   colorPalletElement.style.background = "purple";
// });

// yellowElement.addEventListener("click", () => {
//   colorPalletElement.style.background = "yellow";
// });

// DISADVANTAGE 1. code dosent look good
// 2. Event listner take RAM space so more Listners more space.
// 3. Reprtition / NON maintainable code.

// ------- BETTER WAY - >EVENT DELEGATION -------

containerElement.addEventListener("click", (eventObj) => {
  const element = eventObj.target;
  const color = element.id;

  colorPalletElement.style.background = color;
});
