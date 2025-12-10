import CardBasic from "./CardBasic.js";

function damageCalculations(pwr,poke1,poke2 ){
    let damageOutput= pwr;
    if(poke1.type=== poke2.weakness){
        damageOutput=pwr*2;
        console.log("weakness attack doubled");
    }else if (poke1.type === poke2.resistance){

        console.log("resistance attack power reduced by 30");
    }
    return damageOutput;
}

export default damageCalculations;