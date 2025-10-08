type oder={
    orderId:Number;
    customer:string;
    items:{product:string;price:number;qty:number}[];
};

let oders:oder[]=[
    { orderId: 101, customer: "Alice", items: [{ product: "Laptop", price: 800, qty: 1 }, { product: "Mouse", price: 20, qty: 2 }] },
  { orderId: 102, customer: "Bob", items: [{ product: "Phone", price: 600, qty: 1 }, { product: "Charger", price: 25, qty: 1 }] },
  { orderId: 103, customer: "Charlie", items: [{ product: "Headphones", price: 50, qty: 2 }, { product: "Keyboard", price: 45, qty: 1 }] }
];

let oderTotals=oders.map(oder=>{
    let total=oder.items.reduce((sum,item) => sum+item.price*item.qty,0);
    return{orderId:oder.orderId,customer:oder.customer,total};
});

let highestOrder=oderTotals.reduce((max,o)=>(o.total > max.total?o :max),oderTotals[0]);

console.log("====Order totals=====");
console.table(oderTotals);
console.log("\n highestorder",highestOrder);