// Here this created in the interpetation pass.

var a = function() {
  console.log(this);
};

// That's how Bind solves our problem ~ binds this of the function expression to the global window object.

a.bind(this);

// Return undefined ~ rather than the global window object
console.log(a());
