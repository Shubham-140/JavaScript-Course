fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9f4714c11f794501839dd64bee110a10')
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