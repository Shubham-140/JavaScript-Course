const productPrices=[100, 126, 356, 3687];

const prices=productPrices.reduce((elem, acc)=>{
    return acc+elem;
}, acc=-100)

console.log(prices);