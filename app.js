function Donuts(color, size) {
  this.color = color;
  this.size = size;
  // By default it is set to order === 10
  this.order = 10;

  // We can also define methods in Classes
  this.rate = function() {
    return `I order 10 donuts and size is  ${this.size}`;
  }
}

var veganDonuts = new Donuts('pink', 'L');

console.log(veganDonuts.rate())