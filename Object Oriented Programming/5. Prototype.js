// ============================================
// JAVASCRIPT OOP - PART 2: Prototypes & Inheritance
// For Junior Frontend Interviews (1 YOE)
// ============================================

// DEFINITION: A prototype is an object from which other objects inherit properties and methods

// ============================================
// KEY CONCEPT: Prototype Chain
// ============================================

const arr = [1, 2, 3];
const user = {
    name: "Shubham"
}

// Adding a method to Object.prototype (top level hierarchy)
Object.prototype.sing = function(){ 
    console.log("Twinkle Twinkle little star");
}

user.sing(); // ✅ sing() method added to all objects, hence user object can access it
arr.sing();  // ✅ since array is also an object, it can also access this method

// ============================================
// KEY CONCEPT: Parent vs Child Inheritance
// ============================================

Array.prototype.ride = function(){
    console.log("Vroom Vroom");
}

arr.ride(); // ✅ ride() method is available for all arrays

// user.ride(); // ❌ ERROR: user.ride is not a function

// REASON: A child inherits from its parent, but a parent does NOT inherit from its child.
// Array inherits from Object, so Array has Object's methods + its own.
// Object does NOT have Array's methods.

// Visual: Object (parent) ← Array (child)
// Array has: Object's methods + Array's own methods
// Object has: Only Object's methods (not Array's)

// ============================================
// KEY CONCEPT: Manual Inheritance (Pre-ES6)
// ============================================

// Before ES6 classes, we used to create objects and inherit like this:

const user1 = { 
    name: "Shubham",
    email: "shubham@gmail.com"
}

const employee = {
    empId: 140,
    __proto__: user1 // employee inherits properties/methods of user1 (__proto__ is deprecated)
}

console.log(employee.name); // "Shubham" (inherited from user1)

// ============================================
// KEY CONCEPT: Modern Way to Set Prototype
// ============================================

// ❌ Deprecated way (avoid):
// user.__proto__ = arr;

// ✅ Modern alternatives:
Object.setPrototypeOf(user, arr);  // set prototype after creation
// Object.create(user1)            // create NEW object with user1 as prototype

Object.setPrototypeOf(user, arr); // first arg = child, second arg = parent
user.ride(); // "Vroom Vroom" ✅

// ============================================
// KEY CONCEPT: ES6 Classes are Syntactic Sugar
// ============================================

// The 'extends' keyword in classes uses prototypes under the hood
// Example:
// class Dog extends Animal { }
// This is equivalent to:
// Dog.prototype = Object.create(Animal.prototype)

// ============================================
// KEY CONCEPT: hasOwnProperty
// ============================================

const person = { name: "Shubham" }
Object.prototype.sing = function(){ console.log("singing") }

console.log(person.hasOwnProperty('name'))  // true  ✅ own property
console.log(person.hasOwnProperty('sing'))  // false ✅ inherited, not own

// ============================================
// QUICK REFERENCE: Important Prototype Methods
// ============================================

// Object.getPrototypeOf(obj)          - Gets the prototype of an object
// Object.setPrototypeOf(obj, proto)   - Sets the prototype (modern way)
// Object.create(proto)                - Creates new object with proto as prototype
// obj.hasOwnProperty('prop')          - Checks if property belongs to object itself (not prototype)