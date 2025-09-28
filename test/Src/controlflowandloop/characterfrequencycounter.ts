// character frequency counters
const text = "typescript loop";
let freq: Record<string,number>={};

for(let ch of text)
{
    if(ch===" ")
        continue;
        freq[ch]=(freq[ch]||0)+1;
}
console.log(freq);