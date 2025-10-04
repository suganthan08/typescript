let number:number[]=[1,2,3,4,5];

//using generic type

let names:Array<string>=["giri","suganthan","prasanth"];

//mixed type(union)

let mixed:(string | number)[]=["test",100,"QA",200];

//empty array eith push
let tasks:string[]=[];
tasks.push("login test");
tasks.push("signup test");


console.log(number);
console.log(names);
console.log(mixed);
console.log(tasks);
