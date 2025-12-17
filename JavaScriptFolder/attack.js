import { textBoxUpdate } from "./textBox.js";
import damageCalculations from "./damageCalculations.js";


//need to change this to player information instead
function attack(Num,Attacker,Defender){
    /* Get myPokemons attack power */
    let PWR = Attacker[`attackObject${Num}`].attackPWR;

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

function betterAttackFunction(Num,Attacker,Defender){
    console.log(Attacker.AA[0][`attackObject${Num}`].attackPWR);
    
    /* Get myPokemons attack power */
    /*Special javaScript here for special attacks */
    let PWR = Attacker.AA[0][`attackObject${Num}`].specialAttack(Attacker.AA[0], Defender.AA[0]);

    /* Calculate for weakness and resitance */
    let damage =damageCalculations(PWR, Attacker, Defender);

    /*Inflict Damage to Rivals Pokemon */
    Defender.AA[0].health -= damage;

    /*Set Counters for rivalpokemonObject */
    Defender.AA[0].counters += damage;
    
    let attackMessage;
    if(damage>0){
        attackMessage = `${Attacker.AA[0].name} used ${Attacker.AA[0][`attackObject${Num}`].attackName} and dealt ${damage} damage!`;
    }else {
        attackMessage = `${Attacker.AA[0].name} used ${Attacker.AA[0][`attackObject${Num}`].attackName}!`;
    }
    
    textBoxUpdate(attackMessage);

}


export {attack, betterAttackFunction};