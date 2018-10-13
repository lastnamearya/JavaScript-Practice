function Animal(name, energy) {
  if (this instanceof Animal === false) {
    console.log("Forget to call Animal with the new keyword");
  }

  this.name = name;
  this.energy = energy;
}

const leo = Animal("Leo", 7);
