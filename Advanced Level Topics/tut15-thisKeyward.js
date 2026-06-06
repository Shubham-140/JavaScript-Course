const coder={
    naam:"KillerCoder",
    "problems solved":600,
    platform:["leetcode","interviewBit","GFG"],
    "interviews given":23,
    company:"can't disclose",
    ctc:null,

    greet: function(){
        console.log(`Hello ${this.naam}, Welcome to ${this.platform[0]}`);
        console.log(this);
    }
}

coder.greet();
coder.naam="crazyCoder";
console.log(coder.naam);
console.log(this);



// 'This' refers to the object that is currently calling the function. It changes depending on where and how its used.



// 'this' keyword in browser vs node environment

// In the browser (global scope), this behaves as window object, whereas in Node environment, this refers to empty object if it doesn't has a parent 
// console.log(this) refers to {} in node environment
// because in node environment, js file is wrapped inside the function (IIFE) below 

// (function(exports, require, module, __filename, __dirname) {

//      Your code here (the original js code we write in node compiler)

// })();
// now, 'this' refers to module.exports which refers to '{}' initially.





// 'this' keyword in arrow functions
// this keyword typically refers to surrounding scope, so mostly we would get {} (from module.exports) if there's no regular function as parent but not its not the case everytime like below eg 

// const employee={
//     name:"Shubham",
//     age:23, 
//     getAge: function(){
//         const displayAge=()=>{
//             console.log(this.name);
//         }
//         displayAge();
//     }
// }

// employee.getAge();

// here, arrow function doesn't have its own this — it inherits this from the nearest regular function scope, which here is getAge, and getAge's this is employee
// thus, we can say that the this of regular function acts as a bridge
// i.e.,   this (arrow) ---> this (regular) ---> object  =======> so technically,   this(arrow) ---> object


// Below is the differences of 'this' for regular and arrow function are given below

// | Parameter                 | Regular Function                      | Arrow Function                           |
// |---------------------------|---------------------------------------|------------------------------------------|
// | How `this` is defined     | Dynamically (based on caller)         | Lexically (from surrounding scope)       |
// | Own `this`                | Yes                                   | No                                       |
// | In object methods         | Refers to the object                  | Inherits from surrounding scope          |