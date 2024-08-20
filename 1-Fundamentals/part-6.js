//-------------------JAVASCRIPT----------------------------//

/*

    Execution Context => It is an environment in which a piece of JS
    is executed, it stores all the necessary information for some 
    code to be executed such as local variable or arguments passed
    into a function. JS code always runs inside an execution context.

    
    GLOBAL Execution Context => There is exactly one global execution
    context , it is the deafault context, created for code that is not
    inside any function.


    #- There is one execution context per function => for each function
    call, a new execution context is created containing all the information
    that is necessary to run exactly that function. Same applies to method.
    #-ALL TOGETHER MAKES THE CALL STACK
    
*/

const naMe = "Jay"; // top level code (i.e. not inside any function)
const firsst = () => {
  // const firsst() is top level code (i.e. not inside any function)
  let a = 1;
  const b = ssecond();
  a += b;
  return a;
};
// function body executed only when called.
function ssecond() {
  // function ssecond() is top level code (i.e. not inside any function)
  var c = 23;
  return c;
}

/*
__________________Inside Execution Context_______________________
        

  1- Variable Environment 
        #- Let, const and var declaration 
        #- function 
        #- arguments object => Contain all the arguments that were passed into the function,
            that the current execution context belongs to.

  2- Scope Chain => Consists of references to variable that are located outside of the current
                    function. To keep track of scope chain, it is stored in each execution
                    context.
                
  3- this keyword => Each context gets it.

  #-    Execution Context belonging to the arrow function do not get their own arguments keyword
        nor do they get the "this" keyword i.e. arrow function do not have the "arguments
        object" and the 'this' keyword, insted they use the argument object, and this keyword
        from their colsest regular function parent.

*/

/*
_______________________Scoping and Scope____________________________


  Scoping => How our program's variable are organised and accessed."where can we access a
            certain variable, and where not?".

  Lexical Scoping => Scoping is controlled by placement of function and blocks in the code.
                    e.g. A function that is written inside another function has access to 
                    the variable of parent function.

  Scope => Space or environment in which a certain variable is declared (variable environment
            in case of functions).

  Scope of a variable => Region of our code where a certain variable can be accessed.

  SCOPE CHAIN => Order in which function are written in code has NOTHING to do with order
                 in which they (function) were called.

*/

/* 
_________________________Global Scope____________________________

    Outside of any function or block.
    Variable declared in global scope are accessible everwhere.
*/
const global = "Global variable";

/* 
_________________________Function Scope____________________________

    Variable are accessible only inside function, NOT OUTSIDE.
    Also called local scope.
*/
function fun() {
  const now = "2024"; // Function scope variable
  return `Its ${now}`;
}

/* 
_________________________Block Scope (ES6)____________________________

    Variable are accessible only inside Block.
    This only applies to let and const variable ONLY.
    Function are also block scoped (only in strict mode).
    Variable declared with VAR end up in the closest function scope.
*/

//    Every scope has access to variable from all outer scopes. Vice-versa NOT ALLOWED.

const a = "Jon";
first();
function first() {
  const b = "hello";
  second();
  function second() {
    const c = "hi";
    third();
  }
}
function third() {
  const c = "hey";
  // console.log(d + c + b + a);
}
/*
    It will give ReferenceError because function third() does not has access to variable
    decalred in second() and first() function, due to scope chain. 
    The third function has access to its own variable and the global variable ONLY.
    
*/

/* 
_________________________Hoisting____________________________

  #- Make some types of variable accessible/usable in the code before they are actually
     declared.
  
  #- Before execution, code is scanned for variable declaration and for each variable, 
     a new property is created in the variable environment object. (i.e. at the creation
    phase of the execution context).


                                ____HOISETED____        ____INITIAL VALUE____      ___SCOPE___

    function declaration            YES                 Actual Function          BLOCK in strict mode 
                                                                                 otherwise fuction

    var variable                    YES                  UNDEFINED               FUNCTION

    let and const variable        NO, technically     <uninitialized> TDZ         BLOCK
                                  yes BUT not in 
                                  practice.

    function expression         DEPENDS IF USING VAR OR LET/CONST, BEHAVES IN SAME WAY AS THESE VARIABLE
    and arrows


  #- Variable declared with let or const and function expression or arrows with let or const cannot be
     used BEFORE declaration because of TEMORAL DEAD ZONE (TDZ).

  #- The movement of function and variable of global scope at the top of the file is known as HOISTING.
*/

/*
___________________________TEMORAL DEAD ZONE (TDZ)_____________________________

*/
const namee = "bob";
if (namee === "bob") {
  //console.log(`Bob is ${job}`); ReferenceError: cannot access 'job' before initialization.
  const age = 30;
  console.log(age);
  const job = "Teacher"; // code before this line is TDZ for job variable
  //console.log(x); ReferenceError: x is not defined.
}

/* 
_______________________WHY TDZ?_____________________________

  Makes it easier to avoid and catch errors, accessing variables before declaration is bad 
  practice and should be avoided.

  Makes const variable actually works.

*/

/*
_______________________WHY HOISTING_________________________

  Using function before actual declaration.

  Var hoisting is just a byproduct.
  
*/
