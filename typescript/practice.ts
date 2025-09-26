function showUser(name:string,age?:number):void{
    console.log(`Name: ${name}`);
    if(age !==undefined){
        console.log(`Age: ${age}`);     
    }
}
showUser("suganthan");
showUser("ragul",21);

console.log("----------");



function welcome(name:string):void{
    console.log(`Welcome, ${name}!`);
}
welcome("suganthan");

console.log("----------");

//square function

function ragul(num:number):number{
    return num*num;  
}
console.log(ragul(10));
console.log(ragul(12));



console.log("----------");

interface profile{
    name:string;
    age:number;
    mobile:number;
}
function displayProfile(user:profile):void{
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Mobile: ${user.mobile}`);
}
console.log("name: suganthan",);
console.log("age: 21");
console.log("mobile: 1234567890");
displayProfile({name:"prsanth",age:31,mobile:1234567890});



console.log("`----------`");

interface studentid{
    id:number;
    name:string;
    age:number;
}
function displayid(student:studentid):void{
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
}

displayid({id:1,name:"suganthan",age:21});
displayid({id:2,name:"ragul",age:22});

console.log("`----------`");


//multiple profile with array + loop

interface profile1{
    name:string;
    age:number;
    address:string;     
}

function displayProfile1(users:profile1):void{
    console.log(`Name: ${users.name}`);
    console.log(`Age: ${users.age}`);
    console.log(`Address: ${users.address}`);   
}

let phonebook:profile1[]=[
    {name:"suganthan",age:21,address:"chennai"},
    {name:"ragul",age:22,address:"bangalore"},
    {name:"prasanth",age:31,address:"mumbai"},
]
for(let user of phonebook){
    displayProfile1(user);
    console.log("-----");
}




console.log("`----------`");



function add(a:any,b:number):number{
    return parseInt(a)+b;
}

console.log(add(5,10));

console.log("------------------");



let laptop:{brand:string,model:boolean,price:number}={
    brand:"dell",
    model:true,
    price:50000
};
console.log(laptop.brand);

console.log("------------------");



type studentprofile={
    name:string;
    age:number;
    course:string;
    gender:string;
}

console.log({name:"suganthan",age:21,course:"IT",gender:"male"});   


console.log("------------------");




interface book{
    title:string;
    author:string;
    price:number;

}
 let book1:book={
    title:"the cat",
    author:"logu",
    price:200
 };
 let book2:book={
    title:"kemopall",
    author:"divya shankar",
    price:150
 };
 console.log(book1.author);
 console.log(book2.author);



console.log("------------------");



interface testcase{
    id:number;
    name:string;
    status:string;
}

let testcases:testcase[]=[
    {id:1,name:"logu",status:"pass"},
    {id:2,name:"kattu",status:"fail"},
    {id:3,name:"punna",status:"pass"}
];

for(let tc of testcases){
    if(tc.status==="fail"){
       tc.status= "pass";
    }
}
console.log(testcases);



console.log("------------------");


interface teststep{
    stepnumber:number;
    descrption:string;
    result:"passed"|"failed";
}
let step1:teststep={
    stepnumber:1,
    descrption:"login",
    result:"passed"};

let step2:teststep={
    stepnumber:2,
    descrption:"add to cart",
    result:"failed"};       

let step3:teststep={
    stepnumber:3,
    descrption:"checkout",
    result:"passed"};

let teststeps:teststep[]=[step1,step2,step3];

for(let step of teststeps){
    if(step.result==="failed"){
        step.result="passed";
    }


    console.log(teststeps);
}
console.log("------------------");