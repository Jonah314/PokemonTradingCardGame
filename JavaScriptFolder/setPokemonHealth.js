

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


export{setPokemonHealth, setRivalHealth,setPlayerHealth, setAllActiveAreaHealth};