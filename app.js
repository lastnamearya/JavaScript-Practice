var a = {
  one: 1,
  two: 2
};

var b = Object.create(a, {
  three: { value: 3 },
  four: { value: 4 }
});

console.log(b.two);

// To check the isPrototypeOf

console.log(a.isPrototypeOf(b));
