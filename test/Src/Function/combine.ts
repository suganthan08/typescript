function combine(a:number,b:number):number;
function combine(a:string,b:string):number;
function combine(a:any,b:any):any{
    if(typeof a==="string" && typeof b==="string"){
        return a.toUpperCase()+" "+b.toUpperCase();
    }
    if(typeof a==="number" && typeof b==="number"){
        return a*b;
    }
    return "invalid combination";
}
console.log(combine(3,4));
console.log(combine("hello","world"));