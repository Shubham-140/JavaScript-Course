function outer(){
    
    const cache=[];
    
    function inner(n){
        if(cache[n]!=undefined){
            return cache[n];
        }
        else{
            const ans=n*n;
            cache[n]=ans;
            return ans;
        }
    }
    
    return inner;
    
}

const square=outer();
console.log(square(4));
console.log(square(5));
console.log(square(4));