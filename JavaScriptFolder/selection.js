//need to create function that will highlight possible areas


function spaceOptionHighlighter(placementOptionFunction, player){
    //This function takes an array of the possible places we can set the cards and highlights them
    //let arrOfOptions =placementOptionFunction(player);
    //arrOfOption = [player.AA, player.b1];
    /* Now I would need to create Code to:
            - go through the array of options and produce the id associated with the options
            - Write code to grab those elements by their id 
            - manipulate the css to make a temporary glowing affect*/
    
    let elementArr = placementOptionFunction(player);
    elementArr.forEach((seat) => {
        let element = document.getElementById(`${seat}`);
        element.classList.add("glow");
    });
    
    console.log("Glow button clicked");
}   

// I will create two potential Call Back function. the first function will be for placing pokemon
//the second function should be used to set energy cards.

function getPokemonPlacementOptions(player){
    let arrOfOptions = [];
    if(player.AA.length===0){
        arrOfOptions.push(`${player.suffix}AACardBox`);
    }
    for(let i = 1; i <= 5; i ++){
        if(player[`b${i}`].length===0){
            arrOfOptions.push(`${player.suffix}b${i}Box`);
        }
    }
    //arrOfOptions.push("pb1Box");
    //will return arrOfOptions
    return arrOfOptions
}

function getEnergyPlacementOptions(player){
    let arrOfOptions = [];


    return arrOfOptions;
}

function resetGlows(){
    let elements =document.querySelectorAll(".glow");
    elements.forEach(element => {
        element.classList.remove("glow");
    });
}

export {spaceOptionHighlighter,resetGlows, getPokemonPlacementOptions};