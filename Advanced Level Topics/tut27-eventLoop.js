console.log("start");

setTimeout(function(){
    console.log("Timeout displayed");
},5000);

console.log("End");


// JavaScript is a single threaded language thus, it can also perform async execution of code and maintain the concurrency/performance with the help of event loop.

// WORKING
// So basically, the start command will directly go into the call stack and gets executed and prints "start" and then timeout function goes into the call stack and since, it is a async function it will be sent to the browser and browser will count the time of completion, meanwhile the "end" statement will be executed and printed and when the t secs passed then this async function is sent to callback queue, then an event loop will run which checks whether call stack is empty or not, if it is not, then it has to wait inside callback queue, and if empty, then it will get executed.
// Thus, if the timeout is only of 5 secs, it can take more than 5 secs because there is a possibility that call stack is still not empty.