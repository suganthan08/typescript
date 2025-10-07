///  FUNCTION & ARRAY
import data from "./functionarray.json"
// NORMAL FUNCTION WITH RETURN TYPE
export function calcBonus(salary: number,exp: number): number {
    return exp >= 3 ? salary * 0.2 : salary * 0.1;
}
//Arrow function with optional parameter
export const greetEmployee =(name:string,role:string="Engineer"):string =>{
    return`Hello,${name}. your role is ${role}`;
}

//Array operation

let tasks:string[]=[
    "write test cases",
    "Exeute Regeression",
    "debug Issues",
    "Generate Report"
];

export function taskSummary():void{
    console.log("\n-----task summary-------");
    console.log("orginal task:",tasks);

    let completedTask=tasks.map(t =>`${t}`);
    console.log("completed:",completedTask);

    let filtered=tasks.filter(t => t.includes("test"));
    console.log("Filtered:",filtered);

    let totalLetter=tasks.reduce((sum,t)=> sum+t.length,0);
    console.log("total letter in tasks:",totalLetter);
}

//complex function with optional param
export function generateTaskReport(user:string,remark?:string):string {
    return`
    ======== TASK REPORT ========
    User:${user}
    Task count:${tasks.length}
    Remarks:${tasks.length}
    Remark:${remark ?? "no remarks"}
    ===============================`
}