class Player{
    name=""
    hand=[];
    AA=[];
    b1=[];
    b2=[];
    b3=[];
    b4=[];
    b5=[];
    prizes=[];
    discard=[];

    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    set name(myName){
        this._name=myName;
    }

    setActivePokemon(deck){
        this.AA.push(deck.draw());
        console.log("my active pokemon is" + this.AA[0].name);
    }
}

export default Player;