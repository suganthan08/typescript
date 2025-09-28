let scores=[90,85,-1,89,100];
for(let score of scores)
    {
        if(score===-1)
            {
                console.log("student skipping");
                continue;
            }
            if(score<0)
            {
            console.log("invalid score");
            break;
         }
    }