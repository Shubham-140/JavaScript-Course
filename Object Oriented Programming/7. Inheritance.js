// Inheritance allows a child class to reuse properties and methods from a parent class.
// Inheritance in ES6 Classes

class User {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    printUser() {
        console.log(this);
    }

    // static methods belong to class itself, not instances
    static greet(){
        console.log("Hello");
    }
}

// Employee inherits User (syntax for inheritance)
class Employee extends User {   
    constructor(name, username, password, employeeId, role){
        super(name, username, password); // super() calls parent constructor and initializes parent properties
        // super() must be called before using 'this'
        this.employeeId = employeeId;
        this.role = role;
    }

    printRole(){
        console.log(this.role);
    }
}

const user1 = new User("Shubham", "shubham", "Shubham1212");
const employee1 = new Employee("Shubham", "shubham", "Shubham1212", 140, "SDE-1");

// Child class can access parent methods
employee1.printUser(); // ✅ Employee inherited printUser() from User class

// Parent cannot access child methods
// user1.printRole(); // ❌ TypeError: user1.printRole is not a function


User.greet()  // ✅ called on class directly
Employee.greet() // ✅ static methods are also inherited by child classes
// user1.greet()  // ❌ not available on instances

// ============================================

// instanceof Operator

console.log(employee1 === Employee); // false (object vs class, different things)
console.log(employee1 instanceof Employee); // true (employee1 is an instance of Employee)
console.log(employee1 instanceof User); // true (Employee inherits from User, so yes)
console.log(employee1 instanceof Object); // true (everything inherits from Object)

// ============================================

// Method Overriding

class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    greet() {
        console.log("Hello from Child");
    }
}

const child = new Child();
child.greet(); // "Hello from Child" (child's version runs)

// To call parent method inside child:
class ChildWithSuper extends Parent {
    greet() {
        super.greet(); // calls Parent's greet
        console.log("Hello from Child");
    }
}

const child2 = new ChildWithSuper();
child2.greet(); 
// "Hello from Parent"
// "Hello from Child"

// ============================================

// Important Rules for Inheritance

// 1. Must call super() in child constructor before using 'this'
// 2. super() calls the parent constructor
// 3. Child inherits all parent methods
// 4. Parent cannot access child methods
// 5. instanceof checks the entire inheritance chain

// ============================================

// instanceof checks the entire prototype chain
console.log(employee1 instanceof Employee); // true (direct)
console.log(employee1 instanceof User);     // true (parent)
console.log(employee1 instanceof Object);   // true (grandparent)