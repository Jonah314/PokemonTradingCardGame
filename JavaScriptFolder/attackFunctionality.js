//Use these functions to implement attack functionality
import { textBoxUpdate } from "./textBox.js";
import { coinFlipper } from "./coinFlipper.js";

function setStatusEffect(defender, status) {
    defender.status = status;
    setTimeout(() => {
        textBoxUpdate(`${defender.name} is now ${status}!`);
        }, 300);
}

function heal(attacker, healAmount) {
    let orginalHealth = attacker.health;

    if (attacker.health + healAmount > attacker.hp) {
        attacker.health = attacker.hp;
        attacker.counters = 0;
    }else{
        attacker.counters -= healAmount;
        attacker.health += healAmount;
    }
    if (attacker.health > orginalHealth) {
        setTimeout(() => {
        textBoxUpdate(`${attacker.name} healed for ${attacker.health-orginalHealth} HP!`);
        }, 500);
    }
}
function damageMultiplier(baseDamage, multiplier) {
    let totalDamage=0;
    while (multiplier > 0) {
        let coinResult = coinFlipper();
        if (coinResult === "Heads") {
            totalDamage += baseDamage;
        } 
        multiplier--;
    }
    if(totalDamage ===0){
        textBoxUpdate(`All coin flips were tails! No damage dealt!`);    
    }

    return totalDamage;
}


export { setStatusEffect, heal, damageMultiplier };