const firstName="Shubham";
const lastName=new String("Singh");
const hobby="    cricket  ";

console.log(firstName+" "+lastName);
console.log(`My name is ${firstName} ${lastName}`);
console.log(firstName[0]+lastName.charAt(0));
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.indexOf('h'));
console.log(firstName.lastIndexOf('h'));
console.log(firstName.slice(0,4)); // last index is not included
console.log(firstName.slice(1,5));
console.log(lastName.substr(2,2));
console.log(hobby.trim()); // removes leading and trailing whitespaces
console.log(hobby.trimStart()); // removes leading whitespaces
console.log(hobby.trimEnd()); // removes trailing whitespaces