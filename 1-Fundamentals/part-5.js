//-------------------JAVASCRIPT----------------------------//

/*

________________Objects___________________

*/

const me = {
  firstName: "Samuel",
  lastName: "Issac",
  age: 2024 - 2004,
  job: "student",
  friends: ["Adam", "Sara", "Peter"],
};

//  Dot Notation
// we can't use expression in dot notation.
console.log(me.firstName);

// Bracket Notation
console.log(me["lastName"]);
const nameKey = "Name";

console.log(me["first" + nameKey]);
console.log(me["last" + nameKey]);

// TO add New Properties to obeject
// 1- using dot notation
me.location = "Spain";

// 2- using brackets notation
me["twitter"] = "abc@xyz";

console.log(me);

//  Object method => any function that is attached to an object.

const aboutMe = {
  birthyear: 1990,
  Name: "John",
  Job: "Actor",
  friend: ["Samuel", "Sarah", "Ryan"],
  calcAge: function () {
    return 2046 - this.birthyear;
  },
};
console.log(aboutMe.calcAge());

/*

_______________________The for-of Loop______________________


    We can get index in for of loop.
    we can use continue and break too.
    

EX-1=> Print all the item from the menu.

    const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
    for(const i of menu){
      cl(i);
    }


EX-2=> Print all the item from the menu with indexes.

    for(const [i,el] of menu.entries() ){
      cl(`${i+1}: ${el}`);
    }


    #- [i,el] => here we have destructed the array in index and elements.

    #- entries() => it gives index and element/values at that index.

    
*/
