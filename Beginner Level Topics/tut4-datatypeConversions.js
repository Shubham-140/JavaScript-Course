let age=22;
console.log(typeof(age));

let stringAsAge="456";
console.log(stringAsAge+" as "+typeof(stringAsAge));

let stringToNum=Number(stringAsAge);
console.log(stringToNum+" as "+typeof(stringToNum));

<<<<<<< HEAD
// But sometimes if used Number() typeof will tell number datatype even if it is not a number, thus we have to double check it, thus is prints NaN (as NaN is still considered a number in JS)
=======
// But sometimes if used Number() typeof will tell number datatype even if it is not a number, thus we have to double check it, thus is prints NaN
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd

// For eg - if "324as",bool, null as object and undefined is converted to number, it will print NaN as number, 0 or 1(depending on true/false), 0 and NaN as number respectively

// Similarly, there can be more converions like String(), Boolean() etc etc