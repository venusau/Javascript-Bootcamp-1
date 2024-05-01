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

async function fetchQuotes(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const quote = data.quote;

    const element = document.getElementById("container");
    element.textContent = quote;

    const newContianer = document.createElement("div");
    newContianer.innerHTML = "asdasdas";

    document.body.appendChild(newContianer);
  } catch (error) {
    if (error.message == "") {
    }

    console.log("error hndling ", error);
  }
}

fetchQuotes(url);
