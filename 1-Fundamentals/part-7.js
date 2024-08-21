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
