enum TrafficLight {
    Red = "STOP",
    Yellow = "WAIT",
    Green = "GO"
}
console.log(TrafficLight.Red);      
console.log(TrafficLight.Yellow);
console.log(TrafficLight.Green);    
// starter TypeScript file
let X: [String, Number];
X=["hello",10];
console.log(X);
let values: unknown = "Hello World";
console.log((<string>values).length);
//with alias
type testcase = {
    id: number,
    name: string
    status?: "passed" | "failed";
}
let test1: testcase = { id: 1, name: "Test1", status: "passed"};
console.log(test1);
    
let test2: testcase = { id: 2, name: "Test2"};
console.log(test2);
interface login {
    id: number,
    name: string
    status?: "passed" | "failed";
}
let user1: login = { id: 1, name: "Test1", status: "passed"};
console.log(user1);
    
let user2: login = { id: 2, name: "Test2"};
console.log(user2);

let studentid:{
    id:number,
    name:string
}={id:5,name:"John"};
console.log(studentid);
studentid={id:6,name:"Doe"};
console.log(studentid);

let Name = "sanji";
let age = 21;
let address = "strawhat pirates";
console.log(`My name is ${Name}. I am ${age} years old and live in ${address}.`);

let data: undefined = undefined;
console.log(data);
let data1: null = null;
console.log(data1);

let theater =[ "krishnalaya","pvr","inox"];
console.log(theater[0]);

let passed: boolean = true;
console.log(passed);
