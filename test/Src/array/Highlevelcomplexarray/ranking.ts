type Course={
    id:number;
    title:string;
    students:{name:string;progress:number}[];
};

let Cources:Course[]=[
    {id:1,
        title:"typescript",
        students:[
            {name:"zoro",progress:98},
            {name:"Robin",progress:100},
        ]
    },
    {
        id:2,
        title:"Automation testing",
        students:[
            {name:"Sanji",progress:98},
            {name:"Nami",progress:96},
        ]

    }
];

//average progress per cource
let courseAnalytics = Cources.map(Course=>{
    let avg=
    Course.students.reduce((sum,s)=>sum+s.progress,0)
    Course.students.length;
    return{ Cource:Course.title,avgProgress:avg};
});

console.log("====== COURSE ANALYTICS======");
console.table(courseAnalytics);