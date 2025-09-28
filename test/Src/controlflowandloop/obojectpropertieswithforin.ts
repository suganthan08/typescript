const person={name:"alice",age:25,city:"delhi",active:true};

for(let key in person)
    {
        if(typeof person[key as keyof typeof person]==="string")
        {
            console.log(`${key}:${person[key as keyof typeof person]}`);
        }
    }