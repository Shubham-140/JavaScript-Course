// An asynchronous function is a function that performs asynchronous operations.
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















/************************** Real Differentiator between Callback and Promise Based Operations **********************************/

// ============================================
// 1. CALLBACK-BASED ASYNC OPERATION
// ============================================

// ANALOGY:
// You order food at a restaurant. The waiter takes your order and tells you:
// "Stay at your table. When the food is ready, I'll bring it to you."

// ❌ You don't control when the waiter comes back
// ❌ You don't control how the waiter notifies you
// ❌ You must trust the waiter to bring the food
// ✅ You give the waiter instructions in advance ("when food is ready, do this")
// ✅ Food comes to you automatically
// ✅ The waiter controls the next step

// CODE:
orderFood('burger', (error, food) => {
    if (error) {
        console.log('Problem:', error);
    } else {
        console.log('Food arrived:', food);
    }
});


// ============================================
// 2. PROMISE-BASED ASYNC OPERATION
// ============================================

// ANALOGY:
// You order food at a restaurant. They give you a buzzer/pager (Promise).

// ✅ You now possess something that represents your future food
// ✅ You can decide what should happen when the food is ready
// ✅ You can attach multiple follow-up actions

// First .then()  = Buzzer goes off → You go to the counter
// Second .then() = You take the food back to your table
// .catch()       = At the counter, food is wrong or stale → You handle the problem
// .finally()     = Whether food is good or bad → You leave the restaurant

// CODE:
orderFood('burger')
    .then(() => goToCounter)
    .then(() => takeFoodToTable)
    .catch((error) => handleProblem(error))
    .finally(() => leaveRestaurant());


// ============================================
// KEY DIFFERENCE
// ============================================

// Callback = You give the restaurant your next step.
// Promise  = The restaurant gives you a future-result ticket, and YOU decide the next steps.








/************************** Why promises were introduced **********************************/

// ----------------------------------------------------------------------------
// PROBLEM #1: Inversion of Control (The "Trust" Problem)
// ----------------------------------------------------------------------------
// ANALOGY:
// You give the waiter your credit card and say "charge me whatever is fair."
// You have NO control over:
// - What if the waiter never comes back? (Callback never called)
// - What if the waiter comes back 3 times? (Callback called multiple times)
// - What if the waiter charges you double? (Wrong data passed)
// - What if the waiter spills the food? (Error swallowed)
//
// You gave away control and just have to TRUST.
// ----------------------------------------------------------------------------

// THE PROBLEM (Callback):
let callCount = 0;

function untrustworthyLibrary(callback) {
    // This library has bugs - calls callback multiple times!
    setTimeout(() => callback('First call'), 1000);
    setTimeout(() => callback('Second call'), 1500);
    setTimeout(() => callback('Third call'), 2000);
}

untrustworthyLibrary((data) => {
    callCount++;
    console.log(`Callback called ${callCount} time(s): ${data}`);
    // You'd process data 3 times when you expected once!
});

// OUTPUT:
// Callback called 1 time(s): First call
// Callback called 2 time(s): Second call  (WHY?!)
// Callback called 3 time(s): Third call   (STOP?!)

// ----------------------------------------------------------------------------
// HOW PROMISES FIXED IT:
// ----------------------------------------------------------------------------
// Promise resolves ONLY ONCE (guaranteed)
// YOU hold the Promise object (YOU have control)
// They can't mess with your handlers
// ----------------------------------------------------------------------------

function trustworthyLibrary() {
    return new Promise((resolve) => {
        // This will only resolve ONCE, no matter what
        setTimeout(() => resolve('Data'), 1000);
        // Any extra resolve calls are ignored
        setTimeout(() => resolve('Ignored'), 1500);
        setTimeout(() => resolve('Also ignored'), 2000);
    });
}

const promise = trustworthyLibrary();
promise.then((data) => {
    console.log(`Promise resolved once: ${data}`);
});
// Only prints ONE time!

