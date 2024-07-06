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
employee.greetAgain=function(){
    console.log(`Hello ${this.naam}`);
}

console.log(employee.greet); // function reference returned but not executed
console.log(employee.greet());
console.log(employee.greetAgain());