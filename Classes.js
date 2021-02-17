//Introduction to Classes

class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  const halley = new Dog('Halley');
  console.log(halley.name);
  console.log(halley.behavior);
  halley.incrementBehavior();
  console.log(halley.name);
  console.log(halley.behavior);

//Constructor

class Surgeon {
    constructor(name, department){
        this.name = name;
        this.department = department;
    }
}

//Instance

class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  
  console.log(surgeonRomero.name);
  console.log(surgeonRomero.department);
  
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
  
  console.log(surgeonJackson.name);
  console.log(surgeonJackson.department);

  //Methods

  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

  //