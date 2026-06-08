// JSON stands for JavaScript Object Notation.
// It is mainly used to convert objects and array to string and vice versa.

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




// Note: JSON doesn't support undefined, functions, and Symbols since other languages 
// like Python, Java etc also use JSON and these are JavaScript-only concepts.
// They are handled differently based on context:

// In objects — undefined, functions and Symbols are completely REMOVED
JSON.stringify({ name: "Shubham", age: undefined, fn: function(){}, s: Symbol() })
// {"name":"Shubham"} — age, fn and s are gone completely!

// In arrays — undefined becomes null (to preserve position), functions and Symbols too
JSON.stringify([1, undefined, function(){}, Symbol(), 3])
// [1, null, null, null, 3] — positions preserved but values lost!