//-------------------JAVASCRIPT----------------------------//

/*  High-Level,
    Prototype Based,
    Object-oriented,
    Multi-paradiagm,
    Interpreted or Just In Time compile,
    Dynamic,
    Single-threaded,
    Garbage-collected Programming Language with First-class function and a non-blocking 
    Event loop concurrency modal.

*/

//      <script src="fileName.js"></script>

/*  
    Dynamic typing => We do not have to manually define the datatype of the value to be
                      stored in a variable, instead the data types are determined 
                      automatically and we can change the type of value a varible holds.

*/

//  To Print On the Console
console.log("hello");

/*
______________Primitive DataTypes______________

    1- Number => 64-bit Floating point, used for decimal and integer.

    2- String => Sequence of character.

    3- Boolean => True/False

    4- Undefined => Empty Value(missing), value taken by the varible
                    which is not yet defined. e.g.-: let a;

    5- Null => Empty Value ( Intentionaly missing ).

    6- Symbol => Value that is unique and cannot be changed.
                 Introduced in ES2015
                 e.g. => const abc=Symbol(description:"dog");

    7- BigInt => Larger integer than the Number type can store.
                 Introduced in ES2015.

*/

//      Let => mutable, can create empty variable.
let a0 = 50;
a0 = "hello"; //allowed

//      const => immutable,cannot create empty variable
//               only primitive values are immutable
const b = 70;
//  b="hello" not allowed

//      Var => used before ES6
var c = "adsf";

/*
_______________Strings___________________
*/
//using quotes
const firstName = "Sam ";
const lastName = "Dumbledore";

// concatenation
const me = "My name is " + firstName + lastName;
console.log(me);

// using Backtick

const aboutMe = `My name is ${firstName}${lastName}`;
console.log(aboutMe);

/*          Type Conversion  

    manually from one type to another.
    e.g. Number(variableName);
    e.g. String(variableName);
    
*/

/*          Type Coercion

    compiler converts from one type to another.

    + converts to String
    -,*,/ converts to Number
    
*/
