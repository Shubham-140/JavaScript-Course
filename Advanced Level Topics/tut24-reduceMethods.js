<<<<<<< HEAD
// Reduce method is used to reduce the array to a single value on basis of some condition.

=======
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd
const nums=[1,2,3];

const sum=nums.reduce((acc,curr)=>{
    return acc+curr;
<<<<<<< HEAD
},acc=0);
=======
},acc=4);
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd

console.log(sum);




const shoppingList = [
<<<<<<< HEAD
    { item: 'Milk', price: 70.00 },   
    { item: 'Bread', price: 40.00 },  
    { item: 'Eggs', price: 80.00 },   
    { item: 'Cheese', price: 110.00 },
    { item: 'Apples', price: 60.00 }   
=======
    { item: 'Milk', price: 70.00 },  
    { item: 'Bread', price: 40.00 },  
    { item: 'Eggs', price: 80.00 },   
    { item: 'Cheese', price: 110.00 },
    { item: 'Apples', price: 60.00 } 
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd
];

const totalPrice=shoppingList.reduce((acc,product)=>{
    return acc+product.price;
<<<<<<< HEAD
},acc=-60);
=======
},acc=0);
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd

console.log(totalPrice);