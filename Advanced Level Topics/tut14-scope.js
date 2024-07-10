if(true){
    let a=11;
    const b=15;
    var c=21;
}

// console.log(a); console.log(b);  // since a and b are local variables,thus they won't be executed 

console.log(c); // but since var is a global variable, no matter it is declared inside functions,loops or conditionals it will be a global scope, thus it is not recommended to use it, even if only c is declared it still has a global scope


const x=10;
let y=33;

if(true){
    let x=33;
    let y=10;

    console.log("This one is local "+y); // local y will print
}

console.log("This one is global "+x); // global x will print