// Object literals are objects created using {} curly brace syntax

// This is an object LITERAL
const person = {
  name: 'Shubham',
  age: 23,
  greet() { console.log('Hi'); }
};

// The `{}` syntax IS the literal notation
// "Literal" = you write the exact value directly in code

// But, When you use Object.create(), new Promise(), or the new keyword with any constructor, you're still creating objects - just they are not object literals
// Eg - 1. const num=new Number(22);
//      2. const promise=new Promise((resolve, reject) => { ... })
//      3. const obj=Object.create(null);