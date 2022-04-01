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
