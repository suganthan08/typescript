
let employeeName:string="alice johnson";
let employeeAge:number=28;
let isPermanent:boolean=true;
let deparment:"QA"|"DEV"|"OPS"="QA";


//OPERATOR + CONDITIONS

export function checkEligibility():void{
    console.log("\n----Employee eligibility check---");
    if(employeeAge>=25 && isPermanent){
        console.log(`${employeeName} is eligible for promotion.`);
    }else{
        console.log(`${employeeName} is not eligible yet.`);
    }
}


// LOOPS EXAMPLE

export function showLoopDemo(): void {
    console.log("\n---loop demonstratiom");
    for(let i=1;i<=5;i++){
        console.log(`Iteration ${employeeName} wors in ${deparment}`);
    }

    let skills:string[]=["sellinium","playwrite","cypress","API Testing"];
    console.log("\nskills:");
    for(let skill of skills){
       console.log("-"+skill);
    }
}

