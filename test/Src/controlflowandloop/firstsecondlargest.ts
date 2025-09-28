// first second largest number in an array

const numARR:number[]=[12,45,67,23,45];
let first=-Infinity,second=-Infinity;

for(let n of numARR)
    {
        if(n>first)
            {
                second=first;
                first=n;
            }else(n>second && n!==first)
            {
                second=n;
            } 
}
console.log("second largest:",second);