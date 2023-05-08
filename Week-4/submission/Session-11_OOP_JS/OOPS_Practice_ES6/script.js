class Vehicle {
  constructor(make, model, year, color) {
    (this.make = make),
      (this.model = model),
      (this.year = year),
      (this.color = color);
  }
  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

// creating subclass Car
class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

// creating subclass ridesharecar
class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

//create instance of above classes
const vehicleInst = new Vehicle("Tata", "Nexon", 2022, "red");
const carInst = new Car("Maruti", "800", 2020, "blue", 5);
const rideInst = new RideShareCar(
  "Benz",
  "V class",
  2023,
  "grey",
  4,
  "Available"
);

console.log(vehicleInst, carInst, rideInst);
//console of vehicle drive
vehicleInst.drive();
