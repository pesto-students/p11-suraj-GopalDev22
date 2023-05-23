const person = {
  name: "Bob",
  age: 30,
  email: "bobvent@gmail.com",

  setAge(val) {
    return (this.age = val);
  },
  getAge() {
    return _age;
  },
};

Object.defineProperty(person, "name", {
  writable: false,
});

Object.defineProperty(person, "email", {
  writable: false,
});
let _age = null;
Object.defineProperty(person, "age", {
  set: function (newAge) {
    _age = newAge;
  },
});
// Trying to modify the name and email properties will result in an error
person.name = "Alice"; // TypeError: Cannot assign to read only property 'name'
person.email = "alice@example.com"; // TypeError: Cannot assign to read only property 'email'
console.log(person.age);
console.log(person.name); // "Bob"
console.log(person.email); // "bobvent@gmail.com"
console.log(person.setAge(28));
console.log(person.getAge());

//JavaScript Objects
class Vehicle {
  constructor(make, model, year) {
    (this.make = make), (this.model = model), (this.year = year);
  }

  getdetails() {
    console.log(
      `Vehicle make is ${this.make}, model is ${this.model} and year is ${this.year}`
    );
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  getDetails() {
    console.log(
      `Vehicle make is ${this.make}, model is ${this.model} and year is ${this.year} and has ${this.numDoors} doors.`
    );
  }
}

// creating instance of Vehile and Car.
const vehicleInstance = new Vehicle("Audi", "X5", 2023);
const carInstance = new Car("Benz", "c class", 2022, 4);

// console logging the objects
console.log(vehicleInstance);
console.log(carInstance);

//calling getDetails function
vehicleInstance.getdetails();
carInstance.getDetails();
