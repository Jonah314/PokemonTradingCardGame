//Use these functions to implement attack functionality
import { textBoxUpdate } from "./textBox.js";

function setStatusEffect(defender, status) {
    defender.status = status;
    setTimeout(() => {
        textBoxUpdate(`${defender.name} is now ${status}!`);
        }, 2300);
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
        }, 2300);
    }
}


export { setStatusEffect, heal };