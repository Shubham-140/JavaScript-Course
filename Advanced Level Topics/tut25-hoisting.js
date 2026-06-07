// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the compilation phase.

// function hositing

console.log(printName("Shubham")); // will execute the function correctly

function printName(name){
    return `My name is ${name}`;
}







console.log('\n\n\n\n\n\n');






// variable hoisting

console.log(age); // will print undefined beacuse it carries only the declaration and initialization (as undefined) but not the assignment.
var age=22;










// in case of let and const variables only, the variables goes in the state of temporal dead zone (TDZ)
// let and const are hoisted too regardless we get referenceError, basically, their declaration is hoisted but left uninitiliazed (unlike var which was initialized to undefined).
// TDZ is the time period between the declaration and initialisation of let and const variables.

console.log(age); // tdz area
let age=22;




// class based hoisting also has similar behavior as of let and const variables.

const h1=new Human(); //  tdz area again

class Human{

}






// Arrow functions themselves are not hoisted. 
// The variable that stores the arrow function is hoisted according to its declaration type.





// One important discussion to be made:

// console.log(num());

// var num=()=>{
//     return 12;
// }

// Here, we get an error that num is not a function, this is because var is hoisted and initialized to undefined, now since its undefined, so num===undefined, and thus, it tries to execute undefined() which can't be executed, so we get this error.







// JavaScript Execution Context: 2 Phases

/*
1. Memory Creation Phase (Hoisting)
------------------------------------
- var declarations are hoisted and initialized as undefined.
- let and const are hoisted but not initialized, and kept in the Temporal Dead Zone (TDZ).
- Function declarations are fully hoisted (name + body).

2. Execution Phase
--------------------
- Code is executed line-by-line.
- Variables are assigned actual values.
- Functions are invoked.
*/