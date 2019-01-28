var a = {
  one: 1,
  two: 2
};

var b = {
  three: 3,
  four: 4
};

b.__proto__ = a;

console.log(b.one);
