

import * as CardFactory from "./JavaScriptFolder/cardFactory.js";
import { setGame } from "./JavaScriptFolder/setGame.js";
import { attack,betterAttackFunction } from "./JavaScriptFolder/attack.js";
import { setAllActiveAreaHealth, setRivalHealth,betterSetAllActiveAreaHealth } from "./JavaScriptFolder/setPokemonHealth.js";
import {setCounters} from "./JavaScriptFolder/counterCalculations.js";
import Deck from "./JavaScriptFolder/deck.js";
import { deckFactoryOvergrowth,deckFactoryFireBrush,deckFactoryZap } from "./JavaScriptFolder/deckFactory.js";
import Player from "./JavaScriptFolder/player.js";
import { setBenchButton } from "./JavaScriptFolder/setBenchButton.js";
import { coinFlipper } from "./JavaScriptFolder/coinFlipper.js";
import { spaceOptionHighlighter, getPokemonPlacementOptions } from "./JavaScriptFolder/selection.js";
import {gameState} from "./JavaScriptFolder/gameState.js";
import { playPokemon } from "./JavaScriptFolder/playCardFromHand.js";


 const myGameState = new gameState;
 globalThis.myGameState = myGameState;
//creating variable to hold card objects when they need to be moved


/*Setting up Player */


/*Here I am using a callback function to create a deck. Each
 call back function is a different deck. */
 //My options are deckFactoryOvergrowth, deckFactoryFireBrush, and deckFactoryZap
//   |    |   |
//   V    V   V
let myDeck = new Deck(deckFactoryZap);
let myPlayer = new Player("Jonah","p");
let myPokemon = CardFactory.createCharmander();
myPlayer.setActivePokemon(myPokemon);

myDeck.shuffle();
myPlayer.setInitHand(myDeck);



/*Setting up Rival */
let rivalPlayer = new Player("Rival", "r");
let rivalDeck = new Deck(deckFactoryOvergrowth);
rivalDeck.shuffle();
rivalPlayer.setInitHand(rivalDeck);


let rivalPokemon = CardFactory.createCharmander();

rivalPlayer.setActivePokemon(rivalPokemon);




/* For testing purposes, will restructure later */
/* myPlayer.setBenchPokemon(myDeck, 'b1');
myPlayer.setBenchPokemon(myDeck,'b2');
myPlayer.setBenchPokemon(myDeck, 'b3');
myPlayer.setBenchPokemon(myDeck, 'b4');
myPlayer.setBenchPokemon(myDeck,'b5'); */


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
    const buttons = document.querySelectorAll(".pbButtons");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const btn = e.currentTarget;
            console.log("Button clicked:", btn.id);
            setBenchButton(myPlayer, btn);
            setGame(myPlayer, rivalPlayer);
    });
});




    //Set draw buttons
    document.getElementById("pDrawButton")?.addEventListener("click", () => {
        myPlayer.draw(myDeck);
    
        setGame(myPlayer,rivalPlayer);
    });
     //Set flip button
    document.getElementById("flip")?.addEventListener("click", () => {
        coinFlipper();
    });
    //Set Glow Button for testing purposes
    document.getElementById("GLOW")?.addEventListener("click", () => {
        // Call Glow Effect function here
        spaceOptionHighlighter(getPokemonPlacementOptions, myPlayer);
    })



    //Set Discard Buttons
      document.getElementById("AApDiscardButton")?.addEventListener("click", () => {
        myPlayer.knockout(myDeck);
    
        setGame(myPlayer,rivalPlayer);
    });

    // Set game button
    document.getElementById("setGame")?.addEventListener("click", () => {
        setGame(myPlayer,rivalPlayer);
    });

    //setPokemon From Hand
    const benchBoxCardButtons = document.querySelectorAll(".benchImgContainer");

    benchBoxCardButtons.forEach(button => {
        button.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        playPokemon(myPlayer, btn);
        setGame(myPlayer, rivalPlayer);
       
    });
    })
    /* document.getElementById("pb1Box")?.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        playPokemon(myPlayer, btn);
        
       
    }); */
    

});
