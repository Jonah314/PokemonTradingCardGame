import {setCounters, setRivalCounters, setPlayerCounters} from "./counterCalculations.js";
import { setBench } from "./setBenchPokemon.js";
import { setHandGraphics } from "./setHandGraphics.js";

function setGame(myPokemon,rivalPokemon, benchArray,player){
    setGameRival(rivalPokemon);
    setGamePlayer(myPokemon, benchArray, player);


  
}

function setGameRival(rivalPokemon){
    /*Set Rival Area */
    document.getElementById("AARHp").innerHTML=rivalPokemon.health + " Hp";
    setRivalCounters(rivalPokemon);

    /*Set Card Graphic */
    document.getElementById("AARGraphic").src = rivalPokemon.imgAddress;

    /*Set Attack names */
    setAttackNames(rivalPokemon, "AAR");
}
function setGamePlayer(myPokemon,benchArray,player){
     /*Set Player Area*/
    document.getElementById("AAPHp").innerHTML=myPokemon.health + " Hp";
    setPlayerCounters(myPokemon);

    /*Set Card Graphic */
    document.getElementById("AAPGraphic").src = myPokemon.imgAddress;

    /*Set Attack names */
    setAttackNames(myPokemon, "AAP");

    /* Set Bench Pokemon & name */
    setBench("P", benchArray);
    setHandGraphics(player);
}


function setAttackNames(pokemon,prefix){

    document.getElementById(`${prefix}AttackOne`).innerHTML=pokemon.attackObjectOne.attackName;
    if(pokemon.attackObjectTwo.attackName){
    document.getElementById(`${prefix}AttackTwo`).innerHTML=pokemon.attackObjectTwo.attackName;
    }else{
        document.getElementById(`${prefix}AttackTwo`).innerHTML="";
    }
}



export {setGame};