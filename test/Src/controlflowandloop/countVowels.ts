const str="TypeScript";
let count=0;
for(let ch of str.toLowerCase())
{
    if("aeiou".includes(ch)) count++;
}
console.log(`Number of vowels in ${str} is ${count}`);
    