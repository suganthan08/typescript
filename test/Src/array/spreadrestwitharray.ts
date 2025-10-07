let frontend:string[]=["HTML","CSS","JavaScript"];
let backend:string[]=["Node.js","Express","MongoDB"];


//spread operator
let fullStack:string[]=[...frontend,...backend];
console.log("FULL STACK:",fullStack);


//rest parameters
function logSkills(...skills:string[]):void{
    console.log("Skills:",skills.join(", "));
}
logSkills("Sellenium","playwrith","cypress","API");