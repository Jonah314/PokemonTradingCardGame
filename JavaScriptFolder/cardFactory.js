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







export { createBulbasaur,createCharmander };
