
import bulbasaurAttacks from "./JavaScriptFolder/javaScript.js";
import CardBasic from "./JavaScriptFolder/CardBasic.js";


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("attackOne").addEventListener("click", () => {
        setActivePokemon();
    });
});

let myPokemon = new CardBasic("Pikachu");





function setActivePokemon(){
    console.log(myPokemon.weakness);
    console.log(myPokemon.name);
    bulbasaurAttacks();
    console.log('testing');
    document.getElementById("activeAreaHp").innerHTML = "its working";
    document.getElementById("activeHp").innerHTML ="its working";
}