console.log("start");

setTimeout(function(){
    console.log("Timeout displayed");
},5000);

console.log("End");


// JavaScript is a single threaded language and still, it can also perform async execution of code and maintain the concurrency/performance with the help of event loop.

// WORKING:
// "start" goes into call stack, gets executed and printed.
// setTimeout is an async function, thus first, it is sent to call stack
// there, call stack recognizes it as a Web API
// so it is sent to the browser which counts the time,
// meanwhile "end" gets executed and printed.
// Once the timer completes, the callback is sent to the Callback Queue (Macrotask Queue).
// The Event Loop checks if the call stack is empty — if not, callback waits in the queue.
// If empty, the callback gets pushed to call stack and executed.
// Thus, even a 5sec timeout can take more than 5secs if call stack is still busy.






// Callback Queue (Macrotask Queue):
// - setTimeout, setInterval, DOM events
// - lower priority

// Microtask Queue:
// - Promises, async/await, queueMicrotask
// - higher priority — always runs before callback queue!






// even with 0ms delay, it still goes through the whole
// callback queue process — never truly immediate

// setTimeout(() => console.log("hello"), 0)

// minimum delay is ~4ms in browsers by spec