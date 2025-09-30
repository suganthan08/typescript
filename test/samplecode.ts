// let scores=[90,85,-1,89,100];
// for(let score of scores)
//     {
//         if(score===-1)
//             {
//                 console.log("student skipping");
//                 continue;
//             }
//             if(score<0)
//             {
//             console.log("invalid score");
//             break;
//          }
//     }

 
    



let sum=0
for(let i=1; i<=20;i++){
    if(i%2===0){
        sum+=i
    }
}
console.log("sum of evennumber:",sum);



for(let i=1;i<=5;i++){
    let num="";
    for(let j=1; j<=5; j++){
        num+=i * j+" ";
    }
    console.log(num);
}

let arr:number[]=[10,20,50,60]
let first=-Infinity,second=-Infinity;
for(let i of arr){
    if(i>first){
        second=first;
        first=i;
    }
    else if(i>second && i!== first){
        second=i;
    }
}
console.log("second largest num",second);


for(let num=2;num<30; num++){
    let isprime=true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i ==0){
            let isprime=false;break;

        }
    }if(isprime)console.log(num);
}

