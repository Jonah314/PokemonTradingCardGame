import CardBasic from "./CardBasic.js";
import { textBoxUpdate } from "./textBox.js";
import * as AttackFunctions from "./attackFunctionality.js";
import { coinFlipper } from "./coinFlipper.js"; 

// Factory functions to create OverGrown cards
function createBulbasaur() {
    const card = new CardBasic(
        "Bulbasaur",
        40,
        "grass",
        "fire",
        "none",
        "Leech Seed",
        20,
        ['grass','grass'],
        "",
        0,
        [],
        1,
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
        ['grass', 'star','star'],
        "Poisonpowder",
        20,
        ['grass','grass','grass'],
        1,
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
        "star",
        "Ember",
        30,
        "fire, star",
        1,
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
        ['star','star','star'],
        "Poison Sting",
        40,
        ['grass','grass','grass'],
        1,
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
        ['water','water','water'],
        "Bubblebeam",
        40,
        ['water','water','water','water'],
        3,
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
        ['star','star'],
        "Poisonpowder",
        20,
        ['grass','grass'],
        2,
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
        ['star'],
        "flail",
        10,
        ['water'],
        1,
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
        ['water','water'],
        "Star Freeze",
        20,
        ['water','star','star'],
        1,
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
        ['water'],
        "",
        0,
        [],
        1,
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
        ['grass'],  
        "",
        0,
        [],
        1,
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

// Card Factory for BrushFire Cards

function createNinetales(){
    const card = new CardBasic(
        "Ninetales",
        80,
        "fire",
        "water",
        "none",
        "Lure",
        0,
        ['star','star'],
        "Fire Blast",
        80,
        ["fire","fire","fire","fire"],  
        1,
        "./Img/ninetales.jpg"
    );
    function FireBlast() {
        return 80;
    }   
    card.attackObjectTwo.specialAttack = FireBlast;
    return card;
}

function createTangela(){
    const card = new CardBasic(
        "Tangela",
        50,
        "grass",
        "fire",
        "none",
        "Bind",
        20,
        ['grass','star'],
        "Poison Powder",
        20,
        ["grass","grass","grass"],
        2,
        "./Img/tangela.jpg"
    );
    function Bind(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "paralyzed");
        }
        return 20;
    }
    card.attackObjectOne.specialAttack = Bind;

    function PoisonPowder(player, rival) {
        AttackFunctions.setStatusEffect(rival, "poisoned");
        return 20;
    }

    card.attackObjectTwo.specialAttack = PoisonPowder;
    return card;
}

function createNidoranMale(){
    const card = new CardBasic(
        "Nidoran",
        40,
        "grass",
        "psychic",
        "none",
        "Horn Hazzard",
        30,
        ['grass'],
        "",
        0,  
        [],
        1,
        "./Img/nidoranmale.jpg"
    );
    function HornHazzard(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Tails") {
            setTimeout(() => {
                textBoxUpdate(`${card.name} missed!`);
            }, 300);
            
            return 0;
        }else {
            return 30;
        }
    }
    card.attackObjectOne.specialAttack = HornHazzard;
    return card;
}

function createArcanine(){
    const card = new CardBasic(
        "Arcanine",
        100,
        "fire",
        "water",
        "none",
        "Flamethrower",
        50,
        ['fire','fire','star'],
        "Take Down",
        80,
        ["fire","fire","star","star"],
        3,
        "./Img/arcanine.jpg"
    );
    function Flamethrower() {
        return 50;
    }
    card.attackObjectOne.specialAttack = Flamethrower;
    function TakeDown(player, rival) {
        card.counters += 30;
        card.health -= 30;
        textBoxUpdate(`${card.name} took 30 damage from recoil!`);
        return 80;
    }

    card.attackObjectTwo.specialAttack = TakeDown;
    return card;
}

function createGrowlithe(){
    const card = new CardBasic(
        "Growlithe",
        60,
        "fire",
        "water",
        "none",
        "Flare",
        20,
        ['fire','star'],
        "",
        0,
        [],
        1,
        "./Img/growlithe.jpg"

    );
    return card;
}

function createVulpix(){
    const card = new CardBasic(
        "Vulpix",
        50,
        "fire",
        "water",
        "none",
        "Confuse Ray",
        10,
        ['fire','fire'],
        "",
        0,  
        [],
        1,
        "./Img/vulpix.jpg"
    );
    function ConfuseRay(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "confused");
        }
        return 10;
    }
    card.attackObjectOne.specialAttack = ConfuseRay;
    return card;
}

function createCharmeleon(){
    const card = new CardBasic(
        "Charmeleon",
        80,
        "fire",
        "water",
        "none",
        "Slash",
        30,
        ["star","star","star"],
        "Flamethrower",
        50,
        ["fire","fire","star"],
        1,
        "./Img/charmeleon.jpg"
    );
    function Flamethrower() {
        return 50;
    }
    card.attackObjectTwo.specialAttack = Flamethrower;
    return card;
}

//Creating Card Factory for Zap Deck

function createMewtwo(){
    const card = new CardBasic(
        "Mewtwo",
        60,
        "psychic",
        "psychic",
        "none",
        "Psychic",
        10,
        ['psychic','star'],
        "Barrier",
        0,
        ["psychic","psychic"],
        3,
        "./Img/mewtwo.jpg"
    );
    return card;
}

