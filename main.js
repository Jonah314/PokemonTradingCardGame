import bulbasaurAttacks from "./JavaScriptFolder/javaScript.js";
import CardBasic from "./JavaScriptFolder/CardBasic.js";

import { createBulbasaur, createCharmander } from "./JavaScriptFolder/cardFactory.js";
import { setGame } from "./JavaScriptFolder/setGame.js";
import { attack } from "./JavaScriptFolder/attack.js";
import { setAllActiveAreaHealth, setRivalHealth } from "./JavaScriptFolder/setPokemonHealth.js";
import { setCounters, setRivalCounters, setPlayerCounters } from "./JavaScriptFolder/counterCalculations.js";
import Deck from "./JavaScriptFolder/deck.js";
import { deckFactoryOvergrowth } from "./JavaScriptFolder/deckFactory.js";
import Player from "./JavaScriptFolder/player.js";

let myDeck = new Deck(deckFactoryOvergrowth);
myDeck.shuffle();
let myPlayer = new Player("Jonah");
myPlayer.setActivePokemon(myDeck);
myPlayer.setBenchPokemon(myDeck, 'b1');
myPlayer.setBenchPokemon(myDeck,'b2');
myPlayer.setBenchPokemon(myDeck, 'b3');
myPlayer.setBenchPokemon(myDeck, 'b4');
myPlayer.setBenchPokemon(myDeck,'b5');
myPlayer.setInitHand(myDeck);
console.log("I Drew", myPlayer.hand);


let rivalPokemon = createBulbasaur();








/* Don't Touch. Use setActive and setBench to set the pokemon*/
let myPokemon = myPlayer.AA[0];
let b1Pokemon = myPlayer.b1[0];
let b2Pokemon = myPlayer.b2[0];
let b3Pokemon = myPlayer.b3[0];
let b4Pokemon = myPlayer.b4[0];
let b5Pokemon = myPlayer.b5[0];
let benchArray = [b1Pokemon,b2Pokemon,b3Pokemon,b4Pokemon,b5Pokemon];
console.log(benchArray);





document.addEventListener("DOMContentLoaded", () => {

    // Helper: run attack + update UI
    const handleAttack = (move, attacker, defender) => {
        attack(move, attacker, defender);
        setAllActiveAreaHealth(myPokemon, rivalPokemon);
        setCounters(myPokemon, rivalPokemon);
    };

    // Player attack buttons
    document.getElementById("AAPAttackOne")?.addEventListener("click", () => {
        handleAttack("One", myPokemon, rivalPokemon);
    });

    document.getElementById("AAPAttackTwo")?.addEventListener("click", () => {
        handleAttack("Two", myPokemon, rivalPokemon);
    });

    // Rival attack buttons
    document.getElementById("AARAttackOne")?.addEventListener("click", () => {
        handleAttack("One", rivalPokemon, myPokemon);
    });

    document.getElementById("AARAttackTwo")?.addEventListener("click", () => {
        handleAttack("Two", rivalPokemon, myPokemon);
    });

    // Set game button
    document.getElementById("setGame")?.addEventListener("click", () => {
        setGame(myPokemon, rivalPokemon,benchArray);
    });

});
