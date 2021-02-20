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

//