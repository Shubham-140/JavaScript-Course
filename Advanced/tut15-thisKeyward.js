const coder={
    naam:"KillerCoder",
    "problems solved":450,
    platform:["leetcode","interviewBit","GFG"],
    "interviews given":23,
    company:"can't disclose",
    ctc:null,

    greet: function(){
        console.log(`Hello ${this.naam}, Welcome to ${this.platform[0]}`);
        console.log(this);
    }
}

coder.greet();
coder.naam="crazyCoder";
console.log(coder.name);
console.log(this);





