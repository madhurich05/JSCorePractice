/*
Memoization is an optimization technique used to speed up the programs by storing the results of expensive function calls 
and returning the cached result when the same inputs occur again 
*/

// Generic memoize function

function memoize (callback) {
  let cache = {};
  
  return function (...args) {
    const key = args.toString();
    
    if(key in cache) {
      console.log('Returning from Cache');
     return cache[key]; 
    }  else {
      const result = callback(...args);
      cache[key] = result;
      return result;
    }    
  }
}


function add(a,b) {
  return a+b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(2,3));  // 5
console.log(memoizedAdd(2,3));

const sayHi = (name) => `hi ${name}`
const sayHiOnce = memoize(sayHi) // return sayHi

console.log(sayHiOnce('Bob'))  // hi Bob
console.log(sayHiOnce('Bob'))

Returning from Cache
hi Bob

console.log(sayHiOnce('Bill')) // hi Bob

