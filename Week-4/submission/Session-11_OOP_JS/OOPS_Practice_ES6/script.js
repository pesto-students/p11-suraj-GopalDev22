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

console.log("**** Polymorphism ****");
//Section - 2 Polymorphism

class Shape {
  calculateArea() {
    return radius;
  }
}
class Rectange extends Shape {
  calculateArea(width, height) {
    return width * height;
  }
}
class Triangle extends Shape {
  calculateArea(base, height) {
    return (base * height) / 2;
  }
}
class Circle extends Shape {
  calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}

//creating instance of rectangle, triangle, circle
const rectInstance = new Rectange();
console.log(rectInstance.calculateArea(10, 5));

const triInstance = new Triangle();
console.log(triInstance.calculateArea(3, 6));

const circleInstance = new Circle();
console.log(circleInstance.calculateArea(4));

console.log("**** Abstraction and Encapsulation ****");
//Abstraction and Encapsulation

const balanceMap = new WeakMap();

class BankAccount {
  #accountNumber;
  #accountHolderName;
  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    balanceMap.set(this, balance);
    this.#accountHolderName = accountHolderName;
  }
}

class CheckingAccount extends BankAccount {
  deposit(amount) {
    balanceMap.set(this, balanceMap.get(this) + amount);
  }

  withdraw(amount) {
    balanceMap.set(this, balanceMap.get(this) - amount);
  }

  getBalance() {
    return balanceMap.get(this);
  }
}

class SavingsAccount extends BankAccount {
  deposit(amount) {
    balanceMap.set(this, balanceMap.get(this) + amount);
  }

  withdraw(amount) {
    if (balanceMap.get(this) - amount < 0) {
      console.log("Withdrawal failed: insufficient funds");
    } else {
      balanceMap.set(this, balanceMap.get(this) - amount);
    }
  }

  getBalance() {
    return balanceMap.get(this);
  }
}

//creating instance
const savingInstance = new SavingsAccount("Venu", 100, 27635);
console.log(savingInstance);
savingInstance.deposit(300);
console.log(savingInstance.getBalance());
savingInstance.withdraw(500);
savingInstance.withdraw(200);
console.log(savingInstance.getBalance());
