var a = {
  one: 1,
  two: 2
};

// Inheritance using Object.create() ~ Here make sure that property description of the object b is in object with value.

var b = Object.create(a, {
  three: { value: 3 },
  four: { value: 4 }
});

console.log(b.one);
