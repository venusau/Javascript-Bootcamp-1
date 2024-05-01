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
// 1. Whatever Data or Error we are returing from X level, we will get that data/error in (X+1 (n))th level.
// 2. at(x+1 (n))th level I have to ask a question? can you handle the data or the error, according to that proceed forward.

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

/*
const url = `https://api.kanye.rest/`;
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
  })
  .catch()
  .catch()
  .catch()
  .catch()
  .then()
  .catch();

*/

// ------------------ ERROR HANDLING ----------------

// ------- 1. Multiple Catch  Blocks ----------------

// EXAMPLE 6:
/*
const url = `https://api.kanye.rest asdasdsadsadasda/`;
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
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5", error);
  });
  */

/*
Answer
  level 2 error TypeError: Failed to fetch
  level 3 undefined
  level 4 100
*/

// EXAMPLE 7:

/*
const url = `https://api.kanye.rest/`;

fetch(url) // level 0
  .then((response) => {
    // level 1

    // MOCKING THE ERROR
    throw new Error("this is not a nice error");

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
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5", error);
  });

*/

/*
Answer
level 2 error Error: this is not a nice error

level 3 undefined
 level 4 100
  */

// EXAMPLE 8:

/*
const url = `https://api.kanye.rest/`;

fetch(url) // level 0
  .then((response) => {
    // level 1

    console.log("level 1");
    const data = response.json();

    return data;
  })
  .catch((error) => {
    // level 2
    // MOCKING THE ERROR
    throw new Error("this is not a nice error");
    asdadasdadad;
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
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5", error);
  });

  */

/*
Answer
level 1

level 3 {data}
 level 4 100
  */

// EXAMPLE 9:
/*
const url = `https://api.kanye.rest zzzzzzz/`;

fetch(url) // level 0
  .then((response) => {
    // level 1

    console.log("level 1");
    const data = response.json();

    return data;
  })
  .catch((error) => {
    // level 2
    // MOCKING THE ERROR
    console.log("level 2 error", error);

    throw new Error("this is not a nice error");

  })
  .then((data) => {
    // level 3
    console.log("level 3", data);

    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5", error);
  });

  */

/*
Answer
lvel 5 Error: this is not a nice error
  */

// EXAMPLE 10:

/*
const url = `https://api.kanye.rest/`;

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

    throw new Error("this is not a nice error");

    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5", error);
  });

  */

/*
Answer
level 1
level 3 {data}
lvel 5 Error: this is not a nice error
  */

// -------------- 2. Error Handlers in THEN BLOCK..... ----------

// EXAMPLE 11:
/*
const url = `https://api.kanye.rest zzzz/`;

fetch(url) // level 0
  .then(
    (response) => {
      // level 1

      console.log("level 1");
      const data = response.json();

      return data;
    },
    (error) => {
      console.log("level 1 error ", error);
      return 109;
    }
  )
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
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5 error", error);
  });

  */

/**
   * 
level 1 error  TypeError: Failed to fetch
level 3 109
level 4 100
   */

// EXAMPLE 12:

/*
const url = `https://api.kanye.rest/`;

fetch(url) // level 0
  .then(
    (response) => {
      // level 1
      console.log("level 1");
      throw new Error("Leve 1 error sudden error");
      const data = response.json();
      return data;
    },
    (error) => {
      console.log("level 1 error ", error);
      return 109;
    }
  )
  .catch((error) => {
    // level 2
    console.log("level 2 error", error);
    return 99;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5 error", error);
  });

  

/**
   * 
   * level 1
      script.js:489 level 2 error Error: Leve 1 error sudden error
      level 3 99
      level 4 100
   */

// ------------ UNHANDLED ERRORS -------------
// COnsole I will see RED ERRORS. (Errors are not handled)

// EXAMPLE 13:

const url = `https://api.kanye.rest/`;

fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    throw new Error("Leve 1 error sudden error");
    const data = response.json();
    return data;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
  });

window.addEventListener("unhandledrejection", () => {
  console.log("handling error Globally");

  alert("we are sorry");
});
