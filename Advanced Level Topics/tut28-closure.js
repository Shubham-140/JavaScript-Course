function outer(){

    let name="Shubham";

    function inner(){
        console.log(name);
    }

    return inner;

}

let ans=outer();
ans();

// Closure is a combination of a function and its lexical environment (the variables from the outer function that the inner function can access).
// Logically, you might expect that ans() should not run because it calls inner(), and the name variable is declared inside outer(). 
// Normally, variables inside a function are deallocated after the function completes. 
// However, due to the concept of closures, the inner function 'remembers' the variables from its outer lexical environment.
// When outer() is called, it returns the inner function, and the 'name' variable is preserved within the closure.
// Therefore, when ans() is called, it still has access to 'name', even though outer() has already finished executing.
// That's why calling ans() successfully prints "Shubham".

// Scope chaining is the process JavaScript uses to look up variables: if a variable is not found in the current scope, it checks the outer (parent) scopes one by one until it either finds the variable or reaches the global scope.

// Scope chain is the order in which JavaScript looks up variables, like first local, then its outer scope and then the global scope

/* Setbacks of closures 
1. Closure holds reference of outer variables, which can cause high memory usage.
2. Its harder to track variables because of their scope using closure.
3. Unexpected Behavior in Loops (eg --> Classic var + closure issue in loops) */