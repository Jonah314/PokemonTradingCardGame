

/* AARHp  and AAPHp*/
function setPokemonHealth(pokemon, prefix){
    console.log(pokemon.health);
    document.getElementById(`${prefix}Hp`).innerHTML = pokemon.health + "Hp"
}

function setRivalHealth(pokemon){
    setPokemonHealth(pokemon, "AAR");
}

function setPlayerHealth(pokemon){
    setPokemonHealth(pokemon, "AAP");
}

function setAllActiveAreaHealth(myPokemon, rival){
    setRivalHealth(rival);
    setPlayerHealth(myPokemon);
}
function betterSetAllActiveAreaHealth(player, rival){
    
    document.getElementById(`AA${rival.suffix}Hp`).innerHTML = rival.AA[0].health + " Hp";
    document.getElementById(`AA${player.suffix}Hp`).innerHTML = player.AA[0].health + " Hp";
}

export{setPokemonHealth, setRivalHealth,setPlayerHealth, setAllActiveAreaHealth,betterSetAllActiveAreaHealth};