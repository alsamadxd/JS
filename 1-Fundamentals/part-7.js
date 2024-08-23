//-------------------JAVASCRIPT----------------------------//

/*

______________________Short Circuiting ( && and || )______________________

    We can use any datatype and return any datatype.

    

    1- OR ( || ) => 
    
    In short circuiting using OR ( || ) operator, it checks
    for TRUTHY value, if the first value is true or truthy then it will return
    that value, else it will go to second phase or condition to check for the
    truthy.

    In OR (||) operator, if the first operand (value) is true, then it WON'T
    check the second value, hence called short-circuiting.

    It will return the LAST value if all are FALSY.



*/

console.log(3 || "Hello");
console.log("" || "Hello");
console.log(true || 0);
console.log(undefined || null); // it will give null because undefined is falsy value,
// so the last value is returned.

/*    

    2- AND ( && ) => 
    
    In short circuiting using AND ( && ) operator, it checks
    for TRUTHY value, if any operand (value) is falsy then it won't check
    the other value it just return that false value. 


    In AND ( && ) operator, if the first operand (value) is false, then it WON'T
    check the second value, hence called short-circuiting.

    It will return the LAST value if all are TRUE.



*/

console.log(0 && "hi");
console.log(5 && "hi");
console.log("hi" && 58 && null && "me");

/*

______________The Nullish Coalescing Operator_______________

    It works on nullish value i.e. ( NULL and UNDEFINED ) means false.

*/

let x = 0;
console.log(x ?? 7);
// console.log(y ?? 7); 7 because y is undefined

/*

___Assignment using short circuiting, nullish coalescing operator___

*/

const rest1 = {
  namee: "Capri",
  numGuest: 0,
};

const rest2 = {
  namee: "la piazza",
  owner: "Govani",
};

console.log(rest1);
console.log(rest2);

// 1- OR

console.log("\n---OR---");
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

// if it is falsy then it will return 10 which is the given value in equation.
console.log(rest1);
console.log(rest2);

// 2- NULLISH

console.log("\n---NUllISH---");
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest1);
console.log(rest2);

// 3- AND

console.log("\n---AND---");
rest1.owner &&= "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";

// To assign a value to a variable which is currently truthy.
console.log(rest1);
console.log(rest2);
