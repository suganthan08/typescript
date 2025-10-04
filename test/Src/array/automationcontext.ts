type Testcase={
    id:number;
    title:string;
    status:"pass"|"fail"|"skip";
};

let testCases:Testcase[]=[
    {id:1,title:"login with valid credentials",status:"pass"},
    {id:2,title:"login with invalid password",status:"fail"},
    {id:3,title:"checkout with empty cart",status:"skip"},
    {id:4,title:"search product",status:"pass"}
];

//count test results
let passed=testCases.filter(tc=>tc.status==="pass").length;
let failed=testCases.filter(tc=>tc.status==="fail").length;
let skipped=testCases.filter(tc=>tc.status==="skip").length;


console.log("test summary:");
console.log(`paased:${passed}`);
console.log(`failed:${failed}`);
console.log(`skipped:${skipped}`);