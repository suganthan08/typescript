const nums:number[]=[5,-3,0,8,-2,0];
let positive=0,negative=0,zero=0;

for(let n of nums)
    {
        if(n>0)positive++;
        else if(n<0)negative++;
        else zero++;
    }
console.log(`positive:${positive},negative:${negative},zero:${zero}`);