const apiData = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if (!res.ok) {
                reject('Promise rejected');
            }
            else {
                return res.json();
            }
        })
        .then((data) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
})

apiData.then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.error(err);
    })