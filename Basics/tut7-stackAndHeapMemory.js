// For primitive data-types, stack memory is used, thus, we get the copy of that data-type

let firstBattingScore=176;
let winningScore=firstBattingScore;

console.log(winningScore);
winningScore=177;
console.log(winningScore);
console.log(firstBattingScore);

// whereas

// For non-primitve data-types, heap memory is used, thus, we get the reference of that data-type (i.e., we get the address)

let employee={
    employeeId:12,
    employeeName:"Shubham",
}

console.log(employee.employeeId);

let manager=employee;
manager.employeeId=19;

console.log(manager.employeeId);
console.log(employee.employeeId);