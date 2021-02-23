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

