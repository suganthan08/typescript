function fullname(firstname: string, secondname?: string): string {
    return secondname ? `${firstname} ${secondname}` : firstname;
}
console.log(fullname("jhon"));


function full(first:string,second?:string):string{
    return second?`${first} ${second}`:first;
}
console.log("5:", full("John"));
console.log("5:", full("John", "wick"));
