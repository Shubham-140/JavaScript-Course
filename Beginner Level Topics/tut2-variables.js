const myId=12;
let myName="Shubham";
<<<<<<< HEAD
var myHeight=178; /* dont use it because of scope issues as it has function level scope */ 
shoeSize=9;        /* not a good practice, its a global variable and works in non strict mode */

// Both let and const have block level scope whereas var has a functional scope

// myId=19; // cant be changes as const
=======
var myHeight=178; /* dont use it because of scope issues */
shoeSize=9;        /* not a good practice */

// myId=19; can't be changes as const
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd
myName="Viom";

console.log(myId);
console.log(myName); 

console.table([myId,myName]); /* Another way to write in one line */