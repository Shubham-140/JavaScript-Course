function createUser(username, isLoggedIn){
    this.username=username;
    this.isLoggedIn=isLoggedIn;

    return this; // this implicitly returns as well (means if we don't return, it still gets return)
}

const user1=createUser("Shubham", true); 
console.log(user1); // shows many methods and properties as well along with username and isLoggedIn

const user2=createUser("Viom", false);
console.log(user1); // user 1 got overwritten by user 2

// This happens because it without new keyword, the properties appends to the global object like username, isLoggedIn. Now, if a new function comes like createRecipe(), then properties will get appended to the global object again like .cuisine, .origin etc (and that was the reason we were seeing multiple methods attached in user1 like setTimeout() and so on... while printing).
// Hence, console.log(user1===user2) will print true since its the same window object
// console.log(global) // this is the global object in node environment where properties/methods are appended

// in browser → global object is window
// in Node → global object is global




// The solution is to use "new" keyword

function createNewUser(username, isLoggedIn){
    this.username=username;
    this.isLoggedIn=isLoggedIn;
}

const user3=new createNewUser("Shubham Singh", false);
const user4=new createNewUser("Viom Singh", true);

console.log(user4);
console.log(user3);

// How "new" keyword works internally:
// 1. A brand new empty object gets created {}
// 2. 'this' is set to that new empty object
// 3. constructor function gets called, properties injected
// 4. prototype is linked (__proto__ set to constructor's prototype)
// 5. object is returned automatically (no need for return this)





// Explicit returned property/method has preference over this's method/property

function Test(){
    this.name = "Shubham"
    return { name: "Someone else" }  // explicit object return
}
const t = new Test()
console.log(t.name)  // "Someone else" — explicit return wins!

// but returning primitive is ignored:
function Test2(){
    this.name = "Shubham"
    return 42  // ignored!
}
const t2 = new Test2()
console.log(t2.name)  // "Shubham" ✅