
import bulbasaurAttacks from "./JavaScriptFolder/javaScript.js";
import CardBasic from "./JavaScriptFolder/CardBasic.js";

import {createBulbasaur, createCharmander } from "./JavaScriptFolder/cardFactory.js";
import {setGame} from "./JavaScriptFolder/setGame.js";
import {attack} from "./JavaScriptFolder/attack.js";
import { setAllActiveAreaHealth, setRivalHealth } from "./JavaScriptFolder/setPokemonHealth.js";
import { setCounters, setRivalCounters, setPlayerCounters} from "./JavaScriptFolder/counterCalculations.js";


let myPokemon = createCharmander();

let rivalPokemon = createBulbasaur();


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("AAPAttackOne").addEventListener("click", () => {
        attack("One",myPokemon, rivalPokemon);
        setAllActiveAreaHealth(myPokemon,rivalPokemon);
        setCounters(myPokemon,rivalPokemon);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("AAPAttackTwo").addEventListener("click", () => {
        attack("Two",myPokemon, rivalPokemon);
        setAllActiveAreaHealth(myPokemon,rivalPokemon);
        setCounters(myPokemon,rivalPokemon);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("AARAttackOne").addEventListener("click", () => {
        attack("One",rivalPokemon,myPokemon);
        setAllActiveAreaHealth(myPokemon,rivalPokemon);
        setCounters(myPokemon,rivalPokemon);
        });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("AARAttackTwo").addEventListener("click", () => {
        attack("Two",rivalPokemon, myPokemon);
        setAllActiveAreaHealth(myPokemon,rivalPokemon);
        setCounters(myPokemon,rivalPokemon);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("setGame").addEventListener("click", () => {
        setGame(myPokemon,rivalPokemon);
    });
});











