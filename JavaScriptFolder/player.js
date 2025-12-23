import { textBoxUpdate } from "./textBox.js";


class Player{
    

    constructor(name,suffix){
        this._name=name;
        this._suffix=suffix;
        this.hand=[];
        this.AA=[];
        this.b1=[];
        this.b2=[]
        this.b3=[];
        this.b4=[];
        this.b5=[];
        this.prizes=[];
        this.discard=[];
        this._status="none";
    }
    get name(){
        return this._name;
    }
    set name(myName){
        this._name=myName;
    }
    get suffix(){
        return this._suffix;
    }
    get status(){
        return this._status;
    }
    set status(newStatus){
        this._status=newStatus;
    }


    setActivePokemon(pokemon){
        this.AA.push(pokemon);
        console.log("my active pokemon is " + this.AA[0].name);
    }

    setBenchPokemon(deck, seat){
    if (!this[seat]) {
        throw new Error(`Invalid bench seat: ${seat}`);
    }
    this[seat].push(deck.draw());
    }
    setInitHand(deck){
        this.draw(deck,5);
    }

    draw(deck,amount=1){
        while (amount>0){
            const card = deck.draw();
            if (!card) throw new Error("Deck is empty");
            this.hand.push(card);
            amount--;
        }
    }

    knockout(){
        if(this.AA.length!==0){
            this.AA[0].health=this.AA[0].hp;
            this.AA[0].status="none";
            textBoxUpdate(`${this.name}'s ${this.AA[0].name} was knocked out!`);

            while (this.AA.length > 0){
                let card = this.AA.pop();
                console.log(`${this.name}'s ${card.name} was knocked out!`);
                this.discard.push(card);
                
            }
            
            
        }
    }

    
    
}

export default Player;