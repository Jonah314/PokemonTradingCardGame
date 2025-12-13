 
// Deck.js
class Deck {
    /*In my constructor i am taking in a deckFactory function to create my deck from the factory */
    constructor(deckFactory) {
        this.cards = deckFactory();
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw() {
        return this.cards.pop();
    }

    get size() {
        return this.cards.length;
    }
}

export default Deck;
