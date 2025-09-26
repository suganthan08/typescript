//function with interface parameter
interface product{
    id:number;
    name:string;
    price:number;
}
function printproduct(p:product){
    console.log(`Q25: id:${p.id}, name:${p.name}, price:${p.price}`);
}
let p1:product={
    id:1,
    name:"laptop",  
    price:50000
};
printproduct(p1);   