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
