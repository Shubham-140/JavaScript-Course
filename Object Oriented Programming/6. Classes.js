// Classes were introduced in ES6 (2015)
// They provide a cleaner syntax for creating objects and handling inheritance

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

const user1 = new User("Shubham", "shubham", "Shubham1212");
user1.printUser();

// As we know, behind the scenes, classes use functions to initialize objects 
// and .prototype is used for defining methods like printUser()

// The above class is equivalent to this constructor function:

function UserFunction(name, username, password) {
    this.name = name;
    this.username = username;
    this.password = password;
}

UserFunction.prototype.printUser = function() {
    console.log(this);
}

const user2 = new UserFunction("Shubham", "shubham", "Shubham1212");
user2.printUser();

// Both work exactly the same way!
// Class is just cleaner syntax (syntactic sugar) over prototype-based inheritance



// class methods don't show up in for...in loops
for(let key in user1){
    console.log(key)  // only shows name, username, password — NOT printUser!
}



User.greet()  // ✅ called on class directly
// user1.greet()  // ❌ not available on instances