
import bulbasaurAttacks from "./JavaScriptFolder/javaScript.js";
import CardBasic from "./JavaScriptFolder/CardBasic.js";
import {setCounters, setRivalCounters, setPlayerCounters} from "./JavaScriptFolder/counterCalculations.js";
import {setPokemonHealth, setRivalHealth,setPlayerHealth} from "./JavaScriptFolder/setPokemonHealth.js";
import damageCalculations from "./JavaScriptFolder/damageCalculations.js";
import {createBulbasaur, createCharmander } from "./JavaScriptFolder/cardFactory.js";
import {setGame} from "./JavaScriptFolder/setGame.js"


let myPokemon = createCharmander();

let rivalPokemon = createBulbasaur();


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("AAPAttackOne").addEventListener("click", () => {
        attack1();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("AAPAttackTwo").addEventListener("click", () => {
        setActivePokemon();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("setGame").addEventListener("click", () => {
        setGame(myPokemon,rivalPokemon);
    });
});





function attack1(){
    /* Get myPokemons attack power */
    let PWR = myPokemon.attackObjectOne._attackPWR;


    /*Special javaScript here for special attacks */
    myPokemon._attackObjectOne.specialAttack();
    
    /* Calculate for weakness and resitance */
    let damage =damageCalculations(PWR, myPokemon, rivalPokemon);

    /*Inflict Damage to Rivals Pokemon */
    rivalPokemon.health -= damage;

    /*Set Counters for rivalpokemonObject */
    rivalPokemon.counters += damage;

    /*Set HTML Graphics for Counters */
    setRivalCounters(rivalPokemon);

    /*Set HTML Graphics for Health */
    setRivalHealth(rivalPokemon);
    setPlayerHealth(myPokemon);
}



function setActivePokemon(){
    
    
}

