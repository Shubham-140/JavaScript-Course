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

// Logically, you might expect that ans() should not run because outer() has already 
// been executed and its resources (like the 'name' variable) should have been deallocated from memory.
// However, due to closures, inner() still holds a reference to 'name', preventing it from being garbage collected.
// The inner function 'remembers' the variables from its outer lexical environment.
// Therefore, when ans() is called, it still has access to 'name', even though outer() has already finished executing.
// That's why calling ans() successfully prints "Shubham".

// Scope chaining is the process JavaScript uses to look up variables: if a variable is not found in the current scope, it checks the outer (parent) scopes one by one until it either finds the variable or reaches the global scope.

// Scope chain is the order in which JavaScript looks up variables, like first local, then its outer scope and then the global scope

/* Setbacks of closures 
1. Closure holds reference of outer variables, which can cause high memory usage.
2. Its harder to track variables because of their scope using closure.
3. Unexpected Behavior in Loops (eg --> Classic var + closure issue in loops) */