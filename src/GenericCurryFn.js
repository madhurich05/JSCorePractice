// Not working as expected

function generalCurryOne(f) {
  return function currify(...args) {
    if(args.length >= f.length) { // If we have all the args the original function needs
      return f.apply(this, args);   //Use explicit binding 
  } else {
    return function(...newArgs) {
      return currify(this, args.concat(newArgs)); // call currify again after concatinating the args with new args
    }
  }
}
}

 
  function sum(a,b) {
    return a+b;    
  }
  
  let curriedSum = generalCurryOne(sum);
  curriedSum(2,3);
  curriedSum(2)(3);


// this works for 2 args but not working for more args
function generalCurryTwo(f) {
  return function currify(...args) {
    return (args.length >= f.length) ?  f.apply(this, args) : currify.bind(this,...args);
  }
}
