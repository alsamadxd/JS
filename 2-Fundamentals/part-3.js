//-------------------JAVASCRIPT----------------------------//

/*

_____________________Optional Chaining________________________

    #- ?. ES2020

    #- The ?. operator is like (.) chaining operator, instead of 
    causing an error if a reference is NULLISH (null or undefined)
    it short cicuit with a return value of undefined.

    #- Used when there is a possibility exists that a reference 
    may be missing.

    Syntax:
    
        obj.val?.property
        obj.val?.[expression]
        obj.function?.(arguments)
*/

const adv = {
  name: "Adam",
  cat: {
    name: "Din",
    getAge: {
      dob: "20-2-2020",
      ageNow: 2,
    },
  },
};
const dogName = adv.dog?.name;
const catName = adv.cat?.name;
console.log(dogName);
console.log(catName);

// Nested
console.log(adv.cat?.getAge?.ageNow);
// It first check the cat exists, if yes then it will check
// for getAge, if it also exists then it will check for
// ageNow property.
