/*
Memoization is an optimization technique used to speed up the programs by storing the results of expensive function calls 
and returning the cached result when the same inputs occur again 
*/

function once(func) {
    let cache;
    let isAlreadyCached = false;

    return function inner() {

        if (!isAlreadyCached) {
            cache = func(...arguments);   
            isAlreadyCached = true;
        }  
        return cache;
    } 
}

const sayHi = (name) => `hi ${name}`
const sayHiOnce = once(sayHi) // return sayHi

console.log(sayHiOnce('Bob'))  // hi Bob
console.log(sayHiOnce('Bill')) // hi Bob

// const add = (a,b) => a + b
// const addOnce = once(add)

// console.log(addOnce(-4, 4))    // 14
// console.log(addOnce(210, 210)) // 14
