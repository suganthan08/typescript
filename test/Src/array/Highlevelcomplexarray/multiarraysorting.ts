type student={
    id:number;
    name:string;
    marks:number[];
}

let students:student[]=[
    {id:1,name:"alise",marks:[85,90,88]},
     {id:2,name:"bob",marks:[70,65,80]},
      {id:3,name:"charlie",marks:[95,92,98]},
    {id:4,name:"david",marks:[60,75,70]},
];

let studentPerformance = students.map(students=>{
    let avg=students.marks.reduce((a,b)=>a+b,0)/students.marks.length;
    return{id:students.id,name:students.name,average:avg}
});

studentPerformance.sort((a,b)=>b.average-a.average);

console.log("====student performance ranking =====");
console.table(studentPerformance);