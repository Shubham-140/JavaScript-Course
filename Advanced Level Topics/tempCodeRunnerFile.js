const arr=[1, 2, 3, 4, 5];

Array.prototype.myReduce=function(cb, initialVal){
    let acc=initialVal;
    let startIndex=0;

    if(acc===undefined){
        acc=this[0];
        startIndex++;
    }

    for(let i=startIndex;i<this.length;i++){
        acc=cb(acc, this[i], i, this);
    }

    return acc;
}

const ans=arr.myReduce((elem, acc)=>{
    return acc+elem;
}, 0);

console.log(ans);