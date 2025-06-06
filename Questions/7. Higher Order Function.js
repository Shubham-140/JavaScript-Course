/* A higher order function is a function that satisfies atleast one condition 
1. takes another function as argument
2. returns a function */

// Not every function is a higher order function in JS.
// Eg -> map, filter, reduce are higher order functions

const arr=[1, 2, 3, 4, 5];

const newArr=arr.map((elem)=>{
    return elem*2;
})

console.log(newArr);