const mySymbol=Symbol("hello");

const employee={
    id:19,
    naam:"Shubham",
    [mySymbol]:"hello", // only way to use symbol in objects
    "location":"Earth",
    gender:"male",
    stat:null
}

console.log(employee);
console.log(employee.id);
console.log(employee["id"]);
console.log(employee["location"]); // only way to access this as can't be accessed using (.) (dot)
console.log(employee[mySymbol]);   // only way to access
console.log(Object.keys(employee));
console.log(Object.values(employee));





employee.naam="Viom";
console.log(employee.naam);

// Object.freeze(employee); // now its key values can't be changed
employee.naam="Shubham";
console.log(employee.naam);






employee.greet=function(){
    console.log("Hello employee");
}
employee.greetAgain=function(naam){
    console.log(`Hello ${this.naam}`);
}

console.log(employee.greet); // function reference returned but not executed
console.log(employee.greet());
console.log(employee.greetAgain());







// Destructuring in objects 
// Destructuring means taking out the specific properties of an object

let user={
    name:"Shubham",
    age:22
}

const {name}=user;  // Destructuring
console.log(name);

// Now, to use another name for this destructured value, we do
const {age:myAge}=user;
console.log(myAge);








// Create deep-copy/Clone of non-nested object

const emp={
    name:"Shubham",
    age:22,
}

const empClone=Object.assign({},user); // works only for non nested objects
emp.name="Shibbu";
console.log(empClone);



// Clone nested objects 
// Method 1 - Using JSON.stringify() and JSON.parse()

// Method 2 - Using destructuring

const employeee={
    name:"Shubham",
    age:22,
    address:{
        country:"India",
        state:"Delhi"
    }
}

const employeeeClone=structuredClone(employeee);
employeee.name="Shibbu";
console.log(employeeeClone);