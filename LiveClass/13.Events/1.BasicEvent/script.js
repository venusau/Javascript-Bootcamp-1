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


buttonElement.addEventListener("click", () => {
    console.log("clicked ME!!!")
})

// buttonElement.addEventListener("mouseover", () => {
//     console.log("Mouse over");
//     const headingElement = document.getElementById("heading");
//     headingElement.innerText ="wow Hovering mouse enter"
// })


