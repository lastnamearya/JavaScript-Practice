// Here this created in the interpetation pass.

var a = function() {
  console.log(this);
};

// Return undefined ~ rather than the global window object
console.log(a());
