/*
4 ways to invoke functions and each serves as a rule to determine what 'this' keyword is referencing

1. Implicit Binding
2. Explicit Binding
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


-------------------------------------------------------------------------------------------------------------------------------------

  
