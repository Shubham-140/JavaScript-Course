
/////////////////////// For Of /////////////////////////// (can access values not indexes)
const arr1=[1,2,3,4,4];
for (const num of arr1) {
    if(num===4){
        continue;
    }
    console.log(num);
}






///////  For Of  ///////
const countryToCode=new Map();
countryToCode.set('India',"+91");
countryToCode.set("USA","+1");
countryToCode.set("Pakistan","+92");

for (const [key,value] of countryToCode) {
    console.log(key,`->`,value);
}

// For of loop can't be used with objects like using key pair above with map
// since objects are not iteraable by default, they dont have Symbol.iterator






////////  For In  ////////// (Used for objects mainly and works with arrays too)
const game={
    game1:"GOW",
    game2:"COD",
    game3:"NFS"
}

for (const key in game) {
    console.log(key,`->`,game[key]);
}









///////// For Each /////////  (never returns a value)
const languages=['js','cpp','python','java'];

languages.forEach(function (langs){
    console.log(langs);
})

// Another way to use it
languages.forEach((langs)=>{
    console.log(langs);
})

// Can access not only values but index, and whole array too
languages.forEach((langs,index,languages)=>{
    console.log(`the ${langs} is at ${index} for the given 
      [[${languages}]]  array`)
})

// also, forEach can't be stopped — no break or continue!
// if you need break/continue, use for...of instead









const games=[
    {
        naam:'GTA 5',
        fileSize:60,
    },
    {
        naam:'COD Black OPS',
        fileSize:45,
    },
    {
        naam:'EA Cricket 07',
        fileSize:1
    }
]

games.forEach((item)=>{
    console.log(item.naam);
})