const arr1=[1,2,"shubham",null,false,undefined];
console.log(arr1);
console.log(arr1.length);




const arr2=arr1;
arr2[1]=91;  // creates shallow copy
console.log(arr2);




const arr3=[1,4,76];
arr3.push(arr1);
console.log(arr3); // takes whole array as element




const arr4=arr3.concat(arr2);
console.log(arr4); // pushes each element of arr2 into arr3 into a new array





const arr5=[...arr2,...arr1,...arr4]; // alternative way of concat
console.log(arr5);






const marks=[87,44,67,80];
marks.push(65);
console.log(marks.sort());
marks.pop();
console.log(marks.includes(67));
console.log(marks.indexOf(67));
console.log(marks.join()); // converts array to string or we can use json.stringify
console.log(typeof marks);
console.log(typeof(marks.join()));
console.log(marks.slice(1,3));






const nestedArray=[1,2,3,[1,[3,4,5],2,4,34,779],4];
console.log(nestedArray.flat(Infinity));








const notArray="Shubham";
console.log(notArray);
console.log(Array.isArray(notArray));
console.log(Array.from(notArray)); // converted to array