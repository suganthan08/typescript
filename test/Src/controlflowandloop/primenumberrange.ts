for(let num=2; num<=100;num++){
    let isprime=true;
    for(let j=2;j<=Math.sqrt(num);j++)
    {
        if(num%j==0)
        { isprime=false;break;}
    }
    if(isprime)console.log(num);
}