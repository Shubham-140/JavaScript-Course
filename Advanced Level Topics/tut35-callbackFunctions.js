// Callback functions are the functions which are passed as argument in other function and they gets executed when needed

function printSum(num){
    console.log(num);
}

function getSum(a, b, callback){
    const sum=a+b;
    callback(sum);
}

getSum(3, 5, printSum);