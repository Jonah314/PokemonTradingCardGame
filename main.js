
import bulbasaurAttacks from "./JavaScriptFolder/javaScript.js";
import CardBasic from "./JavaScriptFolder/CardBasic.js";


let myPokemon = new CardBasic("Pikachu");
let rivalPokemon = new CardBasic("squirtle");
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


function attack1(){
    
    
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