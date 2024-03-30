// POSITION
/*
    5 Different types of positions 

    1. Static : By Default
    2. Relative 
    3. Absolute
    4. Fixed
    5. Sticky.


    With Position Properties ( Except Static ) We have Attirbutes that goes with that
    left, right, top, bottom, z-index


    Any Element that We create its position by Default is STATIC.

*/

// NOTE: TO USE ABSOLUTE and RELATIVE WE NEED PARENT CONTAINER TO HAVE NON STATIC POSITION (position: relative;)
// NOTE: If there is no parent with the NON STATIC POSITION then BODY WILL BE THE REFERENCE.
/*
    1. ABSOLUTE

    -> Aloows me to place ELEMENT EXACTLY WHERE WE WANT (MOVE AROUND THIS ELEMENT)
    -> POSITIONING attributes to set the location (left, right, top, bottom, z-index)

    -> IMPORTANT ***  whatever POSITIONING attributes we are giving this position will be relative to PARENT (Relative or absolute) from it s position

    -> what happens is that Our element will be removed from the Flow of the page, 
    -> other Elements WILL NOT BE AFFECTED WITH THIS

    // -> Position will be 

    -> Positions taken by the elements following will shift up.


*/

/*
    2. RELATIVE

    -> Relative to original Position on the page 
    // POSITIONING attributes WORK HERE  (left, top , right, bottom, z-index);

    // It is taking ITS OWN STATIC POSITION AS A RELATIVE POISTION from there it will try to position.



*/
