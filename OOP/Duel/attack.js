
class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}
class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power= power;
        this.res=res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude= magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
           console.log(`the text of the unit is ${this.text}`); // implement card text here
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
   
}
const redBeltNinja = new Unit(3,3,4);
const blackBeltNinja = new Unit(4,5,4);

const HardAlgo = new Effect(2,"increase target's relliance by 3 ",3);
const PromiseRejection = new Effect(1,"decrease  target's relliance by 2 ",2);
const pair = new Effect(3,"increase target's relliance by 2 ",2);

redBeltNinja.attack(blackBeltNinja);
