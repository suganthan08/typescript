//BASIC TYPE ANNOTATIONS
 
let message: string = "Hello, TypeScript!";
let count: number = 10;
let isActive: boolean = true;   

console.log(message);
console.log(count);
console.log(isActive);

//interface
interface user1{
    name:string,
    age:number,
    email?:string
} 
const newUser:user1={
    name:"Alice",
    age:30,
};
const anotheruser:user1={
    name:"Bob",
    age:25,
    email:"bob@example.com",
};
console.log(newUser);
console.log(anotheruser);

//classes
 class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }   
    greet():string{
        return "Hello" + this.greeting;
    }
 }
let greeter=new Greeter("World");
console.log(greeter.greet());
console.log("------------------");





let num=10;

for(let i=0;i<num;i++){
    console.log(i);
}   
console.log("------------------");


let age=25;
if(age<18){
    console.log("you can wote");

}else{
    console.log("you can't vote");
}
console.log("------------------");



let a=5;
while(a<10){
    console.log(a);
    a++;
}
console.log("------------------");


let b=5
do{
    console.log(b);
    b++;
}while(b<10);
console.log("------------------");