"use strict";

let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("5-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

// Which vehicles are RED?
let redVehicles = vehicles.filter((car) => car.color == "Red");

if (redVehicles != undefined) {
  redVehicles.forEach((vehicle) => {
    console.log(vehicle.type, vehicle.color);
  });
} else {
  console.log("No Red Vehicles");
}

console.log();

// Which vehicles have registrations that are expired?
let expRegistrationVehicles = vehicles.filter(
  (car) => car.registrationExpires.getTime() < new Date("8-20-2022").getTime()
);

if (expRegistrationVehicles != undefined) {
  expRegistrationVehicles.forEach((vehicle) => {
    console.log(vehicle.type, vehicle.registrationExpires.toDateString());
  });
} else {
  console.log("No Exp Registration Vehicles");
}

console.log();

// Which vehicles that hold at least 6 people?
let largeVehicles = vehicles.filter((vehicle) => vehicle.capacity >= 6);

if (largeVehicles != undefined) {
  largeVehicles.forEach((vehicle) => {
    console.log(vehicle.type, vehicle.capacity);
  });
}

console.log();

// Which vehicles have license plates that end with "222"?
let lpVehicles = vehicles.filter((vehicle) => vehicle.licenseNo.substring(vehicle.licenseNo.length - 3) == "222");

lpVehicles.forEach((vehicle) => {
  console.log(vehicle.type, vehicle.licenseNo);
});
