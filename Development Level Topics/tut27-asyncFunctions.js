// An asynchronous function is a function that performs asynchronous operations and always returns a Promise.
// An asynchronous operation is a task that doesn’t run line by line—it can start and finish later while the rest of the code keeps running.
// The async keyword defines a function that returns a Promise, and await pauses its execution until the Promise resolves.





// There are 2 types of async operations:
// 1. Promise-based async operations:
//    Examples: fetch(), response.json(), async functions
//    Returns a Promise → can use .then(), .catch(), .finally(), or await
//    Execution: starts immediately, result available later via Promise

// 2. Callback-based async operations (don’t return a Promise)
//    Examples: setTimeout(), setInterval(), some event listeners
//    Do not return a Promise → cannot await directly
//    Execution: schedules a callback to run later while the rest of the code continues





/********************************************** Promise-based async operations **********************************************/

const fetchedData=async()=>{
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const data=await response.json(); // even though response body is already downloaded, parsing json is an async operations, hence needs await. 
        console.log(data.slice(0, 10));
    } catch (error) {
        console.log("Some error occurred");
    }
}

fetchedData();



// even a function that returns a primitive becomes a Promise with async:
async function getValue(){
    return 42  // automatically wrapped as Promise.resolve(42)
}
getValue().then(val => console.log(val))  // 42 ✅






// If we want to handle asynchronous operations without using async/await, then we can use Promise.then(), Promise.catch(), and Promise.finally()
// .then() - Executes when a Promise is successfully resolved and receives the resolved value.
// .catch() - Executes when a Promise is rejected or an error occurs in the Promise chain.
// .finally() - Executes after the Promise is settled (resolved or rejected), regardless of the outcome.




const fetchedDataAgain=fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise is settled");
})







/********************************************** Callback-based async operations **********************************************/




setTimeout(function () {  // after x ms, the event will occur
    console.log('setTime called after 1 sec');
}, 1000);



// let id = setInterval(function () {
//     console.log('setInterval called after 1.5 secs')
// }, 1500);

// clearInterval(id);



// Callback-based async operations may return a value (like an ID), but they do not return a Promise or the async result.