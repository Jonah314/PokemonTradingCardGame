function setBench(suffix,benchArray){
    setBenchPokemon(suffix,benchArray);
    setBenchPokemonNames(suffix, benchArray);
    setBenchPokemonHp(suffix, benchArray);
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
    document.getElementById(`${suffix}b2Name`).innerHTML = benchArray[1].name;
    document.getElementById(`${suffix}b3Name`).innerHTML = benchArray[2].name;
    document.getElementById(`${suffix}b4Name`).innerHTML = benchArray[3].name;
    document.getElementById(`${suffix}b5Name`).innerHTML = benchArray[4].name;
}

function setBenchPokemonHp(suffix,benchArray){
    document.getElementById(`${suffix}b1Hp`).innerHTML = `Hp= ${benchArray[0].health}`;
    document.getElementById(`${suffix}b2Hp`).innerHTML = `Hp= ${benchArray[1].health}`;
    document.getElementById(`${suffix}b3Hp`).innerHTML = `Hp= ${benchArray[2].health}`;
    document.getElementById(`${suffix}b4Hp`).innerHTML = `Hp= ${benchArray[3].health}`;
    document.getElementById(`${suffix}b5Hp`).innerHTML = `Hp= ${benchArray[4].health}`;
}



export {setBench};