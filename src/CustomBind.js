function bind(fn, context) { // Bind is a function that takes fn and context
  return function(){ // Bind returns a function
    fn.apply(context); // returns function after applying the context
  }
}


// Bind method with arguments

function bind(fn, context) { // Bind is a function that takes fn and context
  return function(){ // Bind returns a function
    fn.apply(context,[...arguments]); // returns function after applying the context
  }
}


// Try the custom bind

const Person = {
  name: 'Madhuri'  
}

function greeting(lastName) {
    console.log(`Hello ${this.name} ${lastName}`)
  }

const boundFn = bind(greeting, Person); // Using Bind with arguments function

boundFn('Chadalapaka')
//Hello Madhuri Chadalapaka
