// Parameters will remove in ES6 from class instantiation

class Donuts{
  constructor(color, size){
    this.color = color;
    this.size = size;
    this.order = 10;
    this.location = 'delhi';
  }
  orderBudget(location = 'paris') {
    this.location = location;
    return `I m from order ${this.order}`;
  }
}

var veganDonuts = new Donuts('blue', 's');

console.log(veganDonuts.location);
console.log(veganDonuts.orderBudget());
console.log(veganDonuts.location);