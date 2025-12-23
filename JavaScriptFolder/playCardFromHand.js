




function playPokemon(player, btn){
    let id = btn.id.substring(1,3)
    console.log(`you clicked on ${player.suffix}${id} box`);

    if(player.pendingPlacement.card){
        let card = player.pendingPlacement.card;
        player.setBenchPokemon(card,id);

    }else {
        console.log("No cards Have been selected yet");
    }
    
    
}

function playEnergy(){

}

function playTrainer(){

}

export { playPokemon };