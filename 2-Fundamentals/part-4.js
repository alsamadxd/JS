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

/*

    #- When defining object methods, it is no longer necessary to use the 
    funtion keyword.
    
*/

// before
const a1 = {
  name: "ohio",
  age: 25,
  about: function () {
    console.log("My name is " + this.name + " and age is " + this.age);
  },
};
a1.about();

// After
const a2 = {
  name: "neio",
  age: 19,
  about() {
    console.log("My name is " + this.name + " and age is " + this.age);
  },
};
a2.about();
