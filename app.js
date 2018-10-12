// window binding

const age = 25;

var sayAge = function() {
  "use strict";
  console.log(this.age);
};

// It'll throw an error to us ~ window binding with 'strict mode'

sayAge();
