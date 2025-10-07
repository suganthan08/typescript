type Item={
    id:number;
    name:string;
    stock:number;
    recorderLevel:number;
};

let inventory:Item[]=[
    { id:100, name:"laptop",stock:25,recorderLevel:10},
     { id:101, name:"mouse",stock:5,recorderLevel:15},
      { id:103, name:"keybopard",stock:30,recorderLevel:20},
       { id:104, name:"monitor",stock:8,recorderLevel:10},

];
let totalStock = inventory.reduce((sum,item)=>sum+item.stock,0);

let lowStockitems = inventory.filter(i => i.stock < i.recorderLevel);


console.log("======= INVENTORY SUMMARY========");
console.log("totalstock:",totalStock);
console.log("\n low Stock:",lowStockitems);