import { resetGlows } from "./selection.js";




function playPokemon(player, btn){
    let id = btn.id.substring(1,3)
    console.log(`you clicked on ${player.suffix}${id} box`);

    if(player.pendingPlacement.card){
        let card = player.pendingPlacement.card;
        player.setBenchPokemon(card,id);
        let index = player.pendingPlacement.handIndex;
        player.hand.splice(index,1);
        Object.keys(player.pendingPlacement).forEach(key => {
            delete player.pendingPlacement[key];
        });

        console.log(player.pendingPlacement);

        resetGlows();
    }else {
        console.log("No cards Have been selected yet");
    }
    
    
}

function playEnergy(){

}

function playTrainer(){

}

export { playPokemon };