import * as cardFactory from "./cardFactory.js";
import {createDoubleColorlessEnergy, createEnergy} from "./cardEnergyFactory.js"


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

    const energyArray = createEnergy('Grass', 12).concat(createEnergy('Water', 16));
    deck.push(...energyArray);
    return deck;
}



function deckFactoryFireBrush() {
    const deck = [];

    const add = (card, count) => {
        for (let i = 0; i < count; i++) {
            deck.push(card());
        }
    };

    add(cardFactory.createNinetales, 1);
    add(cardFactory.createWeedle, 4);
    add(cardFactory.createTangela, 2);
    add(cardFactory.createNidoranMale, 4);
    add(cardFactory.createArcanine, 1);
    add(cardFactory.createGrowlithe, 2);
    add(cardFactory.createVulpix, 2);
    add(cardFactory.createCharmander, 4);


    const energyArray = createEnergy('Grass', 10).concat(createEnergy('Fire', 18));
    deck.push(...energyArray);
    return deck;
}

function deckFactoryZap() {
    const deck = [];
    const add = (card, count) => {
        for (let i = 0; i < count; i++) {
            deck.push(card());
        }
    };

    add(cardFactory.createMewtwo, 1);
    add(cardFactory.createPikachu, 4);
    add(cardFactory.createMagnemite, 3);
    add(cardFactory.createKadabra, 1);
    add(cardFactory.createJynx, 2);
    add(cardFactory.createHaunter, 2);
    add(cardFactory.createGastly, 3);
    add(cardFactory.createDrowzee, 2);
    add(cardFactory.createAbra, 3);

    const energyArray = createEnergy('Lightning', 12).concat(createEnergy('Psychic', 16));
    deck.push(...energyArray);

    return deck;
}

export {deckFactoryOvergrowth, deckFactoryFireBrush, deckFactoryZap};
