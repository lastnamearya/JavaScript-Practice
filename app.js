// Here this created in the interpetation pass.

// That's how Bind solves our problem ~ binds this of the function expression to the global window object.

// We can directly bind this after the function expression.

var a = function() {
  console.log(this);
}.bind(this);

// Return undefined ~ rather than the global window object
console.log(a());
