/*
Currying is a process in functional programming where we transform 
a function with multiple arguments into a sequence of nesting functions 
that take one arg at a time Ex: fn(a,b,c) -> fn(a)(b)(c)

Currying doesn't call a function, it simply transforms it

Why it’s useful ?
Currying helps we avoid passing the same variable again and again.
It helps to create a higher order function
*/

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6


----------------------------------------------------------------------------------

function checkStock(stockID){ 
   //some check code 
   if(err){throw err;} 
 
   return (warehouseID) => { 
      //some check code 
      if(err){throw err;}
      return(stockDeduct)=> { 
        //some check code         
        if(err){throw err;}
         return stockID 
                + ' from ' + warehouseID
                + ' is reduced by ' + stockDeduct;      
      }
   }
}

let orderItem298 = checkStock('FN9382')('SOUTH')(3);

/* Currying lets you effectively detect issues every step of the way in an elegant manner. */
