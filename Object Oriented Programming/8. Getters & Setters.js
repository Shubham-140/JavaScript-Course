// Getters and Setters are special methods that allow you to control
// how properties are accessed (get) and modified (set).

class User {
    constructor(name, age){
        this.name = name;
        this._age = age;  // _ convention = intended to be private (not truly private)
    }

    // get — access like a property, not a method (no parentheses)
    get age(){
        return this._age;
    }

    // set — validate before setting
    set age(value){
        if(value < 0 || value > 150){
            console.log("Invalid age!");
            return;
        }
        this._age = value;
    }

    // getter for computed property
    get info(){
        return `${this.name} is ${this._age} years old`;
    }
}

const user1 = new User("Shubham", 23);

console.log(user1.age);       // 23 ✅ — calls getter, looks like property access
user1.age = -5;               // calls setter, "Invalid age!" ✅
user1.age = 25;               // valid, sets _age to 25 ✅
console.log(user1.info);      // "Shubham is 25 years old" ✅

// Without getter/setter — no validation, any value accepted
class UserBasic {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const u = new UserBasic("Shubham", 23);
u.age = -5;       // ❌ no validation!
console.log(u.age) // -5 — wrong but accepted!


// Key points:
// 1. get/set look like property access — no () needed
// 2. Useful for validation, computed properties, hiding internal details
// 3. _ prefix is just a naming convention, not truly private
// 4. getter without setter = read only property





// What happens if you try to set a getter-only property?

class ReadOnly {
    constructor(value) {
        this._value = value;
    }
    
    get value() {
        return this._value;
    }
    // No setter!
}

const ro = new ReadOnly(100);
console.log(ro.value); // 100
ro.value = 200;        // ❌ Doesn't error, but doesn't set! (ignored in non-strict mode)
// In strict mode: TypeError: Cannot set property value