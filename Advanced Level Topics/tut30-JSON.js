// JSON stands for JavaScript Object Notation.
// It is used to convert objects and array to string and vice versa.

const emp={
    name:"Shubham",
    age:"22"
}

const empString=JSON.stringify(emp);
console.log(empString);

const empObj=JSON.parse(empString);
console.log(empObj);




const arr=[1,2,3,4,5];

const arrStr=JSON.stringify(arr);
console.log(arrStr);

const arrObj=JSON.parse(arrStr);
console.log(arrObj);