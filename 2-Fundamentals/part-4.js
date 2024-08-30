//-------------------JAVASCRIPT----------------------------//

/*

_____________________Enhanced Object Literals____________________

    #- Used to group variable from the global scope and form them
    into JS objects. It is the process of restructuring or putting
    back together.

*/

const name = "Abc";
const me = { name };
console.log(me);

/*

    #- We can also create object method with object literal enhancement
    
    #- We can also use 'this' keyword to access the object keys.
    
*/

const namee = "Abc";
const about = function () {
  console.log("I am " + this.namee);
};
const aboutMe = { namee, about };
aboutMe.about();
