type Vehicles={
    id:number;
    driver:string;
    route:{from:string; to:string; distanceKm:number; fuelused:number;}[]
};

let fleet:Vehicles[]=[
    {
        id:1,
        driver:"Franky",
        route:[
            {from:"delhi",to:"jaipur",distanceKm:280,fuelused:25},
            {from:"jaipur",to:"udaipur",distanceKm:400,fuelused:35},
        ]
    },
    {
       id:2,
        driver:"Jimbey",
        route:[
            {from:"mumbai",to:"pune",distanceKm:150,fuelused:20},
            {from:"pune",to:"nagpur",distanceKm:750,fuelused:60},
        ]
    }
];

//EFFICIENCY :km per Ltter

let efficiencyReport = fleet.map(v=>{
    let totalDistance=v.route.reduce((d,r)=>d+r.distanceKm,0);
    let totalFuel=v.route.reduce((f,r)=>f+r.fuelused,0);
    return{ driver:v.driver,efficiency:(totalDistance/totalFuel).toFixed(2)};
});

console.log("======== FLEET EFFICIENCY REPORT========");
console.table(efficiencyReport);