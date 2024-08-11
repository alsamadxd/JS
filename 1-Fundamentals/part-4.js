//-------------------JAVASCRIPT----------------------------//

/*

_____________________ARRAYS________________________

    It is a Data Structure and it is mutable.
    Both Homogeneous and Heterogeneous Collection. 
    Indexing starts from zero.
    We can pass the functions too in the array.

    * Array declaration :-

        // using barackets
        const about=['Jim',22,'Brunei'];

        // using new keyword
        const about = new Array('Jim',22,'Brunei');

    * Get Elements From Array

        // using brackets
        console.log(about[0]); // Jim
        console.log(about[2]); // Brunei

        // using at method
        console.log(about.at(0)); // Jim
        console.log(about.at(0)); // Brunei
*/

// Empty array
const arr = [];

// Print elements
const about = ["Jim", 22, "Brunei"];
console.log(about[0]);
console.log(about.at(0));

// all elements
console.log(about);

// Mutation => we can mutate the array
about[0] = "Sam";
console.log(about);

// Length property => to get the length of an array
//                    i.e, no. of elements.

console.log(`length = ${about.length}`);

//
// We can pass the functions too in the array.
//
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const year = [1990, 1998, 2007];
const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2])];
console.log(ages);

/*
________________Array Methods__________________

*/
/*
            ( Mutating Methods ) 
            
*/

// 1- push() => adds a new elements at the end of array.
//              It also returns the new length of array.
console.log("\n--push()--");
const len = about.push("Student");
console.log(about, "\nlength = " + len);

// 2- unshift() => adds a new elements at the begining of array.
//                 It also returns the new length of array.
console.log("\n--unshift()--");
const newlen = about.unshift("Coder");
console.log(about, "\nlength = " + newlen);

// 3- pop() => It removes the last elements of array.
//             It also returns the removed element.
console.log("\n--pop()--");
console.log(about.pop());
console.log(about);

// 4- shift() => It removes the begining element of array.
//               It also returns the removed element.
console.log("\n--shift()--");
console.log(about.shift());
console.log(about);

let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ["j", "i", "h", "g", "f"];

// 5- reverse() => It reverse the original array and return them.
console.log("\n--reverse()--");
console.log(arr2.reverse());
console.log(arr2);

/*

( Non-mutating Methods )

*/

// 6- indexOf() => It gives the index of a particualar element.
console.log("\n--indexOf()--");
console.log(about.indexOf(22));

// 7- includes() => It checks for present or not, and follows the
//                  strict equality. It gives true or false only.
console.log("\n--includes()--");
console.log(about.includes("sam"));
console.log(about.includes("Sam"));
console.log(about.includes("Dubai"));

// 8- concat() => It adds two or more arrays and gives that copy.
console.log("\n--concat()--");
let letters = arr1.concat(arr2);
console.log(letters);
const arr3 = [4, 3, 7, 5];
letters = arr1.concat(arr3, arr2);
console.log("Three Arrays = " + letters);
console.log(...arr1, ...arr2);
