import Card from "./Card.js";
class AttackObject{
    constructor(attackName, attackPWR){
        this._attackName = attackName;
        this._attackPWR=attackPWR;
    }
    get attackName(){
        return this._attackName;
    }
    get attackPWR(){
        return this._attackPWR;
    }

}

class CardBasic extends Card {
    constructor(name, hp=10, type='normal', weakness='none', resistance='none', attackOneName="tackle", attack1=10, attackTwoName="",attack2=0,imgAdress){
        super(name);
        this._hp=hp;
        this._type=type;
        this._weakness=weakness;
        this._resistance=resistance;
        this._knockedOut=false;
        this._counters=0;
        this._health=hp;
        this._imgAdress=imgAdress;
        this._attackObjectOne = new AttackObject(attackOneName,attack1);
        this._attackObjectTwo = new AttackObject(attackTwoName,attack2);
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
    get knockedOut() {
    return this._knockedOut;
    }
    set knockOut(value){
        this._knockedOut=value;
    } 
    get health(){
        return this._health;
    }
    set health(value){
        this._health=value;
    }
    get imgAdress(){
        return this._imgAdress;
    }

    get attackObjectOne(){
        return this._attackObjectOne;
    }
    get attackObjectTwo(){
        return this._attackObjectTwo;
    }

    addCounters(damageCounters){
       this.counters+=damageCounters; 
    }
    
    
}

export default CardBasic;