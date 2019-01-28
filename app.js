function First(one, two) {
  this.one = one;
  this.two = two;
}

First.prototype.firstReturn = function() {
  return console.log('Returned by First');
};

function Second(third, fourth) {
  this.third = third;
  this.fourth = fourth;
}

Second.prototype = Object.create(First.prototype);

var x = new Second(3, 4);
