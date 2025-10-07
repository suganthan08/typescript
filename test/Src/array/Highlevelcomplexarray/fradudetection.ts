type Transaction={
    id:number;
    type:"credit"|"debit";
    amount:number;
    location:string;
};


let transactions:Transaction[]=[
    {id:1,type:"debit",amount:500,location:"delhi"},
    {id:2,type:"debit",amount:1500,location:"mumbai"},
    {id:3,type:"credit",amount:2000,location:"delhi"},
    {id:4,type:"debit",amount:10000,location:"dubai"}
];


let suspicious=transactions.filter(
    t=>(t.type ==="debit" && t.amount > 5000) || t.location !=="delhi"

);

console.log("======== SUSPISIOUS TRANSACTION=========");
console.log(suspicious);