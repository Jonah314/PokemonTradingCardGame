import { textBoxUpdate } from "./textBox.js";

function coinFlipper() {
    let flipResult = ""
        Math.random() < 0.5 ? flipResult = "Heads" : flipResult = "Tails";
        document.getElementById("coinFlipper").innerHTML=  "Flipping coin...";
        
        setTimeout(() => {
            document.getElementById("coinFlipper").innerHTML= flipResult;
            }, 1000);

        

        setTimeout(() => {
            textBoxUpdate(`The coin landed on ${flipResult}!`);
            }, 1000);
        return flipResult;


}

export {coinFlipper};