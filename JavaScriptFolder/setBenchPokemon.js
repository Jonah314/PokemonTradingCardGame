function setBench(suffix,benchArray){
    setBenchPokemon(suffix,benchArray);
    setBenchPokemonNames(suffix, benchArray);
}



function setBenchPokemon(suffix, benchArray){
    /*variables I need, the Pokemon, and the bench seat and the html Id*/
    
    
    document.getElementById(`${suffix}b1Graphic`).src= benchArray[0].imgAddress;
    document.getElementById(`${suffix}b2Graphic`).src = benchArray[1].imgAddress;
    document.getElementById(`${suffix}b3Graphic`).src= benchArray[2].imgAddress;
    document.getElementById(`${suffix}b4Graphic`).src = benchArray[3].imgAddress;
    document.getElementById(`${suffix}b5Graphic`).src = benchArray[4].imgAddress;
}

function setBenchPokemonNames(suffix, benchArray){
    document.getElementById(`${suffix}b1Name`).innerHTML = benchArray[0].name;
}

export {setBench};