// OUTPUT:
// Promise resolved once: Data


// ----------------------------------------------------------------------------
// PROBLEM #2: Callback Hell (The Pyramid of Doom)
// ----------------------------------------------------------------------------
// ANALOGY:
// To get a complete meal, you must:
// 1. Order appetizer → Wait → Eat it
// 2. Then order main course → Wait → Eat it
// 3. Then order dessert → Wait → Eat it
// 4. Then pay bill → Wait → Get receipt
//
// With callbacks, each step must be NESTED inside the previous one.
// Your code becomes a PYRAMID that grows wider and harder to read.
// ----------------------------------------------------------------------------

// THE PROBLEM (Callback Hell):
function getUser(id, cb) { setTimeout(() => cb(null, { id, name: 'John' }), 100); }
function getOrders(userId, cb) { setTimeout(() => cb(null, ['order1', 'order2']), 100); }
function getOrderDetails(orderId, cb) { setTimeout(() => cb(null, { id: orderId, total: 100 }), 100); }
function getProductDetails(productId, cb) { setTimeout(() => cb(null, { id: productId, name: 'Laptop' }), 100); }

// THE PYRAMID OF DOOM 🗿
getUser(1, (err, user) => {
    if (err) console.error(err);
    else {
        getOrders(user.id, (err, orders) => {
            if (err) console.error(err);
            else {
                getOrderDetails(orders[0], (err, details) => {
                    if (err) console.error(err);
                    else {
                        getProductDetails(details.id, (err, product) => {
                            if (err) console.error(err);
                            else {
                                console.log('Final product:', product);
                                // Each } is harder to track
                                // Want to change order? Good luck!
                            }
                        });
                    }
                });
            }
        });
    }
});

// This is NOT exaggerated. Real production code looked like this!

// ----------------------------------------------------------------------------
// HOW PROMISES FIXED IT:
// ----------------------------------------------------------------------------
// Flat .then() chains (no nesting)
// Readable top-to-bottom flow
// Easy to add/remove steps
// One error handler for ALL steps
// ----------------------------------------------------------------------------

function getUserPromise(id) {
    return Promise.resolve({ id, name: 'John' });
}
function getOrdersPromise(userId) {
    return Promise.resolve(['order1', 'order2']);
}
function getOrderDetailsPromise(orderId) {
    return Promise.resolve({ id: orderId, total: 100 });
}
function getProductDetailsPromise(productId) {
    return Promise.resolve({ id: productId, name: 'Laptop' });
}

// FLAT, READABLE CHAIN ✅
getUserPromise(1)
    .then(user => getOrdersPromise(user.id))
    .then(orders => getOrderDetailsPromise(orders[0]))
    .then(details => getProductDetailsPromise(details.id))
    .then(product => console.log('Final product:', product))
    .catch(error => console.error('Something failed:', error));
// One .catch() handles errors from ANY step!


// ----------------------------------------------------------------------------
// PROBLEM #3: Inconsistent Error Handling
// ----------------------------------------------------------------------------
// ANALOGY:
// Every restaurant has different rules for when something goes wrong:
//
// Restaurant A: Waiter apologizes and gives discount
// Restaurant B: Manager comes to your table
// Restaurant C: You have to go to the counter yourself
// Restaurant D: NOTHING happens - you just sit there
//
// Every callback library handled errors DIFFERENTLY!
// No standard way to catch errors.
// ----------------------------------------------------------------------------

// THE PROBLEM (No Standard Error Handling):

// Library 1: Node.js style (err, data)
fs.readFile('file.txt', (err, data) => {
    if (err) console.error('Node.js style error:', err);
    else console.log(data);
});

// Library 2: jQuery style (separate error callback)
$.ajax({
    url: '/api/data',
    success: (data) => console.log(data),
    error: (err) => console.error('jQuery style error:', err)
});

