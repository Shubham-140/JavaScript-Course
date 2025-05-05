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