//-------------------JAVASCRIPT----------------------------//

/*___________________Paradigm___________________

    An approach and mindset of structuring code, which will direct your coding style
    and technique.

    Types:

    1- Procedural Programming
    2- Object Oriented Programmming
    3- Functional Programming
*/

/*
    Transpiling Or Polyfilling => It is a process used to convert ES6 code to ES5.
                                  It is done only when the app is developed, so 
                                  that the user who are using the old browser can 
                                  use that app.

*/

/*

    First-class Function => function are treated as varibles, we can pass them into
                            other funtion, and return them from function.
    
    Dynamic => Type of variable can easily be changed.
*/

/*  
    Expression => A piece of code that produces a value 
*/
5 + 7;
true;
/*  
    Statement => A bigger piece of code does not produces a value on itself.
*/
if (15 > 10) {
  const a = "15 is greater than 10";
}

/*_______________Falsy Value___________________

    When we convert these values to boolean gives false.

    1- 0  (zero)
    2- "" (empty sting)
    3- undefined 
    4- Null
    5- NaN (Not a Number)
    
*/

/*______________Equality Operator_______________

    1- == : It is used to check if two values are equal or 
            not. It performs Type Coersion.
          
    2- === : Strict equality operator, checks 2 values are
             equal or not, it does not perform Type Coersion.

    3- != : Loose inequality, performs Type Coersion.

    4- !== : Strict inequality, does not perform Type Coersion.
*/

/*
________Codition using Ternary Operator________

    Conditon ? True Value : False Value

    when the coditio is true then it will return true value
    else false value.
*/
const age = 15;
age > 18 ? console.log("You can Vote") : console.log("You are a minor");

// For Loop

for (let i = 1; i <= 5; i++) {
  console.log(`Hello ${i}`);
}

// While Loop

let x = 5;
while (x > 0) {
  console.log(x);
  x--;
}
