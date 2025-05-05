// Promise is an object in JavaScript, which represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// const promise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
//     },1000);
// })

// promise1.then(function(){
//     console.log("Promise consumed");
// })




// Another way of writing promises and is most common way

// const promise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log('Promise consumed');
// });






// const promise2=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({
//             username:"Shubham",
//             id:"123",
//             pass:"123",
//         });
//     }, 1000);
// }).then(function(user){
//     console.log(user); // retrieving data using promise
// })





const promise3=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({
                game:"gow",
                yob:"2010",
            });
        }
        else{
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})

promise3.then((G)=>{
    console.log(G);
    return G.game;
}).then((name)=>{
    console.log(name);
}).catch((error)=>{
    console.log("ERROR: Something went wrong");
}).finally(function(){
    console.log("Finally, promise is either resolved or rejected");
})








// Promise can be accepted in another way also using async functions, which are typically used in getting request from server or some data from database

const promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                game: "gta vc",
                yob: "2002",
            });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

async function consumePromise4() {
    try {
        const output = await promise4;
        console.log(output);
    } catch (error) {
        console.error(error);
    }
}

consumePromise4();
