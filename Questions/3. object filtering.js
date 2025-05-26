const transactions = [
 { category: "Groceries", amount: 50, date: "2024-08-01" },
 { category: "Entertainment", amount: 100, date: "2024-08-03" },
 { category: "Groceries", amount: 30, date: "2024-08-04" },
 { category: "Bills", amount: 200, date: "2024-08-02" },
 { category: "Entertainment", amount: 50, date: "2024-08-05" }
];

// Generate the following output:
// {
//  "Groceries": 80,
//  "Entertainment": 150,
//  "Bills": 200
// }

// Method 1 -> using forEach

const getPrices=(transactions)=>{
    
    const ans={};
    
    transactions.forEach((item, index)=>{
        if(ans.hasOwnProperty(item.category)){
            ans[item.category]=ans[item.category]+item.amount;
        }
        else{
            ans[item.category]=item.amount;
        }
    })
    
    return ans;
    
}

console.log(getPrices(transactions));

// Method 2 -> using reducer

// const getPrices=(transactions)=>{
    
//     const ans=transactions.reduce((acc, item)=>{
//         if(acc.hasOwnProperty(item.category)){
//             acc[item.category]=acc[item.category]+item.amount;
//         }
//         else{
//             acc[item.category]=item.amount;
//         }
//         return acc;
//     }, {})
    
//     return ans;
    
// }

// console.log(getPrices(transactions));