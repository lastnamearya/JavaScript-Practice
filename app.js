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

sayName.call(stacey, languages[0], languages[1], languages[2]);
