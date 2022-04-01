/*
4 ways to invoke functions and each serves as a rule to determine what 'this' keyword is referencing

1. Implicit Binding
2. Explicit Binding: Call, Apply, Bind
3. 'new' Binding
4. Default Binding
*/

// Implicit Binding

const Person = {
  name: 'Madhuri',
  greeting() {
    console.log(`Hello ${this.name}`)
  }
}

Person.greeting(); // 'this' keyword refers to Person object

// When fn invoked with dot notation, the object to the left of that dot is what 'this' keyword refers to
------------------------------------------------------------------------------------------------------------------------------------- 
// Explicit Binding : Call(Comma separated args), Apply(Array of arrgs) , Bind
  
 
  // Using Call
  const  Person = {name: 'Madhuri'};
  function greeting() {
     console.log(`Hello ${this.name}`)
  }

greeting.call(Person); 
/* Every function has a built in method 'call' that allows to specify 
   the context with which a function is invoked 
   1. First argument always refers to what 'this' keyword in greeting is referencing to
   2. We can pass multiple arguments that follow the first argument.
   
   */

  function greetingWithHobbies(h1,h2) {
     console.log(`Hi this is ${this.name} and my hobbies are ${h1} and ${h2}`);
  }
greetingWithHobbies.call(Person, 'Gardening', 'Art');


// Using Apply

/* Every function has a builtin method 'apply' that allows to specify 
   the context with which a function is invoked 
   1. First argument always refers to what 'this' keyword in greeting is referencing to
   2. Apply expects array as 2nd argument.
   
   */

greeting.apply(Person);  
greetingWithHobbies.apply(Person, ['Gardening', 'Art']);

// Using Bind
/*
Bind method is similar to call except that instead of invoking fn it returns a fn that you can invoke whenever you wish to
*/

const bindingFn = greetingWithHobbies.bind(Person, 'Gardening', 'Art');
bindingFn();


// Using new

/*
1. We can invoke a function with new keyword, JS under the hood will create a new empty object that 'this' keyword will reference to
2. 'this' will always reference to empty object and properties are added using dot notation
*/

function Person1(name) {  // Constructor Function
  // under the hood this = {}
  this.name = name;  // Add properties to the object using dot notation
}
const p1 = new Person1('Madhuri')
const p2 = new Person1('Ram')
const p3 = new Person1('Yashvi')


// Default binding: If none of the other 3 rules are matched, then JS will default to global scope and set this to window object

function greetMyName() { 
  console.log(`My name is ${this.name}`)
}

//Returns My name is undefined

/*
 Order of Precendence of bindings: new -> Implicit -> Explicit -> Default
*/
-------------------------------------------------------------------------------------------------------------------------------------

  
