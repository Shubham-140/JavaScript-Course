const myId=12;
let myName="Shubham";
var myHeight=178; /* dont use it because of scope issues */
shoeSize9;        /* not a good practice */

// myId=19; can't be changes as const
myName="Viom";

console.log(myId);
console.log(myName);

console.table([myId,myName]); /* Another way to write in one line */