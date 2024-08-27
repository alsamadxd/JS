//-------------------JAVASCRIPT----------------------------//

/*

____________________The SPREAD Operator_____________________

    #- Unpack the array

    #- Expands

    #- Right side of the equal sign

    #- It only works on ITERABLE i.e. array, string, map, and
       sets. 

    #- NOT OBJECTS beacuse when we copy the nested objects using
       spread, it makes a shallow copy i.e. pointing to same
       memory address.


*/

const arr = [2, 4, 6];
const newArr = [1, ...arr, 7, 8];
console.log(newArr);

// Copy Array
const array = [...newArr];
console.log(array);

// Join 2 arrays
const arrayJoint = [...arr, ...newArr];
console.log(arrayJoint);

/*

____________________The REST Operator_____________________


    #- Left side

    #- Compressed

    #- It should be at last position and there is only one
       rest in any destructing.


*/

const [a, b, ...others] = [1, 2, 4, 5, 6, 7, 8, 9];
console.log(a, b, others);

// Using Both the Operator

const add = function (...num) {
  let sum = 0;
  for (const i of num) {
    sum += i;
  }
  console.log(sum);
};
const x = [23, 5, 75, 8];
add(2, 4);
add(2, 4, 56);
add(...x);
