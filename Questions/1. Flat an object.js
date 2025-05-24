const user = {
  id: 101,
  name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: "+1234567890",
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001"
    }
  },
  preferences: {
    theme: "dark",
    notifications: true
  },
};

// method 1 (recursive)
// function flattenObject(obj, parentKey = '', result = {}) {
//   for (let key in obj) {
//       const newKey = parentKey ? `${parentKey}.${key}` : key;

//       if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//         // Recursively flatten nested objects
//         flattenObject(obj[key], newKey, result);
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   return result;
// }

// method 2 (iterative)
function flattenObject(obj){
    
    const stack=[[obj, '']];
    const res={};
    
    while(stack.length>0){
        const [current, parentKey]=stack.pop();
        
        for(let key in current){
            const newKey=parentKey?`${parentKey}.${key}`:key;
            
            if(typeof current[key]==='object' && current[key]!==null && !Array.isArray(current[key])){
                stack.push([current[key], newKey]);
            }
            else{
                res[newKey]=current[key];
            }
        }
        
    }
    return res;
    
}

console.log(flattenObject(user, '', {}));