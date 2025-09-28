const step=["1","1","3","2","4"];
let inventory:string[]=[];
let s=0;
let option:string;

do{
    option = step[s++] ?? ""; // simulating user input, default to empty string if undefined
    console.log('option:${option}');

    switch(option)
    {
        case"1":
            inventory.push("item"+s);
            break;
        case"2":
            inventory.pop();
            break;
        case"3":
            console.log("Inventory:",inventory);
            break;
    }

}while(option!=="4");
console.log("inventortyprogram ended");