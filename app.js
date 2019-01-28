function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
}

var things = [1, 2, 3, 4, 5];

// We have to pass null as the first argument.
sum.apply(null, things);
