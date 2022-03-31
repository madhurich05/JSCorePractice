function Person(name) {
  this.name = name;
}

Person.prototype.greeting = function () {
  console.log(`Hello ${this.name}`);
}

Person.prototype.eat = function (food) {
  console.log(`I love eating samosa`);
}


<*------- Prototypal Inheritance ---*/

function Programmer (name, language) {
Person.call(this, name);
  this.language = language; 
}

Programmer.prototype = Object.create(Person.prototype);

Programmer.prototype.code = function () {
console.log(`I am proficient in ${this.language}`);
}

Programmer.prototype.constructor = Programmer;


const madhu = new Programmer('Madhuri', 'ReactJS');
console.log(madhu.language); // ReactJS
madhu.greeting(); // Hello Madhuri
madhu.code(); // I am proficient in ReactJS
