const myId=12;
let myName="Shubham";
var myHeight=178; /* dont use it because of scope issues as it has function level scope */ 
shoeSize=9;        /* not a good practice, its a global variable and works in non strict mode */

// Both let and const have block level scope whereas var has a functional scope

// myId=19; // cant be changes as const
myName="Viom";

console.log(myId);
console.log(myName); 

console.table([myId,myName]); /* Another way to write in one line */