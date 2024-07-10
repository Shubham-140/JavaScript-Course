let age=17;

if(age>18){
    console.log("You are eligible");
}
else if(age==18){
    console.log("Come next year");
}
else{
    console.log("Not eligible");
}






let weight=74;

if(weight<65){
    console.log("You cannot participate for the competition");
}
else{
    if(weight<75){
        console.log("You can fight in lightweight division");
    }
    else if(weight<85){
        console.log("You can fight in cruiserweight division");
    }
    else if(weight<95){
        console.log("You can fight in light heavyweight division");
    }
    else{
        console.log("You can fight in heavyweight division");
    }
}