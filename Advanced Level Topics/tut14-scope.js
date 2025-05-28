if(true){
    let a=11;
    const b=15;
    var c=21;
}

// console.log(a); console.log(b);  // since a and b are block scioped variables,thus they won't be executed 

console.log(c); // but since var is a function scoped variable


const x=10;
let y=33;

if(true){
    let x=33;
    let y=10;

    console.log("This one is local "+x); // local x will print
    console.log("This one is local "+y); // local y will print
}

console.log("This one is global "+x); // global x will print