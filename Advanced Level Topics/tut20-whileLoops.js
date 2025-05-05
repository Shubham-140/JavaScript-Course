let nums=[1,3,3,4,2];
let slow=nums[0];
let fast=nums[0];

do{
    slow=nums[slow];
    fast=nums[nums[fast]];
}
while(slow!=fast);

fast=nums[0];

while(slow!=fast){
    slow=nums[slow];
    fast=nums[fast];
}

console.log(slow);