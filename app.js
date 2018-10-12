var sayName = function(lang1, lang2, lang3) {
  console.log(
    `Hi my Name is ${this.name} and I know ${lang1}, ${lang2} and ${lang3}`
  );
};

var stacey = {
  name: "Jigyasu",
  age: 25
};

var languages = ["JavaScript", "Ruby", "Python"];

// During .call() this will not binds to the global window like regular function execution

// .apply() is similiar like .call() property but what it does is, it'll automatically going to parse the array for the arguments. We don't have to explicity pass the array index values for function execution.

sayName.apply(stacey, languages);
