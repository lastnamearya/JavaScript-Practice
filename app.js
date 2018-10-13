// Private Class Fields ~ Babel plugin-transform-class-properties

class Car {
  #milesDriven = 0;

  drive(distance) {
    #milesDriven += distance;
  }

  getMilesDriven() {
    return #milesDriven;
  }
}

const tesla = new Car();
tesla.drive(10);

console.log(tesla.#milesDriven);