// Library 3: setTimeout style (errors just crash!)
setTimeout(() => {
    throw new Error('This crashes the entire application!');
}, 1000);
// No way to catch this error!

// Library 4: Some libraries just swallow errors silently
buggyLibrary.getData((data) => {
    // Error happens inside? You never know!
    console.log(data);  // Might be undefined, might be wrong
});

// ----------------------------------------------------------------------------
// HOW PROMISES FIXED IT:
// ----------------------------------------------------------------------------
// ALL promises handle errors the SAME way using .catch()
// ALL async/await uses SAME try/catch pattern
// Consistent across ALL libraries!
// ----------------------------------------------------------------------------

// Standard .catch() for all promises
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Standard error:', error))
    .finally(() => console.log('Always runs, like a restaurant cleaning up'));

// Async/await with standard try/catch
async function getData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Standard error:', error);
    } finally {
        console.log('Always runs');
    }
}

// EVERY promise library follows this SAME pattern!










/****************************** async function returning primitive value *********************************/

// ============================================================================
// PART 1: THE SCENARIO
// ============================================================================

// THE CODE:
async function getValue() {
    return 42;
}

getValue().then(val => console.log(val));

// ============================================================================
// PART 2: THE ANALOGY (Restaurant - Pre-made Food)
// ============================================================================

// ANALOGY:
// You walk into a restaurant and order a burger. This burger is ALREADY
// sitting on the counter, fully prepared.
//
// - You don't need to wait for cooking
// - You don't need a buzzer to know when it's ready
// - The food EXISTS right now
//
// BUT the restaurant has a POLICY:
// "Every order, regardless of preparation time, MUST follow the buzzer system."
//
// So they give you a buzzer anyway. And that buzzer buzzes INSTANTLY.
// You still must go to the counter (.then() or await) to get your food.
//
// ✅ Food is ready immediately
// ✅ You get a buzzer (Promise)
// ✅ Buzzer buzzes instantly (Promise resolves immediately)
// ✅ You still need to go to counter (.then() or await)
// ✅ You get your food (42)

// ----------------------------------------------------------------------------
// WHY RESTAURANT HAS THIS POLICY (Why JavaScript does this):
// ----------------------------------------------------------------------------
// 1. CONSISTENCY: Every async function works the same way
// 2. FUTURE-PROOF: Instant food might need cooking tomorrow
// 3. MICROTASK QUEUE: .then() always runs after current tasks
// ============================================================================

// ============================================================================
// PART 3: WHAT HAPPENS STEP BY STEP
// ============================================================================

console.log('1. Walk into restaurant');

async function getValue() {
    console.log('2. Chef looks at counter, food is right there');
    return 42;  // Food is ALREADY ready
}

const buzzer = getValue();
console.log('3. Got buzzer (even though food is ready instantly)');

buzzer.then(val => {
    console.log('5. Buzzer buzzed instantly! Going to counter. Got:', val);
});

console.log('4. Doing other things while holding buzzer...');

// OUTPUT:
// 1. Walk into restaurant
// 2. Chef looks at counter, food is right there
// 3. Got buzzer (even though food is ready instantly)
// 4. Doing other things while holding buzzer...
// 5. Buzzer buzzed instantly! Going to counter. Got: 42

// ============================================================================
// PART 4: THE CRITICAL INSIGHT - YOU CANNOT SKIP THE BUZZER
// ============================================================================

async function getValue() {
    return 42;
}

// ❌ WRONG - Trying to get food without buzzer
const result = getValue();
console.log(result);  
// OUTPUT: Promise {<fulfilled>: 42}
// You got the BUZZER, not the FOOD!

// ✅ CORRECT - Use the buzzer to get food
getValue().then(food => console.log(food));  // 42

// ✅ ALSO CORRECT - Await the buzzer
const food = await getValue();  // 42

// ANALOGY:
// You cannot just grab food off the counter. Restaurant rules say:
// You MUST take the buzzer and go through pickup process.
// The buzzer is MANDATORY, even for instant food.