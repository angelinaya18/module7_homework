class ElectroDevice{
  constructor(name,type){
    this.name=name;
    this.type=type;
    this.power='electric';
    this.state=false;
  }
  
  setOffOn(state){
    this.state=state;
    console.log(`${this.name} state - ${this.state}`);
  }
}

class Fridge extends ElectroDevice{
  constructor(color, name, type){
    super(name,type);
    this.color=color;
    this.stateLight=true;    
  }
  
  setLight(state){
    this.stateLight=state;
  }
}

class SolderingIron extends ElectroDevice{
  constructor(length, name, type){
    super(name,type);
    this.length=length;
    this.temperature=0;
  }
  
  setTemperature(temperature){
    this.temperature=temperature;
    console.log(`SolderingIron temperature: ${this.temperature} degrees Celsius`);
  }
}

const drierDyson=new ElectroDevice('Dyson','household');
drierDyson.setOffOn(true);

const fridgeHaier=new Fridge('black','Haier','household');
fridgeHaier.setOffOn(true);
fridgeHaier.setLight(false);
console.log('fridge haier: ',fridgeHaier);

const solderingIronRexant=new SolderingIron(40,'rexant','industrial');
solderingIronRexant.setTemperature(65);