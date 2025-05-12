<<<<<<< HEAD
// Filter Methods to filter values in array based on desired condition.
// It returns a new array rather than modifying the original array.
=======
// Filter Methods to filter values in data
>>>>>>> 1b5926f56fde4d0a13f71b9fcfb3ef3b1518bccd

const nums=[2,5,3,6,8];

const elements=nums.filter((val)=>{
    return val>4;
});

console.log(elements);




const wrestlers = [
    { name: 'Brock Lesnar', debut: 2002, status: 'still wrestling', finisher: 'F5' },
    { name: 'Stone Cold Steve Austin', debut: 1989, status: 'retired', finisher: 'Stone Cold Stunner' },
    { name: 'The Undertaker', debut: 1990, status: 'retired', finisher: 'Tombstone Piledriver' },
    { name: 'John Cena', debut: 2002, status: 'part-time wrestling', finisher: 'Attitude Adjustment' },
    { name: 'Shawn Michaels', debut: 1984, status: 'retired', finisher: 'Sweet Chin Music' },
    { name: 'Randy Orton', debut: 2000, status: 'still wrestling', finisher: 'RKO' },
    { name: 'Hulk Hogan', debut: 1977, status: 'retired', finisher: 'Atomic Leg Drop' },
    { name: 'Triple H', debut: 1992, status: 'part-time wrestling', finisher: 'Pedigree' },
    { name: 'The Rock', debut: 1996, status: 'part-time wrestling', finisher: 'Rock Bottom' },
    { name: 'Kurt Angle', debut: 1998, status: 'retired', finisher: 'Angle Slam' }
];

const activeWrestlers=wrestlers.filter((wrestler)=>{
    return wrestler.status=='still wrestling';
})
const retiredWrestlersDebut=wrestlers.filter((wrestler)=>{
    return wrestler.debut<2000 && wrestler.status==='retired';
})

console.log(activeWrestlers);
console.log(retiredWrestlersDebut);