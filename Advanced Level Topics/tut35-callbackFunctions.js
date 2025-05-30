// Callback functions are the functions which are passed as argument in other function and runs later

function printSum(num){
    console.log(num);
}

function getSum(a, b, callback){
    callback(a+b);
}

getSum(3, 5, printSum);