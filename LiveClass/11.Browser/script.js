// Things we have noticed
// 1. when we have more tabs on chrome, it takes more space in RAM.
// 2. RAM only STORES KEY VALUE PAR ( RAM likes to store OBJECTS).

// We know that when we create a new TAB a new WINDOW (glbal OBJECT) is created.

// A BROWSER TAB CONSISTS of
/*
  1. DOM: Document object model (responsible for the view / html)
  2. JS: responsible for logic (math and Functions).
  3. BOM Browser Object models -> it is collection of functions provided by the browser 
  like localStorage.

*/


//-----------------  DOM TREE --------------------

/*
  Tree Representation of your HTML.
  DOM VISUALIZER: https://bioub.github.io/dom-visualizer/.


  Question: WHy tree format of DOM ? 
  ANSWER: So that we can store Relationship.


  TYPE OF NODE: 
  1. Element Node - (h1, li, ul, body, HTML, meta, Head)
  2. Text Node - (Real Text and blank Space)
  3. Comment Node: - (Comments inside the HTML)
*/

// CRUD -> Creation , Reading, update, Deleting


// ---------------------- SELECTORS (get the element, READING) ---------

/*
// 1. getElementById. (VERY VERY FAST )

const headingElement = document.getElementById("heading");
console.dir(headingElement) // prints key value pair 

// 2. getElementsByTagName

const headingElementList = document.getElementsByTagName("h1");
// console.log(headingElementList)

// 3. getElementsByClassName

const cricketClassElement = document.getElementsByClassName("cricket");
// console.log(cricketClassElement)


// CSS SELECTORS  (VVERY VERY SLOW)

// 4. querySelector -> it takes a css selector and gives back Single top most element 

// const divCOntainerElement = document.querySelector("body > div")
const divCOntainerElement = document.querySelector("#container")
// console.dir(divCOntainerElement)


// 5. querySelectorAll ->  it takes a css selector and gives back List of Elements
const divListCOntianerElement = document.querySelectorAll("body > div");
// console.log(divListCOntianerElement);



// ----------------------- EDITING (Update) -----------------------

/*
const divContainerElement = document.getElementById("container");
// console.log(divContainerElement)
console.dir(divContainerElement);


// -------- TEXT --------

// 1. innerHtml ->  DANGEROUS; DO NOT USE THIS DIRECTLY
// divContainerElement.innerHTML = `<h1><u><i>heello I am a pragraph for Cricket</i></u><h1>`


// 2. innerText -> the Format is Preserverd.

// divContainerElement.innerText = `heello I am a pragraph for Cricke 
// 2nd line 

// 3 rd line    4th secntenx

// `;


// 3. textContent -> the FORMATTING IS Not PRESERVED
// divContainerElement.textContent = `heello I am a pragraph for Cricke 
// 2nd line 

// 3 rd line    4th secntenx

// `;


// ------------ HANDLE STYLES -----


// 4. style

// divContainerElement.style.backgroundColor = "yellow"

// 5. ClassName or ClassList -> Element Class

// divContainerElement.classList.add("red");
// divContainerElement.className = "cricket green"

*/

//  -------------------------- Deleting ---------------------

/*
let containerElement = document.getElementById("container");

// containerElement = null // THIS IS just chainging the reference of containerElement.

// containerElement.remove();

*/


// ------------------------- CREATE AN ELEMENT ------------------

/*

  1. Create the Element 
  2. Edit the element

  3. Attach the element to the DOM



// 1. Crete an element.

// Step 1
const divContainerNewElement = document.createElement("div");

// step 2
divContainerNewElement.innerText = `Hey there I am Created`
divContainerNewElement.classList.add("red")

// step 3

// const bodyElement = document.body;
// bodyElement.append(divContainerNewElement)

const divContianer = document.getElementById("container")
// divContianer.append(divContainerNewElement);
// divContianer.before(divContainerNewElement);
// divContianer.after(divContainerNewElement);

*/


// QUESTION: You have to add People inside the list.

// WAY1 -> append 
/*
const listElemet = document.getElementById("list");


const utkarshElement  = document.createElement("li"); // <li> </li>
utkarshElement.innerText = "Utkarsh" // <li>Utkarsh</li>

const animeshElement  = document.createElement("li"); // <li> </li>
animeshElement.innerText = "animesh" // <li>Animesh</li>


listElemet.append(animeshElement);
listElemet.append(utkarshElement);
*/



// WAY2 -> innerHtml
// const listElemet = document.getElementById("list");
// console.dir(listElemet);
// listElemet.innerHTML +=  `<li>Animesh1</li>\n` + `<li>Utkarsh1</li>\n`;



// --------------------- WAYS OF INSERTION ----------------
/*
const listElemet = document.getElementById("list");

// 1. APPEND 
const zebraStudentElement = document.createElement("li")
zebraStudentElement.innerText = "Zebra"

listElemet.append(zebraStudentElement);


// 2. Prepend

const zeroStudentElement = document.createElement("li")
zeroStudentElement.innerText = "Zero 0"

listElemet.prepend(zeroStudentElement);


// 3. After

const footerElement = document.createElement("footer")
footerElement.innerText = "END OF LIST";

listElemet.after(footerElement)

// 4. Before

const headerElement = document.createElement("header")
headerElement.innerText = "Start of the List of Students";

listElemet.before(headerElement)

*/


// TODO:  READ ABOUT : insertAdjacentHTML 
// https://javascript.info/modifying-document





// --------------------------- Performance. -------------------

// -----  PROBLEM STATEMNT: 


const listElemet = document.getElementById("list");

const studentList = ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 
'Patricia Lebsack', 'Chelsey Dietrich', 
'Mrs. Dennis Schulist', 'Kurtis Weissnat', 
'Nicholas Runolfsdottir V', 'Glenna Reichert', 
'Clementina DuBuque']

/*

for(let i=0; i<studentList.length;i++){
  const studentName = studentList[i];

  const studentElement = document.createElement("li")
  studentElement.innerText = studentName;

  listElemet.append(studentElement)

}

// FLAW is that we are chaning the DOM TREE 10 TIMES 
// There will be Reflow and Repaint For 10 Times. (VV EXPENSIVE).

*/


// ----  SOLUTION 
// FRAGMENTS 


const fakeFragmentNode = new DocumentFragment();

for(let i=0; i<studentList.length;i++){
  const studentName = studentList[i];

  const studentElement = document.createElement("li")
  studentElement.innerText = studentName;

  fakeFragmentNode.append(studentElement)

}

// listElemet.append(fakeFragmentNode);

// const obj = {

// }

// We are doing Exxpensive Stuff - 1 TIme 






