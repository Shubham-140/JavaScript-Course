function addNums(num1,num2){
    return num1+num2;
}

function greet(name){
    console.log(`Hello ${name}`);
}

greet("Shubham");
console.log(addNums(6,6789));






<<<<<<< HEAD
function calculateCartPrice(...price){ // its a spread operator and used when the no of parameters are unknown, basically it returns an array
    return price;
}

console.log(calculateCartPrice(356,435,3354));  // rest operator and its used to expand the array or object into individual elements.
=======
function calculateCartPrice(...price){ // its a rest operator and used when the no of parameters are unknown, basically it returns an array

    return price;

}

console.log(calculateCartPrice(356,435,3354));
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd






const prices={
    petrol:100,
    diesel:110,
}

function getPrices(object){
    console.log(`The price of petrol is ${object.petrol} and the price of diesel is ${prices.diesel}`);
}

getPrices(prices);