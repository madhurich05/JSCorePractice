function bind(fn, context) { // Bind is a function that takes fn and context
  return function(){ // Bind returns a function
    fn.apply(context); // returns function after applying the context
  }
}
