function outer() {
 
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  
  return inner
}

let fn = outer();
fn();

/*
Closure: Combination of a function bundled with its lexical environment(references to its surrounding state)
Closures are created everytime a function is created at fn creation time

In other words
  In JS, when we return a function from another function, we are effectively returning a combination of the function along with functions scope chain.
  This will let the function definition to have an associated persistent memory which could hold on to live data between function executions.
  The combination of the function and the scope chain (lexical env) is "Closure"
  
  An inner function has access to variables in the outer function scope even after outer function has finished execution

Application of closures: Memoization, module prattern which provides data privacy, promises etc.,
*/
