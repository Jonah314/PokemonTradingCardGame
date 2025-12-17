import CardBasic from "./CardBasic.js";
import { textBoxUpdate } from "./textBox.js";
import * as AttackFunctions from "./attackFunctionality.js";
import { coinFlipper } from "./coinFlipper.js"; 


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

    function leechSeed(player, rival) {
        AttackFunctions.heal(player, 10);
        return 20
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
    function PoisonPowder(player, rival) {
        AttackFunctions.setStatusEffect(rival, "poisoned");
        return 20;
    }
    card.attackObjectTwo.specialAttack = PoisonPowder;
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
        return 30;
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
    function Twineedle(player, rival) {
        let damage= AttackFunctions.damageMultiplier(30, 2);
        return damage;
    }
    card.attackObjectOne.specialAttack = Twineedle;

    function PoisonSting(player, rival) {
        let coinResult = coinFlipper();
        if(coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "poisoned");
        }
        return 40;
    }
    card.attackObjectTwo.specialAttack = PoisonSting;
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
    function Bubblebeam(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "paralyzed");
        }
        return 40;
    }
    card.attackObjectTwo.specialAttack = Bubblebeam;
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
    function PoisonPowder(player, rival) {
        let coinResult = coinFlipper(); 
        if(coinResult === "Heads") {
        AttackFunctions.setStatusEffect(rival, "poisoned");
        }
        return 20;
    }
    card.attackObjectTwo.specialAttack = PoisonPowder;
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
    function flail() {
        let counters = card.counters;
        return counters * 1;
    }
    card.attackObjectTwo.specialAttack = flail;
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

    function Recover(player, rival) {
        AttackFunctions.heal(player, 60);
        return 0;
    }
    card.attackObjectOne.specialAttack = Recover;

    function StarFreeze(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "paralyzed");
        }
        return 20;
        }

    card.attackObjectTwo.specialAttack = StarFreeze;



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

    function PoisonSting(player, rival) {
        let coinResult = coinFlipper(); 
        if(coinResult === "Heads") {
        AttackFunctions.setStatusEffect(rival, "poisoned");
        }
        return 10;
    }
    card.attackObjectOne.specialAttack = PoisonSting;

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

