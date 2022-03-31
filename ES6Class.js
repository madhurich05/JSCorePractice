function Person(name) {
  this.name = name;
}

Person.prototype.greeting = function () {
  console.log(`Hello ${this.name}`);
}

Person.prototype.eat = function (food) {
  console.log(`I love eating samosa`);
}


class Programmer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
  code() {
    console.log(`I am codinng in ${this.language}`);
  }
}
------------------------------------------------------------------------------------------------------------------------------------------------------

// ES6 Classes Exercise

class Calculator {
constructor() {
  this.value = 0;
}
  add(num){
  this.value+=num;
    return this;
  }
  
   sub(num){
  this.value-=num;
    return this;
  }
  
   print(){
  console.log(this.value);
  }
}


class ScientificCalculator extends Calculator {
square(){
  this.value*=this.value;
  return this;
}
}


const s = new ScientificCalculator();
s.add(10).sub(5).square().print(); // logs 25
