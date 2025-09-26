// intersection type

type person={name:string};
type employee={id:number};

let worker:person & employee={name:"arun",id:101};
console.log("Q15:",worker);
console.log("-------------------------");   