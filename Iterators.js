const obj = {
[Symbol.iterator]: function() {
let step = 0;
  const iterator = {
    next: function() {
    step++;
      if(step === 1) {
        return {value: 'Hello',done:false};
      } else if (step === 2) {
      return {value: 'World',done:false};
      }
      return {value:undefined,done:true};
    }
  };
  return iterator;
}
}

// for of way
for(const word of obj) {
console.log(word); 
}

// logs 'Hello' 
// 'World


// using symbol iterator

const objIterator = obj[Symbol.iterator]()
objIterator.next() // logs {value: 'Hello', done: false}
objIterator.next() // logs {value: 'World', done: false}
objIterator.next() // logs {value: undefined, done: true}
