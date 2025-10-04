let skills=["selenium","playwright","cypress","API"];

//for loop
for(let i=0;i<skills.length;i++){
    console.log(`skill ${i+1}:skills`);
}

//for-of loop
for(let skill of skills){
    console.log("using for-of:",skill);
}

//for in loop(indexes)
for(let index in skills){
    console.log(`Index ${index}=${skills[index]}`);
}
skills.forEach((skill,i)=>{
    console.log(`forEach[${i}]:${skill}`);
});