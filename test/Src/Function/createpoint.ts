const createPoint=(x:number,y:number)=>{
    let quadrant="";
    if(x > 0 && y>0)quadrant="firsst quadrant";
    else if (x < 0 && y > 0)quadrant="second quadrant";
    else if (x < 0 && y < 0)quadrant="third quadrant";
    else  quadrant="fourth quarant";
    return{x,y,quadrant};
};
let p1=createPoint(10,20);
let p2=createPoint(-5,-7);
console.log(p1,p2);
