let score:number[]=[80,92,65,100,88];

//map -> transform
let updateScore=score.map(score=>score+5);

//fillter -> conditional
let highScores=score.filter(score=>score>85);

//redue ->accumulate
let total=score.reduce((sum,score)=>sum+score,0);
let average=total/score.length;

//find->first match
let topper=score.find(score=>score===100);

//find ->first match
console.log("update Score:",updateScore);
console.log("high scores:",highScores);
console.log("Total:",total,"Average:",average.toFixed(2));
console.log("Topper:",topper);