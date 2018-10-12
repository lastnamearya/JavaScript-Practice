var sayName = function() {
  console.log("Hi My name is " + this.name);
};

var name = "Jigyasu";

sayName.call();
