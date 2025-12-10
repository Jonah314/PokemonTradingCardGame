
import bulbasaurAttacks from "./JavaScriptFolder/javaScript.js";
import CardBasic from "./JavaScriptFolder/CardBasic.js";
import {setCounters, setRivalCounters, setPlayerCounters} from "./JavaScriptFolder/counterCalculations.js";


let myPokemon = new CardBasic("Squirtle", 100, "water", "electric", "fire", 10, 10);

let rivalPokemon = new CardBasic("charmander",100, "fire","water","grass",30, 10);
let myPokemonHealth = myPokemon.hp - myPokemon.counters;
let rivalPokemonHealth = rivalPokemon.hp -rivalPokemon.counters;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("attackOne").addEventListener("click", () => {
        attack1();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("attackTwo").addEventListener("click", () => {
        setActivePokemon();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("setGame").addEventListener("click", () => {
        setGame();
    });
});


function setGame(){
    setGameRival();
    setGamePlayer();


   
}

function setGameRival(){
    /*Set Rival Area */
    document.getElementById("rivalHp").innerHTML=rivalPokemonHealth + " Hp";
    setRivalCounters(rivalPokemon);
}
function setGamePlayer(){
     /*Set Player Area*/
    document.getElementById("activeAreaHp").innerHTML=myPokemonHealth + " Hp";
}


function attack1(){
    /* Get myPokemons attack power */
    let PWR = myPokemon._attack1PWR;
    /* Calculate for weakness and resitance */
    let damage =damageCalculations(PWR, myPokemon, rivalPokemon);

    /*Inflict Damage to Rivals Pokemon */
    rivalPokemonHealth -= damage;

    /*Set Counters for rivalpokemonObject */
    rivalPokemon.counters += damage;

    /*Set HTML Graphics for Counters */
    setRivalCounters(rivalPokemon);

    document.getElementById("activeAreaHp").innerHTML = "its working";
    document.getElementById("activeHp").innerHTML ="its working";
}



function setActivePokemon(){
    console.log(myPokemon.weakness);
    console.log(myPokemon.name);
    console.log(myPokemonHealth);
    console.log(rivalPokemonHealth);
    bulbasaurAttacks();
    console.log('testing');
    document.getElementById("activeAreaHp").innerHTML = myPokemonHealth + " Hp";
    document.getElementById("activeHp").innerHTML ="its working";
}

function damageCalculations(pwr,poke1,poke2 ){
    let damageOutput= pwr;
    if(poke1.type=== poke2.weakness){
        damageOutput=pwr*2;
        console.log("weakness attack doubled");
    }else if (poke1.type === poke2.resistance){

        console.log("resistance attack power reduced by 30");
    }
    return damageOutput;
}