"use strict"

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2025"),
    capacity: 3
    },
    {
    color: "White",
   
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2026"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2027"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("5-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
   ]

 // Which vehicles are RED?
function redCars(vehicles){
    if (vehicles.color == "Red"){
        return true;
    }
}

let redCars2= vehicles.filter(redCars);
console.log(redCars2 )

for( let car of redCars2){
    console.log(getVehicleDescription(car))
}
function getVehicleDescription(vehicle){

    let description;
    // set the description here...
    description = `${vehicle.color} ${vehicle.type} - ${vehicle.registrationState} ${vehicle.licenseNo} ${vehicle.registrationExpires.getFullYear()}-${vehicle.registrationExpires.getMonth() + 1 }-${vehicle.registrationExpires.getDate()}`;

    return description;
}

// Which vehicles have registrations that are expired?

let expiredRegistrations = vehicles.filter((vehicle) => vehicle.registrationExpires < new Date ());
console.log(expiredRegistrations)

for( let expired of expiredRegistrations){
    console.log(getVehicleDescription(expired))
}

// Which vehicles that hold at least 6 people?
let atleast6ppl = vehicles.filter((vehicle) => vehicle.capacity <=6)
for( let ppl of atleast6ppl){
    console.log(getVehicleDescription(ppl))
}


// Which vehicles have license plates that end with "222"

let licenseplates = vehicles.filter((license) => license.licenseNo.includes("222"))
for( let plates of licenseplates){
    console.log(getVehicleDescription(plates))
}