import CardBasic from "./CardBasic.js";

function createBulbasaur() {
    const card = new CardBasic(
        "Bulbasaur",
        40,
        "grass",
        "fire",
        "none",
        "Leech Seed",
        20,
        "",
        0,
        "./Img/bulbasaur.png"
    );

    function leechSeed() {
        console.log("special attack used");
        if(card.health<40){
            card.health +=10;
            card.counters -=10;
            console.log("I healed myself");
        }
    }
    card.attackObjectOne.specialAttack = leechSeed;

    return card;
}

function createIvysaur(){
  const card = new CardBasic(
        "Ivysaur",
        60,
        "grass",
        "fire",
        "none",
        "VineWhip",
        30,
        "Poisonpowder",
        20,
        "./Img/ivysaur.jpg"
    );
    return card;
}

function createCharmander(){
    const card = new CardBasic(
        "Charmander",
        50,
        "fire",
        "water",
        "none",
        "Scratch",
        10,
        "Ember",
        30,
        "./Img/charmander.jpg"
    );
    function ember() {
        console.log("special attack used");
        console.log("I burnt up an Energy Card");
    }
    card.attackObjectTwo.specialAttack = ember;

    return card;
}

function createBeedrill(){
  const card = new CardBasic(
        "Beedrill",
        80,
        "grass",
        "fire",
        "fighting",
        "Twineedle",
        30,
        "Poison Sting",
        40,
        "./Img/beedrill.jpg"
    );
    return card;
}

function createGyarados(){
    const card = new CardBasic(
        "Gyarados",
        100,
        "water",
        "grass",
        "fighting",
        "Dragon Rage",
        50,
        "Bubblebeam",
        40,
        "./Img/gyarados.jpg"
    );
    return card;
}

function createKakuna(){
    const card = new CardBasic(
        "Kakuna",
        80,
        "grass",
        "fire",
        "none",
        "stiffen",
        0,
        "Poisonpowder",
        20,
        "./Img/kakuna.jpg"
    );
    return card;
}

function createMagikarp(){
    const card = new CardBasic(
        "Magikarp",
        30,
        "water",
        "electric",
        "none",
        "Tackle",
        10,
        "flail",
        10,
        "./Img/magikarp.jpg"
    );
    return card;
}

function createStarmie(){
    const card = new CardBasic(
        "Starmie",
        60,
        "water",
        "electric",
        "none",
        "Recover",
        0,
        "Star Freeze",
        20,
        "./Img/Starmie.jpg"
    );
    return card;
}

function createStaryu(){
    const card = new CardBasic(
        "Staryu",
        40,
        "water",
        "electric",
        "none",
        "slap",
        20,
        "",
        0,
        "./Img/Staryu.jpg"
    );
    return card;
}

function createWeedle(){
    const card = new CardBasic(
        "Weedle",
        40,
        "grass",
        "fire",
        "none",
        "Poison Sting",
        10,
        "",
        0,
        "./Img/Weedle.jpg"
    );
    return card;
}








export {
    createBulbasaur,
    createCharmander,
    createBeedrill,
    createGyarados,
    createKakuna,
    createMagikarp,
    createStarmie,
    createStaryu,
    createWeedle,
    createIvysaur
};

