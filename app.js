function add(x, y) {
  return x + y;
}

function addFive(x, addReference) {
  return addReference(5, x);
}

console.log(addFive(10, add));

// High-Order Function

function higherOrderFunction(x, callback) {
  return callback(5, x);
}

// With callbacks, we can delay the executon of a function

$("#btn").on("click", () => console.log("Callbacks are everywhere"));
