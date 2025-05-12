<<<<<<< HEAD
const output=fetch('https://jsonplaceholder.typicode.com/posts')
=======
fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9f4714c11f794501839dd64bee110a10')
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd
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