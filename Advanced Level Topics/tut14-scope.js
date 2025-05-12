if(true){
    let a=11;
    const b=15;
    var c=21;
}

<<<<<<< HEAD
// console.log(a); console.log(b);  // since a and b are block scioped variables,thus they won't be executed 

console.log(c); // but since var is a function scoped variable
=======
// console.log(a); console.log(b);  // since a and b are local variables,thus they won't be executed 

console.log(c); // but since var is a global variable, no matter it is declared inside functions,loops or conditionals it will be a global scope, thus it is not recommended to use it, even if only c is declared it still has a global scope
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd


const x=10;
let y=33;

if(true){
    let x=33;
    let y=10;

<<<<<<< HEAD
    console.log("This one is local "+x); // local x will print
=======
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd
    console.log("This one is local "+y); // local y will print
}

console.log("This one is global "+x); // global x will print