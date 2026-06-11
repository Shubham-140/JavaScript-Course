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
    console.log(error);  // ✅ logging actual error message
}).finally(function(){
    console.log("Finally, promise is either resolved or rejected");
})


// Promise Chaining rules:
// .then() returns a NEW promise — that's why chaining works!
// if .then() throws error, it skips remaining .then() and goes to .catch()
// .catch() only catches errors from ABOVE it in the chain, not below




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




//  Promises have 3 states

// 1. Pending   — Initial state; neither fulfilled nor rejected.
// 2. Fulfilled — The operation completed successfully.
// 3. Rejected  — The operation failed.




/********************************************** Promise Methods **********************************************/

// Promise.all([p1, p2, p3])
// — waits for ALL promises to fulfill
// — if ANY promise rejects, immediately rejects with that error
// — use when all results are needed and any failure should stop everything

// Promise.allSettled([p1, p2, p3])
// — waits for ALL promises to settle (fulfill or reject)
// — gives result of each promise regardless of success or failure
// — use when you want all results even if some fail

// Promise.race([p1, p2, p3])
// — resolves or rejects with the FIRST settled promise (fastest one wins)
// — use for timeout patterns or taking fastest response

// Promise.any([p1, p2, p3])
// — resolves with FIRST fulfilled promise
// — only rejects if ALL promises fail (AggregateError)
// — use when you need at least one success

// Quick comparison:
// | Method             | Resolves when        | Rejects when        |
// |--------------------|----------------------|---------------------|
// | Promise.all        | ALL fulfill          | ANY rejects         |
// | Promise.allSettled | ALL settle           | Never rejects       |
// | Promise.race       | FIRST settles        | FIRST rejects       |
// | Promise.any        | FIRST fulfills       | ALL reject          |