// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the compilation phase.

// function hositing

console.log(printName("Shubham")); // will execute the function correctly

function printName(name){
    return `My name is ${name}`;
}







console.log('\n\n\n\n\n\n');






// variable hoisting

console.log(age); // will print undefined beacuse it carries only the declaration not the value initialization
var age=22;












// in case of let and const variables only, the variables goes in the state of temporal dead zone (TDZ)
// TDZ is the time period between the declaration and initialisation of let and const variables.

console.log(age); // tdz area
let age=22;

// // class based hoisting is also not possible

const h1=new Human(); //  tdz area again

class Human{

}







// JavaScript Execution Context: 2 Phases

/*
1. Memory Creation Phase (Hoisting)
------------------------------------
- var declarations are hoisted and initialized as undefined.
- let and const are hoisted but kept in the Temporal Dead Zone (TDZ).
- Function declarations are fully hoisted (name + body).

2. Execution Phase
--------------------
- Code is executed line-by-line.
- Variables are assigned actual values.
- Functions are invoked.
*/