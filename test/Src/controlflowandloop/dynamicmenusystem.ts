const actions=["1","1","3","2","4"];
let nums:number[]=[];
let step=0;
let choice:string;

do{
    choice=actions[step++]??"";
    console.log(`choice:${choice}`);

    switch(choice)
    {
        case"1":
            nums.push(step*10);
            break;
        case"2":
            nums.shift();
        case"3":
            console.log("number:",nums);
            break;
    }
}while(choice!=="4");
console.log("program ended");

