const arr=[1, 2, 3, 4, 5];
const str="Shubham";

console.log(arr.slice(1, 4));  // provides subarray from i to (j-1) index
console.log(arr);

console.log(arr.splice(1, 2, 1)); // splice(startIndex, deleteCount, item1, item2, ...) — modifies the array in place and returns the deleted elements.
console.log(arr);

console.log(str.slice(1, 4));  // provides substring from i to (j-1) index
console.log(str);


/* 
| Feature           | slice()                                 | splice()                                  |
|------------------|------------------------------------------|--------------------------------------------|
| Mutability       | Does NOT modify the original array       | Modifies the original array                |
| Use Case         | To extract a portion of array/string     | To remove/replace/add elements in array    |
| Works On         | Arrays and Strings                       | Only Arrays                                |
| Return Value     | Returns a new array with selected items  | Returns array of deleted elements          |
| Parameters       | slice(start, end)                        | splice(start, deleteCount, ...itemsToAdd)  |  */