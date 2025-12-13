import * as cardFactory from "./cardFactory.js";


function deckFactoryOvergrowth() {
    const deck = [];

    const add = (card, count) => {
        for (let i = 0; i < count; i++) {
            deck.push(card());
        }
    };

    add(cardFactory.createBulbasaur, 4);
    add(cardFactory.createBeedrill, 1);
    add(cardFactory.createGyarados, 1);
    add(cardFactory.createIvysaur, 2);
    add(cardFactory.createKakuna, 2);
    add(cardFactory.createMagikarp, 2);
    add(cardFactory.createStarmie, 3);
    add(cardFactory.createStaryu, 4);
    add(cardFactory.createWeedle, 4);

    return deck;
}

export {deckFactoryOvergrowth};