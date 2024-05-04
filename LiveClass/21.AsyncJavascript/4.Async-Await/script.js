/// OLD WAY TO CONSUME -------

// Question: we have to fetch quotes and display on the browser.

const url = `https://api.kanye.rest/`;

/*
fetch(url) // level 0
  .then((response) => {
    console.log(response);
    const data = response.json();
    return data;
  })
  .then((data) => {
    console.log(data, "lv2");
    // const { quote } = data; //  TODO : DEstructuring.
    const quote = data.quote;

    const element = document.getElementById("container");
    element.textContent = quote;
  })
  .catch((error) => {
    // level 3
    console.log("level 3", error);
  });

  */

// ----------------------- async await ----------------------------
// 1. if you want to use await then ALWAYS have async FUNCTION.
// 2. every async FUNCTION will return A PROMISE

// 3.. async await is syntatical sugar-> behind the scenes it converts to promise only.

function display(quote) {
  const element = document.getElementById("container");
  element.textContent = quote;

  const newContianer = document.createElement("div");
  newContianer.innerHTML = "asdasdas";

  document.body.appendChild(newContianer);
}

async function fetchQuotes(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const quote = data.quote;
    return quote;
  } catch (error) {
    if (error.message == "") {
    }

    console.log("error hndling ", error);
  }
}

// const quote = fetchQuotes(url);
// console.log(quote, "promise obj");

// consumption of promise
// 1. .then

// fetchQuotes(url)
// .then((quote) => {
//   display(quote);
// });

// 2. async await

async function mainFunction() {
  const quotes = await fetchQuotes(url);
  display(quotes);
}

mainFunction();
