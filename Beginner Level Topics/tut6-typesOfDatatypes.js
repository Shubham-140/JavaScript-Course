// Primitive (Non referenced, we get copy of them not their address)

// 7 types --> number,string,boolean,BigInt,null,undefined,symbol 

let names=["rajender","usha","viom","shubham"];

let employee={
    naam:"Shubham",
    age:22,
    place:"Earth",
    hobbies:null
}

console.log(employee);

let sum=function(num1,num2){
    return num1+num2;
}

console.log(sum(56,22)); 







// Non Primitive (Reference)

// 2 types --> Arrays, objects, functions