// Without arrow function

const Person = {
  firstName: 'Madhuri',
    lastName: 'Chadalapaka',
    greeting(){
        const fullName = function () {
            return `${this.lastName}, ${this.firstName}`
        }
        console.log(`Hello ${fullName()}`);
    }
}
Person.greeting()
// Returns Hello undefined, undefined because 
/* 1. Implicit binding is on the greeting function where this refers to Person object 
   2. console.log(`Hello ${fullName()}`); doesn't have implicit,explicit or new binding, so refers to default/ global binding  --> Window object
   3. Since there is not firstName / lastName in global scope it returns undefined values
*/


// With arrow function

const Person = {
  firstName: 'Madhuri',
    lastName: 'Chadalapaka',
    greeting(){
        const fullName = () => {
            return `${this.lastName}, ${this.firstName}`
        }
        console.log(`Hello ${fullName()}`);
    }
}
Person.greeting()
// Returns Hello Chadalapaka, Madhuri

/* Because 

1. Arrow function doesn't define a 'this' keyword.
2. 'this' keyword in arrow function behaves like any other keyword
3. It is going to lexically resolve enclosing scope that does define this keyword
*/

