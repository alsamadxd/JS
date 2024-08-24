//-------------------JAVASCRIPT----------------------------//

/*

_______________________Destructuring________________________


*/

// 1- Destructuring Arrays

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

// Switching values of Variables

let main = "Pizza";
let secondary = "Burgers";
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Nested Destructuring

const n = [2, 4, [5, 7]];
const [i, , j] = n;
console.log(i, j);

const [l, , [m, k]] = n;
console.log(l, m, k);

// Default Vlaues

// const [p, q, r] = [5, 6];
// console.log(p, q, r);
// it will give 5 6 undefined, undefined bcz r didn't get any value.

const [p = 1, q = 1, r = 1] = [5, 6];
console.log(p, q, r);
// it will give 5 6 1, bcz of default values.