function createKadabra(){
    const card = new CardBasic(
        "Kadabra",
        60,
        "psychic",
        "psychic",
        "none",
        "recover",
        0,
        ["psychic","psychic"],
        "Super Psy",
        50,
        ["psychic","psychic","star"],
        3,
        "./Img/kadabra.jpg"
    );
    function recover(player, rival) {
        AttackFunctions.heal(player, 60);
        return 0;
    }
    card.attackObjectOne.specialAttack = recover;

    return card;
}

function createJynx(){
    const card = new CardBasic(
        "Jynx",
        70,
        "psychic",
        "psychic",
        "none",
        "Doubleslap",
        10,
        ["psychic"],
        "Meditate",
        20,
        ["psychic","psychic","star"],
        3,
        "./Img/jynx.jpg"
    );
    function Doubleslap() {
        let damage = AttackFunctions.damageMultiplier(10, 2);
        return damage;
    }
    card.attackObjectOne.specialAttack = Doubleslap;

    function Meditate(player, rival) {
        let addOnDamage = rival.counters;
        return 20 + addOnDamage;
    }
    card.attackObjectTwo.specialAttack = Meditate;

    return card;
}

function createHaunter(){
    const card = new CardBasic( 
        "Haunter",
        60,
        "psychic",
        "psychic",
        "none",
        "Hypnosis",
        0,
        ["psychic"],
        "Dream Eater",
        50,
        ["psychic","psychic"],
        1,
        "./Img/haunter.jpg"
    );
    function Hypnosis(player, rival) {
        AttackFunctions.setStatusEffect(rival, "asleep");
        return 0;
    }

    card.attackObjectOne.specialAttack = Hypnosis;
    
    function DreamEater(player, rival) {
        if (rival.status === "asleep") {
            return 50;
        }else {
        return 0;
        }
    }
    card.attackObjectTwo.specialAttack = DreamEater;
    return card;
}

function createGastly(){
    const card = new CardBasic(
        "Gastly",
        30,
        "psychic",
        "none",
        "fighting",
        "Sleeping Gas",
        0,
        ["psychic"],
        "Destiny Bond",
        0,
        ["psychic","star"],
        0,
        "./Img/gastly.jpg"
    );

    function SleepingGas(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "asleep");
        }   
        return 0;
    }
    card.attackObjectOne.specialAttack = SleepingGas;

    function DestinyBond(player, rival) {
        return 0;
    }
    card.attackObjectTwo.specialAttack = DestinyBond;
    return card;
}

function createDrowzee(){
    const card = new CardBasic(
        "Drowzee",
        50,
        "psychic",
        "psychic",
        "none",
        "Pound",
        10,
        ['star'],
        "Confuse Ray",
        10,
        ["psychic","pscychic"],
        1,
        "./Img/drowzee.jpg"
    );
    function ConfuseRay(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "confused");
        }
        return 10;
    }
    card.attackObjectTwo.specialAttack = ConfuseRay;
    return card;
}

function createAbra(){
    const card = new CardBasic(
        "Abra",
        30,
        "psychic",
        "psychic",
        "none",
        "Psyschock",
        10,
        ["psychic"],
        "",
        0,
        [],
        0,
        "./Img/abra.jpg"
    );

    function Psyschock(player,rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "paralyzed");
        }
        return 10;
    }
    card.attackObjectOne.specialAttack = Psyschock;
    return card;
}

function createPikachu(){
    const card = new CardBasic(
        "Pikachu",
        40,
        "electric",
        "fighting",
        "none",
        "Gnaw",
        10,
        ["star"],
        "Thunder Jolt",
        30,
        ["electric","star"],
        1,
        "./Img/pikachu.jpg"
    );

    function ThunderJolt(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Tails") {
            card.health -= 10;
            card.counters += 10;
            textBoxUpdate(`${card.name} took 10 damage from recoil!...`);
        }
        return 30;
    }
    card.attackObjectTwo.specialAttack = ThunderJolt;
    return card;
}

function createMagnemite(){
    const card = new CardBasic(
        "Magnemite",
        40,
        "electric",
        "fighting",
        "none",
        "Thunder Wave",
        0,
        ["electric"],
        "Selfdestruct",
        40,
        ["electric","star"],
        1,
        "./Img/magnemite.jpg"
    );
    function ThunderWave(player, rival) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            AttackFunctions.setStatusEffect(rival, "paralyzed");
        }
        return 10;
    }
    card.attackObjectOne.specialAttack = ThunderWave;

    function Selfdestruct(player, rival) {
        card.health -= 40;
        card.counters += 40;
        textBoxUpdate(`${card.name} took 40 damage from selfdestruct!...`);
        return 40;
    }
    card.attackObjectTwo.specialAttack = Selfdestruct;
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
    createIvysaur,
    createNinetales,
    createTangela,
    createNidoranMale,
    createArcanine,
    createGrowlithe,
    createVulpix,
    createCharmeleon,
    createMewtwo,
    createKadabra,
    createJynx,
    createHaunter,
    createGastly,
    createDrowzee,
    createAbra,
    createPikachu,
    createMagnemite
};

