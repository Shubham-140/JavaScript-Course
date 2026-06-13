// ============================================
// JAVASCRIPT OOP - PART 1: Constructor Functions & 'new' Keyword
// For Junior Frontend Interviews (1 YOE)
// ============================================

// JavaScript default behavior is prototypal, meaning if it doesn't find a property/method on the current object, 
// it moves up the prototype chain to parent/grandparent... until it reaches null.

// For example - If we go to browser console and declare an array like arr = [1, 2, 3]
// and if we log/print arr, on expanding it, we see the array prototype having multiple methods
// like map, push, pop, slice etc. And at the end, we get another prototype which is an object this time, 
// having more methods like constructor, valueOf, toString etc.
// This chain continues until the prototype object returns null.

// On expanding prototypes, sometimes the prototype type is an object or sometimes an array.
// That's because almost everything is an object in JavaScript. That's why the prototype of array eventually points to object, 
// and object's prototype returns null if it doesn't find something.
// Similarly, strings follow the same pattern as arrays.
// Hence, the properties that objects have are also accessible by arrays and strings etc (they inherit from objects). 
// Whether some properties are usable or not is a different thing.

// ============================================
// KEY CONCEPT: Functions are Objects
// ============================================

function sum(a, b){
    return a + b;
}

console.log(sum(2, 3));

// Adding a property to a function (because functions are objects in JS)
sum.difference = 17;
console.log(sum.difference); // 17

// Functions get a default 'prototype' property with an empty object
console.log(sum.prototype); // prints {} (empty object)
// This is where methods added via prototype will be stored for instances.

// Note: .prototype property only exists on FUNCTIONS
// Regular objects don't have .prototype, they have .__proto__

// ============================================
// KEY CONCEPT: prototype vs __proto__
// ============================================

// .prototype  → property on FUNCTIONS, blueprint for instances
// .__proto__  → property on OBJECTS, points to their parent prototype
// These are different things! Common interview question 🔥

// Example:
// createUser.prototype → the blueprint object for all createUser instances
// user1.__proto__      → points to createUser.prototype (same object!)

// ============================================
// KEY CONCEPT: The 'this' Keyword
// ============================================

// 'this' refers to the current context/object that is calling the function.

function createUser(username, score){
    this.username = username;
    this.score = score;
}

// Adding a method to the prototype (functions are objects, so this is valid)
createUser.prototype.increment = function(){ 
    this.score++; 
    // We can't just write score++ because we are not giving context.
    // 'this' tells JavaScript which user's score to increase.
}

const user1 = new createUser("Shubham", 292); 
const user2 = new createUser("Viom", 318);

console.log(user1); // createUser { username: 'Shubham', score: 292 }

// ============================================
// INTERVIEW TRAP #1: Forgetting 'new'
// ============================================

function createUserTrap(username){
    this.username = username;
}

const userWithoutNew = createUserTrap("Shubham"); // ❌ forgot 'new'
console.log(userWithoutNew); // undefined

// In browser: window.username becomes "Shubham" - GLOBAL POLLUTION!
// In Node.js: global.username becomes "Shubham" - GLOBAL POLLUTION!

// ✅ Always use 'new' with constructor functions
// ✅ Or use factory functions that return an object explicitly

// ============================================
// INTERVIEW TRAP #2: Prototype methods without 'new'
// ============================================

// Without 'new', the prototype method 'increment' won't be accessible
// const user3 = createUser("Test", 100); // ❌ TypeError: Cannot read properties of undefined

// ============================================
// QUICK REFERENCE: Syntax Sugar
// ============================================

// We don't write myArr.prototype.map()
// Instead we write myArr.map()
// JavaScript provides this syntactic sugar because prototype methods are automatically looked up