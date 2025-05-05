// Currying in JavaScript is a technique where a function that takes multiple arguments is broken down into a series of functions, each taking one argument at a time.

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    }
}

console.log(add(1)(3)(44));





// There is a method to implement infinite currying, where we dont know how many arguments have been passed

function multiply(a){
    return function(b){
        if(b){
            return multiply(a*b);
        }
        else{
            return a;
        }
    }
}

console.log(multiply(4)(8)(3)(34)());



// Why to use currying
// 1. Reusable code (to avoid same variable again and again)
// 2. More readable code
// 3. Function chaining



// Difference bw currying and partial application
// Currying has the no. of functions which is equal to the no. of arguments passed whereas it is not true in partial allpication.

// Partial application transforms a function into another function with small arity(number of parameters a function takes).