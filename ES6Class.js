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
