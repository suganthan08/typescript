//array of object
interface studentid{
    id:number;
    name:string;
    age?:number;
}
let student:studentid[]=[
    {id:1,name:"john",age:20},
    {id:2,name:"doe"},
    {id:3,name:"smith",age:22}
];
console.log(student);  


console.log("----------");