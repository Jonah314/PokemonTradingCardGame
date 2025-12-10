import Card from "./Card.js";


class CardBasic extends Card {
    constructor(name, hp=10, type='normal', weakness='none', resistance='none', attack1=10, attack2=0){
        super(name);
        this._hp=hp;
        this._type=type;
        this._weakness=weakness;
        this._resistance=resistance;
        this._attack1PWR=attack1;
        this._attack2PWR=attack2;
        this._knockedOut=false;
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
    get type(){
        return this._type;
    }
    get weakness(){
        return this._weakness;
    }
    get resistance(){
        return this._resistance;
    }
    get attack1PWR(){
        return this._attack1PWR;
    }
    get attack2PWR(){
        return this._attack2PWR;
    }
    get knockedOut() {
    return this._knockedOut;
}
    set knockOut(value){
        this._knockedOut=value;
    } 

    addCounters(damageCounters){
       this.counters+=damageCounters; 
    }
    
    
}

export default CardBasic;