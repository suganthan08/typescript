function sum(...nums:number[]):number{
    return nums.reduce((acc,v)=>acc+v,0);
}
console.log("6:",sum(1,2,3));