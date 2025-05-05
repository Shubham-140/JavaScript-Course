// Polyfills are our own implementation of an inbuilt function in JS.

// Prototype allows objects to inherit properties and methods from other objects.

const arr=[1,2,3,4,5];


// 1. ForEach Loop Polyfill

Array.prototype.myForEach=function(){
    for(let i=0;i<this.length;i++){
        console.log(this[i]);
    }
}

arr.myForEach((element)=>{
    console.log(element)
});


// 2. Map Polyfill

Array.prototype.myMap=function(cb){
    const newArr=[];
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}

const newMap=arr.myMap((element)=>{
    return element+2;
});

console.log(newMap);


// 3. Filter Method

Array.prototype.myFilter=function(cb){
    const newArr=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const filteredArr=arr.myFilter((element)=>{
    return element>2;
})

console.log(filteredArr);


// 4. Reduce Method

Array.prototype.myReduce=function(cb,initialVal){
    let acc=initialVal;
    let stIndex=0;
    
    if(acc===undefined){
        stIndex++;
        acc=this[0];
    }
    
    for(let i=stIndex;i<this.length;i++){
        acc=cb(acc,this[i]);
    }
    
    return acc;
}

let res=arr.myReduce((acc,elem)=>{
    return acc+elem
});


// 5. Flat Method

// const arr=[[1,2,[[3,4]],[5]]];

Array.prototype.myFlat=function(depth){
    
    let newArr=[];
    
    if(!Array.isArray(this)){
        console.log('Not an array');
        return;
    }
    
    this.forEach((elem)=>{
        if(depth>0 && Array.isArray(elem)){
            newArr.push(...elem.myFlat(depth-1));
        }
        else{
            newArr.push(elem);
        }
    });
    
    return newArr;
    
}

console.log(arr.myFlat(2));


// 6. Comparing two objects

let obj1={
    a:1,
    b:2,
    c:3,
}

let obj2={
    a:1,
    c:3,
    b:2,
}

// Method 1 - Using inbuilt functions (Lodash)

// const _=require('lodash');
// const areEqual=_.isEqual(obj1,obj2);
// console.log(areEqual);

// Method 2 - Using JSON.stringify

if(JSON.stringify(obj1)==JSON.stringify(obj2)){
    console.log('Yes, they are equal!');
}

// But, sometimes the elements are same but not in order, thus, sort them first.


// Method 3 - Manual comparison 

function areObjectsEqual(obj1,obj2){
    if(typeof obj1!=='object'||obj1===null||typeof obj2!=='object'||obj2===null){
        return obj1===obj2;
    }

    const keys1=Object.keys(obj1);
    const keys2=Object.keys(obj2);

    if(keys1.length!==keys2.length){
        return false;
    }

    for(const key of keys1){
        if(!keys2.includes(key)||!areObjectsEqual(obj1[key],obj2[key])){
            return false;
        }
    }
    
    return true;
}

const areEqual=areObjectsEqual(obj1,obj2);
console.log(areEqual);
