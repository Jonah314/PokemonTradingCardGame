
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
        playerAttack("One",myPokemon, rivalPokemon);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("AAPAttackTwo").addEventListener("click", () => {
        playerAttack("Two",myPokemon, rivalPokemon);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("setGame").addEventListener("click", () => {
        setGame(myPokemon,rivalPokemon);
    });
});





function playerAttack(Num,Attacker,Defender){
    /* Get myPokemons attack power */
    let PWR = Attacker[`attackObject${Num}`]._attackPWR;

    /*Special javaScript here for special attacks */
    Attacker[`attackObject${Num}`].specialAttack();
    
    /* Calculate for weakness and resitance */
    let damage =damageCalculations(PWR, Attacker, Defender);

    /*Inflict Damage to Rivals Pokemon */
    Attacker.health -= damage;

    /*Set Counters for rivalpokemonObject */
    Attacker.counters += damage;

    /*Set HTML Graphics for Counters */
    setRivalCounters(Defender);

    /*Set HTML Graphics for Health */
    setRivalHealth(Defender);
}





function setActivePokemon(){
    
    
}

