// Reduce method is used to reduce the array to a single value on basis of some condition.

const nums=[1,2,3];

const sum=nums.reduce((acc,curr)=>{
    return acc+curr;
},acc=0);

console.log(sum);




const shoppingList = [
    { item: 'Milk', price: 70.00 },   
    { item: 'Bread', price: 40.00 },  
    { item: 'Eggs', price: 80.00 },   
    { item: 'Cheese', price: 110.00 },
    { item: 'Apples', price: 60.00 }   
];

const totalPrice=shoppingList.reduce((acc,product)=>{
    return acc+product.price;
},acc=-60);

console.log(totalPrice);