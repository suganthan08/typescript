const arr:number[]=[1,2,3,4,5];
let reversed:number[]=[];
for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i]!);
}
console.log("Reversed array:", reversed);