
const employee={
    name:"Shubham",
    age:23, 
    displayAgeFn(){
        const displayAge=()=>{
            return (this.age);
        }
        displayAge();
    }
}

console.log(employee.display