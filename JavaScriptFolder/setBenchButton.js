import { setGame } from "./setGame.js";


/* Player & suffix */

 /*I need to get the playerBench pokemon and set it to the active area pokemon*/ 
    
    /* Later I need to create a statement to check if the area is empty*/
function setBenchButton(player, suffix,myPokemon,rivalPokemon, benchArray,){
   
    let cardToMove=player.b1[0];
    player.setActivePokemon(cardToMove);

    console.log('bench function was called');
    myPokemon = player.AA[0];
    setGame(myPokemon,rivalPokemon, benchArray,player);
}

export {setBenchButton};