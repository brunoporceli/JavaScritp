//The this Keyword

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};
  
console.log(robot.provideInfo());

//Arrow Functions and this

const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}
  
robot.checkEnergy();

//Privacy

const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};
  
robot._energyLevel = 'high';
  
robot.recharge(30);
