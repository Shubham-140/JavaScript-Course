let obj1 = {
    a: 1,
    b: 2,
    c: 3,
}

let obj2 = {
    a: 1,
    c: 3,
    b: 2,
}

function areObjectsEqual(obj1, obj2){

    if(obj1===null || obj2===null || typeof obj1!=='object' || typeof obj2!='object'){
        return obj1===obj2;
    }

    const keys1=Object.keys(obj1);
    const keys2=Object.keys(obj2);

    if(keys1.length!==keys2.length){
        return false;
    }

    for(const key of keys1){
        if(!keys2.includes(key) || !areObjectsEqual(obj1[key], obj2[key])){
            return false;
        }
    }

    return true;

}

console.log(areObjectsEqual(obj1, obj2));