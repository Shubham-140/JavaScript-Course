// IIFE stands for Immediately Invoked Function Expression.

// It is a function expression that is executed immediately after it is created.

// function greet(){
//     console.log("Hello");
// }

// greet(); // not invoked immediately 

// Now, to invoke immediately, we use a syntax given below

(function greetAgain(){
    console.log("Good Morning");
})();


// Why IIFE? — it creates its own scope, variables inside don't pollute global scope

(function(){
    const password = "secret123";  // safely scoped inside IIFE
})();

console.log(password)  // ❌ ReferenceError — not accessible outside!




// Also, under the hood, a JS file is executed as an IIFE

(function(exports, require, module, __filename, __dirname) {
    // your code
})();