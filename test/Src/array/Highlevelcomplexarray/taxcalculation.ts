type Employee={
    id:number;
    name:string;
    salary:number;
    bonusPercent:number;
};

let employees:Employee[]=[
    {id:1,name:"suganthan",salary:1500000,bonusPercent:20},
    {id:2,name:"sargur",salary:100000,bonusPercent:20},
    {id:3,name:"lohinth",salary:750000,bonusPercent:30},
    {id:4,name:"thenmozhli",salary:750000,bonusPercent:20},   
];

let payroll = employees.map(emp=>{
    let gross = emp.salary+(emp.salary*emp.bonusPercent)/100;
    let net = gross-gross*0.1;
    return{...emp,gross,net};
});

payroll.sort((a,b)=>b.net-a.net);

console.log("====payroll report====");
console.table(payroll);