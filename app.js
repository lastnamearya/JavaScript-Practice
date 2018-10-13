// Arrow function can't be a constructor function, because they don't have this keyword or "this" won't pass by default in the arguments

const Animal = () => {};

const leo = new Animal();
