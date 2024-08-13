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
const first = () => {
  // const first() is top level code (i.e. not inside any function)
  let a = 1;
  const b = second();
  a += b;
  return a;
};
// function body executed only when called.
function second() {
  // function second() is top level code (i.e. not inside any function)
  var c = 23;
  return c;
}

/*
__________________Inside Execution Context_______________________
        
*/
