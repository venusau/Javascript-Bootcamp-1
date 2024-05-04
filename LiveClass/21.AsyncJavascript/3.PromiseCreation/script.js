// Uptill now WE have done Promise COnsumption

// ------------------ PROMISE CREATION ---------------

// WAY 1 -> CLass

const promise = new Promise((resolve, reject) => {
  // at certain condition we can either resolve the pormise or reject it

  // resolve(10000000000000000);

  reject("Server timed out");
});

// consume a promise

promise
  .then((data) => console.log(data, "level 1"))
  .catch((error) => console.log(error, "level 2"));

// PRACTICAL EXAMPLE

function myFetch(url) {
  const promise = new Promise((res, rej) => {
    // 1. Fetch the data
    const xhttpReq = XMLHttpRequest();
    const data = xhttpReq.open("GET", url);

    // 2. Wrap the real data to make a Response Object
    const responseObj = {
      staus: 200,
      url: url,
      data: data,
      ok: true,
      json: function () {},
    };

    // 3. Resolve or REJECT PROMISE

    if (data) {
      res(responseObj);
    } else {
      rej("server timed out");
    }
  });

  return promise;
}

myFetch("kanye").then((data) => {});

// WAY 2 - > Async-await
