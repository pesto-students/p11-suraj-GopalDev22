// Define the Calculator class
class Calculator {
  // Define the add method
  add(num1, num2) {
    return num1 + num2;
  }

  // Define the subtract method
  subtract(num1, num2) {
    return num1 - num2;
  }

  // Define the multiply method
  multiply(num1, num2) {
    return num1 * num2;
  }

  // Define the divide method
  divide(num1, num2) {
    return num1 / num2;
  }
}

// Define the ScientificCalculator class, which extends the Calculator class
class ScientificCalculator extends Calculator {
  // Define the square method
  square(num) {
    return num * num;
  }

  // Define the cube method
  cube(num) {
    return num * num * num;
  }

  // Define the power method
  power(num, exponent) {
    return Math.pow(num, exponent);
  }
}

// Create an instance of the ScientificCalculator class
const sciCalc = new ScientificCalculator();

// Create an instance of the Calculator class
const cal = new Calculator();

// Using the "call" method, invoke the "add" method of the Calculator class with arguments 10 and 5
const sum = Calculator.prototype.add.call(cal, 10, 5);
console.log(sum);

// Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5
const diff = Calculator.prototype.subtract.apply(cal, [10, 5]);
console.log(diff);

// Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result. Bind the "multiplyByTwo" method to the instance of the ScientificCalculator class.
const multiplyByTwo = Calculator.prototype.multiply.bind(sciCalc, 2);
console.log(multiplyByTwo(5));

// Using the "bind" method, create a new method named "powerOfThree" that raises a number to the power of 3 and returns the result. Bind the "powerOfThree" method to the instance of the ScientificCalculator class.
const powerOfThree = ScientificCalculator.prototype.power.bind(sciCalc, 3);
console.log(powerOfThree(2));
