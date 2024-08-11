//-------------------JAVASCRIPT----------------------------//

/*

_______________________FUNCTION___________________________

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
