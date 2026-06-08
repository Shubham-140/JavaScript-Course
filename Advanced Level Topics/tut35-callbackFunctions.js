// Callback functions are the functions which are passed as argument in other function and they gets executed when needed

function printSum(num){
    console.log(num);
}

function getSum(a, b, callback){
    const sum=a+b;
    callback(sum);
}

getSum(3, 5, printSum);









// Callback Hell — callbacks nested inside callbacks, making code hard to read
// Also known as "Pyramid of Doom"

// getSum(3, 5, function(sum1){
//     getSum(sum1, 10, function(sum2){
//         getSum(sum2, 20, function(sum3){
//             getSum(sum3, 30, function(sum4){
//                 console.log(sum4)  // deeply nested
//             })
//         })
//     })
// })

// This is why Promises and async/await were introduced — to solve callback hell