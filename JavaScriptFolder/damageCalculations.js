import CardBasic from "./CardBasic.js";

// Should take in player objects, 
function damageCalculations(pwr, player,rival ){
    let damageOutput= pwr;
    if(player.AA[0].type=== rival.AA[0].weakness){
        damageOutput=pwr*2;
        console.log("weakness attack doubled");
    }else if (player.AA[0].type === rival.AA[0].resistance){

        console.log("resistance attack power reduced by 30");
    }
    return damageOutput;
}

export default damageCalculations;