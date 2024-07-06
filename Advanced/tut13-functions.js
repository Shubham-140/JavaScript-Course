function addNums(num1,num2){
    return num1+num2;
}

function greet(name){
    console.log(`Hello ${name}`);
}

greet("Shubham");
console.log(addNums(6,6789));






function calculateCartPrice(...price){ // its a rest operator and used when the no of parameters are unknown, basically it returns an array

    return price;

}

console.log(calculateCartPrice(356,435,3354));






const prices={
    petrol:100,
    diesel:110,
}

function getPrices(object){
    console.log(`The price of petrol is ${object.petrol} and the price of diesel is ${prices.diesel}`);
}

getPrices(prices);