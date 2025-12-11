import {setCounters, setRivalCounters, setPlayerCounters} from "./counterCalculations.js";
import {setPokemonHealth, setRivalHealth,setPlayerHealth} from "./setPokemonHealth.js";
import damageCalculations from "./damageCalculations.js";


function attack(Num,Attacker,Defender){
    /* Get myPokemons attack power */
    let PWR = Attacker[`attackObject${Num}`]._attackPWR;

    /*Special javaScript here for special attacks */
    Attacker[`attackObject${Num}`].specialAttack();
    
    /* Calculate for weakness and resitance */
    let damage =damageCalculations(PWR, Attacker, Defender);

    /*Inflict Damage to Rivals Pokemon */
    Defender.health -= damage;
    console.log("my health is " + Defender.health);
    /*Set Counters for rivalpokemonObject */
    Defender.counters += damage;
    console.log("my counters are " + Defender.counters);

}


export {attack};