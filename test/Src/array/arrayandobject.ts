type Employee ={
    id:number;
    name:string;
    role:string;
    active:boolean;
};

let employees:Employee[]=[
    {id:1,name:"giri",role:"tester",active:true},
    {id:2,name:"ravi",role:"developer",active:false},
    {id:3,name:"charan",role:"manager",active:true}
];

let activeEmployees=employees.filter(emp=>emp.active);

//map to get only names

let employeeNames=employees.map(emp=>emp.name);

//find by role

let manager = employees.find(emp=>emp.role==="manager");

console.log("active employees:",activeEmployees);
console.log("Employee names",employeeNames);
console.log("Manager:",manager);