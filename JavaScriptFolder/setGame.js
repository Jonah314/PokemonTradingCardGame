import {setCounters} from "./counterCalculations.js";
import { setBench } from "./setBenchPokemon.js";
import { setHandGraphics } from "./setHandGraphics.js";


function setGame(myPlayer, rivalPlayer){
    setGameSolo(myPlayer);
    setGameSolo(rivalPlayer);

    setCounters(myPlayer,rivalPlayer);
    setBench(myPlayer);
    setHandGraphics(myPlayer);
    updateDiscardPileImg(myPlayer);
}

/* Sets individual players up */
function setGameSolo(player){
    // If there are no cards in Active area then reset them
    activeAreaChecker(player);


    /* Set Players Health, Graphic then Attack names */
    if(player.AA.length !== 0){
    document.getElementById(`AA${player.suffix}Hp`).innerHTML=player.AA[0].health + " Hp";
    document.getElementById(`${player.suffix}AAGraphic`).src=player.AA[0].imgAddress;
    setAttackNames(player);
    }else {
        console.log(`${player.name} does not have any cards in the Acitve Area`);
    }
}


function setAttackNames(player){
    document.getElementById(`AA${player.suffix}AttackOne`).innerHTML=player.AA[0].attackObjectOne.attackName;
    if(player.AA[0].attackObjectTwo.attackName){
    document.getElementById(`AA${player.suffix}AttackTwo`).innerHTML=player.AA[0].attackObjectTwo.attackName;
    }else{
        document.getElementById(`AA${player.suffix}AttackTwo`).innerHTML="";
    }
}


//This function checks if there is an Active Area pokemon and if not it resets the values
function activeAreaChecker(player){
    if(!player.AA[0]){
        document.getElementById(`AA${player.suffix}Hp`).innerHTML= "_ Hp";
        document.getElementById(`${player.suffix}AAGraphic`).src= "";
        document.getElementById(`AA${player.suffix}AttackOne`).innerHTML= "";
        document.getElementById(`AA${player.suffix}AttackTwo`).innerHTML="";
    }
}

function updateDiscardPileImg(player){
    if(player.discard.length!==0){
        let lastIndex = player.discard.length -1; 
        document.getElementById(`${player.suffix}Discard`).src=player.discard[lastIndex].imgAddress;
    }
}



export {setGame};