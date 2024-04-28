/**
 * Promise is a Placeholder for a future value
 *
 *  State of promise ->
 *    Pending -> when you are waiting for the future value
 *    Fulfilled -> When the future value has arrived
 *    Rejected -> When Error Happens.
 *
 */

// --------------------------- CALLBACKS ---------------------

// --------------------------- PROMISE ------------------------

/*
console.log("a");

const promise = fetch("qweqeqwewqeqwewqewqeqweqwe"); // real data might come after 1 min

console.log(promise);

console.log("baat");

*/

// -------- consume ------
/*
console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log("data", data));

console.log("b");
console.log("c");
*/

// ---------- handlers ---------
// .then -> consumes (data)
// .catch -> consumes (error)
// .finally -> will run after the then and catch

// EXAMPLE 1:

/*
console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    return response.json();
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);

    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
  })
  .catch((error) => {})
  .finally(() => {});

console.log("b");
*/

//  -------------- PROMISE CHAINING  -------------
// ALGO
// 1. Whatever Data or Error we are returing from X level, we will get that data/error in (X+1)th level.
// 2. at(x+1)th level I have to ask a question? can you handle the data or the error, according to that proceed forward.

// 3.  Data/ERROR is handled by THEN block
// 4.  ERROR is handled by CATCH block

// EXAMPLE 2:

/*
console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    return response.json();
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);

    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
  });

console.log("b");

*/

// EXAMPLE 3:

/*
const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    const data = response.json();
    return data;
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);

    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return undefined;
  })
  .catch((error) => {
    // level 4
    console.log("level 4 error", error);
  });

  */

// EXAMPLE 4:
/*
const url = `https://api.kanye.rest zzzzsssss/`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    const data = response.json();
    return data;
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);

    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return undefined;
  })
  .catch((error) => {
    // level 4
    console.log("level 4 error", error);
  });

  */

// EXAMPLE 5:

const url = `https://api.kanye.rest zzzzsssss/`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    const data = response.json();
    return data;
  })
  .catch((error) => {
    // level 2
    console.log("level 2 error", error);
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);

    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
    return undefined;
  });

// ------------------ ERROR HANDLING ----------------
