import CardBasic from "./CardBasic.js";

function setCounters(rival, player){
    setRivalCounters(rival);
    setPlayerCounters(player);

}

function applyCounters(pokemon, prefix) {
    const counters = pokemon.counters;

    // Build references automatically: rc1..rc5 or pc1..pc5
    const slots = [
        document.getElementById(`${prefix}1`),
        document.getElementById(`${prefix}2`),
        document.getElementById(`${prefix}3`),
        document.getElementById(`${prefix}4`),
        document.getElementById(`${prefix}5`)
    ];

    // Helper to reset all
    function clearAll() {
        slots.forEach(s => {
            s.innerHTML = "";
            s.className = "";
        });
    }

    // Start by clearing
    clearAll();

    switch (counters) {
        case 0:
            break;

        case 10:
            slots[0].innerHTML = "10";
            slots[0].className = "tenDot";
            break;

        case 20:
            slots[0].innerHTML = "10";
            slots[0].className = "tenDot";
            slots[1].innerHTML = "10";
            slots[1].className = "tenDot";
            break;

        case 30:
            slots[0].innerHTML = "10";
            slots[0].className = "tenDot";
            slots[1].innerHTML = "10";
            slots[1].className = "tenDot";
            slots[2].innerHTML = "10";
            slots[2].className = "tenDot";
            break;

        case 40:
            slots[0].innerHTML = "10";
            slots[0].className = "tenDot";
            slots[1].innerHTML = "10";
            slots[1].className = "tenDot";
            slots[2].innerHTML = "10";
            slots[2].className = "tenDot";
            slots[3].innerHTML = "10";
            slots[3].className = "tenDot";
            break;

        case 50:
            slots[0].innerHTML = "50";
            slots[0].className = "fiftyDot";
            break;

        case 60:
            slots[0].innerHTML = "50";
            slots[0].className = "fiftyDot";
            slots[1].innerHTML = "10";
            slots[1].className = "tenDot";
            break;

        case 70:
            slots[0].innerHTML = "50";
            slots[0].className = "fiftyDot";
            slots[1].innerHTML = "10";
            slots[1].className = "tenDot";
            slots[2].innerHTML = "10";
            slots[2].className = "tenDot";
            break;

        case 80:
            slots[0].innerHTML = "50";
            slots[0].className = "fiftyDot";
            slots[1].innerHTML = "10";
            slots[1].className = "tenDot";
            slots[2].innerHTML = "10";
            slots[2].className = "tenDot";
            slots[3].innerHTML = "10";
            slots[3].className = "tenDot";
            break;

        case 90:
            slots[0].innerHTML = "50";
            slots[0].className = "fiftyDot";
            slots[1].innerHTML = "10";
            slots[1].className = "tenDot";
            slots[2].innerHTML = "10";
            slots[2].className = "tenDot";
            slots[3].innerHTML = "10";
            slots[3].className = "tenDot";
            slots[4].innerHTML = "10";
            slots[4].className = "tenDot";
            break;

        case 100:
            slots[0].innerHTML = "50";
            slots[0].className = "fiftyDot";
            slots[1].innerHTML = "50";
            slots[1].className = "fiftyDot";
            break;

        case 110:
            slots[0].innerHTML = "50";
            slots[0].className = "fiftyDot";
            slots[1].innerHTML = "50";
            slots[1].className = "fiftyDot";
            slots[2].innerHTML = "10";
            slots[2].className = "tenDot";
            break;

        case 120:
            slots[0].innerHTML = "50";
            slots[0].className = "fiftyDot";
            slots[1].innerHTML = "50";
            slots[1].className = "fiftyDot";
            slots[2].innerHTML = "10";
            slots[2].className = "tenDot";
            slots[3].innerHTML = "10";
            slots[3].className = "tenDot";
            break;

        default:
            // >120
            slots.forEach(s => {
                s.innerHTML = "X";
                s.className = "fiftyDot";
            });
            break;
    }
}


function setRivalCounters(pokemon) {
    applyCounters(pokemon, "rc");
}

function setPlayerCounters(pokemon) {
    applyCounters(pokemon, "pc");
}


export { setCounters, setRivalCounters, setPlayerCounters };