<<<<<<< HEAD
let nums=[1,3,3,4,2];
=======
let nums=[1, 3,3, 4, 2];
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd
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