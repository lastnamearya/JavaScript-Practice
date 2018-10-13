function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

Animal.prototype.bark = function() {
  console.log("Fuck You!!");
};

function Dog(name, energy, breed) {
  Animal.call(this, name, energy);
  this.breed = breed;
}

const charlie = new Dog("Charlie", 10, "Goldendoodle");

// My Inheritance Approach using dunder proto
// charlie.__proto__.__proto__ = Animal.prototype;

// Another Way to do directly on the constructor function's prototype
Dog.prototype.__proto__ = Animal.prototype;
