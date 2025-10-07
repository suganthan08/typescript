type Movie={
    title:string;
    geners:string[];
};

let movies:Movie[]=[
    {title:"Inception",geners:["sci-Fi","action","thriler"]},
    {title:"Interstellar",geners:["sci-Fi","drama"]},
    {title:"Avengers",geners:["Super hero","action"]},
    {title:"Ttaninc",geners:["Romance","drama"]},
];

let target=movies.find(m=>m.title === "Inception");
let recommendations=movies.filter(m=>m.title !== target?.title).map(m=>{
    let common=m.geners.filter(g=>target?.geners.includes(g));
    return{title:m.title,score:common.length};
})
.sort((a,b)=>b.score-a.score);

console.log("==== Recomandation for Inception===");
console.table(recommendations);