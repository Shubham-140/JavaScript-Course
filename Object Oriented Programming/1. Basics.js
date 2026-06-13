// OOP stands for Object Oriented Programming.
// OOP in JavaScript is a programming paradigm that organizes code around objects containing data (properties) and behaviors (methods).

class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

const a1=new Animal("dog");
a1.speak();

// JavaScript is primarily a prototype-based language, and its classes are syntactic sugar over existing prototype based inheritance mechanism. In other words, it provides a familiar syntax for developers coming from other class-based languages (Java, C++ etc). But under the hood, it work somewhat differently (inheritance still happens via prototypes rather than class copies).

// ES6 introduced the class syntax to JavaScript in 2015, providing a cleaner, more familiar way to write OOP code - but prototype based OOP itself existed in JavaScript since its inception in 1995.


// OOP was introduced in JS because:
// 1. Spaghetti code - Encapsulation groups related data+behavior
// 2. Code reuse - Inheritance & composition
// 3. State management - Encapsulation + private fields
// 4. Maintainability - Single Responsibility Principle


// 4 Pillars of OOP

// 1. Encapsulation - Bundle data + methods together, hide internal details
// class BankAccount {
//   #balance = 0;  // hidden
//   deposit(amount) { this.#balance += amount; } // public
// } 

// 2. Abstraction - Show only essential features, hide complexity (like TCP Handshake, DNS Lookup etc)
// fetch("...")

// 3. Inheritance - Child class reuses parent class properties/methods
// class Animal { eat() {} }
// class Dog extends Animal { bark() {} } // Dog inherits eat()

// 4. Polymorphism - Same method name, different behaviors (Method Overriding via inheritance)
// class Animal { speak() { return 'some sound'; } }
// class Dog extends Animal { speak() { return 'Woof'; } }  // Same speak() method → different outputs

// Note: JS doesn't support true overloading like C++, Java. To simulate function overloading, we can use default default parameters
// class Calculator {
//     add(a, b, c = 0) {  // default param simulates overloading
//         return a + b + c
//     }
// }
// const calc = new Calculator()
// calc.add(2, 3)         // 5  ✅
// calc.add(2, 3, 4)      // 9  ✅
// calc.add(2, 3, 4, 22)  // 9  ✅ (4th argument 22 and onwards (if) is ignored since function only expects 3 params)