import { createBulbasaur,createCharmander } from "./cardFactory.js";



class Deck {
    cards=[];

    constructor(){
        this.initCards();
    }

    initCards(){
        console.log("Create a bunch of cards here");
        this.cards.push(createCharmander());
        this.cards.push(createBulbasaur());
        this.cards.push(createCharmander());
        this.cards.push(createBulbasaur());
        this.cards.push(createCharmander());
    }

    draw(){
        return this.cards.pop();
    }
}

let myDeck = new Deck;
console.log(myDeck.cards);


export default Deck;