// The call method in JavaScript is a built-in function that allows you to invoke a function with a specified this context, and pass arguments to the function individually.

let user1={
    firstName:"Shubham",
    lastName:"Singh",
}

function printName(place){
    console.log(this.firstName+' '+this.lastName+' from '+place);
}

let user2={
    firstName:"Shibbu",
    lastName:"Mahajan"
}

printName.call(user2,'Delhi');











// The apply method in JavaScript is a built-in function that allows you to invoke a function, specifying a this context and an array (or array-like object) of arguments.
// thus, the only difference is that we pass our own paramater in an array.

let user3={
    firstName:"Shubham",
    lastName:"Singh",
}

function printNaam(state,country,planet){
    console.log(this.firstName+' '+this.lastName+' from '+state+' in '+country+' at '+planet);
}

let user4={
    firstName:"Shibbu",
    lastName:"Mahajan"
}

printNaam.apply(user4,['Delhi','India','Earth']);










// The bind method in JavaScript creates a new function that, when invoked, has its this value set to a specified object and can have predefined arguments.

let printMyName=printName.bind(user1,'Noida');
printMyName();




// Summary of differences:
// call()  → invokes immediately, arguments passed individually
// apply() → invokes immediately, arguments passed as array
// bind()  → returns NEW function, invokes later, arguments passed individually




// Arrow functions are useless with call, apply or bind methods and we get undefined.

// We use these 3 methods in order to prevent the loss of 'this' context.







// Constructor Borrowing using call() — OOP use case
function Animal(name){
    this.name = name
}
function Dog(name, breed){
    Animal.call(this, name)  // borrowing Animal's constructor to set 'name'
    this.breed = breed
}

const dog1 = new Dog("Bruno", "Labrador")
console.log(dog1.name)   // "Bruno"  ✅ inherited from Animal via call()
console.log(dog1.breed)  // "Labrador" ✅ Dog's own property