import { setGame } from "./setGame.js";


/* Player & suffix */

 /*I need to get the playerBench pokemon and set it to the active area pokemon*/ 
    
    /* Later I need to create a statement to check if the area is empty*/
function setBenchButton(player, button){
   // I need to check if the AA array is empty, if not Ill need to send an error message
   console.log(player);
   if(!player.AA || !player.AA.length===0){
        throw new Error("AA is not empty or does not exist");
   }

   
    let bench = button.id.substring(1,3);
    let cardToMove=player[`${bench}`][0];
    player.setActivePokemon(cardToMove);


    console.log('bench function was called');
    
}

export {setBenchButton};