function ElectroDevice(name,type){
  this.name=name;
  this.type=type;
  this.power='electric';
  this.state=false;
}

ElectroDevice.prototype.setOffOn=function(state){
  this.state=state;
  console.log(`${this.name} state - ${this.state}`);
}

function Fridge(name, type, color){
  this.name=name;
  this.type=type;
  this.color=color;
  this.stateLight=true;
}

Fridge.prototype=new ElectroDevice();

Fridge.prototype.setLight=function(state){
  this.stateLight=state;
}

function SolderingIron(name, type, length){
  this.name=name;
  this.type=type;
  this.length=length;
  this.temperature=0;
}

SolderingIron.prototype=new ElectroDevice();

SolderingIron.prototype.setTemperature=function(temperature){
  this.temperature=temperature;
  console.log(`SolderingIron temperature: ${this.temperature} degrees Celsius`);
}

const drierDyson=new ElectroDevice('Dyson','household');
drierDyson.setOffOn(true);

const fridgeHaier=new Fridge('Haier','household','black');
fridgeHaier.setOffOn(true);
fridgeHaier.setLight(false);
console.log('fridge haier: ',fridgeHaier);

const solderingIronRexant=new SolderingIron('rexant','industrial',40);
solderingIronRexant.setTemperature(65);