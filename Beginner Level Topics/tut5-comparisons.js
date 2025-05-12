console.log("2">1);
console.log("2">2);
console.log("2">=2);
<<<<<<< HEAD
console.log("2"==2);
console.log("2">3);

console.log('\n\n\n\n\n\n\n\n\n');

console.log(null>0);   // false, null coerced to 0
console.log(null==0);  // false, null coerced to undefined
console.log(null===0); // false
console.log(null>=0);  // true, as it is now calculated as null>0 and null==0 in which any one becomes true, it is true
console.log(null<0);   // false
console.log(null<=0);  // true

// Thus, in < or > sign, null coerced to 0 but with = sign, null coerced to undefined.

console.log('\n\n\n\n\n\n\n\n\n');

console.log(null>undefined);
console.log(null>=undefined);
console.log(null<undefined);
console.log(null<=undefined);
console.log(null==undefined); // loosely equal, they give true because both are falsy
console.log(null===undefined);

// In < or > sign, undefined coerced to NaN and in = sign, undefined coerced to null.


// Coercion is the process of converting a value from one datatype to another in order to compare two different datatypes.
=======
console.log("2">3);

console.log(null>0);
console.log(null==0);
console.log(null===0); // it checks value along with datatype also
console.log(null>=0);

console.log(null>undefined);
console.log(null>=undefined);
console.log(null==undefined);
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd
