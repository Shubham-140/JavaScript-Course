// Primitive (Non referenced, we get copy of them not their address)

// 7 types --> number,string,boolean,BigInt,null,undefined,symbol 

let sum=function(num1,num2){
    return num1+num2;
}

console.log(sum(56,22)); 







// Non Primitive (Reference)

// 2 types --> Arrays, objects, (functions)

let naam=["rajender","usha","viom","shubham"];
let names=naam;
names[0]="raju";
console.log(naam[0]);

let employee={
    naam:"Shubham",
    age:22,
    place:"Earth",
    hobbies:null
}

let manager=employee;
manager.naam="Viom";

console.log(employee.naam);