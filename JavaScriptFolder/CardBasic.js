import Card from "./Card.js";


class CardBasic extends Card {
    constructor(name, hp=10, type='normal', weakness='none', resistance='none', attack1=10, attack2=0){
        super(name);
        this._hp=hp;
        this.type=type;
        this.weakness=weakness;
        this.resistance=resistance;
        this.attack1=attack1;
        this.attack2=attack2;
        this.knockedOut=false;
        this._counters=0;
    }

    get hp(){
        return this._hp;
    }
    get counters(){
        return this._counters;
    }
    set counters(newCount){
        this._counters = newCount;
    }


    addCounters(damageCounters){
       this.counters+=damageCounters;

       
    }
     knockOut() {
            console.log('your pokemon is knocked out');
        }
    
}

export default CardBasic;