class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am from ${this.nationality}.`;
  }
}
class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return `I am studying ${this.subject}`;
  }
}

const Person1 = new Person("John", 25, "male", "American");
const Person2 = new Person("Jane", 30, "female", "Canadian");
const Person3 = new Person("Bob", 20, "male", "Australian");
const Student1 = new Student(
  "Sarah",
  18,
  "female",
  "British",
  "Computer Science"
);
console.log(`Person 1 Instance: ${Person1.introduce()}`);
console.log(`Person 2 Instance: ${Person2.introduce()}`);
console.log(`Person 3 Instance: ${Person3.introduce()}`);
console.log(`Student 1 Instance: ${Student1.introduce()} ${Student1.study()}`);
