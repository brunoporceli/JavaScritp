//OBJECTS

let fasterShip = {
  color: 'silver',
  'Fuel Type': 'Turbo Fuel'
};

// Accessing Properties

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};
  
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

//Bracket Notation

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
  };
  
let propName =  'Active Mission';
  
let isActive = spaceship ['Active Mission'];
  
console.log(isActive);
  