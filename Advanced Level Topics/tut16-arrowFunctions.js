const addNums=(num1,num2)=>{          // explicit return 
    return num1+num2;
}

const getProd=(num1,num2)=>num1*num2; // implicit return

const subNums=(num1,num2)=>(num1-num2); // also a way to return implicitly, and is used to return objects

// given is the example
const getUserData=()=>({naam:"Shubham"});

console.log(addNums(6,3));
console.log(getProd(6,3));
console.log(subNums(6,3));
console.log(getUserData());


// There are some differences bw arrow function and regular functions

// | Feature                        | Arrow Function                               | Regular Function                             |
// |--------------------------------|----------------------------------------------|----------------------------------------------|
// | Syntax                         | Concise: `const func = (param) => {}`        | Traditional: `function func(param) {}`       |
// | `this` Binding                 | Lexical `this` (inherits from context)       | Dynamic `this` (based on caller)             |
// | Constructors (`new`)           | Cannot be used as constructor                | Can be used as constructor                   |
// | Implicit Return                | Single expression implicitly returned        | Must explicitly return values                |
// | Hoisting                       | Not hoisted                                  | Hoisted                                      |
// | Named vs Anonymous             | Can be names or anonymous                    | Can be named or anonymous                    |
// | Performance                    | Faster due to no `this` rebinding            | Slightly slower due to dynamic binding       |
