const addNums=(num1,num2)=>{          // explicit return 
    return num1+num2;
}

const getProd=(num1,num2)=>num1*num2; // implicit return

const subNums=(num1,num2)=>(num1-num2); // also a way to return implicitly, and is used to return objects

// given is the example
const getUserData=()=>({naam:"Shubham"});

console.log(addNums(6,3));
console.log(getProd(6,3));
console.log(subNums(6,3));
console.log(getUserData);