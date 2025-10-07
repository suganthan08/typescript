type loan={
    loanId:number;
    customer:string;
    amount:number;
    type:"home"|"car"|"personal";
    overdue:boolean;
};

let lonas:loan[]=[
    {loanId:56,customer:"luffy",amount:5000000,type:"home",overdue:false},
    {loanId:69,customer:"zoro",amount:1100000,type:"home",overdue:false},
    {loanId:72,customer:"Brook",amount:800000,type:"personal",overdue:true},
    {loanId:92,customer:"franky",amount:700000,type:"car",overdue:true}

];

//group loan amounts by type

let loanSummary=lonas.reduce((acc,l) => {
    acc[l.type] = (acc[l.type]||0) + l.amount;
    return acc;
},{} as Record<string,number>);

// overdue risk analysis
let overdueLoans=lonas.filter(l=>l.overdue);
let overdueAmount=overdueLoans.reduce((sum,l)=>sum+l.amount,0);


console.log("====Loan portfolio summary===");
console.log(loanSummary);

console.log("\n====overdue analysis====");
console.log("overdue loans:",overdueLoans.length);
console.log("overdue amount:",overdueAmount);