// Map method is used to get a new array by applying a provided function on each element of array.
// It returns a new array rather than modifying the original array.

// const nums1=[1,2,4,5,6];

// const newNums1=nums1.map((val)=>{
//     return val+10;
// })

// console.log(newNums1);



const nums2=[1,2,3,4,5];
// Below is the process of chaining

const newNums2=nums2.map((val1)=>{
    return val1+1;
}).map((val2)=>{  // does operations on val1 elements rather than nums2 elements, which is known as chaining
    return val2*10;
}).map((val3)=>{  // further chaining going on
    return val3/10 - 2;
}).filter((val4)=>{
    return val4<2;
}) 

console.log(newNums2);
