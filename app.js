// Constructor OO Pattern

function A(first, second) {
  this.first = first;
  this.second = second;
}

function B(third, first, second) {
  A.call(this, first, second);
  this.third = third;
}

var x = new B(3, 1, 2);

console.log(x);
