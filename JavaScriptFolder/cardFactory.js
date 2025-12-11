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
            console.log("I healed myself");
        }
    }

    card.attackObjectOne.specialAttack = leechSeed;

    return card;
}

export { createBulbasaur };
