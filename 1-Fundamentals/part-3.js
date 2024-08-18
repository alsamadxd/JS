//-------------------JAVASCRIPT----------------------------//

/*

_______________________FUNCTIONS___________________________

    An isolated piece of code that can be used again and again.
    
    function functionName(){
        //body
    }
    
*/

// 1- Funtion DECLARATION

function calcAge(birthYear) {
  return 2024 - birthYear;
}
console.log(calcAge(2005));

// 2- Funtion EXPRESSION

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

console.log(calcAge2(2005));

// 3- Arrow Function => Special form of function expression
//                      i.e. shorter and faster to write.

// Ex-1

const calcAge3 = (birthYear) => 2024 - birthYear;
console.log(calcAge3(2005));

// Ex-2

const calcAge4 = (firstName, birthYear) => {
  return `${firstName} is ${2024 - birthYear} years old`;
};
console.log(calcAge4("Sara", 2005));

/*
______________________This Keyword_____________________

  Special variable that is created for every execution context(every function), takes
  the values of (points to) the "owner" of function in which the this keyword is used.

  this is NOT static, it depends on how the function is called and its value is only
  assigned when function is actually called.
  

  Method                         this = < object that is calling the method >

  Simple function call           this = undefined

  Arrow function                 this = < this of surrounding function (lexical this) >

  Event listener                 this = < DOM element that the handler is attached to >

  new,call,apply,bind


  this does NOT point to function itself, and also NOT its variale environment.

  NEVER EVER USE AN ARROW FUNCTION AS A METHOD

*/

const me = {
  firstName: "John",
  year: 1999,
  calcAge() {
    console.log(this);
    console.log(2047 - this.year);
  },
  greet: () => console.log(`hey ${this.firstName}`), // its an arrow function so it
  // does not have its own 'this' thats why it uses the parents 'this', which is a
  // window object. because window's firstName is undefined so is this.
};

me.greet();
console.log(this.firstName); // points to window objects whose firstName is undefined.
