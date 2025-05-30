const output=fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

// This is how we can fetch data from an api