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






const marks=[87,44,67,80, 96];
marks.push(65);
console.log(marks.sort()); // mutates the array
marks.pop();
console.log(marks.includes(67));
console.log(marks.indexOf(67));
console.log(marks.join()); // converts array to string or we can use json.stringify 
console.log(typeof marks);
console.log(typeof(marks.join()));
console.log(marks.slice(1,3));
console.log(marks.find((m)=>{ // used to find the first occurence of element (doesn't mutate the array), if no result found, gives undefined
    return m>75;
}))
console.log(marks.findIndex((m)=>{ // used to find the first index occurence of element (doesn't mutate the array), if no result found, then provides -1.
    return m===80;
}))
console.log(marks.some((m)=>{ // some() returns true if any one condition in array/string gets satisfied
    return m>70;
}))
console.log(marks.every((m)=>{ // some() returns true if any every condition in array/string gets satisfied else false
    return m>70;
}))

// splice is used to add/remove the elements from an array and it mutates the original array and returns removed/added elements when logged
console.log(marks.splice(1, 2, 84, 68)) // removes 2 elements from index 1 and add 84, 68 (adding and removing together)
console.log(marks.splice(2, 0, 48, 77)); // adds 1 element (48) without removing anything (adding only)
console.log(marks.splice(2, 2)); // removes 1 elements without adding anything (removal only)

console.log(marks.shift()); // removes the element from an array at beginning and mutates the array
console.log(marks.unshift(100)); // adds the elements into an array at starting and mutates the array






// const nestedArray=[1,2,3,[1,[3,4,5],2,4,34,779],4];
// console.log(nestedArray.flat(Infinity));








// const notArray="Shubham"; // strings are immutable in js
// console.log(notArray);
// console.log(Array.isArray(notArray)); // to check whether its an array or not
// console.log(Array.from(notArray)); // converted to array
