//function returning void
function logMessage(msg:string):void{
    console.log("7:log:",msg);
}
logMessage("typescript is cool")

//function returning boolean
function isEven(n:number):boolean{
    return n % 2 ===0;
}
console.log("8.",isEven(10));

//recursive function
function factorial(n:number):number{
    return n <=1?1:n*factorial(n-1);
}
console.log("9."),factorial(5);


//higher-orde functio
function applyOperation(a:number,b:number,op:(x:number,b:number)=>number){
    return op(a,b)
}
console.log("10.",applyOperation(3,4,(x,y)=>x+y));

//function returning another function
function multiplier(factor:number){
    return(x:number)=>x*factor;
}
const double=multiplier(2);
console.log("11:",double(10));  //dout/


//array creation
let myNumbers:number[]=[1,2,3,4];
console.log("12:",myNumbers);


//ageneric function
function identity<t>(value:t):t{
    return value;
}
console.log("13.",identity<number>(42));
console.log("13.",identity<string>("TS"));

//array iteration
console.log("14:");
myNumbers.forEach(n => console.log("  ", n * 2));

//for-of loop
console.log("15:");
for (let n of myNumbers) {
  console.log("  ", n);
}

//ARRAY PUSH & POP
myNumbers.push(5)
console.log("16.",myNumbers);
myNumbers.pop()
console.log("16.",myNumbers);

//ARRAY SHIFT & UNSHIFT
myNumbers.unshift(0);
console.log("17.",myNumbers);
myNumbers.shift();
console.log("17.",myNumbers);


//MAP EXAMPLE
let squared=myNumbers.map(n=>n*n);
console.log("18.",squared);

//FILTER EXAMPLE
let evens = myNumbers.filter(n => n % 2 === 0);
console.log("19:", evens);

//REDUCE EXAMPLE
let sumAll = myNumbers.reduce((acc, val) => acc + val, 0);
console.log("20:", sumAll);

//FIND EXAMPLE
let found = myNumbers.find(n => n > 2);
console.log("21:", found);  //dout why 3 only is print

// 22) Object key-value
let userPerson = { name: "John", age: 25 };
console.log("22:", userPerson);


// 23) Update object value
userPerson.age = 26;
console.log("23:", userPerson);


// 24) JSON stringify & parse
let jsonStr = JSON.stringify(userPerson);
console.log("24:", jsonStr);
let obj = JSON.parse(jsonStr);
console.log("24:", obj);

// 25) Async function
async function fetchData() {
  return "Data loaded!";
}
fetchData().then(data => console.log("25:", data));