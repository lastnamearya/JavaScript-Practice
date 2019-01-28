// Can Bind directly only with Function Expressions

var sayHello = function(last_name) {
  console.log('Hello ' + this + ' ' + last_name);
}.bind('Asim');
sayHello('Hussain');
