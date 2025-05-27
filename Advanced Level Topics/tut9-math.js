const petrolPrice = 97; // number identified by JS
console.log(petrolPrice);

const dieselPrice = new Number(105.3245); // exclusively declared as number and became an object now
console.log(dieselPrice);
console.log(typeof dieselPrice);
console.log(dieselPrice.toFixed(2));
console.log(petrolPrice.toString());

const hundreds = 100000000000000000000;
console.log(hundreds.toLocaleString('en-IN'));







const negNum = -12;
const posNum = 19;
const decNum = 65.433;

console.log(Math.abs(negNum));
console.log(Math.sqrt(posNum));
console.log(Math.round(decNum));
console.log(Math.floor(decNum));
console.log(Math.ceil(decNum));
console.log(Math.min(5, 3, 3, 5, 6));
console.log(Math.max(5, 3, 3, 5, 6));

console.log(Math.random()); // always gives value between 0 and 1
console.log((Math.random() * (100 - 10 + 1)) + 10); // now will give value from 10 to 100

// thus formula is [(Math.random()*(max-min+1))+min]  
