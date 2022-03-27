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
