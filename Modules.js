//module.exports

let Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane;

//require()

const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

//module.exports II
////2-airplane.js

module.exports = {
    myAirplane: "CloudJet",
    displayAirplane: function() {
      return this.myAirplane;
    }
};

////2-missionControl.js

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());

//export default

let Airplane = {};

  Airplane.availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800
    },
    {
      name: 'SkyJet',
      fuelCapacity: 500
    }
  ];

export default Airplane;

//import

import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

//Named Exports

let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
  }
];

let flightRequirements = {requiredStaff: 4};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true
  } else {
    return false
  }
  export {availableAirplanes, flightRequirements, meetsStaffRequirements};
};

//Named Imports

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

//Export Named Exports

export let availableAirplanes = [{
    name: 'AeroJet',
    maxSpeed: 1200,
    minSpeed: 300,
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  }, 
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    maxSpeed: 800,
    minSpeed: 200,
    availableStaff: ['pilots', 'flightAttendants']
}];
 
export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
 
export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};
 
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange){
    return true
  } else {
    return false
  }
};
 
export { availableAirplanes, flightRequirements, meetsStaffRequirements};

//Import Named Imports

import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();

//Export as

let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    maxSpeed: 1200,
    minSpeed: 300
  }, 
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
  }
];
  
let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
  
function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length > requiredStaff) {
    return true;
  } else {
    return false;
  }
};
  
function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};
  
export {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};