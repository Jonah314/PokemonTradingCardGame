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

let myPokemon = myPlayer.AA[0];
let rivalPokemon = createBulbasaur();

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
        setGame(myPokemon, rivalPokemon);
    });

});
