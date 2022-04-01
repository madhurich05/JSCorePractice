const a=10;
function scope() {
const b = 20;

function inner() {
  const c = 30;
  console.log(a,b,c);
}

inner();
}

scope()

// scope() returns 10 20 30

/*
1. Lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available
2. In case of nested function, the JS engine looks for the innermost function and moves outward until it reaches global scope.
3. Nested functions have access to variables declared in their scope as well as the variables declared in outer scope.
*/
