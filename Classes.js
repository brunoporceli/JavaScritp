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

