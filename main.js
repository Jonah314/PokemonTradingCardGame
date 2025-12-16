import bulbasaurAttacks from "./JavaScriptFolder/javaScript.js";
import CardBasic from "./JavaScriptFolder/CardBasic.js";

import { createBulbasaur, createCharmander } from "./JavaScriptFolder/cardFactory.js";
import { setGame } from "./JavaScriptFolder/setGame.js";
import { attack,betterAttackFunction } from "./JavaScriptFolder/attack.js";
import { setAllActiveAreaHealth, setRivalHealth,betterSetAllActiveAreaHealth } from "./JavaScriptFolder/setPokemonHealth.js";
import {setCounters} from "./JavaScriptFolder/counterCalculations.js";
import Deck from "./JavaScriptFolder/deck.js";
import { deckFactoryOvergrowth } from "./JavaScriptFolder/deckFactory.js";
import Player from "./JavaScriptFolder/player.js";
import { setBenchButton } from "./JavaScriptFolder/setBenchButton.js";
import { coinFlipper } from "./JavaScriptFolder/coinFlipper.js";

/*Setting up Player */
let myPlayer = new Player("Jonah","p");
let myDeck = new Deck(deckFactoryOvergrowth);
myDeck.shuffle();
myPlayer.setInitHand(myDeck);
;


/*Setting up Rival */
let rivalPlayer = new Player("Rival", "r");
let rivalDeck = new Deck(deckFactoryOvergrowth);
rivalDeck.shuffle();
rivalPlayer.setInitHand(rivalDeck);
myPlayer.AA[0]=createBulbasaur();
myPlayer.AA[1]=createBulbasaur();
myPlayer.AA[2]=createCharmander();

let rivalPokemon = createBulbasaur();
rivalPlayer.setActivePokemon(rivalPokemon);




/* For testing purposes, will restructure later */
myPlayer.setBenchPokemon(myDeck, 'b1');
myPlayer.setBenchPokemon(myDeck,'b2');
myPlayer.setBenchPokemon(myDeck, 'b3');
myPlayer.setBenchPokemon(myDeck, 'b4');
myPlayer.setBenchPokemon(myDeck,'b5');

console.log("my bench pokemon are:", myPlayer.b1[0]);



document.addEventListener("DOMContentLoaded", () => {

    // Helper: run attack + update UI
    const handleAttack = (move, attacker, defender) => {
        betterAttackFunction(move, attacker, defender);
        betterSetAllActiveAreaHealth(myPlayer, rivalPlayer);
        setCounters(myPlayer, rivalPlayer);
    };

    // Player attack buttons
    document.getElementById("AApAttackOne")?.addEventListener("click", () => {
        handleAttack("One", myPlayer, rivalPlayer);
    });

    document.getElementById("AApAttackTwo")?.addEventListener("click", () => {
        handleAttack("Two", myPlayer, rivalPlayer);
    });

    // Rival attack buttons
    document.getElementById("AArAttackOne")?.addEventListener("click", () => {
        handleAttack("One", rivalPlayer, myPlayer);
    });

    document.getElementById("AArAttackTwo")?.addEventListener("click", () => {
        handleAttack("Two", rivalPlayer, myPlayer);
    });
    
    //Set Bench Pokemon Buttons
    document.getElementById("Pb1button")?.addEventListener("click", (e)=>{
        const button = e.currentTarget;
        
        setBenchButton(myPlayer,button);
        setGame(myPlayer,rivalPlayer);
    })

    //Set draw buttons
    document.getElementById("pDrawButton")?.addEventListener("click", () => {
        myPlayer.draw(myDeck);
    
        setGame(myPlayer,rivalPlayer);
    });
     //Set flip button
    document.getElementById("flip")?.addEventListener("click", () => {
        coinFlipper();
    });



    //Set Discard Buttons
      document.getElementById("AApDiscardButton")?.addEventListener("click", () => {
        myPlayer.knockout(myDeck);
    
        setGame(myPlayer,rivalPlayer);
    });

    // Set game button
    document.getElementById("setGame")?.addEventListener("click", () => {
        setGame(myPlayer,rivalPlayer);
    });

    

});
