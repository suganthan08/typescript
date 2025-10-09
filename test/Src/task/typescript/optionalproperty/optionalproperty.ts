//optionl properties
interface user{
    id:number;
    name:string;
    email?:string;
}
let user1:user={
    id:1,
    name:"john",
}
let user2:user={
    id:2,
    name:"doe",
    email:"sdfgh123@gmail.com"
}
console.log(user1);
console.log(user2); 