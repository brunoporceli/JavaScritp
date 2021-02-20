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
