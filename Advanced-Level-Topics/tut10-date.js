let date=new Date();
let myDate=new Date(2020,11,16,5,11,34);  //yr mon dt hr min sec
let timeStamp=Date.now();

console.log(date); // shows in different format
console.log(date.getMonth()+1);
console.log(date.getDate());

console.log(date.toString()); // shows in normal format
console.log(date.toDateString());
console.log(date.toLocaleString());

console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(timeStamp); // gives ms from 1st jan 1970
console.log(Math.floor(timeStamp/1000)); // ms to sec 