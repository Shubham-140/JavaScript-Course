const employee={
    employeeName:"Shubham",
    emplyeeAge:23,
    employeeRole:"Frontend Dev"
}

function convertCamelToSnake(str){
    
    let newStr="";
    
    for(let i=0;i<str.length;i++){
        if(str[i]>='A' && str[i]<='Z'){
            newStr=newStr+'_'+str[i].toLowerCase();
        }
        else{
            newStr=newStr+str[i];
        }
    }
    
    return newStr;
    
}

for(let key in employee){
    let newStr=convertCamelToSnake(key);
    employee[newStr]=employee[key];
    delete employee[key];
}

console.log(employee);