// interface inheritance
interface person{
    name:string;
}
interface employee extends person{
    empid:number;
}
let emp:employee={
    name:"john",
    empid:123
}
console.log("Q23:",emp);